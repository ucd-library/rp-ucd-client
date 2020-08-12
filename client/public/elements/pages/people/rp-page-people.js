import { html } from 'lit-element';
import render from "./rp-page-people.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";


export default class RpPagePeople extends Mixin(RpUtilsCollection)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      filtersDefault: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.filtersDefault = {"@type": {"type": "keyword", "op": "and", "value": [APP_CONFIG.data.jsonldContext + ":person"]}};
  }

}

customElements.define('rp-page-people', RpPagePeople);
