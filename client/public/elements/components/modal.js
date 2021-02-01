import { LitElement } from 'lit-element';
import render from './modal.tpl.js';

/**
 * @class RpModal
 * @description A modal UI component. Content is rendered using slots.
 */
export class RpModal extends LitElement {
  static get properties() {
    return {
      visible: {type: Boolean},
      contentTitle: {type: String, attribute: "content-title"},
      dismissText: {type: String, attribute: 'dismiss-text'}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.visible = false;
    this.contentTitle = "";
    this.dismissText = "Cancel";
  }

  /**
   * @method show
   * @description Shows the modal.
   */
  show() {
    this.visible = true;
  }

  /**
   * @method hide
   * @description Hides the modal.
   */
  hide() {
    this.visible = false;
  }

  /**
   * @method toggle
   * @description Shows/hides the modal.
   */
  toggle() {
    this.visible = !this.visible;
  }

}

customElements.define('rp-modal', RpModal);
