import { LitElement, html } from 'lit';
import render from './grant-preview.tpl.js';

import previewUtils from "../../src/lib/preview-utils";

/**
 * @class RpGrantPreview
 * @description element for showing grants in a list
 */
export class RpGrantPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {
  
  static get properties() {
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'},
      contributorCt: {type: Number},
      snippet : {type: String},
      title : {type: String},
      textWidth: {type: String, attribute: 'text-width'},
    };
  }

  constructor() {
    super();
    this.data = {};
    this.contributorCt = 0;
    this.showSnippet = false;
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
    
    this._injectModel('GrantModel');
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
        this.GrantModel.getLabel(this.data),
        this.GrantModel.getSnippet(this.data)
      );

      this.title = result.title;
      if( result.showSnippet === false ) {
        this.showSnippet = false;
      }
    }
  }

  /**
   * @method getTitle
   * @description calls the getTitle function gets the 
   * headline title of the grant from the grant object
   * 
   * @returns {String}  
   */
  getTitle(){
    return this.GrantModel.getLabel(this.data);
  }

  /**
   * @method getLink
   * @description calls the getLink function gets the url 
   * for the landing page based off the grant ID
   * 
   * @returns {URL} 
   */
  getLink(){
    return this.GrantModel.getLandingPage(this.data);
  }

  /**
   * @method getAuthors
   * @description calls the getAuthors function gets the 
   * author of the grant
   * 
   * @returns {Object} authors 
   */
  getAuthors(){
    let authors = this.GrantModel.getAuthors(this.data);
    this.contributorCt = authors.length;
    return authors;
  }

  /**
   * @method getGrantType
   * @description calls the getGrantType function gets the 
   * type of the grant from the grant object
   * 
   * @returns {String}  
   */
  getGrantType(){
    return this.GrantModel.getGrantType(this.data);
  }

  /**
   * @method getSnippet
   * @description calls the getSnippet function gets the 
   * description of the grant from the grant object
   * 
   * @returns {String}  
   */
  getSnippet(){
    return this.GrantModel.getSnippet(this.data);
  }

  /**
   * @method _renderAuthors
   * @description render the authors that are associated
   * with the grant
   * 
   * @returns {String}  
   */
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
            author.identifiers = [author.identifiers];
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

customElements.define('rp-grant-preview', RpGrantPreview);
