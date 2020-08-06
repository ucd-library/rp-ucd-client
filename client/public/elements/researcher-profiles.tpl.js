import { html } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import styles from "./styles/site.html"

export default function render() {
return html`

<style>
  :host {
    display: block;
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
  #masthead .logo {
    height: var(--masthead-logo-height);
  }
  #app-header-content {
    box-shadow: 0 2px 1px rgba(0,40,85,0.15);
  }
  #nav-left a {
    padding: 15px 20px;
    text-transform: uppercase;
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
  #app-footer .footer-column {
  }

  @media (min-width: 768px) {
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

  ${styles}


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
      <div class="small bold hlist">
        <a class="no-decoration" href="#">Help</a>
        ${this.user ? html`
          <a class="no-decoration" href="/auth/logout">Logout</a>
          ` : html`
          <a class="no-decoration" href="/auth/login">Login</a>
          `}

      </div>
    </div>
    <div class="container">
    <hr class="mb-0 mt-0 light dashed">
    </div>

    <div id="nav-container" class="container flex flex-wrap align-items-center justify-content-between">
      <div id="nav-left" class="flex align-items-center bold">
        ${this.navLinks.map(link => html`<a href=${link.href} ?this-page="${link.page == this.page}" class="text-primary no-decoration">${link.text}</a>`)}
      </div>
      <div id="nav-right" class="flex align-items-center">
        <rp-quick-search></rp-quick-search>
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
  <app-page-components id="components"></app-page-components>
  <rp-page-home id="home"></rp-page-home>
  <rp-page-people id="people"></rp-page-people>
  <app-page-search id="search"></app-page-search>
  <app-page-person id="person"></app-page-person>
</iron-pages>
<div id="app-footer">
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
      ${this.theme.universityLogo? html`<img class="logo" alt="Logo" src="${this.theme.universityLogo}">` : html``}
      <hr class="flex-grow-1">
    </div>
    ${this.theme.footerLines? this.theme.footerLines.map(line => html`<div class="flex align-items-center justify-content-center mb-3">${unsafeHTML(line)}</div>`) : html``}
  </div>
</div>
`;}
