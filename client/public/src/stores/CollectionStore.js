const {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      overview : {}
    };
    this.events = {};
  }

  setOverviewLoading(id, request) {
    this._setOverviewState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setOverviewLoaded(id, payload) {
    this._setOverviewState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setOverviewError(id, error) {
    this._setOverviewState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setOverviewState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.overview[state.id] = state;
  }

}

module.exports = new CollectionStore();
