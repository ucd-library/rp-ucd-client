import { LitElement } from 'lit';
import render from "./rp-loading.tpl.js";

/**
 * @class RpLoading
 * @description UI component class for displaying data loading graphics/messages
 * Use a slot to add text, and --rp-loading-color to change the color.
 * @prop {String} graphic - keyword of graphic to display. Currently only choice is 'dots'.
 */
export default class RpLoading extends LitElement {

  static get properties() {
    return {
      graphic: {type: String},
      role: {type: String, reflect: true},
      ariaLabel: {type: String, attribute: 'aria-label', reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.graphic = 'dots';
    this.role = "alert";
    this.ariaLabel = "loading";
  }

}

customElements.define('rp-loading', RpLoading);
