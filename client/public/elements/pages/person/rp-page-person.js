import render from "./rp-page-person.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";
import UserUtils from "../../../src/lib/user-utils";
 
import "../../components/alert";
import "../../components/avatar";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/modal";
import "../../components/rp-loading";


/**
 * @class RpPagePerson
 * @description Landing page for an individual person.
 * Inherits the RpUtilsLanding element, which handles a lot of the rendering.
 */
export default class RpPagePerson extends RpUtilsLanding {

  static get properties() {
    return {
      individual: {type: Object},
      individualStatus: {type: String},
      publicationOverviewStatus: {type: String},
      publicationOverview: {type: Object},
      hasMultiplePubTypes: {type: Boolean},
      retrievedPublications: {type: Object},
      totalPublications: {type: Number},
      isOwnProfile: {type: Boolean},
      submitText: {type: String, attribute: 'submitText'},
      isAdmin: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.submitText = "Edit Publication";

    this._injectModel('PersonModel', 'AppStateModel');
    
    this.assetType = "person";

    this.isAdmin = UserUtils.isAdmin(APP_CONFIG.user);

    this._resetEleProps();

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    if( state.page !== 'person' ) return;

    let assetId = state.location.path.slice(0, 2).join('/');
    if( this.assetId === assetId ) {
      this._setActiveSection(state.location.path);
      return;
    }
    
    this.assetId = assetId;

    this.getPageSections();
    this._setActiveSection(state.location.path);
    this._resetEleProps();

    await Promise.all([
      this._doMainQuery(this.assetId),
      this._doPubOverviewQuery(this.assetId)
    ]);

    this.isOwnProfile = this._isOwnProfile();
  }



  /**
   * @method updated
   * @description lit method called when element is updated.
   * @param {Map} props - The properties that were updated.
   */
  updated(props){
    if (props.has('assetId') && this.assetId) {
      this.shadowRoot.getElementById('hero').shuffle();
    }
  }

  /**
   * @method _resetEleProps
   * @description Resets properties to their native state. 
   * Ususally called before data for a new individual is loaded.
   */
  _resetEleProps() {
    this.individual = {};
    this.individualStatus = 'loading';
    this.retrievedPublications = {};
    this.totalPublications = 0;
    this.isOwnProfile = false;
    this.publicationOverview = {};
    this.hasMultiplePubTypes = false;
    this.emailArray = [];
    this.websitesArray = [];
    this.publicationOverviewStatus = 'loading';
  }

  /**
   * @method _loadPubs
   * @description Retrieves publications and adds them to the master publication object.
   * Attached to "Get More" buttons in the publication section of profile.
   * 
   * @param {String} pubType - the id of the publication type to retrieve. i.e. article, conference-paper, etc
   * @param {Boolean} getMore - Have we already retrieved a few publications of this type?
   * 
   * @returns {Promise}
   */
  async _loadPubs(pubType, getMore=true){
    let offset = this.publicationOverview[pubType].displayedOffset;
    if (offset < 10) {
      offset = 10;
    }
    else if (!getMore) {
      offset -= 10;
    }
    this.publicationOverview[pubType].displayedOffset = getMore ? offset + 10 : offset;
    await this._doPubQuery(this.publicationOverview[pubType], offset);

  }

  /**
   * @method _doMainQuery
   * @description Retrieves data for individual on AppStateUpdate. Rerenders.
   * 
   * @param {String} id - The id of the individual (without the jsonld context).
   * 
   * @returns {Promise}
   */
  async _doMainQuery(id){
    let data = await this.PersonModel.get(id);
    if( data.state === 'error' ) {
      return this.AppStateModel.show404Page(data);
    }
    this.individualStatus = data.state;
    if (data.state != 'loaded') {
      return false;
    }
    this.individual = data.payload;
    if (APP_CONFIG.verbose) console.log(data);
    return false;
  }

  /** 
   * @method _doPubOverviewQuery
   * @description Gets aggregation counts of all publication types for this individual.
   * Kicks off further queries for the actual publication records if applicable.
   * 
   * @param {String} id - The individual's id
   * 
   * @returns {Promise}
   */
  async _doPubOverviewQuery(id) {
    this.publicationOverviewStatus = 'loading';
    let data = await this.PersonModel.getPubOverview(id);
    if( data.state === 'error' ) {
      this.publicationOverviewStatus = 'error';
      return;
    }
    if (data.state != 'loaded') {
      return;
    }
    if (APP_CONFIG.verbose) console.log('pub overview:', data);

    let totalPubs = 0;
    let pubTypes = {};
    for (let possiblePubType of this.PersonModel.getPublicationTypes()) {
      let ct = data.payload.aggregations.facets['@type'][possiblePubType.es];
      if (ct) {
        totalPubs += ct;
        pubTypes[possiblePubType.id] = {
          ...possiblePubType, 
          ct: ct, 
          displayedOffset: 0, 
          dataStatus: 'loading'};
      }
    }
    this.hasMultiplePubTypes = Object.keys(pubTypes).length > 1;
    for (let pubType in pubTypes) {
      pubTypes[pubType].displayedOffset = this.hasMultiplePubTypes ? 5 : 10;

    }
    this.totalPublications = totalPubs;
    this.publicationOverview  = pubTypes;

    await Promise.all(Object.values(pubTypes).map(pt => this._doPubQuery(pt)));
    if ( this.publicationOverviewStatus !== 'error' ) {
      this.publicationOverviewStatus = 'loaded';
    }
  }

  /**
   * @method _doPubQuery
   * @description Retrieves publications in chronological order. Rerenders.
   * 
   * @param {Object} pubTypeObject - Object containing metadata about the publication type.
   * @param {Number} offset - Offsets query by this value.
   * 
   * @returns {Promise}
   */
  async _doPubQuery(pubTypeObject, offset=0){
    let data = await this.PersonModel.getPublications(this.assetId, pubTypeObject, offset);
    this.publicationOverview[pubTypeObject.id].dataStatus = data.state;
    if( data.state === 'error' ) {
      this.publicationOverviewStatus = 'error';
      return;
    }
    if (data.state != 'loaded') return;

    if( !this.retrievedPublications[pubTypeObject.id] ) {
      this.retrievedPublications[pubTypeObject.id] = [];
    }

    this.retrievedPublications[pubTypeObject.id].push(...data.payload.results);
    this.requestUpdate();
  }

  /**
   * @method _isOwnProfile
   * @description Determines if currently loaded page is the logged in user's
   * 
   * @returns {Boolean}
   */
  _isOwnProfile() {
    try {
      if (APP_CONFIG.user.expertsId === this.assetId) {
        return true;
      }
    } catch (error) {
      console.warn("Error parsing username.");
    }
    return false;
  }

  /**
   * @method showPage
   * @description Shows normal content template for page.
   * 
   * @returns {Boolean}
   */
  showPage() {
    if ( this.individualStatus === 'loaded' || this.individualStatus === 'loading' ) return true;
    return false;
  }

  /**
   * @method getPubsByYear
   * @description Formats retrieved publications according to section layout
   * 
   * @param {String} pubType - The type of publication (article, book, etc)
   * @returns {Array} Ordered array of objects with publications for a given year.
   */
  getPubsByYear(pubType){
    let output = [];

    if (!this.publicationOverview[pubType] || !this.retrievedPublications[pubType] ) {
      return output;
    }
    
    let minToShow = this.hasMultiplePubTypes ? 5 : 10;
    let nToShow = this.publicationOverview[pubType].displayedOffset;
    if (nToShow < minToShow) nToShow = minToShow;

    let pubs = this.retrievedPublications[pubType].slice(0, nToShow);
    let pubObj = {};
    let yrs = [];
    for (let pub of pubs) {
      if (!pub.publicationDate) continue;
      let dt = new Date(pub.publicationDate);
      let yr = dt.getFullYear();
      if (!yrs.includes(yr)) {
        yrs.push(yr);
        pubObj[yr] = [];
      }
      pubObj[yr].push(pub);
    }
    yrs.sort((a, b) => b - a );
    for (let yr of yrs) {
      output.push({year: yr, pubs: pubObj[yr]});
    }

    return output;
  }

  /**
   * @method showMoreLessButton
   * @description used to toggle pub buttons panel
   * 
   * @param {Object} pubType 
   * 
   * @returns {Boolean}
   */
  showMoreLessButton(pubType) {
    return (this.showMoreButton(pubType)) || (this.showLessButton(pubType));
    // return (pubType.displayedOffset > 10) || (pubType.displayedOffset + 10 <= Math.ceil(pubType.ct / 10) * 10);
  }

  /**
   * @method showMoreButton
   * @description used to toggle show more button
   * 
   * @param {Object} pubType 
   * 
   * @returns {Boolean}
   */
  showMoreButton(pubType) {
    return pubType.displayedOffset < pubType.ct;
  }

  /**
   * @method showMoreButton
   * @description used to toggle show less button
   * 
   * @param {Object} pubType 
   * 
   * @returns {Boolean}
   */
  showLessButton(pubType) {
    return pubType.displayedOffset > pubType.ct;
  }

  /**
   * @method showMoreButton
   * @description used to show more button value
   * 
   * @param {Object} pubType 
   * 
   * @returns {Number}
   */
  showMoreCount(pubType) {
    return pubType.ct - pubType.displayedOffset < 10 ? pubType.ct - pubType.displayedOffset : 10;
  }

  /**
   * @method showLessCount
   * @description used to show less button value
   * 
   * @param {Object} pubType 
   * 
   * @returns {Number}
   */
  showLessCount(pubType) {
    return pubType.displayedOffset > pubType.ct ? pubType.ct - (pubType.displayedOffset - 10) : 10;
  }


  /**
   * @method getTitles
   * @description Gets titles for a person.
   * 
   * @returns {Array}
   */
  getTitles(){
    return this.PersonModel.getTitles(this.individual);
  }

  /**
   * @method getHeadlineTitle
   * @description Gets title and organization for a person
   * 
   * @returns {String}
   */
  getHeadlineTitle() {
    return this.PersonModel.getHeadlineTitle(this.individual);
  }

  /**
   * @method getBestLabel
   * @description Gets name of a person.
   * 
   * @returns {String}
   */
  getBestLabel() {
    return this.PersonModel.getBestLabel(this.individual);
  }

  /**
   * @method getEmailAddresses
   * @description Gets email addresses for person
   * 
   * @returns {Array}
   */
  getEmailAddresses(){
    if (this.emailArray.length > 0) return this.emailArray;
    return this.PersonModel.getEmailAddresses(this.individual);
  }

  /**
   * @method getWebsites
   * @description Gets websites for person
   * 
   * @returns {Array}
   */
  getWebsites() {
    if (this.websitesArray.length > 0) return this.websitesArray;
    return this.PersonModel.getWebsites(this.individual);
  }

  /**
   * @method getResearchSubjects
   * @description Gets research subjects for person
   * @param {Number} limit - Max number of subjects to return
   * 
   * @returns {Array}
   */
  getResearchSubjects(limit=-1) {
    let subjects = this.PersonModel.getResearchSubjects(this.individual);
    return subjects.slice(0, limit);
  }

  /**
   * @method _showSubSection
   * @description Logic for displaying different parts within a section
   * Attached to various ?hidden properties
   * 
   * @param {String} subsection - Identifier for a subsection.
   * @returns {Boolean}
   */
  _showSubSection(subsection) {
    if (!subsection) return false;

    if (subsection == 'contact') {
      if (this.getEmailAddresses().length > 0) return true;
   
    } else if (subsection == 'websites') {
      if (this.getWebsites().length > 0) return true;
    }

    return false;
  }

  /**
   * @method getPubExports
   * @description Returns the ways a user can export their publications.
   * 
   * @returns {Array}
   */
  getPubExports() {
    return [{text: "RIS", subtext: "(imports to MIV, Zotero, Mendeley)", href:`/api/miv/ucdrp:${this.assetId}`}];
  }

  /**
   * @method _onImpersonateClick
   * @description bound to impersonate button click event. Set cookie
   * and start refresh
   */
  _onImpersonateClick() {
    document.cookie = 'impersonate='+this.individual['@id'].split(':')[1]+'; path=/';
    location.reload();
  }

}

customElements.define('rp-page-person', RpPagePerson);
