import {BaseStore} from '@ucd-lib/cork-app-utils';

class AdminStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      sparql : {},
      model : {},
      record : {},
      indexerStatus : {},
      requestIndex : {}
    };
    this.events = {
      REQUEST_INDEX : 'request-index-update'
    };
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

  indexerStatusLoading(request) {
    this._setIndexerStatusState({
      state : this.STATE.LOADING,
      request
    });
  }

  indexerStatusLoaded(payload) {
    this._setIndexerStatusState({
      state : this.STATE.LOADED,
      payload
    });
  }

  indexerStatusError(error) {
    this._setIndexerStatusState({
      state : this.STATE.ERROR,
      error
    });
  }

  _setIndexerStatusState(state) {
    this.data.indexerStatus = state;
  }

  requestIndexLoading(request) {
    this._setRequestIndexState({
      state : this.STATE.LOADING,
      request
    });
  }

  requestIndexLoaded(payload) {
    this._setRequestIndexState({
      state : this.STATE.LOADED,
      payload
    });
  }

  requestIndexError(error) {
    this._setRequestIndexState({
      state : this.STATE.ERROR,
      error
    });
  }

  _setRequestIndexState(state) {
    this.data.requestIndex = state;
    this.emit(this.events.REQUEST_INDEX, state);
  }

}

const store = new AdminStore();
export default store;