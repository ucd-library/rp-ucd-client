import { LitElement, html } from 'lit-element';
import render from './link-list-counts.tpl.js';
import { classMap } from 'lit-html/directives/class-map';

import "./view-all";

export class RpLinkListCounts extends LitElement {
  static get properties() {
  return {
    links: {type: Array},
    viewAllLink: {type: Object, attribute: 'view-all-link'},
    header: {type: Object, attribute: 'header'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.links = [];

    this._linkClick = new CustomEvent('link-click', {
      detail: {
        message: 'A new link has been clicked.'
      }
    });
  }

  _renderHeader(){
    if (!this.header) {
      return html``;
    }
    if (!this.header.text) {
      return html``;
    }
    return html`<div class="row header">
                <div class="count">${this.header.count}</div>
                <div class="link-container"><span>${this.header.text}</span></div>
                </div>`;
  }

  _renderLink(link, index){
    if (!link.text) {
      return html``;
    }
    if (link.href) {
      return html`<div class="row">
      <div class="count">${link.count}</div>
      <div class="link-container">
        <a link-index="${index}" class="link" href="${link.href}">${link.text}</a>
      </div>
    </div>`;
    }
    else {
      return html`<div class="row">
      <div class="count">${link.count}</div>
      <div class="link-container">
        <span @click="${this.handleClick}" link-index="${index}" class="link">${link.text}</span>
      </div>
    </div>`;

    }

  }

  _renderViewAll(){
    if (!this.viewAllLink) {
      return html``;
    }
    if (!this.viewAllLink.text) {
      this.viewAllLink.text = "View All";
    }
    if (this.viewAllLink.href) {
      return html`<div class="row view-all"><div class="count"></div><rp-view-all href="${this.viewAllLink.href}" text="${this.viewAllLink.text}"></rp-view-all></div>`
    }
    else {
      return html`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`
    }
    
  }

  handleClick(e) {
    if ( e.target.classList.contains('link') ) {
      this.Clickedlink = this.links[parseInt(e.target.getAttribute('link-index'))]
    }
    else {
      this.Clickedlink = this.viewAllLink;
    }
    this.dispatchEvent(this._linkClick);
  }

}

customElements.define('rp-link-list-counts', RpLinkListCounts);
