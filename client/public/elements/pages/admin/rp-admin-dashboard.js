import { LitElement } from 'lit';
import {render, styles} from "./rp-admin-dashboard.tpl.js";

import "./rp-index-status";
import assetDefs from '../../../src/lib/asset-defs.js';

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/keybinding-vim";

export default class RpAdminDashboard extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      indexes : {type: Array},
      indexInfo : {type: Object},
      requestingIndex : {type: Boolean},
      textSearchFields : {type: Array},
      explainQueryEnabled : {type: Boolean}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AdminModel', 'SocketModel', 'CollectionModel');

    this.indexInfo = {
      pendingDeleteIndexes : []
    };
    this.indexes = [];
    this.requestingIndex = false;
    this.explainQueryEnabled = window.localStorage.getItem('explainQueryEnabled') === 'true';
    
    let textSearchFields = window.localStorage.getItem('textSearchFields');
    if( textSearchFields ) {
      assetDefs.textSearchFields = JSON.parse(textSearchFields);
    }

    textSearchFields = [];
    for( let type in assetDefs.textSearchFields ) {
      textSearchFields.push({type, fields: assetDefs.textSearchFields[type] });
    }
    this.textSearchFields = textSearchFields;
  }

  async firstUpdated() {
    let indexerStatus = (await this.AdminModel.indexerStatus()).payload;
    this.renderIndexStatus(indexerStatus);

    let editorRoots = Array.from(this.shadowRoot.querySelectorAll('.editor-root'));
    for( let editorRoot of editorRoots ) {
      this._createEditor(editorRoot);
    }

    this._onEnableExplainChange();
  }

  _createEditor(editorRoot) {
    let editor = ace.edit(editorRoot);
    let type = editorRoot.getAttribute('type');
    editor.renderer.attachToShadowRoot();
    editor.setValue(assetDefs.textSearchFields[type].join('\n'));
    editor.getSession().on('change', () => {
      let values = editor.getValue()
        .split('\n')
        .map(item => item.trim())
        .filter(item => item);
      assetDefs.textSearchFields[type] = values;
      window.localStorage.setItem('textSearchFields', JSON.stringify(assetDefs.textSearchFields));
    });
  }

  _resetTextSearchFields() {
    window.localStorage.removeItem('textSearchFields');
    window.location.reload();
  }

  _onEnableExplainChange() {
    let value = this.shadowRoot.querySelector('#enableExplain').checked;
    window.localStorage.setItem('explainQueryEnabled', value);

    if( value ) {
      this.CollectionModel.queryOptions.explain = true;
    } else {
      delete this.CollectionModel.queryOptions.explain;
    }
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