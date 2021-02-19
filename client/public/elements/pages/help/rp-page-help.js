import { LitElement } from 'lit-element';
import render from "./rp-page-help.tpl.js";

import "../../components/accordian";

/**
 * @class RpPageHelp
 * @description Main help page
 */
export default class RpPageHelp extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      isLoggedIn: {type: Boolean},
      imgPath: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    
    this.visible = false;
    this.isLoggedIn = APP_CONFIG.user ? true : false;
    this.imgPath = '/images/faq/';

    this.AppStateModel.get().then(e => this._renderDelay(e));
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    if( state.page !== 'help' ) return;
    this._renderDelay(state);
  }

  /**
   * @method _renderDelay
   * @description delay rendering (updating of props from state)
   * one animation frame.  required to ensure element is visible
   * on dame for correct scroll position
   * 
   * @param {Object} state 
   */
  _renderDelay(state) {
    if (state.location.hash) {
      requestAnimationFrame(async () => {
        let pos = this.shadowRoot.getElementById(state.location.hash);
        if (pos) window.scrollTo(0, pos.getBoundingClientRect().top + window.pageYOffset);
      });
    }
  }

}

customElements.define('rp-page-help', RpPageHelp);
