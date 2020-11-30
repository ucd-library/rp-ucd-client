import { LitElement, html } from 'lit-element';
import render from './accordian.tpl.js';

export class RpAccordian extends LitElement {
  static get properties() {
  return {
    titleText: {type: String, attribute: "title-text"},
    expanded: {type: Boolean, reflect: true}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.expanded = false;
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  toggle(){
    this.expanded = !this.expanded;
  }
}

customElements.define('rp-accordian', RpAccordian);
