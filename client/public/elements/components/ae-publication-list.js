import { LitElement } from 'lit';
import {render, styles} from "./ae-publication-list.tpl.js";
import "../../src/models/PersonModel.js";
import "../../src/models/ResolverModel.js";
import config from "../../src/config.js";
import RdfUtils from "../../src/lib/rdf-utils.js"
import "./citation.js";
import "./modal.js";

export default class AePublicationList extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      isOwnProfile : {
        type: Boolean,
        attribute: 'is-own-profile'
      },
      totalPublications: {type: Number},
      publicationOverviewStatus: {type: String},
      publicationOverview: {type: Object},
      hasMultiplePubTypes: {type: Boolean},
      hideHeader: {
        type: Boolean,
        attribute: 'hide-header'
      },
      expertId: {
        type: String,
        attribute: 'expert-id'
      }
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.hideHeader = false;
    this._resetEleProps();

    this._injectModel('PersonModel', 'ResolverModel');
  }

  updated(props) {
    if( props.has('expertId') && this.expertId ) {
      this._resetEleProps();
      this._doPubOverviewQuery();
    }
  }

  _resetEleProps() {
    this.isOwnProfile = false;
    this.retrievedPublications = {};
    this.totalPublications = 0;
    this.publicationOverview = {};
    this.hasMultiplePubTypes = false;
    this.publicationOverviewStatus = 'loading';
    this.resolvedId = '';
  }

  async getExpertId() {
    if( this.resolvedId ) return this.resolvedId;
    if( this.expertId.match(/^\/?person\//) ) {
      return this.expertId;
    }

    let resp = await this.ResolverModel.resolve(this.expertId);
    if( resp.error ) {
      console.error(resp.error);
      this.dispatchEvent(new CustomEvent('unknown-id', {
        detail: this.expertId
      }));
      return '';
    }

    this.resolvedId = resp.payload['@id'].replace(config.data.prefix.ucdId+':', '');
    return this.resolvedId;
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
   * @method _doPubOverviewQuery
   * @description Gets aggregation counts of all publication types for this individual.
   * Kicks off further queries for the actual publication records if applicable.
   *
   * @returns {Promise}
   */
  async _doPubOverviewQuery() {
    let id = await this.getExpertId();

    this.publicationOverviewStatus = 'loading';
    let data = await this.PersonModel.getPubOverview(id);
    if( data.state === 'error' ) {
      this.publicationOverviewStatus = 'error';
      return;
    }
    if (data.state != 'loaded') {
      return;
    }

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
    let id = await this.getExpertId();

    let data = await this.PersonModel.getPublications(id, pubTypeObject, offset);

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
      let dt = RdfUtils.getLatestDate(pub.publicationDate);
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
   * @method getPubExports
   * @description Returns the ways a user can export their publications.
   *
   * @returns {Array}
   */
  getPubExports() {
    return [{text: "RIS", subtext: "(imports to MIV, Zotero, Mendeley)", href:`/api/miv/ucdrp:${this.assetId}`}];
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



}

customElements.define('ae-publication-list', AePublicationList);
