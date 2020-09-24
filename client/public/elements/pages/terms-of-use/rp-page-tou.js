import { LitElement } from 'lit-element';
import render from "./rp-page-tou.tpl.js"


export default class RpPageTou extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('rp-page-tou', RpPageTou);
