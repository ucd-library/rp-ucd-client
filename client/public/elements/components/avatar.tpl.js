import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }
    iron-icon {
      color: var(--ae-color-blue);
      height: 50%;
      width: 50%;
    }
    .circle {
      background-color: var(--ae-color-blue20);
      height: 70px;
      width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle.size-lg {
      height: 150px;
      width: 150px;
    }
    .circle.size-sm {
      height: 60px;
      width: 60px;
    }
    .photo {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
  <div class="circle ${classMap(this.constructClasses())}" style="${styleMap(this.constructStyles())}">
    ${this._renderFace()}
  </div>
  `;
}
