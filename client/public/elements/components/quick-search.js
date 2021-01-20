import { LitElement, html } from 'lit-element';
import render from './quick-search.tpl.js';
import "./icon"

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

  constructClasses() {
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

  constructInputStyles() {
    let styles = {};
    if (this.inputWidth) {
      styles['width'] = (this.inputWidth - 20) + "px";
    }
    return styles;
  }

  open(){
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  _validateSearchText(){
    if ( !this.inputValue.replace(/ /g,'') ) {
      return false;
    }
    return true;
  }

  _handleClick(e){

    if (this.opened) {
      if (!this._validateSearchText()) {
        return false;
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

  _activateLink() {
    if (!this.opened) {
      return true;
    }
    if (this.inputValue) {
      return true;
    }
    return false;
  }

  _handleBlur(e){
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

  _handleAnimationEnd() {
    if (this.closing) {
      this.opened = false;
      this.closing = false;
    }
  }

  _handleKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (!this._validateSearchText()) {
        return false;
      }
      this.dispatchEvent(this._newSearch);
    }
  }

  updated(changedProperties) {

    if (changedProperties.has('opened')) {
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
}

customElements.define('rp-quick-search', RpQuickSearch);
