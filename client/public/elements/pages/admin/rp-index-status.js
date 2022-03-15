import { LitElement } from 'lit';
import {render, styles} from "./rp-index-status.tpl.js";
import JSONFormatter from "json-formatter-js";

import "./rp-progress-bar";

export default class RpIndexStatus extends LitElement {

  static get properties() {
    return {
      data : {type: Object},
      services : {type: Array},
      types : {type: Array},
      total : {type: Number},
      active : {type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.data = {};

    this.services = [];
    this.total = 0;
    this.active = false;
    this.types = [];

    this.COLORS = {
      pending : 'var(--ae-color-rec-pool)',
      start : 'var(--ae-color-farmers-market)',
      complete : 'var(--ae-color-blue)',
      ignored : 'var(--ae-color-black60)'
    };
  }

  updated(props) {
    if( props.has('data') ) {
      this.total = this.data.total;
      this.active = this.data.active;

      this.shadowRoot.querySelector('#schema').innerHTML = '';
      this.shadowRoot.querySelector('#schema')
        .appendChild((new JSONFormatter(this.data.schema, 1)).render());

      let services = [];
      ['debouncer', 'indexer'].forEach(service => {

        let ui = {
          name : service,
          progress : []
        };
        services.push(ui);

        if( !this.data[service] ) return;
        
        ['pending', 'start', 'complete', 'ignored'].forEach(state => {
          if( !this.data[service][state] ) return;
          ui.progress.push({
            label : state,
            value : this.data[service][state],
            color : this.COLORS[state]
          });
        });
      });

      this.services = services;

      let types = [];
      if( this.data.searchIndexStats && this.data.searchIndexStats.types ) {
        for( let key in this.data.searchIndexStats.types ) {
          types.push({key, value: this.data.searchIndexStats.types[key]})
        }
      }
      this.types = types;
    }
  }

}

customElements.define('rp-index-status', RpIndexStatus);