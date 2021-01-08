import { LitElement } from 'lit-element';
import render from "./rp-page-help.tpl.js"

import "../../components/accordian";


export default class RpPageHelp extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      isLoggedIn: {type: Boolean},
      imgPath: {type: String}
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    
    this.visible = false;
    this.isLoggedIn = false;
    this.imgPath = '/images/faq/';

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
    this.isLoggedIn = APP_CONFIG.user ? true : false;
    if (state.location.hash) {
      let pos = this.shadowRoot.getElementById(state.location.hash);
      if (pos) window.scrollTo(0, pos.getBoundingClientRect().top + window.pageYOffset);
    }
    

  }

}

customElements.define('rp-page-help', RpPageHelp);
