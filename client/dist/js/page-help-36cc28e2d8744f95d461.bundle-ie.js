(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(2),o=n(41),i=n.n(o);function u(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\n<style>\n  :host {\n    display: block;\n  }\n  ",'\n</style> \n<div class="help container top">\n  <div class="section">\n    <h1>Help</h1>\n    <hr class="light">\n\n    <div>\n      <h2>Accessing the Registry</h2>\n      <h2>Automated Profile Content</h2>\n      <h2>Enhancing your Profile</h2>\n      <h2>Don\'t see your question?</h2>\n    </div>\n  </div>\n  \n\n</div>\n\n']);return u=function(){return t},t}function c(){return Object(r.b)(u(),i.a)}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){f(i,r,o,u,c,"next",t)}function c(t){f(i,r,o,u,c,"throw",t)}u(void 0)}))}}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,t);var e,n,r=y(o);function o(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this)).render=c.bind(d(t)),t._injectModel("AppStateModel"),t.boolean=!1,t.AppStateModel.get().then((function(e){return t._onAppStateUpdate(e)})),t}return l(o,null,[{key:"properties",get:function(){return{visible:{type:Boolean}}}}]),l(o,[{key:"_onAppStateUpdate",value:(n=s(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:requestAnimationFrame((function(){return n.doUpdate(e)}));case 1:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"doUpdate",value:(e=s(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.updateComplete;case 2:if(this.visible){t.next=4;break}return t.abrupt("return");case 4:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),o}(Mixin(r.a).with(LitCorkUtils));customElements.define("rp-page-help",m)}}]);