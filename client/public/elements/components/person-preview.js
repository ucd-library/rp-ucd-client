import { LitElement } from 'lit';
import render from './person-preview.tpl.js';

import previewUtils from "../../src/lib/preview-utils";
import "./badge";
import "./rp-query-explanation";

/**
 * @class RpPersonPreview
 * @description UI layout class for displaying a preview of a person (e.g. in a search result)
 */
export class RpPersonPreview extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      data: {type: Object},
      showSnippet: {type: Boolean, attribute: 'show-snippet'},
      showSubjects: {type: Boolean, attribute: 'show-subjects'},
      subjectCt: {type: Number, attribute: 'subject-ct'},
      avatarSize: {type: String, attribute: 'avatar-size'},
      textWidth: {type: String, attribute: 'text-width'},
      homeDisplay: {type: Boolean, attribute: 'home-display'},
      title: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('PersonModel');
    this.data = {};
    this.showSnippet = false;
    this.showSubjects = false;
    this.subjectCt = 4;
    this.avatarSize = "md";
    this.homeDisplay = false;
    this.textWidth = (window.innerWidth - 70) + "px";


  }

  /**
   * @method updated
   * @description lit-element updated method
   * 
   * @param {Object} props 
   */
  updated(props) {
    this._isEllipsisActive();

    if( props.has('data') ) {

      let result = previewUtils.getSnippetTitle(
        this.PersonModel.getFullNameLastFirst(this.data),
        this.PersonModel.getSnippet(this.data)
      );

      this.title = result.title;
      if( result.showSnippet === false ) {
        this.showSnippet = false;
      }
    }
    if (props.has('textWidth')) this.setBadgeTabIndex();
  }

  /**
   * @method setBadgeTabIndex
   * @description Hides any overflow badges from tab positioning
   */
  async setBadgeTabIndex(){
    await this.updated;
    let containerWidth = this.textWidth;
    let cumWidth = 0;
    this.shadowRoot.querySelectorAll('rp-badge').forEach(badge => {
      cumWidth += badge.offsetWidth;
      badge.hideFromTab = cumWidth > containerWidth;
    });

  }

  /**
   * @method _isEllipsisActive
   * @description Checks if the preview badges are activating the ellipsis
   */
  _isEllipsisActive() {
    this.shadowRoot.querySelectorAll("small").forEach(badge => {
      if( badge.offsetWidth < badge.scrollWidth ){
        badge.addEventListener("mouseenter", function() {
          badge.style.display = "inline-table";
          badge.style.whiteSpace = "normal";
        }, false);
      
        badge.addEventListener("mouseleave", function() {
          badge.style.display = "block";
          badge.style.whiteSpace = "nowrap";
          badge.style.textOverflow = "ellipsis";
          badge.style.overflow = "hidden";

        }, false);
      }
    });
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  constructClasses() {
    let classes = {};
  
    if (this.homeDisplay && this.homeDisplay != 'undefined') {
      classes['container-home'] = true;
    }else{
      classes['container'] = true;
    }

  
    return classes;
  }

  /**
   * @method getName
   * @description calls the getFullName function gets the 
   * preferred the person label if it exists 
   * 
   * @returns {String}  
   */
  getName() {
    if (!this.data) return "";
    return this.PersonModel.getFullName(this.data);
  }

  /**
   * @method getAvatar
   * @description calls the getAvatar function gets the 
   * avatar type of the person from the person object
   * 
   * @returns {Object}  
   */
  getAvatar() {
    return this.PersonModel.getAvatarSrc(this.data);
  }

  /**
   * @method getLandingPage
   * @description calls the getLandingPage function and 
   * creates the url and from the person id
   * 
   * @returns {URL}  
   */
  getLandingPage() {
    return this.PersonModel.getLandingPage(this.data);
  }

  /**
   * @method getTitle
   * @description calls the getTitle function gets the 
   * headline title of the person from the person object
   * 
   * @returns {String}  
   */
  getTitle(){
    return this.PersonModel.getHeadlineTitle(this.data);
  }

  /**
   * @method getSnippet
   * @description calls the getSnippet function gets the 
   * description of the person from the person object
   * 
   * @returns {String}  
   */
  getSnippet(){
    return this.PersonModel.getSnippet(this.data);
  }

  /**
   * @method getSubjects
   * @description calls the getResearchSubjects function gets the 
   * research subjects associated with the person from the 
   * person object
   * 
   * @returns {Object}   
   */
  getSubjects(){
    let subjects = this.PersonModel.getResearchSubjects(this.data);
    return subjects.slice(0, this.subjectCt);
  }
}

customElements.define('rp-person-preview', RpPersonPreview);
