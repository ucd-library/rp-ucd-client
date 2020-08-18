const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');

class PersonModel extends BaseModel {

  constructor() {
    super();

    this.store = PersonStore;
    this.service = PersonService;
    this.sections = [{text: 'About', id: 'about', disabled: false},
                     {text: 'Publications', id: 'publications', disabled: false}
                    ];
    this.individualId = "";

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

  getSections() {
    let sections = [{id:"all", text: "All Info", href: `/individual/${this.individualId}`, index: 0}];
    for (let section of this.sections) {
      section.href = `/individual/${this.individualId}/${section.id}`
      sections.push(section);
    }
    return sections;
  }

  getActiveSection(id) {
    let i = 0;
    let sections = this.getSections();
    for (let section of sections) {
      section.index = i;
      if (id == section.id) {
        return section;
      }
      i++
    }
    return sections[0];
  }

}

module.exports = new PersonModel();
