import { LitElement, html } from 'lit-element';
import render from "./rp-page-home.tpl.js"

import "@ucd-lib/cork-app-utils";

import "../../components/alert";
import "../../components/person-preview";
import "../../components/search";

export default class RpPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object},
      facetsStatus: {type: String},
      facets: {type: Object},
      academicWorks: {type: Array},
      academicWorksTotal: {type: Number},
      peopleStatus: {type: String},
      people: {type: Array},
      peopleTotal: {type: Number},
      peopleWidth: {type: Number},
      subjectsTotal: {type: Number},
      context: {type: String},
      visible: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.reset_properties();
    this.facets = {};
    this.visible = false;
    this.academicWorksTotal = 0;
    this.peopleTotal = 0;
    this.subjectsTotal = 0;
    this.setPeopleWidth(window.innerWidth);
    this.context = APP_CONFIG.data.jsonldContext;

    this.theme = APP_CONFIG.theme;
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));

    this._handleResize = this._handleResize.bind(this);
  }

  reset_properties(){
    this.people = [];
    this.academicWorks = [];
    this.facetsStatus = 'loading';
    this.peopleStatus = 'loading';

  }

  updated(props) {
    if (props.has('facetsStatus')) {
      if (this.facetsStatus == 'loaded') {
        this._getPeople();
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

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this.reset_properties();
    await Promise.all([this._getFacets()]);
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  _onSearch(e){
    let url = "/search";
    if (e.target.nodeName == 'RP-SEARCH') {
      if (e.target.searchObject.facet.id == 'all') {
        url = `/search?s=${encodeURIComponent(e.target.inputValue)}`
      }
      else {
        url = `/search/${e.target.searchObject.facet.id}?s=${encodeURIComponent(e.target.inputValue)}`
      }
    }
    //console.log(url);
    this.AppStateModel.setLocation(url);
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  /**
   * Sets the text-width property of the rp-person-preview elements on this page.
   * It's the only way to get the ellipsis overflow on their titles. 
   * 
   * @param {Number} w - Window width (pixels)
   */
  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 72;
    let peopleColumnCt = 2;
    let peopleColumnGutters = 24;
    let rightColumnWidth = .7;
    let screenPadding = 40;
    let grace = 10;
    let containerWidth = 970;

    // desktop max
    if (w >= 1030) {
      pw = (containerWidth * rightColumnWidth) / peopleColumnCt - peopleColumnGutters;
    }

    // desktop min
    else if (w >= 800){
      screenPadding = 60;
      pw = (w - screenPadding) * rightColumnWidth / peopleColumnCt - peopleColumnGutters
    }

    // tablet max
    else if (w >= 550 + 40){
      containerWidth = 550;
      pw = containerWidth - grace;
    }
    // mobile
    else {
      pw = w - screenPadding - grace;
    }

    pw -= avatarWidth
    this.peopleWidth = Math.floor(pw);
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
      for (let recognizedFacet of this.CollectionModel.subFacets.works) {
        if (facet == recognizedFacet.es) {
          this.academicWorks.push({text: recognizedFacet.text, count: this.facets[facet], href: `/works/${recognizedFacet.id}`});
          break;
        }
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

}

customElements.define('rp-page-home', RpPageHome);
