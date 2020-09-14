import { LitElement } from 'lit-element';
import render from "./rp-page-work.tpl.js"

import "../../components/hero-image";


export default class RpPageWork extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'WorkModel');

    this.visible = false;


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
      this.AppStateModel.setLocation('/works');
      return;
    }

  }

}

customElements.define('rp-page-work', RpPageWork);
