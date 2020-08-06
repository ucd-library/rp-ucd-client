(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-home"],{

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
      context: {type: String}
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
  }

  updated(changedProperties) {
    if (changedProperties.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        this._getPeople();
      }
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
    let w = window.innerWidth;
    let self = document.body.getElementsByTagName('researcher-profiles')[0].shadowRoot.getElementById('home');
    self.setPeopleWidth(w);
  }

  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 72;
    if ( w < 576 ) {
      pw = w - 30 - avatarWidth;
    }
    else if (w < 768 ) {
      pw = (w - 30) * .7 - avatarWidth - 30;
    }
    this.peopleWidth = pw;
    console.log(pw);
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

  _formatPeople(people) {
    let out = []
    for (let person of people) {
      let p = {name: person.label ? person.label : "", title: ""};
      if (person.contactInfoFor && person.contactInfoFor.title) {
        if (Array.isArray(person.contactInfoFor.title)) {
          p.title = person.contactInfoFor.title.join(", ");
        }
        else {
          p.title = person.contactInfoFor.title;
        }

      }
      out.push(p)
    }
    return out;
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
          ${this._formatPeople(this.people).map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <rp-person-preview
              name="${person.name}"
              title="${person.title}"
              avatar-size='sm'
              text-width=${this.peopleWidth}>
            </rp-person-preview>
            `)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0w7O0FBRVQ7O0FBRUQ7QUFDVztBQUNGO0FBQ1I7O0FBRWxCLCtCQUErQixzREFBVTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCLHFCQUFxQixhQUFhO0FBQ2xDLGVBQWUsYUFBYTtBQUM1QixzQkFBc0IsWUFBWTtBQUNsQywyQkFBMkIsZUFBZTtBQUMxQyxxQkFBcUIsYUFBYTtBQUNsQyxlQUFlLFlBQVk7QUFDM0Isb0JBQW9CLGVBQWU7QUFDbkMsb0JBQW9CLGVBQWU7QUFDbkMsc0JBQXNCLGVBQWU7QUFDckMsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw0REFBTTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEUsa0NBQWtDO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyx3REFBd0Q7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDakxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQzZCO0FBQ1g7QUFDVjs7QUFFNUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QjtBQUN2QztBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0U7QUFDQSxhQUFhLHFGQUFVLGdDQUFnQztBQUN2RCxhQUFhLHFGQUFVLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBK0Q7QUFDckYsMkJBQTJCLGlFQUFpRTtBQUM1RixzQ0FBc0MsZ0VBQWdFO0FBQ3RHLHFDQUFxQyxtQ0FBbUM7QUFDeEUsNENBQTRDLHlCQUF5QjtBQUNyRSxzQ0FBc0MsZ0JBQWdCLHVEQUF1RCxFQUFFO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQThDLGdEQUFJO0FBQzlEO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDSDtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBOEM7QUFDNUQ7QUFDTyxjQUFjLDhEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0QsaUMiLCJmaWxlIjoicGFnZS1ob21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaG9tZS50cGwuanNcIlxuXG5pbXBvcnQgXCJAdWNkLWxpYi9jb3JrLWFwcC11dGlsc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZUhvbWUgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW1lOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGZhY2V0c1N0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmYWNldHM6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgYWNhZGVtaWNXb3Jrczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGFjYWRlbWljV29ya3NUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZW9wbGU6IHt0eXBlOiBBcnJheX0sXG4gICAgICBwZW9wbGVUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgc3ViamVjdHNUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIGNvbnRleHQ6IHt0eXBlOiBTdHJpbmd9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5mYWNldHMgPSB7fTtcbiAgICB0aGlzLmFjYWRlbWljV29ya3MgPSBbXVxuICAgIHRoaXMuZmFjZXRzU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gMDtcbiAgICB0aGlzLnBlb3BsZVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgIHRoaXMucGVvcGxlVG90YWwgPSAwO1xuICAgIHRoaXMuc3ViamVjdHNUb3RhbCA9IDA7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5jb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLnRoZW1lID0gQVBQX0NPTkZJRy50aGVtZTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcykge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2ZhY2V0c1N0YXR1cycpKSB7XG4gICAgICBpZiAodGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgdGhpcy5fZ2V0UGVvcGxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGF3YWl0IHRoaXMuX2dldEZhY2V0cygpO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBzZWxmID0gZG9jdW1lbnQuYm9keS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncmVzZWFyY2hlci1wcm9maWxlcycpWzBdLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgICBzZWxmLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA3MjtcbiAgICBpZiAoIHcgPCA1NzYgKSB7XG4gICAgICBwdyA9IHcgLSAzMCAtIGF2YXRhcldpZHRoO1xuICAgIH1cbiAgICBlbHNlIGlmICh3IDwgNzY4ICkge1xuICAgICAgcHcgPSAodyAtIDMwKSAqIC43IC0gYXZhdGFyV2lkdGggLSAzMDtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IHB3O1xuICAgIGNvbnNvbGUubG9nKHB3KTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRQZW9wbGUoKSB7XG4gICAgbGV0IHBlb3BsZUxpc3QgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygncmFuZG9tUGVvcGxlJywge2xpbWl0OiA0LCB0b3RhbDogdGhpcy5wZW9wbGVUb3RhbH0pO1xuICAgIHRoaXMucGVvcGxlU3RhdHVzID0gcGVvcGxlTGlzdC5zdGF0ZTtcbiAgICBpZiAocGVvcGxlTGlzdC5zdGF0ZSAhPSBcImxvYWRlZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGVvcGxlID0gcGVvcGxlTGlzdC5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2codGhpcy5wZW9wbGUpO1xuICB9XG5cbiAgYXN5bmMgX2dldEZhY2V0cygpIHtcbiAgICBsZXQgZmFjZXRMaXN0ID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoJ2ZhY2V0cycpO1xuICAgIHRoaXMuZmFjZXRzU3RhdHVzID0gZmFjZXRMaXN0LnN0YXRlO1xuICAgIGlmIChmYWNldExpc3Quc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldExpc3QucGF5bG9hZC5hZ2dyZWdhdGlvbnMuZmFjZXRzWydAdHlwZSddO1xuICAgIGZvciAobGV0IGZhY2V0IGluIHRoaXMuZmFjZXRzKSB7XG4gICAgICBpZiAoZmFjZXQuc3RhcnRzV2l0aCgnYmlibzonKSkge1xuXG4gICAgICAgIGxldCBiaWJvVHlwZSA9IHRoaXMuX2Zvcm1hdEJpYlR5cGUoZmFjZXQpO1xuICAgICAgICB0aGlzLmFjYWRlbWljV29ya3MucHVzaCh7dGV4dDogYmlib1R5cGUsIGNvdW50OiB0aGlzLmZhY2V0c1tmYWNldF0sIGZhY2V0OiBmYWNldH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmYWNldCA9PSAodGhpcy5jb250ZXh0ICsgXCI6cHVibGljYXRpb25cIikpIHtcbiAgICAgICAgdGhpcy5hY2FkZW1pY1dvcmtzVG90YWwgPSB0aGlzLmZhY2V0c1tmYWNldF07XG4gICAgICB9XG4gICAgICBpZiAoZmFjZXQgPT0gKHRoaXMuY29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgICAgICB0aGlzLnBlb3BsZVRvdGFsID0gdGhpcy5mYWNldHNbZmFjZXRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWNhZGVtaWNXb3Jrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGxldCBBID0gYS50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZXQgQiA9IGIudGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKEEgPCBCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChBID4gQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gIH1cblxuICBfZm9ybWF0UGVvcGxlKHBlb3BsZSkge1xuICAgIGxldCBvdXQgPSBbXVxuICAgIGZvciAobGV0IHBlcnNvbiBvZiBwZW9wbGUpIHtcbiAgICAgIGxldCBwID0ge25hbWU6IHBlcnNvbi5sYWJlbCA/IHBlcnNvbi5sYWJlbCA6IFwiXCIsIHRpdGxlOiBcIlwifTtcbiAgICAgIGlmIChwZXJzb24uY29udGFjdEluZm9Gb3IgJiYgcGVyc29uLmNvbnRhY3RJbmZvRm9yLnRpdGxlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBlcnNvbi5jb250YWN0SW5mb0Zvci50aXRsZSkpIHtcbiAgICAgICAgICBwLnRpdGxlID0gcGVyc29uLmNvbnRhY3RJbmZvRm9yLnRpdGxlLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwLnRpdGxlID0gcGVyc29uLmNvbnRhY3RJbmZvRm9yLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIG91dC5wdXNoKHApXG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBfZm9ybWF0QmliVHlwZShiaWIsIHNwbGl0Q2FtZWw9dHJ1ZSwgbWFrZVBsdXJhbD10cnVlKSB7XG4gICAgYmliID0gYmliLnNsaWNlKDUsKTtcblxuICAgIGlmIChzcGxpdENhbWVsKSB7XG4gICAgICBiaWIgPSBbLi4uYmliXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmliW2ldID09IGJpYltpXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgYmliW2ldID0gXCIgXCIgKyBiaWJbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJpYiA9IGJpYi5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIGlmIChtYWtlUGx1cmFsKSB7XG4gICAgICBiaWIgKz0gXCJzXCI7XG4gICAgfVxuICAgIHJldHVybiBiaWI7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtaG9tZScsIFJwUGFnZUhvbWUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IHVudGlsIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnRpbC5qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gIH1cbiAgLmhlcm8gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIC5oZXJvIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5oZXJvIC50ZXh0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG4gIC5oZXJvIC5jb250ZW50OiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICB9XG4gIC5zZWFyY2ggLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjhweCAwO1xuICB9XG4gIHJwLXNlYXJjaCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIC5kYXRhIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG4gIC5kYXRhIC5jb2wtbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRhdGEgLmNvbC1yIHtcbiAgfVxuICAucGVvcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyNHB4O1xuICAgIGdyaWQtcm93LWdhcDogMTBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XG4gICAgLnBlb3BsZS1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICAuZGF0YSAuY29udGFpbmVyIHtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICB9XG4gICAgLmRhdGEgLmNvbC1sIHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICAgIC5kYXRhIC5jb2wtciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4XCI+XG4gIDxpbWcgc3JjPVwiJHt0aGlzLnRoZW1lLmhvbWVIZXJvSW1hZ2V9XCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0IGZsZXggZmxleC1jb2x1bW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1kZWZhdWx0IG10LTAgaDEgYm9sZCBtYi0zXCI+JHt0aGlzLnRoZW1lLmhvbWVIZXJvVGl0bGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1ncm93LTEgY29udGVudFwiPlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRUb3ApfTwvZGl2PlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRCb3R0b20pfTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggYmctcHJpbWFyeVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxycC1zZWFyY2g+PC9ycC1zZWFyY2g+PC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkYXRhIGJnLWxpZ2h0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbFwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICAgICAgPHJwLWFsZXJ0ID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJyB9XCI+RXJyb3IgbG9hZGluZyBhY2FkZW1pYyB3b3JrczwvcnAtYWxlcnQ+XG4gICAgICA8cnAtbGluay1saXN0LWNvdW50cyA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2Vycm9yJyB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rcz1cIiR7SlNPTi5zdHJpbmdpZnkodGhpcy5hY2FkZW1pY1dvcmtzKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXctYWxsLWxpbms9J3tcInRleHRcIjogXCJWaWV3IEFsbCBXb3Jrc1wifSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCIke0pTT04uc3RyaW5naWZ5KHt0ZXh0OiBcIkFjYWRlbWljIFdvcmtzXCIsIGNvdW50OiB0aGlzLmFjYWRlbWljV29ya3NUb3RhbH0pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3QtY291bnRzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtciBmbGV4LWdyb3ctMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBlb3BsZVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtdC0wXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkIG1yLTJcIj4ke3RoaXMucGVvcGxlVG90YWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5QZW9wbGU8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZW9wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgJHt0aGlzLl9mb3JtYXRQZW9wbGUodGhpcy5wZW9wbGUpLm1hcChwZXJzb24gPT4gaHRtbGBcbiAgICAgICAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICAgICAgICBuYW1lPVwiJHtwZXJzb24ubmFtZX1cIlxuICAgICAgICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgICAgICAgIGF2YXRhci1zaXplPSdzbSdcbiAgICAgICAgICAgICAgdGV4dC13aWR0aD0ke3RoaXMucGVvcGxlV2lkdGh9PlxuICAgICAgICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgICAgICAgIGApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInN1YmplY3RzXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGQgbXItMlwiPiR7dGhpcy5zdWJqZWN0c1RvdGFsfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlaWdodC1yZWd1bGFyXCI+UmVzZWFyY2ggU3ViamVjdHM8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuYDt9XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBpc1ByaW1pdGl2ZSB9IGZyb20gJy4uL2xpYi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5jb25zdCBfc3RhdGUgPSBuZXcgV2Vha01hcCgpO1xuLy8gRWZmZWN0aXZlbHkgaW5maW5pdHksIGJ1dCBhIFNNSS5cbmNvbnN0IF9pbmZpbml0eSA9IDB4N2ZmZmZmZmY7XG4vKipcbiAqIFJlbmRlcnMgb25lIG9mIGEgc2VyaWVzIG9mIHZhbHVlcywgaW5jbHVkaW5nIFByb21pc2VzLCB0byBhIFBhcnQuXG4gKlxuICogVmFsdWVzIGFyZSByZW5kZXJlZCBpbiBwcmlvcml0eSBvcmRlciwgd2l0aCB0aGUgZmlyc3QgYXJndW1lbnQgaGF2aW5nIHRoZVxuICogaGlnaGVzdCBwcmlvcml0eSBhbmQgdGhlIGxhc3QgYXJndW1lbnQgaGF2aW5nIHRoZSBsb3dlc3QgcHJpb3JpdHkuIElmIGFcbiAqIHZhbHVlIGlzIGEgUHJvbWlzZSwgbG93LXByaW9yaXR5IHZhbHVlcyB3aWxsIGJlIHJlbmRlcmVkIHVudGlsIGl0IHJlc29sdmVzLlxuICpcbiAqIFRoZSBwcmlvcml0eSBvZiB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIHBsYWNlaG9sZGVyIGNvbnRlbnQgZm9yIGFzeW5jXG4gKiBkYXRhLiBGb3IgZXhhbXBsZSwgYSBQcm9taXNlIHdpdGggcGVuZGluZyBjb250ZW50IGNhbiBiZSB0aGUgZmlyc3QsXG4gKiBoaWdoZXN0LXByaW9yaXR5LCBhcmd1bWVudCwgYW5kIGEgbm9uX3Byb21pc2UgbG9hZGluZyBpbmRpY2F0b3IgdGVtcGxhdGUgY2FuXG4gKiBiZSB1c2VkIGFzIHRoZSBzZWNvbmQsIGxvd2VyLXByaW9yaXR5LCBhcmd1bWVudC4gVGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGxcbiAqIHJlbmRlciBpbW1lZGlhdGVseSwgYW5kIHRoZSBwcmltYXJ5IGNvbnRlbnQgd2lsbCByZW5kZXIgd2hlbiB0aGUgUHJvbWlzZVxuICogcmVzb2x2ZXMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgY29udGVudCA9IGZldGNoKCcuL2NvbnRlbnQudHh0JykudGhlbihyID0+IHIudGV4dCgpKTtcbiAqICAgICBodG1sYCR7dW50aWwoY29udGVudCwgaHRtbGA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPmApfWBcbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gZGlyZWN0aXZlKCguLi5hcmdzKSA9PiAocGFydCkgPT4ge1xuICAgIGxldCBzdGF0ZSA9IF9zdGF0ZS5nZXQocGFydCk7XG4gICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBsYXN0UmVuZGVyZWRJbmRleDogX2luZmluaXR5LFxuICAgICAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgfTtcbiAgICAgICAgX3N0YXRlLnNldChwYXJ0LCBzdGF0ZSk7XG4gICAgfVxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICAgIGxldCBwcmV2aW91c0xlbmd0aCA9IHByZXZpb3VzVmFsdWVzLmxlbmd0aDtcbiAgICBzdGF0ZS52YWx1ZXMgPSBhcmdzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiB3ZSd2ZSByZW5kZXJlZCBhIGhpZ2hlci1wcmlvcml0eSB2YWx1ZSBhbHJlYWR5LCBzdG9wLlxuICAgICAgICBpZiAoaSA+IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGFyZ3NbaV07XG4gICAgICAgIC8vIFJlbmRlciBub24tUHJvbWlzZSB2YWx1ZXMgaW1tZWRpYXRlbHlcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpO1xuICAgICAgICAgICAgLy8gU2luY2UgYSBsb3dlci1wcmlvcml0eSB2YWx1ZSB3aWxsIG5ldmVyIG92ZXJ3cml0ZSBhIGhpZ2hlci1wcmlvcml0eVxuICAgICAgICAgICAgLy8gc3luY2hyb25vdXMgdmFsdWUsIHdlIGNhbiBzdG9wIHByb2Nlc3Npbmcgbm93LlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgICAgICBpZiAoaSA8IHByZXZpb3VzTGVuZ3RoICYmIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBhIFByb21pc2UgdGhhdCB3ZSBoYXZlbid0IHNlZW4gYmVmb3JlLCBzbyBwcmlvcml0aWVzIG1heSBoYXZlXG4gICAgICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAgICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVudGlsLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=