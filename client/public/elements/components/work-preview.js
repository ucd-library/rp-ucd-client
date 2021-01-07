import { LitElement, html } from 'lit-element';
import render from './work-preview.tpl.js';


export class RpWorkPreview extends LitElement {
  static get properties() {
  return {
    data: {type: Object},
    href: {type: String},
    workPath: {type: String},
    grpsWithLinks: {type: String},
    authorPath: {type: String},
    jsonldContext: {type: String},
    snippet : {type: String}
  };
  }

  constructor() {
    super();
    this.workPath = "/work/";
    this.authorPath = "/individual/";
    this.grpsWithLinks = ["vivo:FacultyMember"];
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.render = render.bind(this);
  }

  _renderTitleLink() {
      let href = "";
      if (this.href) {
        href = this.href;
      }
      else {
        try {
            let id = this.data['@id'].split(`${this.jsonldContext}:publication`)[1];
            href = this.workPath + id;
        } catch (error) {
            console.warn("Unable to construct work href.");
        }
      }
      return html`<a class="title" href="${href}" ?disabled="${!href}">${this.data.label}</a>`;
  }

  _renderAuthors(){
    let authors = [];
    if (this.data.Authorship && typeof this.data.Authorship === 'object') {
      let auths = this.data.Authorship;
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
                    author.href = this.authorPath + id['@id'].replace(this.jsonldContext + ":", "");
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

customElements.define('rp-work-preview', RpWorkPreview);
