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









class RpPagePeople extends Mixin(_utils_rp_utils_collection__WEBPACK_IMPORTED_MODULE_2__["default"])
  .with(LitCorkUtils) {

  static get properties() {
    return {
      filtersDefault: {type: Object},
      sortDefault: {type: Array},
      dataStatus: {type: String},
      data: {type: Array},
      dataMax: {type: parseInt},
      peopleWidth: {type: parseInt},
      visible: {type: Boolean},
      facetStatus: {type: String},
      facets: {type: Array}
    }
  }

  constructor() {
    super();
    this.render = _rp_page_people_tpl_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this);

    this._injectModel('CollectionModel', 'AppStateModel');
    this.filtersDefault = {"@type": {"type": "keyword", "op": "and", "value": [APP_CONFIG.data.jsonldContext + ":person"]}};
    this.sortDefault = [{"label": "asc"}];
    this.dataStatus = 'loading';
    this.dataTotal = 0;
    this.setPeopleWidth(window.innerWidth);
    this.data = [];
    this.facetStatus = 'loading';
    this.facets = [];

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
    this._handleResize = this._handleResize.bind(this);
  }

  updated(props) {
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

  async _onAppStateUpdate(e) {
    let q = {...this._parseUrlQuery()};
    await Promise.all([this._doQuery(q), this._getFacets(q)]);
  }

  async _doQuery(q) {
    if (!q.filters) {
      q.filters = this.filtersDefault;
    }
    if (!q.sort) {
      q.sort = this.sortDefault;
    }
    let data = await this.CollectionModel.query(q);
    this.dataStatus = data.state;
    if (data.state != 'loaded') {
      return;
    }
    this.dataTotal = data.payload.total;
    this.data = data.payload.results;
    console.log(data);
    console.log(this.data);
  }

  async _getFacets(q) {
    let activeFilters = q.filters;
    let peopleAggs = await this.CollectionModel.overview('peopleAggs');
    this.facetStatus = peopleAggs.state;
    if (peopleAggs.state != 'loaded') {
      return;
    }
    this.facets = [];

    // Format people types
    let facetName = "@type";
    let activeFilterValue = "";
    let activeFilterIndex = 0;
    let peopleTypes = [{label: 'All',
                        count: peopleAggs.payload.total, text: `All (${peopleAggs.payload.total})`}];
    let t = peopleAggs.payload.aggregations.facets[facetName];
    let prefix = 'vivo:';
    let i = 1;
    if (activeFilters && activeFilters[facetName]) {
      activeFilterValue = JSON.stringify(activeFilters[facetName].value);
    }
    for (let key in t) {
      if (key.startsWith(prefix)) {
        let label = this.CollectionModel._formatAgg(key, prefix);
        let filters = {type: "keyword", op: 'and', value: [key]};
        if (activeFilterValue == JSON.stringify(filters.value) ) {
          activeFilterIndex = i;
        }
        peopleTypes.push({label: label,
                          count: t[key],
                          text: `${label} (${t[key]})`,
                          filters: {"@type": filters},
                          name: key});
        i++;
      }
    }
    this.facets.push({values: peopleTypes,
                      activeIndex: activeFilterIndex,
                      id: facetName})
    //console.log(peopleAggs);
    console.log(this.facets);
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
      ${this._renderFacets(this.facets)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUVvQjs7QUFFaEM7QUFDUTs7O0FBR3pCLGlDQUFpQyxrRUFBaUI7QUFDakU7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLG9CQUFvQixZQUFZO0FBQ2hDLG1CQUFtQixhQUFhO0FBQ2hDLGFBQWEsWUFBWTtBQUN6QixnQkFBZ0IsZUFBZTtBQUMvQixvQkFBb0IsZUFBZTtBQUNuQyxnQkFBZ0IsY0FBYztBQUM5QixvQkFBb0IsYUFBYTtBQUNqQyxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix1RUFBdUUseUJB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K0IsUUFBUTtBQUN2QyxtQ0FBbUMsZUFBZTtBQUNsRCxvQ0FBb0MsNERBQTREO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoicGFnZS1wZW9wbGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcnAtcGFnZS1wZW9wbGUudHBsLmpzXCJcblxuaW1wb3J0IFJwVXRpbHNDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvcGVyc29uLXByZXZpZXdcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJwUGFnZVBlb3BsZSBleHRlbmRzIE1peGluKFJwVXRpbHNDb2xsZWN0aW9uKVxuICAud2l0aChMaXRDb3JrVXRpbHMpIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbHRlcnNEZWZhdWx0OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIHNvcnREZWZhdWx0OiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YVN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBkYXRhOiB7dHlwZTogQXJyYXl9LFxuICAgICAgZGF0YU1heDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBlb3BsZVdpZHRoOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgdmlzaWJsZToge3R5cGU6IEJvb2xlYW59LFxuICAgICAgZmFjZXRTdGF0dXM6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgZmFjZXRzOiB7dHlwZTogQXJyYXl9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5faW5qZWN0TW9kZWwoJ0NvbGxlY3Rpb25Nb2RlbCcsICdBcHBTdGF0ZU1vZGVsJyk7XG4gICAgdGhpcy5maWx0ZXJzRGVmYXVsdCA9IHtcIkB0eXBlXCI6IHtcInR5cGVcIjogXCJrZXl3b3JkXCIsIFwib3BcIjogXCJhbmRcIiwgXCJ2YWx1ZVwiOiBbQVBQX0NPTkZJRy5kYXRhLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIl19fTtcbiAgICB0aGlzLnNvcnREZWZhdWx0ID0gW3tcImxhYmVsXCI6IFwiYXNjXCJ9XTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5kYXRhVG90YWwgPSAwO1xuICAgIHRoaXMuc2V0UGVvcGxlV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuZmFjZXRTdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5mYWNldHMgPSBbXTtcblxuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5nZXQoKS50aGVuKGUgPT4gdGhpcy5fb25BcHBTdGF0ZVVwZGF0ZShlKSk7XG4gICAgdGhpcy5faGFuZGxlUmVzaXplID0gdGhpcy5faGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVkKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhcygndmlzaWJsZScpICYmIHRoaXMudmlzaWJsZSApIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5faGFuZGxlUmVzaXplKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYXN5bmMgX29uQXBwU3RhdGVVcGRhdGUoZSkge1xuICAgIGxldCBxID0gey4uLnRoaXMuX3BhcnNlVXJsUXVlcnkoKX07XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuX2RvUXVlcnkocSksIHRoaXMuX2dldEZhY2V0cyhxKV0pO1xuICB9XG5cbiAgYXN5bmMgX2RvUXVlcnkocSkge1xuICAgIGlmICghcS5maWx0ZXJzKSB7XG4gICAgICBxLmZpbHRlcnMgPSB0aGlzLmZpbHRlcnNEZWZhdWx0O1xuICAgIH1cbiAgICBpZiAoIXEuc29ydCkge1xuICAgICAgcS5zb3J0ID0gdGhpcy5zb3J0RGVmYXVsdDtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLkNvbGxlY3Rpb25Nb2RlbC5xdWVyeShxKTtcbiAgICB0aGlzLmRhdGFTdGF0dXMgPSBkYXRhLnN0YXRlO1xuICAgIGlmIChkYXRhLnN0YXRlICE9ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YVRvdGFsID0gZGF0YS5wYXlsb2FkLnRvdGFsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEucGF5bG9hZC5yZXN1bHRzO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gIH1cblxuICBhc3luYyBfZ2V0RmFjZXRzKHEpIHtcbiAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHEuZmlsdGVycztcbiAgICBsZXQgcGVvcGxlQWdncyA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLm92ZXJ2aWV3KCdwZW9wbGVBZ2dzJyk7XG4gICAgdGhpcy5mYWNldFN0YXR1cyA9IHBlb3BsZUFnZ3Muc3RhdGU7XG4gICAgaWYgKHBlb3BsZUFnZ3Muc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWNldHMgPSBbXTtcblxuICAgIC8vIEZvcm1hdCBwZW9wbGUgdHlwZXNcbiAgICBsZXQgZmFjZXROYW1lID0gXCJAdHlwZVwiO1xuICAgIGxldCBhY3RpdmVGaWx0ZXJWYWx1ZSA9IFwiXCI7XG4gICAgbGV0IGFjdGl2ZUZpbHRlckluZGV4ID0gMDtcbiAgICBsZXQgcGVvcGxlVHlwZXMgPSBbe2xhYmVsOiAnQWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwZW9wbGVBZ2dzLnBheWxvYWQudG90YWwsIHRleHQ6IGBBbGwgKCR7cGVvcGxlQWdncy5wYXlsb2FkLnRvdGFsfSlgfV07XG4gICAgbGV0IHQgPSBwZW9wbGVBZ2dzLnBheWxvYWQuYWdncmVnYXRpb25zLmZhY2V0c1tmYWNldE5hbWVdO1xuICAgIGxldCBwcmVmaXggPSAndml2bzonO1xuICAgIGxldCBpID0gMTtcbiAgICBpZiAoYWN0aXZlRmlsdGVycyAmJiBhY3RpdmVGaWx0ZXJzW2ZhY2V0TmFtZV0pIHtcbiAgICAgIGFjdGl2ZUZpbHRlclZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYWN0aXZlRmlsdGVyc1tmYWNldE5hbWVdLnZhbHVlKTtcbiAgICB9XG4gICAgZm9yIChsZXQga2V5IGluIHQpIHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuQ29sbGVjdGlvbk1vZGVsLl9mb3JtYXRBZ2coa2V5LCBwcmVmaXgpO1xuICAgICAgICBsZXQgZmlsdGVycyA9IHt0eXBlOiBcImtleXdvcmRcIiwgb3A6ICdhbmQnLCB2YWx1ZTogW2tleV19O1xuICAgICAgICBpZiAoYWN0aXZlRmlsdGVyVmFsdWUgPT0gSlNPTi5zdHJpbmdpZnkoZmlsdGVycy52YWx1ZSkgKSB7XG4gICAgICAgICAgYWN0aXZlRmlsdGVySW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICAgIHBlb3BsZVR5cGVzLnB1c2goe2xhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7bGFiZWx9ICgke3Rba2V5XX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyczoge1wiQHR5cGVcIjogZmlsdGVyc30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleX0pO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmFjZXRzLnB1c2goe3ZhbHVlczogcGVvcGxlVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUZpbHRlckluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBmYWNldE5hbWV9KVxuICAgIC8vY29uc29sZS5sb2cocGVvcGxlQWdncyk7XG4gICAgY29uc29sZS5sb2codGhpcy5mYWNldHMpO1xuICB9XG5cbiAgX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xuICAgIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3KTtcbiAgfVxuXG5cbiAgc2V0UGVvcGxlV2lkdGgodykge1xuICAgIGxldCBwdyA9IDI1MDtcbiAgICBsZXQgYXZhdGFyV2lkdGggPSA4MjtcbiAgICBsZXQgc2NyZWVuUGFkZGluZyA9IDMwO1xuICAgIHB3ID0gKHcgLSBzY3JlZW5QYWRkaW5nKSAqIC43IC0gYXZhdGFyV2lkdGggLSA0MDtcbiAgICB0aGlzLnBlb3BsZVdpZHRoID0gTWF0aC5mbG9vcihwdyk7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JwLXBhZ2UtcGVvcGxlJywgUnBQYWdlUGVvcGxlKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvc2l0ZS5odG1sXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKCkge1xucmV0dXJuIGh0bWxgXG5cbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICR7c3R5bGVzfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb2xsZWN0aW9ucyBjb250YWluZXIgYmctbGlnaHQgdG9wXCI+XG4gICR7dGhpcy5fcmVuZGVyQnJvd3NlSGVhZGVyKCdQZW9wbGUnKX1cbiAgPGhyIGNsYXNzPVwibWItMFwiPlxuICA8ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJGYWNldHModGhpcy5mYWNldHMpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBwZW9wbGUuPC9ycC1hbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHt0aGlzLmRhdGEubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgICR7dGhpcy5fcmVuZGVyQXNzZXRQcmV2aWV3KHBlcnNvbil9XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvYS16XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2xpbmstbGlzdFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3BlcnNvbi1wcmV2aWV3XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBVdGlsc0NvbGxlY3Rpb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0F6OiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBoYXNQYWdpbmF0aW9uOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBhelNlbGVjdGVkOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGF6RGlzYWJsZWQ6IHt0eXBlOiBBcnJheX0sXG4gICAgICBwZ1Blcjoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHBnQ3VycmVudDoge3R5cGU6IHBhcnNlSW50fSxcbiAgICAgIHVybFF1ZXJ5OiB7dHlwZTogT2JqZWN0fSxcbiAgICAgIGpzb25sZENvbnRleHQ6IHt0eXBlOiBTdHJpbmd9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgICB0aGlzLmpzb25sZENvbnRleHQgPSBBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dDtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHEgPSB7Li4udGhpcy51cmxRdWVyeX07XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBpZiAocS5zICYmIHEuZmlsdGVyc1tcIkB0eXBlXCJdKSB7XG4gICAgICBxLmZpbHRlcnMgPSB7fTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocSk7XG4gICAgY29uc29sZS5sb2coXCJVc2VyIGFjdGlvbjpcIiwgYWN0aW9uKTtcblxuICAgIC8vIGhhbmRsZSBhelxuICAgIGlmIChhY3Rpb24gPT0gJ2F6Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSBwYWdpbmF0aW9uXG4gICAgaWYgKGFjdGlvbiA9PSAncGFnaW5hdGlvbicgJiYgdGhpcy5oYXNQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnBnQ3VycmVudCA9IGFyZ3NbMF07XG4gICAgICBxLm9mZnNldCA9IHRoaXMucGdDdXJyZW50ICogdGhpcy51cmxRdWVyeS5saW1pdCAtIHRoaXMudXJsUXVlcnkubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIGZhY2V0c1xuICAgIGlmIChhY3Rpb24uc3RhcnRzV2l0aCgnZmFjZXRfJykpIHtcbiAgICAgIGlmIChhcmdzWzBdLmZpbHRlcnMpIHtcbiAgICAgICAgcS5maWx0ZXJzID0gey4uLnEuZmlsdGVycywgLi4uYXJnc1swXS5maWx0ZXJzfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBmID0gYWN0aW9uLnNsaWNlKCdmYWNldF8nLmxlbmd0aCwgKTtcbiAgICAgICAgaWYgKHEuZmlsdGVyc1tmXSkge1xuICAgICAgICAgIGRlbGV0ZSBxLmZpbHRlcnNbZl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHEub2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBjb25zdHJ1Y3QgbmV3IHVybCBhbmQgcmVkaXJlY3RcbiAgICBsZXQgcCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuQXBwU3RhdGVNb2RlbCkge1xuICAgICAgcCA9IFwiL1wiICsgdGhpcy5BcHBTdGF0ZU1vZGVsLnN0b3JlLmRhdGEubG9jYXRpb24ucGF0aC5qb2luKFwiL1wiKVxuICAgIH1cblxuICAgIHAgPSBwICsgdGhpcy5fdXJsRW5jb2RlKHEpXG4gICAgLy9jb25zb2xlLmxvZyhwKTtcbiAgICAvL3JldHVybjtcbiAgICB0aGlzLkFwcFN0YXRlTW9kZWwuc2V0TG9jYXRpb24ocCk7XG4gIH1cblxuICBfcmVuZGVyQnJvd3NlSGVhZGVyKHRpdGxlLCBBenNlbGVjdGVkKSB7XG4gICAgdGhpcy5oYXNBeiA9IHRydWU7XG4gICAgaWYgKEF6c2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuYXpTZWxlY3RlZCA9IEF6c2VsZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtZmFjZXRzXCI+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgICA8cnAtYS16IHNlbGVjdGVkLWxldHRlcj1cIiR7dGhpcy5helNlbGVjdGVkfVwiXG4gICAgICAgICAgICAgICAgLmRpc2FibGVkLWxldHRlcnM9XCIke3RoaXMuYXpEaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxldHRlcj0ke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwiYXpcIil9PjwvcnAtYS16PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIF9yZW5kZXJGYWNldHMoZmFjZXRzKSB7XG4gICAgaWYgKCFmYWNldHMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYCR7ZmFjZXRzLm1hcChmYWNldCA9PiBodG1sYFxuICAgICAgPHJwLWxpbmstbGlzdCBoYXMtaGVhZGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzPScke2ZhY2V0LnZhbHVlc30nXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQtbGluaz0nJHtmYWNldC5hY3RpdmVJbmRleH0nXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLWxpbms9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKCdmYWNldF8nICsgZmFjZXQuaWQsIGUudGFyZ2V0LmxpbmtzW2UudGFyZ2V0LmN1cnJlbnRMaW5rXSl9XCI+XG4gICAgICA8L3JwLWxpbmstbGlzdD5cbiAgICAgIGApfVxuICAgIGBcbiAgfVxuXG4gIF9yZW5kZXJBc3NldFByZXZpZXcoZGF0YSkge1xuICAgIGxldCBhc3NldFR5cGUgPSB0aGlzLl9nZXRBc3NldFR5cGUoZGF0YSk7XG5cbiAgICBpZiAoYXNzZXRUeXBlID09ICdwZXJzb24nKSB7XG4gICAgICBsZXQgcGVyc29uID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdFBlcnNvbihkYXRhKTtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHJwLXBlcnNvbi1wcmV2aWV3XG4gICAgICAgIG5hbWU9XCIke3BlcnNvbi5uYW1lfVwiXG4gICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgdGl0bGU9XCIke3BlcnNvbi50aXRsZX1cIlxuICAgICAgICB0ZXh0LXdpZHRoPVwiJHt0aGlzLnBlb3BsZVdpZHRofVwiXG4gICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgPC9ycC1wZXJzb24tcHJldmlldz5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgYFxuXG4gIH1cblxuICBfZ2V0QXNzZXRUeXBlKGRhdGEpIHtcbiAgICBpZiAoIWRhdGFbJ0B0eXBlJ10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkYXRhWydAdHlwZSddID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVsnQHR5cGUnXSA9IFtkYXRhWydAdHlwZSddXTtcbiAgICB9XG4gICAgaWYgKCAhQXJyYXkuaXNBcnJheShkYXRhWydAdHlwZSddKSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVsnQHR5cGUnXS5pbmNsdWRlcyh0aGlzLmpzb25sZENvbnRleHQgKyBcIjpwZXJzb25cIikpIHtcbiAgICAgIHJldHVybiBcInBlcnNvblwiO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgX3JlbmRlclBhZ2luYXRpb24odG90YWxSZXN1bHRzKSB7XG4gICAgaWYgKCF0b3RhbFJlc3VsdHMgfHwgIXRoaXMudXJsUXVlcnkpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHRoaXMuaGFzUGFnaW5hdGlvbiA9IHRydWU7XG4gICAgbGV0IG1heFBhZ2UgPSBNYXRoLmNlaWwodG90YWxSZXN1bHRzIC8gdGhpcy51cmxRdWVyeS5saW1pdCk7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSBNYXRoLmNlaWwoKHRoaXMudXJsUXVlcnkub2Zmc2V0ICsgMSkgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KVxuICAgIHJldHVybiBodG1sYFxuICAgIDxycC1wYWdpbmF0aW9uIG1heC1wYWdlPVwiJHttYXhQYWdlfVwiXG4gICAgICAgICAgICAgICAgICAgY3VycmVudC1wYWdlPVwiJHt0aGlzLnBnQ3VycmVudH1cIlxuICAgICAgICAgICAgICAgICAgIEBjaGFuZ2VkLXBhZ2U9XCIke2UgPT4gdGhpcy5fb25Vc2VyQWN0aW9uKFwicGFnaW5hdGlvblwiLCBlLnRhcmdldC5jdXJyZW50UGFnZSl9XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTNcIlxuICAgID48L3JwLXBhZ2luYXRpb24+XG4gICAgYFxuICB9XG5cbiAgX3BhcnNlVXJsUXVlcnkoKXtcbiAgICAvLyByZWFkIHVybCBhcmdzLCBjb25zdHJ1Y3Qgc2VhcmNoIHF1ZXJ5XG4gICAgbGV0IHEgPSB7fTtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBsZXQgcXVlcnkgPSB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5xdWVyeTtcbiAgICAgIGZvciAobGV0IGFyZyBpbiBxdWVyeSkge1xuICAgICAgICBpZiAoYXJnID09ICdzJykge1xuICAgICAgICAgIHFbYXJnXSA9IHF1ZXJ5W2FyZ107XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcVthcmddID0gSlNPTi5wYXJzZShxdWVyeVthcmddKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2dldCBtYWluIGZhY2V0IGZyb20gc2VhcmNoXG4gICAgaWYgKHRoaXMubWFpbkZhY2V0KSB7XG4gICAgICBsZXQgbWFpbkZhY2V0ID0ge307XG4gICAgICBmb3IgKGxldCBmIG9mIHRoaXMuQ29sbGVjdGlvbk1vZGVsLm1haW5GYWNldHMpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpbkZhY2V0LnRvTG93ZXJDYXNlKCkgPT0gZi5pZC50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgICAgIG1haW5GYWNldCA9IGYuYmFzZUZpbHRlcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5tYWluRmFjZXR9O1xuICAgIH1cblxuICAgIGlmICghcS5saW1pdCkge1xuICAgICAgcS5saW1pdCA9IHRoaXMucGdQZXI7XG4gICAgfVxuICAgIGlmICghcS5vZmZzZXQpIHtcbiAgICAgIHEub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgdGhpcy51cmxRdWVyeSA9IHE7XG4gICAgcmV0dXJuIHE7XG4gIH1cblxuICBfdXJsRW5jb2RlKG9iaikge1xuICAgIGxldCBzdHIgPSBbXTtcbiAgICBmb3IgKGxldCBwIGluIG9iailcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgaWYgKHAgPT0gJ29mZnNldCcgJiYgb2JqW3BdID09IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocCA9PSAnZmlsdGVycycgJiYgT2JqZWN0LmtleXMob2JqW3BdKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdsaW1pdCcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggSlNPTi5zdHJpbmdpZnkob2JqW3BdKSApKTtcbiAgICAgIH1cbiAgICBpZiAoIXN0ci5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuICAgIHJldHVybiBcIj9cIiArIHN0ci5qb2luKFwiJlwiKTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtdXRpbHMtY29sbGVjdGlvbicsIFJwVXRpbHNDb2xsZWN0aW9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=