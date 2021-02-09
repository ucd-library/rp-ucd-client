const {BaseStore} = require('@ucd-lib/cork-app-utils');

class WorkStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byWork : {},
      workAuthors: {}
    };
    this.events = {};
  } 

  /**
   * @method setWorkLoading
   * @description sets the state for the loading work
   * 
   * @param {String} id work
   * @param {Promise} request 
   */
  setWorkLoading(id, request) {
    this._setWorkState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setWorkLoaded
   * @description sets the state for the loaded work
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setWorkLoaded(id, payload) {
    this._setWorkState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setWorkError
   * @description sets the state for the error work
   * 
   * @param {String} id work
   * @param {Status} error status 
   */
  setWorkError(id, error) {
    this._setWorkState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setWorkState
   * @description sets the state for work
   * 
   * @param {State} state work
   */
  _setWorkState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.byWork[state.id] = state;
  }

  /**
   * @method setAuthorLoading
   * @description sets the state for the loading author in work
   * 
   * @param {String} id work
   * @param {Promise} request 
   */
  setAuthorLoading(id, request) {
    this._setAuthorState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setAuthorLoaded
   * @description sets the state for the loaded author in work
   * 
   * @param {String} id work
   * @param {Object} payload 
   */
  setAuthorLoaded(id, payload) {
    this._setAuthorState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /** 
   * @method setAuthorError
   * @description sets the state for the error author in work
   * 
   * @param {String} id work
   * @param {Status} error status 
   */
  setAuthorError(id, error) {
    this._setAuthorState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setAuthorState
   * @description sets the state for author in work
   * 
   * @param {State} state work
   */
  _setAuthorState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.workAuthors[state.id] = state;
  }

}

module.exports = new WorkStore();