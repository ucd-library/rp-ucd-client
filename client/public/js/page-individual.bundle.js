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
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");












class RpPageIndividual extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      individual: {type: Object},
      individualId: {type: String},
      individualStatus: {type: String},
      publicationState: {type: String},
      retrievedPublications: {type: Array},
      totalPublications: {type: parseInt}

    }
  }

  constructor() {
    super();
    this.render = _rp_page_individual_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.individual = {};
    this.individualStatus = 'loading';
    this.publicationStatus = 'loading';
    this.retrievedPublications = [];
    this.totalPublications = 0;

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(e) {
    let path = await this.AppStateModel.get();
    path = path.location.path;
    if (path.length >= 2) {
      this.individualId = path[1];
    }
    if (this.individualId) {
      await Promise.all([this._doMainQuery(this.individualId),
                         this._doPubQuery(this.individualId)]);
    }

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

  async _doPubQuery(id, getMore=false){
    let data = await this.PersonModel.getPublications(id);
    this.publicationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.retrievedPublications = data.payload.results;
    this.totalPublications = data.payload.total;
    console.log(this.retrievedPublications);
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
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                links='[{"text": "All Info"},
                        {"text": "About"},
                        {"text": "Publications"},
                        {"text": "Research"},
                        {"text": "Contact"}]'>
  </rp-link-list>

  <section id="about" class="bg-light mt-3">
    <h1 class="weight-regular">About</h1>
    <h2>Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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

  <section id="publications" class="bg-light mt-3">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="pub-count">${this.totalPublications}</div>
    </div>
    <h2>Selected Publications</h2>
  </section>
  <section id="research" class="bg-light mt-3">
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3">
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2F2YXRhci50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYmFkZ2UudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2hlcm8taW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2luZGl2aWR1YWwvcnAtcGFnZS1pbmRpdmlkdWFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9pbmRpdmlkdWFsL3JwLXBhZ2UtaW5kaXZpZHVhbC50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1g7O0FBRTdCLHNCQUFzQixzREFBVTtBQUN2QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxREFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUMseUJBQXlCLGdCQUFnQjtBQUN6Qyx5QkFBeUIsdUJBQXVCO0FBQ2hELHlCQUF5QixtQkFBbUI7QUFDNUMseUJBQXlCLGtCQUFrQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0NBQXdDLGdEQUFJLFFBQVEsTUFBTTtBQUN0RTtBQUNBLDRDQUE0QyxxQ0FBcUMsZ0RBQUksaUJBQWlCLGlCQUFpQixJQUFJLEtBQUssYUFBYTtBQUM3STtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUErQixnREFBSSxpQkFBaUIsVUFBVSxJQUFJLFVBQVU7QUFDdEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicGFnZS1pbmRpdmlkdWFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYWxlcnQudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWxlcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRoZW1lQ29sb3I6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RoZW1lLWNvbG9yJ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoZW1lQ29sb3IgPSAnZGFuZ2VyJztcbiAgfVxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1t0aGlzLnRoZW1lQ29sb3JdID0gdHJ1ZTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1hbGVydCcsIFJwQWxlcnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgIC5jb250YWluZXIuZGFuZ2VyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIGlyb24taWNvbiB7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgIDxpcm9uLWljb24gaWNvbj1cIndhcm5pbmdcIj48L2lyb24taWNvbj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2F2YXRhci50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBdmF0YXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIHNyYzoge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNpemUgJiYgdGhpcy5zaXplICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGFzc2VzWydwaG90byddID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgcmVuZGVyRmFjZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjIHx8IHRoaXMuc3JjID09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gaHRtbGA8aXJvbi1pY29uIGljb249J2ZhY2UnPjwvaXJvbi1pY29uPmA7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYXZhdGFyJywgUnBBdmF0YXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAuY2lyY2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNpcmNsZS5zaXplLWxnIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5jaXJjbGUuc2l6ZS1zbSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gICAgLnBob3RvIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNpcmNsZSAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgJHt0aGlzLnJlbmRlckZhY2UoKX1cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vYmFkZ2UudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGhyZWY6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGNvbG9yU2VxdWVuY2U6IHt0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogJ2NvbG9yLXNlcXVlbmNlJ30sXG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWF4Q29sb3IgPSA2O1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICBjbGFzc2VzWydzaXplLScgKyB0aGlzLnNpemVdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xvclNlcXVlbmNlKSB7XG4gICAgICBsZXQgbiA9IE1hdGguZmxvb3IodGhpcy5jb2xvclNlcXVlbmNlKTtcbiAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgc2libGluZ3MgPSBbLi4udGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNdLmZpbHRlcihuID0+IG4udGFnTmFtZSA9PT0gdGhpcy50YWdOYW1lKTtcbiAgICAgIGlmIChzaWJsaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBuID0gc2libGluZ3MuaW5kZXhPZih0aGlzKSAlIHRoaXMubWF4Q29sb3I7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLScgKyBuLnRvU3RyaW5nKCldID0gdHJ1ZTtcblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNsYXNzZXNbJ2NvbG9yLTAnXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICB9XG5cbiAgX3JlbmRlckJhZGdlKCkge1xuICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgIHJldHVybiBodG1sYDxhIGhyZWY9JHt0aGlzLmhyZWZ9PiR7dGhpcy5fcmVuZGVyU3BhbigpfTwvYT5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sYCR7dGhpcy5fcmVuZGVyU3BhbigpfWA7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlclNwYW4oKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNwYW4gY2xhc3M9JHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5gO1xuICB9XG5cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYmFkZ2UnLCBScEJhZGdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgcGFkZGluZzogLjNlbSAuN2VtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDApO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cbiAgc3Bhbi5zaXplLWxnIHtcbiAgICBwYWRkaW5nOiAuNTVlbSAuOWVtO1xuICB9XG4gIGE6aG92ZXIgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICAgICAgY29sb3I6ICB2YXIoLS10Y29sb3ItaG92ZXItdGV4dCk7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1ob3Zlci1iZyk7XG4gIH1cbiAgc3Bhbi5jb2xvci0wIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQwKTtcbiAgfVxuICBzcGFuLmNvbG9yLTEge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDEpO1xuICB9XG4gIHNwYW4uY29sb3ItMiB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50Mik7XG4gIH1cbiAgc3Bhbi5jb2xvci0zIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1hY2NlbnQzKTtcbiAgfVxuICBzcGFuLmNvbG9yLTQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWFjY2VudDQpO1xuICB9XG4gIHNwYW4uY29sb3ItNSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItYWNjZW50NSk7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGE6bGluayB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOnZpc2l0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuICBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgfVxuXG48L3N0eWxlPlxuICAke3RoaXMuX3JlbmRlckJhZGdlKCl9XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaGVyby1pbWFnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBIZXJvSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgYXNzZXRGb2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJhc3NldC1mb2xkZXJcIn0sXG4gICAgYXNzZXRNYXg6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LW1heFwifSxcbiAgICBhc3NldFBpY2s6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LXBpY2tcIiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzc2V0Rm9sZGVyID0gXCIvaW1hZ2VzL3Byb2ZpbGUtZmVhdHVyZXMvXCJcbiAgICB0aGlzLmFzc2V0TWF4ID0gMjk7XG4gICAgdGhpcy5zaHVmZmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPCAwKSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA+IHRoaXMuYXNzZXRNYXgpIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSB0aGlzLmFzc2V0TWF4O1xuICAgICAgfVxuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuYXNzZXRGb2xkZXIgKyB0aGlzLmFzc2V0UGljayArIFwiLmpwZ1wifSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjKSB7XG4gICAgICB0aGlzLmFzc2V0UGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICB0aGlzLmFzc2V0TWF4ICsgMSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtaGVyby1pbWFnZScsIFJwSGVyb0ltYWdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnNsb3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICN0b3Age1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2JvdHRvbSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwidG9wXCI+PHNsb3QgbmFtZT1cInRvcFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJtYWluXCI+PHNsb3QgbmFtZT1cIm1haW5cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwiYm90dG9tXCI+PHNsb3QgbmFtZT1cImJvdHRvbVwiPjwvc2xvdD48L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbGluay1saXN0LnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGNsYXNzIFJwTGlua0xpc3QgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGxpbmtzOiB7dHlwZTogQXJyYXl9LFxuICAgIGN1cnJlbnRMaW5rOiAge2NvbnZlcnRlcjogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ2N1cnJlbnQtbGluaycsIHJlZmxlY3Q6IHRydWV9LFxuICAgIGRpcmVjdGlvbjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAnZGlyZWN0aW9uJ30sXG4gICAgaGFzSGVhZGVyTGluazoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogJ2hhcy1oZWFkZXItbGluayd9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAndic7XG4gICAgdGhpcy5jdXJyZW50TGluayA9IDA7XG4gICAgdGhpcy5fY29udGFpbmVyQ2xhc3NlcyA9IHtjb250YWluZXI6IHRydWV9O1xuICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXNbdGhpcy5kaXJlY3Rpb25dID0gdHJ1ZTtcblxuICAgIHRoaXMuX2NoYW5nZWRMaW5rID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VkLWxpbmsnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IGxpbmsgaGFzIGJlZW4gc2VsZWN0ZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpIHtcbiAgICBpZiAobmFtZSA9PSAnZGlyZWN0aW9uJykge1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyQ2xhc3Nlcy52KSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2NvbnRhaW5lckNsYXNzZXMudlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckNsYXNzZXNbbmV3VmFsLnRvTG93ZXJDYXNlKClbMF1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsLCBuZXdWYWwpO1xuICB9XG5cbiAgX3JlbmRlckxpbmsobGluaywgaW5kZXgpe1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBsZXQgY2xhc3NlcyA9IHtsaW5rOiB0cnVlfTtcbiAgICBpZiAodHlwZW9mIGxpbmsgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0ZXh0ID0gbGluaztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGxpbmsgPT09ICdvYmplY3QnKSB7XG4gICAgICB0ZXh0ID0gbGluay50ZXh0O1xuICAgICAgaWYgKGxpbmsuZGlzYWJsZWQpIHtcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRMaW5rKSB7XG4gICAgICBjbGFzc2VzWydzZWxlY3RlZCddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzSGVhZGVyTGluayAmJiBpbmRleCA9PSAwKSB7XG4gICAgICBjbGFzc2VzWydsaW5rLWhlYWRlciddID0gdHJ1ZTtcbiAgICB9XG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIGxpbms9XCIke2luZGV4fVwiIGNsYXNzPSR7Y2xhc3NNYXAoY2xhc3Nlcyl9PiR7dGV4dH08L2Rpdj5gO1xuICAgIH1cblxuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGxldCBuZXdfbGluayA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbGluaycpKTtcbiAgICBpZiAoKG5ld19saW5rICE9IHRoaXMuY3VycmVudExpbmspICYmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgdGhpcy5jdXJyZW50TGluayA9IG5ld19saW5rO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX2NoYW5nZWRMaW5rKTtcbiAgICB9XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWxpbmstbGlzdCcsIFJwTGlua0xpc3QpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5oIHtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5oIC5saW5rIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci52IHtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci52IC5saW5rIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICAubGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICB9XG4gICAgbGluay5kaXNhYmVsZDpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLnNlbGVjdGVkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPSR7Y2xhc3NNYXAodGhpcy5fY29udGFpbmVyQ2xhc3Nlcyl9PlxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1pbmRpdmlkdWFsLnRwbC5qc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2F2YXRhclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oZXJvLWltYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2ljb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VJbmRpdmlkdWFsIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbmRpdmlkdWFsOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGluZGl2aWR1YWxJZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBpbmRpdmlkdWFsU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHB1YmxpY2F0aW9uU3RhdGU6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcmV0cmlldmVkUHVibGljYXRpb25zOiB7dHlwZTogQXJyYXl9LFxuICAgICAgdG90YWxQdWJsaWNhdGlvbnM6IHt0eXBlOiBwYXJzZUludH1cblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuX2luamVjdE1vZGVsKCdQZXJzb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5pbmRpdmlkdWFsID0ge307XG4gICAgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMucHVibGljYXRpb25TdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5yZXRyaWV2ZWRQdWJsaWNhdGlvbnMgPSBbXTtcbiAgICB0aGlzLnRvdGFsUHVibGljYXRpb25zID0gMDtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgbGV0IHBhdGggPSBhd2FpdCB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCk7XG4gICAgcGF0aCA9IHBhdGgubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5pbmRpdmlkdWFsSWQgPSBwYXRoWzFdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsSWQpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLl9kb01haW5RdWVyeSh0aGlzLmluZGl2aWR1YWxJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9QdWJRdWVyeSh0aGlzLmluZGl2aWR1YWxJZCldKTtcbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeShpZCl7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLlBlcnNvbk1vZGVsLmdldEluZGl2aWR1YWwoaWQpO1xuICAgIHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbmRpdmlkdWFsID0gZGF0YS5wYXlsb2FkO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgX2RvUHViUXVlcnkoaWQsIGdldE1vcmU9ZmFsc2Upe1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5QZXJzb25Nb2RlbC5nZXRQdWJsaWNhdGlvbnMoaWQpO1xuICAgIHRoaXMucHVibGljYXRpb25TdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA9IGRhdGEucGF5bG9hZC50b3RhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJldHJpZXZlZFB1YmxpY2F0aW9ucyk7XG4gIH1cblxuICBnZXRJbmRpdmlkdWFsVGl0bGVzKCl7XG4gICAgaWYgKCF0aGlzLmluZGl2aWR1YWwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mbyAmJiB0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby50aXRsZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby50aXRsZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW3RoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby50aXRsZV07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRFbWFpbEFkZHJlc3Nlcygpe1xuICAgIGlmICghdGhpcy5pbmRpdmlkdWFsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8gJiYgdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8uaGFzRW1haWwpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8uaGFzRW1haWwubWFwKGUgPT4gZS5lbWFpbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3RoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby5oYXNFbWFpbC5lbWFpbF1cbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRXZWJzaXRlcygpIHtcbiAgICBsZXQgb3V0ID0gW107XG4gICAgaWYgKCF0aGlzLmluZGl2aWR1YWwpIHtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWwub3JjaWRJZCkge1xuICAgICAgb3V0LnB1c2goeyd0ZXh0JzogJ09yY2lkJywgJ2hyZWYnOiB0aGlzLmluZGl2aWR1YWwub3JjaWRJZFsnQGlkJ119KVxuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLnNjb3B1c0lkKSB7XG4gICAgICBvdXQucHVzaCh7J3RleHQnOiAnU2NvcHVzJywgJ2hyZWYnOiBgaHR0cHM6Ly93d3cuc2NvcHVzLmNvbS9hdXRoaWQvZGV0YWlsLnVyaT9hdXRob3JJZD0ke3RoaXMuaW5kaXZpZHVhbC5zY29wdXNJZH1gfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLWluZGl2aWR1YWwnLCBScFBhZ2VJbmRpdmlkdWFsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNhYm91dCAuY29scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAjYWJvdXQgLmNvbHMgPiBkaXYge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnB1Yi1jb3VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG5cblxuPGRpdiBjbGFzcz1cImluZGl2aWR1YWwgY29udGFpbmVyIHRvcFwiPlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmluZGl2aWR1YWxTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgaW5kaXZpZHVhbC48L3JwLWFsZXJ0PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmluZGl2aWR1YWxTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgPHJwLWhlcm8taW1hZ2U+XG4gICAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgICA8cnAtaWNvbiBpY29uPVwiaXJvbi1saW5rXCIgY2lyY2xlLWJnIGlzLWxpbmsgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6NXB4O1wiPjwvcnAtaWNvbj5cbiAgICAgIDxycC1pY29uIGljb249XCJycC1xclwiIGNpcmNsZS1iZyBpcy1saW5rPjwvcnAtaWNvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHNsb3Q9XCJtYWluXCIgY2xhc3M9XCJoZXJvbWFpblwiPlxuICAgICAgPHJwLWF2YXRhciBzaXplPVwibGdcIj48L3JwLWF2YXRhcj5cbiAgICAgIDxoMiBjbGFzcz1cIm5hbWUgdGV4dC1zZWNvbmRhcnkgaDEgYm9sZCBtYi0wIHRleHQtY2VudGVyXCI+JHt0aGlzLmluZGl2aWR1YWwubGFiZWx9PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1saWdodCBoMyBtYi0yIG10LTEgdGV4dC1jZW50ZXJcIj4ke3RoaXMuZ2V0SW5kaXZpZHVhbFRpdGxlcygpLmpvaW4oXCIsIFwiKX08L3A+XG4gICAgICA8cCBjbGFzcz1cImJvbGQgdGV4dC1saWdodCBoMyBtdC0xIG1iLTAgdGV4dC1jZW50ZXJcIj5NeSByZXNlYXJjaCBhcmVhcyBpbmNsdWRlOiA8L3A+XG4gICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICAgIDxycC1iYWRnZT5Gb29iYXI8L3JwLWJhZGdlPlxuICAgICAgICA8cnAtYmFkZ2U+U3R1ZmY8L3JwLWJhZGdlPlxuICAgICAgICA8cnAtYmFkZ2U+VGhpbmdzPC9ycC1iYWRnZT5cbiAgICAgICAgPHJwLWJhZGdlPldpZGdldHM8L3JwLWJhZGdlPlxuICAgICAgICA8L3A+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3JwLWhlcm8taW1hZ2U+XG4gIDxycC1saW5rLWxpc3QgY2xhc3M9XCJiZy1saWdodCBwLTNcIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIGxpbmtzPSdbe1widGV4dFwiOiBcIkFsbCBJbmZvXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkFib3V0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIlB1YmxpY2F0aW9uc1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJSZXNlYXJjaFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJDb250YWN0XCJ9XSc+XG4gIDwvcnAtbGluay1saXN0PlxuXG4gIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIj5cbiAgICA8aDEgY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPkFib3V0PC9oMT5cbiAgICA8aDI+T3ZlcnZpZXc8L2gyPlxuICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXBcbiAgICBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xzXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTJcIj5Qb3NpdGlvbnM8L2gzPlxuICAgICAgICAgICR7dGhpcy5nZXRJbmRpdmlkdWFsVGl0bGVzKCkubWFwKHRpdGxlID0+IGh0bWxgPGRpdj4ke3RpdGxlfTwvZGl2PmApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48aDMgY2xhc3M9XCJtYi0yXCI+Q29udGFjdDwvaDM+JHt0aGlzLmdldEVtYWlsQWRkcmVzc2VzKCkubWFwKGFkZHIgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIkeydtYWlsdG86JyArIGFkZHJ9XCI+JHthZGRyfTwvYT48L2Rpdj5gKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwibWItMlwiPldlYnNpdGVzPC9oMz5cbiAgICAgICAgJHt0aGlzLmdldFdlYnNpdGVzKCkubWFwKHNpdGUgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIke3NpdGUuaHJlZn1cIj4ke3NpdGUudGV4dH08L2E+PC9kaXY+YCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGlkPVwicHVibGljYXRpb25zXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyIG10LTBcIj5QdWJsaWNhdGlvbnM8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cInB1Yi1jb3VudFwiPiR7dGhpcy50b3RhbFB1YmxpY2F0aW9uc308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDI+U2VsZWN0ZWQgUHVibGljYXRpb25zPC9oMj5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBpZD1cInJlc2VhcmNoXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCI+XG4gICAgPGgxIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5SZXNlYXJjaDwvaDE+XG4gICAgPGgyPk92ZXJ2aWV3PC9oMj5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgICAgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48cD5cbiAgICA8aDI+S2V5d29yZHM8L2gyPlxuICAgICAgPHA+bG9yZW0sIGlwc3VtLCBkb2xvciBzaXQgYW1pdDwvcD5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIj5cbiAgICA8aDEgY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPkNvbnRhY3Q8L2gxPlxuICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbmA7fVxuIl0sInNvdXJjZVJvb3QiOiIifQ==