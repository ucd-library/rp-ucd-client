import { LitElement, html } from 'lit-element';
import render from "./rp-page-subject.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/person-preview";
import "../../components/subject-preview";

/**
 * @class RpPageSubject
 * @description main subject page
 */
export default class RpPageSubject extends RpUtilsLanding {
  static get properties() {
    return {
      subject: {type: Object},
      subjectStatus: {type: String},
      researchers: {type: Array},
      researchersStatus: {type: String},
      publications: {type: Object},
      subjectType: {type: String},
      fullTextLinks: {type: Array},
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number},
      narrowRelatedSubjects: {type: Array},
      broadRelatedSubjects: {type: Array},
      tempResearch: {},
      urlPathId: {type: String},
      pub: {type: Boolean},
      about: {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'SubjectModel', 'CollectionModel');

    this.assetType = "subject";
    this.subject = {};
    this.subjectStatus = 'loading';
    this.researchers = [];
    this.researchersStatus = 'loading';
    this.tempResearch = []
    this.publications = {};
    this.urlPathId = "";
    this.subjectType = "";
    this.fullTextLinks = [];
    this.isOwnWork = false;
    this.hasRelatedSubject = true;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this);
    this.narrowRelatedSubjects = [];
    this.broadRelatedSubjects = [];    
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this.about = [];
  }

  /**
   * @method updated
   * @description lit method called when props update
   * 
   * @param {Object} props 
   */
  updated(props) {
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  /**
   * @method connectedCallback
   * @description lit method called when element is connected to dom
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * @method disconnectedCallback
   * @description lit method called when element is disconnected to dom
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

    /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  /**
   * @method _doUpdate
   * @param {Object} state - State of the app
   * @description On the call, it would update the state of the app.
   * Promises these functions to query data: this._doMainQuery(this.assetId), 
                                             this._doResearcherQuery(this.assetId), 
                                             this._doPubOverviewQuery(this.assetId)])
   */
  async doUpdate(state) {
    await this.updateComplete;

    if (!this.visible) {
      return;
    }

    let path = state.location.path;

    if (path.length == 1) {
      this.AppStateModel.setLocation('/subjects');
      return;
    }
    console.log("PATH:", path);
    this.urlPathId = path[1];
    this.assetId = decodeURIComponent(path[1]);
    if (!this.assetId) return;

    this._setActiveSection(path);

    await Promise.all([
      this._doMainQuery(this.assetId), 
      this._doAboutQuery(this.assetId),
      this._doResearcherQuery(this.assetId), 
      this._doPubOverviewQuery(this.assetId)]);

  }

  /**
   * @method _doMainQuery
   * @param {String} id - The subject id of this page.
   * @description Retrieves the subject from the id given and saves in this.subject array
   * Called on AppStateUpdate
   * 
   * Calls the functions: this._getSubjectType(), 
   *                      this._getFullTextLinks(),
   *                      this._getRelatedSubjectsNarrow(), 
   *                      this._getRelatedSubjectsBroader()
   */

  async _doMainQuery(id){
    let data = await this.SubjectModel.getSubject(id);

    this.subjectStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.subject = data.payload;
    if (APP_CONFIG.verbose) console.log("subject payload:", data);

    this.subjectType = this._getSubjectType();
    this.fullTextLinks = this._getFullTextLinks();
    this.narrowRelatedSubjects = this._getRelatedSubjectsNarrow();
    this.broadRelatedSubjects = this._getRelatedSubjectsBroader();
    if(this._isEmpty(this.narrowRelatedSubjects) && this._isEmpty(this.broadRelatedSubjects)){
      this._hideElements("relatedSubjects", this.narrowRelatedSubjects);
    }
  }

  /**
   * @method _doAboutQuery
   * @param {String} id - The subject id of this page.
   * @description Retrieves the subject from the id given and saves description in this.about array
   * Called on AppStateUpdate
   * 

   */

  async _doAboutQuery(id){
    let data = await this.SubjectModel.getSubject(id);

    //Add location of the description and add to array if there is none
    this.about = data.payload;

    //delete this when description is added
    if(this.about){ 
      this.about = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."];
    }
    //

    if (APP_CONFIG.verbose) console.log("description:", data);

    this._hideElements("about", this.about);
    
  }


  /**
   * @method _doResearcherQuery
   * @param {String} id - The subject id of this page.
   * @description Retrieves the researchers associated with this subject and saves in this.researchers array
   * Called on AppStateUpdate
   */
  async _doResearcherQuery(id){
    let data = await this.SubjectModel.getResearchers(id);

    this.tempResearch = data.payload.results;
    this.researchersStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.researchers = data.payload;
    if (APP_CONFIG.verbose) console.log("researchers payload:", data);
    this._hideElements("researchers", this.researchers.results);

  }

  /**
   * @method _doPubOverviewQuery
   * @param {String} id - The subject id of this page.
   * @description Retrieves number of each publication type for this subject.
   * Retrieves publications for each type by calling _doPubQuery.
   */
  async _doPubOverviewQuery(id) {
    let data = await this.SubjectModel.getPubOverview(id);
    if (data.state != 'loaded') {
      return;
    }
    if (APP_CONFIG.verbose) console.log('pub overview:', data);
    let pubTypeCounts = data.payload.aggregations.facets['@type'];
    let pubTypes = []
    for (const pubType of this.CollectionModel.subFacets.works) {
      if (!pubTypeCounts[pubType.es]) continue;
      pubTypes.push(pubType);
    }

    this.publications = {}
    pubTypes.map(pt => this._doPubQuery(pt));
    this._hideElements("publications", pubTypes);

  }

  /**
   * @method _doPubQuery
   * @param {Object} pubType - Publication type from CollectionModel.subFacets.works
   * @description Retrieves the 5 most recent publications of the specified pubType for this subject.
   * Adds to publications object.
   */
  async _doPubQuery(pubType){
    
    let data = await this.SubjectModel.getPubs(this.assetId, pubType);
    if (data.state != 'loaded') {
      return;
    }

    if (APP_CONFIG.verbose) console.log(`${pubType.id} pubs`, data);
    this.publications[pubType.id] = {'total': data.payload.total, 'results': data.payload.results};
    this.requestUpdate();

  }

  /**
   * @method setPeopleWidth
   * @description
   * Sets the text-width property of the rp-subject-preview elements on this page.
   * It's the only way to get the ellipsis overflow on their titles. 
   * 
   * @param {Number} w - Window width (pixels)
   */

  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .8 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
  }  

  /**
   * @method _handleResize
   * @description bound to main window resize event
   */
  _handleResize() {
    if (!this.visible) return;
      let w = window.innerWidth;
      this.setPeopleWidth(w);
  }

  /**
   * @method _pubRedirect
   * @description creates the href that specifies the subject and 
   * type of document for the publication redirect
   */
  _pubRedirect(k){
    let href = '/works/' + k + "?" + "subject=" + this.urlPathId;
    this.AppStateModel.setLocation(href);
  }

  /**
   * @method _isEmpty
   * @description checks if the object has any values for it to 
   * show the object or not
   * 
   * @param {Object} 
   * 
   * @returns {Boolean}
   */
  _isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

   /**
   * @method _hideElements
   * @description checks if the object is empty it would take away the
   * section and the nav bar
   * 
   * @param {String, Object} 
   * 
   */
  _hideElements(type, arrayCheck) {
    if(this._isEmpty(arrayCheck)){
      this.shadowRoot.getElementById(type).style.display = "none";
      let data = this.shadowRoot.getElementById("navbar").shadowRoot.querySelector("div").querySelectorAll("[href]");
      for(let i = 0; i < data.length; i++){
        if(data[i].href.includes(type)) data[i].style.display = "none";
      }
    }
  } 
 
  /**
   * @method _getRelatedSubjectsNarrow
   * @description determines if subject object has narrow scope and returns 
   * the resulting array if it did and false if it didn't
   * 
   * @returns {Object, Boolean} 
   */

  _getRelatedSubjectsNarrow(){
    let narrow = this.SubjectModel.getRelatedSubjects(this.subject, "narrow");
    let result = [];
    if(narrow){
      if(!narrow.length){
        result = [narrow];
      } else result = narrow.slice();
      return result;

    } else return false
      
  }

  /**
   * @method _getRelatedSubjectsBroader
   * @description determines if subject object has broader scope and returns 
   * the resulting array if it did and false if it didn't
   * 
   * @returns {Object, Boolean} 
   */

  _getRelatedSubjectsBroader(){
    let broad = this.SubjectModel.getRelatedSubjects(this.subject, "broader");
    let result = {};

    if(broad){
      if(!broad.length){
        result = [broad];
      }  else result = broad.slice(); 
      return result;
    } else return false
  }

  /**
   * @method _hideStatusSection
   * @description should a given UI section be hidden based on the
   * state of this elements property
   * 
   * @param {String} status state of call
   * @param {String} field this elements stored property
   * 
   * @returns {Boolean}
   */
  
  _hideStatusSection(section, statusProperty="subjectStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }


  /**
   * @method _labelTitle
   * @description returns the prefLabel to screen if it exists, otherwise 
   * it returns the stated label
   * 
   * @returns {String}
   */

  _labelTitle(){
    if(this.subject.prefLabel) return this.subject.prefLabel;
    else return this.subject.label;
  }

  /**
   * @method _publicationTitle
   * @param {String}
   * @description returns the string in a different format else it returns none 
   * 
   * @returns {String}
   */

  _publicationTitle(name){
    if(name == "articles") return "Academic Articles"
    else if(name == "conference-papers") return "Conference Papers"
    else if(name == "books") return "Books"
    else if(name == "chapters") return "Chapters"
    else return
  }

  /**
   * @method _getYear
   * @param {String}
   * @description returns the year after splitting the year from the query 
   * 
   * @returns {String}
   */

  _getYear(date){
    if (!date) return;
    return date.split("-")[0];
  }

  /**
   * @method _getFullTextLinks
   * @description returns the full text links for the subject queried
   * 
   * @returns text links output
   */

  _getFullTextLinks(){
    let output = [];
    if (!this.subject) return output;

    try {
      let links = this.subject.hasContactInfo.hasURL;
      if (!Array.isArray(links)) {
        links = [links];
      }
      for (let link of links) {
        if (!link.label || !link.url) continue;
        output.push(link);
      }
    } catch (error) {}

    return output;
  }

  /**
   * @method _getSubjectType
   * @description load and render a list of subject type
   * 
   * @returns {Promise}
   */

  _getSubjectType() {
    try {
      for (let t of this.subject['@type']) {
        for (const possibleType of this.SubjectModel.getSubjectTypes()) {
          if (possibleType.es == t) return possibleType.text;
        }
      }
    } catch (error) {
      
    }
    return "";
  }


}

customElements.define('rp-page-subject', RpPageSubject);
