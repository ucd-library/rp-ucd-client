import { html } from 'lit-element';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
  }
  
</style>
<div class="collections container bg-light top ${this.dataStatus}">
  ${this._renderBrowseHeader('Grants')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    ${console.log(this.data)}
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading grants.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map((grant, i) => html`
          <rp-grant-preview
            .data="${grant}"
            class="my-3">
          </rp-grant-preview>
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
