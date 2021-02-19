import { LitElement, html } from 'lit-element';
import render from './avatar.tpl.js';

/**
 * @class RpAvatar
 * @description UI component for displaying a user's avatar
 */
export class RpAvatar extends LitElement {
  static get properties() {
    return {
      size: {type: String},
      src: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  constructClasses() {
    let classes = {};

    if (this.size && this.size != 'undefined') {
      classes['size-' + this.size] = true;
    }
    if (this.src && this.src != 'undefined') {
      classes['photo'] = true;
    }

    return classes;
  }

  /**
   * @method _constructStyles
   * @description Constructs CSS styles based on element properties
   * 
   * @returns {Object}
   */
  constructStyles() {
    let styles = {};

    if (this.src && this.src != 'undefined') {
      styles['background-image'] = `url(${this.src})`;
    }
    return styles;
  }

  /**
   * @method _renderFace
   * @description Renders iron icon placeholder if no avatar src
   * 
   * @returns {TemplateResult}
   */
  _renderFace() {
    if (!this.src || this.src == 'undefined') {
      return html`<iron-icon icon='face'></iron-icon>`;
    }
    return html``;
  }
}

customElements.define('rp-avatar', RpAvatar);
