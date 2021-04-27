import render from "./rp-page-grant.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";
import rdfUtils from "../../../src/lib/rdf-utils";

import "../../components/alert";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/person-preview";
import "../../components/grant-preview";
import { data } from "../../../src/stores/GrantStore.js";

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
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number},
      urlPathId: {type: String},
      purpose: {type: String},
      dateInterval: {type: Object},
      grantAwardStatus: {type: String},
      grantUrl: {type: String},
      grantAmount: {type: String},
      awardedByLabel: {type: String},
      contributors: {type: Array},
      grantNumber: {type:String},
      role: {type:String}
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
    this.isOwnWork = false;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this); 
    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this.purpose = "";
    this.dateInterval = {};
    this.grantAwardStatus = "Active";
    this.grantUrl = "";
    this.grantAmount = "$0";
    this.awardedByLabel = "";
    this.grantNumber ="";
    this.contributors= [];
    this.role = "";

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
    if( state.page !== 'grant' ) return;

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

    // Gets the relate Ids from gran and checks to make sure inheresIn has it with the
    // ["@id"] or the item itself has ["@id"] then filters if item has ucdrp
    this.role = this.grant.relates[0]["@id"].split("/")[0].split(":")[1];
    let relateIds = this.grant.relates
      .map(item => item.inheresIn ? item.inheresIn["@id"] : item["@id"] )
      .filter(item => item.match(/^ucdrp:/));

    // set is created from the related IDs array and 
    relateIds = Array.from(new Set(relateIds));
    this.contributors = rdfUtils.asArray((await this.GrantModel.getContributors(this.grant["@id"], relateIds)).payload);
    
    this.grantType = this._getGrantType();
    // this.dateStart = this._dateInterval("start");
    // this.dateEnd = this._dateInterval("end");
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

    let data = await this.GrantModel.getGrant(id);
    //Add location of the description and add to array if there is none
    this.purpose = data.payload.description;

    //delete this when description is added
    // if(!this.about){ 
    //   this.purpose = `Lorem ipsum dolor sit amet, consectetur 
    //                 adipiscing elit, sed do eiusmod tempor 
    //                 incididunt ut labore et dolore magna aliqua. 
    //                 Ut enim ad minim veniam, quis nostrud 
    //                 exercitation ullamco laboris nisi ut aliquip 
    //                 ex ea commodo consequat.Lorem ipsum dolor 
    //                 sit amet, consectetur adipiscing elit, sed 
    //                 do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //                 Ut enim ad minim veniam, quis nostrud 
    //                 exercitation ullamco laboris nisi ut aliquip 
    //                 ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 
    //                 adipiscing elit, sed do eiusmod tempor 
    //                 incididunt ut labore et dolore magna aliqua. 
    //                 Ut enim ad minim veniam, quis nostrud 
    //                 exercitation ullamco laboris nisi ut aliquip 
    //                 ex ea commodo consequat.`;
    // }
    
    this.grantAwardStatus = this._grantAwardStatus();
    this.grantUrl = this._grantUrl();
    this.grantAmount = this._grantAmount();
    this.awardedByLabel = this._awardedByLabel();
    this.grantNumber = this._grantNumber();

    if (APP_CONFIG.verbose) console.log("description:", data);

    // this._toggleElements("about", this.about);
    
  }

  /**
   * @method _dateInterval
   * @description returns the date interval that is displayed in the header.
   * @param {String} type
   * 
   * @returns {String}
   */
  _dateInterval(type){
    if(type == "start") return this.grant.dateTimeInterval.start.dateTime;
    else if(type == "end") return this.grant.dateTimeInterval.end.dateTime;
    return "Unavaliable";
  }

  /**
   * @method _grantAwardStatus
   * @description returns the status of the grant award as a string based on 
   * on the interval.
   * 
   * @returns {String}
   */
  _grantAwardStatus(){
    this.dateStart = this.grant.dateTimeInterval.start.dateTime;
    this.dateEnd = this.grant.dateTimeInterval.end.dateTime;


    let today = new Date();
    let endDate = new Date(this.dateEnd);

    if(today > endDate){
      return 'Inactive';
    } else if(today <= endDate){
      return 'Active';
    }

    return 'Undetermined';

  }

  /**
   * @method _grantUrl
   * @description returns the grant URL for the specified grant ID as
   * a string
   * 
   * @returns {String}
   */
  _grantUrl(){
    return this.grant.url;
  }

  /**
   * @method _grantNumber
   * @description returns the grant Number for the specified grant ID 
   * as a string
   * 
   * @returns {String}
   */
  _grantNumber(){
    if (this.grant.sponsorAwardId == undefined) return "Not Listed";
    return this.grant.sponsorAwardId;
  }

  /**
   * @method _grantAmount
   * @description returns the grant Amount for the specified grant ID 
   * as a string
   * 
   * @returns {String}
   */
  _grantAmount(){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    if (this.grant.totalAwardAmount == undefined) return "Not Listed";
    return formatter.format(parseFloat(this.grant.totalAwardAmount));
  }

  /**
   * @method _awardedByLabel
   * @description returns the organization that is funding the grant as
   * a string
   * 
   * @returns {String}
   */
  _awardedByLabel(){
    if (this.grant.assignedBy.label == undefined) return "Not Listed";
    return this.grant.assignedBy.label;
  }


  /**
   * @method _labelTitle
   * @description returns the prefLabel to screen if it exists, otherwise 
   * it returns the stated label
   * 
   * @returns {String}
   */
  _labelTitle(){
    if(this.grant.prefLabel) return this.grant.prefLabel;
    return this.grant.label;
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



//   /**
//    * @method _toggleElements
//    * @description checks if the object is empty it would take away the
//    * section and the nav bar
//    * 
//    * @param {String} type
//    * @param {Array} arrayCheck 
//    */
//   _toggleElements(type, arrayCheck) {
//     if(this._isEmpty(arrayCheck)){
//       this.shadowRoot.getElementById(type).style.display = "none";
//       let data = this.shadowRoot.getElementById("navbar").shadowRoot.querySelector("div").querySelectorAll("[href]");
//       for(let i = 0; i < data.length; i++){
//         if(data[i].href.includes(type)) data[i].style.display = "none";
//       }
//     } else {
//       this.shadowRoot.getElementById(type).style.display = "block";
//       let data = this.shadowRoot.getElementById("navbar").shadowRoot.querySelector("div").querySelectorAll("[href]");
//       for(let i = 0; i < data.length; i++){
//         if(data[i].href.includes(type)) data[i].style.display = "block";
//       }
//     }
//   } 
 
//   /**
//    * @method _isEmpty
//    * @description checks if the object has any values for it to 
//    * show the object or not
//    * 
//    * @param {Object} obj
//    * 
//    * @returns {Boolean}
//    */
//   _isEmpty(obj={}) {
//     return Object.keys(obj).length === 0;
//   }


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
   * @method _getGrantType
   * @description load and render a list of grant type
   * 
   * @returns {Promise}
   */
  _getGrantType() {
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
