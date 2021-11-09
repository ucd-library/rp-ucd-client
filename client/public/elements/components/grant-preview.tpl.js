import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import {renderHTML} from '../../src/lib/santize-html.js';

export default function render() {
  return html`
    <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
    }
    .icon-container {
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iron-icon {
      color: var(--ae-tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
      align-self: center;
      overflow-wrap: break-word;
    }
    .title {
      font-size: var(--ae-font-size);
      color : var(--ae-tcolor-link-text);
      font-weight : var(--ae-font-weight-bold);
    }
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--ae-tcolor-link-text);
    }
    .below-title {
      color : var(--ae-tcolor-text);
      font-size: var(--ae-font-size-small);
    }
    .snippet {
      font-size : var(--ae-font-size-small);
      color: var(--ae-tcolor-link-disabled-text);
    }
    .snippet em {
      font-weight: bold;
      font-style: normal;
    }     
    </style>

    <div class=container>
      <div class="icon-container"><rp-icon icon="iron-receipt" circle-bg theme-color='grant' size-icon="extralgIconGrants" size="extralg"></rp-icon></div>
      <div class="text-container" style="${styleMap({"max-width" : this.textWidth+'px'})}">
        <a class="title" 
          href="${this.getLink()}" 
          @click="${e => this.AppStateModel.sendGaSearchClickEvent(this.getLink())}">
            ${renderHTML(this.title)}
        </a>
        <div class="below-title">
          <span>Research Grant</span>
        </div>
        ${this.showSnippet && this.getSnippet() ? html`
        <div class="snippet">${renderHTML(this.getSnippet())}</div>
      ` : html``}
      </div>
    </div>

    <rp-query-explanation .data="${this.data._explanation}" show-details></rp-query-explanation>
  `;
}