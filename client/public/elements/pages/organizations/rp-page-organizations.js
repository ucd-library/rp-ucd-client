import { html } from 'lit';
import render from "./rp-page-organizations.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/person-preview"


export default class RpPageOrganizations extends RpUtilsCollection {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets(), this._getAzAgg()]);
  }

  async _getFacets() {
    let activeFilters = {};
    let facetAggs = await this.CollectionModel.overview('organizationsAggs');
    this.subFacetStatus = facetAggs.state;
    if (facetAggs.state != 'loaded') {
      return;
    }
    this.subFacets = this.CollectionModel._getSubFacets(facetAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-organizations', RpPageOrganizations);
