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
      inputValue: {type: String, attribute: "input-value", reflect: true},
      placeholder: {type: String},
      opened: {type: Boolean},
      closing: {type: Boolean},
      label: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "Search the registry";
    this.opened = false;
    this.inputValue = "";
    this.closing = false;
    this.label = "Press to open sitewide search input";
  }

  firstUpdated() {
    this.inputEle = this.shadowRoot.getElementById('search-input');
  }

  /**
   * @method open
   * @description Expands the element to make the input visible
   */
  open(){
    this.opened = true;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.inputEle.focus();
      });
    });

    this._fireToggledEvent();
  }

  /**
   * @method close
   * @description Collapses the element to hide the input
   */
  close() {
    this.opened = false;
    this._fireToggledEvent();
  }

  _fireToggledEvent() {
    this.dispatchEvent(new CustomEvent(
      'toggled', 
      {detail: {opened: this.opened}}
    ));
  }

  /**
   * @method _handleClick
   * @description Bound to element click event. 
   * Will fire new-search event if applicable
   * Will display the search input if not a search submission
   */
  _handleClick(){
    if ( this.opened ) {
      if( this.inputEle.value === '' ) {
        this.close();
        return;
      }

      this.dispatchEvent(this._newSearchEvent());
      return;
    }

    this.open();
  }

  /**
   * @method _handleAnimationEnd
   * @description Bound to the animation end event on the input
   */
  // _handleAnimationEnd() {
  //   if (this.closing) {
  //     this.opened = false;
  //     this.closing = false;
  //   }
  // }

  /**
   * @method _handleKeyup
   * @description Bound to enter key press on the input. Fires the 'new-search' event.
   * @param {Event} e 
   */
  _handleKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.dispatchEvent(this._newSearchEvent());
    }
  }

  /**
   * @method _newSearchEvent
   * @description create new custom search event
   * 
   * @returns {CustomEvent}
   */
  _newSearchEvent() {
    return new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });
  }
}

customElements.define('rp-quick-search', RpQuickSearch);
