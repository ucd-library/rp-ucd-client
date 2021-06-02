import { LitElement } from 'lit';
import {render, styles} from "./ae-directory-listing.tpl.js";

export default class AeDirectoryListing extends LitElement {

  static get properties() {
    return {
      
    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('ae-directory-listing', AeDirectoryListing);