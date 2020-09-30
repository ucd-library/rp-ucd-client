const {BaseModel} = require('@ucd-lib/cork-app-utils');
const WorkService = require('../services/WorkService');
const WorkStore = require('../stores/WorkStore');

class WorkModel extends BaseModel {

  constructor() {
    super();

    this.store = WorkStore;
    this.service = WorkService;
      
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


}

module.exports = new WorkModel();