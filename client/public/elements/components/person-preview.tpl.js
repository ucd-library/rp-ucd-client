import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { renderHTML } from '../../src/lib/santize-html.js';
import "./avatar"
import urlUtils from "../../src/lib/url-utils"

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
    .container-home {
      display: block;
      flex-flow: row nowrap;
      align-items: flex-start;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
      align-self: center;
    }
    .name {
      font-size: var(--ae-font-size);
      color : var(--ae-tcolor-link-text);
      font-weight : var(--ae-font-weight-bold);
      /* white-space: nowrap; */
      /* overflow: hidden; */
      /* text-overflow: ellipsis; */
      display: block;
    }
    .name:hover {
      color : var(--ae-tcolor-link-hover-text);
    }
    .name[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    .name[disabled]:hover {
      color : var(--ae-tcolor-link-text);
    }
    .title {
      font-size: var(--ae-font-size-small);
    }
    small {
      font-size : var(--ae-font-size-small);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      line-height: 1.4;
    }
    .badge-container:hover small {
      display: inline-grid;
    }

    small.badges {
      margin-top: 10px;
    }
    .snippet {
      font-size : var(--ae-font-size-small);
      color: var(--ae-tcolor-link-disabled-text);
    }
    .snippet em {
      font-weight: bold;
      font-style: normal;
    }
    .badge-container{
      max-width: 700px;

    }
  </style>
  <div>
  <div class=${classMap(this.constructClasses())}>
    <rp-avatar size="${this.avatarSize}" src="${this.getAvatar()}"></rp-avatar>
    <div class="text-container" style="${styleMap({"max-width" : this.textWidth+'px'})}" >
      <a class="name" 
        href="${this.getLandingPage()}"
        ?disabled="${!this.getLandingPage()}">
        ${renderHTML(this.title)}
      </a>
      <div class="title">${this.getTitle()}</div>
      ${this.showSnippet && this.getSnippet() ? html`
        <div class="snippet">${renderHTML(this.getSnippet())}</div>
      ` : html``}
      <div class="badge-container">
      ${this.showSubjects && this.getSubjects() ? html`
        <small class="badges">${this.getSubjects().map(subject => html`
          <rp-badge class="my-1" href="${urlUtils.idAsLocalUrlPath(subject['@id'])}">${subject.prefLabel ? subject.prefLabel : subject.label}</rp-badge>
        `)}
        </small>
      </div>
      ` : html``}
      
    </div>
  </div>
  </div>
  <rp-query-explanation .data="${this.data._explanation}" show-details></rp-query-explanation>


  `;
}
