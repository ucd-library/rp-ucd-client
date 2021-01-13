const {BaseStore} = require('@ucd-lib/cork-app-utils');

class SubjectStore extends BaseStore {

  constructor(){
    super();
    
    this.data = {
      bySubject: {},
      subjectAuthors: {}
    };
    this.events = {};
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

  setAuthorLoading(id, request) {
    this._setAuthorState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setAuthorLoaded(id, payload) {
    this._setAuthorState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setAuthorError(id, error) {
    this._setAuthorState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setAuthorState(state) {
    this.data.subjectAuthors[state.id] = state;
  }
}

module.exports = new SubjectStore();