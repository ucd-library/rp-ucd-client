import { LitElement, html } from 'lit-element';
import "../components/a-z";
import "../components/link-list";
import "../components/pagination";

export default class RpUtilsCollection extends LitElement {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azDisabled: {type: Array},
      pgPer: {type: parseInt},
      urlQuery: {type: Object}
    }
  }

  constructor() {
    super();
    this.hasAz = false;
    this.hasPagination = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.pgPer = 8;
    this.urlQuery = {};
  }

  _onUserAction(action) {
    console.log(action);
  }

  _renderBrowseHeader(title, Azselected) {
    this.hasAz = true;
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

  _renderPagination(totalResults) {
    if (!totalResults || !this.urlQuery) {
      return html``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.urlQuery.limit);
    let currentPage = Math.ceil((this.urlQuery.offset + 1) / this.urlQuery.limit)
    return html`
    <rp-pagination max-page="${maxPage}"
                   current-page="1"
                   @changed-page="${e => this._onUserAction("pagination")}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _parseUrlQuery(){
    // read url args, construct search query
    let q = {};
    if (!q.limit) {
      q.limit = this.pgPer;
    }
    if (!q.offset) {
      q.offset = 0;
    }
    this.urlQuery = q;
    return q;
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);
