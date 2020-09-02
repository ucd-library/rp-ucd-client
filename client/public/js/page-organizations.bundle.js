(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-organizations"],{

/***/ "./public/elements/pages/organizations/rp-page-organizations.js":
/*!**********************************************************************!*\
  !*** ./public/elements/pages/organizations/rp-page-organizations.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageOrganizations; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_organizations_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-organizations.tpl.js */ "./public/elements/pages/organizations/rp-page-organizations.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");









class RpPageOrganizations extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = _rp_page_organizations_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

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
    let facetAggs = await this.CollectionModel.overview('organizationsAggs');
    this.subFacetStatus = facetAggs.state;
    if (facetAggs.state != 'loaded') {
      return;
    }
    this.subFacets = this.CollectionModel._getSubFacets('organizations', facetAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-organizations', RpPageOrganizations);


/***/ }),

/***/ "./public/elements/pages/organizations/rp-page-organizations.tpl.js":
/*!**************************************************************************!*\
  !*** ./public/elements/pages/organizations/rp-page-organizations.tpl.js ***!
  \**************************************************************************/
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
<div class="collections organizations container bg-light top">
  ${this._renderBrowseHeader('Organizations')}
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
        <rp-alert>Error loading organizations.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map(org => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          ${this._renderAssetPreview(org)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvb3JnYW5pemF0aW9ucy9ycC1wYWdlLW9yZ2FuaXphdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2VsZW1lbnRzL3BhZ2VzL29yZ2FuaXphdGlvbnMvcnAtcGFnZS1vcmdhbml6YXRpb25zLnRwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDZ0I7O0FBRWE7O0FBRWhDO0FBQ1E7OztBQUd6QixrQ0FBa0Msa0VBQWlCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1E7O0FBRTVCO0FBQ2YsT0FBTyxnREFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQU07QUFDVjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0Esc0JBQXNCLDJEQUEyRDtBQUNqRjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUE2RDtBQUNuRjtBQUNBO0FBQ0EsbUNBQW1DLDREQUE0RDtBQUMvRixVQUFVLHFCQUFxQixnREFBSTtBQUNuQyxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoicGFnZS1vcmdhbml6YXRpb25zLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2Utb3JnYW5pemF0aW9ucy50cGwuanNcIlxuXG5pbXBvcnQgUnBVdGlsc0NvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3JwLXV0aWxzLWNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlT3JnYW5pemF0aW9ucyBleHRlbmRzIFJwVXRpbHNDb2xsZWN0aW9uIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMuZG9VcGRhdGUoc3RhdGUpKTtcbiAgfVxuXG4gIGFzeW5jIGRvVXBkYXRlKHN0YXRlKXtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhcnNlVXJsUXVlcnkoc3RhdGUpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLl9kb01haW5RdWVyeSgpLCB0aGlzLl9nZXRGYWNldHMoKSwgdGhpcy5fZ2V0QXpBZ2coKV0pO1xuICB9XG5cbiAgYXN5bmMgX2dldEZhY2V0cygpIHtcbiAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHt9O1xuICAgIGxldCBmYWNldEFnZ3MgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5vdmVydmlldygnb3JnYW5pemF0aW9uc0FnZ3MnKTtcbiAgICB0aGlzLnN1YkZhY2V0U3RhdHVzID0gZmFjZXRBZ2dzLnN0YXRlO1xuICAgIGlmIChmYWNldEFnZ3Muc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWJGYWNldHMgPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZ2V0U3ViRmFjZXRzKCdvcmdhbml6YXRpb25zJywgZmFjZXRBZ2dzLnBheWxvYWQsIHRoaXMuY3VycmVudFF1ZXJ5KTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1vcmdhbml6YXRpb25zJywgUnBQYWdlT3JnYW5pemF0aW9ucyk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29sbGVjdGlvbnMgb3JnYW5pemF0aW9ucyBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gICR7dGhpcy5fcmVuZGVyQnJvd3NlSGVhZGVyKCdPcmdhbml6YXRpb25zJyl9XG4gIDxociBjbGFzcz1cIm1iLTBcIj5cbiAgPGRpdiBjbGFzcz1cImJvZHkgZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzIG10LTNcIj5cbiAgICAgICR7dGhpcy5fcmVuZGVyRmFjZXRzKCl9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nMVwiPmxvYWRpbmc8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxycC1hbGVydD5FcnJvciBsb2FkaW5nIG9yZ2FuaXphdGlvbnMuPC9ycC1hbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHt0aGlzLmRhdGEubWFwKG9yZyA9PiBodG1sYFxuICAgICAgICAgICR7dGhpcy5fcmVuZGVyQXNzZXRQcmV2aWV3KG9yZyl9XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiJdLCJzb3VyY2VSb290IjoiIn0=