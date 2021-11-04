import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    :host([active]) {
      border: 3px solid var(--ae-color-farmers-market)
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

  return [elementStyles];
}

export function render() { 
return html`

<h2>${this.data.name} <span class="active-index" ?hidden="${!this.data.active}">ACTIVE</span></h2>
<div style="display:flex">
  <div style="flex:66">
    ${this.services.map(service => html`
      <h4>${service.name}</h4>
      <rp-progress-bar .progress="${service.progress}" .total="${this.total}"></rp-progress-bar>
    `)}
  </div>

  <div style="flex:33">
    ${this.types.map(type => html`
      <div>${type.key}: ${type.value}</div>
    `)}
  </div>

</div>

`;}