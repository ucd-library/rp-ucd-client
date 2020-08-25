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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUVvQjs7QUFFaEM7QUFDUTs7O0FBR3pCLDJCQUEyQixrRUFBaUI7O0FBRTNEO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsdUVBQXVFLHlCQUF5QixHQUFHO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxtQ0FBbUMsTUFBTSxJQUFJLE9BQU87QUFDcEQsb0NBQW9DLGlCQUFpQjtBQUNyRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUTs7QUFFNUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBTTtBQUNWO0FBQ0E7QUFD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LGdEQUFJLEdBQUcsb0JBQW9CLGdEQUFJO0FBQzFDO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0Msb0NBQW9DLGtCQUFrQjtBQUN0RCxxQ0FBcUMsbUZBQW1GO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixnQkFBZ0IsMkJBQTJCO0FBQzNDLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBSTtBQUNmLCtCQUErQixRQUFRO0FBQ3ZDLG1DQUFtQyxlQUFlO0FBQ2xELG9DQUFvQyw0REFBNEQ7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwYWdlLXBlb3BsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLXBlb3BsZS50cGwuanNcIlxuXG5pbXBvcnQgUnBVdGlsc0NvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3JwLXV0aWxzLWNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlUGVvcGxlIGV4dGVuZHMgUnBVdGlsc0NvbGxlY3Rpb24ge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZXRTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5mYWNldFN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmZhY2V0cyA9IFtdO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gICAgdGhpcy5fcGFyc2VVcmxRdWVyeShzdGF0ZSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KCksIHRoaXMuX2dldEZhY2V0cygpXSk7XG5cbiAgfVxuXG4gIGFzeW5jIF9nZXRGYWNldHMoKSB7XG4gICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB7fTtcbiAgICBsZXQgcGVvcGxlQWdncyA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdwZW9wbGVBZ2dzJyk7XG4gICAgdGhpcy5mYWNldFN0YXR1cyA9IHBlb3BsZUFnZ3Muc3RhdGU7XG4gICAgaWYgKHBlb3BsZUFnZ3Muc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWNldHMgPSBbXTtcblxuICAgIC8vIEZvcm1hdCBwZW9wbGUgdHlwZXNcbiAgICBsZXQgZmFjZXROYW1lID0gXCJAdHlwZVwiO1xuICAgIGxldCBhY3RpdmVGaWx0ZXJWYWx1ZSA9IFwiXCI7XG4gICAgbGV0IGFjdGl2ZUZpbHRlckluZGV4ID0gMDtcbiAgICBsZXQgcGVvcGxlVHlwZXMgPSBbe2xhYmVsOiAnQWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwZW9wbGVBZ2dzLnBheWxvYWQudG90YWwsIHRleHQ6IGBBbGwgKCR7cGVvcGxlQWdncy5wYXlsb2FkLnRvdGFsfSlgfV07XG4gICAgbGV0IHQgPSBwZW9wbGVBZ2dzLnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1tmYWNldE5hbWVdO1xuICAgIGxldCBwcmVmaXggPSAndml2bzonO1xuICAgIGxldCBpID0gMTtcbiAgICBpZiAoYWN0aXZlRmlsdGVycyAmJiBhY3RpdmVGaWx0ZXJzW2ZhY2V0TmFtZV0pIHtcbiAgICAgIGFjdGl2ZUZpbHRlclZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYWN0aXZlRmlsdGVyc1tmYWNldE5hbWVdLnZhbHVlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHQpIHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRBZ2coa2V5LCBwcmVmaXgpO1xuICAgICAgICBsZXQgZmlsdGVycyA9IHt0eXBlOiBcImtleXdvcmRcIiwgb3A6ICdhbmQnLCB2YWx1ZTogW2tleV19O1xuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyVmFsdWUgPT0gSlNPTi5zdHJpbmdpZnkoZmlsdGVycy52YWx1ZSkgKSB7XG4gICAgICAgICAgYWN0aXZlRmlsdGVySW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIHBlb3BsZVR5cGVzLnB1c2goe2xhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7bGFiZWx9ICgke3Rba2V5XX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyczoge1wiQHR5cGVcIjogZmlsdGVyc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleX0pO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmFjZXRzLnB1c2goe3ZhbHVlczogcGVvcGxlVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUZpbHRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBmYWNldE5hbWV9KVxuXG4gICAgY29uc29sZS5sb2coJ2ZhY2V0czonLCB0aGlzLmZhY2V0cyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtcGVvcGxlJywgUnBQYWdlUGVvcGxlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb2xsZWN0aW9ucyBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gICR7dGhpcy5fcmVuZGVyQnJvd3NlSGVhZGVyKCdQZW9wbGUnKX1cbiAgPGhyIGNsYXNzPVwibWItMFwiPlxuICA8ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJGYWNldHModGhpcy5mYWNldHMpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBwZW9wbGUuPC9ycC1hbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHt0aGlzLmRhdGEubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgICR7dGhpcy5fcmVuZGVyQXNzZXRQcmV2aWV3KHBlcnNvbil9XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBVdGlsc0NvbGxlY3Rpb24gZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0F6OiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBoYXNQYWdpbmF0aW9uOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBhelNlbGVjdGVkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF6RGlzYWJsZWQ6IHt0eXBlOiBBcnJheX0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBqc29ubGRDb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGN1cnJlbnRRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBtYWluRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgcGdQZXI6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHRleHRRdWVyeToge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhRmlsdGVyczoge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGE6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGFUb3RhbDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtYWluRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuaGFzQXogPSBmYWxzZTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmF6U2VsZWN0ZWQgPSAnQWxsJztcbiAgICB0aGlzLmF6RGlzYWJsZWQgPSBbXTtcbiAgICB0aGlzLnVybFF1ZXJ5ID0ge307XG4gICAgdGhpcy5qc29ubGRDb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgLy90aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICAgIHRoaXMuX2hhbmRsZVJlc2l6ZSA9IHRoaXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cblxuICBfcmVzZXRRdWVyeVByb3BlcnRpZXMoKXtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuXG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSB7fTtcbiAgICB0aGlzLnBnUGVyID0gODtcbiAgICB0aGlzLnBnQ3VycmVudCA9IDE7XG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy50ZXh0UXVlcnkgPSBcIlwiO1xuICAgIHRoaXMuZGF0YUZpbHRlcnMgPSBbXTtcbiAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gMDtcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YS5wYXlsb2FkLnRvdGFsID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKFwibWFpbiBxdWVyeSByZXN1bHQ6XCIsIGRhdGEpO1xuICB9XG5cbiAgX3BhcnNlVXJsUXVlcnkoc3RhdGUpe1xuXG4gICAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBzdGF0ZSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHN0YXRlLmxvY2F0aW9uLnBhdGg7XG4gICAgbGV0IHF1ZXJ5ID0gc3RhdGUubG9jYXRpb24ucXVlcnk7XG5cbiAgICAvLyBzdGFydCBmcmVzaFxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAvLyBnZXQgcHJpbWFyeSBmYWNldCBvZiBxdWVyeVxuICAgIGlmIChwYXRoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgbGV0IGZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFswXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgIGlmIChmYWNldEZyb21QYXRoID09IGYuaWQudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgICAgdGhpcy5tYWluRmFjZXQgPSBmYWNldEZyb21QYXRoO1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goZi5iYXNlRmlsdGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgYW55IHF1ZXJ5IGFyZ3VtZW50c1xuICAgIGZvciAobGV0IGFyZyBpbiBxdWVyeSkge1xuICAgICAgaWYgKGFyZyA9PSAncycpIHtcbiAgICAgICAgdGhpcy50ZXh0UXVlcnkgPSBxdWVyeS5zO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdmaWx0ZXJzJykge1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goIEpTT04ucGFyc2UocXVlcnlbYXJnXSkgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAncGFnZScpIHtcbiAgICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBxdWVyeVthcmddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gdGhpcy5fY29uc3RydWN0UXVlcnkoKTtcbiAgICBjb25zb2xlLmxvZyggJ2VsZW1lbnQgcXVlcnk6JywgdGhpcy5jdXJyZW50UXVlcnkpO1xuXG4gIH1cblxuICBfY29uc3RydWN0UXVlcnkoKXtcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSkge1xuICAgICAgcS5zID0gdGhpcy50ZXh0UXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGdDdXJyZW50KSB7XG4gICAgICBxLnBnQ3VycmVudCA9IHRoaXMucGdDdXJyZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZ1Blcikge1xuICAgICAgcS5wZ1BlciA9IHRoaXMucGdQZXI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YUZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHRoaXMuZGF0YUZpbHRlcnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHE7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDgyO1xuICAgIGxldCBzY3JlZW5QYWRkaW5nID0gMzA7XG4gICAgcHcgPSAodyAtIHNjcmVlblBhZGRpbmcpICogLjcgLSBhdmF0YXJXaWR0aCAtIDQwO1xuICAgIHRoaXMucGVvcGxlV2lkdGggPSBNYXRoLmZsb29yKHB3KTtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHEgPSB7Li4udGhpcy5jdXJyZW50UXVlcnl9O1xuICAgIHEubWFpbkZhY2V0ID0gdGhpcy5tYWluRmFjZXQ7XG4gICAgaWYgKGFjdGlvbiA9PSAncGFnaW5hdGlvbicgJiYgdGhpcy5oYXNQYWdpbmF0aW9uKSB7XG4gICAgICBxLnBnQ3VycmVudCA9IGFyZ3NbMF1cbiAgICB9XG4gICAgbGV0IHBhdGggPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5jb25zdHJ1Y3RVcmwocSk7XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHBhdGgpO1xuXG4gICAgLypcbiAgICBsZXQgcSA9IHsuLi50aGlzLnVybFF1ZXJ5fTtcbiAgICBpZiAoIXEuZmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGlmIChxLnMgJiYgcS5maWx0ZXJzW1wiQHR5cGVcIl0pIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhxKTtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWN0aW9uOlwiLCBhY3Rpb24pO1xuXG4gICAgLy8gaGFuZGxlIGF6XG4gICAgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb25cbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMucGdDdXJyZW50ID0gYXJnc1swXTtcbiAgICAgIHEub2Zmc2V0ID0gdGhpcy5wZ0N1cnJlbnQgKiB0aGlzLnVybFF1ZXJ5LmxpbWl0IC0gdGhpcy51cmxRdWVyeS5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgZmFjZXRzXG4gICAgaWYgKGFjdGlvbi5zdGFydHNXaXRoKCdmYWNldF8nKSkge1xuICAgICAgaWYgKGFyZ3NbMF0uZmlsdGVycykge1xuICAgICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5hcmdzWzBdLmZpbHRlcnN9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGYgPSBhY3Rpb24uc2xpY2UoJ2ZhY2V0XycubGVuZ3RoLCApO1xuICAgICAgICBpZiAocS5maWx0ZXJzW2ZdKSB7XG4gICAgICAgICAgZGVsZXRlIHEuZmlsdGVyc1tmXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdCBuZXcgdXJsIGFuZCByZWRpcmVjdFxuICAgIGxldCBwID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBwID0gXCIvXCIgKyB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5wYXRoLmpvaW4oXCIvXCIpXG4gICAgfVxuXG4gICAgcCA9IHAgKyB0aGlzLl91cmxFbmNvZGUocSlcbiAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgIC8vcmV0dXJuO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwKTtcbiAgICAqL1xuICB9XG5cbiAgX3JlbmRlckJyb3dzZUhlYWRlcih0aXRsZSwgQXpzZWxlY3RlZCkge1xuICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIGlmIChBenNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBBenNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgICAgPHJwLWEteiBzZWxlY3RlZC1sZXR0ZXI9XCIke3RoaXMuYXpTZWxlY3RlZH1cIlxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZC1sZXR0ZXJzPVwiJHt0aGlzLmF6RGlzYWJsZWR9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1sZXR0ZXI9JHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcImF6XCIpfT48L3JwLWEtej5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBfcmVuZGVyRmFjZXRzKGZhY2V0cykge1xuICAgIGlmICghZmFjZXRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGAke2ZhY2V0cy5tYXAoZmFjZXQgPT4gaHRtbGBcbiAgICAgIDxycC1saW5rLWxpc3QgaGFzLWhlYWRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgIC5saW5rcz0nJHtmYWNldC52YWx1ZXN9J1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9JyR7ZmFjZXQuYWN0aXZlSW5kZXh9J1xuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbignZmFjZXRfJyArIGZhY2V0LmlkLCBlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3Q+XG4gICAgICBgKX1cbiAgICBgXG4gIH1cblxuICBfcmVuZGVyQXNzZXRQcmV2aWV3KGRhdGEpIHtcbiAgICBsZXQgYXNzZXRUeXBlID0gdGhpcy5fZ2V0QXNzZXRUeXBlKGRhdGEpO1xuXG4gICAgaWYgKGFzc2V0VHlwZSA9PSAncGVyc29uJykge1xuICAgICAgbGV0IHBlcnNvbiA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRQZXJzb24oZGF0YSk7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICBuYW1lPVwiJHtwZXJzb24ubmFtZX1cIlxuICAgICAgICBocmVmPVwiJHtcIi9pbmRpdmlkdWFsL1wiICsgcGVyc29uLmlkfVwiXG4gICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgdGV4dC13aWR0aD1cIiR7dGhpcy5wZW9wbGVXaWR0aH1cIlxuICAgICAgICBjbGFzcz1cIm15LTNcIj5cbiAgICAgIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYGBcblxuICB9XG5cbiAgX2dldEFzc2V0VHlwZShkYXRhKSB7XG4gICAgaWYgKCFkYXRhWydAdHlwZSddKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVsnQHR5cGUnXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRhdGFbJ0B0eXBlJ10gPSBbZGF0YVsnQHR5cGUnXV07XG4gICAgfVxuICAgIGlmICggIUFycmF5LmlzQXJyYXkoZGF0YVsnQHR5cGUnXSkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRhdGFbJ0B0eXBlJ10uaW5jbHVkZXModGhpcy5qc29ubGRDb250ZXh0ICsgXCI6cGVyc29uXCIpKSB7XG4gICAgICByZXR1cm4gXCJwZXJzb25cIjtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIF9yZW5kZXJQYWdpbmF0aW9uKHRvdGFsUmVzdWx0cykge1xuICAgIGlmICghdG90YWxSZXN1bHRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSB0cnVlO1xuICAgIGxldCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsUmVzdWx0cyAvIHRoaXMucGdQZXIpO1xuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1wYWdpbmF0aW9uIG1heC1wYWdlPVwiJHttYXhQYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgY3VycmVudC1wYWdlPVwiJHt0aGlzLnBnQ3VycmVudH1cIlxuICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLXBhZ2U9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwicGFnaW5hdGlvblwiLCBlLnRhcmdldC5jdXJyZW50UGFnZSl9XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTNcIlxuICAgID48L3JwLXBhZ2luYXRpb24+XG4gICAgYFxuICB9XG5cbiAgX3VybEVuY29kZShvYmopIHtcbiAgICBsZXQgc3RyID0gW107XG4gICAgZm9yIChsZXQgcCBpbiBvYmopXG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIGlmIChwID09ICdvZmZzZXQnICYmIG9ialtwXSA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2ZpbHRlcnMnICYmIE9iamVjdC5rZXlzKG9ialtwXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocCA9PSAnbGltaXQnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KG9ialtwXSkgKSk7XG4gICAgICB9XG4gICAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgICByZXR1cm4gXCI/XCIgKyBzdHIuam9pbihcIiZcIik7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXV0aWxzLWNvbGxlY3Rpb24nLCBScFV0aWxzQ29sbGVjdGlvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9