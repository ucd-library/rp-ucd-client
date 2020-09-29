import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

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
    .container.secondary {
      color: var(--tcolor-light);
    }
    .container.circle.secondary {
      background-color: var(--tcolor-secondary);
    }
    .container.lg {
      height: 35px;
      width: 35px;
    }
    .lg .icon {
      height: 24px;
      width: 24px;
    }
  </style>
  <div class="container ${classMap(this.constructClasses())}">
    ${this.renderIcon()}
  </div>
  `;
}
