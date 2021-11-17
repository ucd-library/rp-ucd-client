import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--ae-font-size-small);
      display: flex;
      align-items: center;
    }
    .container.color-bg-primary {
      background-color: var(--ae-tcolor-bg-primary);
      color: var(--ae-tcolor-text);
    }
    .container.color-outline-primary {
      color: var(--ae-tcolor-primary70);
      background-color: var(--ae-tcolor-light);
    }
    rp-icon {
      padding-left: 10px;
    }
    .color-bg-primary .line {
      background-color: #fff;
    }
    .line {
      background-color: var(--ae-tcolor-primary10);
      width: 1px;
      height: 34px;
      margin: 0 8px;
    }
    #button {
      cursor: pointer;
      flex-grow: 1;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      padding-left: 15px;
      padding-right: 10px;
      border: none;
      background-color: inherit;
      color: inherit;
      font-weight: inherit;
      font: inherit;
      padding-top: 0;
      padding-bottom: 0;

    }
    .has-filter-icon #button {
      padding-left: 3px;
    }
    .nopadding #button {
      padding-left: 0;
      padding-right: 0;
    }
    #input::placeholder {
      color: var(--ae-tcolor-placeholder-text);
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 3px 0 0 0;
    }
    li {
      cursor: pointer;
      padding: 5px 10px 5px 15px;
    }
    li[selected] {
      pointer-events: none;
      cursor: auto;
      font-weight: var(--ae-font-weight-bold);
    }
    li a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: var(--ae-tcolor-primary);
    }
    iron-icon {
      margin-top: 2px;
    }
    .color-outline-primary li:hover, .color-bg-primary li:hover, 
    .color-outline-primary li:focus, .color-bg-primary li:focus {
      background-color: var(--ae-tcolor-primary10) !important;
    }
    .color-outline-primary ul, .color-bg-primary ul{
      border-style: solid;
      border-width: 1px;
      border-color: var(--ae-tcolor-primary70);
      background-color: var(--ae-tcolor-light);
    }
    .container.upper {
      text-transform: uppercase;
    }
  </style>
  <div class="container ${classMap(this._constructClasses())}">
    ${this.filterIcon ? html`
      <rp-icon icon=rp-filter></rp-icon>
      <div class="line"></div>
    ` : html``}
    <button 
      id="button"
      type="button"
      @click="${this.openDropdown}">
      <span id="button-text">${this.stickyTitle ? this.stickyTitle : this._parseChoices()[this.chosen].text}</span>
      <iron-icon icon="hardware:keyboard-arrow-down"></iron-icon>
  </button>
    <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset=${this.stickyTitle ? "35" : "0"}>
      <ul slot="dropdown-content">${this._parseChoices().map(choice => this._renderChoice(choice))}</ul>
    </iron-dropdown>
  </div>
  `;
}
