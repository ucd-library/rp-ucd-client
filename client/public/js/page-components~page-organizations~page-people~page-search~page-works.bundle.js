(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-components~page-organizations~page-people~page-search~page-works"],{

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
    disabledLetters: {type: Array},
    disabledLettersFmt: {type: Array},
    selectedLetter: {type: String, attribute: 'selected-letter'},
  };
  }

  constructor() {
    super();
    this.render = _a_z_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this.disabledLetters = [];
    this.disabledLettersFmt = [];
    this.selectedLetter = 'All';
    this._changedLetter = new CustomEvent('changed-letter', {
      detail: {
        message: 'A new letter has been selected.'
      }
    });
  }

  updated(props) {
    if (props.has('disabledLetters')) {
      this.disabledLettersFmt = this.disabledLetters.map(x => x.toUpperCase());
    }
  }

  _renderAz(letter) {
    let selected = "";
    if (this.selectedLetter) {
      if (this.selectedLetter.toLowerCase() === letter.toLowerCase()) {
        selected = "selected"
      }
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div @click="${this.handleClick}"
                     ?disabled="${this.disabledLettersFmt.includes(letter)}"
                     class="letter ${selected}"
                     letter="${letter}">${letter}</div>`
  }
  handleClick(e) {
    let new_letter = e.target.getAttribute('letter').toLowerCase();
    if (new_letter != this.selectedLetter && !e.target.hasAttribute('disabled')) {
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
    .letter[disabled] {
      pointer-events: none;
      cursor: auto;
      color: var(--tcolor-link-disabled-text);
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
    let href = "";
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
      if (link.href) href = link.href;
    }

    if (index == this.currentLink) {
      classes['selected'] = true;
    }
    if (this.hasHeaderLink && index == 0) {
      classes['link-header'] = true;
    }
    classes['disabled'] = disabled;

    if (href) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a link="${index}" class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes)}" href="${href}">${text}</a>`;
    }

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
    a {
      text-decoration: none;
      color: var(--tcolor-link-text);
    }
    .link:hover, a.link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.selected, a.link.selected {
      pointer-events: none;
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      cursor: auto;
      border-bottom: 2px solid var(--tcolor-secondary);
    }
    .link.disabled, a.link.disabled {
      color: var(--tcolor-link-disabled-text);
      pointer-events: none;
      cursor: auto;
    }
    link.disabeld:hover, a.link.disabled:hover {
      color: var(--tcolor-link-disabled-text);
    }
    .link.selected:hover, a.link.selected:hover {
      color: var(--tcolor-text);
    }
  </style>
  <div class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._containerClasses)}>
    ${this.links.map((link, index) => this._renderLink(link, index))}
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/organization-preview.js":
/*!************************************************************!*\
  !*** ./public/elements/components/organization-preview.js ***!
  \************************************************************/
/*! exports provided: RpOrganizationPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpOrganizationPreview", function() { return RpOrganizationPreview; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _organization_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-preview.tpl.js */ "./public/elements/components/organization-preview.tpl.js");




class RpOrganizationPreview extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    data: {type: Object},
    href: {type: String},
    organizationPath: {type: String},
    jsonldContext: {type: String}
  };
  }

  constructor() {
    super();
    this.organizationPath = "/organization/";
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.render = _organization_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }

  _renderNameLink() {
    let href = "";
    if (this.href) {
      href = this.href;
    }
    else {
      try {
          let id = this.data['@id'].split(`${this.jsonldContext}:g-`)[1];
          href = this.organizationPath + id;
      } catch (error) {
          console.warn("Unable to construct org href.");
      }
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a class="name" href="${href}" ?disabled="${!href}">${this.data.label}</a>`;
  }
}

customElements.define('rp-organization-preview', RpOrganizationPreview);


/***/ }),

/***/ "./public/elements/components/organization-preview.tpl.js":
/*!****************************************************************!*\
  !*** ./public/elements/components/organization-preview.tpl.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");

//import { styleMap } from 'lit-html/directives/style-map';

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
    .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .name {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
    }
    .author {
      color : var(--tcolor-link-text);
    }
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--tcolor-link-text);
    }
  </style>
  <div class=container>
    <div class="icon-container"><iron-icon icon="group-work"></iron-icon></div>
    <div class="text-container">
        ${this._renderNameLink()}
    </div>
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

/***/ "./public/elements/components/work-preview.js":
/*!****************************************************!*\
  !*** ./public/elements/components/work-preview.js ***!
  \****************************************************/
/*! exports provided: RpWorkPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpWorkPreview", function() { return RpWorkPreview; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _work_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-preview.tpl.js */ "./public/elements/components/work-preview.tpl.js");




class RpWorkPreview extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    data: {type: Object},
    href: {type: String},
    workPath: {type: String},
    grpsWithLinks: {type: String},
    authorPath: {type: String},
    jsonldContext: {type: String}
  };
  }

  constructor() {
    super();
    this.workPath = "/work/";
    this.authorPath = "/individual/";
    this.grpsWithLinks = ["vivo:FacultyMember"];
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
    this.render = _work_preview_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
  }

  _renderTitleLink() {
      let href = "";
      if (this.href) {
        href = this.href;
      }
      else {
        try {
            let id = this.data['@id'].split(`${this.jsonldContext}:publication`)[1];
            href = this.workPath + id;
        } catch (error) {
            console.warn("Unable to construct work href.");
        }
      }
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a class="title" href="${href}" ?disabled="${!href}">${this.data.label}</a>`;
  }

  _renderAuthors(){
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
        author.href = "";
        try {
            if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
                author.identifiers = [author.identifiers]
            }
            for (let id of author.identifiers) {
                if (this.grpsWithLinks.includes(id['@type'])) {
                    author.href = this.authorPath + id['@id'].replace(this.jsonldContext + ":", "");
                }
            }

        } catch (error) {
            console.warn("Unable to construct author href.");
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
    }
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="authors">${authors.map(author => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a class="author" href="${author.href}" ?disabled="${!author.href}">${author.nameLast}, ${author.nameFirst}</a>; `)}</div>`;
  }
}

customElements.define('rp-work-preview', RpWorkPreview);


/***/ }),

/***/ "./public/elements/components/work-preview.tpl.js":
/*!********************************************************!*\
  !*** ./public/elements/components/work-preview.tpl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");

//import { styleMap } from 'lit-html/directives/style-map';

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
    .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .title {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
    }
    .author {
      color : var(--tcolor-link-text);
    }
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--tcolor-link-text);
    }
  </style>
  <div class=container>
    <div class="icon-container"><iron-icon icon="av:library-books"></iron-icon></div>
    <div class="text-container">
      ${this._renderTitleLink()}
      ${this._renderAuthors()}
    </div>
  </div>

  `;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hLXouanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYS16LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL29yZ2FuaXphdGlvbi1wcmV2aWV3LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BhZ2luYXRpb24udHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3LnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy93b3JrLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvd29yay1wcmV2aWV3LnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDYjs7QUFFM0IsbUJBQW1CLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQSxjQUFjLHFDQUFxQztBQUNuRCxzQkFBc0IsWUFBWTtBQUNsQyx5QkFBeUIsWUFBWTtBQUNyQyxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtREFBTTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSxnQkFBZ0IsaUJBQWlCO0FBQ2hELGtDQUFrQyx5Q0FBeUM7QUFDM0UscUNBQXFDLFNBQVM7QUFDOUMsK0JBQStCLE9BQU8sSUFBSSxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQW1DO0FBQ3BCO0FBQ2YsU0FBUyxnREFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50c35wYWdlLW9yZ2FuaXphdGlvbnN+cGFnZS1wZW9wbGV+cGFnZS1zZWFyY2h+cGFnZS13b3Jrcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Etei50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBWiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgaGlkZUFsbDoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2hpZGUtYWxsJ30sXG4gICAgZGlzYWJsZWRMZXR0ZXJzOiB7dHlwZTogQXJyYXl9LFxuICAgIGRpc2FibGVkTGV0dGVyc0ZtdDoge3R5cGU6IEFycmF5fSxcbiAgICBzZWxlY3RlZExldHRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnc2VsZWN0ZWQtbGV0dGVyJ30sXG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmF6bGlzdCA9IFsuLi4nQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonXTtcbiAgICB0aGlzLmRpc2FibGVkTGV0dGVycyA9IFtdO1xuICAgIHRoaXMuZGlzYWJsZWRMZXR0ZXJzRm10ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZExldHRlciA9ICdBbGwnO1xuICAgIHRoaXMuX2NoYW5nZWRMZXR0ZXIgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtbGV0dGVyJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsZXR0ZXIgaGFzIGJlZW4gc2VsZWN0ZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXMoJ2Rpc2FibGVkTGV0dGVycycpKSB7XG4gICAgICB0aGlzLmRpc2FibGVkTGV0dGVyc0ZtdCA9IHRoaXMuZGlzYWJsZWRMZXR0ZXJzLm1hcCh4ID0+IHgudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckF6KGxldHRlcikge1xuICAgIGxldCBzZWxlY3RlZCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRMZXR0ZXIpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGV0dGVyLnRvTG93ZXJDYXNlKCkgPT09IGxldHRlci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHNlbGVjdGVkID0gXCJzZWxlY3RlZFwiXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWRMZXR0ZXJzRm10LmluY2x1ZGVzKGxldHRlcil9XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGV0dGVyICR7c2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAgICAgIGxldHRlcj1cIiR7bGV0dGVyfVwiPiR7bGV0dGVyfTwvZGl2PmBcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19sZXR0ZXIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xldHRlcicpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5ld19sZXR0ZXIgIT0gdGhpcy5zZWxlY3RlZExldHRlciAmJiAhZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTGV0dGVyID0gbmV3X2xldHRlcjtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9jaGFuZ2VkTGV0dGVyKTtcbiAgICB9XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXRoaXMuaGlkZUFsbCkge1xuICAgICAgdGhpcy5hemxpc3QudW5zaGlmdCgnQWxsJyk7XG4gICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hLXonLCBScEFaKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAubGV0dGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLXdpZHRoOiAyMnB4O1xuICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5sZXR0ZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGV0dGVyW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxldHRlci5zZWxlY3RlZCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5sZXR0ZXIuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgICR7dGhpcy5hemxpc3QubWFwKGxldHRlciA9PiB0aGlzLl9yZW5kZXJBeihsZXR0ZXIpKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FsZXJ0LnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEFsZXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aGVtZUNvbG9yID0gJ2Rhbmdlcic7XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbdGhpcy50aGVtZUNvbG9yXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWxlcnQnLCBScEFsZXJ0KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmRhbmdlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciBpcm9uLWljb24ge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hdmF0YXIudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQXZhdGFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplICYmIHRoaXMuc2l6ZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1sncGhvdG8nXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHJlbmRlckZhY2UoKSB7XG4gICAgaWYgKCF0aGlzLnNyYyB8fCB0aGlzLnNyYyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGh0bWxgPGlyb24taWNvbiBpY29uPSdmYWNlJz48L2lyb24taWNvbj5gO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWF2YXRhcicsIFJwQXZhdGFyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1sZyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAuY2lyY2xlLnNpemUtc20ge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICAgIC5waG90byB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjaXJjbGUgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICR7dGhpcy5yZW5kZXJGYWNlKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2JhZGdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICBjb2xvclNlcXVlbmNlOiB7dHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdjb2xvci1zZXF1ZW5jZSd9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1heENvbG9yID0gNjtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sb3JTZXF1ZW5jZSkge1xuICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKHRoaXMuY29sb3JTZXF1ZW5jZSk7XG4gICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHNpYmxpbmdzID0gWy4uLnRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzXS5maWx0ZXIobiA9PiBuLnRhZ05hbWUgPT09IHRoaXMudGFnTmFtZSk7XG4gICAgICBpZiAoc2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbiA9IHNpYmxpbmdzLmluZGV4T2YodGhpcykgJSB0aGlzLm1heENvbG9yO1xuICAgICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGFzc2VzWydjb2xvci0wJ10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxuXG4gIF9yZW5kZXJCYWRnZSgpIHtcbiAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICByZXR1cm4gaHRtbGA8YSBocmVmPSR7dGhpcy5ocmVmfT4ke3RoaXMuX3JlbmRlclNwYW4oKX08L2E+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGAke3RoaXMuX3JlbmRlclNwYW4oKX1gO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJTcGFuKCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+YDtcbiAgfVxuXG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWJhZGdlJywgUnBCYWRnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gLjdlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIHNwYW4uc2l6ZS1sZyB7XG4gICAgcGFkZGluZzogLjU1ZW0gLjllbTtcbiAgfVxuICBhOmhvdmVyIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgICAgIGNvbG9yOiAgdmFyKC0tdGNvbG9yLWhvdmVyLXRleHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICB9XG4gIHNwYW4uY29sb3ItMCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MCk7XG4gIH1cbiAgc3Bhbi5jb2xvci0xIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQxKTtcbiAgfVxuICBzcGFuLmNvbG9yLTIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDIpO1xuICB9XG4gIHNwYW4uY29sb3ItMyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Myk7XG4gIH1cbiAgc3Bhbi5jb2xvci00IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQ0KTtcbiAgfVxuICBzcGFuLmNvbG9yLTUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDUpO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBhOmxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cblxuPC9zdHlsZT5cbiAgJHt0aGlzLl9yZW5kZXJCYWRnZSgpfVxuYDt9XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpbmstbGlzdC50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBScExpbmtMaXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rczoge3R5cGU6IEFycmF5fSxcbiAgICBjdXJyZW50TGluazogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LWxpbmsnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBkaXJlY3Rpb246IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2RpcmVjdGlvbid9LFxuICAgIGhhc0hlYWRlckxpbms6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdoYXMtaGVhZGVyLWxpbmsnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3YnO1xuICAgIHRoaXMuY3VycmVudExpbmsgPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXMgPSB7Y29udGFpbmVyOiB0cnVlfTtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG5cbiAgICB0aGlzLl9jaGFuZ2VkTGluayA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1saW5rJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgaWYgKG5hbWUgPT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMudikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXJDbGFzc2VzLnZcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW25ld1ZhbC50b0xvd2VyQ2FzZSgpWzBdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKTtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGhyZWYgPSBcIlwiO1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGxldCBjbGFzc2VzID0ge2xpbms6IHRydWV9O1xuICAgIGlmICh0eXBlb2YgbGluayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRleHQgPSBsaW5rO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbGluayA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRleHQgPSBsaW5rLnRleHQ7XG4gICAgICBpZiAobGluay5kaXNhYmxlZCkge1xuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobGluay5ocmVmKSBocmVmID0gbGluay5ocmVmO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRMaW5rKSB7XG4gICAgICBjbGFzc2VzWydzZWxlY3RlZCddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzSGVhZGVyTGluayAmJiBpbmRleCA9PSAwKSB7XG4gICAgICBjbGFzc2VzWydsaW5rLWhlYWRlciddID0gdHJ1ZTtcbiAgICB9XG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuXG4gICAgaWYgKGhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxhIGxpbms9XCIke2luZGV4fVwiIGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIiBocmVmPVwiJHtocmVmfVwiPiR7dGV4dH08L2E+YDtcbiAgICB9XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluaz1cIiR7aW5kZXh9XCIgY2xhc3M9JHtjbGFzc01hcChjbGFzc2VzKX0+JHt0ZXh0fTwvZGl2PmA7XG4gICAgfVxuXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19saW5rID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rJykpO1xuICAgIGlmICgobmV3X2xpbmsgIT0gdGhpcy5jdXJyZW50TGluaykgJiYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMaW5rID0gbmV3X2xpbms7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExpbmspO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0JywgUnBMaW5rTGlzdCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmgge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXIuaCAubGluayB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxuICAgIC5jb250YWluZXIudiB7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5jb250YWluZXIudiAubGluayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIsIGEubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkLCBhLmxpbmsuc2VsZWN0ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCwgYS5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyLCBhLmxpbmsuZGlzYWJsZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZDpob3ZlciwgYS5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5fY29udGFpbmVyQ2xhc3Nlcyl9PlxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9vcmdhbml6YXRpb24tcHJldmlldy50cGwuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBScE9yZ2FuaXphdGlvblByZXZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHt0eXBlOiBPYmplY3R9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIG9yZ2FuaXphdGlvblBhdGg6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGpzb25sZENvbnRleHQ6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3JnYW5pemF0aW9uUGF0aCA9IFwiL29yZ2FuaXphdGlvbi9cIjtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX3JlbmRlck5hbWVMaW5rKCkge1xuICAgIGxldCBocmVmID0gXCJcIjtcbiAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICBocmVmID0gdGhpcy5ocmVmO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGlkID0gdGhpcy5kYXRhWydAaWQnXS5zcGxpdChgJHt0aGlzLmpzb25sZENvbnRleHR9OmctYClbMV07XG4gICAgICAgICAgaHJlZiA9IHRoaXMub3JnYW5pemF0aW9uUGF0aCArIGlkO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gY29uc3RydWN0IG9yZyBocmVmLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGEgY2xhc3M9XCJuYW1lXCIgaHJlZj1cIiR7aHJlZn1cIiA/ZGlzYWJsZWQ9XCIkeyFocmVmfVwiPiR7dGhpcy5kYXRhLmxhYmVsfTwvYT5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtb3JnYW5pemF0aW9uLXByZXZpZXcnLCBScE9yZ2FuaXphdGlvblByZXZpZXcpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50Jztcbi8vaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBmb250LXdlaWdodCA6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgICAuYXV0aG9yIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIGFbZGlzYWJsZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+PGlyb24taWNvbiBpY29uPVwiZ3JvdXAtd29ya1wiPjwvaXJvbi1pY29uPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAke3RoaXMuX3JlbmRlck5hbWVMaW5rKCl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcGFnaW5hdGlvbi50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBQYWdpbmF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBjdXJyZW50UGFnZTogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBtYXhQYWdlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnbWF4LXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBtaW5QYWdlOiB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnbWluLXBhZ2UnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwYWdlc1BlclNpZGU6IHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdwYWdlcy1wZXItc2lkZSd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wYWdlc1BlclNpZGUgPSAxO1xuICAgIHRoaXMubWluUGFnZSA9IDE7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMubWluUGFnZTtcbiAgICB0aGlzLm1heFBhZ2UgPSB0aGlzLmN1cnJlbnRQYWdlO1xuXG4gICAgdGhpcy5fY2hhbmdlZFBhZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtcGFnZScsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgcGFnZSBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfaGFzVmFsaWRMb2dpYygpIHtcbiAgICBpZiAodGhpcy5tYXhQYWdlIDwgdGhpcy5jdXJyZW50UGFnZSB8fCB0aGlzLm1heFBhZ2UgPCB0aGlzLm1pblBhZ2UgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMubWluUGFnZSA+IHRoaXMuY3VycmVudFBhZ2UgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckVkZ2UoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNWYWxpZExvZ2ljKCkpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSB7XG4gICAgICBpZiAoKHRoaXMuY3VycmVudFBhZ2UgLSB0aGlzLm1pblBhZ2UpID4gKHRoaXMucGFnZXNQZXJTaWRlICsgMSkpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5taW5QYWdlfVwiPiR7dGhpcy5taW5QYWdlfTwvZGl2PjxkaXYgY2xhc3M9XCJlbGxpcHNpc1wiPi4uLjwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICBpZiAoKHRoaXMubWF4UGFnZSAtIHRoaXMuY3VycmVudFBhZ2UpID4gKHRoaXMucGFnZXNQZXJTaWRlICsgMSkpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+Li4uPC9kaXY+PGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgY2xhc3M9XCJwYWdlXCIgcGFnZT1cIiR7dGhpcy5tYXhQYWdlfVwiPiR7dGhpcy5tYXhQYWdlfTwvZGl2PmA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlckNlbnRlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhc1ZhbGlkTG9naWMoKSkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cIiR7Y2xhc3NNYXAoe3BhZ2U6IHRydWUsIHNlbGVjdGVkOiB0cnVlfSl9XCIgcGFnZT1cIiR7dGhpcy5jdXJyZW50UGFnZX1cIj4ke3RoaXMuY3VycmVudFBhZ2V9PC9kaXY+YDtcbiAgICB9XG5cbiAgICBsZXQgcGFnZXMgPSBbe3BhZ2U6IHRoaXMuY3VycmVudFBhZ2UsIHNlbGVjdGVkOiB0cnVlfV07XG4gICAgbGV0IHJlbWFpbmRlciA9IHRoaXMucGFnZXNQZXJTaWRlICogMjtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgYWRkUGFnZXModGhpcy5wYWdlc1BlclNpZGUpO1xuICAgIGFkZFBhZ2VzKHJlbWFpbmRlcik7XG5cbiAgICBpZiAocGFnZXNbMF0ucGFnZSAtIHRoaXMubWluUGFnZSA9PT0gMSkge1xuICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogdGhpcy5taW5QYWdlLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4UGFnZSAtIHBhZ2VzLnNsaWNlKC0xKVswXS5wYWdlID09PSAxKSB7XG4gICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLm1heFBhZ2UsIHNlbGVjdGVkOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYCR7cGFnZXMubWFwKHBhZ2UgPT4gaHRtbGA8ZGl2IEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XCJwYWdlXCI6IHRydWUsIHNlbGVjdGVkOiBwYWdlLnNlbGVjdGVkfSl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPVwiJHtwYWdlLnBhZ2V9XCI+JHtwYWdlLnBhZ2V9PC9kaXY+YCl9YDtcblxuICAgIGZ1bmN0aW9uIGFkZFBhZ2VzKGxvb3BzKXtcbiAgICAgIGxldCBkaXJlY3Rpb25zID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gICAgICBmb3IgKGxldCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9ucykge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHBhZ2VzWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPiBzZWxmLm1pblBhZ2UpIHtcbiAgICAgICAgICAgICAgcGFnZXMudW5zaGlmdCh7cGFnZTogZmlyc3QgLSAxLCBzZWxlY3RlZDogZmFsc2V9KTtcbiAgICAgICAgICAgICAgcmVtYWluZGVyIC09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsYXN0ID0gcGFnZXMuc2xpY2UoLTEpWzBdLnBhZ2U7XG4gICAgICAgICAgICBpZiAobGFzdCA8IHNlbGYubWF4UGFnZSkge1xuICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiBsYXN0ICsgMSwgc2VsZWN0ZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgIHJlbWFpbmRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19wYWdlID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdwYWdlJykpO1xuICAgIGlmIChuZXdfcGFnZSAhPSB0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbmV3X3BhZ2U7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZFBhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2luYXRpb24nLCBScFBhZ2luYXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5jb250YWluZXItY2VudGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5wYWdlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnBhZ2U6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAucGFnZS5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHBvaW50ZXItZXZlbnQ6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIC5wYWdlLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5lbGxpcHNpcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgaXJvbi1pY29uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgaXJvbi1pY29uW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnktZGlzYWJsZWQpO1xuICAgIH1cbiAgICBpcm9uLWljb25bZGlzYWJsZWRdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeS1kaXNhYmxlZCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgIDxpcm9uLWljb24gP2Rpc2FibGVkPVwiJHt0aGlzLmN1cnJlbnRQYWdlID09IHRoaXMubWluUGFnZSB8fCAhdGhpcy5faGFzVmFsaWRMb2dpYygpIH1cIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlIC0gMX1cIlxuICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWJhY2tcIj5cbiAgICA8L2lyb24taWNvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWNlbnRlclwiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdsZWZ0Jyl9XG4gICAgICAke3RoaXMuX3JlbmRlckNlbnRlcigpfVxuICAgICAgJHt0aGlzLl9yZW5kZXJFZGdlKCdyaWdodCcpfVxuICAgIDwvZGl2PlxuICAgIDxpcm9uLWljb24gP2Rpc2FibGVkPVwiJHt0aGlzLmN1cnJlbnRQYWdlID09IHRoaXMubWF4UGFnZSB8fCAhdGhpcy5faGFzVmFsaWRMb2dpYygpIH1cIlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiXG4gICAgICAgICAgICAgICBwYWdlPVwiJHt0aGlzLmN1cnJlbnRQYWdlICsgMX1cIlxuICAgICAgICAgICAgICAgaWNvbj1cImFycm93LWZvcndhcmRcIj5cbiAgICA8L2lyb24taWNvbj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3BlcnNvbi1wcmV2aWV3LnRwbC5qcyc7XG5cbmltcG9ydCBcIi4vYmFkZ2VcIjtcblxuZXhwb3J0IGNsYXNzIFJwUGVyc29uUHJldmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGJhZGdlczoge3R5cGU6IEFycmF5fSxcbiAgICBhdmF0YXJTaXplOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdhdmF0YXItc2l6ZSd9LFxuICAgIGF2YXRhclNyYzoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnYXZhdGFyLXNyYyd9LFxuICAgIHRleHRXaWR0aDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGV4dC13aWR0aCd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmJhZGdlcyA9IFtdO1xuICAgIHRoaXMudGV4dFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKCkgLSA3MCkgKyBcInB4XCI7XG4gIH1cblxuICBfcmVuZGVyQmFkZ2UoYmFkZ2UpIHtcbiAgICBpZiAodHlwZW9mIGJhZGdlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGh0bWxgPHJwLWJhZGdlPiR7YmFkZ2V9PC9ycC1iYWRnZT5gO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYmFkZ2UgPT09ICdvYmplY3QnKXtcbiAgICAgIGxldCB0ID0gYmFkZ2UudGV4dDtcbiAgICAgIGlmICghdCkge1xuICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgfVxuICAgICAgbGV0IGhyZWYgPSBiYWRnZS5ocmVmO1xuICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPHJwLWJhZGdlIGhyZWY9XCIke2hyZWZ9XCI+JHt0fTwvcnAtYmFkZ2U+YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZT4ke3R9PC9ycC1iYWRnZT5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGVyc29uLXByZXZpZXcnLCBScFBlcnNvblByZXZpZXcpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuaW1wb3J0IFwiLi9hdmF0YXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgY29sb3IgOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0IDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYW1lOmhvdmVyIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5uYW1lW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLm5hbWVbZGlzYWJsZWRdOmhvdmVyIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZSA6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cbiAgICBzbWFsbC5iYWRnZXMge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgPHJwLWF2YXRhciBzaXplPVwiJHt0aGlzLmF2YXRhclNpemV9XCIgc3JjPVwiJHt0aGlzLmF2YXRhclNyY31cIj48L3JwLWF2YXRhcj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIiBzdHlsZT1cIiR7c3R5bGVNYXAoe1wibWF4LXdpZHRoXCIgOiB0aGlzLnRleHRXaWR0aH0pfVwiPlxuICAgICAgPGEgY2xhc3M9XCJuYW1lXCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiID9kaXNhYmxlZD1cIiR7IXRoaXMuaHJlZn1cIj4ke3RoaXMubmFtZX08L2E+XG4gICAgICA8c21hbGw+JHt0aGlzLnRpdGxlfTwvc21hbGw+XG4gICAgICA8c21hbGwgY2xhc3M9XCJiYWRnZXNcIj4ke3RoaXMuYmFkZ2VzLm1hcChiID0+IHRoaXMuX3JlbmRlckJhZGdlKGIpKX08L3NtYWxsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi93b3JrLXByZXZpZXcudHBsLmpzJztcblxuXG5leHBvcnQgY2xhc3MgUnBXb3JrUHJldmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge3R5cGU6IE9iamVjdH0sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgd29ya1BhdGg6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGdycHNXaXRoTGlua3M6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGF1dGhvclBhdGg6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGpzb25sZENvbnRleHQ6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMud29ya1BhdGggPSBcIi93b3JrL1wiO1xuICAgIHRoaXMuYXV0aG9yUGF0aCA9IFwiL2luZGl2aWR1YWwvXCI7XG4gICAgdGhpcy5ncnBzV2l0aExpbmtzID0gW1widml2bzpGYWN1bHR5TWVtYmVyXCJdO1xuICAgIHRoaXMuanNvbmxkQ29udGV4dCA9IEFQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0O1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBfcmVuZGVyVGl0bGVMaW5rKCkge1xuICAgICAgbGV0IGhyZWYgPSBcIlwiO1xuICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICBocmVmID0gdGhpcy5ocmVmO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmRhdGFbJ0BpZCddLnNwbGl0KGAke3RoaXMuanNvbmxkQ29udGV4dH06cHVibGljYXRpb25gKVsxXTtcbiAgICAgICAgICAgIGhyZWYgPSB0aGlzLndvcmtQYXRoICsgaWQ7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gY29uc3RydWN0IHdvcmsgaHJlZi5cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBodG1sYDxhIGNsYXNzPVwidGl0bGVcIiBocmVmPVwiJHtocmVmfVwiID9kaXNhYmxlZD1cIiR7IWhyZWZ9XCI+JHt0aGlzLmRhdGEubGFiZWx9PC9hPmA7XG4gIH1cblxuICBfcmVuZGVyQXV0aG9ycygpe1xuICAgIGxldCBhdXRob3JzID0gW107XG4gICAgaWYgKHRoaXMuZGF0YS5BdXRob3JzaGlwICYmIHR5cGVvZiB0aGlzLmRhdGEuQXV0aG9yc2hpcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBhdXRocyA9IHRoaXMuZGF0YS5BdXRob3JzaGlwO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGF1dGhzKSkge1xuICAgICAgICBhdXRocyA9IFthdXRoc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBhdXRob3Igb2YgYXV0aHMpIHtcbiAgICAgICAgaWYgKCFhdXRob3IuaGFzTmFtZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGF1dGhvci5uYW1lRmlyc3QgPSBhdXRob3IuaGFzTmFtZS5naXZlbk5hbWU7XG4gICAgICAgIGF1dGhvci5uYW1lTGFzdCA9IGF1dGhvci5oYXNOYW1lLmZhbWlseU5hbWU7XG4gICAgICAgIGlmICghYXV0aG9yWyd2aXZvOnJhbmsnXSkge1xuICAgICAgICAgIGF1dGhvclsndml2bzpyYW5rJ10gPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3IuaHJlZiA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGF1dGhvci5pZGVudGlmaWVycyA9PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhdXRob3IuaWRlbnRpZmllcnMpKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yLmlkZW50aWZpZXJzID0gW2F1dGhvci5pZGVudGlmaWVyc11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGlkIG9mIGF1dGhvci5pZGVudGlmaWVycykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdycHNXaXRoTGlua3MuaW5jbHVkZXMoaWRbJ0B0eXBlJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvci5ocmVmID0gdGhpcy5hdXRob3JQYXRoICsgaWRbJ0BpZCddLnJlcGxhY2UodGhpcy5qc29ubGRDb250ZXh0ICsgXCI6XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIGNvbnN0cnVjdCBhdXRob3IgaHJlZi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9ycy5wdXNoKGF1dGhvcik7XG4gICAgICB9XG4gICAgICBhdXRob3JzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGFbJ3Zpdm86cmFuayddIC0gYlsndml2bzpyYW5rJ107XG4gICAgICB9KTtcbiAgICB9XG5yZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiYXV0aG9yc1wiPiR7YXV0aG9ycy5tYXAoYXV0aG9yID0+IGh0bWxgPGEgY2xhc3M9XCJhdXRob3JcIiBocmVmPVwiJHthdXRob3IuaHJlZn1cIiA/ZGlzYWJsZWQ9XCIkeyFhdXRob3IuaHJlZn1cIj4ke2F1dGhvci5uYW1lTGFzdH0sICR7YXV0aG9yLm5hbWVGaXJzdH08L2E+OyBgKX08L2Rpdj5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtd29yay1wcmV2aWV3JywgUnBXb3JrUHJldmlldyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuLy9pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBmb250LXdlaWdodCA6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgICAuYXV0aG9yIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIGFbZGlzYWJsZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBhW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+PGlyb24taWNvbiBpY29uPVwiYXY6bGlicmFyeS1ib29rc1wiPjwvaXJvbi1pY29uPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJUaXRsZUxpbmsoKX1cbiAgICAgICR7dGhpcy5fcmVuZGVyQXV0aG9ycygpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICBgO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==