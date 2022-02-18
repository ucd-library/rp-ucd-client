import render from "./rp-page-concepts.tpl.js";

import RpUtilsCollection from "../../utils/rp-utils-collection";
import "../../components/subject-preview";


import "../../components/alert";

export default class RpPageConcepts extends RpUtilsCollection {

  static get properties(){
    return {
    };
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
   * @param {Object} state
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
    //let activeFilters = {};
    let kwargs = {}
    if (this.currentQuery.subjectFilter) kwargs.subjectFilter = this.currentQuery.subjectFilter;
    let subjectsAggs = await this.CollectionModel.overview('subjectsAggs', kwargs);
    this.subFacetStatus = subjectsAggs.state;
    if (subjectsAggs.state != 'loaded'){
      return;
    }
    console.log("subjectsAggs", subjectsAggs);
    this.subFacets = this.CollectionModel._getSubFacets(subjectsAggs.payload, this.currentQuery);
  }

 
}

customElements.define('rp-page-concepts', RpPageConcepts);
