import { LitElement } from 'lit-element';
import render from "./researcher-profiles.tpl.js"


export default class ResearcherProfiles extends LitElement {

  static get properties() {
    return {
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('researcher-profiles', ResearcherProfiles);
