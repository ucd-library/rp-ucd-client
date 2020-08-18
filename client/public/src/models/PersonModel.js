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

  async getPublications(id, offset=0) {
    let searchObject = {};
    let personid = id;
    if (offset > 0) {
      id += `-o${offset}`;
      searchObject.offset = offset;
    }
    searchObject.facets = {"hasSubjectArea.label": {"type": "facet"}};
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPublications(personid, searchObject, id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }

    // Add to individual's master pub cache if getting more...
    if (offset > 0) {
      this.store.data.pubsByIndividual[personid].payload.results = [...this.store.data.pubsByIndividual[personid].payload.results,
                                                                    ...this.store.data.pubsByIndividual[id].payload.results]
    }
    return this.store.data.pubsByIndividual[personid];
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
