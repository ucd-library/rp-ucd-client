import render from "./rp-page-works.tpl.js";

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/person-preview";


export default class RpPageWorks extends RpUtilsCollection {

  static get properties() {
    return {}
  }

  constructor() {
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
  async _onAppStateUpdate(state) {
    this.doUpdate(state);
    this.requestUpdate();
  }

  /**
   * @method doUpdate
   * @param {Object} state
   * @description collects the path and set the location to the
   * works path, then performs this with the state, this will rerender
   */
  async doUpdate(state) {
    if( state.page !== 'works' ) return;
    this._parseUrlQuery(state);
    await Promise.all([
      this._doMainQuery(), 
      this._getFacets(), 
      this._getAzAgg()
    ]);

  }

  /**
   * @method _pubRedirect
   * @description redirect
   * 
   */
  _pubRedirect(e){
    // e.path[1].style.display = "none";
    let href = '/works';
    this.AppStateModel.setLocation(href);
    this.searchsubject = '';
    this.requestUpdate();
  }

  /**
   * @method _getFacets
   * @description load and render the current overview works facet list
   * and sub facets from the CollectionModel
   * 
   */
  async _getFacets() {
    let activeFilters = {};
    let kwargs = {}
    if (this.currentQuery.subjectFilter) kwargs.subjectFilter = this.currentQuery.subjectFilter;
    let facetAggs = await this.CollectionModel.overview('worksAggs', kwargs);
    this.subFacetStatus = facetAggs.state;
    if (facetAggs.state != 'loaded') {
      return;
    }
    this.subFacets = this.CollectionModel._getSubFacets(facetAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-works', RpPageWorks);
