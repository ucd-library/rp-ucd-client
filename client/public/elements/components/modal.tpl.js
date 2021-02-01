import { html } from 'lit-element';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }
    .container {
      width: auto;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    [hidden] {
      display: none !important;
    }
    .film {
      background-color: var(--tcolor-modal-film);
      width: 100%;
      height: 100%;
      z-index: 99;
      position: fixed;
      left: 0;
      top: 0;
    }
    .box-content {
        background-color: var(--tcolor-light);
        width: 85%;
        min-height: 200px;
        z-index: 100;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px 0 30px;
    }
    iron-icon[icon=close] {
        color: var(--tcolor-primary);
        cursor: pointer;
    }
    iron-icon[icon=close]:hover {
        color: var(--tcolor-link-hover-text);
    }
    hr {
        border-color: var(--tcolor-primary20);
        border-style: dotted;
        border-width: 2px;
        border-bottom-width: 0;
        margin: 0 30px;
    }
    .body-content {
        margin: 15px 30px;
    }
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        
    }
    .button {
        color: var(--tcolor-primary);
        padding: 10px;
        background-color: var(--tcolor-bg-primary);
        cursor: pointer;
        transition: .3s;
        margin: 5px;
    }
    .button:hover {
        background-color: var(--tcolor-hover-bg);
        color: var(--tcolor-hover-text);
    }
  </style>
  <div class="container" ?hidden="${!this.visible}">
    <div class="film" @click="${e => this.hide()}"></div>
    <div class="box-content">
        <div class="header">
            <h2>${this.contentTitle}</h2>
            <div class="header-right"><iron-icon icon="close" @click="${e => this.hide()}"></iron-icon></div>
        </div>
        <hr>
        <div class="body-content"><slot></slot></div>
        <hr>
        <div class="footer">
        <slot name="confirmButton"></slot>
        <div class="button" @click="${e => this.hide()}">${this.dismissText}</div>
        </div>
    </div>
      
  </div>
  `;
}
