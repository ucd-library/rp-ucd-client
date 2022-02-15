import render from "./rp-page-people.tpl.js";

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/person-preview";


export default class RpPagePeople extends RpUtilsCollection {

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
    if( state.page !== 'people' ) return;
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets(), this._getAzAgg()]);
  }


    /**
   * @method _pubRedirect
   * @description redirect
   * 
   */
     _pubRedirect(e){
      // e.path[1].style.display = "none";
      let href = '/people';
      this.AppStateModel.setLocation(href);
      this.searchsubject = '';
      this.requestUpdate();
    }

  /**
   * @method _getFacets
   * @description load and render the current overview subject facet list
   * 
   * @returns {Promise}
   */
  async _getFacets() {
    let activeFilters = {};
    let kwargs = {}

    if (this.currentQuery.subjectFilter) kwargs.subjectFilter = this.currentQuery.subjectFilter;

    let peopleAggs = await this.CollectionModel.overview('peopleAggs', kwargs);
    this.subFacetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    this.subFacets = this.CollectionModel._getSubFacets(peopleAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-people', RpPagePeople);
