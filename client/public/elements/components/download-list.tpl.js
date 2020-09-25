import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { classMap } from 'lit-html/directives/class-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
      color: var(--tcolor-primary)
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--font-size-small);
    }
    .icon-dl {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--tcolor-bg-primary);
      transition: 0.3s;
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
    }
    .button {
      cursor: pointer;
    }
    #main-toggle:hover, .choice:hover .icon-dl {
      background-color: var(--tcolor-hover-bg);
      color: var(--tcolor-light);
    }
    #main-toggle.opened, #main-toggle.opened:hover {
      background-color: var(--tcolor-primary);
      color: var(--tcolor-bg-primary);
    }
    #dropdown-content {
      background-color: var(--tcolor-light);
      box-shadow: 0 0 3px 5px rgba(0, 0, 0, .1);
    }
    .title {
      padding: 15px;
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-text);
    }
    iron-icon {
      width: 50%;
      height: 50%;
      min-width: 50%;
      min-height: 50%;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .text-box {
      margin-left: 10px;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
    .choice {
      padding: 15px;
      transition: 0.3s;
    }
    .choice:hover {
      background-color: var(--tcolor-bg-primary);
    }
    .choice-content {
      display: flex;
      align-items: center;
    }
    
  </style>
  <div class="container">
      <div role="button"
        class="${classMap({'icon-dl': true, button: true, opened: this.opened})}"
        id="main-toggle"
        aria-pressed="${this.opened}"
        @click="${this._onMainClick}"
        style="${styleMap({width: this.size, height: this.size, minHeight: this.size, minWidth: this.size})}">
        <iron-icon icon="file-download"></iron-icon>
      </div>

      <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset="${this.pixels}">
        <div slot="dropdown-content" id="dropdown-content">
          <div class="title">${this.title}</div>
          <ul>${this.choices.map((choice, i) => this._renderChoices(choice, i))}</ul>
        </div>
    </iron-dropdown>
      
  </div>
  `;
}
