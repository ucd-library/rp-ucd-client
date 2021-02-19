import { LitElement, html } from 'lit-element';
import "@polymer/iron-dropdown/iron-dropdown";
import render from './dropdown.tpl.js';
import "./icon";

/**
 * @class RpDropdown
 * @description Styleized dropdown UI component. Wrapper around polymer's iron-dropdown
 * Choices property must be an array of strings or array of objects in the following format:
 * {text: 'text-to-display', href: 'optional. will use <a> tag'}
 */
export class RpDropdown extends LitElement {
  static get properties() {
    return {
      themeColor: {type: String, attribute: 'theme-color'},
      choices: {type: Array},
      chosen: {type: Number, reflect: true},
      opened: {type: Boolean},
      toUpperCase: {type: Boolean, attribute: 'to-upper-case'},
      noPadding: {type: Boolean, attribute: "no-padding"},
      stickyTitle: {type: String, attribute: "sticky-title"},
      filterIcon: {type: Boolean, attribute: "filter-icon"},
      useLinks: {type: Boolean, attribute: "use-links"}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.toUpperCase = false;
    this.chosen = 0;
    this.choices = [];
    this.themeColor = "outline-primary";
    this.opened = false;
    this.noPadding = false;
    this.stickyTitle = "";
    this.filterIcon = false;
    this.useLinks = false;
  }

  /**
   * @method firstUpdated
   * @description Lit method called on first element update.
   */
  firstUpdated() {
    this.shadowRoot.getElementById('dropdown').addEventListener('opened-changed',
      (e) => {this.opened = e.target.opened;});
  }


  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};
    classes.opened = this.opened;
    if (this._parseChoices().length === 0) {
      classes.hidden = true;
    }
    if ( this.noPadding ) {
      classes.nopadding = true;
    }
    if ( this.stickyTitle ) {
      classes.stickytitle = true;
    }
    if ( this.toUpperCase ) {
      classes.upper = true;
    }
    if ( this.filterIcon ) {
      classes['has-filter-icon'] = true;
    }
    if ( this.themeColor ) {
      classes['color-' + this.themeColor] = true;
    }

    return classes;
  }

  /**
   * @method _renderChoice
   * @description Renders a single list item for dropdown
   * @param {Object} choice 
   * 
   * @returns {TemplateResult}
   */
  _renderChoice(choice) {
    if ( choice.href && this.useLinks ) {
      return html`
      <li ?selected="${choice.index == this.chosen && !this.stickyTitle}">
        <a href="${choice.href}">${choice.text}</a>
      </li>
      `;
    } 

    return html`
    <li index="${choice.index}"
      ?selected="${choice.index == this.chosen && !this.stickyTitle}"
      @click="${this._handleClick}">${choice.text}</li>`;
  }

  /**
   * @method _handleClick
   * @description Attached to list item click if no href present. Dispatches 'new-selection' event.
   * @param {Event} e - click event.
   */
  _handleClick(e){
    let i = e.target.getAttribute('index');
    if (i == this.chosen && !this.stickyTitle) {
      return;
    }

    this.chosen = i;
    this.shadowRoot.getElementById('dropdown').close();
    this.dispatchEvent(new CustomEvent('new-selection', {
      detail: {
        index: i,
        selected : this.choices[i]
      }
    }));
  }

  /**
   * @method _parseChoices
   * @description Formats choices property into a standardized array of objects.
   * 
   * @returns {Object[]}
   */
  _parseChoices(){
    let choices = [];
    let i = 0;
    for (let c of this.choices) {
      if (typeof c === 'string') {
        choices.push({index: i, text: c});
      }
      else if (typeof c === 'object') {
        if (c.text) {
          choices.push({index: i, text: c.text, href: c.href});
        }
      }
      i += 1;
    }
    return choices;
  }

  /**
   * @method openDropdown
   * @description Opens the dropdown.
   */
  openDropdown(){
    this.opened = true;
    this.shadowRoot.getElementById('dropdown').open();
  }

}

customElements.define('rp-dropdown', RpDropdown);
