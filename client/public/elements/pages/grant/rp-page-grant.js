import render from "./rp-page-grant.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/person-preview";
import "../../components/grant-preview";

/**
 * @class RpPageGrant
 * @description main grant page
 */
export default class RpPageGrant extends RpUtilsLanding {
  static get properties() {
    return {
      grant: {type: Object},
      grantStatus: {type: String},
      grantType: {type: String},
      fullTextLinks: {type: Array},
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number},
      tempResearch: {},
      urlPathId: {type: String},
      about: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'GrantModel', 'CollectionModel');

    this.assetType = "grant";
    this.grant = {};
    this.grantStatus = 'loading';
    this.urlPathId = "";
    this.grantType = "";
    this.fullTextLinks = [];
    this.isOwnWork = false;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this); 
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this.about = "";
  }

  /**
   * @method updated
   * @description lit method called when props update
   * 
   * @param {Object} props 
   */
  updated(props) {
    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  /**
   * @method connectedCallback
   * @description lit method called when element is connected to dom
   */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  /**
   * @method disconnectedCallback
   * @description lit method called when element is disconnected to dom
   */
  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} state 
   */
  async _onAppStateUpdate(state) {
    this.doUpdate(state);
  }

  /**
   * @method _doUpdate
   * @param {Object} state - State of the app
   * @description On the call, it would update the state of the app.
   * Promises these functions to query data: this._doMainQuery(this.assetId), 
                                             this._doResearcherQuery(this.assetId), 
                                             this._doPubOverviewQuery(this.assetId)])
   */
  async doUpdate(state) {
    if( state.page !== 'concept' ) return;

    let path = state.location.path;

    this.urlPathId = path.slice(0, 3).join('/');
    this.assetId = this.urlPathId;
    if ( !this.assetId ) return;

    this._setActiveSection(path, 3);

    await Promise.all([
      this._doMainQuery(this.assetId), 
      this._doAboutQuery(this.assetId),

    ]);

  }

  /**
   * @method _doMainQuery
   * @param {String} id - The grant id of this page.
   * @description Retrieves the grant from the id given and saves in this.grant array
   * Called on AppStateUpdate
   * 
   * Calls the functions: this._getSubjectType(), 
   *                      this._getFullTextLinks(),
   *                      this._getRelatedSubjectsNarrow(), 
   *                      this._getRelatedSubjectsBroader()
   * @returns {Promise} AppStateModel
   */
  async _doMainQuery(id){
    let data = await this.GrantModel.getGrant(id);

    this.grantStatus = data.state;
    if( data.state === 'error' ) {
      return this.AppStateModel.show404Page(data);
    }
    if (data.state != 'loaded') {
      return false;
    }
    this.grant = data.payload;
    if (APP_CONFIG.verbose) console.log("grant payload:", data);

    this.grantType = this._getGrantType();
    this.fullTextLinks = this._getFullTextLinks();

    return false;
  }

  /**
   * @method _doAboutQuery
   * @param {String} id - The grant id of this page.
   * @description Retrieves the grant from the id given and saves description in this.about array
   * Called on AppStateUpdate
   * 

   */
  async _doAboutQuery(id){
    let data = await this.SubjectModel.getSubject(id);

    //Add location of the description and add to array if there is none
    this.about = data.payload.description;

    //delete this when description is added
    if(!this.about){ 
      this.about = `Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat.`;
    }
    

    if (APP_CONFIG.verbose) console.log("description:", data);

    this._toggleElements("about", this.about);
    
  }



  /**
   * @method setPeopleWidth
   * @description
   * Sets the text-width property of the rp-grant-preview elements on this page.
   * It's the only way to get the ellipsis overflow on their titles. 
   * 
   * @param {Number} w - Window width (pixels)
   */
  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .8 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
  }  

  /**
   * @method _handleResize
   * @description bound to main window resize event
   */
  _handleResize() {
    if( !this.visible ) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  /**
   * @method _pubRedirect
   * @description creates the href that specifies the subject and 
   * type of document for the publication redirect
   * 
   * @param {String} k
   */
  _pubRedirect(k){
    let href = '/works/' + k + "?" + "subject=" + this.urlPathId;
    this.AppStateModel.setLocation(href);
  }


  /**
   * @method _toggleElements
   * @description checks if the object is empty it would take away the
   * section and the nav bar
   * 
   * @param {String} type
   * @param {Array} arrayCheck 
   */
  _toggleElements(type, arrayCheck) {
    if(this._isEmpty(arrayCheck)){
      this.shadowRoot.getElementById(type).style.display = "none";
      let data = this.shadowRoot.getElementById("navbar").shadowRoot.querySelector("div").querySelectorAll("[href]");
      for(let i = 0; i < data.length; i++){
        if(data[i].href.includes(type)) data[i].style.display = "none";
      }
    } else {
      this.shadowRoot.getElementById(type).style.display = "block";
      let data = this.shadowRoot.getElementById("navbar").shadowRoot.querySelector("div").querySelectorAll("[href]");
      for(let i = 0; i < data.length; i++){
        if(data[i].href.includes(type)) data[i].style.display = "block";
      }
    }
  } 
 

  /**
   * @method _hideStatusSection
   * @description should a given UI section be hidden based on the
   * state of this elements property
   * 
   * @param {String} section
   * @param {String} statusProperty
   * 
   * @returns {Boolean}
   */
  _hideStatusSection(section, statusProperty="grantStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }


  /**
   * @method _getFullTextLinks
   * @description returns the full text links for the grant queried
   * 
   * @returns text links output
   */
  _getFullTextLinks(){
    let output = [];
    if (!this.grant) return output;

    try {
      let links = this.grant.hasContactInfo.hasURL;
      if (!Array.isArray(links)) {
        links = [links];
      }
      for (let link of links) {
        if (!link.label || !link.url) continue;
        output.push(link);
      }
    } catch (error) {
      return output;
    }

    return output;
  }

  /**
   * @method _getGrantTypes
   * @description load and render a list of subject type
   * 
   * @returns {Promise}
   */
  _getGrantTypes() {
    try {
      for (let t of this.grant['@type']) {
        for (const possibleType of this.GrantModel.getGrantTypes()) {
          if (possibleType.es == t) return possibleType.text;
        }
      }
    } catch (error) {
      return "";
    }
    return "";
  }


}

customElements.define('rp-page-grant', RpPageGrant);
