import { LitElement, html } from 'lit-element';
import render from './text-field.tpl.js';
import Sortable from "sortablejs";
//import { Sortable, MultiDrag, Swap, OnSpill, AutoScroll } from "sortablejs";

export class RpTextField extends LitElement {
  static get properties() {
    return {
      text: {type: String},
      sort: {type: HTMLElement},
    };
  }
  
  constructor() {
    super();
    this.render = render.bind(this);

    //this.themeColor = 'danger';
  }

  deleteCell(){
    console.log("delete this cell")
  }

  handleWebsiteField(){
    this.shadowRoot.getElementById("website-field").innerHTML +=  
    "</div><div class='websites-wrapper'><div id='textbox'><input type=text id='flexible-width' /></div><div id='textbox'><input type=text id='flexible-width' /></div><p id='rearrange'>&#8593;&#8595;</p><p @click=${this.deleteCell} id='delete'>&#x2715;</p></div>";
  }

  handleEmailField(){
    this.shadowRoot.getElementById("contact-field").innerHTML +=  
    "<div class='contact-wrapper'><div id='radiobox'><input type=text id='flexible-width-radio' /><input type='radio' name='reason' value=''></div></div>";
  }

  handlePhoneField(){
    this.shadowRoot.getElementById("phone-field").innerHTML +=  
    "<div class='phone-wrapper'><div id='radiobox'><input type=text id='flexible-width-radio' /></div></div>";
  }

  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

  // _handleClick(e) {
  //   @click="${this._handleClick}"
  // }


  updated(){
    this.sort = this.shadowRoot.getElementById('website-field');
    Sortable.create(this.sort, { /* options */ });
  }

}

customElements.define('rp-text-field', RpTextField);
