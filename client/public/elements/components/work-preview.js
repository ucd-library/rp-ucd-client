import { LitElement, html } from 'lit';
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
      title : {type: String},
      textWidth: {type: String, attribute: 'text-width'},
    };
  }

  constructor() {
    super();
    this.data = {};
    this.authorCt = 0;
    this.showSnippet = false;
    this.textWidth = (window.innerWidth.toString() - 70) + "px";

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
    this.authorCt = authors.ranked.length;
    return authors.ranked;
  }

  getWorkType(){
    return this.WorkModel.getWorkType(this.data);
  }

  getSnippet(){
    return this.WorkModel.getSnippet(this.data);
  }
}

customElements.define('rp-work-preview', RpWorkPreview);
