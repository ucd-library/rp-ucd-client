import { LitElement, html } from 'lit-element';
import render from './subject-preview.tpl.js';

export class RpSubjectPreview extends Mixin(LitElement)
.with(LitCorkUtils) {
  static get properties(){
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'}
    };
  }

  constructor(){
    super();
    this._injectModel('SubjectModel');
    this.render = render.bind(this);

    this.showSnippet = false;
  }

  getTitle(){
    return this.SubjectModel.getPreferredLabel(this.data);
  }
  getLink(){
    return this.SubjectModel.getLandingPage(this.data);
  }
  getSnippet(){
    return this.SubjectModel.getSnippet(this.data);
  }

}

customElements.define('rp-subject-preview', RpSubjectPreview);