import { html } from 'lit-element';
import render from "./rp-page-people.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/person-preview"


export default class RpPagePeople extends RpUtilsCollection {

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
    await Promise.all([this._doMainQuery(), this._getFacets()]);
  }

  async _getFacets() {
    let activeFilters = {};
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.subFacetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    console.log("peopleaggs", peopleAggs);
    this.subFacets = this.CollectionModel._getSubFacets('people', peopleAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-people', RpPagePeople);
