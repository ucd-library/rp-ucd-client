import render from "./rp-page-grant.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";
import config from "../../../src/config.js";

import "../../components/alert";
import "../../components/badge";
import "../../components/citation";
import "../../components/download-list";
import "../../components/hero-image";
import "../../components/icon";
import "../../components/link-list";
import "../../components/person-preview";
import "../../components/grant-preview";
//import { data } from "../../../src/stores/GrantStore.js";

/**
 * @class RpPageGrant
 * @description main grants collection page
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
      members: {type: Array},
      others: {type: Array},
      grantNumber: {type:String},
      role: {type:String},
      admin: {type: String},
      emptyValue: {type: String},
      class :{type:String},
      reference: {type: Object},

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
    this.members = [];
    this.others = [];
    this.role = "";
    this.admin = "";
    this.emptyValue = "Not Listed";
    this.reference = {
      "Program Director": null, 
      "Principal Investigator": null, 
      "Co-Principal Investigator": null,
      "Project Leader": null, 
      "Core Leader": null, 
      "Key Personnel": null,
      "Other Role": null};
    this.class = "";


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

    this._setActiveSection(state.location.hash);
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
    if (config.verbose) console.log("grant payload:", data);

    // Gets the relate Ids from gran and checks to make sure inheresIn has it with the
    // ["@id"] or the item itself has ["@id"] then filters if item has ucdrp
    // this.role = this.grant.relates[0]["@id"].split("/")[0].split(":")[1];
    // let relateIds = this.grant.relates
    //   .map(item => item.inheresIn ? item.inheresIn["@id"] : item["@id"] )
    //   .filter(item => item.match(/^ucdrp:/));

    // // set is created from the related IDs array and 
    // relateIds = Array.from(new Set(relateIds));
    // this.contributors = rdfUtils.asArray((await this.GrantModel.getContributors(this.grant["@id"], relateIds)).payload);

    let admin = await this.GrantModel.getAdminRole(this.grant.relates);
    this.admin = admin ? admin.label : this.emptyValue;


    this.grantType = this._getGrantType();

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

    let contributors = await this.GrantModel.getContributorsByRole(this.grant);
    
    let tmp = [];
    for( let label in contributors ) {
      tmp.push({label, contributors: contributors[label]});
    }

    this.contributor = await this._contributors(tmp);

    this.members["key"] = Object.keys(this.contributor[0].member); 
    this.members["value"] = Object.values(this.contributor[0].member); 

    this.others["key"] = Object.keys(this.contributor[1].others); 
    this.others["value"] = Object.values(this.contributor[1].others); 

    this.contributor = [this.members, this.others];
    for(let i = 0; i < this.others.value; i++);
    //Add location of the description and add to array if there is none
    this.purpose = data.payload.description;

    //delete this when description is added
    // if(!this.purpose){ 
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
    
    this.grantAwardStatus = await this._grantAwardStatus();
    this.grantUrl = await this._grantUrl();
    this.grantAmount = await this._grantAmount();
    this.awardedByLabel = await this._awardedByLabel();
    this.grantNumber = await this._grantNumber();
    if (config.verbose) console.log("description:", data);

    // this._toggleElements("about", this.about);
    
  }




  /**
   * @method _contributors
   * @description returns the sorted contributors.
   * @param {Array} contributor
   * 
   * @returns {String}
   */
  async _contributors(contributor){
    let others = {};
    let members = {};

    for(let i = 0; i < contributor.length; i++){
      let contArray = contributor[i].contributors;
      for(let j = 0; j < contArray.length; j++){
        if(contArray[j].inheresIn || contArray[j].hasContactInfo){
          let lab =contributor[i].label;
          if (!(lab in members)) members[lab] = [];
          members[lab].push(contArray[j]);

        } 
        else{
          let lab =contributor[i].label;
          if (!(lab in others)) others[lab] = [];
          others[lab].push(contArray[j]);
        }
      }
    }  
    let referenceOthers = JSON.parse(JSON.stringify(this.reference));
    let referenceMembers = JSON.parse(JSON.stringify(this.reference));

    let newOthers = Object.assign(referenceOthers, others);
    others = Object.fromEntries(Object.entries(newOthers).filter(([_, v]) => v != null));


    let newMember = Object.assign(referenceMembers, members);
    members = Object.fromEntries(Object.entries(newMember).filter(([_, v]) => v != null));

    for(let i = 0; i < Object.values(others).length; i++){
      Object.values(others)[i].sort(function(a, b) {
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;
      });
    }
    for(let i = 0; i < Object.values(members).length; i++){
      Object.values(members)[i].sort(function(a, b) {
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;
      });
    }

    this.contributor = [{"member" : members} ,{"others": others}];

    return this.contributor;
  }

  /**
   * @method _dateInterval
   * @description returns the date interval that is displayed in the header.
   * @param {String} type
   * 
   * @returns {String}
   */
  _dateInterval(type){
    if( !this.grant ) return 'Unavailable';
    if( !this.grant.dateTimeInterval ) return 'Unavailable';

    let month;
    let year;
    let day;
    if(type == "start") {
      month = new Date(this.grant.dateTimeInterval.start.dateTime).toLocaleString('default', { month: 'long' });
      year = new Date(this.grant.dateTimeInterval.start.dateTime).toLocaleString('default', { year: 'numeric' });
      day = new Date(this.grant.dateTimeInterval.start.dateTime).toLocaleString('default', { day: 'numeric' });
      return month+ " " + day + ", " + year;  
    }
    else if(type == "end") {
      month = new Date(this.grant.dateTimeInterval.end.dateTime).toLocaleString('default', { month: 'long' });
      year = new Date(this.grant.dateTimeInterval.end.dateTime).toLocaleString('default', { year: 'numeric' });
      day = new Date(this.grant.dateTimeInterval.end.dateTime).toLocaleString('default', { day: 'numeric' });
      return month + " " + day + ", " + year;    
    }
    return "Unavailable";
  }

  /**
   * @method _grantAwardStatus
   * @description returns the status of the grant award as a string based on 
   * on the interval.
   * 
   * @returns {String}
   */
  async _grantAwardStatus(){
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
  async _grantUrl(){
    return this.grant.url;
  }

  /**
   * @method _grantNumber
   * @description returns the grant Number for the specified grant ID 
   * as a string
   * 
   * @returns {String}
   */
  async _grantNumber(){
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
  async _grantAmount(){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    if (this.grant.totalAwardAmount == undefined) return undefined;
    return formatter.format(parseFloat(this.grant.totalAwardAmount));
  }

  /**
   * @method _awardedByLabel
   * @description returns the organization that is funding the grant as
   * a string
   * 
   * @returns {String}
   */
  async _awardedByLabel(){
    if (!this.grant.assignedBy) return "Not Listed";
    if (!Array.isArray(this.grant.assignedBy)) this.grant.assignedBy = [this.grant.assignedBy];
    return this.grant.assignedBy;
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
