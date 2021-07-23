import { html } from 'lit-element';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
      position: fixed;
      z-index: 1000;
    }
    .container {
      width: 100%;
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
      background-color: var(--ae-tcolor-modal-film);
      width: 100%;
      height: 100%;
      z-index: 99;
      position: fixed;
      left: 0;
      top: 0;
    }
    .box-content {
        background-color: var(--ae-tcolor-light);
        width: 85%;
        max-width: 910px;
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
        color: var(--ae-tcolor-primary);
        cursor: pointer;
    }
    iron-icon[icon=close]:hover {
        color: var(--ae-tcolor-link-hover-text);
    }
    hr {
        border-color: var(--ae-tcolor-primary20);
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
        color: var(--ae-tcolor-primary);
        padding: 8px;
        background-color: var(--ae-tcolor-light);
        border: 2px solid var(--ae-tcolor-bg-primary);
        cursor: pointer;
        transition: .3s;
        margin: 5px;
    }
    .button:hover {
        background-color: var(--ae-tcolor-hover-bg);
        color: var(--ae-tcolor-hover-text);
        border: 2px solid var(--ae-tcolor-hover-bg);
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
        <div class="button" @click="${e => this.hide()}">${this.dismissText}</div>
        <slot name="confirmButton" @click="${this._onConfirmClicked}"></slot>
        </div>
    </div>
      
  </div>
  `;
}
