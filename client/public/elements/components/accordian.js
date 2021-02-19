import { LitElement } from 'lit-element';
import render from './accordian.tpl.js';

/**
 * @class RpAccordian
 * @description UI component for making an FAQ-style accordian element
 */
export class RpAccordian extends LitElement {
  static get properties() {
    return {
      titleText: {type: String, attribute: "title-text"},
      expanded: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.expanded = false;
  }

  /**
   * @method toggle
   * @description Expands/collapses element inner text
   */
  toggle(){
    this.expanded = !this.expanded;
  }
}

customElements.define('rp-accordian', RpAccordian);
