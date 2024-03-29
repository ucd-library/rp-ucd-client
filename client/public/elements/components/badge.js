import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
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
      maxWidth: {type: Number, attribute: 'max-width'},
      ellipsis: {type: Boolean},
      colorSequence: {type: Number, attribute: 'color-sequence'},
      hideFromTab: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.maxColor = 6;
    this.href = "";
    this.maxWidth = 0;
    this.ellipsis = false;
    this.hideFromTab = false;
    this.render = render.bind(this);
  }

  /**
   * @method _constructClasses
   * @description Makes a class map object based on element properties/attributes. 
   * Classes are applied to the element.
   * 
   * @returns {Object} - {class1: true, class2: false}
   */
  _constructClasses() {
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

    if (this.maxWidth > 0) classes['has-max-width'] =  true;
    
    return classes;
  }

  /**
   * @method _constructStyles
   * @description Constructs CSS styles based on element properties
   * 
   * @returns {Object}
   */
  _constructStyles(){
    let styles = {};
    if (this.maxWidth > 0) styles['max-width'] = `${this.maxWidth}px`;
    return styles;
  }

  /**
   * @method _renderBadge
   * @description Renders badge as a link or not.
   * 
   * @returns {TemplateResult}
   */
  _renderBadge() {
    if (this.href) {
      return html`
      <a 
        style="color:inherit;"
        tabindex="${this.hideFromTab ? "-1": "0"}"
        href=${this.href}>
        ${this._renderSpan()}
      </a>`;
    }
    return html`<a 
      style="color:inherit;"
      tabindex="${this.hideFromTab ? "-1": "0"}"
      @keyup="${this._onKeyUp}">
      ${this._renderSpan()}
    </a>`;
  }

  /**
   * @method _onKeyUp
   * @description fake click events on keyup in no href
   * 
   * @param {*} e 
   * @returns 
   */
  _onKeyUp(e) {
    if( e.which !== 13 ) return;
    this.dispatchEvent(new CustomEvent('click'));
  }

  /**
   * @method _renderSpan
   * @description Renders the badge content
   * 
   * @returns {TemplateResult}
   */
  _renderSpan() {
    return html`<span class=${classMap(this._constructClasses())} style=${styleMap(this._constructStyles())}>
      ${this.ellipsis ? html`
        <iron-icon icon="more-horiz"></iron-icon>
        <span class="sr-only">See more subjects</span>
      ` : html`<slot></slot>`}
      
    </span>`;
  }

}
customElements.define('rp-badge', RpBadge);
