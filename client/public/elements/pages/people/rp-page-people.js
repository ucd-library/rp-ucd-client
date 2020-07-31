import { LitElement } from 'lit-element';
import render from "./rp-page-people.tpl.js"

import "../../components/a-z"


export default class RpPagePeople extends LitElement {

  static get properties() {
    return {

    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('rp-page-people', RpPagePeople);
