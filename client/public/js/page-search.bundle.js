(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-search"],{

/***/ "./public/elements/pages/search/rp-page-search.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/search/rp-page-search.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageSearch; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-search.tpl.js */ "./public/elements/pages/search/rp-page-search.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");










class RpPageSearch extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = _rp_page_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  updated(props) {
    this.doUpdated(props);

    // set primary facet
    if (props.has('mainFacet') && this.mainFacet != 'none') {
      let isRecognizedFacet = false;
      let i = 0;
      for (let option of this.CollectionModel.mainFacets) {
        i++;
        if (option.id.toLowerCase() == this.mainFacet.toLowerCase()) {
          if (option.disabled) {
            continue;
          }
          isRecognizedFacet = true
          this.mainFacetIndex = i;
          break;
        }
      }
      if (!isRecognizedFacet) {
        this.mainFacet = 'none';
        this.mainFacetIndex = 0;
      }
    }

  }

  async _onAppStateUpdate(state) {
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery()]);

  }


  getMainFacetLinks(){
    let links = [{id: 'none', text: 'All Results', href: `/search?s=${encodeURIComponent(this.textQuery)}`}]
    for (let f of this.CollectionModel.mainFacets) {
      f.href = `/search/${f.id}?s=${encodeURIComponent(this.textQuery)}`
      links.push(f)
    }
    return links
  }

}

customElements.define('rp-page-search', RpPageSearch);


/***/ }),

/***/ "./public/elements/pages/search/rp-page-search.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/search/rp-page-search.tpl.js ***!
  \************************************************************/
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
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>
<div class="search-header container bg-light top">
  <div class="px-5 py-3"><h1>Search results for "${this.textQuery}"</h1></div>
  <hr>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.getMainFacetLinks()}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
  </div>
  <div class="col-main">
    <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
      ${this.data.map(searchResult => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${this._renderAssetPreview(searchResult)}
        <hr class="dotted">
        `)}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`;}


/***/ }),

/***/ "./public/elements/utils/rp-utils-collection.js":
/*!******************************************************!*\
  !*** ./public/elements/utils/rp-utils-collection.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpUtilsCollection; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_a_z__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/a-z */ "./public/elements/components/a-z.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/person-preview */ "./public/elements/components/person-preview.js");







class RpUtilsCollection extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azDisabled: {type: Array},
      urlQuery: {type: Object},
      jsonldContext: {type: String},
      peopleWidth: {type: Number},
      visible: {type: Boolean},
      currentQuery: {type: Object},
      mainFacet: {type: String},
      pgPer: {type: Number},
      pgCurrent: {type: Number},
      textQuery: {type: String},
      dataFilters: {type: Array},
      data: {type: Array},
      dataStatus: {type: String},
      dataTotal: {type: Number},
      mainFacetIndex: {type: Number}
    }
  }

  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel');
    this.hasAz = false;
    this.hasPagination = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.urlQuery = {};
    this.jsonldContext = APP_CONFIG.data.jsonldContext;

    this._resetQueryProperties();

    this.setPeopleWidth(window.innerWidth);
    //this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this._handleResize = this._handleResize.bind(this);
  }


  _resetQueryProperties(){
    this.data = [];
    this.dataStatus = 'loading';
    this.dataTotal = 0;

    this.currentQuery = {};
    this.pgPer = 8;
    this.pgCurrent = 1;
    this.mainFacet = 'none';
    this.textQuery = "";
    this.dataFilters = [];
    this.mainFacetIndex = 0;
  }

  updated(props) {
    this.doUpdated(props);
  }

  doUpdated(props){
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

  async _doMainQuery(){
    let q = this.currentQuery;
    let data = await this.CollectionModel.query(q);
    this.dataStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    if (typeof data.payload.total === 'object') {
      this.dataTotal = 0;
    }
    else {
      this.dataTotal = data.payload.total;
    }

    this.data = data.payload.results;
    console.log("main query result:", data);
  }

  _parseUrlQuery(state){

    // get current location
    if (!state) {
      state = this.AppStateModel.store.data;
    }
    let path = state.location.path;
    let query = state.location.query;

    // start fresh
    this._resetQueryProperties();

    // get primary facet of query
    if (path.length < 1) {
      return;
    }
    this.mainFacet = 'none';
    let facetFromPath = "";
    if (path[0] == 'search' && path.length > 1) {
      facetFromPath = path[1].toLowerCase();
    }
    else {
      facetFromPath = path[0].toLowerCase();
    }
    for (let f of this.CollectionModel.mainFacets) {
      if (facetFromPath == f.id.toLowerCase() ) {
        this.mainFacet = facetFromPath;
        this.dataFilters.push(f.baseFilter);
      }
    }

    // get any query arguments
    for (let arg in query) {
      if (arg == 's') {
        this.textQuery = query.s;
      }
      else if (arg == 'filters') {
        this.dataFilters.push( JSON.parse(query[arg]) );
      }
      else if (arg == 'page') {
        this.pgCurrent = query[arg];
      }
    }

    this.currentQuery = this._constructQuery();
    console.log( 'element query:', this.currentQuery);

  }

  _constructQuery(){
    let q = {};
    if (this.textQuery) {
      q.s = this.textQuery;
    }

    if (this.pgCurrent) {
      q.pgCurrent = this.pgCurrent;
    }
    if (this.pgPer) {
      q.pgPer = this.pgPer;
    }

    if (this.dataFilters) {
      q.filters = this.dataFilters;
    }
    if (this.mainFacet && this.mainFacet != 'none') {
      q.mainFacet = this.mainFacet;
    }

    return q;
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }


  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .7 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
  }

  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let q = {...this.currentQuery};
    if (action == 'pagination' && this.hasPagination) {
      q.pgCurrent = args[0]
    }
    let path = this.CollectionModel.constructUrl(q);
    this.AppStateModel.setLocation(path);

    /*
    let q = {...this.urlQuery};
    if (!q.filters) {
      q.filters = {};
    }
    if (q.s && q.filters["@type"]) {
      q.filters = {};
    }
    console.log(q);
    console.log("User action:", action);

    // handle az
    if (action == 'az') {
      return;
    }

    // handle pagination
    if (action == 'pagination' && this.hasPagination) {
      this.pgCurrent = args[0];
      q.offset = this.pgCurrent * this.urlQuery.limit - this.urlQuery.limit;
    }

    // handle facets
    if (action.startsWith('facet_')) {
      if (args[0].filters) {
        q.filters = {...q.filters, ...args[0].filters}
      }
      else {
        let f = action.slice('facet_'.length, );
        if (q.filters[f]) {
          delete q.filters[f];
        }
      }
      q.offset = 0;
    }

    // construct new url and redirect
    let p = "";
    if (this.AppStateModel) {
      p = "/" + this.AppStateModel.store.data.location.path.join("/")
    }

    p = p + this._urlEncode(q)
    //console.log(p);
    //return;
    this.AppStateModel.setLocation(p);
    */
  }

  _renderBrowseHeader(title, Azselected) {
    this.hasAz = true;
    if (Azselected) {
      this.azSelected = Azselected;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${title}</h1>
      </div>
      <div class="col-main">
        <rp-a-z selected-letter="${this.azSelected}"
                .disabled-letters="${this.azDisabled}"
                @changed-letter=${e => this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `;
  }

  _renderFacets(facets) {
    if (!facets) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${facets.map(facet => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-link-list has-header-link
                    .links='${facet.values}'
                    current-link='${facet.activeIndex}'
                    @changed-link="${e => this._onUserAction('facet_' + facet.id, e.target.links[e.target.currentLink])}">
      </rp-link-list>
      `)}
    `
  }

  _renderAssetPreview(data) {
    let assetType = this._getAssetType(data);

    if (assetType == 'person') {
      let person = this.CollectionModel._formatPerson(data);
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-person-preview
        name="${person.name}"
        href="${"/individual/" + person.id}"
        title="${person.title}"
        text-width="${this.peopleWidth}"
        class="my-3">
      </rp-person-preview>
      `;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``

  }

  _getAssetType(data) {
    if (!data['@type']) {
      return;
    }
    if (typeof data['@type'] === 'string') {
      data['@type'] = [data['@type']];
    }
    if ( !Array.isArray(data['@type']) ) {
      return;
    }

    if (data['@type'].includes(this.jsonldContext + ":person")) {
      return "person";
    }

    return;
  }


  _renderPagination(totalResults) {
    if (!totalResults) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.pgPer);
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _urlEncode(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        if (p == 'offset' && obj[p] == 0) {
          continue;
        }
        if (p == 'filters' && Object.keys(obj[p]).length == 0) {
          continue;
        }
        if (p == 'limit') {
          continue;
        }
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent( JSON.stringify(obj[p]) ));
      }
    if (!str.length) {
      return ""
    }
    return "?" + str.join("&");
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3JwLXBhZ2Utc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcnAtcGFnZS1zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7O0FBRW9COztBQUVoQztBQUNJO0FBQ0M7OztBQUd0QiwyQkFBMkIsa0VBQWlCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0Esa0JBQWtCLG9EQUFvRCxtQ0FBbUMsRUFBRTtBQUMzRztBQUNBLDBCQUEwQixLQUFLLEtBQUssbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUTs7QUFFNUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBTTtBQUNWO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BELDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQTJEO0FB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LG9DQUFvQyxrQkFBa0I7QUFDdEQscUNBQXFDLG1GQUFtRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsZ0JBQWdCLDJCQUEyQjtBQUMzQyxpQkFBaUIsYUFBYTtBQUM5QixzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsZ0RBQUk7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZiwrQkFBK0IsUUFBUTtBQUN2QyxtQ0FBbUMsZUFBZTtBQUNsRCxvQ0FBb0MsNERBQTREO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGFnZS1zZWFyY2guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1zZWFyY2gudHBsLmpzXCJcblxuaW1wb3J0IFJwVXRpbHNDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VTZWFyY2ggZXh0ZW5kcyBScFV0aWxzQ29sbGVjdGlvbiB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG5cbiAgICAvLyBzZXQgcHJpbWFyeSBmYWNldFxuICAgIGlmIChwcm9wcy5oYXMoJ21haW5GYWNldCcpICYmIHRoaXMubWFpbkZhY2V0ICE9ICdub25lJykge1xuICAgICAgbGV0IGlzUmVjb2duaXplZEZhY2V0ID0gZmFsc2U7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgICBpKys7XG4gICAgICAgIGlmIChvcHRpb24uaWQudG9Mb3dlckNhc2UoKSA9PSB0aGlzLm1haW5GYWNldC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzUmVjb2duaXplZEZhY2V0ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMubWFpbkZhY2V0SW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzUmVjb2duaXplZEZhY2V0KSB7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gICAgdGhpcy5fcGFyc2VVcmxRdWVyeShzdGF0ZSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KCldKTtcblxuICB9XG5cblxuICBnZXRNYWluRmFjZXRMaW5rcygpe1xuICAgIGxldCBsaW5rcyA9IFt7aWQ6ICdub25lJywgdGV4dDogJ0FsbCBSZXN1bHRzJywgaHJlZjogYC9zZWFyY2g/cz0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnRleHRRdWVyeSl9YH1dXG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICBmLmhyZWYgPSBgL3NlYXJjaC8ke2YuaWR9P3M9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy50ZXh0UXVlcnkpfWBcbiAgICAgIGxpbmtzLnB1c2goZilcbiAgICB9XG4gICAgcmV0dXJuIGxpbmtzXG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2Utc2VhcmNoJywgUnBQYWdlU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtaGVhZGVyIGNvbnRhaW5lciBiZy1saWdodCB0b3BcIj5cbiAgPGRpdiBjbGFzcz1cInB4LTUgcHktM1wiPjxoMT5TZWFyY2ggcmVzdWx0cyBmb3IgXCIke3RoaXMudGV4dFF1ZXJ5fVwiPC9oMT48L2Rpdj5cbiAgPGhyPlxuICA8cnAtbGluay1saXN0IGNsYXNzPVwiYmctbGlnaHQgcC0zXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9XCIke3RoaXMubWFpbkZhY2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICAubGlua3M9XCIke3RoaXMuZ2V0TWFpbkZhY2V0TGlua3MoKX1cIj5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggY29udGFpbmVyIGJnLWxpZ2h0IG10LTMgcGItM1wiPlxuPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0cyBtdC0zXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBzZWFyY2ggcmVzdWx0cy48L3JwLWFsZXJ0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAke3RoaXMuZGF0YS5tYXAoc2VhcmNoUmVzdWx0ID0+IGh0bWxgXG4gICAgICAgICR7dGhpcy5fcmVuZGVyQXNzZXRQcmV2aWV3KHNlYXJjaFJlc3VsdCl9XG4gICAgICAgIDxociBjbGFzcz1cImRvdHRlZFwiPlxuICAgICAgICBgKX1cbiAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBVdGlsc0NvbGxlY3Rpb24gZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0F6OiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBoYXNQYWdpbmF0aW9uOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBhelNlbGVjdGVkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF6RGlzYWJsZWQ6IHt0eXBlOiBBcnJheX0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBqc29ubGRDb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGN1cnJlbnRRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBtYWluRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGdQZXI6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHRleHRRdWVyeToge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhRmlsdGVyczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGE6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGFUb3RhbDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtYWluRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuaGFzQXogPSBmYWxzZTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmF6U2VsZWN0ZWQgPSAnQWxsJztcbiAgICB0aGlzLmF6RGlzYWJsZWQgPSBbXTtcbiAgICB0aGlzLnVybFF1ZXJ5ID0ge307XG4gICAgdGhpcy5qc29ubGRDb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgLy90aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSA9IHRoaXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBfcmVzZXRRdWVyeVByb3BlcnRpZXMoKXtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuXG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSB7fTtcbiAgICB0aGlzLnBnUGVyID0gODtcbiAgICB0aGlzLnBnQ3VycmVudCA9IDE7XG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy50ZXh0UXVlcnkgPSBcIlwiO1xuICAgIHRoaXMuZGF0YUZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gMDtcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5wYXlsb2FkLnRvdGFsID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKFwibWFpbiBxdWVyeSByZXN1bHQ6XCIsIGRhdGEpO1xuICB9XG5cbiAgX3BhcnNlVXJsUXVlcnkoc3RhdGUpe1xuXG4gICAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBzdGF0ZSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHN0YXRlLmxvY2F0aW9uLnBhdGg7XG4gICAgbGV0IHF1ZXJ5ID0gc3RhdGUubG9jYXRpb24ucXVlcnk7XG5cbiAgICAvLyBzdGFydCBmcmVzaFxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAvLyBnZXQgcHJpbWFyeSBmYWNldCBvZiBxdWVyeVxuICAgIGlmIChwYXRoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgbGV0IGZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFswXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgIGlmIChmYWNldEZyb21QYXRoID09IGYuaWQudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgICAgdGhpcy5tYWluRmFjZXQgPSBmYWNldEZyb21QYXRoO1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goZi5iYXNlRmlsdGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgYW55IHF1ZXJ5IGFyZ3VtZW50c1xuICAgIGZvciAobGV0IGFyZyBpbiBxdWVyeSkge1xuICAgICAgaWYgKGFyZyA9PSAncycpIHtcbiAgICAgICAgdGhpcy50ZXh0UXVlcnkgPSBxdWVyeS5zO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdmaWx0ZXJzJykge1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goIEpTT04ucGFyc2UocXVlcnlbYXJnXSkgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAncGFnZScpIHtcbiAgICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBxdWVyeVthcmddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gdGhpcy5fY29uc3RydWN0UXVlcnkoKTtcbiAgICBjb25zb2xlLmxvZyggJ2VsZW1lbnQgcXVlcnk6JywgdGhpcy5jdXJyZW50UXVlcnkpO1xuXG4gIH1cblxuICBfY29uc3RydWN0UXVlcnkoKXtcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSkge1xuICAgICAgcS5zID0gdGhpcy50ZXh0UXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGdDdXJyZW50KSB7XG4gICAgICBxLnBnQ3VycmVudCA9IHRoaXMucGdDdXJyZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZ1Blcikge1xuICAgICAgcS5wZ1BlciA9IHRoaXMucGdQZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YUZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHRoaXMuZGF0YUZpbHRlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLm1haW5GYWNldCAmJiB0aGlzLm1haW5GYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIHEubWFpbkZhY2V0ID0gdGhpcy5tYWluRmFjZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHE7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDgyO1xuICAgIGxldCBzY3JlZW5QYWRkaW5nID0gMzA7XG4gICAgcHcgPSAodyAtIHNjcmVlblBhZGRpbmcpICogLjcgLSBhdmF0YXJXaWR0aCAtIDQwO1xuICAgIHRoaXMucGVvcGxlV2lkdGggPSBNYXRoLmZsb29yKHB3KTtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHEgPSB7Li4udGhpcy5jdXJyZW50UXVlcnl9O1xuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgcS5wZ0N1cnJlbnQgPSBhcmdzWzBdXG4gICAgfVxuICAgIGxldCBwYXRoID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuY29uc3RydWN0VXJsKHEpO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwYXRoKTtcblxuICAgIC8qXG4gICAgbGV0IHEgPSB7Li4udGhpcy51cmxRdWVyeX07XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBpZiAocS5zICYmIHEuZmlsdGVyc1tcIkB0eXBlXCJdKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocSk7XG4gICAgY29uc29sZS5sb2coXCJVc2VyIGFjdGlvbjpcIiwgYWN0aW9uKTtcblxuICAgIC8vIGhhbmRsZSBhelxuICAgIGlmIChhY3Rpb24gPT0gJ2F6Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBwYWdpbmF0aW9uXG4gICAgaWYgKGFjdGlvbiA9PSAncGFnaW5hdGlvbicgJiYgdGhpcy5oYXNQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnBnQ3VycmVudCA9IGFyZ3NbMF07XG4gICAgICBxLm9mZnNldCA9IHRoaXMucGdDdXJyZW50ICogdGhpcy51cmxRdWVyeS5saW1pdCAtIHRoaXMudXJsUXVlcnkubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGZhY2V0c1xuICAgIGlmIChhY3Rpb24uc3RhcnRzV2l0aCgnZmFjZXRfJykpIHtcbiAgICAgIGlmIChhcmdzWzBdLmZpbHRlcnMpIHtcbiAgICAgICAgcS5maWx0ZXJzID0gey4uLnEuZmlsdGVycywgLi4uYXJnc1swXS5maWx0ZXJzfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBmID0gYWN0aW9uLnNsaWNlKCdmYWNldF8nLmxlbmd0aCwgKTtcbiAgICAgICAgaWYgKHEuZmlsdGVyc1tmXSkge1xuICAgICAgICAgIGRlbGV0ZSBxLmZpbHRlcnNbZl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHEub2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zdHJ1Y3QgbmV3IHVybCBhbmQgcmVkaXJlY3RcbiAgICBsZXQgcCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuQXBwU3RhdGVNb2RlbCkge1xuICAgICAgcCA9IFwiL1wiICsgdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGEubG9jYXRpb24ucGF0aC5qb2luKFwiL1wiKVxuICAgIH1cblxuICAgIHAgPSBwICsgdGhpcy5fdXJsRW5jb2RlKHEpXG4gICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocCk7XG4gICAgKi9cbiAgfVxuXG4gIF9yZW5kZXJCcm93c2VIZWFkZXIodGl0bGUsIEF6c2VsZWN0ZWQpIHtcbiAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICBpZiAoQXpzZWxlY3RlZCkge1xuICAgICAgdGhpcy5helNlbGVjdGVkID0gQXpzZWxlY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHNcIj5cbiAgICAgICAgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICAgIDxycC1hLXogc2VsZWN0ZWQtbGV0dGVyPVwiJHt0aGlzLmF6U2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQtbGV0dGVycz1cIiR7dGhpcy5hekRpc2FibGVkfVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGV0dGVyPSR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJhelwiKX0+PC9ycC1hLXo+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckZhY2V0cyhmYWNldHMpIHtcbiAgICBpZiAoIWZhY2V0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgJHtmYWNldHMubWFwKGZhY2V0ID0+IGh0bWxgXG4gICAgICA8cnAtbGluay1saXN0IGhhcy1oZWFkZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAubGlua3M9JyR7ZmFjZXQudmFsdWVzfSdcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC1saW5rPScke2ZhY2V0LmFjdGl2ZUluZGV4fSdcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oJ2ZhY2V0XycgKyBmYWNldC5pZCwgZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0PlxuICAgICAgYCl9XG4gICAgYFxuICB9XG5cbiAgX3JlbmRlckFzc2V0UHJldmlldyhkYXRhKSB7XG4gICAgbGV0IGFzc2V0VHlwZSA9IHRoaXMuX2dldEFzc2V0VHlwZShkYXRhKTtcblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3BlcnNvbicpIHtcbiAgICAgIGxldCBwZXJzb24gPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVyc29uKGRhdGEpO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBgXG5cbiAgfVxuXG4gIF9nZXRBc3NldFR5cGUoZGF0YSkge1xuICAgIGlmICghZGF0YVsnQHR5cGUnXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGFbJ0B0eXBlJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhWydAdHlwZSddID0gW2RhdGFbJ0B0eXBlJ11dO1xuICAgIH1cbiAgICBpZiAoICFBcnJheS5pc0FycmF5KGRhdGFbJ0B0eXBlJ10pICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgICAgcmV0dXJuIFwicGVyc29uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnBnUGVyKTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT1cIiR7bWF4UGFnZX1cIlxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtcGFnZT1cIiR7dGhpcy5wZ0N1cnJlbnR9XCJcbiAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1wYWdlPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcInBhZ2luYXRpb25cIiwgZS50YXJnZXQuY3VycmVudFBhZ2UpfVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zXCJcbiAgICA+PC9ycC1wYWdpbmF0aW9uPlxuICAgIGBcbiAgfVxuXG4gIF91cmxFbmNvZGUob2JqKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGZvciAobGV0IHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgICAgfVxuICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==