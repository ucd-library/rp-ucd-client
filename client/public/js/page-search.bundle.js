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










class RpPageSearch extends Mixin(_utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      visible: {type: Boolean},
      mainFacet: {type: String},
      mainFacetIndex: {type: Number},
      textQuery: {type: String},
      data: {type: Array},
      dataStatus: {type: String},
      dataTotal: {type: Number},
      peopleWidth: {type: Number},
    }
  }

  constructor() {
    super();
    this.render = _rp_page_search_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);
    this._injectModel('CollectionModel', 'AppStateModel');
    this.mainFacet = 'none';
    this.mainFacetIndex = 0;
    this.textQuery = '';
    this.data = [];
    this.dataStatus = 'loading';
    this.dataTotal = 0;
    this.setPeopleWidth(window.innerWidth);


    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  updated(props) {

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

    if (props.has('visible') && this.visible ) {
      requestAnimationFrame( () => this._handleResize());
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
  }

  async _onAppStateUpdate(state) {
    let path = state.location.path;
    let query = state.location.query;
    if (path.length >= 2) {
      this.mainFacet = path[1].toLowerCase();
    }
    if (query.s) {
      this.textQuery = query.s;
    }

    let q = {...this._parseUrlQuery()};
    console.log("q", q);
    //await this.update
    await Promise.all([this._doMainQuery(q)]);
  }

  async _doMainQuery(q){
    let data = await this.CollectionModel.query(q);
    this.dataStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.dataTotal = data.payload.total;
    this.data = data.payload.results;
    console.log(data);
  }

  _handleResize() {
    if (!this.visible) return;
    let w = window.innerWidth;
    this.setPeopleWidth(w);
  }

  setPeopleWidth(w) {
    let pw = 250;
    let avatarWidth = 82;
    let screenPadding = 30;
    pw = (w - screenPadding) * .7 - avatarWidth - 40;
    this.peopleWidth = Math.floor(pw);
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
                .links="${[...[{id: 'none', text: 'All Results'}], ...this.CollectionModel.mainFacets]}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
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


/***/ }),

/***/ "./public/elements/utils/rp-utils-collection.js":
/*!******************************************************!*\
  !*** ./public/elements/utils/rp-utils-collection.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RpUtilsCollection; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./public/node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_a_z__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/a-z */ "./public/elements/components/a-z.js");
/* harmony import */ var _components_link_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/link-list */ "./public/elements/components/link-list.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pagination */ "./public/elements/components/pagination.js");
/* harmony import */ var _components_person_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/person-preview */ "./public/elements/components/person-preview.js");







class RpUtilsCollection extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azDisabled: {type: Array},
      pgPer: {type: parseInt},
      pgCurrent: {type: parseInt},
      urlQuery: {type: Object},
      jsonldContext: {type: String}
    }
  }

  constructor() {
    super();
    this.hasAz = false;
    this.hasPagination = false;
    this.azSelected = 'All';
    this.azDisabled = [];
    this.pgPer = 8;
    this.pgCurrent = 1;
    this.urlQuery = {};
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
  }

  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let q = {...this.urlQuery};
    if (!q.filters) {
      q.filters = {};
    }
    if (q.s && q.filters["@type"]) {
      q.filters = {};
    }
    console.log(q);
    console.log("User action:", action);

    // handle az
    if (action == 'az') {
      return;
    }

    // handle pagination
    if (action == 'pagination' && this.hasPagination) {
      this.pgCurrent = args[0];
      q.offset = this.pgCurrent * this.urlQuery.limit - this.urlQuery.limit;
    }

    // handle facets
    if (action.startsWith('facet_')) {
      if (args[0].filters) {
        q.filters = {...q.filters, ...args[0].filters}
      }
      else {
        let f = action.slice('facet_'.length, );
        if (q.filters[f]) {
          delete q.filters[f];
        }
      }
      q.offset = 0;
    }

    // construct new url and redirect
    let p = "";
    if (this.AppStateModel) {
      p = "/" + this.AppStateModel.store.data.location.path.join("/")
    }

    p = p + this._urlEncode(q)
    //console.log(p);
    //return;
    this.AppStateModel.setLocation(p);
  }

  _renderBrowseHeader(title, Azselected) {
    this.hasAz = true;
    if (Azselected) {
      this.azSelected = Azselected;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${title}</h1>
      </div>
      <div class="col-main">
        <rp-a-z selected-letter="${this.azSelected}"
                .disabled-letters="${this.azDisabled}"
                @changed-letter=${e => this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `;
  }

  _renderFacets(facets) {
    if (!facets) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${facets.map(facet => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-link-list has-header-link
                    .links='${facet.values}'
                    current-link='${facet.activeIndex}'
                    @changed-link="${e => this._onUserAction('facet_' + facet.id, e.target.links[e.target.currentLink])}">
      </rp-link-list>
      `)}
    `
  }

  _renderAssetPreview(data) {
    let assetType = this._getAssetType(data);

    if (assetType == 'person') {
      let person = this.CollectionModel._formatPerson(data);
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <rp-person-preview
        name="${person.name}"
        href="${"/individual/" + person.id}"
        title="${person.title}"
        text-width="${this.peopleWidth}"
        class="my-3">
      </rp-person-preview>
      `;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``

  }

  _getAssetType(data) {
    if (!data['@type']) {
      return;
    }
    if (typeof data['@type'] === 'string') {
      data['@type'] = [data['@type']];
    }
    if ( !Array.isArray(data['@type']) ) {
      return;
    }

    if (data['@type'].includes(this.jsonldContext + ":person")) {
      return "person";
    }

    return;
  }


  _renderPagination(totalResults) {
    if (!totalResults || !this.urlQuery) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.urlQuery.limit);
    this.pgCurrent = Math.ceil((this.urlQuery.offset + 1) / this.urlQuery.limit)
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <rp-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `
  }

  _parseUrlQuery(){
    // read url args, construct search query
    let q = {};
    if (this.AppStateModel) {
      let query = this.AppStateModel.store.data.location.query;
      for (let arg in query) {
        if (arg == 's') {
          q[arg] = query[arg];
          continue;
        }
        q[arg] = JSON.parse(query[arg]);
      }
    }

    //get main facet from search
    if (this.mainFacet) {
      let mainFacet = {};
      for (let f of this.CollectionModel.mainFacets) {
        if (this.mainFacet.toLowerCase() == f.id.toLowerCase() ) {
          mainFacet = f.baseFilter;
          break;
        }

      }
      q.filters = {...q.filters, ...mainFacet};
    }

    if (!q.limit) {
      q.limit = this.pgPer;
    }
    if (!q.offset) {
      q.offset = 0;
    }
    this.urlQuery = q;
    return q;
  }

  _urlEncode(obj) {
    let str = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        if (p == 'offset' && obj[p] == 0) {
          continue;
        }
        if (p == 'filters' && Object.keys(obj[p]).length == 0) {
          continue;
        }
        if (p == 'limit') {
          continue;
        }
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent( JSON.stringify(obj[p]) ));
      }
    if (!str.length) {
      return ""
    }
    return "?" + str.join("&");
  }

}

customElements.define('rp-utils-collection', RpUtilsCollection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvc2VhcmNoL3JwLXBhZ2Utc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9zZWFyY2gvcnAtcGFnZS1zZWFyY2gudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0c7O0FBRW9COztBQUVoQztBQUNJO0FBQ0M7OztBQUd0QixpQ0FBaUMsa0VBQWlCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QixrQkFBa0IsYUFBYTtBQUMvQix1QkFBdUIsYUFBYTtBQUNwQyxrQkFBa0IsYUFBYTtBQUMvQixhQUFhLFlBQVk7QUFDekIsbUJBQW1CLGFBQWE7QUFDaEMsa0JBQWtCLGFBQWE7QUFDL0Isb0JBQW9CLGFBQWE7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwYWdlLXNlYXJjaC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLXNlYXJjaC50cGwuanNcIlxuXG5pbXBvcnQgUnBVdGlsc0NvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3JwLXV0aWxzLWNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZVNlYXJjaCBleHRlbmRzIE1peGluKFJwVXRpbHNDb2xsZWN0aW9uKVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGU6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIG1haW5GYWNldDoge3R5cGU6IFN0cmluZ30sXG4gICAgICBtYWluRmFjZXRJbmRleDoge3R5cGU6IE51bWJlcn0sXG4gICAgICB0ZXh0UXVlcnk6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YToge3R5cGU6IEFycmF5fSxcbiAgICAgIGRhdGFTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZGF0YVRvdGFsOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogTnVtYmVyfSxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5tYWluRmFjZXQgPSAnbm9uZSc7XG4gICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG4gICAgdGhpcy50ZXh0UXVlcnkgPSAnJztcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG5cbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuZ2V0KCkudGhlbihlID0+IHRoaXMuX29uQXBwU3RhdGVVcGRhdGUoZSkpO1xuICB9XG5cbiAgdXBkYXRlZChwcm9wcykge1xuXG4gICAgLy8gc2V0IHByaW1hcnkgZmFjZXRcbiAgICBpZiAocHJvcHMuaGFzKCdtYWluRmFjZXQnKSAmJiB0aGlzLm1haW5GYWNldCAhPSAnbm9uZScpIHtcbiAgICAgIGxldCBpc1JlY29nbml6ZWRGYWNldCA9IGZhbHNlO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBpZiAob3B0aW9uLmlkLnRvTG93ZXJDYXNlKCkgPT0gdGhpcy5tYWluRmFjZXQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc1JlY29nbml6ZWRGYWNldCA9IHRydWVcbiAgICAgICAgICB0aGlzLm1haW5GYWNldEluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1JlY29nbml6ZWRGYWNldCkge1xuICAgICAgICB0aGlzLm1haW5GYWNldCA9ICdub25lJztcbiAgICAgICAgdGhpcy5tYWluRmFjZXRJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgICBsZXQgcGF0aCA9IHN0YXRlLmxvY2F0aW9uLnBhdGg7XG4gICAgbGV0IHF1ZXJ5ID0gc3RhdGUubG9jYXRpb24ucXVlcnk7XG4gICAgaWYgKHBhdGgubGVuZ3RoID49IDIpIHtcbiAgICAgIHRoaXMubWFpbkZhY2V0ID0gcGF0aFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBpZiAocXVlcnkucykge1xuICAgICAgdGhpcy50ZXh0UXVlcnkgPSBxdWVyeS5zO1xuICAgIH1cblxuICAgIGxldCBxID0gey4uLnRoaXMuX3BhcnNlVXJsUXVlcnkoKX07XG4gICAgY29uc29sZS5sb2coXCJxXCIsIHEpO1xuICAgIC8vYXdhaXQgdGhpcy51cGRhdGVcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9NYWluUXVlcnkocSldKTtcbiAgfVxuXG4gIGFzeW5jIF9kb01haW5RdWVyeShxKXtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLnF1ZXJ5KHEpO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2Utc2VhcmNoJywgUnBQYWdlU2VhcmNoKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJzZWFyY2gtaGVhZGVyIGNvbnRhaW5lciBiZy1saWdodCB0b3BcIj5cbiAgPGRpdiBjbGFzcz1cInB4LTUgcHktM1wiPjxoMT5TZWFyY2ggcmVzdWx0cyBmb3IgXCIke3RoaXMudGV4dFF1ZXJ5fVwiPC9oMT48L2Rpdj5cbiAgPGhyPlxuICA8cnAtbGluay1saXN0IGNsYXNzPVwiYmctbGlnaHQgcC0zXCJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9XCIke3RoaXMubWFpbkZhY2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICAubGlua3M9XCIke1suLi5be2lkOiAnbm9uZScsIHRleHQ6ICdBbGwgUmVzdWx0cyd9XSwgLi4udGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0c119XCI+XG4gIDwvcnAtbGluay1saXN0PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2VhcmNoIGNvbnRhaW5lciBiZy1saWdodCBtdC0zIHBiLTNcIj5cbjxkaXYgY2xhc3M9XCJib2R5IGZsZXhcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmcxXCI+bG9hZGluZzwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPHJwLWFsZXJ0PkVycm9yIGxvYWRpbmcgcGVvcGxlLjwvcnAtYWxlcnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICR7dGhpcy5kYXRhLm1hcChwZXJzb24gPT4gaHRtbGBcbiAgICAgICAgJHt0aGlzLl9yZW5kZXJBc3NldFByZXZpZXcocGVyc29uKX1cbiAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgIGApfVxuICAgICAgJHt0aGlzLl9yZW5kZXJQYWdpbmF0aW9uKHRoaXMuZGF0YVRvdGFsKX1cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5cbmA7fVxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9hLXpcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbGluay1saXN0XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgdXJsUXVlcnk6IHt0eXBlOiBPYmplY3R9LFxuICAgICAganNvbmxkQ29udGV4dDoge3R5cGU6IFN0cmluZ31cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFzQXogPSBmYWxzZTtcbiAgICB0aGlzLmhhc1BhZ2luYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmF6U2VsZWN0ZWQgPSAnQWxsJztcbiAgICB0aGlzLmF6RGlzYWJsZWQgPSBbXTtcbiAgICB0aGlzLnBnUGVyID0gODtcbiAgICB0aGlzLnBnQ3VycmVudCA9IDE7XG4gICAgdGhpcy51cmxRdWVyeSA9IHt9O1xuICAgIHRoaXMuanNvbmxkQ29udGV4dCA9IEFQUF9DT05GSUcuZGF0YS5qc29ubGRDb250ZXh0O1xuICB9XG5cbiAgX29uVXNlckFjdGlvbihhY3Rpb24sIC4uLmFyZ3MpIHtcbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcSA9IHsuLi50aGlzLnVybFF1ZXJ5fTtcbiAgICBpZiAoIXEuZmlsdGVycykge1xuICAgICAgcS5maWx0ZXJzID0ge307XG4gICAgfVxuICAgIGlmIChxLnMgJiYgcS5maWx0ZXJzW1wiQHR5cGVcIl0pIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhxKTtcbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWN0aW9uOlwiLCBhY3Rpb24pO1xuXG4gICAgLy8gaGFuZGxlIGF6XG4gICAgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb25cbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMucGdDdXJyZW50ID0gYXJnc1swXTtcbiAgICAgIHEub2Zmc2V0ID0gdGhpcy5wZ0N1cnJlbnQgKiB0aGlzLnVybFF1ZXJ5LmxpbWl0IC0gdGhpcy51cmxRdWVyeS5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgZmFjZXRzXG4gICAgaWYgKGFjdGlvbi5zdGFydHNXaXRoKCdmYWNldF8nKSkge1xuICAgICAgaWYgKGFyZ3NbMF0uZmlsdGVycykge1xuICAgICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5hcmdzWzBdLmZpbHRlcnN9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGYgPSBhY3Rpb24uc2xpY2UoJ2ZhY2V0XycubGVuZ3RoLCApO1xuICAgICAgICBpZiAocS5maWx0ZXJzW2ZdKSB7XG4gICAgICAgICAgZGVsZXRlIHEuZmlsdGVyc1tmXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdCBuZXcgdXJsIGFuZCByZWRpcmVjdFxuICAgIGxldCBwID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBwID0gXCIvXCIgKyB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5wYXRoLmpvaW4oXCIvXCIpXG4gICAgfVxuXG4gICAgcCA9IHAgKyB0aGlzLl91cmxFbmNvZGUocSlcbiAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgIC8vcmV0dXJuO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwKTtcbiAgfVxuXG4gIF9yZW5kZXJCcm93c2VIZWFkZXIodGl0bGUsIEF6c2VsZWN0ZWQpIHtcbiAgICB0aGlzLmhhc0F6ID0gdHJ1ZTtcbiAgICBpZiAoQXpzZWxlY3RlZCkge1xuICAgICAgdGhpcy5helNlbGVjdGVkID0gQXpzZWxlY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBmbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHNcIj5cbiAgICAgICAgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tYWluXCI+XG4gICAgICAgIDxycC1hLXogc2VsZWN0ZWQtbGV0dGVyPVwiJHt0aGlzLmF6U2VsZWN0ZWR9XCJcbiAgICAgICAgICAgICAgICAuZGlzYWJsZWQtbGV0dGVycz1cIiR7dGhpcy5hekRpc2FibGVkfVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZWQtbGV0dGVyPSR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJhelwiKX0+PC9ycC1hLXo+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgX3JlbmRlckZhY2V0cyhmYWNldHMpIHtcbiAgICBpZiAoIWZhY2V0cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgJHtmYWNldHMubWFwKGZhY2V0ID0+IGh0bWxgXG4gICAgICA8cnAtbGluay1saXN0IGhhcy1oZWFkZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAubGlua3M9JyR7ZmFjZXQudmFsdWVzfSdcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC1saW5rPScke2ZhY2V0LmFjdGl2ZUluZGV4fSdcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtbGluaz1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oJ2ZhY2V0XycgKyBmYWNldC5pZCwgZS50YXJnZXQubGlua3NbZS50YXJnZXQuY3VycmVudExpbmtdKX1cIj5cbiAgICAgIDwvcnAtbGluay1saXN0PlxuICAgICAgYCl9XG4gICAgYFxuICB9XG5cbiAgX3JlbmRlckFzc2V0UHJldmlldyhkYXRhKSB7XG4gICAgbGV0IGFzc2V0VHlwZSA9IHRoaXMuX2dldEFzc2V0VHlwZShkYXRhKTtcblxuICAgIGlmIChhc3NldFR5cGUgPT0gJ3BlcnNvbicpIHtcbiAgICAgIGxldCBwZXJzb24gPSB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVyc29uKGRhdGEpO1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cnAtcGVyc29uLXByZXZpZXdcbiAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgaHJlZj1cIiR7XCIvaW5kaXZpZHVhbC9cIiArIHBlcnNvbi5pZH1cIlxuICAgICAgICB0aXRsZT1cIiR7cGVyc29uLnRpdGxlfVwiXG4gICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgY2xhc3M9XCJteS0zXCI+XG4gICAgICA8L3JwLXBlcnNvbi1wcmV2aWV3PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBgXG5cbiAgfVxuXG4gIF9nZXRBc3NldFR5cGUoZGF0YSkge1xuICAgIGlmICghZGF0YVsnQHR5cGUnXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGFbJ0B0eXBlJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhWydAdHlwZSddID0gW2RhdGFbJ0B0eXBlJ11dO1xuICAgIH1cbiAgICBpZiAoICFBcnJheS5pc0FycmF5KGRhdGFbJ0B0eXBlJ10pICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhWydAdHlwZSddLmluY2x1ZGVzKHRoaXMuanNvbmxkQ29udGV4dCArIFwiOnBlcnNvblwiKSkge1xuICAgICAgcmV0dXJuIFwicGVyc29uXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cyB8fCAhdGhpcy51cmxRdWVyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KTtcbiAgICB0aGlzLnBnQ3VycmVudCA9IE1hdGguY2VpbCgodGhpcy51cmxRdWVyeS5vZmZzZXQgKyAxKSAvIHRoaXMudXJsUXVlcnkubGltaXQpXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeSgpe1xuICAgIC8vIHJlYWQgdXJsIGFyZ3MsIGNvbnN0cnVjdCBzZWFyY2ggcXVlcnlcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIGxldCBxdWVyeSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnF1ZXJ5O1xuICAgICAgZm9yIChsZXQgYXJnIGluIHF1ZXJ5KSB7XG4gICAgICAgIGlmIChhcmcgPT0gJ3MnKSB7XG4gICAgICAgICAgcVthcmddID0gcXVlcnlbYXJnXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBxW2FyZ10gPSBKU09OLnBhcnNlKHF1ZXJ5W2FyZ10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZ2V0IG1haW4gZmFjZXQgZnJvbSBzZWFyY2hcbiAgICBpZiAodGhpcy5tYWluRmFjZXQpIHtcbiAgICAgIGxldCBtYWluRmFjZXQgPSB7fTtcbiAgICAgIGZvciAobGV0IGYgb2YgdGhpcy5Db2xsZWN0aW9uTW9kZWwubWFpbkZhY2V0cykge1xuICAgICAgICBpZiAodGhpcy5tYWluRmFjZXQudG9Mb3dlckNhc2UoKSA9PSBmLmlkLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICAgICAgbWFpbkZhY2V0ID0gZi5iYXNlRmlsdGVyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIHEuZmlsdGVycyA9IHsuLi5xLmZpbHRlcnMsIC4uLm1haW5GYWNldH07XG4gICAgfVxuXG4gICAgaWYgKCFxLmxpbWl0KSB7XG4gICAgICBxLmxpbWl0ID0gdGhpcy5wZ1BlcjtcbiAgICB9XG4gICAgaWYgKCFxLm9mZnNldCkge1xuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnVybFF1ZXJ5ID0gcTtcbiAgICByZXR1cm4gcTtcbiAgfVxuXG4gIF91cmxFbmNvZGUob2JqKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGZvciAobGV0IHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgICAgfVxuICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==