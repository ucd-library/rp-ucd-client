import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
      font-size: var(--font-size-h3);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
    }
    .container.opened input {
      border-color: var(--tcolor-secondary);
      border-style: solid;
      border-width: 2px;
      border-radius: 20px;
      border-right: 0;
      position: relative;
      left: 25px;
      padding-right: 30px;
      height: 34px;
    }
    input {
      border: 0;
      font-size: var(--font-size);
      padding-left: 10px;
      width: 0;
      background-color: inherit;
    }
    /**
    .container.opened input {
      animation-duration: .75s;
      animation-name: open;
    }
    .container.closing input {
      animation-duration: .75s;
      animation-name: close;
      padding-right: 0 !important;
    }
     */
    input:focus {
      outline: none;
    }
    input[hidden] {
      display: none;
    }
    .container.closing {
    }
    rp-icon {
      z-index: 1;
    }
    @keyframes open {
      from {
        width: 0%;
      }

      to {
        width: 100%;
        }
    }
    @keyframes close {
      from {
        width: 100%;
      }

      to {
        width: 0;
        }
    }
  </style>
  <div class="container ${classMap(this._constructClasses())}">
    <input ?hidden="${!this.opened}" type="text" placeholder="${this.placeholder}"
           style="${styleMap(this._constructInputStyles())}"
           id="search-input"
           .value="${this.inputValue}"
           @animationend="${this._handleAnimationEnd}"
           @keyup="${this._handleKeyup}"
           @blur="${this._handleBlur}"
           @input="${(e) => this.inputValue = e.target.value}">
    <rp-icon @click="${this._handleClick}" icon="rp-search" circle-bg ?is-link="${this._activateLink()}" theme-color='secondary' size="lg"></rp-icon>
  </div>
  `;
}
