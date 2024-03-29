import { html } from 'lit';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
  }

  .search.container.no-results, .search.container.not-faceted {
    margin-top: 20px;
  }
  #search-term-box {
    padding: 24px 20px;
    text-align: center;
  }
  @media (min-width: 480px) {
    #search-term-box {
      padding: 40px 30px;
    }
    .search.container {
      margin-top: 20px;
    }
  }
</style>
<div class="search-header container-wide bg-light top">
  <div class="bg-primary text-light" id="search-term-box">
    <h1 class="weight-regular my-0"> 
      ${this.dataTotal} results 
      <span ?hidden="${this.textQuery === null}">for</span> 
      <span class="text-secondary bold">${this.textQuery}</span>
    </h1>
  </div>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.mainFacets}">
  </rp-link-list>
</div>
${this._renderMobileSubFacets()}
<div class="search container bg-light pb-3 ${this.data.length > 0 ? 'has-results' : 'no-results'} ${this.mainFacet == this.defaultFacetId ? 'not-faceted' : 'faceted'}" >
<div class="body flex">
    ${this.mainFacet == this.defaultFacetId ? 
    html `  
          <div></div>
         `:
    html `
          <div class="col-facets mt-3">
           ${this._renderFacets()} 
          </div>
         `
    }
  <div class="col-main">
    <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
      ${this.data.map((searchResult, i) => html`
        ${this._renderAssetPreview(searchResult, i)}
        ${this.data.length - i == 1 && this.dataTotal <= this.pgPer ? html`
        ` : html`
          <hr class="dotted">
        `}
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
