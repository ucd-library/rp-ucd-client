import { LitElement } from 'lit-element';
import render from './badge.tpl.js';

export class RpBadge extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}
customElements.define('rp-badge', RpBadge);
