import { LitElement, html } from 'lit-element';
import render from './view-all.tpl.js';

export class RpViewAll extends LitElement {
  static get properties() {
  return {
    text: {type: String},
    justify: {type: String}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.text = "View All"
  }

  constructClasses() {
    let classes = {};
    if (this.justify) {
      classes[this.justify] = true;
    }
    return classes;
  }
}

customElements.define('rp-view-all', RpViewAll);
