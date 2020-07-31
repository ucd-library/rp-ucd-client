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
      justify-content: center;
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

/***/ "./public/elements/components/alert.js":
/*!*********************************************!*\
  !*** ./public/elements/components/alert.js ***!
  \*********************************************/
/*! exports provided: RpAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAlert", function() { return RpAlert; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.tpl.js */ "./public/elements/components/alert.tpl.js");



class RpAlert extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    themeColor: {type: String, attribute: 'theme-color'}
  };
  }

  constructor() {
    super();
    this.render = _alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.themeColor = 'danger';
  }

  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

}

customElements.define('rp-alert', RpAlert);


/***/ }),

/***/ "./public/elements/components/alert.tpl.js":
/*!*************************************************!*\
  !*** ./public/elements/components/alert.tpl.js ***!
  \*************************************************/
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
    }
    .container {
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: var(--font-size-small);
    }
    .container.danger {
      background-color: var(--tcolor-light);
      border-width: 1px;
      border-style: solid;
      border-color: var(--tcolor-danger);
      color: var(--tcolor-danger);
    }
    .container iron-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-right: 8px;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/avatar.js":
/*!**********************************************!*\
  !*** ./public/elements/components/avatar.js ***!
  \**********************************************/
/*! exports provided: RpAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAvatar", function() { return RpAvatar; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _avatar_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.tpl.js */ "./public/elements/components/avatar.tpl.js");



class RpAvatar extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    size: {type: String},
    src: {type: String}
  };
  }

  constructor() {
    super();
    this.render = _avatar_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }

  constructClasses() {
    let classes = {};

    if (this.size && this.size != 'undefined') {
      classes['size-' + this.size] = true;
    }
    if (this.src && this.src != 'undefined') {
      classes['photo'] = true;
    }

    return classes;
  }

  constructStyles() {
    let styles = {};

    if (this.src && this.src != 'undefined') {
      styles['background-image'] = `url(${this.src})`;
    }
    return styles;
  }

  renderFace() {
    if (!this.src || this.src == 'undefined') {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<iron-icon icon='face'></iron-icon>`;
    }
  }
}

customElements.define('rp-avatar', RpAvatar);


/***/ }),

/***/ "./public/elements/components/avatar.tpl.js":
/*!**************************************************!*\
  !*** ./public/elements/components/avatar.tpl.js ***!
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
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .circle {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle.size-lg {
      height: 150px;
      width: 150px;
    }
    .circle.size-sm {
      height: 60px;
      width: 60px;
    }
    .photo {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
  <div class="circle ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/badge.js":
/*!*********************************************!*\
  !*** ./public/elements/components/badge.js ***!
  \*********************************************/
/*! exports provided: RpBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpBadge", function() { return RpBadge; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _badge_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.tpl.js */ "./public/elements/components/badge.tpl.js");




class RpBadge extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    size: {type: String},
    href: {type: String},
    colorSequence: {type: Number,
                    attribute: 'color-sequence'},
  };
  }

  constructor() {
    super();
    this.maxColor = 6;
    this.render = _badge_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this);
  }

  constructClasses() {
    let classes = {};

    if (this.size) {
      classes['size-' + this.size] = true;
    }

    if (this.colorSequence) {
      let n = Math.floor(this.colorSequence);
      classes['color-' + n.toString()] = true;
    }
    else {
      let siblings = [...this.parentNode.childNodes].filter(n => n.tagName === this.tagName);
      if (siblings.length > 0) {
        let n = siblings.indexOf(this) % this.maxColor;
        classes['color-' + n.toString()] = true;

      }
      else {
        classes['color-0'] = true;
      }

    }

    return classes
  }

  _renderBadge() {
    if (this.href) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a href=${this.href}>${this._renderSpan()}</a>`;
    }
    else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderSpan()}`;
    }
  }

  _renderSpan() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}>
      <slot></slot>
    </span>`;
  }

}
customElements.define('rp-badge', RpBadge);


/***/ }),

/***/ "./public/elements/components/badge.tpl.js":
/*!*************************************************!*\
  !*** ./public/elements/components/badge.tpl.js ***!
  \*************************************************/
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
    display: inline-block;
  }
  span {
    display: inline-block;
    border: 2px solid;
    border-radius: 1em;
    padding: .3em .7em;
    line-height: 1;
    border-color: var(--tcolor-accent0);
    transition: 0.3s;
  }
  span.size-lg {
    padding: .55em .9em;
  }
  a:hover span {
      background-color: var(--tcolor-hover-bg);
      color:  var(--tcolor-hover-text);
      border-color: var(--tcolor-hover-bg);
  }
  span.color-0 {
    border-color: var(--tcolor-accent0);
  }
  span.color-1 {
    border-color: var(--tcolor-accent1);
  }
  span.color-2 {
    border-color: var(--tcolor-accent2);
  }
  span.color-3 {
    border-color: var(--tcolor-accent3);
  }
  span.color-4 {
    border-color: var(--tcolor-accent4);
  }
  span.color-5 {
    border-color: var(--tcolor-accent5);
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: var(--tcolor-text);
  }
  a:visited {
    color: var(--tcolor-text);
  }
  a:hover {
    color: var(--tcolor-text);
  }
  a:active {
    color: var(--tcolor-text);
  }

</style>
  ${this._renderBadge()}
`;}


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

/***/ "./public/elements/components/dropdown.js":
/*!************************************************!*\
  !*** ./public/elements/components/dropdown.js ***!
  \************************************************/
/*! exports provided: RpDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpDropdown", function() { return RpDropdown; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_iron_dropdown_iron_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-dropdown/iron-dropdown */ "./public/node_modules/@polymer/iron-dropdown/iron-dropdown.js");
/* harmony import */ var _dropdown_tpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.tpl.js */ "./public/elements/components/dropdown.tpl.js");




class RpDropdown extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    themeColor: {type: String, attribute: 'theme-color'},
    choices: {type: Array},
    chosen: {type: parseInt, reflect: true},
    opened: {type: Boolean}
  };
  }

  constructor() {
    super();
    this.render = _dropdown_tpl_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this);
    this.chosen = 0;
    this.choices = [];
    this.themeColor = "outline-primary";
    this.opened = false;

    this._newSelection = new CustomEvent('new-selection', {
      detail: {
        message: 'A new selection.'
      }
    });
  }

  firstUpdated(changedProperties) {
    this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
    (e) => {this.opened = e.target.opened});
  }



  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;
    classes.opened = this.opened;
    if (this._parseChoices().length === 0) {
      classes.hidden = true;
    }

    return classes;
  }
  _renderChoices(choice) {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<li index="${choice.index}"
                    ?selected="${choice.index == this.chosen}"
                    @click="${this._handleClick}">${choice.text}</li>`;
  }

  _handleClick(e){
    let i = e.target.getAttribute('index');
    if (i == this.chosen) {
      return;
    }
    this.chosen = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(this._newSelection);
  }

  _parseChoices(){
    let choices = [];
    let i = 0;
    for (let c of this.choices) {
      if (typeof c === 'string') {
        choices.push({index: i, text: c});
      }
      else if (typeof c === 'object') {
        if (c.text) {
          choices.push({index: i, text: c.text});
        }
      }
      i += 1;
    }
    return choices;
  }

  openDropdown(){
    this.opened = true;
    this.shadowRoot.getElementById('dropdown').open()
  }

}

customElements.define('rp-dropdown', RpDropdown);


/***/ }),

/***/ "./public/elements/components/dropdown.tpl.js":
/*!****************************************************!*\
  !*** ./public/elements/components/dropdown.tpl.js ***!
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
      display: inline-block;
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--font-size-small);
    }
    #button {
      cursor: pointer;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      height: 44px;
      padding-left: 15px;
      padding-right: 10px;
    }
    #input::placeholder {
      color: var(--tcolor-placeholder-text);
    }
    .container.outline-primary {
      color: var(--tcolor-primary70);
      background-color: var(--tcolor-light);
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 3px 0 0 0;
    }
    li {
      cursor: pointer;
      padding: 5px 10px 5px 15px;
    }
    li[selected] {
      pointer-events: none;
      cursor: auto;
      font-weight: var(--font-weight-bold);
    }
    iron-icon {
      margin-top: 2px;
    }
    .container.outline-primary li:hover {
      background-color: var(--tcolor-primary10);
    }
    .container.outline-primary ul {
      border-style: solid;
      border-width: 1px;
      border-color: var(--tcolor-primary70);
    }
    .container.outline-primary ul {
      background-color: var(--tcolor-light);
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._constructClasses())}">
   <div id="button"
        @click="${this.openDropdown}">
        <span id="button-text">${this._parseChoices()[this.chosen].text}</span>
        <iron-icon icon="hardware:keyboard-arrow-down"></iron-icon>
   </div>
    <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top">
      <ul slot="dropdown-content">${this._parseChoices().map(choice => this._renderChoices(choice))}</ul>
    </iron-dropdown>
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

/***/ "./public/elements/components/person-preview.js":
/*!******************************************************!*\
  !*** ./public/elements/components/person-preview.js ***!
  \******************************************************/
/*! exports provided: RpPersonPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpPersonPreview", function() { return RpPersonPreview; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _person_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-preview.tpl.js */ "./public/elements/components/person-preview.tpl.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge */ "./public/elements/components/badge.js");





class RpPersonPreview extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    name: {type: String},
    href: {type: String},
    title: {type: String},
    badges: {type: Array},
    avatarSize: {type: String, attribute: 'avatar-size'},
    avatarSrc: {type: String, attribute: 'avatar-src'},
    textWidth: {type: String, attribute: 'text-width'}
  };
  }

  constructor() {
    super();
    this.render = _person_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.badges = [];
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
  }

  _renderBadge(badge) {
    if (typeof badge === 'string') {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<rp-badge>${badge}</rp-badge>`;
    }
    else if (typeof badge === 'object'){
      let t = badge.text;
      if (!t) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
      }
      let href = badge.href;
      if (href) {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<rp-badge href="${href}">${t}</rp-badge>`;
      }
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<rp-badge>${t}</rp-badge>`;
    }
    else {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
  }
}

customElements.define('rp-person-preview', RpPersonPreview);


/***/ }),

/***/ "./public/elements/components/person-preview.tpl.js":
/*!**********************************************************!*\
  !*** ./public/elements/components/person-preview.tpl.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar */ "./public/elements/components/avatar.js");




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
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .name {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
    .name:hover {
      color : var(--tcolor-link-hover-text);
    }
    .name[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    .name[disabled]:hover {
      color : var(--tcolor-link-text);
    }
    small {
      font-size : var(--font-size-small);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      line-height: 1.4;
    }
    small.badges {
      margin-top: 5px;
    }
  </style>
  <div class=container>
    <rp-avatar size="${this.avatarSize}" src="${this.avatarSrc}"></rp-avatar>
    <div class="text-container" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_1__["styleMap"])({"max-width" : this.textWidth})}">
      <a class="name" href="${this.href}" ?disabled="${!this.href}">${this.name}</a>
      <small>${this.title}</small>
      <small class="badges">${this.badges.map(b => this._renderBadge(b))}</small>
    </div>
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
    justify: {type: String}
  };
  }

  constructor() {
    super();
    this.render = _view_all_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.text = "View All"
  }

  constructClasses() {
    let classes = {};
    if (this.justify) {
      classes[this.justify] = true;
    }
    return classes;
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
    .container:hover iron-icon{
      color: var(--tcolor-link-hover-text) !important;
    }
    iron-icon {
      color: var(--tcolor-secondary);
      transition: .3s;
      width: 28px;
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
    <div class="view-all"><span class="text">${this.text}</span><iron-icon icon="av:play-arrow"></iron-icon></div>
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
/* harmony import */ var _components_a_z__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/a-z */ "./public/elements/components/a-z.js");






class RpPagePeople extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {

    }
  }

  constructor() {
    super();
    this.render = _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
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
  .container {
    padding: 40px 40px 0 40px;
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>
<div class="container bg-light top">
  <div class="header flex align-items-center">
    <div class="col-facets">
      <h1>People</h1>
    </div>
    <div class="col-main">
      <rp-a-z></rp-a-z>
    </div>
  </div>
  <hr>
  <div class="body">
    <div class="col-facets"></div>
    <div class="col-main"></div>
  </div>

</div>
`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hLXouanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYS16LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9kcm9wZG93bi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvY29tcG9uZW50cy9hcHAtY29tcG9uZW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3Blb3BsZS9ycC1wYWdlLXBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDYjs7QUFFM0IsbUJBQW1CLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQSxjQUFjLHFDQUFxQztBQUNuRCxxQkFBcUIsMERBQTBEO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtREFBTTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUksZ0JBQWdCLGlCQUFpQjtBQUNoRCxxQ0FBcUMsU0FBUztBQUM5QywrQkFBK0IsT0FBTyxJQUFJLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBbUM7QUFDcEI7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUDs7QUFFakMsMEJBQTBCLHNEQUFVO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtB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ZmlsZSI6InBhZ2UtY29tcG9uZW50cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Etei50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBWiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgaGlkZUFsbDoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2hpZGUtYWxsJ30sXG4gICAgc2VsZWN0ZWRMZXR0ZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3NlbGVjdGVkLWxldHRlcicsIHJlZmxlY3Q6IHRydWV9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hemxpc3QgPSBbLi4uJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJ107XG4gICAgdGhpcy5fY2hhbmdlZExldHRlciA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1sZXR0ZXInLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGxldHRlciBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfcmVuZGVyQXoobGV0dGVyKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gXCJcIjtcbiAgICBpZiAodGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRMZXR0ZXIudG9Mb3dlckNhc2UoKSA9PT0gbGV0dGVyLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGV0dGVyICR7c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgIGxldHRlcj1cIiR7bGV0dGVyfVwiPiR7bGV0dGVyfTwvZGl2PmBcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19sZXR0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xldHRlcicpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5ld19sZXR0ZXIgIT0gdGhpcy5zZWxlY3RlZExldHRlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZExldHRlciA9IG5ld19sZXR0ZXI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExldHRlcik7XG4gICAgfVxuICB9XG5cbiAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCF0aGlzLmhpZGVBbGwpIHtcbiAgICAgIHRoaXMuYXpsaXN0LnVuc2hpZnQoJ0FsbCcpO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYS16JywgUnBBWik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAubGV0dGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLXdpZHRoOiAyMnB4O1xuICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5sZXR0ZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGV0dGVyLnNlbGVjdGVkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLmxldHRlci5zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgLmxldHRlci5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgJHt0aGlzLmF6bGlzdC5tYXAobGV0dGVyID0+IHRoaXMuX3JlbmRlckF6KGxldHRlcikpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYWNjb3JkaWFuLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEFjY29yZGlhbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGV4cGFuZGVkOiB7dHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICB0b2dnbGUoKXtcbiAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hY2NvcmRpYW4nLCBScEFjY29yZGlhbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgW2hpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgfVxuICAgIGlyb24taWNvbltyb3RhdGVkXSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIH1cbiAgICAjY29udGFpbmVyLXRpdGxlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgICN0aXRsZTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgICN0aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgfVxuICAgICNjb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiID9oaWRkZW49XCIkeyF0aGlzLnRpdGxlfVwiPlxuICAgIDxkaXYgaWQ9XCJjb250YWluZXItdGl0bGVcIiBAY2xpY2s9XCIke3RoaXMudG9nZ2xlfVwiPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiYXJyb3ctZHJvcC1kb3duXCIgP3JvdGF0ZWQ9XCIkeyF0aGlzLmV4cGFuZGVkfVwiPjwvaXJvbi1pY29uPlxuICAgICAgPHNwYW4gaWQ9XCJ0aXRsZVwiPiR7dGhpcy50aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIiA/aGlkZGVuPVwiJHshdGhpcy5leHBhbmRlZH1cIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FsZXJ0LnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEFsZXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aGVtZUNvbG9yID0gJ2Rhbmdlcic7XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbdGhpcy50aGVtZUNvbG9yXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWxlcnQnLCBScEFsZXJ0KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmRhbmdlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciBpcm9uLWljb24ge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hdmF0YXIudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQXZhdGFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplICYmIHRoaXMuc2l6ZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1sncGhvdG8nXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHJlbmRlckZhY2UoKSB7XG4gICAgaWYgKCF0aGlzLnNyYyB8fCB0aGlzLnNyYyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGh0bWxgPGlyb24taWNvbiBpY29uPSdmYWNlJz48L2lyb24taWNvbj5gO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWF2YXRhcicsIFJwQXZhdGFyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1sZyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAuY2lyY2xlLnNpemUtc20ge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICAgIC5waG90byB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjaXJjbGUgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICR7dGhpcy5yZW5kZXJGYWNlKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2JhZGdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICBjb2xvclNlcXVlbmNlOiB7dHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdjb2xvci1zZXF1ZW5jZSd9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1heENvbG9yID0gNjtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sb3JTZXF1ZW5jZSkge1xuICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKHRoaXMuY29sb3JTZXF1ZW5jZSk7XG4gICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHNpYmxpbmdzID0gWy4uLnRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzXS5maWx0ZXIobiA9PiBuLnRhZ05hbWUgPT09IHRoaXMudGFnTmFtZSk7XG4gICAgICBpZiAoc2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbiA9IHNpYmxpbmdzLmluZGV4T2YodGhpcykgJSB0aGlzLm1heENvbG9yO1xuICAgICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGFzc2VzWydjb2xvci0wJ10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxuXG4gIF9yZW5kZXJCYWRnZSgpIHtcbiAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICByZXR1cm4gaHRtbGA8YSBocmVmPSR7dGhpcy5ocmVmfT4ke3RoaXMuX3JlbmRlclNwYW4oKX08L2E+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGAke3RoaXMuX3JlbmRlclNwYW4oKX1gO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJTcGFuKCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+YDtcbiAgfVxuXG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWJhZGdlJywgUnBCYWRnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gLjdlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIHNwYW4uc2l6ZS1sZyB7XG4gICAgcGFkZGluZzogLjU1ZW0gLjllbTtcbiAgfVxuICBhOmhvdmVyIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgICAgIGNvbG9yOiAgdmFyKC0tdGNvbG9yLWhvdmVyLXRleHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICB9XG4gIHNwYW4uY29sb3ItMCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MCk7XG4gIH1cbiAgc3Bhbi5jb2xvci0xIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQxKTtcbiAgfVxuICBzcGFuLmNvbG9yLTIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDIpO1xuICB9XG4gIHNwYW4uY29sb3ItMyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Myk7XG4gIH1cbiAgc3Bhbi5jb2xvci00IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQ0KTtcbiAgfVxuICBzcGFuLmNvbG9yLTUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDUpO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBhOmxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cblxuPC9zdHlsZT5cbiAgJHt0aGlzLl9yZW5kZXJCYWRnZSgpfVxuYDt9XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2NpdGF0aW9uLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScENpdGF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgam91cm5hbDoge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgcGFnZXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGNpdGF0aW9uU3R5bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NpdGF0aW9uLXN0eWxlJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNpdGF0aW9uU3R5bGUgPSBcImFydGljbGVcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpe1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJDaXRhdGlvbiB3YXMgY2xpY2tlZDogXCIsIHRoaXMuaHJlZik7XG4gIH1cblxuICBfZm9ybWF0Q29tcG9uZW50KGNvbXBvbmVudCwgY29tcG9uZW50X3R5cGUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnRfdHlwZSA9PSAndGl0bGUnKSB7XG4gICAgICBjb21wb25lbnQgKz0gXCIuXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXBvbmVudF90eXBlID09ICdqb3VybmFsJykge1xuICAgICAgY29tcG9uZW50ICs9IFwiLlwiO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtY2l0YXRpb24nLCBScENpdGF0aW9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICAjdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAjdGl0bGVbZGlzYWJsZWRdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgI3RpdGxlW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIH1cbiAgICAjdGl0bGU6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy50aXRsZX1cIj5cbiAgICA8c3BhbiBpZD1cInRpdGxlXCIgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiID9kaXNhYmxlZD1cIiR7IXRoaXMuaHJlZn1cIj4ke3RoaXMuX2Zvcm1hdENvbXBvbmVudCh0aGlzLnRpdGxlLCAndGl0bGUnKX08L3NwYW4+XG4gICAgPHNwYW4gaWQ9XCJqb3VybmFsXCI+JHt0aGlzLl9mb3JtYXRDb21wb25lbnQodGhpcy5qb3VybmFsLCAnam91cm5hbCcpfTwvc3Bhbj5cbiAgICA8c3BhbiBpZD1cInBhZ2VzXCI+JHt0aGlzLl9mb3JtYXRDb21wb25lbnQodGhpcy5wYWdlcywgJ3BhZ2VzJyl9PC9zcGFuPlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWRyb3Bkb3duL2lyb24tZHJvcGRvd25cIlxuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Ryb3Bkb3duLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScERyb3Bkb3duIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9LFxuICAgIGNob2ljZXM6IHt0eXBlOiBBcnJheX0sXG4gICAgY2hvc2VuOiB7dHlwZTogcGFyc2VJbnQsIHJlZmxlY3Q6IHRydWV9LFxuICAgIG9wZW5lZDoge3R5cGU6IEJvb2xlYW59XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9zZW4gPSAwO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuICAgIHRoaXMudGhlbWVDb2xvciA9IFwib3V0bGluZS1wcmltYXJ5XCI7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX25ld1NlbGVjdGlvbiA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlbGVjdGlvbicsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VsZWN0aW9uLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5hZGRFdmVudExpc3RlbmVyKCdvcGVuZWQtY2hhbmdlZCcsXG4gICAgKGUpID0+IHt0aGlzLm9wZW5lZCA9IGUudGFyZ2V0Lm9wZW5lZH0pO1xuICB9XG5cblxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1t0aGlzLnRoZW1lQ29sb3JdID0gdHJ1ZTtcbiAgICBjbGFzc2VzLm9wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGlmICh0aGlzLl9wYXJzZUNob2ljZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNsYXNzZXMuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuICBfcmVuZGVyQ2hvaWNlcyhjaG9pY2UpIHtcbiAgICByZXR1cm4gaHRtbGA8bGkgaW5kZXg9XCIke2Nob2ljZS5pbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICA/c2VsZWN0ZWQ9XCIke2Nob2ljZS5pbmRleCA9PSB0aGlzLmNob3Nlbn1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUNsaWNrfVwiPiR7Y2hvaWNlLnRleHR9PC9saT5gO1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGUpe1xuICAgIGxldCBpID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgIGlmIChpID09IHRoaXMuY2hvc2VuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hvc2VuID0gaTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykuY2xvc2UoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VsZWN0aW9uKTtcbiAgfVxuXG4gIF9wYXJzZUNob2ljZXMoKXtcbiAgICBsZXQgY2hvaWNlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGxldCBjIG9mIHRoaXMuY2hvaWNlcykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaG9pY2VzLnB1c2goe2luZGV4OiBpLCB0ZXh0OiBjfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGMudGV4dCkge1xuICAgICAgICAgIGNob2ljZXMucHVzaCh7aW5kZXg6IGksIHRleHQ6IGMudGV4dH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBjaG9pY2VzO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCl7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5vcGVuKClcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtZHJvcGRvd24nLCBScERyb3Bkb3duKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgICNidXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICNpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wbGFjZWhvbGRlci10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5NzApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogM3B4IDAgMCAwO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweDtcbiAgICB9XG4gICAgbGlbc2VsZWN0ZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLm91dGxpbmUtcHJpbWFyeSBsaTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkgdWwge1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTcwKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkgdWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgPGRpdiBpZD1cImJ1dHRvblwiXG4gICAgICAgIEBjbGljaz1cIiR7dGhpcy5vcGVuRHJvcGRvd259XCI+XG4gICAgICAgIDxzcGFuIGlkPVwiYnV0dG9uLXRleHRcIj4ke3RoaXMuX3BhcnNlQ2hvaWNlcygpW3RoaXMuY2hvc2VuXS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFyZHdhcmU6a2V5Ym9hcmQtYXJyb3ctZG93blwiPjwvaXJvbi1pY29uPlxuICAgPC9kaXY+XG4gICAgPGlyb24tZHJvcGRvd24gaWQ9XCJkcm9wZG93blwiIHNjcm9sbC1hY3Rpb249XCJjYW5jZWxcIiB2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiPlxuICAgICAgPHVsIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+JHt0aGlzLl9wYXJzZUNob2ljZXMoKS5tYXAoY2hvaWNlID0+IHRoaXMuX3JlbmRlckNob2ljZXMoY2hvaWNlKSl9PC91bD5cbiAgICA8L2lyb24tZHJvcGRvd24+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oZXJvLWltYWdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEhlcm9JbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhc3NldEZvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImFzc2V0LWZvbGRlclwifSxcbiAgICBhc3NldE1heDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtbWF4XCJ9LFxuICAgIGFzc2V0UGljazoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtcGlja1wiLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXNzZXRGb2xkZXIgPSBcIi9pbWFnZXMvcHJvZmlsZS1mZWF0dXJlcy9cIlxuICAgIHRoaXMuYXNzZXRNYXggPSAyOTtcbiAgICB0aGlzLnNodWZmbGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA8IDApIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrID4gdGhpcy5hc3NldE1heCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IHRoaXMuYXNzZXRNYXg7XG4gICAgICB9XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5hc3NldEZvbGRlciArIHRoaXMuYXNzZXRQaWNrICsgXCIuanBnXCJ9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuYXNzZXRQaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHRoaXMuYXNzZXRNYXggKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1oZXJvLWltYWdlJywgUnBIZXJvSW1hZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuc2xvdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI3RvcCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjYm90dG9tIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJ0b3BcIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cIm1haW5cIj48c2xvdCBuYW1lPVwibWFpblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJib3R0b21cIj48c2xvdCBuYW1lPVwiYm90dG9tXCI+PC9zbG90PjwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QtY291bnRzLnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IFwiLi92aWV3LWFsbFwiO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdENvdW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgdmlld0FsbExpbms6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ3ZpZXctYWxsLWxpbmsnfSxcbiAgICBoZWFkZXI6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ2hlYWRlcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saW5rcyA9IFtdO1xuXG4gICAgdGhpcy5fbGlua0NsaWNrID0gbmV3IEN1c3RvbUV2ZW50KCdsaW5rLWNsaWNrJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIGNsaWNrZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbmRlckhlYWRlcigpe1xuICAgIGlmICghdGhpcy5oZWFkZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXIudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke3RoaXMuaGVhZGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPjxzcGFuPiR7dGhpcy5oZWFkZXIudGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBpZiAoIWxpbmsudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHtsaW5rLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBsaW5rLWluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cImxpbmtcIj4ke2xpbmsudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgX3JlbmRlclZpZXdBbGwoKXtcbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmspIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy52aWV3QWxsTGluay50ZXh0KSB7XG4gICAgICB0aGlzLnZpZXdBbGxMaW5rLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgdmlldy1hbGxcIj48ZGl2IGNsYXNzPVwiY291bnRcIj48L2Rpdj48cnAtdmlldy1hbGwgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIHRleHQ9XCIke3RoaXMudmlld0FsbExpbmsudGV4dH1cIj48L3JwLXZpZXctYWxsPjwvZGl2PmBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpICkge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMubGlua3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rLWluZGV4JykpXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLnZpZXdBbGxMaW5rO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGlua0NsaWNrKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0LWNvdW50cycsIFJwTGlua0xpc3RDb3VudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gICAgLnJvdy52aWV3LWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckhlYWRlcigpfVxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gICAgJHt0aGlzLl9yZW5kZXJWaWV3QWxsKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QudHBsLmpzJztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgY3VycmVudExpbms6ICB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnY3VycmVudC1saW5rJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgZGlyZWN0aW9uOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdkaXJlY3Rpb24nfSxcbiAgICBoYXNIZWFkZXJMaW5rOiB7dHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiAnaGFzLWhlYWRlci1saW5rJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICd2JztcbiAgICB0aGlzLmN1cnJlbnRMaW5rID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzID0ge2NvbnRhaW5lcjogdHJ1ZX07XG4gICAgdGhpcy5fY29udGFpbmVyQ2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuXG4gICAgdGhpcy5fY2hhbmdlZExpbmsgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtbGluaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuICAgIGlmIChuYW1lID09ICdkaXJlY3Rpb24nKSB7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXJDbGFzc2VzLnYpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY29udGFpbmVyQ2xhc3Nlcy52XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGFpbmVyQ2xhc3Nlc1tuZXdWYWwudG9Mb3dlckNhc2UoKVswXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCk7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGxldCBjbGFzc2VzID0ge2xpbms6IHRydWV9O1xuICAgIGlmICh0eXBlb2YgbGluayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRleHQgPSBsaW5rO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbGluayA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRleHQgPSBsaW5rLnRleHQ7XG4gICAgICBpZiAobGluay5kaXNhYmxlZCkge1xuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09IHRoaXMuY3VycmVudExpbmspIHtcbiAgICAgIGNsYXNzZXNbJ3NlbGVjdGVkJ10gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNIZWFkZXJMaW5rICYmIGluZGV4ID09IDApIHtcbiAgICAgIGNsYXNzZXNzWydsaW5rLWhlYWRlciddID0gdHJ1ZTtcbiAgICB9XG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGxpbms9XCIke2luZGV4fVwiIGNsYXNzPSR7Y2xhc3NNYXAoY2xhc3Nlcyl9PiR7dGV4dH08L2Rpdj5gO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGxldCBuZXdfbGluayA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluaycpKTtcbiAgICBpZiAoKG5ld19saW5rICE9IHRoaXMuY3VycmVudExpbmspICYmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgdGhpcy5jdXJyZW50TGluayA9IG5ld19saW5rO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2NoYW5nZWRMaW5rKTtcbiAgICB9XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdCcsIFJwTGlua0xpc3QpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5oIHtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5oIC5saW5rIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci52IHtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci52IC5saW5rIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5fY29udGFpbmVyQ2xhc3Nlcyl9PlxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3BhZ2luYXRpb24udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwUGFnaW5hdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFBhZ2U6ICB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnY3VycmVudC1wYWdlJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgbWF4UGFnZToge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ21heC1wYWdlJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgbWluUGFnZToge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ21pbi1wYWdlJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgcGFnZXNQZXJTaWRlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAncGFnZXMtcGVyLXNpZGUnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucGFnZXNQZXJTaWRlID0gMTtcbiAgICB0aGlzLm1pblBhZ2UgPSAxO1xuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm1pblBhZ2U7XG4gICAgdGhpcy5tYXhQYWdlID0gdGhpcy5jdXJyZW50UGFnZTtcblxuICAgIHRoaXMuX2NoYW5nZWRQYWdlID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VkLXBhZ2UnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHBhZ2UgaGFzIGJlZW4gc2VsZWN0ZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2hhc1ZhbGlkTG9naWMoKSB7XG4gICAgaWYgKHRoaXMubWF4UGFnZSA8IHRoaXMuY3VycmVudFBhZ2UgfHwgdGhpcy5tYXhQYWdlIDwgdGhpcy5taW5QYWdlICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm1pblBhZ2UgPiB0aGlzLmN1cnJlbnRQYWdlICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJFZGdlKGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy5faGFzVmFsaWRMb2dpYygpKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0Jykge1xuICAgICAgaWYgKCh0aGlzLmN1cnJlbnRQYWdlIC0gdGhpcy5taW5QYWdlKSA+ICh0aGlzLnBhZ2VzUGVyU2lkZSArIDEpKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGNsYXNzPVwicGFnZVwiIHBhZ2U9XCIke3RoaXMubWluUGFnZX1cIj4ke3RoaXMubWluUGFnZX08L2Rpdj48ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4uLi48L2Rpdj5gO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKCh0aGlzLm1heFBhZ2UgLSB0aGlzLmN1cnJlbnRQYWdlKSA+ICh0aGlzLnBhZ2VzUGVyU2lkZSArIDEpKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJlbGxpcHNpc1wiPi4uLjwvZGl2PjxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGNsYXNzPVwicGFnZVwiIHBhZ2U9XCIke3RoaXMubWF4UGFnZX1cIj4ke3RoaXMubWF4UGFnZX08L2Rpdj5gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJDZW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNWYWxpZExvZ2ljKCkpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCIke2NsYXNzTWFwKHtwYWdlOiB0cnVlLCBzZWxlY3RlZDogdHJ1ZX0pfVwiIHBhZ2U9XCIke3RoaXMuY3VycmVudFBhZ2V9XCI+JHt0aGlzLmN1cnJlbnRQYWdlfTwvZGl2PmA7XG4gICAgfVxuXG4gICAgbGV0IHBhZ2VzID0gW3twYWdlOiB0aGlzLmN1cnJlbnRQYWdlLCBzZWxlY3RlZDogdHJ1ZX1dO1xuICAgIGxldCByZW1haW5kZXIgPSB0aGlzLnBhZ2VzUGVyU2lkZSAqIDI7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGFkZFBhZ2VzKHRoaXMucGFnZXNQZXJTaWRlKTtcbiAgICBhZGRQYWdlcyhyZW1haW5kZXIpO1xuXG4gICAgaWYgKHBhZ2VzWzBdLnBhZ2UgLSB0aGlzLm1pblBhZ2UgPT09IDEpIHtcbiAgICAgIHBhZ2VzLnVuc2hpZnQoe3BhZ2U6IHRoaXMubWluUGFnZSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heFBhZ2UgLSBwYWdlcy5zbGljZSgtMSlbMF0ucGFnZSA9PT0gMSkge1xuICAgICAgcGFnZXMucHVzaCh7cGFnZTogdGhpcy5tYXhQYWdlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGAke3BhZ2VzLm1hcChwYWdlID0+IGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1wicGFnZVwiOiB0cnVlLCBzZWxlY3RlZDogcGFnZS5zZWxlY3RlZH0pfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT1cIiR7cGFnZS5wYWdlfVwiPiR7cGFnZS5wYWdlfTwvZGl2PmApfWA7XG5cbiAgICBmdW5jdGlvbiBhZGRQYWdlcyhsb29wcyl7XG4gICAgICBsZXQgZGlyZWN0aW9ucyA9IFsnbGVmdCcsICdyaWdodCddO1xuICAgICAgZm9yIChsZXQgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBwYWdlc1swXS5wYWdlO1xuICAgICAgICAgICAgaWYgKGZpcnN0ID4gc2VsZi5taW5QYWdlKSB7XG4gICAgICAgICAgICAgIHBhZ2VzLnVuc2hpZnQoe3BhZ2U6IGZpcnN0IC0gMSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIHJlbWFpbmRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IHBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlO1xuICAgICAgICAgICAgaWYgKGxhc3QgPCBzZWxmLm1heFBhZ2UpIHtcbiAgICAgICAgICAgICAgcGFnZXMucHVzaCh7cGFnZTogbGFzdCArIDEsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgICAgICAgICAgICByZW1haW5kZXIgLT0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGxldCBuZXdfcGFnZSA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncGFnZScpKTtcbiAgICBpZiAobmV3X3BhZ2UgIT0gdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG5ld19wYWdlO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2NoYW5nZWRQYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdpbmF0aW9uJywgUnBQYWdpbmF0aW9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWNlbnRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAucGFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIC5wYWdlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLnBhZ2Uuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBwb2ludGVyLWV2ZW50OiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICAucGFnZS5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICAuZWxsaXBzaXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIGlyb24taWNvbjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIGlyb24taWNvbltkaXNhYmxlZF06aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5LWRpc2FibGVkKTtcbiAgICB9XG4gICAgaXJvbi1pY29uW2Rpc2FibGVkXSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnktZGlzYWJsZWQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPWNvbnRhaW5lcj5cbiAgICA8aXJvbi1pY29uID9kaXNhYmxlZD1cIiR7dGhpcy5jdXJyZW50UGFnZSA9PSB0aGlzLm1pblBhZ2UgfHwgIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSB9XCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIlxuICAgICAgICAgICAgICAgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZSAtIDF9XCJcbiAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1iYWNrXCI+XG4gICAgPC9pcm9uLWljb24+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1jZW50ZXJcIj5cbiAgICAgICR7dGhpcy5fcmVuZGVyRWRnZSgnbGVmdCcpfVxuICAgICAgJHt0aGlzLl9yZW5kZXJDZW50ZXIoKX1cbiAgICAgICR7dGhpcy5fcmVuZGVyRWRnZSgncmlnaHQnKX1cbiAgICA8L2Rpdj5cbiAgICA8aXJvbi1pY29uID9kaXNhYmxlZD1cIiR7dGhpcy5jdXJyZW50UGFnZSA9PSB0aGlzLm1heFBhZ2UgfHwgIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSB9XCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIlxuICAgICAgICAgICAgICAgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZSArIDF9XCJcbiAgICAgICAgICAgICAgIGljb249XCJhcnJvdy1mb3J3YXJkXCI+XG4gICAgPC9pcm9uLWljb24+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9wZXJzb24tcHJldmlldy50cGwuanMnO1xuXG5pbXBvcnQgXCIuL2JhZGdlXCI7XG5cbmV4cG9ydCBjbGFzcyBScFBlcnNvblByZXZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBiYWRnZXM6IHt0eXBlOiBBcnJheX0sXG4gICAgYXZhdGFyU2l6ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnYXZhdGFyLXNpemUnfSxcbiAgICBhdmF0YXJTcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2F2YXRhci1zcmMnfSxcbiAgICB0ZXh0V2lkdGg6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RleHQtd2lkdGgnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5iYWRnZXMgPSBbXTtcbiAgICB0aGlzLnRleHRXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aC50b1N0cmluZygpIC0gNzApICsgXCJweFwiO1xuICB9XG5cbiAgX3JlbmRlckJhZGdlKGJhZGdlKSB7XG4gICAgaWYgKHR5cGVvZiBiYWRnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZT4ke2JhZGdlfTwvcnAtYmFkZ2U+YDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGJhZGdlID09PSAnb2JqZWN0Jyl7XG4gICAgICBsZXQgdCA9IGJhZGdlLnRleHQ7XG4gICAgICBpZiAoIXQpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgIH1cbiAgICAgIGxldCBocmVmID0gYmFkZ2UuaHJlZjtcbiAgICAgIGlmIChocmVmKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZSBocmVmPVwiJHtocmVmfVwiPiR7dH08L3JwLWJhZGdlPmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbGA8cnAtYmFkZ2U+JHt0fTwvcnAtYmFkZ2U+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBlcnNvbi1wcmV2aWV3JywgUnBQZXJzb25QcmV2aWV3KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcbmltcG9ydCBcIi4vYXZhdGFyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBmb250LXdlaWdodCA6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubmFtZTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubmFtZVtkaXNhYmxlZF0ge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5uYW1lW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBmb250LXNpemUgOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gICAgc21hbGwuYmFkZ2VzIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgIDxycC1hdmF0YXIgc2l6ZT1cIiR7dGhpcy5hdmF0YXJTaXplfVwiIHNyYz1cIiR7dGhpcy5hdmF0YXJTcmN9XCI+PC9ycC1hdmF0YXI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCIgc3R5bGU9XCIke3N0eWxlTWFwKHtcIm1heC13aWR0aFwiIDogdGhpcy50ZXh0V2lkdGh9KX1cIj5cbiAgICAgIDxhIGNsYXNzPVwibmFtZVwiIGhyZWY9XCIke3RoaXMuaHJlZn1cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLmhyZWZ9XCI+JHt0aGlzLm5hbWV9PC9hPlxuICAgICAgPHNtYWxsPiR7dGhpcy50aXRsZX08L3NtYWxsPlxuICAgICAgPHNtYWxsIGNsYXNzPVwiYmFkZ2VzXCI+JHt0aGlzLmJhZGdlcy5tYXAoYiA9PiB0aGlzLl9yZW5kZXJCYWRnZShiKSl9PC9zbWFsbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vc2VhcmNoLnRwbC5qcyc7XG5pbXBvcnQgJy4vZHJvcGRvd24nO1xuaW1wb3J0IFwiLi9pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBScFNlYXJjaCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9LFxuICAgIGlucHV0VmFsdWU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpbnB1dC12YWx1ZVwiLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG4gICAgYWN0aXZlRmFjZXQ6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuX25ld1NlYXJjaCA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlYXJjaCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VhcmNoIGhhcyBiZWVuIHRyaWdnZXJlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2lucHV0VmFsdWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2FjdGl2ZUZhY2V0JykpIHtcbiAgICAgIHRoaXMuc2VhcmNoT2JqZWN0ID0ge3NlYXJjaDogdGhpcy5pbnB1dFZhbHVlLCBmYWNldDogdGhpcy5mYWNldHNbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9uZXdTZWFyY2gpO1xuICB9XG5cbiAgX2hhbmRsZUtleXVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kb1NlYXJjaCgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXNlYXJjaCcsIFJwU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2lucHV0IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICNpY29uLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5saW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MTApO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxycC1kcm9wZG93biBjaG9pY2VzPVwiJHtKU09OLnN0cmluZ2lmeSh0aGlzLmZhY2V0cyl9XCJcbiAgICAgICAgICAgICAgICAgY2hvc2VuPVwiJHt0aGlzLmFjdGl2ZUZhY2V0fVwiXG4gICAgICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IHRoaXMuYWN0aXZlRmFjZXQgPSBlLnRhcmdldC5jaG9zZW59XCI+XG4gICAgPC9ycC1kcm9wZG93bj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLmlucHV0VmFsdWV9XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCJcbiAgICAgICAgICAgQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5pbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWV9XCJcbiAgICAgICAgICAgQGtleXVwPVwiJHt0aGlzLl9oYW5kbGVLZXl1cH1cIlxuICAgICAgICAgICBpZD1cImlucHV0XCI+XG4gICAgPGRpdiBpZD1cImljb24tY29udGFpbmVyXCI+XG4gICAgICA8cnAtaWNvbiBAY2xpY2s9XCIke3RoaXMuZG9TZWFyY2h9XCIgaWNvbj1cInJwLXNlYXJjaFwiID9pcy1saW5rPVwiJHt0aGlzLmlucHV0VmFsdWV9XCI+PHJwLWljb24+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3ZpZXctYWxsLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScFZpZXdBbGwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGp1c3RpZnk6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gXCJWaWV3IEFsbFwiXG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgaWYgKHRoaXMuanVzdGlmeSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLmp1c3RpZnldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC12aWV3LWFsbCcsIFJwVmlld0FsbCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgfVxuICAgIC5jb250YWluZXIuc3RhcnQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmNlbnRlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjpob3ZlciBpcm9uLWljb257XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgICAudmlldy1hbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPGRpdiBjbGFzcz1cInZpZXctYWxsXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPjxpcm9uLWljb24gaWNvbj1cImF2OnBsYXktYXJyb3dcIj48L2lyb24taWNvbj48L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9hcHAtY29tcG9uZW50cy50cGwuanNcIlxuLy9pbXBvcnQgeyBjb2xvclN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcy9zaXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIEFwcFBhZ2VDb21wb25lbnRzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtcGFnZS1jb21wb25lbnRzJywgQXBwUGFnZUNvbXBvbmVudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2EtelwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FjY29yZGlhblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYXZhdGFyXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYmFkZ2VcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jaXRhdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIlxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcXVpY2stc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCJcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvdmlldy1hbGxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBzZWN0aW9uLmhlcm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgcnAtaGVyby1pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wZW9wbGUtdmVydGljYWwgcnAtcGVyc29uLXByZXZpZXcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wZW9wbGUtY29sdW1ucyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnBlb3BsZS1jb2x1bW5zIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAuc3VibmF2IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAubGlua2xpc3QxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIHJwLWFjY29yZGlhbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgfVxuICBycC1jaXRhdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAucXVpY2stc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnNlYXJjaC1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuXG48aDEgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5TaXRlIENvbXBvbmVudHM8L2gxPlxuPHA+VGhlc2UgZG9uJ3QgY29ubmVjdCB0byB0aGUgbWFpbiBidXMsIGFuZCB0aGV5IGRvbid0IGluaGVyaXQgYW55IHNoYXJlZCBzdHlsZXMgKG90aGVyIHRoYW4gc2l0ZSB2YXJpYWJsZXMpLlxuWW91IGNvbnRyb2wgdGhlbSB3aXRoIGF0dHJpYnV0ZXMsIGFuZCBidWlsZCBtb3JlIGNvbXBsaWNhdGVkIChidXMtY29ubmVjdGVkKSBlbGVtZW50cyB3aXRoIHRoZW0uXG48L3A+XG48c2VjdGlvbj5cbjxoMj5BLVogbGlzdDwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBzZWxlY3RlZCBsZXR0ZXIgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX08L2NvZGU+PC9wPlxuPHJwLWEteiAgc2VsZWN0ZWQtbGV0dGVyPVwiYWxsXCIgQGNoYW5nZWQtbGV0dGVyPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX0+PC9ycC1hLXo+XG48cD5Vc2UgPGNvZGU+aGlkZS1hbGw8L2NvZGU+IHRvIG5vdCByZW5kZXIgdGhlIEFsbCBsaW5rPC9wPlxuPHJwLWEteiBoaWRlLWFsbD10cnVlIHNlbGVjdGVkLWxldHRlcj1cImZcIj48L3JwLWEtej5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QWNjb3JkaWFucyBmb3IgRkFRIHNlY3Rpb248L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT50aXRsZTwvY29kZT4gYXR0cmlidXRlIHRvIHNwZWNpZnkgdGhlIGxpbmsgdGV4dC4gVGhlIGV4cGFuZGFibGUgY29udGVudCBpcyBhbiB1bm5hbWVkIHNsb3QuPC9wPlxuPHJwLWFjY29yZGlhbiB0aXRsZT1cIkhvdyBvZnRlbiBkbyB5b3UgdXBkYXRlIHRoZSBkYXRhIGluIHRoZSByZWdpc3RyeT9cIj4keydIZWxsbyB3b3JsZCEgJy5yZXBlYXQoNDApfTwvcnAtYWNjb3JkaWFuPlxuPHJwLWFjY29yZGlhbj48L3JwLWFjY29yZGlhbj5cbjxycC1hY2NvcmRpYW4gZXhwYW5kZWQgdGl0bGU9XCJVc2UgdGhlIGV4cGFuZGVkIGF0dHJpYnV0ZSBvciB0b2dnbGUgbWV0aG9kIHRvIGNvbnRyb2wgZXhwYW5zaW9uXCI+XG5UaGlzIGlzIG9wZW4gb24gcGFnZSBsb2FkIGJlY2F1c2UgSSdtIHVzaW5nIHRoZSBleHBhbmRlZCBhdHRyaWJ1dGUuXG48L3JwLWFjY29yZGlhbj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+QmFzaWMgQWxlcnQ8L2gyPlxuPHA+Tm90IHBhcnQgb2YgdGhlIGluaXRpYWwgZGVzaWduIHNwZWNzLCBidXQgbmVlZGVkIHNvbWUgd2F5IHRvIGhhbmRsZSBlcnJvcnMuIFVzZXMgc2xvdC48L3A+XG48cnAtYWxlcnQ+VWggb2ghIFNvbWV0aGluZyB3ZW50IGhvcnJpYmx5IHdyb25nIChub3QgdGhhdCB0aGF0IGV2ZXIgaGFwcGVucykuIENhbid0IGxvYWQgY29udGVudCE8L3JwLWFsZXJ0PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5BdmF0YXJzPC9oMj5cbjxwPlVzZSB0aGUgc2l6ZSBhdHRyaWJ1dGUgdG8gYWRqdXN0IEtpbW15LWRlZmluZWQgc2l6ZXMuPC9wPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXI+PC9ycC1hdmF0YXI+XG48cnAtYXZhdGFyIHNpemU9XCJzbVwiPjwvcnAtYXZhdGFyPlxuPHA+VXNlIHRoZSBzcmMgYXR0cmlidXRlIHRvIHVzZSBhIHBob3RvLjxwPlxuPHJwLWF2YXRhciBzaXplPVwibGdcIiBzcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIj48L3JwLWF2YXRhcj5cbjxycC1hdmF0YXIgc2l6ZT1cImxnXCIgc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9xdWlubi0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5CYWRnZXM8L2gyPlxuPHNtYWxsPlxuICA8cnAtYmFkZ2U+SSdtIGEgQmFkZ2UhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPk1lIFRvbyE8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3JzPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPkFyZSBhIFNlcXVlbmNlPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPklmIHBhcnQgb2Y8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+dGhlIHNhbWUgcGFyZW50IG5vZGU8L3JwLWJhZGdlPlxuICA8cnAtYmFkZ2U+Q29sb3Igc3RhcnRzIG92ZXIhPC9ycC1iYWRnZT5cbiAgPHJwLWJhZGdlPlllbGxvdyBhZ2Fpbi4uLjwvcnAtYmFkZ2U+XG48L3NtYWxsPlxuPHA+QmFkZ2VzIGluaGVyaXQgZm9udCBzaXplIDxycC1iYWRnZT4xNnB4IGZvbnRzaXplPC9ycC1iYWRnZT5cbmJ1dCB5b3UgY2FuIGFsc28gaW5jcmVhc2UgcGFkZGluZyB3aXRoIHRoZSBzaXplIGF0dHJpYnV0ZSA8cnAtYmFkZ2Ugc2l6ZT1cImxnXCI+c2l6ZSBsZzwvcnAtYmFkZ2U+XG48L3A+XG48cD5Zb3UgY2FuIG1hbnVhbGx5IGNoYW5nZSB0aGUgY29sb3Igd2l0aCB0aGUgY29sb3Itc2VxdWVuY2UgYXR0cmlidXRlXG48cnAtYmFkZ2UgY29sb3Itc2VxdWVuY2U9XCI1XCI+Y29sb3Itc2VxdWVuY2UgPSA1PC9ycC1iYWRnZT5cbjwvcD5cbjxwPklmIHlvdSBwYXNzIGluIGFuIGhyZWYgYXR0cmlidXRlLCA8cnAtYmFkZ2UgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIj50aGUgYmFkZ2VzPC9ycC1iYWRnZT4gPHJwLWJhZGdlIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1XCI+YmVjb21lIGxpbmtzPC9ycC1iYWRnZT5cbmFuZCBoYXZlIGhvdmVyIHN0eWxlcy5cbjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+Q2l0YXRpb25zPC9oMj5cbjxwPlNpbXBseSByZW5kZXJzIGJpYmxpb2dyYXBoaWMgaW5mbyBpbiBzb21lIHN0YW5kYXJkIGZvcm1hdC4gV2hhdCBmb3JtYXQgdGhhdCBpcywgSSBuZWVkIHRvIGZpbmQgb3V0LjwvcD5cbjxycC1jaXRhdGlvbiB0aXRsZT1cIlNvbWUgV2l0dHkgRXllLWNhdGNoaW5nIFRpdGxlOiBUaGUgRWZmZWN0IG9mIFggb24gWlwiXG4gICAgICAgICAgICAgaHJlZj1cInNvbWUgbGlua1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIk5hdHVyZVwiXG4gICAgICAgICAgICAgcGFnZXM9XCIxMjoxMjMtNDU2XCI+XG48L3JwLWNpdGF0aW9uPlxuPHJwLWNpdGF0aW9uIHRpdGxlPVwiRXhhbWluaW5nIHRoZSBFZmZlY3RzIG9mIERvZ3Mgb24gQ2F0c1wiXG4gICAgICAgICAgICAgam91cm5hbD1cIkJlaGF2aW9yYWwgU2NpZW5jZVwiIHBhZ2VzPVwiNDo5LTEzXCI+XG48L3JwLWNpdGF0aW9uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5Ecm9wZG93bjwvaDI+XG48cD5BIHN0eWxpemVkIGRyb3Bkb3duLiBMaXN0ZW4gd2l0aCA8Y29kZT5AbmV3LXNlbGVjdGlvbj1cIlxcJHtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmNob2ljZXNbZS50YXJnZXQuY2hvc2VuXSl9PC9jb2RlPjwvcD5cbjxycC1kcm9wZG93biBjaG9pY2VzPSdbXCJQZW9wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIk9yZ2FuaXphdGlvbnNcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJXb3Jrc1wifV0nXG4gICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gY29uc29sZS5sb2coZS50YXJnZXQuY2hvaWNlc1tlLnRhcmdldC5jaG9zZW5dKX1cIj5cbjwvcnAtZHJvcGRvd24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVyb1wiPlxuPGgyPkhlcm8gSW1hZ2U8L2gyPlxuPHA+SGVybyBpbWFnZSB3aWxsIHJhbmRvbWx5IHB1bGwgYSBiYWNrZ3JvdW5kLXBob3RvIGZyb20gdGhlIHBhdGggZGVjbGFyZWQgaW4gPGNvZGU+YXNzZXQtZm9sZGVyPC9jb2RlPiBhdHRyaWJ1dGUuXG5SdW5uaW5nIDxjb2RlPmVsZS5zaHVmZmxlKCk8L2NvZGU+IHdpbGwgbG9hZCBhIG5ldyBpbWFnZS5cbkhvd2V2ZXIsIHNwZWNpZnlpbmcgYSA8Y29kZT5zcmM8L2NvZGU+IGF0dHJpYnV0ZSB3aWxsIG92ZXJyaWRlIHRoZSByYW5kb20gYXNzZXQgcHVsbCBmdW5jdGlvbmFsaXR5IGFuZCBqdXN0IGxvYWQgdGhlIHNyYyBiZyBwaG90by5cblRoZXJlIGFyZSB0aHJlZSBzbG90cyB0byBwb3B1bGF0ZSB0aGUgaGVybyBjb250ZW50IC0gXCJ0b3BcIiwgXCJtYWluXCIsIGFuZCBcImJvdHRvbVwiLlxuPHA+XG48L3NlY3Rpb24+XG48cnAtaGVyby1pbWFnZT5cbiAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgPHJwLWljb24gaWNvbj1cImlyb24tbGlua1wiIGNpcmNsZS1iZyBpcy1saW5rIHN0eWxlPVwibWFyZ2luLXJpZ2h0OjVweDtcIj48L3JwLWljb24+XG4gICAgPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuICA8L2Rpdj5cbiAgPGRpdiBzbG90PVwibWFpblwiIGNsYXNzPVwiaGVyb21haW5cIj5cbiAgICA8cnAtYXZhdGFyIHNpemU9XCJsZ1wiIHNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcGJfYXNpbG9tYXJfMjQ3NS1QZXRlci1CcmFudGxleS0yODB4MzUwLWMtY2VudGVyLmpwZ1wiPjwvcnAtYXZhdGFyPlxuICAgIDxoMiBjbGFzcz1cIm5hbWUgdGV4dC1zZWNvbmRhcnkgaDEgYm9sZCBtYi0wIHRleHQtY2VudGVyXCI+QnJhbnRsZXksIFBldGVyPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgaDMgbWItMiBtdC0xIHRleHQtY2VudGVyXCI+RGlyZWN0b3Igb2YgT25saW5lIFN0cmF0ZWd5PC9wPlxuICAgIDxwIGNsYXNzPVwiYm9sZCB0ZXh0LWxpZ2h0IGgzIG10LTEgbWItMCB0ZXh0LWNlbnRlclwiPk15IHJlc2VhcmNoIGFyZWFzIGluY2x1ZGU6IDwvcD5cbiAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICA8cnAtYmFkZ2U+Rm9vYmFyPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5TdHVmZjwvcnAtYmFkZ2U+XG4gICAgICA8cnAtYmFkZ2U+VGhpbmdzPC9ycC1iYWRnZT5cbiAgICAgIDxycC1iYWRnZT5XaWRnZXRzPC9ycC1iYWRnZT5cbiAgICAgIDwvcD5cbiAgICA8ZGl2PjwvZGl2PlxuICA8L2Rpdj5cbjwvcnAtaGVyby1pbWFnZT5cblxuPHNlY3Rpb24+XG48aDI+SWNvbnM8L2gyPlxuPHA+VXNlIHRoZSA8Y29kZT5pY29uPC9jb2RlPiBhdHRyaWJ1dGUgdG8gc3BlY2lmeSB5b3VyIGljb24uIFVzZSB0aGUgcHJlZml4IFwiaXJvbi1cIiB0byBjYWxsIGFuIGlyb24gaWNvbjo8L3A+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnPjwvcnAtaWNvbj5cbjxycC1pY29uIGljb249XCJpcm9uLWFycm93LWZvcndhcmRcIiBjaXJjbGUtYmc+PC9ycC1pY29uPlxuPHA+VGhlIDxjb2RlPnRoZW1lLWNvbG9yPC9jb2RlPiBhdHRyaWJ1dGUgd2lsbCBhZGp1c3QgdGhlIGNvbG9yLCA8Y29kZT5pcy1saW5rPC9jb2RlPiB3aWxsIGFwcGx5IGxpbmsgc3R5bGVzLCBhbmQgPGNvZGU+c2l6ZTwvY29kZT4gd2lsbCBjaGFuZ2UgdGhlIHNpemU8cD5cbjxycC1pY29uIGljb249XCJpcm9uLWZhY2VcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG48cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHA+UHJlZmFjZSB0aGUgPGNvZGU+aWNvbjwvY29kZT4gYXR0cmlidXRlIHdpdGggXCJycC1cIiB0byB1c2Ugb25lIG9mIHRoZSBjdXN0b20gaWNvbnM8L3A+XG48cnAtaWNvbiBpY29uPVwicnAtc2VhcmNoXCIgY2lyY2xlLWJnIGlzLWxpbmsgdGhlbWUtY29sb3I9J3NlY29uZGFyeScgc2l6ZT1cImxnXCI+PC9ycC1pY29uPlxuPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbjxoMj5MaW5rIExpc3Q8L2gyPlxuPHA+RGlzcGxheXMgYSBsaXN0IG9mIFwibGlua3NcIi4gQXR0YWNoIGEgbGlzdGVuZXIgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgYWN0aXZlIGxpbmsgY2hhbmdlcyBpLmUuPGJyIC8+PGNvZGU+QGNoYW5nZWQtbGluaz1cXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJsaW5rbGlzdDFcIj5cbiAgPHJwLWxpbmstbGlzdCBsaW5rcz0nW1wiSGVsbG8gV29ybGRcIiwgXCJIZWxsbyBBZ2FpbiFcIiwgXCJBbmQgT25lIE1vcmUgVGltZVwiXSdcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPSR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9PlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuXG48cD5Td2l0Y2ggdG8gaG9yaXpvbnRhbCB2aWV3IGJ5IHVzaW5nIDxjb2RlPmRpcmVjdGlvbj1oPC9jb2RlPjwvcD5cbjxkaXYgY2xhc3M9XCJzdWJuYXZcIj5cbiAgPHJwLWxpbmstbGlzdCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIlxuICAgICAgICAgICAgICAgIGxpbmtzPSdbe1widGV4dFwiOiBcIkFsbCBJbmZvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkFib3V0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlB1YmxpY2F0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXNlYXJjaFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb250YWN0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRpc2FibGVkIExpbmtcIiwgXCJkaXNhYmxlZFwiOiB0cnVlfSBdJz5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+TGluayBMaXN0IHdpdGggQ291bnRzPC9oMj5cbjxwPkxpbmsgbGlzdCB0aGF0IHdpbGwgcHJlcGVuZCBjb3VudHMuIExpc3RlbiB3aXRoIDxjb2RlPkBsaW5rLWNsaWNrPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5DbGlja2VkbGluayl9XCI8L2NvZGU+PC9wPlxuPHA+VXNlIHRoZSA8Y29kZT52aWV3LWFsbC1saW5rczwvY29kZT4gYW5kIDxjb2RlPmhlYWRlcjwvY29kZT4gYXR0cmlidXRlcyB0byBlbmFibGUgdGhlc2UgZGlzcGxheXM6PC9wPlxuPHJwLWxpbmstbGlzdC1jb3VudHMgbGlua3M9J1t7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgQXJ0aWNsZXNcIiwgXCJjb3VudFwiOiAzMDgwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkJvb2tzXCIsIFwiY291bnRcIjogOH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDaGFwdGVyc1wiLCBcImNvdW50XCI6IDUyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkNvbmZlcmVuY2UgUGFwZXJzXCIsIFwiY291bnRcIjogNDUxfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkRhdGFzZXRzXCIsIFwiY291bnRcIjogNzB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSm91cm5hbHNcIiwgXCJjb3VudFwiOiA5NjB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiUmVwb3J0c1wiLCBcImNvdW50XCI6IDR9XSdcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3LWFsbC1saW5rPSd7XCJ0ZXh0XCI6IFwiVmlldyBBbGwgV29ya3NcIn0nXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPSd7XCJ0ZXh0XCI6IFwiQWNhZGVtaWMgV29ya3NcIiwgXCJjb3VudFwiOiA4NDEzfSdcbiAgICAgICAgICAgICAgICAgICAgICBAbGluay1jbGljaz1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LkNsaWNrZWRsaW5rKX1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbjwvcnAtbGluay1saXN0LWNvdW50cz5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UGFnaW5hdGlvbjwvaDI+XG48cD5BdHRhY2ggYSBsaXN0ZW5lciB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBwYWdlIGNoYW5nZXMgaS5lLjxiciAvPjxjb2RlPkBjaGFuZ2VkLXBhZ2U9XFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PC9jb2RlPjwvcD5cbjxycC1wYWdpbmF0aW9uIG1heC1wYWdlPTggQGNoYW5nZWQtcGFnZT0keyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5jdXJyZW50UGFnZSl9PjwvcnAtcGFnaW5hdGlvbj5cbjxwPlVzZSB0aGUgPGNvZGU+bWF4LXBhZ2U8L2NvZGU+LCA8Y29kZT5taW4tcGFnZTwvY29kZT4sIGFuZCA8Y29kZT5jdXJyZW50LXBhZ2U8L2NvZGU+IGF0dHJpYnV0ZXMgdG8gY29udHJvbCB0aGUgZGlzcGxheS48L3A+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0xNSBjdXJyZW50LXBhZ2U9XCI3XCI+PC9ycC1wYWdpbmF0aW9uPlxuPHA+VXNlIHRoZSA8Y29kZT5wYWdlcy1wZXItc2lkZTwvY29kZT4gYXR0cmlidXRlIHRvIHNob3cgbW9yZSBwYWdlcyBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgY3VycmVudCBwYWdlPHA+XG48cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT0yMCBjdXJyZW50LXBhZ2U9MTAgcGFnZXMtcGVyLXNpZGU9Mz48L3JwLXBhZ2luYXRpb24+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPlBlcnNvbiBQcmV2aWV3PC9oMj5cbjxwPllvdSBjYW4gYXJyYW5nZSB0aGVtIGhvdyB5b3Ugc2VlIGZpdC48L3A+PHA+VmVydGljYWxseSwgbGlrZSBpbiBzZWFyY2gvYnJvd3NlIHBhZ2U6PC9wPlxuPGRpdiBjbGFzcz1cInBlb3BsZS12ZXJ0aWNhbFwiPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiUXVpbm4gSGFydFwiXG4gICAgYXZhdGFyLXNyYz1cImh0dHBzOi8vd3d3LmxpYnJhcnkudWNkYXZpcy5lZHUvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDIvcXVpbm4tMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGhyZWY9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L2F1dGhvci9xdWlubi1oYXJ0L1wiXG4gICAgdGl0bGU9XCJEaWdpdGFsIEFwcGxpY2F0aW9ucyBNYW5hZ2VyXCJcbiAgICBiYWRnZXM9J1tcImZvby1iYXJcIl0nPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8aHIgY2xhc3M9XCJkb3R0ZWQgbGlnaHRcIi8+XG4gIDxycC1wZXJzb24tcHJldmlld1xuICAgIG5hbWU9XCJQZXRlciBCcmFudGx5XCJcbiAgICBhdmF0YXItc3JjPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMi9wYl9hc2lsb21hcl8yNDc1LVBldGVyLUJyYW50bGV5LTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiXG4gICAgYmFkZ2VzPSdbe1widGV4dFwiIDogXCJJbSBhIGxpbmshXCIsIFwiaHJlZlwiIDogXCJodHRwczovL2dvb2dsZS5jb21cIn1dJz5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPGhyIGNsYXNzPVwiZG90dGVkIGxpZ2h0XCIvPlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiTWFuIG9mIE15c3RlcnlcIlxuICAgIHRpdGxlPVwiSGFzIG5vIGF2YXRhci1zcmMgb3IgaHJlZiBhdHRyaWJ1dGVzXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gIDxociBjbGFzcz1cImRvdHRlZCBsaWdodFwiLz5cbjwvZGl2PlxuPHA+b3IgaW4gY29sdW1ucyBsaWtlIG9uIHRoZSBob21lcGFnZTo8L3A+XG48ZGl2IGNsYXNzPVwicGVvcGxlLWNvbHVtbnNcIj5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlF1aW5uIEhhcnRcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3F1aW5uLTI4MHgzNTAtYy1jZW50ZXIuanBnXCJcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcXVpbm4taGFydC9cIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICB0aXRsZT1cIkRpZ2l0YWwgQXBwbGljYXRpb25zIE1hbmFnZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIlBldGVyIEJyYW50bHlcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAyL3BiX2FzaWxvbWFyXzI0NzUtUGV0ZXItQnJhbnRsZXktMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvcGV0ZXItYnJhbnRsZXkvXCJcbiAgICB0aXRsZT1cIkRpcmVjdG9yIG9mIE9ubGluZSBTdHJhdGVneVwiPlxuICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICBuYW1lPVwiSnVzdGluIE1lcnpcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2hlYWRzaG90X2Nyb3BwZWQtMjgweDM1MC1jLWNlbnRlci5wbmdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3IvanVzdGluLW1lcnovXCJcbiAgICB0aXRsZT1cIlJlc2VhcmNoIFN1cHBvcnQgRW5naW5lZXJcIj5cbiAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgbmFtZT1cIktpbW15IEhlc2NvY2tcIlxuICAgIGF2YXRhci1zcmM9XCJodHRwczovL3d3dy5saWJyYXJ5LnVjZGF2aXMuZWR1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA3L0tpbW15MjAxOC0wMS0wMDEtMjgweDM1MC1jLWNlbnRlci5qcGdcIlxuICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlicmFyeS51Y2RhdmlzLmVkdS9hdXRob3Iva2ltbXktaGVzY29jay9cIlxuICAgIHRpdGxlPVwiVXNlciBFeHBlcmllbmNlIERlc2lnbmVyXCI+XG4gIDwvcnAtcGVyc29uLXByZXZpZXc+XG48L2Rpdj5cbjxwPkJlY2F1c2Ugb2YgdGhlIGdlbmVyYWwgYXdmdWxsbmVzcyBvZiB0aGUgY3NzIG92ZXJmbG93IHByb3BlcnRpZXMsIHlvdSBoYXZlIHRvIHNldCB0aGUgdGV4dFdpZHRoIHByb3BlcnR5IGluIGEgcmVzaXplIGV2ZW50LjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24+XG48aDI+UXVpY2sgU2VhcmNoPC9oMj5cbjxwPiBVc2UgPGNvZGU+QG5ldy1zZWFyY2g9XCJcXCR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwicXVpY2stc2VhcmNoLWNvbnRhaW5lclwiPlxuPHJwLXF1aWNrLXNlYXJjaCBAbmV3LXNlYXJjaD1cIiR7KGUpID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LmlucHV0VmFsdWUpfVwiPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG5cbjxwPlVzZSA8Y29kZT5pbnB1dC12YWx1ZTwvY29kZT4gYW5kIDxjb2RlPm9wZW5lZDwvY29kZT4gYXR0cmlidXRlcyB0byBjaGFuZ2UgaW5pdGlhbCByZW5kZXIgc3RhdGUuPC9wPlxuPGRpdiBjbGFzcz1cInF1aWNrLXNlYXJjaC1jb250YWluZXJcIj5cbjxycC1xdWljay1zZWFyY2ggaW5wdXQtdmFsdWU9XCJBIHByZS1sb2FkZWQgc2VhcmNoXCIgb3BlbmVkPjwvcnAtcXVpY2stc2VhcmNoPlxuPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgyPk1haW4gU2VhcmNoIFdpZGdldDwvaDI+XG48cD4gVXNlIDxjb2RlPkBuZXctc2VhcmNoPVwiXFwkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPC9jb2RlPiB0byBsaXN0ZW4gZm9yIHNlYXJjaC48L3A+XG48ZGl2IGNsYXNzPVwic2VhcmNoLWJsdWVcIj5cbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICA8cnAtc2VhcmNoIHN0eWxlPVwid2lkdGg6NzUlXCIgQG5ldy1zZWFyY2g9XCIkeyhlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC5zZWFyY2hPYmplY3QpfVwiPjwvcnAtc2VhcmNoPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uPlxuPGgxPlZpZXcgQWxsPC9oMT5cbjxwPkRlYWQgc2ltcGxlIGVsZW1lbnQgdGhhdCBkaXNwbGF5cyBhIFZpZXcgQWxsIGxpbmsuIFVzZSB0aGUgPGNvZGU+dGV4dDwvY29kZT4gYXR0cmlidXRlIHRvIGN1c3RvbWl6ZSwgYW5kIDxjb2RlPmp1c3RpZnk8L2NvZGU+IHRvIGNvbnRyb2wgaG9yaXpvbnRhbCBhbGlnbm1lbnQuPC9wPlxuPHJwLXZpZXctYWxsIGp1c3RpZnk9XCJzdGFydFwiPjwvcnAtdmlldy1hbGw+XG48cnAtdmlldy1hbGwgdGV4dD1cIlZpZXcgQWxsIFBlb3BsZVwiPjwvcnAtdmlldy1hbGw+XG48L3NlY3Rpb24+XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtcGVvcGxlLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYS16XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VQZW9wbGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1wZW9wbGUnLCBScFBhZ2VQZW9wbGUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDAgNDBweDtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIGJnLWxpZ2h0IHRvcFwiPlxuICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHNcIj5cbiAgICAgIDxoMT5QZW9wbGU8L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgPHJwLWEtej48L3JwLWEtej5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxocj5cbiAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPjwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=