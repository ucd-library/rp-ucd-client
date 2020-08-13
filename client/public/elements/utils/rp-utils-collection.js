import { LitElement, html } from 'lit-element';
import "../components/a-z";
import "../components/link-list";

export default class RpUtilsCollection extends LitElement {

  static get properties() {
    return {
      azSelected: {type: String},
      azDisabled: {type: Array},
      pgPer: {type: parseInt},
    }
  }

  constructor() {
    super();
    this.azSelected = 'All';
    this.azDisabled = [];
    this.pgPer = 8;
  }

  _onUserAction(action) {
    console.log(action);
    console.log(this.pgPer);
  }

  _renderBrowseHeader(title, Azselected) {
    if (Azselected) {
      this.azSelected = Azselected;
    }
    return html`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${title}</h1>
      </div>
      <div class="col-main">
        <rp-a-z selected-letter="${this.azSelected}" @changed-letter=${e => this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `;
  }

  _renderFacet(facetId, links) {
    return html`
    <rp-link-list has-header-link
                  links=${links}>
    </rp-link-list>
    `
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);
