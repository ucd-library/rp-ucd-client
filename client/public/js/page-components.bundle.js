(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-components"],{

/***/ "./public/elements/components/accordian.js":
/*!*************************************************!*\
  !*** ./public/elements/components/accordian.js ***!
  \*************************************************/
/*! exports provided: RpAccordian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAccordian", function() { return RpAccordian; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _accordian_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordian.tpl.js */ "./public/elements/components/accordian.tpl.js");



class RpAccordian extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    title: {type: String},
    expanded: {type: Boolean, reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _accordian_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.expanded = false;
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  toggle(){
    this.expanded = !this.expanded;
  }
}

customElements.define('rp-accordian', RpAccordian);


/***/ }),

/***/ "./public/elements/components/accordian.tpl.js":
/*!*****************************************************!*\
  !*** ./public/elements/components/accordian.tpl.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");



function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    iron-icon {
      color: var(--tcolor-secondary);
      width: 24px;
      height: 24px;
      transition: .3s;
    }
    iron-icon[rotated] {
      transform: rotate(-90deg);
    }
    #container-title {
      cursor: pointer;
      display: flex;
    }
    #title:hover {
      color: var(--tcolor-link-hover-text);
    }
    #title {
      color: var(--tcolor-link-text);
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size);
    }
    #content {
      padding-left: 24px;
      font-size: var(--font-size);
      margin-top: 14px;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" ?hidden="${!this.title}">
    <div id="container-title" @click="${this.toggle}">
      <iron-icon icon="arrow-drop-down" ?rotated="${!this.expanded}"></iron-icon>
      <span id="title">${this.title}</span>
    </div>
    <div id="content" ?hidden="${!this.expanded}">
      <slot></slot>
    </div>
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/citation.js":
/*!************************************************!*\
  !*** ./public/elements/components/citation.js ***!
  \************************************************/
/*! exports provided: RpCitation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpCitation", function() { return RpCitation; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _citation_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citation.tpl.js */ "./public/elements/components/citation.tpl.js");



class RpCitation extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    title: {type: String},
    journal: {type: String},
    href: {type: String},
    pages: {type: String},
    citationStyle: {type: String, attribute: 'citation-style'}
  };
  }

  constructor() {
    super();
    this.render = _citation_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.citationStyle = "article";
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  handleClick(e){
    if (e.target.hasAttribute('disabled')) {
      return;
    }
    console.log("Citation was clicked: ", this.href);
  }

  _formatComponent(component, component_type) {
    if (!component) {
      return "";
    }
    if (component_type == 'title') {
      component += ".";
    }
    else if (component_type == 'journal') {
      component += ".";
    }
    return component;
  }
}

customElements.define('rp-citation', RpCitation);


/***/ }),

/***/ "./public/elements/components/citation.tpl.js":
/*!****************************************************!*\
  !*** ./public/elements/components/citation.tpl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");



function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    #title {
      color: var(--tcolor-link-text);
      cursor: pointer;
    }
    #title[disabled] {
      color: var(--tcolor-text);
      pointer-events: none;
      cursor: auto;
    }
    #title[disabled]:hover {
      color: var(--tcolor-text);
    }
    #title:hover {
      color: var(--tcolor-link-hover-text);
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" ?hidden="${!this.title}">
    <span id="title" @click="${this.handleClick}" ?disabled="${!this.href}">${this._formatComponent(this.title, 'title')}</span>
    <span id="journal">${this._formatComponent(this.journal, 'journal')}</span>
    <span id="pages">${this._formatComponent(this.pages, 'pages')}</span>
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/hero-image.js":
/*!**************************************************!*\
  !*** ./public/elements/components/hero-image.js ***!
  \**************************************************/
/*! exports provided: RpHeroImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpHeroImage", function() { return RpHeroImage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _hero_image_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image.tpl.js */ "./public/elements/components/hero-image.tpl.js");



class RpHeroImage extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    src: {type: String},
    assetFolder: {type: String, attribute: "asset-folder"},
    assetMax: {type: parseInt, attribute: "asset-max"},
    assetPick: {type: parseInt, attribute: "asset-pick", reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _hero_image_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.assetFolder = "/images/profile-features/"
    this.assetMax = 29;
    this.shuffle();
  }

  constructClasses() {
    let classes = {};

    return classes;
  }

  constructStyles() {
    let styles = {};

    if (this.src) {
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.src})`;
    }
    else {
      if (this.assetPick < 0) {
        this.assetPick = 1;
      }
      if (this.assetPick > this.assetMax) {
        this.assetPick = this.assetMax;
      }
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.assetFolder + this.assetPick + ".jpg"})`;
    }
    return styles;
  }

  shuffle() {
    if (!this.src) {
      this.assetPick = Math.floor(Math.random() *  this.assetMax + 1);
    }
  }
}

customElements.define('rp-hero-image', RpHeroImage);


/***/ }),

/***/ "./public/elements/components/hero-image.tpl.js":
/*!******************************************************!*\
  !*** ./public/elements/components/hero-image.tpl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");




function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
    }
    .container {
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slot {
      margin-left: 10px;
      margin-right: 10px;
    }
    #top {
      height: 30px;
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #bottom {
      height: 30px;
      padding-bottom: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/link-list-counts.js":
/*!********************************************************!*\
  !*** ./public/elements/components/link-list-counts.js ***!
  \********************************************************/
/*! exports provided: RpLinkListCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpLinkListCounts", function() { return RpLinkListCounts; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _link_list_counts_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-list-counts.tpl.js */ "./public/elements/components/link-list-counts.tpl.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _view_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-all */ "./public/elements/components/view-all.js");






class RpLinkListCounts extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    links: {type: Array},
    viewAllLink: {type: Object, attribute: 'view-all-link'},
    header: {type: Object, attribute: 'header'}
  };
  }

  constructor() {
    super();
    this.render = _link_list_counts_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.links = [];

    this._linkClick = new CustomEvent('link-click', {
      detail: {
        message: 'A new link has been clicked.'
      }
    });
  }

  _renderHeader(){
    if (!this.header) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    if (!this.header.text) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row header">
                <div class="count">${this.header.count}</div>
                <div class="link-container"><span>${this.header.text}</span></div>
                </div>`;
  }

  _renderLink(link, index){
    if (!link.text) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row">
                  <div class="count">${link.count}</div>
                  <div class="link-container">
                    <span @click="${this.handleClick}" link-index="${index}" class="link">${link.text}</span>
                  </div>
                </div>`;
  }

  _renderViewAll(){
    if (!this.viewAllLink) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    if (!this.viewAllLink.text) {
      this.viewAllLink.text = "View All";
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`
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


/***/ }),

/***/ "./public/elements/components/link-list-counts.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/components/link-list-counts.tpl.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");


function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
    }
    .container {
      display: block;
    }
    .row {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      margin-bottom: 18px;
    }
    .row.header {
      color: var(--tcolor-text);
      font-size: var(--font-size-h2);
      margin-bottom: 34px;
    }
    .row.view-all {
      padding-top: 10px;
    }
    .count {
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      text-align: right;
      width: calc(30% - 10px);
      padding-right: 10px;
    }
    .link-container {
      width: 70%;
    }
    .link {
      cursor: pointer;
      text-decoration: underline;
      color: var(--tcolor-link-text);
    }
    .link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.disabled {
      color: var(--tcolor-link-disabled-text);
      pointer-events: none;
      cursor: auto;
    }
    link.disabeld:hover {
      color: var(--tcolor-link-disabled-text);
    }
    .link.selected:hover {
      color: var(--tcolor-text);
    }
  </style>
  <div class="container">
    ${this._renderHeader()}
    ${this.links.map((link, index) => this._renderLink(link, index))}
    ${this._renderViewAll()}
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/search.js":
/*!**********************************************!*\
  !*** ./public/elements/components/search.js ***!
  \**********************************************/
/*! exports provided: RpSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpSearch", function() { return RpSearch; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _search_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.tpl.js */ "./public/elements/components/search.tpl.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown */ "./public/elements/components/dropdown.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./public/elements/components/icon.js");





class RpSearch extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    facets: {type: Array},
    inputValue: {type: String, attribute: "input-value", reflect: true},
    placeholder: {type: String},
    activeFacet: {type: parseInt, attribute: 'active-facet', reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _search_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.facets = [{"text": "PEOPLE"}, {"text": "ORGANIZATIONS"}, {"text": "WORKS"}];
    this.placeholder = "Search the registry";
    this.activeFacet = 0;
    this.inputValue = "";

    this._newSearch = new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });
  }

  updated(changedProperties) {

    if (changedProperties.has('inputValue') || changedProperties.has('activeFacet')) {
      this.searchObject = {search: this.inputValue, facet: this.facets[this.activeFacet]};
    }
  }

  _constructClasses() {
    let classes = {};

    return classes;
  }

  doSearch() {
    if (!this.inputValue) {
      return;
    }
    this.dispatchEvent(this._newSearch);
  }

  _handleKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.doSearch();
    }
  }
}

customElements.define('rp-search', RpSearch);


/***/ }),

/***/ "./public/elements/components/search.tpl.js":
/*!**************************************************!*\
  !*** ./public/elements/components/search.tpl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");




function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: inline-block;
      background-color: var(--tcolor-light);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #input {
      flex-grow: 1;
      height: 44px;
      border: none;
      background-color: var(--tcolor-light);
      font-size: var(--font-size);
      padding-left: 10px;
    }
    #icon-container {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 15px;
      padding-right: 15px;
      background-color: var(--tcolor-light);
    }
    input:focus {
      outline: none;
    }
    .line {
      background-color: var(--tcolor-primary10);
      width: 1px;
      height: 34px;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._constructClasses())}">
    <rp-dropdown choices="${JSON.stringify(this.facets)}"
                 chosen="${this.activeFacet}"
                 @new-selection="${e => this.activeFacet = e.target.chosen}">
    </rp-dropdown>
    <div class="line"></div>
    <input type="text"
          .value="${this.inputValue}"
           placeholder="${this.placeholder}"
           @input="${(e) => this.inputValue = e.target.value}"
           @keyup="${this._handleKeyup}"
           id="input">
    <div id="icon-container">
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    </div>

  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/view-all.js":
/*!************************************************!*\
  !*** ./public/elements/components/view-all.js ***!
  \************************************************/
/*! exports provided: RpViewAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpViewAll", function() { return RpViewAll; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _view_all_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-all.tpl.js */ "./public/elements/components/view-all.tpl.js");



class RpViewAll extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    text: {type: String},
    href: {type: String},
    justify: {type: String}
  };
  }

  constructor() {
    super();
    this.render = _view_all_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.text = "View All";
    this.href = "";
  }

  constructClasses() {
    let classes = {};
    if (this.justify) {
      classes[this.justify] = true;
    }
    return classes;
  }

  _renderInnerContent() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span class="text">${this.text}</span><iron-icon icon="av:play-arrow"></iron-icon>`;
  }
}

customElements.define('rp-view-all', RpViewAll);


/***/ }),

/***/ "./public/elements/components/view-all.tpl.js":
/*!****************************************************!*\
  !*** ./public/elements/components/view-all.tpl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");




function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      color: var(--tcolor-text);
      transition: .3s;
    }
    .container.start {
      justify-content: flex-start;
    }
    .container.center {
      justify-content: center;
    }
    .container:hover {
      color: var(--tcolor-link-hover-text) !important;
    }
    .container:hover iron-icon, .container:hover a{
      color: var(--tcolor-link-hover-text) !important;
    }
    a {
      text-decoration: none;
      color: var(--tcolor-text);
      transition: .3s;
    }

    iron-icon {
      color: var(--tcolor-secondary);
      transition: .3s;
      width: 28px;
      min-width: 28px;
      height: 28px;
    }
    .view-all {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}">
    ${this.href ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <a class="view-all" href="${this.href}">${this._renderInnerContent()}</a>
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="view-all">${this._renderInnerContent()}</div>
      `}

  </div>
  `;
}


/***/ }),

/***/ "./public/elements/pages/components/app-components.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/components/app-components.js ***!
  \************************************************************/
/*! exports provided: AppPageComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageComponents", function() { return AppPageComponents; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _app_components_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-components.tpl.js */ "./public/elements/pages/components/app-components.tpl.js");


//import { colorStyles } from '../../styles/site.js';

class AppPageComponents extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor() {
    super();
    this.render = _app_components_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }
}
customElements.define('app-page-components', AppPageComponents);


/***/ }),

/***/ "./public/elements/pages/components/app-components.tpl.js":
/*!****************************************************************!*\
  !*** ./public/elements/pages/components/app-components.tpl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_a_z__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/a-z */ "./public/elements/components/a-z.js");
/* harmony import */ var _components_accordian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/accordian */ "./public/elements/components/accordian.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/avatar */ "./public/elements/components/avatar.js");
/* harmony import */ var _components_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/badge */ "./public/elements/components/badge.js");
/* harmony import */ var _components_citation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/citation */ "./public/elements/components/citation.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dropdown */ "./public/elements/components/dropdown.js");
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_link_list_counts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/link-list-counts */ "./public/elements/components/link-list-counts.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");
/* harmony import */ var _components_quick_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/quick-search */ "./public/elements/components/quick-search.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/search */ "./public/elements/components/search.js");
/* harmony import */ var _components_view_all__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/view-all */ "./public/elements/components/view-all.js");




















function render() {
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
    margin: 15px;
  }
  section {
    padding: 15px;
    margin-bottom: 15px;
  }
  section.hero {
    margin-bottom: 0;
  }
  rp-hero-image {
    margin-bottom: 15px;
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .people-vertical {
    padding-left: 20px;
    padding-right: 20px;
  }
  .people-vertical rp-person-preview {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .people-columns {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 500px) {
    .people-columns {
      display: block;
    }
  }
  .subnav {
    font-size: 18px;
    padding: 20px;
  }
  .linklist1 {
    display: flex;
    align-items: flex-start;
    margin-left: 15px;
  }
  rp-accordian {
    margin-bottom: 22px;
  }
  rp-citation {
    margin-bottom: 10px;
  }
  .quick-search-container {
    display: flex;
    justify-content: flex-end;
  }
  .search-container {
    width: 75%;
    display: flex;
    justify-content: center;
  }
  .search-blue {
    background-color: var(--tcolor-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>

<h1 class="text-primary">Site Components</h1>
<p>These don't connect to the main bus, and they don't inherit any shared styles (other than site variables).
You control them with attributes, and build more complicated (bus-connected) elements with them.
</p>
<section>
<h2>A-Z list</h2>
<p>Attach a listener to be notified when the selected letter changes i.e.<br /><code>@changed-letter=${(e) => console.log(e.target.selectedLetter)}</code></p>
<rp-a-z  selected-letter="all" @changed-letter=${(e) => console.log(e.target.selectedLetter)}></rp-a-z>
<p>Use <code>hide-all</code> to not render the All link</p>
<rp-a-z hide-all=true selected-letter="f" disabled-letters=${JSON.stringify(['g','q', 'S'])}></rp-a-z>
</section>

<section>
<h2>Accordians for FAQ section</h2>
<p>Use the <code>title</code> attribute to specify the link text. The expandable content is an unnamed slot.</p>
<rp-accordian title="How often do you update the data in the registry?">${'Hello world! '.repeat(40)}</rp-accordian>
<rp-accordian></rp-accordian>
<rp-accordian expanded title="Use the expanded attribute or toggle method to control expansion">
This is open on page load because I'm using the expanded attribute.
</rp-accordian>
</section>

<section>
<h2>Basic Alert</h2>
<p>Not part of the initial design specs, but needed some way to handle errors. Uses slot.</p>
<rp-alert>Uh oh! Something went horribly wrong (not that that ever happens). Can't load content!</rp-alert>
</section>

<section>
<h2>Avatars</h2>
<p>Use the size attribute to adjust Kimmy-defined sizes.</p>
<rp-avatar size="lg"></rp-avatar>
<rp-avatar></rp-avatar>
<rp-avatar size="sm"></rp-avatar>
<p>Use the src attribute to use a photo.<p>
<rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"></rp-avatar>
<rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"></rp-avatar>
</section>

<section>
<h2>Badges</h2>
<small>
  <rp-badge>I'm a Badge!</rp-badge>
  <rp-badge>Me Too!</rp-badge>
  <rp-badge>Colors</rp-badge>
  <rp-badge>Are a Sequence</rp-badge>
  <rp-badge>If part of</rp-badge>
  <rp-badge>the same parent node</rp-badge>
  <rp-badge>Color starts over!</rp-badge>
  <rp-badge>Yellow again...</rp-badge>
</small>
<p>Badges inherit font size <rp-badge>16px fontsize</rp-badge>
but you can also increase padding with the size attribute <rp-badge size="lg">size lg</rp-badge>
</p>
<p>You can manually change the color with the color-sequence attribute
<rp-badge color-sequence="5">color-sequence = 5</rp-badge>
</p>
<p>If you pass in an href attribute, <rp-badge href="https://www.google.com">the badges</rp-badge> <rp-badge href="https://www.library.ucdavis.edu">become links</rp-badge>
and have hover styles.
</p>
</section>

<section>
<h2>Citations</h2>
<p>Simply renders bibliographic info in some standard format. What format that is, I need to find out.</p>
<rp-citation title="Some Witty Eye-catching Title: The Effect of X on Z"
             href="some link"
             journal="Nature"
             pages="12:123-456">
</rp-citation>
<rp-citation title="Examining the Effects of Dogs on Cats"
             journal="Behavioral Science" pages="4:9-13">
</rp-citation>
</section>

<section>
<h2>Dropdown</h2>
<p>A stylized dropdown. Listen with <code>@new-selection="\${e => console.log(e.target.choices[e.target.chosen])}</code></p>
<rp-dropdown choices='["People",
                       {"text": "Organizations"},
                       {"text": "Works"}]'
             @new-selection="${e => console.log(e.target.choices[e.target.chosen])}">
</rp-dropdown>
</section>

<section class="hero">
<h2>Hero Image</h2>
<p>Hero image will randomly pull a background-photo from the path declared in <code>asset-folder</code> attribute.
Running <code>ele.shuffle()</code> will load a new image.
However, specifying a <code>src</code> attribute will override the random asset pull functionality and just load the src bg photo.
There are three slots to populate the hero content - "top", "main", and "bottom".
<p>
</section>
<rp-hero-image>
  <div slot="top" class="herotop">
    <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
    <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
  </div>
  <div slot="main" class="heromain">
    <rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"></rp-avatar>
    <h2 class="name text-secondary h1 bold mb-0 text-center">Brantley, Peter</h2>
    <p class="text-light h3 mb-2 mt-1 text-center">Director of Online Strategy</p>
    <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
    <p class="text-light mt-2 mb-0">
      <rp-badge>Foobar</rp-badge>
      <rp-badge>Stuff</rp-badge>
      <rp-badge>Things</rp-badge>
      <rp-badge>Widgets</rp-badge>
      </p>
    <div></div>
  </div>
</rp-hero-image>

<section>
<h2>Icons</h2>
<p>Use the <code>icon</code> attribute to specify your icon. Use the prefix "iron-" to call an iron icon:</p>
<rp-icon icon="iron-link" circle-bg></rp-icon>
<rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>
<p>The <code>theme-color</code> attribute will adjust the color, <code>is-link</code> will apply link styles, and <code>size</code> will change the size<p>
<rp-icon icon="iron-face" circle-bg is-link></rp-icon>
<rp-icon icon="iron-link" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<p>Preface the <code>icon</code> attribute with "rp-" to use one of the custom icons</p>
<rp-icon icon="rp-search" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
</section>

<section>
<h2>Link List</h2>
<p>Displays a list of "links". Attach a listener to be notified when the active link changes i.e.<br /><code>@changed-link=\${(e) => console.log(e.target.links[e.target.currentLink])}</code></p>
<div class="linklist1">
  <rp-link-list links='["Hello World", "Hello Again!", "And One More Time"]'
                @changed-link=${(e) => console.log(e.target.links[e.target.currentLink])}>
  </rp-link-list>
</div>

<p>Switch to horizontal view by using <code>direction=h</code></p>
<div class="subnav">
  <rp-link-list direction="horizontal"
                @changed-link="${(e) => console.log(e.target.links[e.target.currentLink])}"
                links='[{"text": "All Info"},
                        {"text": "About"},
                        {"text": "Publications"},
                        {"text": "Research"},
                        {"text": "Contact"},
                        {"text": "Disabled Link", "disabled": true} ]'>
  </rp-link-list>
</div>
</section>

<section>
<h2>Link List with Counts</h2>
<p>Link list that will prepend counts. Listen with <code>@link-click="\${(e) => console.log(e.target.Clickedlink)}"</code></p>
<p>Use the <code>view-all-links</code> and <code>header</code> attributes to enable these displays:</p>
<rp-link-list-counts links='[{"text": "Academic Articles", "count": 3080},
                             {"text": "Books", "count": 8},
                             {"text": "Chapters", "count": 52},
                             {"text": "Conference Papers", "count": 451},
                             {"text": "Datasets", "count": 70},
                             {"text": "Journals", "count": 960},
                             {"text": "Reports", "count": 4}]'
                      view-all-link='{"text": "View All Works"}'
                      header='{"text": "Academic Works", "count": 8413}'
                      @link-click="${(e) => console.log(e.target.Clickedlink)}"
                      >
</rp-link-list-counts>
</section>

<section>
<h2>Pagination</h2>
<p>Attach a listener to be notified when the page changes i.e.<br /><code>@changed-page=\${(e) => console.log(e.target.currentPage)}</code></p>
<rp-pagination max-page=8 @changed-page=${(e) => console.log(e.target.currentPage)}></rp-pagination>
<p>Use the <code>max-page</code>, <code>min-page</code>, and <code>current-page</code> attributes to control the display.</p>
<rp-pagination max-page=15 current-page="7"></rp-pagination>
<p>Use the <code>pages-per-side</code> attribute to show more pages on either side of the current page<p>
<rp-pagination max-page=20 current-page=10 pages-per-side=3></rp-pagination>
</section>

<section>
<h2>Person Preview</h2>
<p>You can arrange them how you see fit.</p><p>Vertically, like in search/browse page:</p>
<div class="people-vertical">
  <rp-person-preview
    name="Quinn Hart"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/quinn-hart/"
    title="Digital Applications Manager"
    badges='["foo-bar"]'>
  </rp-person-preview>
  <hr class="dotted light"/>
  <rp-person-preview
    name="Peter Brantly"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/peter-brantley/"
    title="Director of Online Strategy"
    badges='[{"text" : "Im a link!", "href" : "https://google.com"}]'>
  </rp-person-preview>
  <hr class="dotted light"/>
  <rp-person-preview
    name="Man of Mystery"
    title="Has no avatar-src or href attributes">
  </rp-person-preview>
  <hr class="dotted light"/>
</div>
<p>or in columns like on the homepage:</p>
<div class="people-columns">
  <rp-person-preview
    name="Quinn Hart"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/quinn-hart/"
    avatar-size='sm'
    title="Digital Applications Manager">
  </rp-person-preview>
  <rp-person-preview
    name="Peter Brantly"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/peter-brantley/"
    title="Director of Online Strategy">
  </rp-person-preview>
  <rp-person-preview
    name="Justin Merz"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/03/headshot_cropped-280x350-c-center.png"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/justin-merz/"
    title="Research Support Engineer">
  </rp-person-preview>
  <rp-person-preview
    name="Kimmy Hescock"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/07/Kimmy2018-01-001-280x350-c-center.jpg"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/kimmy-hescock/"
    title="User Experience Designer">
  </rp-person-preview>
</div>
<p>Because of the general awfullness of the css overflow properties, you have to set the textWidth property in a resize event.</p>
</section>

<section>
<h2>Quick Search</h2>
<p> Use <code>@new-search="\${(e) => console.log(e.target.inputValue)}"</code> to listen for search.</p>
<div class="quick-search-container">
<rp-quick-search @new-search="${(e) => console.log(e.target.inputValue)}"></rp-quick-search>
</div>

<p>Use <code>input-value</code> and <code>opened</code> attributes to change initial render state.</p>
<div class="quick-search-container">
<rp-quick-search input-value="A pre-loaded search" opened></rp-quick-search>
</div>
</section>

<section>
<h2>Main Search Widget</h2>
<p> Use <code>@new-search="\${(e) => console.log(e.target.searchObject)}"</code> to listen for search.</p>
<div class="search-blue">
  <div class="search-container">
    <rp-search style="width:75%" @new-search="${(e) => console.log(e.target.searchObject)}"></rp-search>
  </div>
</div>

</section>

<section>
<h1>View All</h1>
<p>Dead simple element that displays a View All link. Use the <code>text</code> attribute to customize, and <code>justify</code> to control horizontal alignment.</p>
<rp-view-all justify="start"></rp-view-all>
<rp-view-all text="View All People"></rp-view-all>
<rp-view-all text="Add an href to make it a normal link" href="https://google.com"></rp-view-all>
</section>
`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtB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LDBDQUEwQztBQUN4RSw4QkFBOEIsZ0NBQWdDO0FBQzlELDhCQUE4QixpQ0FBaUM7QUFDL0QsOEJBQThCLDhCQUE4QjtBQUM1RCxzQ0FBc0MseUJBQXlCO0FBQy9ELCtCQUErQix3Q0FBd0M7QUFDdkUscUNBQXFDLHlDQUF5QztBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRix5Q0FBeUM7QUFDcEksMENBQTBDLHlDQUF5QztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFxRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQSxnREFBZ0QsMENBQTBDO0FBQzFGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwYWdlLWNvbXBvbmVudHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hY2NvcmRpYW4udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWNjb3JkaWFuIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgZXhwYW5kZWQ6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHRvZ2dsZSgpe1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFjY29yZGlhbicsIFJwQWNjb3JkaWFuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBbaGlkZGVuXSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgaXJvbi1pY29uW3JvdGF0ZWRdIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgICNjb250YWluZXItdGl0bGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgI3RpdGxlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgI2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMudGl0bGV9XCI+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lci10aXRsZVwiIEBjbGljaz1cIiR7dGhpcy50b2dnbGV9XCI+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJhcnJvdy1kcm9wLWRvd25cIiA/cm90YXRlZD1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+PC9pcm9uLWljb24+XG4gICAgICA8c3BhbiBpZD1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiID9oaWRkZW49XCIkeyF0aGlzLmV4cGFuZGVkfVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vY2l0YXRpb24udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQ2l0YXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBqb3VybmFsOiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICBwYWdlczoge3R5cGU6IFN0cmluZ30sXG4gICAgY2l0YXRpb25TdHlsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2l0YXRpb24tc3R5bGUnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2l0YXRpb25TdHlsZSA9IFwiYXJ0aWNsZVwiO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSl7XG4gICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkNpdGF0aW9uIHdhcyBjbGlja2VkOiBcIiwgdGhpcy5ocmVmKTtcbiAgfVxuXG4gIF9mb3JtYXRDb21wb25lbnQoY29tcG9uZW50LCBjb21wb25lbnRfdHlwZSkge1xuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudF90eXBlID09ICd0aXRsZScpIHtcbiAgICAgIGNvbXBvbmVudCArPSBcIi5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcG9uZW50X3R5cGUgPT0gJ2pvdXJuYWwnKSB7XG4gICAgICBjb21wb25lbnQgKz0gXCIuXCI7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1jaXRhdGlvbicsIFJwQ2l0YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgfVxuICAgICN0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgICN0aXRsZVtkaXNhYmxlZF0ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICAjdGl0bGVbZGlzYWJsZWRdOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICAgICN0aXRsZTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiID9oaWRkZW49XCIkeyF0aGlzLnRpdGxlfVwiPlxuICAgIDxzcGFuIGlkPVwidGl0bGVcIiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgP2Rpc2FibGVkPVwiJHshdGhpcy5ocmVmfVwiPiR7dGhpcy5fZm9ybWF0Q29tcG9uZW50KHRoaXMudGl0bGUsICd0aXRsZScpfTwvc3Bhbj5cbiAgICA8c3BhbiBpZD1cImpvdXJuYWxcIj4ke3RoaXMuX2Zvcm1hdENvbXBvbmVudCh0aGlzLmpvdXJuYWwsICdqb3VybmFsJyl9PC9zcGFuPlxuICAgIDxzcGFuIGlkPVwicGFnZXNcIj4ke3RoaXMuX2Zvcm1hdENvbXBvbmVudCh0aGlzLnBhZ2VzLCAncGFnZXMnKX08L3NwYW4+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oZXJvLWltYWdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEhlcm9JbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhc3NldEZvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImFzc2V0LWZvbGRlclwifSxcbiAgICBhc3NldE1heDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtbWF4XCJ9LFxuICAgIGFzc2V0UGljazoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtcGlja1wiLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXNzZXRGb2xkZXIgPSBcIi9pbWFnZXMvcHJvZmlsZS1mZWF0dXJlcy9cIlxuICAgIHRoaXMuYXNzZXRNYXggPSAyOTtcbiAgICB0aGlzLnNodWZmbGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA8IDApIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrID4gdGhpcy5hc3NldE1heCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IHRoaXMuYXNzZXRNYXg7XG4gICAgICB9XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5hc3NldEZvbGRlciArIHRoaXMuYXNzZXRQaWNrICsgXCIuanBnXCJ9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuYXNzZXRQaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHRoaXMuYXNzZXRNYXggKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1oZXJvLWltYWdlJywgUnBIZXJvSW1hZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuc2xvdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI3RvcCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjYm90dG9tIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJ0b3BcIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cIm1haW5cIj48c2xvdCBuYW1lPVwibWFpblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJib3R0b21cIj48c2xvdCBuYW1lPVwiYm90dG9tXCI+PC9zbG90PjwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QtY291bnRzLnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IFwiLi92aWV3LWFsbFwiO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdENvdW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgdmlld0FsbExpbms6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ3ZpZXctYWxsLWxpbmsnfSxcbiAgICBoZWFkZXI6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ2hlYWRlcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saW5rcyA9IFtdO1xuXG4gICAgdGhpcy5fbGlua0NsaWNrID0gbmV3IEN1c3RvbUV2ZW50KCdsaW5rLWNsaWNrJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIGNsaWNrZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbmRlckhlYWRlcigpe1xuICAgIGlmICghdGhpcy5oZWFkZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXIudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke3RoaXMuaGVhZGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPjxzcGFuPiR7dGhpcy5oZWFkZXIudGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBpZiAoIWxpbmsudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHtsaW5rLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBsaW5rLWluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cImxpbmtcIj4ke2xpbmsudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgX3JlbmRlclZpZXdBbGwoKXtcbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmspIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy52aWV3QWxsTGluay50ZXh0KSB7XG4gICAgICB0aGlzLnZpZXdBbGxMaW5rLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgdmlldy1hbGxcIj48ZGl2IGNsYXNzPVwiY291bnRcIj48L2Rpdj48cnAtdmlldy1hbGwgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIHRleHQ9XCIke3RoaXMudmlld0FsbExpbmsudGV4dH1cIj48L3JwLXZpZXctYWxsPjwvZGl2PmBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpICkge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMubGlua3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rLWluZGV4JykpXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLnZpZXdBbGxMaW5rO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGlua0NsaWNrKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0LWNvdW50cycsIFJwTGlua0xpc3RDb3VudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gICAgLnJvdy52aWV3LWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckhlYWRlcigpfVxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gICAgJHt0aGlzLl9yZW5kZXJWaWV3QWxsKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9zZWFyY2gudHBsLmpzJztcbmltcG9ydCAnLi9kcm9wZG93bic7XG5pbXBvcnQgXCIuL2ljb25cIjtcblxuZXhwb3J0IGNsYXNzIFJwU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBmYWNldHM6IHt0eXBlOiBBcnJheX0sXG4gICAgaW5wdXRWYWx1ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImlucHV0LXZhbHVlXCIsIHJlZmxlY3Q6IHRydWV9LFxuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhY3RpdmVGYWNldDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdhY3RpdmUtZmFjZXQnLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmFjZXRzID0gW3tcInRleHRcIjogXCJQRU9QTEVcIn0sIHtcInRleHRcIjogXCJPUkdBTklaQVRJT05TXCJ9LCB7XCJ0ZXh0XCI6IFwiV09SS1NcIn1dO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCB0aGUgcmVnaXN0cnlcIjtcbiAgICB0aGlzLmFjdGl2ZUZhY2V0ID0gMDtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5fbmV3U2VhcmNoID0gbmV3IEN1c3RvbUV2ZW50KCduZXctc2VhcmNoJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBzZWFyY2ggaGFzIGJlZW4gdHJpZ2dlcmVkJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnaW5wdXRWYWx1ZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnYWN0aXZlRmFjZXQnKSkge1xuICAgICAgdGhpcy5zZWFyY2hPYmplY3QgPSB7c2VhcmNoOiB0aGlzLmlucHV0VmFsdWUsIGZhY2V0OiB0aGlzLmZhY2V0c1t0aGlzLmFjdGl2ZUZhY2V0XX07XG4gICAgfVxuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgZG9TZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX25ld1NlYXJjaCk7XG4gIH1cblxuICBfaGFuZGxlS2V5dXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRvU2VhcmNoKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtc2VhcmNoJywgUnBTZWFyY2gpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjaW5wdXQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgI2ljb24tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkxMCk7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPHJwLWRyb3Bkb3duIGNob2ljZXM9XCIke0pTT04uc3RyaW5naWZ5KHRoaXMuZmFjZXRzKX1cIlxuICAgICAgICAgICAgICAgICBjaG9zZW49XCIke3RoaXMuYWN0aXZlRmFjZXR9XCJcbiAgICAgICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gdGhpcy5hY3RpdmVGYWNldCA9IGUudGFyZ2V0LmNob3Nlbn1cIj5cbiAgICA8L3JwLWRyb3Bkb3duPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIlxuICAgICAgICAgICBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cIlxuICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX2hhbmRsZUtleXVwfVwiXG4gICAgICAgICAgIGlkPVwiaW5wdXRcIj5cbiAgICA8ZGl2IGlkPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxycC1pY29uIEBjbGljaz1cIiR7dGhpcy5kb1NlYXJjaH1cIiBpY29uPVwicnAtc2VhcmNoXCIgP2lzLWxpbms9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIj48cnAtaWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vdmlldy1hbGwudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwVmlld0FsbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAganVzdGlmeToge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBpZiAodGhpcy5qdXN0aWZ5KSB7XG4gICAgICBjbGFzc2VzW3RoaXMuanVzdGlmeV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIF9yZW5kZXJJbm5lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPjxpcm9uLWljb24gaWNvbj1cImF2OnBsYXktYXJyb3dcIj48L2lyb24taWNvbj5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdmlldy1hbGwnLCBScFZpZXdBbGwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnN0YXJ0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5jZW50ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIgaXJvbi1pY29uLCAuY29udGFpbmVyOmhvdmVyIGF7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cblxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1pbi13aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgLnZpZXctYWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgICR7dGhpcy5ocmVmID8gaHRtbGBcbiAgICAgIDxhIGNsYXNzPVwidmlldy1hbGxcIiBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLl9yZW5kZXJJbm5lckNvbnRlbnQoKX08L2E+XG4gICAgICBgIDogaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFsbFwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICBgfVxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWNvbXBvbmVudHMudHBsLmpzXCJcbi8vaW1wb3J0IHsgY29sb3JTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2l0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBQYWdlQ29tcG9uZW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhZ2UtY29tcG9uZW50cycsIEFwcFBhZ2VDb21wb25lbnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hLXpcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpYW5cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2F2YXRhclwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2JhZGdlXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2l0YXRpb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kcm9wZG93blwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hlcm8taW1hZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50c1wiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3F1aWNrLXNlYXJjaFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3ZpZXctYWxsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgc2VjdGlvbi5oZXJvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHJwLWhlcm8taW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmhlcm90b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5oZXJvbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGVvcGxlLXZlcnRpY2FsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAucGVvcGxlLXZlcnRpY2FsIHJwLXBlcnNvbi1wcmV2aWV3IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGVvcGxlLWNvbHVtbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5wZW9wbGUtY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLnN1Ym5hdiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmxpbmtsaXN0MSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICBycC1hY2NvcmRpYW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbiAgcnAtY2l0YXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnF1aWNrLXNlYXJjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zZWFyY2gtYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cblxuPGgxIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+U2l0ZSBDb21wb25lbnRzPC9oMT5cbjxwPlRoZXNlIGRvbid0IGNvbm5lY3QgdG8gdGhlIG1haW4gYnVzLCBhbmQgdGhleSBkb24ndCBpbmhlcml0IGFueSBzaGFyZWQgc3R5bGVzIChvdGhlciB0aGFuIHNpdGUgdmFyaWFibGVzKS5cbllvdSBjb250cm9sIHRoZW0gd2l0aCBhdHRyaWJ1dGVzLCBhbmQgYnVpbGQgbW9yZSBjb21wbGljYXRlZCAoYnVzLWNvbm5lY3RlZCkgZWxlbWVudHMgd2l0aCB0aGVtLlxuPC9wPlxuPHNlY3Rpb24+XG48aDI+QS1aIGxpc3Q8L2gyPlxuPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgc2VsZWN0ZWQgbGV0dGVyIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLWxldHRlcj0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWxlY3RlZExldHRlcil9PC9jb2RlPjwvcD5cbjxycC1hLXogIHNlbGVjdGVkLWxldHRlcj1cImFsbFwiIEBjaGFuZ2VkLWxldHRlcj0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWxlY3RlZExldHRlcil9PjwvcnAtYS16PlxuPHA+VXNlIDxjb2RlPmhpZGUtYWxsPC9jb2RlPiB0byBub3QgcmVuZGVyIHRoZSBBbGwgbGluazwvcD5cbjxycC1hLXogaGlkZS1hbGw9dHJ1ZSBzZWxlY3RlZC1sZXR0ZXI9XCJmXCIgZGlzYWJsZWQtbGV0dGVycz0ke0pTT04uc3RyaW5naWZ5KFsnZycsJ3EnLCAnUyddKX0+PC9ycC1hLXo+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkFjY29yZGlhbnMgZm9yIEZBUSBzZWN0aW9uPC9oMj5cbjxwPlVzZSB0aGUgPGNvZGU+dGl0bGU8L2NvZGU+IGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHRoZSBsaW5rIHRleHQuIFRoZSBleHBhbmRhYmxlIGNvbnRlbnQgaXMgYW4gdW5uYW1lZCBzbG90LjwvcD5cbjxycC1hY2NvcmRpYW4gdGl0bGU9XCJIb3cgb2Z0ZW4gZG8geW91IHVwZGF0ZSB0aGUgZGF0YSBpbiB0aGUgcmVnaXN0cnk/XCI+JHsnSGVsbG8gd29ybGQhICcucmVwZWF0KDQwKX08L3JwLWFjY29yZGlhbj5cbjxycC1hY2NvcmRpYW4+PC9ycC1hY2NvcmRpYW4+XG48cnAtYWNjb3JkaWFuIGV4cGFuZGVkIHRpdGxlPVwiVXNlIHRoZSBleHBhbmRlZCBhdHRyaWJ1dGUgb3IgdG9nZ2xlIG1ldGhvZCB0byBjb250cm9sIGV4cGFuc2lvblwiPlxuVGhpcyBpcyBvcGVuIG9uIHBhZ2UgbG9hZCBiZWNhdXNlIEknbSB1c2luZyB0aGUgZXhwYW5kZWQgYXR0cmlidXRlLlxuPC9ycC1hY2NvcmRpYW4+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkJhc2ljIEFsZXJ0PC9oMj5cbjxwPk5vdCBwYXJ0IG9mIHRoZSBpbml0aWFsIGRlc2lnbiBzcGVjcywgYnV0IG5lZWRlZCBzb21lIHdheSB0byBoYW5kbGUgZXJyb3JzLiBVc2VzIHNsb3QuPC9wPlxuPHJwLWFsZXJ0PlVoIG9oISBTb21ldGhpbmcgd2VudCBob3JyaWJseSB3cm9uZyAobm90IHRoYXQgdGhhdCBldmVyIGhhcHBlbnMpLiBDYW4ndCBsb2FkIGNvbnRlbnQhPC9ycC1hbGVydD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QXZhdGFyczwvaDI+XG48cD5Vc2UgdGhlIHNpemUgYXR0cmlidXRlIHRvIGFkanVzdCBLaW1teS1kZWZpbmVkIHNpemVzLjwvcD5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhciBzaXplPVwic21cIj48L3JwLWF2YXRhcj5cbjxwPlVzZSB0aGUgc3JjIGF0dHJpYnV0ZSB0byB1c2UgYSBwaG90by48cD5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QmFkZ2VzPC9oMj5cbjxzbWFsbD5cbiAgPHJwLWJhZGdlPkknbSBhIEJhZGdlITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5NZSBUb28hPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkNvbG9yczwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5BcmUgYSBTZXF1ZW5jZTwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5JZiBwYXJ0IG9mPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPnRoZSBzYW1lIHBhcmVudCBub2RlPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkNvbG9yIHN0YXJ0cyBvdmVyITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5ZZWxsb3cgYWdhaW4uLi48L3JwLWJhZGdlPlxuPC9zbWFsbD5cbjxwPkJhZGdlcyBpbmhlcml0IGZvbnQgc2l6ZSA8cnAtYmFkZ2U+MTZweCBmb250c2l6ZTwvcnAtYmFkZ2U+XG5idXQgeW91IGNhbiBhbHNvIGluY3JlYXNlIHBhZGRpbmcgd2l0aCB0aGUgc2l6ZSBhdHRyaWJ1dGUgPHJwLWJhZGdlIHNpemU9XCJsZ1wiPnNpemUgbGc8L3JwLWJhZGdlPlxuPC9wPlxuPHA+WW91IGNhbiBtYW51YWxseSBjaGFuZ2UgdGhlIGNvbG9yIHdpdGggdGhlIGNvbG9yLXNlcXVlbmNlIGF0dHJpYnV0ZVxuPHJwLWJhZGdlIGNvbG9yLXNlcXVlbmNlPVwiNVwiPmNvbG9yLXNlcXVlbmNlID0gNTwvcnAtYmFkZ2U+XG48L3A+XG48cD5JZiB5b3UgcGFzcyBpbiBhbiBocmVmIGF0dHJpYnV0ZSwgPHJwLWJhZGdlIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+dGhlIGJhZGdlczwvcnAtYmFkZ2U+IDxycC1iYWRnZSBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdVwiPmJlY29tZSBsaW5rczwvcnAtYmFkZ2U+XG5hbmQgaGF2ZSBob3ZlciBzdHlsZXMuXG48L3A+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkNpdGF0aW9uczwvaDI+XG48cD5TaW1wbHkgcmVuZGVycyBiaWJsaW9ncmFwaGljIGluZm8gaW4gc29tZSBzdGFuZGFyZCBmb3JtYXQuIFdoYXQgZm9ybWF0IHRoYXQgaXMsIEkgbmVlZCB0byBmaW5kIG91dC48L3A+XG48cnAtY2l0YXRpb24gdGl0bGU9XCJTb21lIFdpdHR5IEV5ZS1jYXRjaGluZyBUaXRsZTogVGhlIEVmZmVjdCBvZiBYIG9uIFpcIlxuICAgICAgICAgICAgIGhyZWY9XCJzb21lIGxpbmtcIlxuICAgICAgICAgICAgIGpvdXJuYWw9XCJOYXR1cmVcIlxuICAgICAgICAgICAgIHBhZ2VzPVwiMTI6MTIzLTQ1NlwiPlxuPC9ycC1jaXRhdGlvbj5cbjxycC1jaXRhdGlvbiB0aXRsZT1cIkV4YW1pbmluZyB0aGUgRWZmZWN0cyBvZiBEb2dzIG9uIENhdHNcIlxuICAgICAgICAgICAgIGpvdXJuYWw9XCJCZWhhdmlvcmFsIFNjaWVuY2VcIiBwYWdlcz1cIjQ6OS0xM1wiPlxuPC9ycC1jaXRhdGlvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+RHJvcGRvd248L2gyPlxuPHA+QSBzdHlsaXplZCBkcm9wZG93bi4gTGlzdGVuIHdpdGggPGNvZGU+QG5ldy1zZWxlY3Rpb249XCJcXCR7ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jaG9pY2VzW2UudGFyZ2V0LmNob3Nlbl0pfTwvY29kZT48L3A+XG48cnAtZHJvcGRvd24gY2hvaWNlcz0nW1wiUGVvcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJPcmdhbml6YXRpb25zXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiV29ya3NcIn1dJ1xuICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmNob2ljZXNbZS50YXJnZXQuY2hvc2VuXSl9XCI+XG48L3JwLWRyb3Bkb3duPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImhlcm9cIj5cbjxoMj5IZXJvIEltYWdlPC9oMj5cbjxwPkhlcm8gaW1hZ2Ugd2lsbCByYW5kb21seSBwdWxsIGEgYmFja2dyb3VuZC1waG90byBmcm9tIHRoZSBwYXRoIGRlY2xhcmVkIGluIDxjb2RlPmFzc2V0LWZvbGRlcjwvY29kZT4gYXR0cmlidXRlLlxuUnVubmluZyA8Y29kZT5lbGUuc2h1ZmZsZSgpPC9jb2RlPiB3aWxsIGxvYWQgYSBuZXcgaW1hZ2UuXG5Ib3dldmVyLCBzcGVjaWZ5aW5nIGEgPGNvZGU+c3JjPC9jb2RlPiBhdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSB0aGUgcmFuZG9tIGFzc2V0IHB1bGwgZnVuY3Rpb25hbGl0eSBhbmQganVzdCBsb2FkIHRoZSBzcmMgYmcgcGhvdG8uXG5UaGVyZSBhcmUgdGhyZWUgc2xvdHMgdG8gcG9wdWxhdGUgdGhlIGhlcm8gY29udGVudCAtIFwidG9wXCIsIFwibWFpblwiLCBhbmQgXCJib3R0b21cIi5cbjxwPlxuPC9zZWN0aW9uPlxuPHJwLWhlcm8taW1hZ2U+XG4gIDxkaXYgc2xvdD1cInRvcFwiIGNsYXNzPVwiaGVyb3RvcFwiPlxuICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgIDxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbiAgPC9kaXY+XG4gIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbiAgICA8aDIgY2xhc3M9XCJuYW1lIHRleHQtc2Vjb25kYXJ5IGgxIGJvbGQgbWItMCB0ZXh0LWNlbnRlclwiPkJyYW50bGV5LCBQZXRlcjwvaDI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGgzIG1iLTIgbXQtMSB0ZXh0LWNlbnRlclwiPkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneTwvcD5cbiAgICA8cCBjbGFzcz1cImJvbGQgdGV4dC1saWdodCBoMyBtdC0xIG1iLTAgdGV4dC1jZW50ZXJcIj5NeSByZXNlYXJjaCBhcmVhcyBpbmNsdWRlOiA8L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IG10LTIgbWItMFwiPlxuICAgICAgPHJwLWJhZGdlPkZvb2JhcjwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+U3R1ZmY8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPlRoaW5nczwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+V2lkZ2V0czwvcnAtYmFkZ2U+XG4gICAgICA8L3A+XG4gICAgPGRpdj48L2Rpdj5cbiAgPC9kaXY+XG48L3JwLWhlcm8taW1hZ2U+XG5cbjxzZWN0aW9uPlxuPGgyPkljb25zPC9oMj5cbjxwPlVzZSB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHRvIHNwZWNpZnkgeW91ciBpY29uLiBVc2UgdGhlIHByZWZpeCBcImlyb24tXCIgdG8gY2FsbCBhbiBpcm9uIGljb246PC9wPlxuPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZz48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1hcnJvdy1mb3J3YXJkXCIgY2lyY2xlLWJnPjwvcnAtaWNvbj5cbjxwPlRoZSA8Y29kZT50aGVtZS1jb2xvcjwvY29kZT4gYXR0cmlidXRlIHdpbGwgYWRqdXN0IHRoZSBjb2xvciwgPGNvZGU+aXMtbGluazwvY29kZT4gd2lsbCBhcHBseSBsaW5rIHN0eWxlcywgYW5kIDxjb2RlPnNpemU8L2NvZGU+IHdpbGwgY2hhbmdlIHRoZSBzaXplPHA+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1mYWNlXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZyBpcy1saW5rIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemU9XCJsZ1wiPjwvcnAtaWNvbj5cbjxwPlByZWZhY2UgdGhlIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSB3aXRoIFwicnAtXCIgdG8gdXNlIG9uZSBvZiB0aGUgY3VzdG9tIGljb25zPC9wPlxuPHJwLWljb24gaWNvbj1cInJwLXNlYXJjaFwiIGNpcmNsZS1iZyBpcy1saW5rIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemU9XCJsZ1wiPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TGluayBMaXN0PC9oMj5cbjxwPkRpc3BsYXlzIGEgbGlzdCBvZiBcImxpbmtzXCIuIEF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGFjdGl2ZSBsaW5rIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLWxpbms9XFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfTwvY29kZT48L3A+XG48ZGl2IGNsYXNzPVwibGlua2xpc3QxXCI+XG4gIDxycC1saW5rLWxpc3QgbGlua3M9J1tcIkhlbGxvIFdvcmxkXCIsIFwiSGVsbG8gQWdhaW4hXCIsIFwiQW5kIE9uZSBNb3JlIFRpbWVcIl0nXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfT5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cblxuPHA+U3dpdGNoIHRvIGhvcml6b250YWwgdmlldyBieSB1c2luZyA8Y29kZT5kaXJlY3Rpb249aDwvY29kZT48L3A+XG48ZGl2IGNsYXNzPVwic3VibmF2XCI+XG4gIDxycC1saW5rLWxpc3QgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCJcbiAgICAgICAgICAgICAgICBsaW5rcz0nW3tcInRleHRcIjogXCJBbGwgSW5mb1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJBYm91dFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJQdWJsaWNhdGlvbnNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVzZWFyY2hcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ29udGFjdFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJEaXNhYmxlZCBMaW5rXCIsIFwiZGlzYWJsZWRcIjogdHJ1ZX0gXSc+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkxpbmsgTGlzdCB3aXRoIENvdW50czwvaDI+XG48cD5MaW5rIGxpc3QgdGhhdCB3aWxsIHByZXBlbmQgY291bnRzLiBMaXN0ZW4gd2l0aCA8Y29kZT5AbGluay1jbGljaz1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuQ2xpY2tlZGxpbmspfVwiPC9jb2RlPjwvcD5cbjxwPlVzZSB0aGUgPGNvZGU+dmlldy1hbGwtbGlua3M8L2NvZGU+IGFuZCA8Y29kZT5oZWFkZXI8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gZW5hYmxlIHRoZXNlIGRpc3BsYXlzOjwvcD5cbjxycC1saW5rLWxpc3QtY291bnRzIGxpbmtzPSdbe1widGV4dFwiOiBcIkFjYWRlbWljIEFydGljbGVzXCIsIFwiY291bnRcIjogMzA4MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJCb29rc1wiLCBcImNvdW50XCI6IDh9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ2hhcHRlcnNcIiwgXCJjb3VudFwiOiA1Mn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb25mZXJlbmNlIFBhcGVyc1wiLCBcImNvdW50XCI6IDQ1MX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJEYXRhc2V0c1wiLCBcImNvdW50XCI6IDcwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkpvdXJuYWxzXCIsIFwiY291bnRcIjogOTYwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlcG9ydHNcIiwgXCJjb3VudFwiOiA0fV0nXG4gICAgICAgICAgICAgICAgICAgICAgdmlldy1hbGwtbGluaz0ne1widGV4dFwiOiBcIlZpZXcgQWxsIFdvcmtzXCJ9J1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj0ne1widGV4dFwiOiBcIkFjYWRlbWljIFdvcmtzXCIsIFwiY291bnRcIjogODQxM30nXG4gICAgICAgICAgICAgICAgICAgICAgQGxpbmstY2xpY2s9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5DbGlja2VkbGluayl9XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG48L3JwLWxpbmstbGlzdC1jb3VudHM+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlBhZ2luYXRpb248L2gyPlxuPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgcGFnZSBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1wYWdlPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfTwvY29kZT48L3A+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT04IEBjaGFuZ2VkLXBhZ2U9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfT48L3JwLXBhZ2luYXRpb24+XG48cD5Vc2UgdGhlIDxjb2RlPm1heC1wYWdlPC9jb2RlPiwgPGNvZGU+bWluLXBhZ2U8L2NvZGU+LCBhbmQgPGNvZGU+Y3VycmVudC1wYWdlPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkuPC9wPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9MTUgY3VycmVudC1wYWdlPVwiN1wiPjwvcnAtcGFnaW5hdGlvbj5cbjxwPlVzZSB0aGUgPGNvZGU+cGFnZXMtcGVyLXNpZGU8L2NvZGU+IGF0dHJpYnV0ZSB0byBzaG93IG1vcmUgcGFnZXMgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGN1cnJlbnQgcGFnZTxwPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9MjAgY3VycmVudC1wYWdlPTEwIHBhZ2VzLXBlci1zaWRlPTM+PC9ycC1wYWdpbmF0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5QZXJzb24gUHJldmlldzwvaDI+XG48cD5Zb3UgY2FuIGFycmFuZ2UgdGhlbSBob3cgeW91IHNlZSBmaXQuPC9wPjxwPlZlcnRpY2FsbHksIGxpa2UgaW4gc2VhcmNoL2Jyb3dzZSBwYWdlOjwvcD5cbjxkaXYgY2xhc3M9XCJwZW9wbGUtdmVydGljYWxcIj5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlF1aW5uIEhhcnRcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcXVpbm4taGFydC9cIlxuICAgIHRpdGxlPVwiRGlnaXRhbCBBcHBsaWNhdGlvbnMgTWFuYWdlclwiXG4gICAgYmFkZ2VzPSdbXCJmb28tYmFyXCJdJz5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUGV0ZXIgQnJhbnRseVwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3BldGVyLWJyYW50bGV5L1wiXG4gICAgdGl0bGU9XCJEaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3lcIlxuICAgIGJhZGdlcz0nW3tcInRleHRcIiA6IFwiSW0gYSBsaW5rIVwiLCBcImhyZWZcIiA6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCJ9XSc+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIk1hbiBvZiBNeXN0ZXJ5XCJcbiAgICB0aXRsZT1cIkhhcyBubyBhdmF0YXItc3JjIG9yIGhyZWYgYXR0cmlidXRlc1wiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG48L2Rpdj5cbjxwPm9yIGluIGNvbHVtbnMgbGlrZSBvbiB0aGUgaG9tZXBhZ2U6PC9wPlxuPGRpdiBjbGFzcz1cInBlb3BsZS1jb2x1bW5zXCI+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJRdWlubiBIYXJ0XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnQvXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgdGl0bGU9XCJEaWdpdGFsIEFwcGxpY2F0aW9ucyBNYW5hZ2VyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJQZXRlciBCcmFudGx5XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3BldGVyLWJyYW50bGV5L1wiXG4gICAgdGl0bGU9XCJEaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3lcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIkp1c3RpbiBNZXJ6XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9oZWFkc2hvdF9jcm9wcGVkLTI4MHgzNTAtYy1jZW50ZXIucG5nXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL2p1c3Rpbi1tZXJ6L1wiXG4gICAgdGl0bGU9XCJSZXNlYXJjaCBTdXBwb3J0IEVuZ2luZWVyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJLaW1teSBIZXNjb2NrXCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9LaW1teTIwMTgtMDEtMDAxLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL2tpbW15LWhlc2NvY2svXCJcbiAgICB0aXRsZT1cIlVzZXIgRXhwZXJpZW5jZSBEZXNpZ25lclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuPC9kaXY+XG48cD5CZWNhdXNlIG9mIHRoZSBnZW5lcmFsIGF3ZnVsbG5lc3Mgb2YgdGhlIGNzcyBvdmVyZmxvdyBwcm9wZXJ0aWVzLCB5b3UgaGF2ZSB0byBzZXQgdGhlIHRleHRXaWR0aCBwcm9wZXJ0eSBpbiBhIHJlc2l6ZSBldmVudC48L3A+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlF1aWNrIFNlYXJjaDwvaDI+XG48cD4gVXNlIDxjb2RlPkBuZXctc2VhcmNoPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5pbnB1dFZhbHVlKX1cIjwvY29kZT4gdG8gbGlzdGVuIGZvciBzZWFyY2guPC9wPlxuPGRpdiBjbGFzcz1cInF1aWNrLXNlYXJjaC1jb250YWluZXJcIj5cbjxycC1xdWljay1zZWFyY2ggQG5ldy1zZWFyY2g9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5pbnB1dFZhbHVlKX1cIj48L3JwLXF1aWNrLXNlYXJjaD5cbjwvZGl2PlxuXG48cD5Vc2UgPGNvZGU+aW5wdXQtdmFsdWU8L2NvZGU+IGFuZCA8Y29kZT5vcGVuZWQ8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gY2hhbmdlIGluaXRpYWwgcmVuZGVyIHN0YXRlLjwvcD5cbjxkaXYgY2xhc3M9XCJxdWljay1zZWFyY2gtY29udGFpbmVyXCI+XG48cnAtcXVpY2stc2VhcmNoIGlucHV0LXZhbHVlPVwiQSBwcmUtbG9hZGVkIHNlYXJjaFwiIG9wZW5lZD48L3JwLXF1aWNrLXNlYXJjaD5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5NYWluIFNlYXJjaCBXaWRnZXQ8L2gyPlxuPHA+IFVzZSA8Y29kZT5AbmV3LXNlYXJjaD1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VhcmNoT2JqZWN0KX1cIjwvY29kZT4gdG8gbGlzdGVuIGZvciBzZWFyY2guPC9wPlxuPGRpdiBjbGFzcz1cInNlYXJjaC1ibHVlXCI+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgPHJwLXNlYXJjaCBzdHlsZT1cIndpZHRoOjc1JVwiIEBuZXctc2VhcmNoPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VhcmNoT2JqZWN0KX1cIj48L3JwLXNlYXJjaD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMT5WaWV3IEFsbDwvaDE+XG48cD5EZWFkIHNpbXBsZSBlbGVtZW50IHRoYXQgZGlzcGxheXMgYSBWaWV3IEFsbCBsaW5rLiBVc2UgdGhlIDxjb2RlPnRleHQ8L2NvZGU+IGF0dHJpYnV0ZSB0byBjdXN0b21pemUsIGFuZCA8Y29kZT5qdXN0aWZ5PC9jb2RlPiB0byBjb250cm9sIGhvcml6b250YWwgYWxpZ25tZW50LjwvcD5cbjxycC12aWV3LWFsbCBqdXN0aWZ5PVwic3RhcnRcIj48L3JwLXZpZXctYWxsPlxuPHJwLXZpZXctYWxsIHRleHQ9XCJWaWV3IEFsbCBQZW9wbGVcIj48L3JwLXZpZXctYWxsPlxuPHJwLXZpZXctYWxsIHRleHQ9XCJBZGQgYW4gaHJlZiB0byBtYWtlIGl0IGEgbm9ybWFsIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCI+PC9ycC12aWV3LWFsbD5cbjwvc2VjdGlvbj5cbmA7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==