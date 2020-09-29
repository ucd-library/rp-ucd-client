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

}

customElements.define('rp-utils-landing', RpUtilsLanding);
