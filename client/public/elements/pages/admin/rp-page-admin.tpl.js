import { html, css } from 'lit';
import siteStyles from "../../styles/site-lit.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
      background-color: white;
      padding-top: 25px;
    }
  `;
  return [elementStyles, siteStyles];
}

export function render() { 
return html`

<iron-pages
  selected="${this.view}"
  attr-for-selected="id"
  selected-attribute="visible">

  <rp-admin-record id="record"></rp-admin-record>
  <rp-admin-dashboard id="dashboard"></rp-admin-dashboard>

</iron-pages>




`;}