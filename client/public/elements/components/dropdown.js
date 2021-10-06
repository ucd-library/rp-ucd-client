import { LitElement, html } from 'lit';
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
    let dd = this.shadowRoot.getElementById('dropdown');
    dd.addEventListener('opened-changed',
      (e) => {this.opened = e.target.opened;});

    dd._onArrow = this._onDropdownArrow.bind(this);
    dd.addOwnKeyBinding('up', "_onArrow");
    dd.addOwnKeyBinding('down', "_onArrow");
  }

  /**
   * @method _onDropdownArrow
   * @description Bound to arrow down/up events on iron-dropdown
   * @param {CustomEvent} e - Inherited from IronA11yKeysBehavior
   */
  _onDropdownArrow(e) {
    e.preventDefault();
    let target = this.shadowRoot.activeElement;
    let ke = e.detail.keyboardEvent;
    if (target && ke) {
      if (ke.code == 'ArrowUp' && target.previousElementSibling) {
        target.previousElementSibling.focus();
      } else if(ke.code == 'ArrowDown' && target.nextElementSibling) {
        target.nextElementSibling.focus();
      }
    }
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
    <li 
      index="${choice.index}"
      tabindex="0"
      ?selected="${choice.index == this.chosen && !this.stickyTitle}"
      @keyup="${this._onkeyup}"
      @click="${this._handleClick}">${choice.text}</li>`;
  }

  /**
   * @method _onkeyup
   * @description Bound to dropdown list item keyup
   * @param {Event} e 
   */
  _onkeyup(e){
    if (e.keyCode === 13) {
      e.preventDefault();
      this._handleClick(e);
    }
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
    let dd = this.shadowRoot.getElementById('dropdown');
    dd.focusTarget = this.shadowRoot.querySelector("li[selected]");
    dd.open();
  }

}

customElements.define('rp-dropdown', RpDropdown);
