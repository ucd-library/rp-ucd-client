import { LitElement } from 'lit-element';
import render from "./rp-utils-landing.tpl.js";

/**
 * @class RpUtilsLanding
 * @description Parent class for asset landing page elements.
 */
export default class RpUtilsLanding extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      assetType: {type: String},
      assetId: {type: String},
      disabledSections: {type: Array},
      activeSection: {type: Object},
      peopleWidth: {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.visible = false;
    this.assetType = '';
    this.assetId = "";
    this.peopleWidth = this.setPeopleWidth(window.innerWidth);
    this.disabledSections = [];
    this.activeSection = {};
  }

  /**
   * @method getPageSections
   * @description Constructs the metadata about sections on an asset page
   * 
   * @returns {Array} - Array of objects with section details.
   */
  getPageSections() {
    this.disabledSections = [];

    let sections = [{id:"all", text: "All Info", href: ''}];
    if (this.assetType == 'work') {
      sections.push(
        {id: 'records', text: 'Records'},
        {id: 'overview', text: 'Overview'},
        {id: 'authors', text: 'Authors'}
      );
    }
    if (this.assetType == 'person') {
      sections.push(
        {id: 'about', text: 'About'},
        {id: 'publications', text: 'Publications'},
        {id: 'grants', text: 'Grants'}
      );
    }
    if (this.assetType == 'concept'){
      sections.push(
        {id: 'about', text:'About'},
        {id: 'relatedSubjects', text:'Related Subjects'},
        {id: 'researchers', text: 'Researchers'},
        {id: 'publications', text: 'Publications'}
      );
    }
    if (this.assetType == 'grant'){
      sections.push(
        {id: 'about', text:'About'},
        {id: 'contributors', text:'Contributors'},
      );
    }
    let i = 0;
    for (let section of sections) {
      if( !this._sectionHasData(section.id) ) {
        this.disabledSections.push(section.id);
      }

      if (section.href === undefined) section.href = section.id;
      section.disabled = this.disabledSections.includes(section.id);
      section.index = i;
      i++;
    }
    return sections;
  }

  /**
   * @method _hidePageSection
   * @description Bound to 'hidden' attribute of page sections
   * @param {String} section - id of page section
   * 
   * @returns {Boolean}
   */
  _hidePageSection(section) {
    let hasData = this._sectionHasData(section);
    if( !hasData ) return true;

    if (this.activeSection.index == 0) {
      return false;
    }
    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  /**
   * @method _sectionHasData
   * @description all inheriting elements to express if they have data
   * 
   * @param {String} section 
   * @returns Boolean
   */
  _sectionHasData(section) {
    let fn = '_has'+(section.charAt(0).toUpperCase() + section.slice(1));
    if( this[fn] ) return this[fn]();
    
    return true;
  }

  /**
   * @method _setActiveSection
   * @description Sets the 'activeSection' property based on the current URL. Should be bound to app-state-update.
   * @param {Array} sectionId - id to select.
   */
  _setActiveSection(sectionId=''){
    sectionId = sectionId.replace(/^#/, '');

    let sections = this.getPageSections();
    if( !sectionId ) {
      this.activeSection = sections[0];
      return;
    }

    this.activeSection = sections.find(section => section.id === sectionId);
  }
  
  /**
   * @method setPeopleWidth
   * @description Determines how wide any people-preview elements should be.
   * Sets the `peopleWidth' property
   * 
   * @param {Number} w - Screen width in pixels.
   */
  setPeopleWidth(w) {
    if (!w) this.peopleWidth = 250;
    let avatarWidth = 82;
    let screenPadding = 40;
    let sectionPadding = 40;
    let grace = 10;
    if ( w >= 1030 ) {
      w = 970;
      screenPadding = 0;
      sectionPadding = 120;
    }
    else if ( w >= 800 ) {
      screenPadding = 60;
      sectionPadding = 120;
    }
    let pw = w - screenPadding - sectionPadding - avatarWidth - grace;
    this.peopleWidth = Math.floor(pw);
  }

}

customElements.define('rp-utils-landing', RpUtilsLanding);
