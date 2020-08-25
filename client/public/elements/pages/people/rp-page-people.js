import { html } from 'lit-element';
import render from "./rp-page-people.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/person-preview"


export default class RpPagePeople extends RpUtilsCollection {

  static get properties() {
    return {
      facetStatus: {type: String},
      facets: {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.facetStatus = 'loading';
    this.facets = [];

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets()]);

  }

  async _getFacets() {
    let activeFilters = {};
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.facetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    this.facets = [];

    // Format people types
    let facetName = "@type";
    let activeFilterValue = "";
    let activeFilterIndex = 0;
    let peopleTypes = [{label: 'All',
                        count: peopleAggs.payload.total, text: `All (${peopleAggs.payload.total})`}];
    let t = peopleAggs.payload.aggregations.facets[facetName];
    let prefix = 'vivo:';
    let i = 1;
    if (activeFilters && activeFilters[facetName]) {
      activeFilterValue = JSON.stringify(activeFilters[facetName].value);
    }
    for (let key in t) {
      if (key.startsWith(prefix)) {
        let label = this.CollectionModel._formatAgg(key, prefix);
        let filters = {type: "keyword", op: 'and', value: [key]};
        if (activeFilterValue == JSON.stringify(filters.value) ) {
          activeFilterIndex = i;
        }
        peopleTypes.push({label: label,
                          count: t[key],
                          text: `${label} (${t[key]})`,
                          filters: {"@type": filters},
                          name: key});
        i++;
      }
    }
    this.facets.push({values: peopleTypes,
                      activeIndex: activeFilterIndex,
                      id: facetName})

    console.log('facets:', this.facets);
  }

}

customElements.define('rp-page-people', RpPagePeople);
