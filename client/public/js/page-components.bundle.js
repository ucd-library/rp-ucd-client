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
    if (link.href) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row">
      <div class="count">${link.count}</div>
      <div class="link-container">
        <a link-index="${index}" class="link" href="${link.href}">${link.text}</a>
      </div>
    </div>`;
    }
    else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row">
      <div class="count">${link.count}</div>
      <div class="link-container">
        <span @click="${this.handleClick}" link-index="${index}" class="link">${link.text}</span>
      </div>
    </div>`;

    }

  }

  _renderViewAll(){
    if (!this.viewAllLink) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    if (!this.viewAllLink.text) {
      this.viewAllLink.text = "View All";
    }
    if (this.viewAllLink.href) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row view-all"><div class="count"></div><rp-view-all href="${this.viewAllLink.href}" text="${this.viewAllLink.text}"></rp-view-all></div>`
    }
    else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`
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
    includeAllOption: {type: Boolean, attribute: 'include-all-option'},
    allOption: {type: Object},
    inputValue: {type: String, attribute: "input-value", reflect: true},
    placeholder: {type: String},
    activeFacet: {type: Number, attribute: 'active-facet', reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _search_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.facets = [{"text": "PEOPLE"}, {"text": "ORGANIZATIONS"}, {"text": "WORKS"}];
    this.placeholder = "Search the registry";
    this.activeFacet = 0;
    this.inputValue = "";
    this.includeAllOption = false;
    this.allOption = {text: 'ALL', id: 'all'}


    this._newSearch = new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });
  }

  updated(changedProperties) {

    if (changedProperties.has('inputValue') || changedProperties.has('activeFacet')) {
      this.searchObject = {search: this.inputValue, facet: this.getDropdownOptions()[this.activeFacet]};
    }
  }

  _constructClasses() {
    let classes = {};

    return classes;
  }

  getDropdownOptions(){
    if (this.includeAllOption) return [this.allOption, ...this.facets];
    return this.facets;
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
    <rp-dropdown .choices="${this.getDropdownOptions()}"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBd0M7QUFDdEU7QUFDQSxnQ0FBZ0Msd0NBQXdDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBMEM7QUFDeEU7QUFDQTtBQUNBLGdEQUFnRCwwQ0FBMEM7QUFDMUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdDQUFnQyxnREFBSTtBQUN0Qyw0QkFBNEIsS0FBSztBQUNqQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhCQUE4QixnREFBSTtBQUNwQyxvQ0FBb0MsSUFBSTtBQUN4Qzs7QUFFQTtBQUNBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FjY29yZGlhbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBY2NvcmRpYW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBleHBhbmRlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdG9nZ2xlKCl7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWNjb3JkaWFuJywgUnBBY2NvcmRpYW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICBpcm9uLWljb25bcm90YXRlZF0ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgI2NvbnRhaW5lci10aXRsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLXRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLnRvZ2dsZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImFycm93LWRyb3AtZG93blwiID9yb3RhdGVkPVwiJHshdGhpcy5leHBhbmRlZH1cIj48L2lyb24taWNvbj5cbiAgICAgIDxzcGFuIGlkPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgP2hpZGRlbj1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9jaXRhdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBDaXRhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge3R5cGU6IE9iamVjdH0sXG4gICAgY2l0YXRpb25TdHlsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnY2l0YXRpb24tc3R5bGUnfSxcbiAgICBhdXRob3JzOiB7dHlwZTogQXJyYXl9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaXRhdGlvblN0eWxlID0gXCJNTEFcIjtcbiAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB0aGlzLmF1dGhvcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzKCdkYXRhJykpIHtcbiAgICAgIHRoaXMucGFyc2VEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRhKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IGF1dGhvcnNcbiAgICBsZXQgYXV0aG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLmRhdGEuQXV0aG9yc2hpcCAmJiB0eXBlb2YgdGhpcy5kYXRhLkF1dGhvcnNoaXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgYXV0aHMgPSB0aGlzLmRhdGEuQXV0aG9yc2hpcDtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhdXRocykpIHtcbiAgICAgICAgYXV0aHMgPSBbYXV0aHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgYXV0aG9yIG9mIGF1dGhzKSB7XG4gICAgICAgIGlmICghYXV0aG9yLmhhc05hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3IubmFtZUZpcnN0ID0gYXV0aG9yLmhhc05hbWUuZ2l2ZW5OYW1lO1xuICAgICAgICBhdXRob3IubmFtZUxhc3QgPSBhdXRob3IuaGFzTmFtZS5mYW1pbHlOYW1lO1xuICAgICAgICBpZiAoIWF1dGhvclsndml2bzpyYW5rJ10pIHtcbiAgICAgICAgICBhdXRob3JbJ3Zpdm86cmFuayddID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9ycy5wdXNoKGF1dGhvcik7XG4gICAgICB9XG4gICAgICBhdXRob3JzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbJ3Zpdm86cmFuayddIC0gYlsndml2bzpyYW5rJ107XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXV0aG9ycyA9IGF1dGhvcnM7XG4gICAgfVxuXG4gICAgLy8gSm91cm5hbCBpbmZvXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1jaXRhdGlvbicsIFJwQ2l0YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpXG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiID9oaWRkZW49XCIkeyF0aGlzLmRhdGF9XCI+XG4gIDxhIGhyZWY9XCIjXCI+JHt0aGlzLmRhdGEubGFiZWx9PC9hPlxuICAke3RoaXMuYXV0aG9ycy5tYXAoYXV0aG9yID0+IGh0bWxgPHNwYW4+JHthdXRob3IubmFtZUxhc3R9LCAke2F1dGhvci5uYW1lRmlyc3R9PC9zcGFuPjsgYCl9LlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaGVyby1pbWFnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBIZXJvSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgYXNzZXRGb2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJhc3NldC1mb2xkZXJcIn0sXG4gICAgYXNzZXRNYXg6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LW1heFwifSxcbiAgICBhc3NldFBpY2s6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LXBpY2tcIiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzc2V0Rm9sZGVyID0gXCIvaW1hZ2VzL3Byb2ZpbGUtZmVhdHVyZXMvXCJcbiAgICB0aGlzLmFzc2V0TWF4ID0gMjk7XG4gICAgdGhpcy5zaHVmZmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPCAwKSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA+IHRoaXMuYXNzZXRNYXgpIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSB0aGlzLmFzc2V0TWF4O1xuICAgICAgfVxuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuYXNzZXRGb2xkZXIgKyB0aGlzLmFzc2V0UGljayArIFwiLmpwZ1wifSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjKSB7XG4gICAgICB0aGlzLmFzc2V0UGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICB0aGlzLmFzc2V0TWF4ICsgMSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtaGVyby1pbWFnZScsIFJwSGVyb0ltYWdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnNsb3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICN0b3Age1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2JvdHRvbSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwidG9wXCI+PHNsb3QgbmFtZT1cInRvcFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJtYWluXCI+PHNsb3QgbmFtZT1cIm1haW5cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwiYm90dG9tXCI+PHNsb3QgbmFtZT1cImJvdHRvbVwiPjwvc2xvdD48L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbGluay1saXN0LWNvdW50cy50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmltcG9ydCBcIi4vdmlldy1hbGxcIjtcblxuZXhwb3J0IGNsYXNzIFJwTGlua0xpc3RDb3VudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGxpbmtzOiB7dHlwZTogQXJyYXl9LFxuICAgIHZpZXdBbGxMaW5rOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICd2aWV3LWFsbC1saW5rJ30sXG4gICAgaGVhZGVyOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICdoZWFkZXInfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlua3MgPSBbXTtcblxuICAgIHRoaXMuX2xpbmtDbGljayA9IG5ldyBDdXN0b21FdmVudCgnbGluay1jbGljaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBjbGlja2VkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW5kZXJIZWFkZXIoKXtcbiAgICBpZiAoIXRoaXMuaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHt0aGlzLmhlYWRlci5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj48c3Bhbj4ke3RoaXMuaGVhZGVyLnRleHR9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgaWYgKCFsaW5rLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmIChsaW5rLmhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7bGluay5jb3VudH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPlxuICAgICAgICA8YSBsaW5rLWluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cImxpbmtcIiBocmVmPVwiJHtsaW5rLmhyZWZ9XCI+JHtsaW5rLnRleHR9PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke2xpbmsuY291bnR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGxpbmstaW5kZXg9XCIke2luZGV4fVwiIGNsYXNzPVwibGlua1wiPiR7bGluay50ZXh0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG5cbiAgICB9XG5cbiAgfVxuXG4gIF9yZW5kZXJWaWV3QWxsKCl7XG4gICAgaWYgKCF0aGlzLnZpZXdBbGxMaW5rKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmsudGV4dCkge1xuICAgICAgdGhpcy52aWV3QWxsTGluay50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy52aWV3QWxsTGluay5ocmVmKSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IHZpZXctYWxsXCI+PGRpdiBjbGFzcz1cImNvdW50XCI+PC9kaXY+PHJwLXZpZXctYWxsIGhyZWY9XCIke3RoaXMudmlld0FsbExpbmsuaHJlZn1cIiB0ZXh0PVwiJHt0aGlzLnZpZXdBbGxMaW5rLnRleHR9XCI+PC9ycC12aWV3LWFsbD48L2Rpdj5gXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyB2aWV3LWFsbFwiPjxkaXYgY2xhc3M9XCJjb3VudFwiPjwvZGl2PjxycC12aWV3LWFsbCBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgdGV4dD1cIiR7dGhpcy52aWV3QWxsTGluay50ZXh0fVwiPjwvcnAtdmlldy1hbGw+PC9kaXY+YFxuICAgIH1cbiAgICBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpICkge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMubGlua3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rLWluZGV4JykpXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLnZpZXdBbGxMaW5rO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGlua0NsaWNrKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0LWNvdW50cycsIFJwTGlua0xpc3RDb3VudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gICAgLnJvdy52aWV3LWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckhlYWRlcigpfVxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gICAgJHt0aGlzLl9yZW5kZXJWaWV3QWxsKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9zZWFyY2gudHBsLmpzJztcbmltcG9ydCAnLi9kcm9wZG93bic7XG5pbXBvcnQgXCIuL2ljb25cIjtcblxuZXhwb3J0IGNsYXNzIFJwU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBmYWNldHM6IHt0eXBlOiBBcnJheX0sXG4gICAgaW5jbHVkZUFsbE9wdGlvbjoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2luY2x1ZGUtYWxsLW9wdGlvbid9LFxuICAgIGFsbE9wdGlvbjoge3R5cGU6IE9iamVjdH0sXG4gICAgaW5wdXRWYWx1ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImlucHV0LXZhbHVlXCIsIHJlZmxlY3Q6IHRydWV9LFxuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhY3RpdmVGYWNldDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcbiAgICB0aGlzLmluY2x1ZGVBbGxPcHRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmFsbE9wdGlvbiA9IHt0ZXh0OiAnQUxMJywgaWQ6ICdhbGwnfVxuXG5cbiAgICB0aGlzLl9uZXdTZWFyY2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ25ldy1zZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHNlYXJjaCBoYXMgYmVlbiB0cmlnZ2VyZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdpbnB1dFZhbHVlJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdhY3RpdmVGYWNldCcpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9iamVjdCA9IHtzZWFyY2g6IHRoaXMuaW5wdXRWYWx1ZSwgZmFjZXQ6IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25zKClbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGdldERyb3Bkb3duT3B0aW9ucygpe1xuICAgIGlmICh0aGlzLmluY2x1ZGVBbGxPcHRpb24pIHJldHVybiBbdGhpcy5hbGxPcHRpb24sIC4uLnRoaXMuZmFjZXRzXTtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBkb1NlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VhcmNoKTtcbiAgfVxuXG4gIF9oYW5kbGVLZXl1cChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1zZWFyY2gnLCBScFNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNpbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAjaWNvbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8cnAtZHJvcGRvd24gLmNob2ljZXM9XCIke3RoaXMuZ2V0RHJvcGRvd25PcHRpb25zKCl9XCJcbiAgICAgICAgICAgICAgICAgdG8tdXBwZXItY2FzZVxuICAgICAgICAgICAgICAgICBjaG9zZW49XCIke3RoaXMuYWN0aXZlRmFjZXR9XCJcbiAgICAgICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gdGhpcy5hY3RpdmVGYWNldCA9IGUudGFyZ2V0LmNob3Nlbn1cIj5cbiAgICA8L3JwLWRyb3Bkb3duPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIlxuICAgICAgICAgICBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cIlxuICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX2hhbmRsZUtleXVwfVwiXG4gICAgICAgICAgIGlkPVwiaW5wdXRcIj5cbiAgICA8ZGl2IGlkPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxycC1pY29uIEBjbGljaz1cIiR7dGhpcy5kb1NlYXJjaH1cIiBpY29uPVwicnAtc2VhcmNoXCIgP2lzLWxpbms9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIj48cnAtaWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vdmlldy1hbGwudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwVmlld0FsbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAganVzdGlmeToge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBpZiAodGhpcy5qdXN0aWZ5KSB7XG4gICAgICBjbGFzc2VzW3RoaXMuanVzdGlmeV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIF9yZW5kZXJJbm5lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPjxpcm9uLWljb24gaWNvbj1cImF2OnBsYXktYXJyb3dcIj48L2lyb24taWNvbj5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdmlldy1hbGwnLCBScFZpZXdBbGwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnN0YXJ0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5jZW50ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIgaXJvbi1pY29uLCAuY29udGFpbmVyOmhvdmVyIGF7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cblxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1pbi13aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgLnZpZXctYWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgICR7dGhpcy5ocmVmID8gaHRtbGBcbiAgICAgIDxhIGNsYXNzPVwidmlldy1hbGxcIiBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLl9yZW5kZXJJbm5lckNvbnRlbnQoKX08L2E+XG4gICAgICBgIDogaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFsbFwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICBgfVxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vYXBwLWNvbXBvbmVudHMudHBsLmpzXCJcbi8vaW1wb3J0IHsgY29sb3JTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvc2l0ZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBQYWdlQ29tcG9uZW50cyBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4ud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4YW1wbGVXb3Jrczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGV4YW1wbGVPcmdzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59XG4gICAgfTtcbiAgICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5leGFtcGxlV29ya3MgPSBbXTtcbiAgICB0aGlzLmV4YW1wbGVPcmdzID0gW107XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICB9XG5cbiAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpe1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuZ2V0V29ya3MoKSwgdGhpcy5nZXRPcmdzKCldKTtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmtzKCl7XG4gICAgbGV0IHEgPSB7ZmlsdGVyczoge1wiQHR5cGVcIjoge1widHlwZVwiOiBcImtleXdvcmRcIiwgXCJvcFwiOiBcImFuZFwiLCBcInZhbHVlXCI6IFtcInVjZHJwOnB1YmxpY2F0aW9uXCJdfX19O1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwucXVlcnkocSk7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leGFtcGxlV29ya3MgPSBkYXRhLnBheWxvYWQucmVzdWx0cztcblxuICB9XG5cbiAgYXN5bmMgZ2V0T3Jncygpe1xuICAgIGxldCBxID0ge2ZpbHRlcnM6IHtcIkB0eXBlXCI6IHtcInR5cGVcIjogXCJrZXl3b3JkXCIsIFwib3BcIjogXCJhbmRcIiwgXCJ2YWx1ZVwiOiBbXCJ1Y2RycDpvcmdhbml6YXRpb25cIl19fX07XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmV4YW1wbGVPcmdzID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2codGhpcy5leGFtcGxlT3Jncyk7XG5cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcGFnZS1jb21wb25lbnRzJywgQXBwUGFnZUNvbXBvbmVudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2EtelwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FjY29yZGlhblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYXZhdGFyXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYmFkZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jaXRhdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9xdWljay1zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy92aWV3LWFsbFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3dvcmstcHJldmlld1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24uaGVybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBycC1oZXJvLWltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5oZXJvdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVyb21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCBycC1wZXJzb24tcHJldmlldyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAucGVvcGxlLWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5zdWJuYXYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5saW5rbGlzdDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgcnAtYWNjb3JkaWFuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG4gIHJwLWNpdGF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5xdWljay1zZWFyY2gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG5cbjxoMSBjbGFzcz1cInRleHQtcHJpbWFyeVwiPlNpdGUgQ29tcG9uZW50czwvaDE+XG48cD5UaGVzZSBkb24ndCBjb25uZWN0IHRvIHRoZSBtYWluIGJ1cywgYW5kIHRoZXkgZG9uJ3QgaW5oZXJpdCBhbnkgc2hhcmVkIHN0eWxlcyAob3RoZXIgdGhhbiBzaXRlIHZhcmlhYmxlcykuXG5Zb3UgY29udHJvbCB0aGVtIHdpdGggYXR0cmlidXRlcywgYW5kIGJ1aWxkIG1vcmUgY29tcGxpY2F0ZWQgKGJ1cy1jb25uZWN0ZWQpIGVsZW1lbnRzIHdpdGggdGhlbS5cbjwvcD5cbjxzZWN0aW9uPlxuPGgyPkEtWiBsaXN0PC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHNlbGVjdGVkIGxldHRlciBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfTwvY29kZT48L3A+XG48cnAtYS16ICBzZWxlY3RlZC1sZXR0ZXI9XCJhbGxcIiBAY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfT48L3JwLWEtej5cbjxwPlVzZSA8Y29kZT5oaWRlLWFsbDwvY29kZT4gdG8gbm90IHJlbmRlciB0aGUgQWxsIGxpbms8L3A+XG48cnAtYS16IGhpZGUtYWxsPXRydWUgc2VsZWN0ZWQtbGV0dGVyPVwiZlwiIGRpc2FibGVkLWxldHRlcnM9JHtKU09OLnN0cmluZ2lmeShbJ2cnLCdxJywgJ1MnXSl9PjwvcnAtYS16PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BY2NvcmRpYW5zIGZvciBGQVEgc2VjdGlvbjwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPnRpdGxlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB0aGUgbGluayB0ZXh0LiBUaGUgZXhwYW5kYWJsZSBjb250ZW50IGlzIGFuIHVubmFtZWQgc2xvdC48L3A+XG48cnAtYWNjb3JkaWFuIHRpdGxlPVwiSG93IG9mdGVuIGRvIHlvdSB1cGRhdGUgdGhlIGRhdGEgaW4gdGhlIHJlZ2lzdHJ5P1wiPiR7J0hlbGxvIHdvcmxkISAnLnJlcGVhdCg0MCl9PC9ycC1hY2NvcmRpYW4+XG48cnAtYWNjb3JkaWFuPjwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbiBleHBhbmRlZCB0aXRsZT1cIlVzZSB0aGUgZXhwYW5kZWQgYXR0cmlidXRlIG9yIHRvZ2dsZSBtZXRob2QgdG8gY29udHJvbCBleHBhbnNpb25cIj5cblRoaXMgaXMgb3BlbiBvbiBwYWdlIGxvYWQgYmVjYXVzZSBJJ20gdXNpbmcgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZS5cbjwvcnAtYWNjb3JkaWFuPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYXNpYyBBbGVydDwvaDI+XG48cD5Ob3QgcGFydCBvZiB0aGUgaW5pdGlhbCBkZXNpZ24gc3BlY3MsIGJ1dCBuZWVkZWQgc29tZSB3YXkgdG8gaGFuZGxlIGVycm9ycy4gVXNlcyBzbG90LjwvcD5cbjxycC1hbGVydD5VaCBvaCEgU29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcgKG5vdCB0aGF0IHRoYXQgZXZlciBoYXBwZW5zKS4gQ2FuJ3QgbG9hZCBjb250ZW50ITwvcnAtYWxlcnQ+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkF2YXRhcnM8L2gyPlxuPHA+VXNlIHRoZSBzaXplIGF0dHJpYnV0ZSB0byBhZGp1c3QgS2ltbXktZGVmaW5lZCBzaXplcy48L3A+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhcj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cInNtXCI+PC9ycC1hdmF0YXI+XG48cD5Vc2UgdGhlIHNyYyBhdHRyaWJ1dGUgdG8gdXNlIGEgcGhvdG8uPHA+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkJhZGdlczwvaDI+XG48c21hbGw+XG4gIDxycC1iYWRnZT5JJ20gYSBCYWRnZSE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+TWUgVG9vITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvcnM8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+QXJlIGEgU2VxdWVuY2U8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+SWYgcGFydCBvZjwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT50aGUgc2FtZSBwYXJlbnQgbm9kZTwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvciBzdGFydHMgb3ZlciE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+WWVsbG93IGFnYWluLi4uPC9ycC1iYWRnZT5cbjwvc21hbGw+XG48cD5CYWRnZXMgaW5oZXJpdCBmb250IHNpemUgPHJwLWJhZGdlPjE2cHggZm9udHNpemU8L3JwLWJhZGdlPlxuYnV0IHlvdSBjYW4gYWxzbyBpbmNyZWFzZSBwYWRkaW5nIHdpdGggdGhlIHNpemUgYXR0cmlidXRlIDxycC1iYWRnZSBzaXplPVwibGdcIj5zaXplIGxnPC9ycC1iYWRnZT5cbjwvcD5cbjxwPllvdSBjYW4gbWFudWFsbHkgY2hhbmdlIHRoZSBjb2xvciB3aXRoIHRoZSBjb2xvci1zZXF1ZW5jZSBhdHRyaWJ1dGVcbjxycC1iYWRnZSBjb2xvci1zZXF1ZW5jZT1cIjVcIj5jb2xvci1zZXF1ZW5jZSA9IDU8L3JwLWJhZGdlPlxuPC9wPlxuPHA+SWYgeW91IHBhc3MgaW4gYW4gaHJlZiBhdHRyaWJ1dGUsIDxycC1iYWRnZSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPnRoZSBiYWRnZXM8L3JwLWJhZGdlPiA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHVcIj5iZWNvbWUgbGlua3M8L3JwLWJhZGdlPlxuYW5kIGhhdmUgaG92ZXIgc3R5bGVzLlxuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5DaXRhdGlvbnM8L2gyPlxuPHA+U2ltcGx5IHJlbmRlcnMgYmlibGlvZ3JhcGhpYyBpbmZvIGluIHNvbWUgc3RhbmRhcmQgZm9ybWF0LiBXaGF0IGZvcm1hdCB0aGF0IGlzLCBJIG5lZWQgdG8gZmluZCBvdXQuPC9wPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiU29tZSBXaXR0eSBFeWUtY2F0Y2hpbmcgVGl0bGU6IFRoZSBFZmZlY3Qgb2YgWCBvbiBaXCJcbiAgICAgICAgICAgICBocmVmPVwic29tZSBsaW5rXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiTmF0dXJlXCJcbiAgICAgICAgICAgICBwYWdlcz1cIjEyOjEyMy00NTZcIj5cbjwvcnAtY2l0YXRpb24+XG48cnAtY2l0YXRpb24gdGl0bGU9XCJFeGFtaW5pbmcgdGhlIEVmZmVjdHMgb2YgRG9ncyBvbiBDYXRzXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiQmVoYXZpb3JhbCBTY2llbmNlXCIgcGFnZXM9XCI0OjktMTNcIj5cbjwvcnAtY2l0YXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkRyb3Bkb3duPC9oMj5cbjxwPkEgc3R5bGl6ZWQgZHJvcGRvd24uIExpc3RlbiB3aXRoIDxjb2RlPkBuZXctc2VsZWN0aW9uPVwiXFwke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX08L2NvZGU+PC9wPlxuPHJwLWRyb3Bkb3duIGNob2ljZXM9J1tcIlBlb3BsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiT3JnYW5pemF0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIldvcmtzXCJ9XSdcbiAgICAgICAgICAgICBAbmV3LXNlbGVjdGlvbj1cIiR7ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jaG9pY2VzW2UudGFyZ2V0LmNob3Nlbl0pfVwiPlxuPC9ycC1kcm9wZG93bj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XG48aDI+SGVybyBJbWFnZTwvaDI+XG48cD5IZXJvIGltYWdlIHdpbGwgcmFuZG9tbHkgcHVsbCBhIGJhY2tncm91bmQtcGhvdG8gZnJvbSB0aGUgcGF0aCBkZWNsYXJlZCBpbiA8Y29kZT5hc3NldC1mb2xkZXI8L2NvZGU+IGF0dHJpYnV0ZS5cblJ1bm5pbmcgPGNvZGU+ZWxlLnNodWZmbGUoKTwvY29kZT4gd2lsbCBsb2FkIGEgbmV3IGltYWdlLlxuSG93ZXZlciwgc3BlY2lmeWluZyBhIDxjb2RlPnNyYzwvY29kZT4gYXR0cmlidXRlIHdpbGwgb3ZlcnJpZGUgdGhlIHJhbmRvbSBhc3NldCBwdWxsIGZ1bmN0aW9uYWxpdHkgYW5kIGp1c3QgbG9hZCB0aGUgc3JjIGJnIHBob3RvLlxuVGhlcmUgYXJlIHRocmVlIHNsb3RzIHRvIHBvcHVsYXRlIHRoZSBoZXJvIGNvbnRlbnQgLSBcInRvcFwiLCBcIm1haW5cIiwgYW5kIFwiYm90dG9tXCIuXG48cD5cbjwvc2VjdGlvbj5cbjxycC1oZXJvLWltYWdlPlxuICA8ZGl2IHNsb3Q9XCJ0b3BcIiBjbGFzcz1cImhlcm90b3BcIj5cbiAgICA8cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NXB4O1wiPjwvcnAtaWNvbj5cbiAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IHNsb3Q9XCJtYWluXCIgY2xhc3M9XCJoZXJvbWFpblwiPlxuICAgIDxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG4gICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj5CcmFudGxleSwgUGV0ZXI8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBoMyBtYi0yIG10LTEgdGV4dC1jZW50ZXJcIj5EaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3k8L3A+XG4gICAgPHAgY2xhc3M9XCJib2xkIHRleHQtbGlnaHQgaDMgbXQtMSBtYi0wIHRleHQtY2VudGVyXCI+TXkgcmVzZWFyY2ggYXJlYXMgaW5jbHVkZTogPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBtdC0yIG1iLTBcIj5cbiAgICAgIDxycC1iYWRnZT5Gb29iYXI8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPlN0dWZmPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5UaGluZ3M8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPldpZGdldHM8L3JwLWJhZGdlPlxuICAgICAgPC9wPlxuICAgIDxkaXY+PC9kaXY+XG4gIDwvZGl2PlxuPC9ycC1oZXJvLWltYWdlPlxuXG48c2VjdGlvbj5cbjxoMj5JY29uczwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHlvdXIgaWNvbi4gVXNlIHRoZSBwcmVmaXggXCJpcm9uLVwiIHRvIGNhbGwgYW4gaXJvbiBpY29uOjwvcD5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cImlyb24tYXJyb3ctZm9yd2FyZFwiIGNpcmNsZS1iZz48L3JwLWljb24+XG48cD5UaGUgPGNvZGU+dGhlbWUtY29sb3I8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIGFkanVzdCB0aGUgY29sb3IsIDxjb2RlPmlzLWxpbms8L2NvZGU+IHdpbGwgYXBwbHkgbGluayBzdHlsZXMsIGFuZCA8Y29kZT5zaXplPC9jb2RlPiB3aWxsIGNoYW5nZSB0aGUgc2l6ZTxwPlxuPHJwLWljb24gaWNvbj1cImlyb24tZmFjZVwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cD5QcmVmYWNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgd2l0aCBcInJwLVwiIHRvIHVzZSBvbmUgb2YgdGhlIGN1c3RvbSBpY29uczwvcD5cbjxycC1pY29uIGljb249XCJycC1zZWFyY2hcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkxpbmsgTGlzdDwvaDI+XG48cD5EaXNwbGF5cyBhIGxpc3Qgb2YgXCJsaW5rc1wiLiBBdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBhY3RpdmUgbGluayBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1saW5rPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX08L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cImxpbmtsaXN0MVwiPlxuICA8cnAtbGluay1saXN0IGxpbmtzPSdbXCJIZWxsbyBXb3JsZFwiLCBcIkhlbGxvIEFnYWluIVwiLCBcIkFuZCBPbmUgTW9yZSBUaW1lXCJdJ1xuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX0+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG5cbjxwPlN3aXRjaCB0byBob3Jpem9udGFsIHZpZXcgYnkgdXNpbmcgPGNvZGU+ZGlyZWN0aW9uPWg8L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cInN1Ym5hdlwiPlxuICA8cnAtbGluay1saXN0IGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiXG4gICAgICAgICAgICAgICAgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWxsIEluZm9cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQWJvdXRcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUHVibGljYXRpb25zXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlc2VhcmNoXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbnRhY3RcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGlzYWJsZWQgTGlua1wiLCBcImRpc2FibGVkXCI6IHRydWV9IF0nPlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Qgd2l0aCBDb3VudHM8L2gyPlxuPHA+TGluayBsaXN0IHRoYXQgd2lsbCBwcmVwZW5kIGNvdW50cy4gTGlzdGVuIHdpdGggPGNvZGU+QGxpbmstY2xpY2s9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIjwvY29kZT48L3A+XG48cD5Vc2UgdGhlIDxjb2RlPnZpZXctYWxsLWxpbmtzPC9jb2RlPiBhbmQgPGNvZGU+aGVhZGVyPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGVuYWJsZSB0aGVzZSBkaXNwbGF5czo8L3A+XG48cnAtbGluay1saXN0LWNvdW50cyBsaW5rcz0nW3tcInRleHRcIjogXCJBY2FkZW1pYyBBcnRpY2xlc1wiLCBcImNvdW50XCI6IDMwODB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQm9va3NcIiwgXCJjb3VudFwiOiA4fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNoYXB0ZXJzXCIsIFwiY291bnRcIjogNTJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ29uZmVyZW5jZSBQYXBlcnNcIiwgXCJjb3VudFwiOiA0NTF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGF0YXNldHNcIiwgXCJjb3VudFwiOiA3MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJKb3VybmFsc1wiLCBcImNvdW50XCI6IDk2MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXBvcnRzXCIsIFwiY291bnRcIjogNH1dJ1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXctYWxsLWxpbms9J3tcInRleHRcIjogXCJWaWV3IEFsbCBXb3Jrc1wifSdcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9J3tcInRleHRcIjogXCJBY2FkZW1pYyBXb3Jrc1wiLCBcImNvdW50XCI6IDg0MTN9J1xuICAgICAgICAgICAgICAgICAgICAgIEBsaW5rLWNsaWNrPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuQ2xpY2tlZGxpbmspfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuPC9ycC1saW5rLWxpc3QtY291bnRzPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5QYWdpbmF0aW9uPC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHBhZ2UgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtcGFnZT1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX08L2NvZGU+PC9wPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9OCBAY2hhbmdlZC1wYWdlPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX0+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5tYXgtcGFnZTwvY29kZT4sIDxjb2RlPm1pbi1wYWdlPC9jb2RlPiwgYW5kIDxjb2RlPmN1cnJlbnQtcGFnZTwvY29kZT4gYXR0cmlidXRlcyB0byBjb250cm9sIHRoZSBkaXNwbGF5LjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTE1IGN1cnJlbnQtcGFnZT1cIjdcIj48L3JwLXBhZ2luYXRpb24+XG48cD5Vc2UgdGhlIDxjb2RlPnBhZ2VzLXBlci1zaWRlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc2hvdyBtb3JlIHBhZ2VzIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjdXJyZW50IHBhZ2U8cD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTIwIGN1cnJlbnQtcGFnZT0xMCBwYWdlcy1wZXItc2lkZT0zPjwvcnAtcGFnaW5hdGlvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGVyc29uIFByZXZpZXc8L2gyPlxuPHA+WW91IGNhbiBhcnJhbmdlIHRoZW0gaG93IHlvdSBzZWUgZml0LjwvcD48cD5WZXJ0aWNhbGx5LCBsaWtlIGluIHNlYXJjaC9icm93c2UgcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLXZlcnRpY2FsXCI+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJRdWlubiBIYXJ0XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnQvXCJcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIlxuICAgIGJhZGdlcz0nW1wiZm9vLWJhclwiXSc+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCJcbiAgICBiYWRnZXM9J1t7XCJ0ZXh0XCIgOiBcIkltIGEgbGluayFcIiwgXCJocmVmXCIgOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwifV0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJNYW4gb2YgTXlzdGVyeVwiXG4gICAgdGl0bGU9XCJIYXMgbm8gYXZhdGFyLXNyYyBvciBocmVmIGF0dHJpYnV0ZXNcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuPC9kaXY+XG48cD5vciBpbiBjb2x1bW5zIGxpa2Ugb24gdGhlIGhvbWVwYWdlOjwvcD5cbjxkaXYgY2xhc3M9XCJwZW9wbGUtY29sdW1uc1wiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIHRpdGxlPVwiRGlnaXRhbCBBcHBsaWNhdGlvbnMgTWFuYWdlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUGV0ZXIgQnJhbnRseVwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJKdXN0aW4gTWVyelwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvaGVhZHNob3RfY3JvcHBlZC0yODB4MzUwLWMtY2VudGVyLnBuZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9qdXN0aW4tbWVyei9cIlxuICAgIHRpdGxlPVwiUmVzZWFyY2ggU3VwcG9ydCBFbmdpbmVlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiS2ltbXkgSGVzY29ja1wiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDcvS2ltbXkyMDE4LTAxLTAwMS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9raW1teS1oZXNjb2NrL1wiXG4gICAgdGl0bGU9XCJVc2VyIEV4cGVyaWVuY2UgRGVzaWduZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbjwvZGl2PlxuPHA+QmVjYXVzZSBvZiB0aGUgZ2VuZXJhbCBhd2Z1bGxuZXNzIG9mIHRoZSBjc3Mgb3ZlcmZsb3cgcHJvcGVydGllcywgeW91IGhhdmUgdG8gc2V0IHRoZSB0ZXh0V2lkdGggcHJvcGVydHkgaW4gYSByZXNpemUgZXZlbnQuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5RdWljayBTZWFyY2g8L2gyPlxuPHA+IFVzZSA8Y29kZT5AbmV3LXNlYXJjaD1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJxdWljay1zZWFyY2gtY29udGFpbmVyXCI+XG48cnAtcXVpY2stc2VhcmNoIEBuZXctc2VhcmNoPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cblxuPHA+VXNlIDxjb2RlPmlucHV0LXZhbHVlPC9jb2RlPiBhbmQgPGNvZGU+b3BlbmVkPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNoYW5nZSBpbml0aWFsIHJlbmRlciBzdGF0ZS48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBpbnB1dC12YWx1ZT1cIkEgcHJlLWxvYWRlZCBzZWFyY2hcIiBvcGVuZWQ+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TWFpbiBTZWFyY2ggV2lkZ2V0PC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtYmx1ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgIDxycC1zZWFyY2ggc3R5bGU9XCJ3aWR0aDo3NSVcIiBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI+PC9ycC1zZWFyY2g+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDE+VmlldyBBbGw8L2gxPlxuPHA+RGVhZCBzaW1wbGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIGEgVmlldyBBbGwgbGluay4gVXNlIHRoZSA8Y29kZT50ZXh0PC9jb2RlPiBhdHRyaWJ1dGUgdG8gY3VzdG9taXplLCBhbmQgPGNvZGU+anVzdGlmeTwvY29kZT4gdG8gY29udHJvbCBob3Jpem9udGFsIGFsaWdubWVudC48L3A+XG48cnAtdmlldy1hbGwganVzdGlmeT1cInN0YXJ0XCI+PC9ycC12aWV3LWFsbD5cbjxycC12aWV3LWFsbCB0ZXh0PVwiVmlldyBBbGwgUGVvcGxlXCI+PC9ycC12aWV3LWFsbD5cbjxycC12aWV3LWFsbCB0ZXh0PVwiQWRkIGFuIGhyZWYgdG8gbWFrZSBpdCBhIG5vcm1hbCBsaW5rXCIgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiPjwvcnAtdmlldy1hbGw+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgxPkFzc2V0IFByZXZpZXcgKFdvcmspPC9oMT5cbjxwPkNhcmQgZm9yIHRoZSBXb3JrIGFzc2V0IHR5cGUgLSB1c2VkIGluIGJyb3dzZSBhbmQgc2VhcmNoIHBhZ2VzLjwvcD5cbiR7dGhpcy5leGFtcGxlV29ya3MubWFwKCh3b3JrKSA9PiBodG1sYFxuICA8cnAtd29yay1wcmV2aWV3IC5kYXRhPVwiJHt3b3JrfVwiPjwvcnAtd29yay1wcmV2aWV3PlxuYCl9XG5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDE+QXNzZXQgUHJldmlldyAoT3JnYW5pemF0aW9uKTwvaDE+XG48cD5DYXJkIGZvciB0aGUgT3JnYW5pemF0aW9uIGFzc2V0IHR5cGUgLSB1c2VkIGluIGJyb3dzZSBhbmQgc2VhcmNoIHBhZ2VzLjwvcD5cbiR7dGhpcy5leGFtcGxlT3Jncy5tYXAoKG9yZykgPT4gaHRtbGBcbiAgPHJwLW9yZ2FuaXphdGlvbi1wcmV2aWV3IC5kYXRhPVwiJHtvcmd9XCI+PC9ycC1vcmdhbml6YXRpb24tcHJldmlldz5cbmApfVxuXG48L3NlY3Rpb24+XG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=