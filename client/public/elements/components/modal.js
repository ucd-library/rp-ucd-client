import { LitElement, html } from 'lit-element';
import render from './modal.tpl.js';

export class RpModal extends LitElement {
  static get properties() {
  return {
      visible: {type: Boolean},
      contentTitle: {type: String, attribute: "content-title"},
      dismissText: {type: String, attribute: 'dismiss-text'},

  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.visible = false;
    this.contentTitle = "";
    this.dismissText = "Cancel";
  }

  updated(props) {
      if (props.has('visible')) {
          
      }
  }

  show() {
      this.visible = true;
  }
  hide() {
      this.visible = false;
  }
  toggle() {
      this.visible = !this.visible;
  }

}

customElements.define('rp-modal', RpModal);
