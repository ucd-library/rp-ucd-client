import {BaseModel} from '@ucd-lib/cork-app-utils';
import SocketService from '../services/SocketService.js';
import SocketStore from '../stores/SocketStore.js';


class SocketModel extends BaseModel {

  constructor() {
    super();

    this.store = SocketStore;
    this.service = SocketService;
      
    if( APP_CONFIG.user ) {
      this.service.connect();
    }

    this.register('SocketModel');
  }

}

const model = new SocketModel();
export default model;