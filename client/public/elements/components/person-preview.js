import { LitElement, html } from 'lit-element';
import render from './person-preview.tpl.js';

import "./badge";

export class RpPersonPreview extends LitElement {
  static get properties() {
  return {
    name: {type: String},
    href: {type: String},
    title: {type: String},
    badges: {type: Array},
    avatarSize: {type: String, attribute: 'avatar-size'},
    avatarSrc: {type: String, attribute: 'avatar-src'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    if (!this.badges) {
      this.badges = [];
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
