import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

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
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--tcolor-link-text);
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
      <div class="icon-container"><rp-icon icon="rp-subject" circle-bg theme-color='subject' sizeIconSVG="extralgSVGIcon" size="extralg"></rp-icon></div>
      <div class="text-container">
        <a class="title" href="${this.getLink()}">${this.getTitle()}</a>
        <div class="below-title">
          <span>Research Subject</span>
        </div>
        ${this.showSnippet && this.getSnippet() ? html`
        <div class="snippet">${unsafeHTML(this.getSnippet())}</div>
      ` : html``}
      </div>
    </div>
  `;
}