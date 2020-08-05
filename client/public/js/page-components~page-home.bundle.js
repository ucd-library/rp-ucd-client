(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-components~page-home"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvZHJvcGRvd24udHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvbGluay1saXN0LWNvdW50cy50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvdmlldy1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvdmlldy1hbGwudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNYOztBQUU3QixzQkFBc0Isc0RBQVU7QUFDdkM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscURBQU07QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCO0FBQ0E7O0FBRTFDO0FBQ2YsU0FBUyxnREFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBUSwwQkFBMEI7QUFDNUQsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2UtY29tcG9uZW50c35wYWdlLWhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hbGVydC50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBbGVydCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGhlbWVDb2xvcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGhlbWUtY29sb3InfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhlbWVDb2xvciA9ICdkYW5nZXInO1xuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzW3RoaXMudGhlbWVDb2xvcl0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFsZXJ0JywgUnBBbGVydCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5jb250YWluZXIgaXJvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWRyb3Bkb3duL2lyb24tZHJvcGRvd25cIlxuaW1wb3J0IHJlbmRlciBmcm9tICcuL2Ryb3Bkb3duLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScERyb3Bkb3duIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9LFxuICAgIGNob2ljZXM6IHt0eXBlOiBBcnJheX0sXG4gICAgY2hvc2VuOiB7dHlwZTogcGFyc2VJbnQsIHJlZmxlY3Q6IHRydWV9LFxuICAgIG9wZW5lZDoge3R5cGU6IEJvb2xlYW59XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9zZW4gPSAwO1xuICAgIHRoaXMuY2hvaWNlcyA9IFtdO1xuICAgIHRoaXMudGhlbWVDb2xvciA9IFwib3V0bGluZS1wcmltYXJ5XCI7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX25ld1NlbGVjdGlvbiA9IG5ldyBDdXN0b21FdmVudCgnbmV3LXNlbGVjdGlvbicsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBtZXNzYWdlOiAnQSBuZXcgc2VsZWN0aW9uLidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5hZGRFdmVudExpc3RlbmVyKCdvcGVuZWQtY2hhbmdlZCcsXG4gICAgKGUpID0+IHt0aGlzLm9wZW5lZCA9IGUudGFyZ2V0Lm9wZW5lZH0pO1xuICB9XG5cblxuXG4gIF9jb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1t0aGlzLnRoZW1lQ29sb3JdID0gdHJ1ZTtcbiAgICBjbGFzc2VzLm9wZW5lZCA9IHRoaXMub3BlbmVkO1xuICAgIGlmICh0aGlzLl9wYXJzZUNob2ljZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNsYXNzZXMuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuICBfcmVuZGVyQ2hvaWNlcyhjaG9pY2UpIHtcbiAgICByZXR1cm4gaHRtbGA8bGkgaW5kZXg9XCIke2Nob2ljZS5pbmRleH1cIlxuICAgICAgICAgICAgICAgICAgICA/c2VsZWN0ZWQ9XCIke2Nob2ljZS5pbmRleCA9PSB0aGlzLmNob3Nlbn1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUNsaWNrfVwiPiR7Y2hvaWNlLnRleHR9PC9saT5gO1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGUpe1xuICAgIGxldCBpID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgIGlmIChpID09IHRoaXMuY2hvc2VuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hvc2VuID0gaTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Ryb3Bkb3duJykuY2xvc2UoKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VsZWN0aW9uKTtcbiAgfVxuXG4gIF9wYXJzZUNob2ljZXMoKXtcbiAgICBsZXQgY2hvaWNlcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGxldCBjIG9mIHRoaXMuY2hvaWNlcykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaG9pY2VzLnB1c2goe2luZGV4OiBpLCB0ZXh0OiBjfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKGMudGV4dCkge1xuICAgICAgICAgIGNob2ljZXMucHVzaCh7aW5kZXg6IGksIHRleHQ6IGMudGV4dH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBjaG9pY2VzO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCl7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5vcGVuKClcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtZHJvcGRvd24nLCBScERyb3Bkb3duKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgfVxuICAgICNidXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICNpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wbGFjZWhvbGRlci10ZXh0KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5NzApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogM3B4IDAgMCAwO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweDtcbiAgICB9XG4gICAgbGlbc2VsZWN0ZWRdIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyLm91dGxpbmUtcHJpbWFyeSBsaTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkgdWwge1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTcwKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5vdXRsaW5lLXByaW1hcnkgdWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLl9jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiPlxuICAgPGRpdiBpZD1cImJ1dHRvblwiXG4gICAgICAgIEBjbGljaz1cIiR7dGhpcy5vcGVuRHJvcGRvd259XCI+XG4gICAgICAgIDxzcGFuIGlkPVwiYnV0dG9uLXRleHRcIj4ke3RoaXMuX3BhcnNlQ2hvaWNlcygpW3RoaXMuY2hvc2VuXS50ZXh0fTwvc3Bhbj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFyZHdhcmU6a2V5Ym9hcmQtYXJyb3ctZG93blwiPjwvaXJvbi1pY29uPlxuICAgPC9kaXY+XG4gICAgPGlyb24tZHJvcGRvd24gaWQ9XCJkcm9wZG93blwiIHNjcm9sbC1hY3Rpb249XCJjYW5jZWxcIiB2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiPlxuICAgICAgPHVsIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+JHt0aGlzLl9wYXJzZUNob2ljZXMoKS5tYXAoY2hvaWNlID0+IHRoaXMuX3JlbmRlckNob2ljZXMoY2hvaWNlKSl9PC91bD5cbiAgICA8L2lyb24tZHJvcGRvd24+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9saW5rLWxpc3QtY291bnRzLnRwbC5qcyc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuaW1wb3J0IFwiLi92aWV3LWFsbFwiO1xuXG5leHBvcnQgY2xhc3MgUnBMaW5rTGlzdENvdW50cyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgbGlua3M6IHt0eXBlOiBBcnJheX0sXG4gICAgdmlld0FsbExpbms6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ3ZpZXctYWxsLWxpbmsnfSxcbiAgICBoZWFkZXI6IHt0eXBlOiBPYmplY3QsIGF0dHJpYnV0ZTogJ2hlYWRlcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5saW5rcyA9IFtdO1xuXG4gICAgdGhpcy5fbGlua0NsaWNrID0gbmV3IEN1c3RvbUV2ZW50KCdsaW5rLWNsaWNrJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBsaW5rIGhhcyBiZWVuIGNsaWNrZWQuJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3JlbmRlckhlYWRlcigpe1xuICAgIGlmICghdGhpcy5oZWFkZXIpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXIudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRcIj4ke3RoaXMuaGVhZGVyLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWNvbnRhaW5lclwiPjxzcGFuPiR7dGhpcy5oZWFkZXIudGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIF9yZW5kZXJMaW5rKGxpbmssIGluZGV4KXtcbiAgICBpZiAoIWxpbmsudGV4dCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50XCI+JHtsaW5rLmNvdW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBsaW5rLWluZGV4PVwiJHtpbmRleH1cIiBjbGFzcz1cImxpbmtcIj4ke2xpbmsudGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgX3JlbmRlclZpZXdBbGwoKXtcbiAgICBpZiAoIXRoaXMudmlld0FsbExpbmspIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIGlmICghdGhpcy52aWV3QWxsTGluay50ZXh0KSB7XG4gICAgICB0aGlzLnZpZXdBbGxMaW5rLnRleHQgPSBcIlZpZXcgQWxsXCI7XG4gICAgfVxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJyb3cgdmlldy1hbGxcIj48ZGl2IGNsYXNzPVwiY291bnRcIj48L2Rpdj48cnAtdmlldy1hbGwgQGNsaWNrPVwiJHt0aGlzLmhhbmRsZUNsaWNrfVwiIHRleHQ9XCIke3RoaXMudmlld0FsbExpbmsudGV4dH1cIj48L3JwLXZpZXctYWxsPjwvZGl2PmBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGluaycpICkge1xuICAgICAgdGhpcy5DbGlja2VkbGluayA9IHRoaXMubGlua3NbcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdsaW5rLWluZGV4JykpXVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuQ2xpY2tlZGxpbmsgPSB0aGlzLnZpZXdBbGxMaW5rO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbGlua0NsaWNrKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtbGluay1saXN0LWNvdW50cycsIFJwTGlua0xpc3RDb3VudHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIH1cbiAgICAucm93LmhlYWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgICB9XG4gICAgLnJvdy52aWV3LWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmNvdW50IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxpbmstY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1saW5rLXRleHQpO1xuICAgIH1cbiAgICAubGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstaG92ZXItdGV4dCk7XG4gICAgfVxuICAgIC5saW5rLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY3Vyc29yOiBhdXRvO1xuICAgIH1cbiAgICBsaW5rLmRpc2FiZWxkOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1kaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gICAgLmxpbmsuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAke3RoaXMuX3JlbmRlckhlYWRlcigpfVxuICAgICR7dGhpcy5saW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB0aGlzLl9yZW5kZXJMaW5rKGxpbmssIGluZGV4KSl9XG4gICAgJHt0aGlzLl9yZW5kZXJWaWV3QWxsKCl9XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9zZWFyY2gudHBsLmpzJztcbmltcG9ydCAnLi9kcm9wZG93bic7XG5pbXBvcnQgXCIuL2ljb25cIjtcblxuZXhwb3J0IGNsYXNzIFJwU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBmYWNldHM6IHt0eXBlOiBBcnJheX0sXG4gICAgaW5wdXRWYWx1ZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImlucHV0LXZhbHVlXCIsIHJlZmxlY3Q6IHRydWV9LFxuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhY3RpdmVGYWNldDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6ICdhY3RpdmUtZmFjZXQnLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmFjZXRzID0gW3tcInRleHRcIjogXCJQRU9QTEVcIn0sIHtcInRleHRcIjogXCJPUkdBTklaQVRJT05TXCJ9LCB7XCJ0ZXh0XCI6IFwiV09SS1NcIn1dO1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSBcIlNlYXJjaCB0aGUgcmVnaXN0cnlcIjtcbiAgICB0aGlzLmFjdGl2ZUZhY2V0ID0gMDtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5fbmV3U2VhcmNoID0gbmV3IEN1c3RvbUV2ZW50KCduZXctc2VhcmNoJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBzZWFyY2ggaGFzIGJlZW4gdHJpZ2dlcmVkJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnaW5wdXRWYWx1ZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnYWN0aXZlRmFjZXQnKSkge1xuICAgICAgdGhpcy5zZWFyY2hPYmplY3QgPSB7c2VhcmNoOiB0aGlzLmlucHV0VmFsdWUsIGZhY2V0OiB0aGlzLmZhY2V0c1t0aGlzLmFjdGl2ZUZhY2V0XX07XG4gICAgfVxuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgZG9TZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuX25ld1NlYXJjaCk7XG4gIH1cblxuICBfaGFuZGxlS2V5dXAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRvU2VhcmNoKCk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtc2VhcmNoJywgUnBTZWFyY2gpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjaW5wdXQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgI2ljb24tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogNDRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgLmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkxMCk7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPHJwLWRyb3Bkb3duIGNob2ljZXM9XCIke0pTT04uc3RyaW5naWZ5KHRoaXMuZmFjZXRzKX1cIlxuICAgICAgICAgICAgICAgICBjaG9zZW49XCIke3RoaXMuYWN0aXZlRmFjZXR9XCJcbiAgICAgICAgICAgICAgICAgQG5ldy1zZWxlY3Rpb249XCIke2UgPT4gdGhpcy5hY3RpdmVGYWNldCA9IGUudGFyZ2V0LmNob3Nlbn1cIj5cbiAgICA8L3JwLWRyb3Bkb3duPlxuICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIlxuICAgICAgICAgICBAaW5wdXQ9XCIkeyhlKSA9PiB0aGlzLmlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZX1cIlxuICAgICAgICAgICBAa2V5dXA9XCIke3RoaXMuX2hhbmRsZUtleXVwfVwiXG4gICAgICAgICAgIGlkPVwiaW5wdXRcIj5cbiAgICA8ZGl2IGlkPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxycC1pY29uIEBjbGljaz1cIiR7dGhpcy5kb1NlYXJjaH1cIiBpY29uPVwicnAtc2VhcmNoXCIgP2lzLWxpbms9XCIke3RoaXMuaW5wdXRWYWx1ZX1cIj48cnAtaWNvbj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vdmlldy1hbGwudHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwVmlld0FsbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAganVzdGlmeToge3R5cGU6IFN0cmluZ31cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHQgPSBcIlZpZXcgQWxsXCJcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBpZiAodGhpcy5qdXN0aWZ5KSB7XG4gICAgICBjbGFzc2VzW3RoaXMuanVzdGlmeV0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXZpZXctYWxsJywgUnBWaWV3QWxsKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci10ZXh0KTtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgLmNvbnRhaW5lci5zdGFydCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5jb250YWluZXIuY2VudGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyOmhvdmVyIGlyb24taWNvbntcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpcm9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRjb2xvci1zZWNvbmRhcnkpO1xuICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC52aWV3LWFsbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidmlldy1hbGxcIj48c3BhbiBjbGFzcz1cInRleHRcIj4ke3RoaXMudGV4dH08L3NwYW4+PGlyb24taWNvbiBpY29uPVwiYXY6cGxheS1hcnJvd1wiPjwvaXJvbi1pY29uPjwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=