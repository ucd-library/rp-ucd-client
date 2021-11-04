import { LitElement } from 'lit';
import {render, styles} from "./rp-query-explanation.tpl.js";

export default class RpQueryExplanation extends LitElement {

  static get properties() {
    return {
      data : {type: Object},
      details : {type: Array},
      score : {type: Number},
      showDetails : {type: Boolean, attribute: "show-details"}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.data = {};
    this.details = [];
    this.score = -1;
    this.showDetails = false;
  }

  updated(props) {
    if( !props.has('data') ) return;
    if( !this.data ) return;
    if( Object.keys(this.data).length === 0 ) return;
  
    this.style.display = 'block';
    this.details = this.data.details;
  }

  _toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}

customElements.define('rp-query-explanation', RpQueryExplanation);