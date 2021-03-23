import render from "./rp-page-work.tpl.js";

import RpUtilsLanding from "../../utils/rp-utils-landing";

import "../../components/alert";
import "../../components/badge";
import "../../components/link-list";
import "../../components/person-preview";

/**
 * @class RpPageWork
 * @description Element for displaying a single work page
 */
export default class RpPageWork extends RpUtilsLanding {

  static get properties() {
    return {
      work: {type: Object},
      workStatus: {type: String},
      authors: {type: Array},
      universityAuthors: {type: Array},
      universityAuthorsStatus: {type: String},
      hasOtherAuthors: {tyoe: Boolean},
      workType: {type: String},
      publishedArray: {type: Array},
      subjects: {type: Array},
      fullTextLinks: {type: Array},
      isOwnWork: {type: Boolean},
      peopleWidth: {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this._injectModel('AppStateModel', 'WorkModel', 'SubjectModel');

    this.assetType = "work";
    this.work = {};
    this.workStatus = 'loading';
    this.authors = [];
    this.hasOtherAuthors = false;
    this.workType = "";
    this.publishedArray = [];
    this.subjects = [];
    this.fullTextLinks = [];
    this.isOwnWork = false;
    this.setPeopleWidth(window.innerWidth);
    this._handleResize = this._handleResize.bind(this);
    this.universityAuthors = [];
    this.universityAuthorsStatus = 'loading';

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
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
   * @method doUpdate
   * @param {Object} state
   * @description collects the path and set the location to the
   * work path, then performs the MainQuery with assetId, this will rerender
   */
  async doUpdate(state) {
    if( state.page !== 'work' ) return; 

    let path = state.location.path;
    this.assetId = state.location.path.slice(0,2).join('/');
    if ( !this.assetId ) return;

    this._setActiveSection(path);

    await Promise.all([
      this._doMainQuery(this.assetId)
    ]);
  }

  /**
   * @method _doMainQuery
   * @param {String} id
   * @description Performs primary browse/search query for the work model based on url path and parameters
   * 
   * @returns {Promise}
   */
  async _doMainQuery(id){
    let data = await this.WorkModel.getWork(id);
    if( data.state === 'error' ) {
      return this.AppStateModel.show404Page(data);
    }

    this.workStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.work = data.payload;
    if (APP_CONFIG.verbose) console.log("work payload:", data);

    this.authors = this.WorkModel.getAuthors(this.work);
    
    this.isOwnWork = this.WorkModel.isUsersWork(this.work);
    this.hasOtherAuthors = this.WorkModel.hasNonInstitutionAuthors(this.work);
    this.workType = this.WorkModel.getWorkType(this.work);
    this.publishedArray = this.WorkModel.getPublishedArray(this.work);
    this.subjects = this.WorkModel.getSubjects(this.work);
    this.fullTextLinks = this.WorkModel.getFullTextLinks(this.work);
    this._doAuthorQuery(id, this.authors);
    console.log("Subjects:",this.subjects);
  }

  /**
   * @method _doAuthorQuery
   * @description Performs primary browse/search query for the work model based on url path and parameters
   * to get the authors for the works
   * 
   * @param {String} id
   * @param {Object} authors
   */
  async _doAuthorQuery(id, authors) {
    this.universityAuthors = [];
    let universityAuthors = authors.filter(author => author.isOtherUniversity == false).map(a => a.apiEndpoint);
    let data = await this.WorkModel.getAuthorsFullObject(id, universityAuthors);
    this.universityAuthorsStatus = data.state;
    if (data.state != 'loaded') return;
    if (APP_CONFIG.verbose) console.log("university authors:", data);
    if (Array.isArray(data.payload)) {
      universityAuthors = data.payload;
    }
    else {
      universityAuthors = [data.payload];
    }

    this.universityAuthors = universityAuthors;
  }

  /**
   * @method setPeopleWidth
   * @description
   * Sets the text-width property of the rp-work-preview elements on this page.
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
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
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
  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

}

customElements.define('rp-page-work', RpPageWork);
