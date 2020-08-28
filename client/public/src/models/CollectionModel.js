const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionService = require('../services/CollectionService');
const CollectionStore = require('../stores/CollectionStore');

class CollectionModel extends BaseModel {

  constructor() {
    super();

    this.store = CollectionStore;
    this.service = CollectionService;
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.mainFacets = [{id: 'people', text: 'People',
                        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.jsonldContext + ":person"]}}},
                       {id: 'organizations', text: 'Organizations', baseFilter: {}, disabled: true},
                       {id: 'works', text: 'Works',  baseFilter: {}, disabled: true}];
    this.currentQuery = {};
    this.subFacets = {
      people: [
        {id: 'faculty', es: 'vivo:FacultyMember', text: 'Faculty Member', baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:FacultyMember"]}}}, 
        {id: 'non-academic', es: 'vivo:NonAcademic', text: 'Non Academic', baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:NonAcademic"]}}}
      ]
    }
    this.aggs = {people : {"@type": {"type" : "facet"}} };
    this.pgPer = 8;

    this.register('CollectionModel');
  }

  async overview(id, kwargs={}) {
    let state = {state : CollectionStore.STATE.INIT};
    let queryObject = this.getBaseQueryObject();

    if (id == "facets") {
      queryObject.facets["@type"] = {"type" : "facet"};
      queryObject.limit = 0;
    }
    else if (id == "randomPeople") {
      queryObject.filters["@type"] = {type: 'keyword', op: "and", value: [this.jsonldContext + ":person"]};
      queryObject.limit = 4;
      if (kwargs.limit) {
        queryObject.limit = kwargs.limit;
      }
      if (kwargs.total) {
        let randomOffset = Math.floor(Math.random() * (kwargs.total - queryObject.limit));
        queryObject.offset = randomOffset;
      }
    }
    else if (id == "peopleAggs") {
      queryObject.filters["@type"] = {type: 'keyword', op: "and", value: [this.jsonldContext + ":person"]};
      queryObject.limit = 0;
      queryObject.facets["@type"] = {"type" : "facet"};
    }

    if( state.state === 'init' ) {
      await this.service.overview(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.overview[id];
  }

  async query(userQuery={}){
    let state = {state : CollectionStore.STATE.INIT};

    let queryObject = this._constructQueryObject(userQuery);
    let id = this._makeQueryId(queryObject);

    if( state.state === 'init' ) {
      await this.service.query(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.queryById[id];
  }

  async azAggQuery(mainFacet, subFacet){
    let state = {state : CollectionStore.STATE.INIT};
    let id = `${mainFacet}__${subFacet}`;
    let filters = [];
    for (let f of this.mainFacets) {
      if (f.id == mainFacet) {
        filters.push(f.baseFilter)
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
    let q = this.getBaseQueryObject();
    q.limit = 0;
    q.filters = this._combineFiltersArray(filters);

    // need logic works and orgs
    q.facets = {"hasContactInfo.familyName.firstLetter" : {"type": "facet"}};

    if( state.state === 'init' ) {
      await this.service.azAgg(id, q);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.azAggs[id];
  }

  getAzBaseFilter(mainFacet) {
    if (!this.mainFacets.map(e => e.id).includes(mainFacet)) {
      return;
    }
    if (mainFacet == 'people') {
      return {key: "hasContactInfo.familyName.firstLetter", value: {"type": "keyword", "op": "and", "value": []}};
    }

  }

  getBaseQueryObject() {
    return {offset: 0,
      limit: 8,
      sort: [{}],
      filters: {},
      facets: {}
    };
  }

  _makeQueryId(q){
    let id = {};
    for (let key in q) {
      if (key == 'facets') {
        continue;
      }
      id[key] = q[key]
    }
      return JSON.stringify(id);
  }

  _getSubFacets(mainFacet, payload, query) {
    let mainFacets = this.mainFacets.map(f => f.id);
    let subFacets = [];
    if (!mainFacets.includes(mainFacet) || !payload || !query) return subFacets;
    if (Object.keys(query).length == 0) {
      return subFacets;
    }
    let elementQuery = {...query};

    let dataTotal = 0;
    if (typeof payload.total === "number") dataTotal = payload.total;

    if (mainFacet == 'people') {
      subFacets.push({id: "none", text: `All (${dataTotal})`, href: this.constructUrl(elementQuery, ['subFacet', 'page', 'az'])})
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
      for (let f of this.subFacets.people) {
        let facet = {...f};
        elementQuery.subFacet = facet.id;
        facet.href = this.constructUrl(elementQuery, ['page', 'az']);
        if (Object.keys(counts).includes(facet.es)){
          facet.text += ` (${counts[facet.es]})`;
        }
        else {
          facet.text += " (0)";
          facet.disabled = true;
        }
        subFacets.push(facet);
      }

    }
    console.log('subfacets', subFacets);

    return subFacets;

  }

  _constructQueryObject(query) {
    let userQuery = JSON.parse(JSON.stringify(query));
    let queryObject = this.getBaseQueryObject();
    if (Object.keys(userQuery).length == 0) {
      return queryObject;
    }

    // merge filters into a single object
    queryObject.filters = {...queryObject.filters, ...this._combineFiltersArray(userQuery.filters)}


    // a-z filters
    if (userQuery.azSelected && userQuery.azSelected.toLowerCase() != 'all') {
      let azFilter = this.getAzBaseFilter(userQuery.mainFacet);
      if (azFilter) {
        azFilter.value.value = [userQuery.azSelected];
        queryObject.filters[azFilter.key]= azFilter.value;
      }
      
    }

    // handle search query
    if (userQuery.textQuery) {
      queryObject.text = userQuery.textQuery;
      queryObject.textFields =   ["label.text"];

      // get aggs for search query
      if ( Object.keys(this.aggs).includes(userQuery.mainFacet)) {
        queryObject.facets = this.aggs[userQuery.mainFacet];
      }
    }
    // asset browsing pages
    else {
      queryObject.sort = [{"label": "asc"}];
      // queryObject.facets = {"hasContactInfo.familyName.firstLetter" : {"type": "facet"}}; MOVED TO OWN QUERY
    }

    // compute offset if pagination parameter is sent
    if (userQuery.offset) {
      queryObject.offset = userQuery.offset;
    }
    else if (userQuery.pgCurrent) {
      let pg = this.pgPer;
      if (userQuery.pgPer) pg = userQuery.pgPer;
      queryObject.offset = userQuery.pgCurrent * pg - pg;
    }

    return queryObject
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
    /*
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
    */
    return filtersCombined;
  }

  constructUrl(elementQuery, ignoreArgs=[]) {
    let path = "";

    // base path
    if (elementQuery.textQuery) {
      path += "/search";
    }

    if (elementQuery.mainFacet == "none") {
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


  _formatPeople(people) {
    let out = []
    for (let person of people) {
      let p = this._formatPerson(person);
      out.push(p)
    }
    return out;
  }

  _formatPerson(person) {
    let p = {name: person.label ? person.label : "", title: "", "@id": person['@id']};
    if (person.hasContactInfo && person.hasContactInfo.title) {
      if (Array.isArray(person.hasContactInfo.title)) {
        p.title = person.hasContactInfo.title.join(", ");
      }
      else {
        p.title = person.hasContactInfo.title;
      }
    }
    p['id'] = person['@id'].replace(this.jsonldContext + ":", "");
    return p;

  }

  _formatAgg(agg, prefix, splitCamel=true) {
    if (prefix && agg.startsWith(prefix)) {
      agg = agg.slice(prefix.length,);
    }
    if (splitCamel) {
      agg = [...agg];
      for (let i = 0; i < agg.length; i++) {
        if (i == 0) {
          continue;
        }
        if (agg[i] == agg[i].toUpperCase()) {
          agg[i] = " " + agg[i];
        }
      }
      agg = agg.join("");
    }
    return agg;
  }

}

module.exports = new CollectionModel();
