import { LitElement, html } from 'lit-element';
import render from './text-field.tpl.js';
import Sortable from "sortablejs";

export class RpProfileAboutEditor extends LitElement {
  static get properties() {
    return {
      text: {type: String},
      sort: {type: HTMLElement},
      webTextField: { type: Array},
      emailTextField: { type: Array},
      phoneTextField: { type: Array},
    };
  }

  _add(element){
    element.push(element.length+1);
    this.requestUpdate();
  }
  _delete(element){
    element.splice(element.length-1, 1);
    this.requestUpdate();
  }  

  constructor() {
    super();
    this.render = render.bind(this);
    this.idNum = 1
    this.webTextField = [0];
    this.emailTextField = [0];
    
  }



  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }


  firstUpdated(){
    this.webField = this.shadowRoot.getElementById('website-field');
    Sortable.create(this.webField, { /* options */ });



  }

}

customElements.define('rp-profile-about-editor', RpProfileAboutEditor);
