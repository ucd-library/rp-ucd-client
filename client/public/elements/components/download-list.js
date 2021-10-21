import { LitElement, html } from 'lit';
import "@polymer/iron-dropdown/iron-dropdown";
import render from './download-list.tpl.js';

/**
 * @class RpDownloadList
 * @description UI component for a dropdown list of downloadable files
 */
export class RpDownloadList extends LitElement {
  static get properties() {
    return {
      pixels: {type: Number},
      opened: {type: Boolean},
      title: {type: String},
      choices: {type: Array},
      dropOnLeft: {Type: Boolean},
      selected: {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.pixels = 35;
    this.size = String(this.pixels) + "px";
    this.opened = false;
    this.choices = [];
    this.title = "Downloads";
    this.dropOnLeft = false;
    this.selected = 0;

    this._newSelection = new CustomEvent('new-selection', {
      detail: {
        message: 'A new selection.'
      }
    });
  }

  /**
   * @method updated
   * @description Lit method called when element is updated
   * @param {Map} props - Changed properties
   */
  updated(props) {
    if (props.has("pixels")) {
      this.size = String(this.pixels) + "px";
    }
  }

  /**
   * @method firstUpdated
   * @description Lit method called when element is first updated.
   */
  firstUpdated() {
    this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
      (e) => {this.opened = e.target.opened;});
  }

  /**
   * @method _renderChoice
   * @description Renders a single download item
   * @param {Object} choice - A single download item
   * @param {Number} i - array index of choice
   * 
   * @returns {TemplateResult}
   */
  _renderChoice(choice, i){
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
      <li class="choice button" @click="${e => this._onItemClick(i, e)}">${choiceContent}</li>
    `;
  }

  /**
   * @method _onMainClick
   * @description Attached to click event on dropdown. Opens/closes dropdown.
   */
  _onMainClick(){
    if (this.opened) {
      this.opened = false;
    }
    else {
      this.dropOnLeft = (this.offsetLeft / window.innerWidth) < .5 ? true : false;
      this.opened = true;
      this.shadowRoot.getElementById('dropdown').open();
    }
  }

  /**
   * @method _onItemClick
   * @description Attached to click event on dropdown item, if no href is present.
   * Dispatches new-selection event
   * @param {Number} i - The dropdown index of the selected item.
   */
  _onItemClick(i){
    this.selected = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(this._newSelection);
  }

}

customElements.define('rp-download-list', RpDownloadList);
