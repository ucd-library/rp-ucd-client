import { LitElement } from 'lit-element';
import render from "./rp-page-home.tpl.js"

import "@ucd-lib/cork-app-utils";

import "../../components/search"


export default class RpPageHome extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      theme: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('CollectionModel');

    this.theme = APP_CONFIG.theme;
  }

  async _renderAcademicWorks() {
    let facetList = await this.CollectionModel.overview('facets');
    console.log(facetList);
  }

}

customElements.define('rp-page-home', RpPageHome);
