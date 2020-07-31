import { LitElement } from 'lit-element';
import render from "./rp-page-home.tpl.js"

import "../../components/search"


export default class RpPageHome extends LitElement {

  static get properties() {
    return {
      theme: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.theme = APP_CONFIG.theme;
  }

}

customElements.define('rp-page-home', RpPageHome);
