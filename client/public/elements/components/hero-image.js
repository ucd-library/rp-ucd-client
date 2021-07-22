import { LitElement } from 'lit-element';
import render from './hero-image.tpl.js';

/**
 * @class RpHeroImage
 * @description UI element that renders a hero image.
 * Expects image options to be labeled sequentially within assetFolder. ie. 0.jpg 1.jpg 2.jpg
 */
export class RpHeroImage extends LitElement {
  static get properties() {
    return {
      src: {type: String},
      assetFolder: {type: String, attribute: "asset-folder"},
      assetMax: {type: Number, attribute: "asset-max"},
      assetPick: {type: Number, attribute: "asset-pick", reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.assetFolder = "/images/profile-features/";
    this.assetMax = 29;
    this.shuffle();
  }

  /**
   * @method constructStyles
   * @description Makes a css style mapping object based on element parameters. Applied to element container.
   * 
   * @returns {Object}
   */
  constructStyles() {
    let styles = {};

    if (this.src) {
      styles['background-image'] = `var(--ae-tcolor-hero-film), url(${this.src})`;
    }
    else {
      if (this.assetPick < 0) {
        this.assetPick = 1;
      }
      if (this.assetPick > this.assetMax) {
        this.assetPick = this.assetMax;
      }
      styles['background-image'] = `var(--ae-tcolor-hero-film), url(${this.assetFolder + this.assetPick + ".jpg"})`;
    }
    return styles;
  }

  /**
   * @method shuffle
   * @description Randomly loads a new hero image. Will rerender.
   */
  shuffle() {
    if (!this.src) {
      this.assetPick = Math.floor(Math.random() *  this.assetMax + 1);
    }
  }
}

customElements.define('rp-hero-image', RpHeroImage);
