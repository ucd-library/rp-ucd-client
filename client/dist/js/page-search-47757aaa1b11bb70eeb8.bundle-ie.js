(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var r=n(2),i=n(41),o=n.n(i);function a(){var t=s(["\n        ",'\n        <hr class="dotted">\n        ']);return a=function(){return t},t}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){var t=s(["\n\n<style>\n  :host {\n    display: block;\n  }\n  ",'\n</style>\n<div class="search-header container bg-light top">\n  <div class="px-5 py-3"><h1>Search results for "','"</h1></div>\n  <hr>\n  <rp-link-list class="bg-light p-3"\n                direction="horizontal"\n                current-link="','"\n                .links="','">\n  </rp-link-list>\n</div>\n<div class="search container bg-light mt-3 pb-3">\n<div class="body flex">\n  <div class="col-facets mt-3">\n  </div>\n  <div class="col-main">\n    <div ?hidden="','" class="flex align-items-center justify-content-center">\n      <div class="loading1">loading</div>\n    </div>\n    <div ?hidden="','" class="flex align-items-center justify-content-center">\n      <rp-alert>Error loading people.</rp-alert>\n    </div>\n    <div class="data" ?hidden="','">\n      ',"\n      ","\n    </div>\n\n  </div>\n</div>\n</div>\n\n"]);return l=function(){return t},t}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function f(){var t=this;return Object(r.b)(l(),o.a,this.textQuery,this.mainFacetIndex,[{id:"none",text:"All Results"}].concat(c(this.CollectionModel.mainFacets)),"error"==this.dataStatus||"loaded"==this.dataStatus,"loading"==this.dataStatus||"loaded"==this.dataStatus,"loading"==this.dataStatus||"error"==this.dataStatus,this.data.map((function(e){return Object(r.b)(a(),t._renderAssetPreview(e))})),this._renderPagination(this.dataTotal))}var p=n(90);n(83),n(87),n(89);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}function m(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){v(o,r,i,a,c,"next",t)}function c(t){v(o,r,i,a,c,"throw",t)}a(void 0)}))}}function g(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w(t,e,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e,n){return e&&j(t.prototype,e),n&&j(t,n),t}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(i,t);var e,n,r=A(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this)).render=f.bind(_(t)),t._injectModel("CollectionModel","AppStateModel"),t.mainFacet="none",t.mainFacetIndex=0,t.textQuery="",t.data=[],t.dataStatus="loading",t.dataTotal=0,t.setPeopleWidth(window.innerWidth),t.AppStateModel.get().then((function(e){return t._onAppStateUpdate(e)})),t}return S(i,null,[{key:"properties",get:function(){return{visible:{type:Boolean},mainFacet:{type:String},mainFacetIndex:{type:Number},textQuery:{type:String},data:{type:Array},dataStatus:{type:String},dataTotal:{type:Number},peopleWidth:{type:Number}}}}]),S(i,[{key:"updated",value:function(t){var e=this;if(t.has("mainFacet")&&"none"!=this.mainFacet){var n,r=!1,i=0,o=g(this.CollectionModel.mainFacets);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(i++,a.id.toLowerCase()==this.mainFacet.toLowerCase()){if(a.disabled)continue;r=!0,this.mainFacetIndex=i;break}}}catch(t){o.e(t)}finally{o.f()}r||(this.mainFacet="none",this.mainFacetIndex=0)}t.has("visible")&&this.visible&&requestAnimationFrame((function(){return e._handleResize()}))}},{key:"connectedCallback",value:function(){w(x(i.prototype),"connectedCallback",this).call(this),window.addEventListener("resize",this._handleResize)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("resize",this._handleResize),w(x(i.prototype),"disconnectedCallback",this).call(this)}},{key:"_onAppStateUpdate",value:(n=m(regeneratorRuntime.mark((function t(e){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.location.path,r=e.location.query,n.length>=2&&(this.mainFacet=n[1].toLowerCase()),r.s&&(this.textQuery=r.s),i=h({},this._parseUrlQuery()),console.log("q",i),t.next=8,Promise.all([this._doMainQuery(i)]);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"_doMainQuery",value:(e=m(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.CollectionModel.query(e);case 2:if(n=t.sent,this.dataStatus=n.state,"loaded"==n.state){t.next=6;break}return t.abrupt("return");case 6:this.dataTotal=n.payload.total,this.data=n.payload.results,console.log(n);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"_handleResize",value:function(){if(this.visible){var t=window.innerWidth;this.setPeopleWidth(t)}}},{key:"setPeopleWidth",value:function(t){var e;e=.7*(t-30)-82-40,this.peopleWidth=Math.floor(e)}}]),i}(Mixin(p.a).with(LitCorkUtils));customElements.define("rp-page-search",C)},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return A}));var r=n(2);n(95),n(87),n(89),n(84);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw o}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(){var t=h(['\n    <rp-pagination max-page="','"\n                   current-page="','"\n                   @changed-page="','"\n                   class="mt-3"\n    ></rp-pagination>\n    ']);return c=function(){return t},t}function u(){var t=h([""]);return u=function(){return t},t}function l(){var t=h([""]);return l=function(){return t},t}function s(){var t=h(['\n      <rp-person-preview\n        name="','"\n        href="','"\n        title="','"\n        text-width="','"\n        class="my-3">\n      </rp-person-preview>\n      ']);return s=function(){return t},t}function f(){var t=h(["\n      <rp-link-list has-header-link\n                    .links='","'\n                    current-link='","'\n                    @changed-link=\"",'">\n      </rp-link-list>\n      ']);return f=function(){return t},t}function p(){var t=h(["","\n    "]);return p=function(){return t},t}function y(){var t=h([""]);return y=function(){return t},t}function d(){var t=h(['\n    <div class="header flex align-items-center">\n      <div class="col-facets">\n        <h1>','</h1>\n      </div>\n      <div class="col-main">\n        <rp-a-z selected-letter="','"\n                .disabled-letters="','"\n                @changed-letter=',"></rp-a-z>\n      </div>\n    </div>\n    "]);return d=function(){return t},t}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=P(t);if(e){var i=P(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(n,t);var e=j(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=e.call(this)).hasAz=!1,t.hasPagination=!1,t.azSelected="All",t.azDisabled=[],t.pgPer=8,t.pgCurrent=1,t.urlQuery={},t.jsonldContext=APP_CONFIG.data.jsonldContext,t}return O(n,null,[{key:"properties",get:function(){return{hasAz:{type:Boolean},hasPagination:{type:Boolean},azSelected:{type:String},azDisabled:{type:Array},pgPer:{type:parseInt},pgCurrent:{type:parseInt},urlQuery:{type:Object},jsonldContext:{type:String}}}}]),O(n,[{key:"_onUserAction",value:function(t){if(t){var e=v({},this.urlQuery);if(e.filters||(e.filters={}),e.s&&e.filters["@type"]&&(e.filters={}),console.log(e),console.log("User action:",t),"az"!=t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if("pagination"==t&&this.hasPagination&&(this.pgCurrent=r[0],e.offset=this.pgCurrent*this.urlQuery.limit-this.urlQuery.limit),t.startsWith("facet_")){if(r[0].filters)e.filters=v(v({},e.filters),r[0].filters);else{var o=t.slice("facet_".length);e.filters[o]&&delete e.filters[o]}e.offset=0}var a="";this.AppStateModel&&(a="/"+this.AppStateModel.store.data.location.path.join("/")),a+=this._urlEncode(e),this.AppStateModel.setLocation(a)}}}},{key:"_renderBrowseHeader",value:function(t,e){var n=this;return this.hasAz=!0,e&&(this.azSelected=e),Object(r.b)(d(),t,this.azSelected,this.azDisabled,(function(t){return n._onUserAction("az")}))}},{key:"_renderFacets",value:function(t){var e=this;return t?Object(r.b)(p(),t.map((function(t){return Object(r.b)(f(),t.values,t.activeIndex,(function(n){return e._onUserAction("facet_"+t.id,n.target.links[n.target.currentLink])}))}))):Object(r.b)(y())}},{key:"_renderAssetPreview",value:function(t){if("person"==this._getAssetType(t)){var e=this.CollectionModel._formatPerson(t);return Object(r.b)(s(),e.name,"/individual/"+e.id,e.title,this.peopleWidth)}return Object(r.b)(l())}},{key:"_getAssetType",value:function(t){if(t["@type"]&&("string"==typeof t["@type"]&&(t["@type"]=[t["@type"]]),Array.isArray(t["@type"])))return t["@type"].includes(this.jsonldContext+":person")?"person":void 0}},{key:"_renderPagination",value:function(t){var e=this;if(!t||!this.urlQuery)return Object(r.b)(u());this.hasPagination=!0;var n=Math.ceil(t/this.urlQuery.limit);return this.pgCurrent=Math.ceil((this.urlQuery.offset+1)/this.urlQuery.limit),Object(r.b)(c(),n,this.pgCurrent,(function(t){return e._onUserAction("pagination",t.target.currentPage)}))}},{key:"_parseUrlQuery",value:function(){var t={};if(this.AppStateModel){var e=this.AppStateModel.store.data.location.query;for(var n in e)t[n]="s"!=n?JSON.parse(e[n]):e[n]}if(this.mainFacet){var r,i={},a=o(this.CollectionModel.mainFacets);try{for(a.s();!(r=a.n()).done;){var c=r.value;if(this.mainFacet.toLowerCase()==c.id.toLowerCase()){i=c.baseFilter;break}}}catch(t){a.e(t)}finally{a.f()}t.filters=v(v({},t.filters),i)}return t.limit||(t.limit=this.pgPer),t.offset||(t.offset=0),this.urlQuery=t,t}},{key:"_urlEncode",value:function(t){var e=[];for(var n in t)if(t.hasOwnProperty(n)){if("offset"==n&&0==t[n])continue;if("filters"==n&&0==Object.keys(t[n]).length)continue;if("limit"==n)continue;e.push(encodeURIComponent(n)+"="+encodeURIComponent(JSON.stringify(t[n])))}return e.length?"?"+e.join("&"):""}}]),n}(r.a);customElements.define("rp-utils-collection",A)}}]);