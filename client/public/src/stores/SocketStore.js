import {BaseStore} from '@ucd-lib/cork-app-utils';

class SocketStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      socketLastMessage: null,
    };
    this.events = {
      SOCKET_LAST_MESSAGE: 'socket-message'
    };
  }


  /**
   * @method setSocketMessageLoaded
   * @description sets the state for the loaded socket
   * 
   * @param {Object} payload 
   */
  setSocketMessageLoaded(payload){
    this._setSocketMessageState(payload);
  }

  // /**
  //  * @method setSocketError
  //  * @description sets the state for the error socket
  //  * 
  //  * @param {String} id socket
  //  * @param {Status} error status 
  //  */
  // setSocketError(id, error){
  //   this._setSocketState({
  //     state: this.STATE.ERROR,
  //     id, error
  //   });
  // }

  /**
   * @method _setSocketMessageState
   * @description sets the state for socket
   * 
   * @param {State} state socket
   */
  _setSocketMessageState(state){
    this.data.socketLastMessage = state;
    this.emit(this.events.SOCKET_LAST_MESSAGE, state);
  }
}

const store = new SocketStore();
export default store;