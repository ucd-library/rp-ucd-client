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
    this.facets = {};
    this.textQuery = "";

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
    let queryObject = {...this._constructQueryObject(), ...userQuery};
    if (queryObject.s) {
      delete queryObject.s;
    }
    let id = JSON.stringify(queryObject);

    if( state.state === 'init' ) {
      await this.service.query(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.queryById[id];
  }

  _constructQueryObject() {
    let queryObject = {...this.baseQueryObject};
    if (this.textQuery) {
      queryObject.text = this.textQuery;
      queryObject.textFields =   ["label.text"];
    }

    return queryObject
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
