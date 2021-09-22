import { html, css } from 'lit';

import { classMap } from 'lit-html/directives/class-map';


import normalizeCss from "../../node_modules/@ucd-lib/theme-sass/normalize.css.js";
import factoidCss from "../../node_modules/@ucd-lib/theme-sass/main_site/factoid/_factoid.css.js";
import layoutCss from "../../node_modules/@ucd-lib/theme-sass/5_layout/_index.css.js";
  
  export function render() {
  return html`
  
        <style>
            .import-icon{
                margin:auto;
                width:135px; 
                height:135px;
            }
        </style>
        <div class="factoid">
            <a href="${this.href}">
            <div class="factoid-bracket left">
                <div class="factoid-bracket__thing"></div>
            </div>
            <div class="factoid-content">
                <div class="factoid-content__icon">
                    <slot class=${classMap(this.constructClasses())}></slot>                    
                </div>
                <div class="factoid-content__text">
                    <p class="factoid-content__text--statistic">${this.statistic}</p>
                    <p class="factoid-content__text--title">${this.title}</p>
                </div>
            </div>
            <div class="factoid-bracket right">
                <div class="factoid-bracket__thing"></div>
            </div>
            </a>
        </div>

  
  
  `;}