import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import "./avatar"

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
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .name {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
    .name:hover {
      color : var(--tcolor-link-hover-text);
    }
    .name[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    .name[disabled]:hover {
      color : var(--tcolor-link-text);
    }
    small {
      font-size : var(--font-size-small);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      line-height: 1.4;
    }
    small.badges {
      margin-top: 10px;
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
    <rp-avatar size="${this.avatarSize}" src="${this.getAvatar()}"></rp-avatar>
    <div class="text-container" style="${styleMap({"max-width" : this.textWidth})}">
      <a class="name" href="${this.getLandingPage()}" ?disabled="${!this.getLandingPage()}">${this.getLastName()}, ${this.getFirstName()}</a>
      <small>${this.getTitle()}</small>
      ${this.showSnippet && this.getSnippet() ? html`
        <div class="snippet">${unsafeHTML(this.getSnippet())}</div>
      ` : html``}
      ${this.showSubjects && this.getSubjects() ? html`
        <small class="badges">${this.getSubjects().map(subject => html`
          <rp-badge class="my-1" href="/subject/${encodeURIComponent(subject['@id'])}">${subject.prefLabel ? subject.prefLabel : subject.label}</rp-badge>
        `)}
        </small>
      ` : html``}
      
    </div>
  </div>

  `;
}
