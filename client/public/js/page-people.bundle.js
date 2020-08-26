(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-people"],{

/***/ "./public/elements/pages/people/rp-page-people.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPagePeople; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-people.tpl.js */ "./public/elements/pages/people/rp-page-people.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");









class RpPagePeople extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
      facetStatus: {type: String},
      facets: {type: Array}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.facetStatus = 'loading';
    this.facets = [];

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets()]);

  }

  async _getFacets() {
    let activeFilters = {};
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.facetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    this.facets = [];
    console.log("peopleaggs", peopleAggs);
    console.log("look here", this.CollectionModel._getSubFacets('people', peopleAggs.payload, this.currentQuery));

    // Format people types
    let facetName = "@type";
    let activeFilterValue = "";
    let activeFilterIndex = 0;
    let peopleTypes = [{label: 'All',
                        count: peopleAggs.payload.total, text: `All (${peopleAggs.payload.total})`}];
    let t = peopleAggs.payload.aggregations.facets[facetName];
    let prefix = 'vivo:';
    let i = 1;
    if (activeFilters && activeFilters[facetName]) {
      activeFilterValue = JSON.stringify(activeFilters[facetName].value);
    }
    for (let key in t) {
      if (key.startsWith(prefix)) {
        let label = this.CollectionModel._formatAgg(key, prefix);
        let filters = {type: "keyword", op: 'and', value: [key]};
        if (activeFilterValue == JSON.stringify(filters.value) ) {
          activeFilterIndex = i;
        }
        peopleTypes.push({label: label,
                          count: t[key],
                          text: `${label} (${t[key]})`,
                          filters: {"@type": filters},
                          name: key});
        i++;
      }
    }
    this.facets.push({values: peopleTypes,
                      activeIndex: activeFilterIndex,
                      id: facetName})

    console.log('facets:', this.facets);
  }

}

customElements.define('rp-page-people', RpPagePeople);


/***/ }),

/***/ "./public/elements/pages/people/rp-page-people.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.tpl.js ***!
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
<div class="collections container bg-light top">
  ${this._renderBrowseHeader('People')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets(this.facets)}
    </div>
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading people.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          ${this._renderAssetPreview(person)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUVvQjs7QUFFaEM7QUFDUTs7O0FBR3pCLDJCQUEyQixrRUFBaUI7O0FBRTNEO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHVFQUF1RSx5QkFBeUIsR0FBRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsbUNBQW1DLE1BQU0sSUFBSSxPQUFPO0FBQ3BELG9DQUFvQyxpQkFBaUI7QUFDckQsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRTVCO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFD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REFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUksR0FBRyxvQkFBb0IsZ0RBQUk7QUFDMUM7QUFDQSw4QkFBOEIsYUFBYTtBQUMzQyxvQ0FBb0Msa0JBQWtCO0FBQ3RELHFDQUFxQyxtRkFBbUY7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLGdCQUFnQiwyQkFBMkI7QUFDM0MsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGdEQUFJOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2YsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGVBQWU7QUFDbEQsb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6InBhZ2UtcGVvcGxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtcGVvcGxlLnRwbC5qc1wiXG5cbmltcG9ydCBScFV0aWxzQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VQZW9wbGUgZXh0ZW5kcyBScFV0aWxzQ29sbGVjdGlvbiB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmYWNldFN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmYWNldHM6IHt0eXBlOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmZhY2V0U3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZmFjZXRzID0gW107XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICB0aGlzLl9wYXJzZVVybFF1ZXJ5KHN0YXRlKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkoKSwgdGhpcy5fZ2V0RmFjZXRzKCldKTtcblxuICB9XG5cbiAgYXN5bmMgX2dldEZhY2V0cygpIHtcbiAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHt9O1xuICAgIGxldCBwZW9wbGVBZ2dzID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoJ3Blb3BsZUFnZ3MnKTtcbiAgICB0aGlzLmZhY2V0U3RhdHVzID0gcGVvcGxlQWdncy5zdGF0ZTtcbiAgICBpZiAocGVvcGxlQWdncy5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhY2V0cyA9IFtdO1xuICAgIGNvbnNvbGUubG9nKFwicGVvcGxlYWdnc1wiLCBwZW9wbGVBZ2dzKTtcbiAgICBjb25zb2xlLmxvZyhcImxvb2sgaGVyZVwiLCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKCdwZW9wbGUnLCBwZW9wbGVBZ2dzLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KSk7XG5cbiAgICAvLyBGb3JtYXQgcGVvcGxlIHR5cGVzXG4gICAgbGV0IGZhY2V0TmFtZSA9IFwiQHR5cGVcIjtcbiAgICBsZXQgYWN0aXZlRmlsdGVyVmFsdWUgPSBcIlwiO1xuICAgIGxldCBhY3RpdmVGaWx0ZXJJbmRleCA9IDA7XG4gICAgbGV0IHBlb3BsZVR5cGVzID0gW3tsYWJlbDogJ0FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcGVvcGxlQWdncy5wYXlsb2FkLnRvdGFsLCB0ZXh0OiBgQWxsICgke3Blb3BsZUFnZ3MucGF5bG9hZC50b3RhbH0pYH1dO1xuICAgIGxldCB0ID0gcGVvcGxlQWdncy5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbZmFjZXROYW1lXTtcbiAgICBsZXQgcHJlZml4ID0gJ3Zpdm86JztcbiAgICBsZXQgaSA9IDE7XG4gICAgaWYgKGFjdGl2ZUZpbHRlcnMgJiYgYWN0aXZlRmlsdGVyc1tmYWNldE5hbWVdKSB7XG4gICAgICBhY3RpdmVGaWx0ZXJWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGFjdGl2ZUZpbHRlcnNbZmFjZXROYW1lXS52YWx1ZSk7XG4gICAgfVxuICAgIGZvciAobGV0IGtleSBpbiB0KSB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0QWdnKGtleSwgcHJlZml4KTtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB7dHlwZTogXCJrZXl3b3JkXCIsIG9wOiAnYW5kJywgdmFsdWU6IFtrZXldfTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpbHRlclZhbHVlID09IEpTT04uc3RyaW5naWZ5KGZpbHRlcnMudmFsdWUpICkge1xuICAgICAgICAgIGFjdGl2ZUZpbHRlckluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICBwZW9wbGVUeXBlcy5wdXNoKHtsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB0W2tleV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2xhYmVsfSAoJHt0W2tleV19KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcIkB0eXBlXCI6IGZpbHRlcnN9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXl9KTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZhY2V0cy5wdXNoKHt2YWx1ZXM6IHBlb3BsZVR5cGVzLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVGaWx0ZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogZmFjZXROYW1lfSlcblxuICAgIGNvbnNvbGUubG9nKCdmYWNldHM6JywgdGhpcy5mYWNldHMpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLXBlb3BsZScsIFJwUGFnZVBlb3BsZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29sbGVjdGlvbnMgY29udGFpbmVyIGJnLWxpZ2h0IHRvcFwiPlxuICAke3RoaXMuX3JlbmRlckJyb3dzZUhlYWRlcignUGVvcGxlJyl9XG4gIDxociBjbGFzcz1cIm1iLTBcIj5cbiAgPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzIG10LTNcIj5cbiAgICAgICR7dGhpcy5fcmVuZGVyRmFjZXRzKHRoaXMuZmFjZXRzKX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgcGVvcGxlLjwvcnAtYWxlcnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAgICR7dGhpcy5kYXRhLm1hcChwZXJzb24gPT4gaHRtbGBcbiAgICAgICAgICAke3RoaXMuX3JlbmRlckFzc2V0UHJldmlldyhwZXJzb24pfVxuICAgICAgICAgIDxociBjbGFzcz1cImRvdHRlZFwiPlxuICAgICAgICAgIGApfVxuICAgICAgICAke3RoaXMuX3JlbmRlclBhZ2luYXRpb24odGhpcy5kYXRhVG90YWwpfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuYDt9XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2EtelwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwVXRpbHNDb2xsZWN0aW9uIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbiAgLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNBejoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgaGFzUGFnaW5hdGlvbjoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgYXpTZWxlY3RlZDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBhekRpc2FibGVkOiB7dHlwZTogQXJyYXl9LFxuICAgICAgdXJsUXVlcnk6IHt0eXBlOiBPYmplY3R9LFxuICAgICAganNvbmxkQ29udGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZW9wbGVXaWR0aDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBjdXJyZW50UXVlcnk6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgbWFpbkZhY2V0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBnUGVyOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHBnQ3VycmVudDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB0ZXh0UXVlcnk6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YUZpbHRlcnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhVG90YWw6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWFpbkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy51cmxRdWVyeSA9IHt9O1xuICAgIHRoaXMuanNvbmxkQ29udGV4dCA9IEFQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0O1xuXG4gICAgdGhpcy5fcmVzZXRRdWVyeVByb3BlcnRpZXMoKTtcblxuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIC8vdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCl7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0ge307XG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuICAgIHRoaXMubWFpbkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMudGV4dFF1ZXJ5ID0gXCJcIjtcbiAgICB0aGlzLmRhdGFGaWx0ZXJzID0gW107XG4gICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgdGhpcy5kb1VwZGF0ZWQocHJvcHMpO1xuICB9XG5cbiAgZG9VcGRhdGVkKHByb3BzKXtcbiAgICBpZiAocHJvcHMuaGFzKCd2aXNpYmxlJykgJiYgdGhpcy52aXNpYmxlICkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl9oYW5kbGVSZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBhc3luYyBfZG9NYWluUXVlcnkoKXtcbiAgICBsZXQgcSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwucXVlcnkocSk7XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGEucGF5bG9hZC50b3RhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IGRhdGEucGF5bG9hZC50b3RhbDtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhLnBheWxvYWQucmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyhcIm1haW4gcXVlcnkgcmVzdWx0OlwiLCBkYXRhKTtcbiAgfVxuXG4gIF9wYXJzZVVybFF1ZXJ5KHN0YXRlKXtcblxuICAgIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgc3RhdGUgPSB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YTtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBzdGF0ZS5sb2NhdGlvbi5wYXRoO1xuICAgIGxldCBxdWVyeSA9IHN0YXRlLmxvY2F0aW9uLnF1ZXJ5O1xuXG4gICAgLy8gc3RhcnQgZnJlc2hcbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgLy8gZ2V0IHByaW1hcnkgZmFjZXQgb2YgcXVlcnlcbiAgICBpZiAocGF0aC5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFpbkZhY2V0ID0gJ25vbmUnO1xuICAgIGxldCBmYWNldEZyb21QYXRoID0gXCJcIjtcbiAgICBpZiAocGF0aFswXSA9PSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhY2V0RnJvbVBhdGggPSBwYXRoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICBpZiAoZmFjZXRGcm9tUGF0aCA9PSBmLmlkLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0ID0gZmFjZXRGcm9tUGF0aDtcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKGYuYmFzZUZpbHRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFueSBxdWVyeSBhcmd1bWVudHNcbiAgICBmb3IgKGxldCBhcmcgaW4gcXVlcnkpIHtcbiAgICAgIGlmIChhcmcgPT0gJ3MnKSB7XG4gICAgICAgIHRoaXMudGV4dFF1ZXJ5ID0gcXVlcnkucztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAnZmlsdGVycycpIHtcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKCBKU09OLnBhcnNlKHF1ZXJ5W2FyZ10pICk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmcgPT0gJ3BhZ2UnKSB7XG4gICAgICAgIHRoaXMucGdDdXJyZW50ID0gcXVlcnlbYXJnXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHRoaXMuX2NvbnN0cnVjdFF1ZXJ5KCk7XG4gICAgY29uc29sZS5sb2coICdlbGVtZW50IHF1ZXJ5OicsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICB9XG5cbiAgX2NvbnN0cnVjdFF1ZXJ5KCl7XG4gICAgbGV0IHEgPSB7fTtcbiAgICBpZiAodGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHEucyA9IHRoaXMudGV4dFF1ZXJ5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBnQ3VycmVudCkge1xuICAgICAgcS5wZ0N1cnJlbnQgPSB0aGlzLnBnQ3VycmVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGdQZXIpIHtcbiAgICAgIHEucGdQZXIgPSB0aGlzLnBnUGVyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFGaWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB0aGlzLmRhdGFGaWx0ZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYWluRmFjZXQgJiYgdGhpcy5tYWluRmFjZXQgIT0gJ25vbmUnKSB7XG4gICAgICBxLm1haW5GYWNldCA9IHRoaXMubWFpbkZhY2V0O1xuICAgIH1cblxuICAgIHJldHVybiBxO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxuICBfb25Vc2VyQWN0aW9uKGFjdGlvbiwgLi4uYXJncykge1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBxID0gey4uLnRoaXMuY3VycmVudFF1ZXJ5fTtcbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHEucGdDdXJyZW50ID0gYXJnc1swXVxuICAgIH1cbiAgICBsZXQgcGF0aCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmNvbnN0cnVjdFVybChxKTtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocGF0aCk7XG5cbiAgICAvKlxuICAgIGxldCBxID0gey4uLnRoaXMudXJsUXVlcnl9O1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHEucyAmJiBxLmZpbHRlcnNbXCJAdHlwZVwiXSkge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHEpO1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBhY3Rpb246XCIsIGFjdGlvbik7XG5cbiAgICAvLyBoYW5kbGUgYXpcbiAgICBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvblxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBhcmdzWzBdO1xuICAgICAgcS5vZmZzZXQgPSB0aGlzLnBnQ3VycmVudCAqIHRoaXMudXJsUXVlcnkubGltaXQgLSB0aGlzLnVybFF1ZXJ5LmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBmYWNldHNcbiAgICBpZiAoYWN0aW9uLnN0YXJ0c1dpdGgoJ2ZhY2V0XycpKSB7XG4gICAgICBpZiAoYXJnc1swXS5maWx0ZXJzKSB7XG4gICAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLmFyZ3NbMF0uZmlsdGVyc31cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZiA9IGFjdGlvbi5zbGljZSgnZmFjZXRfJy5sZW5ndGgsICk7XG4gICAgICAgIGlmIChxLmZpbHRlcnNbZl0pIHtcbiAgICAgICAgICBkZWxldGUgcS5maWx0ZXJzW2ZdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyB1cmwgYW5kIHJlZGlyZWN0XG4gICAgbGV0IHAgPSBcIlwiO1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIHAgPSBcIi9cIiArIHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnBhdGguam9pbihcIi9cIilcbiAgICB9XG5cbiAgICBwID0gcCArIHRoaXMuX3VybEVuY29kZShxKVxuICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgLy9yZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHApO1xuICAgICovXG4gIH1cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkLWxldHRlcnM9XCIke3RoaXMuYXpEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIil9PjwvcnAtYS16PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoZmFjZXRzKSB7XG4gICAgaWYgKCFmYWNldHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYCR7ZmFjZXRzLm1hcChmYWNldCA9PiBodG1sYFxuICAgICAgPHJwLWxpbmstbGlzdCBoYXMtaGVhZGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzPScke2ZhY2V0LnZhbHVlc30nXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz0nJHtmYWNldC5hY3RpdmVJbmRleH0nXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKCdmYWNldF8nICsgZmFjZXQuaWQsIGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdD5cbiAgICAgIGApfVxuICAgIGBcbiAgfVxuXG4gIF9yZW5kZXJBc3NldFByZXZpZXcoZGF0YSkge1xuICAgIGxldCBhc3NldFR5cGUgPSB0aGlzLl9nZXRBc3NldFR5cGUoZGF0YSk7XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICdwZXJzb24nKSB7XG4gICAgICBsZXQgcGVyc29uID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdFBlcnNvbihkYXRhKTtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICB0ZXh0LXdpZHRoPVwiJHt0aGlzLnBlb3BsZVdpZHRofVwiXG4gICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgYFxuXG4gIH1cblxuICBfZ2V0QXNzZXRUeXBlKGRhdGEpIHtcbiAgICBpZiAoIWRhdGFbJ0B0eXBlJ10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhWydAdHlwZSddID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVsnQHR5cGUnXSA9IFtkYXRhWydAdHlwZSddXTtcbiAgICB9XG4gICAgaWYgKCAhQXJyYXkuaXNBcnJheShkYXRhWydAdHlwZSddKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICAgIHJldHVybiBcInBlcnNvblwiO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgX3JlbmRlclBhZ2luYXRpb24odG90YWxSZXN1bHRzKSB7XG4gICAgaWYgKCF0b3RhbFJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IHRydWU7XG4gICAgbGV0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxSZXN1bHRzIC8gdGhpcy5wZ1Blcik7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cblxuICBfdXJsRW5jb2RlKG9iaikge1xuICAgIGxldCBzdHIgPSBbXTtcbiAgICBmb3IgKGxldCBwIGluIG9iailcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgaWYgKHAgPT0gJ29mZnNldCcgJiYgb2JqW3BdID09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocCA9PSAnZmlsdGVycycgJiYgT2JqZWN0LmtleXMob2JqW3BdKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdsaW1pdCcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkob2JqW3BdKSApKTtcbiAgICAgIH1cbiAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIHN0ci5qb2luKFwiJlwiKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdXRpbHMtY29sbGVjdGlvbicsIFJwVXRpbHNDb2xsZWN0aW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=