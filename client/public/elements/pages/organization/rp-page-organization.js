import { LitElement } from 'lit';
import render from "./rp-page-organization.tpl.js"

import "../../components/alert";
import "../../components/hero-image";


export default class RpPageOrganization extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      organizationId : {type: String},
      organization : {type: Object},
      organizationStatus : {type: String}
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'OrganizationModel');

    this.visible = false;
    this.organizationId = "";
    this.organization = {};
    this.organizationStatus = 'loading';

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
   }

   async doUpdate(state) {
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    let path = state.location.path;
    if (path.length == 1) {
      this.AppStateModel.setLocation('/organizations');
      return;
    }
    this.organizationId = path[1];
    if (!this.organizationId) return;
    this.shadowRoot.getElementById('hero').shuffle();
    await Promise.all([this._doMainQuery(this.organizationId)]);
    

  }

  async _doMainQuery(id){
    let data = await this.OrganizationModel.getOrganization(id);
    this.organizationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.organization = data.payload;
  }

  _hideStatusSection(section, statusProperty="organizationStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

}

customElements.define('rp-page-organization', RpPageOrganization);
