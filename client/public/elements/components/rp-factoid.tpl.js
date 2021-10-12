import { html, css } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
  
  export function render() {
  return html`
  
        <style>
            .import-icon{
                margin:auto;
                width:135px; 
                height:135px;
            }

        </style>
        <div class="factoid" style="margin-top:35px;">
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