(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-components"],{

/***/ "./public/elements/components/a-z.js":
/*!*******************************************!*\
  !*** ./public/elements/components/a-z.js ***!
  \*******************************************/
/*! exports provided: RpAZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAZ", function() { return RpAZ; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _a_z_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a-z.tpl.js */ "./public/elements/components/a-z.tpl.js");



class RpAZ extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    hideAll: {type: Boolean, attribute: 'hide-all'},
    selectedLetter: {type: String, attribute: 'selected-letter', reflect: true},
  };
  }

  constructor() {
    super();
    this.render = _a_z_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this._changedLetter = new CustomEvent('changed-letter', {
      detail: {
        message: 'A new letter has been selected.'
      }
    });
  }

  _renderAz(letter) {
    let selected = "";
    if (this.selectedLetter) {
      if (this.selectedLetter.toLowerCase() === letter.toLowerCase()) {
        selected = "selected"
      }
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div @click="${this.handleClick}"
                     class="letter ${selected}"
                     letter="${letter}">${letter}</div>`
  }
  handleClick(e) {
    let new_letter = e.target.getAttribute('letter').toLowerCase();
    if (new_letter != this.selectedLetter) {
      this.selectedLetter = new_letter;
      this.dispatchEvent(this._changedLetter);
    }
  }

  firstUpdated(changedProperties) {
    if (!this.hideAll) {
      this.azlist.unshift('All');
      this.requestUpdate();
    }
  }
}

customElements.define('rp-a-z', RpAZ);


/***/ }),

/***/ "./public/elements/components/a-z.tpl.js":
/*!***********************************************!*\
  !*** ./public/elements/components/a-z.tpl.js ***!
  \***********************************************/
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
      font-size: var(--font-size-small);
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    .letter {
      color: var(--tcolor-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 22px;
      min-height: 22px;
      transition: 0.3s;
      cursor: pointer;
    }
    .letter:hover {
      color: var(--tcolor-link-hover-text);
    }
    .letter.selected {
      font-weight: var(--font-weight-bold);
      pointer-events: none;
      cursor: auto;
      z-index: 1;
    }
    .letter.selected::before {
      content: "";
      border-radius: 50%;
      background-color: var(--tcolor-secondary);
      min-width: 30px;
      min-height: 30px;
      position: absolute;
      z-index: -1;
    }
    .letter.selected:hover {
      color: var(--tcolor-primary);
    }
  </style>
  <div class=container>
    ${this.azlist.map(letter => this._renderAz(letter))}
  </div>
  `;
}


/***/ }),

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

/***/ "./public/elements/components/link-list.js":
/*!*************************************************!*\
  !*** ./public/elements/components/link-list.js ***!
  \*************************************************/
/*! exports provided: RpLinkList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpLinkList", function() { return RpLinkList; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _link_list_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-list.tpl.js */ "./public/elements/components/link-list.tpl.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");




class RpLinkList extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    links: {type: Array},
    currentLink:  {converter: parseInt, attribute: 'current-link', reflect: true},
    direction: {type: String, attribute: 'direction'},
    hasHeaderLink: {type: Boolean, attribute: 'has-header-link'}
  };
  }

  constructor() {
    super();
    this.render = _link_list_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.direction = 'v';
    this.currentLink = 0;
    this._containerClasses = {container: true};
    this._containerClasses[this.direction] = true;

    this._changedLink = new CustomEvent('changed-link', {
      detail: {
        message: 'A new link has been selected.'
      }
    });
  }


  attributeChangedCallback(name, oldVal, newVal) {
    if (name == 'direction') {
      if (newVal) {
        if (this._containerClasses.v) {
          delete this._containerClasses.v
        }
        this._containerClasses[newVal.toLowerCase()[0]] = true;
      }

    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _renderLink(link, index){
    let text = "";
    let disabled = false;
    let classes = {link: true};
    if (typeof link === 'string') {
      text = link;
    }
    else if (typeof link === 'object') {
      text = link.text;
      if (link.disabled) {
        disabled = true;
      }
    }

    if (index == this.currentLink) {
      classes['selected'] = true;
    }
    if (this.hasHeaderLink && index == 0) {
      classes['link-header'] = true;
    }
    classes['disabled'] = disabled;

    if (text) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div @click="${this.handleClick}" link="${index}" class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}>${text}</div>`;
    }

  }

  handleClick(e) {
    let new_link = parseInt(e.target.getAttribute('link'));
    if ((new_link != this.currentLink) && (!e.target.classList.contains('disabled'))) {
      this.currentLink = new_link;
      this.dispatchEvent(this._changedLink);
    }
  }

}

customElements.define('rp-link-list', RpLinkList);


/***/ }),

/***/ "./public/elements/components/link-list.tpl.js":
/*!*****************************************************!*\
  !*** ./public/elements/components/link-list.tpl.js ***!
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
      color: var(--tcolor-link-text);
    }
    .container {
      display: flex;
    }
    .container.h {
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
    .container.h .link {
      margin-left: 1em;
      margin-right: 1em;
    }
    .container.v {
      flex-flow: column nowrap;
      align-items: flex-end;
    }
    .container.v .link {
      margin-bottom: 1.5em;
    }
    .link {
      cursor: pointer;
    }
    .link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.selected {
      pointer-events: none;
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      cursor: auto;
      border-bottom: 2px solid var(--tcolor-secondary);
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
  <div class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._containerClasses)}>
    ${this.links.map((link, index) => this._renderLink(link, index))}
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/pagination.js":
/*!**************************************************!*\
  !*** ./public/elements/components/pagination.js ***!
  \**************************************************/
/*! exports provided: RpPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpPagination", function() { return RpPagination; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _pagination_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.tpl.js */ "./public/elements/components/pagination.tpl.js");




class RpPagination extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    currentPage:  {converter: parseInt, attribute: 'current-page', reflect: true},
    maxPage: {converter: parseInt, attribute: 'max-page', reflect: true},
    minPage: {converter: parseInt, attribute: 'min-page', reflect: true},
    pagesPerSide: {converter: parseInt, attribute: 'pages-per-side'}
  };
  }

  constructor() {
    super();
    this.render = _pagination_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this);
    this.pagesPerSide = 1;
    this.minPage = 1;
    this.currentPage = this.minPage;
    this.maxPage = this.currentPage;

    this._changedPage = new CustomEvent('changed-page', {
      detail: {
        message: 'A new page has been selected.'
      }
    });
  }

  _hasValidLogic() {
    if (this.maxPage < this.currentPage || this.maxPage < this.minPage ) {
      return false;
    }
    else if (this.minPage > this.currentPage ) {
      return false;
    }
    else {
      return true;
    }
  }

  _renderEdge(direction) {
    if (!this._hasValidLogic()) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    if (direction == 'left') {
      if ((this.currentPage - this.minPage) > (this.pagesPerSide + 1)) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div><div class="ellipsis">...</div>`;
      }
    }
    else if (direction == 'right') {
      if ((this.maxPage - this.currentPage) > (this.pagesPerSide + 1)) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="ellipsis">...</div><div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`;
      }
    }
  }

  _renderCenter() {
    if (!this._hasValidLogic()) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({page: true, selected: true})}" page="${this.currentPage}">${this.currentPage}</div>`;
    }

    let pages = [{page: this.currentPage, selected: true}];
    let remainder = this.pagesPerSide * 2;
    let self = this;
    addPages(this.pagesPerSide);
    addPages(remainder);

    if (pages[0].page - this.minPage === 1) {
      pages.unshift({page: this.minPage, selected: false});
    }
    if (this.maxPage - pages.slice(-1)[0].page === 1) {
      pages.push({page: this.maxPage, selected: false});
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${pages.map(page => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div @click="${this.handleClick}"
                                              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({"page": true, selected: page.selected})}"
                                              page="${page.page}">${page.page}</div>`)}`;

    function addPages(loops){
      let directions = ['left', 'right'];
      for (let direction of directions) {
        if (direction === 'left') {
          for (let i = 0; i < loops; i++) {
            let first = pages[0].page;
            if (first > self.minPage) {
              pages.unshift({page: first - 1, selected: false});
              remainder -= 1;
            }
          }
        }
        if (direction === 'right') {
          for (let i = 0; i < loops; i++) {
            let last = pages.slice(-1)[0].page;
            if (last < self.maxPage) {
              pages.push({page: last + 1, selected: false});
              remainder -= 1;
            }
          }
        }
      }
    }


  }

  handleClick(e) {
    let new_page = parseInt(e.target.getAttribute('page'));
    if (new_page != this.currentPage) {
      this.currentPage = new_page;
      this.dispatchEvent(this._changedPage);
    }
  }
}

customElements.define('rp-pagination', RpPagination);


/***/ }),

/***/ "./public/elements/components/pagination.tpl.js":
/*!******************************************************!*\
  !*** ./public/elements/components/pagination.tpl.js ***!
  \******************************************************/
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
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-primary);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .container-center {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;
      min-width: 40px;
      min-height: 40px;
    }
    .page:hover {
      color: var(--tcolor-link-hover-text);
    }
    .page.selected {
      background-color: var(--tcolor-secondary);
      pointer-event: none;
      cursor: auto;
    }
    .page.selected:hover {
      color: var(--tcolor-primary);
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;
      margin-left: 4px;
      margin-right: 4px;
    }
    iron-icon {
      cursor: pointer;
    }
    iron-icon:hover {
      color: var(--tcolor-link-hover-text);
    }
    iron-icon[disabled]:hover {
      color: var(--tcolor-primary-disabled);
    }
    iron-icon[disabled] {
      color: var(--tcolor-primary-disabled);
      pointer-events: none;
    }
  </style>
  <div class=container>
    <iron-icon ?disabled="${this.currentPage == this.minPage || !this._hasValidLogic() }"
               @click="${this.handleClick}"
               page="${this.currentPage - 1}"
               icon="arrow-back">
    </iron-icon>
    <div class="container-center">
      ${this._renderEdge('left')}
      ${this._renderCenter()}
      ${this._renderEdge('right')}
    </div>
    <iron-icon ?disabled="${this.currentPage == this.maxPage || !this._hasValidLogic() }"
               @click="${this.handleClick}"
               page="${this.currentPage + 1}"
               icon="arrow-forward">
    </iron-icon>
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
<rp-a-z hide-all=true selected-letter="f"></rp-a-z>
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
</section>
`;}


/***/ }),

/***/ "./public/elements/pages/people/rp-page-people.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPagePeople; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-people.tpl.js */ "./public/elements/pages/people/rp-page-people.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");









class RpPagePeople extends Mixin(_utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      filtersDefault: {type: Object},
      sortDefault: {type: Array},
      dataStatus: {type: String},
      data: {type: Array},
      dataMax: {type: parseInt},
      peopleWidth: {type: parseInt},
      visible: {type: Boolean},
      facetStatus: {type: String},
      facets: {type: Array}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.filtersDefault = {"@type": {"type": "keyword", "op": "and", "value": [APP_CONFIG.data.jsonldContext + ":person"]}};
    this.sortDefault = [{"label": "asc"}];
    this.dataStatus = 'loading';
    this.dataTotal = 0;
    this.setPeopleWidth(window.innerWidth);
    this.data = [];
    this.facetStatus = 'loading';
    this.facets = [];

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this._handleResize = this._handleResize.bind(this);
  }

  updated(props) {
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  async _onAppStateUpdate(e) {
    let q = {...this._parseUrlQuery()};
    await Promise.all([this._doQuery(q), this._getFacets(q)]);
  }

  async _doQuery(q) {
    if (!q.filters) {
      q.filters = this.filtersDefault;
    }
    if (!q.sort) {
      q.sort = this.sortDefault;
    }
    let data = await this.CollectionModel.query(q);
    this.dataStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.dataTotal = data.payload.total;
    this.data = data.payload.results;
    console.log(data);
    console.log(this.data);
  }

  async _getFacets(q) {
    let activeFilters = q.filters;
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.facetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    this.facets = [];

    // Format people types
    let facetName = "@type";
    let activeFilterValue = "";
    let activeFilterIndex = 0;
    let peopleTypes = [{label: 'All',
                        count: peopleAggs.payload.total, text: `All (${peopleAggs.payload.total})`}];
    let t = peopleAggs.payload.aggregations.facets[facetName];
    let prefix = 'vivo:';
    let i = 1;
    if (activeFilters && activeFilters[facetName]) {
      activeFilterValue = JSON.stringify(activeFilters[facetName].value);
    }
    for (let key in t) {
      if (key.startsWith(prefix)) {
        let label = this.CollectionModel._formatAgg(key, prefix);
        let filters = {type: "keyword", op: 'and', value: [key]};
        if (activeFilterValue == JSON.stringify(filters.value) ) {
          activeFilterIndex = i;
        }
        peopleTypes.push({label: label,
                          count: t[key],
                          text: `${label} (${t[key]})`,
                          filters: {"@type": filters},
                          name: key});
        i++;
      }
    }
    this.facets.push({values: peopleTypes,
                      activeIndex: activeFilterIndex,
                      id: facetName})
    //console.log(peopleAggs);
    console.log(this.facets);
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }


  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .7 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
  }

}

customElements.define('rp-page-people', RpPagePeople);


/***/ }),

/***/ "./public/elements/pages/people/rp-page-people.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.tpl.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_1__);



function render() {
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>
<div class="collections container bg-light top">
  ${this._renderBrowseHeader('People')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets(this.facets)}
    </div>
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading people.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.CollectionModel._formatPeople(this.data).map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <rp-person-preview
            name="${person.name}"
            title="${person.title}"
            text-width="${this.peopleWidth}"
            class="my-3">
          </rp-person-preview>
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`;}


/***/ }),

/***/ "./public/elements/utils/rp-utils-collection.js":
/*!******************************************************!*\
  !*** ./public/elements/utils/rp-utils-collection.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpUtilsCollection; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_a_z__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/a-z */ "./public/elements/components/a-z.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./public/elements/components/pagination.js");





class RpUtilsCollection extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azDisabled: {type: Array},
      pgPer: {type: parseInt},
      pgCurrent: {type: parseInt},
      urlQuery: {type: Object}
    }
  }

  constructor() {
    super();
    this.hasAz = false;
    this.hasPagination = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.pgPer = 8;
    this.pgCurrent = 1;
    this.urlQuery = {};
  }

  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let q = {...this.urlQuery};
    if (!q.filters) {
      q.filters = {};
    }
    console.log("User action:", action);

    // handle az
    if (action == 'az') {
      return;
    }

    // handle pagination
    if (action == 'pagination' && this.hasPagination) {
      this.pgCurrent = args[0];
      q.offset = this.pgCurrent * this.urlQuery.limit - this.urlQuery.limit;
    }

    // handle facets
    if (action.startsWith('facet_')) {
      if (args[0].filters) {
        q.filters = {...q.filters, ...args[0].filters}
      }
      else {
        let f = action.slice('facet_'.length, );
        if (q.filters[f]) {
          delete q.filters[f];
        }
      }
      q.offset = 0;
    }

    // construct new url and redirect
    let p = "";
    if (this.AppStateModel) {
      p = "/" + this.AppStateModel.store.data.location.path.join("/")
    }

    p = p + this._urlEncode(q)
    //console.log(p);
    //return;
    location.href = p;
  }

  _renderBrowseHeader(title, Azselected) {
    this.hasAz = true;
    if (Azselected) {
      this.azSelected = Azselected;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${title}</h1>
      </div>
      <div class="col-main">
        <rp-a-z selected-letter="${this.azSelected}" @changed-letter=${e => this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `;
  }

  _renderFacets(facets) {
    if (!facets) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${facets.map(facet => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-link-list has-header-link
                    links='${JSON.stringify(facet.values)}'
                    current-link='${facet.activeIndex}'
                    @changed-link="${e => this._onUserAction('facet_' + facet.id, e.target.links[e.target.currentLink])}">
      </rp-link-list>
      `)}
    `
  }

  _renderPagination(totalResults) {
    if (!totalResults || !this.urlQuery) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.urlQuery.limit);
    this.pgCurrent = Math.ceil((this.urlQuery.offset + 1) / this.urlQuery.limit)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _parseUrlQuery(){
    // read url args, construct search query
    let q = {};
    if (this.AppStateModel) {
      let query = this.AppStateModel.store.data.location.query;
      for (let arg in query) {
        q[arg] = JSON.parse(query[arg])
      }
    }
    if (!q.limit) {
      q.limit = this.pgPer;
    }
    if (!q.offset) {
      q.offset = 0;
    }
    this.urlQuery = q;
    return q;
  }

  _urlEncode(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        if (p == 'offset' && obj[p] == 0) {
          continue;
        }
        if (p == 'filters' && Object.keys(obj[p]).length == 0) {
          continue;
        }
        if (p == 'limit') {
          continue;
        }
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent( JSON.stringify(obj[p]) ));
      }
    if (!str.length) {
      return ""
    }
    return "?" + str.join("&");
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hLXouanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYS16LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb21wb25lbnRzL2FwcC1jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb21wb25lbnRzL2FwcC1jb21wb25lbnRzLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNiOztBQUUzQixtQkFBbUIsc0RBQVU7QUFDcEM7QUFDQTtBQUNBLGNBQWMscUNBQXFDO0FBQ25ELHFCQUFxQiwwREFBMEQ7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFNOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSxnQkFBZ0IsaUJBQWlCO0FBQ2hELHFDQUFxQyxTQUFTO0FBQzlDLCtCQUErQixPQUFPLElBQUksT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFtQztBQUNwQjtBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUDs7QUFFakMsMEJBQTBCLHNEQUFVO0FBQzNDO0FB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QUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZiwrQkFBK0IsUUFBUTtBQUN2QyxtQ0FBbUMsZUFBZTtBQUNsRCxvQ0FBb0MsNERBQTREO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Etei50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBWiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgaGlkZUFsbDoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2hpZGUtYWxsJ30sXG4gICAgc2VsZWN0ZWRMZXR0ZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3NlbGVjdGVkLWxldHRlcicsIHJlZmxlY3Q6IHRydWV9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hemxpc3QgPSBbLi4uJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ107XG4gICAgdGhpcy5fY2hhbmdlZExldHRlciA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1sZXR0ZXInLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGxldHRlciBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVuZGVyQXoobGV0dGVyKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gXCJcIjtcbiAgICBpZiAodGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRMZXR0ZXIudG9Mb3dlckNhc2UoKSA9PT0gbGV0dGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGV0dGVyICR7c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgIGxldHRlcj1cIiR7bGV0dGVyfVwiPiR7bGV0dGVyfTwvZGl2PmBcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19sZXR0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xldHRlcicpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5ld19sZXR0ZXIgIT0gdGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZExldHRlciA9IG5ld19sZXR0ZXI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExldHRlcik7XG4gICAgfVxuICB9XG5cbiAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCF0aGlzLmhpZGVBbGwpIHtcbiAgICAgIHRoaXMuYXpsaXN0LnVuc2hpZnQoJ0FsbCcpO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYS16JywgUnBBWik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxldHRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1pbi13aWR0aDogMjJweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubGV0dGVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxldHRlci5zZWxlY3RlZCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgICR7dGhpcy5hemxpc3QubWFwKGxldHRlciA9PiB0aGlzLl9yZW5kZXJBeihsZXR0ZXIpKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FjY29yZGlhbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBY2NvcmRpYW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBleHBhbmRlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdG9nZ2xlKCl7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWNjb3JkaWFuJywgUnBBY2NvcmRpYW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICBpcm9uLWljb25bcm90YXRlZF0ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgI2NvbnRhaW5lci10aXRsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLXRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLnRvZ2dsZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImFycm93LWRyb3AtZG93blwiID9yb3RhdGVkPVwiJHshdGhpcy5leHBhbmRlZH1cIj48L2lyb24taWNvbj5cbiAgICAgIDxzcGFuIGlkPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgP2hpZGRlbj1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9jaXRhdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBDaXRhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGpvdXJuYWw6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHBhZ2VzOiB7dHlwZTogU3RyaW5nfSxcbiAgICBjaXRhdGlvblN0eWxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdjaXRhdGlvbi1zdHlsZSd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaXRhdGlvblN0eWxlID0gXCJhcnRpY2xlXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKXtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiQ2l0YXRpb24gd2FzIGNsaWNrZWQ6IFwiLCB0aGlzLmhyZWYpO1xuICB9XG5cbiAgX2Zvcm1hdENvbXBvbmVudChjb21wb25lbnQsIGNvbXBvbmVudF90eXBlKSB7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBpZiAoY29tcG9uZW50X3R5cGUgPT0gJ3RpdGxlJykge1xuICAgICAgY29tcG9uZW50ICs9IFwiLlwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wb25lbnRfdHlwZSA9PSAnam91cm5hbCcpIHtcbiAgICAgIGNvbXBvbmVudCArPSBcIi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWNpdGF0aW9uJywgUnBDaXRhdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgI3RpdGxlW2Rpc2FibGVkXSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgICN0aXRsZVtkaXNhYmxlZF06aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gICAgI3RpdGxlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMudGl0bGV9XCI+XG4gICAgPHNwYW4gaWQ9XCJ0aXRsZVwiIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLmhyZWZ9XCI+JHt0aGlzLl9mb3JtYXRDb21wb25lbnQodGhpcy50aXRsZSwgJ3RpdGxlJyl9PC9zcGFuPlxuICAgIDxzcGFuIGlkPVwiam91cm5hbFwiPiR7dGhpcy5fZm9ybWF0Q29tcG9uZW50KHRoaXMuam91cm5hbCwgJ2pvdXJuYWwnKX08L3NwYW4+XG4gICAgPHNwYW4gaWQ9XCJwYWdlc1wiPiR7dGhpcy5fZm9ybWF0Q29tcG9uZW50KHRoaXMucGFnZXMsICdwYWdlcycpfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2hlcm8taW1hZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwSGVyb0ltYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFzc2V0Rm9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiYXNzZXQtZm9sZGVyXCJ9LFxuICAgIGFzc2V0TWF4OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1tYXhcIn0sXG4gICAgYXNzZXRQaWNrOiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1waWNrXCIsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hc3NldEZvbGRlciA9IFwiL2ltYWdlcy9wcm9maWxlLWZlYXR1cmVzL1wiXG4gICAgdGhpcy5hc3NldE1heCA9IDI5O1xuICAgIHRoaXMuc2h1ZmZsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrIDwgMCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPiB0aGlzLmFzc2V0TWF4KSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gdGhpcy5hc3NldE1heDtcbiAgICAgIH1cbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLmFzc2V0Rm9sZGVyICsgdGhpcy5hc3NldFBpY2sgKyBcIi5qcGdcIn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHNodWZmbGUoKSB7XG4gICAgaWYgKCF0aGlzLnNyYykge1xuICAgICAgdGhpcy5hc3NldFBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAgdGhpcy5hc3NldE1heCArIDEpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWhlcm8taW1hZ2UnLCBScEhlcm9JbWFnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5zbG90IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAjdG9wIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNib3R0b20ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cInRvcFwiPjxzbG90IG5hbWU9XCJ0b3BcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwibWFpblwiPjxzbG90IG5hbWU9XCJtYWluXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cImJvdHRvbVwiPjxzbG90IG5hbWU9XCJib3R0b21cIj48L3Nsb3Q+PC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpbmstbGlzdC50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBScExpbmtMaXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rczoge3R5cGU6IEFycmF5fSxcbiAgICBjdXJyZW50TGluazogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LWxpbmsnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBkaXJlY3Rpb246IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2RpcmVjdGlvbid9LFxuICAgIGhhc0hlYWRlckxpbms6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdoYXMtaGVhZGVyLWxpbmsnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3YnO1xuICAgIHRoaXMuY3VycmVudExpbmsgPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXMgPSB7Y29udGFpbmVyOiB0cnVlfTtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG5cbiAgICB0aGlzLl9jaGFuZ2VkTGluayA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1saW5rJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgaWYgKG5hbWUgPT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMudikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXJDbGFzc2VzLnZcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW25ld1ZhbC50b0xvd2VyQ2FzZSgpWzBdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKTtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgbGV0IGNsYXNzZXMgPSB7bGluazogdHJ1ZX07XG4gICAgaWYgKHR5cGVvZiBsaW5rID09PSAnc3RyaW5nJykge1xuICAgICAgdGV4dCA9IGxpbms7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaW5rID09PSAnb2JqZWN0Jykge1xuICAgICAgdGV4dCA9IGxpbmsudGV4dDtcbiAgICAgIGlmIChsaW5rLmRpc2FibGVkKSB7XG4gICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT0gdGhpcy5jdXJyZW50TGluaykge1xuICAgICAgY2xhc3Nlc1snc2VsZWN0ZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0hlYWRlckxpbmsgJiYgaW5kZXggPT0gMCkge1xuICAgICAgY2xhc3Nlc1snbGluay1oZWFkZXInXSA9IHRydWU7XG4gICAgfVxuICAgIGNsYXNzZXNbJ2Rpc2FibGVkJ10gPSBkaXNhYmxlZDtcblxuICAgIGlmICh0ZXh0KSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBsaW5rPVwiJHtpbmRleH1cIiBjbGFzcz0ke2NsYXNzTWFwKGNsYXNzZXMpfT4ke3RleHR9PC9kaXY+YDtcbiAgICB9XG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBsZXQgbmV3X2xpbmsgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xpbmsnKSk7XG4gICAgaWYgKChuZXdfbGluayAhPSB0aGlzLmN1cnJlbnRMaW5rKSAmJiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkpIHtcbiAgICAgIHRoaXMuY3VycmVudExpbmsgPSBuZXdfbGluaztcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9jaGFuZ2VkTGluayk7XG4gICAgfVxuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1saW5rLWxpc3QnLCBScExpbmtMaXN0KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5jb250YWluZXIuaCB7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXIuaCAubGluayB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxuICAgIC5jb250YWluZXIudiB7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5jb250YWluZXIudiAubGluayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLmxpbmsuZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIGxpbmsuZGlzYWJlbGQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz0ke2NsYXNzTWFwKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMpfT5cbiAgICAke3RoaXMubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gdGhpcy5fcmVuZGVyTGluayhsaW5rLCBpbmRleCkpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9wYWdpbmF0aW9uLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScFBhZ2luYXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnRQYWdlOiAge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ2N1cnJlbnQtcGFnZScsIHJlZmxlY3Q6IHRydWV9LFxuICAgIG1heFBhZ2U6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdtYXgtcGFnZScsIHJlZmxlY3Q6IHRydWV9LFxuICAgIG1pblBhZ2U6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdtaW4tcGFnZScsIHJlZmxlY3Q6IHRydWV9LFxuICAgIHBhZ2VzUGVyU2lkZToge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ3BhZ2VzLXBlci1zaWRlJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnBhZ2VzUGVyU2lkZSA9IDE7XG4gICAgdGhpcy5taW5QYWdlID0gMTtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5taW5QYWdlO1xuICAgIHRoaXMubWF4UGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG5cbiAgICB0aGlzLl9jaGFuZ2VkUGFnZSA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1wYWdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBwYWdlIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9oYXNWYWxpZExvZ2ljKCkge1xuICAgIGlmICh0aGlzLm1heFBhZ2UgPCB0aGlzLmN1cnJlbnRQYWdlIHx8IHRoaXMubWF4UGFnZSA8IHRoaXMubWluUGFnZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5taW5QYWdlID4gdGhpcy5jdXJyZW50UGFnZSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyRWRnZShkaXJlY3Rpb24pIHtcbiAgICBpZiAoIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGlmICgodGhpcy5jdXJyZW50UGFnZSAtIHRoaXMubWluUGFnZSkgPiAodGhpcy5wYWdlc1BlclNpZGUgKyAxKSkge1xuICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBjbGFzcz1cInBhZ2VcIiBwYWdlPVwiJHt0aGlzLm1pblBhZ2V9XCI+JHt0aGlzLm1pblBhZ2V9PC9kaXY+PGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+Li4uPC9kaXY+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGlmICgodGhpcy5tYXhQYWdlIC0gdGhpcy5jdXJyZW50UGFnZSkgPiAodGhpcy5wYWdlc1BlclNpZGUgKyAxKSkge1xuICAgICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4uLi48L2Rpdj48ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBjbGFzcz1cInBhZ2VcIiBwYWdlPVwiJHt0aGlzLm1heFBhZ2V9XCI+JHt0aGlzLm1heFBhZ2V9PC9kaXY+YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVuZGVyQ2VudGVyKCkge1xuICAgIGlmICghdGhpcy5faGFzVmFsaWRMb2dpYygpKSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiJHtjbGFzc01hcCh7cGFnZTogdHJ1ZSwgc2VsZWN0ZWQ6IHRydWV9KX1cIiBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlfVwiPiR7dGhpcy5jdXJyZW50UGFnZX08L2Rpdj5gO1xuICAgIH1cblxuICAgIGxldCBwYWdlcyA9IFt7cGFnZTogdGhpcy5jdXJyZW50UGFnZSwgc2VsZWN0ZWQ6IHRydWV9XTtcbiAgICBsZXQgcmVtYWluZGVyID0gdGhpcy5wYWdlc1BlclNpZGUgKiAyO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBhZGRQYWdlcyh0aGlzLnBhZ2VzUGVyU2lkZSk7XG4gICAgYWRkUGFnZXMocmVtYWluZGVyKTtcblxuICAgIGlmIChwYWdlc1swXS5wYWdlIC0gdGhpcy5taW5QYWdlID09PSAxKSB7XG4gICAgICBwYWdlcy51bnNoaWZ0KHtwYWdlOiB0aGlzLm1pblBhZ2UsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhQYWdlIC0gcGFnZXMuc2xpY2UoLTEpWzBdLnBhZ2UgPT09IDEpIHtcbiAgICAgIHBhZ2VzLnB1c2goe3BhZ2U6IHRoaXMubWF4UGFnZSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgJHtwYWdlcy5tYXAocGFnZSA9PiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcInBhZ2VcIjogdHJ1ZSwgc2VsZWN0ZWQ6IHBhZ2Uuc2VsZWN0ZWR9KX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U9XCIke3BhZ2UucGFnZX1cIj4ke3BhZ2UucGFnZX08L2Rpdj5gKX1gO1xuXG4gICAgZnVuY3Rpb24gYWRkUGFnZXMobG9vcHMpe1xuICAgICAgbGV0IGRpcmVjdGlvbnMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgICAgIGZvciAobGV0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGZpcnN0ID0gcGFnZXNbMF0ucGFnZTtcbiAgICAgICAgICAgIGlmIChmaXJzdCA+IHNlbGYubWluUGFnZSkge1xuICAgICAgICAgICAgICBwYWdlcy51bnNoaWZ0KHtwYWdlOiBmaXJzdCAtIDEsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICByZW1haW5kZXIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxhc3QgPSBwYWdlcy5zbGljZSgtMSlbMF0ucGFnZTtcbiAgICAgICAgICAgIGlmIChsYXN0IDwgc2VsZi5tYXhQYWdlKSB7XG4gICAgICAgICAgICAgIHBhZ2VzLnB1c2goe3BhZ2U6IGxhc3QgKyAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgcmVtYWluZGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBsZXQgbmV3X3BhZ2UgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3BhZ2UnKSk7XG4gICAgaWYgKG5ld19wYWdlICE9IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBuZXdfcGFnZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9jaGFuZ2VkUGFnZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnaW5hdGlvbicsIFJwUGFnaW5hdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1jZW50ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLnBhZ2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAucGFnZTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5wYWdlLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgcG9pbnRlci1ldmVudDogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgLnBhZ2Uuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLmVsbGlwc2lzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBpcm9uLWljb246aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICBpcm9uLWljb25bZGlzYWJsZWRdOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeS1kaXNhYmxlZCk7XG4gICAgfVxuICAgIGlyb24taWNvbltkaXNhYmxlZF0ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5LWRpc2FibGVkKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgPGlyb24taWNvbiA/ZGlzYWJsZWQ9XCIke3RoaXMuY3VycmVudFBhZ2UgPT0gdGhpcy5taW5QYWdlIHx8ICF0aGlzLl9oYXNWYWxpZExvZ2ljKCkgfVwiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgIHBhZ2U9XCIke3RoaXMuY3VycmVudFBhZ2UgLSAxfVwiXG4gICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctYmFja1wiPlxuICAgIDwvaXJvbi1pY29uPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY2VudGVyXCI+XG4gICAgICAke3RoaXMuX3JlbmRlckVkZ2UoJ2xlZnQnKX1cbiAgICAgICR7dGhpcy5fcmVuZGVyQ2VudGVyKCl9XG4gICAgICAke3RoaXMuX3JlbmRlckVkZ2UoJ3JpZ2h0Jyl9XG4gICAgPC9kaXY+XG4gICAgPGlyb24taWNvbiA/ZGlzYWJsZWQ9XCIke3RoaXMuY3VycmVudFBhZ2UgPT0gdGhpcy5tYXhQYWdlIHx8ICF0aGlzLl9oYXNWYWxpZExvZ2ljKCkgfVwiXG4gICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgIHBhZ2U9XCIke3RoaXMuY3VycmVudFBhZ2UgKyAxfVwiXG4gICAgICAgICAgICAgICBpY29uPVwiYXJyb3ctZm9yd2FyZFwiPlxuICAgIDwvaXJvbi1pY29uPlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2FwcC1jb21wb25lbnRzLnRwbC5qc1wiXG4vL2ltcG9ydCB7IGNvbG9yU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3NpdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgQXBwUGFnZUNvbXBvbmVudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1wYWdlLWNvbXBvbmVudHMnLCBBcHBQYWdlQ29tcG9uZW50cyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYS16XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3JkaWFuXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hdmF0YXJcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9iYWRnZVwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2NpdGF0aW9uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oZXJvLWltYWdlXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaWNvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdFwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHNcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9xdWljay1zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2hcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy92aWV3LWFsbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24uaGVybyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBycC1oZXJvLWltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5oZXJvdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVyb21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbiAgLnBlb3BsZS12ZXJ0aWNhbCBycC1wZXJzb24tcHJldmlldyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAucGVvcGxlLWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5zdWJuYXYge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5saW5rbGlzdDEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgcnAtYWNjb3JkaWFuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG4gIHJwLWNpdGF0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5xdWljay1zZWFyY2gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG5cbjxoMSBjbGFzcz1cInRleHQtcHJpbWFyeVwiPlNpdGUgQ29tcG9uZW50czwvaDE+XG48cD5UaGVzZSBkb24ndCBjb25uZWN0IHRvIHRoZSBtYWluIGJ1cywgYW5kIHRoZXkgZG9uJ3QgaW5oZXJpdCBhbnkgc2hhcmVkIHN0eWxlcyAob3RoZXIgdGhhbiBzaXRlIHZhcmlhYmxlcykuXG5Zb3UgY29udHJvbCB0aGVtIHdpdGggYXR0cmlidXRlcywgYW5kIGJ1aWxkIG1vcmUgY29tcGxpY2F0ZWQgKGJ1cy1jb25uZWN0ZWQpIGVsZW1lbnRzIHdpdGggdGhlbS5cbjwvcD5cbjxzZWN0aW9uPlxuPGgyPkEtWiBsaXN0PC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHNlbGVjdGVkIGxldHRlciBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfTwvY29kZT48L3A+XG48cnAtYS16ICBzZWxlY3RlZC1sZXR0ZXI9XCJhbGxcIiBAY2hhbmdlZC1sZXR0ZXI9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfT48L3JwLWEtej5cbjxwPlVzZSA8Y29kZT5oaWRlLWFsbDwvY29kZT4gdG8gbm90IHJlbmRlciB0aGUgQWxsIGxpbms8L3A+XG48cnAtYS16IGhpZGUtYWxsPXRydWUgc2VsZWN0ZWQtbGV0dGVyPVwiZlwiPjwvcnAtYS16PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BY2NvcmRpYW5zIGZvciBGQVEgc2VjdGlvbjwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPnRpdGxlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB0aGUgbGluayB0ZXh0LiBUaGUgZXhwYW5kYWJsZSBjb250ZW50IGlzIGFuIHVubmFtZWQgc2xvdC48L3A+XG48cnAtYWNjb3JkaWFuIHRpdGxlPVwiSG93IG9mdGVuIGRvIHlvdSB1cGRhdGUgdGhlIGRhdGEgaW4gdGhlIHJlZ2lzdHJ5P1wiPiR7J0hlbGxvIHdvcmxkISAnLnJlcGVhdCg0MCl9PC9ycC1hY2NvcmRpYW4+XG48cnAtYWNjb3JkaWFuPjwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbiBleHBhbmRlZCB0aXRsZT1cIlVzZSB0aGUgZXhwYW5kZWQgYXR0cmlidXRlIG9yIHRvZ2dsZSBtZXRob2QgdG8gY29udHJvbCBleHBhbnNpb25cIj5cblRoaXMgaXMgb3BlbiBvbiBwYWdlIGxvYWQgYmVjYXVzZSBJJ20gdXNpbmcgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZS5cbjwvcnAtYWNjb3JkaWFuPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYXNpYyBBbGVydDwvaDI+XG48cD5Ob3QgcGFydCBvZiB0aGUgaW5pdGlhbCBkZXNpZ24gc3BlY3MsIGJ1dCBuZWVkZWQgc29tZSB3YXkgdG8gaGFuZGxlIGVycm9ycy4gVXNlcyBzbG90LjwvcD5cbjxycC1hbGVydD5VaCBvaCEgU29tZXRoaW5nIHdlbnQgaG9ycmlibHkgd3JvbmcgKG5vdCB0aGF0IHRoYXQgZXZlciBoYXBwZW5zKS4gQ2FuJ3QgbG9hZCBjb250ZW50ITwvcnAtYWxlcnQ+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkF2YXRhcnM8L2gyPlxuPHA+VXNlIHRoZSBzaXplIGF0dHJpYnV0ZSB0byBhZGp1c3QgS2ltbXktZGVmaW5lZCBzaXplcy48L3A+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhcj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cInNtXCI+PC9ycC1hdmF0YXI+XG48cD5Vc2UgdGhlIHNyYyBhdHRyaWJ1dGUgdG8gdXNlIGEgcGhvdG8uPHA+XG48cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkJhZGdlczwvaDI+XG48c21hbGw+XG4gIDxycC1iYWRnZT5JJ20gYSBCYWRnZSE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+TWUgVG9vITwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvcnM8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+QXJlIGEgU2VxdWVuY2U8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+SWYgcGFydCBvZjwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT50aGUgc2FtZSBwYXJlbnQgbm9kZTwvcnAtYmFkZ2U+XG4gIDxycC1iYWRnZT5Db2xvciBzdGFydHMgb3ZlciE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+WWVsbG93IGFnYWluLi4uPC9ycC1iYWRnZT5cbjwvc21hbGw+XG48cD5CYWRnZXMgaW5oZXJpdCBmb250IHNpemUgPHJwLWJhZGdlPjE2cHggZm9udHNpemU8L3JwLWJhZGdlPlxuYnV0IHlvdSBjYW4gYWxzbyBpbmNyZWFzZSBwYWRkaW5nIHdpdGggdGhlIHNpemUgYXR0cmlidXRlIDxycC1iYWRnZSBzaXplPVwibGdcIj5zaXplIGxnPC9ycC1iYWRnZT5cbjwvcD5cbjxwPllvdSBjYW4gbWFudWFsbHkgY2hhbmdlIHRoZSBjb2xvciB3aXRoIHRoZSBjb2xvci1zZXF1ZW5jZSBhdHRyaWJ1dGVcbjxycC1iYWRnZSBjb2xvci1zZXF1ZW5jZT1cIjVcIj5jb2xvci1zZXF1ZW5jZSA9IDU8L3JwLWJhZGdlPlxuPC9wPlxuPHA+SWYgeW91IHBhc3MgaW4gYW4gaHJlZiBhdHRyaWJ1dGUsIDxycC1iYWRnZSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiPnRoZSBiYWRnZXM8L3JwLWJhZGdlPiA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHVcIj5iZWNvbWUgbGlua3M8L3JwLWJhZGdlPlxuYW5kIGhhdmUgaG92ZXIgc3R5bGVzLlxuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5DaXRhdGlvbnM8L2gyPlxuPHA+U2ltcGx5IHJlbmRlcnMgYmlibGlvZ3JhcGhpYyBpbmZvIGluIHNvbWUgc3RhbmRhcmQgZm9ybWF0LiBXaGF0IGZvcm1hdCB0aGF0IGlzLCBJIG5lZWQgdG8gZmluZCBvdXQuPC9wPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiU29tZSBXaXR0eSBFeWUtY2F0Y2hpbmcgVGl0bGU6IFRoZSBFZmZlY3Qgb2YgWCBvbiBaXCJcbiAgICAgICAgICAgICBocmVmPVwic29tZSBsaW5rXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiTmF0dXJlXCJcbiAgICAgICAgICAgICBwYWdlcz1cIjEyOjEyMy00NTZcIj5cbjwvcnAtY2l0YXRpb24+XG48cnAtY2l0YXRpb24gdGl0bGU9XCJFeGFtaW5pbmcgdGhlIEVmZmVjdHMgb2YgRG9ncyBvbiBDYXRzXCJcbiAgICAgICAgICAgICBqb3VybmFsPVwiQmVoYXZpb3JhbCBTY2llbmNlXCIgcGFnZXM9XCI0OjktMTNcIj5cbjwvcnAtY2l0YXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkRyb3Bkb3duPC9oMj5cbjxwPkEgc3R5bGl6ZWQgZHJvcGRvd24uIExpc3RlbiB3aXRoIDxjb2RlPkBuZXctc2VsZWN0aW9uPVwiXFwke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX08L2NvZGU+PC9wPlxuPHJwLWRyb3Bkb3duIGNob2ljZXM9J1tcIlBlb3BsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiT3JnYW5pemF0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIldvcmtzXCJ9XSdcbiAgICAgICAgICAgICBAbmV3LXNlbGVjdGlvbj1cIiR7ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jaG9pY2VzW2UudGFyZ2V0LmNob3Nlbl0pfVwiPlxuPC9ycC1kcm9wZG93bj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XG48aDI+SGVybyBJbWFnZTwvaDI+XG48cD5IZXJvIGltYWdlIHdpbGwgcmFuZG9tbHkgcHVsbCBhIGJhY2tncm91bmQtcGhvdG8gZnJvbSB0aGUgcGF0aCBkZWNsYXJlZCBpbiA8Y29kZT5hc3NldC1mb2xkZXI8L2NvZGU+IGF0dHJpYnV0ZS5cblJ1bm5pbmcgPGNvZGU+ZWxlLnNodWZmbGUoKTwvY29kZT4gd2lsbCBsb2FkIGEgbmV3IGltYWdlLlxuSG93ZXZlciwgc3BlY2lmeWluZyBhIDxjb2RlPnNyYzwvY29kZT4gYXR0cmlidXRlIHdpbGwgb3ZlcnJpZGUgdGhlIHJhbmRvbSBhc3NldCBwdWxsIGZ1bmN0aW9uYWxpdHkgYW5kIGp1c3QgbG9hZCB0aGUgc3JjIGJnIHBob3RvLlxuVGhlcmUgYXJlIHRocmVlIHNsb3RzIHRvIHBvcHVsYXRlIHRoZSBoZXJvIGNvbnRlbnQgLSBcInRvcFwiLCBcIm1haW5cIiwgYW5kIFwiYm90dG9tXCIuXG48cD5cbjwvc2VjdGlvbj5cbjxycC1oZXJvLWltYWdlPlxuICA8ZGl2IHNsb3Q9XCJ0b3BcIiBjbGFzcz1cImhlcm90b3BcIj5cbiAgICA8cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NXB4O1wiPjwvcnAtaWNvbj5cbiAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gIDwvZGl2PlxuICA8ZGl2IHNsb3Q9XCJtYWluXCIgY2xhc3M9XCJoZXJvbWFpblwiPlxuICAgIDxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCI+PC9ycC1hdmF0YXI+XG4gICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj5CcmFudGxleSwgUGV0ZXI8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBoMyBtYi0yIG10LTEgdGV4dC1jZW50ZXJcIj5EaXJlY3RvciBvZiBPbmxpbmUgU3RyYXRlZ3k8L3A+XG4gICAgPHAgY2xhc3M9XCJib2xkIHRleHQtbGlnaHQgaDMgbXQtMSBtYi0wIHRleHQtY2VudGVyXCI+TXkgcmVzZWFyY2ggYXJlYXMgaW5jbHVkZTogPC9wPlxuICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBtdC0yIG1iLTBcIj5cbiAgICAgIDxycC1iYWRnZT5Gb29iYXI8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPlN0dWZmPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5UaGluZ3M8L3JwLWJhZGdlPlxuICAgICAgPHJwLWJhZGdlPldpZGdldHM8L3JwLWJhZGdlPlxuICAgICAgPC9wPlxuICAgIDxkaXY+PC9kaXY+XG4gIDwvZGl2PlxuPC9ycC1oZXJvLWltYWdlPlxuXG48c2VjdGlvbj5cbjxoMj5JY29uczwvaDI+XG48cD5Vc2UgdGhlIDxjb2RlPmljb248L2NvZGU+IGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHlvdXIgaWNvbi4gVXNlIHRoZSBwcmVmaXggXCJpcm9uLVwiIHRvIGNhbGwgYW4gaXJvbiBpY29uOjwvcD5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cImlyb24tYXJyb3ctZm9yd2FyZFwiIGNpcmNsZS1iZz48L3JwLWljb24+XG48cD5UaGUgPGNvZGU+dGhlbWUtY29sb3I8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIGFkanVzdCB0aGUgY29sb3IsIDxjb2RlPmlzLWxpbms8L2NvZGU+IHdpbGwgYXBwbHkgbGluayBzdHlsZXMsIGFuZCA8Y29kZT5zaXplPC9jb2RlPiB3aWxsIGNoYW5nZSB0aGUgc2l6ZTxwPlxuPHJwLWljb24gaWNvbj1cImlyb24tZmFjZVwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cD5QcmVmYWNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgd2l0aCBcInJwLVwiIHRvIHVzZSBvbmUgb2YgdGhlIGN1c3RvbSBpY29uczwvcD5cbjxycC1pY29uIGljb249XCJycC1zZWFyY2hcIiBjaXJjbGUtYmcgaXMtbGluayB0aGVtZS1jb2xvcj0nc2Vjb25kYXJ5JyBzaXplPVwibGdcIj48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPkxpbmsgTGlzdDwvaDI+XG48cD5EaXNwbGF5cyBhIGxpc3Qgb2YgXCJsaW5rc1wiLiBBdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBhY3RpdmUgbGluayBjaGFuZ2VzIGkuZS48YnIgLz48Y29kZT5AY2hhbmdlZC1saW5rPVxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX08L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cImxpbmtsaXN0MVwiPlxuICA8cnAtbGluay1saXN0IGxpbmtzPSdbXCJIZWxsbyBXb3JsZFwiLCBcIkhlbGxvIEFnYWluIVwiLCBcIkFuZCBPbmUgTW9yZSBUaW1lXCJdJ1xuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9JHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX0+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG5cbjxwPlN3aXRjaCB0byBob3Jpem9udGFsIHZpZXcgYnkgdXNpbmcgPGNvZGU+ZGlyZWN0aW9uPWg8L2NvZGU+PC9wPlxuPGRpdiBjbGFzcz1cInN1Ym5hdlwiPlxuICA8cnAtbGluay1saXN0IGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiXG4gICAgICAgICAgICAgICAgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWxsIEluZm9cIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQWJvdXRcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUHVibGljYXRpb25zXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlJlc2VhcmNoXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbnRhY3RcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGlzYWJsZWQgTGlua1wiLCBcImRpc2FibGVkXCI6IHRydWV9IF0nPlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Qgd2l0aCBDb3VudHM8L2gyPlxuPHA+TGluayBsaXN0IHRoYXQgd2lsbCBwcmVwZW5kIGNvdW50cy4gTGlzdGVuIHdpdGggPGNvZGU+QGxpbmstY2xpY2s9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIjwvY29kZT48L3A+XG48cD5Vc2UgdGhlIDxjb2RlPnZpZXctYWxsLWxpbmtzPC9jb2RlPiBhbmQgPGNvZGU+aGVhZGVyPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGVuYWJsZSB0aGVzZSBkaXNwbGF5czo8L3A+XG48cnAtbGluay1saXN0LWNvdW50cyBsaW5rcz0nW3tcInRleHRcIjogXCJBY2FkZW1pYyBBcnRpY2xlc1wiLCBcImNvdW50XCI6IDMwODB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQm9va3NcIiwgXCJjb3VudFwiOiA4fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNoYXB0ZXJzXCIsIFwiY291bnRcIjogNTJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQ29uZmVyZW5jZSBQYXBlcnNcIiwgXCJjb3VudFwiOiA0NTF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiRGF0YXNldHNcIiwgXCJjb3VudFwiOiA3MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJKb3VybmFsc1wiLCBcImNvdW50XCI6IDk2MH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXBvcnRzXCIsIFwiY291bnRcIjogNH1dJ1xuICAgICAgICAgICAgICAgICAgICAgIHZpZXctYWxsLWxpbms9J3tcInRleHRcIjogXCJWaWV3IEFsbCBXb3Jrc1wifSdcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9J3tcInRleHRcIjogXCJBY2FkZW1pYyBXb3Jrc1wiLCBcImNvdW50XCI6IDg0MTN9J1xuICAgICAgICAgICAgICAgICAgICAgIEBsaW5rLWNsaWNrPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuQ2xpY2tlZGxpbmspfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuPC9ycC1saW5rLWxpc3QtY291bnRzPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5QYWdpbmF0aW9uPC9oMj5cbjxwPkF0dGFjaCBhIGxpc3RlbmVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHBhZ2UgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtcGFnZT1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX08L2NvZGU+PC9wPlxuPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9OCBAY2hhbmdlZC1wYWdlPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmN1cnJlbnRQYWdlKX0+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5tYXgtcGFnZTwvY29kZT4sIDxjb2RlPm1pbi1wYWdlPC9jb2RlPiwgYW5kIDxjb2RlPmN1cnJlbnQtcGFnZTwvY29kZT4gYXR0cmlidXRlcyB0byBjb250cm9sIHRoZSBkaXNwbGF5LjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTE1IGN1cnJlbnQtcGFnZT1cIjdcIj48L3JwLXBhZ2luYXRpb24+XG48cD5Vc2UgdGhlIDxjb2RlPnBhZ2VzLXBlci1zaWRlPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc2hvdyBtb3JlIHBhZ2VzIG9uIGVpdGhlciBzaWRlIG9mIHRoZSBjdXJyZW50IHBhZ2U8cD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTIwIGN1cnJlbnQtcGFnZT0xMCBwYWdlcy1wZXItc2lkZT0zPjwvcnAtcGFnaW5hdGlvbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGVyc29uIFByZXZpZXc8L2gyPlxuPHA+WW91IGNhbiBhcnJhbmdlIHRoZW0gaG93IHlvdSBzZWUgZml0LjwvcD48cD5WZXJ0aWNhbGx5LCBsaWtlIGluIHNlYXJjaC9icm93c2UgcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLXZlcnRpY2FsXCI+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJRdWlubiBIYXJ0XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvYXV0aG9yL3F1aW5uLWhhcnQvXCJcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIlxuICAgIGJhZGdlcz0nW1wiZm9vLWJhclwiXSc+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCJcbiAgICBiYWRnZXM9J1t7XCJ0ZXh0XCIgOiBcIkltIGEgbGluayFcIiwgXCJocmVmXCIgOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwifV0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJNYW4gb2YgTXlzdGVyeVwiXG4gICAgdGl0bGU9XCJIYXMgbm8gYXZhdGFyLXNyYyBvciBocmVmIGF0dHJpYnV0ZXNcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuPC9kaXY+XG48cD5vciBpbiBjb2x1bW5zIGxpa2Ugb24gdGhlIGhvbWVwYWdlOjwvcD5cbjxkaXYgY2xhc3M9XCJwZW9wbGUtY29sdW1uc1wiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIHRpdGxlPVwiRGlnaXRhbCBBcHBsaWNhdGlvbnMgTWFuYWdlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUGV0ZXIgQnJhbnRseVwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9wZXRlci1icmFudGxleS9cIlxuICAgIHRpdGxlPVwiRGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5XCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJKdXN0aW4gTWVyelwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvaGVhZHNob3RfY3JvcHBlZC0yODB4MzUwLWMtY2VudGVyLnBuZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9qdXN0aW4tbWVyei9cIlxuICAgIHRpdGxlPVwiUmVzZWFyY2ggU3VwcG9ydCBFbmdpbmVlclwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiS2ltbXkgSGVzY29ja1wiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDcvS2ltbXkyMDE4LTAxLTAwMS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiXG4gICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9raW1teS1oZXNjb2NrL1wiXG4gICAgdGl0bGU9XCJVc2VyIEV4cGVyaWVuY2UgRGVzaWduZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbjwvZGl2PlxuPHA+QmVjYXVzZSBvZiB0aGUgZ2VuZXJhbCBhd2Z1bGxuZXNzIG9mIHRoZSBjc3Mgb3ZlcmZsb3cgcHJvcGVydGllcywgeW91IGhhdmUgdG8gc2V0IHRoZSB0ZXh0V2lkdGggcHJvcGVydHkgaW4gYSByZXNpemUgZXZlbnQuPC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5RdWljayBTZWFyY2g8L2gyPlxuPHA+IFVzZSA8Y29kZT5AbmV3LXNlYXJjaD1cIlxcJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJxdWljay1zZWFyY2gtY29udGFpbmVyXCI+XG48cnAtcXVpY2stc2VhcmNoIEBuZXctc2VhcmNoPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQuaW5wdXRWYWx1ZSl9XCI+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cblxuPHA+VXNlIDxjb2RlPmlucHV0LXZhbHVlPC9jb2RlPiBhbmQgPGNvZGU+b3BlbmVkPC9jb2RlPiBhdHRyaWJ1dGVzIHRvIGNoYW5nZSBpbml0aWFsIHJlbmRlciBzdGF0ZS48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBpbnB1dC12YWx1ZT1cIkEgcHJlLWxvYWRlZCBzZWFyY2hcIiBvcGVuZWQ+PC9ycC1xdWljay1zZWFyY2g+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TWFpbiBTZWFyY2ggV2lkZ2V0PC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI8L2NvZGU+IHRvIGxpc3RlbiBmb3Igc2VhcmNoLjwvcD5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtYmx1ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgIDxycC1zZWFyY2ggc3R5bGU9XCJ3aWR0aDo3NSVcIiBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlYXJjaE9iamVjdCl9XCI+PC9ycC1zZWFyY2g+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDE+VmlldyBBbGw8L2gxPlxuPHA+RGVhZCBzaW1wbGUgZWxlbWVudCB0aGF0IGRpc3BsYXlzIGEgVmlldyBBbGwgbGluay4gVXNlIHRoZSA8Y29kZT50ZXh0PC9jb2RlPiBhdHRyaWJ1dGUgdG8gY3VzdG9taXplLCBhbmQgPGNvZGU+anVzdGlmeTwvY29kZT4gdG8gY29udHJvbCBob3Jpem9udGFsIGFsaWdubWVudC48L3A+XG48cnAtdmlldy1hbGwganVzdGlmeT1cInN0YXJ0XCI+PC9ycC12aWV3LWFsbD5cbjxycC12aWV3LWFsbCB0ZXh0PVwiVmlldyBBbGwgUGVvcGxlXCI+PC9ycC12aWV3LWFsbD5cbjwvc2VjdGlvbj5cbmA7fVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1wZW9wbGUudHBsLmpzXCJcblxuaW1wb3J0IFJwVXRpbHNDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZVBlb3BsZSBleHRlbmRzIE1peGluKFJwVXRpbHNDb2xsZWN0aW9uKVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlcnNEZWZhdWx0OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIHNvcnREZWZhdWx0OiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YU1heDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59LFxuICAgICAgZmFjZXRTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5maWx0ZXJzRGVmYXVsdCA9IHtcIkB0eXBlXCI6IHtcInR5cGVcIjogXCJrZXl3b3JkXCIsIFwib3BcIjogXCJhbmRcIiwgXCJ2YWx1ZVwiOiBbQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIl19fTtcbiAgICB0aGlzLnNvcnREZWZhdWx0ID0gW3tcImxhYmVsXCI6IFwiYXNjXCJ9XTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZmFjZXRTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5mYWNldHMgPSBbXTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGxldCBxID0gey4uLnRoaXMuX3BhcnNlVXJsUXVlcnkoKX07XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvUXVlcnkocSksIHRoaXMuX2dldEZhY2V0cyhxKV0pO1xuICB9XG5cbiAgYXN5bmMgX2RvUXVlcnkocSkge1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnNEZWZhdWx0O1xuICAgIH1cbiAgICBpZiAoIXEuc29ydCkge1xuICAgICAgcS5zb3J0ID0gdGhpcy5zb3J0RGVmYXVsdDtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gIH1cblxuICBhc3luYyBfZ2V0RmFjZXRzKHEpIHtcbiAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHEuZmlsdGVycztcbiAgICBsZXQgcGVvcGxlQWdncyA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdwZW9wbGVBZ2dzJyk7XG4gICAgdGhpcy5mYWNldFN0YXR1cyA9IHBlb3BsZUFnZ3Muc3RhdGU7XG4gICAgaWYgKHBlb3BsZUFnZ3Muc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWNldHMgPSBbXTtcblxuICAgIC8vIEZvcm1hdCBwZW9wbGUgdHlwZXNcbiAgICBsZXQgZmFjZXROYW1lID0gXCJAdHlwZVwiO1xuICAgIGxldCBhY3RpdmVGaWx0ZXJWYWx1ZSA9IFwiXCI7XG4gICAgbGV0IGFjdGl2ZUZpbHRlckluZGV4ID0gMDtcbiAgICBsZXQgcGVvcGxlVHlwZXMgPSBbe2xhYmVsOiAnQWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwZW9wbGVBZ2dzLnBheWxvYWQudG90YWwsIHRleHQ6IGBBbGwgKCR7cGVvcGxlQWdncy5wYXlsb2FkLnRvdGFsfSlgfV07XG4gICAgbGV0IHQgPSBwZW9wbGVBZ2dzLnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1tmYWNldE5hbWVdO1xuICAgIGxldCBwcmVmaXggPSAndml2bzonO1xuICAgIGxldCBpID0gMTtcbiAgICBpZiAoYWN0aXZlRmlsdGVycyAmJiBhY3RpdmVGaWx0ZXJzW2ZhY2V0TmFtZV0pIHtcbiAgICAgIGFjdGl2ZUZpbHRlclZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYWN0aXZlRmlsdGVyc1tmYWNldE5hbWVdLnZhbHVlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHQpIHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRBZ2coa2V5LCBwcmVmaXgpO1xuICAgICAgICBsZXQgZmlsdGVycyA9IHt0eXBlOiBcImtleXdvcmRcIiwgb3A6ICdhbmQnLCB2YWx1ZTogW2tleV19O1xuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyVmFsdWUgPT0gSlNPTi5zdHJpbmdpZnkoZmlsdGVycy52YWx1ZSkgKSB7XG4gICAgICAgICAgYWN0aXZlRmlsdGVySW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIHBlb3BsZVR5cGVzLnB1c2goe2xhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7bGFiZWx9ICgke3Rba2V5XX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyczoge1wiQHR5cGVcIjogZmlsdGVyc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleX0pO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmFjZXRzLnB1c2goe3ZhbHVlczogcGVvcGxlVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUZpbHRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBmYWNldE5hbWV9KVxuICAgIC8vY29uc29sZS5sb2cocGVvcGxlQWdncyk7XG4gICAgY29uc29sZS5sb2codGhpcy5mYWNldHMpO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtcGVvcGxlJywgUnBQYWdlUGVvcGxlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb2xsZWN0aW9ucyBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gICR7dGhpcy5fcmVuZGVyQnJvd3NlSGVhZGVyKCdQZW9wbGUnKX1cbiAgPGhyIGNsYXNzPVwibWItMFwiPlxuICA8ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJGYWNldHModGhpcy5mYWNldHMpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBwZW9wbGUuPC9ycC1hbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHt0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVvcGxlKHRoaXMuZGF0YSkubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgICAgIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2EtelwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgdXJsUXVlcnk6IHt0eXBlOiBPYmplY3R9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHEgPSB7Li4udGhpcy51cmxRdWVyeX07XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWN0aW9uOlwiLCBhY3Rpb24pO1xuXG4gICAgLy8gaGFuZGxlIGF6XG4gICAgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb25cbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMucGdDdXJyZW50ID0gYXJnc1swXTtcbiAgICAgIHEub2Zmc2V0ID0gdGhpcy5wZ0N1cnJlbnQgKiB0aGlzLnVybFF1ZXJ5LmxpbWl0IC0gdGhpcy51cmxRdWVyeS5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgZmFjZXRzXG4gICAgaWYgKGFjdGlvbi5zdGFydHNXaXRoKCdmYWNldF8nKSkge1xuICAgICAgaWYgKGFyZ3NbMF0uZmlsdGVycykge1xuICAgICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5hcmdzWzBdLmZpbHRlcnN9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGYgPSBhY3Rpb24uc2xpY2UoJ2ZhY2V0XycubGVuZ3RoLCApO1xuICAgICAgICBpZiAocS5maWx0ZXJzW2ZdKSB7XG4gICAgICAgICAgZGVsZXRlIHEuZmlsdGVyc1tmXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdCBuZXcgdXJsIGFuZCByZWRpcmVjdFxuICAgIGxldCBwID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBwID0gXCIvXCIgKyB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5wYXRoLmpvaW4oXCIvXCIpXG4gICAgfVxuXG4gICAgcCA9IHAgKyB0aGlzLl91cmxFbmNvZGUocSlcbiAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgIC8vcmV0dXJuO1xuICAgIGxvY2F0aW9uLmhyZWYgPSBwO1xuICB9XG5cbiAgX3JlbmRlckJyb3dzZUhlYWRlcih0aXRsZSwgQXpzZWxlY3RlZCkge1xuICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIGlmIChBenNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBBenNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgICAgPHJwLWEteiBzZWxlY3RlZC1sZXR0ZXI9XCIke3RoaXMuYXpTZWxlY3RlZH1cIiBAY2hhbmdlZC1sZXR0ZXI9JHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcImF6XCIpfT48L3JwLWEtej5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBfcmVuZGVyRmFjZXRzKGZhY2V0cykge1xuICAgIGlmICghZmFjZXRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGAke2ZhY2V0cy5tYXAoZmFjZXQgPT4gaHRtbGBcbiAgICAgIDxycC1saW5rLWxpc3QgaGFzLWhlYWRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzPScke0pTT04uc3RyaW5naWZ5KGZhY2V0LnZhbHVlcyl9J1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9JyR7ZmFjZXQuYWN0aXZlSW5kZXh9J1xuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbignZmFjZXRfJyArIGZhY2V0LmlkLCBlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3Q+XG4gICAgICBgKX1cbiAgICBgXG4gIH1cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cyB8fCAhdGhpcy51cmxRdWVyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KTtcbiAgICB0aGlzLnBnQ3VycmVudCA9IE1hdGguY2VpbCgodGhpcy51cmxRdWVyeS5vZmZzZXQgKyAxKSAvIHRoaXMudXJsUXVlcnkubGltaXQpXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeSgpe1xuICAgIC8vIHJlYWQgdXJsIGFyZ3MsIGNvbnN0cnVjdCBzZWFyY2ggcXVlcnlcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIGxldCBxdWVyeSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnF1ZXJ5O1xuICAgICAgZm9yIChsZXQgYXJnIGluIHF1ZXJ5KSB7XG4gICAgICAgIHFbYXJnXSA9IEpTT04ucGFyc2UocXVlcnlbYXJnXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFxLmxpbWl0KSB7XG4gICAgICBxLmxpbWl0ID0gdGhpcy5wZ1BlcjtcbiAgICB9XG4gICAgaWYgKCFxLm9mZnNldCkge1xuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnVybFF1ZXJ5ID0gcTtcbiAgICByZXR1cm4gcTtcbiAgfVxuXG4gIF91cmxFbmNvZGUob2JqKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGZvciAobGV0IHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgICAgfVxuICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==