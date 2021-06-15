import {BaseService} from '@ucd-lib/cork-app-utils';
import SocketStore from '../stores/SocketStore.js';
import {io} from 'socket.io-client';

class SocketService extends BaseService {

  constructor() {
    super();
    this.store = SocketStore;
  }

  connect() {
    if( this.socket ) return;
    this.socket = io();

    this.socket.on('connect', () => {
      console.log('update socket connected');
    });

    this.socket.on('message', (msg) => {
      console.log('msg', msg);
    });
  }
 
}

const service = new SocketService();
export default service;