(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(2),o=n(36),i=n(10),a=n(11),s=new WeakMap,c=(Object(a.d)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n=s.get(e);void 0===n&&(n={lastRenderedIndex:2147483647,values:[]},s.set(e,n));var r=n.values,o=r.length;n.values=t;for(var a=function(a){if(a>n.lastRenderedIndex)return"break";var s=t[a];return Object(i.h)(s)||"function"!=typeof s.then?(e.setValue(s),n.lastRenderedIndex=a,"break"):a<o&&s===r[a]?"continue":(n.lastRenderedIndex=2147483647,o=0,void Promise.resolve(s).then((function(t){var r=n.values.indexOf(s);r>-1&&r<n.lastRenderedIndex&&(n.lastRenderedIndex=r,e.setValue(t),e.commit())})))},c=0;c<t.length;c++){var l=a(c);if("break"===l)break}}})),n(41)),l=n.n(c);function u(){var e=d(['\n            <rp-person-preview\n              name="','"\n              title="',"\"\n              avatar-size='sm'\n              text-width=",">\n            </rp-person-preview>\n            "]);return u=function(){return e},e}function p(){var e=d(["\n\n<style>\n  :host {\n    display: block;\n  }\n  .hero {\n    background-color: var(--tcolor-bg-primary);\n  }\n  .hero .container {\n    padding: 50px 0;\n  }\n  .hero img {\n    min-width: 30%;\n    height: auto;\n  }\n  .hero .text {\n    flex-grow: 1;\n    padding: 0 50px;\n  }\n  .hero .content: {\n    font-size: var(--font-size);\n    line-height: 23px;\n  }\n  .search .container {\n    padding: 28px 0;\n  }\n  rp-search {\n    width: 50%;\n    min-width: 300px;\n  }\n  .data .container {\n    padding: 50px 0;\n    flex-flow: row wrap;\n  }\n  .data .col-l {\n    width: 100%;\n  }\n  .data .col-r {\n  }\n  .people-container {\n    display: grid;\n    grid-template-columns: auto;\n    grid-column-gap: 24px;\n    grid-row-gap: 10px;\n  }\n\n  @media (min-width: 768px){\n    .people-container {\n      grid-template-columns: auto auto;\n    }\n  }\n\n  @media (min-width: 576px){\n    .data .container {\n      flex-flow: row nowrap;\n    }\n    .data .col-l {\n      width: 30%;\n    }\n    .data .col-r {\n      padding-left: 24px;\n    }\n  }\n\n  ",'\n</style>\n<div class="hero">\n  <div class="container flex">\n  <img src="','">\n  <div class="text flex flex-column">\n    <div class="text-default mt-0 h1 bold mb-3">','</div>\n    <div class="flex flex-column justify-content-between flex-grow-1 content">\n      <div>',"</div>\n      <div>",'</div>\n    </div>\n  </div>\n  </div>\n</div>\n<div class="search bg-primary">\n  <div class="container flex justify-content-center"><rp-search></rp-search></div>\n</div>\n<div class="data bg-light">\n  <div class="container flex">\n    <div class="col-l">\n      <div ?hidden="','" class="loading1">loading</div>\n      <rp-alert ?hidden="','">Error loading academic works</rp-alert>\n      <rp-link-list-counts ?hidden="','"\n                            links="','"\n                            view-all-link=\'{"text": "View All Works"}\'\n                            header="','">\n      </rp-link-list-counts>\n    </div>\n    <div class="col-r flex-grow-1">\n      <div class="people">\n        <h2 class="mt-0">\n          <span class="bold mr-2">','</span>\n          <span class="weight-regular">People</span>\n        </h2>\n        <div class="people-container">\n          ','\n        </div>\n      </div>\n      <div class="subjects">\n        <h2>\n          <span class="bold mr-2">','</span>\n          <span class="weight-regular">Research Subjects</span>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>\n\n']);return p=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=this;return Object(r.b)(p(),l.a,this.theme.homeHeroImage,this.theme.homeHeroTitle,Object(o.a)(this.theme.homeHeroContentTop),Object(o.a)(this.theme.homeHeroContentBottom),"error"==this.facetsStatus||"loaded"==this.facetsStatus,"loading"==this.facetsStatus||"loaded"==this.facetsStatus,"loading"==this.facetsStatus||"error"==this.facetsStatus,JSON.stringify(this.academicWorks),JSON.stringify({text:"Academic Works",count:this.academicWorksTotal}),this.peopleTotal,this.CollectionModel._formatPeople(this.people).map((function(t){return Object(r.b)(u(),t.name,t.title,e.peopleWidth)})),this.subjectsTotal)}n(22),n(80),n(82),n(81),n(83);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){m(i,r,o,a,s,"next",e)}function s(e){m(i,r,o,a,s,"throw",e)}a(void 0)}))}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(i,e);var t,n,r,o=S(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this)).render=f.bind(O(e)),e._injectModel("CollectionModel","AppStateModel"),e.facets={},e.academicWorks=[],e.facetsStatus="loading",e.academicWorksTotal=0,e.peopleStatus="loading",e.people=[],e.peopleTotal=0,e.subjectsTotal=0,e.setPeopleWidth(window.innerWidth),e.context=APP_CONFIG.data.jsonldContext,e.theme=APP_CONFIG.theme,e.AppStateModel.get().then((function(t){return e._onAppStateUpdate(t)})),e._handleResize=e._handleResize.bind(O(e)),e}return x(i,null,[{key:"properties",get:function(){return{theme:{type:Object},facetsStatus:{type:String},facets:{type:Object},academicWorks:{type:Array},academicWorksTotal:{type:parseInt},peopleStatus:{type:String},people:{type:Array},peopleTotal:{type:parseInt},peopleWidth:{type:parseInt},subjectsTotal:{type:parseInt},context:{type:String},visible:{type:Boolean}}}}]),x(i,[{key:"updated",value:function(e){var t=this;e.has("facetsStatus")&&"loaded"==this.facetsStatus&&this._getPeople(),e.has("visible")&&this.visible&&requestAnimationFrame((function(){return t._handleResize()}))}},{key:"connectedCallback",value:function(){g(R(i.prototype),"connectedCallback",this).call(this),window.addEventListener("resize",this._handleResize)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("resize",this._handleResize),g(R(i.prototype),"disconnectedCallback",this).call(this)}},{key:"_onAppStateUpdate",value:(r=b(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getFacets();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"_handleResize",value:function(){if(this.visible){var e=window.innerWidth;this.setPeopleWidth(e)}}},{key:"setPeopleWidth",value:function(e){var t=250;e<576?t=e-30-72:e<768&&(t=.7*(e-30)-72-30),this.peopleWidth=Math.floor(t)}},{key:"_getPeople",value:(n=b(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.CollectionModel.overview("randomPeople",{limit:4,total:this.peopleTotal});case 2:if(t=e.sent,this.peopleStatus=t.state,"loaded"==t.state){e.next=6;break}return e.abrupt("return");case 6:this.people=t.payload.results,console.log(this.people);case 8:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"_getFacets",value:(t=b(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.CollectionModel.overview("facets");case 2:if(t=e.sent,this.facetsStatus=t.state,"loaded"==t.state){e.next=6;break}return e.abrupt("return");case 6:this.facets=t.payload.aggregations.facets["@type"],e.t0=regeneratorRuntime.keys(this.facets);case 8:if((e.t1=e.t0()).done){e.next=18;break}if(!(n=e.t1.value).startsWith("bibo:")){e.next=14;break}return r=this._formatBibType(n),this.academicWorks.push({text:r,count:this.facets[n],facet:n}),e.abrupt("continue",8);case 14:n==this.context+":publication"&&(this.academicWorksTotal=this.facets[n]),n==this.context+":person"&&(this.peopleTotal=this.facets[n]),e.next=8;break;case 18:this.academicWorks.sort((function(e,t){var n=e.text.toUpperCase(),r=t.text.toUpperCase();return n<r?-1:n>r?1:0}));case 19:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_formatBibType",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e=e.slice(5),t){e=v(e);for(var r=0;r<e.length;r++)0!=r&&e[r]==e[r].toUpperCase()&&(e[r]=" "+e[r]);e=e.join("")}return n&&(e+="s"),e}}]),i}(Mixin(r.a).with(LitCorkUtils));customElements.define("rp-page-home",_)}}]);