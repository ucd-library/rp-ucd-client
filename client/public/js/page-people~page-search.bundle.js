(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-people~page-search"],{

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
    if (aggKey) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUVwQjtBQUNNO0FBQ1U7QUFDVDtBQUNHO0FBQ0Y7O0FBRXBCLHNDQUFzQyxzREFBVTtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCLHNCQUFzQixjQUFjO0FBQ3BDLG1CQUFtQixhQUFhO0FBQ2hDLGlCQUFpQixhQUFhO0FBQzlCLG1CQUFtQixZQUFZO0FBQy9CLGtCQUFrQixVQUFVO0FBQzVCLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixhQUFhO0FBQ25DLG9CQUFvQixhQUFhO0FBQ2pDLGdCQUFnQixjQUFjO0FBQzlCLHFCQUFxQixhQUFhO0FBQ2xDLGtCQUFrQixhQUFhO0FBQy9CLG1CQUFtQixZQUFZO0FBQy9CLGNBQWMsYUFBYTtBQUMzQixrQkFBa0IsYUFBYTtBQUMvQixrQkFBa0IsYUFBYTtBQUMvQixvQkFBb0IsWUFBWTtBQUNoQyxhQUFhLFlBQVk7QUFDekIsbUJBQW1CLGFBQWE7QUFDaEMsa0JBQWtCLGFBQWE7QUFDL0IsdUJBQXVCLGFBQWE7QUFDcEMsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGFBQWE7QUFDbkMsdUJBQXVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDBCQUEwQiw0QkFBNEIsSUFBSSwyQkFBMkI7O0FBRXJGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxhQUFhLGdEQUFJO0FBQ3pCLG1DQUFtQyxnQkFBZ0I7QUFDbkQsb0NBQW9DLGdCQUFnQjtBQUNwRCxrQ0FBa0MsdURBQXVEO0FBQ3pGO0FBQ0EsVUFBVSxnREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLFdBQVcsZ0RBQUk7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0Isc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJLEdBQUcsb0JBQW9CLGdEQUFJO0FBQzFDO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0Msb0NBQW9DLGtCQUFrQjtBQUN0RCxxQ0FBcUMsbUZBQW1GO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixnQkFBZ0IsMkJBQTJCO0FBQzNDLGlCQUFpQixhQUFhO0FBQzlCLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2YsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGVBQWU7QUFDbEQsb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2UtcGVvcGxlfnBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9vcmdhbml6YXRpb24tcHJldmlld1wiXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy93b3JrLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIGF6T3B0aW9uczoge3R5cGU6IFNldH0sXG4gICAgICB1cmxRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBqc29ubGRDb250ZXh0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGN1cnJlbnRRdWVyeToge3R5cGU6IE9iamVjdH0sXG4gICAgICBtYWluRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgbWFpbkZhY2V0czoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHBnQ3VycmVudDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB0ZXh0UXVlcnk6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YUZpbHRlcnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhVG90YWw6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWFpbkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3ViRmFjZXQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgc3ViRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn0sXG4gICAgICBzdWJGYWNldFN0YXR1czoge3R5cGU6IFN0cmluZ31cblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5hek9wdGlvbnMgPSBuZXcgU2V0KFsnYWxsJywgLi4uJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J10pO1xuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcblxuICAgIHRoaXMuX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCk7XG5cbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG5cbiAgX3Jlc2V0UXVlcnlQcm9wZXJ0aWVzKCl7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcblxuICAgIHRoaXMuY3VycmVudFF1ZXJ5ID0ge307XG4gICAgdGhpcy5kYXRhRmlsdGVycyA9IFtdO1xuXG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuXG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy5tYWluRmFjZXRzID0gW107XG4gICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG5cbiAgICB0aGlzLnN1YkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IDA7XG4gICAgdGhpcy5zdWJGYWNldHMgPSBbXTtcbiAgICB0aGlzLnN1YkZhY2V0U3RhdHVzID0gXCJsb2FkaW5nXCI7XG5cbiAgICB0aGlzLnRleHRRdWVyeSA9IFwiXCI7XG5cbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5helN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICBcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICB0aGlzLmRvVXBkYXRlZChwcm9wcyk7XG4gIH1cblxuICBkb1VwZGF0ZWQocHJvcHMpe1xuICAgIGlmIChwcm9wcy5oYXMoJ3Zpc2libGUnKSAmJiB0aGlzLnZpc2libGUgKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuX2hhbmRsZVJlc2l6ZSgpKTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeSgpe1xuICAgIGxldCBxID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICBsZXQgZmFjZXRBZ2dEb25lSGVyZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRleHRRdWVyeSAmJiB0aGlzLm1haW5GYWNldCA9PSAnbm9uZScgJiYgdGhpcy5zdWJGYWNldCA9PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuc3ViRmFjZXRTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgICAgZmFjZXRBZ2dEb25lSGVyZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhLnBheWxvYWQudG90YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgfVxuXG4gICAgaWYgKGZhY2V0QWdnRG9uZUhlcmUpIHtcbiAgICAgIHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN0b3JlLnNldFNlYXJjaEFnZ3NMb2FkZWQodGhpcy50ZXh0UXVlcnksIGRhdGEucGF5bG9hZCk7XG4gICAgICB0aGlzLm1haW5GYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0TWFpbkZhY2V0cyhkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cyh0aGlzLm1haW5GYWNldCwgZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coXCJtYWluIHF1ZXJ5IHJlc3VsdDpcIiwgZGF0YSk7XG4gIH1cblxuXG4gIGFzeW5jIF9nZXRTZWFyY2hBZ2dzKCkge1xuICAgIGlmICghdGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ID09ICdub25lJyAmJiB0aGlzLnN1YkZhY2V0ID09ICdub25lJykge1xuICAgICAgcmV0dXJuOyAvLyBhZ2cgcmV0cmlldmVkIGJ5IG1haW4gcXVlcnlcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zZWFyY2hBZ2dRdWVyeSh0aGlzLnRleHRRdWVyeSk7XG4gICAgdGhpcy5zdWJGYWNldFN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5tYWluRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldE1haW5GYWNldHMoZGF0YS5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG4gICAgdGhpcy5zdWJGYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKHRoaXMubWFpbkZhY2V0LCBkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICB9XG5cblxuICBhc3luYyBfZ2V0QXpBZ2coKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5hekFnZ1F1ZXJ5KHRoaXMuY3VycmVudFF1ZXJ5Lm1haW5GYWNldCwgdGhpcy5jdXJyZW50UXVlcnkuc3ViRmFjZXQpXG4gICAgdGhpcy5helN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFnZ0tleSA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmdldEF6QmFzZUZpbHRlcih0aGlzLmN1cnJlbnRRdWVyeS5tYWluRmFjZXQpO1xuICAgIGlmIChhZ2dLZXkpIHtcbiAgICAgIHRoaXMuYXpEaXNhYmxlZCA9IFsuLi50aGlzLl9zZXREaWZmZXJlbmNlKHRoaXMuYXpPcHRpb25zLCBPYmplY3Qua2V5cyhkYXRhLnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1thZ2dLZXkua2V5XSkpXS5maWx0ZXIoeCA9PiB4ICE9ICdhbGwnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmF6U3RhdHVzID0gJ2Vycm9yJztcbiAgICB9XG5cbiAgICBcblxuICAgIGNvbnNvbGUubG9nKGBheiBmb3IgJHt0aGlzLmN1cnJlbnRRdWVyeS5tYWluRmFjZXR9LCAke3RoaXMuY3VycmVudFF1ZXJ5LnN1YkZhY2V0fWAsIGRhdGEpO1xuXG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeShzdGF0ZSl7XG5cbiAgICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHN0YXRlID0gdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGE7XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBsZXQgcXVlcnkgPSBzdGF0ZS5sb2NhdGlvbi5xdWVyeTtcblxuICAgIC8vIHN0YXJ0IGZyZXNoXG4gICAgdGhpcy5fcmVzZXRRdWVyeVByb3BlcnRpZXMoKTtcblxuICAgIC8vIGdldCBwcmltYXJ5IGZhY2V0IG9mIHF1ZXJ5XG4gICAgaWYgKHBhdGgubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBmYWNldEZyb21QYXRoID0gXCJcIjtcbiAgICBpZiAocGF0aFswXSA9PSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZhY2V0RnJvbVBhdGggPSBwYXRoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMF0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5tYWluRmFjZXRzKSB7XG4gICAgICBpZiAoZmFjZXRGcm9tUGF0aCA9PSBmLmlkLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICAgIHRoaXMubWFpbkZhY2V0ID0gZmFjZXRGcm9tUGF0aDtcbiAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKGYuYmFzZUZpbHRlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzdWJGYWNldEZyb21QYXRoID0gXCJcIjtcbiAgICBpZiAocGF0aFswXSA9PSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDIpIHtcbiAgICAgIHN1YkZhY2V0RnJvbVBhdGggPSBwYXRoWzJdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhdGhbMF0gIT0gJ3NlYXJjaCcgJiYgcGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBzdWJGYWNldEZyb21QYXRoID0gcGF0aFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5Db2xsZWN0aW9uTW9kZWwuc3ViRmFjZXRzW3RoaXMubWFpbkZhY2V0XSkge1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgZm9yIChsZXQgZiBvZiB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zdWJGYWNldHNbdGhpcy5tYWluRmFjZXRdKSB7XG4gICAgICAgIGlmIChmLmlkID09IHN1YkZhY2V0RnJvbVBhdGgpIHtcbiAgICAgICAgICB0aGlzLnN1YkZhY2V0ID0gc3ViRmFjZXRGcm9tUGF0aDtcbiAgICAgICAgICB0aGlzLnN1YkZhY2V0SW5kZXggPSBpO1xuICAgICAgICAgIHRoaXMuZGF0YUZpbHRlcnMucHVzaChmLmJhc2VGaWx0ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cblxuICAgIC8vIGdldCBhbnkgcXVlcnkgYXJndW1lbnRzXG4gICAgZm9yIChsZXQgYXJnIGluIHF1ZXJ5KSB7XG4gICAgICBpZiAoYXJnID09ICdzJykge1xuICAgICAgICB0aGlzLnRleHRRdWVyeSA9IHF1ZXJ5LnM7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmcgPT0gJ2ZpbHRlcnMnKSB7XG4gICAgICAgIC8vdGhpcy5kYXRhRmlsdGVycy5wdXNoKCBKU09OLnBhcnNlKHF1ZXJ5W2FyZ10pICk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmcgPT0gJ3BhZ2UnICYmICFpc05hTihxdWVyeVthcmddKSkge1xuICAgICAgICB0aGlzLnBnQ3VycmVudCA9IHF1ZXJ5W2FyZ107XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhcmcgPT0gJ2F6JyAmJiB0aGlzLmF6T3B0aW9ucy5oYXMocXVlcnlbYXJnXSkgKSB7XG4gICAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IHF1ZXJ5W2FyZ107XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSB0aGlzLl9jb25zdHJ1Y3RRdWVyeSgpO1xuICAgIGNvbnNvbGUubG9nKCAnZWxlbWVudCBxdWVyeTonLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG5cbiAgfVxuXG4gIF9jb25zdHJ1Y3RRdWVyeSgpe1xuICAgIGxldCBxID0ge307XG4gICAgaWYgKHRoaXMudGV4dFF1ZXJ5KSB7XG4gICAgICBxLnRleHRRdWVyeSA9IHRoaXMudGV4dFF1ZXJ5O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBnQ3VycmVudCkge1xuICAgICAgcS5wZ0N1cnJlbnQgPSB0aGlzLnBnQ3VycmVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGdQZXIpIHtcbiAgICAgIHEucGdQZXIgPSB0aGlzLnBnUGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5helNlbGVjdGVkKSB7XG4gICAgICBxLmF6U2VsZWN0ZWQgPSB0aGlzLmF6U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGF0YUZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHRoaXMuZGF0YUZpbHRlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLm1haW5GYWNldCAmJiB0aGlzLm1haW5GYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIHEubWFpbkZhY2V0ID0gdGhpcy5tYWluRmFjZXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1YkZhY2V0ICYmIHRoaXMuc3ViRmFjZXQgIT0gJ25vbmUnKSB7XG4gICAgICBxLnN1YkZhY2V0ID0gdGhpcy5zdWJGYWNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gcTtcbiAgfVxuXG4gIF9oYW5kbGVSZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHJldHVybjtcbiAgICBsZXQgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgodyk7XG4gIH1cblxuXG4gIHNldFBlb3BsZVdpZHRoKHcpIHtcbiAgICBsZXQgcHcgPSAyNTA7XG4gICAgbGV0IGF2YXRhcldpZHRoID0gODI7XG4gICAgbGV0IHNjcmVlblBhZGRpbmcgPSAzMDtcbiAgICBwdyA9ICh3IC0gc2NyZWVuUGFkZGluZykgKiAuNyAtIGF2YXRhcldpZHRoIC0gNDA7XG4gICAgdGhpcy5wZW9wbGVXaWR0aCA9IE1hdGguZmxvb3IocHcpO1xuICB9XG5cbiAgX29uVXNlckFjdGlvbihhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IFwiXCJcbiAgICBsZXQgcSA9IHsuLi50aGlzLmN1cnJlbnRRdWVyeX07XG5cbiAgICAvLyBoYW5kbGUgcGFnZSBjaGFuZ2VcbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHEucGdDdXJyZW50ID0gYXJnc1swXVxuICAgICAgcGF0aCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmNvbnN0cnVjdFVybChxKVxuICAgIH1cblxuICAgIC8vIGhhbmRsZSBheiBjaGFuZ2VcbiAgICBlbHNlIGlmIChhY3Rpb24gPT0gJ2F6Jykge1xuICAgICAgcS5helNlbGVjdGVkID0gYXJnc1swXVxuICAgICAgcGF0aCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmNvbnN0cnVjdFVybChxLCBbJ3BhZ2UnXSlcbiAgICB9XG5cbiAgICBpZiAocGF0aCkgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHBhdGgpO1xuICAgIFxuXG4gICAgLypcbiAgICBsZXQgcSA9IHsuLi50aGlzLnVybFF1ZXJ5fTtcbiAgICBpZiAoIXEuZmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGlmIChxLnMgJiYgcS5maWx0ZXJzW1wiQHR5cGVcIl0pIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhxKTtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWN0aW9uOlwiLCBhY3Rpb24pO1xuXG4gICAgLy8gaGFuZGxlIGF6XG4gICAgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb25cbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMucGdDdXJyZW50ID0gYXJnc1swXTtcbiAgICAgIHEub2Zmc2V0ID0gdGhpcy5wZ0N1cnJlbnQgKiB0aGlzLnVybFF1ZXJ5LmxpbWl0IC0gdGhpcy51cmxRdWVyeS5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgZmFjZXRzXG4gICAgaWYgKGFjdGlvbi5zdGFydHNXaXRoKCdmYWNldF8nKSkge1xuICAgICAgaWYgKGFyZ3NbMF0uZmlsdGVycykge1xuICAgICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5hcmdzWzBdLmZpbHRlcnN9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGYgPSBhY3Rpb24uc2xpY2UoJ2ZhY2V0XycubGVuZ3RoLCApO1xuICAgICAgICBpZiAocS5maWx0ZXJzW2ZdKSB7XG4gICAgICAgICAgZGVsZXRlIHEuZmlsdGVyc1tmXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdCBuZXcgdXJsIGFuZCByZWRpcmVjdFxuICAgIGxldCBwID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBwID0gXCIvXCIgKyB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5wYXRoLmpvaW4oXCIvXCIpXG4gICAgfVxuXG4gICAgcCA9IHAgKyB0aGlzLl91cmxFbmNvZGUocSlcbiAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgIC8vcmV0dXJuO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwKTtcbiAgICAqL1xuICB9XG5cbiAgX3NldERpZmZlcmVuY2Uoc2V0QSwgc2V0Qikge1xuICAgIGxldCBfZGlmZmVyZW5jZSA9IG5ldyBTZXQoc2V0QSlcbiAgICBmb3IgKGxldCBlbGVtIG9mIHNldEIpIHtcbiAgICAgICAgX2RpZmZlcmVuY2UuZGVsZXRlKGVsZW0pXG4gICAgfVxuICAgIHJldHVybiBfZGlmZmVyZW5jZVxufVxuXG5fZ2V0QXNzZXRUeXBlKGRhdGEpIHtcbiAgaWYgKCFkYXRhWydAdHlwZSddKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgZGF0YVsnQHR5cGUnXSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhWydAdHlwZSddID0gW2RhdGFbJ0B0eXBlJ11dO1xuICB9XG4gIGlmICggIUFycmF5LmlzQXJyYXkoZGF0YVsnQHR5cGUnXSkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGFbJ0B0eXBlJ10uaW5jbHVkZXModGhpcy5qc29ubGRDb250ZXh0ICsgXCI6cGVyc29uXCIpKSB7XG4gICAgcmV0dXJuIFwicGVyc29uXCI7XG4gIH1cbiAgaWYgKGRhdGFbJ0B0eXBlJ10uaW5jbHVkZXModGhpcy5qc29ubGRDb250ZXh0ICsgXCI6cHVibGljYXRpb25cIikpIHtcbiAgICByZXR1cm4gXCJ3b3JrXCI7XG4gIH1cbiAgaWYgKGRhdGFbJ0B0eXBlJ10uaW5jbHVkZXModGhpcy5qc29ubGRDb250ZXh0ICsgXCI6b3JnYW5pemF0aW9uXCIpKSB7XG4gICAgcmV0dXJuIFwib3JnYW5pemF0aW9uXCI7XG4gIH1cblxuICByZXR1cm47XG59XG5cbl91cmxFbmNvZGUob2JqKSB7XG4gIGxldCBzdHIgPSBbXTtcbiAgZm9yIChsZXQgcCBpbiBvYmopXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgaWYgKHAgPT0gJ29mZnNldCcgJiYgb2JqW3BdID09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocCA9PSAnZmlsdGVycycgJiYgT2JqZWN0LmtleXMob2JqW3BdKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwID09ICdsaW1pdCcpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkob2JqW3BdKSApKTtcbiAgICB9XG4gIGlmICghc3RyLmxlbmd0aCkge1xuICAgIHJldHVybiBcIlwiXG4gIH1cbiAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xufVxuXG4vKlxuKlxuKiBSRU5ERVIgRlVOQ1RJT05TXG4qXG4qL1xuXG4gIF9yZW5kZXJCcm93c2VIZWFkZXIodGl0bGUsIEF6c2VsZWN0ZWQpIHtcbiAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICBpZiAoQXpzZWxlY3RlZCkge1xuICAgICAgdGhpcy5helNlbGVjdGVkID0gQXpzZWxlY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHNcIj5cbiAgICAgICAgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICAke3RoaXMuaGFzQXogPyBodG1sYFxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkTGV0dGVycz1cIiR7dGhpcy5hekRpc2FibGVkfVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGV0dGVyPSR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJhelwiLCBlLnRhcmdldC5zZWxlY3RlZExldHRlcil9PlxuICAgICAgICA8L3JwLWEtej5cbiAgICAgIGAgOiBodG1sYGB9XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBfcmVuZGVyRmFjZXRzKCkge1xuICAgIGlmICghdGhpcy5zdWJGYWNldHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1saW5rLWxpc3QgXG4gICAgICBoYXMtaGVhZGVyLWxpbmtcbiAgICAgIC5saW5rcz0nJHt0aGlzLnN1YkZhY2V0c30nXG4gICAgICBjdXJyZW50LWxpbms9JyR7dGhpcy5zdWJGYWNldEluZGV4fSdcbiAgICAgID5cbiAgICA8L3JwLWxpbmstbGlzdD5cbiAgICBgO1xuICAgIHJldHVybiBodG1sYCR7ZmFjZXRzLm1hcChmYWNldCA9PiBodG1sYFxuICAgICAgPHJwLWxpbmstbGlzdCBoYXMtaGVhZGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzPScke2ZhY2V0LnZhbHVlc30nXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz0nJHtmYWNldC5hY3RpdmVJbmRleH0nXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKCdmYWNldF8nICsgZmFjZXQuaWQsIGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdD5cbiAgICAgIGApfVxuICAgIGBcbiAgfVxuXG4gIF9yZW5kZXJBc3NldFByZXZpZXcoZGF0YSkge1xuICAgIGxldCBhc3NldFR5cGUgPSB0aGlzLl9nZXRBc3NldFR5cGUoZGF0YSk7XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICdwZXJzb24nKSB7XG4gICAgICBsZXQgcGVyc29uID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdFBlcnNvbihkYXRhKTtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICB0ZXh0LXdpZHRoPVwiJHt0aGlzLnBlb3BsZVdpZHRofVwiXG4gICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKGFzc2V0VHlwZSA9PSAnd29yaycpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLXdvcmstcHJldmlldyAuZGF0YT1cIiR7ZGF0YX1cIiBjbGFzcz1cIm15LTNcIj48L3JwLXdvcmstcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKGFzc2V0VHlwZSA9PSAnb3JnYW5pemF0aW9uJykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtb3JnYW5pemF0aW9uLXByZXZpZXcgLmRhdGE9XCIke2RhdGF9XCIgY2xhc3M9XCJteS0zXCI+PC9ycC1vcmdhbml6YXRpb24tcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgYFxuXG4gIH1cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnBnUGVyKTtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8cnAtcGFnaW5hdGlvbiBtYXgtcGFnZT1cIiR7bWF4UGFnZX1cIlxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtcGFnZT1cIiR7dGhpcy5wZ0N1cnJlbnR9XCJcbiAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1wYWdlPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcInBhZ2luYXRpb25cIiwgZS50YXJnZXQuY3VycmVudFBhZ2UpfVwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0zXCJcbiAgICA+PC9ycC1wYWdpbmF0aW9uPlxuICAgIGBcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXV0aWxzLWNvbGxlY3Rpb24nLCBScFV0aWxzQ29sbGVjdGlvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9