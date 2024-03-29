import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
      background-color: var(--ae-tcolor-light);
    }

    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    #input {
      /* flex-grow: 1; */
      height: 44px;
      min-width: 30px;
      border: none;
      background-color: var(--ae-tcolor-light);
      font-size: var(--ae-font-size);
      padding-left: 10px;
      box-sizing: border-box;
      flex: 1;
    }
    input:focus {
      outline: none;
    }

    /* #icon-container { */
    rp-icon {
      display: inline-block;
      /* height: 44px; */
      /* display: flex; */
      /* flex-grow: 1; */
      /* align-items: center; */
      /* justify-content: flex-end; */
      padding-left: 15px;
      padding-right: 15px;
      background-color: var(--ae-tcolor-light);
    }

    .line {
      background-color: var(--ae-tcolor-primary10);
      width: 1px;
      min-width: 1px;
      height: 34px;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
  </style>
  <div class="container">
    <rp-dropdown .choices="${this.getDropdownOptions()}"
                 to-upper-case
                 chosen="${this.activeFacet}"
                 @new-selection="${e => this.activeFacet = e.target.chosen}">
    </rp-dropdown>
    <div class="line"></div>
    <label for="input" class="sr-only">Search the registry</label>
    <input type="text"
          .value="${this.inputValue}"
           placeholder="${this.placeholder}"
           @input="${(e) => this.inputValue = e.target.value}"
           @keyup="${this._handleKeyup}"
           id="input">
    <!-- <div id="icon-container"> -->
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    <!-- </div> -->

  </div>
  `;
}
