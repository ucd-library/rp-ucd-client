import { LitElement } from 'lit-element';
import render from './quick-search.tpl.js';
import "./icon";

/**
 * @class RpQuickSearch
 * @description A simple collapsible search UI component
 */
export class RpQuickSearch extends LitElement {
  static get properties() {
    return {
      inputWidth: {type: Number, attribute: "input-width"},
      inputValue: {type: String, attribute: "input-value", reflect: true},
      placeholder: {type: String},
      opened: {type: Boolean},
      closing: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "Search the registry";
    this.opened = false;
    this.inputWidth = 220;
    this.inputValue = "";
    this.preventOpen = false;
    this.closing = false;

    this._newSearch = new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });

    this._inputStatus = new CustomEvent('input-status', {
      detail: {
        message: 'The input has either been expanded or collapsed.'
      }
    });
  }


  /**
   * @method updated
   * @description Lit method called when element is updated.
   * @param {*} props 
   */
  updated(props) {

    if (props.has('opened')) {
      if (this.opened) {
        let w = this.inputWidth;
        this.inputWidth = 0;
        this.inputWidth = w;
        let i = this.shadowRoot.getElementById('search-input');
        i.focus();
      }
      this.dispatchEvent(this._inputStatus);
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
    classes['opened'] = this.opened;
    classes['closed'] = !this.opened;
    classes['closing'] = this.closing;
    if (this.inputValue) {
      classes['has-input'] = true;
    }
    else {
      classes['no-input'] = true;
    }
    return classes;
  }

  /**
   * @method _constructInputStyles
   * @description Constructs CSS input styles based on element properties
   * 
   * @returns {Object}
   */
  _constructInputStyles() {
    let styles = {};
    if (this.inputWidth) {
      styles['width'] = (this.inputWidth - 20) + "px";
    }
    return styles;
  }

  /**
   * @method open
   * @description Expands the element to make the input visible
   */
  open(){
    this.opened = true;
  }

  /**
   * @method close
   * @description Collapses the element to hide the input
   */
  close() {
    this.opened = false;
  }

  /**
   * @method validateSearchText
   * @description Runs validations on input text.
   * @returns {Boolean}
   */
  validateSearchText(){
    if ( !this.inputValue.replace(/ /g,'') ) {
      return false;
    }
    return true;
  }

  /**
   * @method _handleClick
   * @description Bound to element click event. 
   * Will fire new-search event if applicable
   * Will display the search input if not a search submission
   */
  _handleClick(){

    if (this.opened) {
      if (!this.validateSearchText()) {
        return;
      }
      this.dispatchEvent(this._newSearch);
    }

    else {
      if (this.preventOpen) {
        this.preventOpen = false;
        return;
      }
      this.opened = true;
    }
  }

  /**
   * @method _activateLink
   * @description Applies link styling to the submit icon. Bound to 'is-link' attribute on rp-icon
   * 
   * @returns {Boolean}
   */
  _activateLink() {
    if (!this.opened) {
      return true;
    }
    if (this.inputValue) {
      return true;
    }
    return false;
  }

  /**
   * @method _handleBlur
   * @description Bound to the blur event on the input
   */
  _handleBlur(){
    if (!this.opened) {
      return;
    }
    let i = this.shadowRoot.getElementById('search-input');
    if (!i.value) {
      
      this.opened = false;
      //this.preventOpen = true;
      //this.closing = true;
      //self = this;
      //setTimeout(function(){ self.preventOpen = false; }, 300);
    }
  }

  /**
   * @method _handleAnimationEnd
   * @description Bound to the animation end event on the input
   */
  _handleAnimationEnd() {
    if (this.closing) {
      this.opened = false;
      this.closing = false;
    }
  }

  /**
   * @method _handleKeyup
   * @description Bound to enter key press on the input. Fires the 'new-search' event.
   * @param {Event} e 
   */
  _handleKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (!this.validateSearchText()) {
        return;
      }
      this.dispatchEvent(this._newSearch);
    }
  }
}

customElements.define('rp-quick-search', RpQuickSearch);
