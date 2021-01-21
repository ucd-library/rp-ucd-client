const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SubjectStore extends BaseStore {

  constructor(){
    super();
    
    this.data = {
      bySubject: {},
      researchersBySubject: {}
    };
    this.events = {
      SUBJECT_RESEARCHER_UPDATE: 'subject-researcher-update'
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
}

module.exports = new SubjectStore();