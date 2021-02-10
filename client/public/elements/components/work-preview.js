import { LitElement, html } from 'lit-element';
import render from './work-preview.tpl.js';

import previewUtils from "../../src/lib/preview-utils";

/**
 * @class RpWorkPreview
 * @description element for showing works in a list
 */
export class RpWorkPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'},
      authorCt: {type: Number},
      snippet : {type: String},
      title : {type: String}
    };
  }

  constructor() {
    super();
    this.data = {};
    this.authorCt = 0;
    this.showSnippet = false;
    this._injectModel('WorkModel');
    this.render = render.bind(this);
  }

  /**
   * @method updated
   * @description lit-element updated method
   * 
   * @param {Object} props 
   */
  updated(props) {
    if( props.has('data') ) {
      let result = previewUtils.getSnippetTitle(
        this.WorkModel.getLabel(this.data),
        this.WorkModel.getSnippet(this.data)
      );

      this.title = result.title;
      if( result.showSnippet === false ) {
        this.showSnippet = false;
      }
    }
  }

  getTitle(){
    return this.WorkModel.getLabel(this.data);
  }

  getLink(){
    return this.WorkModel.getLandingPage(this.data);
  }

  getAuthors(){
    let authors = this.WorkModel.getAuthors(this.data);
    this.authorCt = authors.length;
    return authors;
  }

  getWorkType(){
    return this.WorkModel.getWorkType(this.data);
  }

  getSnippet(){
    return this.WorkModel.getSnippet(this.data);
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
