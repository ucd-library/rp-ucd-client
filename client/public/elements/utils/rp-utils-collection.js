import { LitElement, html } from 'lit-element';

import "../components/a-z";
import "../components/dropdown";
import "../components/link-list";
import "../components/organization-preview";
import "../components/pagination";
import "../components/person-preview";
import "../components/work-preview";
import "../components/subject-preview";

export default class RpUtilsCollection extends Mixin(LitElement)
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
      subjectFilter: {type: String},
      dataFilters: {type: Array},
      data: {type: Array},
      dataStatus: {type: String},
      dataTotal: {type: Number},
      mainFacetIndex: {type: Number},
      subFacet: {type: String},
      subFacetIndex: {type: Number},
      subFacetStatus: {type: String},
      subFacetsWithResultsCt: {type: Number}

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
    this.subjectFilter = "";

    this.pgPer = 8;
    this.pgCurrent = 1;

    this.mainFacet = 'none';
    this.mainFacets = [];
    this.mainFacetIndex = 0;

    this.subFacet = 'none';
    this.subFacetIndex = 0;
    this.subFacets = [];
    this.subFacetStatus = "loading";
    this.subFacetsWithResultsCt = 0;

    this.textQuery = "";

    this.hasAz = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.azStatus = 'loading';

  }

  updated(props) {
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }

    // check how many subfacets have results
    if (props.has('subFacetStatus') && this.subFacetStatus == "loaded") {
      let subfacetCt = 0;
      for (const subfacet of this.subFacets) {
        if (subfacet.id=='none') continue;
        if (subfacet.ct > 0) subfacetCt += 1;
      }
      this.subFacetsWithResultsCt = subfacetCt;
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
    let data = await this.CollectionModel.azAggQuery(this.currentQuery.mainFacet, this.currentQuery.subFacet, this.currentQuery.subjectFilter)
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
      else if (arg == 'subject') {
        this.subjectFilter = query.subject
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
    if (this.subjectFilter) q.subjectFilter = this.subjectFilter;

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
    let screenPadding = 40;
    let facetColumnWidth = 140;
    let sectionPadding = 40;
    let grace = 10;
    if (w >= 1030) {
      let containerMaxWidth = 970;
      sectionPadding = 180;
      pw = containerMaxWidth - sectionPadding - facetColumnWidth
    }
    else if (w >= 800) {
      screenPadding = 60;
      sectionPadding = 180;
      pw = w - screenPadding - sectionPadding - facetColumnWidth;
    }
    else if(w >= 480) {
      sectionPadding = 60;
      pw = w - screenPadding - sectionPadding - facetColumnWidth;
    }
    else {
      pw = w - screenPadding - sectionPadding;
    }
    pw = pw - avatarWidth - grace;
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
  if (data['@type'].includes(this.jsonldContext + ":subjectArea")) {
    return "subject";
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
    return html`
    <h1 class="hidden-tablet-up mobile-browse-title mb-0">${title}</h1>
    ${this._renderMobileSubFacets(true)}
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${title}</h1>
      </div>
      <div class="col-main">
      ${this.hasAz ? html`
        <rp-a-z selected-letter="${this.azSelected}"
                .disabledLetters="${this.azDisabled}"
                @changed-letter=${e => this._onUserAction("az", e.target.selectedLetter)}>
        </rp-a-z>
      ` : html``}

      </div>
    </div>
    `;
  }

  _renderFacets() {
    if (!this.subFacets) {
      return html``;
    }

    return html`
    <rp-link-list
      has-header-link
      .links='${this.subFacets}'
      current-link='${this.subFacetIndex}'>
    </rp-link-list>
    `;
  }

  _renderAssetPreview(data) {
    let assetType = this._getAssetType(data);

    if (assetType == 'person') {
      return html`
      <rp-person-preview
        .data="${data}"
        show-snippet
        show-subjects
        text-width="${this.peopleWidth}"
        class="my-3">
      </rp-person-preview>
      `;
    }

    if (assetType == 'subject') {
      return html`
      <rp-subject-preview .data="${data}" class="my-3" show-snippet></rp-subject-preview>
      `;
    }

    if (assetType == 'work') {
      return html`
      <rp-work-preview .data="${data}" show-snippet class="my-3"></rp-work-preview>
      `;
    }

    if (assetType == 'organization') {
      return html`
      <rp-organization-preview .data="${data}" class="my-3"></rp-organization-preview>
      `;
    }

    return html``

  }

  _renderMobileSubFacets(isBrowsePage=false){
    if (this.data.length == 0 || this.mainFacet == 'none') return html``;

    let singleFacetText = "";
    if (!this.subFacetsWithResultsCt && this.subFacets.length > 0 ){
      singleFacetText = this.subFacets[0].text;
    }
    else if (this.subFacetsWithResultsCt == 1) {
      for (const subfacet of this.subFacets) {
        if (subfacet.id=='none') continue;
        if (subfacet.ct > 0) {
          singleFacetText = subfacet.text;
          break;
        }
      }
    }

    // Filter out options without results for mobile only
    let facets = [];
    let facetIndex = this.subFacetIndex;
    if (!singleFacetText) {
      let oldIndex = 0;
      let newIndex = 0;
      for (const facet of this.subFacets) {
        if (oldIndex == this.subFacetIndex) facetIndex = newIndex;
        if (facet.ct > 0) {
          newIndex += 1;
          facets.push(facet);
        }
        oldIndex += 1;
      }
    }

    return html`
    <div class="container">
      <div class="hidden-tablet-up ${isBrowsePage ? 'is-browse-page' : ''}" id="mobile-subfacets">
        ${this.subFacetsWithResultsCt > 1 ? html`
          <rp-dropdown .choices=${facets} .chosen=${facetIndex} filter-icon use-links theme-color="${isBrowsePage ? 'bg-primary' : 'outline-primary'}"></rp-dropdown>
        ` : html`
          <p class="bold">${singleFacetText}</p>
        `}
      </div>
    </div>
    `;
  }

  _renderPagination(totalResults) {
    if (!totalResults || totalResults <= this.pgPer ) {
      return html``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.pgPer);
    return html`
    <rp-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `
  }
}

customElements.define('rp-utils-collection', RpUtilsCollection);
