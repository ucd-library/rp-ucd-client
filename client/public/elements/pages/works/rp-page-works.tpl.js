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
<div class="collections works container bg-light top ${this.dataStatus}">
  ${this._renderBrowseHeader('Works')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading works.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map((work, i) => html`
          <rp-work-preview .data="${work}" text-width="${this.peopleWidth}" class="my-3"></rp-work-preview>
          ${this.data.length - i == 1 && this.dataTotal <= this.pgPer ? html`
            ` : html`
            <hr class="dotted">
            `}
        `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`;}
