import { LitElement, html } from 'lit-element';
import render from './a-z.tpl.js';

export class RpAZ extends LitElement {
  static get properties() {
  return {
    all: {type: Boolean}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  _renderSpan(letter) {
    return html`<span>${letter}</span>`
  }
}

customElements.define('rp-a-z', RpAZ);
