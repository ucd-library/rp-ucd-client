import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--ae-font-size-h3);
    }

    .container {
      min-width: 35px;
      position: relative;
      display: flex;
      justify-content: flex-end;
    }

    input {
      font-size: var(--ae-font-size);
      padding-left: 10px;
      padding-right: 32px;
      width: 100%;
      background-color: inherit;
      box-sizing: border-box;
      border: 2px solid var(--ae-tcolor-secondary);
      border-radius: 20px;
      position: relative;
      height: 35px;
      transition: width 200ms ease-in-out, padding 200ms ease-in-out;
    }

    input[closed] {
      width: 35px;
      padding-right: 0;
      padding-left: 0;
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
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
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
  <div class="container" >
    <input 
      ?closed="${!this.opened}" 
      type="text" 
      placeholder="${this.placeholder}"
      id="search-input"
      role="search" 
      aria-label="Sitewide"
      .value="${this.inputValue}"
      @keyup="${this._handleKeyup}"
      @input="${(e) => this.inputValue = e.target.value}" />


      <rp-icon @click="${this._handleClick}" 
        icon="rp-search" 
        role="button"
        tabindex="0"
        aria-label="${this.label}"
        aria-pressed="${this.opened ? 'true' : 'false'}"
        circle-bg 
        theme-color='secondary' 
        size="lg">
      </rp-icon>

  </div>
  `;
}
