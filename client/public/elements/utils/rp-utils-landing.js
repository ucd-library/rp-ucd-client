import { LitElement } from 'lit';
import render from "./rp-utils-landing.tpl.js";
import config from "../../src/config";
import UserUtils from "../../src/lib/user-utils";

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
      peopleWidth: {type: Number},
      isAdmin: {type: Boolean}
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
    this.isAdmin = UserUtils.isAdmin(config.user);
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
        {id: 'publications', text: 'Publications', type: 'work'},
        {id: 'grants', text: 'Grants', type: 'grant'}
      );
    }
    if (this.assetType == 'concept'){
      sections.push(
        {id: 'about', text:'About'},
        {id: 'relatedSubjects', text:'Related Subjects'},
        {id: 'researchers', text: 'Researchers'},
        {id: 'publications', text: 'Publications', type: 'work'}
      );
    }
    if (this.assetType == 'grant'){
      sections.push(
        {id: 'about', text:'About'},
        {id: 'contributors', text:'Contributors'},
      );
    }

    if( this.isAdmin ) {
      sections.push({
        id : 'debug', text: 'Debug Record', href: '/admin/'+this.assetId, forceNoHash: true
      });
    }

    if( config.hiddenTypes && config.hiddenTypes.length ) {
      sections = sections.filter(section => {
        return !config.hiddenTypes.includes(section.type);
      });
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
   * @param {String} type optional type.  will check APP_CONFIG.hiddenTypes list
   * 
   * @returns {Boolean}
   */
  _hidePageSection(section, type) {
    let hasData = this._sectionHasData(section);
    if( !hasData ) return true;

    if( config.hiddenTypes && config.hiddenTypes.length ) {
      if( config.hiddenTypes.includes(type) ) return true;
    }

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
