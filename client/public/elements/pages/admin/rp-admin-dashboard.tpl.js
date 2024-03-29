import { html, css } from 'lit';
import siteStyles from "../../styles/site-lit";
import config from "../../../src/config";
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";
import baseHtml from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import baseCss from "@ucd-lib/theme-sass/2_base_class/_index.css.js";


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
      display: block;
    }
    .request-index > div {
      flex: .5;
    }
    .text-field-panel {
      width: 350px;

    }
    .text-field-panel .editor-root, .analyze-query-root {
      height: 400px;
      margin=15px;
    }
    #button-margin{
      margin: 10px;
    }
    #reindex-type {
      display:inline-block;
    }
    .form-input{
      max-width:400px;
      display:block;
    }
    .form-input2{
      max-width:200px;
      display:block;
    }
    .status{
      overflow:hidden;
    }
  `;

  return [elementStyles, siteStyles, layoutCss, baseCss, baseHtml];
}

export function render() { 
return html`

<div style="margin:10px;">
  <h1>Admin Dashboard</h1>
</div>
<div style="margin: 20px 10px">

  <span style="margin: 0 10px;">
        <label style="display:inline-block" for="enableExplain">Enable Explain Descriptions</label>
        <input type="checkbox" id="enableExplain" .checked="${this.explainQueryEnabled}" @change="${this._onEnableExplainChange}" />
  </span>
  
  <ucd-theme-collapse title="Service Token">
  <div>
      <label>Generate long-lived service tokens</label>
        <div>
          <div>Username <input class="form-input" id="service-token-username" type="text"></div>
          <p>User to associated with service account.  Contact email would be good to use here</p>
        </div>
        <div>
          <div>Roles <input class="form-input" id="service-token-roles" type="text"></div>
          <p>Comma separated list of roles.  Then admin role is not allowed.</p>
        </div>
        <div>
          <div>Allowed IP Address <input class="form-input" id="service-token-ips" type="text"></div>
          <p>Comma separated list of addresses. IP Address or CIDR range allowed.</p>
        </div>
        <div>
          <button @click="${this._generateServiceToken}" class="btn btn--alt3 btn--sm" style="margin: 10px 0;">Create Token</button>
        </div>
        <div>${this.serviceTokenMessage}</div>
    </div>
  </ucd-theme-collapse>
  <ucd-theme-collapse title="Indexes">

  <div ?hidden="${this.requestingIndex}">
      <div style="display:inline-block;">
        <div style="white-space: nowrap;">
          <button @click="${this._onRequestReindexClicked}" class="btn btn--alt3 btn--sm" id="button-margin">Request Reindex</button>
            <label for="selectpicker" style="display:inline-block;white-space: nowrap;"> Type: </label>
            <select class="form-input2" id="reindex-type">
              <option value="all">All</option>
              ${config.defaultTypes.map(item => html`
                <option value="${item.replace(/.*:/, '')}">${item.replace(/.*:/, '')}</option>
              `)}
            </select>
        </div>
        <div>
          <button @click="${this._onRequestRebuildClicked}" class="btn btn--alt3 btn--sm" id="button-margin">Request Full Schema Rebuild</button>
        </div>
      </div>

      <div style="margin: 0 10px;">
        Search Index: <span class="index-label">${this.indexInfo.searchIndex || 'loading...'}</span>
      </div>
      <div style="margin: 0 10px;">
        Write Index: <span class="index-label">${this.indexInfo.writeIndex || 'loading...'}</span>
      </div>

      <div ?hidden=${this.indexInfo.pendingDeleteIndexes.length === 0}>
        <div>Indexes Pending Deletion:</div>
        ${this.indexInfo.pendingDeleteIndexes.map(item => html`
          <span class="index-label">${item}</span>
        `)}
      </div>
    </div>

    <div class="status">
      ${this.indexes.map(index => html`<rp-index-status .data=${index}></rp-index-status>`)}
    </div>  
  </ucd-theme-collapse>

  <ucd-theme-collapse title="Text Search Fields">
    <div style="margin: 10px">
      <div style="display: flex; flex-flow: wrap;">
      ${this.textSearchFields.map(item => html`
          <div style="margin:15px;" class="text-field-panel">
            <h4>${item.type}</h4>
            <div class="editor-root" type="${item.type}"></div>
          </div>
      `)}
      </div>
      <button style="margin: 10px 0;" @click="${this._resetTextSearchFields}" class="btn btn--alt btn--round btn--sm">Reset</button>

    </div>
  </ucd-theme-collapse>

  <ucd-theme-collapse title="Analyze Text">
    <div style="margin: 10px">
      <div>Submit text to ElasticSearch for realtime analysis on how it is or could be indexed.  The default 'analyzer' is already
        set for you (${this.defaultAnalyzer}).  More information: 
        <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-analyze.html" target="_blank">Analyze API</a>
        <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-analyzers.html" target="_blank">Built-in analyzer reference</a>
      </div>
      <div style="display: flex; flex-flow: wrap;">
        <div style="margin:15px;" class="text-field-panel">
          <div class="analyze-query-root" type="analyze-request"></div>
        </div>
        <div style="margin:15px;" class="text-field-panel">
          <div class="analyze-query-root" type="analyze-response"></div>
        </div>
      </div>
      <button style="margin: 10px 0;" @click="${this._runAnalyzeQuery}" class="btn btn--alt btn--round btn--sm">Submit Query</button>
    </div>
  </ucd-theme-collapse>
</div>

`;}