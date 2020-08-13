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
      classess['link-header'] = true;
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
      visible: {type: Boolean}
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
    await this._doQuery();
  }

  async _doQuery() {
    let q = this._parseUrlQuery();
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
    <div class="col-facets"></div>
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
    this.urlQuery = {};
  }

  _onUserAction(action) {
    console.log(action);
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

  _renderFacet(facetId, links) {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-link-list has-header-link
                  links=${links}>
    </rp-link-list>
    `
  }

  _renderPagination(totalResults) {
    if (!totalResults || !this.urlQuery) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.urlQuery.limit);
    let currentPage = Math.ceil((this.urlQuery.offset + 1) / this.urlQuery.limit)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-pagination max-page="${maxPage}"
                   current-page="1"
                   @changed-page="${e => this._onUserAction("pagination")}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _parseUrlQuery(){
    // read url args, construct search query
    let q = {};
    if (!q.limit) {
      q.limit = this.pgPer;
    }
    if (!q.offset) {
      q.offset = 0;
    }
    this.urlQuery = q;
    return q;
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hLXouanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYS16LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb21wb25lbnRzL2FwcC1jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9jb21wb25lbnRzL2FwcC1jb21wb25lbnRzLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNiOztBQUUzQixtQkFBbUIsc0RBQVU7QUFDcEM7QUFDQTtBQUNBLGNBQWMscUNBQXFDO0FBQ25ELHFCQUFxQiwwREFBMEQ7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFNOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSxnQkFBZ0IsaUJBQWlCO0FBQ2hELHFDQUFxQyxTQUFTO0FBQzlDLCtCQUErQixPQUFPLElBQUksT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFtQztBQUNwQjtBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUDs7QUFFakMsMEJBQTBCLHNEQUFVO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5REFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBUSwwQkFBMEIsYUFBYSxZQUFZO0FBQ3JGLHdDQUF3QyxZQUFZO0FBQ3BELG9EQUFvRCxlQUFlO0FBQ25FLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNSOztBQUVoQyx5QkFBeUIsc0RBQVU7QUFDMUM7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixjQUFjLGFBQWE7QUFDM0IsV0FBVyxhQUFhO0FBQ3hCLFlBQVksYUFBYTtBQUN6QixvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFNO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVEsMEJBQTBCLGFBQWEsWUFBWTtBQUNyRiwrQkFBK0IsaUJBQWlCLGVBQWUsV0FBVyxJQUFJLDJDQUEyQztBQUN6SCx5QkFBeUIsK0NBQStDO0FBQ3hFLHVCQUF1QiwyQ0FBMkM7QUFDbEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ047O0FBRWxDLDBCQUEwQixzREFBVTtBQUMzQztBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLGtCQUFrQix3Q0FBd0M7QUFDMUQsZUFBZSx1Q0FBdUM7QUFDdEQsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwwREFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsMkNBQTJDO0FBQzlHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjtBQUNBOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDBCQUEwQixXQUFXLDhFQUFRLHlCQUF5QjtBQUN4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUDtBQUNpQjs7QUFFbEQseUJBQXlCLHNEQUFVO0FBQzFDO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEIsbUJBQW1CLDhEQUE4RDtBQUNqRixnQkFBZ0IscUNBQXFDO0FBQ3JELG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IseURBQU07QUFDeEI7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsZ0RBQUksZ0JBQWdCLGlCQUFpQixVQUFVLE1BQU0sVUFBVSw4RUFBUSxVQUFVLEdBQUcsS0FBSztBQUN0Rzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhFQUFRLHlCQUF5QjtBQUNoRCxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDVTtBQUNoQjs7QUFFbEMsMkJBQTJCLHNEQUFVO0FBQzVDO0FBQ0E7QUFDQSxtQkFBbUIsOERBQThEO0FBQ2pGLGNBQWMsMERBQTBEO0FBQ3hFLGNBQWMsMERBQTBEO0FBQ3hFLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFJLGdCQUFnQixpQkFBaUIsdUJBQXVCLGFBQWEsSUFBSSxhQUFhO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBSSwrQ0FBK0MsaUJBQWlCLHVCQUF1QixhQUFhLElBQUksYUFBYTtBQUN4STtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUksZUFBZSw4RUFBUSxFQUFFLDJCQUEyQixFQUFFLFVBQVUsaUJBQWlCLElBQUksaUJBQWlCO0FBQ3ZIOztBQUVBLGtCQUFrQix1Q0FBdUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0NBQW9DO0FBQ3pEO0FBQ0E7QUFDQSxrQkFBa0Isb0NBQW9DO0FBQ3REOztBQUVBLFdBQVcsZ0RBQUksR0FBRyxrQkFBa0IsZ0RBQUksZ0JBQWdCLGlCQUFpQjtBQUN6RSx1REFBdUQsOEVBQVEsRUFBRSxzQ0FBc0MsRUFBRTtBQUN6RyxzREFBc0QsVUFBVSxJQUFJLFVBQVUsU0FBUzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFtQztBQUNwQjtBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBNEQ7QUFDeEYseUJBQXlCLGlCQUFpQjtBQUMxQyx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0EsNEJBQTRCLDREQUE0RDtBQUN4Rix5QkFBeUIsaUJBQWlCO0FBQzFDLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNHO0FBQzVDLFVBQVUsY0FBYzs7QUFFakIsZ0NBQWdDLHNEQUFVO0FBQ2pEO0FBQ0E7QUFDQSxrQkFBa0IsOERBQU07QUFDeEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRWQ7QUFDTTtBQUNKO0FBQ0M7QUFDRDtBQUNHO0FBQ0E7QUFDRTtBQUNOO0FBQ0s7QUFDTztBQUNOO0FBQ0k7QUFDRjtBQUNOO0FBQ0U7O0FBRW5CO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHLDRDQUE0QztBQUNuSixpREFBaUQsNENBQTRDO0FBQzdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsMkJBQTJCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZEQUE2RCxvREFBb0Q7QUFDakg7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hELHdCQUF3QixnQkFBZ0I7QUFDeEMsK0JBQStCLG9EQUFvRDtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEhBQThILHlEQUF5RDtBQUN2TDtBQUNBO0FBQ0EsZ0NBQWdDLHlEQUF5RDtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5REFBeUQ7QUFDMUYseUJBQXlCLG1CQUFtQjtBQUM1Qyx5QkFBeUIsZ0JBQWdCO0FBQ3pDLHlCQUF5Qix1QkFBdUI7QUFDaEQseUJBQXlCLG1CQUFtQjtBQUM1Qyx5QkFBeUIsa0JBQWtCO0FBQzNDLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUseUNBQXlDO0FBQ2xIO0FBQ0EsOEJBQThCLDJDQUEyQztBQUN6RSw4QkFBOEIsNEJBQTRCO0FBQzFELDhCQUE4QixnQ0FBZ0M7QUFDOUQsOEJBQThCLDBDQUEwQztBQUN4RSw4QkFBOEIsZ0NBQWdDO0FBQzlELDhCQUE4QixpQ0FBaUM7QUFDL0QsOEJBQThCLDhCQUE4QjtBQUM1RCxzQ0FBc0MseUJBQXlCO0FBQy9ELCtCQUErQix3Q0FBd0M7QUFDdkUscUNBQXFDLHlDQUF5QztBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRix5Q0FBeUM7QUFDcEksMENBQTBDLHlDQUF5QztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFxRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0EsZ0NBQWdDLHdDQUF3QztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQSxnREFBZ0QsMENBQTBDO0FBQzFGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUzs7QUFFb0I7O0FBRWhDO0FBQ1E7OztBQUd6QixpQ0FBaUMsa0VBQWlCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyxvQkFBb0IsWUFBWTtBQUNoQyxtQkFBbUIsYUFBYTtBQUNoQyxhQUFhLFlBQVk7QUFDekIsZ0JBQWdCLGVBQWU7QUFDL0Isb0JBQW9CLGVBQWU7QUFDbkMsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTs7QUFFeEI7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQyx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRTVCO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJEQUEyRDtBQUNqRjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUE2RDtBQUNuRjtBQUNBO0FBQ0EsbUNBQW1DLDREQUE0RDtBQUMvRixVQUFVLDREQUE0RCxnREFBSTtBQUMxRTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLHFCQUFxQixhQUFhO0FBQ2xDLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNwQjtBQUNNO0FBQ0M7O0FBRW5CLGdDQUFnQyxzREFBVTs7QUFFekQ7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QixzQkFBc0IsY0FBYztBQUNwQyxtQkFBbUIsYUFBYTtBQUNoQyxtQkFBbUIsWUFBWTtBQUMvQixjQUFjLGVBQWU7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSTtBQUNmO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0Isb0JBQW9CLDhCQUE4QjtBQUNyRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZjtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZiwrQkFBK0IsUUFBUTtBQUN2QztBQUNBLG9DQUFvQyxzQ0FBc0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Etei50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBWiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgaGlkZUFsbDoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2hpZGUtYWxsJ30sXG4gICAgc2VsZWN0ZWRMZXR0ZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3NlbGVjdGVkLWxldHRlcicsIHJlZmxlY3Q6IHRydWV9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hemxpc3QgPSBbLi4uJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ107XG4gICAgdGhpcy5fY2hhbmdlZExldHRlciA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1sZXR0ZXInLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGxldHRlciBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVuZGVyQXoobGV0dGVyKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gXCJcIjtcbiAgICBpZiAodGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRMZXR0ZXIudG9Mb3dlckNhc2UoKSA9PT0gbGV0dGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGV0dGVyICR7c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgIGxldHRlcj1cIiR7bGV0dGVyfVwiPiR7bGV0dGVyfTwvZGl2PmBcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19sZXR0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xldHRlcicpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5ld19sZXR0ZXIgIT0gdGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZExldHRlciA9IG5ld19sZXR0ZXI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExldHRlcik7XG4gICAgfVxuICB9XG5cbiAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCF0aGlzLmhpZGVBbGwpIHtcbiAgICAgIHRoaXMuYXpsaXN0LnVuc2hpZnQoJ0FsbCcpO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYS16JywgUnBBWik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxldHRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1pbi13aWR0aDogMjJweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIycHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubGV0dGVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxldHRlci5zZWxlY3RlZCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgICR7dGhpcy5hemxpc3QubWFwKGxldHRlciA9PiB0aGlzLl9yZW5kZXJBeihsZXR0ZXIpKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FjY29yZGlhbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBY2NvcmRpYW4gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBleHBhbmRlZDoge3R5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdG9nZ2xlKCl7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWNjb3JkaWFuJywgUnBBY2NvcmRpYW4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFtoaWRkZW5dIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICBpcm9uLWljb25bcm90YXRlZF0ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgI2NvbnRhaW5lci10aXRsZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyLXRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLnRvZ2dsZX1cIj5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImFycm93LWRyb3AtZG93blwiID9yb3RhdGVkPVwiJHshdGhpcy5leHBhbmRlZH1cIj48L2lyb24taWNvbj5cbiAgICAgIDxzcGFuIGlkPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgP2hpZGRlbj1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9jaXRhdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBDaXRhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGpvdXJuYWw6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHBhZ2VzOiB7dHlwZTogU3RyaW5nfSxcbiAgICBjaXRhdGlvblN0eWxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdjaXRhdGlvbi1zdHlsZSd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaXRhdGlvblN0eWxlID0gXCJhcnRpY2xlXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKXtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiQ2l0YXRpb24gd2FzIGNsaWNrZWQ6IFwiLCB0aGlzLmhyZWYpO1xuICB9XG5cbiAgX2Zvcm1hdENvbXBvbmVudChjb21wb25lbnQsIGNvbXBvbmVudF90eXBlKSB7XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBpZiAoY29tcG9uZW50X3R5cGUgPT0gJ3RpdGxlJykge1xuICAgICAgY29tcG9uZW50ICs9IFwiLlwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb21wb25lbnRfdHlwZSA9PSAnam91cm5hbCcpIHtcbiAgICAgIGNvbXBvbmVudCArPSBcIi5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWNpdGF0aW9uJywgUnBDaXRhdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgI3RpdGxlW2Rpc2FibGVkXSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgICN0aXRsZVtkaXNhYmxlZF06aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gICAgI3RpdGxlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMudGl0bGV9XCI+XG4gICAgPHNwYW4gaWQ9XCJ0aXRsZVwiIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLmhyZWZ9XCI+JHt0aGlzLl9mb3JtYXRDb21wb25lbnQodGhpcy50aXRsZSwgJ3RpdGxlJyl9PC9zcGFuPlxuICAgIDxzcGFuIGlkPVwiam91cm5hbFwiPiR7dGhpcy5fZm9ybWF0Q29tcG9uZW50KHRoaXMuam91cm5hbCwgJ2pvdXJuYWwnKX08L3NwYW4+XG4gICAgPHNwYW4gaWQ9XCJwYWdlc1wiPiR7dGhpcy5fZm9ybWF0Q29tcG9uZW50KHRoaXMucGFnZXMsICdwYWdlcycpfTwvc3Bhbj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2hlcm8taW1hZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwSGVyb0ltYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFzc2V0Rm9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiYXNzZXQtZm9sZGVyXCJ9LFxuICAgIGFzc2V0TWF4OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1tYXhcIn0sXG4gICAgYXNzZXRQaWNrOiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1waWNrXCIsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hc3NldEZvbGRlciA9IFwiL2ltYWdlcy9wcm9maWxlLWZlYXR1cmVzL1wiXG4gICAgdGhpcy5hc3NldE1heCA9IDI5O1xuICAgIHRoaXMuc2h1ZmZsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrIDwgMCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPiB0aGlzLmFzc2V0TWF4KSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gdGhpcy5hc3NldE1heDtcbiAgICAgIH1cbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLmFzc2V0Rm9sZGVyICsgdGhpcy5hc3NldFBpY2sgKyBcIi5qcGdcIn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHNodWZmbGUoKSB7XG4gICAgaWYgKCF0aGlzLnNyYykge1xuICAgICAgdGhpcy5hc3NldFBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAgdGhpcy5hc3NldE1heCArIDEpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWhlcm8taW1hZ2UnLCBScEhlcm9JbWFnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5zbG90IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAjdG9wIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNib3R0b20ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cInRvcFwiPjxzbG90IG5hbWU9XCJ0b3BcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwibWFpblwiPjxzbG90IG5hbWU9XCJtYWluXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cImJvdHRvbVwiPjxzbG90IG5hbWU9XCJib3R0b21cIj48L3Nsb3Q+PC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpbmstbGlzdC50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBScExpbmtMaXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rczoge3R5cGU6IEFycmF5fSxcbiAgICBjdXJyZW50TGluazogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LWxpbmsnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBkaXJlY3Rpb246IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2RpcmVjdGlvbid9LFxuICAgIGhhc0hlYWRlckxpbms6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdoYXMtaGVhZGVyLWxpbmsnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3YnO1xuICAgIHRoaXMuY3VycmVudExpbmsgPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXMgPSB7Y29udGFpbmVyOiB0cnVlfTtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG5cbiAgICB0aGlzLl9jaGFuZ2VkTGluayA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1saW5rJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgaWYgKG5hbWUgPT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMudikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXJDbGFzc2VzLnZcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW25ld1ZhbC50b0xvd2VyQ2FzZSgpWzBdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKTtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgbGV0IGNsYXNzZXMgPSB7bGluazogdHJ1ZX07XG4gICAgaWYgKHR5cGVvZiBsaW5rID09PSAnc3RyaW5nJykge1xuICAgICAgdGV4dCA9IGxpbms7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaW5rID09PSAnb2JqZWN0Jykge1xuICAgICAgdGV4dCA9IGxpbmsudGV4dDtcbiAgICAgIGlmIChsaW5rLmRpc2FibGVkKSB7XG4gICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT0gdGhpcy5jdXJyZW50TGluaykge1xuICAgICAgY2xhc3Nlc1snc2VsZWN0ZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0hlYWRlckxpbmsgJiYgaW5kZXggPT0gMCkge1xuICAgICAgY2xhc3Nlc3NbJ2xpbmstaGVhZGVyJ10gPSB0cnVlO1xuICAgIH1cbiAgICBjbGFzc2VzWydkaXNhYmxlZCddID0gZGlzYWJsZWQ7XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluaz1cIiR7aW5kZXh9XCIgY2xhc3M9JHtjbGFzc01hcChjbGFzc2VzKX0+JHt0ZXh0fTwvZGl2PmA7XG4gICAgfVxuXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19saW5rID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rJykpO1xuICAgIGlmICgobmV3X2xpbmsgIT0gdGhpcy5jdXJyZW50TGluaykgJiYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMaW5rID0gbmV3X2xpbms7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExpbmspO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0JywgUnBMaW5rTGlzdCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmgge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmggLmxpbmsge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnYge1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnYgLmxpbmsge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZCB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9JHtjbGFzc01hcCh0aGlzLl9jb250YWluZXJDbGFzc2VzKX0+XG4gICAgJHt0aGlzLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHRoaXMuX3JlbmRlckxpbmsobGluaywgaW5kZXgpKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcGFnaW5hdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBQYWdpbmF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50UGFnZTogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBtYXhQYWdlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnbWF4LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBtaW5QYWdlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnbWluLXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwYWdlc1BlclNpZGU6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdwYWdlcy1wZXItc2lkZSd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlc1BlclNpZGUgPSAxO1xuICAgIHRoaXMubWluUGFnZSA9IDE7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubWluUGFnZTtcbiAgICB0aGlzLm1heFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuXG4gICAgdGhpcy5fY2hhbmdlZFBhZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtcGFnZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgcGFnZSBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfaGFzVmFsaWRMb2dpYygpIHtcbiAgICBpZiAodGhpcy5tYXhQYWdlIDwgdGhpcy5jdXJyZW50UGFnZSB8fCB0aGlzLm1heFBhZ2UgPCB0aGlzLm1pblBhZ2UgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubWluUGFnZSA+IHRoaXMuY3VycmVudFBhZ2UgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckVkZ2UoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNWYWxpZExvZ2ljKCkpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAoKHRoaXMuY3VycmVudFBhZ2UgLSB0aGlzLm1pblBhZ2UpID4gKHRoaXMucGFnZXNQZXJTaWRlICsgMSkpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5taW5QYWdlfVwiPiR7dGhpcy5taW5QYWdlfTwvZGl2PjxkaXYgY2xhc3M9XCJlbGxpcHNpc1wiPi4uLjwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAoKHRoaXMubWF4UGFnZSAtIHRoaXMuY3VycmVudFBhZ2UpID4gKHRoaXMucGFnZXNQZXJTaWRlICsgMSkpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+Li4uPC9kaXY+PGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5tYXhQYWdlfVwiPiR7dGhpcy5tYXhQYWdlfTwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckNlbnRlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cIiR7Y2xhc3NNYXAoe3BhZ2U6IHRydWUsIHNlbGVjdGVkOiB0cnVlfSl9XCIgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZX1cIj4ke3RoaXMuY3VycmVudFBhZ2V9PC9kaXY+YDtcbiAgICB9XG5cbiAgICBsZXQgcGFnZXMgPSBbe3BhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNlbGVjdGVkOiB0cnVlfV07XG4gICAgbGV0IHJlbWFpbmRlciA9IHRoaXMucGFnZXNQZXJTaWRlICogMjtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgYWRkUGFnZXModGhpcy5wYWdlc1BlclNpZGUpO1xuICAgIGFkZFBhZ2VzKHJlbWFpbmRlcik7XG5cbiAgICBpZiAocGFnZXNbMF0ucGFnZSAtIHRoaXMubWluUGFnZSA9PT0gMSkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogdGhpcy5taW5QYWdlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4UGFnZSAtIHBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlID09PSAxKSB7XG4gICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLm1heFBhZ2UsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYCR7cGFnZXMubWFwKHBhZ2UgPT4gaHRtbGA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XCJwYWdlXCI6IHRydWUsIHNlbGVjdGVkOiBwYWdlLnNlbGVjdGVkfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPVwiJHtwYWdlLnBhZ2V9XCI+JHtwYWdlLnBhZ2V9PC9kaXY+YCl9YDtcblxuICAgIGZ1bmN0aW9uIGFkZFBhZ2VzKGxvb3BzKXtcbiAgICAgIGxldCBkaXJlY3Rpb25zID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9ucykge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHBhZ2VzWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWxmLm1pblBhZ2UpIHtcbiAgICAgICAgICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogZmlyc3QgLSAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgcmVtYWluZGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsYXN0ID0gcGFnZXMuc2xpY2UoLTEpWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAobGFzdCA8IHNlbGYubWF4UGFnZSkge1xuICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiBsYXN0ICsgMSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIHJlbWFpbmRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19wYWdlID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwYWdlJykpO1xuICAgIGlmIChuZXdfcGFnZSAhPSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3X3BhZ2U7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZFBhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2luYXRpb24nLCBScFBhZ2luYXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5jb250YWluZXItY2VudGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5wYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnBhZ2U6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAucGFnZS5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHBvaW50ZXItZXZlbnQ6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIC5wYWdlLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5lbGxpcHNpcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaXJvbi1pY29uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgaXJvbi1pY29uW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnktZGlzYWJsZWQpO1xuICAgIH1cbiAgICBpcm9uLWljb25bZGlzYWJsZWRdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeS1kaXNhYmxlZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgIDxpcm9uLWljb24gP2Rpc2FibGVkPVwiJHt0aGlzLmN1cnJlbnRQYWdlID09IHRoaXMubWluUGFnZSB8fCAhdGhpcy5faGFzVmFsaWRMb2dpYygpIH1cIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlIC0gMX1cIlxuICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWJhY2tcIj5cbiAgICA8L2lyb24taWNvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWNlbnRlclwiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdsZWZ0Jyl9XG4gICAgICAke3RoaXMuX3JlbmRlckNlbnRlcigpfVxuICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdyaWdodCcpfVxuICAgIDwvZGl2PlxuICAgIDxpcm9uLWljb24gP2Rpc2FibGVkPVwiJHt0aGlzLmN1cnJlbnRQYWdlID09IHRoaXMubWF4UGFnZSB8fCAhdGhpcy5faGFzVmFsaWRMb2dpYygpIH1cIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlICsgMX1cIlxuICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWZvcndhcmRcIj5cbiAgICA8L2lyb24taWNvbj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9hcHAtY29tcG9uZW50cy50cGwuanNcIlxuLy9pbXBvcnQgeyBjb2xvclN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIEFwcFBhZ2VDb21wb25lbnRzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcGFnZS1jb21wb25lbnRzJywgQXBwUGFnZUNvbXBvbmVudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2EtelwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FjY29yZGlhblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYXZhdGFyXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYmFkZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jaXRhdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcXVpY2stc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvdmlldy1hbGxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBzZWN0aW9uLmhlcm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcnAtaGVyby1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwgcnAtcGVyc29uLXByZXZpZXcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wZW9wbGUtY29sdW1ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuc3VibmF2IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAubGlua2xpc3QxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIHJwLWFjY29yZGlhbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxuICBycC1jaXRhdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucXVpY2stc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnNlYXJjaC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuXG48aDEgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5TaXRlIENvbXBvbmVudHM8L2gxPlxuPHA+VGhlc2UgZG9uJ3QgY29ubmVjdCB0byB0aGUgbWFpbiBidXMsIGFuZCB0aGV5IGRvbid0IGluaGVyaXQgYW55IHNoYXJlZCBzdHlsZXMgKG90aGVyIHRoYW4gc2l0ZSB2YXJpYWJsZXMpLlxuWW91IGNvbnRyb2wgdGhlbSB3aXRoIGF0dHJpYnV0ZXMsIGFuZCBidWlsZCBtb3JlIGNvbXBsaWNhdGVkIChidXMtY29ubmVjdGVkKSBlbGVtZW50cyB3aXRoIHRoZW0uXG48L3A+XG48c2VjdGlvbj5cbjxoMj5BLVogbGlzdDwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBzZWxlY3RlZCBsZXR0ZXIgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX08L2NvZGU+PC9wPlxuPHJwLWEteiAgc2VsZWN0ZWQtbGV0dGVyPVwiYWxsXCIgQGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX0+PC9ycC1hLXo+XG48cD5Vc2UgPGNvZGU+aGlkZS1hbGw8L2NvZGU+IHRvIG5vdCByZW5kZXIgdGhlIEFsbCBsaW5rPC9wPlxuPHJwLWEteiBoaWRlLWFsbD10cnVlIHNlbGVjdGVkLWxldHRlcj1cImZcIj48L3JwLWEtej5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QWNjb3JkaWFucyBmb3IgRkFRIHNlY3Rpb248L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT50aXRsZTwvY29kZT4gYXR0cmlidXRlIHRvIHNwZWNpZnkgdGhlIGxpbmsgdGV4dC4gVGhlIGV4cGFuZGFibGUgY29udGVudCBpcyBhbiB1bm5hbWVkIHNsb3QuPC9wPlxuPHJwLWFjY29yZGlhbiB0aXRsZT1cIkhvdyBvZnRlbiBkbyB5b3UgdXBkYXRlIHRoZSBkYXRhIGluIHRoZSByZWdpc3RyeT9cIj4keydIZWxsbyB3b3JsZCEgJy5yZXBlYXQoNDApfTwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbj48L3JwLWFjY29yZGlhbj5cbjxycC1hY2NvcmRpYW4gZXhwYW5kZWQgdGl0bGU9XCJVc2UgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZSBvciB0b2dnbGUgbWV0aG9kIHRvIGNvbnRyb2wgZXhwYW5zaW9uXCI+XG5UaGlzIGlzIG9wZW4gb24gcGFnZSBsb2FkIGJlY2F1c2UgSSdtIHVzaW5nIHRoZSBleHBhbmRlZCBhdHRyaWJ1dGUuXG48L3JwLWFjY29yZGlhbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QmFzaWMgQWxlcnQ8L2gyPlxuPHA+Tm90IHBhcnQgb2YgdGhlIGluaXRpYWwgZGVzaWduIHNwZWNzLCBidXQgbmVlZGVkIHNvbWUgd2F5IHRvIGhhbmRsZSBlcnJvcnMuIFVzZXMgc2xvdC48L3A+XG48cnAtYWxlcnQ+VWggb2ghIFNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nIChub3QgdGhhdCB0aGF0IGV2ZXIgaGFwcGVucykuIENhbid0IGxvYWQgY29udGVudCE8L3JwLWFsZXJ0PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BdmF0YXJzPC9oMj5cbjxwPlVzZSB0aGUgc2l6ZSBhdHRyaWJ1dGUgdG8gYWRqdXN0IEtpbW15LWRlZmluZWQgc2l6ZXMuPC9wPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyIHNpemU9XCJzbVwiPjwvcnAtYXZhdGFyPlxuPHA+VXNlIHRoZSBzcmMgYXR0cmlidXRlIHRvIHVzZSBhIHBob3RvLjxwPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYWRnZXM8L2gyPlxuPHNtYWxsPlxuICA8cnAtYmFkZ2U+SSdtIGEgQmFkZ2UhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPk1lIFRvbyE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3JzPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkFyZSBhIFNlcXVlbmNlPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPklmIHBhcnQgb2Y8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+dGhlIHNhbWUgcGFyZW50IG5vZGU8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3Igc3RhcnRzIG92ZXIhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPlllbGxvdyBhZ2Fpbi4uLjwvcnAtYmFkZ2U+XG48L3NtYWxsPlxuPHA+QmFkZ2VzIGluaGVyaXQgZm9udCBzaXplIDxycC1iYWRnZT4xNnB4IGZvbnRzaXplPC9ycC1iYWRnZT5cbmJ1dCB5b3UgY2FuIGFsc28gaW5jcmVhc2UgcGFkZGluZyB3aXRoIHRoZSBzaXplIGF0dHJpYnV0ZSA8cnAtYmFkZ2Ugc2l6ZT1cImxnXCI+c2l6ZSBsZzwvcnAtYmFkZ2U+XG48L3A+XG48cD5Zb3UgY2FuIG1hbnVhbGx5IGNoYW5nZSB0aGUgY29sb3Igd2l0aCB0aGUgY29sb3Itc2VxdWVuY2UgYXR0cmlidXRlXG48cnAtYmFkZ2UgY29sb3Itc2VxdWVuY2U9XCI1XCI+Y29sb3Itc2VxdWVuY2UgPSA1PC9ycC1iYWRnZT5cbjwvcD5cbjxwPklmIHlvdSBwYXNzIGluIGFuIGhyZWYgYXR0cmlidXRlLCA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIj50aGUgYmFkZ2VzPC9ycC1iYWRnZT4gPHJwLWJhZGdlIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1XCI+YmVjb21lIGxpbmtzPC9ycC1iYWRnZT5cbmFuZCBoYXZlIGhvdmVyIHN0eWxlcy5cbjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+Q2l0YXRpb25zPC9oMj5cbjxwPlNpbXBseSByZW5kZXJzIGJpYmxpb2dyYXBoaWMgaW5mbyBpbiBzb21lIHN0YW5kYXJkIGZvcm1hdC4gV2hhdCBmb3JtYXQgdGhhdCBpcywgSSBuZWVkIHRvIGZpbmQgb3V0LjwvcD5cbjxycC1jaXRhdGlvbiB0aXRsZT1cIlNvbWUgV2l0dHkgRXllLWNhdGNoaW5nIFRpdGxlOiBUaGUgRWZmZWN0IG9mIFggb24gWlwiXG4gICAgICAgICAgICAgaHJlZj1cInNvbWUgbGlua1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIk5hdHVyZVwiXG4gICAgICAgICAgICAgcGFnZXM9XCIxMjoxMjMtNDU2XCI+XG48L3JwLWNpdGF0aW9uPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiRXhhbWluaW5nIHRoZSBFZmZlY3RzIG9mIERvZ3Mgb24gQ2F0c1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIkJlaGF2aW9yYWwgU2NpZW5jZVwiIHBhZ2VzPVwiNDo5LTEzXCI+XG48L3JwLWNpdGF0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5Ecm9wZG93bjwvaDI+XG48cD5BIHN0eWxpemVkIGRyb3Bkb3duLiBMaXN0ZW4gd2l0aCA8Y29kZT5AbmV3LXNlbGVjdGlvbj1cIlxcJHtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmNob2ljZXNbZS50YXJnZXQuY2hvc2VuXSl9PC9jb2RlPjwvcD5cbjxycC1kcm9wZG93biBjaG9pY2VzPSdbXCJQZW9wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIk9yZ2FuaXphdGlvbnNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJXb3Jrc1wifV0nXG4gICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX1cIj5cbjwvcnAtZHJvcGRvd24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVyb1wiPlxuPGgyPkhlcm8gSW1hZ2U8L2gyPlxuPHA+SGVybyBpbWFnZSB3aWxsIHJhbmRvbWx5IHB1bGwgYSBiYWNrZ3JvdW5kLXBob3RvIGZyb20gdGhlIHBhdGggZGVjbGFyZWQgaW4gPGNvZGU+YXNzZXQtZm9sZGVyPC9jb2RlPiBhdHRyaWJ1dGUuXG5SdW5uaW5nIDxjb2RlPmVsZS5zaHVmZmxlKCk8L2NvZGU+IHdpbGwgbG9hZCBhIG5ldyBpbWFnZS5cbkhvd2V2ZXIsIHNwZWNpZnlpbmcgYSA8Y29kZT5zcmM8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIHRoZSByYW5kb20gYXNzZXQgcHVsbCBmdW5jdGlvbmFsaXR5IGFuZCBqdXN0IGxvYWQgdGhlIHNyYyBiZyBwaG90by5cblRoZXJlIGFyZSB0aHJlZSBzbG90cyB0byBwb3B1bGF0ZSB0aGUgaGVybyBjb250ZW50IC0gXCJ0b3BcIiwgXCJtYWluXCIsIGFuZCBcImJvdHRvbVwiLlxuPHA+XG48L3NlY3Rpb24+XG48cnAtaGVyby1pbWFnZT5cbiAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZyBpcy1saW5rIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjVweDtcIj48L3JwLWljb24+XG4gICAgPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuICA8L2Rpdj5cbiAgPGRpdiBzbG90PVwibWFpblwiIGNsYXNzPVwiaGVyb21haW5cIj5cbiAgICA8cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuICAgIDxoMiBjbGFzcz1cIm5hbWUgdGV4dC1zZWNvbmRhcnkgaDEgYm9sZCBtYi0wIHRleHQtY2VudGVyXCI+QnJhbnRsZXksIFBldGVyPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgaDMgbWItMiBtdC0xIHRleHQtY2VudGVyXCI+RGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5PC9wPlxuICAgIDxwIGNsYXNzPVwiYm9sZCB0ZXh0LWxpZ2h0IGgzIG10LTEgbWItMCB0ZXh0LWNlbnRlclwiPk15IHJlc2VhcmNoIGFyZWFzIGluY2x1ZGU6IDwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICA8cnAtYmFkZ2U+Rm9vYmFyPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5TdHVmZjwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+VGhpbmdzPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5XaWRnZXRzPC9ycC1iYWRnZT5cbiAgICAgIDwvcD5cbiAgICA8ZGl2PjwvZGl2PlxuICA8L2Rpdj5cbjwvcnAtaGVyby1pbWFnZT5cblxuPHNlY3Rpb24+XG48aDI+SWNvbnM8L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB5b3VyIGljb24uIFVzZSB0aGUgcHJlZml4IFwiaXJvbi1cIiB0byBjYWxsIGFuIGlyb24gaWNvbjo8L3A+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWFycm93LWZvcndhcmRcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHA+VGhlIDxjb2RlPnRoZW1lLWNvbG9yPC9jb2RlPiBhdHRyaWJ1dGUgd2lsbCBhZGp1c3QgdGhlIGNvbG9yLCA8Y29kZT5pcy1saW5rPC9jb2RlPiB3aWxsIGFwcGx5IGxpbmsgc3R5bGVzLCBhbmQgPGNvZGU+c2l6ZTwvY29kZT4gd2lsbCBjaGFuZ2UgdGhlIHNpemU8cD5cbjxycC1pY29uIGljb249XCJpcm9uLWZhY2VcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHA+UHJlZmFjZSB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHdpdGggXCJycC1cIiB0byB1c2Ugb25lIG9mIHRoZSBjdXN0b20gaWNvbnM8L3A+XG48cnAtaWNvbiBpY29uPVwicnAtc2VhcmNoXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Q8L2gyPlxuPHA+RGlzcGxheXMgYSBsaXN0IG9mIFwibGlua3NcIi4gQXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgYWN0aXZlIGxpbmsgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGluaz1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJsaW5rbGlzdDFcIj5cbiAgPHJwLWxpbmstbGlzdCBsaW5rcz0nW1wiSGVsbG8gV29ybGRcIiwgXCJIZWxsbyBBZ2FpbiFcIiwgXCJBbmQgT25lIE1vcmUgVGltZVwiXSdcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuXG48cD5Td2l0Y2ggdG8gaG9yaXpvbnRhbCB2aWV3IGJ5IHVzaW5nIDxjb2RlPmRpcmVjdGlvbj1oPC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJzdWJuYXZcIj5cbiAgPHJwLWxpbmstbGlzdCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIlxuICAgICAgICAgICAgICAgIGxpbmtzPSdbe1widGV4dFwiOiBcIkFsbCBJbmZvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkFib3V0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlB1YmxpY2F0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXNlYXJjaFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb250YWN0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRpc2FibGVkIExpbmtcIiwgXCJkaXNhYmxlZFwiOiB0cnVlfSBdJz5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TGluayBMaXN0IHdpdGggQ291bnRzPC9oMj5cbjxwPkxpbmsgbGlzdCB0aGF0IHdpbGwgcHJlcGVuZCBjb3VudHMuIExpc3RlbiB3aXRoIDxjb2RlPkBsaW5rLWNsaWNrPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5DbGlja2VkbGluayl9XCI8L2NvZGU+PC9wPlxuPHA+VXNlIHRoZSA8Y29kZT52aWV3LWFsbC1saW5rczwvY29kZT4gYW5kIDxjb2RlPmhlYWRlcjwvY29kZT4gYXR0cmlidXRlcyB0byBlbmFibGUgdGhlc2UgZGlzcGxheXM6PC9wPlxuPHJwLWxpbmstbGlzdC1jb3VudHMgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgQXJ0aWNsZXNcIiwgXCJjb3VudFwiOiAzMDgwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkJvb2tzXCIsIFwiY291bnRcIjogOH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDaGFwdGVyc1wiLCBcImNvdW50XCI6IDUyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbmZlcmVuY2UgUGFwZXJzXCIsIFwiY291bnRcIjogNDUxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRhdGFzZXRzXCIsIFwiY291bnRcIjogNzB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSm91cm5hbHNcIiwgXCJjb3VudFwiOiA5NjB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVwb3J0c1wiLCBcImNvdW50XCI6IDR9XSdcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3LWFsbC1saW5rPSd7XCJ0ZXh0XCI6IFwiVmlldyBBbGwgV29ya3NcIn0nXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPSd7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgV29ya3NcIiwgXCJjb3VudFwiOiA4NDEzfSdcbiAgICAgICAgICAgICAgICAgICAgICBAbGluay1jbGljaz1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbjwvcnAtbGluay1saXN0LWNvdW50cz5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGFnaW5hdGlvbjwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBwYWdlIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLXBhZ2U9XFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PC9jb2RlPjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTggQGNoYW5nZWQtcGFnZT0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PjwvcnAtcGFnaW5hdGlvbj5cbjxwPlVzZSB0aGUgPGNvZGU+bWF4LXBhZ2U8L2NvZGU+LCA8Y29kZT5taW4tcGFnZTwvY29kZT4sIGFuZCA8Y29kZT5jdXJyZW50LXBhZ2U8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gY29udHJvbCB0aGUgZGlzcGxheS48L3A+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0xNSBjdXJyZW50LXBhZ2U9XCI3XCI+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5wYWdlcy1wZXItc2lkZTwvY29kZT4gYXR0cmlidXRlIHRvIHNob3cgbW9yZSBwYWdlcyBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgY3VycmVudCBwYWdlPHA+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0yMCBjdXJyZW50LXBhZ2U9MTAgcGFnZXMtcGVyLXNpZGU9Mz48L3JwLXBhZ2luYXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlBlcnNvbiBQcmV2aWV3PC9oMj5cbjxwPllvdSBjYW4gYXJyYW5nZSB0aGVtIGhvdyB5b3Ugc2VlIGZpdC48L3A+PHA+VmVydGljYWxseSwgbGlrZSBpbiBzZWFyY2gvYnJvd3NlIHBhZ2U6PC9wPlxuPGRpdiBjbGFzcz1cInBlb3BsZS12ZXJ0aWNhbFwiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgdGl0bGU9XCJEaWdpdGFsIEFwcGxpY2F0aW9ucyBNYW5hZ2VyXCJcbiAgICBiYWRnZXM9J1tcImZvby1iYXJcIl0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJQZXRlciBCcmFudGx5XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiXG4gICAgYmFkZ2VzPSdbe1widGV4dFwiIDogXCJJbSBhIGxpbmshXCIsIFwiaHJlZlwiIDogXCJodHRwczovL2dvb2dsZS5jb21cIn1dJz5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiTWFuIG9mIE15c3RlcnlcIlxuICAgIHRpdGxlPVwiSGFzIG5vIGF2YXRhci1zcmMgb3IgaHJlZiBhdHRyaWJ1dGVzXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbjwvZGl2PlxuPHA+b3IgaW4gY29sdW1ucyBsaWtlIG9uIHRoZSBob21lcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLWNvbHVtbnNcIj5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlF1aW5uIEhhcnRcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcXVpbm4taGFydC9cIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiSnVzdGluIE1lcnpcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2hlYWRzaG90X2Nyb3BwZWQtMjgweDM1MC1jLWNlbnRlci5wbmdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvanVzdGluLW1lcnovXCJcbiAgICB0aXRsZT1cIlJlc2VhcmNoIFN1cHBvcnQgRW5naW5lZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIktpbW15IEhlc2NvY2tcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3L0tpbW15MjAxOC0wMS0wMDEtMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3Iva2ltbXktaGVzY29jay9cIlxuICAgIHRpdGxlPVwiVXNlciBFeHBlcmllbmNlIERlc2lnbmVyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG48L2Rpdj5cbjxwPkJlY2F1c2Ugb2YgdGhlIGdlbmVyYWwgYXdmdWxsbmVzcyBvZiB0aGUgY3NzIG92ZXJmbG93IHByb3BlcnRpZXMsIHlvdSBoYXZlIHRvIHNldCB0aGUgdGV4dFdpZHRoIHByb3BlcnR5IGluIGEgcmVzaXplIGV2ZW50LjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UXVpY2sgU2VhcmNoPC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG5cbjxwPlVzZSA8Y29kZT5pbnB1dC12YWx1ZTwvY29kZT4gYW5kIDxjb2RlPm9wZW5lZDwvY29kZT4gYXR0cmlidXRlcyB0byBjaGFuZ2UgaW5pdGlhbCByZW5kZXIgc3RhdGUuPC9wPlxuPGRpdiBjbGFzcz1cInF1aWNrLXNlYXJjaC1jb250YWluZXJcIj5cbjxycC1xdWljay1zZWFyY2ggaW5wdXQtdmFsdWU9XCJBIHByZS1sb2FkZWQgc2VhcmNoXCIgb3BlbmVkPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPk1haW4gU2VhcmNoIFdpZGdldDwvaDI+XG48cD4gVXNlIDxjb2RlPkBuZXctc2VhcmNoPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwic2VhcmNoLWJsdWVcIj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICA8cnAtc2VhcmNoIHN0eWxlPVwid2lkdGg6NzUlXCIgQG5ldy1zZWFyY2g9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPjwvcnAtc2VhcmNoPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgxPlZpZXcgQWxsPC9oMT5cbjxwPkRlYWQgc2ltcGxlIGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBhIFZpZXcgQWxsIGxpbmsuIFVzZSB0aGUgPGNvZGU+dGV4dDwvY29kZT4gYXR0cmlidXRlIHRvIGN1c3RvbWl6ZSwgYW5kIDxjb2RlPmp1c3RpZnk8L2NvZGU+IHRvIGNvbnRyb2wgaG9yaXpvbnRhbCBhbGlnbm1lbnQuPC9wPlxuPHJwLXZpZXctYWxsIGp1c3RpZnk9XCJzdGFydFwiPjwvcnAtdmlldy1hbGw+XG48cnAtdmlldy1hbGwgdGV4dD1cIlZpZXcgQWxsIFBlb3BsZVwiPjwvcnAtdmlldy1hbGw+XG48L3NlY3Rpb24+XG5gO31cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtcGVvcGxlLnRwbC5qc1wiXG5cbmltcG9ydCBScFV0aWxzQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VQZW9wbGUgZXh0ZW5kcyBNaXhpbihScFV0aWxzQ29sbGVjdGlvbilcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzRGVmYXVsdDoge3R5cGU6IE9iamVjdH0sXG4gICAgICBzb3J0RGVmYXVsdDoge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YToge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFNYXg6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBwZW9wbGVXaWR0aDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuZmlsdGVyc0RlZmF1bHQgPSB7XCJAdHlwZVwiOiB7XCJ0eXBlXCI6IFwia2V5d29yZFwiLCBcIm9wXCI6IFwiYW5kXCIsIFwidmFsdWVcIjogW0FQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0ICsgXCI6cGVyc29uXCJdfX07XG4gICAgdGhpcy5zb3J0RGVmYXVsdCA9IFt7XCJsYWJlbFwiOiBcImFzY1wifV07XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGF3YWl0IHRoaXMuX2RvUXVlcnkoKTtcbiAgfVxuXG4gIGFzeW5jIF9kb1F1ZXJ5KCkge1xuICAgIGxldCBxID0gdGhpcy5fcGFyc2VVcmxRdWVyeSgpO1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnNEZWZhdWx0O1xuICAgIH1cbiAgICBpZiAoIXEuc29ydCkge1xuICAgICAgcS5zb3J0ID0gdGhpcy5zb3J0RGVmYXVsdDtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG5cbiAgfVxuXG4gIF9oYW5kbGVSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgodyk7XG4gIH1cblxuXG4gIHNldFBlb3BsZVdpZHRoKHcpIHtcbiAgICBsZXQgcHcgPSAyNTA7XG4gICAgbGV0IGF2YXRhcldpZHRoID0gODI7XG4gICAgbGV0IHNjcmVlblBhZGRpbmcgPSAzMDtcbiAgICBwdyA9ICh3IC0gc2NyZWVuUGFkZGluZykgKiAuNyAtIGF2YXRhcldpZHRoIC0gNDA7XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IE1hdGguZmxvb3IocHcpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLXBlb3BsZScsIFJwUGFnZVBlb3BsZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29sbGVjdGlvbnMgY29udGFpbmVyIGJnLWxpZ2h0IHRvcFwiPlxuICAke3RoaXMuX3JlbmRlckJyb3dzZUhlYWRlcignUGVvcGxlJyl9XG4gIDxociBjbGFzcz1cIm1iLTBcIj5cbiAgPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHBlb3BsZS48L3JwLWFsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdlcnJvcicgfVwiPlxuICAgICAgICAke3RoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRQZW9wbGUodGhpcy5kYXRhKS5tYXAocGVyc29uID0+IGh0bWxgXG4gICAgICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgICAgICBuYW1lPVwiJHtwZXJzb24ubmFtZX1cIlxuICAgICAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICAgICAgdGV4dC13aWR0aD1cIiR7dGhpcy5wZW9wbGVXaWR0aH1cIlxuICAgICAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgICAgICA8aHIgY2xhc3M9XCJkb3R0ZWRcIj5cbiAgICAgICAgICBgKX1cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJQYWdpbmF0aW9uKHRoaXMuZGF0YVRvdGFsKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj5cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwVXRpbHNDb2xsZWN0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNBejoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgaGFzUGFnaW5hdGlvbjoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgYXpTZWxlY3RlZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBhekRpc2FibGVkOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcGdQZXI6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFzQXogPSBmYWxzZTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmF6U2VsZWN0ZWQgPSAnQWxsJztcbiAgICB0aGlzLmF6RGlzYWJsZWQgPSBbXTtcbiAgICB0aGlzLnBnUGVyID0gODtcbiAgICB0aGlzLnVybFF1ZXJ5ID0ge307XG4gIH1cblxuICBfb25Vc2VyQWN0aW9uKGFjdGlvbikge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gIH1cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIil9PjwvcnAtYS16PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldChmYWNldElkLCBsaW5rcykge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1saW5rLWxpc3QgaGFzLWhlYWRlci1saW5rXG4gICAgICAgICAgICAgICAgICBsaW5rcz0ke2xpbmtzfT5cbiAgICA8L3JwLWxpbmstbGlzdD5cbiAgICBgXG4gIH1cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cyB8fCAhdGhpcy51cmxRdWVyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KTtcbiAgICBsZXQgY3VycmVudFBhZ2UgPSBNYXRoLmNlaWwoKHRoaXMudXJsUXVlcnkub2Zmc2V0ICsgMSkgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KVxuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1wYWdpbmF0aW9uIG1heC1wYWdlPVwiJHttYXhQYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgY3VycmVudC1wYWdlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIpfVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zXCJcbiAgICA+PC9ycC1wYWdpbmF0aW9uPlxuICAgIGBcbiAgfVxuXG4gIF9wYXJzZVVybFF1ZXJ5KCl7XG4gICAgLy8gcmVhZCB1cmwgYXJncywgY29uc3RydWN0IHNlYXJjaCBxdWVyeVxuICAgIGxldCBxID0ge307XG4gICAgaWYgKCFxLmxpbWl0KSB7XG4gICAgICBxLmxpbWl0ID0gdGhpcy5wZ1BlcjtcbiAgICB9XG4gICAgaWYgKCFxLm9mZnNldCkge1xuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnVybFF1ZXJ5ID0gcTtcbiAgICByZXR1cm4gcTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdXRpbHMtY29sbGVjdGlvbicsIFJwVXRpbHNDb2xsZWN0aW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=