import { LitElement, html } from 'lit-element';
import render from "./rp-page-home.tpl.js"

import "@ucd-lib/cork-app-utils";

import "../../components/alert";
import "../../components/link-list-counts";
import "../../components/search";

export default class RpPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object},
      facetsStatus: {type: String},
      facets: {type: Object},
      academicWorks: {type: Array},
      academicWorksTotal: {type: parseInt},
      peopleStatus: {type: String},
      people: {type: Array},
      peopleTotal: {type: parseInt},
      subjectsTotal: {type: parseInt},
      context: {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.facets = {};
    this.academicWorks = []
    this.facetsStatus = 'loading';
    this.academicWorksTotal = 0;
    this.peopleStatus = 'loading';
    this.people = [];
    this.peopleTotal = 0;
    this.subjectsTotal = 0;
    this.context = APP_CONFIG.data.jsonldContext;

    this.theme = APP_CONFIG.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(e) {
    await this._getFacets();
  }

  updated(changedProperties) {
    if (changedProperties.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        this._getPeople();
      }
    }
  }

  async _getPeople() {
    let peopleList = await this.CollectionModel.overview('randomPeople', {limit: 4, total: this.peopleTotal});
    this.peopleStatus = peopleList.state;
    if (peopleList.state != "loaded") {
      return;
    }
    this.people = peopleList.payload.results;
    console.log(this.people);
  }

  async _getFacets() {
    let facetList = await this.CollectionModel.overview('facets');
    this.facetsStatus = facetList.state;
    if (facetList.state != 'loaded') {
      return;
    }
    this.facets = facetList.payload.aggregations.facets['@type'];
    for (let facet in this.facets) {
      if (facet.startsWith('bibo:')) {

        let biboType = this._formatBibType(facet);
        this.academicWorks.push({text: biboType, count: this.facets[facet], facet: facet});
        continue;
      }
      if (facet == (this.context + ":publication")) {
        this.academicWorksTotal = this.facets[facet];
      }
      if (facet == (this.context + ":person")) {
        this.peopleTotal = this.facets[facet];
      }
    }

    this.academicWorks.sort(function(a, b) {
      let A = a.text.toUpperCase();
      let B = b.text.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    });

  }

  _formatBibType(bib, splitCamel=true, makePlural=true) {
    bib = bib.slice(5,);

    if (splitCamel) {
      bib = [...bib];
      for (let i = 0; i < bib.length; i++) {
        if (i == 0) {
          continue;
        }
        if (bib[i] == bib[i].toUpperCase()) {
          bib[i] = " " + bib[i];
        }
      }
      bib = bib.join("");
    }

    if (makePlural) {
      bib += "s";
    }
    return bib;
  }

}

customElements.define('rp-page-home', RpPageHome);