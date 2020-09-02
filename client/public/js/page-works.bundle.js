(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-works"],{

/***/ "./public/elements/pages/works/rp-page-works.js":
/*!******************************************************!*\
  !*** ./public/elements/pages/works/rp-page-works.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageWorks; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_works_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-works.tpl.js */ "./public/elements/pages/works/rp-page-works.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");









class RpPageWorks extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = _rp_page_works_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets(), this._getAzAgg()]);
  }

  async _getFacets() {
    let activeFilters = {};
    let facetAggs = await this.CollectionModel.overview('worksAggs');
    this.subFacetStatus = facetAggs.state;
    if (facetAggs.state != 'loaded') {
      return;
    }
    //console.log("peopleaggs", peopleAggs);
    this.subFacets = this.CollectionModel._getSubFacets('works', facetAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-works', RpPageWorks);


/***/ }),

/***/ "./public/elements/pages/works/rp-page-works.tpl.js":
/*!**********************************************************!*\
  !*** ./public/elements/pages/works/rp-page-works.tpl.js ***!
  \**********************************************************/
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
<div class="collections works container bg-light top">
  ${this._renderBrowseHeader('Works')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading works.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map(work => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          ${this._renderAssetPreview(work)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvd29ya3MvcnAtcGFnZS13b3Jrcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvd29ya3MvcnAtcGFnZS13b3Jrcy50cGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRXFCOztBQUVoQztBQUNROzs7QUFHekIsMEJBQTBCLGtFQUFpQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2REFBTTs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRTVCO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esc0JBQXNCLDJEQUEyRDtBQUNqRjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUE2RDtBQUNuRjtBQUNBO0FBQ0EsbUNBQW1DLDREQUE0RDtBQUMvRixVQUFVLHNCQUFzQixnREFBSTtBQUNwQyxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoicGFnZS13b3Jrcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLXdvcmtzLnRwbC5qc1wiXG5cbmltcG9ydCBScFV0aWxzQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VXb3JrcyBleHRlbmRzIFJwVXRpbHNDb2xsZWN0aW9uIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgfVxuXG4gIGFzeW5jIGRvVXBkYXRlKHN0YXRlKXtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhcnNlVXJsUXVlcnkoc3RhdGUpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLl9kb01haW5RdWVyeSgpLCB0aGlzLl9nZXRGYWNldHMoKSwgdGhpcy5fZ2V0QXpBZ2coKV0pO1xuICB9XG5cbiAgYXN5bmMgX2dldEZhY2V0cygpIHtcbiAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHt9O1xuICAgIGxldCBmYWNldEFnZ3MgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnd29ya3NBZ2dzJyk7XG4gICAgdGhpcy5zdWJGYWNldFN0YXR1cyA9IGZhY2V0QWdncy5zdGF0ZTtcbiAgICBpZiAoZmFjZXRBZ2dzLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJwZW9wbGVhZ2dzXCIsIHBlb3BsZUFnZ3MpO1xuICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cygnd29ya3MnLCBmYWNldEFnZ3MucGF5bG9hZCwgdGhpcy5jdXJyZW50UXVlcnkpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLXdvcmtzJywgUnBQYWdlV29ya3MpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImNvbGxlY3Rpb25zIHdvcmtzIGNvbnRhaW5lciBiZy1saWdodCB0b3BcIj5cbiAgJHt0aGlzLl9yZW5kZXJCcm93c2VIZWFkZXIoJ1dvcmtzJyl9XG4gIDxociBjbGFzcz1cIm1iLTBcIj5cbiAgPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzIG10LTNcIj5cbiAgICAgICR7dGhpcy5fcmVuZGVyRmFjZXRzKCl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIHdvcmtzLjwvcnAtYWxlcnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAgICR7dGhpcy5kYXRhLm1hcCh3b3JrID0+IGh0bWxgXG4gICAgICAgICAgJHt0aGlzLl9yZW5kZXJBc3NldFByZXZpZXcod29yayl9XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=