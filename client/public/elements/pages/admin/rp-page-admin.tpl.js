import { html, css, unsafeCSS } from 'lit';
import jsonStyles from 'json-formatter-js/dist/json-formatter.css';
import siteStyles from "../../styles/site-lit.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
      background-color: white;
      padding-top: 25px;
    }
    .layout {
      display: flex;
    }
    .layout > div {
      overflow : auto;
      flex: .333;
      padding: 5px;
      background-color: white;
    }
    h1 {
      margin: 0;
    }
    ${unsafeCSS(jsonStyles)}
  `;
  return [elementStyles, siteStyles];
}

export function render() { 
return html`

<div style="text-align: center">
  <h1>${this.uri}</h1>
  <h2>${this.type}</h2>
  <div>${this.loadingState}</div>
</div>

<div class="layout">
  <div>
    <h2>Fuseki</h2>
    <div id="fuseki"></div>
  </div>
  <div>
    <h2>Live Model</h2>
    <div id="model"></div>
  </div>
  <div>
    <h2>Elastic Search Record</h2>
    <div id="elasticsearch"></div>
  </div>
</div>

`;}