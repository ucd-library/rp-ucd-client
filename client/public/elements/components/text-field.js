import { LitElement, html } from 'lit-element';
import render from './text-field.tpl.js';

export class RpTextField extends LitElement {
  static get properties() {
  return {
    text: {type: String},

  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    //this.themeColor = 'danger';
  }

  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

}

customElements.define('rp-text-field', RpTextField);
