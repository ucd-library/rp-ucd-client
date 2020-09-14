const {BaseService} = require('@ucd-lib/cork-app-utils');
const WorkStore = require('../stores/WorkStore');

class WorkService extends BaseService {

  constructor() {
    super();
    this.store = WorkStore;
  }

}

module.exports = new WorkService();