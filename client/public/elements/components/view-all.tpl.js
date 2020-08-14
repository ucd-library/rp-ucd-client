import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
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
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      color: var(--tcolor-text);
      transition: .3s;
    }
    .container.start {
      justify-content: flex-start;
    }
    .container.center {
      justify-content: center;
    }
    .container:hover {
      color: var(--tcolor-link-hover-text) !important;
    }
    .container:hover iron-icon, .container:hover a{
      color: var(--tcolor-link-hover-text) !important;
    }
    a {
      text-decoration: none;
      color: var(--tcolor-text);
      transition: .3s;
    }

    iron-icon {
      color: var(--tcolor-secondary);
      transition: .3s;
      width: 28px;
      min-width: 28px;
      height: 28px;
    }
    .view-all {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
  </style>
  <div class="container ${classMap(this.constructClasses())}">
    ${this.href ? html`
      <a class="view-all" href="${this.href}">${this._renderInnerContent()}</a>
      ` : html`
      <div class="view-all">${this._renderInnerContent()}</div>
      `}

  </div>
  `;
}
