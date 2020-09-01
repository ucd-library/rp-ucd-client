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

class AppPageComponents extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
.with(LitCorkUtils) {

  static get properties() {
    return {
      exampleWorks: {type: Array},
      exampleOrgs: {type: Array},
      visible: {type: Boolean}
    };
    }
  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel');
    this.visible = false;
    this.exampleWorks = [];
    this.exampleOrgs = [];
    this.render = _app_components_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    await Promise.all([this.getWorks(), this.getOrgs()]);
  }

  async getWorks(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["ucdrp:publication"]}}};
    let data = await this.CollectionModel.query(q);
    if (data.state != 'loaded') {
      return;
    }
    this.exampleWorks = data.payload.results;

  }

  async getOrgs(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["ucdrp:organization"]}}};
    let data = await this.CollectionModel.query(q);
    if (data.state != 'loaded') {
      return;
    }
    this.exampleOrgs = data.payload.results;
    console.log(this.exampleOrgs);

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
/* harmony import */ var _components_organization_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/organization-preview */ "./public/elements/components/organization-preview.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");
/* harmony import */ var _components_quick_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/quick-search */ "./public/elements/components/quick-search.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/search */ "./public/elements/components/search.js");
/* harmony import */ var _components_view_all__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/view-all */ "./public/elements/components/view-all.js");
/* harmony import */ var _components_work_preview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/work-preview */ "./public/elements/components/work-preview.js");






















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

<section>
<h1>Asset Preview (Work)</h1>
<p>Card for the Work asset type - used in browse and search pages.</p>
${this.exampleWorks.map((work) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <rp-work-preview .data="${work}"></rp-work-preview>
`)}

</section>

<section>
<h1>Asset Preview (Organization)</h1>
<p>Card for the Organization asset type - used in browse and search pages.</p>
${this.exampleOrgs.map((org) => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <rp-organization-preview .data="${org}"></rp-organization-preview>
`)}

</section>
`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQSxnREFBZ0QsMENBQTBDO0FBQzFGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQ0FBZ0MsZ0RBQUk7QUFDdEMsNEJBQTRCLEtBQUs7QUFDakM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4QkFBOEIsZ0RBQUk7QUFDcEMsb0NBQW9DLElBQUk7QUFDeEM7O0FBRUE7QUFDQSIsImZpbGUiOiJwYWdlLWNvbXBvbmVudHMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hY2NvcmRpYW4udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWNjb3JkaWFuIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgZXhwYW5kZWQ6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHRvZ2dsZSgpe1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFjY29yZGlhbicsIFJwQWNjb3JkaWFuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBbaGlkZGVuXSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgaXJvbi1pY29uW3JvdGF0ZWRdIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgICNjb250YWluZXItdGl0bGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgI3RpdGxlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgI2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMudGl0bGV9XCI+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lci10aXRsZVwiIEBjbGljaz1cIiR7dGhpcy50b2dnbGV9XCI+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJhcnJvdy1kcm9wLWRvd25cIiA/cm90YXRlZD1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+PC9pcm9uLWljb24+XG4gICAgICA8c3BhbiBpZD1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiID9oaWRkZW49XCIkeyF0aGlzLmV4cGFuZGVkfVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vY2l0YXRpb24udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQ2l0YXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHt0eXBlOiBPYmplY3R9LFxuICAgIGNpdGF0aW9uU3R5bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NpdGF0aW9uLXN0eWxlJ30sXG4gICAgYXV0aG9yczoge3R5cGU6IEFycmF5fVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2l0YXRpb25TdHlsZSA9IFwiTUxBXCI7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5hdXRob3JzID0gW107XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygnZGF0YScpKSB7XG4gICAgICB0aGlzLnBhcnNlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0YSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCBhdXRob3JzXG4gICAgbGV0IGF1dGhvcnMgPSBbXTtcbiAgICBpZiAodGhpcy5kYXRhLkF1dGhvcnNoaXAgJiYgdHlwZW9mIHRoaXMuZGF0YS5BdXRob3JzaGlwID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IGF1dGhzID0gdGhpcy5kYXRhLkF1dGhvcnNoaXA7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXV0aHMpKSB7XG4gICAgICAgIGF1dGhzID0gW2F1dGhzXTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGF1dGhvciBvZiBhdXRocykge1xuICAgICAgICBpZiAoIWF1dGhvci5oYXNOYW1lKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yLm5hbWVGaXJzdCA9IGF1dGhvci5oYXNOYW1lLmdpdmVuTmFtZTtcbiAgICAgICAgYXV0aG9yLm5hbWVMYXN0ID0gYXV0aG9yLmhhc05hbWUuZmFtaWx5TmFtZTtcbiAgICAgICAgaWYgKCFhdXRob3JbJ3Zpdm86cmFuayddKSB7XG4gICAgICAgICAgYXV0aG9yWyd2aXZvOnJhbmsnXSA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIGF1dGhvcnMucHVzaChhdXRob3IpO1xuICAgICAgfVxuICAgICAgYXV0aG9ycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWyd2aXZvOnJhbmsnXSAtIGJbJ3Zpdm86cmFuayddO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmF1dGhvcnMgPSBhdXRob3JzO1xuICAgIH1cblxuICAgIC8vIEpvdXJuYWwgaW5mb1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtY2l0YXRpb24nLCBScENpdGF0aW9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KVxuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy5kYXRhfVwiPlxuICA8YSBocmVmPVwiI1wiPiR7dGhpcy5kYXRhLmxhYmVsfTwvYT5cbiAgJHt0aGlzLmF1dGhvcnMubWFwKGF1dGhvciA9PiBodG1sYDxzcGFuPiR7YXV0aG9yLm5hbWVMYXN0fSwgJHthdXRob3IubmFtZUZpcnN0fTwvc3Bhbj47IGApfS5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2hlcm8taW1hZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwSGVyb0ltYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFzc2V0Rm9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiYXNzZXQtZm9sZGVyXCJ9LFxuICAgIGFzc2V0TWF4OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1tYXhcIn0sXG4gICAgYXNzZXRQaWNrOiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1waWNrXCIsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hc3NldEZvbGRlciA9IFwiL2ltYWdlcy9wcm9maWxlLWZlYXR1cmVzL1wiXG4gICAgdGhpcy5hc3NldE1heCA9IDI5O1xuICAgIHRoaXMuc2h1ZmZsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrIDwgMCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPiB0aGlzLmFzc2V0TWF4KSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gdGhpcy5hc3NldE1heDtcbiAgICAgIH1cbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLmFzc2V0Rm9sZGVyICsgdGhpcy5hc3NldFBpY2sgKyBcIi5qcGdcIn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHNodWZmbGUoKSB7XG4gICAgaWYgKCF0aGlzLnNyYykge1xuICAgICAgdGhpcy5hc3NldFBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAgdGhpcy5hc3NldE1heCArIDEpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWhlcm8taW1hZ2UnLCBScEhlcm9JbWFnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5zbG90IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAjdG9wIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNib3R0b20ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cInRvcFwiPjxzbG90IG5hbWU9XCJ0b3BcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwibWFpblwiPjxzbG90IG5hbWU9XCJtYWluXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cImJvdHRvbVwiPjxzbG90IG5hbWU9XCJib3R0b21cIj48L3Nsb3Q+PC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpbmstbGlzdC1jb3VudHMudHBsLmpzJztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5pbXBvcnQgXCIuL3ZpZXctYWxsXCI7XG5cbmV4cG9ydCBjbGFzcyBScExpbmtMaXN0Q291bnRzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rczoge3R5cGU6IEFycmF5fSxcbiAgICB2aWV3QWxsTGluazoge3R5cGU6IE9iamVjdCwgYXR0cmlidXRlOiAndmlldy1hbGwtbGluayd9LFxuICAgIGhlYWRlcjoge3R5cGU6IE9iamVjdCwgYXR0cmlidXRlOiAnaGVhZGVyJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxpbmtzID0gW107XG5cbiAgICB0aGlzLl9saW5rQ2xpY2sgPSBuZXcgQ3VzdG9tRXZlbnQoJ2xpbmstY2xpY2snLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGxpbmsgaGFzIGJlZW4gY2xpY2tlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVuZGVySGVhZGVyKCl7XG4gICAgaWYgKCF0aGlzLmhlYWRlcikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhlYWRlci50ZXh0KSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IGhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7dGhpcy5oZWFkZXIuY291bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+PHNwYW4+JHt0aGlzLmhlYWRlci50ZXh0fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgX3JlbmRlckxpbmsobGluaywgaW5kZXgpe1xuICAgIGlmICghbGluay50ZXh0KSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke2xpbmsuY291bnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGxpbmstaW5kZXg9XCIke2luZGV4fVwiIGNsYXNzPVwibGlua1wiPiR7bGluay50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBfcmVuZGVyVmlld0FsbCgpe1xuICAgIGlmICghdGhpcy52aWV3QWxsTGluaykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnZpZXdBbGxMaW5rLnRleHQpIHtcbiAgICAgIHRoaXMudmlld0FsbExpbmsudGV4dCA9IFwiVmlldyBBbGxcIjtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyB2aWV3LWFsbFwiPjxkaXYgY2xhc3M9XCJjb3VudFwiPjwvZGl2PjxycC12aWV3LWFsbCBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgdGV4dD1cIiR7dGhpcy52aWV3QWxsTGluay50ZXh0fVwiPjwvcnAtdmlldy1hbGw+PC9kaXY+YFxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICggZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgKSB7XG4gICAgICB0aGlzLkNsaWNrZWRsaW5rID0gdGhpcy5saW5rc1twYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xpbmstaW5kZXgnKSldXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMudmlld0FsbExpbms7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9saW5rQ2xpY2spO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1saW5rLWxpc3QtY291bnRzJywgUnBMaW5rTGlzdENvdW50cyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgfVxuICAgIC5yb3cuaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgIH1cbiAgICAucm93LnZpZXctYWxsIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuY291bnQge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMTBweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAubGluay1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIGxpbmsuZGlzYWJlbGQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICR7dGhpcy5fcmVuZGVySGVhZGVyKCl9XG4gICAgJHt0aGlzLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHRoaXMuX3JlbmRlckxpbmsobGluaywgaW5kZXgpKX1cbiAgICAke3RoaXMuX3JlbmRlclZpZXdBbGwoKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3NlYXJjaC50cGwuanMnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duJztcbmltcG9ydCBcIi4vaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgUnBTZWFyY2ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICBpbnB1dFZhbHVlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiaW5wdXQtdmFsdWVcIiwgcmVmbGVjdDogdHJ1ZX0sXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFjdGl2ZUZhY2V0OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ2FjdGl2ZS1mYWNldCcsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mYWNldHMgPSBbe1widGV4dFwiOiBcIlBFT1BMRVwifSwge1widGV4dFwiOiBcIk9SR0FOSVpBVElPTlNcIn0sIHtcInRleHRcIjogXCJXT1JLU1wifV07XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHRoZSByZWdpc3RyeVwiO1xuICAgIHRoaXMuYWN0aXZlRmFjZXQgPSAwO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLl9uZXdTZWFyY2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ25ldy1zZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHNlYXJjaCBoYXMgYmVlbiB0cmlnZ2VyZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdpbnB1dFZhbHVlJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdhY3RpdmVGYWNldCcpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9iamVjdCA9IHtzZWFyY2g6IHRoaXMuaW5wdXRWYWx1ZSwgZmFjZXQ6IHRoaXMuZmFjZXRzW3RoaXMuYWN0aXZlRmFjZXRdfTtcbiAgICB9XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBkb1NlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VhcmNoKTtcbiAgfVxuXG4gIF9oYW5kbGVLZXl1cChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1zZWFyY2gnLCBScFNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNpbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAjaWNvbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8cnAtZHJvcGRvd24gLmNob2ljZXM9XCIke3RoaXMuZmFjZXRzfVwiXG4gICAgICAgICAgICAgICAgIHRvLXVwcGVyLWNhc2VcbiAgICAgICAgICAgICAgICAgY2hvc2VuPVwiJHt0aGlzLmFjdGl2ZUZhY2V0fVwiXG4gICAgICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IHRoaXMuYWN0aXZlRmFjZXQgPSBlLnRhcmdldC5jaG9zZW59XCI+XG4gICAgPC9ycC1kcm9wZG93bj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLmlucHV0VmFsdWV9XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCJcbiAgICAgICAgICAgQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5pbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWV9XCJcbiAgICAgICAgICAgQGtleXVwPVwiJHt0aGlzLl9oYW5kbGVLZXl1cH1cIlxuICAgICAgICAgICBpZD1cImlucHV0XCI+XG4gICAgPGRpdiBpZD1cImljb24tY29udGFpbmVyXCI+XG4gICAgICA8cnAtaWNvbiBAY2xpY2s9XCIke3RoaXMuZG9TZWFyY2h9XCIgaWNvbj1cInJwLXNlYXJjaFwiID9pcy1saW5rPVwiJHt0aGlzLmlucHV0VmFsdWV9XCI+PHJwLWljb24+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3ZpZXctYWxsLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScFZpZXdBbGwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGp1c3RpZnk6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgaWYgKHRoaXMuanVzdGlmeSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLmp1c3RpZnldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBfcmVuZGVySW5uZXJDb250ZW50KCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPVwidGV4dFwiPiR7dGhpcy50ZXh0fTwvc3Bhbj48aXJvbi1pY29uIGljb249XCJhdjpwbGF5LWFycm93XCI+PC9pcm9uLWljb24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXZpZXctYWxsJywgUnBWaWV3QWxsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgLmNvbnRhaW5lci5zdGFydCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIuY2VudGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIGlyb24taWNvbiwgLmNvbnRhaW5lcjpob3ZlciBhe1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG5cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBtaW4td2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC52aWV3LWFsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICAke3RoaXMuaHJlZiA/IGh0bWxgXG4gICAgICA8YSBjbGFzcz1cInZpZXctYWxsXCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9hPlxuICAgICAgYCA6IGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwidmlldy1hbGxcIj4ke3RoaXMuX3JlbmRlcklubmVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgYH1cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1jb21wb25lbnRzLnRwbC5qc1wiXG4vL2ltcG9ydCB7IGNvbG9yU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NpdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgQXBwUGFnZUNvbXBvbmVudHMgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleGFtcGxlV29ya3M6IHt0eXBlOiBBcnJheX0sXG4gICAgICBleGFtcGxlT3Jnczoge3R5cGU6IEFycmF5fSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufVxuICAgIH07XG4gICAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZXhhbXBsZVdvcmtzID0gW107XG4gICAgdGhpcy5leGFtcGxlT3JncyA9IFtdO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgfVxuXG4gIGFzeW5jIGRvVXBkYXRlKHN0YXRlKXtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmdldFdvcmtzKCksIHRoaXMuZ2V0T3JncygpXSk7XG4gIH1cblxuICBhc3luYyBnZXRXb3Jrcygpe1xuICAgIGxldCBxID0ge2ZpbHRlcnM6IHtcIkB0eXBlXCI6IHtcInR5cGVcIjogXCJrZXl3b3JkXCIsIFwib3BcIjogXCJhbmRcIiwgXCJ2YWx1ZVwiOiBbXCJ1Y2RycDpwdWJsaWNhdGlvblwiXX19fTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLnF1ZXJ5KHEpO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZXhhbXBsZVdvcmtzID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG5cbiAgfVxuXG4gIGFzeW5jIGdldE9yZ3MoKXtcbiAgICBsZXQgcSA9IHtmaWx0ZXJzOiB7XCJAdHlwZVwiOiB7XCJ0eXBlXCI6IFwia2V5d29yZFwiLCBcIm9wXCI6IFwiYW5kXCIsIFwidmFsdWVcIjogW1widWNkcnA6b3JnYW5pemF0aW9uXCJdfX19O1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwucXVlcnkocSk7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leGFtcGxlT3JncyA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZXhhbXBsZU9yZ3MpO1xuXG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLXBhZ2UtY29tcG9uZW50cycsIEFwcFBhZ2VDb21wb25lbnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hLXpcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hY2NvcmRpYW5cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2F2YXRhclwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2JhZGdlXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2l0YXRpb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kcm9wZG93blwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hlcm8taW1hZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50c1wiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1wcmV2aWV3XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcXVpY2stc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvdmlldy1hbGxcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy93b3JrLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBzZWN0aW9uLmhlcm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcnAtaGVyby1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwgcnAtcGVyc29uLXByZXZpZXcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wZW9wbGUtY29sdW1ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuc3VibmF2IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAubGlua2xpc3QxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIHJwLWFjY29yZGlhbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxuICBycC1jaXRhdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucXVpY2stc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnNlYXJjaC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuXG48aDEgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5TaXRlIENvbXBvbmVudHM8L2gxPlxuPHA+VGhlc2UgZG9uJ3QgY29ubmVjdCB0byB0aGUgbWFpbiBidXMsIGFuZCB0aGV5IGRvbid0IGluaGVyaXQgYW55IHNoYXJlZCBzdHlsZXMgKG90aGVyIHRoYW4gc2l0ZSB2YXJpYWJsZXMpLlxuWW91IGNvbnRyb2wgdGhlbSB3aXRoIGF0dHJpYnV0ZXMsIGFuZCBidWlsZCBtb3JlIGNvbXBsaWNhdGVkIChidXMtY29ubmVjdGVkKSBlbGVtZW50cyB3aXRoIHRoZW0uXG48L3A+XG48c2VjdGlvbj5cbjxoMj5BLVogbGlzdDwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBzZWxlY3RlZCBsZXR0ZXIgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX08L2NvZGU+PC9wPlxuPHJwLWEteiAgc2VsZWN0ZWQtbGV0dGVyPVwiYWxsXCIgQGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX0+PC9ycC1hLXo+XG48cD5Vc2UgPGNvZGU+aGlkZS1hbGw8L2NvZGU+IHRvIG5vdCByZW5kZXIgdGhlIEFsbCBsaW5rPC9wPlxuPHJwLWEteiBoaWRlLWFsbD10cnVlIHNlbGVjdGVkLWxldHRlcj1cImZcIiBkaXNhYmxlZC1sZXR0ZXJzPSR7SlNPTi5zdHJpbmdpZnkoWydnJywncScsICdTJ10pfT48L3JwLWEtej5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QWNjb3JkaWFucyBmb3IgRkFRIHNlY3Rpb248L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT50aXRsZTwvY29kZT4gYXR0cmlidXRlIHRvIHNwZWNpZnkgdGhlIGxpbmsgdGV4dC4gVGhlIGV4cGFuZGFibGUgY29udGVudCBpcyBhbiB1bm5hbWVkIHNsb3QuPC9wPlxuPHJwLWFjY29yZGlhbiB0aXRsZT1cIkhvdyBvZnRlbiBkbyB5b3UgdXBkYXRlIHRoZSBkYXRhIGluIHRoZSByZWdpc3RyeT9cIj4keydIZWxsbyB3b3JsZCEgJy5yZXBlYXQoNDApfTwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbj48L3JwLWFjY29yZGlhbj5cbjxycC1hY2NvcmRpYW4gZXhwYW5kZWQgdGl0bGU9XCJVc2UgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZSBvciB0b2dnbGUgbWV0aG9kIHRvIGNvbnRyb2wgZXhwYW5zaW9uXCI+XG5UaGlzIGlzIG9wZW4gb24gcGFnZSBsb2FkIGJlY2F1c2UgSSdtIHVzaW5nIHRoZSBleHBhbmRlZCBhdHRyaWJ1dGUuXG48L3JwLWFjY29yZGlhbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QmFzaWMgQWxlcnQ8L2gyPlxuPHA+Tm90IHBhcnQgb2YgdGhlIGluaXRpYWwgZGVzaWduIHNwZWNzLCBidXQgbmVlZGVkIHNvbWUgd2F5IHRvIGhhbmRsZSBlcnJvcnMuIFVzZXMgc2xvdC48L3A+XG48cnAtYWxlcnQ+VWggb2ghIFNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nIChub3QgdGhhdCB0aGF0IGV2ZXIgaGFwcGVucykuIENhbid0IGxvYWQgY29udGVudCE8L3JwLWFsZXJ0PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BdmF0YXJzPC9oMj5cbjxwPlVzZSB0aGUgc2l6ZSBhdHRyaWJ1dGUgdG8gYWRqdXN0IEtpbW15LWRlZmluZWQgc2l6ZXMuPC9wPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyIHNpemU9XCJzbVwiPjwvcnAtYXZhdGFyPlxuPHA+VXNlIHRoZSBzcmMgYXR0cmlidXRlIHRvIHVzZSBhIHBob3RvLjxwPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYWRnZXM8L2gyPlxuPHNtYWxsPlxuICA8cnAtYmFkZ2U+SSdtIGEgQmFkZ2UhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPk1lIFRvbyE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3JzPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkFyZSBhIFNlcXVlbmNlPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPklmIHBhcnQgb2Y8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+dGhlIHNhbWUgcGFyZW50IG5vZGU8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3Igc3RhcnRzIG92ZXIhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPlllbGxvdyBhZ2Fpbi4uLjwvcnAtYmFkZ2U+XG48L3NtYWxsPlxuPHA+QmFkZ2VzIGluaGVyaXQgZm9udCBzaXplIDxycC1iYWRnZT4xNnB4IGZvbnRzaXplPC9ycC1iYWRnZT5cbmJ1dCB5b3UgY2FuIGFsc28gaW5jcmVhc2UgcGFkZGluZyB3aXRoIHRoZSBzaXplIGF0dHJpYnV0ZSA8cnAtYmFkZ2Ugc2l6ZT1cImxnXCI+c2l6ZSBsZzwvcnAtYmFkZ2U+XG48L3A+XG48cD5Zb3UgY2FuIG1hbnVhbGx5IGNoYW5nZSB0aGUgY29sb3Igd2l0aCB0aGUgY29sb3Itc2VxdWVuY2UgYXR0cmlidXRlXG48cnAtYmFkZ2UgY29sb3Itc2VxdWVuY2U9XCI1XCI+Y29sb3Itc2VxdWVuY2UgPSA1PC9ycC1iYWRnZT5cbjwvcD5cbjxwPklmIHlvdSBwYXNzIGluIGFuIGhyZWYgYXR0cmlidXRlLCA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIj50aGUgYmFkZ2VzPC9ycC1iYWRnZT4gPHJwLWJhZGdlIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1XCI+YmVjb21lIGxpbmtzPC9ycC1iYWRnZT5cbmFuZCBoYXZlIGhvdmVyIHN0eWxlcy5cbjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+Q2l0YXRpb25zPC9oMj5cbjxwPlNpbXBseSByZW5kZXJzIGJpYmxpb2dyYXBoaWMgaW5mbyBpbiBzb21lIHN0YW5kYXJkIGZvcm1hdC4gV2hhdCBmb3JtYXQgdGhhdCBpcywgSSBuZWVkIHRvIGZpbmQgb3V0LjwvcD5cbjxycC1jaXRhdGlvbiB0aXRsZT1cIlNvbWUgV2l0dHkgRXllLWNhdGNoaW5nIFRpdGxlOiBUaGUgRWZmZWN0IG9mIFggb24gWlwiXG4gICAgICAgICAgICAgaHJlZj1cInNvbWUgbGlua1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIk5hdHVyZVwiXG4gICAgICAgICAgICAgcGFnZXM9XCIxMjoxMjMtNDU2XCI+XG48L3JwLWNpdGF0aW9uPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiRXhhbWluaW5nIHRoZSBFZmZlY3RzIG9mIERvZ3Mgb24gQ2F0c1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIkJlaGF2aW9yYWwgU2NpZW5jZVwiIHBhZ2VzPVwiNDo5LTEzXCI+XG48L3JwLWNpdGF0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5Ecm9wZG93bjwvaDI+XG48cD5BIHN0eWxpemVkIGRyb3Bkb3duLiBMaXN0ZW4gd2l0aCA8Y29kZT5AbmV3LXNlbGVjdGlvbj1cIlxcJHtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmNob2ljZXNbZS50YXJnZXQuY2hvc2VuXSl9PC9jb2RlPjwvcD5cbjxycC1kcm9wZG93biBjaG9pY2VzPSdbXCJQZW9wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIk9yZ2FuaXphdGlvbnNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJXb3Jrc1wifV0nXG4gICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX1cIj5cbjwvcnAtZHJvcGRvd24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVyb1wiPlxuPGgyPkhlcm8gSW1hZ2U8L2gyPlxuPHA+SGVybyBpbWFnZSB3aWxsIHJhbmRvbWx5IHB1bGwgYSBiYWNrZ3JvdW5kLXBob3RvIGZyb20gdGhlIHBhdGggZGVjbGFyZWQgaW4gPGNvZGU+YXNzZXQtZm9sZGVyPC9jb2RlPiBhdHRyaWJ1dGUuXG5SdW5uaW5nIDxjb2RlPmVsZS5zaHVmZmxlKCk8L2NvZGU+IHdpbGwgbG9hZCBhIG5ldyBpbWFnZS5cbkhvd2V2ZXIsIHNwZWNpZnlpbmcgYSA8Y29kZT5zcmM8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIHRoZSByYW5kb20gYXNzZXQgcHVsbCBmdW5jdGlvbmFsaXR5IGFuZCBqdXN0IGxvYWQgdGhlIHNyYyBiZyBwaG90by5cblRoZXJlIGFyZSB0aHJlZSBzbG90cyB0byBwb3B1bGF0ZSB0aGUgaGVybyBjb250ZW50IC0gXCJ0b3BcIiwgXCJtYWluXCIsIGFuZCBcImJvdHRvbVwiLlxuPHA+XG48L3NlY3Rpb24+XG48cnAtaGVyby1pbWFnZT5cbiAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZyBpcy1saW5rIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjVweDtcIj48L3JwLWljb24+XG4gICAgPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuICA8L2Rpdj5cbiAgPGRpdiBzbG90PVwibWFpblwiIGNsYXNzPVwiaGVyb21haW5cIj5cbiAgICA8cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuICAgIDxoMiBjbGFzcz1cIm5hbWUgdGV4dC1zZWNvbmRhcnkgaDEgYm9sZCBtYi0wIHRleHQtY2VudGVyXCI+QnJhbnRsZXksIFBldGVyPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgaDMgbWItMiBtdC0xIHRleHQtY2VudGVyXCI+RGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5PC9wPlxuICAgIDxwIGNsYXNzPVwiYm9sZCB0ZXh0LWxpZ2h0IGgzIG10LTEgbWItMCB0ZXh0LWNlbnRlclwiPk15IHJlc2VhcmNoIGFyZWFzIGluY2x1ZGU6IDwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICA8cnAtYmFkZ2U+Rm9vYmFyPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5TdHVmZjwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+VGhpbmdzPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5XaWRnZXRzPC9ycC1iYWRnZT5cbiAgICAgIDwvcD5cbiAgICA8ZGl2PjwvZGl2PlxuICA8L2Rpdj5cbjwvcnAtaGVyby1pbWFnZT5cblxuPHNlY3Rpb24+XG48aDI+SWNvbnM8L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB5b3VyIGljb24uIFVzZSB0aGUgcHJlZml4IFwiaXJvbi1cIiB0byBjYWxsIGFuIGlyb24gaWNvbjo8L3A+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWFycm93LWZvcndhcmRcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHA+VGhlIDxjb2RlPnRoZW1lLWNvbG9yPC9jb2RlPiBhdHRyaWJ1dGUgd2lsbCBhZGp1c3QgdGhlIGNvbG9yLCA8Y29kZT5pcy1saW5rPC9jb2RlPiB3aWxsIGFwcGx5IGxpbmsgc3R5bGVzLCBhbmQgPGNvZGU+c2l6ZTwvY29kZT4gd2lsbCBjaGFuZ2UgdGhlIHNpemU8cD5cbjxycC1pY29uIGljb249XCJpcm9uLWZhY2VcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHA+UHJlZmFjZSB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHdpdGggXCJycC1cIiB0byB1c2Ugb25lIG9mIHRoZSBjdXN0b20gaWNvbnM8L3A+XG48cnAtaWNvbiBpY29uPVwicnAtc2VhcmNoXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Q8L2gyPlxuPHA+RGlzcGxheXMgYSBsaXN0IG9mIFwibGlua3NcIi4gQXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgYWN0aXZlIGxpbmsgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGluaz1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJsaW5rbGlzdDFcIj5cbiAgPHJwLWxpbmstbGlzdCBsaW5rcz0nW1wiSGVsbG8gV29ybGRcIiwgXCJIZWxsbyBBZ2FpbiFcIiwgXCJBbmQgT25lIE1vcmUgVGltZVwiXSdcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuXG48cD5Td2l0Y2ggdG8gaG9yaXpvbnRhbCB2aWV3IGJ5IHVzaW5nIDxjb2RlPmRpcmVjdGlvbj1oPC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJzdWJuYXZcIj5cbiAgPHJwLWxpbmstbGlzdCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIlxuICAgICAgICAgICAgICAgIGxpbmtzPSdbe1widGV4dFwiOiBcIkFsbCBJbmZvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkFib3V0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlB1YmxpY2F0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXNlYXJjaFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb250YWN0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRpc2FibGVkIExpbmtcIiwgXCJkaXNhYmxlZFwiOiB0cnVlfSBdJz5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TGluayBMaXN0IHdpdGggQ291bnRzPC9oMj5cbjxwPkxpbmsgbGlzdCB0aGF0IHdpbGwgcHJlcGVuZCBjb3VudHMuIExpc3RlbiB3aXRoIDxjb2RlPkBsaW5rLWNsaWNrPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5DbGlja2VkbGluayl9XCI8L2NvZGU+PC9wPlxuPHA+VXNlIHRoZSA8Y29kZT52aWV3LWFsbC1saW5rczwvY29kZT4gYW5kIDxjb2RlPmhlYWRlcjwvY29kZT4gYXR0cmlidXRlcyB0byBlbmFibGUgdGhlc2UgZGlzcGxheXM6PC9wPlxuPHJwLWxpbmstbGlzdC1jb3VudHMgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgQXJ0aWNsZXNcIiwgXCJjb3VudFwiOiAzMDgwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkJvb2tzXCIsIFwiY291bnRcIjogOH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDaGFwdGVyc1wiLCBcImNvdW50XCI6IDUyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbmZlcmVuY2UgUGFwZXJzXCIsIFwiY291bnRcIjogNDUxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRhdGFzZXRzXCIsIFwiY291bnRcIjogNzB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSm91cm5hbHNcIiwgXCJjb3VudFwiOiA5NjB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVwb3J0c1wiLCBcImNvdW50XCI6IDR9XSdcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3LWFsbC1saW5rPSd7XCJ0ZXh0XCI6IFwiVmlldyBBbGwgV29ya3NcIn0nXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPSd7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgV29ya3NcIiwgXCJjb3VudFwiOiA4NDEzfSdcbiAgICAgICAgICAgICAgICAgICAgICBAbGluay1jbGljaz1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbjwvcnAtbGluay1saXN0LWNvdW50cz5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGFnaW5hdGlvbjwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBwYWdlIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLXBhZ2U9XFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PC9jb2RlPjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTggQGNoYW5nZWQtcGFnZT0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PjwvcnAtcGFnaW5hdGlvbj5cbjxwPlVzZSB0aGUgPGNvZGU+bWF4LXBhZ2U8L2NvZGU+LCA8Y29kZT5taW4tcGFnZTwvY29kZT4sIGFuZCA8Y29kZT5jdXJyZW50LXBhZ2U8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gY29udHJvbCB0aGUgZGlzcGxheS48L3A+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0xNSBjdXJyZW50LXBhZ2U9XCI3XCI+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5wYWdlcy1wZXItc2lkZTwvY29kZT4gYXR0cmlidXRlIHRvIHNob3cgbW9yZSBwYWdlcyBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgY3VycmVudCBwYWdlPHA+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0yMCBjdXJyZW50LXBhZ2U9MTAgcGFnZXMtcGVyLXNpZGU9Mz48L3JwLXBhZ2luYXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlBlcnNvbiBQcmV2aWV3PC9oMj5cbjxwPllvdSBjYW4gYXJyYW5nZSB0aGVtIGhvdyB5b3Ugc2VlIGZpdC48L3A+PHA+VmVydGljYWxseSwgbGlrZSBpbiBzZWFyY2gvYnJvd3NlIHBhZ2U6PC9wPlxuPGRpdiBjbGFzcz1cInBlb3BsZS12ZXJ0aWNhbFwiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgdGl0bGU9XCJEaWdpdGFsIEFwcGxpY2F0aW9ucyBNYW5hZ2VyXCJcbiAgICBiYWRnZXM9J1tcImZvby1iYXJcIl0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJQZXRlciBCcmFudGx5XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiXG4gICAgYmFkZ2VzPSdbe1widGV4dFwiIDogXCJJbSBhIGxpbmshXCIsIFwiaHJlZlwiIDogXCJodHRwczovL2dvb2dsZS5jb21cIn1dJz5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiTWFuIG9mIE15c3RlcnlcIlxuICAgIHRpdGxlPVwiSGFzIG5vIGF2YXRhci1zcmMgb3IgaHJlZiBhdHRyaWJ1dGVzXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbjwvZGl2PlxuPHA+b3IgaW4gY29sdW1ucyBsaWtlIG9uIHRoZSBob21lcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLWNvbHVtbnNcIj5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlF1aW5uIEhhcnRcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcXVpbm4taGFydC9cIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiSnVzdGluIE1lcnpcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2hlYWRzaG90X2Nyb3BwZWQtMjgweDM1MC1jLWNlbnRlci5wbmdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvanVzdGluLW1lcnovXCJcbiAgICB0aXRsZT1cIlJlc2VhcmNoIFN1cHBvcnQgRW5naW5lZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIktpbW15IEhlc2NvY2tcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3L0tpbW15MjAxOC0wMS0wMDEtMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3Iva2ltbXktaGVzY29jay9cIlxuICAgIHRpdGxlPVwiVXNlciBFeHBlcmllbmNlIERlc2lnbmVyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG48L2Rpdj5cbjxwPkJlY2F1c2Ugb2YgdGhlIGdlbmVyYWwgYXdmdWxsbmVzcyBvZiB0aGUgY3NzIG92ZXJmbG93IHByb3BlcnRpZXMsIHlvdSBoYXZlIHRvIHNldCB0aGUgdGV4dFdpZHRoIHByb3BlcnR5IGluIGEgcmVzaXplIGV2ZW50LjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UXVpY2sgU2VhcmNoPC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG5cbjxwPlVzZSA8Y29kZT5pbnB1dC12YWx1ZTwvY29kZT4gYW5kIDxjb2RlPm9wZW5lZDwvY29kZT4gYXR0cmlidXRlcyB0byBjaGFuZ2UgaW5pdGlhbCByZW5kZXIgc3RhdGUuPC9wPlxuPGRpdiBjbGFzcz1cInF1aWNrLXNlYXJjaC1jb250YWluZXJcIj5cbjxycC1xdWljay1zZWFyY2ggaW5wdXQtdmFsdWU9XCJBIHByZS1sb2FkZWQgc2VhcmNoXCIgb3BlbmVkPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPk1haW4gU2VhcmNoIFdpZGdldDwvaDI+XG48cD4gVXNlIDxjb2RlPkBuZXctc2VhcmNoPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwic2VhcmNoLWJsdWVcIj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICA8cnAtc2VhcmNoIHN0eWxlPVwid2lkdGg6NzUlXCIgQG5ldy1zZWFyY2g9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPjwvcnAtc2VhcmNoPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgxPlZpZXcgQWxsPC9oMT5cbjxwPkRlYWQgc2ltcGxlIGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBhIFZpZXcgQWxsIGxpbmsuIFVzZSB0aGUgPGNvZGU+dGV4dDwvY29kZT4gYXR0cmlidXRlIHRvIGN1c3RvbWl6ZSwgYW5kIDxjb2RlPmp1c3RpZnk8L2NvZGU+IHRvIGNvbnRyb2wgaG9yaXpvbnRhbCBhbGlnbm1lbnQuPC9wPlxuPHJwLXZpZXctYWxsIGp1c3RpZnk9XCJzdGFydFwiPjwvcnAtdmlldy1hbGw+XG48cnAtdmlldy1hbGwgdGV4dD1cIlZpZXcgQWxsIFBlb3BsZVwiPjwvcnAtdmlldy1hbGw+XG48cnAtdmlldy1hbGwgdGV4dD1cIkFkZCBhbiBocmVmIHRvIG1ha2UgaXQgYSBub3JtYWwgbGlua1wiIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIj48L3JwLXZpZXctYWxsPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMT5Bc3NldCBQcmV2aWV3IChXb3JrKTwvaDE+XG48cD5DYXJkIGZvciB0aGUgV29yayBhc3NldCB0eXBlIC0gdXNlZCBpbiBicm93c2UgYW5kIHNlYXJjaCBwYWdlcy48L3A+XG4ke3RoaXMuZXhhbXBsZVdvcmtzLm1hcCgod29yaykgPT4gaHRtbGBcbiAgPHJwLXdvcmstcHJldmlldyAuZGF0YT1cIiR7d29ya31cIj48L3JwLXdvcmstcHJldmlldz5cbmApfVxuXG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgxPkFzc2V0IFByZXZpZXcgKE9yZ2FuaXphdGlvbik8L2gxPlxuPHA+Q2FyZCBmb3IgdGhlIE9yZ2FuaXphdGlvbiBhc3NldCB0eXBlIC0gdXNlZCBpbiBicm93c2UgYW5kIHNlYXJjaCBwYWdlcy48L3A+XG4ke3RoaXMuZXhhbXBsZU9yZ3MubWFwKChvcmcpID0+IGh0bWxgXG4gIDxycC1vcmdhbml6YXRpb24tcHJldmlldyAuZGF0YT1cIiR7b3JnfVwiPjwvcnAtb3JnYW5pemF0aW9uLXByZXZpZXc+XG5gKX1cblxuPC9zZWN0aW9uPlxuYDt9XG4iXSwic291cmNlUm9vdCI6IiJ9