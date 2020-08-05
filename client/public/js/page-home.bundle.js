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
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/search */ "./public/elements/components/search.js");









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
    this.context = APP_CONFIG.data.jsonldContext;

    this.theme = APP_CONFIG.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(e) {
    await this._getFacets();
  }

  updated(changedProperties) {
    if (changedProperties.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        this._getPeople();
      }
    }
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
  }
  .data .col-l {
    width: 30%;
  }
  .data .col-r {
    padding-left: 24px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaG9tZS9ycC1wYWdlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hvbWUvcnAtcGFnZS1ob21lLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNMOztBQUVUOztBQUVEO0FBQ1c7QUFDVjs7QUFFbEIsK0JBQStCLHNEQUFVO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0IscUJBQXFCLGFBQWE7QUFDbEMsZUFBZSxhQUFhO0FBQzVCLHNCQUFzQixZQUFZO0FBQ2xDLDJCQUEyQixlQUFlO0FBQzFDLHFCQUFxQixhQUFhO0FBQ2xDLGVBQWUsWUFBWTtBQUMzQixvQkFBb0IsZUFBZTtBQUNuQyxzQkFBc0IsZUFBZTtBQUNyQyxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDREQUFNOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLGtDQUFrQztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsd0RBQXdEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUM2QjtBQUNYO0FBQ1Y7O0FBRTVCO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QjtBQUN2QztBQUNBLGtEQUFrRCx5QkFBeUI7QUFDM0U7QUFDQSxhQUFhLHFGQUFVLGdDQUFnQztBQUN2RCxhQUFhLHFGQUFVLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBK0Q7QUFDckYsMkJBQTJCLGlFQUFpRTtBQUM1RixzQ0FBc0MsZ0VBQWdFO0FBQ3RHLHFDQUFxQyxtQ0FBbUM7QUFDeEUsNENBQTRDLHlCQUF5QjtBQUNyRSxzQ0FBc0MsZ0JBQWdCLHVEQUF1RCxFQUFFO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhDO0FBQ0g7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOENBQThDO0FBQzVEO0FBQ08sY0FBYyw4REFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNELGlDIiwiZmlsZSI6InBhZ2UtaG9tZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLWhvbWUudHBsLmpzXCJcblxuaW1wb3J0IFwiQHVjZC1saWIvY29yay1hcHAtdXRpbHNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3QtY291bnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VIb21lIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aGVtZToge3R5cGU6IE9iamVjdH0sXG4gICAgICBmYWNldHNTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZmFjZXRzOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGFjYWRlbWljV29ya3M6IHt0eXBlOiBBcnJheX0sXG4gICAgICBhY2FkZW1pY1dvcmtzVG90YWw6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBwZW9wbGVTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGVvcGxlOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcGVvcGxlVG90YWw6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICBzdWJqZWN0c1RvdGFsOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgY29udGV4dDoge3R5cGU6IFN0cmluZ31cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLmZhY2V0cyA9IHt9O1xuICAgIHRoaXMuYWNhZGVtaWNXb3JrcyA9IFtdXG4gICAgdGhpcy5mYWNldHNTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5hY2FkZW1pY1dvcmtzVG90YWwgPSAwO1xuICAgIHRoaXMucGVvcGxlU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMucGVvcGxlID0gW107XG4gICAgdGhpcy5wZW9wbGVUb3RhbCA9IDA7XG4gICAgdGhpcy5zdWJqZWN0c1RvdGFsID0gMDtcbiAgICB0aGlzLmNvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcblxuICAgIHRoaXMudGhlbWUgPSBBUFBfQ09ORklHLnRoZW1lO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgYXdhaXQgdGhpcy5fZ2V0RmFjZXRzKCk7XG4gIH1cblxuICB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZmFjZXRzU3RhdHVzJykpIHtcbiAgICAgIGlmICh0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJykge1xuICAgICAgICB0aGlzLl9nZXRQZW9wbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfZ2V0UGVvcGxlKCkge1xuICAgIGxldCBwZW9wbGVMaXN0ID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoJ3JhbmRvbVBlb3BsZScsIHtsaW1pdDogNCwgdG90YWw6IHRoaXMucGVvcGxlVG90YWx9KTtcbiAgICB0aGlzLnBlb3BsZVN0YXR1cyA9IHBlb3BsZUxpc3Quc3RhdGU7XG4gICAgaWYgKHBlb3BsZUxpc3Quc3RhdGUgIT0gXCJsb2FkZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZUxpc3QucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGVvcGxlKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRGYWNldHMoKSB7XG4gICAgbGV0IGZhY2V0TGlzdCA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdmYWNldHMnKTtcbiAgICB0aGlzLmZhY2V0c1N0YXR1cyA9IGZhY2V0TGlzdC5zdGF0ZTtcbiAgICBpZiAoZmFjZXRMaXN0LnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRMaXN0LnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1snQHR5cGUnXTtcbiAgICBmb3IgKGxldCBmYWNldCBpbiB0aGlzLmZhY2V0cykge1xuICAgICAgaWYgKGZhY2V0LnN0YXJ0c1dpdGgoJ2JpYm86JykpIHtcblxuICAgICAgICBsZXQgYmlib1R5cGUgPSB0aGlzLl9mb3JtYXRCaWJUeXBlKGZhY2V0KTtcbiAgICAgICAgdGhpcy5hY2FkZW1pY1dvcmtzLnB1c2goe3RleHQ6IGJpYm9UeXBlLCBjb3VudDogdGhpcy5mYWNldHNbZmFjZXRdLCBmYWNldDogZmFjZXR9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZmFjZXQgPT0gKHRoaXMuY29udGV4dCArIFwiOnB1YmxpY2F0aW9uXCIpKSB7XG4gICAgICAgIHRoaXMuYWNhZGVtaWNXb3Jrc1RvdGFsID0gdGhpcy5mYWNldHNbZmFjZXRdO1xuICAgICAgfVxuICAgICAgaWYgKGZhY2V0ID09ICh0aGlzLmNvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICAgICAgdGhpcy5wZW9wbGVUb3RhbCA9IHRoaXMuZmFjZXRzW2ZhY2V0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFjYWRlbWljV29ya3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICBsZXQgQSA9IGEudGV4dC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGV0IEIgPSBiLnRleHQudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChBIDwgQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoQSA+IEIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICB9XG5cbiAgX2Zvcm1hdEJpYlR5cGUoYmliLCBzcGxpdENhbWVsPXRydWUsIG1ha2VQbHVyYWw9dHJ1ZSkge1xuICAgIGJpYiA9IGJpYi5zbGljZSg1LCk7XG5cbiAgICBpZiAoc3BsaXRDYW1lbCkge1xuICAgICAgYmliID0gWy4uLmJpYl07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpYltpXSA9PSBiaWJbaV0udG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgIGJpYltpXSA9IFwiIFwiICsgYmliW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBiaWIgPSBiaWIuam9pbihcIlwiKTtcbiAgICB9XG5cbiAgICBpZiAobWFrZVBsdXJhbCkge1xuICAgICAgYmliICs9IFwic1wiO1xuICAgIH1cbiAgICByZXR1cm4gYmliO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLWhvbWUnLCBScFBhZ2VIb21lKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyB1bnRpbCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWJnLXByaW1hcnkpO1xuICB9XG4gIC5oZXJvIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuICAuaGVybyBpbWcge1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuaGVybyAudGV4dCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgfVxuICAuaGVybyAuY29udGVudDoge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgfVxuICAuc2VhcmNoIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDI4cHggMDtcbiAgfVxuICBycC1zZWFyY2gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAuZGF0YSAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbiAgLmRhdGEgLmNvbC1sIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIC5kYXRhIC5jb2wtciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBmbGV4XCI+XG4gIDxpbWcgc3JjPVwiJHt0aGlzLnRoZW1lLmhvbWVIZXJvSW1hZ2V9XCI+XG4gIDxkaXYgY2xhc3M9XCJ0ZXh0IGZsZXggZmxleC1jb2x1bW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1kZWZhdWx0IG10LTAgaDEgYm9sZCBtYi0zXCI+JHt0aGlzLnRoZW1lLmhvbWVIZXJvVGl0bGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1ncm93LTEgY29udGVudFwiPlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRUb3ApfTwvZGl2PlxuICAgICAgPGRpdj4ke3Vuc2FmZUhUTUwodGhpcy50aGVtZS5ob21lSGVyb0NvbnRlbnRCb3R0b20pfTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggYmctcHJpbWFyeVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxycC1zZWFyY2g+PC9ycC1zZWFyY2g+PC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkYXRhIGJnLWxpZ2h0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbFwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICAgICAgPHJwLWFsZXJ0ID9oaWRkZW49XCIke3RoaXMuZmFjZXRzU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGVkJyB9XCI+RXJyb3IgbG9hZGluZyBhY2FkZW1pYyB3b3JrczwvcnAtYWxlcnQ+XG4gICAgICA8cnAtbGluay1saXN0LWNvdW50cyA/aGlkZGVuPVwiJHt0aGlzLmZhY2V0c1N0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5mYWNldHNTdGF0dXMgPT0gJ2Vycm9yJyB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rcz1cIiR7SlNPTi5zdHJpbmdpZnkodGhpcy5hY2FkZW1pY1dvcmtzKX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXctYWxsLWxpbms9J3tcInRleHRcIjogXCJWaWV3IEFsbCBXb3Jrc1wifSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCIke0pTT04uc3RyaW5naWZ5KHt0ZXh0OiBcIkFjYWRlbWljIFdvcmtzXCIsIGNvdW50OiB0aGlzLmFjYWRlbWljV29ya3NUb3RhbH0pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3QtY291bnRzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtciBmbGV4LWdyb3ctMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBlb3BsZVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJtdC0wXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkIG1yLTJcIj4ke3RoaXMucGVvcGxlVG90YWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5QZW9wbGU8L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdWJqZWN0c1wiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJib2xkIG1yLTJcIj4ke3RoaXMuc3ViamVjdHNUb3RhbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWlnaHQtcmVndWxhclwiPlJlc2VhcmNoIFN1YmplY3RzPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbmA7fVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgaXNQcmltaXRpdmUgfSBmcm9tICcuLi9saWIvcGFydHMuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuY29uc3QgX3N0YXRlID0gbmV3IFdlYWtNYXAoKTtcbi8vIEVmZmVjdGl2ZWx5IGluZmluaXR5LCBidXQgYSBTTUkuXG5jb25zdCBfaW5maW5pdHkgPSAweDdmZmZmZmZmO1xuLyoqXG4gKiBSZW5kZXJzIG9uZSBvZiBhIHNlcmllcyBvZiB2YWx1ZXMsIGluY2x1ZGluZyBQcm9taXNlcywgdG8gYSBQYXJ0LlxuICpcbiAqIFZhbHVlcyBhcmUgcmVuZGVyZWQgaW4gcHJpb3JpdHkgb3JkZXIsIHdpdGggdGhlIGZpcnN0IGFyZ3VtZW50IGhhdmluZyB0aGVcbiAqIGhpZ2hlc3QgcHJpb3JpdHkgYW5kIHRoZSBsYXN0IGFyZ3VtZW50IGhhdmluZyB0aGUgbG93ZXN0IHByaW9yaXR5LiBJZiBhXG4gKiB2YWx1ZSBpcyBhIFByb21pc2UsIGxvdy1wcmlvcml0eSB2YWx1ZXMgd2lsbCBiZSByZW5kZXJlZCB1bnRpbCBpdCByZXNvbHZlcy5cbiAqXG4gKiBUaGUgcHJpb3JpdHkgb2YgdmFsdWVzIGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciBhc3luY1xuICogZGF0YS4gRm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB3aXRoIHBlbmRpbmcgY29udGVudCBjYW4gYmUgdGhlIGZpcnN0LFxuICogaGlnaGVzdC1wcmlvcml0eSwgYXJndW1lbnQsIGFuZCBhIG5vbl9wcm9taXNlIGxvYWRpbmcgaW5kaWNhdG9yIHRlbXBsYXRlIGNhblxuICogYmUgdXNlZCBhcyB0aGUgc2Vjb25kLCBsb3dlci1wcmlvcml0eSwgYXJndW1lbnQuIFRoZSBsb2FkaW5nIGluZGljYXRvciB3aWxsXG4gKiByZW5kZXIgaW1tZWRpYXRlbHksIGFuZCB0aGUgcHJpbWFyeSBjb250ZW50IHdpbGwgcmVuZGVyIHdoZW4gdGhlIFByb21pc2VcbiAqIHJlc29sdmVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IGNvbnRlbnQgPSBmZXRjaCgnLi9jb250ZW50LnR4dCcpLnRoZW4ociA9PiByLnRleHQoKSk7XG4gKiAgICAgaHRtbGAke3VudGlsKGNvbnRlbnQsIGh0bWxgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5gKX1gXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IGRpcmVjdGl2ZSgoLi4uYXJncykgPT4gKHBhcnQpID0+IHtcbiAgICBsZXQgc3RhdGUgPSBfc3RhdGUuZ2V0KHBhcnQpO1xuICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbGFzdFJlbmRlcmVkSW5kZXg6IF9pbmZpbml0eSxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH07XG4gICAgICAgIF9zdGF0ZS5zZXQocGFydCwgc3RhdGUpO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlcyA9IHN0YXRlLnZhbHVlcztcbiAgICBsZXQgcHJldmlvdXNMZW5ndGggPSBwcmV2aW91c1ZhbHVlcy5sZW5ndGg7XG4gICAgc3RhdGUudmFsdWVzID0gYXJncztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gSWYgd2UndmUgcmVuZGVyZWQgYSBoaWdoZXItcHJpb3JpdHkgdmFsdWUgYWxyZWFkeSwgc3RvcC5cbiAgICAgICAgaWYgKGkgPiBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBhcmdzW2ldO1xuICAgICAgICAvLyBSZW5kZXIgbm9uLVByb21pc2UgdmFsdWVzIGltbWVkaWF0ZWx5XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaTtcbiAgICAgICAgICAgIC8vIFNpbmNlIGEgbG93ZXItcHJpb3JpdHkgdmFsdWUgd2lsbCBuZXZlciBvdmVyd3JpdGUgYSBoaWdoZXItcHJpb3JpdHlcbiAgICAgICAgICAgIC8vIHN5bmNocm9ub3VzIHZhbHVlLCB3ZSBjYW4gc3RvcCBwcm9jZXNzaW5nIG5vdy5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBQcm9taXNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCwgc2tpcCBpdC5cbiAgICAgICAgaWYgKGkgPCBwcmV2aW91c0xlbmd0aCAmJiB2YWx1ZSA9PT0gcHJldmlvdXNWYWx1ZXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgYSBQcm9taXNlIHRoYXQgd2UgaGF2ZW4ndCBzZWVuIGJlZm9yZSwgc28gcHJpb3JpdGllcyBtYXkgaGF2ZVxuICAgICAgICAvLyBjaGFuZ2VkLiBGb3JnZXQgd2hhdCB3ZSByZW5kZXJlZCBiZWZvcmUuXG4gICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gX2luZmluaXR5O1xuICAgICAgICBwcmV2aW91c0xlbmd0aCA9IDA7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbigocmVzb2x2ZWRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS52YWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgICAgICAvLyBJZiBzdGF0ZS52YWx1ZXMgZG9lc24ndCBjb250YWluIHRoZSB2YWx1ZSwgd2UndmUgcmUtcmVuZGVyZWQgd2l0aG91dFxuICAgICAgICAgICAgLy8gdGhlIHZhbHVlLCBzbyBkb24ndCByZW5kZXIgaXQuIFRoZW4sIG9ubHkgcmVuZGVyIGlmIHRoZSB2YWx1ZSBpc1xuICAgICAgICAgICAgLy8gaGlnaGVyLXByaW9yaXR5IHRoYW4gd2hhdCdzIGFscmVhZHkgYmVlbiByZW5kZXJlZC5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xICYmIGluZGV4IDwgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUocmVzb2x2ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bnRpbC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9