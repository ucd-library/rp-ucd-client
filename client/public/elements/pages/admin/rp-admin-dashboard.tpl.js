import { html, css } from 'lit';
import siteStyles from "../../styles/site-lit";
import config from "../../../src/config";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .index-label {
      font-weight: bold;
    }
    rp-index-status {
      padding: 15px;
    }
    .request-index {
      display: flex;
    }
    .request-index > div {
      flex: .5;
    }
    .text-field-panel {
      width: 350px;
    }
    .text-field-panel .editor-root {
      height: 500px;
    }
  `;

  return [elementStyles, siteStyles];
}

export function render() { 
return html`

<h1>Admin Dashboard</h1>

<div>
  <h3>
    <label for="enableExplain">Enable Explain Descriptions</label>
    <input type="checkbox" id="enableExplain" .checked="${this.explainQueryEnabled}" @change="${this._onEnableExplainChange}" />
  </h3>
</div>

<div>
  <h2>Indexes</h2>
</div>

<div ?hidden="${this.requestingIndex}" class="request-index">
  <div>
    <button @click="${this._onRequestReindexClicked}">Request Reindex</button>
    Type: 
    <select id="reindex-type">
      <option value="all">All</option>
      ${config.defaultTypes.map(item => html`
        <option value="${item.replace(/.*:/, '')}">${item.replace(/.*:/, '')}</option>
      `)}
    </select>
  </div>
  <div>
    <button @click="${this._onRequestRebuildClicked}">Request Full Schema Rebuild</button>
  </div>
</div>

<div>
  <div>
    Search Index: <span class="index-label">${this.indexInfo.searchIndex || 'loading...'}</span>
  </div>
  <div>
    Write Index: <span class="index-label">${this.indexInfo.writeIndex || 'loading...'}</span>
  </div>
  <div ?hidden=${this.indexInfo.pendingDeleteIndexes.length === 0}>
    <div>Indexes Pending Deletion:</div>
    ${this.indexInfo.pendingDeleteIndexes.map(item => html`
      <span class="index-label">${item}</span>
    `)}
  </div>

  <div>
    ${this.indexes.map(index => html`<rp-index-status .data=${index}></rp-index-status>`)}
  </div>
</div>

<div>
  <h2>Text Search Fields <button @click="${this._resetTextSearchFields}">Reset</button></h2>
  <div style="display: flex; flex-flow: wrap;">
  ${this.textSearchFields.map(item => html`
      <div class="text-field-panel">
        <h4>${item.type}</h4>
        <div class="editor-root" type="${item.type}"></div>
      </div>
  `)}
  </div>
</div>

`;}