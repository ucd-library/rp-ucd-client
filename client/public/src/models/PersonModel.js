const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');

class PersonModel extends BaseModel {

  constructor() {
    super();

    this.store = PersonStore;
    this.service = PersonService;
    this.individualId = "";
    this.jsonContext = APP_CONFIG.data.jsonldContext;
    this.register('PersonModel');
  }

  async getIndividual(id) {
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getIndividual(id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.byIndividual[id];
  }

  async getPubOverview(personid) {
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPubsOverview(personid);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.pubsOverview[personid];
  }

  async getPublications(personid, pubTypeObject, offset) {

    // make sure master cache is set
    if (!this.store.data.pubsByIndividual[personid]) this.store.data.pubsByIndividual[personid] = {};
    if (!this.store.data.pubsByIndividual[personid][pubTypeObject.id]) this.store.data.pubsByIndividual[personid][pubTypeObject.id] = [];

    // make request for specified args
    let cacheObject = {personid: personid, pubType: pubTypeObject.id, offset: offset};
    let cacheId = JSON.stringify(cacheObject)
    let searchObject = {
      offset: offset,
      limit: 10,
      sort: [{"publicationDate": {"order" : "desc"}}],
      filters: {
        'Authorship.identifiers.@id': {"type": "keyword", "op" : "and", "value": [`${this.jsonContext}:${personid}`]},
        "@type": {"type": "keyword", "op": "and", "value": [`${pubTypeObject.es}`]}
      },
      facets: {}
    };

    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPublications(cacheId, searchObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }

    // link current request to master store and retrieve all pubs in master store
    if (!this.store.data.pubsByIndividual[personid][pubTypeObject.id].includes(cacheId)) {
      this.store.data.pubsByIndividual[personid][pubTypeObject.id].push(cacheId);
    }
    let masterStore = this.store.data.pubsByIndividual[personid][pubTypeObject.id];
    masterStore = masterStore.map(id => JSON.parse(id)).sort(function(a,b){return a.offset - b.offset});
    masterStore = masterStore.map(obj => this.store.data.pubsByRequest[JSON.stringify(obj)].payload.results).flat();
    return {masterStore: masterStore, request: this.store.data.pubsByRequest[cacheId]};
  }

  getPublicationTypes(){
    return [
      {id: 'article', es: 'bibo:AcademicArticle', label: 'Academic Articles'}
    ]
  }

}

module.exports = new PersonModel();
