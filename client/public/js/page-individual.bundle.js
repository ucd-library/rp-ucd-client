(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-individual"],{

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

/***/ "./public/elements/pages/individual/rp-page-individual.js":
/*!****************************************************************!*\
  !*** ./public/elements/pages/individual/rp-page-individual.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageIndividual; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_individual_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-individual.tpl.js */ "./public/elements/pages/individual/rp-page-individual.tpl.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/avatar */ "./public/elements/components/avatar.js");
/* harmony import */ var _components_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/badge */ "./public/elements/components/badge.js");
/* harmony import */ var _components_citation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/citation */ "./public/elements/components/citation.js");
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");













class RpPageIndividual extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      individual: {type: Object},
      individualId: {type: String},
      individualStatus: {type: String},
      publicationStatus: {type: String},
      retrievedPublications: {type: Array},
      totalPublications: {type: parseInt},
      researchSubjects: {type: Array},
      researchSubjectsToShow: {type: Number},
      activeSection: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_individual_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.individual = {};
    this.individualId = '';
    this.individualStatus = 'loading';
    this.publicationStatus = 'loading';
    this.retrievedPublications = [];
    this.totalPublications = 0;
    this.researchSubjects = [];
    this.researchSubjectsToShow = 4;
    this.activeSection = {index: 0};

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    let path = state.location.path;
    if (path.length >= 2) {
      this.individualId = path[1];
      this.PersonModel.individualId = this.individualId;
    }
    this.activeSection = this.PersonModel.getActiveSection(path[2])
    if (this.individualId) {
      this.totalPublications = 0;
      await Promise.all([this._doMainQuery(this.individualId),
                         this._doPubQuery(this.individualId)]);
    }

  }

  async _loadMorePubs(){
    await this._doPubQuery(this.individualId);
  }

  async _doMainQuery(id){
    let data = await this.PersonModel.getIndividual(id);
    this.individualStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.individual = data.payload;
    console.log(data);
  }

  async _doPubQuery(id){
    let offset = 0;
    if (!id) {
      id = this.individualId;
    }
    if ( this.retrievedPublications.length < this.totalPublications ) {
      offset = this.retrievedPublications.length;
    }
    let data = await this.PersonModel.getPublications(id, offset);
    this.publicationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    console.log("pubs", data);
    this.retrievedPublications = data.payload.results;
    if (data.payload.results.length > 0) {
      this.totalPublications = data.payload.total;

      let researchSubjects = data.payload.aggregations.facets["hasSubjectArea.label"];
      if (researchSubjects && Object.keys(researchSubjects).length > 0) {
        //this.researchSubjects = this.formatSubjectsObject(researchSubjects);
      }
    }
    console.log("research subjects", this.researchSubjects);

  }

  hideSection(section){
    if (this.activeSection.index == 0) {
      return false;
    }

    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  getIndividualTitles(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.title) {
      if (Array.isArray(this.individual.hasContactInfo.title)) {
        return this.individual.hasContactInfo.title;
      }
      else {
        return [this.individual.hasContactInfo.title];
      }

    }

    return [];
  }

  getEmailAddresses(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.hasEmail) {
      if (Array.isArray(this.individual.hasContactInfo.hasEmail)) {
        return this.individual.hasContactInfo.hasEmail.map(e => e.email);
      }
      return [this.individual.hasContactInfo.hasEmail.email]
    }

    return [];
  }

  getWebsites() {
    let out = [];
    if (!this.individual) {
      return out;
    }
    if (this.individual.orcidId) {
      out.push({'text': 'Orcid', 'href': this.individual.orcidId['@id']})
    }
    if (this.individual.scopusId) {
      out.push({'text': 'Scopus', 'href': `https://www.scopus.com/authid/detail.uri?authorId=${this.individual.scopusId}`})
    }

    return out;
  }

  formatSubjectsObject(subjects){
    let out = [];
    for (let subject in subjects) {
      let subObj = {subject: subject, count: subjects[subject], label: subject};
      let words = subject.split(" ");
      if (words[0].startsWith("0") && !isNaN(words[0])) {
        subObj.label = words.slice(1,).join(" ");
      }
      out.push(subObj);
    }

    out.sort(function (a, b) {
      return b['count'] - a['count'];
    });
    return out;
  }

}

customElements.define('rp-page-individual', RpPageIndividual);


/***/ }),

/***/ "./public/elements/pages/individual/rp-page-individual.tpl.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/individual/rp-page-individual.tpl.js ***!
  \********************************************************************/
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
  #about .cols {
    display: flex;
  }
  #about .cols > div {
    width: 50%;
  }
  .pub-count {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  rp-badge {
    margin-left: 8px;
  }
  rp-badge:first-child {
    margin-left: 0;
  }
  .load-more {
    height: 44px;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: none;
    padding: 0 15px;
    cursor: pointer;
  }
  .load-more:hover {
    background-color: var(--tcolor-hover-bg);
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>


<div class="individual container top">
  <div ?hidden="${this.individualStatus == 'error' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'error' }">
  <rp-hero-image>
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.individual.label}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      ${this.researchSubjects.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
        <p class="text-light mt-2 mb-0">
        ${this.researchSubjects.splice(0, this.researchSubjectsToShow).map(subject => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<rp-badge>${subject.label}</rp-badge>`)}
        </p>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.PersonModel.getSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this.hideSection('about')}">
    <h1 class="weight-regular mt-0">About</h1>
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(title => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div>${title}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(addr => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div><a href="${'mailto:' + addr}">${addr}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(site => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div><a href="${site.href}">${site.text}</a></div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3" ?hidden="${this.hideSection('publications')}">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="pub-count">${this.totalPublications}</div>
    </div>
    <h2>Selected Publications</h2>
      <div ?hidden="${this.publicationStatus == 'error' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading publications.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'error' }">
        ${ this.retrievedPublications.map(pub => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <rp-citation class="mb-3" .data="${pub}"></rp-citation>
          `)}
      </div>
      ${this.retrievedPublications.length < this.totalPublications ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <button type="button" @click="${this._loadMorePubs}" class="load-more">Load more articles</button>` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
  </section>

  <section id="research" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2hlcm8taW1hZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9pbmRpdmlkdWFsL3JwLXBhZ2UtaW5kaXZpZHVhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaW5kaXZpZHVhbC9ycC1wYWdlLWluZGl2aWR1YWwudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNYOztBQUU3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QUNqRDtBQUNBO0FBQ0EsUUFBUSw2REFBNkQsZ0RBQUk7QUFDekUsd0NBQXdDLG1CQUFtQixtREFBbUQsZ0RBQUk7QUFDbEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicGFnZS1pbmRpdmlkdWFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYWxlcnQudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWxlcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRoZW1lQ29sb3I6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RoZW1lLWNvbG9yJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoZW1lQ29sb3IgPSAnZGFuZ2VyJztcbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1t0aGlzLnRoZW1lQ29sb3JdID0gdHJ1ZTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hbGVydCcsIFJwQWxlcnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgIC5jb250YWluZXIuZGFuZ2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIGlyb24taWNvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2F2YXRhci50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBdmF0YXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHNyYzoge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNpemUgJiYgdGhpcy5zaXplICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydwaG90byddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgcmVuZGVyRmFjZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjIHx8IHRoaXMuc3JjID09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249J2ZhY2UnPjwvaXJvbi1pY29uPmA7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYXZhdGFyJywgUnBBdmF0YXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNpcmNsZS5zaXplLWxnIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1zbSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgLnBob3RvIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNpcmNsZSAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgJHt0aGlzLnJlbmRlckZhY2UoKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYmFkZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGNvbG9yU2VxdWVuY2U6IHt0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2NvbG9yLXNlcXVlbmNlJ30sXG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWF4Q29sb3IgPSA2O1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xvclNlcXVlbmNlKSB7XG4gICAgICBsZXQgbiA9IE1hdGguZmxvb3IodGhpcy5jb2xvclNlcXVlbmNlKTtcbiAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc2libGluZ3MgPSBbLi4udGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNdLmZpbHRlcihuID0+IG4udGFnTmFtZSA9PT0gdGhpcy50YWdOYW1lKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuID0gc2libGluZ3MuaW5kZXhPZih0aGlzKSAlIHRoaXMubWF4Q29sb3I7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLTAnXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICB9XG5cbiAgX3JlbmRlckJhZGdlKCkge1xuICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxhIGhyZWY9JHt0aGlzLmhyZWZ9PiR7dGhpcy5fcmVuZGVyU3BhbigpfTwvYT5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYCR7dGhpcy5fcmVuZGVyU3BhbigpfWA7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlclNwYW4oKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9JHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5gO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYmFkZ2UnLCBScEJhZGdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgcGFkZGluZzogLjNlbSAuN2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDApO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgc3Bhbi5zaXplLWxnIHtcbiAgICBwYWRkaW5nOiAuNTVlbSAuOWVtO1xuICB9XG4gIGE6aG92ZXIgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICAgICAgY29sb3I6ICB2YXIoLS10Y29sb3ItaG92ZXItdGV4dCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gIH1cbiAgc3Bhbi5jb2xvci0wIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgfVxuICBzcGFuLmNvbG9yLTEge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDEpO1xuICB9XG4gIHNwYW4uY29sb3ItMiB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Mik7XG4gIH1cbiAgc3Bhbi5jb2xvci0zIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQzKTtcbiAgfVxuICBzcGFuLmNvbG9yLTQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDQpO1xuICB9XG4gIHNwYW4uY29sb3ItNSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50NSk7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6bGluayB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuXG48L3N0eWxlPlxuICAke3RoaXMuX3JlbmRlckJhZGdlKCl9XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vY2l0YXRpb24udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQ2l0YXRpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHt0eXBlOiBPYmplY3R9LFxuICAgIGNpdGF0aW9uU3R5bGU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2NpdGF0aW9uLXN0eWxlJ30sXG4gICAgYXV0aG9yczoge3R5cGU6IEFycmF5fVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2l0YXRpb25TdHlsZSA9IFwiTUxBXCI7XG4gICAgdGhpcy5kYXRhID0ge307XG4gICAgdGhpcy5hdXRob3JzID0gW107XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygnZGF0YScpKSB7XG4gICAgICB0aGlzLnBhcnNlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlRGF0YSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCBhdXRob3JzXG4gICAgbGV0IGF1dGhvcnMgPSBbXTtcbiAgICBpZiAodGhpcy5kYXRhLkF1dGhvcnNoaXAgJiYgdHlwZW9mIHRoaXMuZGF0YS5BdXRob3JzaGlwID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IGF1dGhzID0gdGhpcy5kYXRhLkF1dGhvcnNoaXA7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXV0aHMpKSB7XG4gICAgICAgIGF1dGhzID0gW2F1dGhzXTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGF1dGhvciBvZiBhdXRocykge1xuICAgICAgICBpZiAoIWF1dGhvci5oYXNOYW1lKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yLm5hbWVGaXJzdCA9IGF1dGhvci5oYXNOYW1lLmdpdmVuTmFtZTtcbiAgICAgICAgYXV0aG9yLm5hbWVMYXN0ID0gYXV0aG9yLmhhc05hbWUuZmFtaWx5TmFtZTtcbiAgICAgICAgaWYgKCFhdXRob3JbJ3Zpdm86cmFuayddKSB7XG4gICAgICAgICAgYXV0aG9yWyd2aXZvOnJhbmsnXSA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIGF1dGhvcnMucHVzaChhdXRob3IpO1xuICAgICAgfVxuICAgICAgYXV0aG9ycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhWyd2aXZvOnJhbmsnXSAtIGJbJ3Zpdm86cmFuayddO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmF1dGhvcnMgPSBhdXRob3JzO1xuICAgIH1cblxuICAgIC8vIEpvdXJuYWwgaW5mb1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtY2l0YXRpb24nLCBScENpdGF0aW9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KVxuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiA/aGlkZGVuPVwiJHshdGhpcy5kYXRhfVwiPlxuICA8YSBocmVmPVwiI1wiPiR7dGhpcy5kYXRhLmxhYmVsfTwvYT5cbiAgJHt0aGlzLmF1dGhvcnMubWFwKGF1dGhvciA9PiBodG1sYDxzcGFuPiR7YXV0aG9yLm5hbWVMYXN0fSwgJHthdXRob3IubmFtZUZpcnN0fTwvc3Bhbj47IGApfS5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2hlcm8taW1hZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwSGVyb0ltYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFzc2V0Rm9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiYXNzZXQtZm9sZGVyXCJ9LFxuICAgIGFzc2V0TWF4OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1tYXhcIn0sXG4gICAgYXNzZXRQaWNrOiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogXCJhc3NldC1waWNrXCIsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hc3NldEZvbGRlciA9IFwiL2ltYWdlcy9wcm9maWxlLWZlYXR1cmVzL1wiXG4gICAgdGhpcy5hc3NldE1heCA9IDI5O1xuICAgIHRoaXMuc2h1ZmZsZSgpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrIDwgMCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPiB0aGlzLmFzc2V0TWF4KSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gdGhpcy5hc3NldE1heDtcbiAgICAgIH1cbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLmFzc2V0Rm9sZGVyICsgdGhpcy5hc3NldFBpY2sgKyBcIi5qcGdcIn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHNodWZmbGUoKSB7XG4gICAgaWYgKCF0aGlzLnNyYykge1xuICAgICAgdGhpcy5hc3NldFBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAgdGhpcy5hc3NldE1heCArIDEpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWhlcm8taW1hZ2UnLCBScEhlcm9JbWFnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5zbG90IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAjdG9wIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNib3R0b20ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cInRvcFwiPjxzbG90IG5hbWU9XCJ0b3BcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwibWFpblwiPjxzbG90IG5hbWU9XCJtYWluXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cImJvdHRvbVwiPjxzbG90IG5hbWU9XCJib3R0b21cIj48L3Nsb3Q+PC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpbmstbGlzdC50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBjbGFzcyBScExpbmtMaXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rczoge3R5cGU6IEFycmF5fSxcbiAgICBjdXJyZW50TGluazogIHtjb252ZXJ0ZXI6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdjdXJyZW50LWxpbmsnLCByZWZsZWN0OiB0cnVlfSxcbiAgICBkaXJlY3Rpb246IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2RpcmVjdGlvbid9LFxuICAgIGhhc0hlYWRlckxpbms6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6ICdoYXMtaGVhZGVyLWxpbmsnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gJ3YnO1xuICAgIHRoaXMuY3VycmVudExpbmsgPSAwO1xuICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXMgPSB7Y29udGFpbmVyOiB0cnVlfTtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW3RoaXMuZGlyZWN0aW9uXSA9IHRydWU7XG5cbiAgICB0aGlzLl9jaGFuZ2VkTGluayA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlZC1saW5rJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIHNlbGVjdGVkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgaWYgKG5hbWUgPT0gJ2RpcmVjdGlvbicpIHtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMudikge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXJDbGFzc2VzLnZcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzW25ld1ZhbC50b0xvd2VyQ2FzZSgpWzBdXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbCwgbmV3VmFsKTtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgbGV0IGhyZWYgPSBcIlwiO1xuICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIGxldCBjbGFzc2VzID0ge2xpbms6IHRydWV9O1xuICAgIGlmICh0eXBlb2YgbGluayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRleHQgPSBsaW5rO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbGluayA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRleHQgPSBsaW5rLnRleHQ7XG4gICAgICBpZiAobGluay5kaXNhYmxlZCkge1xuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobGluay5ocmVmKSBocmVmID0gbGluay5ocmVmO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRMaW5rKSB7XG4gICAgICBjbGFzc2VzWydzZWxlY3RlZCddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzSGVhZGVyTGluayAmJiBpbmRleCA9PSAwKSB7XG4gICAgICBjbGFzc2VzWydsaW5rLWhlYWRlciddID0gdHJ1ZTtcbiAgICB9XG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuXG4gICAgaWYgKGhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxhIGxpbms9XCIke2luZGV4fVwiIGNsYXNzPVwiJHtjbGFzc01hcChjbGFzc2VzKX1cIiBocmVmPVwiJHtocmVmfVwiPiR7dGV4dH08L2E+YDtcbiAgICB9XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluaz1cIiR7aW5kZXh9XCIgY2xhc3M9JHtjbGFzc01hcChjbGFzc2VzKX0+JHt0ZXh0fTwvZGl2PmA7XG4gICAgfVxuXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgbGV0IG5ld19saW5rID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rJykpO1xuICAgIGlmICgobmV3X2xpbmsgIT0gdGhpcy5jdXJyZW50TGluaykgJiYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpKSB7XG4gICAgICB0aGlzLmN1cnJlbnRMaW5rID0gbmV3X2xpbms7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fY2hhbmdlZExpbmspO1xuICAgIH1cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0JywgUnBMaW5rTGlzdCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmgge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXIuaCAubGluayB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxuICAgIC5jb250YWluZXIudiB7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5jb250YWluZXIudiAubGluayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIsIGEubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkLCBhLmxpbmsuc2VsZWN0ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCwgYS5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyLCBhLmxpbmsuZGlzYWJsZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZDpob3ZlciwgYS5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5fY29udGFpbmVyQ2xhc3Nlcyl9PlxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1pbmRpdmlkdWFsLnRwbC5qc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2F2YXRhclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9jaXRhdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oZXJvLWltYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VJbmRpdmlkdWFsIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRpdmlkdWFsOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGluZGl2aWR1YWxJZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBpbmRpdmlkdWFsU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHB1YmxpY2F0aW9uU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHJldHJpZXZlZFB1YmxpY2F0aW9uczoge3R5cGU6IEFycmF5fSxcbiAgICAgIHRvdGFsUHVibGljYXRpb25zOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcmVzZWFyY2hTdWJqZWN0czoge3R5cGU6IEFycmF5fSxcbiAgICAgIHJlc2VhcmNoU3ViamVjdHNUb1Nob3c6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgYWN0aXZlU2VjdGlvbjoge3R5cGU6IE9iamVjdH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnUGVyc29uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuaW5kaXZpZHVhbCA9IHt9O1xuICAgIHRoaXMuaW5kaXZpZHVhbElkID0gJyc7XG4gICAgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMucHVibGljYXRpb25TdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5yZXRyaWV2ZWRQdWJsaWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLnRvdGFsUHVibGljYXRpb25zID0gMDtcbiAgICB0aGlzLnJlc2VhcmNoU3ViamVjdHMgPSBbXTtcbiAgICB0aGlzLnJlc2VhcmNoU3ViamVjdHNUb1Nob3cgPSA0O1xuICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHtpbmRleDogMH07XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICBsZXQgcGF0aCA9IHN0YXRlLmxvY2F0aW9uLnBhdGg7XG4gICAgaWYgKHBhdGgubGVuZ3RoID49IDIpIHtcbiAgICAgIHRoaXMuaW5kaXZpZHVhbElkID0gcGF0aFsxXTtcbiAgICAgIHRoaXMuUGVyc29uTW9kZWwuaW5kaXZpZHVhbElkID0gdGhpcy5pbmRpdmlkdWFsSWQ7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuUGVyc29uTW9kZWwuZ2V0QWN0aXZlU2VjdGlvbihwYXRoWzJdKVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWxJZCkge1xuICAgICAgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA9IDA7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkodGhpcy5pbmRpdmlkdWFsSWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHViUXVlcnkodGhpcy5pbmRpdmlkdWFsSWQpXSk7XG4gICAgfVxuXG4gIH1cblxuICBhc3luYyBfbG9hZE1vcmVQdWJzKCl7XG4gICAgYXdhaXQgdGhpcy5fZG9QdWJRdWVyeSh0aGlzLmluZGl2aWR1YWxJZCk7XG4gIH1cblxuICBhc3luYyBfZG9NYWluUXVlcnkoaWQpe1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5QZXJzb25Nb2RlbC5nZXRJbmRpdmlkdWFsKGlkKTtcbiAgICB0aGlzLmluZGl2aWR1YWxTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5kaXZpZHVhbCA9IGRhdGEucGF5bG9hZDtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIF9kb1B1YlF1ZXJ5KGlkKXtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBpZiAoIWlkKSB7XG4gICAgICBpZCA9IHRoaXMuaW5kaXZpZHVhbElkO1xuICAgIH1cbiAgICBpZiAoIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zLmxlbmd0aCA8IHRoaXMudG90YWxQdWJsaWNhdGlvbnMgKSB7XG4gICAgICBvZmZzZXQgPSB0aGlzLnJldHJpZXZlZFB1YmxpY2F0aW9ucy5sZW5ndGg7XG4gICAgfVxuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5QZXJzb25Nb2RlbC5nZXRQdWJsaWNhdGlvbnMoaWQsIG9mZnNldCk7XG4gICAgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJwdWJzXCIsIGRhdGEpO1xuICAgIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgaWYgKGRhdGEucGF5bG9hZC5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG90YWxQdWJsaWNhdGlvbnMgPSBkYXRhLnBheWxvYWQudG90YWw7XG5cbiAgICAgIGxldCByZXNlYXJjaFN1YmplY3RzID0gZGF0YS5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbXCJoYXNTdWJqZWN0QXJlYS5sYWJlbFwiXTtcbiAgICAgIGlmIChyZXNlYXJjaFN1YmplY3RzICYmIE9iamVjdC5rZXlzKHJlc2VhcmNoU3ViamVjdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy90aGlzLnJlc2VhcmNoU3ViamVjdHMgPSB0aGlzLmZvcm1hdFN1YmplY3RzT2JqZWN0KHJlc2VhcmNoU3ViamVjdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInJlc2VhcmNoIHN1YmplY3RzXCIsIHRoaXMucmVzZWFyY2hTdWJqZWN0cyk7XG5cbiAgfVxuXG4gIGhpZGVTZWN0aW9uKHNlY3Rpb24pe1xuICAgIGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24uaW5kZXggPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWN0aW9uID09IHRoaXMuYWN0aXZlU2VjdGlvbi5pZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0SW5kaXZpZHVhbFRpdGxlcygpe1xuICAgIGlmICghdGhpcy5pbmRpdmlkdWFsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8gJiYgdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLnRpdGxlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGVdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0RW1haWxBZGRyZXNzZXMoKXtcbiAgICBpZiAoIXRoaXMuaW5kaXZpZHVhbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvICYmIHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby5oYXNFbWFpbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsLm1hcChlID0+IGUuZW1haWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8uaGFzRW1haWwuZW1haWxdXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0V2Vic2l0ZXMoKSB7XG4gICAgbGV0IG91dCA9IFtdO1xuICAgIGlmICghdGhpcy5pbmRpdmlkdWFsKSB7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLm9yY2lkSWQpIHtcbiAgICAgIG91dC5wdXNoKHsndGV4dCc6ICdPcmNpZCcsICdocmVmJzogdGhpcy5pbmRpdmlkdWFsLm9yY2lkSWRbJ0BpZCddfSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbC5zY29wdXNJZCkge1xuICAgICAgb3V0LnB1c2goeyd0ZXh0JzogJ1Njb3B1cycsICdocmVmJzogYGh0dHBzOi8vd3d3LnNjb3B1cy5jb20vYXV0aGlkL2RldGFpbC51cmk/YXV0aG9ySWQ9JHt0aGlzLmluZGl2aWR1YWwuc2NvcHVzSWR9YH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZvcm1hdFN1YmplY3RzT2JqZWN0KHN1YmplY3RzKXtcbiAgICBsZXQgb3V0ID0gW107XG4gICAgZm9yIChsZXQgc3ViamVjdCBpbiBzdWJqZWN0cykge1xuICAgICAgbGV0IHN1Yk9iaiA9IHtzdWJqZWN0OiBzdWJqZWN0LCBjb3VudDogc3ViamVjdHNbc3ViamVjdF0sIGxhYmVsOiBzdWJqZWN0fTtcbiAgICAgIGxldCB3b3JkcyA9IHN1YmplY3Quc3BsaXQoXCIgXCIpO1xuICAgICAgaWYgKHdvcmRzWzBdLnN0YXJ0c1dpdGgoXCIwXCIpICYmICFpc05hTih3b3Jkc1swXSkpIHtcbiAgICAgICAgc3ViT2JqLmxhYmVsID0gd29yZHMuc2xpY2UoMSwpLmpvaW4oXCIgXCIpO1xuICAgICAgfVxuICAgICAgb3V0LnB1c2goc3ViT2JqKTtcbiAgICB9XG5cbiAgICBvdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGJbJ2NvdW50J10gLSBhWydjb3VudCddO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtaW5kaXZpZHVhbCcsIFJwUGFnZUluZGl2aWR1YWwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZXJvdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVyb21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2Fib3V0IC5jb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gICNhYm91dCAuY29scyA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHViLWNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIHJwLWJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIHJwLWJhZGdlOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubG9hZC1tb3JlIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkyMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubG9hZC1tb3JlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cblxuXG48ZGl2IGNsYXNzPVwiaW5kaXZpZHVhbCBjb250YWluZXIgdG9wXCI+XG4gIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBpbmRpdmlkdWFsLjwvcnAtYWxlcnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGF0YVwiID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdlcnJvcicgfVwiPlxuICA8cnAtaGVyby1pbWFnZT5cbiAgICA8ZGl2IHNsb3Q9XCJ0b3BcIiBjbGFzcz1cImhlcm90b3BcIj5cbiAgICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgICAgPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgICA8cnAtYXZhdGFyIHNpemU9XCJsZ1wiPjwvcnAtYXZhdGFyPlxuICAgICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj4ke3RoaXMuaW5kaXZpZHVhbC5sYWJlbH08L2gyPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGgzIG1iLTIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7dGhpcy5nZXRJbmRpdmlkdWFsVGl0bGVzKCkuam9pbihcIiwgXCIpfTwvcD5cbiAgICAgICR7dGhpcy5yZXNlYXJjaFN1YmplY3RzLmxlbmd0aCA+IDAgPyBodG1sIGBcbiAgICAgICAgPHAgY2xhc3M9XCJib2xkIHRleHQtbGlnaHQgaDMgbXQtMSBtYi0wIHRleHQtY2VudGVyXCI+TXkgcmVzZWFyY2ggYXJlYXMgaW5jbHVkZTogPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICAgICR7dGhpcy5yZXNlYXJjaFN1YmplY3RzLnNwbGljZSgwLCB0aGlzLnJlc2VhcmNoU3ViamVjdHNUb1Nob3cpLm1hcChzdWJqZWN0ID0+IGh0bWxgPHJwLWJhZGdlPiR7c3ViamVjdC5sYWJlbH08L3JwLWJhZGdlPmApfVxuICAgICAgICA8L3A+XG4gICAgICAgIGAgOiBodG1sYGB9XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3JwLWhlcm8taW1hZ2U+XG4gIDxycC1saW5rLWxpc3QgY2xhc3M9XCJiZy1saWdodCBwLTNcIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIC5saW5rcz1cIiR7dGhpcy5QZXJzb25Nb2RlbC5nZXRTZWN0aW9ucygpfVwiXG4gICAgICAgICAgICAgICAgY3VycmVudC1saW5rPVwiJHt0aGlzLmFjdGl2ZVNlY3Rpb24uaW5kZXh9XCI+XG4gIDwvcnAtbGluay1saXN0PlxuXG4gIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIiA/aGlkZGVuPVwiJHt0aGlzLmhpZGVTZWN0aW9uKCdhYm91dCcpfVwiPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyIG10LTBcIj5BYm91dDwvaDE+XG4gICAgPGgyIGhpZGRlbj5PdmVydmlldzwvaDI+XG4gICAgPHAgaGlkZGVuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXBcbiAgICBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xzXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTJcIj5Qb3NpdGlvbnM8L2gzPlxuICAgICAgICAgICR7dGhpcy5nZXRJbmRpdmlkdWFsVGl0bGVzKCkubWFwKHRpdGxlID0+IGh0bWxgPGRpdj4ke3RpdGxlfTwvZGl2PmApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48aDMgY2xhc3M9XCJtYi0yXCI+Q29udGFjdDwvaDM+JHt0aGlzLmdldEVtYWlsQWRkcmVzc2VzKCkubWFwKGFkZHIgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIkeydtYWlsdG86JyArIGFkZHJ9XCI+JHthZGRyfTwvYT48L2Rpdj5gKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwibWItMlwiPldlYnNpdGVzPC9oMz5cbiAgICAgICAgJHt0aGlzLmdldFdlYnNpdGVzKCkubWFwKHNpdGUgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIke3NpdGUuaHJlZn1cIj4ke3NpdGUudGV4dH08L2E+PC9kaXY+YCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGlkPVwicHVibGljYXRpb25zXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgP2hpZGRlbj1cIiR7dGhpcy5oaWRlU2VjdGlvbigncHVibGljYXRpb25zJyl9XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyIG10LTBcIj5QdWJsaWNhdGlvbnM8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cInB1Yi1jb3VudFwiPiR7dGhpcy50b3RhbFB1YmxpY2F0aW9uc308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDI+U2VsZWN0ZWQgUHVibGljYXRpb25zPC9oMj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHB1YmxpY2F0aW9ucy48L3JwLWFsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiID9oaWRkZW49XCIke3RoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAgICR7IHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zLm1hcChwdWIgPT4gaHRtbGBcbiAgICAgICAgICA8cnAtY2l0YXRpb24gY2xhc3M9XCJtYi0zXCIgLmRhdGE9XCIke3B1Yn1cIj48L3JwLWNpdGF0aW9uPlxuICAgICAgICAgIGApfVxuICAgICAgPC9kaXY+XG4gICAgICAke3RoaXMucmV0cmlldmVkUHVibGljYXRpb25zLmxlbmd0aCA8IHRoaXMudG90YWxQdWJsaWNhdGlvbnMgPyBodG1sYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCIke3RoaXMuX2xvYWRNb3JlUHVic31cIiBjbGFzcz1cImxvYWQtbW9yZVwiPkxvYWQgbW9yZSBhcnRpY2xlczwvYnV0dG9uPmAgOiBodG1sYGB9XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbiBpZD1cInJlc2VhcmNoXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgaGlkZGVuPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UmVzZWFyY2g8L2gxPlxuICAgIDxoMj5PdmVydmlldzwvaDI+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPHA+XG4gICAgPGgyPktleXdvcmRzPC9oMj5cbiAgICAgIDxwPmxvcmVtLCBpcHN1bSwgZG9sb3Igc2l0IGFtaXQ8L3A+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgaGlkZGVuPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+Q29udGFjdDwvaDE+XG4gIDwvc2VjdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuYDt9XG4iXSwic291cmNlUm9vdCI6IiJ9