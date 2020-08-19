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
    data: {type: Object},
    citationStyle: {type: String, attribute: 'citation-style'},
    authors: {type: Array}
  };
  }

  constructor() {
    super();
    this.render = _citation_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.citationStyle = "MLA";
    this.data = {};
    this.authors = [];
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  updated(props) {
    if (props.has('data')) {
      this.parseData();
    }
  }

  parseData() {
    if (Object.keys(this.data).length == 0) {
      return;
    }

    // Get authors
    let authors = [];
    if (this.data.Authorship && typeof this.data.Authorship === 'object') {
      let auths = this.data.Authorship;
      if (!Array.isArray(auths)) {
        auths = [auths];
      }
      for (let author of auths) {
        if (!author.hasName) {
          continue;
        }
        author.nameFirst = author.hasName.givenName;
        author.nameLast = author.hasName.familyName;
        if (!author['vivo:rank']) {
          author['vivo:rank'] = Infinity;
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
      this.authors = authors;
    }

    // Journal info
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
    a {
      color: var(--tcolor-link-text)
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" ?hidden="${!this.data}">
  <a href="#">${this.data.label}</a>
  ${this.authors.map(author => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span>${author.nameLast}, ${author.nameFirst}</span>; `)}.
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
    <rp-dropdown .choices="${this.facets}"
                 to-upper-case
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1A7O0FBRWpDLDBCQUEwQixzREFBVTtBQUMzQztBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IseURBQU07QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVEsMEJBQTBCLGFBQWEsWUFBWTtBQUNyRix3Q0FBd0MsWUFBWTtBQUNwRCxvREFBb0QsZUFBZTtBQUNuRSx5QkFBeUIsV0FBVztBQUNwQztBQUNBLGlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUjs7QUFFaEMseUJBQXlCLHNEQUFVO0FBQzFDO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsb0JBQW9CLDBDQUEwQztBQUM5RCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDBCQUEwQixhQUFhLFdBQVc7QUFDcEYsZ0JBQWdCLGdCQUFnQjtBQUNoQyxJQUFJLDJCQUEyQixnREFBSSxTQUFTLGdCQUFnQixJQUFJLGlCQUFpQixRQUFRLElBQUk7QUFDN0Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ047O0FBRWxDLDBCQUEwQixzREFBVTtBQUMzQztBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLGtCQUFrQix3Q0FBd0M7QUFDMUQsZUFBZSx1Q0FBdUM7QUFDdEQsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwwREFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsMkNBQTJDO0FBQzlHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjtBQUNBOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDBCQUEwQixXQUFXLDhFQUFRLHlCQUF5QjtBQUN4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNBO0FBQ1U7O0FBRXJDOztBQUViLCtCQUErQixzREFBVTtBQUNoRDtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCLGtCQUFrQix5Q0FBeUM7QUFDM0QsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnRUFBTTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUk7QUFDZixxQ0FBcUMsa0JBQWtCO0FBQ3ZELG9EQUFvRCxpQkFBaUI7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUk7QUFDZix1Q0FBdUMsV0FBVztBQUNsRDtBQUNBLG9DQUFvQyxpQkFBaUIsZ0JBQWdCLE1BQU0saUJBQWlCLFVBQVU7QUFDdEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSwyRUFBMkUsaUJBQWlCLFVBQVUsc0JBQXNCO0FBQzNJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFBbUM7O0FBRXBCO0FBQ2YsU0FBUyxnREFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU07QUFDTixNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNWO0FBQ2pCO0FBQ0o7O0FBRVQsdUJBQXVCLHNEQUFVO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsaUJBQWlCLHNEQUFzRDtBQUN2RSxrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFNO0FBQ3hCLG9CQUFvQixpQkFBaUIsR0FBRyx3QkFBd0IsR0FBRyxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCO0FBQ0E7O0FBRTFDO0FBQ2YsU0FBUyxnREFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBUSwyQkFBMkI7QUFDN0QsNkJBQTZCLFlBQVk7QUFDekM7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLG1DQUFtQyx3Q0FBd0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQywwQkFBMEIsaUJBQWlCO0FBQzNDLHFCQUFxQix3Q0FBd0M7QUFDN0QscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0EseUJBQXlCLGNBQWMsK0JBQStCLGdCQUFnQjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUjs7QUFFaEMsd0JBQXdCLHNEQUFVO0FBQ3pDO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQU07QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxnREFBSSxzQkFBc0IsVUFBVTtBQUMvQztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7QUFDQTs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDBCQUEwQjtBQUM1RCxNQUFNLFlBQVksZ0RBQUk7QUFDdEIsa0NBQWtDLFVBQVUsSUFBSSwyQkFBMkI7QUFDM0UsVUFBVSxnREFBSTtBQUNkLDhCQUE4QiwyQkFBMkI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7QUFDNUMsVUFBVSxjQUFjOztBQUVqQixnQ0FBZ0Msc0RBQVU7QUFDakQ7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUTs7QUFFZDtBQUNNO0FBQ0o7QUFDQztBQUNEO0FBQ0c7QUFDQTtBQUNFO0FBQ047QUFDSztBQUNPO0FBQ047QUFDSTtBQUNGO0FBQ047QUFDRTs7QUFFbkI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsNENBQTRDO0FBQ25KLGlEQUFpRCw0Q0FBNEM7QUFDN0Y7QUFDQSw2REFBNkQsK0JBQStCO0FBQzVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSwyQkFBMkI7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELG9EQUFvRDtBQUNqSDtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQsd0JBQXdCLGdCQUFnQjtBQUN4QywrQkFBK0Isb0RBQW9EO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4SEFBOEgseURBQXlEO0FBQ3ZMO0FBQ0E7QUFDQSxnQ0FBZ0MseURBQXlEO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlEQUF5RDtBQUMxRix5QkFBeUIsbUJBQW1CO0FBQzVDLHlCQUF5QixnQkFBZ0I7QUFDekMseUJBQXlCLHVCQUF1QjtBQUNoRCx5QkFBeUIsbUJBQW1CO0FBQzVDLHlCQUF5QixrQkFBa0I7QUFDM0MseUJBQXlCLDBDQUEwQztBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSx5Q0FBeUM7QUFDbEg7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFLDhCQUE4Qiw0QkFBNEI7QUFDMUQsOEJBQThCLGdDQUFnQztBQUM5RCw4QkFBOEIsMENBQTBDO0FBQ3hFLDhCQUE4QixnQ0FBZ0M7QUFDOUQsOEJBQThCLGlDQUFpQztBQUMvRCw4QkFBOEIsOEJBQThCO0FBQzVELHNDQUFzQyx5QkFBeUI7QUFDL0QsK0JBQStCLHdDQUF3QztBQUN2RSxxQ0FBcUMseUNBQXlDO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkZBQTJGLHlDQUF5QztBQUNwSSwwQ0FBMEMseUNBQXlDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQXFEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEU7QUFDQTtBQUNBLGdEQUFnRCwwQ0FBMEM7QUFDMUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FjY29yZGlhbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBY2NvcmRpYW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBleHBhbmRlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdG9nZ2xlKCl7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWNjb3JkaWFuJywgUnBBY2NvcmRpYW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICBpcm9uLWljb25bcm90YXRlZF0ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgI2NvbnRhaW5lci10aXRsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLXRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLnRvZ2dsZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImFycm93LWRyb3AtZG93blwiID9yb3RhdGVkPVwiJHshdGhpcy5leHBhbmRlZH1cIj48L2lyb24taWNvbj5cbiAgICAgIDxzcGFuIGlkPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgP2hpZGRlbj1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9jaXRhdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBDaXRhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge3R5cGU6IE9iamVjdH0sXG4gICAgY2l0YXRpb25TdHlsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2l0YXRpb24tc3R5bGUnfSxcbiAgICBhdXRob3JzOiB7dHlwZTogQXJyYXl9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaXRhdGlvblN0eWxlID0gXCJNTEFcIjtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmF1dGhvcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzKCdkYXRhJykpIHtcbiAgICAgIHRoaXMucGFyc2VEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IGF1dGhvcnNcbiAgICBsZXQgYXV0aG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGEuQXV0aG9yc2hpcCAmJiB0eXBlb2YgdGhpcy5kYXRhLkF1dGhvcnNoaXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgYXV0aHMgPSB0aGlzLmRhdGEuQXV0aG9yc2hpcDtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhdXRocykpIHtcbiAgICAgICAgYXV0aHMgPSBbYXV0aHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgYXV0aG9yIG9mIGF1dGhzKSB7XG4gICAgICAgIGlmICghYXV0aG9yLmhhc05hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3IubmFtZUZpcnN0ID0gYXV0aG9yLmhhc05hbWUuZ2l2ZW5OYW1lO1xuICAgICAgICBhdXRob3IubmFtZUxhc3QgPSBhdXRob3IuaGFzTmFtZS5mYW1pbHlOYW1lO1xuICAgICAgICBpZiAoIWF1dGhvclsndml2bzpyYW5rJ10pIHtcbiAgICAgICAgICBhdXRob3JbJ3Zpdm86cmFuayddID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9ycy5wdXNoKGF1dGhvcik7XG4gICAgICB9XG4gICAgICBhdXRob3JzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbJ3Zpdm86cmFuayddIC0gYlsndml2bzpyYW5rJ107XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXV0aG9ycyA9IGF1dGhvcnM7XG4gICAgfVxuXG4gICAgLy8gSm91cm5hbCBpbmZvXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1jaXRhdGlvbicsIFJwQ2l0YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpXG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiID9oaWRkZW49XCIkeyF0aGlzLmRhdGF9XCI+XG4gIDxhIGhyZWY9XCIjXCI+JHt0aGlzLmRhdGEubGFiZWx9PC9hPlxuICAke3RoaXMuYXV0aG9ycy5tYXAoYXV0aG9yID0+IGh0bWxgPHNwYW4+JHthdXRob3IubmFtZUxhc3R9LCAke2F1dGhvci5uYW1lRmlyc3R9PC9zcGFuPjsgYCl9LlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaGVyby1pbWFnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBIZXJvSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgYXNzZXRGb2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJhc3NldC1mb2xkZXJcIn0sXG4gICAgYXNzZXRNYXg6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LW1heFwifSxcbiAgICBhc3NldFBpY2s6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LXBpY2tcIiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzc2V0Rm9sZGVyID0gXCIvaW1hZ2VzL3Byb2ZpbGUtZmVhdHVyZXMvXCJcbiAgICB0aGlzLmFzc2V0TWF4ID0gMjk7XG4gICAgdGhpcy5zaHVmZmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPCAwKSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA+IHRoaXMuYXNzZXRNYXgpIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSB0aGlzLmFzc2V0TWF4O1xuICAgICAgfVxuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuYXNzZXRGb2xkZXIgKyB0aGlzLmFzc2V0UGljayArIFwiLmpwZ1wifSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjKSB7XG4gICAgICB0aGlzLmFzc2V0UGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICB0aGlzLmFzc2V0TWF4ICsgMSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtaGVyby1pbWFnZScsIFJwSGVyb0ltYWdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnNsb3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICN0b3Age1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2JvdHRvbSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwidG9wXCI+PHNsb3QgbmFtZT1cInRvcFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJtYWluXCI+PHNsb3QgbmFtZT1cIm1haW5cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwiYm90dG9tXCI+PHNsb3QgbmFtZT1cImJvdHRvbVwiPjwvc2xvdD48L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbGluay1saXN0LWNvdW50cy50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmltcG9ydCBcIi4vdmlldy1hbGxcIjtcblxuZXhwb3J0IGNsYXNzIFJwTGlua0xpc3RDb3VudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGxpbmtzOiB7dHlwZTogQXJyYXl9LFxuICAgIHZpZXdBbGxMaW5rOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICd2aWV3LWFsbC1saW5rJ30sXG4gICAgaGVhZGVyOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICdoZWFkZXInfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlua3MgPSBbXTtcblxuICAgIHRoaXMuX2xpbmtDbGljayA9IG5ldyBDdXN0b21FdmVudCgnbGluay1jbGljaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBjbGlja2VkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW5kZXJIZWFkZXIoKXtcbiAgICBpZiAoIXRoaXMuaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHt0aGlzLmhlYWRlci5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj48c3Bhbj4ke3RoaXMuaGVhZGVyLnRleHR9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgaWYgKCFsaW5rLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7bGluay5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluay1pbmRleD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJsaW5rXCI+JHtsaW5rLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJWaWV3QWxsKCl7XG4gICAgaWYgKCF0aGlzLnZpZXdBbGxMaW5rKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmsudGV4dCkge1xuICAgICAgdGhpcy52aWV3QWxsTGluay50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IHZpZXctYWxsXCI+PGRpdiBjbGFzcz1cImNvdW50XCI+PC9kaXY+PHJwLXZpZXctYWxsIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiB0ZXh0PVwiJHt0aGlzLnZpZXdBbGxMaW5rLnRleHR9XCI+PC9ycC12aWV3LWFsbD48L2Rpdj5gXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSApIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLmxpbmtzW3BhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluay1pbmRleCcpKV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLkNsaWNrZWRsaW5rID0gdGhpcy52aWV3QWxsTGluaztcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xpbmtDbGljayk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdC1jb3VudHMnLCBScExpbmtMaXN0Q291bnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJvdy5oZWFkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICAgIC5yb3cudmlldy1hbGwge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5jb3VudCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogY2FsYygzMCUgLSAxMHB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgJHt0aGlzLl9yZW5kZXJIZWFkZXIoKX1cbiAgICAke3RoaXMubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gdGhpcy5fcmVuZGVyTGluayhsaW5rLCBpbmRleCkpfVxuICAgICR7dGhpcy5fcmVuZGVyVmlld0FsbCgpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vc2VhcmNoLnRwbC5qcyc7XG5pbXBvcnQgJy4vZHJvcGRvd24nO1xuaW1wb3J0IFwiLi9pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBScFNlYXJjaCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9LFxuICAgIGlucHV0VmFsdWU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpbnB1dC12YWx1ZVwiLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG4gICAgYWN0aXZlRmFjZXQ6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuX25ld1NlYXJjaCA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlYXJjaCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VhcmNoIGhhcyBiZWVuIHRyaWdnZXJlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2lucHV0VmFsdWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2FjdGl2ZUZhY2V0JykpIHtcbiAgICAgIHRoaXMuc2VhcmNoT2JqZWN0ID0ge3NlYXJjaDogdGhpcy5pbnB1dFZhbHVlLCBmYWNldDogdGhpcy5mYWNldHNbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9uZXdTZWFyY2gpO1xuICB9XG5cbiAgX2hhbmRsZUtleXVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kb1NlYXJjaCgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXNlYXJjaCcsIFJwU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2lucHV0IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICNpY29uLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5saW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MTApO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxycC1kcm9wZG93biAuY2hvaWNlcz1cIiR7dGhpcy5mYWNldHN9XCJcbiAgICAgICAgICAgICAgICAgdG8tdXBwZXItY2FzZVxuICAgICAgICAgICAgICAgICBjaG9zZW49XCIke3RoaXMuYWN0aXZlRmFjZXR9XCJcbiAgICAgICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gdGhpcy5hY3RpdmVGYWNldCA9IGUudGFyZ2V0LmNob3Nlbn1cIj5cbiAgICA8L3JwLWRyb3Bkb3duPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIlxuICAgICAgICAgICBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cIlxuICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX2hhbmRsZUtleXVwfVwiXG4gICAgICAgICAgIGlkPVwiaW5wdXRcIj5cbiAgICA8ZGl2IGlkPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxycC1pY29uIEBjbGljaz1cIiR7dGhpcy5kb1NlYXJjaH1cIiBpY29uPVwicnAtc2VhcmNoXCIgP2lzLWxpbms9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIj48cnAtaWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vdmlldy1hbGwudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwVmlld0FsbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAganVzdGlmeToge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBpZiAodGhpcy5qdXN0aWZ5KSB7XG4gICAgICBjbGFzc2VzW3RoaXMuanVzdGlmeV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIF9yZW5kZXJJbm5lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPjxpcm9uLWljb24gaWNvbj1cImF2OnBsYXktYXJyb3dcIj48L2lyb24taWNvbj5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdmlldy1hbGwnLCBScFZpZXdBbGwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnN0YXJ0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5jZW50ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIgaXJvbi1pY29uLCAuY29udGFpbmVyOmhvdmVyIGF7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cblxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1pbi13aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgLnZpZXctYWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgICR7dGhpcy5ocmVmID8gaHRtbGBcbiAgICAgIDxhIGNsYXNzPVwidmlldy1hbGxcIiBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLl9yZW5kZXJJbm5lckNvbnRlbnQoKX08L2E+XG4gICAgICBgIDogaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFsbFwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICBgfVxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWNvbXBvbmVudHMudHBsLmpzXCJcbi8vaW1wb3J0IHsgY29sb3JTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2l0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBQYWdlQ29tcG9uZW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhZ2UtY29tcG9uZW50cycsIEFwcFBhZ2VDb21wb25lbnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hLXpcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpYW5cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2F2YXRhclwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2JhZGdlXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2l0YXRpb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kcm9wZG93blwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hlcm8taW1hZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50c1wiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3F1aWNrLXNlYXJjaFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3ZpZXctYWxsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgc2VjdGlvbi5oZXJvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHJwLWhlcm8taW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmhlcm90b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5oZXJvbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGVvcGxlLXZlcnRpY2FsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAucGVvcGxlLXZlcnRpY2FsIHJwLXBlcnNvbi1wcmV2aWV3IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAucGVvcGxlLWNvbHVtbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC5wZW9wbGUtY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLnN1Ym5hdiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLmxpbmtsaXN0MSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICBycC1hY2NvcmRpYW4ge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbiAgcnAtY2l0YXRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnF1aWNrLXNlYXJjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zZWFyY2gtYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cblxuPGgxIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+U2l0ZSBDb21wb25lbnRzPC9oMT5cbjxwPlRoZXNlIGRvbid0IGNvbm5lY3QgdG8gdGhlIG1haW4gYnVzLCBhbmQgdGhleSBkb24ndCBpbmhlcml0IGFueSBzaGFyZWQgc3R5bGVzIChvdGhlciB0aGFuIHNpdGUgdmFyaWFibGVzKS5cbllvdSBjb250cm9sIHRoZW0gd2l0aCBhdHRyaWJ1dGVzLCBhbmQgYnVpbGQgbW9yZSBjb21wbGljYXRlZCAoYnVzLWNvbm5lY3RlZCkgZWxlbWVudHMgd2l0aCB0aGVtLlxuPC9wPlxuPHNlY3Rpb24+XG48aDI+QS1aIGxpc3Q8L2gyPlxuPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgc2VsZWN0ZWQgbGV0dGVyIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLWxldHRlcj0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWxlY3RlZExldHRlcil9PC9jb2RlPjwvcD5cbjxycC1hLXogIHNlbGVjdGVkLWxldHRlcj1cImFsbFwiIEBjaGFuZ2VkLWxldHRlcj0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWxlY3RlZExldHRlcil9PjwvcnAtYS16PlxuPHA+VXNlIDxjb2RlPmhpZGUtYWxsPC9jb2RlPiB0byBub3QgcmVuZGVyIHRoZSBBbGwgbGluazwvcD5cbjxycC1hLXogaGlkZS1hbGw9dHJ1ZSBzZWxlY3RlZC1sZXR0ZXI9XCJmXCIgZGlzYWJsZWQtbGV0dGVycz0ke0pTT04uc3RyaW5naWZ5KFsnZycsJ3EnLCAnUyddKX0+PC9ycC1hLXo+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkFjY29yZGlhbnMgZm9yIEZBUSBzZWN0aW9uPC9oMj5cbjxwPlVzZSB0aGUgPGNvZGU+dGl0bGU8L2NvZGU+IGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHRoZSBsaW5rIHRleHQuIFRoZSBleHBhbmRhYmxlIGNvbnRlbnQgaXMgYW4gdW5uYW1lZCBzbG90LjwvcD5cbjxycC1hY2NvcmRpYW4gdGl0bGU9XCJIb3cgb2Z0ZW4gZG8geW91IHVwZGF0ZSB0aGUgZGF0YSBpbiB0aGUgcmVnaXN0cnk/XCI+JHsnSGVsbG8gd29ybGQhICcucmVwZWF0KDQwKX08L3JwLWFjY29yZGlhbj5cbjxycC1hY2NvcmRpYW4+PC9ycC1hY2NvcmRpYW4+XG48cnAtYWNjb3JkaWFuIGV4cGFuZGVkIHRpdGxlPVwiVXNlIHRoZSBleHBhbmRlZCBhdHRyaWJ1dGUgb3IgdG9nZ2xlIG1ldGhvZCB0byBjb250cm9sIGV4cGFuc2lvblwiPlxuVGhpcyBpcyBvcGVuIG9uIHBhZ2UgbG9hZCBiZWNhdXNlIEknbSB1c2luZyB0aGUgZXhwYW5kZWQgYXR0cmlidXRlLlxuPC9ycC1hY2NvcmRpYW4+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkJhc2ljIEFsZXJ0PC9oMj5cbjxwPk5vdCBwYXJ0IG9mIHRoZSBpbml0aWFsIGRlc2lnbiBzcGVjcywgYnV0IG5lZWRlZCBzb21lIHdheSB0byBoYW5kbGUgZXJyb3JzLiBVc2VzIHNsb3QuPC9wPlxuPHJwLWFsZXJ0PlVoIG9oISBTb21ldGhpbmcgd2VudCBob3JyaWJseSB3cm9uZyAobm90IHRoYXQgdGhhdCBldmVyIGhhcHBlbnMpLiBDYW4ndCBsb2FkIGNvbnRlbnQhPC9ycC1hbGVydD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QXZhdGFyczwvaDI+XG48cD5Vc2UgdGhlIHNpemUgYXR0cmlidXRlIHRvIGFkanVzdCBLaW1teS1kZWZpbmVkIHNpemVzLjwvcD5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhciBzaXplPVwic21cIj48L3JwLWF2YXRhcj5cbjxwPlVzZSB0aGUgc3JjIGF0dHJpYnV0ZSB0byB1c2UgYSBwaG90by48cD5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QmFkZ2VzPC9oMj5cbjxzbWFsbD5cbiAgPHJwLWJhZGdlPkknbSBhIEJhZGdlITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5NZSBUb28hPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkNvbG9yczwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5BcmUgYSBTZXF1ZW5jZTwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5JZiBwYXJ0IG9mPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPnRoZSBzYW1lIHBhcmVudCBub2RlPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkNvbG9yIHN0YXJ0cyBvdmVyITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5ZZWxsb3cgYWdhaW4uLi48L3JwLWJhZGdlPlxuPC9zbWFsbD5cbjxwPkJhZGdlcyBpbmhlcml0IGZvbnQgc2l6ZSA8cnAtYmFkZ2U+MTZweCBmb250c2l6ZTwvcnAtYmFkZ2U+XG5idXQgeW91IGNhbiBhbHNvIGluY3JlYXNlIHBhZGRpbmcgd2l0aCB0aGUgc2l6ZSBhdHRyaWJ1dGUgPHJwLWJhZGdlIHNpemU9XCJsZ1wiPnNpemUgbGc8L3JwLWJhZGdlPlxuPC9wPlxuPHA+WW91IGNhbiBtYW51YWxseSBjaGFuZ2UgdGhlIGNvbG9yIHdpdGggdGhlIGNvbG9yLXNlcXVlbmNlIGF0dHJpYnV0ZVxuPHJwLWJhZGdlIGNvbG9yLXNlcXVlbmNlPVwiNVwiPmNvbG9yLXNlcXVlbmNlID0gNTwvcnAtYmFkZ2U+XG48L3A+XG48cD5JZiB5b3UgcGFzcyBpbiBhbiBocmVmIGF0dHJpYnV0ZSwgPHJwLWJhZGdlIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tXCI+dGhlIGJhZGdlczwvcnAtYmFkZ2U+IDxycC1iYWRnZSBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdVwiPmJlY29tZSBsaW5rczwvcnAtYmFkZ2U+XG5hbmQgaGF2ZSBob3ZlciBzdHlsZXMuXG48L3A+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkNpdGF0aW9uczwvaDI+XG48cD5TaW1wbHkgcmVuZGVycyBiaWJsaW9ncmFwaGljIGluZm8gaW4gc29tZSBzdGFuZGFyZCBmb3JtYXQuIFdoYXQgZm9ybWF0IHRoYXQgaXMsIEkgbmVlZCB0byBmaW5kIG91dC48L3A+XG48cnAtY2l0YXRpb24gdGl0bGU9XCJTb21lIFdpdHR5IEV5ZS1jYXRjaGluZyBUaXRsZTogVGhlIEVmZmVjdCBvZiBYIG9uIFpcIlxuICAgICAgICAgICAgIGhyZWY9XCJzb21lIGxpbmtcIlxuICAgICAgICAgICAgIGpvdXJuYWw9XCJOYXR1cmVcIlxuICAgICAgICAgICAgIHBhZ2VzPVwiMTI6MTIzLTQ1NlwiPlxuPC9ycC1jaXRhdGlvbj5cbjxycC1jaXRhdGlvbiB0aXRsZT1cIkV4YW1pbmluZyB0aGUgRWZmZWN0cyBvZiBEb2dzIG9uIENhdHNcIlxuICAgICAgICAgICAgIGpvdXJuYWw9XCJCZWhhdmlvcmFsIFNjaWVuY2VcIiBwYWdlcz1cIjQ6OS0xM1wiPlxuPC9ycC1jaXRhdGlvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+RHJvcGRvd248L2gyPlxuPHA+QSBzdHlsaXplZCBkcm9wZG93bi4gTGlzdGVuIHdpdGggPGNvZGU+QG5ldy1zZWxlY3Rpb249XCJcXCR7ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jaG9pY2VzW2UudGFyZ2V0LmNob3Nlbl0pfTwvY29kZT48L3A+XG48cnAtZHJvcGRvd24gY2hvaWNlcz0nW1wiUGVvcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJPcmdhbml6YXRpb25zXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiV29ya3NcIn1dJ1xuICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmNob2ljZXNbZS50YXJnZXQuY2hvc2VuXSl9XCI+XG48L3JwLWRyb3Bkb3duPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImhlcm9cIj5cbjxoMj5IZXJvIEltYWdlPC9oMj5cbjxwPkhlcm8gaW1hZ2Ugd2lsbCByYW5kb21seSBwdWxsIGEgYmFja2dyb3VuZC1waG90byBmcm9tIHRoZSBwYXRoIGRlY2xhcmVkIGluIDxjb2RlPmFzc2V0LWZvbGRlcjwvY29kZT4gYXR0cmlidXRlLlxuUnVubmluZyA8Y29kZT5lbGUuc2h1ZmZsZSgpPC9jb2RlPiB3aWxsIGxvYWQgYSBuZXcgaW1hZ2UuXG5Ib3dldmVyLCBzcGVjaWZ5aW5nIGEgPGNvZGU+c3JjPC9jb2RlPiBhdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSB0aGUgcmFuZG9tIGFzc2V0IHB1bGwgZnVuY3Rpb25hbGl0eSBhbmQganVzdCBsb2FkIHRoZSBzcmMgYmcgcGhvdG8uXG5UaGVyZSBhcmUgdGhyZWUgc2xvdHMgdG8gcG9wdWxhdGUgdGhlIGhlcm8gY29udGVudCAtIFwidG9wXCIsIFwibWFpblwiLCBhbmQgXCJib3R0b21cIi5cbjxwPlxuPC9zZWN0aW9uPlxuPHJwLWhlcm8taW1hZ2U+XG4gIDxkaXYgc2xvdD1cInRvcFwiIGNsYXNzPVwiaGVyb3RvcFwiPlxuICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgIDxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbiAgPC9kaXY+XG4gIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbiAgICA8aDIgY2xhc3M9XCJuYW1lIHRleHQtc2Vjb25kYXJ5IGgxIGJvbGQgbWItMCB0ZXh0LWNlbnRlclwiPkJyYW50bGV5LCBQZXRlcjwvaDI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGgzIG1iLTIgbXQtMSB0ZXh0LWNlbnRlclwiPkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneTwvcD5cbiAgICA8cCBjbGFzcz1cImJvbGQgdGV4dC1saWdodCBoMyBtdC0xIG1iLTAgdGV4dC1jZW50ZXJcIj5NeSByZXNlYXJjaCBhcmVhcyBpbmNsdWRlOiA8L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IG10LTIgbWItMFwiPlxuICAgICAgPHJwLWJhZGdlPkZvb2JhcjwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+U3R1ZmY8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPlRoaW5nczwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+V2lkZ2V0czwvcnAtYmFkZ2U+XG4gICAgICA8L3A+XG4gICAgPGRpdj48L2Rpdj5cbiAgPC9kaXY+XG48L3JwLWhlcm8taW1hZ2U+XG5cbjxzZWN0aW9uPlxuPGgyPkljb25zPC9oMj5cbjxwPlVzZSB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHRvIHNwZWNpZnkgeW91ciBpY29uLiBVc2UgdGhlIHByZWZpeCBcImlyb24tXCIgdG8gY2FsbCBhbiBpcm9uIGljb246PC9wPlxuPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZz48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1hcnJvdy1mb3J3YXJkXCIgY2lyY2xlLWJnPjwvcnAtaWNvbj5cbjxwPlRoZSA8Y29kZT50aGVtZS1jb2xvcjwvY29kZT4gYXR0cmlidXRlIHdpbGwgYWRqdXN0IHRoZSBjb2xvciwgPGNvZGU+aXMtbGluazwvY29kZT4gd2lsbCBhcHBseSBsaW5rIHN0eWxlcywgYW5kIDxjb2RlPnNpemU8L2NvZGU+IHdpbGwgY2hhbmdlIHRoZSBzaXplPHA+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1mYWNlXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZyBpcy1saW5rIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemU9XCJsZ1wiPjwvcnAtaWNvbj5cbjxwPlByZWZhY2UgdGhlIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSB3aXRoIFwicnAtXCIgdG8gdXNlIG9uZSBvZiB0aGUgY3VzdG9tIGljb25zPC9wPlxuPHJwLWljb24gaWNvbj1cInJwLXNlYXJjaFwiIGNpcmNsZS1iZyBpcy1saW5rIHRoZW1lLWNvbG9yPSdzZWNvbmRhcnknIHNpemU9XCJsZ1wiPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TGluayBMaXN0PC9oMj5cbjxwPkRpc3BsYXlzIGEgbGlzdCBvZiBcImxpbmtzXCIuIEF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGFjdGl2ZSBsaW5rIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLWxpbms9XFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfTwvY29kZT48L3A+XG48ZGl2IGNsYXNzPVwibGlua2xpc3QxXCI+XG4gIDxycC1saW5rLWxpc3QgbGlua3M9J1tcIkhlbGxvIFdvcmxkXCIsIFwiSGVsbG8gQWdhaW4hXCIsIFwiQW5kIE9uZSBNb3JlIFRpbWVcIl0nXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfT5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cblxuPHA+U3dpdGNoIHRvIGhvcml6b250YWwgdmlldyBieSB1c2luZyA8Y29kZT5kaXJlY3Rpb249aDwvY29kZT48L3A+XG48ZGl2IGNsYXNzPVwic3VibmF2XCI+XG4gIDxycC1saW5rLWxpc3QgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCJcbiAgICAgICAgICAgICAgICBsaW5rcz0nW3tcInRleHRcIjogXCJBbGwgSW5mb1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJBYm91dFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJQdWJsaWNhdGlvbnNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVzZWFyY2hcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ29udGFjdFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJEaXNhYmxlZCBMaW5rXCIsIFwiZGlzYWJsZWRcIjogdHJ1ZX0gXSc+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkxpbmsgTGlzdCB3aXRoIENvdW50czwvaDI+XG48cD5MaW5rIGxpc3QgdGhhdCB3aWxsIHByZXBlbmQgY291bnRzLiBMaXN0ZW4gd2l0aCA8Y29kZT5AbGluay1jbGljaz1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuQ2xpY2tlZGxpbmspfVwiPC9jb2RlPjwvcD5cbjxwPlVzZSB0aGUgPGNvZGU+dmlldy1hbGwtbGlua3M8L2NvZGU+IGFuZCA8Y29kZT5oZWFkZXI8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gZW5hYmxlIHRoZXNlIGRpc3BsYXlzOjwvcD5cbjxycC1saW5rLWxpc3QtY291bnRzIGxpbmtzPSdbe1widGV4dFwiOiBcIkFjYWRlbWljIEFydGljbGVzXCIsIFwiY291bnRcIjogMzA4MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJCb29rc1wiLCBcImNvdW50XCI6IDh9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ2hhcHRlcnNcIiwgXCJjb3VudFwiOiA1Mn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb25mZXJlbmNlIFBhcGVyc1wiLCBcImNvdW50XCI6IDQ1MX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJEYXRhc2V0c1wiLCBcImNvdW50XCI6IDcwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkpvdXJuYWxzXCIsIFwiY291bnRcIjogOTYwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlcG9ydHNcIiwgXCJjb3VudFwiOiA0fV0nXG4gICAgICAgICAgICAgICAgICAgICAgdmlldy1hbGwtbGluaz0ne1widGV4dFwiOiBcIlZpZXcgQWxsIFdvcmtzXCJ9J1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj0ne1widGV4dFwiOiBcIkFjYWRlbWljIFdvcmtzXCIsIFwiY291bnRcIjogODQxM30nXG4gICAgICAgICAgICAgICAgICAgICAgQGxpbmstY2xpY2s9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5DbGlja2VkbGluayl9XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG48L3JwLWxpbmstbGlzdC1jb3VudHM+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlBhZ2luYXRpb248L2gyPlxuPHA+QXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgcGFnZSBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1wYWdlPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfTwvY29kZT48L3A+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT04IEBjaGFuZ2VkLXBhZ2U9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY3VycmVudFBhZ2UpfT48L3JwLXBhZ2luYXRpb24+XG48cD5Vc2UgdGhlIDxjb2RlPm1heC1wYWdlPC9jb2RlPiwgPGNvZGU+bWluLXBhZ2U8L2NvZGU+LCBhbmQgPGNvZGU+Y3VycmVudC1wYWdlPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNvbnRyb2wgdGhlIGRpc3BsYXkuPC9wPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9MTUgY3VycmVudC1wYWdlPVwiN1wiPjwvcnAtcGFnaW5hdGlvbj5cbjxwPlVzZSB0aGUgPGNvZGU+cGFnZXMtcGVyLXNpZGU8L2NvZGU+IGF0dHJpYnV0ZSB0byBzaG93IG1vcmUgcGFnZXMgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGN1cnJlbnQgcGFnZTxwPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9MjAgY3VycmVudC1wYWdlPTEwIHBhZ2VzLXBlci1zaWRlPTM+PC9ycC1wYWdpbmF0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5QZXJzb24gUHJldmlldzwvaDI+XG48cD5Zb3UgY2FuIGFycmFuZ2UgdGhlbSBob3cgeW91IHNlZSBmaXQuPC9wPjxwPlZlcnRpY2FsbHksIGxpa2UgaW4gc2VhcmNoL2Jyb3dzZSBwYWdlOjwvcD5cbjxkaXYgY2xhc3M9XCJwZW9wbGUtdmVydGljYWxcIj5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlF1aW5uIEhhcnRcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcXVpbm4taGFydC9cIlxuICAgIHRpdGxlPVwiRGlnaXRhbCBBcHBsaWNhdGlvbnMgTWFuYWdlclwiXG4gICAgYmFkZ2VzPSdbXCJmb28tYmFyXCJdJz5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUGV0ZXIgQnJhbnRseVwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3BldGVyLWJyYW50bGV5L1wiXG4gICAgdGl0bGU9XCJEaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3lcIlxuICAgIGJhZGdlcz0nW3tcInRleHRcIiA6IFwiSW0gYSBsaW5rIVwiLCBcImhyZWZcIiA6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCJ9XSc+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIk1hbiBvZiBNeXN0ZXJ5XCJcbiAgICB0aXRsZT1cIkhhcyBubyBhdmF0YXItc3JjIG9yIGhyZWYgYXR0cmlidXRlc1wiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG48L2Rpdj5cbjxwPm9yIGluIGNvbHVtbnMgbGlrZSBvbiB0aGUgaG9tZXBhZ2U6PC9wPlxuPGRpdiBjbGFzcz1cInBlb3BsZS1jb2x1bW5zXCI+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJRdWlubiBIYXJ0XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnQvXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgdGl0bGU9XCJEaWdpdGFsIEFwcGxpY2F0aW9ucyBNYW5hZ2VyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJQZXRlciBCcmFudGx5XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3BldGVyLWJyYW50bGV5L1wiXG4gICAgdGl0bGU9XCJEaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3lcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIkp1c3RpbiBNZXJ6XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9oZWFkc2hvdF9jcm9wcGVkLTI4MHgzNTAtYy1jZW50ZXIucG5nXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL2p1c3Rpbi1tZXJ6L1wiXG4gICAgdGl0bGU9XCJSZXNlYXJjaCBTdXBwb3J0IEVuZ2luZWVyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJLaW1teSBIZXNjb2NrXCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9LaW1teTIwMTgtMDEtMDAxLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL2tpbW15LWhlc2NvY2svXCJcbiAgICB0aXRsZT1cIlVzZXIgRXhwZXJpZW5jZSBEZXNpZ25lclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuPC9kaXY+XG48cD5CZWNhdXNlIG9mIHRoZSBnZW5lcmFsIGF3ZnVsbG5lc3Mgb2YgdGhlIGNzcyBvdmVyZmxvdyBwcm9wZXJ0aWVzLCB5b3UgaGF2ZSB0byBzZXQgdGhlIHRleHRXaWR0aCBwcm9wZXJ0eSBpbiBhIHJlc2l6ZSBldmVudC48L3A+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlF1aWNrIFNlYXJjaDwvaDI+XG48cD4gVXNlIDxjb2RlPkBuZXctc2VhcmNoPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5pbnB1dFZhbHVlKX1cIjwvY29kZT4gdG8gbGlzdGVuIGZvciBzZWFyY2guPC9wPlxuPGRpdiBjbGFzcz1cInF1aWNrLXNlYXJjaC1jb250YWluZXJcIj5cbjxycC1xdWljay1zZWFyY2ggQG5ldy1zZWFyY2g9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5pbnB1dFZhbHVlKX1cIj48L3JwLXF1aWNrLXNlYXJjaD5cbjwvZGl2PlxuXG48cD5Vc2UgPGNvZGU+aW5wdXQtdmFsdWU8L2NvZGU+IGFuZCA8Y29kZT5vcGVuZWQ8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gY2hhbmdlIGluaXRpYWwgcmVuZGVyIHN0YXRlLjwvcD5cbjxkaXYgY2xhc3M9XCJxdWljay1zZWFyY2gtY29udGFpbmVyXCI+XG48cnAtcXVpY2stc2VhcmNoIGlucHV0LXZhbHVlPVwiQSBwcmUtbG9hZGVkIHNlYXJjaFwiIG9wZW5lZD48L3JwLXF1aWNrLXNlYXJjaD5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5NYWluIFNlYXJjaCBXaWRnZXQ8L2gyPlxuPHA+IFVzZSA8Y29kZT5AbmV3LXNlYXJjaD1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VhcmNoT2JqZWN0KX1cIjwvY29kZT4gdG8gbGlzdGVuIGZvciBzZWFyY2guPC9wPlxuPGRpdiBjbGFzcz1cInNlYXJjaC1ibHVlXCI+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgPHJwLXNlYXJjaCBzdHlsZT1cIndpZHRoOjc1JVwiIEBuZXctc2VhcmNoPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VhcmNoT2JqZWN0KX1cIj48L3JwLXNlYXJjaD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMT5WaWV3IEFsbDwvaDE+XG48cD5EZWFkIHNpbXBsZSBlbGVtZW50IHRoYXQgZGlzcGxheXMgYSBWaWV3IEFsbCBsaW5rLiBVc2UgdGhlIDxjb2RlPnRleHQ8L2NvZGU+IGF0dHJpYnV0ZSB0byBjdXN0b21pemUsIGFuZCA8Y29kZT5qdXN0aWZ5PC9jb2RlPiB0byBjb250cm9sIGhvcml6b250YWwgYWxpZ25tZW50LjwvcD5cbjxycC12aWV3LWFsbCBqdXN0aWZ5PVwic3RhcnRcIj48L3JwLXZpZXctYWxsPlxuPHJwLXZpZXctYWxsIHRleHQ9XCJWaWV3IEFsbCBQZW9wbGVcIj48L3JwLXZpZXctYWxsPlxuPHJwLXZpZXctYWxsIHRleHQ9XCJBZGQgYW4gaHJlZiB0byBtYWtlIGl0IGEgbm9ybWFsIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCI+PC9ycC12aWV3LWFsbD5cbjwvc2VjdGlvbj5cbmA7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==