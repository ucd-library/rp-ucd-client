import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    iron-icon {
      color: var(--ae-tcolor-secondary);
      width: 24px;
      min-width: 24px;
      height: 24px;
      transition: .3s;
    }
    iron-icon[rotated] {
      transform: rotate(-90deg);
    }
    #container-title {
      cursor: pointer;
      display: flex;
    }
    #title:hover {
      color: var(--ae-tcolor-link-hover-text);
    }
    #title {
      color: var(--ae-tcolor-link-text);
      font-weight: var(--ae-font-weight-bold);
      font-size: var(--ae-font-size);
    }
    #content {
      padding-left: 24px;
      font-size: var(--ae-font-size);
      margin-top: 14px;
    }
  </style>
  <div class="container" ?hidden="${!this.titleText}">
    <div id="container-title" @click="${this.toggle}">
      <iron-icon icon="arrow-drop-down" ?rotated="${!this.expanded}"></iron-icon>
      <span id="title">${this.titleText}</span>
    </div>
    <div id="content" ?hidden="${!this.expanded}">
      <slot></slot>
    </div>
  </div>
  `;
}
