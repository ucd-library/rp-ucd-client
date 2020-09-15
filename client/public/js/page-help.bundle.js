(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-help"],{

/***/ "./public/elements/pages/help/rp-page-help.js":
/*!****************************************************!*\
  !*** ./public/elements/pages/help/rp-page-help.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageHelp; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_help_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-help.tpl.js */ "./public/elements/pages/help/rp-page-help.tpl.js");




class RpPageHelp extends Mixin(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"])
.with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean}
      
    }
  }

  constructor() {
    super();
    this.render = _rp_page_help_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('AppStateModel');
    
    this.boolean = false;

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

  }

}

customElements.define('rp-page-help', RpPageHelp);


/***/ }),

/***/ "./public/elements/pages/help/rp-page-help.tpl.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/help/rp-page-help.tpl.js ***!
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
  ${_styles_site_html__WEBPACK_IMPORTED_MODULE_1___default.a}
</style> 
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <h2>Accessing the Registry</h2>
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaGVscC9ycC1wYWdlLWhlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hlbHAvcnAtcGFnZS1oZWxwLnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDQzs7O0FBRzNCLCtCQUErQixzREFBVTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQU07QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1M7O0FBRTdCLG1CO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxHIiwiZmlsZSI6InBhZ2UtaGVscC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLWhlbHAudHBsLmpzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VIZWxwIGV4dGVuZHMgTWl4aW4oTGl0RWxlbWVudClcbi53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICBcbiAgICB0aGlzLmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICAgfVxuXG4gICBhc3luYyBkb1VwZGF0ZShzdGF0ZSkge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1oZWxwJywgUnBQYWdlSGVscCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IFxucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT4gXG48ZGl2IGNsYXNzPVwiaGVscCBjb250YWluZXIgdG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgPGgxPkhlbHA8L2gxPlxuICAgIDxociBjbGFzcz1cImxpZ2h0XCI+XG5cbiAgICA8ZGl2PlxuICAgICAgPGgyPkFjY2Vzc2luZyB0aGUgUmVnaXN0cnk8L2gyPlxuICAgICAgPGgyPkF1dG9tYXRlZCBQcm9maWxlIENvbnRlbnQ8L2gyPlxuICAgICAgPGgyPkVuaGFuY2luZyB5b3VyIFByb2ZpbGU8L2gyPlxuICAgICAgPGgyPkRvbid0IHNlZSB5b3VyIHF1ZXN0aW9uPzwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcblxuPC9kaXY+XG5cbmA7fSJdLCJzb3VyY2VSb290IjoiIn0=