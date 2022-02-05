import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .progress-bar {
      height: 50px;
      border: 1px solid black;
      position: relative;
    }
    .progress {
      display: inline-block;
      height: 100%;
      position: absolute;
    }
    .progress-label {
      font-weight: bold;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`

<div class="progress-bar">
  ${this.progressUi.map(item => html`
    <div style="left: ${item.offset}%; width:${item.percent}%; background-color:${item.color}" class="progress"></div>
  `)}
</div>
<div>
  ${this.progress.map(item => html`
    <span style="color:${item.color}" class="progress-label">${item.label}: ${item.value}</div>
  `)}
  <span>of ${this.total}</span>
</div>

`;}