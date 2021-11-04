import { LitElement } from 'lit';
import {render, styles} from "./rp-progress-bar.tpl.js";

export default class RpProgressBar extends LitElement {

  static get properties() {
    return {
      total : {type: Number},
      progress : {type: Array},
      progressUi : {type: Array}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.progress = [];
    this.progressUi = [];
    this.total = 0;
  }

  updated(props) {
    if( props.has('total') || props.has('progress') ) {
      this.updateProgress();
    }
    
  }

  updateProgress() {
    if( !this.total || !this.progress.length ) return;
    for( let part of this.progress ) {
      part.percent = Math.floor((part.value / this.total) * 100);
    }
    this.progressUi = [...this.progress];

    this.requestUpdate();
  }

}

customElements.define('rp-progress-bar', RpProgressBar);