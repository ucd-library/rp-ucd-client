import { LitElement, html, svg } from 'lit-element';
import render from './icon.tpl.js';
import { styleMap } from 'lit-html/directives/style-map';

export class RpIcon extends LitElement {
  static get properties() {
  return {
    size: {type: String},
    icon: {type: String},
    themeColor: {type: String, attribute: 'theme-color'},
    isLink: {type: Boolean, attribute: 'is-link'},
    circleBg: {type: Boolean, attribute: 'circle-bg'},
    hasText: {type: Boolean, attribute: 'has-text'},
    sizeIcon: {type: String, attribute: 'size-icon'},
    sizeIconSVG:  {type: String, attribute: 'size-icon-svg'},
    _customIcons: {type: Object},
    iconPixelSize: {type: Number},
    circlePixelSize: {type: Number}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.icon = "";
    this.themeColor = "";
    this.isLink = false;
    this.circleBg = false;
    this.hasText = false;
    this.size = "";
    this.sizeIcon = "";
    this.sizeIconSVG = "";
    this.iconPixelSize = 24;
    this.circlePixelSize = this.iconPixelSize + 6;

    // Non Iron-icon icons that are prefaced with 'rp-'. i.e. <rp-icon icon="rp-search"></rp-icon>
    this._customIcons = {
      'search': svg`<path d="M21.55,19.4l-4.14-4.15a8.44,8.44,0,1,0-2.16,2.16l4.15,4.15a1.55,1.55,0,0,0,1.08.44,1.52,1.52,0,0,0,1.07-2.6ZM5.05,10.45a5.41,5.41,0,1,1,5.4,5.4A5.4,5.4,0,0,1,5.05,10.45Z"/>`,
      'qr': svg`<path d="M3,3V8.25H8.25V3ZM6.75,6.75H4.5V4.5H6.75Z"/>
        <path d="M3,15.75V21H8.25V15.75ZM6.75,19.5H4.5V17.25H6.75Z"/>
        <path d="M15.75,3V8.25H21V3ZM19.5,6.75H17.25V4.5H19.5Z"/>
        <polygon points="19.5 9.75 19.5 14.25 15.75 14.25 15.75 15.75 21 15.75 21 9.75 19.5 9.75"/>
        <polygon points="15.75 17.25 15.75 21 17.25 21 17.25 18.75 19.5 18.75 19.5 21 21 21 21 17.25 15.75 17.25"/>
        <polygon points="9.75 3 9.75 4.5 12.75 4.5 12.75 8.25 14.25 8.25 14.25 3 9.75 3"/>
        <polygon points="12.75 9.75 12.75 12.75 9.75 12.75 9.75 17.25 12.75 17.25 12.75 21 14.25 21 14.25 15.75 11.25 15.75 11.25 14.25 14.25 14.25 14.25 11.25 15.75 11.25 15.75 12.75 17.25 12.75 17.25 9.75 12.75 9.75"/>
        <rect x="9.75" y="18.75" width="1.5" height="2.25"/>
        <rect x="6" y="12.75" width="2.25" height="1.5"/>
        <polygon points="9.75 6 9.75 9.75 3 9.75 3 14.25 4.5 14.25 4.5 11.25 11.25 11.25 11.25 6 9.75 6"/>`,
      'filter': svg`<path d="M22,1H2A1,1,0,0,0,1.3,2.76l8,8v8.85a1,1,0,0,0,.44.85l3.44,2.4A1,1,0,0,0,14.75,22V10.71l8-8A1,1,0,0,0,22,1Z"/>`,
      'subject': svg`<path d="M5.09,6.65a3.8,3.8,0,0,1-.47-.18L2.8,5.41A.83.83,0,1,1,3.62,4c.64.36,1.29.74,1.92,1.12A.79.79,0,0,1,5.89,6,.93.93,0,0,1,5.09,6.65Z"/>
        <path d="M2.91,9H4A.83.83,0,1,1,4,10.6H1.83A.8.8,0,0,1,1,9.74.81.81,0,0,1,1.87,9Z"/>
        <path d="M20.78,15.71a2.35,2.35,0,0,1-.44-.17L18.5,14.48a.82.82,0,0,1-.32-1.12A.8.8,0,0,1,19.27,13c.67.37,1.33.75,2,1.14a.8.8,0,0,1,.33.93A.89.89,0,0,1,20.78,15.71Z"/>
        <path d="M21.09,9h1a.81.81,0,0,1,.87.8.8.8,0,0,1-.83.85H20a.81.81,0,0,1-.84-.85A.83.83,0,0,1,20,9Z"/>
        <path d="M5.9,13.87a.78.78,0,0,1-.42.62l-1.91,1.1a.82.82,0,0,1-.84-1.41c.64-.39,1.29-.77,1.95-1.13A.83.83,0,0,1,5.9,13.87Z"/>
        <path d="M18.1,5.64a.7.7,0,0,1,.39-.56c.62-.37,1.24-.74,1.87-1.09a.83.83,0,1,1,.83,1.43c-.62.36-1.24.73-1.87,1.08A.83.83,0,0,1,18.1,5.64Z"/>
        <path d="M9.25,18.83a1.19,1.19,0,0,0,.19.61l.59.89a1.12,1.12,0,0,0,.92.49h2.12a1.12,1.12,0,0,0,.92-.49l.59-.89a1.09,1.09,0,0,0,.18-.61V17.51H9.25ZM6,9.24a6,6,0,0,0,1.5,4,9.75,9.75,0,0,1,1.79,3.15v0h5.52v0a10,10,0,0,1,1.8-3.15A6.06,6.06,0,1,0,6,9.24ZM12,6.49A2.76,2.76,0,0,0,9.25,9.24a.55.55,0,0,1-.55.56.56.56,0,0,1-.55-.56A3.86,3.86,0,0,1,12,5.39a.55.55,0,0,1,.55.55A.55.55,0,0,1,12,6.49Z"/>`
    };
  }

  /**
   * @method getIconSize
   * @description return the size of the icon depending on the 
   * assigned sizeIcon
   * @returns {Integer} 
   */
  getIconSize(){
    let size = this.iconPixelSize;
    if (this.sizeIconSVG == 'extralgIconSubject' || this.sizeIcon == 'extralgIconSubject') {
      size = 45;
    }
    else if (this.sizeIconSVG == 'extralgIconPeople' || this.sizeIcon == 'extralgIconPeople') {
      size = 35;
    }
    else if (this.sizeIconSVG == 'extralgIconWorks' || this.sizeIcon == 'extralgIconWorks') {
      size = 37;
    }
    else if (this.sizeIcon == 'lg') {
      size = 34;
    }
    else if (this.sizeIconSVG == 'extralgSVGIcon' || this.sizeIcon == 'extralgSVGIcon') {
      size = 40;
    }

    return size;
  }

  /**
   * @method getIconSizeStyles
   * @description return the object of the style assigned
   * icons and calls the getIconSize
   * @returns {Object} 
   */
  getIconSizeStyles(){
    let size = `${this.getIconSize()}px`;
    return {'width': size, "min-width": size, 'height': size};
  }

  /**
   * @method getCircleSize
   * @description returns the size of the circle based on the 
   * size of the icon
   * @returns {Integer} 
   */
  getCircleSize(){
    let size = this.circlePixelSize;
    if (this.size == 'lg') {
      size = 35;
    }
    else if ( this.size == 'extralg') {
      size = 70;
    }
    return size;
  }

  /**
   * @method getCircleSizeStyles
   * @description return the object of the style assigned
   * circles of icon and calls the getCircleSize
   * @returns {Object} 
   */
  getCircleSizeStyles(){
    let size = `${this.getCircleSize()}px`;
    return {'width': size, "min-width": size, 'height': size};
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
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
    if(this.sizeIcon){
      classes[this.sizeIcon] = true;
    }
    if(this.sizeIconSVG){
      classes[this.sizeIconSVG] = true;
    }
    return classes;
  }

  /**
   * @method _calculateViewBox
   * @description return the calcuation of the viewbox
   * for each icon size and calls getIconSize
   * @returns {String} 
   */
  _calculateViewBox() {
    let size = this.getIconSize();
    if (this.icon == 'rp-subject') size = 24;
    return `0 0 ${size} ${size}`;
  }

  /**
   * @method renderIcon
   * @description renders the icon depending on if it is
   * and iron icon or a custom icon as an html
   * @returns {HTML} 
   */
  renderIcon() {
    console.log(this.icon);
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      return html``;
    }
    if (this.icon.startsWith('iron-')) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<iron-icon class="icon ${this.sizeIcon ? this.sizeIcon : ''}" icon="${icon}" style="${styleMap(this.getIconSizeStyles())}"></iron-icon>`;

    }
    if (this._isCustomIcon(this.icon)) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<svg class="icon rp ${this.sizeIconSVG ? this.sizeIconSVG : ''}" viewBox="${this._calculateViewBox()}" style="${styleMap(this.getIconSizeStyles())}" xmlns="http://www.w3.org/2000/svg">${this._renderCustomIcon(icon)}</svg>`;
    }
    return html``;
  }

  /**
   * @method _renderCustomIcon
   * @param {Object} icon
   * @description returns the custom icon definition defined
   * above in the constructor
   * @returns {HTML} 
   */
  _renderCustomIcon(icon) {
    return this._customIcons[icon];
  }

  /**
   * @method _isCustomIcon
   * @param {Object} icon
   * @description returns if it is a custom icon or not
   * 
   * @returns {Boolean} 
   */
  _isCustomIcon(icon){
    if (icon.startsWith('rp-')) icon = icon.split("-").slice(1).join('-');
    if (Object.keys(this._customIcons).includes(icon)) {
      return true;
    }
    return false;
  }
}

customElements.define('rp-icon', RpIcon);
