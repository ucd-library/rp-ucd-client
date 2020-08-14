(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home"],{

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

/***/ "./public/elements/pages/home/rp-page-home.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/home/rp-page-home.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageHome; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_home_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-home.tpl.js */ "./public/elements/pages/home/rp-page-home.tpl.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ucd-lib/cork-app-utils */ "./public/node_modules/@ucd-lib/cork-app-utils/index.js");
/* harmony import */ var _ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ucd_lib_cork_app_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_link_list_counts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/link-list-counts */ "./public/elements/components/link-list-counts.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/search */ "./public/elements/components/search.js");
/* harmony import */ var _components_view_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/view-all */ "./public/elements/components/view-all.js");











class RpPageHome extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object},
      facetsStatus: {type: String},
      facets: {type: Object},
      academicWorks: {type: Array},
      academicWorksTotal: {type: parseInt},
      peopleStatus: {type: String},
      people: {type: Array},
      peopleTotal: {type: parseInt},
      peopleWidth: {type: parseInt},
      subjectsTotal: {type: parseInt},
      context: {type: String},
      visible: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_home_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.facets = {};
    this.academicWorks = []
    this.facetsStatus = 'loading';
    this.academicWorksTotal = 0;
    this.peopleStatus = 'loading';
    this.people = [];
    this.peopleTotal = 0;
    this.subjectsTotal = 0;
    this.setPeopleWidth(window.innerWidth);
    this.context = APP_CONFIG.data.jsonldContext;

    this.theme = APP_CONFIG.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));

    this._handleResize = this._handleResize.bind(this);
  }

  updated(props) {
    if (props.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        this._getPeople();
      }
    }
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
    await this._getFacets();
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 72;
    let screenPadding = 30;
    if ( w < 576 ) {
      pw = w - screenPadding - avatarWidth;
    }
    else if (w < 768 ) {
      pw = (w - screenPadding) * .7 - avatarWidth - 30;
    }
    this.peopleWidth = Math.floor(pw);
  }

  async _getPeople() {
    let peopleList = await this.CollectionModel.overview('randomPeople', {limit: 4, total: this.peopleTotal});
    this.peopleStatus = peopleList.state;
    if (peopleList.state != "loaded") {
      return;
    }
    this.people = peopleList.payload.results;
    console.log(this.people);
  }

  async _getFacets() {
    let facetList = await this.CollectionModel.overview('facets');
    this.facetsStatus = facetList.state;
    if (facetList.state != 'loaded') {
      return;
    }
    this.facets = facetList.payload.aggregations.facets['@type'];
    for (let facet in this.facets) {
      if (facet.startsWith('bibo:')) {

        let biboType = this._formatBibType(facet);
        this.academicWorks.push({text: biboType, count: this.facets[facet], facet: facet});
        continue;
      }
      if (facet == (this.context + ":publication")) {
        this.academicWorksTotal = this.facets[facet];
      }
      if (facet == (this.context + ":person")) {
        this.peopleTotal = this.facets[facet];
      }
    }

    this.academicWorks.sort(function(a, b) {
      let A = a.text.toUpperCase();
      let B = b.text.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    });

  }

  _formatBibType(bib, splitCamel=true, makePlural=true) {
    bib = bib.slice(5,);

    if (splitCamel) {
      bib = [...bib];
      for (let i = 0; i < bib.length; i++) {
        if (i == 0) {
          continue;
        }
        if (bib[i] == bib[i].toUpperCase()) {
          bib[i] = " " + bib[i];
        }
      }
      bib = bib.join("");
    }

    if (makePlural) {
      bib += "s";
    }
    return bib;
  }

}

customElements.define('rp-page-home', RpPageHome);


/***/ }),

/***/ "./public/elements/pages/home/rp-page-home.tpl.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/home/rp-page-home.tpl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./public/node_modules/lit-html/directives/unsafe-html.js");
/* harmony import */ var lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/until.js */ "./public/node_modules/lit-html/directives/until.js");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_3__);





function render() {
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-bg-primary);
  }
  .hero .container {
    padding: 50px 0;
  }
  .hero img {
    min-width: 30%;
    height: auto;
  }
  .hero .text {
    flex-grow: 1;
    padding: 0 50px;
  }
  .hero .content: {
    font-size: var(--font-size);
    line-height: 23px;
  }
  .search .container {
    padding: 28px 0;
  }
  rp-search {
    width: 50%;
    min-width: 300px;
  }
  .data .container {
    padding: 50px 0;
    flex-flow: row wrap;
  }
  .data .col-l {
    width: 100%;
  }
  .data .col-r {
  }
  .people-container {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 24px;
    grid-row-gap: 10px;
  }

  @media (min-width: 768px){
    .people-container {
      grid-template-columns: auto auto;
    }
  }

  @media (min-width: 576px){
    .data .container {
      flex-flow: row nowrap;
    }
    .data .col-l {
      width: 30%;
    }
    .data .col-r {
      padding-left: 24px;
    }
  }

  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_3___default.a}
</style>
<div class="hero">
  <div class="container flex">
  <img src="${this.theme.homeHeroImage}">
  <div class="text flex flex-column">
    <div class="text-default mt-0 h1 bold mb-3">${this.theme.homeHeroTitle}</div>
    <div class="flex flex-column justify-content-between flex-grow-1 content">
      <div>${Object(lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__["unsafeHTML"])(this.theme.homeHeroContentTop)}</div>
      <div>${Object(lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_1__["unsafeHTML"])(this.theme.homeHeroContentBottom)}</div>
    </div>
  </div>
  </div>
</div>
<div class="search bg-primary">
  <div class="container flex justify-content-center"><rp-search></rp-search></div>
</div>
<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <div ?hidden="${this.facetsStatus == 'error' || this.facetsStatus == 'loaded' }" class="loading1">loading</div>
      <rp-alert ?hidden="${this.facetsStatus == 'loading' || this.facetsStatus == 'loaded' }">Error loading academic works</rp-alert>
      <rp-link-list-counts ?hidden="${this.facetsStatus == 'loading' || this.facetsStatus == 'error' }"
                            links="${JSON.stringify(this.academicWorks)}"
                            view-all-link='{"text": "View All Works"}'
                            header="${JSON.stringify({text: "Academic Works", count: this.academicWorksTotal})}">
      </rp-link-list-counts>
    </div>
    <div class="col-r flex-grow-1">
      <div class="people">
        <h2 class="mt-0">
          <span class="bold mr-2">${this.peopleTotal}</span>
          <span class="weight-regular">People</span>
        </h2>
        <div class="people-container">
          ${this.CollectionModel._formatPeople(this.people).map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <rp-person-preview
              name="${person.name}"
              href="${"/individual/" + person.id}"
              title="${person.title}"
              avatar-size='sm'
              text-width=${this.peopleWidth}>
            </rp-person-preview>
            `)}
            <div></div>
            <rp-view-all text="View All People" href="/people" justify="start" style="margin-left:72px;"></rp-view-all>
        </div>
      </div>
      <div class="subjects">
        <h2>
          <span class="bold mr-2">${this.subjectsTotal}</span>
          <span class="weight-regular">Research Subjects</span>
        </h2>
      </div>
    </div>
  </div>
</div>

`;}


/***/ }),

/***/ "./public/node_modules/lit-html/directives/until.js":
/*!**********************************************************!*\
  !*** ./public/node_modules/lit-html/directives/until.js ***!
  \**********************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./public/node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./public/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


const _state = new WeakMap();
// Effectively infinity, but a SMI.
const _infinity = 0x7fffffff;
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */
const until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((...args) => (part) => {
    let state = _state.get(part);
    if (state === undefined) {
        state = {
            lastRenderedIndex: _infinity,
            values: [],
        };
        _state.set(part, state);
    }
    const previousValues = state.values;
    let previousLength = previousValues.length;
    state.values = args;
    for (let i = 0; i < args.length; i++) {
        // If we've rendered a higher-priority value already, stop.
        if (i > state.lastRenderedIndex) {
            break;
        }
        const value = args[i];
        // Render non-Promise values immediately
        if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) ||
            typeof value.then !== 'function') {
            part.setValue(value);
            state.lastRenderedIndex = i;
            // Since a lower-priority value will never overwrite a higher-priority
            // synchronous value, we can stop processing now.
            break;
        }
        // If this is a Promise we've already handled, skip it.
        if (i < previousLength && value === previousValues[i]) {
            continue;
        }
        // We have a Promise that we haven't seen before, so priorities may have
        // changed. Forget what we rendered before.
        state.lastRenderedIndex = _infinity;
        previousLength = 0;
        Promise.resolve(value).then((resolvedValue) => {
            const index = state.values.indexOf(value);
            // If state.values doesn't contain the value, we've re-rendered without
            // the value, so don't render it. Then, only render if the value is
            // higher-priority than what's already been rendered.
            if (index > -1 && index < state.lastRenderedIndex) {
                state.lastRenderedIndex = index;
                part.setValue(resolvedValue);
                part.commit();
            }
        });
    }
});
//# sourceMappingURL=until.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1g7O0FBRTdCLHNCQUFzQixzREFBVTtBQUN2QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxREFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7QUFDQTs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVEsMkJBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDVjs7QUFFOUIsdUJBQXVCLHNEQUFVO0FBQ3hDO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzREFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7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LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYWxlcnQudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWxlcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRoZW1lQ29sb3I6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RoZW1lLWNvbG9yJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoZW1lQ29sb3IgPSAnZGFuZ2VyJztcbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1t0aGlzLnRoZW1lQ29sb3JdID0gdHJ1ZTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hbGVydCcsIFJwQWxlcnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgIC5jb250YWluZXIuZGFuZ2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIGlyb24taWNvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2F2YXRhci50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBdmF0YXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHNyYzoge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNpemUgJiYgdGhpcy5zaXplICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydwaG90byddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgcmVuZGVyRmFjZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjIHx8IHRoaXMuc3JjID09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249J2ZhY2UnPjwvaXJvbi1pY29uPmA7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYXZhdGFyJywgUnBBdmF0YXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNpcmNsZS5zaXplLWxnIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1zbSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgLnBob3RvIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNpcmNsZSAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgJHt0aGlzLnJlbmRlckZhY2UoKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYmFkZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGNvbG9yU2VxdWVuY2U6IHt0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2NvbG9yLXNlcXVlbmNlJ30sXG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWF4Q29sb3IgPSA2O1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xvclNlcXVlbmNlKSB7XG4gICAgICBsZXQgbiA9IE1hdGguZmxvb3IodGhpcy5jb2xvclNlcXVlbmNlKTtcbiAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc2libGluZ3MgPSBbLi4udGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNdLmZpbHRlcihuID0+IG4udGFnTmFtZSA9PT0gdGhpcy50YWdOYW1lKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuID0gc2libGluZ3MuaW5kZXhPZih0aGlzKSAlIHRoaXMubWF4Q29sb3I7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLTAnXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICB9XG5cbiAgX3JlbmRlckJhZGdlKCkge1xuICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxhIGhyZWY9JHt0aGlzLmhyZWZ9PiR7dGhpcy5fcmVuZGVyU3BhbigpfTwvYT5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYCR7dGhpcy5fcmVuZGVyU3BhbigpfWA7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlclNwYW4oKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9JHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5gO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYmFkZ2UnLCBScEJhZGdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgcGFkZGluZzogLjNlbSAuN2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDApO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgc3Bhbi5zaXplLWxnIHtcbiAgICBwYWRkaW5nOiAuNTVlbSAuOWVtO1xuICB9XG4gIGE6aG92ZXIgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICAgICAgY29sb3I6ICB2YXIoLS10Y29sb3ItaG92ZXItdGV4dCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gIH1cbiAgc3Bhbi5jb2xvci0wIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgfVxuICBzcGFuLmNvbG9yLTEge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDEpO1xuICB9XG4gIHNwYW4uY29sb3ItMiB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Mik7XG4gIH1cbiAgc3Bhbi5jb2xvci0zIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQzKTtcbiAgfVxuICBzcGFuLmNvbG9yLTQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDQpO1xuICB9XG4gIHNwYW4uY29sb3ItNSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50NSk7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6bGluayB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuXG48L3N0eWxlPlxuICAke3RoaXMuX3JlbmRlckJhZGdlKCl9XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbGluay1saXN0LWNvdW50cy50cGwuanMnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmltcG9ydCBcIi4vdmlldy1hbGxcIjtcblxuZXhwb3J0IGNsYXNzIFJwTGlua0xpc3RDb3VudHMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGxpbmtzOiB7dHlwZTogQXJyYXl9LFxuICAgIHZpZXdBbGxMaW5rOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICd2aWV3LWFsbC1saW5rJ30sXG4gICAgaGVhZGVyOiB7dHlwZTogT2JqZWN0LCBhdHRyaWJ1dGU6ICdoZWFkZXInfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlua3MgPSBbXTtcblxuICAgIHRoaXMuX2xpbmtDbGljayA9IG5ldyBDdXN0b21FdmVudCgnbGluay1jbGljaycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgbGluayBoYXMgYmVlbiBjbGlja2VkLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW5kZXJIZWFkZXIoKXtcbiAgICBpZiAoIXRoaXMuaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHt0aGlzLmhlYWRlci5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1jb250YWluZXJcIj48c3Bhbj4ke3RoaXMuaGVhZGVyLnRleHR9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBfcmVuZGVyTGluayhsaW5rLCBpbmRleCl7XG4gICAgaWYgKCFsaW5rLnRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7bGluay5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluay1pbmRleD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJsaW5rXCI+JHtsaW5rLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJWaWV3QWxsKCl7XG4gICAgaWYgKCF0aGlzLnZpZXdBbGxMaW5rKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmsudGV4dCkge1xuICAgICAgdGhpcy52aWV3QWxsTGluay50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IHZpZXctYWxsXCI+PGRpdiBjbGFzcz1cImNvdW50XCI+PC9kaXY+PHJwLXZpZXctYWxsIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiB0ZXh0PVwiJHt0aGlzLnZpZXdBbGxMaW5rLnRleHR9XCI+PC9ycC12aWV3LWFsbD48L2Rpdj5gXG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmsnKSApIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLmxpbmtzW3BhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluay1pbmRleCcpKV1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLkNsaWNrZWRsaW5rID0gdGhpcy52aWV3QWxsTGluaztcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2xpbmtDbGljayk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdC1jb3VudHMnLCBScExpbmtMaXN0Q291bnRzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICB9XG4gICAgLnJvdy5oZWFkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gICAgfVxuICAgIC5yb3cudmlldy1hbGwge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5jb3VudCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB3aWR0aDogY2FsYygzMCUgLSAxMHB4KTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5saW5rLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgLmxpbms6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgJHt0aGlzLl9yZW5kZXJIZWFkZXIoKX1cbiAgICAke3RoaXMubGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gdGhpcy5fcmVuZGVyTGluayhsaW5rLCBpbmRleCkpfVxuICAgICR7dGhpcy5fcmVuZGVyVmlld0FsbCgpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcGVyc29uLXByZXZpZXcudHBsLmpzJztcblxuaW1wb3J0IFwiLi9iYWRnZVwiO1xuXG5leHBvcnQgY2xhc3MgUnBQZXJzb25QcmV2aWV3IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgYmFkZ2VzOiB7dHlwZTogQXJyYXl9LFxuICAgIGF2YXRhclNpemU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2F2YXRhci1zaXplJ30sXG4gICAgYXZhdGFyU3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdhdmF0YXItc3JjJ30sXG4gICAgdGV4dFdpZHRoOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0ZXh0LXdpZHRoJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYmFkZ2VzID0gW107XG4gICAgdGhpcy50ZXh0V2lkdGggPSAod2luZG93LmlubmVyV2lkdGgudG9TdHJpbmcoKSAtIDcwKSArIFwicHhcIjtcbiAgfVxuXG4gIF9yZW5kZXJCYWRnZShiYWRnZSkge1xuICAgIGlmICh0eXBlb2YgYmFkZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gaHRtbGA8cnAtYmFkZ2U+JHtiYWRnZX08L3JwLWJhZGdlPmA7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiYWRnZSA9PT0gJ29iamVjdCcpe1xuICAgICAgbGV0IHQgPSBiYWRnZS50ZXh0O1xuICAgICAgaWYgKCF0KSB7XG4gICAgICAgIHJldHVybiBodG1sYGA7XG4gICAgICB9XG4gICAgICBsZXQgaHJlZiA9IGJhZGdlLmhyZWY7XG4gICAgICBpZiAoaHJlZikge1xuICAgICAgICByZXR1cm4gaHRtbGA8cnAtYmFkZ2UgaHJlZj1cIiR7aHJlZn1cIj4ke3R9PC9ycC1iYWRnZT5gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGh0bWxgPHJwLWJhZGdlPiR7dH08L3JwLWJhZGdlPmA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wZXJzb24tcHJldmlldycsIFJwUGVyc29uUHJldmlldyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5pbXBvcnQgXCIuL2F2YXRhclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQgOiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5hbWU6aG92ZXIge1xuICAgICAgY29sb3IgOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLm5hbWVbZGlzYWJsZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAubmFtZVtkaXNhYmxlZF06aG92ZXIge1xuICAgICAgY29sb3IgOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICB9XG4gICAgc21hbGwge1xuICAgICAgZm9udC1zaXplIDogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgfVxuICAgIHNtYWxsLmJhZGdlcyB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPWNvbnRhaW5lcj5cbiAgICA8cnAtYXZhdGFyIHNpemU9XCIke3RoaXMuYXZhdGFyU2l6ZX1cIiBzcmM9XCIke3RoaXMuYXZhdGFyU3JjfVwiPjwvcnAtYXZhdGFyPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiIHN0eWxlPVwiJHtzdHlsZU1hcCh7XCJtYXgtd2lkdGhcIiA6IHRoaXMudGV4dFdpZHRofSl9XCI+XG4gICAgICA8YSBjbGFzcz1cIm5hbWVcIiBocmVmPVwiJHt0aGlzLmhyZWZ9XCIgP2Rpc2FibGVkPVwiJHshdGhpcy5ocmVmfVwiPiR7dGhpcy5uYW1lfTwvYT5cbiAgICAgIDxzbWFsbD4ke3RoaXMudGl0bGV9PC9zbWFsbD5cbiAgICAgIDxzbWFsbCBjbGFzcz1cImJhZGdlc1wiPiR7dGhpcy5iYWRnZXMubWFwKGIgPT4gdGhpcy5fcmVuZGVyQmFkZ2UoYikpfTwvc21hbGw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3NlYXJjaC50cGwuanMnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duJztcbmltcG9ydCBcIi4vaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgUnBTZWFyY2ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICBpbnB1dFZhbHVlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiaW5wdXQtdmFsdWVcIiwgcmVmbGVjdDogdHJ1ZX0sXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFjdGl2ZUZhY2V0OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ2FjdGl2ZS1mYWNldCcsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mYWNldHMgPSBbe1widGV4dFwiOiBcIlBFT1BMRVwifSwge1widGV4dFwiOiBcIk9SR0FOSVpBVElPTlNcIn0sIHtcInRleHRcIjogXCJXT1JLU1wifV07XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHRoZSByZWdpc3RyeVwiO1xuICAgIHRoaXMuYWN0aXZlRmFjZXQgPSAwO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLl9uZXdTZWFyY2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ25ldy1zZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHNlYXJjaCBoYXMgYmVlbiB0cmlnZ2VyZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdpbnB1dFZhbHVlJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdhY3RpdmVGYWNldCcpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9iamVjdCA9IHtzZWFyY2g6IHRoaXMuaW5wdXRWYWx1ZSwgZmFjZXQ6IHRoaXMuZmFjZXRzW3RoaXMuYWN0aXZlRmFjZXRdfTtcbiAgICB9XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBkb1NlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VhcmNoKTtcbiAgfVxuXG4gIF9oYW5kbGVLZXl1cChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1zZWFyY2gnLCBScFNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNpbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAjaWNvbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8cnAtZHJvcGRvd24gY2hvaWNlcz1cIiR7SlNPTi5zdHJpbmdpZnkodGhpcy5mYWNldHMpfVwiXG4gICAgICAgICAgICAgICAgIGNob3Nlbj1cIiR7dGhpcy5hY3RpdmVGYWNldH1cIlxuICAgICAgICAgICAgICAgICBAbmV3LXNlbGVjdGlvbj1cIiR7ZSA9PiB0aGlzLmFjdGl2ZUZhY2V0ID0gZS50YXJnZXQuY2hvc2VufVwiPlxuICAgIDwvcnAtZHJvcGRvd24+XG4gICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5pbnB1dFZhbHVlfVwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiXG4gICAgICAgICAgIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlfVwiXG4gICAgICAgICAgIEBrZXl1cD1cIiR7dGhpcy5faGFuZGxlS2V5dXB9XCJcbiAgICAgICAgICAgaWQ9XCJpbnB1dFwiPlxuICAgIDxkaXYgaWQ9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgICAgPHJwLWljb24gQGNsaWNrPVwiJHt0aGlzLmRvU2VhcmNofVwiIGljb249XCJycC1zZWFyY2hcIiA/aXMtbGluaz1cIiR7dGhpcy5pbnB1dFZhbHVlfVwiPjxycC1pY29uPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi92aWV3LWFsbC50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBWaWV3QWxsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICBqdXN0aWZ5OiB7dHlwZTogU3RyaW5nfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dCA9IFwiVmlldyBBbGxcIjtcbiAgICB0aGlzLmhyZWYgPSBcIlwiO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGlmICh0aGlzLmp1c3RpZnkpIHtcbiAgICAgIGNsYXNzZXNbdGhpcy5qdXN0aWZ5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgX3JlbmRlcklubmVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz1cInRleHRcIj4ke3RoaXMudGV4dH08L3NwYW4+PGlyb24taWNvbiBpY29uPVwiYXY6cGxheS1hcnJvd1wiPjwvaXJvbi1pY29uPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC12aWV3LWFsbCcsIFJwVmlld0FsbCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgfVxuICAgIC5jb250YWluZXIuc3RhcnQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAuY29udGFpbmVyLmNlbnRlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcjpob3ZlciBpcm9uLWljb24sIC5jb250YWluZXI6aG92ZXIgYXtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgfVxuXG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgbWluLXdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgICAudmlldy1hbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgJHt0aGlzLmhyZWYgPyBodG1sYFxuICAgICAgPGEgY2xhc3M9XCJ2aWV3LWFsbFwiIGhyZWY9XCIke3RoaXMuaHJlZn1cIj4ke3RoaXMuX3JlbmRlcklubmVyQ29udGVudCgpfTwvYT5cbiAgICAgIGAgOiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInZpZXctYWxsXCI+JHt0aGlzLl9yZW5kZXJJbm5lckNvbnRlbnQoKX08L2Rpdj5cbiAgICAgIGB9XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLWhvbWUudHBsLmpzXCJcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy92aWV3LWFsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VIb21lIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aGVtZToge3R5cGU6IE9iamVjdH0sXG4gICAgICBmYWNldHNTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZmFjZXRzOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGFjYWRlbWljV29ya3M6IHt0eXBlOiBBcnJheX0sXG4gICAgICBhY2FkZW1pY1dvcmtzVG90YWw6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBwZW9wbGVTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGVvcGxlOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcGVvcGxlVG90YWw6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBwZW9wbGVXaWR0aDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHN1YmplY3RzVG90YWw6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBjb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuZmFjZXRzID0ge307XG4gICAgdGhpcy5hY2FkZW1pY1dvcmtzID0gW11cbiAgICB0aGlzLmZhY2V0c1N0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmFjYWRlbWljV29ya3NUb3RhbCA9IDA7XG4gICAgdGhpcy5wZW9wbGVTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5wZW9wbGUgPSBbXTtcbiAgICB0aGlzLnBlb3BsZVRvdGFsID0gMDtcbiAgICB0aGlzLnN1YmplY3RzVG90YWwgPSAwO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHRoaXMuY29udGV4dCA9IEFQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0O1xuXG4gICAgdGhpcy50aGVtZSA9IEFQUF9DT05GSUcudGhlbWU7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcblxuICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSA9IHRoaXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXMoJ2ZhY2V0c1N0YXR1cycpKSB7XG4gICAgICBpZiAodGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgdGhpcy5fZ2V0UGVvcGxlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RmFjZXRzKCk7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA3MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIGlmICggdyA8IDU3NiApIHtcbiAgICAgIHB3ID0gdyAtIHNjcmVlblBhZGRpbmcgLSBhdmF0YXJXaWR0aDtcbiAgICB9XG4gICAgZWxzZSBpZiAodyA8IDc2OCApIHtcbiAgICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSAzMDtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IE1hdGguZmxvb3IocHcpO1xuICB9XG5cbiAgYXN5bmMgX2dldFBlb3BsZSgpIHtcbiAgICBsZXQgcGVvcGxlTGlzdCA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdyYW5kb21QZW9wbGUnLCB7bGltaXQ6IDQsIHRvdGFsOiB0aGlzLnBlb3BsZVRvdGFsfSk7XG4gICAgdGhpcy5wZW9wbGVTdGF0dXMgPSBwZW9wbGVMaXN0LnN0YXRlO1xuICAgIGlmIChwZW9wbGVMaXN0LnN0YXRlICE9IFwibG9hZGVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGUgPSBwZW9wbGVMaXN0LnBheWxvYWQucmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlb3BsZSk7XG4gIH1cblxuICBhc3luYyBfZ2V0RmFjZXRzKCkge1xuICAgIGxldCBmYWNldExpc3QgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnZmFjZXRzJyk7XG4gICAgdGhpcy5mYWNldHNTdGF0dXMgPSBmYWNldExpc3Quc3RhdGU7XG4gICAgaWYgKGZhY2V0TGlzdC5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0TGlzdC5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbJ0B0eXBlJ107XG4gICAgZm9yIChsZXQgZmFjZXQgaW4gdGhpcy5mYWNldHMpIHtcbiAgICAgIGlmIChmYWNldC5zdGFydHNXaXRoKCdiaWJvOicpKSB7XG5cbiAgICAgICAgbGV0IGJpYm9UeXBlID0gdGhpcy5fZm9ybWF0QmliVHlwZShmYWNldCk7XG4gICAgICAgIHRoaXMuYWNhZGVtaWNXb3Jrcy5wdXNoKHt0ZXh0OiBiaWJvVHlwZSwgY291bnQ6IHRoaXMuZmFjZXRzW2ZhY2V0XSwgZmFjZXQ6IGZhY2V0fSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZhY2V0ID09ICh0aGlzLmNvbnRleHQgKyBcIjpwdWJsaWNhdGlvblwiKSkge1xuICAgICAgICB0aGlzLmFjYWRlbWljV29ya3NUb3RhbCA9IHRoaXMuZmFjZXRzW2ZhY2V0XTtcbiAgICAgIH1cbiAgICAgIGlmIChmYWNldCA9PSAodGhpcy5jb250ZXh0ICsgXCI6cGVyc29uXCIpKSB7XG4gICAgICAgIHRoaXMucGVvcGxlVG90YWwgPSB0aGlzLmZhY2V0c1tmYWNldF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY2FkZW1pY1dvcmtzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgbGV0IEEgPSBhLnRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgIGxldCBCID0gYi50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZiAoQSA8IEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKEEgPiBCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgfVxuXG4gIF9mb3JtYXRCaWJUeXBlKGJpYiwgc3BsaXRDYW1lbD10cnVlLCBtYWtlUGx1cmFsPXRydWUpIHtcbiAgICBiaWIgPSBiaWIuc2xpY2UoNSwpO1xuXG4gICAgaWYgKHNwbGl0Q2FtZWwpIHtcbiAgICAgIGJpYiA9IFsuLi5iaWJdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaWJbaV0gPT0gYmliW2ldLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICBiaWJbaV0gPSBcIiBcIiArIGJpYltpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmliID0gYmliLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKG1ha2VQbHVyYWwpIHtcbiAgICAgIGJpYiArPSBcInNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGJpYjtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1ob21lJywgUnBQYWdlSG9tZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgdW50aWwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3VudGlsLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgfVxuICAuaGVybyAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbiAgLmhlcm8gaW1nIHtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmhlcm8gLnRleHQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbiAgLmhlcm8gLmNvbnRlbnQ6IHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIH1cbiAgLnNlYXJjaCAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyOHB4IDA7XG4gIH1cbiAgcnAtc2VhcmNoIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgLmRhdGEgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLmRhdGEgLmNvbC1sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGF0YSAuY29sLXIge1xuICB9XG4gIC5wZW9wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLWNvbHVtbi1nYXA6IDI0cHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAucGVvcGxlLWNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgIC5kYXRhIC5jb250YWluZXIge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAuZGF0YSAuY29sLWwge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLmRhdGEgLmNvbC1yIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICB9XG4gIH1cblxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiaGVyb1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXhcIj5cbiAgPGltZyBzcmM9XCIke3RoaXMudGhlbWUuaG9tZUhlcm9JbWFnZX1cIj5cbiAgPGRpdiBjbGFzcz1cInRleHQgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWRlZmF1bHQgbXQtMCBoMSBib2xkIG1iLTNcIj4ke3RoaXMudGhlbWUuaG9tZUhlcm9UaXRsZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWdyb3ctMSBjb250ZW50XCI+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudFRvcCl9PC9kaXY+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudEJvdHRvbSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNlYXJjaCBiZy1wcmltYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PHJwLXNlYXJjaD48L3JwLXNlYXJjaD48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImRhdGEgYmctbGlnaHRcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sXCI+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8cnAtYWxlcnQgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkZWQnIH1cIj5FcnJvciBsb2FkaW5nIGFjYWRlbWljIHdvcmtzPC9ycC1hbGVydD5cbiAgICAgIDxycC1saW5rLWxpc3QtY291bnRzID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnZXJyb3InIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzPVwiJHtKU09OLnN0cmluZ2lmeSh0aGlzLmFjYWRlbWljV29ya3MpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldy1hbGwtbGluaz0ne1widGV4dFwiOiBcIlZpZXcgQWxsIFdvcmtzXCJ9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIiR7SlNPTi5zdHJpbmdpZnkoe3RleHQ6IFwiQWNhZGVtaWMgV29ya3NcIiwgY291bnQ6IHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsfSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdC1jb3VudHM+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1yIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGVvcGxlXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cIm10LTBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGQgbXItMlwiPiR7dGhpcy5wZW9wbGVUb3RhbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPlBlb3BsZTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBlb3BsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAke3RoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRQZW9wbGUodGhpcy5wZW9wbGUpLm1hcChwZXJzb24gPT4gaHRtbGBcbiAgICAgICAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICAgICAgICBuYW1lPVwiJHtwZXJzb24ubmFtZX1cIlxuICAgICAgICAgICAgICBocmVmPVwiJHtcIi9pbmRpdmlkdWFsL1wiICsgcGVyc29uLmlkfVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgICAgICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgICAgICAgICAgICB0ZXh0LXdpZHRoPSR7dGhpcy5wZW9wbGVXaWR0aH0+XG4gICAgICAgICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPHJwLXZpZXctYWxsIHRleHQ9XCJWaWV3IEFsbCBQZW9wbGVcIiBocmVmPVwiL3Blb3BsZVwiIGp1c3RpZnk9XCJzdGFydFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6NzJweDtcIj48L3JwLXZpZXctYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3RzXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGQgbXItMlwiPiR7dGhpcy5zdWJqZWN0c1RvdGFsfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UmVzZWFyY2ggU3ViamVjdHM8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuYDt9XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5jb25zdCBfc3RhdGUgPSBuZXcgV2Vha01hcCgpO1xuLy8gRWZmZWN0aXZlbHkgaW5maW5pdHksIGJ1dCBhIFNNSS5cbmNvbnN0IF9pbmZpbml0eSA9IDB4N2ZmZmZmZmY7XG4vKipcbiAqIFJlbmRlcnMgb25lIG9mIGEgc2VyaWVzIG9mIHZhbHVlcywgaW5jbHVkaW5nIFByb21pc2VzLCB0byBhIFBhcnQuXG4gKlxuICogVmFsdWVzIGFyZSByZW5kZXJlZCBpbiBwcmlvcml0eSBvcmRlciwgd2l0aCB0aGUgZmlyc3QgYXJndW1lbnQgaGF2aW5nIHRoZVxuICogaGlnaGVzdCBwcmlvcml0eSBhbmQgdGhlIGxhc3QgYXJndW1lbnQgaGF2aW5nIHRoZSBsb3dlc3QgcHJpb3JpdHkuIElmIGFcbiAqIHZhbHVlIGlzIGEgUHJvbWlzZSwgbG93LXByaW9yaXR5IHZhbHVlcyB3aWxsIGJlIHJlbmRlcmVkIHVudGlsIGl0IHJlc29sdmVzLlxuICpcbiAqIFRoZSBwcmlvcml0eSBvZiB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIGFzeW5jXG4gKiBkYXRhLiBGb3IgZXhhbXBsZSwgYSBQcm9taXNlIHdpdGggcGVuZGluZyBjb250ZW50IGNhbiBiZSB0aGUgZmlyc3QsXG4gKiBoaWdoZXN0LXByaW9yaXR5LCBhcmd1bWVudCwgYW5kIGEgbm9uX3Byb21pc2UgbG9hZGluZyBpbmRpY2F0b3IgdGVtcGxhdGUgY2FuXG4gKiBiZSB1c2VkIGFzIHRoZSBzZWNvbmQsIGxvd2VyLXByaW9yaXR5LCBhcmd1bWVudC4gVGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGxcbiAqIHJlbmRlciBpbW1lZGlhdGVseSwgYW5kIHRoZSBwcmltYXJ5IGNvbnRlbnQgd2lsbCByZW5kZXIgd2hlbiB0aGUgUHJvbWlzZVxuICogcmVzb2x2ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgY29udGVudCA9IGZldGNoKCcuL2NvbnRlbnQudHh0JykudGhlbihyID0+IHIudGV4dCgpKTtcbiAqICAgICBodG1sYCR7dW50aWwoY29udGVudCwgaHRtbGA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPmApfWBcbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gZGlyZWN0aXZlKCguLi5hcmdzKSA9PiAocGFydCkgPT4ge1xuICAgIGxldCBzdGF0ZSA9IF9zdGF0ZS5nZXQocGFydCk7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBsYXN0UmVuZGVyZWRJbmRleDogX2luZmluaXR5LFxuICAgICAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICAgIGxldCBwcmV2aW91c0xlbmd0aCA9IHByZXZpb3VzVmFsdWVzLmxlbmd0aDtcbiAgICBzdGF0ZS52YWx1ZXMgPSBhcmdzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiB3ZSd2ZSByZW5kZXJlZCBhIGhpZ2hlci1wcmlvcml0eSB2YWx1ZSBhbHJlYWR5LCBzdG9wLlxuICAgICAgICBpZiAoaSA+IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbaV07XG4gICAgICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpO1xuICAgICAgICAgICAgLy8gU2luY2UgYSBsb3dlci1wcmlvcml0eSB2YWx1ZSB3aWxsIG5ldmVyIG92ZXJ3cml0ZSBhIGhpZ2hlci1wcmlvcml0eVxuICAgICAgICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3Npbmcgbm93LlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgICAgICBpZiAoaSA8IHByZXZpb3VzTGVuZ3RoICYmIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBhIFByb21pc2UgdGhhdCB3ZSBoYXZlbid0IHNlZW4gYmVmb3JlLCBzbyBwcmlvcml0aWVzIG1heSBoYXZlXG4gICAgICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAgICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVudGlsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=