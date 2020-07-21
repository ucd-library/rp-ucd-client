import { LitElement } from 'lit-element';
import render from "./researcher-profiles.tpl.js"

// sets globals Mixin and EventInterface
import "@ucd-lib/cork-app-utils";

// Polymer
import "@polymer/iron-icons/iron-icons"
import "@polymer/iron-icons/av-icons"

// styles
import "./styles/properties"
import "./styles/site"

// main library
import "../src"

// app elements
import "./pages/components/app-components"

import "@polymer/iron-pages"

export default class ResearcherProfiles extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      appRoutes : {type: Array},
      page : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.appRoutes = APP_CONFIG.appRoutes;
    this.page = 'loading';

    this._injectModel('AppStateModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   *
   * @param {Object} e
   */
  _onAppStateUpdate(e) {
    console.log('Current app state:', e);
    this.page = e.page;
  }

}

customElements.define('researcher-profiles', ResearcherProfiles);
