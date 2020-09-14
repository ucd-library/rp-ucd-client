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
      totalPublications: {type: Number},
      researchSubjects: {type: Array},
      researchSubjectsToShow: {type: Number},
      activeSection: {type: Object},
      visible: {type: Boolean},
      isOwnProfile: {type: Boolean}
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
    this.visible = false;
    this.retrievedPublications = [];
    this.totalPublications = 0;
    this.researchSubjects = [];
    this.researchSubjectsToShow = 4;
    this.activeSection = {index: 0};
    this.isOwnProfile = false;

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
   requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state) {
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
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
    this.isOwnProfile = this._isOwnProfile();

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
    if (APP_CONFIG.verbose) console.log(data);
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
    if (APP_CONFIG.verbose) console.log("pubs", data);
    
    this.retrievedPublications = data.payload.results;
    if (data.payload.results.length > 0) {
      this.totalPublications = data.payload.total;

      let researchSubjects = data.payload.aggregations.facets["hasSubjectArea.label"];
      if (researchSubjects && Object.keys(researchSubjects).length > 0) {
        //this.researchSubjects = this.formatSubjectsObject(researchSubjects);
      }
    }
    if (APP_CONFIG.verbose) console.log("research subjects", this.researchSubjects);

  }

  _isOwnProfile() {
    try {
      if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === this.individualId.toLowerCase()) {
        return true;
      }
    } catch (error) {}
    return false;
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
  a.export {
    text-decoration: none;
    display: block;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text) !important;
    font-weight: var(--font-weight);
    padding: 10px 15px;
  }
  a.export:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-text);
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
      <div class="flex align-items-center">${this.isOwnProfile ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <a class="export mr-3" href="${`/api/miv/${this.individualId}`}">Export</a>
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
        <div class="pub-count">${this.totalPublications}</div>
      </div>

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2NpdGF0aW9uLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2hlcm8taW1hZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9saW5rLWxpc3QudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9pbmRpdmlkdWFsL3JwLXBhZ2UtaW5kaXZpZHVhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaW5kaXZpZHVhbC9ycC1wYWdlLWluZGl2aWR1YWwudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNYOztBQUU3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QUFDdEY7QUFDQTtBQUNBOztBQUVBLDhEQUE4RCxpQ0FBaUM7QUFDL0Y7QUFDQTtBQUNBLDZDQUE2QyxvQkFBb0IsZ0RBQUk7QUFDckUsdUNBQXVDLFlBQVksa0JBQWtCLEVBQUU7QUFDdkUsVUFBVSxnREFBSTtBQUNkLGlDQUFpQyx1QkFBdUI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQix5RUFBeUU7QUFDL0Y7QUFDQTtBQUNBLHNCQUFzQiwyRUFBMkU7QUFDakc7QUFDQTtBQUNBLG1DQUFtQywwRUFBMEU7QUFDN0csVUFBVSx1Q0FBdUMsZ0RBQUk7QUFDckQsNkNBQTZDLElBQUk7QUFDakQ7QUFDQTtBQUNBLFFBQVEsNkRBQTZELGdEQUFJO0FBQ3pFLHdDQUF3QyxtQkFBbUIsbURBQW1ELGdEQUFJO0FBQ2xIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2UtaW5kaXZpZHVhbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FsZXJ0LnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEFsZXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aGVtZUNvbG9yID0gJ2Rhbmdlcic7XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbdGhpcy50aGVtZUNvbG9yXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWxlcnQnLCBScEFsZXJ0KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmRhbmdlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciBpcm9uLWljb24ge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hdmF0YXIudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQXZhdGFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplICYmIHRoaXMuc2l6ZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY2xhc3Nlc1sncGhvdG8nXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHJlbmRlckZhY2UoKSB7XG4gICAgaWYgKCF0aGlzLnNyYyB8fCB0aGlzLnNyYyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGh0bWxgPGlyb24taWNvbiBpY29uPSdmYWNlJz48L2lyb24taWNvbj5gO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWF2YXRhcicsIFJwQXZhdGFyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmNpcmNsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1sZyB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAuY2lyY2xlLnNpemUtc20ge1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICAgIC5waG90byB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjaXJjbGUgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgc3R5bGU9XCIke3N0eWxlTWFwKHRoaXMuY29uc3RydWN0U3R5bGVzKCkpfVwiPlxuICAgICR7dGhpcy5yZW5kZXJGYWNlKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2JhZGdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBzaXplOiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICBjb2xvclNlcXVlbmNlOiB7dHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6ICdjb2xvci1zZXF1ZW5jZSd9LFxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1heENvbG9yID0gNjtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgY2xhc3Nlc1snc2l6ZS0nICsgdGhpcy5zaXplXSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sb3JTZXF1ZW5jZSkge1xuICAgICAgbGV0IG4gPSBNYXRoLmZsb29yKHRoaXMuY29sb3JTZXF1ZW5jZSk7XG4gICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IHNpYmxpbmdzID0gWy4uLnRoaXMucGFyZW50Tm9kZS5jaGlsZE5vZGVzXS5maWx0ZXIobiA9PiBuLnRhZ05hbWUgPT09IHRoaXMudGFnTmFtZSk7XG4gICAgICBpZiAoc2libGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbiA9IHNpYmxpbmdzLmluZGV4T2YodGhpcykgJSB0aGlzLm1heENvbG9yO1xuICAgICAgICBjbGFzc2VzWydjb2xvci0nICsgbi50b1N0cmluZygpXSA9IHRydWU7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbGFzc2VzWydjb2xvci0wJ10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxuXG4gIF9yZW5kZXJCYWRnZSgpIHtcbiAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICByZXR1cm4gaHRtbGA8YSBocmVmPSR7dGhpcy5ocmVmfT4ke3RoaXMuX3JlbmRlclNwYW4oKX08L2E+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGAke3RoaXMuX3JlbmRlclNwYW4oKX1gO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJTcGFuKCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfT5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+YDtcbiAgfVxuXG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWJhZGdlJywgUnBCYWRnZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIHBhZGRpbmc6IC4zZW0gLjdlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIHNwYW4uc2l6ZS1sZyB7XG4gICAgcGFkZGluZzogLjU1ZW0gLjllbTtcbiAgfVxuICBhOmhvdmVyIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgICAgIGNvbG9yOiAgdmFyKC0tdGNvbG9yLWhvdmVyLXRleHQpO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICB9XG4gIHNwYW4uY29sb3ItMCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MCk7XG4gIH1cbiAgc3Bhbi5jb2xvci0xIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQxKTtcbiAgfVxuICBzcGFuLmNvbG9yLTIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDIpO1xuICB9XG4gIHNwYW4uY29sb3ItMyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Myk7XG4gIH1cbiAgc3Bhbi5jb2xvci00IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQ0KTtcbiAgfVxuICBzcGFuLmNvbG9yLTUge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDUpO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBhOmxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTphY3RpdmUge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cblxuPC9zdHlsZT5cbiAgJHt0aGlzLl9yZW5kZXJCYWRnZSgpfVxuYDt9XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2NpdGF0aW9uLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScENpdGF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7dHlwZTogT2JqZWN0fSxcbiAgICBjaXRhdGlvblN0eWxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdjaXRhdGlvbi1zdHlsZSd9LFxuICAgIGF1dGhvcnM6IHt0eXBlOiBBcnJheX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNpdGF0aW9uU3R5bGUgPSBcIk1MQVwiO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuYXV0aG9ycyA9IFtdO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXMoJ2RhdGEnKSkge1xuICAgICAgdGhpcy5wYXJzZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGEoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgYXV0aG9yc1xuICAgIGxldCBhdXRob3JzID0gW107XG4gICAgaWYgKHRoaXMuZGF0YS5BdXRob3JzaGlwICYmIHR5cGVvZiB0aGlzLmRhdGEuQXV0aG9yc2hpcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBhdXRocyA9IHRoaXMuZGF0YS5BdXRob3JzaGlwO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGF1dGhzKSkge1xuICAgICAgICBhdXRocyA9IFthdXRoc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBhdXRob3Igb2YgYXV0aHMpIHtcbiAgICAgICAgaWYgKCFhdXRob3IuaGFzTmFtZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGF1dGhvci5uYW1lRmlyc3QgPSBhdXRob3IuaGFzTmFtZS5naXZlbk5hbWU7XG4gICAgICAgIGF1dGhvci5uYW1lTGFzdCA9IGF1dGhvci5oYXNOYW1lLmZhbWlseU5hbWU7XG4gICAgICAgIGlmICghYXV0aG9yWyd2aXZvOnJhbmsnXSkge1xuICAgICAgICAgIGF1dGhvclsndml2bzpyYW5rJ10gPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3JzLnB1c2goYXV0aG9yKTtcbiAgICAgIH1cbiAgICAgIGF1dGhvcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVsndml2bzpyYW5rJ10gLSBiWyd2aXZvOnJhbmsnXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRob3JzID0gYXV0aG9ycztcbiAgICB9XG5cbiAgICAvLyBKb3VybmFsIGluZm9cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWNpdGF0aW9uJywgUnBDaXRhdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dClcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMuZGF0YX1cIj5cbiAgPGEgaHJlZj1cIiNcIj4ke3RoaXMuZGF0YS5sYWJlbH08L2E+XG4gICR7dGhpcy5hdXRob3JzLm1hcChhdXRob3IgPT4gaHRtbGA8c3Bhbj4ke2F1dGhvci5uYW1lTGFzdH0sICR7YXV0aG9yLm5hbWVGaXJzdH08L3NwYW4+OyBgKX0uXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oZXJvLWltYWdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEhlcm9JbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhc3NldEZvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImFzc2V0LWZvbGRlclwifSxcbiAgICBhc3NldE1heDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtbWF4XCJ9LFxuICAgIGFzc2V0UGljazoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtcGlja1wiLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXNzZXRGb2xkZXIgPSBcIi9pbWFnZXMvcHJvZmlsZS1mZWF0dXJlcy9cIlxuICAgIHRoaXMuYXNzZXRNYXggPSAyOTtcbiAgICB0aGlzLnNodWZmbGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA8IDApIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrID4gdGhpcy5hc3NldE1heCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IHRoaXMuYXNzZXRNYXg7XG4gICAgICB9XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5hc3NldEZvbGRlciArIHRoaXMuYXNzZXRQaWNrICsgXCIuanBnXCJ9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuYXNzZXRQaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHRoaXMuYXNzZXRNYXggKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1oZXJvLWltYWdlJywgUnBIZXJvSW1hZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuc2xvdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI3RvcCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjYm90dG9tIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJ0b3BcIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cIm1haW5cIj48c2xvdCBuYW1lPVwibWFpblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJib3R0b21cIj48c2xvdCBuYW1lPVwiYm90dG9tXCI+PC9zbG90PjwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QudHBsLmpzJztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgY3VycmVudExpbms6ICB7Y29udmVydGVyOiBwYXJzZUludCwgYXR0cmlidXRlOiAnY3VycmVudC1saW5rJywgcmVmbGVjdDogdHJ1ZX0sXG4gICAgZGlyZWN0aW9uOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdkaXJlY3Rpb24nfSxcbiAgICBoYXNIZWFkZXJMaW5rOiB7dHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiAnaGFzLWhlYWRlci1saW5rJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICd2JztcbiAgICB0aGlzLmN1cnJlbnRMaW5rID0gMDtcbiAgICB0aGlzLl9jb250YWluZXJDbGFzc2VzID0ge2NvbnRhaW5lcjogdHJ1ZX07XG4gICAgdGhpcy5fY29udGFpbmVyQ2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuXG4gICAgdGhpcy5fY2hhbmdlZExpbmsgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZWQtbGluaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBzZWxlY3RlZC4nXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuICAgIGlmIChuYW1lID09ICdkaXJlY3Rpb24nKSB7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXJDbGFzc2VzLnYpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fY29udGFpbmVyQ2xhc3Nlcy52XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29udGFpbmVyQ2xhc3Nlc1tuZXdWYWwudG9Mb3dlckNhc2UoKVswXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWwsIG5ld1ZhbCk7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGxldCBocmVmID0gXCJcIjtcbiAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBsZXQgY2xhc3NlcyA9IHtsaW5rOiB0cnVlfTtcbiAgICBpZiAodHlwZW9mIGxpbmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0ZXh0ID0gbGluaztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGxpbmsgPT09ICdvYmplY3QnKSB7XG4gICAgICB0ZXh0ID0gbGluay50ZXh0O1xuICAgICAgaWYgKGxpbmsuZGlzYWJsZWQpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGxpbmsuaHJlZikgaHJlZiA9IGxpbmsuaHJlZjtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT0gdGhpcy5jdXJyZW50TGluaykge1xuICAgICAgY2xhc3Nlc1snc2VsZWN0ZWQnXSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc0hlYWRlckxpbmsgJiYgaW5kZXggPT0gMCkge1xuICAgICAgY2xhc3Nlc1snbGluay1oZWFkZXInXSA9IHRydWU7XG4gICAgfVxuICAgIGNsYXNzZXNbJ2Rpc2FibGVkJ10gPSBkaXNhYmxlZDtcblxuICAgIGlmIChocmVmKSB7XG4gICAgICByZXR1cm4gaHRtbGA8YSBsaW5rPVwiJHtpbmRleH1cIiBjbGFzcz1cIiR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCIgaHJlZj1cIiR7aHJlZn1cIj4ke3RleHR9PC9hPmA7XG4gICAgfVxuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGxpbms9XCIke2luZGV4fVwiIGNsYXNzPSR7Y2xhc3NNYXAoY2xhc3Nlcyl9PiR7dGV4dH08L2Rpdj5gO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGxldCBuZXdfbGluayA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluaycpKTtcbiAgICBpZiAoKG5ld19saW5rICE9IHRoaXMuY3VycmVudExpbmspICYmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgdGhpcy5jdXJyZW50TGluayA9IG5ld19saW5rO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2NoYW5nZWRMaW5rKTtcbiAgICB9XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdCcsIFJwTGlua0xpc3QpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5oIHtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmggLmxpbmsge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnYge1xuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnYgLmxpbmsge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5saW5rOmhvdmVyLCBhLmxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZCwgYS5saW5rLnNlbGVjdGVkIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gICAgLmxpbmsuZGlzYWJsZWQsIGEubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciwgYS5saW5rLmRpc2FibGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIsIGEubGluay5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz0ke2NsYXNzTWFwKHRoaXMuX2NvbnRhaW5lckNsYXNzZXMpfT5cbiAgICAke3RoaXMubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gdGhpcy5fcmVuZGVyTGluayhsaW5rLCBpbmRleCkpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaW5kaXZpZHVhbC50cGwuanNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hdmF0YXJcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2l0YXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlSW5kaXZpZHVhbCBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kaXZpZHVhbDoge3R5cGU6IE9iamVjdH0sXG4gICAgICBpbmRpdmlkdWFsSWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgaW5kaXZpZHVhbFN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwdWJsaWNhdGlvblN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICByZXRyaWV2ZWRQdWJsaWNhdGlvbnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICB0b3RhbFB1YmxpY2F0aW9uczoge3R5cGU6IE51bWJlcn0sXG4gICAgICByZXNlYXJjaFN1YmplY3RzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcmVzZWFyY2hTdWJqZWN0c1RvU2hvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBhY3RpdmVTZWN0aW9uOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGlzT3duUHJvZmlsZToge3R5cGU6IEJvb2xlYW59XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ1BlcnNvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLmluZGl2aWR1YWwgPSB7fTtcbiAgICB0aGlzLmluZGl2aWR1YWxJZCA9ICcnO1xuICAgIHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLnB1YmxpY2F0aW9uU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zID0gW107XG4gICAgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA9IDA7XG4gICAgdGhpcy5yZXNlYXJjaFN1YmplY3RzID0gW107XG4gICAgdGhpcy5yZXNlYXJjaFN1YmplY3RzVG9TaG93ID0gNDtcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSB7aW5kZXg6IDB9O1xuICAgIHRoaXMuaXNPd25Qcm9maWxlID0gZmFsc2U7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICB9XG5cbiAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpIHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5pbmRpdmlkdWFsSWQgPSBwYXRoWzFdO1xuICAgICAgdGhpcy5QZXJzb25Nb2RlbC5pbmRpdmlkdWFsSWQgPSB0aGlzLmluZGl2aWR1YWxJZDtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5QZXJzb25Nb2RlbC5nZXRBY3RpdmVTZWN0aW9uKHBhdGhbMl0pXG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbElkKSB7XG4gICAgICB0aGlzLnRvdGFsUHVibGljYXRpb25zID0gMDtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLl9kb01haW5RdWVyeSh0aGlzLmluZGl2aWR1YWxJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9QdWJRdWVyeSh0aGlzLmluZGl2aWR1YWxJZCldKTtcbiAgICB9XG4gICAgdGhpcy5pc093blByb2ZpbGUgPSB0aGlzLl9pc093blByb2ZpbGUoKTtcblxuICB9XG5cbiAgYXN5bmMgX2xvYWRNb3JlUHVicygpe1xuICAgIGF3YWl0IHRoaXMuX2RvUHViUXVlcnkodGhpcy5pbmRpdmlkdWFsSWQpO1xuICB9XG5cbiAgYXN5bmMgX2RvTWFpblF1ZXJ5KGlkKXtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuUGVyc29uTW9kZWwuZ2V0SW5kaXZpZHVhbChpZCk7XG4gICAgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluZGl2aWR1YWwgPSBkYXRhLnBheWxvYWQ7XG4gICAgaWYgKEFQUF9DT05GSUcudmVyYm9zZSkgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICBhc3luYyBfZG9QdWJRdWVyeShpZCl7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgaWYgKCFpZCkge1xuICAgICAgaWQgPSB0aGlzLmluZGl2aWR1YWxJZDtcbiAgICB9XG4gICAgaWYgKCB0aGlzLnJldHJpZXZlZFB1YmxpY2F0aW9ucy5sZW5ndGggPCB0aGlzLnRvdGFsUHVibGljYXRpb25zICkge1xuICAgICAgb2Zmc2V0ID0gdGhpcy5yZXRyaWV2ZWRQdWJsaWNhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuUGVyc29uTW9kZWwuZ2V0UHVibGljYXRpb25zKGlkLCBvZmZzZXQpO1xuICAgIHRoaXMucHVibGljYXRpb25TdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChBUFBfQ09ORklHLnZlcmJvc2UpIGNvbnNvbGUubG9nKFwicHVic1wiLCBkYXRhKTtcbiAgICBcbiAgICB0aGlzLnJldHJpZXZlZFB1YmxpY2F0aW9ucyA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGlmIChkYXRhLnBheWxvYWQucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRvdGFsUHVibGljYXRpb25zID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuXG4gICAgICBsZXQgcmVzZWFyY2hTdWJqZWN0cyA9IGRhdGEucGF5bG9hZC5hZ2dyZWdhdGlvbnMuZmFjZXRzW1wiaGFzU3ViamVjdEFyZWEubGFiZWxcIl07XG4gICAgICBpZiAocmVzZWFyY2hTdWJqZWN0cyAmJiBPYmplY3Qua2V5cyhyZXNlYXJjaFN1YmplY3RzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vdGhpcy5yZXNlYXJjaFN1YmplY3RzID0gdGhpcy5mb3JtYXRTdWJqZWN0c09iamVjdChyZXNlYXJjaFN1YmplY3RzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFQUF9DT05GSUcudmVyYm9zZSkgY29uc29sZS5sb2coXCJyZXNlYXJjaCBzdWJqZWN0c1wiLCB0aGlzLnJlc2VhcmNoU3ViamVjdHMpO1xuXG4gIH1cblxuICBfaXNPd25Qcm9maWxlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoQVBQX0NPTkZJRy51c2VyLnVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJ0AnKVswXSA9PT0gdGhpcy5pbmRpdmlkdWFsSWQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoaWRlU2VjdGlvbihzZWN0aW9uKXtcbiAgICBpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmluZGV4ID09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbiA9PSB0aGlzLmFjdGl2ZVNlY3Rpb24uaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEluZGl2aWR1YWxUaXRsZXMoKXtcbiAgICBpZiAoIXRoaXMuaW5kaXZpZHVhbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvICYmIHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby50aXRsZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLnRpdGxlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLnRpdGxlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLnRpdGxlXTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldEVtYWlsQWRkcmVzc2VzKCl7XG4gICAgaWYgKCF0aGlzLmluZGl2aWR1YWwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mbyAmJiB0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8uaGFzRW1haWwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby5oYXNFbWFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby5oYXNFbWFpbC5tYXAoZSA9PiBlLmVtYWlsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsLmVtYWlsXVxuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFdlYnNpdGVzKCkge1xuICAgIGxldCBvdXQgPSBbXTtcbiAgICBpZiAoIXRoaXMuaW5kaXZpZHVhbCkge1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbC5vcmNpZElkKSB7XG4gICAgICBvdXQucHVzaCh7J3RleHQnOiAnT3JjaWQnLCAnaHJlZic6IHRoaXMuaW5kaXZpZHVhbC5vcmNpZElkWydAaWQnXX0pXG4gICAgfVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWwuc2NvcHVzSWQpIHtcbiAgICAgIG91dC5wdXNoKHsndGV4dCc6ICdTY29wdXMnLCAnaHJlZic6IGBodHRwczovL3d3dy5zY29wdXMuY29tL2F1dGhpZC9kZXRhaWwudXJpP2F1dGhvcklkPSR7dGhpcy5pbmRpdmlkdWFsLnNjb3B1c0lkfWB9KVxuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBmb3JtYXRTdWJqZWN0c09iamVjdChzdWJqZWN0cyl7XG4gICAgbGV0IG91dCA9IFtdO1xuICAgIGZvciAobGV0IHN1YmplY3QgaW4gc3ViamVjdHMpIHtcbiAgICAgIGxldCBzdWJPYmogPSB7c3ViamVjdDogc3ViamVjdCwgY291bnQ6IHN1YmplY3RzW3N1YmplY3RdLCBsYWJlbDogc3ViamVjdH07XG4gICAgICBsZXQgd29yZHMgPSBzdWJqZWN0LnNwbGl0KFwiIFwiKTtcbiAgICAgIGlmICh3b3Jkc1swXS5zdGFydHNXaXRoKFwiMFwiKSAmJiAhaXNOYU4od29yZHNbMF0pKSB7XG4gICAgICAgIHN1Yk9iai5sYWJlbCA9IHdvcmRzLnNsaWNlKDEsKS5qb2luKFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIG91dC5wdXNoKHN1Yk9iaik7XG4gICAgfVxuXG4gICAgb3V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBiWydjb3VudCddIC0gYVsnY291bnQnXTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLWluZGl2aWR1YWwnLCBScFBhZ2VJbmRpdmlkdWFsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNhYm91dCAuY29scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAjYWJvdXQgLmNvbHMgPiBkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnB1Yi1jb3VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBycC1iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICBycC1iYWRnZTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmxvYWQtbW9yZSB7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MjApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmxvYWQtbW9yZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgfVxuICBhLmV4cG9ydCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MjApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbiAgYS5leHBvcnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG5cblxuPGRpdiBjbGFzcz1cImluZGl2aWR1YWwgY29udGFpbmVyIHRvcFwiPlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmluZGl2aWR1YWxTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgaW5kaXZpZHVhbC48L3JwLWFsZXJ0PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmluZGl2aWR1YWxTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgPHJwLWhlcm8taW1hZ2U+XG4gICAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgICA8cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NXB4O1wiPjwvcnAtaWNvbj5cbiAgICAgIDxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHNsb3Q9XCJtYWluXCIgY2xhc3M9XCJoZXJvbWFpblwiPlxuICAgICAgPHJwLWF2YXRhciBzaXplPVwibGdcIj48L3JwLWF2YXRhcj5cbiAgICAgIDxoMiBjbGFzcz1cIm5hbWUgdGV4dC1zZWNvbmRhcnkgaDEgYm9sZCBtYi0wIHRleHQtY2VudGVyXCI+JHt0aGlzLmluZGl2aWR1YWwubGFiZWx9PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBoMyBtYi0yIG10LTEgdGV4dC1jZW50ZXJcIj4ke3RoaXMuZ2V0SW5kaXZpZHVhbFRpdGxlcygpLmpvaW4oXCIsIFwiKX08L3A+XG4gICAgICAke3RoaXMucmVzZWFyY2hTdWJqZWN0cy5sZW5ndGggPiAwID8gaHRtbCBgXG4gICAgICAgIDxwIGNsYXNzPVwiYm9sZCB0ZXh0LWxpZ2h0IGgzIG10LTEgbWItMCB0ZXh0LWNlbnRlclwiPk15IHJlc2VhcmNoIGFyZWFzIGluY2x1ZGU6IDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IG10LTIgbWItMFwiPlxuICAgICAgICAke3RoaXMucmVzZWFyY2hTdWJqZWN0cy5zcGxpY2UoMCwgdGhpcy5yZXNlYXJjaFN1YmplY3RzVG9TaG93KS5tYXAoc3ViamVjdCA9PiBodG1sYDxycC1iYWRnZT4ke3N1YmplY3QubGFiZWx9PC9ycC1iYWRnZT5gKX1cbiAgICAgICAgPC9wPlxuICAgICAgICBgIDogaHRtbGBgfVxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9ycC1oZXJvLWltYWdlPlxuICA8cnAtbGluay1saXN0IGNsYXNzPVwiYmctbGlnaHQgcC0zXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAubGlua3M9XCIke3RoaXMuUGVyc29uTW9kZWwuZ2V0U2VjdGlvbnMoKX1cIlxuICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz1cIiR7dGhpcy5hY3RpdmVTZWN0aW9uLmluZGV4fVwiPlxuICA8L3JwLWxpbmstbGlzdD5cblxuICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgP2hpZGRlbj1cIiR7dGhpcy5oaWRlU2VjdGlvbignYWJvdXQnKX1cIj5cbiAgICA8aDEgY2xhc3M9XCJ3ZWlnaHQtcmVndWxhciBtdC0wXCI+QWJvdXQ8L2gxPlxuICAgIDxoMiBoaWRkZW4+T3ZlcnZpZXc8L2gyPlxuICAgIDxwIGhpZGRlbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwXG4gICAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY29sc1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJtYi0yXCI+UG9zaXRpb25zPC9oMz5cbiAgICAgICAgICAke3RoaXMuZ2V0SW5kaXZpZHVhbFRpdGxlcygpLm1hcCh0aXRsZSA9PiBodG1sYDxkaXY+JHt0aXRsZX08L2Rpdj5gKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+PGgzIGNsYXNzPVwibWItMlwiPkNvbnRhY3Q8L2gzPiR7dGhpcy5nZXRFbWFpbEFkZHJlc3NlcygpLm1hcChhZGRyID0+IGh0bWxgPGRpdj48YSBocmVmPVwiJHsnbWFpbHRvOicgKyBhZGRyfVwiPiR7YWRkcn08L2E+PC9kaXY+YCl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzcz1cIm1iLTJcIj5XZWJzaXRlczwvaDM+XG4gICAgICAgICR7dGhpcy5nZXRXZWJzaXRlcygpLm1hcChzaXRlID0+IGh0bWxgPGRpdj48YSBocmVmPVwiJHtzaXRlLmhyZWZ9XCI+JHtzaXRlLnRleHR9PC9hPjwvZGl2PmApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbiBpZD1cInB1YmxpY2F0aW9uc1wiIGNsYXNzPVwiYmctbGlnaHQgbXQtM1wiID9oaWRkZW49XCIke3RoaXMuaGlkZVNlY3Rpb24oJ3B1YmxpY2F0aW9ucycpfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8aDEgY2xhc3M9XCJ3ZWlnaHQtcmVndWxhciBtdC0wXCI+UHVibGljYXRpb25zPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPiR7dGhpcy5pc093blByb2ZpbGUgPyBodG1sYFxuICAgICAgICA8YSBjbGFzcz1cImV4cG9ydCBtci0zXCIgaHJlZj1cIiR7YC9hcGkvbWl2LyR7dGhpcy5pbmRpdmlkdWFsSWR9YH1cIj5FeHBvcnQ8L2E+XG4gICAgICBgIDogaHRtbGBgfVxuICAgICAgICA8ZGl2IGNsYXNzPVwicHViLWNvdW50XCI+JHt0aGlzLnRvdGFsUHVibGljYXRpb25zfTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8aDI+U2VsZWN0ZWQgUHVibGljYXRpb25zPC9oMj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHB1YmxpY2F0aW9ucy48L3JwLWFsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiID9oaWRkZW49XCIke3RoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMucHVibGljYXRpb25TdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAgICR7IHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zLm1hcChwdWIgPT4gaHRtbGBcbiAgICAgICAgICA8cnAtY2l0YXRpb24gY2xhc3M9XCJtYi0zXCIgLmRhdGE9XCIke3B1Yn1cIj48L3JwLWNpdGF0aW9uPlxuICAgICAgICAgIGApfVxuICAgICAgPC9kaXY+XG4gICAgICAke3RoaXMucmV0cmlldmVkUHVibGljYXRpb25zLmxlbmd0aCA8IHRoaXMudG90YWxQdWJsaWNhdGlvbnMgPyBodG1sYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCIke3RoaXMuX2xvYWRNb3JlUHVic31cIiBjbGFzcz1cImxvYWQtbW9yZVwiPkxvYWQgbW9yZSBhcnRpY2xlczwvYnV0dG9uPmAgOiBodG1sYGB9XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbiBpZD1cInJlc2VhcmNoXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgaGlkZGVuPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UmVzZWFyY2g8L2gxPlxuICAgIDxoMj5PdmVydmlldzwvaDI+XG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmVcbiAgICAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPHA+XG4gICAgPGgyPktleXdvcmRzPC9oMj5cbiAgICAgIDxwPmxvcmVtLCBpcHN1bSwgZG9sb3Igc2l0IGFtaXQ8L3A+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgaGlkZGVuPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+Q29udGFjdDwvaDE+XG4gIDwvc2VjdGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuYDt9XG4iXSwic291cmNlUm9vdCI6IiJ9