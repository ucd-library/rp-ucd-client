const {BaseStore} = require('@ucd-lib/cork-app-utils');

class WorkStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byWork : {}
    };
    this.events = {};
  }

  setWorkLoading(id, request) {
    this._setWorkState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setWorkLoaded(id, payload) {
    this._setWorkState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setWorkError(id, error) {
    this._setWorkState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setWorkState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.byWork[state.id] = state;
  }

}

module.exports = new WorkStore();