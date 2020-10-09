import { LitElement, html } from 'lit-element';
import render from './person-preview.tpl.js';

import "./badge";

export class RpPersonPreview extends LitElement {
  static get properties() {
  return {
    data: {type: Object},
    name: {type: String},
    _parsedData: {type: Object},
    href: {type: String},
    title: {type: String},
    badges: {type: Array},
    avatarSize: {type: String, attribute: 'avatar-size'},
    avatarSrc: {type: String, attribute: 'avatar-src'},
    textWidth: {type: String, attribute: 'text-width'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.badges = [];
    this.name = "";
    this._name = "";
    this.href = "";
    this.title = "";
    this.avatarSize = "";
    this.avatarSrc = "";
    this.data = {};
    this._parsedData = {name: "", href: "", title: "", avatarSize: "", avatarSrc: ""};
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
  }

  updated(props) {
    
    // allow individual attributes to override data object (if it exists)
    if (props.has('name')) {
      this._parsedData.name = this.name;
      this.requestUpdate();
    }
    if (props.has('href')) {
      this._parsedData.href = this.href
      this.requestUpdate();
    }
    if (props.has('title')) {
      this._parsedData.title = this.title
      this.requestUpdate();
    }
    if (props.has('avatarSize')) {
      this._parsedData.avatarSize = this.avatarSize
      this.requestUpdate();
    }
    if (props.has('avatarSrc')) {
      this._parsedData.avatarSrc = this.avatarSrc
      this.requestUpdate();
    }
    if (props.has('data') && Object.keys(this.data).includes('@id')) this._parseData();
    
  }

  _parseData() {
    this._parsedData.name = this._parseName();
    this._parsedData.title = this._parseTitle();
    this._parsedData.href = this._parseHref();
  }

  _parseName(){
    if (this.name) return this.name;
    let label = this.data.label;
    if (Array.isArray(label)) return label.sort((a,b)=> a.length - b.length)[0];
    return label;
  }

  _parseTitle(){
    if (this.title) return this.title;
    try {
      let title = "";
      if (Array.isArray(this.data.hasContactInfo)) {
        title = [...this.data.hasContactInfo].sort((a,b)=>(a.rank?a.rank:100)-(b.rank?b.rank:100))[0].title;
      } else{
        title = this.data.hasContactInfo.title;
      }
      if (Array.isArray(title)) return title.join(", ");
      if (!title) return "";
      return title;
    } catch (error) {
      return "";
    }
  }

  _parseHref(){
    if (this.href) return this.href;
    try {
      let personId = this.data['@id'].replace(APP_CONFIG.data.jsonldContext + ":", "");
      return `/individual/${personId}`;
    } catch (error) {
      return "";
    }
  }

  _renderBadge(badge) {
    if (typeof badge === 'string') {
      return html`<rp-badge>${badge}</rp-badge>`;
    }
    else if (typeof badge === 'object'){
      let t = badge.text;
      if (!t) {
        return html``;
      }
      let href = badge.href;
      if (href) {
        return html`<rp-badge href="${href}">${t}</rp-badge>`;
      }
      return html`<rp-badge>${t}</rp-badge>`;
    }
    else {
      return html``;
    }
  }
}

customElements.define('rp-person-preview', RpPersonPreview);
