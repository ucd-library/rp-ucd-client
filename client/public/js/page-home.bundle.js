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
    this.reset_properties();
    this.facets = {};
    this.academicWorksTotal = 0;
    this.peopleTotal = 0;
    this.subjectsTotal = 0;
    this.setPeopleWidth(window.innerWidth);
    this.context = APP_CONFIG.data.jsonldContext;

    this.theme = APP_CONFIG.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));

    this._handleResize = this._handleResize.bind(this);
  }

  reset_properties(){
    this.people = [];
    this.academicWorks = [];
    this.visible = false;
    this.facetsStatus = 'loading';
    this.peopleStatus = 'loading';

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

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this.reset_properties();
    await Promise.all([this._getFacets()]);
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  _onSearch(e){
    let url = "/search";
    if (e.target.nodeName == 'RP-SEARCH') {
      if (e.target.searchObject.facet.id == 'all') {
        url = `/search?s=${encodeURIComponent(e.target.inputValue)}`
      }
      else {
        url = `/search/${e.target.searchObject.facet.id}?s=${encodeURIComponent(e.target.inputValue)}`
      }
    }
    //console.log(url);
    this.AppStateModel.setLocation(url);
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
      for (let recognizedFacet of this.CollectionModel.subFacets.works) {
        if (facet == recognizedFacet.es) {
          this.academicWorks.push({text: recognizedFacet.text, count: this.facets[facet], href: `/works/${recognizedFacet.id}`});
          break;
        }
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
  .hero .content {
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
  <div class="container flex justify-content-center">
    <rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}" include-all-option></rp-search>
  </div>
</div>
<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <div ?hidden="${this.facetsStatus == 'error' || this.facetsStatus == 'loaded' }" class="loading1">loading</div>
      <rp-alert ?hidden="${this.facetsStatus == 'loading' || this.facetsStatus == 'loaded' }">Error loading academic works</rp-alert>
      <rp-link-list-counts ?hidden="${this.facetsStatus == 'loading' || this.facetsStatus == 'error' }"
                            .links="${this.academicWorks}"
                            .viewAllLink='${{text: "View All Works", href: '/works'}}'
                            .header="${{text: "Academic Works", count: this.academicWorksTotal}}">
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
        <!-- 
        <h2>
          <span class="bold mr-2">${this.subjectsTotal}</span>
          <span class="weight-regular">Research Subjects</span>
        </h2>
        -->
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXcudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3ZpZXctYWxsLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1g7O0FBRTdCLHNCQUFzQixzREFBVTtBQUN2QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxREFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7QUFDQTs7QUFFMUM7QUFDZixTQUFTLGdEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEVBQVEsMkJBQTJCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDVjs7QUFFOUIsdUJBQXVCLHNEQUFVO0FBQ3hDO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzREFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDc0I7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUE4QztBQUM1RDtBQUNPLGNBQWMsOERBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRCxpQyIsImZpbGUiOiJwYWdlLWhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hbGVydC50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBbGVydCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGhlbWVDb2xvcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGhlbWUtY29sb3InfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhlbWVDb2xvciA9ICdkYW5nZXInO1xuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzW3RoaXMudGhlbWVDb2xvcl0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFsZXJ0JywgUnBBbGVydCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5jb250YWluZXIgaXJvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYXZhdGFyLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEF2YXRhciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgaWYgKHRoaXMuc2l6ZSAmJiB0aGlzLnNpemUgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsYXNzZXNbJ3NpemUtJyArIHRoaXMuc2l6ZV0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsYXNzZXNbJ3Bob3RvJ10gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICByZW5kZXJGYWNlKCkge1xuICAgIGlmICghdGhpcy5zcmMgfHwgdGhpcy5zcmMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBodG1sYDxpcm9uLWljb24gaWNvbj0nZmFjZSc+PC9pcm9uLWljb24+YDtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hdmF0YXInLCBScEF2YXRhcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgaXJvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5jaXJjbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuY2lyY2xlLnNpemUtbGcge1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgLmNpcmNsZS5zaXplLXNtIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgICAucGhvdG8ge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY2lyY2xlICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAke3RoaXMucmVuZGVyRmFjZSgpfVxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9iYWRnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZToge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgY29sb3JTZXF1ZW5jZToge3R5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiAnY29sb3Itc2VxdWVuY2UnfSxcbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tYXhDb2xvciA9IDY7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgIGNsYXNzZXNbJ3NpemUtJyArIHRoaXMuc2l6ZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbG9yU2VxdWVuY2UpIHtcbiAgICAgIGxldCBuID0gTWF0aC5mbG9vcih0aGlzLmNvbG9yU2VxdWVuY2UpO1xuICAgICAgY2xhc3Nlc1snY29sb3ItJyArIG4udG9TdHJpbmcoKV0gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzaWJsaW5ncyA9IFsuLi50aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc10uZmlsdGVyKG4gPT4gbi50YWdOYW1lID09PSB0aGlzLnRhZ05hbWUpO1xuICAgICAgaWYgKHNpYmxpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG4gPSBzaWJsaW5ncy5pbmRleE9mKHRoaXMpICUgdGhpcy5tYXhDb2xvcjtcbiAgICAgICAgY2xhc3Nlc1snY29sb3ItJyArIG4udG9TdHJpbmcoKV0gPSB0cnVlO1xuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xhc3Nlc1snY29sb3ItMCddID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBfcmVuZGVyQmFkZ2UoKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj0ke3RoaXMuaHJlZn0+JHt0aGlzLl9yZW5kZXJTcGFuKCl9PC9hPmA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGh0bWxgJHt0aGlzLl9yZW5kZXJTcGFuKCl9YDtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyU3BhbigpIHtcbiAgICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz0ke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX0+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9zcGFuPmA7XG4gIH1cblxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1iYWRnZScsIFJwQmFkZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBwYWRkaW5nOiAuM2VtIC43ZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICBzcGFuLnNpemUtbGcge1xuICAgIHBhZGRpbmc6IC41NWVtIC45ZW07XG4gIH1cbiAgYTpob3ZlciBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gICAgICBjb2xvcjogIHZhcigtLXRjb2xvci1ob3Zlci10ZXh0KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgfVxuICBzcGFuLmNvbG9yLTAge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDApO1xuICB9XG4gIHNwYW4uY29sb3ItMSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50MSk7XG4gIH1cbiAgc3Bhbi5jb2xvci0yIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQyKTtcbiAgfVxuICBzcGFuLmNvbG9yLTMge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDMpO1xuICB9XG4gIHNwYW4uY29sb3ItNCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50NCk7XG4gIH1cbiAgc3Bhbi5jb2xvci01IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQ1KTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYTpsaW5rIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gIGE6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG5cbjwvc3R5bGU+XG4gICR7dGhpcy5fcmVuZGVyQmFkZ2UoKX1cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QtY291bnRzLnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IFwiLi92aWV3LWFsbFwiO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdENvdW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgdmlld0FsbExpbms6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ3ZpZXctYWxsLWxpbmsnfSxcbiAgICBoZWFkZXI6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ2hlYWRlcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saW5rcyA9IFtdO1xuXG4gICAgdGhpcy5fbGlua0NsaWNrID0gbmV3IEN1c3RvbUV2ZW50KCdsaW5rLWNsaWNrJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIGNsaWNrZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbmRlckhlYWRlcigpe1xuICAgIGlmICghdGhpcy5oZWFkZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXIudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke3RoaXMuaGVhZGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPjxzcGFuPiR7dGhpcy5oZWFkZXIudGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBpZiAoIWxpbmsudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgaWYgKGxpbmsuaHJlZikge1xuICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHtsaW5rLmNvdW50fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGxpbmstaW5kZXg9XCIke2luZGV4fVwiIGNsYXNzPVwibGlua1wiIGhyZWY9XCIke2xpbmsuaHJlZn1cIj4ke2xpbmsudGV4dH08L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudFwiPiR7bGluay5jb3VudH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBAY2xpY2s9XCIke3RoaXMuaGFuZGxlQ2xpY2t9XCIgbGluay1pbmRleD1cIiR7aW5kZXh9XCIgY2xhc3M9XCJsaW5rXCI+JHtsaW5rLnRleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICAgIH1cblxuICB9XG5cbiAgX3JlbmRlclZpZXdBbGwoKXtcbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmspIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy52aWV3QWxsTGluay50ZXh0KSB7XG4gICAgICB0aGlzLnZpZXdBbGxMaW5rLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZXdBbGxMaW5rLmhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgdmlldy1hbGxcIj48ZGl2IGNsYXNzPVwiY291bnRcIj48L2Rpdj48cnAtdmlldy1hbGwgaHJlZj1cIiR7dGhpcy52aWV3QWxsTGluay5ocmVmfVwiIHRleHQ9XCIke3RoaXMudmlld0FsbExpbmsudGV4dH1cIj48L3JwLXZpZXctYWxsPjwvZGl2PmBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwicm93IHZpZXctYWxsXCI+PGRpdiBjbGFzcz1cImNvdW50XCI+PC9kaXY+PHJwLXZpZXctYWxsIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiB0ZXh0PVwiJHt0aGlzLnZpZXdBbGxMaW5rLnRleHR9XCI+PC9ycC12aWV3LWFsbD48L2Rpdj5gXG4gICAgfVxuICAgIFxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGlmICggZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5rJykgKSB7XG4gICAgICB0aGlzLkNsaWNrZWRsaW5rID0gdGhpcy5saW5rc1twYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2xpbmstaW5kZXgnKSldXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMudmlld0FsbExpbms7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9saW5rQ2xpY2spO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1saW5rLWxpc3QtY291bnRzJywgUnBMaW5rTGlzdENvdW50cyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgfVxuICAgIC5yb3cuaGVhZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xuICAgIH1cbiAgICAucm93LnZpZXctYWxsIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuY291bnQge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMTBweCk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAubGluay1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLmxpbmsge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgfVxuICAgIGxpbmsuZGlzYWJlbGQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgICAubGluay5zZWxlY3RlZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICR7dGhpcy5fcmVuZGVySGVhZGVyKCl9XG4gICAgJHt0aGlzLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHRoaXMuX3JlbmRlckxpbmsobGluaywgaW5kZXgpKX1cbiAgICAke3RoaXMuX3JlbmRlclZpZXdBbGwoKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3BlcnNvbi1wcmV2aWV3LnRwbC5qcyc7XG5cbmltcG9ydCBcIi4vYmFkZ2VcIjtcblxuZXhwb3J0IGNsYXNzIFJwUGVyc29uUHJldmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZToge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAgdGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGJhZGdlczoge3R5cGU6IEFycmF5fSxcbiAgICBhdmF0YXJTaXplOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdhdmF0YXItc2l6ZSd9LFxuICAgIGF2YXRhclNyYzoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnYXZhdGFyLXNyYyd9LFxuICAgIHRleHRXaWR0aDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGV4dC13aWR0aCd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmJhZGdlcyA9IFtdO1xuICAgIHRoaXMudGV4dFdpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKCkgLSA3MCkgKyBcInB4XCI7XG4gIH1cblxuICBfcmVuZGVyQmFkZ2UoYmFkZ2UpIHtcbiAgICBpZiAodHlwZW9mIGJhZGdlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGh0bWxgPHJwLWJhZGdlPiR7YmFkZ2V9PC9ycC1iYWRnZT5gO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYmFkZ2UgPT09ICdvYmplY3QnKXtcbiAgICAgIGxldCB0ID0gYmFkZ2UudGV4dDtcbiAgICAgIGlmICghdCkge1xuICAgICAgICByZXR1cm4gaHRtbGBgO1xuICAgICAgfVxuICAgICAgbGV0IGhyZWYgPSBiYWRnZS5ocmVmO1xuICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPHJwLWJhZGdlIGhyZWY9XCIke2hyZWZ9XCI+JHt0fTwvcnAtYmFkZ2U+YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBodG1sYDxycC1iYWRnZT4ke3R9PC9ycC1iYWRnZT5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGVyc29uLXByZXZpZXcnLCBScFBlcnNvblByZXZpZXcpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuaW1wb3J0IFwiLi9hdmF0YXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gICAgLm5hbWUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgY29sb3IgOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0IDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5uYW1lOmhvdmVyIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5uYW1lW2Rpc2FibGVkXSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLm5hbWVbZGlzYWJsZWRdOmhvdmVyIHtcbiAgICAgIGNvbG9yIDogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZSA6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cbiAgICBzbWFsbC5iYWRnZXMge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1jb250YWluZXI+XG4gICAgPHJwLWF2YXRhciBzaXplPVwiJHt0aGlzLmF2YXRhclNpemV9XCIgc3JjPVwiJHt0aGlzLmF2YXRhclNyY31cIj48L3JwLWF2YXRhcj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIiBzdHlsZT1cIiR7c3R5bGVNYXAoe1wibWF4LXdpZHRoXCIgOiB0aGlzLnRleHRXaWR0aH0pfVwiPlxuICAgICAgPGEgY2xhc3M9XCJuYW1lXCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiID9kaXNhYmxlZD1cIiR7IXRoaXMuaHJlZn1cIj4ke3RoaXMubmFtZX08L2E+XG4gICAgICA8c21hbGw+JHt0aGlzLnRpdGxlfTwvc21hbGw+XG4gICAgICA8c21hbGwgY2xhc3M9XCJiYWRnZXNcIj4ke3RoaXMuYmFkZ2VzLm1hcChiID0+IHRoaXMuX3JlbmRlckJhZGdlKGIpKX08L3NtYWxsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9zZWFyY2gudHBsLmpzJztcbmltcG9ydCAnLi9kcm9wZG93bic7XG5pbXBvcnQgXCIuL2ljb25cIjtcblxuZXhwb3J0IGNsYXNzIFJwU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBmYWNldHM6IHt0eXBlOiBBcnJheX0sXG4gICAgaW5jbHVkZUFsbE9wdGlvbjoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2luY2x1ZGUtYWxsLW9wdGlvbid9LFxuICAgIGFsbE9wdGlvbjoge3R5cGU6IE9iamVjdH0sXG4gICAgaW5wdXRWYWx1ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImlucHV0LXZhbHVlXCIsIHJlZmxlY3Q6IHRydWV9LFxuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhY3RpdmVGYWNldDoge3R5cGU6IE51bWJlciwgYXR0cmlidXRlOiAnYWN0aXZlLWZhY2V0JywgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZhY2V0cyA9IFt7XCJ0ZXh0XCI6IFwiUEVPUExFXCJ9LCB7XCJ0ZXh0XCI6IFwiT1JHQU5JWkFUSU9OU1wifSwge1widGV4dFwiOiBcIldPUktTXCJ9XTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggdGhlIHJlZ2lzdHJ5XCI7XG4gICAgdGhpcy5hY3RpdmVGYWNldCA9IDA7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcbiAgICB0aGlzLmluY2x1ZGVBbGxPcHRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmFsbE9wdGlvbiA9IHt0ZXh0OiAnQUxMJywgaWQ6ICdhbGwnfVxuXG5cbiAgICB0aGlzLl9uZXdTZWFyY2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ25ldy1zZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHNlYXJjaCBoYXMgYmVlbiB0cmlnZ2VyZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdpbnB1dFZhbHVlJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdhY3RpdmVGYWNldCcpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9iamVjdCA9IHtzZWFyY2g6IHRoaXMuaW5wdXRWYWx1ZSwgZmFjZXQ6IHRoaXMuZ2V0RHJvcGRvd25PcHRpb25zKClbdGhpcy5hY3RpdmVGYWNldF19O1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGdldERyb3Bkb3duT3B0aW9ucygpe1xuICAgIGlmICh0aGlzLmluY2x1ZGVBbGxPcHRpb24pIHJldHVybiBbdGhpcy5hbGxPcHRpb24sIC4uLnRoaXMuZmFjZXRzXTtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBkb1NlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VhcmNoKTtcbiAgfVxuXG4gIF9oYW5kbGVLZXl1cChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1zZWFyY2gnLCBScFNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNpbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAjaWNvbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8cnAtZHJvcGRvd24gLmNob2ljZXM9XCIke3RoaXMuZ2V0RHJvcGRvd25PcHRpb25zKCl9XCJcbiAgICAgICAgICAgICAgICAgdG8tdXBwZXItY2FzZVxuICAgICAgICAgICAgICAgICBjaG9zZW49XCIke3RoaXMuYWN0aXZlRmFjZXR9XCJcbiAgICAgICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gdGhpcy5hY3RpdmVGYWNldCA9IGUudGFyZ2V0LmNob3Nlbn1cIj5cbiAgICA8L3JwLWRyb3Bkb3duPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIlxuICAgICAgICAgICBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cIlxuICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX2hhbmRsZUtleXVwfVwiXG4gICAgICAgICAgIGlkPVwiaW5wdXRcIj5cbiAgICA8ZGl2IGlkPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxycC1pY29uIEBjbGljaz1cIiR7dGhpcy5kb1NlYXJjaH1cIiBpY29uPVwicnAtc2VhcmNoXCIgP2lzLWxpbms9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIj48cnAtaWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vdmlldy1hbGwudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwVmlld0FsbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgaHJlZjoge3R5cGU6IFN0cmluZ30sXG4gICAganVzdGlmeToge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgdGhpcy5ocmVmID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBpZiAodGhpcy5qdXN0aWZ5KSB7XG4gICAgICBjbGFzc2VzW3RoaXMuanVzdGlmeV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIF9yZW5kZXJJbm5lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9zcGFuPjxpcm9uLWljb24gaWNvbj1cImF2OnBsYXktYXJyb3dcIj48L2lyb24taWNvbj5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdmlldy1hbGwnLCBScFZpZXdBbGwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cbiAgICAuY29udGFpbmVyLnN0YXJ0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5jZW50ZXIge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLWhvdmVyLXRleHQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb250YWluZXI6aG92ZXIgaXJvbi1pY29uLCAuY29udGFpbmVyOmhvdmVyIGF7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgIH1cblxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1pbi13aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgLnZpZXctYWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgICR7dGhpcy5ocmVmID8gaHRtbGBcbiAgICAgIDxhIGNsYXNzPVwidmlldy1hbGxcIiBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+JHt0aGlzLl9yZW5kZXJJbm5lckNvbnRlbnQoKX08L2E+XG4gICAgICBgIDogaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ2aWV3LWFsbFwiPiR7dGhpcy5fcmVuZGVySW5uZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICBgfVxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1ob21lLnRwbC5qc1wiXG5cbmltcG9ydCBcIkB1Y2QtbGliL2NvcmstYXBwLXV0aWxzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50c1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9zZWFyY2hcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvdmlldy1hbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlSG9tZSBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGhlbWU6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgZmFjZXRzU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGZhY2V0czoge3R5cGU6IE9iamVjdH0sXG4gICAgICBhY2FkZW1pY1dvcmtzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgYWNhZGVtaWNXb3Jrc1RvdGFsOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGVvcGxlU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZToge3R5cGU6IEFycmF5fSxcbiAgICAgIHBlb3BsZVRvdGFsOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGVvcGxlV2lkdGg6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBzdWJqZWN0c1RvdGFsOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgY29udGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLnJlc2V0X3Byb3BlcnRpZXMoKTtcbiAgICB0aGlzLmZhY2V0cyA9IHt9O1xuICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gMDtcbiAgICB0aGlzLnBlb3BsZVRvdGFsID0gMDtcbiAgICB0aGlzLnN1YmplY3RzVG90YWwgPSAwO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHRoaXMuY29udGV4dCA9IEFQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0O1xuXG4gICAgdGhpcy50aGVtZSA9IEFQUF9DT05GSUcudGhlbWU7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcblxuICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSA9IHRoaXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVzZXRfcHJvcGVydGllcygpe1xuICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgdGhpcy5hY2FkZW1pY1dvcmtzID0gW107XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5mYWNldHNTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5wZW9wbGVTdGF0dXMgPSAnbG9hZGluZyc7XG5cbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzKCdmYWNldHNTdGF0dXMnKSkge1xuICAgICAgaWYgKHRoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkZWQnKSB7XG4gICAgICAgIHRoaXMuX2dldFBlb3BsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMuaGFzKCd2aXNpYmxlJykgJiYgdGhpcy52aXNpYmxlICkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl9oYW5kbGVSZXNpemUoKSk7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpe1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNldF9wcm9wZXJ0aWVzKCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEZhY2V0cygpXSk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICB9XG5cbiAgX29uU2VhcmNoKGUpe1xuICAgIGxldCB1cmwgPSBcIi9zZWFyY2hcIjtcbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT0gJ1JQLVNFQVJDSCcpIHtcbiAgICAgIGlmIChlLnRhcmdldC5zZWFyY2hPYmplY3QuZmFjZXQuaWQgPT0gJ2FsbCcpIHtcbiAgICAgICAgdXJsID0gYC9zZWFyY2g/cz0ke2VuY29kZVVSSUNvbXBvbmVudChlLnRhcmdldC5pbnB1dFZhbHVlKX1gXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXJsID0gYC9zZWFyY2gvJHtlLnRhcmdldC5zZWFyY2hPYmplY3QuZmFjZXQuaWR9P3M9JHtlbmNvZGVVUklDb21wb25lbnQoZS50YXJnZXQuaW5wdXRWYWx1ZSl9YFxuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHVybCk7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHVybCk7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA3MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIGlmICggdyA8IDU3NiApIHtcbiAgICAgIHB3ID0gdyAtIHNjcmVlblBhZGRpbmcgLSBhdmF0YXJXaWR0aDtcbiAgICB9XG4gICAgZWxzZSBpZiAodyA8IDc2OCApIHtcbiAgICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSAzMDtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IE1hdGguZmxvb3IocHcpO1xuICB9XG5cbiAgYXN5bmMgX2dldFBlb3BsZSgpIHtcbiAgICBsZXQgcGVvcGxlTGlzdCA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdyYW5kb21QZW9wbGUnLCB7bGltaXQ6IDQsIHRvdGFsOiB0aGlzLnBlb3BsZVRvdGFsfSk7XG4gICAgdGhpcy5wZW9wbGVTdGF0dXMgPSBwZW9wbGVMaXN0LnN0YXRlO1xuICAgIGlmIChwZW9wbGVMaXN0LnN0YXRlICE9IFwibG9hZGVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGUgPSBwZW9wbGVMaXN0LnBheWxvYWQucmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlb3BsZSk7XG4gIH1cblxuICBhc3luYyBfZ2V0RmFjZXRzKCkge1xuICAgIGxldCBmYWNldExpc3QgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnZmFjZXRzJyk7XG4gICAgdGhpcy5mYWNldHNTdGF0dXMgPSBmYWNldExpc3Quc3RhdGU7XG4gICAgaWYgKGZhY2V0TGlzdC5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0TGlzdC5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbJ0B0eXBlJ107XG4gICAgZm9yIChsZXQgZmFjZXQgaW4gdGhpcy5mYWNldHMpIHtcbiAgICAgIGZvciAobGV0IHJlY29nbml6ZWRGYWNldCBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zdWJGYWNldHMud29ya3MpIHtcbiAgICAgICAgaWYgKGZhY2V0ID09IHJlY29nbml6ZWRGYWNldC5lcykge1xuICAgICAgICAgIHRoaXMuYWNhZGVtaWNXb3Jrcy5wdXNoKHt0ZXh0OiByZWNvZ25pemVkRmFjZXQudGV4dCwgY291bnQ6IHRoaXMuZmFjZXRzW2ZhY2V0XSwgaHJlZjogYC93b3Jrcy8ke3JlY29nbml6ZWRGYWNldC5pZH1gfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmYWNldCA9PSAodGhpcy5jb250ZXh0ICsgXCI6cHVibGljYXRpb25cIikpIHtcbiAgICAgICAgdGhpcy5hY2FkZW1pY1dvcmtzVG90YWwgPSB0aGlzLmZhY2V0c1tmYWNldF07XG4gICAgICB9XG4gICAgICBpZiAoZmFjZXQgPT0gKHRoaXMuY29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgICAgICB0aGlzLnBlb3BsZVRvdGFsID0gdGhpcy5mYWNldHNbZmFjZXRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWNhZGVtaWNXb3Jrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGxldCBBID0gYS50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZXQgQiA9IGIudGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKEEgPCBCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChBID4gQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtaG9tZScsIFJwUGFnZUhvbWUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IHVudGlsIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnRpbC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gIH1cbiAgLmhlcm8gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIC5oZXJvIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5oZXJvIC50ZXh0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG4gIC5oZXJvIC5jb250ZW50IHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIH1cbiAgLnNlYXJjaCAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyOHB4IDA7XG4gIH1cbiAgcnAtc2VhcmNoIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgLmRhdGEgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLmRhdGEgLmNvbC1sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGF0YSAuY29sLXIge1xuICB9XG4gIC5wZW9wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLWNvbHVtbi1nYXA6IDI0cHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAucGVvcGxlLWNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgIC5kYXRhIC5jb250YWluZXIge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAuZGF0YSAuY29sLWwge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLmRhdGEgLmNvbC1yIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICB9XG4gIH1cblxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiaGVyb1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXhcIj5cbiAgPGltZyBzcmM9XCIke3RoaXMudGhlbWUuaG9tZUhlcm9JbWFnZX1cIj5cbiAgPGRpdiBjbGFzcz1cInRleHQgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWRlZmF1bHQgbXQtMCBoMSBib2xkIG1iLTNcIj4ke3RoaXMudGhlbWUuaG9tZUhlcm9UaXRsZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWdyb3ctMSBjb250ZW50XCI+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudFRvcCl9PC9kaXY+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudEJvdHRvbSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNlYXJjaCBiZy1wcmltYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPHJwLXNlYXJjaCAuZmFjZXRzPVwiJHt0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzfVwiIEBuZXctc2VhcmNoPVwiJHt0aGlzLl9vblNlYXJjaH1cIiBpbmNsdWRlLWFsbC1vcHRpb24+PC9ycC1zZWFyY2g+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZGF0YSBiZy1saWdodFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxcIj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDxycC1hbGVydCA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiPkVycm9yIGxvYWRpbmcgYWNhZGVtaWMgd29ya3M8L3JwLWFsZXJ0PlxuICAgICAgPHJwLWxpbmstbGlzdC1jb3VudHMgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdlcnJvcicgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpbmtzPVwiJHt0aGlzLmFjYWRlbWljV29ya3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlld0FsbExpbms9JyR7e3RleHQ6IFwiVmlldyBBbGwgV29ya3NcIiwgaHJlZjogJy93b3Jrcyd9fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyPVwiJHt7dGV4dDogXCJBY2FkZW1pYyBXb3Jrc1wiLCBjb3VudDogdGhpcy5hY2FkZW1pY1dvcmtzVG90YWx9fVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3QtY291bnRzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtciBmbGV4LWdyb3ctMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBlb3BsZVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtdC0wXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkIG1yLTJcIj4ke3RoaXMucGVvcGxlVG90YWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5QZW9wbGU8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZW9wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgJHt0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVvcGxlKHRoaXMucGVvcGxlKS5tYXAocGVyc29uID0+IGh0bWxgXG4gICAgICAgICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgICAgICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICAgICAgICAgICAgdGV4dC13aWR0aD0ke3RoaXMucGVvcGxlV2lkdGh9PlxuICAgICAgICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxycC12aWV3LWFsbCB0ZXh0PVwiVmlldyBBbGwgUGVvcGxlXCIgaHJlZj1cIi9wZW9wbGVcIiBqdXN0aWZ5PVwic3RhcnRcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjcycHg7XCI+PC9ycC12aWV3LWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0c1wiPlxuICAgICAgICA8IS0tIFxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkIG1yLTJcIj4ke3RoaXMuc3ViamVjdHNUb3RhbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPlJlc2VhcmNoIFN1YmplY3RzPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3MpID0+IChwYXJ0KSA9PiB7XG4gICAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBfc3RhdGUuc2V0KHBhcnQsIHN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gICAgbGV0IHByZXZpb3VzTGVuZ3RoID0gcHJldmlvdXNWYWx1ZXMubGVuZ3RoO1xuICAgIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAgICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBub3cuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgUHJvbWlzZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQsIHNraXAgaXQuXG4gICAgICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAgICAgLy8gY2hhbmdlZC4gRm9yZ2V0IHdoYXQgd2UgcmVuZGVyZWQgYmVmb3JlLlxuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IF9pbmZpbml0eTtcbiAgICAgICAgcHJldmlvdXNMZW5ndGggPSAwO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oKHJlc29sdmVkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgLy8gSWYgc3RhdGUudmFsdWVzIGRvZXNuJ3QgY29udGFpbiB0aGUgdmFsdWUsIHdlJ3ZlIHJlLXJlbmRlcmVkIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSwgc28gZG9uJ3QgcmVuZGVyIGl0LiBUaGVuLCBvbmx5IHJlbmRlciBpZiB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW50aWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==