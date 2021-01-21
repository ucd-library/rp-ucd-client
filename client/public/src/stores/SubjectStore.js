const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SubjectStore extends BaseStore {

  constructor(){
    super();
    
    this.data = {
      bySubject: {},
      researchersBySubject: {},
      pubOverviewBySubject: {},
      pubsById: {}
    };
    this.events = {
      SUBJECT_RESEARCHER_UPDATE: 'subject-researcher-update',
      SUBJECT_PUBOVERVIEW_UPDATE: 'subject-puboverview-update',
      SUBJECT_PUB_UPDATE: 'subject-pub-update'
    };
  }

  setSubjectLoading(id, request){
    this._setSubjectState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setSubjectLoaded(id, payload){
    this._setSubjectState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setSubjectError(id, error){
    this._setSubjectState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setSubjectState(state){
    this.data.bySubject[state.id] = state;
  }

  setResearcherLoading(id, request) {
    this._setResearcherState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setResearcherLoaded(id, payload) {
    this._setResearcherState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setResearcherError(id, error) {
    this._setResearcherState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setResearcherState(state) {
    this.data.researchersBySubject[state.id] = state;
    this.emit(this.events.SUBJECT_RESEARCHER_UPDATE, state);
  }

  setPubOverviewLoading(id, request) {
    this._setPubOverviewState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setPubOverviewLoaded(id, payload) {
    this._setPubOverviewState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setPubOverviewError(id, error) {
    this._setPubOverviewState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setPubOverviewState(state) {
    this.data.pubOverviewBySubject[state.id] = state;
    this.emit(this.events.SUBJECT_PUBOVERVIEW_UPDATE, state);
  }

  setPubLoading(id, request) {
    this._setPubState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setPubLoaded(id, payload) {
    this._setPubState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setPubError(id, error) {
    this._setPubState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setPubState(state) {
    this.data.pubsById[state.id] = state;
    this.emit(this.events.SUBJECT_PUB_UPDATE, state);
  }
}

module.exports = new SubjectStore();