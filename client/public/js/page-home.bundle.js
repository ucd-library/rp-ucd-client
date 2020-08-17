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
    max-width: 30%;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1g7O0FBRTdCLHNCQUFzQixzREFBVTtBQUN2QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxREFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7QUFDQTs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVEsMkJBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDVjs7QUFFOUIsdUJBQXVCLHNEQUFVO0FBQ3hDO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzREFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7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LWhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hbGVydC50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBbGVydCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGhlbWVDb2xvcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGhlbWUtY29sb3InfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhlbWVDb2xvciA9ICdkYW5nZXInO1xuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzW3RoaXMudGhlbWVDb2xvcl0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFsZXJ0JywgUnBBbGVydCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5jb250YWluZXIgaXJvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYXZhdGFyLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEF2YXRhciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc2l6ZSAmJiB0aGlzLnNpemUgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsYXNzZXNbJ3NpemUtJyArIHRoaXMuc2l6ZV0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsYXNzZXNbJ3Bob3RvJ10gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICByZW5kZXJGYWNlKCkge1xuICAgIGlmICghdGhpcy5zcmMgfHwgdGhpcy5zcmMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBodG1sYDxpcm9uLWljb24gaWNvbj0nZmFjZSc+PC9pcm9uLWljb24+YDtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hdmF0YXInLCBScEF2YXRhcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5jaXJjbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuY2lyY2xlLnNpemUtbGcge1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLmNpcmNsZS5zaXplLXNtIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICAucGhvdG8ge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY2lyY2xlICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAke3RoaXMucmVuZGVyRmFjZSgpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9iYWRnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgY29sb3JTZXF1ZW5jZToge3R5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnY29sb3Itc2VxdWVuY2UnfSxcbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXhDb2xvciA9IDY7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgIGNsYXNzZXNbJ3NpemUtJyArIHRoaXMuc2l6ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbG9yU2VxdWVuY2UpIHtcbiAgICAgIGxldCBuID0gTWF0aC5mbG9vcih0aGlzLmNvbG9yU2VxdWVuY2UpO1xuICAgICAgY2xhc3Nlc1snY29sb3ItJyArIG4udG9TdHJpbmcoKV0gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzaWJsaW5ncyA9IFsuLi50aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc10uZmlsdGVyKG4gPT4gbi50YWdOYW1lID09PSB0aGlzLnRhZ05hbWUpO1xuICAgICAgaWYgKHNpYmxpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG4gPSBzaWJsaW5ncy5pbmRleE9mKHRoaXMpICUgdGhpcy5tYXhDb2xvcjtcbiAgICAgICAgY2xhc3Nlc1snY29sb3ItJyArIG4udG9TdHJpbmcoKV0gPSB0cnVlO1xuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xhc3Nlc1snY29sb3ItMCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBfcmVuZGVyQmFkZ2UoKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj0ke3RoaXMuaHJlZn0+JHt0aGlzLl9yZW5kZXJTcGFuKCl9PC9hPmA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGh0bWxgJHt0aGlzLl9yZW5kZXJTcGFuKCl9YDtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyU3BhbigpIHtcbiAgICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz0ke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX0+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9zcGFuPmA7XG4gIH1cblxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1iYWRnZScsIFJwQmFkZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBwYWRkaW5nOiAuM2VtIC43ZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICBzcGFuLnNpemUtbGcge1xuICAgIHBhZGRpbmc6IC41NWVtIC45ZW07XG4gIH1cbiAgYTpob3ZlciBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gICAgICBjb2xvcjogIHZhcigtLXRjb2xvci1ob3Zlci10ZXh0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgfVxuICBzcGFuLmNvbG9yLTAge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDApO1xuICB9XG4gIHNwYW4uY29sb3ItMSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MSk7XG4gIH1cbiAgc3Bhbi5jb2xvci0yIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQyKTtcbiAgfVxuICBzcGFuLmNvbG9yLTMge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDMpO1xuICB9XG4gIHNwYW4uY29sb3ItNCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50NCk7XG4gIH1cbiAgc3Bhbi5jb2xvci01IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQ1KTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYTpsaW5rIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG5cbjwvc3R5bGU+XG4gICR7dGhpcy5fcmVuZGVyQmFkZ2UoKX1cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QtY291bnRzLnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IFwiLi92aWV3LWFsbFwiO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdENvdW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgdmlld0FsbExpbms6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ3ZpZXctYWxsLWxpbmsnfSxcbiAgICBoZWFkZXI6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ2hlYWRlcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saW5rcyA9IFtdO1xuXG4gICAgdGhpcy5fbGlua0NsaWNrID0gbmV3IEN1c3RvbUV2ZW50KCdsaW5rLWNsaWNrJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIGNsaWNrZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbmRlckhlYWRlcigpe1xuICAgIGlmICghdGhpcy5oZWFkZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXIudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke3RoaXMuaGVhZGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPjxzcGFuPiR7dGhpcy5oZWFkZXIudGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBpZiAoIWxpbmsudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHtsaW5rLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBsaW5rLWluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cImxpbmtcIj4ke2xpbmsudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgX3JlbmRlclZpZXdBbGwoKXtcbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmspIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy52aWV3QWxsTGluay50ZXh0KSB7XG4gICAgICB0aGlzLnZpZXdBbGxMaW5rLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgdmlldy1hbGxcIj48ZGl2IGNsYXNzPVwiY291bnRcIj48L2Rpdj48cnAtdmlldy1hbGwgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIHRleHQ9XCIke3RoaXMudmlld0FsbExpbmsudGV4dH1cIj48L3JwLXZpZXctYWxsPjwvZGl2PmBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpICkge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMubGlua3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rLWluZGV4JykpXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLnZpZXdBbGxMaW5rO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGlua0NsaWNrKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0LWNvdW50cycsIFJwTGlua0xpc3RDb3VudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gICAgLnJvdy52aWV3LWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckhlYWRlcigpfVxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gICAgJHt0aGlzLl9yZW5kZXJWaWV3QWxsKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9wZXJzb24tcHJldmlldy50cGwuanMnO1xuXG5pbXBvcnQgXCIuL2JhZGdlXCI7XG5cbmV4cG9ydCBjbGFzcyBScFBlcnNvblByZXZpZXcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nfSxcbiAgICBiYWRnZXM6IHt0eXBlOiBBcnJheX0sXG4gICAgYXZhdGFyU2l6ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnYXZhdGFyLXNpemUnfSxcbiAgICBhdmF0YXJTcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ2F2YXRhci1zcmMnfSxcbiAgICB0ZXh0V2lkdGg6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RleHQtd2lkdGgnfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5iYWRnZXMgPSBbXTtcbiAgICB0aGlzLnRleHRXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aC50b1N0cmluZygpIC0gNzApICsgXCJweFwiO1xuICB9XG5cbiAgX3JlbmRlckJhZGdlKGJhZGdlKSB7XG4gICAgaWYgKHR5cGVvZiBiYWRnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZT4ke2JhZGdlfTwvcnAtYmFkZ2U+YDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGJhZGdlID09PSAnb2JqZWN0Jyl7XG4gICAgICBsZXQgdCA9IGJhZGdlLnRleHQ7XG4gICAgICBpZiAoIXQpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICAgIH1cbiAgICAgIGxldCBocmVmID0gYmFkZ2UuaHJlZjtcbiAgICAgIGlmIChocmVmKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZSBocmVmPVwiJHtocmVmfVwiPiR7dH08L3JwLWJhZGdlPmA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbGA8cnAtYmFkZ2U+JHt0fTwvcnAtYmFkZ2U+YDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBlcnNvbi1wcmV2aWV3JywgUnBQZXJzb25QcmV2aWV3KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcbmltcG9ydCBcIi4vYXZhdGFyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAudGV4dC1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgICBmb250LXdlaWdodCA6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubmFtZTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpO1xuICAgIH1cbiAgICAubmFtZVtkaXNhYmxlZF0ge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5uYW1lW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgICBjb2xvciA6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBmb250LXNpemUgOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gICAgc21hbGwuYmFkZ2VzIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9Y29udGFpbmVyPlxuICAgIDxycC1hdmF0YXIgc2l6ZT1cIiR7dGhpcy5hdmF0YXJTaXplfVwiIHNyYz1cIiR7dGhpcy5hdmF0YXJTcmN9XCI+PC9ycC1hdmF0YXI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCIgc3R5bGU9XCIke3N0eWxlTWFwKHtcIm1heC13aWR0aFwiIDogdGhpcy50ZXh0V2lkdGh9KX1cIj5cbiAgICAgIDxhIGNsYXNzPVwibmFtZVwiIGhyZWY9XCIke3RoaXMuaHJlZn1cIiA/ZGlzYWJsZWQ9XCIkeyF0aGlzLmhyZWZ9XCI+JHt0aGlzLm5hbWV9PC9hPlxuICAgICAgPHNtYWxsPiR7dGhpcy50aXRsZX08L3NtYWxsPlxuICAgICAgPHNtYWxsIGNsYXNzPVwiYmFkZ2VzXCI+JHt0aGlzLmJhZGdlcy5tYXAoYiA9PiB0aGlzLl9yZW5kZXJCYWRnZShiKSl9PC9zbWFsbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vc2VhcmNoLnRwbC5qcyc7XG5pbXBvcnQgJy4vZHJvcGRvd24nO1xuaW1wb3J0IFwiLi9pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBScFNlYXJjaCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9LFxuICAgIGlucHV0VmFsdWU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpbnB1dC12YWx1ZVwiLCByZWZsZWN0OiB0cnVlfSxcbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG4gICAgYWN0aXZlRmFjZXQ6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcblxuICAgIHRoaXMuX25ld1NlYXJjaCA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlYXJjaCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VhcmNoIGhhcyBiZWVuIHRyaWdnZXJlZCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpIHtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2lucHV0VmFsdWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2FjdGl2ZUZhY2V0JykpIHtcbiAgICAgIHRoaXMuc2VhcmNoT2JqZWN0ID0ge3NlYXJjaDogdGhpcy5pbnB1dFZhbHVlLCBmYWNldDogdGhpcy5mYWNldHNbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGRvU2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9uZXdTZWFyY2gpO1xuICB9XG5cbiAgX2hhbmRsZUtleXVwKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5kb1NlYXJjaCgpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXNlYXJjaCcsIFJwU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2lucHV0IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICNpY29uLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICAgIC5saW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MTApO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxycC1kcm9wZG93biBjaG9pY2VzPVwiJHtKU09OLnN0cmluZ2lmeSh0aGlzLmZhY2V0cyl9XCJcbiAgICAgICAgICAgICAgICAgY2hvc2VuPVwiJHt0aGlzLmFjdGl2ZUZhY2V0fVwiXG4gICAgICAgICAgICAgICAgIEBuZXctc2VsZWN0aW9uPVwiJHtlID0+IHRoaXMuYWN0aXZlRmFjZXQgPSBlLnRhcmdldC5jaG9zZW59XCI+XG4gICAgPC9ycC1kcm9wZG93bj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLmlucHV0VmFsdWV9XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCJcbiAgICAgICAgICAgQGlucHV0PVwiJHsoZSkgPT4gdGhpcy5pbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWV9XCJcbiAgICAgICAgICAgQGtleXVwPVwiJHt0aGlzLl9oYW5kbGVLZXl1cH1cIlxuICAgICAgICAgICBpZD1cImlucHV0XCI+XG4gICAgPGRpdiBpZD1cImljb24tY29udGFpbmVyXCI+XG4gICAgICA8cnAtaWNvbiBAY2xpY2s9XCIke3RoaXMuZG9TZWFyY2h9XCIgaWNvbj1cInJwLXNlYXJjaFwiID9pcy1saW5rPVwiJHt0aGlzLmlucHV0VmFsdWV9XCI+PHJwLWljb24+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3ZpZXctYWxsLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScFZpZXdBbGwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGp1c3RpZnk6IHt0eXBlOiBTdHJpbmd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gXCJWaWV3IEFsbFwiO1xuICAgIHRoaXMuaHJlZiA9IFwiXCI7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgaWYgKHRoaXMuanVzdGlmeSkge1xuICAgICAgY2xhc3Nlc1t0aGlzLmp1c3RpZnldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBfcmVuZGVySW5uZXJDb250ZW50KCkge1xuICAgIHJldHVybiBodG1sYDxzcGFuIGNsYXNzPVwidGV4dFwiPiR7dGhpcy50ZXh0fTwvc3Bhbj48aXJvbi1pY29uIGljb249XCJhdjpwbGF5LWFycm93XCI+PC9pcm9uLWljb24+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXZpZXctYWxsJywgUnBWaWV3QWxsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgLmNvbnRhaW5lci5zdGFydCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIuY2VudGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIGlyb24taWNvbiwgLmNvbnRhaW5lcjpob3ZlciBhe1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG5cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBtaW4td2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC52aWV3LWFsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICAke3RoaXMuaHJlZiA/IGh0bWxgXG4gICAgICA8YSBjbGFzcz1cInZpZXctYWxsXCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9hPlxuICAgICAgYCA6IGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwidmlldy1hbGxcIj4ke3RoaXMuX3JlbmRlcklubmVyQ29udGVudCgpfTwvZGl2PlxuICAgICAgYH1cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaG9tZS50cGwuanNcIlxuXG5pbXBvcnQgXCJAdWNkLWxpYi9jb3JrLWFwcC11dGlsc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3ZpZXctYWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZUhvbWUgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW1lOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGZhY2V0c1N0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmYWNldHM6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgYWNhZGVtaWNXb3Jrczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGFjYWRlbWljV29ya3NUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZW9wbGU6IHt0eXBlOiBBcnJheX0sXG4gICAgICBwZW9wbGVUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgc3ViamVjdHNUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIGNvbnRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5mYWNldHMgPSB7fTtcbiAgICB0aGlzLmFjYWRlbWljV29ya3MgPSBbXVxuICAgIHRoaXMuZmFjZXRzU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gMDtcbiAgICB0aGlzLnBlb3BsZVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgIHRoaXMucGVvcGxlVG90YWwgPSAwO1xuICAgIHRoaXMuc3ViamVjdHNUb3RhbCA9IDA7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5jb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLnRoZW1lID0gQVBQX0NPTkZJRy50aGVtZTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuXG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygnZmFjZXRzU3RhdHVzJykpIHtcbiAgICAgIGlmICh0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJykge1xuICAgICAgICB0aGlzLl9nZXRQZW9wbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBhd2FpdCB0aGlzLl9nZXRGYWNldHMoKTtcbiAgfVxuXG4gIF9oYW5kbGVSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgodyk7XG4gIH1cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDcyO1xuICAgIGxldCBzY3JlZW5QYWRkaW5nID0gMzA7XG4gICAgaWYgKCB3IDwgNTc2ICkge1xuICAgICAgcHcgPSB3IC0gc2NyZWVuUGFkZGluZyAtIGF2YXRhcldpZHRoO1xuICAgIH1cbiAgICBlbHNlIGlmICh3IDwgNzY4ICkge1xuICAgICAgcHcgPSAodyAtIHNjcmVlblBhZGRpbmcpICogLjcgLSBhdmF0YXJXaWR0aCAtIDMwO1xuICAgIH1cbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxuICBhc3luYyBfZ2V0UGVvcGxlKCkge1xuICAgIGxldCBwZW9wbGVMaXN0ID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoJ3JhbmRvbVBlb3BsZScsIHtsaW1pdDogNCwgdG90YWw6IHRoaXMucGVvcGxlVG90YWx9KTtcbiAgICB0aGlzLnBlb3BsZVN0YXR1cyA9IHBlb3BsZUxpc3Quc3RhdGU7XG4gICAgaWYgKHBlb3BsZUxpc3Quc3RhdGUgIT0gXCJsb2FkZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZUxpc3QucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGVvcGxlKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRGYWNldHMoKSB7XG4gICAgbGV0IGZhY2V0TGlzdCA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdmYWNldHMnKTtcbiAgICB0aGlzLmZhY2V0c1N0YXR1cyA9IGZhY2V0TGlzdC5zdGF0ZTtcbiAgICBpZiAoZmFjZXRMaXN0LnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRMaXN0LnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1snQHR5cGUnXTtcbiAgICBmb3IgKGxldCBmYWNldCBpbiB0aGlzLmZhY2V0cykge1xuICAgICAgaWYgKGZhY2V0LnN0YXJ0c1dpdGgoJ2JpYm86JykpIHtcblxuICAgICAgICBsZXQgYmlib1R5cGUgPSB0aGlzLl9mb3JtYXRCaWJUeXBlKGZhY2V0KTtcbiAgICAgICAgdGhpcy5hY2FkZW1pY1dvcmtzLnB1c2goe3RleHQ6IGJpYm9UeXBlLCBjb3VudDogdGhpcy5mYWNldHNbZmFjZXRdLCBmYWNldDogZmFjZXR9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZmFjZXQgPT0gKHRoaXMuY29udGV4dCArIFwiOnB1YmxpY2F0aW9uXCIpKSB7XG4gICAgICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gdGhpcy5mYWNldHNbZmFjZXRdO1xuICAgICAgfVxuICAgICAgaWYgKGZhY2V0ID09ICh0aGlzLmNvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICAgICAgdGhpcy5wZW9wbGVUb3RhbCA9IHRoaXMuZmFjZXRzW2ZhY2V0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFjYWRlbWljV29ya3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBsZXQgQSA9IGEudGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGV0IEIgPSBiLnRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChBIDwgQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoQSA+IEIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICB9XG5cbiAgX2Zvcm1hdEJpYlR5cGUoYmliLCBzcGxpdENhbWVsPXRydWUsIG1ha2VQbHVyYWw9dHJ1ZSkge1xuICAgIGJpYiA9IGJpYi5zbGljZSg1LCk7XG5cbiAgICBpZiAoc3BsaXRDYW1lbCkge1xuICAgICAgYmliID0gWy4uLmJpYl07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpYltpXSA9PSBiaWJbaV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgIGJpYltpXSA9IFwiIFwiICsgYmliW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBiaWIgPSBiaWIuam9pbihcIlwiKTtcbiAgICB9XG5cbiAgICBpZiAobWFrZVBsdXJhbCkge1xuICAgICAgYmliICs9IFwic1wiO1xuICAgIH1cbiAgICByZXR1cm4gYmliO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLWhvbWUnLCBScFBhZ2VIb21lKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyB1bnRpbCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICB9XG4gIC5oZXJvIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuICAuaGVybyBpbWcge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIG1heC13aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaGVybyAudGV4dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgfVxuICAuaGVybyAuY29udGVudDoge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgfVxuICAuc2VhcmNoIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDI4cHggMDtcbiAgfVxuICBycC1zZWFyY2gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAuZGF0YSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgfVxuICAuZGF0YSAuY29sLWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kYXRhIC5jb2wtciB7XG4gIH1cbiAgLnBlb3BsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjRweDtcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgIC5wZW9wbGUtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAgLmRhdGEgLmNvbnRhaW5lciB7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgfVxuICAgIC5kYXRhIC5jb2wtbCB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgICAuZGF0YSAuY29sLXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgIH1cbiAgfVxuXG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJoZXJvXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleFwiPlxuICA8aW1nIHNyYz1cIiR7dGhpcy50aGVtZS5ob21lSGVyb0ltYWdlfVwiPlxuICA8ZGl2IGNsYXNzPVwidGV4dCBmbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtZGVmYXVsdCBtdC0wIGgxIGJvbGQgbWItM1wiPiR7dGhpcy50aGVtZS5ob21lSGVyb1RpdGxlfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtZ3Jvdy0xIGNvbnRlbnRcIj5cbiAgICAgIDxkaXY+JHt1bnNhZmVIVE1MKHRoaXMudGhlbWUuaG9tZUhlcm9Db250ZW50VG9wKX08L2Rpdj5cbiAgICAgIDxkaXY+JHt1bnNhZmVIVE1MKHRoaXMudGhlbWUuaG9tZUhlcm9Db250ZW50Qm90dG9tKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2VhcmNoIGJnLXByaW1hcnlcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48cnAtc2VhcmNoPjwvcnAtc2VhcmNoPjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZGF0YSBiZy1saWdodFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxcIj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDxycC1hbGVydCA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiPkVycm9yIGxvYWRpbmcgYWNhZGVtaWMgd29ya3M8L3JwLWFsZXJ0PlxuICAgICAgPHJwLWxpbmstbGlzdC1jb3VudHMgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdlcnJvcicgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua3M9XCIke0pTT04uc3RyaW5naWZ5KHRoaXMuYWNhZGVtaWNXb3Jrcyl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LWFsbC1saW5rPSd7XCJ0ZXh0XCI6IFwiVmlldyBBbGwgV29ya3NcIn0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiJHtKU09OLnN0cmluZ2lmeSh7dGV4dDogXCJBY2FkZW1pYyBXb3Jrc1wiLCBjb3VudDogdGhpcy5hY2FkZW1pY1dvcmtzVG90YWx9KX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0LWNvdW50cz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXIgZmxleC1ncm93LTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwZW9wbGVcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibXQtMFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9sZCBtci0yXCI+JHt0aGlzLnBlb3BsZVRvdGFsfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UGVvcGxlPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVvcGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7dGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdFBlb3BsZSh0aGlzLnBlb3BsZSkubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICAgICAgICBhdmF0YXItc2l6ZT0nc20nXG4gICAgICAgICAgICAgIHRleHQtd2lkdGg9JHt0aGlzLnBlb3BsZVdpZHRofT5cbiAgICAgICAgICAgIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8cnAtdmlldy1hbGwgdGV4dD1cIlZpZXcgQWxsIFBlb3BsZVwiIGhyZWY9XCIvcGVvcGxlXCIganVzdGlmeT1cInN0YXJ0XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDo3MnB4O1wiPjwvcnAtdmlldy1hbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdHNcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9sZCBtci0yXCI+JHt0aGlzLnN1YmplY3RzVG90YWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5SZXNlYXJjaCBTdWJqZWN0czwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3MpID0+IChwYXJ0KSA9PiB7XG4gICAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBfc3RhdGUuc2V0KHBhcnQsIHN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gICAgbGV0IHByZXZpb3VzTGVuZ3RoID0gcHJldmlvdXNWYWx1ZXMubGVuZ3RoO1xuICAgIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAgICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBub3cuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgUHJvbWlzZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQsIHNraXAgaXQuXG4gICAgICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAgICAgLy8gY2hhbmdlZC4gRm9yZ2V0IHdoYXQgd2UgcmVuZGVyZWQgYmVmb3JlLlxuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IF9pbmZpbml0eTtcbiAgICAgICAgcHJldmlvdXNMZW5ndGggPSAwO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oKHJlc29sdmVkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgLy8gSWYgc3RhdGUudmFsdWVzIGRvZXNuJ3QgY29udGFpbiB0aGUgdmFsdWUsIHdlJ3ZlIHJlLXJlbmRlcmVkIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSwgc28gZG9uJ3QgcmVuZGVyIGl0LiBUaGVuLCBvbmx5IHJlbmRlciBpZiB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW50aWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==