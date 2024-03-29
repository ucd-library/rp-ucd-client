import { LitElement, html } from 'lit';
import render from './link-list.tpl.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @class RpLinkList
 * @description UI component for sub-nav style link list
 */
export class RpLinkList extends LitElement {
  static get properties() {
    return {
      links: {type: Array},
      currentLink:  {type: Number, attribute: 'current-link', reflect: true},
      direction: {type: String, attribute: 'direction'},
      hasHeaderLink: {type: Boolean, attribute: 'has-header-link'},
      useHash: {type: Boolean, attribute: 'use-hash', reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.direction = 'v';
    this.currentLink = 0;

    this._changedLink = new CustomEvent('changed-link', {
      detail: {
        message: 'A new link has been selected.'
      }
    });
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};

    if (this.direction) {
      classes['direction-' + this.direction.toLowerCase()[0]] = true;
    }
    return classes;
  }

  /**
   * @method _renderLink
   * @description Renders a single link
   * @param {Object|String} link - Link text or object
   * @param {Number} index - Index of link
   * 
   * @returns {TemplateResult}
   */
  _renderLink(link, index){
    let text = "";
    let href = "";
    let disabled = false;
    let classes = {link: true};
    let forceNoHash = false;
    if (typeof link === 'string') {
      text = link;
    }
    else if (typeof link === 'object') {
      text = link.text;
      if (link.disabled) {
        disabled = true;
      }
      if (link.href) href = link.href;
      forceNoHash = link.forceNoHash || false;
    }

    if (index == this.currentLink) {
      classes['selected'] = true;
    }
    if (this.hasHeaderLink && index == 0) {
      classes['link-header'] = true;
    }
    classes['disabled'] = disabled;

    if (href !== undefined) {
      if( this.useHash && forceNoHash !== true ) {
        href = "#"+href;
      }

      return html`
        <li role="none"><a 
          link="${index}" 
          class="${classMap(classes)}"
          role="menuitem"
          tabindex="${classes.disabled ? "-1": "0"}"
          href="${href}">
          ${text}
        </a></li>`;
    }

    if (text) {
      return html`
        <li 
          @click="${this.handleClick}" 
          link="${index}"
          role="menuitem"
          tabindex="${classes.disabled ? "-1": "0"}"
          class=${classMap(classes)}>${text}
        </li>`;
    }

    return html``;

  }

  /**
   * @method handleClick
   * @description - Bound to list item click event if href is not specified.
   * Fires the changed-link event.
   * @param {Event} e 
   */
  handleClick(e) {
    let new_link = parseInt(e.target.getAttribute('link'));
    if ((new_link != this.currentLink) && (!e.target.classList.contains('disabled'))) {
      this.currentLink = new_link;
      this.dispatchEvent(this._changedLink);
    }
  }

}

customElements.define('rp-link-list', RpLinkList);
