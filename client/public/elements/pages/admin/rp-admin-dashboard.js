import { LitElement } from 'lit';
import {render, styles} from "./rp-admin-dashboard.tpl.js";

export default class RpAdminDashboard extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      loadingErrors : {type: Boolean},
      errors : {type: Object}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AdminModel');

    this.errors = {
      results : [],
      total : 0
    };
  }

  async firstUpdated() {
    let errors = (await this.AdminModel.errors()).payload;
    if( typeof errors.total === 'object' ) errors.total = errors.total.value;
    this.errors = errors;

    console.log(this.errors);
  }

}

customElements.define('rp-admin-dashboard', RpAdminDashboard);