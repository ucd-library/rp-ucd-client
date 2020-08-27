import { LitElement } from 'lit-element';
import render from "./rp-page-search.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/link-list";
import "../../components/pagination";


export default class RpPageSearch extends RpUtilsCollection {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  updated(props) {
    this.doUpdated(props);

    // set primary facet
    if (props.has('mainFacet') && this.mainFacet != 'none') {
      let isRecognizedFacet = false;
      let i = 0;
      for (let option of this.CollectionModel.mainFacets) {
        i++;
        if (option.id.toLowerCase() == this.mainFacet.toLowerCase()) {
          if (option.disabled) {
            continue;
          }
          isRecognizedFacet = true
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

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery()]);
  }


  getMainFacetLinks(){
    let links = [{id: 'none', text: 'All Results', href: `/search?s=${encodeURIComponent(this.textQuery)}`}]
    for (let f of this.CollectionModel.mainFacets) {
      f.href = `/search/${f.id}?s=${encodeURIComponent(this.textQuery)}`
      links.push(f)
    }
    return links
  }

}

customElements.define('rp-page-search', RpPageSearch);
