import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
import render from './message.tpl.js';


/**
 * @class RpMessage
 * @description A message for the harvest.
 */
export class RpMessage extends Mixin(LitElement)
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
   * @method _toastMessage
   * @param {String} lastMessage - The last message recieved by the harvest
   * @description Displays the last message from the harvest container
   */
  async _toastMessage() {
    this.lastMessage = await this._doLastMessage();
    if (this.lastMessage == null) this.lastMessage = "No Message Found";
    this.shadowRoot.querySelector('.toaster').style.height = '15%';
    console.log("check");

  }

  /**
   * @method _dismissToaster
   * @param {String} lastMessage - The last message recieved by the harvest
   * @description Displays the last message from the harvest container
   */
  async _dismissToaster() {
    this.shadowRoot.querySelector('.toaster').style.height = '0';
  }

  /**
   * @method _doLastMessage
   * @param {String} id - The message id of for Kafka.
   * @description Retrieves the last message from the harvest container
   * @returns {String} data
   */
  async _doLastMessage() {
    let data = await this.PersonModel.harvest(APP_CONFIG.user.uid);
    return data.body.message;

    //SB: Socket add?
    //let data = await this.SocketModel.getLastMessage();
    //return data;
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
customElements.define('rp-message', RpMessage);
