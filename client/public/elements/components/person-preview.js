import { LitElement, html } from 'lit-element';
import render from './person-preview.tpl.js';

import "./badge";
export class RpPersonPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {
  static get properties() {
  return {
    data: {type: Object},
    showSnippet: {type: Boolean, attribute: 'show-snippet'},
    avatarSize: {type: String, attribute: 'avatar-size'},
    textWidth: {type: String, attribute: 'text-width'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('PersonModel');
    this.data = {};
    this.showSnippet = false;
    this.avatarSrc = "md";
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
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
}

customElements.define('rp-person-preview', RpPersonPreview);
