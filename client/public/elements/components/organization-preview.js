import { LitElement, html } from 'lit-element';
import render from './organization-preview.tpl.js';


export class RpOrganizationPreview extends LitElement {
  
  static get properties() {
    return {
      data: {type: Object},
      href: {type: String},
      organizationPath: {type: String},
      jsonldContext: {type: String}
    };
  }

  constructor() {
    super();
    this.organizationPath = "/organization/";
    this.jsonldContext = APP_CONFIG.data.context.organization;
    this.render = render.bind(this);
  }

  _renderNameLink() {
    let href = "";
    if (this.href) {
      href = this.href;
    }
    else {
      try {
        let id = this.data['@id'].split(`${this.jsonldContext}:g-`)[1];
        href = this.organizationPath + id;
      } catch (error) {
        console.warn("Unable to construct org href.");
      }
    }
    return html`<a class="name" href="${href}" ?disabled="${!href}">${this.data.label}</a>`;
  }
}

customElements.define('rp-organization-preview', RpOrganizationPreview);
