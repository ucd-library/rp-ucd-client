import { LitElement } from 'lit-element';
import render from './subject-preview.tpl.js';

import previewUtils from "../../src/lib/preview-utils";

export class RpSubjectPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties(){
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'},
      title : {type: String}
    };
  }

  constructor(){
    super();
    this._injectModel('SubjectModel');
    this.render = render.bind(this);

    this.showSnippet = false;
  }

  /**
   * @method updated
   * @description lit-element updated method
   * 
   * @param {Object} props 
   */
  updated(props) {
    if( props.has('data') ) {
      let result = previewUtils.getSnippetTitle(
        this.SubjectModel.getPreferredLabel(this.data),
        this.SubjectModel.getSnippet(this.data)
      );

      this.title = result.title;
      if( result.showSnippet === false ) {
        this.showSnippet = false;
      }
    }
  }
  /**
   * @method getTitle
   * @description calls the getLink function gets the 
   * preferred the subject name if it exists and the 
   * standard subject name if it doesn't
   * 
   * @return {String}  
   */
  getTitle(){
    return this.SubjectModel.getPreferredLabel(this.data);
  }

  /**
   * @method getLink
   * @description calls the getLink function gets the url 
   * for the landing page based off the subject ID
   * 
   * @return {URL} 
   */
  getLink(){
    return this.SubjectModel.getLandingPage(this.data);
  }

  /**
   * @method getSnippet
   * @description calls the getSnippet function in subject
   * model and returns it based on subject
   * 
   * @return {String}  
   */
  getSnippet(){
    return this.SubjectModel.getSnippet(this.data);
  }

}

customElements.define('rp-subject-preview', RpSubjectPreview); 