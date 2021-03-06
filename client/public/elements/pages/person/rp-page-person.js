import render from "./rp-page-person.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";
import UserUtils from "../../../src/lib/user-utils";
import rdfUtils from "../../../src/lib/rdf-utils";
 
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
      grantStatus: {type: String},
      publicationOverview: {type: Object},
      hasMultiplePubTypes: {type: Boolean},
      hasMultipleGrantTypes: {type: Boolean},
      retrievedPublications: {type: Object},
      retrievedGrants: {type: Object},
      showMoreGrants: {type: Number},
      totalPublications: {type: Number},
      totalGrants: {type: Number},
      isOwnProfile: {type: Boolean},
      submitText: {type: String, attribute: 'submitText'},
      isAdmin: {type: Boolean},
      showResearchSubjectCount : {type: Number},
      defaultResearchSubjectCount : {type: Number},
      tempGrantObject: {type: Object},
      activeGrant: {type:Array},
      inactiveGrant: {type:Array},

      title : {type: Object},
      additionalTitles : {type: Array}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.submitText = "Edit Publication";
    this.activeGrant = [];
    this.inactiveGrant = [];

    this._injectModel('PersonModel', 'GrantModel', 'AppStateModel');
    
    this.assetType = "person";
    this.defaultResearchSubjectCount = 8;

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

    let assetId = state.location.path.join('/');
    if( this.assetId === assetId ) {
      this._setActiveSection(state.location.hash);
      return;
    }
    
    this.assetId = assetId;

    this.getPageSections();
    this._setActiveSection(state.location.hash);
    this._resetEleProps();

    await this._doMainQuery(this.assetId);

    let titles = this.PersonModel.getTitles(this.individual);
    if( titles.length ) {
      this.title = titles.splice(0, 1)[0];
      this.additionalTitles = titles;
    }

    await Promise.all([
      this._doPubOverviewQuery(this.assetId),
      this._doGrantQuery(this.assetId)
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
    this.tempGrantObject = {};
    this.individualStatus = 'loading';
    this.retrievedPublications = {};
    this.retrievedGrants = [];
    this.showMoreGrants = false;
    this.totalPublications = 0;
    this.totalGrants = 0;
    this.isOwnProfile = false;
    this.publicationOverview = {};
    this.hasMultiplePubTypes = false;
    this.emailArray = [];
    this.websitesArray = [];
    this.grantStatus = 'loading';
    this.publicationOverviewStatus = 'loading';
    this.showResearchSubjectCount = this.defaultResearchSubjectCount;
    this.title = {};
    this.additionalTitles = [];
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
   * @method _doGrantQuery
   * @description Retrieves grants in chronological order. Rerenders.
   * 
   * @returns {Promise}
   */
  async _doGrantQuery(){
    let data = await this.PersonModel.getGrants(this.assetId, this.retrievedGrants.length);

    if( data.state === 'error' ) {
      this.grantStatus = 'error';
      return;
    }
    if (data.state != 'loaded') return;

    this.totalGrants = typeof data.payload.total === 'object' ? 0 : data.payload.total;
    
    this.retrievedGrants = [...this.retrievedGrants, ...data.payload.results];
    this.showMoreGrants = this.totalGrants-this.retrievedGrants.length;
    
    let activeGrant = [];
    let inactiveGrant = [];
    
    this.retrievedGrants.forEach(grant => {
      let dateStart = new Date(grant.dateTimeInterval.start.dateTime);
      let dateEnd = new Date(grant.dateTimeInterval.end.dateTime);
      let today = new Date();

      let person = grant.relates
        .filter(item => item.inheresIn)
        .find(item => item.inheresIn['@id'] === 'ucdrp:'+this.assetId);

      let role = this.GrantModel.getKnownGrantRole(person['@type']) || '';

      let grant_url =  grant["@id"].replace('ucdrp:', '/');
      let tempGrantObject = {
        "title": grant.label,
        "yearStart": dateStart.getFullYear(),
        "yearEnd": dateEnd.getFullYear(),
        "grant_type": "Grant",
        "indivRole": role,
        "funding_agency": grant.assignedBy.label,
        "grant_url": grant_url
      };

      if(today > dateEnd){
        inactiveGrant.push(tempGrantObject);
      } else if(today <= dateEnd){
        activeGrant.push(tempGrantObject);
      }
    });

    this.inactiveGrant.sort(function(a, b){
      return b.yearStart-a.yearStart;
    });

    this.activeGrant.sort(function(a, b){
      return b.yearStart-a.yearStart;
    });

    this.inactiveGrant = inactiveGrant;
    this.activeGrant = activeGrant;
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
   * @method _getOAId
   * @description get the open access policy (elements) id for a user
   * 
   * @returns {String}
   */ 
  _getOAId(){
    return this.PersonModel.getIdentifier(this.individual, 'oapolicy');
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
      if ( !pub.publicationDate ) continue;
      let dt = rdfUtils.getLatestDate(pub.publicationDate);
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
   * @param {Object} buttonType 
   * 
   * @returns {Boolean}
   */
  showMoreButton(buttonType) {
    return buttonType.displayedOffset < buttonType.ct;
  }

  /**
   * @method showMoreButton
   * @description used to toggle show less button
   * 
   * @param {Object} buttonType 
   * 
   * @returns {Boolean}
   */
  showLessButton(buttonType) {
    return buttonType.displayedOffset > buttonType.ct;
  }

  /**
   * @method showMoreButton
   * @description used to show more button value
   * 
   * @param {Object} buttonType 
   * 
   * @returns {Number}
   */
  showMoreCount(buttonType) {
    return buttonType.ct - buttonType.displayedOffset < 10 ? buttonType.ct - buttonType.displayedOffset : 10;
  }

  /**
   * @method showLessCount
   * @description used to show less button value
   * 
   * @param {Object} buttonType 
   * 
   * @returns {Number}
   */
  showLessCount(buttonType) {
    return buttonType.displayedOffset > buttonType.ct ? buttonType.ct - (buttonType.displayedOffset - 10) : 10;
  }

  /**
   * @method getHeadlineTitle
   * @description Gets title and organization for a person
   * 
   * @returns {String}
   */
  // getHeadlineTitle() {
  //   return this.PersonModel.getHeadlineTitle(this.individual);
  // }

  /**
   * @method getFullName
   * @description Gets name of a person.
   * 
   * @returns {String}
   */
  getFullName() {
    return this.PersonModel.getFullName(this.individual);
  }

  /**
   * @method getPronouns
   * @description Gets name of a person.
   * 
   * @returns {String}
   */
  getPronouns() {
    return this.PersonModel.getPronouns(this.individual);
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
    if (limit == -1) return subjects;
    return subjects.slice(0, limit);
  }

  _showAllResearchSubjects() {
    this.showResearchSubjectCount = this.getResearchSubjects().length;
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
