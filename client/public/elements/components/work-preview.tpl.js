import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
//import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
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
  </style>
  <div class=container>
    <div class="icon-container"><rp-icon icon="iron-description" theme-color='work' circle-bg sizeIcon="extralgIconWorks" size="extralg"></rp-icon></div>
    <div class="text-container">
      <a class="title" href="${this.getLink()}" ?disabled="${!this.getLink()}">${this.getTitle()}</a>
      <div class="below-title">
        <span class="work-type">${this.getWorkType()}</span>
        ${this.getWorkType() ? html`<span class="mx-1">|</span>` : html``}
        <span class="authors">${this.getAuthors().map((author, i) => html`
        ${author.nameLast}, ${author.nameFirst}${this.authorCt > i + 1 ? '; ' : ''}
        `)}</span>
      </div>
      ${this.showSnippet ? html`
        <div class="snippet">${unsafeHTML(this.getSnippet())}</div>
      ` : html``}
    </div>
  </div>

  `;
}
