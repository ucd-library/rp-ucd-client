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
    q.mainFacet = this.mainFacet;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3JwLXBhZ2Utc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcnAtcGFnZS1zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7O0FBRW9COztBQUVoQztBQUNJO0FBQ0M7OztBQUd0QiwyQkFBMkIsa0VBQWlCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0Esa0JBQWtCLG9EQUFvRCxtQ0FBbUMsRUFBRTtBQUMzRztBQUNBLDBCQUEwQixLQUFLLEtBQUssbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUTs7QUFFNUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBTTtBQUNWO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BELDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQTJEO0FB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QUFrQjtBQUN0RCxxQ0FBcUMsbUZBQW1GO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixnQkFBZ0IsMkJBQTJCO0FBQzNDLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSTtBQUNmLCtCQUErQixRQUFRO0FBQ3ZDLG1DQUFtQyxlQUFlO0FBQ2xELG9DQUFvQyw0REFBNEQ7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwYWdlLXNlYXJjaC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLXNlYXJjaC50cGwuanNcIlxuXG5pbXBvcnQgUnBVdGlsc0NvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3JwLXV0aWxzLWNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZVNlYXJjaCBleHRlbmRzIFJwVXRpbHNDb2xsZWN0aW9uIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIHRoaXMuZG9VcGRhdGVkKHByb3BzKTtcblxuICAgIC8vIHNldCBwcmltYXJ5IGZhY2V0XG4gICAgaWYgKHByb3BzLmhhcygnbWFpbkZhY2V0JykgJiYgdGhpcy5tYWluRmFjZXQgIT0gJ25vbmUnKSB7XG4gICAgICBsZXQgaXNSZWNvZ25pemVkRmFjZXQgPSBmYWxzZTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgaWYgKG9wdGlvbi5pZC50b0xvd2VyQ2FzZSgpID09IHRoaXMubWFpbkZhY2V0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNSZWNvZ25pemVkRmFjZXQgPSB0cnVlXG4gICAgICAgICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNSZWNvZ25pemVkRmFjZXQpIHtcbiAgICAgICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0SW5kZXggPSAwO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICB0aGlzLl9wYXJzZVVybFF1ZXJ5KHN0YXRlKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkoKV0pO1xuXG4gIH1cblxuXG4gIGdldE1haW5GYWNldExpbmtzKCl7XG4gICAgbGV0IGxpbmtzID0gW3tpZDogJ25vbmUnLCB0ZXh0OiAnQWxsIFJlc3VsdHMnLCBocmVmOiBgL3NlYXJjaD9zPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudGV4dFF1ZXJ5KX1gfV1cbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgIGYuaHJlZiA9IGAvc2VhcmNoLyR7Zi5pZH0/cz0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnRleHRRdWVyeSl9YFxuICAgICAgbGlua3MucHVzaChmKVxuICAgIH1cbiAgICByZXR1cm4gbGlua3NcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1zZWFyY2gnLCBScFBhZ2VTZWFyY2gpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cInNlYXJjaC1oZWFkZXIgY29udGFpbmVyIGJnLWxpZ2h0IHRvcFwiPlxuICA8ZGl2IGNsYXNzPVwicHgtNSBweS0zXCI+PGgxPlNlYXJjaCByZXN1bHRzIGZvciBcIiR7dGhpcy50ZXh0UXVlcnl9XCI8L2gxPjwvZGl2PlxuICA8aHI+XG4gIDxycC1saW5rLWxpc3QgY2xhc3M9XCJiZy1saWdodCBwLTNcIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz1cIiR7dGhpcy5tYWluRmFjZXRJbmRleH1cIlxuICAgICAgICAgICAgICAgIC5saW5rcz1cIiR7dGhpcy5nZXRNYWluRmFjZXRMaW5rcygpfVwiPlxuICA8L3JwLWxpbmstbGlzdD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInNlYXJjaCBjb250YWluZXIgYmctbGlnaHQgbXQtMyBwYi0zXCI+XG48ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzIG10LTNcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHNlYXJjaCByZXN1bHRzLjwvcnAtYWxlcnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICR7dGhpcy5kYXRhLm1hcChzZWFyY2hSZXN1bHQgPT4gaHRtbGBcbiAgICAgICAgJHt0aGlzLl9yZW5kZXJBc3NldFByZXZpZXcoc2VhcmNoUmVzdWx0KX1cbiAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgIGApfVxuICAgICAgJHt0aGlzLl9yZW5kZXJQYWdpbmF0aW9uKHRoaXMuZGF0YVRvdGFsKX1cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9hLXpcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHVybFF1ZXJ5OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGpzb25sZENvbnRleHQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGVvcGxlV2lkdGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59LFxuICAgICAgY3VycmVudFF1ZXJ5OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIG1haW5GYWNldDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZ1Blcjoge3R5cGU6IE51bWJlcn0sXG4gICAgICBwZ0N1cnJlbnQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgdGV4dFF1ZXJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGFGaWx0ZXJzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YToge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YVRvdGFsOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIG1haW5GYWNldEluZGV4OiB7dHlwZTogTnVtYmVyfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5oYXNBeiA9IGZhbHNlO1xuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuYXpTZWxlY3RlZCA9ICdBbGwnO1xuICAgIHRoaXMuYXpEaXNhYmxlZCA9IFtdO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcblxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAvL3RoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIF9yZXNldFF1ZXJ5UHJvcGVydGllcygpe1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHt9O1xuICAgIHRoaXMucGdQZXIgPSA4O1xuICAgIHRoaXMucGdDdXJyZW50ID0gMTtcbiAgICB0aGlzLm1haW5GYWNldCA9ICdub25lJztcbiAgICB0aGlzLnRleHRRdWVyeSA9IFwiXCI7XG4gICAgdGhpcy5kYXRhRmlsdGVycyA9IFtdO1xuICAgIHRoaXMubWFpbkZhY2V0SW5kZXggPSAwO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIHRoaXMuZG9VcGRhdGVkKHByb3BzKTtcbiAgfVxuXG4gIGRvVXBkYXRlZChwcm9wcyl7XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX2RvTWFpblF1ZXJ5KCl7XG4gICAgbGV0IHEgPSB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLnF1ZXJ5KHEpO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhLnBheWxvYWQudG90YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coXCJtYWluIHF1ZXJ5IHJlc3VsdDpcIiwgZGF0YSk7XG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeShzdGF0ZSl7XG5cbiAgICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHN0YXRlID0gdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGE7XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBsZXQgcXVlcnkgPSBzdGF0ZS5sb2NhdGlvbi5xdWVyeTtcblxuICAgIC8vIHN0YXJ0IGZyZXNoXG4gICAgdGhpcy5fcmVzZXRRdWVyeVByb3BlcnRpZXMoKTtcblxuICAgIC8vIGdldCBwcmltYXJ5IGZhY2V0IG9mIHF1ZXJ5XG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm1haW5GYWNldCA9ICdub25lJztcbiAgICBsZXQgZmFjZXRGcm9tUGF0aCA9IFwiXCI7XG4gICAgaWYgKHBhdGhbMF0gPT0gJ3NlYXJjaCcgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZhY2V0RnJvbVBhdGggPSBwYXRoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGYgb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgaWYgKGZhY2V0RnJvbVBhdGggPT0gZi5pZC50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgICB0aGlzLm1haW5GYWNldCA9IGZhY2V0RnJvbVBhdGg7XG4gICAgICAgIHRoaXMuZGF0YUZpbHRlcnMucHVzaChmLmJhc2VGaWx0ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBhbnkgcXVlcnkgYXJndW1lbnRzXG4gICAgZm9yIChsZXQgYXJnIGluIHF1ZXJ5KSB7XG4gICAgICBpZiAoYXJnID09ICdzJykge1xuICAgICAgICB0aGlzLnRleHRRdWVyeSA9IHF1ZXJ5LnM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmcgPT0gJ2ZpbHRlcnMnKSB7XG4gICAgICAgIHRoaXMuZGF0YUZpbHRlcnMucHVzaCggSlNPTi5wYXJzZShxdWVyeVthcmddKSApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdwYWdlJykge1xuICAgICAgICB0aGlzLnBnQ3VycmVudCA9IHF1ZXJ5W2FyZ107XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSB0aGlzLl9jb25zdHJ1Y3RRdWVyeSgpO1xuICAgIGNvbnNvbGUubG9nKCAnZWxlbWVudCBxdWVyeTonLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgfVxuXG4gIF9jb25zdHJ1Y3RRdWVyeSgpe1xuICAgIGxldCBxID0ge307XG4gICAgaWYgKHRoaXMudGV4dFF1ZXJ5KSB7XG4gICAgICBxLnMgPSB0aGlzLnRleHRRdWVyeTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wZ0N1cnJlbnQpIHtcbiAgICAgIHEucGdDdXJyZW50ID0gdGhpcy5wZ0N1cnJlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBnUGVyKSB7XG4gICAgICBxLnBnUGVyID0gdGhpcy5wZ1BlcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhRmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0gdGhpcy5kYXRhRmlsdGVycztcbiAgICB9XG5cbiAgICByZXR1cm4gcTtcbiAgfVxuXG4gIF9oYW5kbGVSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgodyk7XG4gIH1cblxuXG4gIHNldFBlb3BsZVdpZHRoKHcpIHtcbiAgICBsZXQgcHcgPSAyNTA7XG4gICAgbGV0IGF2YXRhcldpZHRoID0gODI7XG4gICAgbGV0IHNjcmVlblBhZGRpbmcgPSAzMDtcbiAgICBwdyA9ICh3IC0gc2NyZWVuUGFkZGluZykgKiAuNyAtIGF2YXRhcldpZHRoIC0gNDA7XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IE1hdGguZmxvb3IocHcpO1xuICB9XG5cbiAgX29uVXNlckFjdGlvbihhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcSA9IHsuLi50aGlzLmN1cnJlbnRRdWVyeX07XG4gICAgcS5tYWluRmFjZXQgPSB0aGlzLm1haW5GYWNldDtcbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHEucGdDdXJyZW50ID0gYXJnc1swXVxuICAgIH1cbiAgICBsZXQgcGF0aCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmNvbnN0cnVjdFVybChxKTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocGF0aCk7XG5cbiAgICAvKlxuICAgIGxldCBxID0gey4uLnRoaXMudXJsUXVlcnl9O1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHEucyAmJiBxLmZpbHRlcnNbXCJAdHlwZVwiXSkge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHEpO1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBhY3Rpb246XCIsIGFjdGlvbik7XG5cbiAgICAvLyBoYW5kbGUgYXpcbiAgICBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvblxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBhcmdzWzBdO1xuICAgICAgcS5vZmZzZXQgPSB0aGlzLnBnQ3VycmVudCAqIHRoaXMudXJsUXVlcnkubGltaXQgLSB0aGlzLnVybFF1ZXJ5LmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBmYWNldHNcbiAgICBpZiAoYWN0aW9uLnN0YXJ0c1dpdGgoJ2ZhY2V0XycpKSB7XG4gICAgICBpZiAoYXJnc1swXS5maWx0ZXJzKSB7XG4gICAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLmFyZ3NbMF0uZmlsdGVyc31cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZiA9IGFjdGlvbi5zbGljZSgnZmFjZXRfJy5sZW5ndGgsICk7XG4gICAgICAgIGlmIChxLmZpbHRlcnNbZl0pIHtcbiAgICAgICAgICBkZWxldGUgcS5maWx0ZXJzW2ZdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyB1cmwgYW5kIHJlZGlyZWN0XG4gICAgbGV0IHAgPSBcIlwiO1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIHAgPSBcIi9cIiArIHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnBhdGguam9pbihcIi9cIilcbiAgICB9XG5cbiAgICBwID0gcCArIHRoaXMuX3VybEVuY29kZShxKVxuICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgLy9yZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHApO1xuICAgICovXG4gIH1cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkLWxldHRlcnM9XCIke3RoaXMuYXpEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIil9PjwvcnAtYS16PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoZmFjZXRzKSB7XG4gICAgaWYgKCFmYWNldHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYCR7ZmFjZXRzLm1hcChmYWNldCA9PiBodG1sYFxuICAgICAgPHJwLWxpbmstbGlzdCBoYXMtaGVhZGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzPScke2ZhY2V0LnZhbHVlc30nXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz0nJHtmYWNldC5hY3RpdmVJbmRleH0nXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKCdmYWNldF8nICsgZmFjZXQuaWQsIGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdD5cbiAgICAgIGApfVxuICAgIGBcbiAgfVxuXG4gIF9yZW5kZXJBc3NldFByZXZpZXcoZGF0YSkge1xuICAgIGxldCBhc3NldFR5cGUgPSB0aGlzLl9nZXRBc3NldFR5cGUoZGF0YSk7XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICdwZXJzb24nKSB7XG4gICAgICBsZXQgcGVyc29uID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdFBlcnNvbihkYXRhKTtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICB0ZXh0LXdpZHRoPVwiJHt0aGlzLnBlb3BsZVdpZHRofVwiXG4gICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgYFxuXG4gIH1cblxuICBfZ2V0QXNzZXRUeXBlKGRhdGEpIHtcbiAgICBpZiAoIWRhdGFbJ0B0eXBlJ10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhWydAdHlwZSddID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVsnQHR5cGUnXSA9IFtkYXRhWydAdHlwZSddXTtcbiAgICB9XG4gICAgaWYgKCAhQXJyYXkuaXNBcnJheShkYXRhWydAdHlwZSddKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICAgIHJldHVybiBcInBlcnNvblwiO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgX3JlbmRlclBhZ2luYXRpb24odG90YWxSZXN1bHRzKSB7XG4gICAgaWYgKCF0b3RhbFJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IHRydWU7XG4gICAgbGV0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxSZXN1bHRzIC8gdGhpcy5wZ1Blcik7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cblxuICBfdXJsRW5jb2RlKG9iaikge1xuICAgIGxldCBzdHIgPSBbXTtcbiAgICBmb3IgKGxldCBwIGluIG9iailcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgaWYgKHAgPT0gJ29mZnNldCcgJiYgb2JqW3BdID09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocCA9PSAnZmlsdGVycycgJiYgT2JqZWN0LmtleXMob2JqW3BdKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdsaW1pdCcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkob2JqW3BdKSApKTtcbiAgICAgIH1cbiAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIHN0ci5qb2luKFwiJlwiKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdXRpbHMtY29sbGVjdGlvbicsIFJwVXRpbHNDb2xsZWN0aW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=