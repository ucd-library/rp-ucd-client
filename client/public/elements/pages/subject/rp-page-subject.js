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
  }

  updated(props) {
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
   }

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
      this._doResearcherQuery(this.assetId), 
      this._doPubOverviewQuery(this.assetId)]);

  }


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

    setPeopleWidth(w) {
      let pw = 250;
      let avatarWidth = 82;
      let screenPadding = 30;
      pw = (w - screenPadding) * .8 - avatarWidth - 40;
      this.peopleWidth = Math.floor(pw);
    }  

    _handleResize() {
      if (!this.visible) return;
      let w = window.innerWidth;
      this.setPeopleWidth(w);
    }

    _pubRedirect(k){
      let path = '/works/' + k + "?" + "subject=" + this.urlPathId;
      //console.log(path);
      //location.href = path;

    }

    _isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    }
  
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
  _hideStatusSection(section, statusProperty="subjectStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

  _labelTitle(){
    if(this.subject.prefLabel) return this.subject.prefLabel;
    else return this.subject.label;
  }

  _publicationTitle(name){
    if(name == "articles") return "Academic Articles"
    else if(name == "conference-papers") return "Conference Papers"
    else if(name == "books") return "Books"
    else if(name == "chapters") return "Chapters"
    else return
  }

  _getYear(date){
    if (!date) return;
    return date.split("-")[0];
  }

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
