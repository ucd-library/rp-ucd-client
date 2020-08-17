const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');

class PersonModel extends BaseModel {

  constructor() {
    super();

    this.store = PersonStore;
    this.service = PersonService;

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

  async getPublications(id, searchObject={}) {
    // let ogid = id;
    // if searchObject.offset id += ("_" + searchObject.offset)
    searchObject.facets = {"hasSubjectArea.label": {"type": "facet"}};
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPublications(id, searchObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }

    // Add to individual's master pub cache if getting more...
    // this.store.data.PubsByIndividual[id].payload.results.push(this.store.data.PubsByIndividual[id])
    // delete this.store.data.PubsByIndividual[id]
    // return this.store.data.PubsByIndividual[ogid]
    return this.store.data.pubsByIndividual[id];
  }

}

module.exports = new PersonModel();
