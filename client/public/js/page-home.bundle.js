(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home"],{

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
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/search */ "./public/elements/components/search.js");








class RpPageHome extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_home_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('CollectionModel');

    this.theme = APP_CONFIG.theme;
  }

  async _renderAcademicWorks() {
    let facetList = await this.CollectionModel.overview('facets');
    console.log(facetList);
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
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_2__);




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
  }
  .data .col-l {
    width: 30%;
  }
  .data .col-r {
    padding-left: 24px;
  }

  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_2___default.a}
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
      <h2><span class="bold mr-2">8431</span><span class="weight-regular">Academic Works</span></h2>
    </div>
    <div class="col-r flex-grow-1">
      <div class="people">
        <h2><span class="bold mr-2">100</span><span class="weight-regular">People</span></h2>
      </div>
      <div class="subjects">
        <h2><span class="bold mr-2">200</span><span class="weight-regular">Research Subjects</span></h2>
      </div>
    </div>
  </div>
</div>

`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9kcm9wZG93bi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9jb21wb25lbnRzL3NlYXJjaC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9ob21lL3JwLXBhZ2UtaG9tZS50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDRjtBQUNOOztBQUVoQyx5QkFBeUIsc0RBQVU7QUFDMUM7QUFDQTtBQUNBLGlCQUFpQix1Q0FBdUM7QUFDeEQsY0FBYyxZQUFZO0FBQzFCLGFBQWEsOEJBQThCO0FBQzNDLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSxjQUFjLGFBQWE7QUFDMUMsaUNBQWlDLDRCQUE0QjtBQUM3RCw4QkFBOEIsa0JBQWtCLElBQUksWUFBWTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFD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WDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QjtBQUN2QztBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0U7QUFDQSxhQUFhLHFGQUFVLGdDQUFnQztBQUN2RCxhQUFhLHFGQUFVLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJwYWdlLWhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tZHJvcGRvd24vaXJvbi1kcm9wZG93blwiXG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vZHJvcGRvd24udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwRHJvcGRvd24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHRoZW1lQ29sb3I6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogJ3RoZW1lLWNvbG9yJ30sXG4gICAgY2hvaWNlczoge3R5cGU6IEFycmF5fSxcbiAgICBjaG9zZW46IHt0eXBlOiBwYXJzZUludCwgcmVmbGVjdDogdHJ1ZX0sXG4gICAgb3BlbmVkOiB7dHlwZTogQm9vbGVhbn1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNob3NlbiA9IDA7XG4gICAgdGhpcy5jaG9pY2VzID0gW107XG4gICAgdGhpcy50aGVtZUNvbG9yID0gXCJvdXRsaW5lLXByaW1hcnlcIjtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fbmV3U2VsZWN0aW9uID0gbmV3IEN1c3RvbUV2ZW50KCduZXctc2VsZWN0aW9uJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBIG5ldyBzZWxlY3Rpb24uJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5lZC1jaGFuZ2VkJyxcbiAgICAoZSkgPT4ge3RoaXMub3BlbmVkID0gZS50YXJnZXQub3BlbmVkfSk7XG4gIH1cblxuXG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzW3RoaXMudGhlbWVDb2xvcl0gPSB0cnVlO1xuICAgIGNsYXNzZXMub3BlbmVkID0gdGhpcy5vcGVuZWQ7XG4gICAgaWYgKHRoaXMuX3BhcnNlQ2hvaWNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2xhc3Nlcy5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG4gIF9yZW5kZXJDaG9pY2VzKGNob2ljZSkge1xuICAgIHJldHVybiBodG1sYDxsaSBpbmRleD1cIiR7Y2hvaWNlLmluZGV4fVwiXG4gICAgICAgICAgICAgICAgICAgID9zZWxlY3RlZD1cIiR7Y2hvaWNlLmluZGV4ID09IHRoaXMuY2hvc2VufVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlQ2xpY2t9XCI+JHtjaG9pY2UudGV4dH08L2xpPmA7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soZSl7XG4gICAgbGV0IGkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gICAgaWYgKGkgPT0gdGhpcy5jaG9zZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jaG9zZW4gPSBpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS5jbG9zZSgpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLl9uZXdTZWxlY3Rpb24pO1xuICB9XG5cbiAgX3BhcnNlQ2hvaWNlcygpe1xuICAgIGxldCBjaG9pY2VzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAobGV0IGMgb2YgdGhpcy5jaG9pY2VzKSB7XG4gICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNob2ljZXMucHVzaCh7aW5kZXg6IGksIHRleHQ6IGN9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoYy50ZXh0KSB7XG4gICAgICAgICAgY2hvaWNlcy5wdXNoKHtpbmRleDogaSwgdGV4dDogYy50ZXh0fSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGNob2ljZXM7XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKXtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpLm9wZW4oKVxuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1kcm9wZG93bicsIFJwRHJvcGRvd24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICB9XG4gICAgI2J1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI2lucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXBsYWNlaG9sZGVyLXRleHQpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLm91dGxpbmUtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnk3MCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAzcHggMCAwIDA7XG4gICAgfVxuICAgIGxpIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxNXB4O1xuICAgIH1cbiAgICBsaVtzZWxlY3RlZF0ge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuICAgIC5jb250YWluZXIub3V0bGluZS1wcmltYXJ5IGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5MTApO1xuICAgIH1cbiAgICAuY29udGFpbmVyLm91dGxpbmUtcHJpbWFyeSB1bCB7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5NzApO1xuICAgIH1cbiAgICAuY29udGFpbmVyLm91dGxpbmUtcHJpbWFyeSB1bCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICA8ZGl2IGlkPVwiYnV0dG9uXCJcbiAgICAgICAgQGNsaWNrPVwiJHt0aGlzLm9wZW5Ecm9wZG93bn1cIj5cbiAgICAgICAgPHNwYW4gaWQ9XCJidXR0b24tdGV4dFwiPiR7dGhpcy5fcGFyc2VDaG9pY2VzKClbdGhpcy5jaG9zZW5dLnRleHR9PC9zcGFuPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXJkd2FyZTprZXlib2FyZC1hcnJvdy1kb3duXCI+PC9pcm9uLWljb24+XG4gICA8L2Rpdj5cbiAgICA8aXJvbi1kcm9wZG93biBpZD1cImRyb3Bkb3duXCIgc2Nyb2xsLWFjdGlvbj1cImNhbmNlbFwiIHZlcnRpY2FsLWFsaWduPVwidG9wXCI+XG4gICAgICA8dWwgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj4ke3RoaXMuX3BhcnNlQ2hvaWNlcygpLm1hcChjaG9pY2UgPT4gdGhpcy5fcmVuZGVyQ2hvaWNlcyhjaG9pY2UpKX08L3VsPlxuICAgIDwvaXJvbi1kcm9wZG93bj5cbiAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3NlYXJjaC50cGwuanMnO1xuaW1wb3J0ICcuL2Ryb3Bkb3duJztcbmltcG9ydCBcIi4vaWNvblwiO1xuXG5leHBvcnQgY2xhc3MgUnBTZWFyY2ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIGZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICBpbnB1dFZhbHVlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiaW5wdXQtdmFsdWVcIiwgcmVmbGVjdDogdHJ1ZX0sXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmd9LFxuICAgIGFjdGl2ZUZhY2V0OiB7dHlwZTogcGFyc2VJbnQsIGF0dHJpYnV0ZTogJ2FjdGl2ZS1mYWNldCcsIHJlZmxlY3Q6IHRydWV9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mYWNldHMgPSBbe1widGV4dFwiOiBcIlBFT1BMRVwifSwge1widGV4dFwiOiBcIk9SR0FOSVpBVElPTlNcIn0sIHtcInRleHRcIjogXCJXT1JLU1wifV07XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIHRoZSByZWdpc3RyeVwiO1xuICAgIHRoaXMuYWN0aXZlRmFjZXQgPSAwO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLl9uZXdTZWFyY2ggPSBuZXcgQ3VzdG9tRXZlbnQoJ25ldy1zZWFyY2gnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbWVzc2FnZTogJ0EgbmV3IHNlYXJjaCBoYXMgYmVlbiB0cmlnZ2VyZWQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdpbnB1dFZhbHVlJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdhY3RpdmVGYWNldCcpKSB7XG4gICAgICB0aGlzLnNlYXJjaE9iamVjdCA9IHtzZWFyY2g6IHRoaXMuaW5wdXRWYWx1ZSwgZmFjZXQ6IHRoaXMuZmFjZXRzW3RoaXMuYWN0aXZlRmFjZXRdfTtcbiAgICB9XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBkb1NlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5fbmV3U2VhcmNoKTtcbiAgfVxuXG4gIF9oYW5kbGVLZXl1cChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZG9TZWFyY2goKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1zZWFyY2gnLCBScFNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgICNpbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAjaWNvbi1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAubGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeTEwKTtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8cnAtZHJvcGRvd24gY2hvaWNlcz1cIiR7SlNPTi5zdHJpbmdpZnkodGhpcy5mYWNldHMpfVwiXG4gICAgICAgICAgICAgICAgIGNob3Nlbj1cIiR7dGhpcy5hY3RpdmVGYWNldH1cIlxuICAgICAgICAgICAgICAgICBAbmV3LXNlbGVjdGlvbj1cIiR7ZSA9PiB0aGlzLmFjdGl2ZUZhY2V0ID0gZS50YXJnZXQuY2hvc2VufVwiPlxuICAgIDwvcnAtZHJvcGRvd24+XG4gICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5pbnB1dFZhbHVlfVwiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiXG4gICAgICAgICAgIEBpbnB1dD1cIiR7KGUpID0+IHRoaXMuaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlfVwiXG4gICAgICAgICAgIEBrZXl1cD1cIiR7dGhpcy5faGFuZGxlS2V5dXB9XCJcbiAgICAgICAgICAgaWQ9XCJpbnB1dFwiPlxuICAgIDxkaXYgaWQ9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgICAgPHJwLWljb24gQGNsaWNrPVwiJHt0aGlzLmRvU2VhcmNofVwiIGljb249XCJycC1zZWFyY2hcIiA/aXMtbGluaz1cIiR7dGhpcy5pbnB1dFZhbHVlfVwiPjxycC1pY29uPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1ob21lLnRwbC5qc1wiXG5cbmltcG9ydCBcIkB1Y2QtbGliL2NvcmstYXBwLXV0aWxzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VIb21lIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aGVtZToge3R5cGU6IE9iamVjdH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJyk7XG5cbiAgICB0aGlzLnRoZW1lID0gQVBQX0NPTkZJRy50aGVtZTtcbiAgfVxuXG4gIGFzeW5jIF9yZW5kZXJBY2FkZW1pY1dvcmtzKCkge1xuICAgIGxldCBmYWNldExpc3QgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnZmFjZXRzJyk7XG4gICAgY29uc29sZS5sb2coZmFjZXRMaXN0KTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1ob21lJywgUnBQYWdlSG9tZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICB9XG4gIC5oZXJvIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuICAuaGVybyBpbWcge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaGVybyAudGV4dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgfVxuICAuaGVybyAuY29udGVudDoge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgfVxuICAuc2VhcmNoIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDI4cHggMDtcbiAgfVxuICBycC1zZWFyY2gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAuZGF0YSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbiAgLmRhdGEgLmNvbC1sIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIC5kYXRhIC5jb2wtciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4XCI+XG4gIDxpbWcgc3JjPVwiJHt0aGlzLnRoZW1lLmhvbWVIZXJvSW1hZ2V9XCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0IGZsZXggZmxleC1jb2x1bW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1kZWZhdWx0IG10LTAgaDEgYm9sZCBtYi0zXCI+JHt0aGlzLnRoZW1lLmhvbWVIZXJvVGl0bGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1ncm93LTEgY29udGVudFwiPlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRUb3ApfTwvZGl2PlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRCb3R0b20pfTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggYmctcHJpbWFyeVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxycC1zZWFyY2g+PC9ycC1zZWFyY2g+PC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkYXRhIGJnLWxpZ2h0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbFwiPlxuICAgICAgPGgyPjxzcGFuIGNsYXNzPVwiYm9sZCBtci0yXCI+ODQzMTwvc3Bhbj48c3BhbiBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+QWNhZGVtaWMgV29ya3M8L3NwYW4+PC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLXIgZmxleC1ncm93LTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwZW9wbGVcIj5cbiAgICAgICAgPGgyPjxzcGFuIGNsYXNzPVwiYm9sZCBtci0yXCI+MTAwPC9zcGFuPjxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5QZW9wbGU8L3NwYW4+PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3RzXCI+XG4gICAgICAgIDxoMj48c3BhbiBjbGFzcz1cImJvbGQgbXItMlwiPjIwMDwvc3Bhbj48c3BhbiBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UmVzZWFyY2ggU3ViamVjdHM8L3NwYW4+PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=