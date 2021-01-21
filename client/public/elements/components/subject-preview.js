import { LitElement, html } from 'lit-element';
import render from './subject-preview.tpl.js';

export class RpSubjectPreview extends LitElement {
  static get properties(){
    return {
      data: {type: Object},
      href: {type: String},
      subjectPath: {type: String},
      jsonldContext: {type: String}
    };
  }

  constructor(){
    super();
    this.subjectPath = "/subject/";
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.render = render.bind(this);
  }

  _labelTitle(){
    if(this.data.prefLabel) return this.data.prefLabel;
    else return this.data.label;
  }

  _renderTitleLink() {
    let href = "";
    if (this.href) {
      href = this.href;
    }
    else {
      try {
        let id = this.data['@id'];
        href = this.subjectPath + id;
      } catch (error) {
        console.warn("Unable to construct subject href.");
      }

    }
    return html`<a class="title" href="${href}" ?disabled="${!href}">${this._labelTitle()}</a>`;
  }


}

customElements.define('rp-subject-preview', RpSubjectPreview);