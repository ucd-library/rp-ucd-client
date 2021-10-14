import { html } from 'lit-element';
import {renderHTML} from '../src/lib/santize-html.js';
import styles from "./styles/site.html"
import config from "../src/config"

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
    color: var(--ae-tcolor-primary);
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
    height: var(--ae-masthead-height);
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
    height: var(--ae-masthead-logo-height);
  }
  #masthead .hamburger {
    color: var(--ae-tcolor-primary70);
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
    height: var(--ae-masthead-height);
    left: -9px;
    width: 39px;
    position: absolute;
    cursor: pointer;
  }
  #masthead .hamburger:hover {
    color: var(--ae-tcolor-link-hover-text);
  }
  #app-mobile-menu {
    background-color: #fff;
    width: 100%;
    position: absolute;
    height: calc(100% - var(--ae-masthead-height));
    z-index: 100;
    top: var(--ae-masthead-height);
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
    color: var(--ae-tcolor-primary);
    text-decoration: none;
    font-weight: var(--ae-font-weight-bold);
  }
  #app-mobile-menu .nav-links a:hover {
    color: var(--ae-tcolor-link-hover-text);
  }
  #app-mobile-menu a.login-button {
    font-size: var(--ae-font-size);
    font-weight: var(--ae-font-weight-bold);
    padding: 15px 50px;
    cursor: pointer;
    transition: .3s;
    color: var(--ae-tcolor-primary);
    display: block;
    text-decoration: none;
    background-color: var(--ae-tcolor-bg-primary);
    margin-top: 20px;
  }
  #app-mobile-menu a.login-button:hover {
    background-color: var(--ae-tcolor-hover-bg);
    color: var(--ae-tcolor-light);
  }
  #app-mobile-menu .account {
    flex-grow: 1;
    background-color: var(--ae-tcolor-bg-primary);
    padding-top: 24px;
  }
  #app-mobile-menu .greeting {
    font-size: var(--ae-font-size-h2);
    font-weight: var(--ae-font-weight-bold);
    padding-bottom: 16px;
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
    min-height: 66px;
  }

  #nav-left {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  [quick-search-opened] #nav-left {
    display: none;
  }

  #nav-left a {
    padding: 15px 12px;
    text-transform: uppercase;
  }
  #nav-left a:first-child {
    padding-left: 0;
  }
  #nav-left a.selected {
    background-color: var(--ae-tcolor-secondary);
  }
  #nav-left a:hover {
    color: var(--ae-tcolor-link-hover-text) !important;
  }

  #nav-right {
    flex: 1;
    margin-left: 10px;
  }

  #close-quick-search {
    display: none;
  }
  [quick-search-opened] #close-quick-search {
    display: inline-block;
  }

  .nav-help {
    display: none;
  }
  .nav-grants {
    display: none;
  }

  #app-footer {
    background-color: var(--ae-tcolor-primary);
    color: var(--ae-tcolor-light);
    padding: 40px 0;
    font-size: var(--ae-font-size-small);
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
    color: var(--ae-tcolor-light);
  }
  #app-footer .address {
    line-height: 1.75;
  }
  #app-footer .title {
    font-weight: var(--ae-font-weight-bold);
    font-size : var(--ae-font-size-h3);
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
    #nav-left a {
      padding: 20px;
    }
  }
  
  @media (min-width: 600px) {
    #nav-left {
      display: flex !important;
    }
    #nav-right {
      max-width: 275px;
    }
    #close-quick-search {
      display: none !important;
    }
  }

  @media (min-width: 500px) {
    .nav-help {
      display: inline-block !important;
    }
  }
  @media (min-width:425px) {
    .nav-grants {
      display: inline-block !important;
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
  @media( max-width: 565px)  {
    .hide-hec lp {
      display: none;
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
  <div id="app-header-content" class="bg-light text-primary" ?hidden="${this.page === 'app-mobile-menu'}">
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
          <rp-dropdown 
            no-padding
            sticky-title="${this.userFirstName}"
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


    <nav id="nav-container"  class="container flex align-items-center justify-content-between" ?quick-search-opened="${this.quickSearchOpened}">
      <rp-icon id="close-quick-search" @click="${this._closeQuickSearch}" icon="iron-chevron-right" circle-bg is-link></rp-icon>

      <ul id="nav-left" role="menubar" aria-label="primary navigation" class="align-items-center bold">
        ${this.navLinks.map(link => html`
        <li role="none">
          <a href=${link.href} role="menuitem" ?this-page="${link.page == this.page}" class="text-primary no-decoration nav-${link.page}">${link.text}</a>
        </li>`)}
      </ul>

      <!-- TODO: remove -->
      <!-- <button @click="${this.testHarvest}">Harvest</button> -->
      <div id="nav-right" >
        <rp-quick-search 
          id="quick-search" 
          @new-search="${this._onSearch}" 
          @toggled="${this._onQuickSearchToggle}"
          input-value="${this.textQuery}">
        </rp-quick-search>
      </div>
    </nav>
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
      <!-- <div class="text-default italic">Logged in as <span class="bold">${this.userFirstName}</span></div> -->
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
  <ucdlib-icon style="margin:auto;width:135px; height:135px;"  icon="academic:scopus" size=24></ucdlib-icon>  
  <app-page-components id="components"></app-page-components>
  <rp-page-home id="home"></rp-page-home>
  <rp-page-people id="people"></rp-page-people>
  <rp-page-person id="person"></rp-page-person>
  <rp-page-works id="works"></rp-page-works>
  <rp-page-work id="work"></rp-page-work>
  <rp-page-concepts id="concepts"></rp-page-concepts>
  <rp-page-concept id="concept"></rp-page-concept>  
  <rp-page-organizations id="organizations"></rp-page-organizations>
  <rp-page-organization id="organization"></rp-page-organization>
  <rp-page-grants id="grants"></rp-page-grants>
  <rp-page-grant id="grant"></rp-page-grant> 
  <rp-page-help id="help"></rp-page-help>
  <rp-page-search id="search"></rp-page-search>
  <rp-page-tou id="termsofuse"></rp-page-tou>
  <rp-page-admin id="admin"></rp-page-admin>
  <rp-page-404 id="404"></rp-page-404>
</iron-pages>
<div id="app-footer" ?hidden="${this.page == 'app-mobile-menu'}">
  <div class="container">
    <div class="footer-top">
      <div>
        ${this.theme.libraryLogo? html`<a href="${this.theme.libraryUrl}"><img class="logo" alt="Logo" src="${this.theme.libraryLogo}"></a>` : html``}
        <div class="address mt-4">
        ${this.theme.libraryAddress? this.theme.libraryAddress.map(line => html`<div>${renderHTML(line)}</div>`) : html`` }
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
    ${this.theme.footerLines? this.theme.footerLines.map(line => html`<div class="flex align-items-center flex-wrap justify-content-center mb-3">${renderHTML(line)}</div>`) : html``}
    <div ?hidden="${!this.showVersion}">
      <div>${config.env.APP_VERSION}</div>
      <div>Build Time: ${config.env.BUILD_TIME}</div>
      <div>Client Tag: ${config.env.CLIENT_TAG}</div>
      <div>Vessel Tag: ${config.env.VESSEL_TAG}</div>
    </div>
  </div>
</div>
`;}
