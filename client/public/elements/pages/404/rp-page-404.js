import { LitElement } from 'lit-element';
import render from "./rp-page-404.tpl.js";


export default class RpPage404 extends LitElement {

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('rp-page-404', RpPage404);
