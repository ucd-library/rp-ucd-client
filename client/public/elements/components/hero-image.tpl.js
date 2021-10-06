import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export default function render() {
  return html`
  <style>
    :host {
      display: flex;
    }
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slot {
      margin-left: 20px;
      margin-right: 20px;
    }
    #top {
      height: 30px;
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #main {
      flex-grow: 1;
    }
    #bottom {
      height: 30px;
      padding-bottom: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    @media (min-width: 800px) {
      .slot {
      margin-left: 30px;
      margin-right: 30px;
    }
    }
  </style>
  <div class="container"  style="${styleMap(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `;
}
