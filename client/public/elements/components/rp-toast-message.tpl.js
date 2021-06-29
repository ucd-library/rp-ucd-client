import { html } from 'lit-element';


export default function render() {
  return html`
  <style>
    :host {
      display: block;
    }

    .toaster{
        position: fixed;
        width: 30%;
        height: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        background-color: var(--color-farmers-market); 
        color: #FFF;
        padding-left: 20px;
        -webkit-transition: height 0.5s ease-in-out;
        -moz-transition: height 0.5s ease-in-out;
        -o-transition: height 0.5s ease-in-out;
        transition: height 0.5s ease-in-out;    
    }

    .cancel {
        background-color: transparent;
        color: white;
        padding: 30px;
        position: absolute;
        right: -20px;
        top: -20px;
    }


  </style>
    <div class="toaster">
        <iron-icon class="cancel" icon="close" @click="${this._dismissToaster}"></iron-icon>
        <h2 style="padding-bottom: -10px;">Kafka Message: </h2>
        <p style="padding-right: 20px;">${this.lastMessage}</p>
    </div>
    <div class="container">
        <button @click="${this._toastMessage}">Toaster Button</button> 
    </div>
    
  `;
}
