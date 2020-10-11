import { LitElement } from 'lit-element';
import render from "./rp-page-individual.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/avatar";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/modal";



export default class RpPageIndividual extends RpUtilsLanding {

  static get properties() {
    return {
      individual: {type: Object},
      individualStatus: {type: String},
      publicationOverviewStatus: {type: String},
      publicationOverview: {type: Object},
      hasMultiplePubTypes: {type: Boolean},
      retrievedPublications: {type: Object},
      totalPublications: {type: Number},
      isOwnProfile: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.assetType = "individual";

    this._resetEleProps();


    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
   requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state) {
    let updateData = true;
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    let path = state.location.path;
    if (path.length >= 2) {
      if (this.assetId == path[1]) updateData = false;
      this.assetId = path[1];
      this.PersonModel.individualId = this.assetId;
    }
    let sections = this.getPageSections();
    if (!this.assetId) return;
    this._setActiveSection(path);

    if (!updateData) return;
    this._resetEleProps()
    await Promise.all([this._doMainQuery(this.assetId),
                        this._doPubOverviewQuery(this.assetId)]);
    this.isOwnProfile = this._isOwnProfile();

  }

  updated(props){
    if (props.has('assetId') && this.assetId) {
      this.shadowRoot.getElementById('hero').shuffle();
    }
  }

  _resetEleProps() {
    this.individual = {};
    this.individualStatus = 'loading';
    this.retrievedPublications = {};
    this.totalPublications = 0;
    this.isOwnProfile = false;
    this.publicationOverview = {};
    this.hasMultiplePubTypes = false;
    this.publicationOverviewStatus = 'loading';
  }

  async _loadPubs(pubType, getMore=true){
    let offset = this.publicationOverview[pubType].displayedOffset;
    if (offset < 10) {
      offset = 10;
    }
    else if (!getMore) {
      offset -= 10;
    }
    this.publicationOverview[pubType].displayedOffset = getMore ? offset + 10 : offset;
    await this._doPubQuery(this.publicationOverview[pubType], offset=offset);

  }

  async _doMainQuery(id){
    let data = await this.PersonModel.getIndividual(id);
    this.individualStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.individual = data.payload;
    if (APP_CONFIG.verbose) console.log(data);
  }

  async _doPubOverviewQuery(id) {
    let data = await this.PersonModel.getPubOverview(id);
    if (data.state != 'loaded') {
      return;
    }
    if (APP_CONFIG.verbose) console.log('pub overview:', data);

    let totalPubs = 0;
    let pubTypes = {};
    for (let possiblePubType of this.PersonModel.getPublicationTypes()) {
      let ct = data.payload.aggregations.facets['@type'][possiblePubType.es]
      if (ct) {
        totalPubs += ct;
        pubTypes[possiblePubType.id] = {...possiblePubType, ct: ct, displayedOffset: 0, dataStatus: 'loading'}
      }
    }
    this.hasMultiplePubTypes = Object.keys(pubTypes).length > 1;
    for (let pubType in pubTypes) {
      pubTypes[pubType].displayedOffset = this.hasMultiplePubTypes ? 5 : 10;

    }
    this.totalPublications = totalPubs;
    this.publicationOverview  = pubTypes;

    Object.values(pubTypes).map(pt => this._doPubQuery(pt));

  }

  async _doPubQuery(pubTypeObject, offset=0){

    let data = await this.PersonModel.getPublications(this.assetId, pubTypeObject, offset);
    this.publicationOverview[pubTypeObject.id].dataStatus = data.request.state;
    if (data.request.state != 'loaded') return;
    if (APP_CONFIG.verbose) console.log(`${pubTypeObject.id} pubs:`, data);
    this.retrievedPublications[pubTypeObject.id] = data.masterStore;
    this.requestUpdate();




    /*
    if ( this.retrievedPublications.length < this.totalPublications ) {
      offset = this.retrievedPublications.length;
    }
    let data = await this.PersonModel.getPublications(id, offset);
    this.publicationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    if (APP_CONFIG.verbose) console.log("pubs", data);

    this.retrievedPublications = data.payload.results;
    if (data.payload.results.length > 0) {
      this.totalPublications = data.payload.total;
    }
    */
  }

  _isOwnProfile() {
    try {
      if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === this.assetId.toLowerCase()) {
        return true;
      }
    } catch (error) {}
    return false;
  }

  getPubsByYear(pubType){
    let output = [];
    if (!this.publicationOverview[pubType] || !this.retrievedPublications[pubType]) return output;
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

  // All these machinations are particular to the UI, and won't be  changed in
  // database IMO.  Joining contacts is pretty much a PPS thing.
  getIndividualTitles(){
    let titles = [];
    if (!this.individual) {
      return titles;
    }
    if (typeof this.individual.hasContactInfo === 'object') {
      let contactInfo = [];
      if (Array.isArray(this.individual.hasContactInfo)) {
        contactInfo = [...this.individual.hasContactInfo].sort((a,b)=>(a.rank?a.rank:100)-(b.rank?b.rank:100));
      }
      else {
        contactInfo = [this.individual.hasContactInfo];
      }
      // If first contact is odr, than only use odr,
      let identifier_match=null
      if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^odr/)) {
        identifier_match=/^odr/
      } else if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^pps/)) {
        identifier_match=/^pps/    // If first is pps only include pps
      } else {                 // Otherwise include them all
        identifier_match=null
      }
      // Next join every organization with a common title, where titles are organized
      // by rank.
      for (let c of contactInfo) {
        if (!(c.title && (! identifier_match || (c.identifier && c.identifier.match(identifier_match)))))
          continue;
        if (! Array.isArray(c.title)) { c.title=[c.title] }
        for (const t of c.title) {
          let ind=titles.findIndex((have)=>have.title===t)
          if (ind > -1) {
            if (c.organization) {
              if (! Array.isArray(c.organization))
                c.organization=[c.organization]
              for (const o of c.organization) {
                if (titles[ind].orgs.findIndex((have)=>have===o) === -1)
                  titles[ind].orgs.push(o)
              }
            }
          } else {
            let new_title={title:t,orgs:[]}
            if (c.organization) {
              if (Array.isArray(c.organization)) {
                new_title.orgs.push(...c.organization)
              } else {
                new_title.orgs.push(c.organization)
              }
            }
            titles.push(new_title);
          }
        }
      }
    }
    // titles are objects; {title:string,orgs:["string"]}
    return titles;
  }
  getHeadlineTitle() {
    let title=""
    let best=this.getIndividualTitles()[0];
    if (best && best.title)
      title=best.title;
    if (best && best.orgs[0])
      title+=`, ${best.orgs[0]}`
    return title;
  }
  getBestLabel() {
    if (this.individual && this.individual.label) {
      if (Array.isArray(this.individual.label)) {
        // Prefer the shortest one? This prefers fname lname over lname, fname
        return this.individual.label.sort((a,b)=> a.length - b.length)[0]
      }
      return this.individual.label
    }

    return "";

    }

  getEmailAddresses(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.hasEmail) {
      if (Array.isArray(this.individual.hasContactInfo.hasEmail)) {
        return this.individual.hasContactInfo.hasEmail.map(e => e.email);
      }
      return [this.individual.hasContactInfo.hasEmail.email]
    }

    return [];
  }

  getWebsites() {
    let out = [];
    if (!this.individual) {
      return out;
    }
    if (this.individual.orcidId) {
      out.push({'text': this.individual.orcidId['@id'], 'href': this.individual.orcidId['@id'], 'icon': '/images/orcid_16x16.png'})
    }
    if (this.individual.scopusId) {
      out.push({'text': 'Scopus', 'href': `https://www.scopus.com/authid/detail.uri?authorId=${this.individual.scopusId}`})
    }

    return out;
  }

  getPubExports() {
    return [{text: "RIS", subtext: "(imports to MIV, Zotero, Mendeley)", href:`/api/miv/${this.assetId}`}];
  }

  formatSubjectsObject(subjects){
    let out = [];
    for (let subject in subjects) {
      let subObj = {subject: subject, count: subjects[subject], label: subject};
      let words = subject.split(" ");
      if (words[0].startsWith("0") && !isNaN(words[0])) {
        subObj.label = words.slice(1,).join(" ");
      }
      out.push(subObj);
    }

    out.sort(function (a, b) {
      return b['count'] - a['count'];
    });
    return out;
  }

}

customElements.define('rp-page-individual', RpPageIndividual);
