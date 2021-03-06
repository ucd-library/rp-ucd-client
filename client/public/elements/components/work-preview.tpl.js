import { html } from 'lit-element';
import { renderHTML } from '../../src/lib/santize-html.js';
import { styleMap } from 'lit-html/directives/style-map';

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
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
      align-self: center;
      overflow-wrap: break-word;
      min-width: 0;
    }
    .title {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
    }
    .below-title {
      color : var(--tcolor-text);
      font-size: var(--font-size-small);
    }
    .snippet {
      font-size : var(--font-size-small);
      color: var(--tcolor-link-disabled-text);
    }
    .snippet em {
      font-weight: bold;
      font-style: normal;
    }
    .title em {
      font-weight: bold;
    }
  </style>
  <div class=container>
    <div class="icon-container"><rp-icon icon="iron-description" theme-color='work' circle-bg size-icon="extralgIconWorks" size="extralg"></rp-icon></div>
    <div class="text-container" style="${styleMap({"max-width" : this.textWidth+'px'})}">
      
      <a class="title" 
        href="${this.getLink()}" 
        ?disabled="${!this.getLink()}">
        ${renderHTML(this.title)}
      </a>
      
      <div class="below-title">
        <span class="work-type">${this.getWorkType()}</span>
        ${this.getWorkType() ? html`<span class="mx-1">|</span>` : html``}
        <span class="authors">${this.getAuthors().map((author, i) => html`
        ${author._client.familyName}, ${author._client.givenName}${this.authorCt > i + 1 ? '; ' : ''}
        `)}</span>
      </div>
      ${this.showSnippet ? html`
        <div class="snippet">${renderHTML(this.getSnippet())}</div>
      ` : html``}
    </div>
  </div>

  `;
}
