import {BaseStore} from '@ucd-lib/cork-app-utils';

class AdminStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      sparql : {},
      model : {},
      record : {}
    };
    this.events = {};
  }

  sparqlLoading(id, request) {
    this._setSparqlState({
      state : this.STATE.LOADING,
      id, request
    });
  }

  sparqlLoaded(id, payload) {
    this._setSparqlState({
      state : this.STATE.LOADED,
      id, payload
    });
  }

  sparqlError(id, error) {
    this._setSparqlState({
      state : this.STATE.ERROR,
      id, error
    });
  }

  _setSparqlState(state) {
    this.data.sparql[state.id] = state;
  }

  esModelServiceLoading(id, request) {
    this._setEsModelState({
      state : this.STATE.LOADING,
      id, request
    });
  }

  esModelServiceLoaded(id, payload) {
    this._setEsModelState({
      state : this.STATE.LOADED,
      id, payload
    });
  }

  esModelServiceError(id, error) {
    this._setEsModelState({
      state : this.STATE.ERROR,
      id, error
    });
  }

  _setEsModelState(state) {
    this.data.model[state.id] = state;
  }

  recordLoading(id, request) {
    this._setRecordState({
      state : this.STATE.LOADING,
      id, request
    });
  }

  recordLoaded(id, payload) {
    this._setRecordState({
      state : this.STATE.LOADED,
      id, payload
    });
  }

  recordError(id, error) {
    this._setRecordState({
      state : this.STATE.ERROR,
      id, error
    });
  }

  _setRecordState(state) {
    this.data.record[state.id] = state;
  }

}

const store = new AdminStore();
export default store;