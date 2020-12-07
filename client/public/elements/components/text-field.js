import { LitElement, html } from 'lit-element';
import render from './text-field.tpl.js';
import Sortable from "sortablejs";

export class RpTextField extends LitElement {
  static get properties() {
    return {
      text: {type: String},
      sort: {type: HTMLElement},
    };
  }
  

  _handleWebsiteField(){
    let newWebdiv = document.createElement("div");
    
    newWebdiv.classList.add("website-wrapper" + this.idNum);
    newWebdiv.innerHTML = "<div id='textbox'><input type=text id='flexible-width' /></div><div id='textbox'><input type=text id='flexible-width' /></div><p id='rearrange'>&#8593;&#8595;</p><button class='delete' id='delete" + this.idNum + "'>&#x2715;</button>";
    newWebdiv.style.cssText ="display: grid;grid-template-columns: 45% 45% 5% 5%;grid-gap: .25%;background-color: #fff;color: #444;"
    this.shadowRoot.getElementById("website-field").appendChild(newWebdiv);
    this.shadowRoot.getElementById("delete" + this.idNum).addEventListener("click",function(){this.parentNode.remove();}, false);
    this.idNum++;
  }

  _handleEmailField(){  
    let newEmaildiv = document.createElement("div");
    
    newEmaildiv.classList.add("email-wrapper" + this.idNum);
    newEmaildiv.style.cssText ="display: grid;grid-template-columns: 45% 5% 45% 5%;grid-gap: .25%;background-color: #fff;color: #444;"

    newEmaildiv.innerHTML = "<div id='radiobox'><input type=text id='flexible-width-radio' /><input type='radio' name='reason' value=''></div><button class='delete' id='delete" + this.idNum + "'>&#x2715;</button>";

    this.shadowRoot.getElementById("contact-field").appendChild(newEmaildiv);
    this.shadowRoot.getElementById("delete" + this.idNum).addEventListener("click",function(){this.parentNode.remove();}, false);
    this.idNum++;
  }

  _handlePhoneField(){

    let newPhonediv = document.createElement("div");
    
    newPhonediv.classList.add("contact-wrapper" + this.idNum);
    newPhonediv.style.cssText ="display: grid;grid-template-columns: 45% 5% 45% 5%;grid-gap: .25%;background-color: #fff;color: #444;"

    newPhonediv.innerHTML ="<div id='radiobox'><input type=text id='flexible-width-radio' /></div><button class='delete' id='delete" + this.idNum + "'>&#x2715;</button>";

    this.shadowRoot.getElementById("phone-field").appendChild(newPhonediv);
    this.shadowRoot.getElementById("delete" + this.idNum).addEventListener("click",function(){this.parentNode.remove();}, false);
    this.idNum++;
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.idNum = 1
  }



  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }


  updated(){
    this.sort = this.shadowRoot.getElementById('website-field');
    Sortable.create(this.sort, { /* options */ });

  }

}

customElements.define('rp-text-field', RpTextField);
