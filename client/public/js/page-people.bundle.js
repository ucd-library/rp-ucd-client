(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-people"],{

/***/ "./public/elements/pages/people/rp-page-people.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPagePeople; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-people.tpl.js */ "./public/elements/pages/people/rp-page-people.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/person-preview */ "./public/elements/components/person-preview.js");









class RpPagePeople extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

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
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.subFacetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    console.log("peopleaggs", peopleAggs);
    this.subFacets = this.CollectionModel._getSubFacets('people', peopleAggs.payload, this.currentQuery);
  }

}

customElements.define('rp-page-people', RpPagePeople);


/***/ }),

/***/ "./public/elements/pages/people/rp-page-people.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/people/rp-page-people.tpl.js ***!
  \************************************************************/
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
<div class="collections container bg-light top">
  ${this._renderBrowseHeader('People')}
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
        <rp-alert>Error loading people.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          ${this._renderAssetPreview(person)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUVvQjs7QUFFaEM7QUFDUTs7O0FBR3pCLDJCQUEyQixrRUFBaUI7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOERBQU07O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNROztBQUU1QjtBQUNmLE9BQU8sZ0RBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHNCQUFzQiwyREFBMkQ7QUFDakY7QUFDQTtBQUNBLHNCQUFzQiw2REFBNkQ7QUFDbkY7QUFDQTtBQUNBLG1DQUFtQyw0REFBNEQ7QUFDL0YsVUFBVSx3QkFBd0IsZ0RBQUk7QUFDdEMsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6InBhZ2UtcGVvcGxlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2UtcGVvcGxlLnRwbC5qc1wiXG5cbmltcG9ydCBScFV0aWxzQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFBhZ2VQZW9wbGUgZXh0ZW5kcyBScFV0aWxzQ29sbGVjdGlvbiB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgfVxuXG4gIGFzeW5jIF9vbkFwcFN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLmRvVXBkYXRlKHN0YXRlKSk7XG4gIH1cblxuICBhc3luYyBkb1VwZGF0ZShzdGF0ZSl7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYXJzZVVybFF1ZXJ5KHN0YXRlKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkoKSwgdGhpcy5fZ2V0RmFjZXRzKCksIHRoaXMuX2dldEF6QWdnKCldKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRGYWNldHMoKSB7XG4gICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB7fTtcbiAgICBsZXQgcGVvcGxlQWdncyA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdwZW9wbGVBZ2dzJyk7XG4gICAgdGhpcy5zdWJGYWNldFN0YXR1cyA9IHBlb3BsZUFnZ3Muc3RhdGU7XG4gICAgaWYgKHBlb3BsZUFnZ3Muc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJwZW9wbGVhZ2dzXCIsIHBlb3BsZUFnZ3MpO1xuICAgIHRoaXMuc3ViRmFjZXRzID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2dldFN1YkZhY2V0cygncGVvcGxlJywgcGVvcGxlQWdncy5wYXlsb2FkLCB0aGlzLmN1cnJlbnRRdWVyeSk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtcGVvcGxlJywgUnBQYWdlUGVvcGxlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb2xsZWN0aW9ucyBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gICR7dGhpcy5fcmVuZGVyQnJvd3NlSGVhZGVyKCdQZW9wbGUnKX1cbiAgPGhyIGNsYXNzPVwibWItMFwiPlxuICA8ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJGYWNldHMoKX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdlcnJvcicgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGluZycgfHwgdGhpcy5kYXRhU3RhdHVzID09ICdsb2FkZWQnIH1cIiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgcGVvcGxlLjwvcnAtYWxlcnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAgICR7dGhpcy5kYXRhLm1hcChwZXJzb24gPT4gaHRtbGBcbiAgICAgICAgICAke3RoaXMuX3JlbmRlckFzc2V0UHJldmlldyhwZXJzb24pfVxuICAgICAgICAgIDxociBjbGFzcz1cImRvdHRlZFwiPlxuICAgICAgICAgIGApfVxuICAgICAgICAke3RoaXMuX3JlbmRlclBhZ2luYXRpb24odGhpcy5kYXRhVG90YWwpfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuYDt9XG4iXSwic291cmNlUm9vdCI6IiJ9