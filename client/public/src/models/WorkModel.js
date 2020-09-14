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

}

module.exports = new WorkModel();