const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SubjectService = require('../services/SubjectService');
const SubjectStore = require('../stores/SubjectStore');

const CollectionModel = require('./CollectionModel');

/**
 * @class SubjectModel
 * @description powers the research subjects
 */
class SubjectModel extends BaseModel {
  
  constructor(){
    super();

    this.store = SubjectStore;
    this.service = SubjectService;
    this.CollectionModel = CollectionModel;
    this.UrlLanding = '/subject/';
    
    this.register('SubjectModel');
  }

  /**
   * @method getSubject
   * @param {String} id
   * @description query the subject from the ID from the
   * service depending on the state of the subject object
   * 
   * @returns {Object}
   */
  async getSubject(id) {
    let state = {state: SubjectStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getSubject(id);
    } else if( state.state === 'loading' ){
      await this.state.request;
    }
    return this.store.data.bySubject[id];
  }

  /**
   * @method getResearchers
   * @description query the subject's researchers associated with
   * the ID service depending on the state of the subject object
   * 
   * @param {String} id
   * 
   * @returns {Object}
   */
  async getResearchers(id) {
    let state = {state: SubjectStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getResearchers(id);
    } else if( state.state === 'loading' ){
      await this.state.request;
    }
    return this.store.data.researchersBySubject[id];
  }

  /**
   * @method getPubOverview
   * @param {String} id
   * @description query the subject's publication overview associated with
   * the ID service depending on the state of the subject object
   * 
   * @returns {Object}
   */
  async getPubOverview(id) {
    let state = {state: SubjectStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPubOverview(id);
    } else if( state.state === 'loading' ){
      await this.state.request;
    }
    return this.store.data.pubOverviewBySubject[id];
  }

  /**
   * @method getPubs
   * @description query the subject's individual publication associated with
   * the ID and the type of publication through service depending on the 
   * state of the subject object
   * 
   * @param {String} id
   * @param {String} pubType
   * 
   * @returns {Object}
   */
  async getPubs(id, pubType) {
    let state = {state: SubjectStore.STATE.INIT};
    let cacheId = JSON.stringify({subject: id, pub: pubType.id});
    if( state.state === 'init' ) {
      await this.service.getPubs(id, cacheId, pubType);
    } else if( state.state === 'loading' ){
      await this.state.request;
    }
    return this.store.data.pubsById[cacheId];
  }

  /**
   * @method getSubjectTypes
   * @description query the object from the CollectionModel that is the 
   * subFacets for the subjects
   * 
   * @returns {Object}
   */
  getSubjectTypes(){
    return this.CollectionModel.subFacets.subjects;
  }

  /**
   * @method getPreferredLabel
   * @description get the preferred label if it exists and if it doesn't 
   * return the original label
   * 
   * @param {Object} subject
   * 
   * @returns {String}
   */
  getPreferredLabel(subject){
    if (!subject || !subject.label) return "";
    if (subject.prefLabel) return subject.prefLabel;
    return subject.label;
  }

  /**
   * @method getRelatedSubjects
   * @description get the broader or narrower sections if they
   * exist and return the objects or a boolean.  
   * 
   * @param {Object} subject
   * @param {String} type
   * 
   * @returns {Object, Boolean}
   */
  getRelatedSubjects(subject, type){
    if (type == "narrow"){
      if (subject.narrower) return subject.narrower;
      return false;
    }
    else if (type == "broader"){
      if (subject.broader) return subject.broader;
      return false;
    }
    return null;
  }

  /**
   * @method getLandingPage
   * @description if the subject exists, return the landing page
   * url formulated with the id
   * 
   * @param {Object} subject
   * 
   * @returns {String}
   */
  getLandingPage(subject){
    if (!subject || !subject['@id']) return "";
    return `${this.UrlLanding}${encodeURIComponent(subject['@id'])}`
  }

  /**
   * @method getSnippet
   * @param {Object} subject
   * @description if the snippet exists in the subject, return the 
   * string of the snippet
   * 
   * @returns {String}
   */
  getSnippet(subject) {
    let out = "";
    if (!subject || !subject._snippet) return out;
    if (subject._snippet.value) out = subject._snippet.value;
    return out;
  }
}

module.exports = new SubjectModel();