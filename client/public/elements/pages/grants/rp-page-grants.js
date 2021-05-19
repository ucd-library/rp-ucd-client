import render from "./rp-page-grants.tpl.js";

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/grant-preview";

/**
 * @class RpPageGrants
 * @description main grant page
 */
export default class RpPageGrants extends RpUtilsCollection {

  static get properties() {
    return {
    };
  }
 
  constructor() {
    super();
    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  /**
   * @method _onAppStateUpdate
   * @param {Object} state 
   * @description bound to AppStateModel app-state-update event
   * 
   */
  async _onAppStateUpdate(state) {
    this.doUpdate(state);
  }

  /**
   * @method doUpdate
   * @param {Object} state
   * @description reset props and update facets, this will rerender
   */
  async doUpdate(state){
    if( state.page !== 'grants' ) return;
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
    let grantsAggs = await this.CollectionModel.overview('grantsAggs');
    this.subFacetStatus = grantsAggs.state;
    if (grantsAggs.state != 'loaded') {
      return;
    }
    this.subFacets = this.CollectionModel._getSubFacets(grantsAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-grants', RpPageGrants);
