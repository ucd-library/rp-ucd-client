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
    this._injectModel('AppStateModel', 'WorkModel');

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

    this.authors = this._parseAuthors();
    this.workType = this._getWorkType();
    this.publishedArray = this._getPublishedArray();
    this.subjects = this._getSubjects();
    this.fullTextLinks = this._getFullTextLinks();
    this._doAuthorQuery(id, this.authors);
  }

  async _doAuthorQuery(id, authors) {
    this.universityAuthors = [];
    let universityAuthors = authors.filter(author => author.isOtherUniversity == false).map(a => a.apiEndpoint);
    let data = await this.WorkModel.getAuthors(id, universityAuthors);
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

  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

  _getFullTextLinks(){
    let output = [];
    if (!this.work) return output;

    try {
      let links = this.work.hasContactInfo.hasURL;
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

  _getWorkType() {
    try {
      for (let t of this.work['@type']) {
        if (t == 'bibo:AcademicArticle') {
          return "Academic Article";
        }
      }
    } catch (error) {
      
    }
    return "";
  }

  _parseAuthors(){
    let authors = [];
    this.isOwnWork = false
    this.hasOtherAuthors = false;
    if (this.work.Authorship && typeof this.work.Authorship === 'object') {
      let auths = this.work.Authorship;
      if (!Array.isArray(auths)) {
        auths = [auths];
      }
      for (let author of auths) {
        if (!author.hasName) {
          continue;
        }
        author.nameFirst = author.hasName.givenName;
        author.nameLast = author.hasName.familyName;
        if (!author['vivo:rank']) {
          author['vivo:rank'] = Infinity;
        }
        author.href = "";
        author.isOtherUniversity = true;
        try {
            if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
                author.identifiers = [author.identifiers]
            }
            for (let id of author.identifiers) {
                if (this.grpsWithLinks.includes(id['@type'])) {
                  let authorId = id['@id'].replace(this.WorkModel.service.jsonContext + ":", "");
                  author.apiEndpoint = id['@id'];
                  try {
                    if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === authorId.toLowerCase()) {
                      this.isOwnWork = true;
                    }
                  } catch (error) {}
                  author.href = this.authorPath + authorId;
                  author.isOtherUniversity = false;
                }
            }

        } catch (error) {
            console.warn("Unable to construct author href.");
        }
        if (author.isOtherUniversity) {
          this.hasOtherAuthors = true;
          
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
    }
    return authors;

  }

  _getPublishedArray() {
    let output = [];
    if (!this.work) return output;
    
    // venue name
    try {
      let venue = this.work.hasPublicationVenue['@id'];
      if (venue && this.workType.toLowerCase() == 'academic article') {
        venue = venue.replace(APP_CONFIG.data.jsonldContext + ":journal", "").replace(/-/g, " ");
        venue += " (journal)"
      }
      if (venue) output.push({text: venue, class: 'venue'});
      
    } catch (error) {}

    // venue release
    try {
      let r = "";
      if (output.length > 0) {
        if (this.work.volume) r += `Volume ${this.work.volume}`;
        if (this.work.issue) {
          if (r) r += ", ";
          r += `Issue ${this.work.issue}`;
        }
        if (r) output.push({text: r, class: 'release'});
      }
      
    } catch (error) {}

    // publication date
    try {
      let d = new Date(this.work.publicationDate);
      let options = {year: 'numeric', month: 'long', day: 'numeric' };
      d = new Intl.DateTimeFormat('en-US', options).format(d);
      if (d) output.push({text: d, class: 'pub-date'});
    } catch (error) {}

    return output;
  }

  _getSubjects() {
    let output = [];
    if (!this.work) return output;

    try {
      let s = this.work.hasSubjectArea;
      if (!Array.isArray(s)) s = [s];
      for (let subject of s) {
        if (!subject.label) continue;
        output.push(subject);
      }
    } catch (error) {}

    return output;
  }

}

customElements.define('rp-page-work', RpPageWork);
