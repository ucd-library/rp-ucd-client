import { html, css, LitElement } from 'lit';
import {render, styles} from "./rp-factoid.tpl.js";

import "@ucd-lib/theme-elements/ucdlib/ucdlib-iconset/ucdlib-iconset";
import "@ucd-lib/theme-elements/ucdlib/ucdlib-icon/ucdlib-icon";
import factoidCss from "@ucd-lib/theme-sass/main_site/factoid/_factoid.css.js";
import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";


export class RpFactoid extends LitElement {
    // static styles = [factoidCss];

  static get properties() {
    return {
      href: {type: String},
      statistic: {type: String},
      title: {type:String},
      importIcon:{type:Boolean}
    };
  }

  static get styles() {
    const elementStyles = css`
    :host {
        display: block;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    `;
  
    return [elementStyles,factoidCss,normalizeCss,layoutCss];
  }


  constructor() {
    super();
    this.href='';
    this.statistic='xxxx';
    this.title = 'Statistic';
    this.importIcon = false;
    this.render = render.bind(this);


    
  }

  firstUpdated(){
    const iconsets = this.renderRoot.querySelectorAll('ucdlib-iconset');
    Array.from(iconsets).forEach(iconset => {
      document.head.appendChild(iconset);
    });
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
   constructClasses() {
    let classes = {};

    if (this.importIcon && this.importIcon != 'undefined') {
      classes['importIcon'] = true;
    }

    return classes;
  }

}

customElements.define('rp-factoid', RpFactoid);

