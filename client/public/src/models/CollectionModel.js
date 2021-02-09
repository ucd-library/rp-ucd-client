const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionService = require('../services/CollectionService');
const CollectionStore = require('../stores/CollectionStore');
const PersonModel = require('./PersonModel');

// TODO: Ask Justin why we use require here
//import AssetDefs from "../lib/asset-definitions";
const AssetDefs = require('../lib/asset-defs');
const QueryUtils = require('../lib/query-utils');

/**
 * @class CollectionModel
 * @description Model for handling a collection of assets. i.e. search, browse.
 */
class CollectionModel extends BaseModel {

  constructor() {
    super();

    this.store = CollectionStore;
    this.service = CollectionService;
    this.personModel = PersonModel;
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.mainFacets = AssetDefs.getMainFacets();
    this.currentQuery = {};
    this.subFacets = AssetDefs.getSubFacets();
    this.aggs = {
      people : {"@type": {"type" : "facet"}},
      subject : {"@type": {"type" : "facet"}},
      works : {"@type": {"type" : "facet"}},
      organizations : {"@type": {"type" : "facet"}}
    };
    this.pgPer = 8;
    this.defaultIndices = ["label.text"];


    this.register('CollectionModel');
  }

  /**
   * @method overview
   * @description Runs basic aggregation queries for facet counts
   * @param {String} id - The type of aggregation to run
   * @param {Object} kwargs - Additional keyword arguments to pass to query
   * 
   * @returns {Promise}
   */
  async overview(id, kwargs={}) {

    let queryObject = QueryUtils.getBaseQueryObject();

    if (id == "facets") {
      queryObject.facets["@type"] = {"type" : "facet"};
      queryObject.limit = 0;
    }
    else if (id == "randomPeople") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('people').baseFilter);
      queryObject.limit = 4;
      if (kwargs.limit) {
        queryObject.limit = kwargs.limit;
      }
      if (kwargs.total) {
        let randomOffset = Math.floor(Math.random() * (kwargs.total - queryObject.limit));
        queryObject.offset = randomOffset;
      }
    }
    else if (id == "randomSubjects") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('subjects').baseFilter);
      queryObject.limit = 10;
      if (kwargs.limit) {
        queryObject.limit = kwargs.limit;
      }
      if (kwargs.total) {
        let randomOffset = Math.floor(Math.random() * (kwargs.total - queryObject.limit));
        queryObject.offset = randomOffset;
      }
    }
    else if (id == "peopleAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('people').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "worksAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('works').baseFilter);
      if (kwargs.subjectFilter) {
        queryObject.filters['hasSubjectArea.@id'] = {"type": "keyword", "op": "and", "value": [kwargs.subjectFilter]};
        id = `${id}?subject=${kwargs.subjectFilter}`;
      }
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "subjectsAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('subjects').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "organizationsAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('organizations').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }

    let current = this.store.data.overview[id];
    if( current && current.request ) {
      await current.request;
    } 
    else {
      await this.service.overview(id, queryObject);
    }
    return this.store.data.overview[id];
  }

  /**
   * @method query
   * @description Performs the primary search/browse query
   * @param {Object} elementQuery - A simplified query object that more closely matches the
   * 
   * @returns {Promise}
   */
  async query(elementQuery={}){


    let queryObject = this.convertElementQuery(elementQuery);
    //let queryObject = this._constructQueryObject(userQuery);
    let id = QueryUtils.getQueryId(queryObject);

    let current = this.store.data.queryById[id];
    if( current && current.request ) {
      await current.request;
    } 
    else {
      await this.service.query(id, queryObject);
    }
    return this.store.data.queryById[id];
  }


  async searchAggQuery(textQuery, mainFacet) {
    let state = {state : CollectionStore.STATE.INIT};
    let q = QueryUtils.getBaseQueryObject();
    let id = textQuery;
    q.limit = 0;
    q.text = textQuery;
    q.textFields = AssetDefs.getSearchFields(mainFacet);
    q.facets = {"@type": {"type" : "facet"}};

    if( state.state === 'init' ) {
      await this.service.searchAgg(id, q);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.searchAggs[id];

  }

  async azAggQuery(mainFacet, subFacet, subjectFilter=false){
    let state = {state : CollectionStore.STATE.INIT};
    let id = `${mainFacet}__${subFacet}`;
    let hasMainFacet = false;
    if ( subjectFilter ) id = `${id}__${subjectFilter}`;
    let filters = [];
    for (let f of this.mainFacets) {
      if (f.id == mainFacet) {
        filters.push(f.baseFilter);
        hasMainFacet = true;
        break;
      }
    }
    if (this.subFacets[mainFacet]) {
      for (let f of this.subFacets[mainFacet]) {
        if (f.id == subFacet) {
          filters.push(f.baseFilter)
          break;
        }
      }
    }
    if (subjectFilter) filters.push({'hasSubjectArea.@id': {"type": "keyword", "op": "and", "value": [subjectFilter]}});
    let q = QueryUtils.getBaseQueryObject();
    q.limit = 0;
    q.filters = this._combineFiltersArray(filters);

    q.facets = {};
    if (hasMainFacet) q.facets[AssetDefs.getAzAggField(mainFacet)] = {"type": "facet"};

    if( state.state === 'init' ) {
      await this.service.azAgg(id, q);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.azAggs[id];
  }

  _getSubFacets(mainFacet, payload, query) {
    let mainFacets = this.mainFacets.map(f => f.id);
    let subFacets = [];
    if ( !payload || !query) return subFacets;
    if (Object.keys(query).length == 0) {
      return subFacets;
    }
    let elementQuery = {...query};
    let counts = {};
    try {
      counts = payload.aggregations.facets['@type'];
      if (typeof counts != 'object' || Array.isArray(counts)) {
        throw "Subfacet counts not found.";
      }
    } catch (error) {
      console.warn(error);
      return subFacets;
    }

    let dataTotal = 0;
    if (typeof payload.total === "number") dataTotal = payload.total;
    for (let f of this.mainFacets) {
      if (f.id == mainFacet) {
        if (Object.keys(counts).includes(f.es)) {
          dataTotal = counts[f.es];
        }
        else {
          dataTotal = 0;
        }
        break;
      }
    }

    if (mainFacet == 'none') {
      subFacets.push({id: "none", ct: dataTotal, text: `All (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})
    }

    else if (mainFacet == 'people') {
      subFacets.push({id: "none", ct: dataTotal, text: `All People (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})

      for (let f of this.subFacets.people) {
        let facet = {...f};
        elementQuery.subFacet = facet.id;
        facet.href = this.constructUrl(elementQuery, ['page', 'az']);
        if (Object.keys(counts).includes(facet.es)){
          facet.text += ` (${counts[facet.es]})`;
          facet.ct = counts[facet.es];
        }
        else {
          facet.text += " (0)";
          facet.ct = 0;
          facet.disabled = true;
        }
        subFacets.push(facet);
      }
    }

    else if (mainFacet == 'works') {
      subFacets.push({id: "none", ct: dataTotal, text: `All Works (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})

      for (let f of this.subFacets.works) {
        let facet = {...f};
        elementQuery.subFacet = facet.id;
        facet.href = this.constructUrl(elementQuery, ['page', 'az']);
        if (Object.keys(counts).includes(facet.es)){
          facet.text += ` (${counts[facet.es]})`;
          facet.ct = counts[facet.es];
        }
        else {
          facet.text += " (0)";
          facet.ct = 0;
          facet.disabled = true;
        }
        subFacets.push(facet);
      }
    }

    else if (mainFacet == 'subjects') {
      subFacets.push({id: "none", text: `All Subjects (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})

      // for (let f of this.subFacets.subjects) {
      //   let facet = {...f};
      //   elementQuery.subFacet = facet.id;
      //   facet.href = this.constructUrl(elementQuery, ['page', 'az']);
      //   if (Object.keys(counts).includes(facet.es)){
      //     facet.text += ` (${counts[facet.es]})`;
      //   }
      //   else {
      //     facet.text += " (0)";
      //     facet.disabled = true;
      //   }
      //   subFacets.push(facet);
      // }
    }    

    else if (mainFacet == 'organizations') {
      subFacets.push({id: "none", ct: dataTotal, text: `All Organizations (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})

      for (let f of this.subFacets.organizations) {
        let facet = {...f};
        elementQuery.subFacet = facet.id;
        facet.href = this.constructUrl(elementQuery, ['page', 'az']);
        if (Object.keys(counts).includes(facet.es)){
          facet.text += ` (${counts[facet.es]})`;
          facet.ct = counts[facet.es];
        }
        else {
          facet.text += " (0)";
          facet.ct = 0;
          facet.disabled = true;
        }
        subFacets.push(facet);
      }
    }
    console.log('subfacets', subFacets);

    return subFacets;

  }

  _getMainFacets(payload, query) {
    let mainFacets = [];
    if (!payload || !query) return mainFacets;
    if (Object.keys(query).length == 0) {
      return mainFacets;
    }

    let elementQuery = {...query};

    // construct "all results" facet
    let hasResults = false;
    if (typeof payload.total === "number" && payload.total > 0) hasResults = true;
    let allResults = {id: 'none', text: 'All', href: `/search?s=${encodeURIComponent(elementQuery.textQuery)}`};
    if (!hasResults) {
      //allResults.disabled = true;
    }
    mainFacets.push(allResults);

    // make sure agg object is in payload
    let counts = {};
    try {
      counts = payload.aggregations.facets['@type'];
      if (typeof counts != 'object' || Array.isArray(counts)) {
        throw "Main facet counts not found.";
      }
    } catch (error) {
      console.warn(error);
      return mainFacets;
    }

    for (let facetOption of this.mainFacets) {
      facetOption = {...facetOption};
      facetOption.href = `/search/${facetOption.id}?s=${encodeURIComponent(elementQuery.textQuery)}`;
      if (!Object.keys(counts).includes(facetOption.es)) {
        facetOption.disabled = true;
      }
      mainFacets.push(facetOption);
    }

  console.log("mainfacets", mainFacets);
  return mainFacets

  }

  /**
   * @method convertElementQuery
   * @description Converts the simplified query object used by the html element into the format used by the API
   * @param {Object} elementQuery - Query object that mirrors element UI
   * 
   * @returns {Object} - Query object to be passed to API
   */
  convertElementQuery(elementQuery={}){
    let query = QueryUtils.getBaseQueryObject();
    if (Object.keys(elementQuery).length == 0) return query;

    // Apply primary facets
    let mainFacet = AssetDefs.facetExists(elementQuery.mainFacet) ? elementQuery.mainFacet : AssetDefs.defaultFacetId;
    let subFacet = AssetDefs.subFacetExists(mainFacet, elementQuery.subFacet) ? elementQuery.subFacet : AssetDefs.defaultFacetId;
    if ( mainFacet != AssetDefs.defaultFacetId && subFacet != AssetDefs.defaultFacetId ) {
      query.filters['@type'] = QueryUtils.getKeywordFilter([
        AssetDefs.getMainFacetById(mainFacet).es,
        AssetDefs.getSubFacetById(mainFacet, subFacet).es
      ]);
    }
    else if( mainFacet != AssetDefs.defaultFacetId ) {
      query.filters = AssetDefs.getMainFacetById(mainFacet).baseFilter;
    }

    // Apply subject filter
    if ( elementQuery.subjectFilter ) {
      query.filters[`${AssetDefs.getAreaField(mainFacet)}.@id`] = AssetDefs.getKeywordFilter(elementQuery.subjectFilter);
    }

    // Apply a-z filters
    let c1 = elementQuery.azSelected && elementQuery.azSelected.toLowerCase() != AssetDefs.defaultAzId;
    let c2 = mainFacet != AssetDefs.defaultFacetId;
    if (c1 && c2) query.filters[AssetDefs.getAzAggField(mainFacet)]= QueryUtils.getKeywordFilter(elementQuery.azSelected);

    // Apply search text query filter
    if (elementQuery.textQuery) {
      query.text = elementQuery.textQuery;
      query.textFields = AssetDefs.getSearchFields(mainFacet);

      // Apply faceting to query
      query.facets = QueryUtils.defaultTypeFacet;
    }
    // No search text query. Just sort by title
    else {
      query.sort = QueryUtils.defaultBrowseSort;
    }

    // Apply pagination
    if (elementQuery.offset) {
      query.offset = elementQuery.offset;
    }
    else if (elementQuery.pgCurrent) {
      let pg = this.pgPer;
      if (elementQuery.pgPer) pg = elementQuery.pgPer;
      query.offset = elementQuery.pgCurrent * pg - pg;
    }

    return query;
  }

  _combineFiltersArray(filters){
    filters = JSON.parse(JSON.stringify(filters));
    let filtersCombined = {};
    if ( Array.isArray(filters) ) {
      for (let f of filters) {
        if (typeof f != 'object' || Array.isArray(f)) {
          continue;
        }
        for (let filterKey in f) {
          if (!filtersCombined[filterKey]) {
            filtersCombined[filterKey] = f[filterKey];
            continue;
          }
          if (Array.isArray(f[filterKey].value)) {
            filtersCombined[filterKey].value.push(...f[filterKey].value)
          }
        }
      }
    }
    else if (typeof filters === 'object') {
      for (let filterKey in filters) {
        if (!filtersCombined[filterKey]) {
          filtersCombined[filterKey] = filters[filterKey];
          continue;
        }
        if (Array.isArray(filters[filterKey].value)) {
          filtersCombined[filterKey].value.push(...filters[filterKey].value)
        }
      }
    }

    return filtersCombined;
  }

  constructUrl(elementQuery, ignoreArgs=[]) {
    let path = "";

    // base path
    if (elementQuery.textQuery) {
      path += "/search";
    }

    if (elementQuery.mainFacet == "none" || !elementQuery.mainFacet) {
    }
    else if (elementQuery.mainFacet) {
      path += `/${elementQuery.mainFacet}`

    }
    else {
      return "#";
    }

    if (elementQuery.subFacet && elementQuery.subFacet != 'none' && !ignoreArgs.includes('subFacet')) {
      path += `/${elementQuery.subFacet}`;
    }

    // query args
    let args = [];

    // subject filter
    if (elementQuery.subjectFilter && !ignoreArgs.includes('subjectFilter')) {
      args.push(`subject=${elementQuery.subjectFilter}`);
    }

    // pagination
    if (elementQuery.pgCurrent && elementQuery.pgCurrent > 1 && !ignoreArgs.includes('page')) {
      args.push(`page=${elementQuery.pgCurrent}`);
    }

    // search query
    if (elementQuery.textQuery && !(ignoreArgs.includes('textQuery') || ignoreArgs.includes('s')) ) {
      args.push(`s=${elementQuery.textQuery}`);
    }

    // az
    if (elementQuery.azSelected && elementQuery.azSelected.toLowerCase() != 'all' && !(ignoreArgs.includes('az') || ignoreArgs.includes('azSelected')) ) {
      args.push(`az=${elementQuery.azSelected}`);
    }

    if (args.length > 0) path += "?";
    path += args.join('&');

    return path;
  }

}

module.exports = new CollectionModel();
