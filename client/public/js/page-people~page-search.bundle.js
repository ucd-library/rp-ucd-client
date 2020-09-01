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
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/person-preview */ "./public/elements/components/person-preview.js");
/* harmony import */ var _components_work_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/work-preview */ "./public/elements/components/work-preview.js");








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
      this.mainFacets = this.CollectionModel._getMainFacets(data.payload, this.currentQuery);
      this.subFacets = this.CollectionModel._getSubFacets(this.mainFacet, data.payload, this.currentQuery);

    }
    else {
      this.hasAz = true;
    }
    this.data = data.payload.results;
    console.log("main query result:", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQzs7QUFFcEI7QUFDTTtBQUNDO0FBQ0c7QUFDRjs7QUFFcEIsc0NBQXNDLHNEQUFVO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGNBQWM7QUFDNUIsc0JBQXNCLGNBQWM7QUFDcEMsbUJBQW1CLGFBQWE7QUFDaEMsaUJBQWlCLGFBQWE7QUFDOUIsbUJBQW1CLFlBQVk7QUFDL0Isa0JBQWtCLFVBQVU7QUFDNUIsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGFBQWE7QUFDbkMsb0JBQW9CLGFBQWE7QUFDakMsZ0JBQWdCLGNBQWM7QUFDOUIscUJBQXFCLGFBQWE7QUFDbEMsa0JBQWtCLGFBQWE7QUFDL0IsbUJBQW1CLFlBQVk7QUFDL0IsY0FBYyxhQUFhO0FBQzNCLGtCQUFrQixhQUFhO0FBQy9CLGtCQUFrQixhQUFhO0FBQy9CLG9CQUFvQixZQUFZO0FBQ2hDLGFBQWEsWUFBWTtBQUN6QixtQkFBbUIsYUFBYTtBQUNoQyxrQkFBa0IsYUFBYTtBQUMvQix1QkFBdUIsYUFBYTtBQUNwQyxpQkFBaUIsYUFBYTtBQUM5QixzQkFBc0IsYUFBYTtBQUNuQyx1QkFBdUI7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsMEJBQTBCLDRCQUE0QixJQUFJLDJCQUEyQjs7QUFFckY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUk7QUFDZjtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRLGFBQWEsZ0RBQUk7QUFDekIsbUNBQW1DLGdCQUFnQjtBQUNuRCxvQ0FBb0MsZ0JBQWdCO0FBQ3BELGtDQUFrQyx1REFBdUQ7QUFDekY7QUFDQSxVQUFVLGdEQUFJOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdEQUFJO0FBQ2pCO0FBQ0EsV0FBVyxnREFBSTtBQUNmO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQixzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQUksR0FBRyxvQkFBb0IsZ0RBQUk7QUFDMUM7QUFDQSw4QkFBOEIsYUFBYTtBQUMzQyxvQ0FBb0Msa0JBQWtCO0FBQ3RELHFDQUFxQyxtRkFBbUY7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBLGdCQUFnQixZQUFZO0FBQzVCLGdCQUFnQiwyQkFBMkI7QUFDM0MsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakIsZ0NBQWdDLEtBQUs7QUFDckM7O0FBRUE7O0FBRUEsV0FBVyxnREFBSTs7QUFFZjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxnREFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdEQUFJO0FBQ2YsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGVBQWU7QUFDbEQsb0NBQW9DLDREQUE0RDtBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2UtcGVvcGxlfnBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvd29yay1wcmV2aWV3XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBVdGlsc0NvbGxlY3Rpb24gZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0F6OiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBoYXNQYWdpbmF0aW9uOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBhelNlbGVjdGVkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF6U3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF6RGlzYWJsZWQ6IHt0eXBlOiBBcnJheX0sXG4gICAgICBhek9wdGlvbnM6IHt0eXBlOiBTZXR9LFxuICAgICAgdXJsUXVlcnk6IHt0eXBlOiBPYmplY3R9LFxuICAgICAganNvbmxkQ29udGV4dDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwZW9wbGVXaWR0aDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBjdXJyZW50UXVlcnk6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgbWFpbkZhY2V0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIG1haW5GYWNldHM6IHt0eXBlOiBBcnJheX0sXG4gICAgICBwZ1Blcjoge3R5cGU6IE51bWJlcn0sXG4gICAgICBwZ0N1cnJlbnQ6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgdGV4dFF1ZXJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGFGaWx0ZXJzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YToge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YVRvdGFsOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIG1haW5GYWNldEluZGV4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN1YkZhY2V0OiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHN1YkZhY2V0SW5kZXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3ViRmFjZXRTdGF0dXM6IHt0eXBlOiBTdHJpbmd9XG5cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2luamVjdE1vZGVsKCdDb2xsZWN0aW9uTW9kZWwnLCAnQXBwU3RhdGVNb2RlbCcpO1xuICAgIHRoaXMuYXpPcHRpb25zID0gbmV3IFNldChbJ2FsbCcsIC4uLidhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiddKTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnVybFF1ZXJ5ID0ge307XG4gICAgdGhpcy5qc29ubGRDb250ZXh0ID0gQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQ7XG5cbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIF9yZXNldFF1ZXJ5UHJvcGVydGllcygpe1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHt9O1xuICAgIHRoaXMuZGF0YUZpbHRlcnMgPSBbXTtcblxuICAgIHRoaXMucGdQZXIgPSA4O1xuICAgIHRoaXMucGdDdXJyZW50ID0gMTtcblxuICAgIHRoaXMubWFpbkZhY2V0ID0gJ25vbmUnO1xuICAgIHRoaXMubWFpbkZhY2V0cyA9IFtdO1xuICAgIHRoaXMubWFpbkZhY2V0SW5kZXggPSAwO1xuXG4gICAgdGhpcy5zdWJGYWNldCA9ICdub25lJztcbiAgICB0aGlzLnN1YkZhY2V0SW5kZXggPSAwO1xuICAgIHRoaXMuc3ViRmFjZXRzID0gW107XG4gICAgdGhpcy5zdWJGYWNldFN0YXR1cyA9IFwibG9hZGluZ1wiO1xuXG4gICAgdGhpcy50ZXh0UXVlcnkgPSBcIlwiO1xuXG4gICAgdGhpcy5oYXNBeiA9IGZhbHNlO1xuICAgIHRoaXMuYXpTZWxlY3RlZCA9ICdBbGwnO1xuICAgIHRoaXMuYXpEaXNhYmxlZCA9IFtdO1xuICAgIHRoaXMuYXpTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgXG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgdGhpcy5kb1VwZGF0ZWQocHJvcHMpO1xuICB9XG5cbiAgZG9VcGRhdGVkKHByb3BzKXtcbiAgICBpZiAocHJvcHMuaGFzKCd2aXNpYmxlJykgJiYgdGhpcy52aXNpYmxlICkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl9oYW5kbGVSZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBhc3luYyBfZG9NYWluUXVlcnkoKXtcbiAgICBsZXQgcSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwucXVlcnkocSk7XG4gICAgaWYgKHRoaXMudGV4dFF1ZXJ5KSB7XG4gICAgICB0aGlzLnN1YkZhY2V0U3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICB9XG4gICAgdGhpcy5kYXRhU3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGEucGF5bG9hZC50b3RhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZGF0YVRvdGFsID0gMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRhdGFUb3RhbCA9IGRhdGEucGF5bG9hZC50b3RhbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHRoaXMubWFpbkZhY2V0cyA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9nZXRNYWluRmFjZXRzKGRhdGEucGF5bG9hZCwgdGhpcy5jdXJyZW50UXVlcnkpO1xuICAgICAgdGhpcy5zdWJGYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKHRoaXMubWFpbkZhY2V0LCBkYXRhLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRhdGEgPSBkYXRhLnBheWxvYWQucmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyhcIm1haW4gcXVlcnkgcmVzdWx0OlwiLCBkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRBekFnZygpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLmF6QWdnUXVlcnkodGhpcy5jdXJyZW50UXVlcnkubWFpbkZhY2V0LCB0aGlzLmN1cnJlbnRRdWVyeS5zdWJGYWNldClcbiAgICB0aGlzLmF6U3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYWdnS2V5ID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuZ2V0QXpCYXNlRmlsdGVyKHRoaXMuY3VycmVudFF1ZXJ5Lm1haW5GYWNldCk7XG4gICAgaWYgKGFnZ0tleSkge1xuICAgICAgdGhpcy5hekRpc2FibGVkID0gWy4uLnRoaXMuX3NldERpZmZlcmVuY2UodGhpcy5hek9wdGlvbnMsIE9iamVjdC5rZXlzKGRhdGEucGF5bG9hZC5hZ2dyZWdhdGlvbnMuZmFjZXRzW2FnZ0tleS5rZXldKSldLmZpbHRlcih4ID0+IHggIT0gJ2FsbCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXpTdGF0dXMgPSAnZXJyb3InO1xuICAgIH1cblxuICAgIFxuXG4gICAgY29uc29sZS5sb2coYGF6IGZvciAke3RoaXMuY3VycmVudFF1ZXJ5Lm1haW5GYWNldH0sICR7dGhpcy5jdXJyZW50UXVlcnkuc3ViRmFjZXR9YCwgZGF0YSk7XG5cbiAgfVxuXG4gIF9wYXJzZVVybFF1ZXJ5KHN0YXRlKXtcblxuICAgIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgc3RhdGUgPSB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YTtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBzdGF0ZS5sb2NhdGlvbi5wYXRoO1xuICAgIGxldCBxdWVyeSA9IHN0YXRlLmxvY2F0aW9uLnF1ZXJ5O1xuXG4gICAgLy8gc3RhcnQgZnJlc2hcbiAgICB0aGlzLl9yZXNldFF1ZXJ5UHJvcGVydGllcygpO1xuXG4gICAgLy8gZ2V0IHByaW1hcnkgZmFjZXQgb2YgcXVlcnlcbiAgICBpZiAocGF0aC5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgZmFjZXRGcm9tUGF0aCA9IHBhdGhbMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBmYWNldEZyb21QYXRoID0gcGF0aFswXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgIGlmIChmYWNldEZyb21QYXRoID09IGYuaWQudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgICAgdGhpcy5tYWluRmFjZXQgPSBmYWNldEZyb21QYXRoO1xuICAgICAgICB0aGlzLmRhdGFGaWx0ZXJzLnB1c2goZi5iYXNlRmlsdGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN1YkZhY2V0RnJvbVBhdGggPSBcIlwiO1xuICAgIGlmIChwYXRoWzBdID09ICdzZWFyY2gnICYmIHBhdGgubGVuZ3RoID4gMikge1xuICAgICAgc3ViRmFjZXRGcm9tUGF0aCA9IHBhdGhbMl0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGF0aFswXSAhPSAnc2VhcmNoJyAmJiBwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIHN1YkZhY2V0RnJvbVBhdGggPSBwYXRoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLkNvbGxlY3Rpb25Nb2RlbC5zdWJGYWNldHNbdGhpcy5tYWluRmFjZXRdKSB7XG4gICAgICBsZXQgaSA9IDE7XG4gICAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLnN1YkZhY2V0c1t0aGlzLm1haW5GYWNldF0pIHtcbiAgICAgICAgaWYgKGYuaWQgPT0gc3ViRmFjZXRGcm9tUGF0aCkge1xuICAgICAgICAgIHRoaXMuc3ViRmFjZXQgPSBzdWJGYWNldEZyb21QYXRoO1xuICAgICAgICAgIHRoaXMuc3ViRmFjZXRJbmRleCA9IGk7XG4gICAgICAgICAgdGhpcy5kYXRhRmlsdGVycy5wdXNoKGYuYmFzZUZpbHRlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgLy8gZ2V0IGFueSBxdWVyeSBhcmd1bWVudHNcbiAgICBmb3IgKGxldCBhcmcgaW4gcXVlcnkpIHtcbiAgICAgIGlmIChhcmcgPT0gJ3MnKSB7XG4gICAgICAgIHRoaXMudGV4dFF1ZXJ5ID0gcXVlcnkucztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAnZmlsdGVycycpIHtcbiAgICAgICAgLy90aGlzLmRhdGFGaWx0ZXJzLnB1c2goIEpTT04ucGFyc2UocXVlcnlbYXJnXSkgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAncGFnZScgJiYgIWlzTmFOKHF1ZXJ5W2FyZ10pKSB7XG4gICAgICAgIHRoaXMucGdDdXJyZW50ID0gcXVlcnlbYXJnXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFyZyA9PSAnYXonICYmIHRoaXMuYXpPcHRpb25zLmhhcyhxdWVyeVthcmddKSApIHtcbiAgICAgICAgdGhpcy5helNlbGVjdGVkID0gcXVlcnlbYXJnXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRRdWVyeSA9IHRoaXMuX2NvbnN0cnVjdFF1ZXJ5KCk7XG4gICAgY29uc29sZS5sb2coICdlbGVtZW50IHF1ZXJ5OicsIHRoaXMuY3VycmVudFF1ZXJ5KTtcblxuICB9XG5cbiAgX2NvbnN0cnVjdFF1ZXJ5KCl7XG4gICAgbGV0IHEgPSB7fTtcbiAgICBpZiAodGhpcy50ZXh0UXVlcnkpIHtcbiAgICAgIHEudGV4dFF1ZXJ5ID0gdGhpcy50ZXh0UXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGdDdXJyZW50KSB7XG4gICAgICBxLnBnQ3VycmVudCA9IHRoaXMucGdDdXJyZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wZ1Blcikge1xuICAgICAgcS5wZ1BlciA9IHRoaXMucGdQZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmF6U2VsZWN0ZWQpIHtcbiAgICAgIHEuYXpTZWxlY3RlZCA9IHRoaXMuYXpTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhRmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0gdGhpcy5kYXRhRmlsdGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMubWFpbkZhY2V0ICYmIHRoaXMubWFpbkZhY2V0ICE9ICdub25lJykge1xuICAgICAgcS5tYWluRmFjZXQgPSB0aGlzLm1haW5GYWNldDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ViRmFjZXQgJiYgdGhpcy5zdWJGYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIHEuc3ViRmFjZXQgPSB0aGlzLnN1YkZhY2V0O1xuICAgIH1cblxuICAgIHJldHVybiBxO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxuICBfb25Vc2VyQWN0aW9uKGFjdGlvbiwgLi4uYXJncykge1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gXCJcIlxuICAgIGxldCBxID0gey4uLnRoaXMuY3VycmVudFF1ZXJ5fTtcblxuICAgIC8vIGhhbmRsZSBwYWdlIGNoYW5nZVxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgcS5wZ0N1cnJlbnQgPSBhcmdzWzBdXG4gICAgICBwYXRoID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuY29uc3RydWN0VXJsKHEpXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGF6IGNoYW5nZVxuICAgIGVsc2UgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICBxLmF6U2VsZWN0ZWQgPSBhcmdzWzBdXG4gICAgICBwYXRoID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuY29uc3RydWN0VXJsKHEsIFsncGFnZSddKVxuICAgIH1cblxuICAgIGlmIChwYXRoKSB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocGF0aCk7XG4gICAgXG5cbiAgICAvKlxuICAgIGxldCBxID0gey4uLnRoaXMudXJsUXVlcnl9O1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKHEucyAmJiBxLmZpbHRlcnNbXCJAdHlwZVwiXSkge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHEpO1xuICAgIGNvbnNvbGUubG9nKFwiVXNlciBhY3Rpb246XCIsIGFjdGlvbik7XG5cbiAgICAvLyBoYW5kbGUgYXpcbiAgICBpZiAoYWN0aW9uID09ICdheicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcGFnaW5hdGlvblxuICAgIGlmIChhY3Rpb24gPT0gJ3BhZ2luYXRpb24nICYmIHRoaXMuaGFzUGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5wZ0N1cnJlbnQgPSBhcmdzWzBdO1xuICAgICAgcS5vZmZzZXQgPSB0aGlzLnBnQ3VycmVudCAqIHRoaXMudXJsUXVlcnkubGltaXQgLSB0aGlzLnVybFF1ZXJ5LmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBmYWNldHNcbiAgICBpZiAoYWN0aW9uLnN0YXJ0c1dpdGgoJ2ZhY2V0XycpKSB7XG4gICAgICBpZiAoYXJnc1swXS5maWx0ZXJzKSB7XG4gICAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLmFyZ3NbMF0uZmlsdGVyc31cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgZiA9IGFjdGlvbi5zbGljZSgnZmFjZXRfJy5sZW5ndGgsICk7XG4gICAgICAgIGlmIChxLmZpbHRlcnNbZl0pIHtcbiAgICAgICAgICBkZWxldGUgcS5maWx0ZXJzW2ZdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBxLm9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyB1cmwgYW5kIHJlZGlyZWN0XG4gICAgbGV0IHAgPSBcIlwiO1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIHAgPSBcIi9cIiArIHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnBhdGguam9pbihcIi9cIilcbiAgICB9XG5cbiAgICBwID0gcCArIHRoaXMuX3VybEVuY29kZShxKVxuICAgIC8vY29uc29sZS5sb2cocCk7XG4gICAgLy9yZXR1cm47XG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKHApO1xuICAgICovXG4gIH1cblxuICBfc2V0RGlmZmVyZW5jZShzZXRBLCBzZXRCKSB7XG4gICAgbGV0IF9kaWZmZXJlbmNlID0gbmV3IFNldChzZXRBKVxuICAgIGZvciAobGV0IGVsZW0gb2Ygc2V0Qikge1xuICAgICAgICBfZGlmZmVyZW5jZS5kZWxldGUoZWxlbSlcbiAgICB9XG4gICAgcmV0dXJuIF9kaWZmZXJlbmNlXG59XG5cbl9nZXRBc3NldFR5cGUoZGF0YSkge1xuICBpZiAoIWRhdGFbJ0B0eXBlJ10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBkYXRhWydAdHlwZSddID09PSAnc3RyaW5nJykge1xuICAgIGRhdGFbJ0B0eXBlJ10gPSBbZGF0YVsnQHR5cGUnXV07XG4gIH1cbiAgaWYgKCAhQXJyYXkuaXNBcnJheShkYXRhWydAdHlwZSddKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICByZXR1cm4gXCJwZXJzb25cIjtcbiAgfVxuICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwdWJsaWNhdGlvblwiKSkge1xuICAgIHJldHVybiBcIndvcmtcIjtcbiAgfVxuXG4gIHJldHVybjtcbn1cblxuX3VybEVuY29kZShvYmopIHtcbiAgbGV0IHN0ciA9IFtdO1xuICBmb3IgKGxldCBwIGluIG9iailcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgIH1cbiAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxuICByZXR1cm4gXCI/XCIgKyBzdHIuam9pbihcIiZcIik7XG59XG5cbi8qXG4qXG4qIFJFTkRFUiBGVU5DVElPTlNcbipcbiovXG5cbiAgX3JlbmRlckJyb3dzZUhlYWRlcih0aXRsZSwgQXpzZWxlY3RlZCkge1xuICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIGlmIChBenNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBBenNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgICR7dGhpcy5oYXNBeiA/IGh0bWxgXG4gICAgICAgIDxycC1hLXogc2VsZWN0ZWQtbGV0dGVyPVwiJHt0aGlzLmF6U2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWRMZXR0ZXJzPVwiJHt0aGlzLmF6RGlzYWJsZWR9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1sZXR0ZXI9JHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcImF6XCIsIGUudGFyZ2V0LnNlbGVjdGVkTGV0dGVyKX0+XG4gICAgICAgIDwvcnAtYS16PlxuICAgICAgYCA6IGh0bWxgYH1cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoKSB7XG4gICAgaWYgKCF0aGlzLnN1YkZhY2V0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLWxpbmstbGlzdCBcbiAgICAgIGhhcy1oZWFkZXItbGlua1xuICAgICAgLmxpbmtzPScke3RoaXMuc3ViRmFjZXRzfSdcbiAgICAgIGN1cnJlbnQtbGluaz0nJHt0aGlzLnN1YkZhY2V0SW5kZXh9J1xuICAgICAgPlxuICAgIDwvcnAtbGluay1saXN0PlxuICAgIGA7XG4gICAgcmV0dXJuIGh0bWxgJHtmYWNldHMubWFwKGZhY2V0ID0+IGh0bWxgXG4gICAgICA8cnAtbGluay1saXN0IGhhcy1oZWFkZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAubGlua3M9JyR7ZmFjZXQudmFsdWVzfSdcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC1saW5rPScke2ZhY2V0LmFjdGl2ZUluZGV4fSdcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oJ2ZhY2V0XycgKyBmYWNldC5pZCwgZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0PlxuICAgICAgYCl9XG4gICAgYFxuICB9XG5cbiAgX3JlbmRlckFzc2V0UHJldmlldyhkYXRhKSB7XG4gICAgbGV0IGFzc2V0VHlwZSA9IHRoaXMuX2dldEFzc2V0VHlwZShkYXRhKTtcblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3BlcnNvbicpIHtcbiAgICAgIGxldCBwZXJzb24gPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVyc29uKGRhdGEpO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICd3b3JrJykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtd29yay1wcmV2aWV3IC5kYXRhPVwiJHtkYXRhfVwiIGNsYXNzPVwibXktM1wiPjwvcnAtd29yay1wcmV2aWV3PlxuICAgICAgYDtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBodG1sYGBcblxuICB9XG5cbiAgX3JlbmRlclBhZ2luYXRpb24odG90YWxSZXN1bHRzKSB7XG4gICAgaWYgKCF0b3RhbFJlc3VsdHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IHRydWU7XG4gICAgbGV0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxSZXN1bHRzIC8gdGhpcy5wZ1Blcik7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==