import { LitElement, html } from 'lit-element';
import render from "./rp-page-work.tpl.js"

import "../../components/alert";
import "../../components/hero-image";


export default class RpPageWork extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      workId : {type: String},
      work : {type: Object},
      workStatus : {type: String},
      grpsWithLinks: {type: String},
      authorPath: {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'WorkModel');

    this.visible = false;
    this.workId = "";
    this.work = {};
    this.workStatus = 'loading';
    this.authorPath = "/individual/";
    this.grpsWithLinks = ["vivo:FacultyMember"];


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
    this.workId = path[1];
    if (!this.workId) return;
    await Promise.all([this._doMainQuery(this.workId)]);

  }

  async _doMainQuery(id){
    let data = await this.WorkModel.getWork(id);
    this.workStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.work = data.payload;
    if (APP_CONFIG.verbose) console.log("work payload:", data);
  }

  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

  _hideSection(section) {
    if (section == 'abstract' && this.work.abstract) {
      return false;
    }
    return true;
  }

  _renderAuthors(){
    let authors = [];
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
        try {
            if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
                author.identifiers = [author.identifiers]
            }
            for (let id of author.identifiers) {
                if (this.grpsWithLinks.includes(id['@type'])) {
                    author.href = this.authorPath + id['@id'].replace(this.WorkModel.service.jsonContext + ":", "");
                }
            }

        } catch (error) {
            console.warn("Unable to construct author href.");
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
    }
return html`<div class="authors">${authors.map(author => html`<a class="author" href="${author.href}" ?disabled="${!author.href}">${author.nameLast}, ${author.nameFirst}</a>; `)}</div>`;
  }

}

customElements.define('rp-page-work', RpPageWork);
