const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionService = require('../services/CollectionService');
const CollectionStore = require('../stores/CollectionStore');

class CollectionModel extends BaseModel {

  constructor() {
    super();

    this.store = CollectionStore;
    this.service = CollectionService;
    this.jsonldContext = APP_CONFIG.data.jsonldContext;

    this.baseQueryObject = {offset: 0,
                            limit: 8,
                            sort: [{}],
                            filters: {},
                            facets: {}
                          }
    this.mainFacets = [{id: 'people', text: 'People',
                        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.jsonldContext + ":person"]}}},
                       {id: 'organizations', text: 'Organizations', baseFilter: {}, disabled: true},
                       {id: 'works', text: 'Works',  baseFilter: {}, disabled: true}];
    this.currentQuery = {};
    this.pgPer = 8;

    this.register('CollectionModel');
  }

  async overview(id, kwargs={}) {
    let state = {state : CollectionStore.STATE.INIT};
    let queryObject = {...this.baseQueryObject};

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
    let id = JSON.stringify(queryObject);

    if( state.state === 'init' ) {
      await this.service.query(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.queryById[id];
  }

  _getSubFacets(mainFacet, aggData, indexStart=1) {
    let mainFacets = this.mainFacets.map(f => f.id);
    if (!mainFacets.includes(mainFacet) || !aggData) return [];

    if (mainFacet == 'people') {
      
    }

    return [];

  }

  _constructQueryObject(userQuery={}) {
    let queryObject = {...this.baseQueryObject};
    if (Object.keys(userQuery).length == 0) {
      return queryObject;
    }

    // merge filters into a single object
    if ( Array.isArray(userQuery.filters) ) {
      for (let f of userQuery.filters) {
        if (typeof f != 'object' || Array.isArray(f)) {
          continue;
        }
        for (let filterKey in f) {
          if (!queryObject.filters[filterKey]) {
            queryObject.filters[filterKey] = f[filterKey];
            continue;
          }
          if (Array.isArray(f[filterKey].name)) {
            queryObject.filters[filterKey].name.push(...f[filterKey].name)
          }
        }
      }
    }
    else if (typeof userQuery.filters === 'object') {
      for (let filterKey in userQuery.filters) {
        if (!queryObject.filters[filterKey]) {
          queryObject.filters[filterKey] = userQuery.filters[filterKey];
          continue;
        }
        if (ArrayisArray(userQuery.filters[filterKey].name)) {
          queryObject.filters[filterKey].name.push(...userQuery.filters[filterKey].name)
        }
      }
    }

    // handle search query
    if (userQuery.s) {
      queryObject.text = userQuery.s;
      queryObject.textFields =   ["label.text"];
    }
    else {
      queryObject.sort = [{"label": "asc"}];
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

  constructUrl(elementQuery) {
    let path = "";

    // base path
    if (elementQuery.textQuery) {
      path += "/search";
    }

    if (elementQuery.mainFacet == "none") {
      path += "?"
    }
    else if (elementQuery.mainFacet) {
      path += `/${elementQuery.mainFacet}?`

    }
    else {
      return "#";
    }

    // pagination
    if (elementQuery.pgCurrent && elementQuery.pgCurrent > 1) {
      path += `page=${elementQuery.pgCurrent}`;
    }

    if (path.slice(-1) == "?") path = path.slice(0,-1) ;
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
