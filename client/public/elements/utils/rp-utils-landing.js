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
    let baseHref = `/${this.assetType}/${this.assetId}`;
    let sections = [{id:"all", text: "All Info", href: baseHref}];
    if (this.assetType == 'work') {
      sections.push(
        {id: 'records', text: 'Records'},
        {id: 'overview', text: 'Overview'},
        {id: 'authors', text: 'Authors'}
      );
    }
    if (this.assetType == 'individual') {
      sections.push(
        {id: 'about', text: 'About'},
        {id: 'publications', text: 'Publications'}
      );
    }
    if (this.assetType == 'subject'){
      sections.push(
        {id: 'about', text:'About'},
        {id: 'researchers', text: 'Researchers'},
        {id: 'publications', text: 'Publications'}
      );
    }
    let i = 0;
    for (let section of sections) {
      if (!section.href) section.href = `${baseHref}/${section.id}`;
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
  _hidePageSection(section){
    if (this.activeSection.index == 0) {
      return false;
    }

    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  /**
   * @method _setActiveSection
   * @description Sets the 'activeSection' property based on the current URL. Should be bound to app-state-update.
   * @param {Array} path - URL path broken into an array.
   * @param {Number} pathIndex - Index of path array that should contain the page section.
   */
  _setActiveSection(path, pathIndex=2){
    let sections = this.getPageSections();
    this.activeSection = sections[0];
    if (path.length >= pathIndex + 1) {
      for (let section of sections) {
        if (section.id == path[pathIndex]) {
          this.activeSection = section;
          break;
        }
      }
    }
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
