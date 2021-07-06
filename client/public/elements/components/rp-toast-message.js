import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import render from './rp-toast-message.tpl.js';


/**
 * @class RpToastMessage
 * @description A message for the harvest.
 */
export class RpToastMessage extends Mixin(LitElement)
  .with(LitCorkUtils) {
  static get properties() {
    return {
      lastMessage: {type:String},
      lastMessageObject: {type:Object}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.lastMessage = "";
    this.lastMessageObject = {};
    this._injectModel('PersonModel', 'SocketModel');


  }

  /**
   * @method show
   * @description Show the toaster module 
   */
  show(){
    this.shadowRoot.host.style.display = "block";
  }

  /**
   * @method show
   * @description Hide the toaster module 
   */
  hide(){
    this.shadowRoot.host.style.display = "none";
  }

  /**
   * @method _onSocketMessage
   * @param {Event} event - The last message recieved by the harvest
   * @description Displays the last message from the harvest container
   * and show the toaster message
   */
  // async _toastMessage() {
  //   this.lastMessage = await this._doLastMessage();
  //   if (this.lastMessage == null) this.lastMessage = "No Message Found";
  //   this.show();

  // }
  _onSocketMessage(event){
    this.lastMessage = event.connected;
    this.show();
  }

  /**
   * @method _dismissToaster
   * @param {String} lastMessage - The last message recieved by the harvest
   * @description Displays the last message from the harvest container
   */
  async _dismissToaster() {
    this.hide();
  }

  /**
   * @method _doLastMessage
   * @param {String} id - The message id of for Kafka.
   * @description Retrieves the last message from the harvest container
   * @returns {String} data
   */
  async _doLastMessage() {
    let data = await this.SocketModel.getLastMessage();
    return data.connected;
  }


  /**
   * @method _renderSpan
   * @description Renders the badge content
   * 
   * @returns {TemplateResult}
   */
  _renderSpan() {
    return html`<span class=${classMap(this._constructClasses())} style=${styleMap(this._constructStyles())}>
      <slot></slot>
    </span>`;
  }


}
customElements.define('rp-toast-message', RpToastMessage);
