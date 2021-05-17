const {BaseStore} = require('@ucd-lib/cork-app-utils');

class GrantStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byGrant : {},
      grantContributors: {}
    };
    this.events = {};
  } 

  /**
   * @method setGrantLoading
   * @description sets the state for the loading work
   * 
   * @param {String} id grant
   * @param {Promise} request 
   */
  setGrantLoading(id, request) {
    this._setGrantState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setGrantLoaded
   * @description sets the state for the loaded work
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setGrantLoaded(id, payload) {
    this._setGrantState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setGrantError
   * @description sets the state for the error work
   * 
   * @param {String} id grant
   * @param {Status} error status 
   */
  setGrantError(id, error) {
    this._setGrantState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setGrantState
   * @description sets the state for grant
   * 
   * @param {State} state grant
   */
  _setGrantState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.byGrant[state.id] = state;
  }

  /**
   * @method setAuthorLoading
   * @description sets the state for the loading author in grant
   * 
   * @param {String} id grant
   * @param {Promise} request 
   */
  setContributorLoading(id, request) {
    this._setContributorState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setAuthorLoaded
   * @description sets the state for the loaded author in work
   * 
   * @param {String} id grant
   * @param {Object} payload 
   */
  setContributorLoaded(id, payload) {
    this._setContributorState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /** 
   * @method setAuthorError
   * @description sets the state for the error author in grant
   * 
   * @param {String} id grant
   * @param {Status} error status 
   */
  setContributorError(id, error) {
    this._setContributorState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setAuthorState
   * @description sets the state for author in grant
   * 
   * @param {State} state grant
   */
  _setContributorState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.grantContributors[state.id] = state;
  }

}

module.exports = new GrantStore();