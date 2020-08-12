const {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      queryById : {},
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

  setQueryLoading(id, request) {
    this._setQueryState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setQueryLoaded(id, payload) {
    this._setQueryState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setQueryError(id, error) {
    this._setQueryState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setQueryState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.queryById[state.id] = state;
  }

}

module.exports = new CollectionStore();
