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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtB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OEIsMENBQTBDO0FBQ3hFLDhCQUE4QixnQ0FBZ0M7QUFDOUQsOEJBQThCLGlDQUFpQztBQUMvRCw4QkFBOEIsOEJBQThCO0FBQzVELHNDQUFzQyx5QkFBeUI7QUFDL0QsK0JBQStCLHdDQUF3QztBQUN2RSxxQ0FBcUMseUNBQXlDO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkZBQTJGLHlDQUF5QztBQUNwSSwwQ0FBMEMseUNBQXlDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQXFEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEU7QUFDQTtBQUNBLGdEQUFnRCwwQ0FBMEM7QUFDMUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FjY29yZGlhbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBY2NvcmRpYW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBleHBhbmRlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdG9nZ2xlKCl7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWNjb3JkaWFuJywgUnBBY2NvcmRpYW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICBpcm9uLWljb25bcm90YXRlZF0ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgI2NvbnRhaW5lci10aXRsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLXRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLnRvZ2dsZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImFycm93LWRyb3AtZG93blwiID9yb3RhdGVkPVwiJHshdGhpcy5leHBhbmRlZH1cIj48L2lyb24taWNvbj5cbiAgICAgIDxzcGFuIGlkPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgP2hpZGRlbj1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9jaXRhdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBDaXRhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge3R5cGU6IE9iamVjdH0sXG4gICAgY2l0YXRpb25TdHlsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2l0YXRpb24tc3R5bGUnfSxcbiAgICBhdXRob3JzOiB7dHlwZTogQXJyYXl9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaXRhdGlvblN0eWxlID0gXCJNTEFcIjtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmF1dGhvcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzKCdkYXRhJykpIHtcbiAgICAgIHRoaXMucGFyc2VEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IGF1dGhvcnNcbiAgICBsZXQgYXV0aG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGEuQXV0aG9yc2hpcCAmJiB0eXBlb2YgdGhpcy5kYXRhLkF1dGhvcnNoaXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgYXV0aHMgPSB0aGlzLmRhdGEuQXV0aG9yc2hpcDtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhdXRocykpIHtcbiAgICAgICAgYXV0aHMgPSBbYXV0aHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgYXV0aG9yIG9mIGF1dGhzKSB7XG4gICAgICAgIGlmICghYXV0aG9yLmhhc05hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3IubmFtZUZpcnN0ID0gYXV0aG9yLmhhc05hbWUuZ2l2ZW5OYW1lO1xuICAgICAgICBhdXRob3IubmFtZUxhc3QgPSBhdXRob3IuaGFzTmFtZS5mYW1pbHlOYW1lO1xuICAgICAgICBpZiAoIWF1dGhvclsndml2bzpyYW5rJ10pIHtcbiAgICAgICAgICBhdXRob3JbJ3Zpdm86cmFuayddID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9ycy5wdXNoKGF1dGhvcik7XG4gICAgICB9XG4gICAgICBhdXRob3JzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbJ3Zpdm86cmFuayddIC0gYlsndml2bzpyYW5rJ107XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXV0aG9ycyA9IGF1dGhvcnM7XG4gICAgfVxuXG4gICAgLy8gSm91cm5hbCBpbmZvXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1jaXRhdGlvbicsIFJwQ2l0YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpXG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiID9oaWRkZW49XCIkeyF0aGlzLmRhdGF9XCI+XG4gIDxhIGhyZWY9XCIjXCI+JHt0aGlzLmRhdGEubGFiZWx9PC9hPlxuICAke3RoaXMuYXV0aG9ycy5tYXAoYXV0aG9yID0+IGh0bWxgPHNwYW4+JHthdXRob3IubmFtZUxhc3R9LCAke2F1dGhvci5uYW1lRmlyc3R9PC9zcGFuPjsgYCl9LlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaGVyby1pbWFnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBIZXJvSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgYXNzZXRGb2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJhc3NldC1mb2xkZXJcIn0sXG4gICAgYXNzZXRNYXg6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LW1heFwifSxcbiAgICBhc3NldFBpY2s6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LXBpY2tcIiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzc2V0Rm9sZGVyID0gXCIvaW1hZ2VzL3Byb2ZpbGUtZmVhdHVyZXMvXCJcbiAgICB0aGlzLmFzc2V0TWF4ID0gMjk7XG4gICAgdGhpcy5zaHVmZmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPCAwKSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA+IHRoaXMuYXNzZXRNYXgpIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSB0aGlzLmFzc2V0TWF4O1xuICAgICAgfVxuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuYXNzZXRGb2xkZXIgKyB0aGlzLmFzc2V0UGljayArIFwiLmpwZ1wifSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjKSB7XG4gICAgICB0aGlzLmFzc2V0UGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICB0aGlzLmFzc2V0TWF4ICsgMSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtaGVyby1pbWFnZScsIFJwSGVyb0ltYWdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnNsb3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICN0b3Age1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2JvdHRvbSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwidG9wXCI+PHNsb3QgbmFtZT1cInRvcFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJtYWluXCI+PHNsb3QgbmFtZT1cIm1haW5cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwiYm90dG9tXCI+PHNsb3QgbmFtZT1cImJvdHRvbVwiPjwvc2xvdD48L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbGluay1saXN0LWNvdW50cy50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmltcG9ydCBcIi4vdmlldy1hbGxcIjtcblxuZXhwb3J0IGNsYXNzIFJwTGlua0xpc3RDb3VudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGxpbmtzOiB7dHlwZTogQXJyYXl9LFxuICAgIHZpZXdBbGxMaW5rOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICd2aWV3LWFsbC1saW5rJ30sXG4gICAgaGVhZGVyOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICdoZWFkZXInfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlua3MgPSBbXTtcblxuICAgIHRoaXMuX2xpbmtDbGljayA9IG5ldyBDdXN0b21FdmVudCgnbGluay1jbGljaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBjbGlja2VkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW5kZXJIZWFkZXIoKXtcbiAgICBpZiAoIXRoaXMuaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHt0aGlzLmhlYWRlci5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj48c3Bhbj4ke3RoaXMuaGVhZGVyLnRleHR9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgaWYgKCFsaW5rLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7bGluay5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluay1pbmRleD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJsaW5rXCI+JHtsaW5rLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJWaWV3QWxsKCl7XG4gICAgaWYgKCF0aGlzLnZpZXdBbGxMaW5rKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmsudGV4dCkge1xuICAgICAgdGhpcy52aWV3QWxsTGluay50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IHZpZXctYWxsXCI+PGRpdiBjbGFzcz1cImNvdW50XCI+PC9kaXY+PHJwLXZpZXctYWxsIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiB0ZXh0PVwiJHt0aGlzLnZpZXdBbGxMaW5rLnRleHR9XCI+PC9ycC12aWV3LWFsbD48L2Rpdj5gXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSApIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLmxpbmtzW3BhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluay1pbmRleCcpKV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLkNsaWNrZWRsaW5rID0gdGhpcy52aWV3QWxsTGluaztcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xpbmtDbGljayk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdC1jb3VudHMnLCBScExpbmtMaXN0Q291bnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJvdy5oZWFkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICAgIC5yb3cudmlldy1hbGwge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5jb3VudCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogY2FsYygzMCUgLSAxMHB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgJHt0aGlzLl9yZW5kZXJIZWFkZXIoKX1cbiAgICAke3RoaXMubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gdGhpcy5fcmVuZGVyTGluayhsaW5rLCBpbmRleCkpfVxuICAgICR7dGhpcy5fcmVuZGVyVmlld0FsbCgpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vc2VhcmNoLnRwbC5qcyc7XG5pbXBvcnQgJy4vZHJvcGRvd24nO1xuaW1wb3J0IFwiLi9pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBScFNlYXJjaCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9LFxuICAgIGlucHV0VmFsdWU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpbnB1dC12YWx1ZVwiLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG4gICAgYWN0aXZlRmFjZXQ6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuX25ld1NlYXJjaCA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlYXJjaCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VhcmNoIGhhcyBiZWVuIHRyaWdnZXJlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2lucHV0VmFsdWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2FjdGl2ZUZhY2V0JykpIHtcbiAgICAgIHRoaXMuc2VhcmNoT2JqZWN0ID0ge3NlYXJjaDogdGhpcy5pbnB1dFZhbHVlLCBmYWNldDogdGhpcy5mYWNldHNbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9uZXdTZWFyY2gpO1xuICB9XG5cbiAgX2hhbmRsZUtleXVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kb1NlYXJjaCgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXNlYXJjaCcsIFJwU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2lucHV0IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICNpY29uLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5saW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MTApO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxycC1kcm9wZG93biBjaG9pY2VzPVwiJHtKU09OLnN0cmluZ2lmeSh0aGlzLmZhY2V0cyl9XCJcbiAgICAgICAgICAgICAgICAgY2hvc2VuPVwiJHt0aGlzLmFjdGl2ZUZhY2V0fVwiXG4gICAgICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IHRoaXMuYWN0aXZlRmFjZXQgPSBlLnRhcmdldC5jaG9zZW59XCI+XG4gICAgPC9ycC1kcm9wZG93bj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLmlucHV0VmFsdWV9XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCJcbiAgICAgICAgICAgQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5pbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWV9XCJcbiAgICAgICAgICAgQGtleXVwPVwiJHt0aGlzLl9oYW5kbGVLZXl1cH1cIlxuICAgICAgICAgICBpZD1cImlucHV0XCI+XG4gICAgPGRpdiBpZD1cImljb24tY29udGFpbmVyXCI+XG4gICAgICA8cnAtaWNvbiBAY2xpY2s9XCIke3RoaXMuZG9TZWFyY2h9XCIgaWNvbj1cInJwLXNlYXJjaFwiID9pcy1saW5rPVwiJHt0aGlzLmlucHV0VmFsdWV9XCI+PHJwLWljb24+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3ZpZXctYWxsLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScFZpZXdBbGwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGp1c3RpZnk6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgaWYgKHRoaXMuanVzdGlmeSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLmp1c3RpZnldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBfcmVuZGVySW5uZXJDb250ZW50KCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPVwidGV4dFwiPiR7dGhpcy50ZXh0fTwvc3Bhbj48aXJvbi1pY29uIGljb249XCJhdjpwbGF5LWFycm93XCI+PC9pcm9uLWljb24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXZpZXctYWxsJywgUnBWaWV3QWxsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgLmNvbnRhaW5lci5zdGFydCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIuY2VudGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIGlyb24taWNvbiwgLmNvbnRhaW5lcjpob3ZlciBhe1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG5cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBtaW4td2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC52aWV3LWFsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICAke3RoaXMuaHJlZiA/IGh0bWxgXG4gICAgICA8YSBjbGFzcz1cInZpZXctYWxsXCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9hPlxuICAgICAgYCA6IGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwidmlldy1hbGxcIj4ke3RoaXMuX3JlbmRlcklubmVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgYH1cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1jb21wb25lbnRzLnRwbC5qc1wiXG4vL2ltcG9ydCB7IGNvbG9yU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NpdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgQXBwUGFnZUNvbXBvbmVudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1wYWdlLWNvbXBvbmVudHMnLCBBcHBQYWdlQ29tcG9uZW50cyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYS16XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3JkaWFuXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hdmF0YXJcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9iYWRnZVwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NpdGF0aW9uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oZXJvLWltYWdlXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHNcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9xdWljay1zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy92aWV3LWFsbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24uaGVybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBycC1oZXJvLWltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5oZXJvdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVyb21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCBycC1wZXJzb24tcHJldmlldyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAucGVvcGxlLWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5zdWJuYXYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5saW5rbGlzdDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgcnAtYWNjb3JkaWFuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG4gIHJwLWNpdGF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5xdWljay1zZWFyY2gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG5cbjxoMSBjbGFzcz1cInRleHQtcHJpbWFyeVwiPlNpdGUgQ29tcG9uZW50czwvaDE+XG48cD5UaGVzZSBkb24ndCBjb25uZWN0IHRvIHRoZSBtYWluIGJ1cywgYW5kIHRoZXkgZG9uJ3QgaW5oZXJpdCBhbnkgc2hhcmVkIHN0eWxlcyAob3RoZXIgdGhhbiBzaXRlIHZhcmlhYmxlcykuXG5Zb3UgY29udHJvbCB0aGVtIHdpdGggYXR0cmlidXRlcywgYW5kIGJ1aWxkIG1vcmUgY29tcGxpY2F0ZWQgKGJ1cy1jb25uZWN0ZWQpIGVsZW1lbnRzIHdpdGggdGhlbS5cbjwvcD5cbjxzZWN0aW9uPlxuPGgyPkEtWiBsaXN0PC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHNlbGVjdGVkIGxldHRlciBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfTwvY29kZT48L3A+XG48cnAtYS16ICBzZWxlY3RlZC1sZXR0ZXI9XCJhbGxcIiBAY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfT48L3JwLWEtej5cbjxwPlVzZSA8Y29kZT5oaWRlLWFsbDwvY29kZT4gdG8gbm90IHJlbmRlciB0aGUgQWxsIGxpbms8L3A+XG48cnAtYS16IGhpZGUtYWxsPXRydWUgc2VsZWN0ZWQtbGV0dGVyPVwiZlwiIGRpc2FibGVkLWxldHRlcnM9JHtKU09OLnN0cmluZ2lmeShbJ2cnLCdxJywgJ1MnXSl9PjwvcnAtYS16PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BY2NvcmRpYW5zIGZvciBGQVEgc2VjdGlvbjwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPnRpdGxlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB0aGUgbGluayB0ZXh0LiBUaGUgZXhwYW5kYWJsZSBjb250ZW50IGlzIGFuIHVubmFtZWQgc2xvdC48L3A+XG48cnAtYWNjb3JkaWFuIHRpdGxlPVwiSG93IG9mdGVuIGRvIHlvdSB1cGRhdGUgdGhlIGRhdGEgaW4gdGhlIHJlZ2lzdHJ5P1wiPiR7J0hlbGxvIHdvcmxkISAnLnJlcGVhdCg0MCl9PC9ycC1hY2NvcmRpYW4+XG48cnAtYWNjb3JkaWFuPjwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbiBleHBhbmRlZCB0aXRsZT1cIlVzZSB0aGUgZXhwYW5kZWQgYXR0cmlidXRlIG9yIHRvZ2dsZSBtZXRob2QgdG8gY29udHJvbCBleHBhbnNpb25cIj5cblRoaXMgaXMgb3BlbiBvbiBwYWdlIGxvYWQgYmVjYXVzZSBJJ20gdXNpbmcgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZS5cbjwvcnAtYWNjb3JkaWFuPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYXNpYyBBbGVydDwvaDI+XG48cD5Ob3QgcGFydCBvZiB0aGUgaW5pdGlhbCBkZXNpZ24gc3BlY3MsIGJ1dCBuZWVkZWQgc29tZSB3YXkgdG8gaGFuZGxlIGVycm9ycy4gVXNlcyBzbG90LjwvcD5cbjxycC1hbGVydD5VaCBvaCEgU29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcgKG5vdCB0aGF0IHRoYXQgZXZlciBoYXBwZW5zKS4gQ2FuJ3QgbG9hZCBjb250ZW50ITwvcnAtYWxlcnQ+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkF2YXRhcnM8L2gyPlxuPHA+VXNlIHRoZSBzaXplIGF0dHJpYnV0ZSB0byBhZGp1c3QgS2ltbXktZGVmaW5lZCBzaXplcy48L3A+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhcj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cInNtXCI+PC9ycC1hdmF0YXI+XG48cD5Vc2UgdGhlIHNyYyBhdHRyaWJ1dGUgdG8gdXNlIGEgcGhvdG8uPHA+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkJhZGdlczwvaDI+XG48c21hbGw+XG4gIDxycC1iYWRnZT5JJ20gYSBCYWRnZSE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+TWUgVG9vITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvcnM8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+QXJlIGEgU2VxdWVuY2U8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+SWYgcGFydCBvZjwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT50aGUgc2FtZSBwYXJlbnQgbm9kZTwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvciBzdGFydHMgb3ZlciE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+WWVsbG93IGFnYWluLi4uPC9ycC1iYWRnZT5cbjwvc21hbGw+XG48cD5CYWRnZXMgaW5oZXJpdCBmb250IHNpemUgPHJwLWJhZGdlPjE2cHggZm9udHNpemU8L3JwLWJhZGdlPlxuYnV0IHlvdSBjYW4gYWxzbyBpbmNyZWFzZSBwYWRkaW5nIHdpdGggdGhlIHNpemUgYXR0cmlidXRlIDxycC1iYWRnZSBzaXplPVwibGdcIj5zaXplIGxnPC9ycC1iYWRnZT5cbjwvcD5cbjxwPllvdSBjYW4gbWFudWFsbHkgY2hhbmdlIHRoZSBjb2xvciB3aXRoIHRoZSBjb2xvci1zZXF1ZW5jZSBhdHRyaWJ1dGVcbjxycC1iYWRnZSBjb2xvci1zZXF1ZW5jZT1cIjVcIj5jb2xvci1zZXF1ZW5jZSA9IDU8L3JwLWJhZGdlPlxuPC9wPlxuPHA+SWYgeW91IHBhc3MgaW4gYW4gaHJlZiBhdHRyaWJ1dGUsIDxycC1iYWRnZSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPnRoZSBiYWRnZXM8L3JwLWJhZGdlPiA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHVcIj5iZWNvbWUgbGlua3M8L3JwLWJhZGdlPlxuYW5kIGhhdmUgaG92ZXIgc3R5bGVzLlxuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5DaXRhdGlvbnM8L2gyPlxuPHA+U2ltcGx5IHJlbmRlcnMgYmlibGlvZ3JhcGhpYyBpbmZvIGluIHNvbWUgc3RhbmRhcmQgZm9ybWF0LiBXaGF0IGZvcm1hdCB0aGF0IGlzLCBJIG5lZWQgdG8gZmluZCBvdXQuPC9wPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiU29tZSBXaXR0eSBFeWUtY2F0Y2hpbmcgVGl0bGU6IFRoZSBFZmZlY3Qgb2YgWCBvbiBaXCJcbiAgICAgICAgICAgICBocmVmPVwic29tZSBsaW5rXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiTmF0dXJlXCJcbiAgICAgICAgICAgICBwYWdlcz1cIjEyOjEyMy00NTZcIj5cbjwvcnAtY2l0YXRpb24+XG48cnAtY2l0YXRpb24gdGl0bGU9XCJFeGFtaW5pbmcgdGhlIEVmZmVjdHMgb2YgRG9ncyBvbiBDYXRzXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiQmVoYXZpb3JhbCBTY2llbmNlXCIgcGFnZXM9XCI0OjktMTNcIj5cbjwvcnAtY2l0YXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkRyb3Bkb3duPC9oMj5cbjxwPkEgc3R5bGl6ZWQgZHJvcGRvd24uIExpc3RlbiB3aXRoIDxjb2RlPkBuZXctc2VsZWN0aW9uPVwiXFwke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX08L2NvZGU+PC9wPlxuPHJwLWRyb3Bkb3duIGNob2ljZXM9J1tcIlBlb3BsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiT3JnYW5pemF0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIldvcmtzXCJ9XSdcbiAgICAgICAgICAgICBAbmV3LXNlbGVjdGlvbj1cIiR7ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jaG9pY2VzW2UudGFyZ2V0LmNob3Nlbl0pfVwiPlxuPC9ycC1kcm9wZG93bj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XG48aDI+SGVybyBJbWFnZTwvaDI+XG48cD5IZXJvIGltYWdlIHdpbGwgcmFuZG9tbHkgcHVsbCBhIGJhY2tncm91bmQtcGhvdG8gZnJvbSB0aGUgcGF0aCBkZWNsYXJlZCBpbiA8Y29kZT5hc3NldC1mb2xkZXI8L2NvZGU+IGF0dHJpYnV0ZS5cblJ1bm5pbmcgPGNvZGU+ZWxlLnNodWZmbGUoKTwvY29kZT4gd2lsbCBsb2FkIGEgbmV3IGltYWdlLlxuSG93ZXZlciwgc3BlY2lmeWluZyBhIDxjb2RlPnNyYzwvY29kZT4gYXR0cmlidXRlIHdpbGwgb3ZlcnJpZGUgdGhlIHJhbmRvbSBhc3NldCBwdWxsIGZ1bmN0aW9uYWxpdHkgYW5kIGp1c3QgbG9hZCB0aGUgc3JjIGJnIHBob3RvLlxuVGhlcmUgYXJlIHRocmVlIHNsb3RzIHRvIHBvcHVsYXRlIHRoZSBoZXJvIGNvbnRlbnQgLSBcInRvcFwiLCBcIm1haW5cIiwgYW5kIFwiYm90dG9tXCIuXG48cD5cbjwvc2VjdGlvbj5cbjxycC1oZXJvLWltYWdlPlxuICA8ZGl2IHNsb3Q9XCJ0b3BcIiBjbGFzcz1cImhlcm90b3BcIj5cbiAgICA8cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NXB4O1wiPjwvcnAtaWNvbj5cbiAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IHNsb3Q9XCJtYWluXCIgY2xhc3M9XCJoZXJvbWFpblwiPlxuICAgIDxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG4gICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj5CcmFudGxleSwgUGV0ZXI8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBoMyBtYi0yIG10LTEgdGV4dC1jZW50ZXJcIj5EaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3k8L3A+XG4gICAgPHAgY2xhc3M9XCJib2xkIHRleHQtbGlnaHQgaDMgbXQtMSBtYi0wIHRleHQtY2VudGVyXCI+TXkgcmVzZWFyY2ggYXJlYXMgaW5jbHVkZTogPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBtdC0yIG1iLTBcIj5cbiAgICAgIDxycC1iYWRnZT5Gb29iYXI8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPlN0dWZmPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5UaGluZ3M8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPldpZGdldHM8L3JwLWJhZGdlPlxuICAgICAgPC9wPlxuICAgIDxkaXY+PC9kaXY+XG4gIDwvZGl2PlxuPC9ycC1oZXJvLWltYWdlPlxuXG48c2VjdGlvbj5cbjxoMj5JY29uczwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHlvdXIgaWNvbi4gVXNlIHRoZSBwcmVmaXggXCJpcm9uLVwiIHRvIGNhbGwgYW4gaXJvbiBpY29uOjwvcD5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cImlyb24tYXJyb3ctZm9yd2FyZFwiIGNpcmNsZS1iZz48L3JwLWljb24+XG48cD5UaGUgPGNvZGU+dGhlbWUtY29sb3I8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIGFkanVzdCB0aGUgY29sb3IsIDxjb2RlPmlzLWxpbms8L2NvZGU+IHdpbGwgYXBwbHkgbGluayBzdHlsZXMsIGFuZCA8Y29kZT5zaXplPC9jb2RlPiB3aWxsIGNoYW5nZSB0aGUgc2l6ZTxwPlxuPHJwLWljb24gaWNvbj1cImlyb24tZmFjZVwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cD5QcmVmYWNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgd2l0aCBcInJwLVwiIHRvIHVzZSBvbmUgb2YgdGhlIGN1c3RvbSBpY29uczwvcD5cbjxycC1pY29uIGljb249XCJycC1zZWFyY2hcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkxpbmsgTGlzdDwvaDI+XG48cD5EaXNwbGF5cyBhIGxpc3Qgb2YgXCJsaW5rc1wiLiBBdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBhY3RpdmUgbGluayBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1saW5rPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX08L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cImxpbmtsaXN0MVwiPlxuICA8cnAtbGluay1saXN0IGxpbmtzPSdbXCJIZWxsbyBXb3JsZFwiLCBcIkhlbGxvIEFnYWluIVwiLCBcIkFuZCBPbmUgTW9yZSBUaW1lXCJdJ1xuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX0+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG5cbjxwPlN3aXRjaCB0byBob3Jpem9udGFsIHZpZXcgYnkgdXNpbmcgPGNvZGU+ZGlyZWN0aW9uPWg8L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cInN1Ym5hdlwiPlxuICA8cnAtbGluay1saXN0IGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiXG4gICAgICAgICAgICAgICAgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWxsIEluZm9cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQWJvdXRcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUHVibGljYXRpb25zXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlc2VhcmNoXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbnRhY3RcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGlzYWJsZWQgTGlua1wiLCBcImRpc2FibGVkXCI6IHRydWV9IF0nPlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Qgd2l0aCBDb3VudHM8L2gyPlxuPHA+TGluayBsaXN0IHRoYXQgd2lsbCBwcmVwZW5kIGNvdW50cy4gTGlzdGVuIHdpdGggPGNvZGU+QGxpbmstY2xpY2s9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIjwvY29kZT48L3A+XG48cD5Vc2UgdGhlIDxjb2RlPnZpZXctYWxsLWxpbmtzPC9jb2RlPiBhbmQgPGNvZGU+aGVhZGVyPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGVuYWJsZSB0aGVzZSBkaXNwbGF5czo8L3A+XG48cnAtbGluay1saXN0LWNvdW50cyBsaW5rcz0nW3tcInRleHRcIjogXCJBY2FkZW1pYyBBcnRpY2xlc1wiLCBcImNvdW50XCI6IDMwODB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQm9va3NcIiwgXCJjb3VudFwiOiA4fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNoYXB0ZXJzXCIsIFwiY291bnRcIjogNTJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ29uZmVyZW5jZSBQYXBlcnNcIiwgXCJjb3VudFwiOiA0NTF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGF0YXNldHNcIiwgXCJjb3VudFwiOiA3MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJKb3VybmFsc1wiLCBcImNvdW50XCI6IDk2MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXBvcnRzXCIsIFwiY291bnRcIjogNH1dJ1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXctYWxsLWxpbms9J3tcInRleHRcIjogXCJWaWV3IEFsbCBXb3Jrc1wifSdcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9J3tcInRleHRcIjogXCJBY2FkZW1pYyBXb3Jrc1wiLCBcImNvdW50XCI6IDg0MTN9J1xuICAgICAgICAgICAgICAgICAgICAgIEBsaW5rLWNsaWNrPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuQ2xpY2tlZGxpbmspfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuPC9ycC1saW5rLWxpc3QtY291bnRzPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5QYWdpbmF0aW9uPC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHBhZ2UgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtcGFnZT1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX08L2NvZGU+PC9wPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9OCBAY2hhbmdlZC1wYWdlPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX0+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5tYXgtcGFnZTwvY29kZT4sIDxjb2RlPm1pbi1wYWdlPC9jb2RlPiwgYW5kIDxjb2RlPmN1cnJlbnQtcGFnZTwvY29kZT4gYXR0cmlidXRlcyB0byBjb250cm9sIHRoZSBkaXNwbGF5LjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTE1IGN1cnJlbnQtcGFnZT1cIjdcIj48L3JwLXBhZ2luYXRpb24+XG48cD5Vc2UgdGhlIDxjb2RlPnBhZ2VzLXBlci1zaWRlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc2hvdyBtb3JlIHBhZ2VzIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjdXJyZW50IHBhZ2U8cD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTIwIGN1cnJlbnQtcGFnZT0xMCBwYWdlcy1wZXItc2lkZT0zPjwvcnAtcGFnaW5hdGlvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGVyc29uIFByZXZpZXc8L2gyPlxuPHA+WW91IGNhbiBhcnJhbmdlIHRoZW0gaG93IHlvdSBzZWUgZml0LjwvcD48cD5WZXJ0aWNhbGx5LCBsaWtlIGluIHNlYXJjaC9icm93c2UgcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLXZlcnRpY2FsXCI+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJRdWlubiBIYXJ0XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnQvXCJcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIlxuICAgIGJhZGdlcz0nW1wiZm9vLWJhclwiXSc+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCJcbiAgICBiYWRnZXM9J1t7XCJ0ZXh0XCIgOiBcIkltIGEgbGluayFcIiwgXCJocmVmXCIgOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwifV0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJNYW4gb2YgTXlzdGVyeVwiXG4gICAgdGl0bGU9XCJIYXMgbm8gYXZhdGFyLXNyYyBvciBocmVmIGF0dHJpYnV0ZXNcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuPC9kaXY+XG48cD5vciBpbiBjb2x1bW5zIGxpa2Ugb24gdGhlIGhvbWVwYWdlOjwvcD5cbjxkaXYgY2xhc3M9XCJwZW9wbGUtY29sdW1uc1wiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIHRpdGxlPVwiRGlnaXRhbCBBcHBsaWNhdGlvbnMgTWFuYWdlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUGV0ZXIgQnJhbnRseVwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJKdXN0aW4gTWVyelwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvaGVhZHNob3RfY3JvcHBlZC0yODB4MzUwLWMtY2VudGVyLnBuZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9qdXN0aW4tbWVyei9cIlxuICAgIHRpdGxlPVwiUmVzZWFyY2ggU3VwcG9ydCBFbmdpbmVlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiS2ltbXkgSGVzY29ja1wiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDcvS2ltbXkyMDE4LTAxLTAwMS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9raW1teS1oZXNjb2NrL1wiXG4gICAgdGl0bGU9XCJVc2VyIEV4cGVyaWVuY2UgRGVzaWduZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbjwvZGl2PlxuPHA+QmVjYXVzZSBvZiB0aGUgZ2VuZXJhbCBhd2Z1bGxuZXNzIG9mIHRoZSBjc3Mgb3ZlcmZsb3cgcHJvcGVydGllcywgeW91IGhhdmUgdG8gc2V0IHRoZSB0ZXh0V2lkdGggcHJvcGVydHkgaW4gYSByZXNpemUgZXZlbnQuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5RdWljayBTZWFyY2g8L2gyPlxuPHA+IFVzZSA8Y29kZT5AbmV3LXNlYXJjaD1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJxdWljay1zZWFyY2gtY29udGFpbmVyXCI+XG48cnAtcXVpY2stc2VhcmNoIEBuZXctc2VhcmNoPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cblxuPHA+VXNlIDxjb2RlPmlucHV0LXZhbHVlPC9jb2RlPiBhbmQgPGNvZGU+b3BlbmVkPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNoYW5nZSBpbml0aWFsIHJlbmRlciBzdGF0ZS48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBpbnB1dC12YWx1ZT1cIkEgcHJlLWxvYWRlZCBzZWFyY2hcIiBvcGVuZWQ+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TWFpbiBTZWFyY2ggV2lkZ2V0PC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtYmx1ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgIDxycC1zZWFyY2ggc3R5bGU9XCJ3aWR0aDo3NSVcIiBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI+PC9ycC1zZWFyY2g+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDE+VmlldyBBbGw8L2gxPlxuPHA+RGVhZCBzaW1wbGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIGEgVmlldyBBbGwgbGluay4gVXNlIHRoZSA8Y29kZT50ZXh0PC9jb2RlPiBhdHRyaWJ1dGUgdG8gY3VzdG9taXplLCBhbmQgPGNvZGU+anVzdGlmeTwvY29kZT4gdG8gY29udHJvbCBob3Jpem9udGFsIGFsaWdubWVudC48L3A+XG48cnAtdmlldy1hbGwganVzdGlmeT1cInN0YXJ0XCI+PC9ycC12aWV3LWFsbD5cbjxycC12aWV3LWFsbCB0ZXh0PVwiVmlldyBBbGwgUGVvcGxlXCI+PC9ycC12aWV3LWFsbD5cbjxycC12aWV3LWFsbCB0ZXh0PVwiQWRkIGFuIGhyZWYgdG8gbWFrZSBpdCBhIG5vcm1hbCBsaW5rXCIgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiPjwvcnAtdmlldy1hbGw+XG48L3NlY3Rpb24+XG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=