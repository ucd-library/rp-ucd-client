import { LitElement } from 'lit-element';
import render from "./rp-page-individual.tpl.js";

import "../../components/alert";
import "../../components/avatar";
import "../../components/badge";
import "../../components/citation";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";



export default class RpPageIndividual extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      individual: {type: Object},
      individualId: {type: String},
      individualStatus: {type: String},
      publicationStatus: {type: String},
      retrievedPublications: {type: Array},
      totalPublications: {type: Number},
      researchSubjects: {type: Array},
      researchSubjectsToShow: {type: Number},
      activeSection: {type: Object},
      visible: {type: Boolean},
      isOwnProfile: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.individual = {};
    this.individualId = '';
    this.individualStatus = 'loading';
    this.publicationStatus = 'loading';
    this.visible = false;
    this.retrievedPublications = [];
    this.totalPublications = 0;
    this.researchSubjects = [];
    this.researchSubjectsToShow = 4;
    this.activeSection = {index: 0};
    this.isOwnProfile = false;

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
   requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state) {
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    let path = state.location.path;
    if (path.length >= 2) {
      this.individualId = path[1];
      this.PersonModel.individualId = this.individualId;
    }
    this.activeSection = this.PersonModel.getActiveSection(path[2])
    if (!this.individualId) return;

    this.totalPublications = 0;
    await Promise.all([this._doMainQuery(this.individualId),
                        this._doPubQuery(this.individualId)]);
    this.isOwnProfile = this._isOwnProfile();

  }

  updated(props){
    if (props.has('individualId') && this.individualId) {
      this.shadowRoot.getElementById('hero').shuffle();
    }
  }

  async _loadMorePubs(){
    await this._doPubQuery(this.individualId);
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

  async _doPubQuery(id){
    let offset = 0;
    if (!id) {
      id = this.individualId;
    }
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

      let researchSubjects = data.payload.aggregations.facets["hasSubjectArea.label"];
      if (researchSubjects && Object.keys(researchSubjects).length > 0) {
        //this.researchSubjects = this.formatSubjectsObject(researchSubjects);
      }
    }
    if (APP_CONFIG.verbose) console.log("research subjects", this.researchSubjects);

  }

  _isOwnProfile() {
    try {
      if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === this.individualId.toLowerCase()) {
        return true;
      }
    } catch (error) {}
    return false;
  }

  hideSection(section){
    if (this.activeSection.index == 0) {
      return false;
    }

    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  getIndividualTitles(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.title) {
      if (Array.isArray(this.individual.hasContactInfo.title)) {
        return this.individual.hasContactInfo.title;
      }
      else {
        return [this.individual.hasContactInfo.title];
      }

    }

    return [];
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
      out.push({'text': 'Orcid', 'href': this.individual.orcidId['@id']})
    }
    if (this.individual.scopusId) {
      out.push({'text': 'Scopus', 'href': `https://www.scopus.com/authid/detail.uri?authorId=${this.individual.scopusId}`})
    }

    return out;
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
