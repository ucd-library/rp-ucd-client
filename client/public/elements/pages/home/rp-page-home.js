import { LitElement } from 'lit-element';
import render from "./rp-page-home.tpl.js";

import "@ucd-lib/cork-app-utils";

import config from "../../../src/config.js";
import "../../components/alert";
import "../../components/badge";
import "../../components/person-preview";
import "../../components/grant-preview";
import "../../components/search";
import "../../components/rp-loading";
import "../../components/infographic";



/**
 * @class RpPageHome
 * @description main home page
 */
export default class RpPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object},
      pageStatus: {type: String},
      facetsStatus: {type: String},
      facets: {type: Object},
      academicWorks: {type: Array},
      academicWorksTotal: {type: Number},
      grants: {type: Array},
      grantsTotal: {type: Number},
      grantsStatus: {type: String},
      peopleStatus: {type: String},
      people: {type: Array},
      peopleTotal: {type: Number},
      peopleWidth: {type: Number},
      subjects: {type: Array},
      subjectsTotal: {type: Number},
      subjectsStatus: {type: String},
      patentsTotal: {type: Number},
      coursesTotal: {type: Number},
      textWidth: {type: String, attribute: 'text-width'},
      visible: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('CollectionModel', 'AppStateModel', 'SubjectModel', 'GrantModel');
    this.resetProperties();
    this.facets = {};
    this.visible = false;
    this.academicWorksTotal = 0;
    this.grantsTotal = 0;
    this.peopleTotal = 0;
    this.subjectsTotal = 0;
    this.patentsTotal = 0,
    this.coursesTotal = 0,
    this.setPeopleWidth(window.innerWidth);
    this.textWidth = (window.innerWidth.toString() - 70) + "px";
    this.theme = config.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));

    this._handleResize = this._handleResize.bind(this);
  }

  /**
   * @method resetProperties
   * @description reset properties on update
   */
  resetProperties(){
    this.people = [];
    this.grants = [];
    this.academicWorks = [];
    this.subjects = [];
    this.pageStatus = 'loading';
    this.facetsStatus = 'loading';
    this.peopleStatus = 'loading';
    this.subjectsStatus = 'loading';
    this.grantsStatus = 'loading';

  }

  /**
   * @method updated
   * @description lit method called when props update
   * 
   * @param {Object} props 
   */
  async updated(props) {
    if (props.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        await Promise.all([
          this._getPeople(),
          this._getSubjects(),
          this._getGrants()
        ]);
      }
      this.setPageStatus();
    }
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
    if (props.has('textWidth')) this.setBadgeTabIndex();
  }

  /**
   * @method setBadgeTabIndex
   * @description Hides any overflow badges from tab positioning
   */
  async setBadgeTabIndex(){
    await this.updated;
    let containerWidth = this.textWidth;
    let cumWidth = 0;
    this.shadowRoot.querySelectorAll('rp-badge').forEach(badge => {
      cumWidth += badge.offsetWidth;
      badge.hideFromTab = cumWidth > containerWidth;
    });

  }

  /**
   * @method connectedCallback
   * @description lit method called when element is connected to dom
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * @method disconnectedCallback
   * @description lit method called when element is disconnected to dom
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  /**
   * @method doUpdate
   * @description reset props and update facets, this will rerender
   */
  async doUpdate(){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this.resetProperties();
    await this._getFacets();
  }

  /**
   * @method setPageStatus
   * @description Sets status of page based on API call status
   * 
   * @returns {String}
   */
  setPageStatus(){
    if ( 
      this.facetsStatus === 'loaded' && 
      this.peopleStatus === 'loaded' &&
      this.subjectsStatus === 'loaded'
    ) this.pageStatus = 'loaded';
    return "error";
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  /**
   * @method _onSearch
   * @description handle the rp-search elements new-search event.  Set the
   * AppStateModel location
   * 
   * @param {Object} e 
   */
  _onSearch(e){
    let url = "/search";
    if (e.target.nodeName == 'RP-SEARCH') {
      if (e.target.searchObject.facet.id == 'all') {
        url = `/search?s=${encodeURIComponent(e.target.inputValue)}`;
      }
      else {
        url = `/search/${e.target.searchObject.facet.id}?s=${encodeURIComponent(e.target.inputValue)}`;
      }
    }

    this.AppStateModel.setLocation(url);
  }

  /**
   * @method _handleResize
   * @description bound to main window resize event
   */
  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  /**
   * @method setPeopleWidth
   * @description
   * Sets the text-width property of the rp-person-preview elements on this page.
   * It's the only way to get the ellipsis overflow on their titles. 
   * 
   * @param {Number} w - Window width (pixels)
   */
  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 72;
    let peopleColumnCt = 2;
    let peopleColumnGutters = 24;
    let rightColumnWidth = .7;
    let screenPadding = 40;
    let grace = 10;
    let containerWidth = 970;

    // desktop max
    if (w >= 1030) {
      pw = (containerWidth * rightColumnWidth) / peopleColumnCt - peopleColumnGutters;
    }

    // desktop min
    else if (w >= 800){
      screenPadding = 60;
      pw = (w - screenPadding) * rightColumnWidth / peopleColumnCt - peopleColumnGutters;
    }

    // tablet max
    else if (w >= 550 + 40){
      containerWidth = 550;
      pw = containerWidth - grace;
    }
    // mobile
    else {
      pw = w - screenPadding - grace;
    }

    pw -= avatarWidth;
    this.peopleWidth = Math.floor(pw);
  }

  /**
   * @method _hideStatusSection
   * @description should a given UI section be hidden based on the
   * state of this elements property
   * 
   * @param {String} status state of call
   * @param {String} field this elements stored property
   * 
   * @returns {Boolean}
   */
  _hideStatusSection(status, field="pageStatus") {
    if (status == this[field]) return false;
    return true;
  }

  /**
   * @method _getPeople
   * @description load and render a random list of people
   * 
   * @returns {Promise}
   */
  async _getPeople() {
    let peopleList = await this.CollectionModel.overview('randomPeople', {limit: 4, total: this.peopleTotal});
    this.peopleStatus = peopleList.state;
    if (peopleList.state != "loaded") {
      return;
    }
    this.people = peopleList.payload.results;
    if (config.verbose) console.log('people: ', this.people);
  }

  /**
   * @method _getGrants
   * @description load and render a random list of grants
   * 
   * @returns {Promise}
   */
  async _getGrants() {
    let grantsList = await this.CollectionModel.overview('randomGrants', {limit: 4, total: this.grantsTotal});
    this.grantsStatus = grantsList.state;
    if (grantsList.state != "loaded") {
      return;
    }
    this.grants = grantsList.payload.results;
    if (config.verbose) console.log('grants: ', this.grants);
  }

  /**
   * @method _getSubjects
   * @description load and render a random list of subjects
   * 
   * @returns {Promise}
   */
  async _getSubjects() {
    let subjects = await this.SubjectModel.getRandomSubjects(10);
    this.subjectsStatus = subjects.state;
    this.subjects = subjects.payload;

    if (config.verbose) console.log('subjects: ', this.subjects);
  }

  /**
   * @method _getFacets
   * @description load and render the current overview facet list
   * 
   * @returns {Promise}
   */
  async _getFacets() {
    let facetList = await this.CollectionModel.overview('facets');
    this.facetsStatus = facetList.state;
    if (facetList.state != 'loaded') {
      return;
    }
    this.facets = facetList.payload.aggregations.facets['@type'];
    if (config.verbose) console.log('facets: ', this.facets);
    for (let facet in this.facets) {
      for (let recognizedFacet of this.CollectionModel.subFacets.works) {
        if (facet == recognizedFacet.es) {
          this.academicWorks.push({text: recognizedFacet.text, count: this.facets[facet], href: `/works/${recognizedFacet.id}`});
          break;
        }
      }
      if (facet == config.data.types.concept ) {
        this.subjectsTotal = this.facets[facet];
      }
      if (facet == config.data.types.work ) {
        this.academicWorksTotal = this.facets[facet];
      }
      if (facet == config.data.types.person ) {
        this.peopleTotal = this.facets[facet];
      }
      if (facet == config.data.types.grant ) {
        this.grantsTotal = this.facets[facet];
      }
    }

    this.academicWorks.sort(function(a, b) {
      let A = a.text.toUpperCase();
      let B = b.text.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    });

  }

}

customElements.define('rp-page-home', RpPageHome);
