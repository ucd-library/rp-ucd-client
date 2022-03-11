import { LitElement, html } from 'lit';

import "../components/a-z";
import "../components/dropdown";
import "../components/link-list";
import "../components/organization-preview";
import "../components/pagination";
import "../components/person-preview";
import "../components/work-preview";
import "../components/subject-preview";
import "../components/grant-preview";

import AssetDefs from "../../src/lib/asset-defs";
import ga from "../../src/lib/ga";
import SubjectModel from '../../src/models/SubjectModel';
import config from "../../src/config.js";

/**
 * @class RpUtilsCollection
 * Parent class for page elements that list multiple assets. ie. search and browse.
 */
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
      peopleWidth: {type: Number},
      visible: {type: Boolean},
      currentQuery: {type: Object},
      mainFacet: {type: String},
      mainFacets: {type: Array},
      pgPer: {type: Number},
      pgCurrent: {type: Number},
      textQuery: {type: String},
      subjectFilter: {type: String},
      data: {type: Array},
      dataStatus: {type: String},
      dataTotal: {type: Number},
      mainFacetIndex: {type: Number},
      subFacet: {type: String},
      subFacetIndex: {type: Number},
      subFacetStatus: {type: String},
      subFacetsWithResultsCt: {type: Number},
      defaultFacetId: {type: String}

    };
  }

  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel', 'SubjectModel');
    this.azOptions = new Set(['all', ...'abcdefghijklmnopqrstuvwxyz']);
    this.hasPagination = false;
    this.visible = false;
    this.urlQuery = {};
    this.defaultFacetId = AssetDefs.defaultFacetId;
    this.searchsubject = '';



    this._resetQueryProperties();

    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this);
  }


  /**
   * @method _resetQueryProperties
   * @description Resets element properties to their default state.
   * Called before a new browse/search query is executed.
   */
  _resetQueryProperties(){
    this.data = [];
    this.dataStatus = 'loading';
    this.dataTotal = 0;

    this.currentQuery = {};
    this.subjectFilter = "";

    this.pgPer = 8;
    this.pgCurrent = 1;

    this.mainFacet = this.defaultFacetId;
    this.mainFacets = [];
    this.mainFacetIndex = 0;

    this.subFacet = this.defaultFacetId;
    this.subFacetIndex = 0;
    this.subFacets = [];
    this.subFacetStatus = "loading";
    this.subFacetsWithResultsCt = 0;

    this.textQuery = null;

    this.hasAz = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.azStatus = 'loading';


  }

  /**
   * @method updated
   * @description Lit method called when element is updated
   *
   * @param {Map} props - changed properties.
   */
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

    // get menu index of active subfilter
    if ( props.has('subFacet') ) {
      this.subFacetIndex = 0;
      let i = 1;
      for (const subfacet of AssetDefs.getSubFacetsByMainId(this.mainFacet)) {
        if (subfacet.id == this.subFacet) {
          this.subFacetIndex = i;
          break;
        }
        i++;
      }
    }
  }

  /**
   * @method connectedCallback
   * @description Lit method called when element enters the dom
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * @method disconnectedCallback
   * @description Lit method called when element exits the dom
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  /**
   * @method _doMainQuery
   * @description Performs primary browse/search query for page based on url path and parameters
   *
   * @returns {Promise}
   */
  async _doMainQuery(){
    let q = this.currentQuery;
    let data = await this.CollectionModel.query(q);

    let facetAggDoneHere = false;
    if (this.textQuery !== null && this.mainFacet == this.defaultFacetId && this.subFacet == this.defaultFacetId) {
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
      this.subFacets = this.CollectionModel._getSubFacets(data.payload, this.currentQuery);

    }
    else {
      this.hasAz = true;
    }
    this.searchData = data.payload;
    this.data = data.payload.results;

    if( this.AppStateModel.store.data.page === 'search' ) {
      ga.sendSearchView({
        text : q.textQuery,
        type : q.mainFacet || 'all',
        subtype : q.subFacet || '',
        page : q.pgCurrent || 1,
        itemsPerPage : q.pgPer
      }, data.payload);
    }
  }

  _onSearchResultClicked(e) {
    let firstEle = e.path[0];
    if(firstEle.nodeName !== 'A' ) return;

    let index = parseInt(e.currentTarget.getAttribute('index'));
    let item = this.data[index];

    // kinda hackish, better way?
    let re = new RegExp(`^${config.data.prefix.ucdId}:`);
    if( item['@id'].replace(re, '/') !== firstEle.getAttribute('href') ) return;

    ga.sendSearchClick({
      text : this.currentQuery.textQuery,
      type : this.currentQuery.mainFacet || 'all',
      subtype : this.currentQuery.subFacet || '',
      page : this.currentQuery.pgCurrent || 1,
      itemsPerPage : this.currentQuery.pgPer
    }, this.searchData, item, index);
  }

  /**
   * @method _getSearchAggs
   * @description Does query to retrieve the total counts for any facets/subfacets.
   *
   * @returns {Promise}
   */
  async _getSearchAggs() {
    if ( this.textQuery === null ) {
      return;
    }
    if (this.mainFacet == this.defaultFacetId && this.subFacet == this.defaultFacetId) {
      return; // agg retrieved by main query
    }
    let data = await this.CollectionModel.searchAggQuery(this.textQuery, this.mainFacet);
    this.subFacetStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.mainFacets = this.CollectionModel._getMainFacets(data.payload, this.currentQuery);
    this.subFacets = this.CollectionModel._getSubFacets(data.payload, this.currentQuery);

  }


  /**
   * @method _getAzAgg
   * @description Does query to retrieve the total counts for all letters in the A-Z element
   *
   * @returns {Promise}
   */
  async _getAzAgg() {
    let data = await this.CollectionModel.azAggQuery(this.currentQuery.mainFacet, this.currentQuery.subFacet, this.currentQuery.subjectFilter);
    this.azStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    let azAggField = AssetDefs.getAzAggField(this.currentQuery.mainFacet);
    if (azAggField) {
      this.azDisabled = [...this._setDifference(this.azOptions, Object.keys(data.payload.aggregations.facets[azAggField]))].filter(x => x != 'all');
    }

    let searchsubject = await SubjectModel.getSubject(data["id"].split("__")[2]);


    this.searchsubject = searchsubject.payload.prefLabel ? searchsubject.payload.prefLabel : '';
    this.requestUpdate();

    console.log(`az for ${this.currentQuery.mainFacet}, ${this.currentQuery.subFacet}`, data);

  }

  /**
   * @method _parseUrlQuery
   * @description Parses url path and parameters and sets the currentQuery property.
   * Called on app-state-update
   *
   * Primary route structure:
   *  Search: /search/<mainFacet>/<subFacet>?s=search&p=page
   *  Browse: /<mainFacet>/<subFacet>?p=page
   * There are some additional query parameters for special queries.
   * @param {Object} state - App State
   */
  _parseUrlQuery(state){

    // reset element query properties
    this._resetQueryProperties();

    // get current app location
    if (!state) state = this.AppStateModel.store.data;
    let path = state.location.path;
    let query = state.location.query;
    if (path.length < 1) return;

    // get primary facet of query
    if (path[0] == 'search' && path.length > 1) {
      this.mainFacet = path[1].toLowerCase();
    }
    else if ( path[0] == 'search' ) {
      this.mainFacet = this.defaultFacetId;
    }
    else {
      this.mainFacet = path[0].toLowerCase();
    }

    // get subfacet of query
    if (path[0] == 'search' && path.length > 2) {
      this.subFacet = path[2].toLowerCase();
    }
    else if (path[0] != 'search' && path.length > 1) {
      this.subFacet = path[1].toLowerCase();
    }

    // get any query arguments
    for (let arg in query) {
      if (arg == 's') {
        this.textQuery = query.s;
      }
      else if (arg == 'subject') {
        this.subjectFilter = query.subject;
      }
      else if (arg == 'page' && !isNaN(query[arg])) {
        this.pgCurrent = query[arg];
      }
      else if (arg == 'az' && this.azOptions.has(query[arg]) ) {
        this.azSelected = query[arg];
      }
    }

    this.currentQuery = this._constructQuery();
  }

  /**
   * @method _constructQuery
   * @description Constructs and returns a query object out of element properties.
   *
   * @returns {Object} Query Object
   */
  _constructQuery(){
    let q = {};
    if ( this.textQuery !== null ) {
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

    if (this.mainFacet && this.mainFacet != 'none') {
      q.mainFacet = this.mainFacet;
    }
    if (this.subFacet && this.subFacet != 'none') {
      q.subFacet = this.subFacet;
    }

    return q;
  }

  /**
   * @method _handleResize
   * @description attached to window resize
   */
  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  /**
   * @method setPeopleWidth
   * @description Sets the width property on any person-preview elements.
   * @param {Number} w - window width in pixels.
   */
  setPeopleWidth(w) {
    let notFaceted = this.mainFacet == this.defaultFacetId;
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 40;
    let facetColumnWidth = notFaceted ? 0 : 140;
    let sectionPadding = 60;
    let grace = 10;
    if (w >= 1030) {
      let containerMaxWidth = 970;
      sectionPadding = notFaceted ? 120 : 180;
      pw = containerMaxWidth - sectionPadding - facetColumnWidth;
    }
    else if (w >= 800) {
      screenPadding = 60;
      sectionPadding = notFaceted ? 120 : 180;
      pw = w - screenPadding - sectionPadding - facetColumnWidth;
    }
    else if(w >= 480) {
      sectionPadding = notFaceted ? 40 : 60;
      pw = w - screenPadding - sectionPadding - facetColumnWidth;
    }
    else {
      pw = w - screenPadding - sectionPadding;
    }
    pw = pw - avatarWidth - grace;
    this.peopleWidth = Math.floor(pw);
  }

  /**
   * @method _onUserAction
   * @description Handles various user interactions when <a> tags aren't used.
   * Constructs the new app url and sets the AppStateModel location
   * @param {String} action - Type of user action.
   * @param  {...any} args - Value of user action.
   */
  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let path = "";
    let q = {...this.currentQuery};

    // handle page change
    if (action == 'pagination' && this.hasPagination) {
      q.pgCurrent = args[0];
      path = this.CollectionModel.constructUrl(q);
    }

    // handle az change
    else if (action == 'az') {
      q.azSelected = args[0];
      path = this.CollectionModel.constructUrl(q, ['page']);
    }

    if (path) this.AppStateModel.setLocation(path);
  }

  /**
   * @method setDifference
   * @description Gets the difference between two sets.
   * @param {Set} setA
   * @param {Set} setB
   *
   * @returns {Set}
   */
  _setDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }

  /**
   * @method _getAssetType
   * @description Returns asset type based on data object returned in a query.
   * @param {Object} data
   *
   * @returns {String}
   */
  _getAssetType(data) {
    if (!data['@type']) {
      return "";
    }
    if (typeof data['@type'] === 'string') {
      data['@type'] = [data['@type']];
    }
    if ( !Array.isArray(data['@type']) ) {
      return "";
    }
    for (const asset of AssetDefs.getMainFacets()) {
      if ( data['@type'].includes(asset.es) ) {
        return asset.idSingular;
      }
    }
    return "";
  }

  /**
   * @method _urlEncode
   * @description Constructs encoded url parameters
   * @param {Object} obj - key:value pairs of url arguments.
   *
   * @returns {String}
   */
  _urlEncode(obj) {
    let str = [];
    for (let p in obj) {
      if (p == 'offset' && obj[p] == 0) {
        continue;
      }
      else if (p == 'filters' && Object.keys(obj[p]).length == 0) {
        continue;
      }
      else if (p == 'limit') {
        continue;
      }
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent( JSON.stringify(obj[p]) ));
    }

    if (!str.length) {
      return "";
    }
    return "?" + str.join("&");
  }




  /*
  *
  * RENDER FUNCTIONS
  *
  */

  /**
   * @method _renderBrowseHeader
   * @description Renders the page header of browse pages
   * @param {String} title - Page Title
   * @param {String} Azselected - Selected letter in AZ index.
   *
   * @returns {TemplateResult}
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
                base-href="${this.id+(this.subFacet !== 'none' ? '/'+this.subFacet : '')+(this.currentQuery.subjectFilter ? '?subject='+this.currentQuery.subjectFilter : '')}"
                @changed-letter=${e => this._onUserAction("az", e.target.selectedLetter)}>
        </rp-a-z>
      ` : html``}

      </div>
    </div>
    `;
  }

  /**
   * @method _renderFacets
   * @description Renders subfacet list
   *
   * @returns {TemplateResult}
   */
  _renderFacets() {
    if (!this.subFacets) {
      return html``;
    }

    return html`
    <rp-link-list
      has-header-link
      .links='${this.subFacets}'
      current-link='${this.subFacetIndex}'
      role="navigation"
      aria-label='${"filter " + this.mainFacet}'
      >
    </rp-link-list>
    `;
  }

  /**
   * @method _renderAssetPreview
   * @description Renders the appropriate asset preview
   * @param {Object} data - An asset data object.
   *
   * @returns {TemplateResult}
   */
  _renderAssetPreview(data, index) {
    let assetType = this._getAssetType(data);
    if (assetType == 'person') {
      return html`
      <rp-person-preview
        .data="${data}"
        show-snippet
        show-subjects
        index="${index}"
        text-width="${this.peopleWidth}"
        class="my-3"
        @click="${this._onSearchResultClicked}">
      </rp-person-preview>
      `;
    }

    if (assetType == 'concept') {
      return html`
      <rp-subject-preview
        .data="${data}"
        class="my-3"
        show-snippet
        index="${index}"
        @click="${this._onSearchResultClicked}">
      </rp-subject-preview>
      `;
    }

    if (assetType == 'work') {
      return html`
      <rp-work-preview
        .data="${data}"
        show-snippet
        class="my-3"
        index="${index}"
        @click="${this._onSearchResultClicked}">
      </rp-work-preview>
      `;
    }

    if (assetType == 'organization') {
      return html`
      <rp-organization-preview
        .data="${data}"
        class="my-3"
        index="${index}"
        @click="${this._onSearchResultClicked}">
      </rp-organization-preview>
      `;
    }

    if (assetType == 'grant') {
      return html`
      <rp-grant-preview
        .data="${data}"
        class="my-3"
        index="${index}"
        @click="${this._onSearchResultClicked}">
      </rp-grant-preview>
      `;
    }


    return html``;

  }

  /**
   * @method _renderMobileSubFacets
   * @description Renders the subfacet dropdown in the mobile view.
   * @param {Boolean} isBrowsePage - Is this a browse or search page?
   *
   * @returns {TemplateResult}
   */
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

  /**
   * @method _renderPagination
   * @description Renders the pagination element
   * @param {Number} totalResults - Total number of results of the current query.
   *
   * @returns {TemplateResult}
   */
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
    `;
  }
}

customElements.define('rp-utils-collection', RpUtilsCollection);
