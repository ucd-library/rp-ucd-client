import {BaseModel} from '@ucd-lib/cork-app-utils';
import SocketService from '../services/SocketService.js';
import SocketStore from '../stores/SocketStore.js';
import config from '../config.js';

/**
 * @class SocketModel
 * @description powers the last socket model messages
 */
class SocketModel extends BaseModel {

  constructor() {
    super();

    this.store = SocketStore;
    this.service = SocketService;
      
    if( config.user ) {
      this.service.connect();
    }

    this.register('SocketModel');
  }

  /**
   * @method getLastMessage
   * @description get the last message from the Kafka storing message.
   * 
   * @returns {Object}
   */
  async getLastMessage() {
    let state = this.store.data.socketLastMessage;
    
    return state;
  }
}

const model = new SocketModel();
export default model; 