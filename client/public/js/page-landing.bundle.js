(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-landing"],{

/***/ "./public/elements/components/citation.js":
/*!************************************************!*\
  !*** ./public/elements/components/citation.js ***!
  \************************************************/
/*! exports provided: RpCitation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpCitation", function() { return RpCitation; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _citation_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citation.tpl.js */ "./public/elements/components/citation.tpl.js");



class RpCitation extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    data: {type: Object},
    citationStyle: {type: String, attribute: 'citation-style'},
    authors: {type: Array}
  };
  }

  constructor() {
    super();
    this.render = _citation_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.citationStyle = "MLA";
    this.data = {};
    this.authors = [];
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  updated(props) {
    if (props.has('data')) {
      this.parseData();
    }
  }

  parseData() {
    if (Object.keys(this.data).length == 0) {
      return;
    }

    // Get authors
    let authors = [];
    if (this.data.Authorship && typeof this.data.Authorship === 'object') {
      let auths = this.data.Authorship;
      if (!Array.isArray(auths)) {
        auths = [auths];
      }
      for (let author of auths) {
        if (!author.hasName) {
          continue;
        }
        author.nameFirst = author.hasName.givenName;
        author.nameLast = author.hasName.familyName;
        if (!author['vivo:rank']) {
          author['vivo:rank'] = Infinity;
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
      this.authors = authors;
    }

    // Journal info
  }
}

customElements.define('rp-citation', RpCitation);


/***/ }),

/***/ "./public/elements/components/citation.tpl.js":
/*!****************************************************!*\
  !*** ./public/elements/components/citation.tpl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");



function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    a {
      color: var(--tcolor-link-text)
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" ?hidden="${!this.data}">
  <a href="#">${this.data.label}</a>
  ${this.authors.map(author => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<span>${author.nameLast}, ${author.nameFirst}</span>; `)}.
  </div>
  `;
}


/***/ }),

/***/ "./public/elements/components/hero-image.js":
/*!**************************************************!*\
  !*** ./public/elements/components/hero-image.js ***!
  \**************************************************/
/*! exports provided: RpHeroImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpHeroImage", function() { return RpHeroImage; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _hero_image_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-image.tpl.js */ "./public/elements/components/hero-image.tpl.js");



class RpHeroImage extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    src: {type: String},
    assetFolder: {type: String, attribute: "asset-folder"},
    assetMax: {type: parseInt, attribute: "asset-max"},
    assetPick: {type: parseInt, attribute: "asset-pick", reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _hero_image_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.assetFolder = "/images/profile-features/"
    this.assetMax = 29;
    this.shuffle();
  }

  constructClasses() {
    let classes = {};

    return classes;
  }

  constructStyles() {
    let styles = {};

    if (this.src) {
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.src})`;
    }
    else {
      if (this.assetPick < 0) {
        this.assetPick = 1;
      }
      if (this.assetPick > this.assetMax) {
        this.assetPick = this.assetMax;
      }
      styles['background-image'] = `var(--tcolor-hero-film), url(${this.assetFolder + this.assetPick + ".jpg"})`;
    }
    return styles;
  }

  shuffle() {
    if (!this.src) {
      this.assetPick = Math.floor(Math.random() *  this.assetMax + 1);
    }
  }
}

customElements.define('rp-hero-image', RpHeroImage);


/***/ }),

/***/ "./public/elements/components/hero-image.tpl.js":
/*!******************************************************!*\
  !*** ./public/elements/components/hero-image.tpl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./public/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./public/node_modules/lit-html/directives/style-map.js");




function render() {
  return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
  <style>
    :host {
      display: block;
    }
    .container {
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slot {
      margin-left: 10px;
      margin-right: 10px;
    }
    #top {
      height: 30px;
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #bottom {
      height: 30px;
      padding-bottom: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `;
}


/***/ }),

/***/ "./public/elements/pages/bundles/landing.js":
/*!**************************************************!*\
  !*** ./public/elements/pages/bundles/landing.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _individual_rp_page_individual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../individual/rp-page-individual */ "./public/elements/pages/individual/rp-page-individual.js");
/* harmony import */ var _works_rp_page_works__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../works/rp-page-works */ "./public/elements/pages/works/rp-page-works.js");
/* harmony import */ var _organization_rp_page_organization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organization/rp-page-organization */ "./public/elements/pages/organization/rp-page-organization.js");




/***/ }),

/***/ "./public/elements/pages/individual/rp-page-individual.js":
/*!****************************************************************!*\
  !*** ./public/elements/pages/individual/rp-page-individual.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageIndividual; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_individual_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-individual.tpl.js */ "./public/elements/pages/individual/rp-page-individual.tpl.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/avatar */ "./public/elements/components/avatar.js");
/* harmony import */ var _components_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/badge */ "./public/elements/components/badge.js");
/* harmony import */ var _components_citation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/citation */ "./public/elements/components/citation.js");
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");
/* harmony import */ var _components_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon */ "./public/elements/components/icon.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");













class RpPageIndividual extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      individual: {type: Object},
      individualId: {type: String},
      individualStatus: {type: String},
      publicationStatus: {type: String},
      retrievedPublications: {type: Array},
      totalPublications: {type: Number},
      researchSubjects: {type: Array},
      researchSubjectsToShow: {type: Number},
      activeSection: {type: Object},
      visible: {type: Boolean},
      isOwnProfile: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_individual_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('PersonModel', 'AppStateModel');
    this.individual = {};
    this.individualId = '';
    this.individualStatus = 'loading';
    this.publicationStatus = 'loading';
    this.visible = false;
    this.retrievedPublications = [];
    this.totalPublications = 0;
    this.researchSubjects = [];
    this.researchSubjectsToShow = 4;
    this.activeSection = {index: 0};
    this.isOwnProfile = false;

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
    if (path.length >= 2) {
      this.individualId = path[1];
      this.PersonModel.individualId = this.individualId;
    }
    this.activeSection = this.PersonModel.getActiveSection(path[2])
    if (!this.individualId) return;

    this.totalPublications = 0;
    await Promise.all([this._doMainQuery(this.individualId),
                        this._doPubQuery(this.individualId)]);
    this.isOwnProfile = this._isOwnProfile();

  }

  updated(props){
    if (props.has('individualId') && this.individualId) {
      this.shadowRoot.getElementById('hero').shuffle();
    }
  }

  async _loadMorePubs(){
    await this._doPubQuery(this.individualId);
  }

  async _doMainQuery(id){
    let data = await this.PersonModel.getIndividual(id);
    this.individualStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.individual = data.payload;
    if (APP_CONFIG.verbose) console.log(data);
  }

  async _doPubQuery(id){
    let offset = 0;
    if (!id) {
      id = this.individualId;
    }
    if ( this.retrievedPublications.length < this.totalPublications ) {
      offset = this.retrievedPublications.length;
    }
    let data = await this.PersonModel.getPublications(id, offset);
    this.publicationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    if (APP_CONFIG.verbose) console.log("pubs", data);
    
    this.retrievedPublications = data.payload.results;
    if (data.payload.results.length > 0) {
      this.totalPublications = data.payload.total;

      let researchSubjects = data.payload.aggregations.facets["hasSubjectArea.label"];
      if (researchSubjects && Object.keys(researchSubjects).length > 0) {
        //this.researchSubjects = this.formatSubjectsObject(researchSubjects);
      }
    }
    if (APP_CONFIG.verbose) console.log("research subjects", this.researchSubjects);

  }

  _isOwnProfile() {
    try {
      if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === this.individualId.toLowerCase()) {
        return true;
      }
    } catch (error) {}
    return false;
  }

  hideSection(section){
    if (this.activeSection.index == 0) {
      return false;
    }

    if (section == this.activeSection.id) {
      return false;
    }

    return true;
  }

  getIndividualTitles(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.title) {
      if (Array.isArray(this.individual.hasContactInfo.title)) {
        return this.individual.hasContactInfo.title;
      }
      else {
        return [this.individual.hasContactInfo.title];
      }

    }

    return [];
  }

  getEmailAddresses(){
    if (!this.individual) {
      return [];
    }
    if (this.individual.hasContactInfo && this.individual.hasContactInfo.hasEmail) {
      if (Array.isArray(this.individual.hasContactInfo.hasEmail)) {
        return this.individual.hasContactInfo.hasEmail.map(e => e.email);
      }
      return [this.individual.hasContactInfo.hasEmail.email]
    }

    return [];
  }

  getWebsites() {
    let out = [];
    if (!this.individual) {
      return out;
    }
    if (this.individual.orcidId) {
      out.push({'text': 'Orcid', 'href': this.individual.orcidId['@id']})
    }
    if (this.individual.scopusId) {
      out.push({'text': 'Scopus', 'href': `https://www.scopus.com/authid/detail.uri?authorId=${this.individual.scopusId}`})
    }

    return out;
  }

  formatSubjectsObject(subjects){
    let out = [];
    for (let subject in subjects) {
      let subObj = {subject: subject, count: subjects[subject], label: subject};
      let words = subject.split(" ");
      if (words[0].startsWith("0") && !isNaN(words[0])) {
        subObj.label = words.slice(1,).join(" ");
      }
      out.push(subObj);
    }

    out.sort(function (a, b) {
      return b['count'] - a['count'];
    });
    return out;
  }

}

customElements.define('rp-page-individual', RpPageIndividual);


/***/ }),

/***/ "./public/elements/pages/individual/rp-page-individual.tpl.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/individual/rp-page-individual.tpl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_1__);



function render() {
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  #about .cols {
    display: flex;
  }
  #about .cols > div {
    width: 50%;
  }
  .pub-count {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  rp-badge {
    margin-left: 8px;
  }
  rp-badge:first-child {
    margin-left: 0;
  }
  .load-more {
    height: 44px;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: none;
    padding: 0 15px;
    cursor: pointer;
  }
  .load-more:hover {
    background-color: var(--tcolor-hover-bg);
  }
  a.export {
    text-decoration: none;
    display: block;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text) !important;
    font-weight: var(--font-weight);
    padding: 10px 15px;
  }
  a.export:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-text);
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>


<div class="individual container top">
  <div ?hidden="${this.individualStatus == 'error' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'error' }">
  <rp-hero-image id="hero">
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.individual.label}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      ${this.researchSubjects.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
        <p class="text-light mt-2 mb-0">
        ${this.researchSubjects.splice(0, this.researchSubjectsToShow).map(subject => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<rp-badge>${subject.label}</rp-badge>`)}
        </p>
        ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.PersonModel.getSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this.hideSection('about')}">
    <h1 class="weight-regular mt-0">About</h1>
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(title => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div>${title}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(addr => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div><a href="${'mailto:' + addr}">${addr}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(site => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div><a href="${site.href}">${site.text}</a></div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3" ?hidden="${this.hideSection('publications')}">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="flex align-items-center">${this.isOwnProfile ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <a class="export mr-3" href="${`/api/miv/${this.individualId}`}">Export</a>
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
        <div class="pub-count">${this.totalPublications}</div>
      </div>

    </div>
    <h2>Selected Publications</h2>
      <div ?hidden="${this.publicationStatus == 'error' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading publications.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'error' }">
        ${ this.retrievedPublications.map(pub => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <rp-citation class="mb-3" .data="${pub}"></rp-citation>
          `)}
      </div>
      ${this.retrievedPublications.length < this.totalPublications ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        <button type="button" @click="${this._loadMorePubs}" class="load-more">Load more articles</button>` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
  </section>

  <section id="research" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`;}


/***/ }),

/***/ "./public/elements/pages/organization/rp-page-organization.js":
/*!********************************************************************!*\
  !*** ./public/elements/pages/organization/rp-page-organization.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageOrganization; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_organization_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-organization.tpl.js */ "./public/elements/pages/organization/rp-page-organization.tpl.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");







class RpPageOrganization extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      organizationId : {type: String},
      organization : {type: Object},
      organizationStatus : {type: String}
      
    }
  }

  constructor() {
    super();
    this.render = _rp_page_organization_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('AppStateModel', 'OrganizationModel');

    this.visible = false;
    this.organizationId = "";
    this.organization = {};
    this.organizationStatus = 'loading';

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
      this.AppStateModel.setLocation('/organizations');
      return;
    }
    this.organizationId = path[1];
    if (!this.organizationId) return;
    this.shadowRoot.getElementById('hero').shuffle();
    await Promise.all([this._doMainQuery(this.organizationId)]);
    

  }

  async _doMainQuery(id){
    let data = await this.OrganizationModel.getOrganization(id);
    this.organizationStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.organization = data.payload;
    if (APP_CONFIG.verbose) console.log("organization payload:", data);
  }

  _hideStatusSection(section, statusProperty="organizationStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

}

customElements.define('rp-page-organization', RpPageOrganization);


/***/ }),

/***/ "./public/elements/pages/organization/rp-page-organization.tpl.js":
/*!************************************************************************!*\
  !*** ./public/elements/pages/organization/rp-page-organization.tpl.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/site.html */ "./public/elements/styles/site.html");
/* harmony import */ var _styles_site_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_site_html__WEBPACK_IMPORTED_MODULE_1__);



function render() { 
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

<style>
  :host {
    display: block;
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 150px;
      width: 150px;
      min-height: 150px;
      min-width: 150px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  iron-icon {
    color: var(--tcolor-primary);
    height: 50%;
    width: 50%;
  }
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>
<div class="organization container top">
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading organization.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
  <rp-hero-image id="hero">
      <div slot="top" class="herotop">
        <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
        <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
      </div>
      <div slot="main" class="heromain">
        <div class="icon-container"><iron-icon icon="group-work"></iron-icon></div>
        <h2 class="name text-secondary h1 bold mb-0 text-center">${this.organization.label}</h2>
        <div></div>
      </div>
    </rp-hero-image>
  </div>

</div>

`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9jaXRhdGlvbi50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvYnVuZGxlcy9sYW5kaW5nLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9pbmRpdmlkdWFsL3JwLXBhZ2UtaW5kaXZpZHVhbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaW5kaXZpZHVhbC9ycC1wYWdlLWluZGl2aWR1YWwudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9vcmdhbml6YXRpb24vcnAtcGFnZS1vcmdhbml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL29yZ2FuaXphdGlvbi9ycC1wYWdlLW9yZ2FuaXphdGlvbi50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ1I7O0FBRWhDLHlCQUF5QixzREFBVTtBQUMxQztBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLG9CQUFvQiwwQ0FBMEM7QUFDOUQsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix3REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EsbUVBQW1FLHdCQUF3QjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHIiwiZmlsZSI6InBhZ2UtbGFuZGluZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2NpdGF0aW9uLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScENpdGF0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7dHlwZTogT2JqZWN0fSxcbiAgICBjaXRhdGlvblN0eWxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICdjaXRhdGlvbi1zdHlsZSd9LFxuICAgIGF1dGhvcnM6IHt0eXBlOiBBcnJheX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNpdGF0aW9uU3R5bGUgPSBcIk1MQVwiO1xuICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIHRoaXMuYXV0aG9ycyA9IFtdO1xuICB9XG5cbiAgY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXMoJ2RhdGEnKSkge1xuICAgICAgdGhpcy5wYXJzZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZURhdGEoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgYXV0aG9yc1xuICAgIGxldCBhdXRob3JzID0gW107XG4gICAgaWYgKHRoaXMuZGF0YS5BdXRob3JzaGlwICYmIHR5cGVvZiB0aGlzLmRhdGEuQXV0aG9yc2hpcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBhdXRocyA9IHRoaXMuZGF0YS5BdXRob3JzaGlwO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGF1dGhzKSkge1xuICAgICAgICBhdXRocyA9IFthdXRoc107XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBhdXRob3Igb2YgYXV0aHMpIHtcbiAgICAgICAgaWYgKCFhdXRob3IuaGFzTmFtZSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGF1dGhvci5uYW1lRmlyc3QgPSBhdXRob3IuaGFzTmFtZS5naXZlbk5hbWU7XG4gICAgICAgIGF1dGhvci5uYW1lTGFzdCA9IGF1dGhvci5oYXNOYW1lLmZhbWlseU5hbWU7XG4gICAgICAgIGlmICghYXV0aG9yWyd2aXZvOnJhbmsnXSkge1xuICAgICAgICAgIGF1dGhvclsndml2bzpyYW5rJ10gPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3JzLnB1c2goYXV0aG9yKTtcbiAgICAgIH1cbiAgICAgIGF1dGhvcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVsndml2bzpyYW5rJ10gLSBiWyd2aXZvOnJhbmsnXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRob3JzID0gYXV0aG9ycztcbiAgICB9XG5cbiAgICAvLyBKb3VybmFsIGluZm9cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWNpdGF0aW9uJywgUnBDaXRhdGlvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWxpbmstdGV4dClcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMuZGF0YX1cIj5cbiAgPGEgaHJlZj1cIiNcIj4ke3RoaXMuZGF0YS5sYWJlbH08L2E+XG4gICR7dGhpcy5hdXRob3JzLm1hcChhdXRob3IgPT4gaHRtbGA8c3Bhbj4ke2F1dGhvci5uYW1lTGFzdH0sICR7YXV0aG9yLm5hbWVGaXJzdH08L3NwYW4+OyBgKX0uXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oZXJvLWltYWdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEhlcm9JbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhc3NldEZvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImFzc2V0LWZvbGRlclwifSxcbiAgICBhc3NldE1heDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtbWF4XCJ9LFxuICAgIGFzc2V0UGljazoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtcGlja1wiLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXNzZXRGb2xkZXIgPSBcIi9pbWFnZXMvcHJvZmlsZS1mZWF0dXJlcy9cIlxuICAgIHRoaXMuYXNzZXRNYXggPSAyOTtcbiAgICB0aGlzLnNodWZmbGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA8IDApIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrID4gdGhpcy5hc3NldE1heCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IHRoaXMuYXNzZXRNYXg7XG4gICAgICB9XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5hc3NldEZvbGRlciArIHRoaXMuYXNzZXRQaWNrICsgXCIuanBnXCJ9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuYXNzZXRQaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHRoaXMuYXNzZXRNYXggKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1oZXJvLWltYWdlJywgUnBIZXJvSW1hZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuc2xvdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI3RvcCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjYm90dG9tIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJ0b3BcIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cIm1haW5cIj48c2xvdCBuYW1lPVwibWFpblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJib3R0b21cIj48c2xvdCBuYW1lPVwiYm90dG9tXCI+PC9zbG90PjwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0ICcuLi9pbmRpdmlkdWFsL3JwLXBhZ2UtaW5kaXZpZHVhbCdcbmltcG9ydCAnLi4vd29ya3MvcnAtcGFnZS13b3JrcydcbmltcG9ydCAnLi4vb3JnYW5pemF0aW9uL3JwLXBhZ2Utb3JnYW5pemF0aW9uJyIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaW5kaXZpZHVhbC50cGwuanNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hdmF0YXJcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvY2l0YXRpb25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlSW5kaXZpZHVhbCBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kaXZpZHVhbDoge3R5cGU6IE9iamVjdH0sXG4gICAgICBpbmRpdmlkdWFsSWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgaW5kaXZpZHVhbFN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBwdWJsaWNhdGlvblN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICByZXRyaWV2ZWRQdWJsaWNhdGlvbnM6IHt0eXBlOiBBcnJheX0sXG4gICAgICB0b3RhbFB1YmxpY2F0aW9uczoge3R5cGU6IE51bWJlcn0sXG4gICAgICByZXNlYXJjaFN1YmplY3RzOiB7dHlwZTogQXJyYXl9LFxuICAgICAgcmVzZWFyY2hTdWJqZWN0c1RvU2hvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBhY3RpdmVTZWN0aW9uOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGlzT3duUHJvZmlsZToge3R5cGU6IEJvb2xlYW59XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ1BlcnNvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLmluZGl2aWR1YWwgPSB7fTtcbiAgICB0aGlzLmluZGl2aWR1YWxJZCA9ICcnO1xuICAgIHRoaXMuaW5kaXZpZHVhbFN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLnB1YmxpY2F0aW9uU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zID0gW107XG4gICAgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA9IDA7XG4gICAgdGhpcy5yZXNlYXJjaFN1YmplY3RzID0gW107XG4gICAgdGhpcy5yZXNlYXJjaFN1YmplY3RzVG9TaG93ID0gNDtcbiAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSB7aW5kZXg6IDB9O1xuICAgIHRoaXMuaXNPd25Qcm9maWxlID0gZmFsc2U7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICB9XG5cbiAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpIHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPj0gMikge1xuICAgICAgdGhpcy5pbmRpdmlkdWFsSWQgPSBwYXRoWzFdO1xuICAgICAgdGhpcy5QZXJzb25Nb2RlbC5pbmRpdmlkdWFsSWQgPSB0aGlzLmluZGl2aWR1YWxJZDtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5QZXJzb25Nb2RlbC5nZXRBY3RpdmVTZWN0aW9uKHBhdGhbMl0pXG4gICAgaWYgKCF0aGlzLmluZGl2aWR1YWxJZCkgcmV0dXJuO1xuXG4gICAgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA9IDA7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KHRoaXMuaW5kaXZpZHVhbElkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHViUXVlcnkodGhpcy5pbmRpdmlkdWFsSWQpXSk7XG4gICAgdGhpcy5pc093blByb2ZpbGUgPSB0aGlzLl9pc093blByb2ZpbGUoKTtcblxuICB9XG5cbiAgdXBkYXRlZChwcm9wcyl7XG4gICAgaWYgKHByb3BzLmhhcygnaW5kaXZpZHVhbElkJykgJiYgdGhpcy5pbmRpdmlkdWFsSWQpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnaGVybycpLnNodWZmbGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfbG9hZE1vcmVQdWJzKCl7XG4gICAgYXdhaXQgdGhpcy5fZG9QdWJRdWVyeSh0aGlzLmluZGl2aWR1YWxJZCk7XG4gIH1cblxuICBhc3luYyBfZG9NYWluUXVlcnkoaWQpe1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5QZXJzb25Nb2RlbC5nZXRJbmRpdmlkdWFsKGlkKTtcbiAgICB0aGlzLmluZGl2aWR1YWxTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5kaXZpZHVhbCA9IGRhdGEucGF5bG9hZDtcbiAgICBpZiAoQVBQX0NPTkZJRy52ZXJib3NlKSBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIF9kb1B1YlF1ZXJ5KGlkKXtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBpZiAoIWlkKSB7XG4gICAgICBpZCA9IHRoaXMuaW5kaXZpZHVhbElkO1xuICAgIH1cbiAgICBpZiAoIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zLmxlbmd0aCA8IHRoaXMudG90YWxQdWJsaWNhdGlvbnMgKSB7XG4gICAgICBvZmZzZXQgPSB0aGlzLnJldHJpZXZlZFB1YmxpY2F0aW9ucy5sZW5ndGg7XG4gICAgfVxuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5QZXJzb25Nb2RlbC5nZXRQdWJsaWNhdGlvbnMoaWQsIG9mZnNldCk7XG4gICAgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFQUF9DT05GSUcudmVyYm9zZSkgY29uc29sZS5sb2coXCJwdWJzXCIsIGRhdGEpO1xuICAgIFxuICAgIHRoaXMucmV0cmlldmVkUHVibGljYXRpb25zID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgaWYgKGRhdGEucGF5bG9hZC5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG90YWxQdWJsaWNhdGlvbnMgPSBkYXRhLnBheWxvYWQudG90YWw7XG5cbiAgICAgIGxldCByZXNlYXJjaFN1YmplY3RzID0gZGF0YS5wYXlsb2FkLmFnZ3JlZ2F0aW9ucy5mYWNldHNbXCJoYXNTdWJqZWN0QXJlYS5sYWJlbFwiXTtcbiAgICAgIGlmIChyZXNlYXJjaFN1YmplY3RzICYmIE9iamVjdC5rZXlzKHJlc2VhcmNoU3ViamVjdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy90aGlzLnJlc2VhcmNoU3ViamVjdHMgPSB0aGlzLmZvcm1hdFN1YmplY3RzT2JqZWN0KHJlc2VhcmNoU3ViamVjdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQVBQX0NPTkZJRy52ZXJib3NlKSBjb25zb2xlLmxvZyhcInJlc2VhcmNoIHN1YmplY3RzXCIsIHRoaXMucmVzZWFyY2hTdWJqZWN0cyk7XG5cbiAgfVxuXG4gIF9pc093blByb2ZpbGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChBUFBfQ09ORklHLnVzZXIudXNlcm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnQCcpWzBdID09PSB0aGlzLmluZGl2aWR1YWxJZC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpZGVTZWN0aW9uKHNlY3Rpb24pe1xuICAgIGlmICh0aGlzLmFjdGl2ZVNlY3Rpb24uaW5kZXggPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzZWN0aW9uID09IHRoaXMuYWN0aXZlU2VjdGlvbi5pZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0SW5kaXZpZHVhbFRpdGxlcygpe1xuICAgIGlmICghdGhpcy5pbmRpdmlkdWFsKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8gJiYgdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLnRpdGxlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8udGl0bGVdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0RW1haWxBZGRyZXNzZXMoKXtcbiAgICBpZiAoIXRoaXMuaW5kaXZpZHVhbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvICYmIHRoaXMuaW5kaXZpZHVhbC5oYXNDb250YWN0SW5mby5oYXNFbWFpbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRpdmlkdWFsLmhhc0NvbnRhY3RJbmZvLmhhc0VtYWlsLm1hcChlID0+IGUuZW1haWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt0aGlzLmluZGl2aWR1YWwuaGFzQ29udGFjdEluZm8uaGFzRW1haWwuZW1haWxdXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0V2Vic2l0ZXMoKSB7XG4gICAgbGV0IG91dCA9IFtdO1xuICAgIGlmICghdGhpcy5pbmRpdmlkdWFsKSB7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmRpdmlkdWFsLm9yY2lkSWQpIHtcbiAgICAgIG91dC5wdXNoKHsndGV4dCc6ICdPcmNpZCcsICdocmVmJzogdGhpcy5pbmRpdmlkdWFsLm9yY2lkSWRbJ0BpZCddfSlcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5kaXZpZHVhbC5zY29wdXNJZCkge1xuICAgICAgb3V0LnB1c2goeyd0ZXh0JzogJ1Njb3B1cycsICdocmVmJzogYGh0dHBzOi8vd3d3LnNjb3B1cy5jb20vYXV0aGlkL2RldGFpbC51cmk/YXV0aG9ySWQ9JHt0aGlzLmluZGl2aWR1YWwuc2NvcHVzSWR9YH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGZvcm1hdFN1YmplY3RzT2JqZWN0KHN1YmplY3RzKXtcbiAgICBsZXQgb3V0ID0gW107XG4gICAgZm9yIChsZXQgc3ViamVjdCBpbiBzdWJqZWN0cykge1xuICAgICAgbGV0IHN1Yk9iaiA9IHtzdWJqZWN0OiBzdWJqZWN0LCBjb3VudDogc3ViamVjdHNbc3ViamVjdF0sIGxhYmVsOiBzdWJqZWN0fTtcbiAgICAgIGxldCB3b3JkcyA9IHN1YmplY3Quc3BsaXQoXCIgXCIpO1xuICAgICAgaWYgKHdvcmRzWzBdLnN0YXJ0c1dpdGgoXCIwXCIpICYmICFpc05hTih3b3Jkc1swXSkpIHtcbiAgICAgICAgc3ViT2JqLmxhYmVsID0gd29yZHMuc2xpY2UoMSwpLmpvaW4oXCIgXCIpO1xuICAgICAgfVxuICAgICAgb3V0LnB1c2goc3ViT2JqKTtcbiAgICB9XG5cbiAgICBvdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGJbJ2NvdW50J10gLSBhWydjb3VudCddO1xuICAgIH0pO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtaW5kaXZpZHVhbCcsIFJwUGFnZUluZGl2aWR1YWwpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZXJvdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaGVyb21haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2Fib3V0IC5jb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gICNhYm91dCAuY29scyA+IGRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAucHViLWNvdW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci1saWdodCk7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIHJwLWJhZGdlIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIHJwLWJhZGdlOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubG9hZC1tb3JlIHtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkyMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubG9hZC1tb3JlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItaG92ZXItYmcpO1xuICB9XG4gIGEuZXhwb3J0IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLXByaW1hcnkyMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItdGV4dCkgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuICBhLmV4cG9ydDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWhvdmVyLWJnKTtcbiAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXRleHQpO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cblxuXG48ZGl2IGNsYXNzPVwiaW5kaXZpZHVhbCBjb250YWluZXIgdG9wXCI+XG4gIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBpbmRpdmlkdWFsLjwvcnAtYWxlcnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGF0YVwiID9oaWRkZW49XCIke3RoaXMuaW5kaXZpZHVhbFN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5pbmRpdmlkdWFsU3RhdHVzID09ICdlcnJvcicgfVwiPlxuICA8cnAtaGVyby1pbWFnZSBpZD1cImhlcm9cIj5cbiAgICA8ZGl2IHNsb3Q9XCJ0b3BcIiBjbGFzcz1cImhlcm90b3BcIj5cbiAgICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgICAgPHJwLWljb24gaWNvbj1cInJwLXFyXCIgY2lyY2xlLWJnIGlzLWxpbms+PC9ycC1pY29uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgICA8cnAtYXZhdGFyIHNpemU9XCJsZ1wiPjwvcnAtYXZhdGFyPlxuICAgICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj4ke3RoaXMuaW5kaXZpZHVhbC5sYWJlbH08L2gyPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxpZ2h0IGgzIG1iLTIgbXQtMSB0ZXh0LWNlbnRlclwiPiR7dGhpcy5nZXRJbmRpdmlkdWFsVGl0bGVzKCkuam9pbihcIiwgXCIpfTwvcD5cbiAgICAgICR7dGhpcy5yZXNlYXJjaFN1YmplY3RzLmxlbmd0aCA+IDAgPyBodG1sIGBcbiAgICAgICAgPHAgY2xhc3M9XCJib2xkIHRleHQtbGlnaHQgaDMgbXQtMSBtYi0wIHRleHQtY2VudGVyXCI+TXkgcmVzZWFyY2ggYXJlYXMgaW5jbHVkZTogPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgbXQtMiBtYi0wXCI+XG4gICAgICAgICR7dGhpcy5yZXNlYXJjaFN1YmplY3RzLnNwbGljZSgwLCB0aGlzLnJlc2VhcmNoU3ViamVjdHNUb1Nob3cpLm1hcChzdWJqZWN0ID0+IGh0bWxgPHJwLWJhZGdlPiR7c3ViamVjdC5sYWJlbH08L3JwLWJhZGdlPmApfVxuICAgICAgICA8L3A+XG4gICAgICAgIGAgOiBodG1sYGB9XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3JwLWhlcm8taW1hZ2U+XG4gIDxycC1saW5rLWxpc3QgY2xhc3M9XCJiZy1saWdodCBwLTNcIlxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIC5saW5rcz1cIiR7dGhpcy5QZXJzb25Nb2RlbC5nZXRTZWN0aW9ucygpfVwiXG4gICAgICAgICAgICAgICAgY3VycmVudC1saW5rPVwiJHt0aGlzLmFjdGl2ZVNlY3Rpb24uaW5kZXh9XCI+XG4gIDwvcnAtbGluay1saXN0PlxuXG4gIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIiA/aGlkZGVuPVwiJHt0aGlzLmhpZGVTZWN0aW9uKCdhYm91dCcpfVwiPlxuICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyIG10LTBcIj5BYm91dDwvaDE+XG4gICAgPGgyIGhpZGRlbj5PdmVydmlldzwvaDI+XG4gICAgPHAgaGlkZGVuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXBcbiAgICBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xzXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTJcIj5Qb3NpdGlvbnM8L2gzPlxuICAgICAgICAgICR7dGhpcy5nZXRJbmRpdmlkdWFsVGl0bGVzKCkubWFwKHRpdGxlID0+IGh0bWxgPGRpdj4ke3RpdGxlfTwvZGl2PmApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj48aDMgY2xhc3M9XCJtYi0yXCI+Q29udGFjdDwvaDM+JHt0aGlzLmdldEVtYWlsQWRkcmVzc2VzKCkubWFwKGFkZHIgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIkeydtYWlsdG86JyArIGFkZHJ9XCI+JHthZGRyfTwvYT48L2Rpdj5gKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwibWItMlwiPldlYnNpdGVzPC9oMz5cbiAgICAgICAgJHt0aGlzLmdldFdlYnNpdGVzKCkubWFwKHNpdGUgPT4gaHRtbGA8ZGl2PjxhIGhyZWY9XCIke3NpdGUuaHJlZn1cIj4ke3NpdGUudGV4dH08L2E+PC9kaXY+YCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGlkPVwicHVibGljYXRpb25zXCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgP2hpZGRlbj1cIiR7dGhpcy5oaWRlU2VjdGlvbigncHVibGljYXRpb25zJyl9XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxoMSBjbGFzcz1cIndlaWdodC1yZWd1bGFyIG10LTBcIj5QdWJsaWNhdGlvbnM8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+JHt0aGlzLmlzT3duUHJvZmlsZSA/IGh0bWxgXG4gICAgICAgIDxhIGNsYXNzPVwiZXhwb3J0IG1yLTNcIiBocmVmPVwiJHtgL2FwaS9taXYvJHt0aGlzLmluZGl2aWR1YWxJZH1gfVwiPkV4cG9ydDwvYT5cbiAgICAgIGAgOiBodG1sYGB9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwdWItY291bnRcIj4ke3RoaXMudG90YWxQdWJsaWNhdGlvbnN9PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDxoMj5TZWxlY3RlZCBQdWJsaWNhdGlvbnM8L2gyPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLnB1YmxpY2F0aW9uU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLnB1YmxpY2F0aW9uU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLnB1YmxpY2F0aW9uU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgcHVibGljYXRpb25zLjwvcnAtYWxlcnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5wdWJsaWNhdGlvblN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHsgdGhpcy5yZXRyaWV2ZWRQdWJsaWNhdGlvbnMubWFwKHB1YiA9PiBodG1sYFxuICAgICAgICAgIDxycC1jaXRhdGlvbiBjbGFzcz1cIm1iLTNcIiAuZGF0YT1cIiR7cHVifVwiPjwvcnAtY2l0YXRpb24+XG4gICAgICAgICAgYCl9XG4gICAgICA8L2Rpdj5cbiAgICAgICR7dGhpcy5yZXRyaWV2ZWRQdWJsaWNhdGlvbnMubGVuZ3RoIDwgdGhpcy50b3RhbFB1YmxpY2F0aW9ucyA/IGh0bWxgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cIiR7dGhpcy5fbG9hZE1vcmVQdWJzfVwiIGNsYXNzPVwibG9hZC1tb3JlXCI+TG9hZCBtb3JlIGFydGljbGVzPC9idXR0b24+YCA6IGh0bWxgYH1cbiAgPC9zZWN0aW9uPlxuXG4gIDxzZWN0aW9uIGlkPVwicmVzZWFyY2hcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIiBoaWRkZW4+XG4gICAgPGgxIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5SZXNlYXJjaDwvaDE+XG4gICAgPGgyPk92ZXJ2aWV3PC9oMj5cbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZVxuICAgICAgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48cD5cbiAgICA8aDI+S2V5d29yZHM8L2gyPlxuICAgICAgPHA+bG9yZW0sIGlwc3VtLCBkb2xvciBzaXQgYW1pdDwvcD5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cImJnLWxpZ2h0IG10LTNcIiBoaWRkZW4+XG4gICAgPGgxIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXJcIj5Db250YWN0PC9oMT5cbiAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2Utb3JnYW5pemF0aW9uLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZU9yZ2FuaXphdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4ud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIG9yZ2FuaXphdGlvbklkIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBvcmdhbml6YXRpb24gOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIG9yZ2FuaXphdGlvblN0YXR1cyA6IHt0eXBlOiBTdHJpbmd9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnT3JnYW5pemF0aW9uTW9kZWwnKTtcblxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMub3JnYW5pemF0aW9uSWQgPSBcIlwiO1xuICAgIHRoaXMub3JnYW5pemF0aW9uID0ge307XG4gICAgdGhpcy5vcmdhbml6YXRpb25TdGF0dXMgPSAnbG9hZGluZyc7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgIH1cblxuICAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpIHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKCcvb3JnYW5pemF0aW9ucycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gcGF0aFsxXTtcbiAgICBpZiAoIXRoaXMub3JnYW5pemF0aW9uSWQpIHJldHVybjtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8nKS5zaHVmZmxlKCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KHRoaXMub3JnYW5pemF0aW9uSWQpXSk7XG4gICAgXG5cbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeShpZCl7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLk9yZ2FuaXphdGlvbk1vZGVsLmdldE9yZ2FuaXphdGlvbihpZCk7XG4gICAgdGhpcy5vcmdhbml6YXRpb25TdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3JnYW5pemF0aW9uID0gZGF0YS5wYXlsb2FkO1xuICAgIGlmIChBUFBfQ09ORklHLnZlcmJvc2UpIGNvbnNvbGUubG9nKFwib3JnYW5pemF0aW9uIHBheWxvYWQ6XCIsIGRhdGEpO1xuICB9XG5cbiAgX2hpZGVTdGF0dXNTZWN0aW9uKHNlY3Rpb24sIHN0YXR1c1Byb3BlcnR5PVwib3JnYW5pemF0aW9uU3RhdHVzXCIpIHtcbiAgICBpZiAoc2VjdGlvbiA9PSB0aGlzW3N0YXR1c1Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1vcmdhbml6YXRpb24nLCBScFBhZ2VPcmdhbml6YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIGlyb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJvcmdhbml6YXRpb24gY29udGFpbmVyIHRvcFwiPlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdsb2FkaW5nJyl9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdlcnJvcicpfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIG9yZ2FuaXphdGlvbi48L3JwLWFsZXJ0PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLl9oaWRlU3RhdHVzU2VjdGlvbignbG9hZGVkJyl9XCI+XG4gIDxycC1oZXJvLWltYWdlIGlkPVwiaGVyb1wiPlxuICAgICAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgICAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPjxpcm9uLWljb24gaWNvbj1cImdyb3VwLXdvcmtcIj48L2lyb24taWNvbj48L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj4ke3RoaXMub3JnYW5pemF0aW9uLmxhYmVsfTwvaDI+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3JwLWhlcm8taW1hZ2U+XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuYDt9Il0sInNvdXJjZVJvb3QiOiIifQ==