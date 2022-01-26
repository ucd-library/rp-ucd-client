import render from "./rp-page-person.tpl.js";
import { html } from 'lit';
import RpUtilsLanding from "../../utils/rp-utils-landing";
import rdfUtils from "../../../src/lib/rdf-utils";
import config from "../../../src/config.js";

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
import "../../components/ae-publication-list";


/**
 * @class RpPagePerson
 * @description Landing page for an individual person.
 * Inherits the RpUtilsLanding element, which handles a lot of the rendering.
 */
export default class RpPagePerson extends RpUtilsLanding {

  #privateField = 42;

  static get properties() {
    return {
      individual: {type: Object},
      individualStatus: {type: String},
      grantStatus: {type: String},
      hasMultiplePubTypes: {type: Boolean},
      hasMultipleGrantTypes: {type: Boolean},
      retrievedPublications: {type: Object},
      retrievedGrants: {type: Object},
      showMoreGrants: {type: Number},
      totalPublications: {type: Number},
      totalGrants: {type: Number},
      isOwnProfile: {type: Boolean},
      submitText: {type: String, attribute: 'submitText'},
      showResearchSubjectCount : {type: Number},
      defaultResearchSubjectCount : {type: Number},
      tempGrantObject: {type: Object},
      activeGrant: {type:Array},
      inactiveGrant: {type:Array},
      isLoggedIn: {type: Boolean},

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
    this.isLoggedIn = config.user ? true : false;

    this._injectModel('PersonModel', 'GrantModel', 'AppStateModel');

    this.assetType = "person";
    this.defaultResearchSubjectCount = 8;

    this._resetEleProps();

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    
    console.log(this.#privateField)
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
    this.svgIcon = {
      'url': html`
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M640,328V312a16,16,0,0,0-16-16H344V256h72a32,32,0,0,0,32-32V96a32,32,0,0,0-32-32H224a32,32,0,0,0-32,32V224a32,32,0,0,0,32,32h72v40H16A16,16,0,0,0,0,312v16a16,16,0,0,0,16,16H120v40H64a32,32,0,0,0-32,32V544a32,32,0,0,0,32,32H224a32,32,0,0,0,32-32V416a32,32,0,0,0-32-32H168V344H472v40H416a32,32,0,0,0-32,32V544a32,32,0,0,0,32,32H576a32,32,0,0,0,32-32V416a32,32,0,0,0-32-32H520V344H624A16,16,0,0,0,640,328ZM256,192V128H384v64ZM192,512H96V448h96Zm352,0H448V448h96Z"/>
              </svg> `,
      'email': html`
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.3,190.8a6,6,0,0,1,9.7,4.7V400a48,48,0,0,1-48,48H48A48,48,0,0,1,0,400V195.6a6,6,0,0,1,9.7-4.7c22.4,17.4,52.1,39.5,154.1,113.6,21.1,15.4,56.7,47.8,92.2,47.6,35.7.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8ZM256,320c23.2.4,56.6-29.2,73.4-41.4,132.7-96.3,142.8-104.7,173.4-128.7A23.93,23.93,0,0,0,512,131V112a48,48,0,0,0-48-48H48A48,48,0,0,0,0,112v19a24.08,24.08,0,0,0,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7,16.8,12.2,50.2,41.8,73.4,41.4Z"/>
              </svg>`,
      'orcid': html `
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512">
                <path id="path2"
                  d="m 336.6206,194.53756 c -7.12991,-3.32734 -13.8671,-5.55949 -20.25334,-6.61343 -6.36534,-1.09517 -16.57451,-1.61223 -30.71059,-1.61223 h -36.70409 v 152.74712 h 37.63425 c 14.6735,0 26.08126,-1.01267 34.22385,-3.01709 8.14259,-2.00442 14.92159,-4.52592 20.35674,-7.62608 5.43519,-3.07925 10.416,-6.8615 14.94192,-11.38742 14.4876,-14.71475 21.74129,-33.27334 21.74129,-55.7176 0,-22.05151 -7.44016,-40.05177 -22.34085,-53.98159 -5.49732,-5.16674 -11.82143,-9.44459 -18.88918,-12.79281 z M 255.99999,8.0000031 C 119.02153,8.0000031 8.0000034,119.04185 8.0000034,255.99998 8.0000034,392.95812 119.02153,504 255.99999,504 392.97849,504 504,392.95812 504,255.99998 504,119.04185 392.97849,8.0000031 255.99999,8.0000031 Z M 173.66372,365.51268 H 144.27546 V 160.1481 h 29.38826 z M 158.94954,138.69619 c -11.13935,0 -20.21208,-9.01056 -20.21208,-20.21208 0,-11.11841 9.05183,-20.191181 20.21208,-20.191181 11.18058,0 20.23244,9.051831 20.23244,20.191181 -0.0219,11.22184 -9.05186,20.21208 -20.23244,20.21208 z m 241.3866,163.59715 c -5.29051,12.54475 -12.83407,23.58066 -22.65053,33.08742 -9.98203,9.83734 -21.59659,17.19443 -34.84378,22.19616 -7.74983,3.01709 -14.83852,5.06335 -21.30725,6.11726 -6.4891,1.01267 -18.82759,1.50883 -37.07593,1.50883 H 219.5033 V 160.1481 h 69.23318 c 27.96195,0 50.03378,4.1541 66.31951,12.54476 16.26485,8.36977 29.18144,20.72859 38.79164,36.97254 9.61013,16.26483 14.4254,34.01757 14.4254,53.19607 0.0227,13.76426 -2.66619,26.90802 -7.93576,39.43187 z"/>
              </svg>`,
      'scopus': html `
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512">
                <path id="rect1609"
                  d="M 64,64 V 448 H 448 V 64 Z m 116.81542,99.92578 c 22.22181,0 32.04017,2.58584 45.73537,8.27051 l -1.292,20.41113 c -14.72837,-8.7855 -26.35575,-11.36718 -43.15137,-11.36718 -19.37945,0 -29.2002,14.72659 -29.2002,28.16308 0,18.08753 17.31277,24.80703 33.59181,34.62597 20.92965,12.40292 42.63573,23.51411 42.63573,48.06153 0,32.2992 -27.64955,48.57714 -54.00585,48.57714 -18.86288,0 -32.5565,-2.84253 -45.99316,-9.04393 l 3.10254,-20.41407 c 13.17814,8.01015 24.54717,11.88867 41.85937,11.88867 17.57072,0 32.29688,-11.88662 32.29688,-28.42383 0,-17.05391 -16.53489,-23.51559 -32.29688,-33.07617 -21.18819,-12.91968 -44.44336,-24.28934 -44.44336,-50.64551 0,-26.35612 19.37863,-47.02734 51.16112,-47.02734 z m 161.70412,0 c 26.09777,0 37.72572,3.10211 51.9375,9.82031 l -1.54982,19.37988 c -15.50393,-8.52716 -31.78349,-11.88573 -52.97168,-11.88573 -33.59128,0 -62.27343,26.61294 -62.27343,69.76464 0,40.82619 29.19944,71.5752 65.8916,71.5752 16.79562,0 33.59152,-3.35879 49.35351,-11.88575 l 1.54981,19.6377 c -13.95327,6.97658 -31.52275,9.82031 -52.71094,9.82031 -42.11835,0 -87.33692,-31.00949 -87.33692,-87.59766 0,-49.6116 37.98197,-88.6289 88.11037,-88.6289 z" />
              </svg>
        `
    };
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
    if (config.verbose) console.log(data);
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
    if (config.verbose) console.log('pub overview:', data);

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
    console.log("Payload:",data.payload);
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
      if ( config.user.expertsId && config.user.expertsId === this.assetId) {
        return true;
      }
    } catch (error) {
      if (config.verbose) console.warn(`Own Profile Error: ${error}`);
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
