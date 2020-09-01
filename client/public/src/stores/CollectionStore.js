const {BaseStore} = require('@ucd-lib/cork-app-utils');

class CollectionStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      queryById : {},
      azAggs : {},
      searchAggs: {},
      overview : {}
    };
    this.events = {};
  }

  setAzAggsLoading(id, request) {
    this._setAzAggsState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setAzAggsLoaded(id, payload) {
    this._setAzAggsState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setAzAggsError(id, error) {
    this._setAzAggsState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setAzAggsState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.azAggs[state.id] = state;
  }

  setSearchAggsLoading(id, request) {
    this._setSearchAggsState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setSearchAggsLoaded(id, payload) {
    this._setSearchAggsState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setSearchAggsError(id, error) {
    this._setSearchAggsState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setSearchAggsState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.searchAggs[state.id] = state;
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
