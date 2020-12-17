import { LitElement, html } from 'lit-element';
import render from './edit-profile.tpl.js';
import Sortable from "sortablejs";

export class RpProfileAboutEditor extends LitElement {
  static get properties() {
    return {
      text: {type: String},
      emailSamp: {type: String},
      sort: {type: HTMLElement},
      webTextField: { type: Array},
      emailTextField: { type: Array},
      phoneTextField: { type: Array},
    };
  }

/**
 * @method _add
 * 
 * @description adds another iteration of the element to the DOM and List
 * 
 * @param {Object} element 
 * 
 */  
  _add(element){
    element.push(element.length+1);
    this.requestUpdate();
  }

/**
 * @method _delete
 * 
 * @description deletes specifically sent iteration of the element from the DOM and List
 * 
 * @param {Object} element 
 * @param {Array.<Number>} element 
 */ 

  _delete(element, item){
    delete element[item - 1];
    this.requestUpdate();
  }  

  constructor() {
    super();
    this.render = render.bind(this);
    this.idNum = 1
    this.webTextField = [1];
    this.emailTextField = [1];

    this.FormResults = {
      "overview": [],
      "siteName": [],
      "url": [],
      "email": [],
      "emailChecked": [],
      "phone": []
    };

    this.formDataOverview = {};
    this.formDataSiteName = {};
    this.formDataURL = {};
    this.formDataEmail = [];
    this.formDataPhone = {};



  }


  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

/**
 * @method _submitted
 * 
 * @description After the form is filled out, the button leads to submit function, and parses that info given.
 * 
 * @return {Boolean} false for non-refeshing but this in in the form itself
 */

_submitted(){
  // this.shadowRoot.querySelector('#ProfileEditForm').submit();
  this.shadowRoot.querySelectorAll('input[name="email"]').forEach(element => this.FormResults["email"].push(element.value));
  this.shadowRoot.querySelectorAll('input[name="site-name"]').forEach(element => this.FormResults["siteName"].push(element.value));
  this.shadowRoot.querySelectorAll('input[name="url"]').forEach(element => this.FormResults["url"].push(element.value));
  this.shadowRoot.querySelectorAll('input[name="phone"]').forEach(element => this.FormResults["phone"].push(element.value));
  this.shadowRoot.querySelectorAll('[name="overview"]').forEach(element => this.FormResults["overview"].push(element.value));
  this.shadowRoot.querySelectorAll('input[name="primary"]').forEach(element => this.FormResults["emailChecked"].push(element.checked));
  
  alert("Form is Submitted.");

}

/**
 * @method firstUpdated
 * 
 * @description occurs when DOM is first updated
 * 
 */

firstUpdated(){
    this.webField = this.shadowRoot.getElementById('website-field');
    Sortable.create(this.webField, { /* options */ });
  }

  
}

customElements.define('rp-profile-about-editor', RpProfileAboutEditor);
