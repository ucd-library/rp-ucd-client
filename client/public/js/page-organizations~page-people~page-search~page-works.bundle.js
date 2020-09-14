(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-organizations~page-people~page-search~page-works"],{

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
/* harmony import */ var _components_organization_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organization-preview */ "./public/elements/components/organization-preview.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/person-preview */ "./public/elements/components/person-preview.js");
/* harmony import */ var _components_work_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/work-preview */ "./public/elements/components/work-preview.js");









class RpUtilsCollection extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azStatus: {type: String},
      azDisabled: {type: Array},
      azOptions: {type: Set},
      urlQuery: {type: Object},
      jsonldContext: {type: String},
      peopleWidth: {type: Number},
      visible: {type: Boolean},
      currentQuery: {type: Object},
      mainFacet: {type: String},
      mainFacets: {type: Array},
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
    this.azOptions = new Set(['all', ...'abcdefghijklmnopqrstuvwxyz']);
    this.hasPagination = false;
    this.visible = false;
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
    this.dataFilters = [];

    this.pgPer = 8;
    this.pgCurrent = 1;

    this.mainFacet = 'none';
    this.mainFacets = [];
    this.mainFacetIndex = 0;

    this.subFacet = 'none';
    this.subFacetIndex = 0;
    this.subFacets = [];
    this.subFacetStatus = "loading";

    this.textQuery = "";

    this.hasAz = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.azStatus = 'loading';
    
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
    let facetAggDoneHere = false;
    if (this.textQuery && this.mainFacet == 'none' && this.subFacet == 'none') {
      this.subFacetStatus = data.state;
      facetAggDoneHere = true;
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

    if (facetAggDoneHere) {
      this.CollectionModel.store.setSearchAggsLoaded(this.textQuery, data.payload);
      this.mainFacets = this.CollectionModel._getMainFacets(data.payload, this.currentQuery);
      this.subFacets = this.CollectionModel._getSubFacets(this.mainFacet, data.payload, this.currentQuery);

    }
    else {
      this.hasAz = true;
    }
    this.data = data.payload.results;
    console.log("main query result:", data);
  }


  async _getSearchAggs() {
    if (!this.textQuery) {
      return;
    }
    if (this.mainFacet == 'none' && this.subFacet == 'none') {
      return; // agg retrieved by main query
    }
    let data = await this.CollectionModel.searchAggQuery(this.textQuery, this.mainFacet);
    this.subFacetStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.mainFacets = this.CollectionModel._getMainFacets(data.payload, this.currentQuery);
    this.subFacets = this.CollectionModel._getSubFacets(this.mainFacet, data.payload, this.currentQuery);

  }


  async _getAzAgg() {
    let data = await this.CollectionModel.azAggQuery(this.currentQuery.mainFacet, this.currentQuery.subFacet)
    this.azStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    let aggKey = this.CollectionModel.getAzBaseFilter(this.currentQuery.mainFacet);
    if (aggKey && aggKey.key) {
      this.azDisabled = [...this._setDifference(this.azOptions, Object.keys(data.payload.aggregations.facets[aggKey.key]))].filter(x => x != 'all');
    }
    else {
      this.azStatus = 'error';
    }
    console.log(`az for ${this.currentQuery.mainFacet}, ${this.currentQuery.subFacet}`, data);

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
        //this.dataFilters.push( JSON.parse(query[arg]) );
      }
      else if (arg == 'page' && !isNaN(query[arg])) {
        this.pgCurrent = query[arg];
      }
      else if (arg == 'az' && this.azOptions.has(query[arg]) ) {
        this.azSelected = query[arg];
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
    if (this.azSelected) {
      q.azSelected = this.azSelected;
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
    let path = ""
    let q = {...this.currentQuery};

    // handle page change
    if (action == 'pagination' && this.hasPagination) {
      q.pgCurrent = args[0]
      path = this.CollectionModel.constructUrl(q)
    }

    // handle az change
    else if (action == 'az') {
      q.azSelected = args[0]
      path = this.CollectionModel.constructUrl(q, ['page'])
    }

    if (path) this.AppStateModel.setLocation(path);
    

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

  _setDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
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
  if (data['@type'].includes(this.jsonldContext + ":publication")) {
    return "work";
  }
  if (data['@type'].includes(this.jsonldContext + ":organization")) {
    return "organization";
  }

  return;
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

/*
*
* RENDER FUNCTIONS
*
*/

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
      ${this.hasAz ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <rp-a-z selected-letter="${this.azSelected}"
                .disabledLetters="${this.azDisabled}"
                @changed-letter=${e => this._onUserAction("az", e.target.selectedLetter)}>
        </rp-a-z>
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}

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

    if (assetType == 'work') {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-work-preview .data="${data}" class="my-3"></rp-work-preview>
      `;
    }

    if (assetType == 'organization') {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-organization-preview .data="${data}" class="my-3"></rp-organization-preview>
      `;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``

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
}

customElements.define('rp-utils-collection', RpUtilsCollection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUVwQjtBQUNNO0FBQ1U7QUFDVDtBQUNHO0FBQ0Y7O0FBRXBCLHNDQUFzQyxzREFBVTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLHNCQUFzQixjQUFjO0FBQ3BDLG1CQUFtQixhQUFhO0FBQ2hDLGlCQUFpQixhQUFhO0FBQzlCLG1CQUFtQixZQUFZO0FBQy9CLGtCQUFrQixVQUFVO0FBQzVCLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixhQUFhO0FBQ25DLG9CQUFvQixhQUFhO0FBQ2pDLGdCQUFnQixjQUFjO0FBQzlCLHFCQUFxQixhQUFhO0FBQ2xDLGtCQUFrQixhQUFhO0FBQy9CLG1CQUFtQixZQUFZO0FBQy9CLGNBQWMsYUFBYTtBQUMzQixrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsWUFBWTtBQUNoQyxhQUFhLFlBQVk7QUFDekIsbUJBQW1CLGFBQWE7QUFDaEMsa0JBQWtCLGFBQWE7QUFDL0IsdUJBQXVCLGFBQWE7QUFDcEMsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGFBQWE7QUFDbkMsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEIsSUFBSSwyQkFBMkI7O0FBRXJGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxhQUFhLGdEQUFJO0FBQ3pCLG1DQUFtQyxnQkFBZ0I7QUFDbkQsb0NBQW9DLGdCQUFnQjtBQUNwRCxrQ0FBa0MsdURBQXVEO0FBQ3pGO0FBQ0EsVUFBVSxnREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUk7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0Isc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJLEdBQUcsb0JBQW9CLGdEQUFJO0FBQzFDO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0Msb0NBQW9DLGtCQUFrQjtBQUN0RCxxQ0FBcUMsbUZBQW1GO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixnQkFBZ0IsMkJBQTJCO0FBQzNDLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2YsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGVBQWU7QUFDbEQsb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2Utb3JnYW5pemF0aW9uc35wYWdlLXBlb3BsZX5wYWdlLXNlYXJjaH5wYWdlLXdvcmtzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9vcmdhbml6YXRpb24tcHJldmlld1wiXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy93b3JrLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIGF6T3B0aW9uczoge3R5cGU6IFNldH0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBqc29ubGRDb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGN1cnJlbnRRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBtYWluRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbWFpbkZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHBnQ3VycmVudDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB0ZXh0UXVlcnk6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YUZpbHRlcnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhVG90YWw6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWFpbkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3ViRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgc3ViRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBzdWJGYWNldFN0YXR1czoge3R5cGU6IFN0cmluZ31cblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5hek9wdGlvbnMgPSBuZXcgU2V0KFsnYWxsJywgLi4uJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J10pO1xuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcblxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCl7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0ge307XG4gICAgdGhpcy5kYXRhRmlsdGVycyA9IFtdO1xuXG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuXG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy5tYWluRmFjZXRzID0gW107XG4gICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG5cbiAgICB0aGlzLnN1YkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IDA7XG4gICAgdGhpcy5zdWJGYWNldHMgPSBbXTtcbiAgICB0aGlzLnN1YkZhY2V0U3RhdHVzID0gXCJsb2FkaW5nXCI7XG5cbiAgICB0aGlzLnRleHRRdWVyeSA9IFwiXCI7XG5cbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5helN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICBsZXQgZmFjZXRBZ2dEb25lSGVyZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSAmJiB0aGlzLm1haW5GYWNldCA9PSAnbm9uZScgJiYgdGhpcy5zdWJGYWNldCA9PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgICAgZmFjZXRBZ2dEb25lSGVyZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhLnBheWxvYWQudG90YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgfVxuXG4gICAgaWYgKGZhY2V0QWdnRG9uZUhlcmUpIHtcbiAgICAgIHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN0b3JlLnNldFNlYXJjaEFnZ3NMb2FkZWQodGhpcy50ZXh0UXVlcnksIGRhdGEucGF5bG9hZCk7XG4gICAgICB0aGlzLm1haW5GYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0TWFpbkZhY2V0cyhkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cyh0aGlzLm1haW5GYWNldCwgZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coXCJtYWluIHF1ZXJ5IHJlc3VsdDpcIiwgZGF0YSk7XG4gIH1cblxuXG4gIGFzeW5jIF9nZXRTZWFyY2hBZ2dzKCkge1xuICAgIGlmICghdGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ID09ICdub25lJyAmJiB0aGlzLnN1YkZhY2V0ID09ICdub25lJykge1xuICAgICAgcmV0dXJuOyAvLyBhZ2cgcmV0cmlldmVkIGJ5IG1haW4gcXVlcnlcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zZWFyY2hBZ2dRdWVyeSh0aGlzLnRleHRRdWVyeSwgdGhpcy5tYWluRmFjZXQpO1xuICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWFpbkZhY2V0cyA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9nZXRNYWluRmFjZXRzKGRhdGEucGF5bG9hZCwgdGhpcy5jdXJyZW50UXVlcnkpO1xuICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cyh0aGlzLm1haW5GYWNldCwgZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgfVxuXG5cbiAgYXN5bmMgX2dldEF6QWdnKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwuYXpBZ2dRdWVyeSh0aGlzLmN1cnJlbnRRdWVyeS5tYWluRmFjZXQsIHRoaXMuY3VycmVudFF1ZXJ5LnN1YkZhY2V0KVxuICAgIHRoaXMuYXpTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhZ2dLZXkgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5nZXRBekJhc2VGaWx0ZXIodGhpcy5jdXJyZW50UXVlcnkubWFpbkZhY2V0KTtcbiAgICBpZiAoYWdnS2V5ICYmIGFnZ0tleS5rZXkpIHtcbiAgICAgIHRoaXMuYXpEaXNhYmxlZCA9IFsuLi50aGlzLl9zZXREaWZmZXJlbmNlKHRoaXMuYXpPcHRpb25zLCBPYmplY3Qua2V5cyhkYXRhLnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1thZ2dLZXkua2V5XSkpXS5maWx0ZXIoeCA9PiB4ICE9ICdhbGwnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF6U3RhdHVzID0gJ2Vycm9yJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coYGF6IGZvciAke3RoaXMuY3VycmVudFF1ZXJ5Lm1haW5GYWNldH0sICR7dGhpcy5jdXJyZW50UXVlcnkuc3ViRmFjZXR9YCwgZGF0YSk7XG5cbiAgfVxuXG4gIF9wYXJzZVVybFF1ZXJ5KHN0YXRlKXtcblxuICAgIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgc3RhdGUgPSB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YTtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBzdGF0ZS5sb2NhdGlvbi5wYXRoO1xuICAgIGxldCBxdWVyeSA9IHN0YXRlLmxvY2F0aW9uLnF1ZXJ5O1xuXG4gICAgLy8gc3RhcnQgZnJlc2hcbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgLy8gZ2V0IHByaW1hcnkgZmFjZXQgb2YgcXVlcnlcbiAgICBpZiAocGF0aC5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFswXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgIGlmIChmYWNldEZyb21QYXRoID09IGYuaWQudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgICAgdGhpcy5tYWluRmFjZXQgPSBmYWNldEZyb21QYXRoO1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goZi5iYXNlRmlsdGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN1YkZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMikge1xuICAgICAgc3ViRmFjZXRGcm9tUGF0aCA9IHBhdGhbMl0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aFswXSAhPSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIHN1YkZhY2V0RnJvbVBhdGggPSBwYXRoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zdWJGYWNldHNbdGhpcy5tYWluRmFjZXRdKSB7XG4gICAgICBsZXQgaSA9IDE7XG4gICAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN1YkZhY2V0c1t0aGlzLm1haW5GYWNldF0pIHtcbiAgICAgICAgaWYgKGYuaWQgPT0gc3ViRmFjZXRGcm9tUGF0aCkge1xuICAgICAgICAgIHRoaXMuc3ViRmFjZXQgPSBzdWJGYWNldEZyb21QYXRoO1xuICAgICAgICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IGk7XG4gICAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKGYuYmFzZUZpbHRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgLy8gZ2V0IGFueSBxdWVyeSBhcmd1bWVudHNcbiAgICBmb3IgKGxldCBhcmcgaW4gcXVlcnkpIHtcbiAgICAgIGlmIChhcmcgPT0gJ3MnKSB7XG4gICAgICAgIHRoaXMudGV4dFF1ZXJ5ID0gcXVlcnkucztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAnZmlsdGVycycpIHtcbiAgICAgICAgLy90aGlzLmRhdGFGaWx0ZXJzLnB1c2goIEpTT04ucGFyc2UocXVlcnlbYXJnXSkgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAncGFnZScgJiYgIWlzTmFOKHF1ZXJ5W2FyZ10pKSB7XG4gICAgICAgIHRoaXMucGdDdXJyZW50ID0gcXVlcnlbYXJnXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAnYXonICYmIHRoaXMuYXpPcHRpb25zLmhhcyhxdWVyeVthcmddKSApIHtcbiAgICAgICAgdGhpcy5helNlbGVjdGVkID0gcXVlcnlbYXJnXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHRoaXMuX2NvbnN0cnVjdFF1ZXJ5KCk7XG4gICAgY29uc29sZS5sb2coICdlbGVtZW50IHF1ZXJ5OicsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICB9XG5cbiAgX2NvbnN0cnVjdFF1ZXJ5KCl7XG4gICAgbGV0IHEgPSB7fTtcbiAgICBpZiAodGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHEudGV4dFF1ZXJ5ID0gdGhpcy50ZXh0UXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGdDdXJyZW50KSB7XG4gICAgICBxLnBnQ3VycmVudCA9IHRoaXMucGdDdXJyZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZ1Blcikge1xuICAgICAgcS5wZ1BlciA9IHRoaXMucGdQZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmF6U2VsZWN0ZWQpIHtcbiAgICAgIHEuYXpTZWxlY3RlZCA9IHRoaXMuYXpTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhRmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0gdGhpcy5kYXRhRmlsdGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ICYmIHRoaXMubWFpbkZhY2V0ICE9ICdub25lJykge1xuICAgICAgcS5tYWluRmFjZXQgPSB0aGlzLm1haW5GYWNldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ViRmFjZXQgJiYgdGhpcy5zdWJGYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIHEuc3ViRmFjZXQgPSB0aGlzLnN1YkZhY2V0O1xuICAgIH1cblxuICAgIHJldHVybiBxO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxuICBfb25Vc2VyQWN0aW9uKGFjdGlvbiwgLi4uYXJncykge1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gXCJcIlxuICAgIGxldCBxID0gey4uLnRoaXMuY3VycmVudFF1ZXJ5fTtcblxuICAgIC8vIGhhbmRsZSBwYWdlIGNoYW5nZVxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgcS5wZ0N1cnJlbnQgPSBhcmdzWzBdXG4gICAgICBwYXRoID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuY29uc3RydWN0VXJsKHEpXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGF6IGNoYW5nZVxuICAgIGVsc2UgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICBxLmF6U2VsZWN0ZWQgPSBhcmdzWzBdXG4gICAgICBwYXRoID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuY29uc3RydWN0VXJsKHEsIFsncGFnZSddKVxuICAgIH1cblxuICAgIGlmIChwYXRoKSB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocGF0aCk7XG4gICAgXG5cbiAgICAvKlxuICAgIGxldCBxID0gey4uLnRoaXMudXJsUXVlcnl9O1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHEucyAmJiBxLmZpbHRlcnNbXCJAdHlwZVwiXSkge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHEpO1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBhY3Rpb246XCIsIGFjdGlvbik7XG5cbiAgICAvLyBoYW5kbGUgYXpcbiAgICBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvblxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBhcmdzWzBdO1xuICAgICAgcS5vZmZzZXQgPSB0aGlzLnBnQ3VycmVudCAqIHRoaXMudXJsUXVlcnkubGltaXQgLSB0aGlzLnVybFF1ZXJ5LmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBmYWNldHNcbiAgICBpZiAoYWN0aW9uLnN0YXJ0c1dpdGgoJ2ZhY2V0XycpKSB7XG4gICAgICBpZiAoYXJnc1swXS5maWx0ZXJzKSB7XG4gICAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLmFyZ3NbMF0uZmlsdGVyc31cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZiA9IGFjdGlvbi5zbGljZSgnZmFjZXRfJy5sZW5ndGgsICk7XG4gICAgICAgIGlmIChxLmZpbHRlcnNbZl0pIHtcbiAgICAgICAgICBkZWxldGUgcS5maWx0ZXJzW2ZdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyB1cmwgYW5kIHJlZGlyZWN0XG4gICAgbGV0IHAgPSBcIlwiO1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIHAgPSBcIi9cIiArIHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnBhdGguam9pbihcIi9cIilcbiAgICB9XG5cbiAgICBwID0gcCArIHRoaXMuX3VybEVuY29kZShxKVxuICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgLy9yZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHApO1xuICAgICovXG4gIH1cblxuICBfc2V0RGlmZmVyZW5jZShzZXRBLCBzZXRCKSB7XG4gICAgbGV0IF9kaWZmZXJlbmNlID0gbmV3IFNldChzZXRBKVxuICAgIGZvciAobGV0IGVsZW0gb2Ygc2V0Qikge1xuICAgICAgICBfZGlmZmVyZW5jZS5kZWxldGUoZWxlbSlcbiAgICB9XG4gICAgcmV0dXJuIF9kaWZmZXJlbmNlXG59XG5cbl9nZXRBc3NldFR5cGUoZGF0YSkge1xuICBpZiAoIWRhdGFbJ0B0eXBlJ10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBkYXRhWydAdHlwZSddID09PSAnc3RyaW5nJykge1xuICAgIGRhdGFbJ0B0eXBlJ10gPSBbZGF0YVsnQHR5cGUnXV07XG4gIH1cbiAgaWYgKCAhQXJyYXkuaXNBcnJheShkYXRhWydAdHlwZSddKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICByZXR1cm4gXCJwZXJzb25cIjtcbiAgfVxuICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwdWJsaWNhdGlvblwiKSkge1xuICAgIHJldHVybiBcIndvcmtcIjtcbiAgfVxuICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpvcmdhbml6YXRpb25cIikpIHtcbiAgICByZXR1cm4gXCJvcmdhbml6YXRpb25cIjtcbiAgfVxuXG4gIHJldHVybjtcbn1cblxuX3VybEVuY29kZShvYmopIHtcbiAgbGV0IHN0ciA9IFtdO1xuICBmb3IgKGxldCBwIGluIG9iailcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgIH1cbiAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxuICByZXR1cm4gXCI/XCIgKyBzdHIuam9pbihcIiZcIik7XG59XG5cbi8qXG4qXG4qIFJFTkRFUiBGVU5DVElPTlNcbipcbiovXG5cbiAgX3JlbmRlckJyb3dzZUhlYWRlcih0aXRsZSwgQXpzZWxlY3RlZCkge1xuICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIGlmIChBenNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBBenNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgICR7dGhpcy5oYXNBeiA/IGh0bWxgXG4gICAgICAgIDxycC1hLXogc2VsZWN0ZWQtbGV0dGVyPVwiJHt0aGlzLmF6U2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWRMZXR0ZXJzPVwiJHt0aGlzLmF6RGlzYWJsZWR9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1sZXR0ZXI9JHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcImF6XCIsIGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX0+XG4gICAgICAgIDwvcnAtYS16PlxuICAgICAgYCA6IGh0bWxgYH1cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoKSB7XG4gICAgaWYgKCF0aGlzLnN1YkZhY2V0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLWxpbmstbGlzdCBcbiAgICAgIGhhcy1oZWFkZXItbGlua1xuICAgICAgLmxpbmtzPScke3RoaXMuc3ViRmFjZXRzfSdcbiAgICAgIGN1cnJlbnQtbGluaz0nJHt0aGlzLnN1YkZhY2V0SW5kZXh9J1xuICAgICAgPlxuICAgIDwvcnAtbGluay1saXN0PlxuICAgIGA7XG4gICAgcmV0dXJuIGh0bWxgJHtmYWNldHMubWFwKGZhY2V0ID0+IGh0bWxgXG4gICAgICA8cnAtbGluay1saXN0IGhhcy1oZWFkZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAubGlua3M9JyR7ZmFjZXQudmFsdWVzfSdcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC1saW5rPScke2ZhY2V0LmFjdGl2ZUluZGV4fSdcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oJ2ZhY2V0XycgKyBmYWNldC5pZCwgZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0PlxuICAgICAgYCl9XG4gICAgYFxuICB9XG5cbiAgX3JlbmRlckFzc2V0UHJldmlldyhkYXRhKSB7XG4gICAgbGV0IGFzc2V0VHlwZSA9IHRoaXMuX2dldEFzc2V0VHlwZShkYXRhKTtcblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3BlcnNvbicpIHtcbiAgICAgIGxldCBwZXJzb24gPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVyc29uKGRhdGEpO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICd3b3JrJykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtd29yay1wcmV2aWV3IC5kYXRhPVwiJHtkYXRhfVwiIGNsYXNzPVwibXktM1wiPjwvcnAtd29yay1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICdvcmdhbml6YXRpb24nKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxycC1vcmdhbml6YXRpb24tcHJldmlldyAuZGF0YT1cIiR7ZGF0YX1cIiBjbGFzcz1cIm15LTNcIj48L3JwLW9yZ2FuaXphdGlvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBgXG5cbiAgfVxuXG4gIF9yZW5kZXJQYWdpbmF0aW9uKHRvdGFsUmVzdWx0cykge1xuICAgIGlmICghdG90YWxSZXN1bHRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSB0cnVlO1xuICAgIGxldCBtYXhQYWdlID0gTWF0aC5jZWlsKHRvdGFsUmVzdWx0cyAvIHRoaXMucGdQZXIpO1xuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1wYWdpbmF0aW9uIG1heC1wYWdlPVwiJHttYXhQYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgY3VycmVudC1wYWdlPVwiJHt0aGlzLnBnQ3VycmVudH1cIlxuICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLXBhZ2U9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwicGFnaW5hdGlvblwiLCBlLnRhcmdldC5jdXJyZW50UGFnZSl9XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTNcIlxuICAgID48L3JwLXBhZ2luYXRpb24+XG4gICAgYFxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdXRpbHMtY29sbGVjdGlvbicsIFJwVXRpbHNDb2xsZWN0aW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=