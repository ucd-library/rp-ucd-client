import render from "./rp-page-search.tpl.js";

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/link-list";
import "../../components/pagination";


/**
 * @class RpPageSearch
 * @description Element for displaying search page
 */
export default class RpPageSearch extends RpUtilsCollection {

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
   * @method updated
   * @description lit method called when props update
   * 
   * @param {Object} props 
   */
  updated(props) {
    super.updated(props);
    // set primary facet
    if (props.has('mainFacet') && this.mainFacet != 'none') {
      let isRecognizedFacet = false;
      let i = 0;
      for (let option of this.CollectionModel.mainFacets) {
        i++;
        if (option.id.toLowerCase() == this.mainFacet.toLowerCase()) {
          isRecognizedFacet = true;
          this.mainFacetIndex = i;
          break;
        }
      }
      if (!isRecognizedFacet) {
        this.mainFacet = 'none';
        this.mainFacetIndex = 0;
      }
    }
 
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  /**
   * @method doUpdate
   * @param {Object} state
   * @description reset props and update facets, this will rerender
   * and promise to run MainQuery() and searchAggs()
   */
  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getSearchAggs()]);
    this.setPeopleWidth(window.innerWidth);
  }

}

customElements.define('rp-page-search', RpPageSearch);
