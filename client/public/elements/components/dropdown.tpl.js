import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

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
      font-size: var(--font-size-small);
      display: flex;
      align-items: center;
    }
    rp-icon {
      padding-left: 10px;
    }
    .line {
      background-color: var(--tcolor-primary10);
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
    }
    .has-filter-icon #button {
      padding-left: 3px;
    }
    .nopadding #button {
      padding-left: 0;
      padding-right: 0;
    }
    #input::placeholder {
      color: var(--tcolor-placeholder-text);
    }
    .container.outline-primary {
      color: var(--tcolor-primary70);
      background-color: var(--tcolor-light);
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
      font-weight: var(--font-weight-bold);
    }
    li a {
      display: block;
      width: 100%;
      text-decoration: none;
      color: var(--tcolor-primary);
    }
    iron-icon {
      margin-top: 2px;
    }
    .container.outline-primary li:hover {
      background-color: var(--tcolor-primary10);
    }
    .container.outline-primary ul {
      border-style: solid;
      border-width: 1px;
      border-color: var(--tcolor-primary70);
    }
    .container.outline-primary ul {
      background-color: var(--tcolor-light);
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
   <div id="button"
        @click="${this.openDropdown}">
        <span id="button-text">${this.stickyTitle ? this.stickyTitle : this._parseChoices()[this.chosen].text}</span>
        <iron-icon icon="hardware:keyboard-arrow-down"></iron-icon>
   </div>
    <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset=${this.stickyTitle ? "35" : "0"}>
      <ul slot="dropdown-content">${this._parseChoices().map(choice => this._renderChoices(choice))}</ul>
    </iron-dropdown>
  </div>
  `;
}
