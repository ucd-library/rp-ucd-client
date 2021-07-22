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
      imgPath: {type: String},
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel');
    
    this.visible = false;
    this.isLoggedIn = APP_CONFIG.user ? true : false;
    this.imgPath = '/images/faq/';    

    // need to wait until window finishes loaded to set page
    // for first time
    window.addEventListener('load', () => {
      this.AppStateModel.get().then(e => this._renderDelay(e));
    });
  }

  updated(props) {
    if( props.has('visible') && this.visible ) {
      this.AppStateModel.get().then(e => this._renderDelay(e));
    }
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
   * @param {Number} retry 
   */
  async _renderDelay(state) {
    if ( !state.location.hash ) return;
    await this.updateComplete;
    
    let pos = this.shadowRoot.querySelector(`[jump-to="${state.location.hash}"]`);
    if( !pos ) return;

    requestAnimationFrame(() => {
      let posY = Math.floor(pos.getBoundingClientRect().top+ window.pageYOffset);
      window.scrollTo(0, posY);
      pos.expanded = true;
    });
  }

}

customElements.define('rp-page-help', RpPageHelp);
