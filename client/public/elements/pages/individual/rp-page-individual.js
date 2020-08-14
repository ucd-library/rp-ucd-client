import { LitElement } from 'lit-element';
import render from "./rp-page-individual.tpl.js";

import "../../components/alert";
import "../../components/avatar";
import "../../components/badge";
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
      publicationState: {type: String},
      retrievedPublications: {type: Array},
      totalPublications: {type: parseInt}

    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.individual = {};
    this.individualStatus = 'loading';
    this.publicationStatus = 'loading';
    this.retrievedPublications = [];
    this.totalPublications = 0;

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(e) {
    let path = await this.AppStateModel.get();
    path = path.location.path;
    if (path.length >= 2) {
      this.individualId = path[1];
    }
    if (this.individualId) {
      await Promise.all([this._doMainQuery(this.individualId),
                         this._doPubQuery(this.individualId)]);
    }

  }

  async _doMainQuery(id){
    let data = await this.PersonModel.getIndividual(id);
    this.individualStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.individual = data.payload;
    console.log(data);
  }

  async _doPubQuery(id, getMore=false){
    let data = await this.PersonModel.getPublications(id);
    this.publicationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.retrievedPublications = data.payload.results;
    this.totalPublications = data.payload.total;
    console.log(this.retrievedPublications);
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

}

customElements.define('rp-page-individual', RpPageIndividual);
