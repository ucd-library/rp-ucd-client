(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-work"],{

/***/ "./public/elements/components/alert.js":
/*!*********************************************!*\
  !*** ./public/elements/components/alert.js ***!
  \*********************************************/
/*! exports provided: RpAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAlert", function() { return RpAlert; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.tpl.js */ "./public/elements/components/alert.tpl.js");



class RpAlert extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    themeColor: {type: String, attribute: 'theme-color'}
  };
  }

  constructor() {
    super();
    this.render = _alert_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.themeColor = 'danger';
  }

  _constructClasses() {
    let classes = {};
    classes[this.themeColor] = true;

    return classes;
  }

}

customElements.define('rp-alert', RpAlert);


/***/ }),

/***/ "./public/elements/components/alert.tpl.js":
/*!*************************************************!*\
  !*** ./public/elements/components/alert.tpl.js ***!
  \*************************************************/
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
      display: inline-block;
    }
    .container {
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: var(--font-size-small);
    }
    .container.danger {
      background-color: var(--tcolor-light);
      border-width: 1px;
      border-style: solid;
      border-color: var(--tcolor-danger);
      color: var(--tcolor-danger);
    }
    .container iron-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-right: 8px;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
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

/***/ "./public/elements/pages/work/rp-page-work.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/work/rp-page-work.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageWork; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_work_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-work.tpl.js */ "./public/elements/pages/work/rp-page-work.tpl.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_hero_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hero-image */ "./public/elements/components/hero-image.js");







class RpPageWork extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      workId : {type: String},
      work : {type: Object},
      workStatus : {type: String},
      grpsWithLinks: {type: String},
      authorPath: {type: String}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_work_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('AppStateModel', 'WorkModel');

    this.visible = false;
    this.workId = "";
    this.work = {};
    this.workStatus = 'loading';
    this.authorPath = "/individual/";
    this.grpsWithLinks = ["vivo:FacultyMember"];


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
    this.workId = path[1];
    if (!this.workId) return;
    this.shadowRoot.getElementById('hero').shuffle();
    await Promise.all([this._doMainQuery(this.workId)]);

  }

  async _doMainQuery(id){
    let data = await this.WorkModel.getWork(id);
    this.workStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.work = data.payload;
    if (APP_CONFIG.verbose) console.log("work payload:", data);
  }

  _hideStatusSection(section, statusProperty="workStatus") {
    if (section == this[statusProperty]) {
      return false;
    }
    return true;
  }

  _hideSection(section) {
    if (section == 'abstract' && this.work.abstract) {
      return false;
    }
    return true;
  }

  _renderAuthors(){
    let authors = [];
    if (this.work.Authorship && typeof this.work.Authorship === 'object') {
      let auths = this.work.Authorship;
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
        author.href = "";
        try {
            if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
                author.identifiers = [author.identifiers]
            }
            for (let id of author.identifiers) {
                if (this.grpsWithLinks.includes(id['@type'])) {
                    author.href = this.authorPath + id['@id'].replace(this.WorkModel.service.jsonContext + ":", "");
                }
            }

        } catch (error) {
            console.warn("Unable to construct author href.");
        }
        authors.push(author);
      }
      authors.sort(function (a, b) {
        return a['vivo:rank'] - b['vivo:rank'];
      });
    }
return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<div class="authors">${authors.map(author => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`<a class="author" href="${author.href}" ?disabled="${!author.href}">${author.nameLast}, ${author.nameFirst}</a>; `)}</div>`;
  }

}

customElements.define('rp-page-work', RpPageWork);


/***/ }),

/***/ "./public/elements/pages/work/rp-page-work.tpl.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/work/rp-page-work.tpl.js ***!
  \********************************************************/
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
  .authors a {
    color: var(--tcolor-light) !important;
  }
  .authors a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
  .authors a[disabled]:hover {
    color : var(--tcolor-link-text);
  }

  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style>  
<div class="work container top">
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading work.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
    <rp-hero-image id="hero">
      <div slot="top" class="herotop">
        <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
        <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
      </div>
      <div slot="main" class="heromain">
        <div class="icon-container"><iron-icon icon="av:library-books"></iron-icon></div>
        <h2 class="name text-secondary h1 bold mb-0 text-center">${this.work.label}</h2>
        <p class="text-light h3 mb-2 mt-1 text-center">${this._renderAuthors()}</p>
        <div></div>
      </div>
    </rp-hero-image>
  </div>

  <section id="abstract" class="bg-light mt-3" ?hidden="${this._hideSection('abstract')}">
    <h1 class="weight-regular mt-0">Abstract</h1>
    <p>${this.work.abstract}</p>
  </section>
</div>

`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvd29yay9ycC1wYWdlLXdvcmsuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL3dvcmsvcnAtcGFnZS13b3JrLnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDWDs7QUFFN0Isc0JBQXNCLHNEQUFVO0FBQ3ZDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFNO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjtBQUNBOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBUSwyQkFBMkI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNOOztBQUVsQywwQkFBMEIsc0RBQVU7QUFDM0M7QUFDQTtBQUNBLFVB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Q0E7QUFDQTtBQUNBLG1FQUFtRSxnQkFBZ0I7QUFDbkYseURBQXlELHNCQUFzQjtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsOEJBQThCO0FBQ3hGO0FBQ0EsU0FBUyxtQkFBbUI7QUFDNUI7QUFDQTs7QUFFQSxHIiwiZmlsZSI6InBhZ2Utd29yay5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL2FsZXJ0LnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEFsZXJ0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aGVtZUNvbG9yOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6ICd0aGVtZS1jb2xvcid9XG4gIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50aGVtZUNvbG9yID0gJ2Rhbmdlcic7XG4gIH1cblxuICBfY29uc3RydWN0Q2xhc3NlcygpIHtcbiAgICBsZXQgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbdGhpcy50aGVtZUNvbG9yXSA9IHRydWU7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtYWxlcnQnLCBScEFsZXJ0KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLmRhbmdlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciBpcm9uLWljb24ge1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5fY29uc3RydWN0Q2xhc3NlcygpKX1cIj5cbiAgICA8aXJvbi1pY29uIGljb249XCJ3YXJuaW5nXCI+PC9pcm9uLWljb24+XG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9oZXJvLWltYWdlLnRwbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBScEhlcm9JbWFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcbiAgICBhc3NldEZvbGRlcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcImFzc2V0LWZvbGRlclwifSxcbiAgICBhc3NldE1heDoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtbWF4XCJ9LFxuICAgIGFzc2V0UGljazoge3R5cGU6IHBhcnNlSW50LCBhdHRyaWJ1dGU6IFwiYXNzZXQtcGlja1wiLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXNzZXRGb2xkZXIgPSBcIi9pbWFnZXMvcHJvZmlsZS1mZWF0dXJlcy9cIlxuICAgIHRoaXMuYXNzZXRNYXggPSAyOTtcbiAgICB0aGlzLnNodWZmbGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29uc3RydWN0U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgIGlmICh0aGlzLnNyYykge1xuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuc3JjfSlgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA8IDApIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXNzZXRQaWNrID4gdGhpcy5hc3NldE1heCkge1xuICAgICAgICB0aGlzLmFzc2V0UGljayA9IHRoaXMuYXNzZXRNYXg7XG4gICAgICB9XG4gICAgICBzdHlsZXNbJ2JhY2tncm91bmQtaW1hZ2UnXSA9IGB2YXIoLS10Y29sb3ItaGVyby1maWxtKSwgdXJsKCR7dGhpcy5hc3NldEZvbGRlciArIHRoaXMuYXNzZXRQaWNrICsgXCIuanBnXCJ9KWA7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuYXNzZXRQaWNrID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogIHRoaXMuYXNzZXRNYXggKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1oZXJvLWltYWdlJywgUnBIZXJvSW1hZ2UpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXAnO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgcmV0dXJuIGh0bWxgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuc2xvdCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgI3RvcCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAjYm90dG9tIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICA8L3N0eWxlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyICR7Y2xhc3NNYXAodGhpcy5jb25zdHJ1Y3RDbGFzc2VzKCkpfVwiIHN0eWxlPVwiJHtzdHlsZU1hcCh0aGlzLmNvbnN0cnVjdFN0eWxlcygpKX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJ0b3BcIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsb3RcIiBpZD1cIm1haW5cIj48c2xvdCBuYW1lPVwibWFpblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJib3R0b21cIj48c2xvdCBuYW1lPVwiYm90dG9tXCI+PC9zbG90PjwvZGl2PlxuXG4gIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS13b3JrLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZVdvcmsgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICB3b3JrSWQgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHdvcmsgOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIHdvcmtTdGF0dXMgOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGdycHNXaXRoTGlua3M6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXV0aG9yUGF0aDoge3R5cGU6IFN0cmluZ31cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnV29ya01vZGVsJyk7XG5cbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLndvcmtJZCA9IFwiXCI7XG4gICAgdGhpcy53b3JrID0ge307XG4gICAgdGhpcy53b3JrU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuYXV0aG9yUGF0aCA9IFwiL2luZGl2aWR1YWwvXCI7XG4gICAgdGhpcy5ncnBzV2l0aExpbmtzID0gW1widml2bzpGYWN1bHR5TWVtYmVyXCJdO1xuXG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgIH1cblxuICAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpIHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKCcvd29ya3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53b3JrSWQgPSBwYXRoWzFdO1xuICAgIGlmICghdGhpcy53b3JrSWQpIHJldHVybjtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8nKS5zaHVmZmxlKCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KHRoaXMud29ya0lkKV0pO1xuXG4gIH1cblxuICBhc3luYyBfZG9NYWluUXVlcnkoaWQpe1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5Xb3JrTW9kZWwuZ2V0V29yayhpZCk7XG4gICAgdGhpcy53b3JrU3RhdHVzID0gZGF0YS5zdGF0ZTtcbiAgICBpZiAoZGF0YS5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndvcmsgPSBkYXRhLnBheWxvYWQ7XG4gICAgaWYgKEFQUF9DT05GSUcudmVyYm9zZSkgY29uc29sZS5sb2coXCJ3b3JrIHBheWxvYWQ6XCIsIGRhdGEpO1xuICB9XG5cbiAgX2hpZGVTdGF0dXNTZWN0aW9uKHNlY3Rpb24sIHN0YXR1c1Byb3BlcnR5PVwid29ya1N0YXR1c1wiKSB7XG4gICAgaWYgKHNlY3Rpb24gPT0gdGhpc1tzdGF0dXNQcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfaGlkZVNlY3Rpb24oc2VjdGlvbikge1xuICAgIGlmIChzZWN0aW9uID09ICdhYnN0cmFjdCcgJiYgdGhpcy53b3JrLmFic3RyYWN0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3JlbmRlckF1dGhvcnMoKXtcbiAgICBsZXQgYXV0aG9ycyA9IFtdO1xuICAgIGlmICh0aGlzLndvcmsuQXV0aG9yc2hpcCAmJiB0eXBlb2YgdGhpcy53b3JrLkF1dGhvcnNoaXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgYXV0aHMgPSB0aGlzLndvcmsuQXV0aG9yc2hpcDtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShhdXRocykpIHtcbiAgICAgICAgYXV0aHMgPSBbYXV0aHNdO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgYXV0aG9yIG9mIGF1dGhzKSB7XG4gICAgICAgIGlmICghYXV0aG9yLmhhc05hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3IubmFtZUZpcnN0ID0gYXV0aG9yLmhhc05hbWUuZ2l2ZW5OYW1lO1xuICAgICAgICBhdXRob3IubmFtZUxhc3QgPSBhdXRob3IuaGFzTmFtZS5mYW1pbHlOYW1lO1xuICAgICAgICBpZiAoIWF1dGhvclsndml2bzpyYW5rJ10pIHtcbiAgICAgICAgICBhdXRob3JbJ3Zpdm86cmFuayddID0gSW5maW5pdHk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0aG9yLmhyZWYgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdXRob3IuaWRlbnRpZmllcnMgPT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoYXV0aG9yLmlkZW50aWZpZXJzKSkge1xuICAgICAgICAgICAgICAgIGF1dGhvci5pZGVudGlmaWVycyA9IFthdXRob3IuaWRlbnRpZmllcnNdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpZCBvZiBhdXRob3IuaWRlbnRpZmllcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncnBzV2l0aExpbmtzLmluY2x1ZGVzKGlkWydAdHlwZSddKSkge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3IuaHJlZiA9IHRoaXMuYXV0aG9yUGF0aCArIGlkWydAaWQnXS5yZXBsYWNlKHRoaXMuV29ya01vZGVsLnNlcnZpY2UuanNvbkNvbnRleHQgKyBcIjpcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gY29uc3RydWN0IGF1dGhvciBocmVmLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBhdXRob3JzLnB1c2goYXV0aG9yKTtcbiAgICAgIH1cbiAgICAgIGF1dGhvcnMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVsndml2bzpyYW5rJ10gLSBiWyd2aXZvOnJhbmsnXTtcbiAgICAgIH0pO1xuICAgIH1cbnJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJhdXRob3JzXCI+JHthdXRob3JzLm1hcChhdXRob3IgPT4gaHRtbGA8YSBjbGFzcz1cImF1dGhvclwiIGhyZWY9XCIke2F1dGhvci5ocmVmfVwiID9kaXNhYmxlZD1cIiR7IWF1dGhvci5ocmVmfVwiPiR7YXV0aG9yLm5hbWVMYXN0fSwgJHthdXRob3IubmFtZUZpcnN0fTwvYT47IGApfTwvZGl2PmA7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2Utd29yaycsIFJwUGFnZVdvcmspO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIGlyb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5hdXRob3JzIGEge1xuICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmF1dGhvcnMgYVtkaXNhYmxlZF0ge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAuYXV0aG9ycyBhW2Rpc2FibGVkXTpob3ZlciB7XG4gICAgY29sb3IgOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgfVxuXG4gICR7c3R5bGVzfVxuPC9zdHlsZT4gIFxuPGRpdiBjbGFzcz1cIndvcmsgY29udGFpbmVyIHRvcFwiPlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdsb2FkaW5nJyl9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdlcnJvcicpfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHdvcmsuPC9ycC1hbGVydD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5faGlkZVN0YXR1c1NlY3Rpb24oJ2xvYWRlZCcpfVwiPlxuICAgIDxycC1oZXJvLWltYWdlIGlkPVwiaGVyb1wiPlxuICAgICAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgICAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPjxpcm9uLWljb24gaWNvbj1cImF2OmxpYnJhcnktYm9va3NcIj48L2lyb24taWNvbj48L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj4ke3RoaXMud29yay5sYWJlbH08L2gyPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtbGlnaHQgaDMgbWItMiBtdC0xIHRleHQtY2VudGVyXCI+JHt0aGlzLl9yZW5kZXJBdXRob3JzKCl9PC9wPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9ycC1oZXJvLWltYWdlPlxuICA8L2Rpdj5cblxuICA8c2VjdGlvbiBpZD1cImFic3RyYWN0XCIgY2xhc3M9XCJiZy1saWdodCBtdC0zXCIgP2hpZGRlbj1cIiR7dGhpcy5faGlkZVNlY3Rpb24oJ2Fic3RyYWN0Jyl9XCI+XG4gICAgPGgxIGNsYXNzPVwid2VpZ2h0LXJlZ3VsYXIgbXQtMFwiPkFic3RyYWN0PC9oMT5cbiAgICA8cD4ke3RoaXMud29yay5hYnN0cmFjdH08L3A+XG4gIDwvc2VjdGlvbj5cbjwvZGl2PlxuXG5gO30iXSwic291cmNlUm9vdCI6IiJ9