(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return z}));var r=e(2),i=e(41),o=e.n(i);function c(){var t=m([""]);return c=function(){return t},t}function a(){var t=m(['\n        <button type="button" @click="','" class="load-more">Load more articles</button>']);return a=function(){return t},t}function u(){var t=m(['\n          <rp-citation class="mb-3" .data="','"></rp-citation>\n          ']);return u=function(){return t},t}function s(){var t=m([""]);return s=function(){return t},t}function l(){var t=m(['\n        <a class="export mr-3" href="','">Export</a>\n      ']);return l=function(){return t},t}function f(){var t=m(['<div><a href="','">',"</a></div>"]);return f=function(){return t},t}function d(){var t=m(['<div><a href="','">',"</a></div>"]);return d=function(){return t},t}function p(){var t=m(["<div>","</div>"]);return p=function(){return t},t}function h(){var t=m([""]);return h=function(){return t},t}function b(){var t=m(["<rp-badge>","</rp-badge>"]);return b=function(){return t},t}function v(){var t=m(['\n        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>\n        <p class="text-light mt-2 mb-0">\n        ',"\n        </p>\n        "]);return v=function(){return t},t}function y(){var t=m(["\n\n<style>\n  :host {\n    display: block;\n  }\n  .herotop {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    flex-grow: 1;\n  }\n  .heromain {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n  #about .cols {\n    display: flex;\n  }\n  #about .cols > div {\n    width: 50%;\n  }\n  .pub-count {\n    background-color: var(--tcolor-primary);\n    color: var(--tcolor-light);\n    min-height: 60px;\n    min-width: 60px;\n    border-radius: 50%;\n    font-weight: var(--font-weight-bold);\n    font-size: var(--font-size-h2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  rp-badge {\n    margin-left: 8px;\n  }\n  rp-badge:first-child {\n    margin-left: 0;\n  }\n  .load-more {\n    height: 44px;\n    background-color: var(--tcolor-primary20);\n    font-size: var(--font-size);\n    color: var(--tcolor-text);\n    font-weight: var(--font-weight);\n    border: none;\n    padding: 0 15px;\n    cursor: pointer;\n  }\n  .load-more:hover {\n    background-color: var(--tcolor-hover-bg);\n  }\n  a.export {\n    text-decoration: none;\n    display: block;\n    background-color: var(--tcolor-primary20);\n    font-size: var(--font-size);\n    color: var(--tcolor-text) !important;\n    font-weight: var(--font-weight);\n    padding: 10px 15px;\n  }\n  a.export:hover {\n    background-color: var(--tcolor-hover-bg);\n    color: var(--tcolor-text);\n  }\n  ",'\n</style>\n\n\n<div class="individual container top">\n  <div ?hidden="','" class="flex align-items-center justify-content-center">\n    <div class="loading1">loading</div>\n  </div>\n  <div ?hidden="','" class="flex align-items-center justify-content-center">\n    <rp-alert>Error loading individual.</rp-alert>\n  </div>\n  <div class="data" ?hidden="','">\n  <rp-hero-image>\n    <div slot="top" class="herotop">\n      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>\n      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>\n    </div>\n    <div slot="main" class="heromain">\n      <rp-avatar size="lg"></rp-avatar>\n      <h2 class="name text-secondary h1 bold mb-0 text-center">','</h2>\n      <p class="text-light h3 mb-2 mt-1 text-center">',"</p>\n      ",'\n      <div></div>\n    </div>\n  </rp-hero-image>\n  <rp-link-list class="bg-light p-3"\n                direction="horizontal"\n                .links="','"\n                current-link="','">\n  </rp-link-list>\n\n  <section id="about" class="bg-light mt-3" ?hidden="','">\n    <h1 class="weight-regular mt-0">About</h1>\n    <h2 hidden>Overview</h2>\n    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n    ex ea commodo consequat. </p>\n    <div class="cols">\n      <div>\n        <div>\n          <h3 class="mb-2">Positions</h3>\n          ','\n        </div>\n        <div><h3 class="mb-2">Contact</h3>','</div>\n      </div>\n      <div>\n        <h3 class="mb-2">Websites</h3>\n        ','\n      </div>\n    </div>\n  </section>\n\n  <section id="publications" class="bg-light mt-3" ?hidden="','">\n    <div class="flex justify-content-between">\n      <h1 class="weight-regular mt-0">Publications</h1>\n      <div class="flex align-items-center">','\n        <div class="pub-count">','</div>\n      </div>\n\n    </div>\n    <h2>Selected Publications</h2>\n      <div ?hidden="','" class="flex align-items-center justify-content-center">\n        <div class="loading1">loading</div>\n      </div>\n      <div ?hidden="','" class="flex align-items-center justify-content-center">\n        <rp-alert>Error loading publications.</rp-alert>\n      </div>\n      <div class="data" ?hidden="','">\n        ',"\n      </div>\n      ",'\n  </section>\n\n  <section id="research" class="bg-light mt-3" hidden>\n    <h1 class="weight-regular">Research</h1>\n    <h2>Overview</h2>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n      et dolore magna aliqua.<p>\n    <h2>Keywords</h2>\n      <p>lorem, ipsum, dolor sit amit</p>\n  </section>\n  <section id="contact" class="bg-light mt-3" hidden>\n    <h1 class="weight-regular">Contact</h1>\n  </section>\n  </div>\n</div>\n\n']);return y=function(){return t},t}function m(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function g(){return Object(r.b)(y(),o.a,"error"==this.individualStatus||"loaded"==this.individualStatus,"loading"==this.individualStatus||"loaded"==this.individualStatus,"loading"==this.individualStatus||"error"==this.individualStatus,this.individual.label,this.getIndividualTitles().join(", "),this.researchSubjects.length>0?Object(r.b)(v(),this.researchSubjects.splice(0,this.researchSubjectsToShow).map((function(t){return Object(r.b)(b(),t.label)}))):Object(r.b)(h()),this.PersonModel.getSections(),this.activeSection.index,this.hideSection("about"),this.getIndividualTitles().map((function(t){return Object(r.b)(p(),t)})),this.getEmailAddresses().map((function(t){return Object(r.b)(d(),"mailto:"+t,t)})),this.getWebsites().map((function(t){return Object(r.b)(f(),t.href,t.text)})),this.hideSection("publications"),this.isOwnProfile?Object(r.b)(l(),"/api/miv/".concat(this.individualId)):Object(r.b)(s()),this.totalPublications,"error"==this.publicationStatus||"loaded"==this.publicationStatus,"loading"==this.publicationStatus||"loaded"==this.publicationStatus,"loading"==this.publicationStatus||"error"==this.publicationStatus,this.retrievedPublications.map((function(t){return Object(r.b)(u(),t)})),this.retrievedPublications.length<this.totalPublications?Object(r.b)(a(),this._loadMorePubs):Object(r.b)(c()))}e(86),e(88),e(89),e(96),e(91),e(57),e(92);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,n,e,r,i,o,c){try{var a=t[o](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,i)}function w(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function c(t){j(o,r,i,c,a,"next",t)}function a(t){j(o,r,i,c,a,"throw",t)}c(void 0)}))}}function k(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,n,e){return n&&k(t.prototype,n),e&&k(t,e),t}function x(t,n){return(x=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function P(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=R(t);if(n){var i=R(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return _(this,e)}}function _(t,n){return!n||"object"!==O(n)&&"function"!=typeof n?C(t):n}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)}(a,t);var n,e,r,i,o,c=P(a);function a(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this)).render=g.bind(C(t)),t._injectModel("PersonModel","AppStateModel"),t.individual={},t.individualId="",t.individualStatus="loading",t.publicationStatus="loading",t.visible=!1,t.retrievedPublications=[],t.totalPublications=0,t.researchSubjects=[],t.researchSubjectsToShow=4,t.activeSection={index:0},t.isOwnProfile=!1,t.AppStateModel.get().then((function(n){return t._onAppStateUpdate(n)})),t}return S(a,null,[{key:"properties",get:function(){return{individual:{type:Object},individualId:{type:String},individualStatus:{type:String},publicationStatus:{type:String},retrievedPublications:{type:Array},totalPublications:{type:Number},researchSubjects:{type:Array},researchSubjectsToShow:{type:Number},activeSection:{type:Object},visible:{type:Boolean},isOwnProfile:{type:Boolean}}}}]),S(a,[{key:"_onAppStateUpdate",value:(o=w(regeneratorRuntime.mark((function t(n){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:requestAnimationFrame((function(){return e.doUpdate(n)}));case 1:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},{key:"doUpdate",value:(i=w(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.updateComplete;case 2:if(this.visible){t.next=4;break}return t.abrupt("return");case 4:if((e=n.location.path).length>=2&&(this.individualId=e[1],this.PersonModel.individualId=this.individualId),this.activeSection=this.PersonModel.getActiveSection(e[2]),this.individualId){t.next=9;break}return t.abrupt("return");case 9:return this.totalPublications=0,t.next=12,Promise.all([this._doMainQuery(this.individualId),this._doPubQuery(this.individualId)]);case 12:this.isOwnProfile=this._isOwnProfile();case 13:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"_loadMorePubs",value:(r=w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._doPubQuery(this.individualId);case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"_doMainQuery",value:(e=w(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.PersonModel.getIndividual(n);case 2:if(e=t.sent,this.individualStatus=e.state,"loaded"==e.state){t.next=6;break}return t.abrupt("return");case 6:this.individual=e.payload,APP_CONFIG.verbose&&console.log(e);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"_doPubQuery",value:(n=w(regeneratorRuntime.mark((function t(n){var e,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=0,n||(n=this.individualId),this.retrievedPublications.length<this.totalPublications&&(e=this.retrievedPublications.length),t.next=5,this.PersonModel.getPublications(n,e);case 5:if(r=t.sent,this.publicationStatus=r.state,"loaded"==r.state){t.next=9;break}return t.abrupt("return");case 9:APP_CONFIG.verbose&&console.log("pubs",r),this.retrievedPublications=r.payload.results,r.payload.results.length>0&&(this.totalPublications=r.payload.total,(i=r.payload.aggregations.facets["hasSubjectArea.label"])&&Object.keys(i).length),APP_CONFIG.verbose&&console.log("research subjects",this.researchSubjects);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"_isOwnProfile",value:function(){try{if(APP_CONFIG.user.username.toLowerCase().split("@")[0]===this.individualId.toLowerCase())return!0}catch(t){}return!1}},{key:"hideSection",value:function(t){return 0!=this.activeSection.index&&t!=this.activeSection.id}},{key:"getIndividualTitles",value:function(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.title?Array.isArray(this.individual.hasContactInfo.title)?this.individual.hasContactInfo.title:[this.individual.hasContactInfo.title]:[]}},{key:"getEmailAddresses",value:function(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.hasEmail?Array.isArray(this.individual.hasContactInfo.hasEmail)?this.individual.hasContactInfo.hasEmail.map((function(t){return t.email})):[this.individual.hasContactInfo.hasEmail.email]:[]}},{key:"getWebsites",value:function(){var t=[];return this.individual?(this.individual.orcidId&&t.push({text:"Orcid",href:this.individual.orcidId["@id"]}),this.individual.scopusId&&t.push({text:"Scopus",href:"https://www.scopus.com/authid/detail.uri?authorId=".concat(this.individual.scopusId)}),t):t}},{key:"formatSubjectsObject",value:function(t){var n=[];for(var e in t){var r={subject:e,count:t[e],label:e},i=e.split(" ");i[0].startsWith("0")&&!isNaN(i[0])&&(r.label=i.slice(1).join(" ")),n.push(r)}return n.sort((function(t,n){return n.count-t.count})),n}}]),a}(Mixin(r.a).with(LitCorkUtils));customElements.define("rp-page-individual",z)},86:function(t,n,e){"use strict";var r=e(2),i=e(33);e(34);function o(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n  <style>\n    :host {\n      display: inline-block;\n    }\n    .container {\n      display: flex;\n      align-items: center;\n      padding: 8px;\n      font-size: var(--font-size-small);\n    }\n    .container.danger {\n      background-color: var(--tcolor-light);\n      border-width: 1px;\n      border-style: solid;\n      border-color: var(--tcolor-danger);\n      color: var(--tcolor-danger);\n    }\n    .container iron-icon {\n      width: 24px;\n      height: 24px;\n      min-width: 24px;\n      min-height: 24px;\n      margin-right: 8px;\n    }\n  </style>\n  <div class="container ','">\n    <iron-icon icon="warning"></iron-icon>\n    <div id="content"><slot></slot></div>\n  </div>\n  ']);return o=function(){return t},t}function c(){return Object(r.b)(o(),Object(i.a)(this._constructClasses()))}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,n,e){return n&&u(t.prototype,n),e&&u(t,e),t}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=h(t);if(n){var i=h(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return d(this,e)}}function d(t,n){return!n||"object"!==a(n)&&"function"!=typeof n?p(t):n}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(e,t);var n=f(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).render=c.bind(p(t)),t.themeColor="danger",t}return s(e,null,[{key:"properties",get:function(){return{themeColor:{type:String,attribute:"theme-color"}}}}]),s(e,[{key:"_constructClasses",value:function(){var t={};return t[this.themeColor]=!0,t}}]),e}(r.a);customElements.define("rp-alert",b)},88:function(t,n,e){"use strict";var r=e(2),i=e(33),o=e(34);function c(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n  <style>\n    :host {\n      display: inline-block;\n    }\n    iron-icon {\n      color: var(--tcolor-primary);\n      height: 50%;\n      width: 50%;\n    }\n    .circle {\n      background-color: var(--tcolor-bg-primary);\n      height: 70px;\n      width: 70px;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .circle.size-lg {\n      height: 150px;\n      width: 150px;\n    }\n    .circle.size-sm {\n      height: 60px;\n      width: 60px;\n    }\n    .photo {\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n  </style>\n  <div class="circle ','" style="','">\n    ',"\n  </div>\n  "]);return c=function(){return t},t}function a(){return Object(r.b)(c(),Object(i.a)(this.constructClasses()),Object(o.a)(this.constructStyles()),this.renderFace())}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["<iron-icon icon='face'></iron-icon>"]);return s=function(){return t},t}function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n,e){return n&&l(t.prototype,n),e&&l(t,e),t}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v(t);if(n){var i=v(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return h(this,e)}}function h(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?b(t):n}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&d(t,n)}(e,t);var n=p(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).render=a.bind(b(t)),t}return f(e,null,[{key:"properties",get:function(){return{size:{type:String},src:{type:String}}}}]),f(e,[{key:"constructClasses",value:function(){var t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}},{key:"constructStyles",value:function(){var t={};return this.src&&"undefined"!=this.src&&(t["background-image"]="url(".concat(this.src,")")),t}},{key:"renderFace",value:function(){if(!this.src||"undefined"==this.src)return Object(r.b)(s())}}]),e}(r.a);customElements.define("rp-avatar",y)},89:function(t,n,e){"use strict";var r=e(2),i=e(33);function o(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n<style>\n  :host {\n    display: inline-block;\n  }\n  span {\n    display: inline-block;\n    border: 2px solid;\n    border-radius: 1em;\n    padding: .3em .7em;\n    line-height: 1;\n    border-color: var(--tcolor-accent0);\n    transition: 0.3s;\n  }\n  span.size-lg {\n    padding: .55em .9em;\n  }\n  a:hover span {\n      background-color: var(--tcolor-hover-bg);\n      color:  var(--tcolor-hover-text);\n      border-color: var(--tcolor-hover-bg);\n  }\n  span.color-0 {\n    border-color: var(--tcolor-accent0);\n  }\n  span.color-1 {\n    border-color: var(--tcolor-accent1);\n  }\n  span.color-2 {\n    border-color: var(--tcolor-accent2);\n  }\n  span.color-3 {\n    border-color: var(--tcolor-accent3);\n  }\n  span.color-4 {\n    border-color: var(--tcolor-accent4);\n  }\n  span.color-5 {\n    border-color: var(--tcolor-accent5);\n  }\n  a {\n    text-decoration: none;\n  }\n  a:link {\n    color: var(--tcolor-text);\n  }\n  a:visited {\n    color: var(--tcolor-text);\n  }\n  a:hover {\n    color: var(--tcolor-text);\n  }\n  a:active {\n    color: var(--tcolor-text);\n  }\n\n</style>\n  ","\n"]);return o=function(){return t},t}function c(){return Object(r.b)(o(),this._renderBadge())}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){var t=f(["<span class=",">\n      <slot></slot>\n    </span>"]);return u=function(){return t},t}function s(){var t=f(["",""]);return s=function(){return t},t}function l(){var t=f(["<a href=",">","</a>"]);return l=function(){return t},t}function f(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,n,e){return n&&h(t.prototype,n),e&&h(t,e),t}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function y(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=O(t);if(n){var i=O(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return m(this,e)}}function m(t,n){return!n||"object"!==a(n)&&"function"!=typeof n?g(t):n}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}(e,t);var n=y(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).maxColor=6,t.render=c.bind(g(t)),t}return b(e,null,[{key:"properties",get:function(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}}]),b(e,[{key:"constructClasses",value:function(){var t=this,n={};if(this.size&&(n["size-"+this.size]=!0),this.colorSequence){n["color-"+Math.floor(this.colorSequence).toString()]=!0}else{var e=d(this.parentNode.childNodes).filter((function(n){return n.tagName===t.tagName}));if(e.length>0)n["color-"+(e.indexOf(this)%this.maxColor).toString()]=!0;else n["color-0"]=!0}return n}},{key:"_renderBadge",value:function(){return this.href?Object(r.b)(l(),this.href,this._renderSpan()):Object(r.b)(s(),this._renderSpan())}},{key:"_renderSpan",value:function(){return Object(r.b)(u(),Object(i.a)(this.constructClasses()))}}]),e}(r.a);customElements.define("rp-badge",j)},91:function(t,n,e){"use strict";var r=e(2),i=e(33),o=e(34);function c(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(['\n  <style>\n    :host {\n      display: block;\n    }\n    .container {\n      width: 100%;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n    .slot {\n      margin-left: 10px;\n      margin-right: 10px;\n    }\n    #top {\n      height: 30px;\n      padding-top: 10px;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n    #bottom {\n      height: 30px;\n      padding-bottom: 10px;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n  </style>\n  <div class="container ','" style="','">\n      <div class="slot" id="top"><slot name="top"></slot></div>\n      <div class="slot" id="main"><slot name="main"></slot></div>\n      <div class="slot" id="bottom"><slot name="bottom"></slot></div>\n\n  </div>\n  ']);return c=function(){return t},t}function a(){return Object(r.b)(c(),Object(i.a)(this.constructClasses()),Object(o.a)(this.constructStyles()))}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,n,e){return n&&s(t.prototype,n),e&&s(t,e),t}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=b(t);if(n){var i=b(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return p(this,e)}}function p(t,n){return!n||"object"!==u(n)&&"function"!=typeof n?h(t):n}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(e,t);var n=d(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).render=a.bind(h(t)),t.assetFolder="/images/profile-features/",t.assetMax=29,t.shuffle(),t}return l(e,null,[{key:"properties",get:function(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}}]),l(e,[{key:"constructClasses",value:function(){return{}}},{key:"constructStyles",value:function(){var t={};return this.src?t["background-image"]="var(--tcolor-hero-film), url(".concat(this.src,")"):(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]="var(--tcolor-hero-film), url(".concat(this.assetFolder+this.assetPick+".jpg",")")),t}},{key:"shuffle",value:function(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}]),e}(r.a);customElements.define("rp-hero-image",v)},92:function(t,n,e){"use strict";var r=e(2),i=e(33);function o(){var t=function(t,n){n||(n=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}(["\n  <style>\n    :host {\n      display: block;\n      color: var(--tcolor-link-text);\n    }\n    .container {\n      display: flex;\n    }\n    .container.h {\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n    .container.h .link {\n      margin-left: 1em;\n      margin-right: 1em;\n    }\n    .container.v {\n      flex-flow: column nowrap;\n      align-items: flex-end;\n    }\n    .container.v .link {\n      margin-bottom: 1.5em;\n    }\n    .link {\n      cursor: pointer;\n    }\n    a {\n      text-decoration: none;\n      color: var(--tcolor-link-text);\n    }\n    .link:hover, a.link:hover {\n      color: var(--tcolor-link-hover-text);\n    }\n    .link.selected, a.link.selected {\n      pointer-events: none;\n      color: var(--tcolor-text);\n      font-weight: var(--font-weight-bold);\n      cursor: auto;\n      border-bottom: 2px solid var(--tcolor-secondary);\n    }\n    .link.disabled, a.link.disabled {\n      color: var(--tcolor-link-disabled-text);\n      pointer-events: none;\n      cursor: auto;\n    }\n    link.disabeld:hover, a.link.disabled:hover {\n      color: var(--tcolor-link-disabled-text);\n    }\n    .link.selected:hover, a.link.selected:hover {\n      color: var(--tcolor-text);\n    }\n  </style>\n  <div class=",">\n    ","\n  </div>\n  "]);return o=function(){return t},t}function c(){var t=this;return Object(r.b)(o(),Object(i.a)(this._containerClasses),this.links.map((function(n,e){return t._renderLink(n,e)})))}function a(){var t=s(['<div @click="','" link="','" class=',">","</div>"]);return a=function(){return t},t}function u(){var t=s(['<a link="','" class="','" href="','">',"</a>"]);return u=function(){return t},t}function s(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,n,e){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=m(t)););return t}(t,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(e):i.value}})(t,n,e||t)}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,n,e){return n&&d(t.prototype,n),e&&d(t,e),t}function h(t,n){return(h=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=m(t);if(n){var i=m(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return v(this,e)}}function v(t,n){return!n||"object"!==l(n)&&"function"!=typeof n?y(t):n}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&h(t,n)}(e,t);var n=b(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).render=c.bind(y(t)),t.direction="v",t.currentLink=0,t._containerClasses={container:!0},t._containerClasses[t.direction]=!0,t._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}}),t}return p(e,null,[{key:"properties",get:function(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}}]),p(e,[{key:"attributeChangedCallback",value:function(t,n,r){"direction"==t&&r&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[r.toLowerCase()[0]]=!0),f(m(e.prototype),"attributeChangedCallback",this).call(this,t,n,r)}},{key:"_renderLink",value:function(t,n){var e="",o="",c=!1,s={link:!0};return"string"==typeof t?e=t:"object"===l(t)&&(e=t.text,t.disabled&&(c=!0),t.href&&(o=t.href)),n==this.currentLink&&(s.selected=!0),this.hasHeaderLink&&0==n&&(s["link-header"]=!0),s.disabled=c,o?Object(r.b)(u(),n,Object(i.a)(s),o,e):e?Object(r.b)(a(),this.handleClick,n,Object(i.a)(s),e):void 0}},{key:"handleClick",value:function(t){var n=parseInt(t.target.getAttribute("link"));n==this.currentLink||t.target.classList.contains("disabled")||(this.currentLink=n,this.dispatchEvent(this._changedLink))}}]),e}(r.a);customElements.define("rp-link-list",g)},96:function(t,n,e){"use strict";var r=e(2),i=e(33);function o(){var t=a(["<span>",", ","</span>; "]);return o=function(){return t},t}function c(){var t=a(['\n  <style>\n    :host {\n      display: block;\n      font-size: var(--font-size);\n    }\n    a {\n      color: var(--tcolor-link-text)\n    }\n  </style>\n  <div class="container ','" ?hidden="','">\n  <a href="#">',"</a>\n  ",".\n  </div>\n  "]);return c=function(){return t},t}function a(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function u(){return Object(r.b)(c(),Object(i.a)(this.constructClasses()),!this.data,this.data.label,this.authors.map((function(t){return Object(r.b)(o(),t.nameLast,t.nameFirst)})))}function s(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(a)throw o}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,n,e){return n&&d(t.prototype,n),e&&d(t,e),t}function h(t,n){return(h=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=m(t);if(n){var i=m(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return v(this,e)}}function v(t,n){return!n||"object"!==f(n)&&"function"!=typeof n?y(t):n}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&h(t,n)}(e,t);var n=b(e);function e(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(t=n.call(this)).render=u.bind(y(t)),t.citationStyle="MLA",t.data={},t.authors=[],t}return p(e,null,[{key:"properties",get:function(){return{data:{type:Object},citationStyle:{type:String,attribute:"citation-style"},authors:{type:Array}}}}]),p(e,[{key:"constructClasses",value:function(){return{}}},{key:"updated",value:function(t){t.has("data")&&this.parseData()}},{key:"parseData",value:function(){if(0!=Object.keys(this.data).length){var t=[];if(this.data.Authorship&&"object"===f(this.data.Authorship)){var n=this.data.Authorship;Array.isArray(n)||(n=[n]);var e,r=s(n);try{for(r.s();!(e=r.n()).done;){var i=e.value;i.hasName&&(i.nameFirst=i.hasName.givenName,i.nameLast=i.hasName.familyName,i["vivo:rank"]||(i["vivo:rank"]=1/0),t.push(i))}}catch(t){r.e(t)}finally{r.f()}t.sort((function(t,n){return t["vivo:rank"]-n["vivo:rank"]})),this.authors=t}}}}]),e}(r.a);customElements.define("rp-citation",g)}}]);