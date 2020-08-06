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
    if ( w < 576 ) {
      pw = w - 30 - avatarWidth;
    }
    else if (w < 768 ) {
      pw = (w - 30) * .7 - avatarWidth - 30;
    }
    this.peopleWidth = Math.floor(pw);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0w7O0FBRVQ7O0FBRUQ7QUFDVztBQUNGO0FBQ1I7O0FBRWxCLCtCQUErQixzREFBVTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCLHFCQUFxQixhQUFhO0FBQ2xDLGVBQWUsYUFBYTtBQUM1QixzQkFBc0IsWUFBWTtBQUNsQywyQkFBMkIsZUFBZTtBQUMxQyxxQkFBcUIsYUFBYTtBQUNsQyxlQUFlLFlBQVk7QUFDM0Isb0JBQW9CLGVBQWU7QUFDbkMsb0JBQW9CLGVBQWU7QUFDbkMsc0JBQXNCLGVBQWU7QUFDckMsZ0JBQWdCLGFBQWE7QUFDN0IsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw0REFBTTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0QsaUMiLCJmaWxlIjoicGFnZS1ob21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaG9tZS50cGwuanNcIlxuXG5pbXBvcnQgXCJAdWNkLWxpYi9jb3JrLWFwcC11dGlsc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdC1jb3VudHNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZUhvbWUgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW1lOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGZhY2V0c1N0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmYWNldHM6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgYWNhZGVtaWNXb3Jrczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGFjYWRlbWljV29ya3NUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZW9wbGU6IHt0eXBlOiBBcnJheX0sXG4gICAgICBwZW9wbGVUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgc3ViamVjdHNUb3RhbDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIGNvbnRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5mYWNldHMgPSB7fTtcbiAgICB0aGlzLmFjYWRlbWljV29ya3MgPSBbXVxuICAgIHRoaXMuZmFjZXRzU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gMDtcbiAgICB0aGlzLnBlb3BsZVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLnBlb3BsZSA9IFtdO1xuICAgIHRoaXMucGVvcGxlVG90YWwgPSAwO1xuICAgIHRoaXMuc3ViamVjdHNUb3RhbCA9IDA7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5jb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLnRoZW1lID0gQVBQX0NPTkZJRy50aGVtZTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuXG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygnZmFjZXRzU3RhdHVzJykpIHtcbiAgICAgIGlmICh0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJykge1xuICAgICAgICB0aGlzLl9nZXRQZW9wbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKGUpIHtcbiAgICBhd2FpdCB0aGlzLl9nZXRGYWNldHMoKTtcbiAgfVxuXG4gIF9oYW5kbGVSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgodyk7XG4gIH1cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDcyO1xuICAgIGlmICggdyA8IDU3NiApIHtcbiAgICAgIHB3ID0gdyAtIDMwIC0gYXZhdGFyV2lkdGg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHcgPCA3NjggKSB7XG4gICAgICBwdyA9ICh3IC0gMzApICogLjcgLSBhdmF0YXJXaWR0aCAtIDMwO1xuICAgIH1cbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gICAgY29uc29sZS5sb2cocHcpO1xuICB9XG5cbiAgYXN5bmMgX2dldFBlb3BsZSgpIHtcbiAgICBsZXQgcGVvcGxlTGlzdCA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdyYW5kb21QZW9wbGUnLCB7bGltaXQ6IDQsIHRvdGFsOiB0aGlzLnBlb3BsZVRvdGFsfSk7XG4gICAgdGhpcy5wZW9wbGVTdGF0dXMgPSBwZW9wbGVMaXN0LnN0YXRlO1xuICAgIGlmIChwZW9wbGVMaXN0LnN0YXRlICE9IFwibG9hZGVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wZW9wbGUgPSBwZW9wbGVMaXN0LnBheWxvYWQucmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBlb3BsZSk7XG4gIH1cblxuICBhc3luYyBfZ2V0RmFjZXRzKCkge1xuICAgIGxldCBmYWNldExpc3QgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnZmFjZXRzJyk7XG4gICAgdGhpcy5mYWNldHNTdGF0dXMgPSBmYWNldExpc3Quc3RhdGU7XG4gICAgaWYgKGZhY2V0TGlzdC5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0TGlzdC5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbJ0B0eXBlJ107XG4gICAgZm9yIChsZXQgZmFjZXQgaW4gdGhpcy5mYWNldHMpIHtcbiAgICAgIGlmIChmYWNldC5zdGFydHNXaXRoKCdiaWJvOicpKSB7XG5cbiAgICAgICAgbGV0IGJpYm9UeXBlID0gdGhpcy5fZm9ybWF0QmliVHlwZShmYWNldCk7XG4gICAgICAgIHRoaXMuYWNhZGVtaWNXb3Jrcy5wdXNoKHt0ZXh0OiBiaWJvVHlwZSwgY291bnQ6IHRoaXMuZmFjZXRzW2ZhY2V0XSwgZmFjZXQ6IGZhY2V0fSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKGZhY2V0ID09ICh0aGlzLmNvbnRleHQgKyBcIjpwdWJsaWNhdGlvblwiKSkge1xuICAgICAgICB0aGlzLmFjYWRlbWljV29ya3NUb3RhbCA9IHRoaXMuZmFjZXRzW2ZhY2V0XTtcbiAgICAgIH1cbiAgICAgIGlmIChmYWNldCA9PSAodGhpcy5jb250ZXh0ICsgXCI6cGVyc29uXCIpKSB7XG4gICAgICAgIHRoaXMucGVvcGxlVG90YWwgPSB0aGlzLmZhY2V0c1tmYWNldF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY2FkZW1pY1dvcmtzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgbGV0IEEgPSBhLnRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgIGxldCBCID0gYi50ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICBpZiAoQSA8IEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKEEgPiBCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgfVxuXG4gIF9mb3JtYXRQZW9wbGUocGVvcGxlKSB7XG4gICAgbGV0IG91dCA9IFtdXG4gICAgZm9yIChsZXQgcGVyc29uIG9mIHBlb3BsZSkge1xuICAgICAgbGV0IHAgPSB7bmFtZTogcGVyc29uLmxhYmVsID8gcGVyc29uLmxhYmVsIDogXCJcIiwgdGl0bGU6IFwiXCJ9O1xuICAgICAgaWYgKHBlcnNvbi5jb250YWN0SW5mb0ZvciAmJiBwZXJzb24uY29udGFjdEluZm9Gb3IudGl0bGUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGVyc29uLmNvbnRhY3RJbmZvRm9yLnRpdGxlKSkge1xuICAgICAgICAgIHAudGl0bGUgPSBwZXJzb24uY29udGFjdEluZm9Gb3IudGl0bGUuam9pbihcIiwgXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHAudGl0bGUgPSBwZXJzb24uY29udGFjdEluZm9Gb3IudGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgICAgb3V0LnB1c2gocClcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIF9mb3JtYXRCaWJUeXBlKGJpYiwgc3BsaXRDYW1lbD10cnVlLCBtYWtlUGx1cmFsPXRydWUpIHtcbiAgICBiaWIgPSBiaWIuc2xpY2UoNSwpO1xuXG4gICAgaWYgKHNwbGl0Q2FtZWwpIHtcbiAgICAgIGJpYiA9IFsuLi5iaWJdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaWJbaV0gPT0gYmliW2ldLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICBiaWJbaV0gPSBcIiBcIiArIGJpYltpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYmliID0gYmliLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgaWYgKG1ha2VQbHVyYWwpIHtcbiAgICAgIGJpYiArPSBcInNcIjtcbiAgICB9XG4gICAgcmV0dXJuIGJpYjtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1ob21lJywgUnBQYWdlSG9tZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgdW50aWwgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3VudGlsLmpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRjb2xvci1iZy1wcmltYXJ5KTtcbiAgfVxuICAuaGVybyAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbiAgLmhlcm8gaW1nIHtcbiAgICBtaW4td2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmhlcm8gLnRleHQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbiAgLmhlcm8gLmNvbnRlbnQ6IHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIH1cbiAgLnNlYXJjaCAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyOHB4IDA7XG4gIH1cbiAgcnAtc2VhcmNoIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgLmRhdGEgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgLmRhdGEgLmNvbC1sIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZGF0YSAuY29sLXIge1xuICB9XG4gIC5wZW9wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICBncmlkLWNvbHVtbi1nYXA6IDI0cHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAucGVvcGxlLWNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgIC5kYXRhIC5jb250YWluZXIge1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgICAuZGF0YSAuY29sLWwge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICB9XG4gICAgLmRhdGEgLmNvbC1yIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICB9XG4gIH1cblxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiaGVyb1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXhcIj5cbiAgPGltZyBzcmM9XCIke3RoaXMudGhlbWUuaG9tZUhlcm9JbWFnZX1cIj5cbiAgPGRpdiBjbGFzcz1cInRleHQgZmxleCBmbGV4LWNvbHVtblwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWRlZmF1bHQgbXQtMCBoMSBib2xkIG1iLTNcIj4ke3RoaXMudGhlbWUuaG9tZUhlcm9UaXRsZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWdyb3ctMSBjb250ZW50XCI+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudFRvcCl9PC9kaXY+XG4gICAgICA8ZGl2PiR7dW5zYWZlSFRNTCh0aGlzLnRoZW1lLmhvbWVIZXJvQ29udGVudEJvdHRvbSl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNlYXJjaCBiZy1wcmltYXJ5XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PHJwLXNlYXJjaD48L3JwLXNlYXJjaD48L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImRhdGEgYmctbGlnaHRcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sXCI+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8cnAtYWxlcnQgP2hpZGRlbj1cIiR7dGhpcy5mYWNldHNTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkZWQnIH1cIj5FcnJvciBsb2FkaW5nIGFjYWRlbWljIHdvcmtzPC9ycC1hbGVydD5cbiAgICAgIDxycC1saW5rLWxpc3QtY291bnRzID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnZXJyb3InIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzPVwiJHtKU09OLnN0cmluZ2lmeSh0aGlzLmFjYWRlbWljV29ya3MpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldy1hbGwtbGluaz0ne1widGV4dFwiOiBcIlZpZXcgQWxsIFdvcmtzXCJ9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIiR7SlNPTi5zdHJpbmdpZnkoe3RleHQ6IFwiQWNhZGVtaWMgV29ya3NcIiwgY291bnQ6IHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsfSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdC1jb3VudHM+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1yIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGVvcGxlXCI+XG4gICAgICAgIDxoMiBjbGFzcz1cIm10LTBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJvbGQgbXItMlwiPiR7dGhpcy5wZW9wbGVUb3RhbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPlBlb3BsZTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBlb3BsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAke3RoaXMuX2Zvcm1hdFBlb3BsZSh0aGlzLnBlb3BsZSkubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgICAgICAgYXZhdGFyLXNpemU9J3NtJ1xuICAgICAgICAgICAgICB0ZXh0LXdpZHRoPSR7dGhpcy5wZW9wbGVXaWR0aH0+XG4gICAgICAgICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgICAgICAgYCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3ViamVjdHNcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYm9sZCBtci0yXCI+JHt0aGlzLnN1YmplY3RzVG90YWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5SZXNlYXJjaCBTdWJqZWN0czwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3MpID0+IChwYXJ0KSA9PiB7XG4gICAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBfc3RhdGUuc2V0KHBhcnQsIHN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gICAgbGV0IHByZXZpb3VzTGVuZ3RoID0gcHJldmlvdXNWYWx1ZXMubGVuZ3RoO1xuICAgIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAgICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc2luZyBub3cuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgUHJvbWlzZSB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQsIHNraXAgaXQuXG4gICAgICAgIGlmIChpIDwgcHJldmlvdXNMZW5ndGggJiYgdmFsdWUgPT09IHByZXZpb3VzVmFsdWVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGEgUHJvbWlzZSB0aGF0IHdlIGhhdmVuJ3Qgc2VlbiBiZWZvcmUsIHNvIHByaW9yaXRpZXMgbWF5IGhhdmVcbiAgICAgICAgLy8gY2hhbmdlZC4gRm9yZ2V0IHdoYXQgd2UgcmVuZGVyZWQgYmVmb3JlLlxuICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IF9pbmZpbml0eTtcbiAgICAgICAgcHJldmlvdXNMZW5ndGggPSAwO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oKHJlc29sdmVkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgICAgLy8gSWYgc3RhdGUudmFsdWVzIGRvZXNuJ3QgY29udGFpbiB0aGUgdmFsdWUsIHdlJ3ZlIHJlLXJlbmRlcmVkIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIHRoZSB2YWx1ZSwgc28gZG9uJ3QgcmVuZGVyIGl0LiBUaGVuLCBvbmx5IHJlbmRlciBpZiB0aGUgdmFsdWUgaXNcbiAgICAgICAgICAgIC8vIGhpZ2hlci1wcmlvcml0eSB0aGFuIHdoYXQncyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHJlc29sdmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW50aWwuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==