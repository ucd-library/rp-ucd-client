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
      setTimeout(() => {
        this.store.setSocketMessageLoaded({connected: true});
      }, 3000); 
      console.log('update socket connected');
    });

    this.socket.on('message', (msg) => {
      console.log(msg);
      this.store.setSocketMessageLoaded(msg);
    });
    this.socket.on('admin-message', (msg) => {
      this.store.setSocketMessageLoaded(msg);
    });

  }
 
}

const service = new SocketService();
export default service;