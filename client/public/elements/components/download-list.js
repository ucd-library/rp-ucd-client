import { LitElement, html } from 'lit-element';
import "@polymer/iron-dropdown/iron-dropdown"
import render from './download-list.tpl.js';

export class RpDownloadList extends LitElement {
  static get properties() {
  return {
      pixels: {type: Number},
      opened: {type: Boolean},
      title: {type: String},
      choices: {type: Array},
      selected: {type: Number}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.pixels = 40;
    this.size = String(this.pixels) + "px";
    this.opened = false;
    this.choices = [];
    this.title = "Downloads";
    this.selected = 0;

    this._newSelection = new CustomEvent('new-selection', {
      detail: {
        message: 'A new selection.'
      }
    });
  }

  updated(props) {
      if (props.has("pixels")) {
          this.size = String(this.pixels) + "px";
      }
  }

  firstUpdated(props) {
    this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
    (e) => {this.opened = e.target.opened});
  }

  _renderChoices(choice, i){
      let choiceContent = html`
        <div class="choice-content">
            <div class="icon-dl"><iron-icon icon="file-download"></iron-icon></div>
            <div class="text-box">
                <span class="text">${choice.text}</span>
                ${choice.subtext ? html`<span class="subtext">${choice.subtext}</span>` : html``}
            </div>
        </div>`;
      if (choice.href) {
          return html`
            <li class="choice button">
                <a href="${choice.href}">${choiceContent}</a>
            </li>
          `;
      }
      return html`
        <li class="choice button" @click="${e => this._onItemClick(i)}">${choiceContent}</li>
      `;
  }

  _onMainClick(){
    if (this.opened) {
        this.opened = false;
    }
    else {
        this.opened = true;
        this.shadowRoot.getElementById('dropdown').open();
    }
  }

  _onItemClick(i){
    this.selected = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(this._newSelection);
  }

}

customElements.define('rp-download-list', RpDownloadList);
