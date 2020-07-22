import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    #title {
      color: var(--tcolor-link-text);
      cursor: pointer;
    }
    #title[disabled] {
      color: var(--tcolor-text);
      pointer-events: none;
      cursor: auto;
    }
    #title[disabled]:hover {
      color: var(--tcolor-text);
    }
    #title:hover {
      color: var(--tcolor-link-hover-text);
    }
  </style>
  <div class="container ${classMap(this.constructClasses())}" ?hidden="${!this.title}">
    <span id="title" @click="${this.handleClick}" ?disabled="${!this.href}">${this._formatComponent(this.title, 'title')}</span>
    <span id="journal">${this._formatComponent(this.journal, 'journal')}</span>
    <span id="pages">${this._formatComponent(this.pages, 'pages')}</span>
  </div>
  `;
}
