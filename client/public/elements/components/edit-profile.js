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
      formData: { type: Object},
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
    this.formDataOverview = {};
    this.formDataSiteName = {};
    this.formDataURL = {};
    this.formDataEmail = {};
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
 * @description After the form is filled out, the button leads to submit function
 * 
 * @return {Boolean} false for non-refeshing
 */

_submitted(){
  // this.formDataSiteName = this.shadowRoot.querySelectorAll('input[name="site-name"]');
  // this.formDataURL = this.shadowRoot.querySelectorAll('input[name="url"]');
  // this.formDataEmail = this.shadowRoot.querySelectorAll('input[name="email"]');
  // this.formDataPhone = this.shadowRoot.querySelectorAll('input[name="phone"]');
  // this.formDataOverview = this.shadowRoot.querySelectorAll('input[name="overview"]');

  this.shadowRoot.querySelector('#ProfileEditForm').submit();
  console.log("Form is Submitted");


  return false;
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
