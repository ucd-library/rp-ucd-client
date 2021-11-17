import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
      color: var(--ae-tcolor-primary)
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--ae-font-size-small);
    }
    .icon-dl {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--ae-tcolor-bg-primary);
      transition: 0.3s;
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
    }
    .button {
      cursor: pointer;
    }
    #main-toggle.opened, #main-toggle.opened:hover {
      --rp-icon-bg-color: var(--ae-tcolor-primary);
      --rp-icon-color: var(--ae-tcolor-bg-primary);
    }
    #dropdown-content {
      background-color: var(--ae-tcolor-light);
      box-shadow: 0 0 3px 5px rgba(0, 0, 0, .1);
      padding-bottom: 10px;
    }
    .title {
      padding: 15px 15px 5px 15px;
      font-weight: var(--ae-font-weight-bold);
      color: var(--ae-tcolor-text);
    }
    iron-icon {
      width: 60%;
      height: 60%;
      min-width: 60%;
      min-height: 60%;
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
      font-weight: var(--ae-font-weight-bold);
    }
    .choice {
      padding: 5px 15px;
      transition: 0.3s;
    }
    a {
      color: var(--ae-tcolor-primary);
      text-decoration: none;
      transition: 0.3s;
    }
    .choice:hover {
      background-color: var(--ae-tcolor-bg-primary);
    }
    .choice-content {
      display: flex;
      align-items: center;
    }
    
  </style>
  <div class="container">
      <rp-icon icon="iron-icons:file-download" 
        id="main-toggle"
        class="${classMap({opened: this.opened})}"
        circle-bg is-link has-text size="lg" 
        @click="${this._onMainClick}">
        <div slot="tooltip">Download Publications</div>
      </rp-icon>

      <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset="${this.pixels}" horizontal-align="${this.dropOnLeft ? 'left' : 'right'}">
        <div slot="dropdown-content" id="dropdown-content">
          <div class="title">${this.title}</div>
          <ul>${this.choices.map((choice, i) => this._renderChoice(choice, i))}</ul>
        </div>
    </iron-dropdown>
      
  </div>
  `;
}
