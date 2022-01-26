import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: none;
      padding-left: 5px;
      margin-left: 20px;
      border-left: 1px solid #ccc;
    }
    a {
      cursor: pointer;
      color: green;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`

<div>
  <a @click="${this._toggleDetails}">
  <span ?hidden="${!this.showDetails}">-</span><span ?hidden="${this.showDetails}">+</span> Explain</a>
</div>
<div ?hidden="${!this.showDetails}" style="padding-left: 10px">
  <div><b>Score: ${(this.data || {}).value || ''}</b></div>
  <div>${(this.data || {}).description || ''}</div>

  <div ?hidden="${!this.details.length}">
    ${this.details.map(item => html`
      <rp-query-explanation .data="${item}"></rp-query-explanation>
    `)}
  </div>
  
</div>


`;}