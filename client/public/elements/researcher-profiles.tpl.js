import { html } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import styles from "./styles/site.html"

export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
    min-width: 360px;
  }

  #loading {
    width: 100%;
    min-height: 700px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  #loading img {
    animation: showLoading 400ms ease-in;
  }

  @keyframes showLoading {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  #loading img {
    animation: showLoading 400ms ease-in;
  }

  .loading-dots {
    text-align: center;
    z-index: 5;
    color: var(--tcolor-primary);
  }

  .dot {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    position: relative;
    font-size: 3.5em;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
  }

  .dot.one { animation-delay: 0.2s; }
  .dot.two { animation-delay: 0.4s; }
  .dot.three { animation-delay: 0.6s; }

  @keyframes showHideDot {
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }

  #masthead {
    width: 100%;
    height: var(--masthead-height);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #masthead .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #masthead .logo {
    height: var(--masthead-logo-height);
  }
  #masthead .hamburger {
    color: var(--tcolor-primary70);
    left: 15px;
    width: 24px;
    height: 24px;
    z-index: 1;
  }
  #masthead .hamburger::after{
    content: "";
    background-color: #fff;
    opacity: .75;
    z-index: -1;
    height: var(--masthead-height);
    left: -9px;
    width: 39px;
    position: absolute;
    cursor: pointer;
  }
  #masthead .hamburger:hover {
    color: var(--tcolor-link-hover-text);
  }
  #app-mobile-menu {
    background-color: #fff;
    width: 100%;
    position: absolute;
    height: calc(100% - var(--masthead-height));
    z-index: 100;
    top: var(--masthead-height);
    display: flex;
    flex-direction: column;
  }
  #app-mobile-menu .container {
    margin: 0;
    padding: 0 24px;
    width: calc(100% - 48px);
  }
  #app-mobile-menu .search-box {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  #app-mobile-menu rp-search {
    width: 100%;
    max-width: 100%;
  }
  #app-mobile-menu .nav-links {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  #app-mobile-menu .nav-links a {
    display: flex;
    height: 50px;
    padding-left: 14px;
    align-items: center;
    color: var(--tcolor-primary);
    text-decoration: none;
    font-weight: var(--font-weight-bold);
  }
  #app-mobile-menu .nav-links a:hover {
    color: var(--tcolor-link-hover-text);
  }
  #app-mobile-menu a.login-button {
    font-size: var(--font-size);
    font-weight: var(--font-weight-bold);
    padding: 15px 50px;
    cursor: pointer;
    transition: .3s;
    color: var(--tcolor-primary);
    display: block;
    text-decoration: none;
    background-color: var(--tcolor-bg-primary);
    margin-top: 20px;
  }
  #app-mobile-menu a.login-button:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-light);
  }
  #app-mobile-menu .account {
    flex-grow: 1;
    background-color: var(--tcolor-bg-primary);
    padding-top: 24px;
  }
  #app-mobile-menu .greeting {
    font-size: var(--font-size-h2);
    font-weight: var(--font-weight-bold);
    padding-bottom: 24px;
    padding-top: 15px;
  }
  #app-header-content {
    position: relative;
    /* box-shadow: 0 2px 1px rgba(0,40,85,0.15); */
  }
  #app-header-content:after {
    content: "";
    height: 2px;

    /* Expand element */
    position: absolute;
    left: 0px;
    /* top: 0px; */
    right: 0px;
    bottom: 0px;

    -moz-box-shadow: inset 0 2px 1px rgba(0,40,85,0.15);
    -webkit-box-shadow: inset 0 2px 1px rgba(0,40,85,0.15);
    box-shadow: 0 2px 1px rgba(0,40,85,0.15);

    /* Disable click events */
    pointer-events: none;
  }
  #desktop-menu {
    display: none;
  }
  #nav-container {
    min-height: 56px;
  }
  #nav-left a {
    padding: 15px 10px;
    text-transform: uppercase;
  }
  #nav-left a:first-child {
    padding-left: 0;
  }
  #nav-left a.selected {
    background-color: var(--tcolor-secondary);
  }
  #nav-left a:hover {
    color: var(--tcolor-link-hover-text) !important;
  }
  #app-footer {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    padding: 40px 0;
    font-size: var(--font-size-small);
  }
  #app-footer .logo-line {
    padding: 40px 0;
  }
  #app-footer .logo-line .logo {
    width: 250px;
  }
  #app-footer .logo-line hr {
    border-color: rgba(255,255,255,0.25);
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
  }
  #app-footer .logo-line  hr:first-of-type {
    margin-right: 15px;
  }
  #app-footer .logo-line  hr:last-of-type {
    margin-left: 15px;
  }
  #app-footer .footer-top {
    display: block;
  }
  #app-footer .footer-top .logo {
    max-width: 200px;
    height: auto;
  }
  #app-footer a {
    text-decoration: underline;
    color: var(--tcolor-light);
  }
  #app-footer .address {
    line-height: 1.75;
  }
  #app-footer .title {
    font-weight: var(--font-weight-bold);
    font-size : var(--font-size-h3);
    margin-bottom: 10px;
    margin-top: 20px;
  }
  #app-footer .col-item {
    padding: 5px 0;
  }

  @media (min-width: 480px) {
    #desktop-menu {
      display: flex;
    }
  }
  @media (min-width: 600px) {
    #nav-left a {
      padding: 15px 20px;
    }
  }
  @media (min-width: 800px) {
    #nav-left a:first-child {
      padding-left: 20px;
    }
    #app-footer .footer-top {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: auto auto auto auto;
    }
    #app-footer .footer-column {
      max-width: 250px;
    }
    #app-footer .title {
      margin-top: 0;
    }
  }


</style>

<!--
  Required for AppStateModel
  @ucd-lib/app-state-model imports this element
-->
<app-route .appRoutes="${this.appRoutes}"></app-route>

<div id="app-header">
  ${this._renderMasthead()}
  <div id="app-header-content" class="bg-light text-primary">
    <div class="container flex align-items-center justify-content-between">
      <a href="/" class="no-decoration">
        <h1>
          ${this.theme.siteTitle? html`<span class="text-primary">${this.theme.siteTitle}</span>` : html``}
          ${this.theme.siteSubTitle? html`<span class="weight-regular italic text-primary50">${this.theme.siteSubTitle}</span>` : html``}
        </h1>
      </a>
      <div class="small bold hlist" id="desktop-menu">
        <a class="no-decoration" href="/help">Help</a>
        ${this.user ? html`     
              <rp-dropdown no-padding
                sticky-title="${this.user.username.split('@')[0]}"
                use-links
                .choices= ${this.accountLinks}
                @new-selection=${this._handleUserDropdownSelection}>
              </rp-dropdown>
          ` : html`
          <a class="no-decoration" href="/auth/login">Login</a>
          `}

      </div>
    </div>
    <div class="container">
    <hr class="mb-0 mt-0 light dashed">
    </div>

    
    <div id="nav-container" class="container flex flex-wrap align-items-center justify-content-between">
      <rp-icon @click="${this.closeQuickSearch}" ?hidden="${!this.hideMainNav}" icon="iron-chevron-right" circle-bg is-link></rp-icon>
      <div id="nav-left" class="flex align-items-center bold" ?hidden="${this.hideMainNav}">
        ${this.navLinks.map(link => html`
        <a href=${link.href} ?this-page="${link.page == this.page}" class="text-primary no-decoration ${link.page == 'help' ? 'hidden-mobile' : ''}">${link.text}</a>`)}
      </div>
      <div id="nav-right" class="flex align-items-center">
        <rp-quick-search id="quick-search" @input-status="${this._onQuickSearchClick}" @new-search="${this._onSearch}" input-value="${this.textQuery}" ?opened="${this.textQuery}" input-width="${this.quickSearchWidth}"></rp-quick-search>
      </div>
    </div>
  </div>
</div>


<iron-pages
  selected="${this.page}"
  attr-for-selected="id"
  selected-attribute="visible">

  <div id="loading" class="my-3">
    <img src="${this.theme.loadingIcon}" style="max-width: 128px" />
    <div class="loading-dots">
      <h1 class="dot one">.</h1><h1 class="dot two">.</h1><h1 class="dot three">.</h1>
    </div>
  </div>
  <div id="app-mobile-menu">
    <div class="container bg-primary search-box">
      <rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}" include-all-option></rp-search>
    </div>
    <div class="container nav-links">
      <a href="/" class="upper-case border-bottom">HOME</a>
      ${this.navLinks.map((link, i) => html`
        <a href="${link.href}" class="upper-case ${i < this.navLinks.length - 1 || !this.user ? 'border-bottom': ''}">${link.text}</a>
      `)}
    </div>
    ${this.user ? html`
    <div class="container account">
      <div class="text-default italic">Logged in as <span class="bold">${this.userName}</span></div>
      <div class="greeting">Hello, ${this.userName}!</div>
      <div class="nav-links">
        ${this.accountLinks.map((link, i) => link.href ? 
          html`<a href="${link.href}" class="border-top border-white">${link.text}</a>` :
          html`<a class="border-top border-white" @click="${this._onMobileNavClick}" action="${link.action}">${link.text}</a>`
        )}
      </div>
    </div>
    ` : html`
    <div class="container flex justify-content-center">
      <a class="login-button" href="/auth/login">LOG IN</a>
    </div>
    `}
  </div>
  <app-page-components id="components"></app-page-components>
  <rp-page-home id="home"></rp-page-home>
  <rp-page-people id="people"></rp-page-people>
  <rp-page-individual id="individual"></rp-page-individual>
  <rp-page-works id="works"></rp-page-works>
  <rp-page-work id="work"></rp-page-work>
  <rp-page-subjects id="subjects"></rp-page-subjects>
  <rp-page-subject id="subject"></rp-page-subject>  
  <rp-page-organizations id="organizations"></rp-page-organizations>
  <rp-page-organization id="organization"></rp-page-organization>
  <rp-page-help id="help"></rp-page-help>
  <rp-page-search id="search"></rp-page-search>
  <rp-page-tou id="termsofuse"></rp-page-tou>
</iron-pages>
<div id="app-footer" ?hidden="${this.page == 'app-mobile-menu'}">
  <div class="container">
    <div class="footer-top">
      <div>
        ${this.theme.libraryLogo? html`<a href="${this.theme.libraryUrl}"><img class="logo" alt="Logo" src="${this.theme.libraryLogo}"></a>` : html``}
        <div class="address mt-4">
        ${this.theme.libraryAddress? this.theme.libraryAddress.map(line => html`<div>${unsafeHTML(line)}</div>`) : html`` }
        </div>
        ${this.theme.libraryEmail ? html`<div class="mt-4"><a href="mailto:${this.theme.libraryEmail}">${this.theme.libraryEmail}</a></div>`: html`` }
      </div>
      ${this._renderFooterColumns()}
    </div>
    <div class="flex align-items-center logo-line">
      <hr class="flex-grow-1">
      ${this.theme.universityLogo? html`<a href="${this.theme.universityUrl}"><img class="logo" alt="Logo" src="${this.theme.universityLogo}"></a>` : html``}
      <hr class="flex-grow-1">
    </div>
    ${this.theme.footerLines? this.theme.footerLines.map(line => html`<div class="flex align-items-center flex-wrap justify-content-center mb-3">${unsafeHTML(line)}</div>`) : html``}
    <div ?hidden="${!this.showVersion}">
      <div>${APP_CONFIG.env.APP_VERSION}</div>
      <div>Build Time: ${APP_CONFIG.env.BUILD_TIME}</div>
      <div>Client Tag: ${APP_CONFIG.env.CLIENT_TAG}</div>
      <div>Vessel Tag: ${APP_CONFIG.env.VESSEL_TAG}</div>
    </div>
  </div>
</div>
`;}
