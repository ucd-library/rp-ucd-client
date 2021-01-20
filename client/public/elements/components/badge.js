import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import render from './badge.tpl.js';

export class RpBadge extends LitElement {
  static get properties() {
  return {
    size: {type: String},
    href: {type: String},
    ellipsis: {type: Boolean},
    colorSequence: {type: Number,
                    attribute: 'color-sequence'},
  };
  }

  constructor() {
    super();
    this.maxColor = 6;
    this.ellipsis = false;
    this.render = render.bind(this);
  }

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

    return classes
  }

  _renderBadge() {
    if (this.href) {
      return html`<a href=${this.href}>${this._renderSpan()}</a>`;
    }
    else {
      return html`${this._renderSpan()}`;
    }
  }

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
