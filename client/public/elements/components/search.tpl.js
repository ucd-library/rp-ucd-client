import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;

    }

    .container {
      flex-flow: row nowrap;
      align-items: center;
      color: var(--ae-tcolor-primary);
      font-size: var(--ae-font-size-h3);
      font-weight: var(--ae-font-weight-bold);
      display: inline-flex;


    }
    .input-container{
      display: flex;
      padding: 5px 0;
      min-width: 385px;
      background-color:var(--ae-tcolor-light);

    }

    #input {
      /* flex-grow: 1; */
      height: 44px;
      min-width: 180px;
      border: none;
      background-color: var(--ae-tcolor-light);
      padding-left: 10px;
      box-sizing: border-box;
      flex: 1;
      font-size: var(--ae-font-size-h3);
      font-weight: var(--ae-font-weight-bold);
    }
    input:focus {
      outline: none;
    }
    input[type="text"]{
      font-size: var(--ae-font-size);
    }
    rp-dropdown{
      font-size: var(--ae-font-size-h3);
    }

    rp-icon {
      display: inline-block;
      padding-left: 15px;
      padding-right: 15px;



    }

    .line {
      background-color: var(--ae-tcolor-primary50);
      width: 1px;
      min-width: 1px;
      height: 42px;
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
    .icon-container{
      display: flex;
      padding: 12px 0;
      background-color:var(--ae-tcolor-secondary);
      justify-content: center;
      align-items: center;
    }

  

  </style>
  <div class="container">
    <div class="input-container">
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
    </div>
    <div class="icon-container">
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    </div>

  </div>
  `;
}
