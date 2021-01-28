import { LitElement, html } from 'lit-element';
import render from "./rp-page-subjects.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";
import "../../components/subject-preview"


import "../../components/alert";

export default class RpPageSubjects extends RpUtilsCollection {

  static get properties(){
    return {
    }
  } 
 
  constructor(){
    super();
    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  
  async _onAppStateUpdate(state){
    requestAnimationFrame( () => this.doUpdate(state));
  }

  /**
   * @method doUpdate
   * @description reset props and update facets, this will rerender
   */

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible){
      return;
    }
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets(), this._getAzAgg()]);
  }

  /**
   * @method _getFacets
   * @description load and render the current overview subject facet list
   * 
   * @returns {Promise}
   */
  
  async _getFacets() {
    let activeFilters = {};
    let subjectsAggs = await this.CollectionModel.overview('subjectsAggs');
    this.subFacetStatus = subjectsAggs.state;
    if (subjectsAggs.state != 'loaded'){
      return;
    }
    console.log("subjectsAggs", subjectsAggs);
    this.subFacets = this.CollectionModel._getSubFacets('subjects', subjectsAggs.payload, this.currentQuery);
  }


}

customElements.define('rp-page-subjects', RpPageSubjects);
