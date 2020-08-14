const {BaseStore} = require('@ucd-lib/cork-app-utils');

class PersonStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byIndividual: {},
      pubsByIndividual: {}
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
    this.data.pubsByIndividual[state.id] = state;
  }

}

module.exports = new PersonStore();
