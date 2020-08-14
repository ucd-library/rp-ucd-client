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
        ${this.CollectionModel._formatPeople(this.data).map(person => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <rp-person-preview
            name="${person.name}"
            href="${"/individual/" + person.id}"
            title="${person.title}"
            text-width="${this.peopleWidth}"
            class="my-3">
          </rp-person-preview>
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





class RpUtilsCollection extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      hasAz: {type: Boolean},
      hasPagination: {type: Boolean},
      azSelected: {type: String},
      azDisabled: {type: Array},
      pgPer: {type: parseInt},
      pgCurrent: {type: parseInt},
      urlQuery: {type: Object}
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
  }

  _onUserAction(action, ...args) {
    if (!action) {
      return;
    }
    let q = {...this.urlQuery};
    if (!q.filters) {
      q.filters = {};
    }
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
    //location.href = p;
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
                disabled-letters="${JSON.stringify(this.azDisabled)}"
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
                    links='${JSON.stringify(facet.values)}'
                    current-link='${facet.activeIndex}'
                    @changed-link="${e => this._onUserAction('facet_' + facet.id, e.target.links[e.target.currentLink])}">
      </rp-link-list>
      `)}
    `
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
        q[arg] = JSON.parse(query[arg])
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvZWxlbWVudHMvcGFnZXMvcGVvcGxlL3JwLXBhZ2UtcGVvcGxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy9wYWdlcy9wZW9wbGUvcnAtcGFnZS1wZW9wbGUudHBsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9lbGVtZW50cy91dGlscy9ycC11dGlscy1jb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNTOztBQUVvQjs7QUFFaEM7QUFDUTs7O0FBR3pCLGlDQUFpQyxrRUFBaUI7QUFDakU7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLG9CQUFvQixZQUFZO0FBQ2hDLG1CQUFtQixhQUFhO0FBQ2hDLGFBQWEsWUFBWTtBQUN6QixnQkFBZ0IsZUFBZTtBQUMvQixvQkFBb0IsZUFBZTtBQUNuQyxnQkFBZ0IsY0FBYztBQUM5QixvQkFBb0IsYUFBYTtBQUNqQyxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNOztBQUV4QjtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix1RUFBdUUseUJB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJwYWdlLXBlb3BsZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9ycC1wYWdlLXBlb3BsZS50cGwuanNcIlxuXG5pbXBvcnQgUnBVdGlsc0NvbGxlY3Rpb24gZnJvbSBcIi4uLy4uL3V0aWxzL3JwLXV0aWxzLWNvbGxlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9wZXJzb24tcHJldmlld1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnBQYWdlUGVvcGxlIGV4dGVuZHMgTWl4aW4oUnBVdGlsc0NvbGxlY3Rpb24pXG4gIC53aXRoKExpdENvcmtVdGlscykge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsdGVyc0RlZmF1bHQ6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgc29ydERlZmF1bHQ6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhU3RhdHVzOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIGRhdGE6IHt0eXBlOiBBcnJheX0sXG4gICAgICBkYXRhTWF4OiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGVvcGxlV2lkdGg6IHt0eXBlOiBwYXJzZUludH0sXG4gICAgICB2aXNpYmxlOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICBmYWNldFN0YXR1czoge3R5cGU6IFN0cmluZ30sXG4gICAgICBmYWNldHM6IHt0eXBlOiBBcnJheX1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9pbmplY3RNb2RlbCgnQ29sbGVjdGlvbk1vZGVsJywgJ0FwcFN0YXRlTW9kZWwnKTtcbiAgICB0aGlzLmZpbHRlcnNEZWZhdWx0ID0ge1wiQHR5cGVcIjoge1widHlwZVwiOiBcImtleXdvcmRcIiwgXCJvcFwiOiBcImFuZFwiLCBcInZhbHVlXCI6IFtBUFBfQ09ORklHLmRhdGEuanNvbmxkQ29udGV4dCArIFwiOnBlcnNvblwiXX19O1xuICAgIHRoaXMuc29ydERlZmF1bHQgPSBbe1wibGFiZWxcIjogXCJhc2NcIn1dO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmRhdGFUb3RhbCA9IDA7XG4gICAgdGhpcy5zZXRQZW9wbGVXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5mYWNldFN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmZhY2V0cyA9IFtdO1xuXG4gICAgdGhpcy5BcHBTdGF0ZU1vZGVsLmdldCgpLnRoZW4oZSA9PiB0aGlzLl9vbkFwcFN0YXRlVXBkYXRlKGUpKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNpemUgPSB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZWQocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzKCd2aXNpYmxlJykgJiYgdGhpcy52aXNpYmxlICkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLl9oYW5kbGVSZXNpemUoKSk7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlUmVzaXplKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBhc3luYyBfb25BcHBTdGF0ZVVwZGF0ZShlKSB7XG4gICAgbGV0IHEgPSB7Li4udGhpcy5fcGFyc2VVcmxRdWVyeSgpfTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbdGhpcy5fZG9RdWVyeShxKSwgdGhpcy5fZ2V0RmFjZXRzKHEpXSk7XG4gIH1cblxuICBhc3luYyBfZG9RdWVyeShxKSB7XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHRoaXMuZmlsdGVyc0RlZmF1bHQ7XG4gICAgfVxuICAgIGlmICghcS5zb3J0KSB7XG4gICAgICBxLnNvcnQgPSB0aGlzLnNvcnREZWZhdWx0O1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuQ29sbGVjdGlvbk1vZGVsLnF1ZXJ5KHEpO1xuICAgIHRoaXMuZGF0YVN0YXR1cyA9IGRhdGEuc3RhdGU7XG4gICAgaWYgKGRhdGEuc3RhdGUgIT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhVG90YWwgPSBkYXRhLnBheWxvYWQudG90YWw7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5wYXlsb2FkLnJlc3VsdHM7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRGYWNldHMocSkge1xuICAgIGxldCBhY3RpdmVGaWx0ZXJzID0gcS5maWx0ZXJzO1xuICAgIGxldCBwZW9wbGVBZ2dzID0gYXdhaXQgdGhpcy5Db2xsZWN0aW9uTW9kZWwub3ZlcnZpZXcoJ3Blb3BsZUFnZ3MnKTtcbiAgICB0aGlzLmZhY2V0U3RhdHVzID0gcGVvcGxlQWdncy5zdGF0ZTtcbiAgICBpZiAocGVvcGxlQWdncy5zdGF0ZSAhPSAnbG9hZGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhY2V0cyA9IFtdO1xuXG4gICAgLy8gRm9ybWF0IHBlb3BsZSB0eXBlc1xuICAgIGxldCBmYWNldE5hbWUgPSBcIkB0eXBlXCI7XG4gICAgbGV0IGFjdGl2ZUZpbHRlclZhbHVlID0gXCJcIjtcbiAgICBsZXQgYWN0aXZlRmlsdGVySW5kZXggPSAwO1xuICAgIGxldCBwZW9wbGVUeXBlcyA9IFt7bGFiZWw6ICdBbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBlb3BsZUFnZ3MucGF5bG9hZC50b3RhbCwgdGV4dDogYEFsbCAoJHtwZW9wbGVBZ2dzLnBheWxvYWQudG90YWx9KWB9XTtcbiAgICBsZXQgdCA9IHBlb3BsZUFnZ3MucGF5bG9hZC5hZ2dyZWdhdGlvbnMuZmFjZXRzW2ZhY2V0TmFtZV07XG4gICAgbGV0IHByZWZpeCA9ICd2aXZvOic7XG4gICAgbGV0IGkgPSAxO1xuICAgIGlmIChhY3RpdmVGaWx0ZXJzICYmIGFjdGl2ZUZpbHRlcnNbZmFjZXROYW1lXSkge1xuICAgICAgYWN0aXZlRmlsdGVyVmFsdWUgPSBKU09OLnN0cmluZ2lmeShhY3RpdmVGaWx0ZXJzW2ZhY2V0TmFtZV0udmFsdWUpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gdCkge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5Db2xsZWN0aW9uTW9kZWwuX2Zvcm1hdEFnZyhrZXksIHByZWZpeCk7XG4gICAgICAgIGxldCBmaWx0ZXJzID0ge3R5cGU6IFwia2V5d29yZFwiLCBvcDogJ2FuZCcsIHZhbHVlOiBba2V5XX07XG4gICAgICAgIGlmIChhY3RpdmVGaWx0ZXJWYWx1ZSA9PSBKU09OLnN0cmluZ2lmeShmaWx0ZXJzLnZhbHVlKSApIHtcbiAgICAgICAgICBhY3RpdmVGaWx0ZXJJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcGVvcGxlVHlwZXMucHVzaCh7bGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdFtrZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtsYWJlbH0gKCR7dFtrZXldfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiB7XCJAdHlwZVwiOiBmaWx0ZXJzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5fSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mYWNldHMucHVzaCh7dmFsdWVzOiBwZW9wbGVUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogYWN0aXZlRmlsdGVySW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IGZhY2V0TmFtZX0pXG4gICAgLy9jb25zb2xlLmxvZyhwZW9wbGVBZ2dzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZhY2V0cyk7XG4gIH1cblxuICBfaGFuZGxlUmVzaXplKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm47XG4gICAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLnNldFBlb3BsZVdpZHRoKHcpO1xuICB9XG5cblxuICBzZXRQZW9wbGVXaWR0aCh3KSB7XG4gICAgbGV0IHB3ID0gMjUwO1xuICAgIGxldCBhdmF0YXJXaWR0aCA9IDgyO1xuICAgIGxldCBzY3JlZW5QYWRkaW5nID0gMzA7XG4gICAgcHcgPSAodyAtIHNjcmVlblBhZGRpbmcpICogLjcgLSBhdmF0YXJXaWR0aCAtIDQwO1xuICAgIHRoaXMucGVvcGxlV2lkdGggPSBNYXRoLmZsb29yKHB3KTtcbiAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncnAtcGFnZS1wZW9wbGUnLCBScFBhZ2VQZW9wbGUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1lbGVtZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9zaXRlLmh0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7XG5yZXR1cm4gaHRtbGBcblxuPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgJHtzdHlsZXN9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImNvbGxlY3Rpb25zIGNvbnRhaW5lciBiZy1saWdodCB0b3BcIj5cbiAgPGhyIGNsYXNzPVwibWItMFwiPlxuICA8ZGl2IGNsYXNzPVwiYm9keSBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1mYWNldHMgbXQtM1wiPlxuICAgICAgJHt0aGlzLl9yZW5kZXJGYWNldHModGhpcy5mYWNldHMpfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWFpblwiPlxuICAgICAgPGRpdiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2Vycm9yJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZzFcIj5sb2FkaW5nPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgP2hpZGRlbj1cIiR7dGhpcy5kYXRhU3RhdHVzID09ICdsb2FkaW5nJyB8fCB0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRlZCcgfVwiIGNsYXNzPVwiZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICA8cnAtYWxlcnQ+RXJyb3IgbG9hZGluZyBwZW9wbGUuPC9ycC1hbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiA/aGlkZGVuPVwiJHt0aGlzLmRhdGFTdGF0dXMgPT0gJ2xvYWRpbmcnIHx8IHRoaXMuZGF0YVN0YXR1cyA9PSAnZXJyb3InIH1cIj5cbiAgICAgICAgJHt0aGlzLkNvbGxlY3Rpb25Nb2RlbC5fZm9ybWF0UGVvcGxlKHRoaXMuZGF0YSkubWFwKHBlcnNvbiA9PiBodG1sYFxuICAgICAgICAgIDxycC1wZXJzb24tcHJldmlld1xuICAgICAgICAgICAgbmFtZT1cIiR7cGVyc29uLm5hbWV9XCJcbiAgICAgICAgICAgIGhyZWY9XCIke1wiL2luZGl2aWR1YWwvXCIgKyBwZXJzb24uaWR9XCJcbiAgICAgICAgICAgIHRpdGxlPVwiJHtwZXJzb24udGl0bGV9XCJcbiAgICAgICAgICAgIHRleHQtd2lkdGg9XCIke3RoaXMucGVvcGxlV2lkdGh9XCJcbiAgICAgICAgICAgIGNsYXNzPVwibXktM1wiPlxuICAgICAgICAgIDwvcnAtcGVyc29uLXByZXZpZXc+XG4gICAgICAgICAgPGhyIGNsYXNzPVwiZG90dGVkXCI+XG4gICAgICAgICAgYCl9XG4gICAgICAgICR7dGhpcy5fcmVuZGVyUGFnaW5hdGlvbih0aGlzLmRhdGFUb3RhbCl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC9kaXY+XG5gO31cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2EtelwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9saW5rLWxpc3RcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScFV0aWxzQ29sbGVjdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQXo6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGhhc1BhZ2luYXRpb246IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGF6U2VsZWN0ZWQ6IHt0eXBlOiBTdHJpbmd9LFxuICAgICAgYXpEaXNhYmxlZDoge3R5cGU6IEFycmF5fSxcbiAgICAgIHBnUGVyOiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgcGdDdXJyZW50OiB7dHlwZTogcGFyc2VJbnR9LFxuICAgICAgdXJsUXVlcnk6IHt0eXBlOiBPYmplY3R9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhc0F6ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5helNlbGVjdGVkID0gJ0FsbCc7XG4gICAgdGhpcy5hekRpc2FibGVkID0gW107XG4gICAgdGhpcy5wZ1BlciA9IDg7XG4gICAgdGhpcy5wZ0N1cnJlbnQgPSAxO1xuICAgIHRoaXMudXJsUXVlcnkgPSB7fTtcbiAgfVxuXG4gIF9vblVzZXJBY3Rpb24oYWN0aW9uLCAuLi5hcmdzKSB7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHEgPSB7Li4udGhpcy51cmxRdWVyeX07XG4gICAgaWYgKCFxLmZpbHRlcnMpIHtcbiAgICAgIHEuZmlsdGVycyA9IHt9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgYWN0aW9uOlwiLCBhY3Rpb24pO1xuXG4gICAgLy8gaGFuZGxlIGF6XG4gICAgaWYgKGFjdGlvbiA9PSAnYXonKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHBhZ2luYXRpb25cbiAgICBpZiAoYWN0aW9uID09ICdwYWdpbmF0aW9uJyAmJiB0aGlzLmhhc1BhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMucGdDdXJyZW50ID0gYXJnc1swXTtcbiAgICAgIHEub2Zmc2V0ID0gdGhpcy5wZ0N1cnJlbnQgKiB0aGlzLnVybFF1ZXJ5LmxpbWl0IC0gdGhpcy51cmxRdWVyeS5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgZmFjZXRzXG4gICAgaWYgKGFjdGlvbi5zdGFydHNXaXRoKCdmYWNldF8nKSkge1xuICAgICAgaWYgKGFyZ3NbMF0uZmlsdGVycykge1xuICAgICAgICBxLmZpbHRlcnMgPSB7Li4ucS5maWx0ZXJzLCAuLi5hcmdzWzBdLmZpbHRlcnN9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IGYgPSBhY3Rpb24uc2xpY2UoJ2ZhY2V0XycubGVuZ3RoLCApO1xuICAgICAgICBpZiAocS5maWx0ZXJzW2ZdKSB7XG4gICAgICAgICAgZGVsZXRlIHEuZmlsdGVyc1tmXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIC8vIGNvbnN0cnVjdCBuZXcgdXJsIGFuZCByZWRpcmVjdFxuICAgIGxldCBwID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcHBTdGF0ZU1vZGVsKSB7XG4gICAgICBwID0gXCIvXCIgKyB0aGlzLkFwcFN0YXRlTW9kZWwuc3RvcmUuZGF0YS5sb2NhdGlvbi5wYXRoLmpvaW4oXCIvXCIpXG4gICAgfVxuXG4gICAgcCA9IHAgKyB0aGlzLl91cmxFbmNvZGUocSlcbiAgICAvL2NvbnNvbGUubG9nKHApO1xuICAgIC8vcmV0dXJuO1xuICAgIHRoaXMuQXBwU3RhdGVNb2RlbC5zZXRMb2NhdGlvbihwKTtcbiAgICAvL2xvY2F0aW9uLmhyZWYgPSBwO1xuICB9XG5cbiAgX3JlbmRlckJyb3dzZUhlYWRlcih0aXRsZSwgQXpzZWxlY3RlZCkge1xuICAgIHRoaXMuaGFzQXogPSB0cnVlO1xuICAgIGlmIChBenNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmF6U2VsZWN0ZWQgPSBBenNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWZhY2V0c1wiPlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1haW5cIj5cbiAgICAgICAgPHJwLWEteiBzZWxlY3RlZC1sZXR0ZXI9XCIke3RoaXMuYXpTZWxlY3RlZH1cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkLWxldHRlcnM9XCIke0pTT04uc3RyaW5naWZ5KHRoaXMuYXpEaXNhYmxlZCl9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlZC1sZXR0ZXI9JHtlID0+IHRoaXMuX29uVXNlckFjdGlvbihcImF6XCIpfT48L3JwLWEtej5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBfcmVuZGVyRmFjZXRzKGZhY2V0cykge1xuICAgIGlmICghZmFjZXRzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGAke2ZhY2V0cy5tYXAoZmFjZXQgPT4gaHRtbGBcbiAgICAgIDxycC1saW5rLWxpc3QgaGFzLWhlYWRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzPScke0pTT04uc3RyaW5naWZ5KGZhY2V0LnZhbHVlcyl9J1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LWxpbms9JyR7ZmFjZXQuYWN0aXZlSW5kZXh9J1xuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlZC1saW5rPVwiJHtlID0+IHRoaXMuX29uVXNlckFjdGlvbignZmFjZXRfJyArIGZhY2V0LmlkLCBlLnRhcmdldC5saW5rc1tlLnRhcmdldC5jdXJyZW50TGlua10pfVwiPlxuICAgICAgPC9ycC1saW5rLWxpc3Q+XG4gICAgICBgKX1cbiAgICBgXG4gIH1cblxuICBfcmVuZGVyUGFnaW5hdGlvbih0b3RhbFJlc3VsdHMpIHtcbiAgICBpZiAoIXRvdGFsUmVzdWx0cyB8fCAhdGhpcy51cmxRdWVyeSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgdGhpcy5oYXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgICBsZXQgbWF4UGFnZSA9IE1hdGguY2VpbCh0b3RhbFJlc3VsdHMgLyB0aGlzLnVybFF1ZXJ5LmxpbWl0KTtcbiAgICB0aGlzLnBnQ3VycmVudCA9IE1hdGguY2VpbCgodGhpcy51cmxRdWVyeS5vZmZzZXQgKyAxKSAvIHRoaXMudXJsUXVlcnkubGltaXQpXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHJwLXBhZ2luYXRpb24gbWF4LXBhZ2U9XCIke21heFBhZ2V9XCJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50LXBhZ2U9XCIke3RoaXMucGdDdXJyZW50fVwiXG4gICAgICAgICAgICAgICAgICAgQGNoYW5nZWQtcGFnZT1cIiR7ZSA9PiB0aGlzLl9vblVzZXJBY3Rpb24oXCJwYWdpbmF0aW9uXCIsIGUudGFyZ2V0LmN1cnJlbnRQYWdlKX1cIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtM1wiXG4gICAgPjwvcnAtcGFnaW5hdGlvbj5cbiAgICBgXG4gIH1cblxuICBfcGFyc2VVcmxRdWVyeSgpe1xuICAgIC8vIHJlYWQgdXJsIGFyZ3MsIGNvbnN0cnVjdCBzZWFyY2ggcXVlcnlcbiAgICBsZXQgcSA9IHt9O1xuICAgIGlmICh0aGlzLkFwcFN0YXRlTW9kZWwpIHtcbiAgICAgIGxldCBxdWVyeSA9IHRoaXMuQXBwU3RhdGVNb2RlbC5zdG9yZS5kYXRhLmxvY2F0aW9uLnF1ZXJ5O1xuICAgICAgZm9yIChsZXQgYXJnIGluIHF1ZXJ5KSB7XG4gICAgICAgIHFbYXJnXSA9IEpTT04ucGFyc2UocXVlcnlbYXJnXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFxLmxpbWl0KSB7XG4gICAgICBxLmxpbWl0ID0gdGhpcy5wZ1BlcjtcbiAgICB9XG4gICAgaWYgKCFxLm9mZnNldCkge1xuICAgICAgcS5vZmZzZXQgPSAwO1xuICAgIH1cbiAgICB0aGlzLnVybFF1ZXJ5ID0gcTtcbiAgICByZXR1cm4gcTtcbiAgfVxuXG4gIF91cmxFbmNvZGUob2JqKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGZvciAobGV0IHAgaW4gb2JqKVxuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpZiAocCA9PSAnb2Zmc2V0JyAmJiBvYmpbcF0gPT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwID09ICdmaWx0ZXJzJyAmJiBPYmplY3Qua2V5cyhvYmpbcF0pLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ2xpbWl0Jykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCBKU09OLnN0cmluZ2lmeShvYmpbcF0pICkpO1xuICAgICAgfVxuICAgIGlmICghc3RyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gICAgcmV0dXJuIFwiP1wiICsgc3RyLmpvaW4oXCImXCIpO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdycC11dGlscy1jb2xsZWN0aW9uJywgUnBVdGlsc0NvbGxlY3Rpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==