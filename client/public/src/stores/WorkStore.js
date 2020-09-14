const {BaseStore} = require('@ucd-lib/cork-app-utils');

class WorkStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

module.exports = new WorkStore();