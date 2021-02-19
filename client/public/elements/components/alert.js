import { LitElement } from 'lit-element';
import render from './alert.tpl.js';

/**
 * @class RpAlert
 * @description UI element for displaying basic alerts
 */
export class RpAlert extends LitElement {
  static get properties() {
    return {
      themeColor: {type: String, attribute: 'theme-color'}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.themeColor = 'danger';
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};
    classes['color-' + this.themeColor] = true;

    return classes;
  }

}

customElements.define('rp-alert', RpAlert);
