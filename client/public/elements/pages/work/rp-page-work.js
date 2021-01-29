import { LitElement, html } from 'lit-element';
import render from "./rp-page-work.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/badge";
import "../../components/link-list";
import "../../components/person-preview";


export default class RpPageWork extends RpUtilsLanding {
  static get properties() {
    return {
      work: {type: Object},
      workStatus: {type: String},
      grpsWithLinks: {type: String},
      authorPath: {type: String},
      authors: {type: Array},
      universityAuthors: {type: Array},
      universityAuthorsStatus: {type: String},
      hasOtherAuthors: {tyoe: Boolean},
      workType: {type: String},
      publishedArray: {type: Array},
      subjects: {type: Array},
      fullTextLinks: {type: Array},
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'WorkModel', 'SubjectModel');

    this.assetType = "work";
    this.work = {};
    this.workStatus = 'loading';
    this.authorPath = "/individual/";
    this.grpsWithLinks = ["vivo:FacultyMember"];
    this.authors = [];
    this.hasOtherAuthors = false;
    this.workType = "";
    this.publishedArray = [];
    this.subjects = [];
    this.fullTextLinks = [];
    this.isOwnWork = false;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this);
    this.universityAuthors = [];
    this.universityAuthorsStatus = 'loading';

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
    console.log("Path:", state.location.path);

    let path = state.location.path;
    if (path.length == 1) {
      this.AppStateModel.setLocation('/works');
      return;
    }
    this.assetId = path[1];
    if (!this.assetId) return;

    this._setActiveSection(path);

    await Promise.all([this._doMainQuery(this.assetId)]);

  }

  async _doMainQuery(id){
    let data = await this.WorkModel.getWork(id);
    this.workStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.work = data.payload;
    if (APP_CONFIG.verbose) console.log("work payload:", data);

    this.authors = this.WorkModel.getAuthors(this.work);
    this.isOwnWork = this.WorkModel.isUsersWork(this.work);
    this.hasOtherAuthors = this.WorkModel.hasNonInstitutionAuthors(this.work);
    this.workType = this.WorkModel.getWorkType(this.work);
    this.publishedArray = this.WorkModel.getPublishedArray(this.work);
    this.subjects = this.WorkModel.getSubjects(this.work);
    this.fullTextLinks = this.WorkModel.getFullTextLinks(this.work);
    this._doAuthorQuery(id, this.authors);
    console.log("Subjects:",this.subjects);
  }

  async _doAuthorQuery(id, authors) {
    this.universityAuthors = [];
    let universityAuthors = authors.filter(author => author.isOtherUniversity == false).map(a => a.apiEndpoint);
    let data = await this.WorkModel.getAuthorsFullObject(id, universityAuthors);
    this.universityAuthorsStatus = data.state;
    if (data.state != 'loaded') return;
    if (APP_CONFIG.verbose) console.log("university authors:", data);
    if (Array.isArray(data.payload)) {
      universityAuthors = data.payload;
    }
    else {
      universityAuthors = [data.payload];
    }

    this.universityAuthors = universityAuthors;
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

}

customElements.define('rp-page-work', RpPageWork);
