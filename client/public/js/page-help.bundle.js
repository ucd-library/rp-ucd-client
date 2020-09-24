(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-help"],{

/***/ "./public/elements/components/accordian.js":
/*!*************************************************!*\
  !*** ./public/elements/components/accordian.js ***!
  \*************************************************/
/*! exports provided: RpAccordian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpAccordian", function() { return RpAccordian; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _accordian_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordian.tpl.js */ "./public/elements/components/accordian.tpl.js");



class RpAccordian extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
  return {
    title: {type: String},
    expanded: {type: Boolean, reflect: true}
  };
  }

  constructor() {
    super();
    this.render = _accordian_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this.expanded = false;
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  toggle(){
    this.expanded = !this.expanded;
  }
}

customElements.define('rp-accordian', RpAccordian);


/***/ }),

/***/ "./public/elements/components/accordian.tpl.js":
/*!*****************************************************!*\
  !*** ./public/elements/components/accordian.tpl.js ***!
  \*****************************************************/
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
    }
    [hidden] {
      display: none !important;
    }
    iron-icon {
      color: var(--tcolor-secondary);
      width: 24px;
      height: 24px;
      transition: .3s;
    }
    iron-icon[rotated] {
      transform: rotate(-90deg);
    }
    #container-title {
      cursor: pointer;
      display: flex;
    }
    #title:hover {
      color: var(--tcolor-link-hover-text);
    }
    #title {
      color: var(--tcolor-link-text);
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size);
    }
    #content {
      padding-left: 24px;
      font-size: var(--font-size);
      margin-top: 14px;
    }
  </style>
  <div class="container ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])(this.constructClasses())}" ?hidden="${!this.title}">
    <div id="container-title" @click="${this.toggle}">
      <iron-icon icon="arrow-drop-down" ?rotated="${!this.expanded}"></iron-icon>
      <span id="title">${this.title}</span>
    </div>
    <div id="content" ?hidden="${!this.expanded}">
      <slot></slot>
    </div>
  </div>
  `;
}


/***/ }),

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
/* harmony import */ var _components_accordian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/accordian */ "./public/elements/components/accordian.js");






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
      <rp-accordian title="How do I add a question to the FAQ?">
        <span>By using this <a href="https://docs.google.com/document/d/1k1QGlfleY08J-fZSiN5zZXx1juTxlhXOUlTvEqXaIDM/edit">Google Doc</a></span>
      </rp-accordian>
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`;}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvY29tcG9uZW50cy9hY2NvcmRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL2NvbXBvbmVudHMvYWNjb3JkaWFuLnRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvaGVscC9ycC1wYWdlLWhlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL2hlbHAvcnAtcGFnZS1oZWxwLnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDUDs7QUFFakMsMEJBQTBCLHNEQUFVO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix5REFBTTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ3NCOztBQUUxQztBQUNmLFNBQVMsZ0RBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBUSwwQkFBMEIsYUFBYSxZQUFZO0FBQ3JGLHdDQUF3QyxZQUFZO0FBQ3BELG9EQUFvRCxlQUFlO0FBQ25FLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0M7O0FBRU47OztBQUdyQiwrQkFBK0Isc0RBQVU7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDREQUFNO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUU3QixtQjtBQUNmLE9BQU8sZ0RBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsRyIsImZpbGUiOiJwYWdlLWhlbHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9hY2NvcmRpYW4udHBsLmpzJztcblxuZXhwb3J0IGNsYXNzIFJwQWNjb3JkaWFuIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZ30sXG4gICAgZXhwYW5kZWQ6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfVxuICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdENsYXNzZXMoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSB7fTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHRvZ2dsZSgpe1xuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLWFjY29yZGlhbicsIFJwQWNjb3JkaWFuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJ2xpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICByZXR1cm4gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBbaGlkZGVuXSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlyb24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdGNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB9XG4gICAgaXJvbi1pY29uW3JvdGF0ZWRdIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgICNjb250YWluZXItdGl0bGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgI3RpdGxlOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay1ob3Zlci10ZXh0KTtcbiAgICB9XG4gICAgI3RpdGxlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10Y29sb3ItbGluay10ZXh0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB9XG4gICAgI2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgJHtjbGFzc01hcCh0aGlzLmNvbnN0cnVjdENsYXNzZXMoKSl9XCIgP2hpZGRlbj1cIiR7IXRoaXMudGl0bGV9XCI+XG4gICAgPGRpdiBpZD1cImNvbnRhaW5lci10aXRsZVwiIEBjbGljaz1cIiR7dGhpcy50b2dnbGV9XCI+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJhcnJvdy1kcm9wLWRvd25cIiA/cm90YXRlZD1cIiR7IXRoaXMuZXhwYW5kZWR9XCI+PC9pcm9uLWljb24+XG4gICAgICA8c3BhbiBpZD1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiY29udGVudFwiID9oaWRkZW49XCIkeyF0aGlzLmV4cGFuZGVkfVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtaGVscC50cGwuanNcIlxuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FjY29yZGlhblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZUhlbHAgZXh0ZW5kcyBNaXhpbihMaXRFbGVtZW50KVxuLndpdGgoTGl0Q29ya1V0aWxzKSB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQXBwU3RhdGVNb2RlbCcpO1xuICAgIFxuICAgIHRoaXMuYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLmRvVXBkYXRlKHN0YXRlKSk7XG4gICB9XG5cbiAgIGFzeW5jIGRvVXBkYXRlKHN0YXRlKSB7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLWhlbHAnLCBScFBhZ2VIZWxwKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHsgXG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPiBcbjxkaXYgY2xhc3M9XCJoZWxwIGNvbnRhaW5lciB0b3BcIj5cbiAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICA8aDE+SGVscDwvaDE+XG4gICAgPGhyIGNsYXNzPVwibGlnaHRcIj5cblxuICAgIDxkaXY+XG4gICAgICA8aDI+QWNjZXNzaW5nIHRoZSBSZWdpc3RyeTwvaDI+XG4gICAgICA8cnAtYWNjb3JkaWFuIHRpdGxlPVwiSG93IGRvIEkgYWRkIGEgcXVlc3Rpb24gdG8gdGhlIEZBUT9cIj5cbiAgICAgICAgPHNwYW4+QnkgdXNpbmcgdGhpcyA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xazFRR2xmbGVZMDhKLWZaU2lONXpaWHgxanVUeGxoWE9VbFR2RXFYYUlETS9lZGl0XCI+R29vZ2xlIERvYzwvYT48L3NwYW4+XG4gICAgICA8L3JwLWFjY29yZGlhbj5cbiAgICAgIDxoMj5BdXRvbWF0ZWQgUHJvZmlsZSBDb250ZW50PC9oMj5cbiAgICAgIDxoMj5FbmhhbmNpbmcgeW91ciBQcm9maWxlPC9oMj5cbiAgICAgIDxoMj5Eb24ndCBzZWUgeW91ciBxdWVzdGlvbj88L2gyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG5cbjwvZGl2PlxuXG5gO30iXSwic291cmNlUm9vdCI6IiJ9