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
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
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
    ${this._renderFacets()}
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
      mainFacetIndex: {type: Number},
      subFacet: {type: String},
      subFacetIndex: {type: Number},
      subFacetStatus: {type: String}

    }
  }

  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel');
    this.hasAz = false;
    this.hasPagination = false;
    this.visible = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.urlQuery = {};
    this.jsonldContext = APP_CONFIG.data.jsonldContext;

    this._resetQueryProperties();

    this.setPeopleWidth(window.innerWidth);
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
    this.mainFacetIndex = 0;
    this.subFacet = 'none';
    this.subFacetIndex = 0;
    this.subFacets = [];
    this.textQuery = "";
    this.dataFilters = [];
    this.subFacetStatus = "loading";
    
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
    if (this.textQuery) {
      this.subFacetStatus = data.state;
    }
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

    if (this.textQuery) {
      this.subFacets = this.CollectionModel._getSubFacets('people', data.payload, this.currentQuery);
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
        break;
      }
    }

    let subFacetFromPath = "";
    if (path[0] == 'search' && path.length > 2) {
      subFacetFromPath = path[2].toLowerCase();
    }
    else if (path[0] != 'search' && path.length > 1) {
      subFacetFromPath = path[1].toLowerCase();
    }
    if (this.CollectionModel.subFacets[this.mainFacet]) {
      let i = 1;
      for (let f of this.CollectionModel.subFacets[this.mainFacet]) {
        if (f.id == subFacetFromPath) {
          this.subFacet = subFacetFromPath;
          this.subFacetIndex = i;
          this.dataFilters.push(f.baseFilter);
          break;
        }
        i += 1;
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
      q.textQuery = this.textQuery;
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
    if (this.subFacet && this.subFacet != 'none') {
      q.subFacet = this.subFacet;
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

  _renderFacets() {
    if (!this.subFacets) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-link-list 
      has-header-link
      .links='${this.subFacets}'
      current-link='${this.subFacetIndex}'
      >
    </rp-link-list>
    `;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3JwLXBhZ2Utc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcnAtcGFnZS1zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7O0FBRW9COztBQUVoQztBQUNJO0FBQ0M7OztBQUd0QiwyQkFBMkIsa0VBQWlCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxrQkFBa0Isb0RBQW9ELG1DQUFtQyxFQUFFO0FBQzNHO0FBQ0EsMEJBQTBCLEtBQUssS0FBSyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNROztBQUU1QjtBQUNmLE9BQU8sZ0RBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQsMEJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQTJEO0FBQy9FO0FBQ0E7QUFDQSxvQkFBb0IsNkRBQTZEO0FBQ2pGO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQTREO0FBQzdGLFFBQVEsOEJBQThCLGdEQUFJO0FBQzFDLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQzs7QUFFcEI7QUFDTTtBQUNDO0FBQ0c7O0FBRXRCLHNDQUFzQyxzREFBVTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLHNCQUFzQixjQUFjO0FBQ3BDLG1CQUFtQixhQUFhO0FBQ2hDLG1CQUFtQixZQUFZO0FBQy9CLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixhQUFhO0FBQ25DLG9CQUFvQixhQUFhO0FBQ2pDLGdCQUFnQixjQUFjO0FBQzlCLHFCQUFxQixhQUFhO0FBQ2xDLGtCQUFrQixhQUFhO0FBQy9CLGNBQWMsYUFBYTtBQUMzQixrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsWUFBWTtBQUNoQyxhQUFhLFlBQVk7QUFDekIsbUJBQW1CLGFBQWE7QUFDaEMsa0JBQWtCLGFBQWE7QUFDL0IsdUJBQXVCLGFBQWE7QUFDcEMsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGFBQWE7QUFDbkMsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxxQ0FBcUMsZ0JBQWdCO0FBQ3JELGtDQUFrQyw4QkFBOEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSSxHQUFHLG9CQUFvQixnREFBSTtBQUMxQztBQUNBLDhCQUE4QixhQUFhO0FBQzNDLG9DQUFvQyxrQkFBa0I7QUFDdEQscUNBQXFDLG1GQUFtRjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsZ0JBQWdCLDJCQUEyQjtBQUMzQyxpQkFBaUIsYUFBYTtBQUM5QixzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsZ0RBQUk7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZiwrQkFBK0IsUUFBUTtBQUN2QyxtQ0FBbUMsZUFBZTtBQUNsRCxvQ0FBb0MsNERBQTREO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGFnZS1zZWFyY2guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1zZWFyY2gudHBsLmpzXCJcblxuaW1wb3J0IFJwVXRpbHNDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VTZWFyY2ggZXh0ZW5kcyBScFV0aWxzQ29sbGVjdGlvbiB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG5cbiAgICAvLyBzZXQgcHJpbWFyeSBmYWNldFxuICAgIGlmIChwcm9wcy5oYXMoJ21haW5GYWNldCcpICYmIHRoaXMubWFpbkZhY2V0ICE9ICdub25lJykge1xuICAgICAgbGV0IGlzUmVjb2duaXplZEZhY2V0ID0gZmFsc2U7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgICBpKys7XG4gICAgICAgIGlmIChvcHRpb24uaWQudG9Mb3dlckNhc2UoKSA9PSB0aGlzLm1haW5GYWNldC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzUmVjb2duaXplZEZhY2V0ID0gdHJ1ZVxuICAgICAgICAgIHRoaXMubWFpbkZhY2V0SW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzUmVjb2duaXplZEZhY2V0KSB7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLmRvVXBkYXRlKHN0YXRlKSk7XG4gIH1cblxuICBhc3luYyBkb1VwZGF0ZShzdGF0ZSl7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYXJzZVVybFF1ZXJ5KHN0YXRlKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkoKV0pO1xuICB9XG5cblxuICBnZXRNYWluRmFjZXRMaW5rcygpe1xuICAgIGxldCBsaW5rcyA9IFt7aWQ6ICdub25lJywgdGV4dDogJ0FsbCBSZXN1bHRzJywgaHJlZjogYC9zZWFyY2g/cz0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnRleHRRdWVyeSl9YH1dXG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICBmLmhyZWYgPSBgL3NlYXJjaC8ke2YuaWR9P3M9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy50ZXh0UXVlcnkpfWBcbiAgICAgIGxpbmtzLnB1c2goZilcbiAgICB9XG4gICAgcmV0dXJuIGxpbmtzXG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2Utc2VhcmNoJywgUnBQYWdlU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtaGVhZGVyIGNvbnRhaW5lciBiZy1saWdodCB0b3BcIj5cbiAgPGRpdiBjbGFzcz1cInB4LTUgcHktM1wiPjxoMT5TZWFyY2ggcmVzdWx0cyBmb3IgXCIke3RoaXMudGV4dFF1ZXJ5fVwiPC9oMT48L2Rpdj5cbiAgPGhyPlxuICA8cnAtbGluay1saXN0IGNsYXNzPVwiYmctbGlnaHQgcC0zXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9XCIke3RoaXMubWFpbkZhY2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICAubGlua3M9XCIke3RoaXMuZ2V0TWFpbkZhY2V0TGlua3MoKX1cIj5cbiAgPC9ycC1saW5rLWxpc3Q+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJzZWFyY2ggY29udGFpbmVyIGJnLWxpZ2h0IG10LTMgcGItM1wiPlxuPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0cyBtdC0zXCI+XG4gICAgJHt0aGlzLl9yZW5kZXJGYWNldHMoKX1cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHNlYXJjaCByZXN1bHRzLjwvcnAtYWxlcnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICR7dGhpcy5kYXRhLm1hcChzZWFyY2hSZXN1bHQgPT4gaHRtbGBcbiAgICAgICAgJHt0aGlzLl9yZW5kZXJBc3NldFByZXZpZXcoc2VhcmNoUmVzdWx0KX1cbiAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgIGApfVxuICAgICAgJHt0aGlzLl9yZW5kZXJQYWdpbmF0aW9uKHRoaXMuZGF0YVRvdGFsKX1cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9hLXpcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHVybFF1ZXJ5OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGpzb25sZENvbnRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGVvcGxlV2lkdGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59LFxuICAgICAgY3VycmVudFF1ZXJ5OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIG1haW5GYWNldDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZ1Blcjoge3R5cGU6IE51bWJlcn0sXG4gICAgICBwZ0N1cnJlbnQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgdGV4dFF1ZXJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGFGaWx0ZXJzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YToge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YVRvdGFsOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIG1haW5GYWNldEluZGV4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN1YkZhY2V0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHN1YkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3ViRmFjZXRTdGF0dXM6IHt0eXBlOiBTdHJpbmd9XG5cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuaGFzQXogPSBmYWxzZTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmF6U2VsZWN0ZWQgPSAnQWxsJztcbiAgICB0aGlzLmF6RGlzYWJsZWQgPSBbXTtcbiAgICB0aGlzLnVybFF1ZXJ5ID0ge307XG4gICAgdGhpcy5qc29ubGRDb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIF9yZXNldFF1ZXJ5UHJvcGVydGllcygpe1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHt9O1xuICAgIHRoaXMucGdQZXIgPSA4O1xuICAgIHRoaXMucGdDdXJyZW50ID0gMTtcbiAgICB0aGlzLm1haW5GYWNldCA9ICdub25lJztcbiAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gMDtcbiAgICB0aGlzLnN1YkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IDA7XG4gICAgdGhpcy5zdWJGYWNldHMgPSBbXTtcbiAgICB0aGlzLnRleHRRdWVyeSA9IFwiXCI7XG4gICAgdGhpcy5kYXRhRmlsdGVycyA9IFtdO1xuICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICBpZiAodGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIH1cbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5wYXlsb2FkLnRvdGFsID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRleHRRdWVyeSkge1xuICAgICAgdGhpcy5zdWJGYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKCdwZW9wbGUnLCBkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coXCJtYWluIHF1ZXJ5IHJlc3VsdDpcIiwgZGF0YSk7XG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeShzdGF0ZSl7XG5cbiAgICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHN0YXRlID0gdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGE7XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBsZXQgcXVlcnkgPSBzdGF0ZS5sb2NhdGlvbi5xdWVyeTtcblxuICAgIC8vIHN0YXJ0IGZyZXNoXG4gICAgdGhpcy5fcmVzZXRRdWVyeVByb3BlcnRpZXMoKTtcblxuICAgIC8vIGdldCBwcmltYXJ5IGZhY2V0IG9mIHF1ZXJ5XG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmYWNldEZyb21QYXRoID0gXCJcIjtcbiAgICBpZiAocGF0aFswXSA9PSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhY2V0RnJvbVBhdGggPSBwYXRoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICBpZiAoZmFjZXRGcm9tUGF0aCA9PSBmLmlkLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0ID0gZmFjZXRGcm9tUGF0aDtcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKGYuYmFzZUZpbHRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzdWJGYWNldEZyb21QYXRoID0gXCJcIjtcbiAgICBpZiAocGF0aFswXSA9PSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDIpIHtcbiAgICAgIHN1YkZhY2V0RnJvbVBhdGggPSBwYXRoWzJdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhbMF0gIT0gJ3NlYXJjaCcgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBzdWJGYWNldEZyb21QYXRoID0gcGF0aFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5Db2xsZWN0aW9uTW9kZWwuc3ViRmFjZXRzW3RoaXMubWFpbkZhY2V0XSkge1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zdWJGYWNldHNbdGhpcy5tYWluRmFjZXRdKSB7XG4gICAgICAgIGlmIChmLmlkID09IHN1YkZhY2V0RnJvbVBhdGgpIHtcbiAgICAgICAgICB0aGlzLnN1YkZhY2V0ID0gc3ViRmFjZXRGcm9tUGF0aDtcbiAgICAgICAgICB0aGlzLnN1YkZhY2V0SW5kZXggPSBpO1xuICAgICAgICAgIHRoaXMuZGF0YUZpbHRlcnMucHVzaChmLmJhc2VGaWx0ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvLyBnZXQgYW55IHF1ZXJ5IGFyZ3VtZW50c1xuICAgIGZvciAobGV0IGFyZyBpbiBxdWVyeSkge1xuICAgICAgaWYgKGFyZyA9PSAncycpIHtcbiAgICAgICAgdGhpcy50ZXh0UXVlcnkgPSBxdWVyeS5zO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdmaWx0ZXJzJykge1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goIEpTT04ucGFyc2UocXVlcnlbYXJnXSkgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAncGFnZScpIHtcbiAgICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBxdWVyeVthcmddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gdGhpcy5fY29uc3RydWN0UXVlcnkoKTtcbiAgICBjb25zb2xlLmxvZyggJ2VsZW1lbnQgcXVlcnk6JywgdGhpcy5jdXJyZW50UXVlcnkpO1xuXG4gIH1cblxuICBfY29uc3RydWN0UXVlcnkoKXtcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSkge1xuICAgICAgcS50ZXh0UXVlcnkgPSB0aGlzLnRleHRRdWVyeTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wZ0N1cnJlbnQpIHtcbiAgICAgIHEucGdDdXJyZW50ID0gdGhpcy5wZ0N1cnJlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBnUGVyKSB7XG4gICAgICBxLnBnUGVyID0gdGhpcy5wZ1BlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhRmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0gdGhpcy5kYXRhRmlsdGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ICYmIHRoaXMubWFpbkZhY2V0ICE9ICdub25lJykge1xuICAgICAgcS5tYWluRmFjZXQgPSB0aGlzLm1haW5GYWNldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ViRmFjZXQgJiYgdGhpcy5zdWJGYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIHEuc3ViRmFjZXQgPSB0aGlzLnN1YkZhY2V0O1xuICAgIH1cblxuICAgIHJldHVybiBxO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxuICBfb25Vc2VyQWN0aW9uKGFjdGlvbiwgLi4uYXJncykge1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBxID0gey4uLnRoaXMuY3VycmVudFF1ZXJ5fTtcbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHEucGdDdXJyZW50ID0gYXJnc1swXVxuICAgIH1cbiAgICBsZXQgcGF0aCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmNvbnN0cnVjdFVybChxKTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocGF0aCk7XG5cbiAgICAvKlxuICAgIGxldCBxID0gey4uLnRoaXMudXJsUXVlcnl9O1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHEucyAmJiBxLmZpbHRlcnNbXCJAdHlwZVwiXSkge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHEpO1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBhY3Rpb246XCIsIGFjdGlvbik7XG5cbiAgICAvLyBoYW5kbGUgYXpcbiAgICBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvblxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBhcmdzWzBdO1xuICAgICAgcS5vZmZzZXQgPSB0aGlzLnBnQ3VycmVudCAqIHRoaXMudXJsUXVlcnkubGltaXQgLSB0aGlzLnVybFF1ZXJ5LmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBmYWNldHNcbiAgICBpZiAoYWN0aW9uLnN0YXJ0c1dpdGgoJ2ZhY2V0XycpKSB7XG4gICAgICBpZiAoYXJnc1swXS5maWx0ZXJzKSB7XG4gICAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLmFyZ3NbMF0uZmlsdGVyc31cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZiA9IGFjdGlvbi5zbGljZSgnZmFjZXRfJy5sZW5ndGgsICk7XG4gICAgICAgIGlmIChxLmZpbHRlcnNbZl0pIHtcbiAgICAgICAgICBkZWxldGUgcS5maWx0ZXJzW2ZdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyB1cmwgYW5kIHJlZGlyZWN0XG4gICAgbGV0IHAgPSBcIlwiO1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIHAgPSBcIi9cIiArIHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnBhdGguam9pbihcIi9cIilcbiAgICB9XG5cbiAgICBwID0gcCArIHRoaXMuX3VybEVuY29kZShxKVxuICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgLy9yZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHApO1xuICAgICovXG4gIH1cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkLWxldHRlcnM9XCIke3RoaXMuYXpEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIil9PjwvcnAtYS16PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoKSB7XG4gICAgaWYgKCF0aGlzLnN1YkZhY2V0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLWxpbmstbGlzdCBcbiAgICAgIGhhcy1oZWFkZXItbGlua1xuICAgICAgLmxpbmtzPScke3RoaXMuc3ViRmFjZXRzfSdcbiAgICAgIGN1cnJlbnQtbGluaz0nJHt0aGlzLnN1YkZhY2V0SW5kZXh9J1xuICAgICAgPlxuICAgIDwvcnAtbGluay1saXN0PlxuICAgIGA7XG4gICAgcmV0dXJuIGh0bWxgJHtmYWNldHMubWFwKGZhY2V0ID0+IGh0bWxgXG4gICAgICA8cnAtbGluay1saXN0IGhhcy1oZWFkZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAubGlua3M9JyR7ZmFjZXQudmFsdWVzfSdcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC1saW5rPScke2ZhY2V0LmFjdGl2ZUluZGV4fSdcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oJ2ZhY2V0XycgKyBmYWNldC5pZCwgZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0PlxuICAgICAgYCl9XG4gICAgYFxuICB9XG5cbiAgX3JlbmRlckFzc2V0UHJldmlldyhkYXRhKSB7XG4gICAgbGV0IGFzc2V0VHlwZSA9IHRoaXMuX2dldEFzc2V0VHlwZShkYXRhKTtcblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3BlcnNvbicpIHtcbiAgICAgIGxldCBwZXJzb24gPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVyc29uKGRhdGEpO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBgXG5cbiAgfVxuXG4gIF9nZXRBc3NldFR5cGUoZGF0YSkge1xuICAgIGlmICghZGF0YVsnQHR5cGUnXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGFbJ0B0eXBlJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhWydAdHlwZSddID0gW2RhdGFbJ0B0eXBlJ11dO1xuICAgIH1cbiAgICBpZiAoICFBcnJheS5pc0FycmF5KGRhdGFbJ0B0eXBlJ10pICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgICAgcmV0dXJuIFwicGVyc29uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnBnUGVyKTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT1cIiR7bWF4UGFnZX1cIlxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtcGFnZT1cIiR7dGhpcy5wZ0N1cnJlbnR9XCJcbiAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1wYWdlPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcInBhZ2luYXRpb25cIiwgZS50YXJnZXQuY3VycmVudFBhZ2UpfVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zXCJcbiAgICA+PC9ycC1wYWdpbmF0aW9uPlxuICAgIGBcbiAgfVxuXG4gIF91cmxFbmNvZGUob2JqKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGZvciAobGV0IHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgICAgfVxuICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==