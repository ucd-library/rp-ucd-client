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
      pgCurrent: {type: parseInt},
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
    this.pgCurrent = 1;
    this.urlQuery = {};
  }

  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let q = {...this.urlQuery};
    if (!q.filters) {
      q.filters = {};
    }
    console.log("User action:", action);

    // handle az
    if (action == 'az') {
      return;
    }

    // handle pagination
    if (action == 'pagination' && this.hasPagination) {
      this.pgCurrent = args[0];
      q.offset = this.pgCurrent * this.urlQuery.limit - this.urlQuery.limit;
    }

    // handle facets
    if (action.startsWith('facet_')) {
      if (args[0].filters) {
        q.filters = {...q.filters, ...args[0].filters}
      }
      else {
        let f = action.slice('facet_'.length, );
        if (q.filters[f]) {
          delete q.filters[f];
        }
      }
      q.offset = 0;
    }

    // construct new url and redirect
    let p = "";
    if (this.AppStateModel) {
      p = "/" + this.AppStateModel.store.data.location.path.join("/")
    }

    p = p + this._urlEncode(q)
    //console.log(p);
    //return;
    this.AppStateModel.setLocation(p);
    //location.href = p;
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
        <rp-a-z selected-letter="${this.azSelected}"
                disabled-letters="${JSON.stringify(this.azDisabled)}"
                @changed-letter=${e => this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `;
  }

  _renderFacets(facets) {
    if (!facets) {
      return html``;
    }
    return html`${facets.map(facet => html`
      <rp-link-list has-header-link
                    links='${JSON.stringify(facet.values)}'
                    current-link='${facet.activeIndex}'
                    @changed-link="${e => this._onUserAction('facet_' + facet.id, e.target.links[e.target.currentLink])}">
      </rp-link-list>
      `)}
    `
  }

  _renderPagination(totalResults) {
    if (!totalResults || !this.urlQuery) {
      return html``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.urlQuery.limit);
    this.pgCurrent = Math.ceil((this.urlQuery.offset + 1) / this.urlQuery.limit)
    return html`
    <rp-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _parseUrlQuery(){
    // read url args, construct search query
    let q = {};
    if (this.AppStateModel) {
      let query = this.AppStateModel.store.data.location.query;
      for (let arg in query) {
        q[arg] = JSON.parse(query[arg])
      }
    }
    if (!q.limit) {
      q.limit = this.pgPer;
    }
    if (!q.offset) {
      q.offset = 0;
    }
    this.urlQuery = q;
    return q;
  }

  _urlEncode(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        if (p == 'offset' && obj[p] == 0) {
          continue;
        }
        if (p == 'filters' && Object.keys(obj[p]).length == 0) {
          continue;
        }
        if (p == 'limit') {
          continue;
        }
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent( JSON.stringify(obj[p]) ));
      }
    if (!str.length) {
      return ""
    }
    return "?" + str.join("&");
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);
