import { LitElement, html } from 'lit-element';
import render from "./rp-page-work.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/link-list";


export default class RpPageWork extends RpUtilsLanding {

  static get properties() {
    return {
      work: {type: Object},
      workStatus: {type: String},
      grpsWithLinks: {type: String},
      authorPath: {type: String},
      authors: {type: Array},
      hasOtherAuthors: {tyoe: Boolean},
      workType: {type: String}
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


    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
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

    let sections = this.getPageSections();
    this.activeSection = sections[0]
    if (path.length >= 3) {
      for (let section of sections) {
        if (section.id == path[2]) {
          this.activeSection = section;
          break;
        }
      }
    }

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
  }

  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
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
                    author.href = this.authorPath + id['@id'].replace(this.WorkModel.service.jsonContext + ":", "");
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

}

customElements.define('rp-page-work', RpPageWork);
