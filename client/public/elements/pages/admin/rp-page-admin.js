import { LitElement } from 'lit';
import {render, styles} from "./rp-page-admin.tpl.js";

import '@polymer/iron-pages';

import './rp-admin-dashboard';
import './rp-admin-record';

export default class RpPageAdmin extends Mixin(LitElement) 
  .with(LitCorkUtils) {

  static get properties() {
    return {
      view : {type: String}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AdminModel', 'AppStateModel');
    this.view = 'dashboard';
  }

  firstUpdated() {
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  _onAppStateUpdate(e) {
    if( e.page !== 'admin' ) return;

    if( e.location.path.length > 1 ) {
      this.view = 'record';
    } else {
      this.view = 'dashboard';
    }
  }


}

customElements.define('rp-page-admin', RpPageAdmin);