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
      dismissText: {type: String, attribute: 'dismiss-text'},
      closeOnConfirm : {type: Boolean}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.visible = false;
    this.contentTitle = "";
    this.dismissText = "Cancel";
    this.closeOnConfirm = true;
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

  /**
   * @method _onConfirmClicked
   * @description bound to click event on confirm slot.  Close modal
   * if this.closeOnConfirm is set to true.
   * 
   * TODO: JM - ensure click event on slot element has cross brower support
   */
  _onConfirmClicked() {
    if( this.closeOnConfirm ) {
      this.hide();
    }
  }

}

customElements.define('rp-modal', RpModal);
