import { html } from 'lit-element';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  ${styles}
</style>
<div class="search-header container bg-light top">
  <div class="px-5 py-3 bg-primary text-light"><h1 class="weight-regular">Search results for <span class="text-secondary bold">${this.textQuery}</span></h1></div>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.mainFacets}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
    ${this._renderFacets()}
  </div>
  <div class="col-main">
    <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
      ${this.data.map(searchResult => html`
        ${this._renderAssetPreview(searchResult)}
        <hr class="dotted">
        `)}
      ${this.data.length == 0 ? html`
      <div class="flex align-items-center justify-content-center" style="height:100%;">No search results found!</div>
      ` : html``}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`;}
