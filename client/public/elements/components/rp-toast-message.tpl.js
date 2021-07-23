import { html } from 'lit-element';


export default function render() {
  return html`
  <style>
    :host {
      display:none;
    }

    .toaster{
        position: fixed;
        max-width: 90%;
        width: 300px;
        max-height: 200px;
        height: 150px;
        bottom: 10px;
        right: 10px;
        overflow: auto;
        background-color: var(--ae-color-farmers-market); 
        color: #FFF;
        padding-left: 20px;
        animation: slidein 0.5s ease-in-out;    


    }
    @keyframes slidein {
      100% {
        transform: translateY(0);
      }
      0% {
        transform: translateY(210px);
      }
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
        <h2 style="padding-bottom: -10px;"><slot name="toastTitle">Kafka Message:</slot></h2>
        <p style="padding-right: 20px;">${this.lastMessage}</p>
    </div>

    
  `;
}
