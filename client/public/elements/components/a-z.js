import { LitElement, html } from 'lit-element';
import render from './a-z.tpl.js';

export class RpAZ extends LitElement {
  static get properties() {
  return {
    hideAll: {type: Boolean, attribute: 'hide-all'},
    selectedLetter: {type: String, attribute: 'selected-letter', reflect: true},
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this._changedLetter = new CustomEvent('changed-letter', {
      detail: {
        message: 'A new letter has been selected.'
      }
    });
  }

  _renderAz(letter) {
    let selected = "";
    if (this.selectedLetter) {
      if (this.selectedLetter.toLowerCase() === letter.toLowerCase()) {
        selected = "selected"
      }
    }
    return html`<div @click="${this.handleClick}"
                     class="letter ${selected}"
                     letter="${letter}">${letter}</div>`
  }
  handleClick(e) {
    let new_letter = e.target.getAttribute('letter').toLowerCase();
    if (new_letter != this.selectedLetter) {
      this.selectedLetter = new_letter;
      this.dispatchEvent(this._changedLetter);
    }
  }

  firstUpdated(changedProperties) {
    if (!this.hideAll) {
      this.azlist.unshift('All');
      this.requestUpdate();
    }
  }
}

customElements.define('rp-a-z', RpAZ);