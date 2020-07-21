import { LitElement, html } from 'lit-element';
import render from './hero-image.tpl.js';

export class RpHeroImage extends LitElement {
  static get properties() {
  return {
    src: {type: String},
    assetFolder: {type: String, attribute: "asset-folder"},
    assetMax: {type: parseInt, attribute: "asset-max"},
    assetPick: {type: parseInt, attribute: "asset-pick", reflect: true}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.assetFolder = "/images/profile-features/"
    this.assetMax = 29;
    this.shuffle();
  }

  constructClasses() {
    let classes = {};

    return classes;
  }

  constructStyles() {
    let styles = {};

    if (this.src) {
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.src})`;
    }
    else {
      if (this.assetPick < 0) {
        this.assetPick = 1;
      }
      if (this.assetPick > this.assetMax) {
        this.assetPick = this.assetMax;
      }
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.assetFolder + this.assetPick + ".jpg"})`;
    }
    return styles;
  }

  shuffle() {
    if (!this.src) {
      this.assetPick = Math.floor(Math.random() *  this.assetMax + 1);
    }
  }
}

customElements.define('rp-hero-image', RpHeroImage);
