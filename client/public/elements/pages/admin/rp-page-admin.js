import { LitElement } from 'lit';
import {render, styles} from "./rp-page-admin.tpl.js";
import JSONFormatter from "json-formatter-js";

export default class RpPageAdmin extends Mixin(LitElement) 
  .with(LitCorkUtils) {

  static get properties() {
    return {
      uri : {type: String},
      type : {type: String},
      loadingState : {type: String}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AdminModel', 'AppStateModel');
  
    this.loadingState = '';
    this.uri = '';
  }

  firstUpdated() {
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  _onAppStateUpdate(e) {
    if( e.page !== 'admin' ) return;

    if( e.location.path.length > 1 ) {
      let uri = e.location.path.slice(1).join('/');
      if( !uri.startsWith('ucdrp:') ) uri = 'ucdrp:'+uri;
      this.load(uri);
    }
  }

  async load(id) {
    this.uri = id;
    this.type = '';
    this.loadingState = 'loading...';

    this.shadowRoot.querySelector('#fuseki').innerHTML = '';
    this.shadowRoot.querySelector('#model').innerHTML = '';
    this.shadowRoot.querySelector('#elasticsearch').innerHTML = '';
    
    let data = await this.AdminModel.get(id);
    this.loadingState = '';
    this.type = data.type;
    this.uri = data.id;

    this.shadowRoot.querySelector('#fuseki')
      .appendChild((new JSONFormatter(data.fuseki.payload || data.fuseki.error, 1)).render());

    this.shadowRoot.querySelector('#model')
      .appendChild((new JSONFormatter(data.model.payload || data.model.error, 1)).render());

    this.shadowRoot.querySelector('#elasticsearch')
      .appendChild((new JSONFormatter(data.record.payload || data.record.payload, 1)).render());

  }

}

customElements.define('rp-page-admin', RpPageAdmin);