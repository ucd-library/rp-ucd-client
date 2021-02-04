import { LitElement, html } from 'lit-element';
import render from './person-preview.tpl.js';

import previewUtils from "../../src/lib/preview-utils";
import "./badge";

export class RpPersonPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'},
      showSubjects: {type: Boolean, attribute: 'show-subjects'},
      subjectCt: {type: Number, attribute: 'subject-ct'},
      avatarSize: {type: String, attribute: 'avatar-size'},
      textWidth: {type: String, attribute: 'text-width'},
      title: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('PersonModel');
    this.data = {};
    this.showSnippet = false;
    this.showSubjects = false;
    this.subjectCt = 4;
    this.avatarSize = "md";
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
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
        this.getLastName()+', '+this.getFirstName(),
        this.PersonModel.getSnippet(this.data)
      );

      this.title = result.title;
      if( result.showSnippet === false ) {
        this.showSnippet = false;
      }
    }
  }

  getName() {
    if (!this.data) return "";
    return this.PersonModel.getBestLabel(this.data);
  }

  getFirstName() {
    return this.PersonModel.getNameObject(this.data).fname;
  }
  getLastName() {
    return this.PersonModel.getNameObject(this.data).lname;
  }
  getAvatar() {
    return this.PersonModel.getAvatarSrc(this.data);
  }
  getLandingPage() {
    return this.PersonModel.getLandingPage(this.data);
  }
  getTitle(){
    return this.PersonModel.getHeadlineTitle(this.data);
  }
  getSnippet(){
    return this.PersonModel.getSnippet(this.data);
  }
  getSubjects(){
    let subjects = this.PersonModel.getResearchSubjects(this.data);
    return subjects.slice(0, this.subjectCt);
  }
}

customElements.define('rp-person-preview', RpPersonPreview);
