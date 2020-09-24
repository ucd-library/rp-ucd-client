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

// default pages
import './pages/terms-of-use/rp-page-tou'

import "@polymer/iron-pages"

export default class ResearcherProfiles extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      appRoutes : {type: Array},
      page : {type: String},
      theme: {type: Object},
      navLinks: {type: Array},
      user: {type: Object},
      textQuery: {type: String},
      isSearch: {type: Boolean}
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
    this.textQuery = "";
    this.isSearch = false;
    this.navLinks = [{text: 'People', page: 'people', href: '/people'},
                     {text: 'Organizations', page: 'organizations', href: '/organizations'},
                     {text: 'Works', page: 'works', href: '/works'},
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
    if (e.location.query.s) {
      this.isSearch = true;
      this.textQuery = e.location.query.s;
    }
    else {
      this.textQuery="";
      this.isSearch = false;
    }

    let page = e.page;
    if( this.page === page ) return;

    if (!this.loadedPages[page]) {
      this.page = 'loading';
      this.loadedPages[page] = this.loadPage(page);
    }
    await this.loadedPages[page];
    this.page = page;

    window.scrollTo(0, 0);
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
      return import(/* webpackChunkName: "page-people" */ "./pages/people/rp-page-people")
    } else if( page === 'individual' ) {
      return import(/* webpackChunkName: "page-individual" */ "./pages/individual/rp-page-individual")
    } else if( page === 'works' ) {
      return import(/* webpackChunkName: "page-works" */ "./pages/works/rp-page-works")
    } else if( page === 'work' ) {
      return import(/* webpackChunkName: "page-work" */ "./pages/work/rp-page-work")
    } else if( page === 'organizations' ) {
      return import(/* webpackChunkName: "page-organizations" */ "./pages/organizations/rp-page-organizations")
    } else if( page === 'organization' ) {
      return import(/* webpackChunkName: "page-organization" */ "./pages/organization/rp-page-organization")
    } else if( page === 'help' ) {
      return import(/* webpackChunkName: "page-help" */ "./pages/help/rp-page-help")
    } else if( page === 'search' ) {
      return import(/* webpackChunkName: "page-search" */ "./pages/search/rp-page-search")
    }
  }

  _onSearch(e){
    let url = "/search";
    if (e.target.nodeName == "RP-QUICK-SEARCH") {

      // keep existing main facet if search
      if (this.isSearch && this.shadowRoot.getElementById('search')) {
        let s = this.shadowRoot.getElementById('search');
        if (s.mainFacet != 'none') {
          url += ("/" + s.mainFacet)
        }
      }
      url += `?s=${encodeURIComponent(e.target.inputValue)}`
    }
    //console.log(url);
    this.AppStateModel.setLocation(url);
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
