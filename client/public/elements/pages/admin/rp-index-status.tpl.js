import { html, css } from 'lit';
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";


export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    :host([active]) {
    }
    h2, h4 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .active-index {
      color: var(--ae-color-putah-creek);
      font-weight: bold;
    }
  `;

  return [elementStyles, layoutCss];
}

export function render() { 
return html`

<h2>${this.data.name} <span class="active-index" ?hidden="${!this.data.active}"> ACTIVE</span></h2>
<div class="l-2col l-2col--75-25">
  <div class="l-second panel o-box">
    ${this.services.map(service => html`
      <h4>${service.name}</h4>
      <rp-progress-bar style="max-width:775px;" .progress="${service.progress}" .total="${this.total}"></rp-progress-bar>
    `)}
  </div>

  <div class="l-first panel o-box">
    ${this.types.map(type => html`
      <div>${type.key}: ${type.value}</div>
    `)}
  </div>

</div>

`;}