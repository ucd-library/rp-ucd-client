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

  /**
   * @method setSubjectLoading
   * @description sets the state for the loading subject
   * 
   * @param {String} id subject
   * @param {Promise} request 
   */
  setSubjectLoading(id, request){
    this._setSubjectState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setSubjectLoaded
   * @description sets the state for the loaded subject
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setSubjectLoaded(id, payload){
    this._setSubjectState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setSubjectError
   * @description sets the state for the error subject
   * 
   * @param {String} id subject
   * @param {Status} error status 
   */
  setSubjectError(id, error){
    this._setSubjectState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setSubjectState
   * @description sets the state for subject
   * 
   * @param {State} state subject
   */
  _setSubjectState(state){
    this.data.bySubject[state.id] = state;
  }
 
  /**
   * @method setResearcherLoading
   * @description sets the state for the loading researcher in subject
   * 
   * @param {String} id subject
   * @param {Promise} request 
   */
  setResearcherLoading(id, request) {
    this._setResearcherState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setResearcherLoaded
   * @description sets the state for the loaded researcher in subject
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setResearcherLoaded(id, payload) {
    this._setResearcherState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setResearcherError
   * @description sets the state for the error researcher in subject
   * 
   * @param {String} id subject
   * @param {Status} error status 
   */
  setResearcherError(id, error) {
    this._setResearcherState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setResearcherState
   * @description sets the state for researcher in subject
   * 
   * @param {State} state subject
   */
  _setResearcherState(state) {
    this.data.researchersBySubject[state.id] = state;
    this.emit(this.events.SUBJECT_RESEARCHER_UPDATE, state);
  }

  /**
   * @method setPubOverviewLoading
   * @description sets the state for the loading publication in subject
   * 
   * @param {String} id subject
   * @param {Promise} request 
   */
  setPubOverviewLoading(id, request) {
    this._setPubOverviewState({
      state: this.STATE.LOADING,
      id, request
    });
  }
  /**
   * @method setPubOverviewLoaded
   * @description sets the state for the loaded publication in subject
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setPubOverviewLoaded(id, payload) {
    this._setPubOverviewState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setPubOverviewError
   * @description sets the state for the error publication in subject
   * 
   * @param {String} id subject
   * @param {Status} error status 
   */
  setPubOverviewError(id, error) {
    this._setPubOverviewState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setPubOverviewState
   * @description sets the state for publication in subject
   * 
   * @param {State} state subject
   */
  _setPubOverviewState(state) {
    this.data.pubOverviewBySubject[state.id] = state;
    this.emit(this.events.SUBJECT_PUBOVERVIEW_UPDATE, state);
  }

  /**
   * @method setPubLoading
   * @description sets the state for the loading seperate publications in 
   * publication overview 
   * 
   * @param {String} id subject
   * @param {Promise} request 
   */
  setPubLoading(id, request) {
    this._setPubState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  /**
   * @method setPubLoaded
   * @description sets the state for the loaded seperate publications in 
   * publication overview
   * 
   * @param {String} id subject
   * @param {Object} payload 
   */
  setPubLoaded(id, payload) {
    this._setPubState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  /**
   * @method setPubError
   * @description sets the state for the error seperate publications in 
   * publication overview
   * 
   * @param {String} id subject
   * @param {Status} error status 
   */
  setPubError(id, error) {
    this._setPubState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  /**
   * @method _setPubOverviewState
   * @description sets the state for seperate publications in 
   * publication overview
   * 
   * @param {State} state subject
   */
  _setPubState(state) {
    this.data.pubsById[state.id] = state;
    this.emit(this.events.SUBJECT_PUB_UPDATE, state);
  }
}

module.exports = new SubjectStore();