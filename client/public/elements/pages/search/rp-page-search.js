import { LitElement } from 'lit-element';
import render from "./rp-page-search.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";
import "../../components/link-list";
import "../../components/pagination";


export default class RpPageSearch extends Mixin(RpUtilsCollection)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      mainFacet: {type: String},
      mainFacetIndex: {type: Number},
      textQuery: {type: String},
      data: {type: Array},
      dataStatus: {type: String},
      dataTotal: {type: Number},
      peopleWidth: {type: Number},
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('CollectionModel', 'AppStateModel');
    this.mainFacet = 'none';
    this.mainFacetIndex = 0;
    this.textQuery = '';
    this.data = [];
    this.dataStatus = 'loading';
    this.dataTotal = 0;
    this.setPeopleWidth(window.innerWidth);


    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  updated(props) {

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

    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  async _onAppStateUpdate(state) {
    let path = state.location.path;
    let query = state.location.query;
    if (path.length >= 2) {
      this.mainFacet = path[1].toLowerCase();
    }
    if (query.s) {
      this.textQuery = query.s;
    }

    let q = {...this._parseUrlQuery()};
    console.log("q", q);
    //await this.update
    await Promise.all([this._doMainQuery(q)]);
  }

  async _doMainQuery(q){
    this.CollectionModel.textQuery = this.textQuery;
    let data = await this.CollectionModel.query(q);
    this.dataStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    if (typeof data.payload.total === 'object') {
      this.dataTotal = 0;
    }
    else {
      this.dataTotal = data.payload.total;
    }

    this.data = data.payload.results;
    console.log(data);
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .7 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
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
