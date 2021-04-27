const {BaseStore} = require('@ucd-lib/cork-app-utils');

class PersonStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byIndividual: {},
      pubsByIndividual: {},
      pubsByRequest: {},
      grantsByRequest: {},
      pubsOverview: {}
    };
    this.events = {};
  }

  setIndividualLoading(id, request) {
    this._setIndividualState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setIndividualLoaded(id, payload) {
    this._setIndividualState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setIndividualError(id, error) {
    this._setIndividualState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setIndividualState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.byIndividual[state.id] = state;
  }

  setPubsOverviewLoading(id, request) {
    this._setPubsOverviewState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setPubsOverviewLoaded(id, payload) {
    this._setPubsOverviewState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setPubsOverviewError(id, error) {
    this._setPubsOverviewState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setPubsOverviewState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.pubsOverview[state.id] = state;
  }

  setPubsLoading(id, request) {
    this._setPubsState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setPubsLoaded(id, payload) {
    this._setPubsState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setPubsError(id, error) {
    this._setPubsState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setPubsState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.pubsByRequest[state.id] = state;
  }

  setGrantsLoading(id, request) {
    this._setGrantsState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setGrantsLoaded(id, payload) {
    this._setGrantsState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setGrantsError(id, error) {
    this._setGrantsState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setGrantsState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.grantsByRequest[state.id] = state;
  }

}

module.exports = new PersonStore();
