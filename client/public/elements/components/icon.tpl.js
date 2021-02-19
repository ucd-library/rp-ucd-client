import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
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
      color: var(--tcolor-primary);
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
      background-color: var(--tcolor-bg-primary);
    }
    .container.noicon {
      display: none;
    }
    .container.link {
      cursor: pointer;
      transition: 0.3s;
    }
    .container.link:hover {
      background-color: var(--tcolor-hover-bg);
      color: var(--tcolor-light);
    }
    .container.link:hover .tooltiptext{
      visibility: visible;
    }
    .container.secondary {
      color: var(--tcolor-light);
    }
    .container.people {
      background-color: var(--color-blue20);
      color: var(--color-blue);
    }
    .container.work {
      background-color: var(--color-farmers-market);
      color: var(--color-blue);
    }
    .container.subject {
      background-color: var(--color-rec-pool);
      color: var(--color-blue);
    }
    .container.circle.secondary {
      background-color: var(--tcolor-secondary);
    }
    .container.lg {
      height: 35px;
      width: 35px;
    }
    .container.extralg {
      height: 70px;
      width: 70px;
    }

  </style>
  <div class="container ${classMap(this.constructClasses())}" style="${styleMap(this.getCircleSizeStyles())}">
    ${this.renderIcon()} ${this.hasText ? html `<span class="tooltiptext"><slot name="tooltip"></slot></span>` :
                                          html `` } 
  </div>
  `;
}
