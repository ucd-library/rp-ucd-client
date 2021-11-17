import { LitElement, html } from 'lit';
import render from './edit-profile.tpl.js';
import Sortable from "sortablejs";

export class RpProfileAboutEditor extends LitElement {
  static get properties() {
    return {
      overviewText: { type: Text } ,
      webTextField: { type: Array },
      emailTextField: { type: Array },
      phoneTextField: { type: Array },
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  
    this.webTextField = [{url: '', label: ''}];
    this.emailTextField = [{value: '', default: true}];
    this.phoneTextField = '';
    this.overviewText = '';
  }

  /**
   * @method _addWebsite
   * 
   * @description Bound to click event on website add button.  adds another 
   * iteration of the element to the DOM and List
   * 
   * @param {Object} element 
   * 
   */  
  _addWebsite(){
    this.webTextField.push({url: '', label: ''});
    this.requestUpdate();
  }

  /**
   * @method _addEmail
   * 
   * @description Bound to click event of add email button.
   * adds another iteration of the element to the DOM and List
   * 
   * @param {Object} element 
   * 
   */  
  _addEmail(){
    this.emailTextField.push({value: '', default: false});
    this.requestUpdate();
  }

  /**
  * @method _delete
  * 
  * @description deletes specifically sent iteration of the element from the DOM and List
  * 
  * @param {Array} Array 
  * @param {Number} index 
  */ 
  _delete(arr, index){
    arr.splice(index, 1);
    this.requestUpdate();
  }  

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

  /**
   * @method setData
   * 
   * @description sets data fields to be empty on initialization
   * 
   * @param {Object} data
   */
  setData(data) {
    this.emailTextField = data.email || [{value: '', default: true}];
    this.phoneTextField = data.phone || '';
    this.webTextField = data.websites || [{url: '', label: ''}];
    this.overviewText = data.overview || '';
  }

  /**
   * @method getData
   * 
   * @description returns the data that is being stored at this 
   * time in the constructor variables
   * 
   * @return {Object} 
   */
  getData() {
    return {
      email : this.emailTextField || [],
      phone : this.phoneTextField || '',
      website : this.webTextField || [],
      overview : this.overviewText || ''
    }
  }

  /**
   * @method _onArrayValueChange
   * 
   * @description bound to array input fields, splits out id and sets
   * element properties, object property to new value.
   * 
   * @param {*} e 
   */
  _onArrayValueChange(e) {
    let ele = e.currentTarget;
    let [eleProp, itemProp, index] = ele.id.split('-');
    this[eleProp][parseInt(index)][itemProp] = ele.value;
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

  /**
   * @method _onSaveClicked
   * 
   * @description bound to save button clicked event.  Dispatch custom
   * save event with current data
   */
  _onSaveClicked() {
    this.dispatchEvent(
      new CustomEvent('save', {detail: this.getData()})
    );
  }

  
}

customElements.define('rp-profile-about-editor', RpProfileAboutEditor);
