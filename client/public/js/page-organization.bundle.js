(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-organization"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hbGVydC50cGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvaGVyby1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9oZXJvLWltYWdlLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvb3JnYW5pemF0aW9uL3JwLXBhZ2Utb3JnYW5pemF0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9vcmdhbml6YXRpb24vcnAtcGFnZS1vcmdhbml6YXRpb24udHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNYOztBQUU3QixzQkFBc0Isc0RBQVU7QUFDdkM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscURBQU07QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCO0FBQ0E7O0FBRTFDO0FBQ2YsU0FBUyxnREFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ047O0FBRWxDLDBCQUEwQixzREFBVTtBQUMzQztBQUNBO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLGtCQUFrQix3Q0FBd0M7QUFDMUQsZUFBZSx1Q0FBdUM7QUFDdEQsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiwwREFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsMkNBQTJDO0FBQzlHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNzQjtBQUNBOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFRLDBCQUEwQixXQUFXLDhFQUFRLHlCQUF5QjtBQUN4RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNTOztBQUVsQjtBQUNLOzs7QUFHdEIsdUNBQXVDLHNEQUFVO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5Qix3QkFBd0IsYUFBYTtBQUNyQyxzQkFBc0IsYUFBYTtBQUNuQyw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvRUFBTTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUzs7QUFFN0IsbUI7QUFDZixPQUFPLGdEQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBTTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0IsbUNBQW1DO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsd0JBQXdCO0FBQzNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEciLCJmaWxlIjoicGFnZS1vcmdhbml6YXRpb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hbGVydC50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBBbGVydCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdGhlbWVDb2xvcjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiAndGhlbWUtY29sb3InfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhlbWVDb2xvciA9ICdkYW5nZXInO1xuICB9XG5cbiAgX2NvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICBjbGFzc2VzW3RoaXMudGhlbWVDb2xvcl0gPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFsZXJ0JywgUnBBbGVydCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICdsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcCc7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5kYW5nZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5jb250YWluZXIgaXJvbi1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuX2NvbnN0cnVjdENsYXNzZXMoKSl9XCI+XG4gICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vaGVyby1pbWFnZS50cGwuanMnO1xuXG5leHBvcnQgY2xhc3MgUnBIZXJvSW1hZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICByZXR1cm4ge1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG4gICAgYXNzZXRGb2xkZXI6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJhc3NldC1mb2xkZXJcIn0sXG4gICAgYXNzZXRNYXg6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LW1heFwifSxcbiAgICBhc3NldFBpY2s6IHt0eXBlOiBwYXJzZUludCwgYXR0cmlidXRlOiBcImFzc2V0LXBpY2tcIiwgcmVmbGVjdDogdHJ1ZX1cbiAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFzc2V0Rm9sZGVyID0gXCIvaW1hZ2VzL3Byb2ZpbGUtZmVhdHVyZXMvXCJcbiAgICB0aGlzLmFzc2V0TWF4ID0gMjk7XG4gICAgdGhpcy5zaHVmZmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RDbGFzc2VzKCkge1xuICAgIGxldCBjbGFzc2VzID0ge307XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdFN0eWxlcygpIHtcbiAgICBsZXQgc3R5bGVzID0ge307XG5cbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHN0eWxlc1snYmFja2dyb3VuZC1pbWFnZSddID0gYHZhcigtLXRjb2xvci1oZXJvLWZpbG0pLCB1cmwoJHt0aGlzLnNyY30pYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAodGhpcy5hc3NldFBpY2sgPCAwKSB7XG4gICAgICAgIHRoaXMuYXNzZXRQaWNrID0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFzc2V0UGljayA+IHRoaXMuYXNzZXRNYXgpIHtcbiAgICAgICAgdGhpcy5hc3NldFBpY2sgPSB0aGlzLmFzc2V0TWF4O1xuICAgICAgfVxuICAgICAgc3R5bGVzWydiYWNrZ3JvdW5kLWltYWdlJ10gPSBgdmFyKC0tdGNvbG9yLWhlcm8tZmlsbSksIHVybCgke3RoaXMuYXNzZXRGb2xkZXIgKyB0aGlzLmFzc2V0UGljayArIFwiLmpwZ1wifSlgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBpZiAoIXRoaXMuc3JjKSB7XG4gICAgICB0aGlzLmFzc2V0UGljayA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICB0aGlzLmFzc2V0TWF4ICsgMSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtaGVyby1pbWFnZScsIFJwSGVyb0ltYWdlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSAnbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHJldHVybiBodG1sYFxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLnNsb3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgICN0b3Age1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgI2JvdHRvbSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciAke2NsYXNzTWFwKHRoaXMuY29uc3RydWN0Q2xhc3NlcygpKX1cIiBzdHlsZT1cIiR7c3R5bGVNYXAodGhpcy5jb25zdHJ1Y3RTdHlsZXMoKSl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwidG9wXCI+PHNsb3QgbmFtZT1cInRvcFwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzbG90XCIgaWQ9XCJtYWluXCI+PHNsb3QgbmFtZT1cIm1haW5cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xvdFwiIGlkPVwiYm90dG9tXCI+PHNsb3QgbmFtZT1cImJvdHRvbVwiPjwvc2xvdD48L2Rpdj5cblxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2Utb3JnYW5pemF0aW9uLnRwbC5qc1wiXG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGVyby1pbWFnZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZU9yZ2FuaXphdGlvbiBleHRlbmRzIE1peGluKExpdEVsZW1lbnQpXG4ud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIG9yZ2FuaXphdGlvbklkIDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBvcmdhbml6YXRpb24gOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIG9yZ2FuaXphdGlvblN0YXR1cyA6IHt0eXBlOiBTdHJpbmd9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnLCAnT3JnYW5pemF0aW9uTW9kZWwnKTtcblxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMub3JnYW5pemF0aW9uSWQgPSBcIlwiO1xuICAgIHRoaXMub3JnYW5pemF0aW9uID0ge307XG4gICAgdGhpcy5vcmdhbml6YXRpb25TdGF0dXMgPSAnbG9hZGluZyc7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgIH1cblxuICAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpIHtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gc3RhdGUubG9jYXRpb24ucGF0aDtcbiAgICBpZiAocGF0aC5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5BcHBTdGF0ZU1vZGVsLnNldExvY2F0aW9uKCcvb3JnYW5pemF0aW9ucycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9yZ2FuaXphdGlvbklkID0gcGF0aFsxXTtcbiAgICBpZiAoIXRoaXMub3JnYW5pemF0aW9uSWQpIHJldHVybjtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8nKS5zaHVmZmxlKCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KHRoaXMub3JnYW5pemF0aW9uSWQpXSk7XG4gICAgXG5cbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeShpZCl7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLk9yZ2FuaXphdGlvbk1vZGVsLmdldE9yZ2FuaXphdGlvbihpZCk7XG4gICAgdGhpcy5vcmdhbml6YXRpb25TdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3JnYW5pemF0aW9uID0gZGF0YS5wYXlsb2FkO1xuICAgIGlmIChBUFBfQ09ORklHLnZlcmJvc2UpIGNvbnNvbGUubG9nKFwib3JnYW5pemF0aW9uIHBheWxvYWQ6XCIsIGRhdGEpO1xuICB9XG5cbiAgX2hpZGVTdGF0dXNTZWN0aW9uKHNlY3Rpb24sIHN0YXR1c1Byb3BlcnR5PVwib3JnYW5pemF0aW9uU3RhdHVzXCIpIHtcbiAgICBpZiAoc2VjdGlvbiA9PSB0aGlzW3N0YXR1c1Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1vcmdhbml6YXRpb24nLCBScFBhZ2VPcmdhbml6YXRpb24pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkgeyBcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyb3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLmhlcm9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10Y29sb3ItYmctcHJpbWFyeSk7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIGlyb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLXRjb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJvcmdhbml6YXRpb24gY29udGFpbmVyIHRvcFwiPlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdsb2FkaW5nJyl9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuX2hpZGVTdGF0dXNTZWN0aW9uKCdlcnJvcicpfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIG9yZ2FuaXphdGlvbi48L3JwLWFsZXJ0PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLl9oaWRlU3RhdHVzU2VjdGlvbignbG9hZGVkJyl9XCI+XG4gIDxycC1oZXJvLWltYWdlIGlkPVwiaGVyb1wiPlxuICAgICAgPGRpdiBzbG90PVwidG9wXCIgY2xhc3M9XCJoZXJvdG9wXCI+XG4gICAgICAgIDxycC1pY29uIGljb249XCJpcm9uLWxpbmtcIiBjaXJjbGUtYmcgaXMtbGluayBzdHlsZT1cIm1hcmdpbi1yaWdodDo1cHg7XCI+PC9ycC1pY29uPlxuICAgICAgICA8cnAtaWNvbiBpY29uPVwicnAtcXJcIiBjaXJjbGUtYmcgaXMtbGluaz48L3JwLWljb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2xvdD1cIm1haW5cIiBjbGFzcz1cImhlcm9tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPjxpcm9uLWljb24gaWNvbj1cImdyb3VwLXdvcmtcIj48L2lyb24taWNvbj48L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzPVwibmFtZSB0ZXh0LXNlY29uZGFyeSBoMSBib2xkIG1iLTAgdGV4dC1jZW50ZXJcIj4ke3RoaXMub3JnYW5pemF0aW9uLmxhYmVsfTwvaDI+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3JwLWhlcm8taW1hZ2U+XG4gIDwvZGl2PlxuXG48L2Rpdj5cblxuYDt9Il0sInNvdXJjZVJvb3QiOiIifQ==