import { LitElement, html } from 'lit';
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
      role: {type: String, reflect: true},
      ariaLabel: {type: String, attribute: "aria-label", reflect: true},
      baseHref : {type: String, attribute: "base-href"}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.azlist = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    this.disabledLetters = [];
    this.disabledLettersFmt = [];
    this.selectedLetter = 'All';
    this.role = "navigation";
    this.ariaLabel = "Filter content by first letter.";
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

    if( this.baseHref ) {
      let disabled = this.disabledLettersFmt.includes(letter);
      let href = "#";
      if( !disabled ) {
        let u=new URL(`/${this.baseHref}`,window.location.href);
        u.searchParams.set('az',letter.toLowerCase());
        href=u.pathname+u.search;
      }

      return html`<div class="letter ${selected}" ?disabled="${disabled}">
          <a href="${href}">${letter}</a>
        </div>
      `;
    }

    return html`
    <div
      @click="${this.handleClick}"
      @keyup="${this._onKeyup}"
      ?disabled="${this.disabledLettersFmt.includes(letter)}"
      class="letter ${selected}"
      tabindex="${this.disabledLettersFmt.includes(letter) ? "-1": "0"}"
      letter="${letter}">
      ${letter}
      </div>`;
  }

  /**
   * @method handleClick
   * @description Attached to letter click listener
   * @param {Event} e
   */
  handleClick(e) {
    this._onInteraction(e.target);
  }

  /**
   * @method _onKeyup
   * @description Bound to Enter keypress event on letter div
   * @param {Event} e
   */
  _onKeyup(e) {
    if (e.keyCode === 13 || e.code === 'Enter') {
      e.preventDefault();
      this._onInteraction(e.composedPath()[0]);
    }
  }

  /**
   * @method _onInteraction
   * @description Emits 'changed-letter' event if letter changes
   * @param {Element} target - letter div that was selected by user.
   */
  _onInteraction(target){
    let new_letter = target.getAttribute('letter').toLowerCase();
    if (new_letter != this.selectedLetter && !target.hasAttribute('disabled')) {
      this.selectedLetter = new_letter;
      this.dispatchEvent(this._changedLetter);
    }
  }

}

customElements.define('rp-a-z', RpAZ);
