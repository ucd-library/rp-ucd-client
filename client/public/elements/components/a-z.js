import { LitElement, html } from 'lit-element';
import render from './a-z.tpl.js';

/**
 * @class RpAZ
 * @description UI component that displays an A-Z list
 * Emits 'changed-letter' event when a new item is selected.
 */
export class RpAZ extends LitElement {
  static get properties() {
    return {
      hideAll: {type: Boolean, attribute: 'hide-all'},
      disabledLetters: {type: Array},
      disabledLettersFmt: {type: Array},
      selectedLetter: {type: String, attribute: 'selected-letter'},
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this.disabledLetters = [];
    this.disabledLettersFmt = [];
    this.selectedLetter = 'All';
    this._changedLetter = new CustomEvent('changed-letter', {
      detail: {
        message: 'A new letter has been selected.'
      }
    });
  }

  /**
   * @method updated
   * @description Lit method called when element is updated
   * @param {Map} props - Element properties that have changed.
   */
  updated(props) {
    if (props.has('disabledLetters')) {
      this.disabledLettersFmt = this.disabledLetters.map(x => x.toUpperCase());
    }
  }

  /**
   * @method firstUpdated
   * @description Lit method called when element is updated for first time.
   */
  firstUpdated() {
    if (!this.hideAll) {
      this.azlist.unshift('All');
      this.requestUpdate();
    }
  }

  /**
   * @method _renderAz
   * @description Renders a single letter.
   * @param {*} letter 
   * 
   * @returns {TemplateResult}
   */
  _renderAz(letter) {
    let selected = "";
    if (this.selectedLetter) {
      if (this.selectedLetter.toLowerCase() === letter.toLowerCase()) {
        selected = "selected";
      }
    }
    return html`<div @click="${this.handleClick}"
                     ?disabled="${this.disabledLettersFmt.includes(letter)}"
                     class="letter ${selected}"
                     letter="${letter}">${letter}</div>`;
  }

  /**
   * @method handleClick
   * @description Attached to letter click listener
   * Emits 'changed-letter' event if letter changes
   * @param {Event} e 
   */
  handleClick(e) {
    let new_letter = e.target.getAttribute('letter').toLowerCase();
    if (new_letter != this.selectedLetter && !e.target.hasAttribute('disabled')) {
      this.selectedLetter = new_letter;
      this.dispatchEvent(this._changedLetter);
    }
  }

}

customElements.define('rp-a-z', RpAZ);
