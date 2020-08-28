(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-search"],{

/***/ "./public/elements/pages/search/rp-page-search.js":
/*!********************************************************!*\
  !*** ./public/elements/pages/search/rp-page-search.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpPageSearch; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _rp_page_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rp-page-search.tpl.js */ "./public/elements/pages/search/rp-page-search.tpl.js");
/* harmony import */ var _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/rp-utils-collection */ "./public/elements/utils/rp-utils-collection.js");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alert */ "./public/elements/components/alert.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pagination */ "./public/elements/components/pagination.js");










class RpPageSearch extends _utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"] {

  static get properties() {
    return {
    }
  }

  constructor() {
    super();
    this.render = _rp_page_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  updated(props) {
    this.doUpdated(props);

    // set primary facet
    if (props.has('mainFacet') && this.mainFacet != 'none') {
      let isRecognizedFacet = false;
      let i = 0;
      for (let option of this.CollectionModel.mainFacets) {
        i++;
        if (option.id.toLowerCase() == this.mainFacet.toLowerCase()) {
          if (option.disabled) {
            continue;
          }
          isRecognizedFacet = true
          this.mainFacetIndex = i;
          break;
        }
      }
      if (!isRecognizedFacet) {
        this.mainFacet = 'none';
        this.mainFacetIndex = 0;
      }
    }

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
    await Promise.all([this._doMainQuery()]);
  }


  getMainFacetLinks(){
    let links = [{id: 'none', text: 'All Results', href: `/search?s=${encodeURIComponent(this.textQuery)}`}]
    for (let f of this.CollectionModel.mainFacets) {
      f.href = `/search/${f.id}?s=${encodeURIComponent(this.textQuery)}`
      links.push(f)
    }
    return links
  }

}

customElements.define('rp-page-search', RpPageSearch);


/***/ }),

/***/ "./public/elements/pages/search/rp-page-search.tpl.js":
/*!************************************************************!*\
  !*** ./public/elements/pages/search/rp-page-search.tpl.js ***!
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
<div class="search-header container bg-light top">
  <div class="px-5 py-3"><h1>Search results for "${this.textQuery}"</h1></div>
  <hr>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.getMainFacetLinks()}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
    ${this._renderFacets()}
  </div>
  <div class="col-main">
    <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
      ${this.data.map(searchResult => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
        ${this._renderAssetPreview(searchResult)}
        <hr class="dotted">
        `)}
      ${this.data.length == 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="flex align-items-center justify-content-center" style="height:100%;">No search results found!</div>
      ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`;}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3JwLXBhZ2Utc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcnAtcGFnZS1zZWFyY2gudHBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7O0FBRW9COztBQUVoQztBQUNJO0FBQ0M7OztBQUd0QiwyQkFBMkIsa0VBQWlCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxrQkFBa0Isb0RBQW9ELG1DQUFtQyxFQUFFO0FBQzNHO0FBQ0EsMEJBQTBCLEtBQUssS0FBSyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNROztBQUU1QjtBQUNmLE9BQU8sZ0RBQUk7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQsMEJBQTBCLHlCQUF5QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQTJEO0FBQy9FO0FBQ0E7QUFDQSxvQkFBb0IsNkRBQTZEO0FBQ2pGO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQTREO0FBQzdGLFFBQVEsOEJBQThCLGdEQUFJO0FBQzFDLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUSx3QkFBd0IsZ0RBQUk7QUFDcEMscUZBQXFGO0FBQ3JGLFVBQVUsZ0RBQUk7QUFDZCxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InBhZ2Utc2VhcmNoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpdEVsZW1lbnQgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JwLXBhZ2Utc2VhcmNoLnRwbC5qc1wiXG5cbmltcG9ydCBScFV0aWxzQ29sbGVjdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvcnAtdXRpbHMtY29sbGVjdGlvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2FsZXJ0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlU2VhcmNoIGV4dGVuZHMgUnBVdGlsc0NvbGxlY3Rpb24ge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgdGhpcy5kb1VwZGF0ZWQocHJvcHMpO1xuXG4gICAgLy8gc2V0IHByaW1hcnkgZmFjZXRcbiAgICBpZiAocHJvcHMuaGFzKCdtYWluRmFjZXQnKSAmJiB0aGlzLm1haW5GYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIGxldCBpc1JlY29nbml6ZWRGYWNldCA9IGZhbHNlO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZiAob3B0aW9uLmlkLnRvTG93ZXJDYXNlKCkgPT0gdGhpcy5tYWluRmFjZXQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc1JlY29nbml6ZWRGYWNldCA9IHRydWVcbiAgICAgICAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1JlY29nbml6ZWRGYWNldCkge1xuICAgICAgICB0aGlzLm1haW5GYWNldCA9ICdub25lJztcbiAgICAgICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShzdGF0ZSkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5kb1VwZGF0ZShzdGF0ZSkpO1xuICB9XG5cbiAgYXN5bmMgZG9VcGRhdGUoc3RhdGUpe1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFyc2VVcmxRdWVyeShzdGF0ZSk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvTWFpblF1ZXJ5KCldKTtcbiAgfVxuXG5cbiAgZ2V0TWFpbkZhY2V0TGlua3MoKXtcbiAgICBsZXQgbGlua3MgPSBbe2lkOiAnbm9uZScsIHRleHQ6ICdBbGwgUmVzdWx0cycsIGhyZWY6IGAvc2VhcmNoP3M9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy50ZXh0UXVlcnkpfWB9XVxuICAgIGZvciAobGV0IGYgb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgZi5ocmVmID0gYC9zZWFyY2gvJHtmLmlkfT9zPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudGV4dFF1ZXJ5KX1gXG4gICAgICBsaW5rcy5wdXNoKGYpXG4gICAgfVxuICAgIHJldHVybiBsaW5rc1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC1wYWdlLXNlYXJjaCcsIFJwUGFnZVNlYXJjaCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3NpdGUuaHRtbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbnJldHVybiBodG1sYFxuXG48c3R5bGU+XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAke3N0eWxlc31cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwic2VhcmNoLWhlYWRlciBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gIDxkaXYgY2xhc3M9XCJweC01IHB5LTNcIj48aDE+U2VhcmNoIHJlc3VsdHMgZm9yIFwiJHt0aGlzLnRleHRRdWVyeX1cIjwvaDE+PC9kaXY+XG4gIDxocj5cbiAgPHJwLWxpbmstbGlzdCBjbGFzcz1cImJnLWxpZ2h0IHAtM1wiXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgY3VycmVudC1saW5rPVwiJHt0aGlzLm1haW5GYWNldEluZGV4fVwiXG4gICAgICAgICAgICAgICAgLmxpbmtzPVwiJHt0aGlzLmdldE1haW5GYWNldExpbmtzKCl9XCI+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2VhcmNoIGNvbnRhaW5lciBiZy1saWdodCBtdC0zIHBiLTNcIj5cbjxkaXYgY2xhc3M9XCJib2R5IGZsZXhcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICR7dGhpcy5fcmVuZGVyRmFjZXRzKCl9XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICA8ZGl2ID9oaWRkZW49XCIke3RoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnbG9hZGVkJyB9XCIgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBzZWFyY2ggcmVzdWx0cy48L3JwLWFsZXJ0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB9XCI+XG4gICAgICAke3RoaXMuZGF0YS5tYXAoc2VhcmNoUmVzdWx0ID0+IGh0bWxgXG4gICAgICAgICR7dGhpcy5fcmVuZGVyQXNzZXRQcmV2aWV3KHNlYXJjaFJlc3VsdCl9XG4gICAgICAgIDxociBjbGFzcz1cImRvdHRlZFwiPlxuICAgICAgICBgKX1cbiAgICAgICR7dGhpcy5kYXRhLmxlbmd0aCA9PSAwID8gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6MTAwJTtcIj5ObyBzZWFyY2ggcmVzdWx0cyBmb3VuZCE8L2Rpdj5cbiAgICAgIGAgOiBodG1sYGB9XG4gICAgICAke3RoaXMuX3JlbmRlclBhZ2luYXRpb24odGhpcy5kYXRhVG90YWwpfVxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5cblxuYDt9XG4iXSwic291cmNlUm9vdCI6IiJ9