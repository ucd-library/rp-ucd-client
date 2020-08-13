import { LitElement, html } from 'lit-element';
import render from "./researcher-profiles.tpl.js"
import { styleMap } from 'lit-html/directives/style-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

// sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils";

// Polymer
import "@polymer/iron-icons/iron-icons"
import "@polymer/iron-icons/av-icons"
import "@polymer/iron-icons/hardware-icons"

// styles
import "./styles/properties"
import "./styles/site"

// main library
import "../src"

// app elements
import "./components/quick-search"
import "./components/dropdown"

import "@polymer/iron-pages"

export default class ResearcherProfiles extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      appRoutes : {type: Array},
      page : {type: String},
      theme: {type: Object},
      navLinks: {type: Array},
      user: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.appRoutes = APP_CONFIG.appRoutes;
    this.theme = APP_CONFIG.theme;
    this.page = 'loading';
    this.loadedPages = {};
    this.user = APP_CONFIG.user;
    this.navLinks = [{text: 'People', page: 'people', href: '/people'},
                     {text: 'Organizations', page: 'organizations', href: '#'},
                     {text: 'Works', page: 'works', href: '#'},
                     {text: 'Help', page: 'help', href: '#'}];

    this._injectModel('AppStateModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   *
   * @param {Object} e
   */
  async _onAppStateUpdate(e) {
    console.log('Current app state:', e);
    let page = e.page;
    if (!this.loadedPages[page]) {
      this.page = 'loading';
      this.loadedPages[page] = this.loadPage(page);
    }
    await this.loadedPages[page];
    this.page = page;
  }

  /**
   * @method loadPage
   * @description code splitting done here.  dynamic import a page based on route
   *
   * @param {String} page page to load
   */
  loadPage(page) {
    if( page === 'home' ) {
      return import(/* webpackChunkName: "page-home" */ "./pages/home/rp-page-home")
    } else if( page === 'components' ) {
      return import(/* webpackChunkName: "page-components" */ "./pages/components/app-components")
    } else if( page === 'people' ) {
      return import(/* webpackChunkName: "page-components" */ "./pages/people/rp-page-people")
    }
  }

  _renderMasthead(){
    if (!this.theme.masthead) {
      return html``;
    }
    let styles = {};
    styles['background-image'] = `url(${this.theme.masthead})`;
    return html`<div id="masthead" class="text-light flex align-items-center" style="${styleMap(styles)}">
                  <div class="container">${this.theme.universityLogo? html`<a href="${this.theme.universityUrl}"><img class="logo" alt="Logo" src="${this.theme.universityLogo}"></a>` : html``}</div>
                </div>`;
  }

  _renderFooterColumns(){
    let columnTemplates = [];
    let prefix = "footerColumn";
    for (let i of ["1","2","3"]) {
      let col = prefix + i;
      if (this.theme[col]) {
        columnTemplates.push(
          html`<div class="footer-column">
            ${this.theme[col].title ? html`<div class="title">${this.theme[col].title}</div>` : html``}
            ${this.theme[col].content ? html`${this.theme[col].content.map(line => html`<div class="col-item">${unsafeHTML(line)}</div>`)}` : html``}
          </div>`
        );
      }
    }

    if (columnTemplates.length > 0) {
      return html`${columnTemplates}`;
    }
    return html``;
  }

}

customElements.define('researcher-profiles', ResearcherProfiles);
