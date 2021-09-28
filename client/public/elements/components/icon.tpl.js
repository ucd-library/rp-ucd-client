import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
      font-size: var(--ae-rp-icon-font-size, var(--ae-font-size));
      padding: var(--ae-rp-icon-padding, 0);
      margin: var(--ae-rp-icon-margin, 0);
    }
    .icon {
      height: 24px;
      width: 24px;
    }

    .icon.rp {
      fill: currentColor;
      width: 25px;
      height: 25px;
    }

    .icon.extralgSVGIcon {
      fill: currentColor;
      width: 40px;
      height: 40px;
    }
    .lgIcon {
      height: 24px;
      width: 24px;
    }
    .container {
      color: var(--ae-rp-icon-color, var(--ae-tcolor-primary));
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
    }
    .container.link .tooltiptext{
      margin-top: -100px;
      visibility: hidden;
      width: 150px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 25px;
      padding: 5px 5px;
      
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
    }
    /* .tooltiptext{
      display: none;
    } */

    .container.circle {
      border-radius: 50%;
      background-color: var(--ae-rp-icon-bg-color, var(--ae-tcolor-bg-primary));
    }
    .container.noicon {
      display: none;
    }
    .container.link {
      cursor: pointer;
      transition: 0.3s;
    }
    .container.link:hover {
      background-color: var(--ae-tcolor-hover-bg);
      color: var(--ae-tcolor-light);
    }
    .container.link:hover .tooltiptext{
      visibility: visible;
    }
    .container.secondary {
      color: var(--ae-tcolor-light);
    }
    .container.people {
      background-color: var(--ae-color-blue20);
      color: var(--ae-color-blue);
    }
    .container.work {
      background-color: var(--ae-color-farmers-market);
      color: var(--ae-color-blue);
    }
    .container.subject {
      background-color: var(--ae-color-rec-pool);
      color: var(--ae-color-blue);
    }
    .container.grant {
      background-color: var(--ae-color-thiebaud-icing);
      color: var(--ae-color-blue);
    }
    .container.circle.secondary {
      background-color: var(--ae-tcolor-secondary);
    }
    .container.lg {
      height: 35px;
      width: 35px;
    }
    .container.extralg {
      height: 70px;
      width: 70px;
    }
    .import-icon{
      margin:auto;
      width:135px; 
      height:135px;
    }

  </style>
  <div class="container ${classMap(this.constructClasses())}" style="${styleMap(this.getCircleSizeStyles())}">
    ${this.renderIcon()} ${this.hasText ? html `<span class="tooltiptext"><slot name="tooltip"></slot></span>` :
                                          html `` } 
  </div>
  `;
}
