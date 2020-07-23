import { LitElement, html } from 'lit-element';
import render from './quick-search.tpl.js';
import "./icon"

export class RpQuickSearch extends LitElement {
  static get properties() {
  return {
    inputWidth: {type: String, attribute: "input-width"},
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
    this.inputWidth = "200px";
    this.inputValue = "";
    this.preventOpen = false;
    this.closing = false;
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
      styles['width'] = this.inputWidth;
    }
    return styles;
  }

  _handleClick(e){

    if (this.opened) {
      let i = this.shadowRoot.getElementById('search-input');
      if (!i.value) {
        return;
      }
      console.log("Do Search!");
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
      this.preventOpen = true;
      //this.opened = false;
      this.closing = true;
      console.log(this.closing);
      self = this;
      setTimeout(function(){ self.preventOpen = false; }, 300);
    }
  }

  _handleAnimationEnd() {
    console.log("animation end!");
    if (this.closing) {
      this.opened = false;
      this.closing = false;
    }
  }

  updated(changedProperties) {

    if (changedProperties.has('opened') && this.opened) {
      let w = this.inputWidth;
      this.inputWidth = 0;
      this.inputWidth = w;
      let i = this.shadowRoot.getElementById('search-input');
      i.focus();
    }

}
}

customElements.define('rp-quick-search', RpQuickSearch);
