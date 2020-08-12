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
    if( state.state === 'init' ) {
      await this.service.overview(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.overview[id];
  }

  async query(userQuery={}){
    let state = {state : CollectionStore.STATE.INIT};
    let queryObject = {...this.baseQueryObject, ...userQuery};
    let id = JSON.stringify(queryObject);

    if( state.state === 'init' ) {
      await this.service.query(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.queryById[id];
  }


    _formatPeople(people) {
      let out = []
      for (let person of people) {
        let p = {name: person.label ? person.label : "", title: ""};
        if (person.contactInfoFor && person.contactInfoFor.title) {
          if (Array.isArray(person.contactInfoFor.title)) {
            p.title = person.contactInfoFor.title.join(", ");
          }
          else {
            p.title = person.contactInfoFor.title;
          }

        }
        out.push(p)
      }
      return out;
    }

}

module.exports = new CollectionModel();
