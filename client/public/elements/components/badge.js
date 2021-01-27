import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import render from './badge.tpl.js';

/**
 * @class RpBadge
 * @description A badge UI component - primarily used for research subjects.
 * Cycles through different border colors if previous element is also rp-badge.
 * Uses a slot to render text of badge.
 */
export class RpBadge extends LitElement {
  static get properties() {
    return {
      size: {type: String},
      href: {type: String},
      ellipsis: {type: Boolean},
      colorSequence: {type: Number, attribute: 'color-sequence'},
    };
  }

  constructor() {
    super();
    this.maxColor = 6;
    this.ellipsis = false;
    this.render = render.bind(this);
  }

  /**
   * @method constructClasses
   * @description Makes a class map object based on element properties/attributes. 
   * Classes are applied to the element.
   * 
   * @returns {Object} - {class1: true, class2: false}
   */
  constructClasses() {
    let classes = {'main': true};

    if (this.size) {
      classes['size-' + this.size] = true;
    }

    if (this.colorSequence) {
      let n = Math.floor(this.colorSequence);
      classes['color-' + n.toString()] = true;
    }
    else if ( this.ellipsis ) {
      classes['ellipsis'] = true;
    }
    else {
      let siblings = [...this.parentNode.childNodes].filter(n => n.tagName === this.tagName);
      if (siblings.length > 0) {
        let n = siblings.indexOf(this) % this.maxColor;
        classes['color-' + n.toString()] = true;

      }
      else {
        classes['color-0'] = true;
      }

    }
    return classes;
  }

  /**
   * @method _renderBadge
   * @description Renders badge as a link or not.
   * 
   * @returns {TemplateResult}
   */
  _renderBadge() {
    if (this.href) {
      return html`<a style="color:inherit;" href=${this.href}>${this._renderSpan()}</a>`;
    }
    return html`${this._renderSpan()}`;
  }

  /**
   * @method _renderSpan
   * @description Renders the badge content
   * 
   * @returns {TemplateResult}
   */
  _renderSpan() {
    return html`<span class=${classMap(this.constructClasses())}>
      ${this.ellipsis ? html`
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      ` : html`<slot></slot>`}
      
    </span>`;
  }

}
customElements.define('rp-badge', RpBadge);
