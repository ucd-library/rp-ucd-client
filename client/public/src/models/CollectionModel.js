const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionService = require('../services/CollectionService');
const CollectionStore = require('../stores/CollectionStore');
const PersonModel = require('./PersonModel');

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
    this.mainFacets = AssetDefs.getMainFacets();
    this.currentQuery = {};
    this.subFacets = AssetDefs.getSubFacets();
    this.pgPer = 8;


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
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('concepts').baseFilter);
      queryObject.limit = 10;
      if (kwargs.limit) {
        queryObject.limit = kwargs.limit;
      }
      if (kwargs.total) {
        let randomOffset = Math.floor(Math.random() * (kwargs.total - queryObject.limit));
        queryObject.offset = randomOffset;
      }
    }
    else if (id == "randomGrants") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('grants').baseFilter);
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
        queryObject.filters[AssetDefs.getAreaField('works')] = QueryUtils.getKeywordFilter(
          QueryUtils.appendIdPrefix(kwargs.subjectFilter)
        );
        id = `${id}?subject=${kwargs.subjectFilter}`;
      }
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "subjectsAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('concepts').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "organizationsAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('organizations').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }
    else if (id == "grantsAggs") {
      Object.assign(queryObject.filters, AssetDefs.getMainFacetById('grants').baseFilter);
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }

    let state = this.store.data.overview[id];
    try {
      if( state && state.request ) {
        await state.request;
      } 
      else {
        await this.service.overview(id, queryObject);
      }
    } catch (error) {
      // error is recorded in store
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
    // in no type specified, use our default types
    if( !queryObject.filters['@type'] ) {
      queryObject.filters['@type'] = QueryUtils.getKeywordFilter(APP_CONFIG.defaultTypes, 'or');
    }

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


  /**
   * @method searchAggQuery
   * @description Performs asset type aggregation for a text query
   * @param {String} textQuery - A search phrase
   * @param {String} mainFacet  - An optional primary facet id
   * 
   * @returns {Promise}
   */
  async searchAggQuery(textQuery, mainFacet) {
    let q = QueryUtils.getBaseQueryObject();
    let id = textQuery;
    q.limit = 0;
    q.text = textQuery;
    q.textFields = AssetDefs.getSearchFields(mainFacet);
    q.facets = QueryUtils.defaultTypeFacet;

    let current = this.store.data.searchAggs[id];
    if ( current && current.request ) {
      await current.request;
    }
    else {
      await this.service.searchAgg(id, q);
    }
    return this.store.data.searchAggs[id];
  }

  /**
   * @method azAggQuery
   * @description Performs first-letter aggregation
   * @param {String} mainFacet - Optional primary facet id
   * @param {String} subFacet - Optional subfacet id
   * @param {String} subjectFilter - Optional subject id
   * 
   * @returns {Promise}
   */
  async azAggQuery(mainFacet, subFacet, subjectFilter){
    let q = QueryUtils.getBaseQueryObject();
    q.limit = 0;
    q.facets[AssetDefs.getAzAggField(mainFacet)] = {"type": "facet"};

    // Construct cache id
    let id = `${mainFacet}__${subFacet}`;
    if ( subjectFilter ) id = `${id}__${subjectFilter}`;

    // Filter by facets if applicable
    let mainFacetType = AssetDefs.getMainFacetById(mainFacet).es;
    let subFacetType = AssetDefs.getSubFacetById(mainFacet, subFacet).es;
    if ( subFacetType ) {
      q.filters['@type'] = QueryUtils.getKeywordFilter([mainFacetType, subFacetType]);
    }
    else if( mainFacetType ) {
      q.filters['@type'] = QueryUtils.getKeywordFilter(mainFacetType);
    }

    // Filter by subject id if applicable
    if (subjectFilter) {
      q.filters[AssetDefs.getAreaField(mainFacet)] = QueryUtils.getKeywordFilter(
        QueryUtils.appendIdPrefix(subjectFilter)
      );
    }

    let current = this.store.data.azAggs[id];
    if ( current && current.request ) {
      await current.request;
    }
    else {
      await this.service.azAgg(id, q);
    }
    return this.store.data.azAggs[id];
  }

  /**
   * @method _getSubFacets
   * @description Returns a list of subfacets based on current query.
   * Used for displaying menus and such.
   * @param {Object} payload - Payload API query response
   * @param {Object} query - Current query
   * 
   * @returns {Object[]}
   */
  _getSubFacets(payload, query) {
    let mainFacet = query.mainFacet ? query.mainFacet : AssetDefs.defaultFacetId;
    let subFacets = [];
    
    // Return empty array if missing params
    if ( !payload || !query) return subFacets;
    if (Object.keys(query).length == 0) {
      return subFacets;
    }

    // Extract type aggregation counts from payload
    let counts = {};
    try {
      counts = payload.aggregations.facets['@type'];
      if (typeof counts != 'object' || Array.isArray(counts)) {
        throw "Subfacet aggregation counts not found in payload";
      }
    } catch (error) {
      console.warn(error);
      return subFacets;
    }

    // Extract total response count from payload
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

    // Construct subfacet object
    let elementQuery = {...query};
    let urlParamsToIgnore = ['subFacet', 'page', 'az'];
    if (mainFacet == AssetDefs.defaultFacetId) {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        ct: dataTotal, 
        text: `All (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });
    }

    else if (mainFacet == 'people') {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        ct: dataTotal, 
        text: `All People (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });

      for (let facet of AssetDefs.getSubFacetsByMainId('people')) {
        subFacets.push(this._fmtSubFacetMenuObject(facet, counts, elementQuery));
      }
    }

    else if (mainFacet == 'works') {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        ct: dataTotal, 
        text: `All Works (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });

      for (let facet of AssetDefs.getSubFacetsByMainId('works')) {
        subFacets.push(this._fmtSubFacetMenuObject(facet, counts, elementQuery));
      }
    }

    else if (mainFacet == 'concepts') {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        text: `All Subjects (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });
    }    

    else if (mainFacet == 'grants') {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        ct: dataTotal, 
        text: `All Grants (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });

      for (let facet of AssetDefs.getSubFacetsByMainId('grants')) {
        subFacets.push(this._fmtSubFacetMenuObject(facet, counts, elementQuery));
      }
    }

    else if (mainFacet == 'organizations') {
      subFacets.push({
        id: AssetDefs.defaultFacetId, 
        ct: dataTotal, 
        text: `All Organizations (${dataTotal})`, 
        href: this.constructUrl(elementQuery, urlParamsToIgnore)
      });

      for (let facet of AssetDefs.getSubFacetsByMainId('organizations')) {
        subFacets.push(this._fmtSubFacetMenuObject(facet, counts, elementQuery));
      }
    }
    if (APP_CONFIG.verbose) console.log('Subfacet menu object:', subFacets);
    return subFacets;

  }

  /**
   * @method _getMainFacets
   * @description Returns a list of primary facets based on current query.
   * Used for displaying menus and such.
   * @param {Object} payload - Payload API query response
   * @param {Object} query - Current query
   * 
   * @returns {Object[]}
   */
  _getMainFacets(payload, query) {
    let mainFacets = [];

    // Return empty array if missing params
    if (!payload || !query) return mainFacets;
    if (Object.keys(query).length == 0) return mainFacets;

    let elementQuery = {...query};

    // construct "all results" facet
    let allResults = {
      id: AssetDefs.defaultFacetId, 
      text: 'All', 
      href: `/search?s=${encodeURIComponent(elementQuery.textQuery)}`
    };
    mainFacets.push(allResults);

    // Extract type aggregation counts from payload
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

    // Construct output
    for (let facetOption of AssetDefs.getMainFacets()) {
      facetOption.href = `/search/${facetOption.id}?s=${encodeURIComponent(elementQuery.textQuery)}`;
      if (!Object.keys(counts).includes(facetOption.es)) facetOption.disabled = true;
      mainFacets.push(facetOption);
    }
    console.log("MainFacet:", mainFacets);
    if (APP_CONFIG.verbose) console.log("Main facet menu:", mainFacets);
    return mainFacets;

  }

  /**
   * @method _fmtSubFacetMenuObject
   * @description Utility method for formatting a subfacet for menu usage.
   * @param {Object} facet - A subfacet objet
   * @param {Object} counts - Type aggregations from a query payload
   * @param {Object} elementQuery - Current query so we can construct links
   * 
   * @returns {Object}
   */
  _fmtSubFacetMenuObject(facet, counts, elementQuery) {
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
    return facet;
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
      query.filters[AssetDefs.getAreaField(mainFacet)] = QueryUtils.getKeywordFilter(
        QueryUtils.appendIdPrefix(elementQuery.subjectFilter)
      );
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
    // No search text query. Just sort by label
    else {
      let s = {};
      s[AssetDefs.getBrowseSortField(mainFacet)] = 'asc';
      query.sort = [s];
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

  /**
   * @method constructUrl
   * @description Constructs url based on query object
   * @param {Object} q - Simplified query object used by element
   * @param {String[]} ignoreArgs - Array of query parameters to ignore when constructing url
   * 
   * @returns {String}
   */
  constructUrl(q, ignoreArgs=[]) {
    
    // URL Path
    let path = "";
    if ( q.textQuery ) path += "/search";
    if ( AssetDefs.facetExists(q.mainFacet) ) path += `/${q.mainFacet}`;
    if ( AssetDefs.subFacetExists(q.mainFacet, q.subFacet) && !ignoreArgs.includes('subFacet') ) path += `/${q.subFacet}`;

    // query args
    let args = [];

    // subject filter
    if (q.subjectFilter && !ignoreArgs.includes('subjectFilter')) {
      args.push(`subject=${encodeURIComponent(q.subjectFilter)}`);
    }

    // pagination
    if (q.pgCurrent && q.pgCurrent > 1 && !ignoreArgs.includes('page')) {
      args.push(`page=${q.pgCurrent}`);
    }

    // search query
    if (q.textQuery && !(ignoreArgs.includes('textQuery') || ignoreArgs.includes('s')) ) {
      args.push(`s=${encodeURIComponent(q.textQuery)}`);
    }

    // az
    if (q.azSelected && q.azSelected.toLowerCase() != 'all' && !(ignoreArgs.includes('az') || ignoreArgs.includes('azSelected')) ) {
      args.push(`az=${q.azSelected}`);
    }

    if (args.length > 0) path += "?";
    path += args.join('&');

    return path;
  }

}

module.exports = new CollectionModel();
