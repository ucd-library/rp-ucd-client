import { LitElement, html } from 'lit-element';
import render from "./rp-utils-landing.tpl.js"


export default class RpUtilsLanding extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      assetType: {type: String},
      assetId: {type: String},
      disabledSections: {type: Array},
      activeSection: {type: Object}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.visible = false;
    this.assetType = '';
    this.assetId = "";
    this.disabledSections = [];
    this.activeSection = {};
  }

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
    if (this.assetType == 'subject'){
      sections.push(
        {id: 'about', text:'About'}
      );
    }
    }

    let i = 0;
    for (let section of sections) {
      if (!section.href) section.href = `${baseHref}/${section.id}`;
      section.disabled = this.disabledSections.includes(section.id)
      section.index = i;
      i++;
    }
    return sections;
  }

  _hidePageSection(section){
    if (this.activeSection.index == 0) {
      return false;
    }

    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  _setActiveSection(path, pathIndex=2){
    let sections = this.getPageSections();
    this.activeSection = sections[0]
    if (path.length >= pathIndex + 1) {
      for (let section of sections) {
        if (section.id == path[pathIndex]) {
          this.activeSection = section;
          break;
        }
      }
    }

  }

}

customElements.define('rp-utils-landing', RpUtilsLanding);
