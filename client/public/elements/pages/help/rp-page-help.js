import { LitElement } from 'lit-element';
import render from "./rp-page-help.tpl.js"


export default class RpPageHelp extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean}
      
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    
    this.boolean = false;

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

  }

}

customElements.define('rp-page-help', RpPageHelp);
