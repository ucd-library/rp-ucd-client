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
    let data = await this.CollectionModel.searchAggQuery(this.textQuery);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUVwQjtBQUNNO0FBQ1U7QUFDVDtBQUNHO0FBQ0Y7O0FBRXBCLHNDQUFzQyxzREFBVTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLHNCQUFzQixjQUFjO0FBQ3BDLG1CQUFtQixhQUFhO0FBQ2hDLGlCQUFpQixhQUFhO0FBQzlCLG1CQUFtQixZQUFZO0FBQy9CLGtCQUFrQixVQUFVO0FBQzVCLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixhQUFhO0FBQ25DLG9CQUFvQixhQUFhO0FBQ2pDLGdCQUFnQixjQUFjO0FBQzlCLHFCQUFxQixhQUFhO0FBQ2xDLGtCQUFrQixhQUFhO0FBQy9CLG1CQUFtQixZQUFZO0FBQy9CLGNBQWMsYUFBYTtBQUMzQixrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsWUFBWTtBQUNoQyxhQUFhLFlBQVk7QUFDekIsbUJBQW1CLGFBQWE7QUFDaEMsa0JBQWtCLGFBQWE7QUFDL0IsdUJBQXVCLGFBQWE7QUFDcEMsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGFBQWE7QUFDbkMsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEIsSUFBSSwyQkFBMkI7O0FBRXJGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxhQUFhLGdEQUFJO0FBQ3pCLG1DQUFtQyxnQkFBZ0I7QUFDbkQsb0NBQW9DLGdCQUFnQjtBQUNwRCxrQ0FBa0MsdURBQXVEO0FBQ3pGO0FBQ0EsVUFBVSxnREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUk7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0Isc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJLEdBQUcsb0JBQW9CLGdEQUFJO0FBQzFDO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0Msb0NBQW9DLGtCQUFrQjtBQUN0RCxxQ0FBcUMsbUZBQW1GO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixnQkFBZ0IsMkJBQTJCO0FBQzNDLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2YsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGVBQWU7QUFDbEQsb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2Utb3JnYW5pemF0aW9uc35wYWdlLXBlb3BsZX5wYWdlLXNlYXJjaH5wYWdlLXdvcmtzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9vcmdhbml6YXRpb24tcHJldmlld1wiXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy93b3JrLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIGF6T3B0aW9uczoge3R5cGU6IFNldH0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBqc29ubGRDb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGN1cnJlbnRRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBtYWluRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbWFpbkZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHBnQ3VycmVudDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB0ZXh0UXVlcnk6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YUZpbHRlcnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhVG90YWw6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWFpbkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3ViRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgc3ViRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBzdWJGYWNldFN0YXR1czoge3R5cGU6IFN0cmluZ31cblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5hek9wdGlvbnMgPSBuZXcgU2V0KFsnYWxsJywgLi4uJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J10pO1xuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcblxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCl7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0ge307XG4gICAgdGhpcy5kYXRhRmlsdGVycyA9IFtdO1xuXG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuXG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy5tYWluRmFjZXRzID0gW107XG4gICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG5cbiAgICB0aGlzLnN1YkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IDA7XG4gICAgdGhpcy5zdWJGYWNldHMgPSBbXTtcbiAgICB0aGlzLnN1YkZhY2V0U3RhdHVzID0gXCJsb2FkaW5nXCI7XG5cbiAgICB0aGlzLnRleHRRdWVyeSA9IFwiXCI7XG5cbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5helN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICBsZXQgZmFjZXRBZ2dEb25lSGVyZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSAmJiB0aGlzLm1haW5GYWNldCA9PSAnbm9uZScgJiYgdGhpcy5zdWJGYWNldCA9PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgICAgZmFjZXRBZ2dEb25lSGVyZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhLnBheWxvYWQudG90YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgfVxuXG4gICAgaWYgKGZhY2V0QWdnRG9uZUhlcmUpIHtcbiAgICAgIHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN0b3JlLnNldFNlYXJjaEFnZ3NMb2FkZWQodGhpcy50ZXh0UXVlcnksIGRhdGEucGF5bG9hZCk7XG4gICAgICB0aGlzLm1haW5GYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0TWFpbkZhY2V0cyhkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cyh0aGlzLm1haW5GYWNldCwgZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coXCJtYWluIHF1ZXJ5IHJlc3VsdDpcIiwgZGF0YSk7XG4gIH1cblxuXG4gIGFzeW5jIF9nZXRTZWFyY2hBZ2dzKCkge1xuICAgIGlmICghdGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ID09ICdub25lJyAmJiB0aGlzLnN1YkZhY2V0ID09ICdub25lJykge1xuICAgICAgcmV0dXJuOyAvLyBhZ2cgcmV0cmlldmVkIGJ5IG1haW4gcXVlcnlcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zZWFyY2hBZ2dRdWVyeSh0aGlzLnRleHRRdWVyeSk7XG4gICAgdGhpcy5zdWJGYWNldFN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYWluRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldE1haW5GYWNldHMoZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG4gICAgdGhpcy5zdWJGYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKHRoaXMubWFpbkZhY2V0LCBkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICB9XG5cblxuICBhc3luYyBfZ2V0QXpBZ2coKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5hekFnZ1F1ZXJ5KHRoaXMuY3VycmVudFF1ZXJ5Lm1haW5GYWNldCwgdGhpcy5jdXJyZW50UXVlcnkuc3ViRmFjZXQpXG4gICAgdGhpcy5helN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFnZ0tleSA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmdldEF6QmFzZUZpbHRlcih0aGlzLmN1cnJlbnRRdWVyeS5tYWluRmFjZXQpO1xuICAgIGlmIChhZ2dLZXkgJiYgYWdnS2V5LmtleSkge1xuICAgICAgdGhpcy5hekRpc2FibGVkID0gWy4uLnRoaXMuX3NldERpZmZlcmVuY2UodGhpcy5hek9wdGlvbnMsIE9iamVjdC5rZXlzKGRhdGEucGF5bG9hZC5hZ2dyZWdhdGlvbnMuZmFjZXRzW2FnZ0tleS5rZXldKSldLmZpbHRlcih4ID0+IHggIT0gJ2FsbCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXpTdGF0dXMgPSAnZXJyb3InO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgYXogZm9yICR7dGhpcy5jdXJyZW50UXVlcnkubWFpbkZhY2V0fSwgJHt0aGlzLmN1cnJlbnRRdWVyeS5zdWJGYWNldH1gLCBkYXRhKTtcblxuICB9XG5cbiAgX3BhcnNlVXJsUXVlcnkoc3RhdGUpe1xuXG4gICAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICBzdGF0ZSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IHN0YXRlLmxvY2F0aW9uLnBhdGg7XG4gICAgbGV0IHF1ZXJ5ID0gc3RhdGUubG9jYXRpb24ucXVlcnk7XG5cbiAgICAvLyBzdGFydCBmcmVzaFxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICAvLyBnZXQgcHJpbWFyeSBmYWNldCBvZiBxdWVyeVxuICAgIGlmIChwYXRoLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmFjZXRGcm9tUGF0aCA9IFwiXCI7XG4gICAgaWYgKHBhdGhbMF0gPT0gJ3NlYXJjaCcgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZhY2V0RnJvbVBhdGggPSBwYXRoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGYgb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgaWYgKGZhY2V0RnJvbVBhdGggPT0gZi5pZC50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgICB0aGlzLm1haW5GYWNldCA9IGZhY2V0RnJvbVBhdGg7XG4gICAgICAgIHRoaXMuZGF0YUZpbHRlcnMucHVzaChmLmJhc2VGaWx0ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc3ViRmFjZXRGcm9tUGF0aCA9IFwiXCI7XG4gICAgaWYgKHBhdGhbMF0gPT0gJ3NlYXJjaCcgJiYgcGF0aC5sZW5ndGggPiAyKSB7XG4gICAgICBzdWJGYWNldEZyb21QYXRoID0gcGF0aFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXRoWzBdICE9ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgc3ViRmFjZXRGcm9tUGF0aCA9IHBhdGhbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN1YkZhY2V0c1t0aGlzLm1haW5GYWNldF0pIHtcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwuc3ViRmFjZXRzW3RoaXMubWFpbkZhY2V0XSkge1xuICAgICAgICBpZiAoZi5pZCA9PSBzdWJGYWNldEZyb21QYXRoKSB7XG4gICAgICAgICAgdGhpcy5zdWJGYWNldCA9IHN1YkZhY2V0RnJvbVBhdGg7XG4gICAgICAgICAgdGhpcy5zdWJGYWNldEluZGV4ID0gaTtcbiAgICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goZi5iYXNlRmlsdGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICAvLyBnZXQgYW55IHF1ZXJ5IGFyZ3VtZW50c1xuICAgIGZvciAobGV0IGFyZyBpbiBxdWVyeSkge1xuICAgICAgaWYgKGFyZyA9PSAncycpIHtcbiAgICAgICAgdGhpcy50ZXh0UXVlcnkgPSBxdWVyeS5zO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdmaWx0ZXJzJykge1xuICAgICAgICAvL3RoaXMuZGF0YUZpbHRlcnMucHVzaCggSlNPTi5wYXJzZShxdWVyeVthcmddKSApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdwYWdlJyAmJiAhaXNOYU4ocXVlcnlbYXJnXSkpIHtcbiAgICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBxdWVyeVthcmddO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXJnID09ICdheicgJiYgdGhpcy5hek9wdGlvbnMuaGFzKHF1ZXJ5W2FyZ10pICkge1xuICAgICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBxdWVyeVthcmddO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0gdGhpcy5fY29uc3RydWN0UXVlcnkoKTtcbiAgICBjb25zb2xlLmxvZyggJ2VsZW1lbnQgcXVlcnk6JywgdGhpcy5jdXJyZW50UXVlcnkpO1xuXG4gIH1cblxuICBfY29uc3RydWN0UXVlcnkoKXtcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSkge1xuICAgICAgcS50ZXh0UXVlcnkgPSB0aGlzLnRleHRRdWVyeTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wZ0N1cnJlbnQpIHtcbiAgICAgIHEucGdDdXJyZW50ID0gdGhpcy5wZ0N1cnJlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnBnUGVyKSB7XG4gICAgICBxLnBnUGVyID0gdGhpcy5wZ1BlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXpTZWxlY3RlZCkge1xuICAgICAgcS5helNlbGVjdGVkID0gdGhpcy5helNlbGVjdGVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFGaWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB0aGlzLmRhdGFGaWx0ZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYWluRmFjZXQgJiYgdGhpcy5tYWluRmFjZXQgIT0gJ25vbmUnKSB7XG4gICAgICBxLm1haW5GYWNldCA9IHRoaXMubWFpbkZhY2V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5zdWJGYWNldCAmJiB0aGlzLnN1YkZhY2V0ICE9ICdub25lJykge1xuICAgICAgcS5zdWJGYWNldCA9IHRoaXMuc3ViRmFjZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHE7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDgyO1xuICAgIGxldCBzY3JlZW5QYWRkaW5nID0gMzA7XG4gICAgcHcgPSAodyAtIHNjcmVlblBhZGRpbmcpICogLjcgLSBhdmF0YXJXaWR0aCAtIDQwO1xuICAgIHRoaXMucGVvcGxlV2lkdGggPSBNYXRoLmZsb29yKHB3KTtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBcIlwiXG4gICAgbGV0IHEgPSB7Li4udGhpcy5jdXJyZW50UXVlcnl9O1xuXG4gICAgLy8gaGFuZGxlIHBhZ2UgY2hhbmdlXG4gICAgaWYgKGFjdGlvbiA9PSAncGFnaW5hdGlvbicgJiYgdGhpcy5oYXNQYWdpbmF0aW9uKSB7XG4gICAgICBxLnBnQ3VycmVudCA9IGFyZ3NbMF1cbiAgICAgIHBhdGggPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5jb25zdHJ1Y3RVcmwocSlcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgYXogY2hhbmdlXG4gICAgZWxzZSBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHEuYXpTZWxlY3RlZCA9IGFyZ3NbMF1cbiAgICAgIHBhdGggPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5jb25zdHJ1Y3RVcmwocSwgWydwYWdlJ10pXG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwYXRoKTtcbiAgICBcblxuICAgIC8qXG4gICAgbGV0IHEgPSB7Li4udGhpcy51cmxRdWVyeX07XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBpZiAocS5zICYmIHEuZmlsdGVyc1tcIkB0eXBlXCJdKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocSk7XG4gICAgY29uc29sZS5sb2coXCJVc2VyIGFjdGlvbjpcIiwgYWN0aW9uKTtcblxuICAgIC8vIGhhbmRsZSBhelxuICAgIGlmIChhY3Rpb24gPT0gJ2F6Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBwYWdpbmF0aW9uXG4gICAgaWYgKGFjdGlvbiA9PSAncGFnaW5hdGlvbicgJiYgdGhpcy5oYXNQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnBnQ3VycmVudCA9IGFyZ3NbMF07XG4gICAgICBxLm9mZnNldCA9IHRoaXMucGdDdXJyZW50ICogdGhpcy51cmxRdWVyeS5saW1pdCAtIHRoaXMudXJsUXVlcnkubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGZhY2V0c1xuICAgIGlmIChhY3Rpb24uc3RhcnRzV2l0aCgnZmFjZXRfJykpIHtcbiAgICAgIGlmIChhcmdzWzBdLmZpbHRlcnMpIHtcbiAgICAgICAgcS5maWx0ZXJzID0gey4uLnEuZmlsdGVycywgLi4uYXJnc1swXS5maWx0ZXJzfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBmID0gYWN0aW9uLnNsaWNlKCdmYWNldF8nLmxlbmd0aCwgKTtcbiAgICAgICAgaWYgKHEuZmlsdGVyc1tmXSkge1xuICAgICAgICAgIGRlbGV0ZSBxLmZpbHRlcnNbZl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHEub2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zdHJ1Y3QgbmV3IHVybCBhbmQgcmVkaXJlY3RcbiAgICBsZXQgcCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuQXBwU3RhdGVNb2RlbCkge1xuICAgICAgcCA9IFwiL1wiICsgdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGEubG9jYXRpb24ucGF0aC5qb2luKFwiL1wiKVxuICAgIH1cblxuICAgIHAgPSBwICsgdGhpcy5fdXJsRW5jb2RlKHEpXG4gICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocCk7XG4gICAgKi9cbiAgfVxuXG4gIF9zZXREaWZmZXJlbmNlKHNldEEsIHNldEIpIHtcbiAgICBsZXQgX2RpZmZlcmVuY2UgPSBuZXcgU2V0KHNldEEpXG4gICAgZm9yIChsZXQgZWxlbSBvZiBzZXRCKSB7XG4gICAgICAgIF9kaWZmZXJlbmNlLmRlbGV0ZShlbGVtKVxuICAgIH1cbiAgICByZXR1cm4gX2RpZmZlcmVuY2Vcbn1cblxuX2dldEFzc2V0VHlwZShkYXRhKSB7XG4gIGlmICghZGF0YVsnQHR5cGUnXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGRhdGFbJ0B0eXBlJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YVsnQHR5cGUnXSA9IFtkYXRhWydAdHlwZSddXTtcbiAgfVxuICBpZiAoICFBcnJheS5pc0FycmF5KGRhdGFbJ0B0eXBlJ10pICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgIHJldHVybiBcInBlcnNvblwiO1xuICB9XG4gIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOnB1YmxpY2F0aW9uXCIpKSB7XG4gICAgcmV0dXJuIFwid29ya1wiO1xuICB9XG4gIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOm9yZ2FuaXphdGlvblwiKSkge1xuICAgIHJldHVybiBcIm9yZ2FuaXphdGlvblwiO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuXG5fdXJsRW5jb2RlKG9iaikge1xuICBsZXQgc3RyID0gW107XG4gIGZvciAobGV0IHAgaW4gb2JqKVxuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgIGlmIChwID09ICdvZmZzZXQnICYmIG9ialtwXSA9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHAgPT0gJ2ZpbHRlcnMnICYmIE9iamVjdC5rZXlzKG9ialtwXSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocCA9PSAnbGltaXQnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoIEpTT04uc3RyaW5naWZ5KG9ialtwXSkgKSk7XG4gICAgfVxuICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG4gIHJldHVybiBcIj9cIiArIHN0ci5qb2luKFwiJlwiKTtcbn1cblxuLypcbipcbiogUkVOREVSIEZVTkNUSU9OU1xuKlxuKi9cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgJHt0aGlzLmhhc0F6ID8gaHRtbGBcbiAgICAgICAgPHJwLWEteiBzZWxlY3RlZC1sZXR0ZXI9XCIke3RoaXMuYXpTZWxlY3RlZH1cIlxuICAgICAgICAgICAgICAgIC5kaXNhYmxlZExldHRlcnM9XCIke3RoaXMuYXpEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIiwgZS50YXJnZXQuc2VsZWN0ZWRMZXR0ZXIpfT5cbiAgICAgICAgPC9ycC1hLXo+XG4gICAgICBgIDogaHRtbGBgfVxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckZhY2V0cygpIHtcbiAgICBpZiAoIXRoaXMuc3ViRmFjZXRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8cnAtbGluay1saXN0IFxuICAgICAgaGFzLWhlYWRlci1saW5rXG4gICAgICAubGlua3M9JyR7dGhpcy5zdWJGYWNldHN9J1xuICAgICAgY3VycmVudC1saW5rPScke3RoaXMuc3ViRmFjZXRJbmRleH0nXG4gICAgICA+XG4gICAgPC9ycC1saW5rLWxpc3Q+XG4gICAgYDtcbiAgICByZXR1cm4gaHRtbGAke2ZhY2V0cy5tYXAoZmFjZXQgPT4gaHRtbGBcbiAgICAgIDxycC1saW5rLWxpc3QgaGFzLWhlYWRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgIC5saW5rcz0nJHtmYWNldC52YWx1ZXN9J1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9JyR7ZmFjZXQuYWN0aXZlSW5kZXh9J1xuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbignZmFjZXRfJyArIGZhY2V0LmlkLCBlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3Q+XG4gICAgICBgKX1cbiAgICBgXG4gIH1cblxuICBfcmVuZGVyQXNzZXRQcmV2aWV3KGRhdGEpIHtcbiAgICBsZXQgYXNzZXRUeXBlID0gdGhpcy5fZ2V0QXNzZXRUeXBlKGRhdGEpO1xuXG4gICAgaWYgKGFzc2V0VHlwZSA9PSAncGVyc29uJykge1xuICAgICAgbGV0IHBlcnNvbiA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRQZXJzb24oZGF0YSk7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICBuYW1lPVwiJHtwZXJzb24ubmFtZX1cIlxuICAgICAgICBocmVmPVwiJHtcIi9pbmRpdmlkdWFsL1wiICsgcGVyc29uLmlkfVwiXG4gICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgdGV4dC13aWR0aD1cIiR7dGhpcy5wZW9wbGVXaWR0aH1cIlxuICAgICAgICBjbGFzcz1cIm15LTNcIj5cbiAgICAgIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3dvcmsnKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxycC13b3JrLXByZXZpZXcgLmRhdGE9XCIke2RhdGF9XCIgY2xhc3M9XCJteS0zXCI+PC9ycC13b3JrLXByZXZpZXc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ29yZ2FuaXphdGlvbicpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLW9yZ2FuaXphdGlvbi1wcmV2aWV3IC5kYXRhPVwiJHtkYXRhfVwiIGNsYXNzPVwibXktM1wiPjwvcnAtb3JnYW5pemF0aW9uLXByZXZpZXc+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYGBcblxuICB9XG5cbiAgX3JlbmRlclBhZ2luYXRpb24odG90YWxSZXN1bHRzKSB7XG4gICAgaWYgKCF0b3RhbFJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IHRydWU7XG4gICAgbGV0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxSZXN1bHRzIC8gdGhpcy5wZ1Blcik7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==