const {BaseModel} = require('@ucd-lib/cork-app-utils');
const WorkService = require('../services/WorkService');
const WorkStore = require('../stores/WorkStore');

const CollectionModel = require('./CollectionModel');

class WorkModel extends BaseModel {

  constructor() {
    super();

    this.store = WorkStore;
    this.service = WorkService;
    this.CollectionModel = CollectionModel;

    this.register('WorkModel');
  }

  async getWork(id) {
    let state = {state : WorkStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getWork(id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.byWork[id];
  }

  async getAuthors(workId, authors) {
    let state = {state : WorkStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getAuthors(workId, authors);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.workAuthors[workId];
  }

  getAdditionalLinks(work) {
    let output = [];
    if (typeof work !== 'object' ) return output;

    // ucd elinks
    try {
      let label = "UCD-eLinks";
      let url = 'https://ucelinks.cdlib.org/sfx_local?';
      if (work.doi) {
        output.push({label, url: `${url}id=doi:${work.doi}`});
      }
      else if (work.hasPublicationVenue) {
        output.push({label, url: `${url}issn=${work.hasPublicationVenue.issn}&spage=${work.pageStart}&volume=${work.volume}&issue=${work.issue}&date=${work.publicationDate}`});
      }

    } catch (error) {}

    // publisher page
    try {
      let label = "Publisher Page";
      let url = "http://doi.org/";
      if (work.doi) output.push({label, url: `${url}${work.doi}`})
    } catch (error) {}

    return output
  }

  getWorkTypes(){
    return this.CollectionModel.subFacets.works;
  }


}

module.exports = new WorkModel();
