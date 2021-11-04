import { LitElement } from 'lit';
import {render, styles} from "./rp-admin-dashboard.tpl.js";

import "./rp-index-status";

export default class RpAdminDashboard extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      indexes : {type: Array},
      indexInfo : {type: Object},
      requestingIndex : {type: Boolean}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AdminModel', 'SocketModel');

    this.indexInfo = {
      pendingDeleteIndexes : []
    };
    this.indexes = [];
    this.requestingIndex = false;
  }

  async firstUpdated() {
    let indexerStatus = (await this.AdminModel.indexerStatus()).payload;
    this.renderIndexStatus(indexerStatus);
  }

  _onSocketMessage(msg) {
    if( msg.type !== 'indexer-status-update' ) return;
    this.renderIndexStatus(msg.message);
  }

  renderIndexStatus(indexerStatus) {
    this.indexInfo = indexerStatus;
    let indexes = [];
    for( let name in indexerStatus.indexes ) {
      indexerStatus.indexes[name].name = name;
      indexerStatus.indexes[name].timestamp = parseInt(name.split('-').pop());
      indexes.push(indexerStatus.indexes[name]);
    }
    indexes.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);

    this.indexes = indexes;
  }

  _onRequestReindexClicked() {
    let qs = {};
    let type = this.shadowRoot.querySelector('#reindex-type').value;
    if( type !== 'all' ) qs.type = type;
    this._requestReindex(qs);
  }

  _onRequestRebuildClicked() {
    this._requestReindex({'rebuild-schema': true});
  }

  async _requestReindex(opts) {
    if( !confirm('Are you sure you want to run a reindex with the following options: '+JSON.stringify(opts)) ) return;
    this.requestingIndex = true;
    try {
      await this.AdminModel.requestIndex(opts);
    } catch(e) {
      alert('Something went wrong! '+e.message);
    }
    setTimeout(() => {
      this.requestingIndex = false;
    }, 5000);
  }



}

customElements.define('rp-admin-dashboard', RpAdminDashboard);