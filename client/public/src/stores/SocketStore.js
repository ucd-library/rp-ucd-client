import {BaseStore} from '@ucd-lib/cork-app-utils';

class SocketStore extends BaseStore {

  constructor() {
    super();

    this.data = {};
    this.events = {};
  }

}

const store = new SocketStore();
export default store;