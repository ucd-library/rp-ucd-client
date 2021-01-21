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
      //grpsWithLinks: {type: String},
      authorPath: {type: String},
      authors: {type: Array},
      universityAuthors: {type: Array},
      universityAuthorsStatus: {type: String},
      hasOtherAuthors: {tyoe: Boolean},
      subjectType: {type: String},
      publishedArray: {type: Array},
      fullTextLinks: {type: Array},
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number},
      narrowListEx: {type: Object},
      broadListEx: {type: Object}
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
    this.publications = {};
    //this.authorPath = "/individual/";
    //this.grpsWithLinks = ["vivo:FacultyMember"];
    //this.authors = [];
    //this.hasOtherAuthors = false;
    this.subjectType = "";
    this.publishedArray = [];
    this.fullTextLinks = [];
    this.isOwnWork = false;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this);
    //this.universityAuthors = [];
    //this.universityAuthorsStatus = 'loading';
    this.narrowListEx = [{label: "Broad Subject",desc: "Description A"},
                         {label: "Topic",desc: "Description B"}
                        ];
    this.broadListEx = [{label: "Related Subject", desc: "Description A"},
                        {label: "Sub-Topic", desc: "Description B"},
                        {label: "Topic", desc: "Description C"},
                        {label: "Another Sub-Topic", desc: "Description D"},
                        {label: "Example Topic", desc: "Description E"}
                       ];    
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
    this.assetId = path[1];
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

    //this.authors = this._parseAuthors();
    this.subjectType = this._getSubjectType();
    //this.publishedArray = this._getPublishedArray();
    this.fullTextLinks = this._getFullTextLinks();
    //this._doAuthorQuery(id, this.authors);
  }

  /**
   * @method _doResearcherQuery
   * @param {String} id - The subject id of this page.
   * @description Retrieves the researchers associated with this subject and saves in this.researchers array
   * Called on AppStateUpdate
   */
  async _doResearcherQuery(id){
    let data = await this.SubjectModel.getResearchers(id);

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

  // _getPublishedArray() {
  //   let output = [];
  //   if (!this.work) return output;
    
  //   // venue name
  //   try {
  //     let venue = this.work.hasPublicationVenue['@id'];
  //     if (venue && this.workType.toLowerCase() == 'academic article') {
  //       venue = venue.replace(APP_CONFIG.data.jsonldContext + ":journal", "").replace(/-/g, " ");
  //       venue += " (journal)"
  //     }
  //     if (venue) output.push({text: venue, class: 'venue'});
      
  //   } catch (error) {}

  //   // venue release
  //   try {
  //     let r = "";
  //     if (output.length > 0) {
  //       if (this.work.volume) r += `Volume ${this.work.volume}`;
  //       if (this.work.issue) {
  //         if (r) r += ", ";
  //         r += `Issue ${this.work.issue}`;
  //       }
  //       if (r) output.push({text: r, class: 'release'});
  //     }
      
  //   } catch (error) {}

  //   // publication date
  //   try {
  //     let d = new Date(this.work.publicationDate);
  //     let options = {year: 'numeric', month: 'long', day: 'numeric' };
  //     d = new Intl.DateTimeFormat('en-US', options).format(d);
  //     if (d) output.push({text: d, class: 'pub-date'});
  //   } catch (error) {}

  //   return output;
  // }

}

customElements.define('rp-page-subject', RpPageSubject);
