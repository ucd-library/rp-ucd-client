import { LitElement, html } from 'lit-element';
import "@polymer/iron-dropdown/iron-dropdown"
import render from './dropdown.tpl.js';

export class RpDropdown extends LitElement {
  static get properties() {
  return {
    themeColor: {type: String, attribute: 'theme-color'},
    choices: {type: Array},
    chosen: {type: parseInt, reflect: true},
    opened: {type: Boolean}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.chosen = 0;
    this.choices = [];
    this.themeColor = "outline-primary";
    this.opened = false;

    this._newSelection = new CustomEvent('new-selection', {
      detail: {
        message: 'A new selection.'
      }
    });
  }

  firstUpdated(changedProperties) {
    this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
    (e) => {this.opened = e.target.opened});
  }



  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;
    classes.opened = this.opened;
    if (this._parseChoices().length === 0) {
      classes.hidden = true;
    }

    return classes;
  }
  _renderChoices(choice) {
    return html`<li index="${choice.index}"
                    ?selected="${choice.index == this.chosen}"
                    @click="${this._handleClick}">${choice.text}</li>`;
  }

  _handleClick(e){
    let i = e.target.getAttribute('index');
    if (i == this.chosen) {
      return;
    }
    this.chosen = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(this._newSelection);
  }

  _parseChoices(){
    let choices = [];
    let i = 0;
    for (let c of this.choices) {
      if (typeof c === 'string') {
        choices.push({index: i, text: c});
      }
      else if (typeof c === 'object') {
        if (c.text) {
          choices.push({index: i, text: c.text});
        }
      }
      i += 1;
    }
    return choices;
  }

  openDropdown(){
    this.opened = true;
    this.shadowRoot.getElementById('dropdown').open()
  }

}

customElements.define('rp-dropdown', RpDropdown);
