import { LitElement, html, svg } from 'lit-element';
import render from './icon.tpl.js';

export class RpIcon extends LitElement {
  static get properties() {
  return {
    size: {type: String},
    icon: {type: String},
    themeColor: {type: String, attribute: 'theme-color'},
    isLink: {type: Boolean, attribute: 'is-link'},
    circleBg: {type: Boolean, attribute: 'circle-bg'},
    hasText: {type: Boolean, attribute: 'has-text'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

  constructClasses() {
    let classes = {};
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.icon.startsWith('rp-') && !this._isCustomIcon(this.icon)) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.circleBg) {
      classes.circle = true;
    }
    if (this.isLink) {
      classes.link = true;
    }
    if (this.themeColor) {
      classes[this.themeColor] = true;
    }
    if (this.size) {
      classes[this.size] = true;
    }
    if(this.hasText){
      classes.text = true;
    }
    return classes;
  }

  renderIcon() {
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      return html``;
    }
    if (this.icon.startsWith('iron-')) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<iron-icon class="icon" icon="${icon}"></iron-icon>`;
    }
    if (this._isCustomIcon(this.icon)) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<svg class="icon rp" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  ${this._renderCustomIcon(icon)}
                  </svg>`;
    }
    return html``;
  }

  _renderCustomIcon(icon) {
    if (icon == 'search') {
      return svg`<path d="M21.55,19.4l-4.14-4.15a8.44,8.44,0,1,0-2.16,2.16l4.15,4.15a1.55,1.55,0,0,0,1.08.44,1.52,1.52,0,0,0,1.07-2.6ZM5.05,10.45a5.41,5.41,0,1,1,5.4,5.4A5.4,5.4,0,0,1,5.05,10.45Z"/>`;
    }
    if (icon == 'qr') {
      return svg`<path d="M3,3V8.25H8.25V3ZM6.75,6.75H4.5V4.5H6.75Z"/><path d="M3,15.75V21H8.25V15.75ZM6.75,19.5H4.5V17.25H6.75Z"/><path d="M15.75,3V8.25H21V3ZM19.5,6.75H17.25V4.5H19.5Z"/><polygon points="19.5 9.75 19.5 14.25 15.75 14.25 15.75 15.75 21 15.75 21 9.75 19.5 9.75"/><polygon points="15.75 17.25 15.75 21 17.25 21 17.25 18.75 19.5 18.75 19.5 21 21 21 21 17.25 15.75 17.25"/><polygon points="9.75 3 9.75 4.5 12.75 4.5 12.75 8.25 14.25 8.25 14.25 3 9.75 3"/><polygon points="12.75 9.75 12.75 12.75 9.75 12.75 9.75 17.25 12.75 17.25 12.75 21 14.25 21 14.25 15.75 11.25 15.75 11.25 14.25 14.25 14.25 14.25 11.25 15.75 11.25 15.75 12.75 17.25 12.75 17.25 9.75 12.75 9.75"/><rect x="9.75" y="18.75" width="1.5" height="2.25"/><rect x="6" y="12.75" width="2.25" height="1.5"/><polygon points="9.75 6 9.75 9.75 3 9.75 3 14.25 4.5 14.25 4.5 11.25 11.25 11.25 11.25 6 9.75 6"/>`;
    }
  }

  _isCustomIcon(icon){
    if (['rp-search', 'rp-qr'].includes(icon)) {
      return true;
    }
    return false;
  }
}

customElements.define('rp-icon', RpIcon);
