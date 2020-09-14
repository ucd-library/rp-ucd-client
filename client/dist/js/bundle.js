!function(t){function e(e){for(var i,s,r=e[0],o=e[1],a=0,l=[];a<r.length;a++)s=r[a],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&l.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);for(h&&h(e);l.length;)l.shift()()}var i={},n={1:0};function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,s){i=n[t]=[e,s]}));e.push(i[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(t){return s.p+""+({0:"page-organizations~page-people~page-search~page-works",2:"page-components",3:"page-home",4:"page-individual",5:"page-organizations",6:"page-people",7:"page-search",8:"page-work",9:"page-works"}[t]||t)+"-399a28e2ca3afb851577.bundle.js"}(t);var h=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(l);var i=n[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",h.name="ChunkLoadError",h.type=s,h.request=r,i[1](h)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/js/",s.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var h=o;s(s.s=84)}([function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,i){"use strict";i.d(e,"r",(function(){return s})),i.d(e,"n",(function(){return r})),i.d(e,"k",(function(){return o})),i.d(e,"l",(function(){return a})),i.d(e,"i",(function(){return h})),i.d(e,"m",(function(){return l})),i.d(e,"a",(function(){return c})),i.d(e,"e",(function(){return d})),i.d(e,"g",(function(){return p})),i.d(e,"p",(function(){return u})),i.d(e,"f",(function(){return f})),i.d(e,"h",(function(){return m})),i.d(e,"b",(function(){return g})),i.d(e,"j",(function(){return v})),i.d(e,"c",(function(){return _})),i.d(e,"o",(function(){return y})),i.d(e,"d",(function(){return b})),i.d(e,"q",(function(){return z}));i(5);var n=i(18);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=!window.ShadyDOM||!window.ShadyDOM.inUse,r=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,s&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let o=window.Polymer&&window.Polymer.rootPath||Object(n.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let h=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let l=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let c=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let d=window.Polymer&&window.Polymer.legacyOptimizations||!1;let p=window.Polymer&&window.Polymer.legacyWarnings||!1;let u=window.Polymer&&window.Polymer.syncInitialRender||!1;let f=window.Polymer&&window.Polymer.legacyUndefined||!1;let m=window.Polymer&&window.Polymer.orderedComputed||!1;let g=!0;let v=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let _=window.Polymer&&window.Polymer.fastDomIf||!1;let y=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let b=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let z=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},function(t,e,i){"use strict";i.d(e,"b",(function(){return d.e})),i.d(e,"c",(function(){return d.f})),i.d(e,"a",(function(){return S}));var n=i(17),s=i(7);function r(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=a(n),o=n[r],h=-1,l=0;const c=[];let d=null;for(;s.nextNode();){h++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===h;)o.index=null!==d?-1:o.index-l,r=a(n,r),o=n[r]}c.forEach(t=>t.parentNode.removeChild(t))}const o=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},a=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(Object(s.d)(e))return i}return-1};var h=i(25),l=i(23),c=i(30),d=i(11);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=(t,e)=>`${t}--${e}`;let u=!0;void 0===window.ShadyCSS?u=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),u=!1);const f=t=>e=>{const i=p(e.type,t);let n=l.a.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},l.a.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(s.f);if(r=n.keyString.get(o),void 0===r){const i=e.getTemplateElement();u&&window.ShadyCSS.prepareTemplateDom(i,t),r=new s.a(e,i),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},m=["html","svg"],g=new Set,v=(t,e,i)=>{g.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:h}=s;if(0===h)return void window.ShadyCSS.prepareTemplateStyles(n,t);const c=document.createElement("style");for(let t=0;t<h;t++){const e=s[t];e.parentNode.removeChild(e),c.textContent+=e.textContent}(t=>{m.forEach(e=>{const i=l.a.get(p(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),r(t,i)})})})(t);const d=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let h=a(s),l=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===i&&(l=o(e),i.parentNode.insertBefore(e,i));-1!==h&&s[h].index===c;){if(l>0){for(;-1!==h;)s[h].index+=l,h=a(s,h);return}h=a(s,h)}}}(i,c,d.firstChild):d.insertBefore(c,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const u=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==u)e.insertBefore(u.cloneNode(!0),e.firstChild);else if(i){d.insertBefore(c,d.firstChild);const t=new Set;t.add(c),r(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const _={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},y=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};class z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=b){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||b}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=y){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||_,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||_.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=b){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,s=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}z.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const w="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const C={};class S extends z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?w?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==C&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return C}}S.finalized=!0,S.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=h.a.has(e),o=u&&11===e.nodeType&&!!e.host,a=o&&!g.has(s),l=a?document.createDocumentFragment():e;if(Object(h.b)(t,l,Object.assign({templateFactory:f(s)},i)),a){const t=h.a.get(l);h.a.delete(l);const i=t.value instanceof c.a?t.value.template:void 0;v(s,l,i),Object(n.b)(e,e.firstChild),e.appendChild(l),h.a.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"g",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"i",(function(){return a})),i.d(e,"e",(function(){return h})),i.d(e,"f",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"h",(function(){return p}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function s(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function r(t,e){return 0===t.indexOf(e+".")}function o(t,e){return 0===e.indexOf(t+".")}function a(t,e,i){return e+i.slice(t.length)}function h(t,e){return t===e||r(t,e)||o(t,e)}function l(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function c(t){return Array.isArray(t)?l(t).split("."):t.toString().split(".")}function d(t,e,i){let n=t,s=c(e);for(let t=0;t<s.length;t++){if(!n)return;n=n[s[t]]}return i&&(i.path=s.join(".")),n}function p(t,e,i){let n=t,s=c(e),r=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(n=n[s[t]],!n)return}n[r]=i}else n[e]=i;return s.join(".")}},function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return m}));i(5);var n=i(0),s=(i(1),i(45)),r=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(n.a)(t);return o(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>o(t)?(t=t,Object(n.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):Object(n.a)(this._target).children&&(this._listenSlots(Object(n.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):Object(n.a)(this._target).children&&(this._unlistenSlots(Object(n.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.a.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Object(s.a)(e,this._effectiveNodes);for(let e,n=0;n<i.length&&(e=i[n]);n++)for(let i,n=0;n<e.removed.length&&(i=e.removed[n]);n++)t.removedNodes.push(i);for(let n,s=0;s<i.length&&(n=i[s]);s++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];o(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];o(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};i(24),i(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h=Element.prototype,l=h.matches||h.matchesSelector||h.mozMatchesSelector||h.msMatchesSelector||h.oMatchesSelector||h.webkitMatchesSelector,c=function(t,e){return l.call(t,e)};class d{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(i).importNode(t,e)}getEffectiveChildNodes(){return a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let n,s=0,r=e.length;s<r&&(n=e[s]);s++)n.nodeType===Node.ELEMENT_NODE&&c(n,t)&&i.push(n);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function p(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class u{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}d.prototype.cloneNode,d.prototype.appendChild,d.prototype.insertBefore,d.prototype.removeChild,d.prototype.replaceChild,d.prototype.setAttribute,d.prototype.removeAttribute,d.prototype.querySelector,d.prototype.querySelectorAll,d.prototype.parentNode,d.prototype.firstChild,d.prototype.lastChild,d.prototype.nextSibling,d.prototype.previousSibling,d.prototype.firstElementChild,d.prototype.lastElementChild,d.prototype.nextElementSibling,d.prototype.previousElementSibling,d.prototype.childNodes,d.prototype.children,d.prototype.classList,d.prototype.textContent,d.prototype.innerHTML;let f=d;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(d.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=d.prototype[e])}),p(t.prototype,["classList"]),f=t,Object.defineProperties(u.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&m(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const n=i[t];if(m(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(d.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),p(d.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(d.prototype,["textContent","innerHTML","className"]);const m=function(t){if((t=t||document)instanceof f)return t;if(t instanceof u)return t;let e=t.__domApi;return e||(e=t instanceof Event?new u(t):new f(t),t.__domApi=e),e}},function(t,e,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function s(){}s.prototype.__mixinApplications,s.prototype.__mixinSet;const r=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=n++;return function(n){let s=n.__mixinSet;if(s&&s[i])return n;let r=e,o=r.get(n);if(!o){o=t(n),r.set(n,o);let e=Object.create(o.__mixinSet||s||null);e[i]=!0,o.__mixinSet=e}return o}}},function(t,e,i){"use strict";i.d(e,"f",(function(){return n})),i.d(e,"g",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"c",(function(){return c})),i.d(e,"e",(function(){return d}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${s}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,p=-1,u=0;const{strings:f,values:{length:m}}=t;for(;u<m;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)h(e[t].name,o)&&n++;for(;n-- >0;){const e=f[u],i=d.exec(e)[2],n=i.toLowerCase()+o,s=t.getAttribute(n);t.removeAttribute(n);const a=s.split(r);this.parts.push({type:"attribute",index:p,name:i,strings:a}),u+=a.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,s=e.split(r),a=s.length-1;for(let e=0;e<a;e++){let i,r=s[e];if(""===r)i=c();else{const t=d.exec(r);null!==t&&h(t[2],o)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-o.length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++p})}""===s[a]?(n.insertBefore(c(),t),i.push(t)):t.data=s[a],u+=a}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&p!==l||(p++,e.insertBefore(c(),t)),l=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(i.push(t),p--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1}),u++}}else a.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const h=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,i){"use strict";i.d(e,"a",(function(){return Q}));var n=i(40),s=(i(12),i(5),i(32)),r=i(6);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(t,e,i,n,s){let r;s&&(r="object"==typeof i&&null!==i,r&&(n=t.__dataTemp[e]));let o=n!==i&&(n==n||i==i);return r&&o&&(t.__dataTemp[e]=i),o}const a=Object(r.a)(t=>class extends t{_shouldPropertyChange(t,e,i){return o(this,t,e,i,!0)}}),h=Object(r.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return o(this,t,e,i,this.mutableData)}});a._mutablePropertyChange=o;var l=i(1),c=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let d=null;function p(){return d}p.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:p,writable:!0}});const u=Object(s.a)(p),f=a(u);const m=Object(s.a)(class{});function g(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(c.a)(Object(c.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(c.a)(Object(c.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class v extends m{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,i)}}_showHideChildren(t){g(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}v.prototype.__dataHost,v.prototype.__templatizeOptions,v.prototype._methodHost,v.prototype.__templatizeOwner,v.prototype.__hostProps;const _=a(v);function y(t){let e=t.__dataHost;return e&&e._methodHost||e}function b(t,e,i){let n=i.mutableData?_:v;S.mixin&&(n=S.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(t),function(t,e,i,n){let s=i.hostProps||{};for(let e in n.instanceProps){delete s[e];let i=n.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:C(e,i)})}if(n.forwardHostProp&&e.__dataHost)for(let e in s)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(s,t,e,i),s}function z(t,e,i,n){let s=i.forwardHostProp;if(s&&e.hasHostProps){const a="template"==t.localName;let h=e.templatizeTemplateClass;if(!h){if(a){let t=i.mutableData?f:u;class n extends t{}h=e.templatizeTemplateClass=n}else{const i=t.constructor;class n extends i{}h=e.templatizeTemplateClass=n}let r=e.hostProps;for(let t in r)h.prototype._addPropertyEffect("_host_"+t,h.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:w(t,s)}),h.prototype._createNotifyingProperty("_host_"+t);l.g&&n&&function(t,e,i){const n=i.constructor._properties,{propertyEffects:s}=t,{instanceProps:r}=e;for(let t in s)if(!(n[t]||r&&r[t])){const e=s[t];for(let i=0;i<e.length;i++){const{part:n}=e[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),a)o=h,d=r=t,Object.setPrototypeOf(r,o.prototype),new o,d=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,h.prototype);const i=e.hostProps;for(let e in i)if(e="_host_"+e,e in t){const i=t[e];delete t[e],t.__data[e]=i}}}var r,o}function w(t,e){return function(t,i,n){e.call(t.__templatizeOwner,i.substring("_host_".length),n[i])}}function C(t,e){return function(t,i,n){e.call(t.__templatizeOwner,t,i,n[i])}}function S(t,e,i){if(l.m&&!y(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:v)._parseTemplate(t),s=n.templatizeInstanceClass;s||(s=b(t,n,i),n.templatizeInstanceClass=s);const r=y(t);z(t,n,i,r);let o=class extends s{};return o.prototype._methodHost=r,o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=n.hostProps,o=o,o}function x(t,e){let i;for(;e;)if(i=e.__dataHost?e:e.__templatizeInstance){if(i.__dataHost==t)return i;e=i.__dataHost}else e=Object(c.a)(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var M=i(44);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let O=!1;function H(){if(l.e&&!l.r){if(!O){O=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const L=Object(M.a)(h(Object(s.a)(HTMLElement)));customElements.define("dom-bind",class extends L{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),l.m)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,i,n){this.mutableData=!0}connectedCallback(){H()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(c.a)(Object(c.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});var P=i(27),E=i(19),A=i(24),V=i(3),T=i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const k=h(P.a);class N extends k{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!l.o,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),H()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(c.a)(Object(c.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=S(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(t,e){let i=this.__instances;for(let n,s=0;s<i.length&&(n=i[s]);s++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if(Object(V.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=i);let s=Object(V.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(s,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=E.a.debounce(this.__renderDebouncer,e>0?T.b.after(e):T.a,t.bind(this)),Object(A.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(A.b)()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),l.o&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((e,i,n)=>this.__filterFn(t[e],i,n))),this.__sortFn&&e.sort((e,i)=>this.__sortFn(t[e],t[i])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const n=this.__itemsIdxToInstIdx={};let s;for(s=0;s<e;s++){let e=this.__instances[s],r=i[s],o=t[r];n[r]=s,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,s),e._setPendingProperty(this.itemsIndexAs,r),e._flushProperties()):this.__insertInstance(o,s,r)}for(let t=this.__instances.length-1;t>=s;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const i=Object(c.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];i.appendChild(n)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(t,e,i){const n=this.__stampInstance(t,e,i);let s=this.__instances[e+1],r=s?s.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,r),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),n=i.indexOf("."),s=n<0?i:i.substring(0,n);if(s==parseInt(s,10)){let t=n<0?"":i.substring(n+1);this.__handleObservedPaths(t);let r=this.__itemsIdxToInstIdx[s],o=this.__instances[r];if(o){let i=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(i,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return x(this.template,t)}}customElements.define(N.is,N);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class I extends P.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=E.a.debounce(this.__renderDebouncer,T.a,()=>this.__render()),Object(A.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(c.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(c.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),H()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Object(c.a)(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Object(c.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Object(c.a)(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Object(c.a)(this).previousSibling!==e[e.length-1])for(let i,n=0;n<e.length&&(i=e[n]);n++)Object(c.a)(t).insertBefore(i,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Object(A.b)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),l.o&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const j=l.c?class extends I{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(l.m&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this.__template,!0);i.runEffects=(t,e,i)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(n.changedProps,e)),t(e,i);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:t,changedProps:{}}),i)for(const t in e){const e=Object(V.g)(t);n.changedProps[e]=this.__dataHost[e]}else Object.assign(n.changedProps,e)},this.__instance=e._stampTemplate(this.__template,i),Object(c.a)(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,g(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends I{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=S(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(V.g)(t)]=!0))}})),this.__instance=new this.__ctor,Object(c.a)(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(c.a)(t[0]).parentNode;if(e){e=Object(c.a)(e);for(let i,n=0;n<t.length&&(i=t[n]);n++)e.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(j.is,j);var R=i(45),F=i(21);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let D=Object(r.a)(t=>{let e=Object(F.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(R.a)(i,n);this.__applySplices(t)}this.__lastItems=i,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=i.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let i=0;i<t.length;i++){let n=t[i];e.forEach((t,i)=>{t<n.index||(t>=n.index+n.removed.length?e.set(i,t+n.addedCount-n.removed.length):e.set(i,-1))});for(let t=0;t<n.addedCount;t++){let i=n.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.__updateLinks();let i=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((i,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let i;this.__selectedMap.delete(t),this.multi&&(i=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(P.a);class B extends D{static get is(){return"array-selector"}static get template(){return null}}customElements.define(B.is,B);var U=i(49),q=i(28),$=i(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const K=new U.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){K.processStyles(),Object(q.c)(t,e)},styleElement(t){K.processStyles()},styleDocument(t){K.processStyles(),Object(q.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(q.b)(t,e),flushCustomStyles(){},nativeCss:$.c,nativeShadow:$.d,cssBuild:$.a,disableRuntime:$.b}),window.ShadyCSS.CustomStyleInterface=K;var W=i(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const J=window.ShadyCSS.CustomStyleInterface;class Y extends HTMLElement{constructor(){super(),this._style=null,J.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(W.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let G;window.customElements.define("custom-style",Y),G=a._mutablePropertyChange;Boolean;i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Q=Object(n.a)(HTMLElement).prototype},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function s(t){if(t instanceof n)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const r=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,r)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return s(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(i)+t[r+1],t[0]),i}},function(t,e,i){"use strict";i.d(e,"h",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return p})),i.d(e,"e",(function(){return u})),i.d(e,"c",(function(){return f})),i.d(e,"f",(function(){return m})),i.d(e,"g",(function(){return g})),i.d(e,"d",(function(){return _}));var n=i(26),s=i(17),r=i(15),o=i(30),a=i(29),h=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const l=t=>null===t||!("object"==typeof t||"function"==typeof t),c=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class d{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new p(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(l(t)||!c(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class p{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||l(t)&&t===this.value||(this.value=t,Object(n.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class u{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(h.c)()),this.endNode=t.appendChild(Object(h.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(h.c)()),t.__insert(this.endNode=Object(h.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(h.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}const t=this.__pendingValue;t!==r.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):c(t)?this.__commitIterable(t):t===r.b?(this.value=r.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const i=new o.a(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new u(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){Object(s.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r.a}}class m extends d{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new g(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class g extends p{}let v=!1;(()=>{try{const t={get capture(){return v=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class _{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(n.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r.a,t(this)}if(this.__pendingValue===r.a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=y(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const y=t=>t&&(v?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,i){"use strict";i.d(e,"d",(function(){return o.a})),i.d(e,"a",(function(){return n.b})),i.d(e,"b",(function(){return n.e})),i.d(e,"c",(function(){return n.g})),i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return h}));var n=i(10);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new n.f(t,e.slice(1),i).parts}if("@"===r)return[new n.d(t,e.slice(1),s.eventContext)];if("?"===r)return[new n.c(t,e.slice(1),i)];return new n.a(t,e,i).parts}handleTextExpression(t){return new n.e(t)}};var r=i(29),o=i(26);i(17),i(15),i(25),i(23),i(30),i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const a=(t,...e)=>new r.b(t,e,"html",s),h=(t,...e)=>new r.a(t,e,"svg",s)},function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var n=i(40),s=i(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function h(t,e,i,n){!function(t,e,i){const n=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in i))if(n)e[o]=t[o];else{let i=Object.getOwnPropertyDescriptor(t,o);i&&(i.configurable=!0,Object.defineProperty(e,o,i))}}}(e,t,n);for(let t in r)e[t]&&(i[t]=i[t]||[],i[t].push(e[t]))}function l(t,e){for(const i in e){const n=t[i],s=e[i];t[i]=!("value"in s)&&n&&"value"in n?Object.assign({value:n.value},s):s}}const c=Object(n.a)(HTMLElement);function d(t,e,i){let n;const r={};class c extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)l(e,n[t].properties);return l(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,i=0;i<n.length;i++)t=n[i],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=r.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=c.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),s.e&&d(t);const e=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=r.registered,i)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=r.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=r.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=r.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=r.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=r.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let n=r.attributeChanged;if(n)for(let s=0;s<n.length;s++)n[s].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;n=function t(e,i,n){i=i||[];for(let s=e.length-1;s>=0;s--){let r=e[s];r?Array.isArray(r)?t(r,i):i.indexOf(r)<0&&(!n||n.indexOf(r)<0)&&i.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),c.prototype.behaviors=t?t.concat(i):n}const d=e=>{n&&function(t,e,i){for(let n=0;n<e.length;n++)h(t,e[n],i,a)}(e,n,r),h(e,t,r,o)};return s.e||d(c.prototype),c.generatedFrom=t,c}i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p=function(t){let e;return e="function"==typeof t?t:p.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};p.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(c):c;return i=d(t,i,t.behaviors),i.is=i.prototype.is=t.is,i}},function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"a",(function(){return c}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,s=0,r=[],o=0,a=!1,h=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=r.length;for(let e=0;e<t;e++){let t=r[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}r.splice(0,t),s+=t})).observe(h,{characterData:!0});const l={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},c={run:t=>(a||(a=!0,h.textContent=o++),r.push(t),n++),cancel(t){const e=t-s;if(e>=0){if(!r[e])throw new Error("invalid async handle: "+t);r[e]=null}}}},function(t,e,i){"use strict";i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let s,r;function o(t){s=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(r=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?s=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);const h=s},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n={},s={}},function(t,e,i){t.exports={BaseModel:i(60),BaseStore:i(62),BaseService:i(64),BaseMixin:i(66),Mixin:i(67),EventBus:i(35),EventInterface:i(68),LitCorkUtils:i(69),fetch:i(50),LightDom:i(70)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,i=null,n=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,n),e=i}},r=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}}},function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return l}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,s,r=/(url\()([^)]*)(\))/g,o=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&o.test(t))return t;if("//"===t)return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),n)try{return new URL(t,e).href}catch(e){return t}return s||(s=document.implementation.createHTMLDocument("temp"),s.base=s.createElement("base"),s.head.appendChild(s.base),s.anchor=s.createElement("a"),s.body.appendChild(s.anchor)),s.base.href=e,s.anchor.href=t,s.anchor.href||t}function h(t,e){return t.replace(r,(function(t,i,n,s){return i+"'"+a(n.replace(/["']/g,""),e)+"'"+s}))}function l(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o}));i(5),i(6),i(13);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,s.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),s.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,i),t}}let s=new Set;const r=function(t){s.add(t)},o=function(){const t=Boolean(s.size);return s.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,s=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,r=/@media\s(.*)/},function(t,e,i){"use strict";i.d(e,"b",(function(){return u})),i.d(e,"a",(function(){return f}));i(5);var n=i(1),s=i(6),r=i(37),o=i(18),a=i(38),h=i(32),l=i(39),c=i(43);const d=Object(s.a)(t=>{const e=Object(c.a)(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const n=t[i];e[i]="function"==typeof n?{type:n}:n}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Object(l.b)(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){Object(l.a)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});var p=i(0);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const u=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(s.a)(t=>{const e=d(Object(h.a)(t));return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.e||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let r in t)e=this.prototype,i=r,n=t[r],s=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(i)?console.warn(`Cannot redefine computed property '${i}'.`):e._createComputedProperty(i,n.computed,s)),n.readOnly&&!e._hasReadOnlyEffect(i)?e._createReadOnlyProperty(i,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(i)&&console.warn(`Cannot make readOnly property '${i}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(i)?e._createReflectedProperty(i):!1===n.reflectToAttribute&&e._hasReflectEffect(i)&&console.warn(`Cannot make reflected property '${i}' non-reflected.`),n.notify&&!e._hasNotifyEffect(i)?e._createNotifyingProperty(i):!1===n.notify&&e._hasNotifyEffect(i)&&console.warn(`Cannot make notify property '${i}' non-notify.`),n.observer&&e._createPropertyObserver(i,n.observer,s[n.observer]),e._addPropertyToAttributeMap(i);var e,i,n,s}static createObservers(t,e){const i=this.prototype;for(let n=0;n<t.length;n++)i._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!n.m||n.a)&&(e=a.a.import(t,"template"),n.m&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(o.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.k,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let n=e[i];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Object(o.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;!function(t,e,i,s){if(!u){const n=e.content.querySelectorAll("style"),o=Object(r.c)(e),a=Object(r.b)(i),h=e.content.firstElementChild;for(let i=0;i<a.length;i++){let n=a[i];n.textContent=t._processStyleText(n.textContent,s),e.content.insertBefore(n,h)}let l=0;for(let e=0;e<o.length;e++){let i=o[e],r=n[l];r!==i?(i=i.cloneNode(!0),r.parentNode.insertBefore(i,r)):l++,i.textContent=t._processStyleText(i.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),n.q&&u&&n.n){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,i?Object(o.c)(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(p.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),n.p&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(o.c)(this.importPath)),Object(o.c)(t,e)}static _parseTemplateContent(t,i,n){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,n)}static _addTemplatePropertyEffect(t,i,s){return!n.g||i in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,s)}}})},function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={},s=/-[a-z]/g,r=/([A-Z])/g;function o(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(s,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(r,"-$1").toLowerCase())}},function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"a",(function(){return r}));var n=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function s(t){let e=r.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},r.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(n.f);return i=e.keyString.get(s),void 0===i&&(i=new n.a(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const r=new Map},function(t,e,i){"use strict";i.d(e,"b",(function(){return s}));i(5);var n=i(19);i.d(e,"a",(function(){return n.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return a}));var n=i(17),s=i(10),r=i(23);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,i)=>{let a=o.get(e);void 0===a&&(Object(n.b)(e,e.firstChild),o.set(e,a=new s.e(Object.assign({templateFactory:r.b},i))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n=new WeakMap,s=t=>(...e)=>{const i=t(...e);return n.set(i,!0),i},r=t=>"function"==typeof t&&n.has(t)},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(21),s=i(9);i.d(e,"b",(function(){return s.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(n.a)(HTMLElement)},function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return o}));var n=i(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function s(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function r(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}function o(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return a}));var n=i(17),s=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=` ${s.f} `;class o{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const a=s.e.exec(t);e+=null===a?t+(i?r:s.g):t.substr(0,a.index)+a[1]+a[2]+s.b+a[3]+s.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends o{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Object(n.c)(e,i.firstChild),t}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(17),s=i(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class r{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let o,a=0,h=0,l=r.nextNode();for(;a<i.length;)if(o=i[a],Object(s.d)(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return n.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return A})),i.d(e,"b",(function(){return V})),i.d(e,"c",(function(){return k}));i(5);var n=i(13),s=i(19),r=i(1),o=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,h="__polymerGesturesHandled",l="__polymerGesturesTouchAction",c=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],p=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function u(t){return c.indexOf(t)>-1}let f=!1;function m(t){if(!u(t)&&"touchend"!==t)return a&&f&&r.i?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){f=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let g=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const v=[],_={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},y={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function b(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let z=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[h]={skip:!0},"click"===t.type)){let e=!1,n=O(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)v.push(n[t]);else if(i=n[t],_[i.localName]){let i=b(n[t]);for(let t=0;t<i.length;t++)e=e||v.indexOf(i[t])>-1}if(n[t]===S.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function w(t){let e=g?["click"]:c;for(let i,n=0;n<e.length;n++)i=e[n],t?(v.length=0,document.addEventListener(i,z,!0)):document.removeEventListener(i,z,!0)}function C(t){let e=t.type;if(!u(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!p&&(e=d[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let S={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function x(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function M(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}r.b&&document.addEventListener("touchend",(function(t){if(!r.b)return;S.mouse.mouseIgnoreJob||w(!0),S.mouse.target=O(t)[0],S.mouse.mouseIgnoreJob=s.a.debounce(S.mouse.mouseIgnoreJob,n.b.after(2500),(function(){w(),S.mouse.target=null,S.mouse.mouseIgnoreJob=null}))}),!!f&&{passive:!0});const O=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],H={},L=[];function P(t){const e=O(t);return e.length>0?e[0]:t.target}function E(t){let e,i=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let s=n[i];if(s){if(!t[h]&&(t[h]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(S.touch.id=e.identifier),S.touch.id!==e.identifier)return;a||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)S.touch.x=e.clientX,S.touch.y=e.clientY,S.touch.scrollDecided=!1;else if("touchmove"===i){if(S.touch.scrollDecided)return;S.touch.scrollDecided=!0;let i=function(t){let e="auto",i=O(t);for(let t,n=0;n<i.length;n++)if(t=i[n],t[l]){e=t[l];break}return e}(t),n=!1,s=Math.abs(S.touch.x-e.clientX),r=Math.abs(S.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=r>s:"pan-y"===i&&(n=s>r)),n?t.preventDefault():I("track")}}(t)}if(e=t[h],!e.skip){for(let i,n=0;n<L.length;n++)i=L[n],s[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,r=0;r<L.length;r++)n=L[r],s[n.name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function A(t,e,i){return!!H[e]&&(function(t,e,i){let n=H[e],s=n.deps,r=n.name,o=t.__polymerGestures;o||(t.__polymerGestures=o={});for(let e,i,n=0;n<s.length;n++)e=s[n],g&&u(e)&&"click"!==e||(i=o[e],i||(o[e]=i={_count:0}),0===i._count&&t.addEventListener(e,E,m(e)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&k(t,n.touchAction)}(t,e,i),!0)}function V(t,e,i){return!!H[e]&&(function(t,e,i){let n=H[e],s=n.deps,r=n.name,o=t.__polymerGestures;if(o)for(let e,i,n=0;n<s.length;n++)e=s[n],i=o[e],i&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,E,m(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function T(t){L.push(t);for(let e=0;e<t.emits.length;e++)H[t.emits[e]]=t}function k(t,e){a&&t instanceof HTMLElement&&n.a.run(()=>{t.style.touchAction=e}),t[l]=e}function N(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,Object(o.a)(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function I(t){let e=function(t){for(let e,i=0;i<L.length;i++){e=L[i];for(let i,n=0;n<e.emits.length;n++)if(i=e.emits[n],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function j(t,e,i,n){e&&N(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return I(t)}})}function R(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-i);return n>=5||s>=5}function F(t,e,i){if(!e)return;let n,s=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],o=r.x-t.x,a=r.y-t.y,h=0;s&&(n=r.x-s.x,h=r.y-s.y),N(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:n,ddy:h,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function D(t,e,i){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),r=P(i||e);!r||y[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=25&&s<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=P(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}(e))&&(t.prevent||N(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}T({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){M(this.info)},mousedown:function(t){if(!C(t))return;let e=P(t),i=this;x(this.info,(function(t){C(t)||(j("up",e,t),M(i.info))}),(function(t){C(t)&&j("up",e,t),M(i.info)})),j("down",e,t)},touchstart:function(t){j("down",P(t),t.changedTouches[0],t)},touchend:function(t){j("up",P(t),t.changedTouches[0],t)}}),T({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,M(this.info)},mousedown:function(t){if(!C(t))return;let e=P(t),i=this,n=function(t){let n=t.clientX,s=t.clientY;R(i.info,n,s)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&I("tap"),i.info.addMove({x:n,y:s}),C(t)||(i.info.state="end",M(i.info)),e&&F(i.info,e,t),i.info.started=!0)};x(this.info,n,(function(t){i.info.started&&n(t),M(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=P(t),i=t.changedTouches[0],n=i.clientX,s=i.clientY;R(this.info,n,s)&&("start"===this.info.state&&I("tap"),this.info.addMove({x:n,y:s}),F(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=P(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),F(this.info,e,i))}}),T({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){C(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){C(t)&&D(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){D(this.info,t.changedTouches[0],t)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return Q}));i(5);var n=i(0),s=i(6),r=i(3),o=i(22),a=i(42);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const h={"dom-if":!0,"dom-repeat":!0};let l=!1,c=!1;function d(t){(function(){if(!l){l=!0;const t=document.createElement("textarea");t.placeholder="a",c=t.placeholder===t.textContent}return c})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function p(t){let e=t.getAttribute("is");if(e&&h[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function u(t,e){let i=e.parentInfo&&u(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function f(t,e,i,n){n.id&&(e[n.id]=i)}function m(t,e,i){if(i.events&&i.events.length)for(let n,s=0,r=i.events;s<r.length&&(n=r[s]);s++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function g(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}const v=Object(s.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let n=!1,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(s,e,i)||n,d(s),s.firstChild&&this._parseTemplateChildNodes(s,e,i),s.hasAttributes&&s.hasAttributes()&&(n=this._parseTemplateNodeAttributes(s,e,i)||n),n||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let n,s=t.firstChild,r=0;s;s=n){if("template"==s.localName&&(s=p(s)),n=s.nextSibling,s.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)s.textContent+=i.textContent,n=i.nextSibling,t.removeChild(i),i=n;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let o={parentIndex:r,parentInfo:i};this._parseTemplateNode(s,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),s.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,i){let n=t,s=this._parseTemplate(n,e);return(s.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=s,!0}static _parseTemplateNodeAttributes(t,e,i){let n=!1,s=Array.from(t.attributes);for(let r,o=s.length-1;r=s[o];o--)n=this._parseTemplateNodeAttribute(t,e,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(t,e,i,n,s){return"on-"===n.slice(0,3)?(t.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:s}),!0):"id"===n&&(i.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,s=document.importNode(n,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let r=s.nodeList=new Array(i.length);s.$={};for(let t,n=0,o=i.length;n<o&&(t=i[n]);n++){let i=r[n]=u(s,t);f(0,s.$,i,t),g(0,i,t,e),m(this,i,t)}return s=s,s}_addMethodEventListenerToNode(t,e,i,n){let s=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||t,0,i);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});var _=i(1);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let y=0;const b=[],z={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},w=/[A-Z]/;function C(t,e,i){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let t in n){let e=n[t],i=n[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else n=t[e]={};return n}function S(t,e,i,n,s,o){if(e){let a=!1;const h=y++;for(let l in i){let c=e[s?Object(r.g)(l):l];if(c)for(let e,r=0,d=c.length;r<d&&(e=c[r]);r++)e.info&&e.info.lastRun===h||s&&!M(l,e.trigger)||(e.info&&(e.info.lastRun=h),e.fn(t,l,i,n,e.info,s,o),a=!0)}return a}return!1}function x(t,e,i,n,s,o,a,h){let l=!1,c=e[a?Object(r.g)(n):n];if(c)for(let e,r=0,d=c.length;r<d&&(e=c[r]);r++)e.info&&e.info.lastRun===i||a&&!M(n,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,n,s,o,e.info,a,h),l=!0);return l}function M(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!Object(r.b)(i,t))||!(!e.wildcard||!Object(r.c)(i,t))}return!0}function O(t,e,i,n,s){let r="string"==typeof s.method?t[s.method]:s.method,o=s.property;r?r.call(t,t.__data[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function H(t,e,i){let n=Object(r.g)(e);if(n!==e){return L(t,Object(o.a)(n)+"-changed",i[e],e),!0}return!1}function L(t,e,i,s){let r={value:i,queueProperty:!0};s&&(r.path=s),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function P(t,e,i,n,s,o){let a=(o?Object(r.g)(e):e)!=e?e:null,h=a?Object(r.a)(t,a):t.__data[e];a&&void 0===h&&(h=i[e]),L(t,s.eventName,h,a)}function E(t,e,i,n,s){let r=t.__data[e];_.l&&(r=Object(_.l)(r,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,r)}function A(t,e,i,n){let s=t[z.COMPUTE];if(s)if(_.h){y++;const r=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[z.COMPUTE];let n,{counts:s,ready:r,total:o}=function(t){const e=t.__computeInfo,i={},n=t[z.COMPUTE],s=[];let r=0;for(let t in e){const n=e[t];r+=i[t]=n.args.filter(t=>!t.literal).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||s.push(t);return{counts:i,ready:s,total:r}}(t);for(;n=r.shift();){e.set(n,e.size);const t=i[n];t&&t.forEach(t=>{const e=t.info.methodInfo;--o,0==--s[e]&&r.push(e)})}if(0!==o){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),o=[];for(let t in e)T(t,s,o,r,n);let a;for(;a=o.shift();)k(t,"",e,i,a)&&T(a.methodInfo,s,o,r,n);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;S(t,s,r,i,n);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const V=(t,e,i)=>{let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=n+s>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)n=o+1;else{if(!(a>0)){r=o;break}s=o-1}}r<0&&(r=s+1),e.splice(r,0,t)},T=(t,e,i,n,s)=>{const o=e[s?Object(r.g)(t):t];if(o)for(let e=0;e<o.length;e++){const r=o[e];r.info.lastRun===y||s&&!M(t,r.trigger)||(r.info.lastRun=y,V(r.info,i,n))}};function k(t,e,i,n,s){let r=B(t,e,i,n,s);if(r===b)return!1;let o=s.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function N(t,e,i,n,s,r,a){i.bindings=i.bindings||[];let h={kind:n,target:s,parts:r,literal:a,isCompound:1!==r.length};if(i.bindings.push(h),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(h)){let{event:t,negate:e}=h.parts[0];h.listenerEvent=t||Object(o.a)(s)+"-changed",h.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<h.parts.length;i++){let n=h.parts[i];n.compoundIndex=i,I(t,e,h,n,l)}}function I(t,e,i,n,s){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:s,binding:i,part:n,evaluator:t};for(let i=0;i<r.length;i++){let n=r[i];"string"==typeof n&&(n=W(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:j,info:o,trigger:n})}}}function j(t,e,i,n,s,o,a){let h=a[s.index],l=s.binding,c=s.part;if(o&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&h.__isPropertyEffectsClient&&h.__dataHasAccessor&&h.__dataHasAccessor[l.target]){let n=i[e];e=Object(r.i)(c.source,l.target,e),h._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(h)}else{let r=s.evaluator._evaluateBinding(t,c,e,i,n,o);r!==b&&function(t,e,i,n,s){s=function(t,e,i,n){if(i.isCompound){let s=t.__dataCompoundStorage[i.target];s[n.compoundIndex]=e,e=s.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,s,i,n),_.l&&(s=Object(_.l)(s,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,s,i.target);else{let n=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[z.READ_ONLY]&&e[z.READ_ONLY][n]||e._setPendingProperty(n,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,s)}}(t,h,l,c,r)}}function R(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,r=new Array(s.length);for(let t=0;t<s.length;t++)r[t]=s[t].literal;let o=e.target;i[o]=r,e.literal&&"property"==e.kind&&("className"===o&&(t=Object(n.a)(t)),t[o]=e.literal)}}function F(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,n,s){let o,a=t.detail,h=a&&a.path;h?(n=Object(r.i)(i,n,h),o=a&&a.value):o=t.currentTarget[i],o=s?!o:o,e[z.READ_ONLY]&&e[z.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,o,!0,Boolean(h))||a&&a.queueProperty||e._invalidateProperties()}(t,e,i.target,n.source,n.negate)}))}}function D(t,e,i,n,s,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:r};for(let s,r=0;r<e.args.length&&(s=e.args[r]);r++)s.literal||t._addPropertyEffect(s.rootProperty,i,{fn:n,info:o,trigger:s});return r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:o}),o}function B(t,e,i,n,s){let r=t._methodHost||t,o=r[s.methodName];if(o){let n=t._marshalArgs(s.args,e,i);return n===b?b:o.apply(r,n)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const U=[],q=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function $(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function K(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:U};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=W(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function W(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=Object(r.g)(e),i.structured=Object(r.d)(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function J(t,e,i){let n=Object(r.a)(t,i);return void 0===n&&(n=e[i]),n}function Y(t,e,i,n){const s={indexSplices:n};_.f&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(i+".splices",s),t.notifyPath(i+".length",e.length),_.f&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function G(t,e,i,n,s,r){Y(t,e,i,[{index:n,addedCount:s,removed:r,object:e,type:"splice"}])}const Q=Object(s.a)(t=>{const e=v(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return z}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(X.length){let t=X[X.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[z.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==z.READ_ONLY);let n=C(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(i)}_removePropertyEffect(t,e,i){let n=C(this,e,!0)[t],s=n.indexOf(i);s>=0&&n.splice(s,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,z.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,z.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,z.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,z.COMPUTE)}_setPendingPropertyOrPath(t,e,i,n){if(n||Object(r.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let i=Object(r.a)(this,t);if(!(t=Object(r.h)(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let n=t.__dataLinkedPaths;if(n){let s;for(let o in n){let a=n[o];Object(r.c)(o,e)?(s=Object(r.i)(o,a,e),t._setPendingPropertyOrPath(s,i,!0,!0)):Object(r.c)(a,e)&&(s=Object(r.i)(a,o,e),t._setPendingPropertyOrPath(s,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=Object(n.a)(t)),t[e]=i)}_setPendingProperty(t,e,i){let n=this.__dataHasPaths&&Object(r.d)(t),s=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[z.NOTIFY]&&this[z.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[z.READ_ONLY]&&this[z.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let n,s=this.__dataHasPaths;this.__dataHasPaths=!1,A(this,e,i,s),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,s),this._flushClients(),S(this,this[z.REFLECT],e,i,s),S(this,this[z.OBSERVE],e,i,s),n&&function(t,e,i,n,s){let r,o,a=t[z.NOTIFY],h=y++;for(let o in e)e[o]&&(a&&x(t,a,h,o,i,n,s)||s&&H(t,o,i))&&(r=!0);r&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,e,i,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[z.PROPAGATE]&&S(this,this[z.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,n){const s=(e,n)=>{S(this,t.propertyEffects,e,i,n,t.nodeList);for(let s=t.firstChild;s;s=s.nextSibling)this._runEffectsForTemplate(s,e,i,n)};t.runEffects?t.runEffects(s,e,n):s(e,n)}linkPaths(t,e){t=Object(r.f)(t),e=Object(r.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(r.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};Y(this,Object(r.a)(this,t,i),i.path,e)}get(t,e){return Object(r.a)(e||this,t)}set(t,e,i){i?Object(r.h)(i,t,e):this[z.READ_ONLY]&&this[z.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},n=Object(r.a)(this,t,i),s=n.length,o=n.push(...e);return e.length&&G(this,n,i.path,s,e.length,[]),o}pop(t){let e={path:""},i=Object(r.a)(this,t,e),n=Boolean(i.length),s=i.pop();return n&&G(this,i,e.path,i.length,0,[s]),s}splice(t,e,i,...n){let s,o={path:""},a=Object(r.a)(this,t,o);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?a.splice(e):a.splice(e,i,...n),(n.length||s.length)&&G(this,a,o.path,e,n.length,s),s}shift(t){let e={path:""},i=Object(r.a)(this,t,e),n=Boolean(i.length),s=i.shift();return n&&G(this,i,e.path,0,0,[s]),s}unshift(t,...e){let i={path:""},n=Object(r.a)(this,t,i),s=n.unshift(...e);return e.length&&G(this,n,i.path,0,e.length,[]),s}notifyPath(t,e){let i;if(1==arguments.length){let n={path:""};e=Object(r.a)(this,t,n),i=n.path}else i=Array.isArray(t)?Object(r.f)(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,z.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let n={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,z.OBSERVE,{fn:O,info:n,trigger:{name:t}}),i&&this._addPropertyEffect(e,z.OBSERVE,{fn:O,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let i=K(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");D(this,i,z.OBSERVE,B,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,z.NOTIFY,{fn:P,info:{eventName:Object(o.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,z.REFLECT,{fn:E,info:{attrName:e}})}_createComputedProperty(t,e,i){let n=K(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const s=D(this,n,z.COMPUTE,k,t,i);C(this,"__computeInfo")[t]=s}_marshalArgs(t,e,i){const n=this.__data,s=[];for(let o=0,a=t.length;o<a;o++){let{name:a,structured:h,wildcard:l,value:c,literal:d}=t[o];if(!d)if(l){const t=Object(r.c)(a,e),s=J(n,i,t?e:a);c={path:t?e:a,value:s,base:t?Object(r.a)(n,a):s}}else c=h?J(n,i,a):n[a];if(_.f&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return b;s[o]=c}return s}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),n=this.__preBoundTemplateInfo==i;if(!n)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=n,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,n=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=n,n?n.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),X.push(this);let i=super._stampTemplate(t,e);if(X.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let s=n[e],r=i[e],o=s.bindings;if(o)for(let e=0;e<o.length;e++){let i=o[e];R(r,i),F(r,t,i)}r.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:s,parent:r}=e;i?i.nextSibling=s:r&&(r.firstChild=s),s?s.previousSibling=i:r&&(r.lastChild=i),e.nextSibling=e.previousSibling=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];Object(n.a)(Object(n.a)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,n){let s=e._parseTemplateNode.call(this,t,i,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=$(e)||" ",N(this,i,n,"text","textContent",e),s=!0)}return s}static _parseTemplateNodeAttribute(t,i,n,s,r){let a=this._parseBindings(r,i);if(a){let e=s,r="property";w.test(s)?r="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),r="attribute");let h=$(a);return h&&"attribute"==r&&("class"==s&&t.hasAttribute("class")&&(h+=" "+t.getAttribute(s)),t.setAttribute(s,h)),"attribute"==r&&"disable-upgrade$"==e&&t.setAttribute(s,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(s=Object(o.b)(s)),N(this,i,n,r,s,a,h),!0}return e._parseTemplateNodeAttribute.call(this,t,i,n,s,r)}static _parseTemplateNestedTemplate(t,i,n){let s=e._parseTemplateNestedTemplate.call(this,t,i,n);const r=t.parentNode,o=n.templateInfo,a="dom-if"===r.localName,h="dom-repeat"===r.localName;_.j&&(a||h)&&(r.removeChild(t),(n=n.parentInfo).templateInfo=o,n.noted=!0,s=!1);let l=o.hostProps;if(_.c&&a)l&&(i.hostProps=Object.assign(i.hostProps||{},l),_.j||(n.parentInfo.noted=!0));else{let t="{";for(let e in l){N(this,i,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return s}static _parseBindings(t,e){let i,n=[],s=0;for(;null!==(i=q.exec(t));){i.index>s&&n.push({literal:t.slice(s,i.index)});let r=i[1][0],o=Boolean(i[2]),a=i[3].trim(),h=!1,l="",c=-1;"{"==r&&(c=a.indexOf("::"))>0&&(l=a.substring(c+2),a=a.substring(0,c),h=!0);let d=K(a),p=[];if(d){let{args:t,methodName:i}=d;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let n=e.dynamicFns;(n&&n[i]||d.static)&&(p.push(i),d.dynamicFn=!0)}else p.push(a);n.push({source:a,mode:r,negate:o,customEvent:h,signature:d,dependencies:p,event:l}),s=q.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,i,n,s,o){let a;return a=e.signature?B(t,i,n,0,e.signature):i!=e.source?Object(r.a)(t,e.source):o&&Object(r.d)(i)?Object(r.a)(t,i):t.__data[i],e.negate&&(a=!a),a}}}),X=[]},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(11);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class s{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const r=new WeakMap,o=Object(n.d)(t=>e=>{if(!(e instanceof n.a)||e instanceof n.c||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:o}=i;let a=r.get(e);void 0===a&&(o.setAttribute("class",i.strings.join(" ")),r.set(e,a=new Set));const h=o.classList||new s(o);a.forEach(e=>{e in t||(h.remove(e),a.delete(e))});for(const e in t){const i=t[e];i!=a.has(e)&&(i?(h.add(e),a.add(e)):(h.remove(e),a.delete(e)))}"function"==typeof h.commit&&h.commit()})},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(11);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const s=new WeakMap,r=Object(n.d)(t=>e=>{if(!(e instanceof n.a)||e instanceof n.c||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:r}=i.element;let o=s.get(e);void 0===o&&(r.cssText=i.strings.join(" "),s.set(e,o=new Set)),o.forEach(e=>{e in t||(o.delete(e),-1===e.indexOf("-")?r[e]=null:r.removeProperty(e))});for(const e in t)o.add(e),-1===e.indexOf("-")?r[e]=t[e]:r.setProperty(e,t[e])})},function(t,e,i){const n=i(61).EventEmitter;t.exports=new class extends n{constructor(){super(),this.setMaxListeners(1e4)}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(10),s=i(11);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,o=Object(s.d)(t=>e=>{if(!(e instanceof s.b))throw new Error("unsafeHTML can only be used in text bindings");const i=r.get(e);if(void 0!==i&&Object(n.h)(t)&&t===i.value&&e.value===i.fragment)return;const o=document.createElement("template");o.innerHTML=t;const a=document.importNode(o.content,!0);e.setValue(a),r.set(e,{value:t,fragment:a})})},function(t,e,i){"use strict";i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return p}));var n=i(38),s=i(18);function r(t){return n.a.import(t)}function o(t){let e=t.body?t.body:t;const i=Object(s.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=i,n}function a(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...h(e[t]));return i}function h(t){const e=r(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...d(e));const i=e.querySelector("template");i&&t.push(...l(i,e.assetpath)),e._styles=t}return e._styles}function l(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let r=n[t],o=r.getAttribute("include");o&&i.push(...a(o).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(r.textContent=Object(s.b)(r.textContent,e)),i.push(r)}t._styles=i}return t._styles}function c(t){let e=r(t);return e?d(e):[]}function d(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let n=i[t];if(n.import){const t=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!t._unscopedStyle){const e=o(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=o(t));e.push(i?t._unscopedStyle:t._style)}}return e}function p(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=u(e[t]);return i}function u(t){let e=r(t);if(e&&void 0===e._cssText){let t=f(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const n=l(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function f(t){let e="",i=d(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i(5);var n=i(18),s=i(1);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r={},o={};function a(t,e){r[t]=o[t.toLowerCase()]=e}function h(t){return r[t]||o[t.toLowerCase()]}class l extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=h(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,n){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(s.m&&void 0!==h(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}l.prototype.modules=r,customElements.define("dom-module",l)},function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return r}));function n(){0}const s=[];function r(t){s.push(t)}},function(t,e,i){"use strict";i.d(e,"a",(function(){return vt}));var n=i(14);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class s{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function r(t){return function t(e,i){let n=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=i.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(c.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=n.trim();e.atRule=0===s.indexOf(u),e.atRule?0===s.indexOf(p)?e.type=a.MEDIA_RULE:s.match(c.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(c.multipleSpaces).pop()):0===s.indexOf(d)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let s=e.rules;if(s)for(let e,n=0,r=s.length;n<r&&(e=s[n]);n++)t(e,i);return e}(function(t){let e=new s;e.start=0,e.end=t.length;let i=e;for(let n=0,r=t.length;n<r;n++)if(t[n]===h){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new s,i.start=n+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[n]===l&&(i.end=n+1,i=i.parent||e);return e}(t=t.replace(c.comments,"").replace(c.port,"")),t)}function o(t,e,i=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(d)}(i))for(let t,s=0,r=i.length;s<r&&(t=i[s]);s++)n=o(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(c.mixinApply,"").replace(c.varApply,"")}(t=function(t){return t.replace(c.customProp,"").replace(c.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(i+=t.selector+" "+h+"\n"),i+=n,t.selector&&(i+=l+"\n\n")),i}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},h="{",l="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},d="--",p="@media",u="@";var f=i(20);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=new Set;function g(t){const e=t.textContent;if(!m.has(e)){m.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function v(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function _(t,e){return t?("string"==typeof t&&(t=r(t)),e&&b(t,e),o(t,n.c)):""}function y(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=r(t.textContent)),t.__cssRules||null}function b(t,e,i,n){if(!t)return;let s=!1,r=t.type;if(n&&r===a.MEDIA_RULE){let e=t.selector.match(f.a);e&&(window.matchMedia(e[1]).matches||(s=!0))}r===a.STYLE_RULE?e(t):i&&r===a.KEYFRAMES_RULE?i(t):r===a.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let t,s=0,r=o.length;s<r&&(t=o[s]);s++)b(t,e,i,n)}function z(t,e){let i=0;for(let n=e,s=t.length;n<s;n++)if("("===t[n])i++;else if(")"===t[n]&&0==--i)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function w(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function C(t){return""!==w(t)}var S=i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const x=/;\s*/m,M=/^\s*(initial)|(inherit)\s*$/,O=/\s*!important/;class H{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let L=null;class P{constructor(){this._currentElement=null,this._measureElement=null,this._map=new H}detectMixin(t){return Object(S.a)(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const s=i[t];v(s)?n.d||(g(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=y(t);return this.transformRules(i,e),t.textContent=_(i),i}transformCustomStyle(t){let e=y(t);return b(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=_(e),e}transformRules(t,e){this._currentElement=e,b(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(f.c,(t,i,n,s)=>this._produceCssProperties(t,i,n,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let n=!1;return b(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=f.b.exec(t);){let n=i[0],s=i[1],r=i.index,o=r+n.indexOf("@apply"),a=r+n.length,h=t.slice(0,o),l=t.slice(a),c=e?this._fallbacksFromPreviousRules(e):{};Object.assign(c,this._cssTextToMap(h));let d=this._atApplyToCssProperties(s,c);t=`${h}${d}${l}`,f.b.lastIndex=r+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(x,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let s,r,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(s in a)o=e&&e[s],r=[s,": var(",t,"_-_",s],o&&r.push(",",o.replace(O,"")),r.push(")"),O.test(a[s])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=M.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,n,s=t.split(";"),r={};for(let t,o,a=0;a<s.length;a++)t=s[a],t&&(o=t.split(":"),o.length>1&&(i=o[0].trim(),n=o.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(i,n)),r[i]=n));return r}_invalidateMixinEntry(t){if(L)for(let e in t.dependants)e!==this._currentElement&&L(e)}_produceCssProperties(t,e,i,n,s){if(i&&function t(e,i){let n=e.indexOf("var(");if(-1===n)return i(e,"","","");let s=z(e,n+3),r=e.substring(n+4,s),o=e.substring(0,n),a=t(e.substring(s+1),i),h=r.indexOf(",");return-1===h?i(o,r.trim(),"",a):i(o,r.substring(0,h).trim(),r.substring(h+1).trim(),a)}(i,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let r=this._consumeCssProperties(""+n,s),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(r,!0),h=a,l=this._map.get(e),c=l&&l.properties;c?h=Object.assign(Object.create(c),a):this._map.set(e,h);let d,p,u=[],f=!1;for(d in h)p=a[d],void 0===p&&(p="initial"),c&&!(d in c)&&(f=!0),u.push(`${e}_-_${d}: ${p}`);return f&&this._invalidateMixinEntry(l),l&&(l.properties=h),i&&(o=`${t};${o}`),`${o}${u.join("; ")};`}}P.prototype.detectMixin=P.prototype.detectMixin,P.prototype.transformStyle=P.prototype.transformStyle,P.prototype.transformCustomStyle=P.prototype.transformCustomStyle,P.prototype.transformRules=P.prototype.transformRules,P.prototype.transformRule=P.prototype.transformRule,P.prototype.transformTemplate=P.prototype.transformTemplate,P.prototype._separator="_-_",Object.defineProperty(P.prototype,"invalidCallback",{get:()=>L,set(t){L=t}});var E=P;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var A={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const V="_applyShimCurrentVersion",T="_applyShimNextVersion",k=Promise.resolve();function N(t){let e=A[t];e&&function(t){t[V]=t[V]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[T]=(t[T]||0)+1}(e)}function I(t){return t[V]===t[T]}function j(t){return!I(t)&&t._applyShimValidatingVersion===t[T]}function R(t){t._applyShimValidatingVersion=t[T],t._validating||(t._validating=!0,k.then((function(){t[V]=t[T],t._validating=!1})))}i(49);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const F=new E;class D{constructor(){this.customStyleInterface=null,F.invalidCallback=N}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{F.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),C(t))return;A[e]=t;let i=F.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&F.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(S.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}(t),i=A[e];if((!i||!C(i))&&i&&!I(i)){j(i)||(this.prepareTemplate(i,e),R(i));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=i._styleAst,t.textContent=_(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new D;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,n){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(S.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=F;var B=i(21),U=i(44),q=i(42),$=i(6);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const K=/:host\(:dir\((ltr|rtl)\)\)/g,W=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,J=/:dir\((?:ltr|rtl)\)/,Y=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),G=[];let Q=null,X="";function Z(){X=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",X)}}function et(){Z(),X=document.documentElement.getAttribute("dir");for(let t=0;t<G.length;t++)tt(G[t])}const it=Object($.a)(t=>{Y||Q||(Z(),Q=new MutationObserver(et),Q.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(q.a)(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!Y&&J.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(K,':host([dir="$1"])'),e=e.replace(W,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Q&&Q.takeRecords().length&&et(),G.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=G.indexOf(this);t>-1&&G.splice(t,1)}}}return i.__activateDir=!1,i});i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function nt(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?nt():window.addEventListener("DOMContentLoaded",nt);var st=i(4),rt=i(31),ot=i(19),at=i(13),ht=i(3),lt=i(0);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ct=window.ShadyDOM,dt=window.ShadyCSS;function pt(t,e){return Object(lt.a)(t).getRootNode()===e}var ut=i(1);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ft=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Object($.a)(t=>{const e=Object(B.a)(t);let i=ft(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,i,n){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Object(lt.a)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});var mt=i(39);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gt=window.ShadyCSS;const vt=Object($.a)(t=>{const e=Object(U.a)(Object(B.a)(t)),i=B.b?e:it(e),n=ft(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,i){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,i,null)}setAttribute(t,e){if(ut.d&&!this._legacyForceObservedAttributes){const i=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,i,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(ut.d&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return ut.d&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Object(mt.b)(this.prototype)),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,i,n){e!==i&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Object(lt.a)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,n),this.attributeChanged(t,e,i)))}attributeChanged(t,e,i){}_initializeProperties(){if(ut.e&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ut.d&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,i=t.length;e<i;e++){const i=t[e];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let n,s=0;s<i.length&&(n=i[s]);s++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=e;let s=i.node||this;return Object(lt.a)(s).dispatchEvent(n),n}listen(t,e,i){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),s=n.get(t);s||(s={},n.set(t,s));let r=e+i;s[r]||(s[r]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),s=e+i,r=n&&n[s];r&&(this._removeEventListenerFromNode(t,e,r),n[s]=null)}setScrollDirection(t,e){Object(rt.c)(e||this,s[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(lt.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(st.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(st.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(st.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,n=0;i=t[n];n++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(st.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(lt.a)(this).contains(t)&&Object(lt.a)(this).getRootNode()===Object(lt.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(lt.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!ct||!dt)return null;if(!ct.handlesDynamicScoping)return null;const i=dt.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),s=Object(lt.a)(t).getRootNode(),r=t=>{if(!pt(t,s))return;const e=Array.from(ct.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const r=e[t];if(!pt(r,s))continue;const o=i.currentScopeForNode(r);o!==n&&(""!==o&&i.unscopeNode(r,o),i.scopeNode(r,n))}};if(r(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&r(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return gt.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=ot.a.debounce(this._debouncers[t],i>0?at.b.after(i):at.a,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.b.run(t.bind(this),e):~at.a.run(t.bind(this))}cancelAsync(t){t<0?at.a.cancel(~t):at.b.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return Object(st.b)(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(Object(lt.a)(i).setAttribute(t,""),!0):(Object(lt.a)(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,n){n=n||this,this.transform("translate3d("+t+","+e+","+i+")",n)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=Object(ht.a)(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r})},function(t,e){t.exports='<dom-module id="shared-styles">\n    <template>\n      <style>\n\n        /* Default element styles */\n        a {\n          color: var(--tcolor-link-text);\n        }\n        a:link {\n          color: var(--tcolor-link-text);\n        }\n        a:visited {\n          color: var(--tcolor-link-text);\n        }\n        a:active {\n          color: var(--tcolor-link-text);\n        }\n        a:hover {\n            color:  var(--tcolor-link-hover-text);\n        }\n        hr {\n          border-color: var(--hr-color);\n          border-style: solid;\n          border-width: var(--hr-weight);\n          border-bottom-width: 0;\n        }\n        hr.dotted {\n          border-style: dotted;\n        }\n        hr.dashed {\n          border-style: dashed;\n        }\n        hr.light {\n          border-color: var(--hr-color-light);\n        }\n        code {\n          color: var(--tcolor-code-text);\n          background-color: var(--tcolor-code-bg);\n        }\n        section {\n          background-color: var( --tcolor-block-bg );\n          padding: 50px 60px;\n          margin-bottom: 10px;\n        }\n        section.top {\n          margin-top: 2px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n        .flex[hidden] {\n          display: none !important;\n        }\n\n        /* color classes*/\n        .text-primary {\n          color: var(--tcolor-primary) !important;\n        }\n        .bg-primary {\n          background-color: var(--tcolor-primary) !important;\n        }\n        .text-primary50 {\n          color: var(--tcolor-primary50) !important;\n        }\n        .text-secondary {\n          color: var(--tcolor-secondary) !important;\n        }\n        .bg-secondary {\n          background-color: var(--tcolor-secondary) !important;\n        }\n        .text-light {\n          color: var(--tcolor-light) !important;\n        }\n        .bg-light {\n          background-color: var(--tcolor-light) !important;\n        }\n        .text-default {\n          color: var(--tcolor-text) !important;\n        }\n\n\n        /* Font size classes */\n        h1, .h1 {\n          font-size: var(--font-size-h1);\n          line-height: 1.4;\n        }\n        h2, .h2 {\n          font-size: var(--font-size-h2);\n        }\n        h3, .h3 {\n          font-size: var(--font-size-h3);\n        }\n        p, .p {\n          font-size: var(--font-size);\n        }\n        small, .small {\n          font-size: var(--font-size-small);\n        }\n        .bold {\n          font-weight: var(--font-weight-bold)\n        }\n        .weight-regular {\n          font-weight: var(--font-weight)\n        }\n        .italic {\n          font-style: italic;\n        }\n        .border-color-primary70 {\n          border-color: var(--tcolor-primary70);\n        }\n\n        /* Animations */\n        .loading1 {\n          animation: pulseColorPrimary 2s ease-in-out infinite;\n          color: var(--tcolor-primary70);\n        }\n\n        @keyframes pulseColorPrimary {\n          0% { color: var(--tcolor-primary10); }\n          50% { color: var(--tcolor-primary); }\n          60% { color: var(--tcolor-primary); }\n          100% { color: var(--tcolor-primary10); }\n        }\n\n\n        /* Layout classes */\n        .container {\n        \twidth: calc(100% - 30px);\n          margin-left: 15px;\n          margin-right: 15px;\n        }\n        .container.top {\n          margin-top: 2px;\n        }\n        .container.collections {\n          padding: 40px 0 20px 0;\n        }\n        @media (min-width: 992px) {\n          .container {\n            margin-right: auto;\n            margin-left: auto;\n            max-width: 970px; } }\n        .hlist {\n          display: flex;\n          align-items: center;\n          border-color: var(--tcolor-border);\n        }\n        .hlist>* {\n          border-right-width: 1px;\n          border-color: inherit;\n          border-right-style: solid;\n          padding-left: 8px;\n          padding-right: 8px;\n        }\n        .hlist>*:last-child {\n          border-right-width: 0;\n        }\n        .col-facets {\n          width: 30%;\n          margin-left: 40px;\n        }\n        .col-main {\n          width: 70%;\n          margin-right: 40px;\n        }\n        .col-facets > * {\n          margin-right: 70px;\n        }\n\n\n        /* Flex Utility Classess */\n        .flex {\n          display: flex !important; }\n        .flex-row {\n          flex-direction: row !important; }\n\n        .flex-column {\n          flex-direction: column !important; }\n\n        .flex-row-reverse {\n          flex-direction: row-reverse !important; }\n\n        .flex-column-reverse {\n          flex-direction: column-reverse !important; }\n\n        .flex-wrap {\n          flex-wrap: wrap !important; }\n\n        .flex-nowrap {\n          flex-wrap: nowrap !important; }\n\n        .flex-wrap-reverse {\n          flex-wrap: wrap-reverse !important; }\n\n        .flex-fill {\n          flex: 1 1 auto !important; }\n\n        .flex-grow-0 {\n          flex-grow: 0 !important; }\n\n        .flex-grow-1 {\n          flex-grow: 1 !important; }\n\n        .flex-shrink-0 {\n          flex-shrink: 0 !important; }\n\n        .flex-shrink-1 {\n          flex-shrink: 1 !important; }\n\n        .justify-content-start {\n          justify-content: flex-start !important; }\n\n        .justify-content-end {\n          justify-content: flex-end !important; }\n\n        .justify-content-center {\n          justify-content: center !important; }\n\n        .justify-content-between {\n          justify-content: space-between !important; }\n\n        .justify-content-around {\n          justify-content: space-around !important; }\n\n        .align-items-start {\n          align-items: flex-start !important; }\n\n        .align-items-end {\n          align-items: flex-end !important; }\n\n        .align-items-center {\n          align-items: center !important; }\n\n        .align-items-baseline {\n          align-items: baseline !important; }\n\n        .align-items-stretch {\n          align-items: stretch !important; }\n\n        .align-content-start {\n          align-content: flex-start !important; }\n\n        .align-content-end {\n          align-content: flex-end !important; }\n\n        .align-content-center {\n          align-content: center !important; }\n\n        .align-content-between {\n          align-content: space-between !important; }\n\n        .align-content-around {\n          align-content: space-around !important; }\n\n        .align-content-stretch {\n          align-content: stretch !important; }\n\n        .align-self-auto {\n          align-self: auto !important; }\n\n        .align-self-start {\n          align-self: flex-start !important; }\n\n        .align-self-end {\n          align-self: flex-end !important; }\n\n        .align-self-center {\n          align-self: center !important; }\n\n        .align-self-baseline {\n          align-self: baseline !important; }\n\n        .align-self-stretch {\n          align-self: stretch !important; }\n\n\n        /* Margin and padding utility classess */\n        .m-0 {\n          margin: 0 !important; }\n\n        .mt-0,\n        .my-0 {\n          margin-top: 0 !important; }\n\n        .mr-0,\n        .mx-0 {\n          margin-right: 0 !important; }\n\n        .mb-0,\n        .my-0 {\n          margin-bottom: 0 !important; }\n\n        .ml-0,\n        .mx-0 {\n          margin-left: 0 !important; }\n\n        .m-1 {\n          margin: 0.25rem !important; }\n\n        .mt-1,\n        .my-1 {\n          margin-top: 0.25rem !important; }\n\n        .mr-1,\n        .mx-1 {\n          margin-right: 0.25rem !important; }\n\n        .mb-1,\n        .my-1 {\n          margin-bottom: 0.25rem !important; }\n\n        .ml-1,\n        .mx-1 {\n          margin-left: 0.25rem !important; }\n\n        .m-2 {\n          margin: 0.5rem !important; }\n\n        .mt-2,\n        .my-2 {\n          margin-top: 0.5rem !important; }\n\n        .mr-2,\n        .mx-2 {\n          margin-right: 0.5rem !important; }\n\n        .mb-2,\n        .my-2 {\n          margin-bottom: 0.5rem !important; }\n\n        .ml-2,\n        .mx-2 {\n          margin-left: 0.5rem !important; }\n\n        .m-3 {\n          margin: 1rem !important; }\n\n        .mt-3,\n        .my-3 {\n          margin-top: 1rem !important; }\n\n        .mr-3,\n        .mx-3 {\n          margin-right: 1rem !important; }\n\n        .mb-3,\n        .my-3 {\n          margin-bottom: 1rem !important; }\n\n        .ml-3,\n        .mx-3 {\n          margin-left: 1rem !important; }\n\n        .m-4 {\n          margin: 1.5rem !important; }\n\n        .mt-4,\n        .my-4 {\n          margin-top: 1.5rem !important; }\n\n        .mr-4,\n        .mx-4 {\n          margin-right: 1.5rem !important; }\n\n        .mb-4,\n        .my-4 {\n          margin-bottom: 1.5rem !important; }\n\n        .ml-4,\n        .mx-4 {\n          margin-left: 1.5rem !important; }\n\n        .m-5 {\n          margin: 3rem !important; }\n\n        .mt-5,\n        .my-5 {\n          margin-top: 3rem !important; }\n\n        .mr-5,\n        .mx-5 {\n          margin-right: 3rem !important; }\n\n        .mb-5,\n        .my-5 {\n          margin-bottom: 3rem !important; }\n\n        .ml-5,\n        .mx-5 {\n          margin-left: 3rem !important; }\n\n        .p-0 {\n          padding: 0 !important; }\n\n        .pt-0,\n        .py-0 {\n          padding-top: 0 !important; }\n\n        .pr-0,\n        .px-0 {\n          padding-right: 0 !important; }\n\n        .pb-0,\n        .py-0 {\n          padding-bottom: 0 !important; }\n\n        .pl-0,\n        .px-0 {\n          padding-left: 0 !important; }\n\n        .p-1 {\n          padding: 0.25rem !important; }\n\n        .pt-1,\n        .py-1 {\n          padding-top: 0.25rem !important; }\n\n        .pr-1,\n        .px-1 {\n          padding-right: 0.25rem !important; }\n\n        .pb-1,\n        .py-1 {\n          padding-bottom: 0.25rem !important; }\n\n        .pl-1,\n        .px-1 {\n          padding-left: 0.25rem !important; }\n\n        .p-2 {\n          padding: 0.5rem !important; }\n\n        .pt-2,\n        .py-2 {\n          padding-top: 0.5rem !important; }\n\n        .pr-2,\n        .px-2 {\n          padding-right: 0.5rem !important; }\n\n        .pb-2,\n        .py-2 {\n          padding-bottom: 0.5rem !important; }\n\n        .pl-2,\n        .px-2 {\n          padding-left: 0.5rem !important; }\n\n        .p-3 {\n          padding: 1rem !important; }\n\n        .pt-3,\n        .py-3 {\n          padding-top: 1rem !important; }\n\n        .pr-3,\n        .px-3 {\n          padding-right: 1rem !important; }\n\n        .pb-3,\n        .py-3 {\n          padding-bottom: 1rem !important; }\n\n        .pl-3,\n        .px-3 {\n          padding-left: 1rem !important; }\n\n        .p-4 {\n          padding: 1.5rem !important; }\n\n        .pt-4,\n        .py-4 {\n          padding-top: 1.5rem !important; }\n\n        .pr-4,\n        .px-4 {\n          padding-right: 1.5rem !important; }\n\n        .pb-4,\n        .py-4 {\n          padding-bottom: 1.5rem !important; }\n\n        .pl-4,\n        .px-4 {\n          padding-left: 1.5rem !important; }\n\n        .p-5 {\n          padding: 3rem !important; }\n\n        .pt-5,\n        .py-5 {\n          padding-top: 3rem !important; }\n\n        .pr-5,\n        .px-5 {\n          padding-right: 3rem !important; }\n\n        .pb-5,\n        .py-5 {\n          padding-bottom: 3rem !important; }\n\n        .pl-5,\n        .px-5 {\n          padding-left: 3rem !important; }\n\n\n        /* Other text utlity classess */\n        .text-center {\n          text-align: center !important;\n        }\n        .text-left {\n          text-align: left !important;\n        }\n        .text-right {\n          text-align: right !important;\n        }\n        .no-decoration {\n          text-decoration: none;\n        }\n\n\n      </style>\n\n    </template>\n</dom-module>\n'},function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));i(5);var n=i(6),s=i(22),r=i(43);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)o[t[e]]=!0;a=Object.getPrototypeOf(a)}const h=Object(n.a)(t=>{const e=Object(r.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(s.b)(t[e]))}static attributeNameForProperty(t){return Object(s.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!o[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i(5);var n=i(6),s=i(13),r=i(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=s.a,a=Object(n.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let n=this.__data[t],s=this._shouldPropertyChange(t,e,n);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),s}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,n){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,n)}_attributeToProperty(t,e,i){if(!this.__serializing){const n=this.__dataAttributes,s=n&&n[t]||t;this[s]=this._deserializeValue(e,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const n=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=Object(r.a)(t)),void 0===n?t.removeAttribute(i):t.setAttribute(i,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(5);var n=i(6),s=i(31);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=Object(n.a)(t=>class extends t{_addEventListenerToNode(t,e,i){Object(s.a)(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){Object(s.b)(t,e,i)||super._removeEventListenerFromNode(t,e,i)}})},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i(5);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,i){return{index:t,removed:e,addedCount:i}}function s(t,e,i,s,r,a){let h,l=0,c=0,d=Math.min(i-e,a-r);if(0==e&&0==r&&(l=function(t,e,i){for(let n=0;n<i;n++)if(!o(t[n],e[n]))return n;return i}(t,s,d)),i==t.length&&a==s.length&&(c=function(t,e,i){let n=t.length,s=e.length,r=0;for(;r<i&&o(t[--n],e[--s]);)r++;return r}(t,s,d-l)),r+=l,a-=c,(i-=c)-(e+=l)==0&&a-r==0)return[];if(e==i){for(h=n(e,[],0);r<a;)h.removed.push(s[r++]);return[h]}if(r==a)return[n(e,[],i-e)];let p=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],s=[];for(;e>0||i>0;){if(0==e){s.push(2),i--;continue}if(0==i){s.push(3),e--;continue}let r,o=t[e-1][i-1],a=t[e-1][i],h=t[e][i-1];r=a<h?a<o?a:o:h<o?h:o,r==o?(o==n?s.push(0):(s.push(1),n=o),e--,i--):r==a?(s.push(3),e--,n=a):(s.push(2),i--,n=h)}return s.reverse(),s}(function(t,e,i,n,s,r){let a=r-s+1,h=i-e+1,l=new Array(a);for(let t=0;t<a;t++)l[t]=new Array(h),l[t][0]=t;for(let t=0;t<h;t++)l[0][t]=t;for(let i=1;i<a;i++)for(let r=1;r<h;r++)if(o(t[e+r-1],n[s+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,s,r,a));h=void 0;let u=[],f=e,m=r;for(let t=0;t<p.length;t++)switch(p[t]){case 0:h&&(u.push(h),h=void 0),f++,m++;break;case 1:h||(h=n(f,[],0)),h.addedCount++,f++,h.removed.push(s[m]),m++;break;case 2:h||(h=n(f,[],0)),h.addedCount++,f++;break;case 3:h||(h=n(f,[],0)),h.removed.push(s[m]),m++}return h&&u.push(h),u}function r(t,e){return s(t,0,t.length,e,0,e.length)}function o(t,e){return t===e}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(8);var n=i(4),s=i(1),r=new Set;const o={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(r.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():s.r||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Object(n.a)(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(r.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?r.delete(this):r.add(this)}}},function(t,e){t.exports=new class{constructor(){this.models={}}registerModel(t,e){if(this.models[t])throw new Error("A model has already been registered with name: "+t);this.models[t]=e}getModel(t){if(!this.models[t])throw new Error("No model has been registered with name: "+t);return this.models[t]}}},function(t,e){t.exports=t=>class extends t{constructor(){super(),this._injectModel("AppStateModel")}ready(){super.ready(),this._onAppStateUpdate&&this._getAppState().then(t=>this._onAppStateUpdate(t))}_setAppState(t){return this.AppStateModel.set(t)}_getAppState(){return this.AppStateModel.get()}_setWindowLocation(t){this.AppStateModel.setLocation(t)}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let n,s=null,r=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(t){requestAnimationFrame((function(){r?r(t):(s||(s=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),s.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let h=null,l=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&l&&(this.enqueued=!0,o(l))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[a])continue;const n=this.getStyleForCustomStyle(i);if(n){const t=n.__appliedElement||n;h&&h(t),i[a]=t}}return t}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>h,set(t){h=t}},validateCallback:{get:()=>l,set(t){let e=!1;l||(e=!0),l=t,e&&this.enqueueDocumentValidation()}}})},function(t,e,i){i(65),t.exports=self.fetch.bind(self)},function(t,e,i){t.exports={AppStateInterface:i(48),AppStateModel:i(72),AppStateStore:i(73),"app-route":i(85)}},function(t,e,i){const{BaseStore:n}=i(16);t.exports=new class extends n{constructor(){super(),this.data={queryById:{},azAggs:{},searchAggs:{},overview:{}},this.events={}}setAzAggsLoading(t,e){this._setAzAggsState({state:this.STATE.LOADING,id:t,request:e})}setAzAggsLoaded(t,e){this._setAzAggsState({state:this.STATE.LOADED,id:t,payload:e})}setAzAggsError(t,e){this._setAzAggsState({state:this.STATE.ERROR,id:t,error:e})}_setAzAggsState(t){this.data.azAggs[t.id]=t}setSearchAggsLoading(t,e){this._setSearchAggsState({state:this.STATE.LOADING,id:t,request:e})}setSearchAggsLoaded(t,e){this._setSearchAggsState({state:this.STATE.LOADED,id:t,payload:e})}setSearchAggsError(t,e){this._setSearchAggsState({state:this.STATE.ERROR,id:t,error:e})}_setSearchAggsState(t){this.data.searchAggs[t.id]=t}setOverviewLoading(t,e){this._setOverviewState({state:this.STATE.LOADING,id:t,request:e})}setOverviewLoaded(t,e){this._setOverviewState({state:this.STATE.LOADED,id:t,payload:e})}setOverviewError(t,e){this._setOverviewState({state:this.STATE.ERROR,id:t,error:e})}_setOverviewState(t){this.data.overview[t.id]=t}setQueryLoading(t,e){this._setQueryState({state:this.STATE.LOADING,id:t,request:e})}setQueryLoaded(t,e){this._setQueryState({state:this.STATE.LOADED,id:t,payload:e})}setQueryError(t,e){this._setQueryState({state:this.STATE.ERROR,id:t,error:e})}_setQueryState(t){this.data.queryById[t.id]=t}}},function(t,e,i){const{BaseStore:n}=i(16);t.exports=new class extends n{constructor(){super(),this.data={byIndividual:{},pubsByIndividual:{}},this.events={}}setIndividualLoading(t,e){this._setIndividualState({state:this.STATE.LOADING,id:t,request:e})}setIndividualLoaded(t,e){this._setIndividualState({state:this.STATE.LOADED,id:t,payload:e})}setIndividualError(t,e){this._setIndividualState({state:this.STATE.ERROR,id:t,error:e})}_setIndividualState(t){this.data.byIndividual[t.id]=t}setPubsLoading(t,e){this._setPubsState({state:this.STATE.LOADING,id:t,request:e})}setPubsLoaded(t,e){this._setPubsState({state:this.STATE.LOADED,id:t,payload:e})}setPubsError(t,e){this._setPubsState({state:this.STATE.ERROR,id:t,error:e})}_setPubsState(t){this.data.pubsByIndividual[t.id]=t}}},function(t,e,i){const{BaseStore:n}=i(16);t.exports=new class extends n{constructor(){super(),this.data={},this.events={}}}},function(t,e){t.exports='<custom-style>\n  <style>\n    html {\n      /* UCD-Colors. Not called directly in application */\n      --color-blue : #022851;\n      --color-blue70 : #355B85;\n      --color-blue50 : #6884A3;\n      --color-blue20 : #B3C1D1;\n      --color-blue10 : #CDD6E0;\n      --color-gold : #FFBF00;\n      --color-black90 : #191919;\n      --color-black60 : #666666;\n      --color-black10 : #E5E5E5;\n      --color-white : #FFFFFF;\n      --color-rec-pool : #6FCFEB;\n      --color-sunflower : #FFDC00;\n      --color-farmers-market : #AADA91;\n      --color-thiebaud-icing : #F095CD;\n      --color-rose : #FF8189;\n      --color-putah-creek : #008EAA;\n      --color-double-decker : #C10230;\n\n      /* Theme colors called throughout application.  */\n      --tcolor-primary : var(--color-blue);\n      --tcolor-primary70 : var(--color-blue70);\n      --tcolor-primary50 : var(--color-blue50);\n      --tcolor-primary20 : var(--color-blue20);\n      --tcolor-primary10 : var(--color-blue10);\n      --tcolor-primary-disabled : var(--color-blue20);\n      --tcolor-secondary : var(--color-gold);\n      --tcolor-light : var(--color-white);\n      --tcolor-danger : var(--color-double-decker);\n      --tcolor-text : var(--color-black90);\n      --tcolor-bg : var(--color-black10);\n      --tcolor-bg-primary : var(--color-blue10);\n      --tcolor-hero-film : linear-gradient(rgba(2, 40, 81, 0.8), rgba(2, 40, 81, 0.8));\n      --tcolor-hover-bg : var(--color-putah-creek);\n      --tcolor-hover-text : var(--color-white);\n      --tcolor-link-text : var(--color-blue70);\n      --tcolor-link-disabled-text : var(--color-black60);\n      --tcolor-link-hover-text : var(--color-putah-creek);\n      --tcolor-block-bg : var(--color-white);\n      --tcolor-accent0 : var(--color-rec-pool);\n      --tcolor-accent1 : var(--color-sunflower);\n      --tcolor-accent2 : var(--color-farmers-market);\n      --tcolor-accent3 : var(--color-thiebaud-icing);\n      --tcolor-accent4 : var(--color-rose);\n      --tcolor-accent5 : var(--color-blue20);\n      --tcolor-code-text : var(--color-blue );\n      --tcolor-placeholder-text : var(--color-black60);\n      --tcolor-code-bg : var(--color-black10 );\n      --tcolor-border : var(--color-blue20);\n\n      /* Theme font variables */\n      --font-size : 16px;\n      --font-size-h1 : 26px;\n      --font-size-h2 : 22px;\n      --font-size-h3 : 18px;\n      --font-size-small : 14px;\n      --font-weight : 400;\n      --font-weight-bold : 700;\n\n      /* Misc. theme variables */\n      --hr-color : var(--color-blue20);\n      --hr-color-light : var(--color-blue10);\n      --hr-weight : 1px;\n      --masthead-height: 50px;\n      --masthead-logo-height: 20px;\n    }\n    body, html {\n      font-family      : proxima-nova,"Lucida Grande","Lucida Sans","Helvetica Neue",Helvetica,Arial,sans-serif;\n      font-size        : var(--font-size);\n      font-weight      : var(--font-weight);\n      line-height      : calc(var(--font-size) * 1.625);\n      margin           : 0;\n      padding          : 0;\n      background-color : var(--tcolor-bg);\n      color            : var(--tcolor-text);\n      max-width        : 100vw;\n  }\n\n  </style>\n</custom-style>\n'},function(t,e,i){"use strict";var n=i(74),s=i(75),r=i(76);function o(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function a(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function h(t,e){var i=function(t){var e;switch(t.arrayFormat){case"index":return function(t,i,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=i):n[t]=i};case"bracket":return function(t,i,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],i):n[t]=[i]:n[t]=i};default:return function(t,e,i){void 0!==i[t]?i[t]=[].concat(i[t],e):i[t]=e}}}(e=s({arrayFormat:"none"},e)),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),s=e.shift(),o=e.length>0?e.join("="):void 0;o=void 0===o?null:r(o),i(r(s),o,n)})),Object.keys(n).sort().reduce((function(t,e){var i=n[e];return Boolean(i)&&"object"==typeof i&&!Array.isArray(i)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(i):t[e]=i,t}),Object.create(null))):n}e.extract=a,e.parse=h,e.stringify=function(t,e){!1===(e=s({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var i=function(t){switch(t.arrayFormat){case"index":return function(e,i,n){return null===i?[o(e,t),"[",n,"]"].join(""):[o(e,t),"[",o(n,t),"]=",o(i,t)].join("")};case"bracket":return function(e,i){return null===i?o(e,t):[o(e,t),"[]=",o(i,t)].join("")};default:return function(e,i){return null===i?o(e,t):[o(e,t),"=",o(i,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map((function(n){var s=t[n];if(void 0===s)return"";if(null===s)return o(n,e);if(Array.isArray(s)){var r=[];return s.slice().forEach((function(t){void 0!==t&&r.push(i(n,t,r.length))})),r.join("&")}return o(n,e)+"="+o(s,e)})).filter((function(t){return t.length>0})).join("&"):""},e.parseUrl=function(t,e){return{url:t.split("?")[0]||"",query:h(a(t),e)}}},function(t,e,i){"use strict";var n=i(2),s=i(33);function r(){return n.b`
  <style>
    :host {
      display: inline-block;
    }
    .icon {
      height: 24px;
      width: 24px;
    }
    .icon.rp {
      fill: currentColor;
    }
    .container {
      color: var(--tcolor-primary);
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s;
    }
    .container.circle {
      border-radius: 50%;
      background-color: var(--tcolor-primary-disabled);
    }
    .container.noicon {
      display: none;
    }
    .container.link {
      cursor: pointer;
    }
    .container.link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .container.secondary {
      color: var(--tcolor-light);
    }
    .container.circle.secondary {
      background-color: var(--tcolor-secondary);
    }
    .container.lg {
      height: 35px;
      width: 35px;
    }
    .lg .icon {
      height: 24px;
      width: 24px;
    }
  </style>
  <div class="container ${Object(s.a)(this.constructClasses())}">
    ${this.renderIcon()}
  </div>
  `}class o extends n.a{static get properties(){return{size:{type:String},icon:{type:String},themeColor:{type:String,attribute:"theme-color"},isLink:{type:Boolean,attribute:"is-link"},circleBg:{type:Boolean,attribute:"circle-bg"}}}constructor(){super(),this.render=r.bind(this)}constructClasses(){let t={};return this.icon&&"iron-"!=this.icon?this.icon.startsWith("rp-")&&!this._isCustomIcon(this.icon)?(t.noicon=!0,t):(this.circleBg&&(t.circle=!0),this.isLink&&(t.link=!0),this.themeColor&&(t[this.themeColor]=!0),this.size&&(t[this.size]=!0),t):(t.noicon=!0,t)}renderIcon(){if(!this.icon||"iron-"==this.icon)return n.b``;if(this.icon.startsWith("iron-")){let t=this.icon.split("-").slice(1).join("-");return n.b`<iron-icon class="icon" icon="${t}"></iron-icon>`}if(this._isCustomIcon(this.icon)){let t=this.icon.split("-").slice(1).join("-");return n.b`<svg class="icon rp" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  ${this._renderCustomIcon(t)}
                  </svg>`}return n.b``}_renderCustomIcon(t){return"search"==t?n.c`<path d="M21.55,19.4l-4.14-4.15a8.44,8.44,0,1,0-2.16,2.16l4.15,4.15a1.55,1.55,0,0,0,1.08.44,1.52,1.52,0,0,0,1.07-2.6ZM5.05,10.45a5.41,5.41,0,1,1,5.4,5.4A5.4,5.4,0,0,1,5.05,10.45Z"/>`:"qr"==t?n.c`<path d="M3,3V8.25H8.25V3ZM6.75,6.75H4.5V4.5H6.75Z"/><path d="M3,15.75V21H8.25V15.75ZM6.75,19.5H4.5V17.25H6.75Z"/><path d="M15.75,3V8.25H21V3ZM19.5,6.75H17.25V4.5H19.5Z"/><polygon points="19.5 9.75 19.5 14.25 15.75 14.25 15.75 15.75 21 15.75 21 9.75 19.5 9.75"/><polygon points="15.75 17.25 15.75 21 17.25 21 17.25 18.75 19.5 18.75 19.5 21 21 21 21 17.25 15.75 17.25"/><polygon points="9.75 3 9.75 4.5 12.75 4.5 12.75 8.25 14.25 8.25 14.25 3 9.75 3"/><polygon points="12.75 9.75 12.75 12.75 9.75 12.75 9.75 17.25 12.75 17.25 12.75 21 14.25 21 14.25 15.75 11.25 15.75 11.25 14.25 14.25 14.25 14.25 11.25 15.75 11.25 15.75 12.75 17.25 12.75 17.25 9.75 12.75 9.75"/><rect x="9.75" y="18.75" width="1.5" height="2.25"/><rect x="6" y="12.75" width="2.25" height="1.5"/><polygon points="9.75 6 9.75 9.75 3 9.75 3 14.25 4.5 14.25 4.5 11.25 11.25 11.25 11.25 6 9.75 6"/>`:void 0}_isCustomIcon(t){return!!["rp-search","rp-qr"].includes(t)}}customElements.define("rp-icon",o)},function(t,e,i){"use strict";var n=i(2),s=(i(8),{"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"}),r={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},a=/[a-z0-9*]/,h=/U\+/,l=/^arrow/,c=/^space(bar)?/,d=/^escape$/;function p(t,e){var i="";if(t){var n=t.toLowerCase();" "===n||c.test(n)?i="space":d.test(n)?i="esc":1==n.length?e&&!a.test(n)||(i=n):i=l.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function u(t,e){return t.key?p(t.key,e):t.detail&&t.detail.key?p(t.detail.key,e):(i=t.keyIdentifier,n="",i&&(i in s?n=s[i]:h.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):r[t]),e}(t.keyCode)||"");var i,n}function f(t,e){return u(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function m(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var i=e.split(":"),n=i[0],s=i[1];return n in o?(t[o[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=s||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const g={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=m(e),n=0;n<i.length;++n)if(f(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(t,e){m(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],s=t[i][1];if(f(n,e)&&(this._triggerKeyHandler(n,s,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var s=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,s),s.defaultPrevented&&i.preventDefault()}};var v=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const _={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},y={properties:{sizingTarget:{type:Object,value:function(){return this}},fitInto:{type:Object,value:window},noOverlap:{type:Boolean},positionTarget:{type:Element},horizontalAlign:{type:String},verticalAlign:{type:String},dynamicAlign:{type:Boolean},horizontalOffset:{type:Number,value:0,notify:!0},verticalOffset:{type:Number,value:0,notify:!0},autoFitOnAttach:{type:Boolean,value:!1},_fitInfo:{type:Object}},get _fitWidth(){return this.fitInto===window?this.fitInto.innerWidth:this.fitInto.getBoundingClientRect().width},get _fitHeight(){return this.fitInto===window?this.fitInto.innerHeight:this.fitInto.getBoundingClientRect().height},get _fitLeft(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().left},get _fitTop(){return this.fitInto===window?0:this.fitInto.getBoundingClientRect().top},get _defaultPositionTarget(){var t=Object(v.a)(this).parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(t=t.host),t},get _localeHorizontalAlign(){if(this._isRTL){if("right"===this.horizontalAlign)return"left";if("left"===this.horizontalAlign)return"right"}return this.horizontalAlign},get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},get _isRTL(){return void 0===this._memoizedIsRTL&&(this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction),this._memoizedIsRTL},attached:function(){this.positionTarget=this.positionTarget||this._defaultPositionTarget,this.autoFitOnAttach&&("none"===window.getComputedStyle(this).display?setTimeout(function(){this.fit()}.bind(this)):(window.ShadyDOM&&ShadyDOM.flush(),this.fit()))},detached:function(){this.__deferredFit&&(clearTimeout(this.__deferredFit),this.__deferredFit=null)},fit:function(){this.position(),this.constrain(),this.center()},_discoverInfo:function(){if(!this._fitInfo){var t=window.getComputedStyle(this),e=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==t.top?"top":"auto"!==t.bottom?"bottom":null,horizontally:"auto"!==t.left?"left":"auto"!==t.right?"right":null},sizedBy:{height:"none"!==e.maxHeight,width:"none"!==e.maxWidth,minWidth:parseInt(e.minWidth,10)||0,minHeight:parseInt(e.minHeight,10)||0},margin:{top:parseInt(t.marginTop,10)||0,right:parseInt(t.marginRight,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0}}}},resetFit:function(){var t=this._fitInfo||{};for(var e in t.sizerInlineStyle)this.sizingTarget.style[e]=t.sizerInlineStyle[e];for(var e in t.inlineStyle)this.style[e]=t.inlineStyle[e];this._fitInfo=null},refit:function(){var t=this.sizingTarget.scrollLeft,e=this.sizingTarget.scrollTop;this.resetFit(),this.fit(),this.sizingTarget.scrollLeft=t,this.sizingTarget.scrollTop=e},position:function(){if(this.__shouldPosition){this._discoverInfo(),this.style.position="fixed",this.sizingTarget.style.boxSizing="border-box",this.style.left="0px",this.style.top="0px";var t=this.getBoundingClientRect(),e=this.__getNormalizedRect(this.positionTarget),i=this.__getNormalizedRect(this.fitInto),n=this._fitInfo.margin,s={width:t.width+n.left+n.right,height:t.height+n.top+n.bottom},r=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,s,t,e,i),o=r.left+n.left,a=r.top+n.top,h=Math.min(i.right-n.right,o+t.width),l=Math.min(i.bottom-n.bottom,a+t.height);o=Math.max(i.left+n.left,Math.min(o,h-this._fitInfo.sizedBy.minWidth)),a=Math.max(i.top+n.top,Math.min(a,l-this._fitInfo.sizedBy.minHeight)),this.sizingTarget.style.maxWidth=Math.max(h-o,this._fitInfo.sizedBy.minWidth)+"px",this.sizingTarget.style.maxHeight=Math.max(l-a,this._fitInfo.sizedBy.minHeight)+"px",this.style.left=o-t.left+"px",this.style.top=a-t.top+"px"}},constrain:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo;t.positionedBy.vertically||(this.style.position="fixed",this.style.top="0px"),t.positionedBy.horizontally||(this.style.position="fixed",this.style.left="0px"),this.sizingTarget.style.boxSizing="border-box";var e=this.getBoundingClientRect();t.sizedBy.height||this.__sizeDimension(e,t.positionedBy.vertically,"top","bottom","Height"),t.sizedBy.width||this.__sizeDimension(e,t.positionedBy.horizontally,"left","right","Width")}},_sizeDimension:function(t,e,i,n,s){this.__sizeDimension(t,e,i,n,s)},__sizeDimension:function(t,e,i,n,s){var r=this._fitInfo,o=this.__getNormalizedRect(this.fitInto),a="Width"===s?o.width:o.height,h=e===n,l=h?a-t[n]:t[i],c=r.margin[h?i:n],d="offset"+s,p=this[d]-this.sizingTarget[d];this.sizingTarget.style["max"+s]=a-c-l-p+"px"},center:function(){if(!this.__shouldPosition){this._discoverInfo();var t=this._fitInfo.positionedBy;if(!t.vertically||!t.horizontally){this.style.position="fixed",t.vertically||(this.style.top="0px"),t.horizontally||(this.style.left="0px");var e=this.getBoundingClientRect(),i=this.__getNormalizedRect(this.fitInto);if(!t.vertically){var n=i.top-e.top+(i.height-e.height)/2;this.style.top=n+"px"}if(!t.horizontally){var s=i.left-e.left+(i.width-e.width)/2;this.style.left=s+"px"}}}},__getNormalizedRect:function(t){return t===document.documentElement||t===window?{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}:t.getBoundingClientRect()},__getOffscreenArea:function(t,e,i){var n=Math.min(0,t.top)+Math.min(0,i.bottom-(t.top+e.height)),s=Math.min(0,t.left)+Math.min(0,i.right-(t.left+e.width));return Math.abs(n)*e.width+Math.abs(s)*e.height},__getPosition:function(t,e,i,n,s,r){var o,a=[{verticalAlign:"top",horizontalAlign:"left",top:s.top+this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:s.top+this.verticalOffset,left:s.right-i.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:s.bottom-i.height-this.verticalOffset,left:s.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:s.bottom-i.height-this.verticalOffset,left:s.right-i.width-this.horizontalOffset}];if(this.noOverlap){for(var h=0,l=a.length;h<l;h++){var c={};for(var d in a[h])c[d]=a[h][d];a.push(c)}a[0].top=a[1].top+=s.height,a[2].top=a[3].top-=s.height,a[4].left=a[6].left+=s.width,a[5].left=a[7].left-=s.width}e="auto"===e?null:e,(t="auto"===t?null:t)&&"center"!==t||(a.push({verticalAlign:"top",horizontalAlign:"center",top:s.top+this.verticalOffset+(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset}),a.push({verticalAlign:"bottom",horizontalAlign:"center",top:s.bottom-i.height-this.verticalOffset-(this.noOverlap?s.height:0),left:s.left-n.width/2+s.width/2+this.horizontalOffset})),e&&"middle"!==e||(a.push({verticalAlign:"middle",horizontalAlign:"left",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left+this.horizontalOffset+(this.noOverlap?s.width:0)}),a.push({verticalAlign:"middle",horizontalAlign:"right",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.right-i.width-this.horizontalOffset-(this.noOverlap?s.width:0)})),"middle"===e&&"center"===t&&a.push({verticalAlign:"middle",horizontalAlign:"center",top:s.top-n.height/2+s.height/2+this.verticalOffset,left:s.left-n.width/2+s.width/2+this.horizontalOffset});for(h=0;h<a.length;h++){var p=a[h],u=p.verticalAlign===e,f=p.horizontalAlign===t;if(!this.dynamicAlign&&!this.noOverlap&&u&&f){o=p;break}var m=(!e||u)&&(!t||f);if(this.dynamicAlign||m){if(p.offscreenArea=this.__getOffscreenArea(p,i,r),0===p.offscreenArea&&m){o=p;break}o=o||p;var g=p.offscreenArea-o.offscreenArea;(g<0||0===g&&(u||f))&&(o=p)}}return o}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var b=i(46),z=i(1),w=Element.prototype,C=w.matches||w.matchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||w.webkitMatchesSelector;const S=new class{getTabbableNodes(t){var e=[];return this._collectTabbableNodes(t,e)?this._sortByTabIndex(e):e}isFocusable(t){return C.call(t,"input, select, textarea, button, object")?C.call(t,":not([disabled])"):C.call(t,"a[href], area[href], iframe, [tabindex], [contentEditable]")}isTabbable(t){return this.isFocusable(t)&&C.call(t,':not([tabindex="-1"])')&&this._isVisible(t)}_normalizedTabIndex(t){if(this.isFocusable(t)){var e=t.getAttribute("tabindex")||0;return Number(e)}return-1}_collectTabbableNodes(t,e){if(t.nodeType!==Node.ELEMENT_NODE)return!1;var i=t;if(!this._isVisible(i))return!1;var n,s=this._normalizedTabIndex(i),r=s>0;s>=0&&e.push(i),n="content"===i.localName||"slot"===i.localName?Object(v.a)(i).getDistributedNodes():Object(v.a)(i.root||i).children;for(var o=0;o<n.length;o++)r=this._collectTabbableNodes(n[o],e)||r;return r}_isVisible(t){var e=t.style;return"hidden"!==e.visibility&&"none"!==e.display&&("hidden"!==(e=window.getComputedStyle(t)).visibility&&"none"!==e.display)}_sortByTabIndex(t){var e=t.length;if(e<2)return t;var i=Math.ceil(e/2),n=this._sortByTabIndex(t.slice(0,i)),s=this._sortByTabIndex(t.slice(i));return this._mergeSortByTabIndex(n,s)}_mergeSortByTabIndex(t,e){for(var i=[];t.length>0&&e.length>0;)this._hasLowerTabOrder(t[0],e[0])?i.push(e.shift()):i.push(t.shift());return i.concat(t,e)}_hasLowerTabOrder(t,e){var i=Math.max(t.tabIndex,0),n=Math.max(e.tabIndex,0);return 0===i||0===n?n>i:i>n}};var x=i(12),M=i(9);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(x.a)({_template:M.a`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        @apply --iron-overlay-backdrop;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
        @apply --iron-overlay-backdrop-opened;
      }
    </style>

    <slot></slot>
`,is:"iron-overlay-backdrop",properties:{opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function(){this.__openedRaf=null},attached:function(){this.opened&&this._openedChanged(this.opened)},prepare:function(){this.opened&&!this.parentNode&&Object(v.a)(document.body).appendChild(this)},open:function(){this.opened=!0},close:function(){this.opened=!1},complete:function(){this.opened||this.parentNode!==document.body||Object(v.a)(this.parentNode).removeChild(this)},_onTransitionend:function(t){t&&t.target===this&&this.complete()},_openedChanged:function(t){if(t)this.prepare();else{var e=window.getComputedStyle(this);"0s"!==e.transitionDuration&&0!=e.opacity||this.complete()}this.isAttached&&(this.__openedRaf&&(window.cancelAnimationFrame(this.__openedRaf),this.__openedRaf=null),this.scrollTop=this.scrollTop,this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null,this.toggleClass("opened",this.opened)}.bind(this)))}});var O=i(31);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const H=new class{constructor(){this._overlays=[],this._minimumZ=101,this._backdropElement=null,O.a(document.documentElement,"tap",(function(){})),document.addEventListener("tap",this._onCaptureClick.bind(this),!0),document.addEventListener("focus",this._onCaptureFocus.bind(this),!0),document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}get backdropElement(){return this._backdropElement||(this._backdropElement=document.createElement("iron-overlay-backdrop")),this._backdropElement}get deepActiveElement(){var t=document.activeElement;for(t&&t instanceof Element!=!1||(t=document.body);t.root&&Object(v.a)(t.root).activeElement;)t=Object(v.a)(t.root).activeElement;return t}_bringOverlayAtIndexToFront(t){var e=this._overlays[t];if(e){var i=this._overlays.length-1,n=this._overlays[i];if(n&&this._shouldBeBehindOverlay(e,n)&&i--,!(t>=i)){var s=Math.max(this.currentOverlayZ(),this._minimumZ);for(this._getZ(e)<=s&&this._applyOverlayZ(e,s);t<i;)this._overlays[t]=this._overlays[t+1],t++;this._overlays[i]=e}}}addOrRemoveOverlay(t){t.opened?this.addOverlay(t):this.removeOverlay(t)}addOverlay(t){var e=this._overlays.indexOf(t);if(e>=0)return this._bringOverlayAtIndexToFront(e),void this.trackBackdrop();var i=this._overlays.length,n=this._overlays[i-1],s=Math.max(this._getZ(n),this._minimumZ),r=this._getZ(t);if(n&&this._shouldBeBehindOverlay(t,n)){this._applyOverlayZ(n,s),i--;var o=this._overlays[i-1];s=Math.max(this._getZ(o),this._minimumZ)}r<=s&&this._applyOverlayZ(t,s),this._overlays.splice(i,0,t),this.trackBackdrop()}removeOverlay(t){var e=this._overlays.indexOf(t);-1!==e&&(this._overlays.splice(e,1),this.trackBackdrop())}currentOverlay(){var t=this._overlays.length-1;return this._overlays[t]}currentOverlayZ(){return this._getZ(this.currentOverlay())}ensureMinimumZ(t){this._minimumZ=Math.max(this._minimumZ,t)}focusOverlay(){var t=this.currentOverlay();t&&t._applyFocus()}trackBackdrop(){var t=this._overlayWithBackdrop();(t||this._backdropElement)&&(this.backdropElement.style.zIndex=this._getZ(t)-1,this.backdropElement.opened=!!t,this.backdropElement.prepare())}getBackdrops(){for(var t=[],e=0;e<this._overlays.length;e++)this._overlays[e].withBackdrop&&t.push(this._overlays[e]);return t}backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}_overlayWithBackdrop(){for(var t=this._overlays.length-1;t>=0;t--)if(this._overlays[t].withBackdrop)return this._overlays[t]}_getZ(t){var e=this._minimumZ;if(t){var i=Number(t.style.zIndex||window.getComputedStyle(t).zIndex);i==i&&(e=i)}return e}_setZ(t,e){t.style.zIndex=e}_applyOverlayZ(t,e){this._setZ(t,e+2)}_overlayInPath(t){t=t||[];for(var e=0;e<t.length;e++)if(t[e]._manager===this)return t[e]}_onCaptureClick(t){var e=this._overlays.length-1;if(-1!==e)for(var i,n=Object(v.a)(t).path;(i=this._overlays[e])&&this._overlayInPath(n)!==i&&(i._onCaptureClick(t),i.allowClickThrough);)e--}_onCaptureFocus(t){var e=this.currentOverlay();e&&e._onCaptureFocus(t)}_onCaptureKeyDown(t){var e=this.currentOverlay();e&&(g.keyboardEventMatchesKeys(t,"esc")?e._onCaptureEsc(t):g.keyboardEventMatchesKeys(t,"tab")&&e._onCaptureTab(t))}_shouldBeBehindOverlay(t,e){return!t.alwaysOnTop&&e.alwaysOnTop}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var L,P,E={pageX:0,pageY:0},A=null,V=[],T=["wheel","mousewheel","DOMMouseScroll","touchstart","touchmove"];function k(t){I.indexOf(t)>=0||(0===I.length&&function(){L=L||F.bind(void 0);for(var t=0,e=T.length;t<e;t++)document.addEventListener(T[t],L,{capture:!0,passive:!1})}(),I.push(t),P=I[I.length-1],j=[],R=[])}function N(t){var e=I.indexOf(t);-1!==e&&(I.splice(e,1),P=I[I.length-1],j=[],R=[],0===I.length&&function(){for(var t=0,e=T.length;t<e;t++)document.removeEventListener(T[t],L,{capture:!0,passive:!1})}())}const I=[];let j=null,R=null;function F(t){if(t.cancelable&&function(t){var e=Object(v.a)(t).rootTarget;"touchmove"!==t.type&&A!==e&&(A=e,V=function(t){for(var e=[],i=t.indexOf(P),n=0;n<=i;n++)if(t[n].nodeType===Node.ELEMENT_NODE){var s=t[n],r=s.style;"scroll"!==r.overflow&&"auto"!==r.overflow&&(r=window.getComputedStyle(s)),"scroll"!==r.overflow&&"auto"!==r.overflow||e.push(s)}return e}(Object(v.a)(t).path));if(!V.length)return!0;if("touchstart"===t.type)return!1;var i=function(t){var e={deltaX:t.deltaX,deltaY:t.deltaY};if("deltaX"in t);else if("wheelDeltaX"in t&&"wheelDeltaY"in t)e.deltaX=-t.wheelDeltaX,e.deltaY=-t.wheelDeltaY;else if("wheelDelta"in t)e.deltaX=0,e.deltaY=-t.wheelDelta;else if("axis"in t)e.deltaX=1===t.axis?t.detail:0,e.deltaY=2===t.axis?t.detail:0;else if(t.targetTouches){var i=t.targetTouches[0];e.deltaX=E.pageX-i.pageX,e.deltaY=E.pageY-i.pageY}return e}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/(t);return!function(t,e,i){if(!e&&!i)return;for(var n=Math.abs(i)>=Math.abs(e),s=0;s<t.length;s++){var r=t[s];if(n?i<0?r.scrollTop>0:r.scrollTop<r.scrollHeight-r.clientHeight:e<0?r.scrollLeft>0:r.scrollLeft<r.scrollWidth-r.clientWidth)return r}}(V,i.deltaX,i.deltaY)}(t)&&t.preventDefault(),t.targetTouches){var e=t.targetTouches[0];E.pageX=e.pageX,E.pageY=e.pageY}}const D={properties:{opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},withBackdrop:{observer:"_withBackdropChanged",type:Boolean},noAutoFocus:{type:Boolean,value:!1},noCancelOnEscKey:{type:Boolean,value:!1},noCancelOnOutsideClick:{type:Boolean,value:!1},closingReason:{type:Object},restoreFocusOnClose:{type:Boolean,value:!1},allowClickThrough:{type:Boolean},alwaysOnTop:{type:Boolean},scrollAction:{type:String},_manager:{type:Object,value:H},_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],get backdropElement(){return this._manager.backdropElement},get _focusNode(){return this._focusedChild||Object(v.a)(this).querySelector("[autofocus]")||this},get _focusableNodes(){return S.getTabbableNodes(this)},ready:function(){this.__isAnimating=!1,this.__shouldRemoveTabIndex=!1,this.__firstFocusableNode=this.__lastFocusableNode=null,this.__rafs={},this.__restoreFocusNode=null,this.__scrollTop=this.__scrollLeft=null,this.__onCaptureScroll=this.__onCaptureScroll.bind(this),this.__rootNodes=null,this._ensureSetup()},attached:function(){this.opened&&this._openedChanged(this.opened),this._observer=Object(v.a)(this).observeNodes(this._onNodesChange)},detached:function(){for(var t in this._observer&&Object(v.a)(this).unobserveNodes(this._observer),this._observer=null,this.__rafs)null!==this.__rafs[t]&&cancelAnimationFrame(this.__rafs[t]);this.__rafs={},this._manager.removeOverlay(this),this.__isAnimating&&(this.opened?this._finishRenderOpened():(this._applyFocus(),this._finishRenderClosed()))},toggle:function(){this._setCanceled(!1),this.opened=!this.opened},open:function(){this._setCanceled(!1),this.opened=!0},close:function(){this._setCanceled(!1),this.opened=!1},cancel:function(t){this.fire("iron-overlay-canceled",t,{cancelable:!0}).defaultPrevented||(this._setCanceled(!0),this.opened=!1)},invalidateTabbables:function(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function(){this._overlaySetup||(this._overlaySetup=!0,this.style.outline="none",this.style.display="none")},_openedChanged:function(t){t?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true"),this.isAttached&&(this.__isAnimating=!0,this.__deraf("__openedChanged",this.__openedChanged))},_canceledChanged:function(){this.closingReason=this.closingReason||{},this.closingReason.canceled=this.canceled},_withBackdropChanged:function(){this.withBackdrop&&!this.hasAttribute("tabindex")?(this.setAttribute("tabindex","-1"),this.__shouldRemoveTabIndex=!0):this.__shouldRemoveTabIndex&&(this.removeAttribute("tabindex"),this.__shouldRemoveTabIndex=!1),this.opened&&this.isAttached&&this._manager.trackBackdrop()},_prepareRenderOpened:function(){this.__restoreFocusNode=this._manager.deepActiveElement,this._preparePositioning(),this.refit(),this._finishPositioning(),this.noAutoFocus&&document.activeElement===this._focusNode&&(this._focusNode.blur(),this.__restoreFocusNode.focus())},_renderOpened:function(){this._finishRenderOpened()},_renderClosed:function(){this._finishRenderClosed()},_finishRenderOpened:function(){this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-opened")},_finishRenderClosed:function(){this.style.display="none",this.style.zIndex="",this.notifyResize(),this.__isAnimating=!1,this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function(){this.style.transition=this.style.webkitTransition="none",this.style.transform=this.style.webkitTransform="none",this.style.display=""},_finishPositioning:function(){this.style.display="none",this.scrollTop=this.scrollTop,this.style.transition=this.style.webkitTransition="",this.style.transform=this.style.webkitTransform="",this.style.display="",this.scrollTop=this.scrollTop},_applyFocus:function(){if(this.opened)this.noAutoFocus||this._focusNode.focus();else{if(this.restoreFocusOnClose&&this.__restoreFocusNode){var t=this._manager.deepActiveElement;(t===document.body||B(this,t))&&this.__restoreFocusNode.focus()}this.__restoreFocusNode=null,this._focusNode.blur(),this._focusedChild=null}},_onCaptureClick:function(t){this.noCancelOnOutsideClick||this.cancel(t)},_onCaptureFocus:function(t){if(this.withBackdrop){var e=Object(v.a)(t).path;-1===e.indexOf(this)?(t.stopPropagation(),this._applyFocus()):this._focusedChild=e[0]}},_onCaptureEsc:function(t){this.noCancelOnEscKey||this.cancel(t)},_onCaptureTab:function(t){if(this.withBackdrop){this.__ensureFirstLastFocusables();var e=t.shiftKey,i=e?this.__firstFocusableNode:this.__lastFocusableNode,n=e?this.__lastFocusableNode:this.__firstFocusableNode,s=!1;if(i===n)s=!0;else{var r=this._manager.deepActiveElement;s=r===i||r===this}s&&(t.preventDefault(),this._focusedChild=n,this._applyFocus())}},_onIronResize:function(){this.opened&&!this.__isAnimating&&this.__deraf("refit",this.refit)},_onNodesChange:function(){this.opened&&!this.__isAnimating&&(this.invalidateTabbables(),this.notifyResize())},__ensureFirstLastFocusables:function(){var t=this._focusableNodes;this.__firstFocusableNode=t[0],this.__lastFocusableNode=t[t.length-1]},__openedChanged:function(){this.opened?(this._prepareRenderOpened(),this._manager.addOverlay(this),this._applyFocus(),this._renderOpened()):(this._manager.removeOverlay(this),this._applyFocus(),this._renderClosed())},__deraf:function(t,e){var i=this.__rafs;null!==i[t]&&cancelAnimationFrame(i[t]),i[t]=requestAnimationFrame(function(){i[t]=null,e.call(this)}.bind(this))},__updateScrollObservers:function(t,e,i){t&&e&&this.__isValidScrollAction(i)?("lock"===i&&(this.__saveScrollPosition(),k(this)),this.__addScrollListeners()):(N(this),this.__removeScrollListeners())},__addScrollListeners:function(){if(!this.__rootNodes){if(this.__rootNodes=[],z.r)for(var t=this;t;)t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host&&this.__rootNodes.push(t),t=t.host||t.assignedSlot||t.parentNode;this.__rootNodes.push(document)}this.__rootNodes.forEach((function(t){t.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this)},__removeScrollListeners:function(){this.__rootNodes&&this.__rootNodes.forEach((function(t){t.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})}),this),this.isAttached||(this.__rootNodes=null)},__isValidScrollAction:function(t){return"lock"===t||"refit"===t||"cancel"===t},__onCaptureScroll:function(t){if(!(this.__isAnimating||Object(v.a)(t).path.indexOf(this)>=0))switch(this.scrollAction){case"lock":this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(t)}},__saveScrollPosition:function(){document.scrollingElement?(this.__scrollTop=document.scrollingElement.scrollTop,this.__scrollLeft=document.scrollingElement.scrollLeft):(this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))},__restoreScrollPosition:function(){document.scrollingElement?(document.scrollingElement.scrollTop=this.__scrollTop,document.scrollingElement.scrollLeft=this.__scrollLeft):(document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop,document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft)}},B=(t,e)=>{for(let n=e;n;n=(i=n).assignedSlot||i.parentNode||i.host)if(n===t)return!0;var i;return!1},U=[y,b.a,D],q=[{properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(t,e){for(var i in e)t[i]=e[i]},_cloneConfig:function(t){var e={isClone:!0};return this._copyProperties(e,t),e},_getAnimationConfigRecursive:function(t,e,i){var n;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(n=t?this.animationConfig[t]:this.animationConfig,Array.isArray(n)||(n=[n]),n)for(var s,r=0;s=n[r];r++)if(s.animatable)s.animatable._getAnimationConfigRecursive(s.type||t,e,i);else if(s.id){var o=e[s.id];o?(o.isClone||(e[s.id]=this._cloneConfig(o),o=e[s.id]),this._copyProperties(o,s)):e[s.id]=s}else i.push(s)},getAnimationConfig:function(t){var e={},i=[];for(var n in this._getAnimationConfigRecursive(t,e,i),e)i.push(e[n]);return i}},{_configureAnimations:function(t){var e=[],i=[];if(t.length>0)for(let e,n=0;e=t[n];n++){let t=document.createElement(e.name);if(t.isNeonAnimation){let n=null;t.configure||(t.configure=function(t){return null}),n=t.configure(e),i.push({result:n,config:e,neonAnimation:t})}else console.warn(this.is+":",e.name,"not found!")}for(var n=0;n<i.length;n++){let t=i[n].result,s=i[n].config,r=i[n].neonAnimation;try{"function"!=typeof t.cancel&&(t=document.timeline.play(t))}catch(e){t=null,console.warn("Couldnt play","(",s.name,").",e)}t&&e.push({neonAnimation:r,config:s,animation:t})}return e},_shouldComplete:function(t){for(var e=!0,i=0;i<t.length;i++)if("finished"!=t[i].animation.playState){e=!1;break}return e},_complete:function(t){for(var e=0;e<t.length;e++)t[e].neonAnimation.complete(t[e].config);for(e=0;e<t.length;e++)t[e].animation.cancel()},playAnimation:function(t,e){var i=this.getAnimationConfig(t);if(i){this._active=this._active||{},this._active[t]&&(this._complete(this._active[t]),delete this._active[t]);var n=this._configureAnimations(i);if(0!=n.length){this._active[t]=n;for(var s=0;s<n.length;s++)n[s].animation.onfinish=function(){this._shouldComplete(n)&&(this._complete(n),delete this._active[t],this.fire("neon-animation-finish",e,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",e,{bubbles:!1})}},cancelAnimation:function(){for(var t in this._active){var e=this._active[t];for(var i in e)e[i].animation.cancel()}this._active={}}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(x.a)({_template:M.a`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,is:"iron-dropdown",behaviors:[_,g,U,q],properties:{horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},openAnimationConfig:{type:Object},closeAnimationConfig:{type:Object},focusTarget:{type:Object},noAnimations:{type:Boolean,value:!1},allowOutsideScroll:{type:Boolean,value:!1,observer:"_allowOutsideScrollChanged"}},listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},observers:["_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)"],get containedElement(){for(var t=Object(v.a)(this.$.content).getDistributedNodes(),e=0,i=t.length;e<i;e++)if(t[e].nodeType===Node.ELEMENT_NODE)return t[e]},ready:function(){this.scrollAction||(this.scrollAction=this.allowOutsideScroll?"refit":"lock"),this._readied=!0},attached:function(){this.sizingTarget&&this.sizingTarget!==this||(this.sizingTarget=this.containedElement||this)},detached:function(){this.cancelAnimation()},_openedChanged:function(){this.opened&&this.disabled?this.cancel():(this.cancelAnimation(),this._updateAnimationConfig(),D._openedChanged.apply(this,arguments))},_renderOpened:function(){!this.noAnimations&&this.animationConfig.open?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("open")):D._renderOpened.apply(this,arguments)},_renderClosed:function(){!this.noAnimations&&this.animationConfig.close?(this.$.contentWrapper.classList.add("animating"),this.playAnimation("close")):D._renderClosed.apply(this,arguments)},_onNeonAnimationFinish:function(){this.$.contentWrapper.classList.remove("animating"),this.opened?this._finishRenderOpened():this._finishRenderClosed()},_updateAnimationConfig:function(){for(var t=this.containedElement,e=[].concat(this.openAnimationConfig||[]).concat(this.closeAnimationConfig||[]),i=0;i<e.length;i++)e[i].node=t;this.animationConfig={open:this.openAnimationConfig,close:this.closeAnimationConfig}},_updateOverlayPosition:function(){this.isAttached&&this.notifyResize()},_allowOutsideScrollChanged:function(t){this._readied&&(t?this.scrollAction&&"lock"!==this.scrollAction||(this.scrollAction="refit"):this.scrollAction="lock")},_applyFocus:function(){var t=this.focusTarget||this.containedElement;t&&this.opened&&!this.noAutoFocus?t.focus():D._applyFocus.apply(this,arguments)}});var $=i(33);i(34);function K(){return n.b`
  <style>
    :host {
      display: inline-block;
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--font-size-small);
    }
    #button {
      cursor: pointer;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      height: 44px;
      padding-left: 15px;
      padding-right: 10px;
    }
    .nopadding #button {
      padding-left: 0;
      padding-right: 0;
    }
    #input::placeholder {
      color: var(--tcolor-placeholder-text);
    }
    .container.outline-primary {
      color: var(--tcolor-primary70);
      background-color: var(--tcolor-light);
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 3px 0 0 0;
    }
    li {
      cursor: pointer;
      padding: 5px 10px 5px 15px;
    }
    li[selected] {
      pointer-events: none;
      cursor: auto;
      font-weight: var(--font-weight-bold);
    }
    iron-icon {
      margin-top: 2px;
    }
    .container.outline-primary li:hover {
      background-color: var(--tcolor-primary10);
    }
    .container.outline-primary ul {
      border-style: solid;
      border-width: 1px;
      border-color: var(--tcolor-primary70);
    }
    .container.outline-primary ul {
      background-color: var(--tcolor-light);
    }
    .container.upper {
      text-transform: uppercase;
    }
  </style>
  <div class="container ${Object($.a)(this._constructClasses())}">
   <div id="button"
        @click="${this.openDropdown}">
        <span id="button-text">${this.stickyTitle?this.stickyTitle:this._parseChoices()[this.chosen].text}</span>
        <iron-icon icon="hardware:keyboard-arrow-down"></iron-icon>
   </div>
    <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset=${this.stickyTitle?"35":"0"}>
      <ul slot="dropdown-content">${this._parseChoices().map(t=>this._renderChoices(t))}</ul>
    </iron-dropdown>
  </div>
  `}class W extends n.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"},choices:{type:Array},chosen:{type:parseInt,reflect:!0},opened:{type:Boolean},toUpperCase:{type:Boolean,attribute:"to-upper-case"},noPadding:{type:Boolean,attribute:"no-padding"},stickyTitle:{type:String,attribute:"sticky-title"}}}constructor(){super(),this.render=K.bind(this),this.toUpperCase=!1,this.chosen=0,this.choices=[],this.themeColor="outline-primary",this.opened=!1,this.noPadding=!1,this.stickyTitle="",this._newSelection=new CustomEvent("new-selection",{detail:{message:"A new selection."}})}firstUpdated(t){this.shadowRoot.getElementById("dropdown").addEventListener("opened-changed",t=>{this.opened=t.target.opened})}_constructClasses(){let t={};return t[this.themeColor]=!0,t.opened=this.opened,0===this._parseChoices().length&&(t.hidden=!0),this.noPadding&&(t.nopadding=!0),this.stickyTitle&&(t.stickytitle=!0),this.toUpperCase&&(t.upper=!0),t}_renderChoices(t){return n.b`<li index="${t.index}"
                    ?selected="${t.index==this.chosen&&!this.stickyTitle}"
                    @click="${this._handleClick}">${t.text}</li>`}_handleClick(t){let e=t.target.getAttribute("index");(e!=this.chosen||this.stickyTitle)&&(this.chosen=e,this.shadowRoot.getElementById("dropdown").close(),this.dispatchEvent(this._newSelection))}_parseChoices(){let t=[],e=0;for(let i of this.choices)"string"==typeof i?t.push({index:e,text:i}):"object"==typeof i&&i.text&&t.push({index:e,text:i.text}),e+=1;return t}openDropdown(){this.opened=!0,this.shadowRoot.getElementById("dropdown").open()}}customElements.define("rp-dropdown",W)},function(t,e,i){"use strict";var n=i(2),s=i(33),r=i(34);function o(){return n.b`
  <style>
    :host {
      display: inline-block;
      font-size: var(--font-size-h3);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
    }
    .container.opened input {
      border-color: var(--tcolor-secondary);
      border-style: solid;
      border-width: 2px;
      border-radius: 20px;
      border-right: 0;
      position: relative;
      left: 25px;
      padding-right: 30px;
      height: 34px;
    }
    input {
      border: 0;
      font-size: var(--font-size);
      padding-left: 10px;
      width: 0;
      background-color: inherit;
    }
    .container.opened input {
      animation-duration: .75s;
      animation-name: open;

    }
    input:focus {
      outline: none;
    }
    input[hidden] {
      display: none;
    }
    .container.closing input {
      animation-duration: .75s;
      animation-name: close;
      padding-right: 0 !important;
    }
    .container.closing {
    }
    rp-icon {
      z-index: 1;
    }
    @keyframes open {
      from {
        width: 0%;
      }

      to {
        width: 83%;
        }
    }
    @keyframes close {
      from {
        width: 90%;
      }

      to {
        width: 0;
        }
    }
  </style>
  <div class="container ${Object(s.a)(this.constructClasses())}">
    <input ?hidden="${!this.opened}" type="text" placeholder="${this.placeholder}"
           style="${Object(r.a)(this.constructInputStyles())}"
           id="search-input"
           .value="${this.inputValue}"
           @animationend="${this._handleAnimationEnd}"
           @keyup="${this._handleKeyup}"
           @blur="${this._handleBlur}"
           @input="${t=>this.inputValue=t.target.value}">
    <rp-icon @click="${this._handleClick}" icon="rp-search" circle-bg ?is-link="${this._activateLink()}" theme-color='secondary' size="lg"></rp-icon>
  </div>
  `}i(57);class a extends n.a{static get properties(){return{inputWidth:{type:parseInt,attribute:"input-width"},inputValue:{type:String,attribute:"input-value",reflect:!0},placeholder:{type:String},opened:{type:Boolean},closing:{type:Boolean}}}constructor(){super(),this.render=o.bind(this),this.placeholder="Search the registry",this.opened=!1,this.inputWidth=220,this.inputValue="",this.preventOpen=!1,this.closing=!1,this._newSearch=new CustomEvent("new-search",{detail:{message:"A new search has been triggered"}})}constructClasses(){let t={};return t.opened=this.opened,t.closed=!this.opened,t.closing=this.closing,this.inputValue?t["has-input"]=!0:t["no-input"]=!0,t}constructInputStyles(){let t={};return this.inputWidth&&(t.width=this.inputWidth-20+"px"),t}_validateSearchText(){return!!this.inputValue.replace(/ /g,"")}_handleClick(t){if(this.opened){if(!this._validateSearchText())return!1;this.dispatchEvent(this._newSearch)}else{if(this.preventOpen)return void(this.preventOpen=!1);this.opened=!0}}_activateLink(){return!this.opened||!!this.inputValue}_handleBlur(t){if(!this.opened)return;this.shadowRoot.getElementById("search-input").value||(this.preventOpen=!0,this.closing=!0,self=this,setTimeout((function(){self.preventOpen=!1}),300))}_handleAnimationEnd(){this.closing&&(this.opened=!1,this.closing=!1)}_handleKeyup(t){if(13===t.keyCode){if(t.preventDefault(),!this._validateSearchText())return!1;this.dispatchEvent(this._newSearch)}}updated(t){if(t.has("opened")&&this.opened){let t=this.inputWidth;this.inputWidth=0,this.inputWidth=t,this.shadowRoot.getElementById("search-input").focus()}}}customElements.define("rp-quick-search",a)},function(t,e,i){const n=i(35),s=i(47);t.exports=class{get EventBus(){return n}register(t){t||console.warn("Name not passed to register().  This will fail in IE, cause, you know, IE.");var e=t||this.__proto__.constructor.name;s.registerModel(e,this)}inject(...t){t.forEach(t=>{this[t]=s.getModel(t)})}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}}},function(t,e,i){"use strict";var n,s="object"==typeof Reflect?Reflect:null,r=s&&"function"==typeof s.apply?s.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)};n=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var o=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,t.exports.once=function(t,e){return new Promise((function(i,n){function s(){void 0!==r&&t.removeListener("error",r),i([].slice.call(arguments))}var r;"error"!==e&&(r=function(i){t.removeListener(e,s),n(i)},t.once("error",r)),t.once(e,s)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var h=10;function l(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function c(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function d(t,e,i,n){var s,r,o,a;if(l(i),void 0===(r=t._events)?(r=t._events=Object.create(null),t._eventsCount=0):(void 0!==r.newListener&&(t.emit("newListener",e,i.listener?i.listener:i),r=t._events),o=r[e]),void 0===o)o=r[e]=i,++t._eventsCount;else if("function"==typeof o?o=r[e]=n?[i,o]:[o,i]:n?o.unshift(i):o.push(i),(s=c(t))>0&&o.length>s&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=o.length,a=h,console&&console.warn&&console.warn(a)}return t}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(t,e,i){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:i},s=p.bind(n);return s.listener=i,n.wrapFn=s,s}function f(t,e,i){var n=t._events;if(void 0===n)return[];var s=n[e];return void 0===s?[]:"function"==typeof s?i?[s.listener||s]:[s]:i?function(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(s):g(s,s.length)}function m(t){var e=this._events;if(void 0!==e){var i=e[t];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function g(t,e){for(var i=new Array(e),n=0;n<e;++n)i[n]=t[n];return i}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t||t<0||o(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");h=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||o(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var n="error"===t,s=this._events;if(void 0!==s)n=n&&void 0===s.error;else if(!n)return!1;if(n){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var h=s[t];if(void 0===h)return!1;if("function"==typeof h)r(h,this,e);else{var l=h.length,c=g(h,l);for(i=0;i<l;++i)r(c[i],this,e)}return!0},a.prototype.addListener=function(t,e){return d(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return d(this,t,e,!0)},a.prototype.once=function(t,e){return l(e),this.on(t,u(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){return l(e),this.prependListener(t,u(this,t,e)),this},a.prototype.removeListener=function(t,e){var i,n,s,r,o;if(l(e),void 0===(n=this._events))return this;if(void 0===(i=n[t]))return this;if(i===e||i.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,i.listener||e));else if("function"!=typeof i){for(s=-1,r=i.length-1;r>=0;r--)if(i[r]===e||i[r].listener===e){o=i[r].listener,s=r;break}if(s<0)return this;0===s?i.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(i,s),1===i.length&&(n[t]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",t,o||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[t]),this;if(0===arguments.length){var s,r=Object.keys(i);for(n=0;n<r.length;++n)"removeListener"!==(s=r[n])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=i[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},a.prototype.listeners=function(t){return f(this,t,!0)},a.prototype.rawListeners=function(t){return f(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):m.call(t,e)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(t,e,i){const n=i(35),s=i(63);t.exports=class{constructor(){this.STATE={INIT:"init",LOADING:"loading",LOADED:"loaded",ERROR:"error",SAVING:"saving",SAVE_ERROR:"save-error",SAVE_SUCCESS:"save-success",DELETING:"deleting",DELETE_ERROR:"delete-error",DELETED:"deleted"}}get EventBus(){return n}emit(t,e){setTimeout(()=>{n.emit(t,e)},0)}stateChanged(t,e){return!(t||!e)||(!(!t||e)||!(!t&&!e)&&(t.state!==e.state||!s(t,e)))}}},function(t,e,i){"use strict";var n=Array.isArray,s=Object.keys,r=Object.prototype.hasOwnProperty;t.exports=function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){var o,a,h,l=n(e),c=n(i);if(l&&c){if((a=e.length)!=i.length)return!1;for(o=a;0!=o--;)if(!t(e[o],i[o]))return!1;return!0}if(l!=c)return!1;var d=e instanceof Date,p=i instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==i.getTime();var u=e instanceof RegExp,f=i instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==i.toString();var m=s(e);if((a=m.length)!==s(i).length)return!1;for(o=a;0!=o--;)if(!r.call(i,m[o]))return!1;for(o=a;0!=o--;)if(!t(e[h=m[o]],i[h]))return!1;return!0}return e!=e&&i!=i}},function(t,e,i){const n=i(50);t.exports=class{constructor(){this.rootUrl="","undefined"!=typeof window&&(this.rootUrl=window.location.protocol+"//"+window.location.host),this.ERROR_MESSAGES={REQUEST:"Request Error",STATUS_CODE:"Invalid status code",JSON:"Invalid JSON response",APPLICATION_ERROR:"Application Error"}}async request(t){if(!t.store){if(!this.store)return console.error(new Error("No store provided"));t.store=this.store}if(t.fetchOptions||(t.fetchOptions={}),t.fetchOptions.credentials||(t.fetchOptions.credentials="include"),t.json&&t.fetchOptions&&t.fetchOptions.body&&"object"==typeof t.fetchOptions.body&&(t.fetchOptions.body=JSON.stringify(t.fetchOptions.body),t.fetchOptions.headers||(t.fetchOptions.headers={}),t.fetchOptions.headers["Content-Type"]="application/json"),t.qs){let i=[];for(var e in t.qs)i.push(`${e}=${encodeURIComponent(t.qs[e])}`);t.url+="?"+i.join("&")}if(t.checkCached){var i=t.checkCached();if(this.isLoaded(i))return i;if(this.isLoading(i)){if(!i.request)throw new Error("checkCached set but no request object found",i);return i.request}}let n=this._request(t);return t.onLoading&&t.onLoading(n),await n}_request(t){return t.fetchOptions||(t.fetchOptions={}),new Promise(async(e,i)=>{var s=null;try{s=await n(t.url,t.fetchOptions)}catch(e){return this._handleError(t,i,{error:!0,details:e,response:s,message:this.ERROR_MESSAGES.REQUEST})}if(s.status<200||s.status>299)return this._handleError(t,i,{error:!0,response:s,message:this.ERROR_MESSAGES.STATUS_CODE});if(s.headers.has("Content-Type")&&s.headers.get("Content-Type").match(/application\/json/i)){var r=null;try{r=await s.json()}catch(e){return this._handleError(t,i,{error:!0,details:e,response:s,message:this.ERROR_MESSAGES.JSON})}if(r.error)return this._handleError(t,i,{error:!0,details:r,response:s,message:this.ERROR_MESSAGES.APPLICATION_ERROR})}else r=await s.text();t.onLoad&&t.onLoad({response:s,body:r}),e({response:s,body:r})})}async _handleError(t,e,i){if(i.response&&!i.payload)if(i.response.headers.has("Content-Type")&&i.response.headers.get("Content-Type").match(/application\/json/i))try{i.payload=await i.response.json()}catch(t){i.payload={}}else i.payload=await i.response.text();t.onError&&t.onError(i),e(i)}isLoaded(t){return this.store?!(!t||t.state!==this.store.STATE.LOADED):console.warn("Checking LOADED state but no store set for service")}isLoading(t){return this.store?!(!t||t.state!==this.store.STATE.LOADING):console.warn("Checking LOADED state but no store set for service")}}},function(t,e,i){"use strict";i.r(e),i.d(e,"Headers",(function(){return u})),i.d(e,"Request",(function(){return b})),i.d(e,"Response",(function(){return w})),i.d(e,"DOMException",(function(){return S})),i.d(e,"fetch",(function(){return x}));var n="URLSearchParams"in self,s="Symbol"in self&&"iterator"in Symbol,r="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in self,a="ArrayBuffer"in self;if(a)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function d(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s&&(e[Symbol.iterator]=function(){return e}),e}function u(t){this.map={},t instanceof u?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,i){t.onload=function(){e(t.result)},t.onerror=function(){i(t.error)}}))}function g(t){var e=new FileReader,i=m(e);return e.readAsArrayBuffer(t),i}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:r&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&r&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||l(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var t,e,i,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,i=m(e),e.readAsText(t),i;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),i=new Array(e.length),n=0;n<e.length;n++)i[n]=String.fromCharCode(e[n]);return i.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(z)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(t,e){t=c(t),e=d(e);var i=this.map[t];this.map[t]=i?i+", "+e:e},u.prototype.delete=function(t){delete this.map[c(t)]},u.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},u.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},u.prototype.set=function(t,e){this.map[c(t)]=d(e)},u.prototype.forEach=function(t,e){for(var i in this.map)this.map.hasOwnProperty(i)&&t.call(e,this.map[i],i,this)},u.prototype.keys=function(){var t=[];return this.forEach((function(e,i){t.push(i)})),p(t)},u.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},u.prototype.entries=function(){var t=[];return this.forEach((function(e,i){t.push([i,e])})),p(t)},s&&(u.prototype[Symbol.iterator]=u.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var i,n,s=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new u(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,s||null==t._bodyInit||(s=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new u(e.headers)),this.method=(i=e.method||this.method||"GET",n=i.toUpperCase(),y.indexOf(n)>-1?n:i),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&s)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(s)}function z(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var i=t.split("="),n=i.shift().replace(/\+/g," "),s=i.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(s))}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new u(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},_.call(b.prototype),_.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var C=[301,302,303,307,308];w.redirect=function(t,e){if(-1===C.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var S=self.DOMException;try{new S}catch(t){(S=function(t,e){this.message=t,this.name=e;var i=Error(t);this.stack=i.stack}).prototype=Object.create(Error.prototype),S.prototype.constructor=S}function x(t,e){return new Promise((function(i,n){var s=new b(t,e);if(s.signal&&s.signal.aborted)return n(new S("Aborted","AbortError"));var o=new XMLHttpRequest;function h(){o.abort()}o.onload=function(){var t,e,n={status:o.status,statusText:o.statusText,headers:(t=o.getAllResponseHeaders()||"",e=new u,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var i=t.split(":"),n=i.shift().trim();if(n){var s=i.join(":").trim();e.append(n,s)}})),e)};n.url="responseURL"in o?o.responseURL:n.headers.get("X-Request-URL");var s="response"in o?o.response:o.responseText;setTimeout((function(){i(new w(s,n))}),0)},o.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},o.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},o.onabort=function(){setTimeout((function(){n(new S("Aborted","AbortError"))}),0)},o.open(s.method,function(t){try{return""===t&&self.location.href?self.location.href:t}catch(e){return t}}(s.url),!0),"include"===s.credentials?o.withCredentials=!0:"omit"===s.credentials&&(o.withCredentials=!1),"responseType"in o&&(r?o.responseType="blob":a&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(o.responseType="arraybuffer")),s.headers.forEach((function(t,e){o.setRequestHeader(e,t)})),s.signal&&(s.signal.addEventListener("abort",h),o.onreadystatechange=function(){4===o.readyState&&s.signal.removeEventListener("abort",h)}),o.send(void 0===s._bodyInit?null:s._bodyInit)}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=u,self.Request=b,self.Response=w)},function(t,e){class i{ready(){this.listening=!0}}"undefined"!=typeof window&&(window.BaseMixin=i),t.exports=i},function(t,e){class i{constructor(t){this.superclass=t}with(...t){return t.reduce((t,e)=>e(t),this.superclass)}}const n=t=>new i(t);"undefined"!=typeof window&&(window.Mixin=n),t.exports=n},function(t,e,i){const n=i(35),s=i(47),r=t=>class extends t{static get properties(){return{listening:{type:Boolean,value:!0,observer:"_onListenUpdate"}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={}}ready(){super.ready(),this._eb_init()}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugEventInterface&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugEventInterface&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugEventInterface&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugEventInterface&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugEventInterface&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=s.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugEventInterface&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}debounce(t,e,i){this._debounce_handlers[t]&&clearTimeout(this._debounce_handlers[t]),this._debounce_handlers[t]=setTimeout(()=>{delete this._debounce_handlers[t],e()},i)}_onListenUpdate(){}};"undefined"!=typeof window&&(window.EventInterface=r),t.exports=r},function(t,e,i){const n=i(35),s=i(47),r=t=>class extends t{static get properties(){return{listening:{type:Boolean}}}set bind(t){this._bind=Object.assign(this.bind,t)}get bind(){return this._bind||(this._bind={}),this._bind}constructor(){super(),this.bind={},this._eb_handlers={},this._eb_handlersSet=!1,this._eb_unregisterOnDetach=!0,this._debounce_handlers={},this.listening=!0}connectedCallback(){super.connectedCallback(),this._eb_init()}_eb_init(){if(!this._eb_handlersSet)for(var t in this._eb_handlersSet=!0,this._debugLitCorkUtils&&console.log(this.nodeName,"ready and connected to DOM, attaching event listeners",this.bind),this.bind)this[this.bind[t]]?this._eb_init_fn(t):console.warn(`${this.nodeName} could not bind event ${t} to ${this.bind[t]}`)}_eb_init_fn(t){this[this.bind[t]]=this[this.bind[t]].bind(this),this._eb_handlers[t]=(...e)=>{this.listening?(this._debugLitCorkUtils&&console.log(this.nodeName,"received event",t,", triggering function:",this.bind[t]),this[this.bind[t]].apply(this,e)):this._debugLitCorkUtils&&console.warn(this.nodeName,"ignoring",t,"event, element not listening")},n.on(t,this._eb_handlers[t])}disconnectedCallback(){if(super.disconnectedCallback(),this._debugLitCorkUtils&&console.log(this.nodeName,"disconnected from DOM, removing event listeners"),this._eb_unregisterOnDetach&&this._eb_handlersSet)for(var t in this._eb_handlersSet=!1,this.bind){if(!this[this.bind[t]])continue;let e=n.listenerCount(t);n.removeListener(t,this._eb_handlers[t]),n.listenerCount(t)!==e-1&&console.warn(this.nodeName,"On element detach, failed to remove event listener for: ",t),this._debugLitCorkUtils&&console.log(this.nodeName,"removing event listener for:",t)}}EventBus(){return n}_injectModel(...t){t.forEach(t=>{"string"==typeof t?this._injectModelStr(t):this._bindModelObj(t)})}_injectModelStr(t){this[t]=s.getModel(t),this._bindModelObj(this[t])}_bindModelObj(t){t.events&&this._registerModelEvents(t.events),t.store&&t.store.events&&this._registerModelEvents(t.store.events)}_registerModelEvents(t){for(var e in t){var i=this._getMethodNameFromEvent(t[e]);this[i]?(this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!0),this.bind[t[e]]=i):this._debugLitCorkUtils&&console.log(this.nodeName,"auto-bind:",i+" -> "+t[e],!1)}}_getMethodNameFromEvent(t){return"_on"+t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}emit(t,e){n.emit(t,e)}fire(t,e={}){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}byId(t){return this.shadowRoot?this.shadowRoot.querySelector("#"+t):this.querySelector("#"+t)}$(t){return this.shadowRoot?this.shadowRoot.querySelector(t):this.querySelector(t)}$$(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):this.querySelector(t)}updated(t){t.has("listening")&&this._onListenUpdate()}_onListenUpdate(){}};"undefined"!=typeof window&&(window.LitCorkUtils=r),t.exports=r},function(t,e){t.exports=t=>class extends t{_attachDom(t){if(window.ShadyDOM&&window.ShadyDOM.inUse)return super._attachDom(t);let e=t.querySelectorAll("style");for(var i=0;i<e.length;i++)e[i].parentNode.removeChild(e[i]),this._stylesInserted||(e[i].setAttribute("id",this.nodeName.toLowerCase()+"-styles"),document.head.appendChild(e[i]));return this.appendChild(t),t}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):super.querySelector(t)}querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):super.querySelectorAll(t)}}},function(t,e,i){const{AppStateModel:n}=i(51),s=i(77);t.exports=new class extends n{constructor(){super(),this.defaultPage="home",this.store=s}set(t){return t.location&&(t.page=t.location.path&&t.location.path[0]||this.defaultPage),this._sendGA(),super.set(t)}_sendGA(){if(!window.gtag)return console.warn("No global gtag variable set for analytics events");this.lastGaLocation!==window.location.pathname&&(this.lastGaLocation=window.location.pathname,gtag("config",config.gaCode,{page_path:window.location.pathname}))}}},function(t,e,i){var{BaseModel:n}=i(16);t.exports=class extends n{constructor(){super(),this.register("AppStateModel")}setLocationElement(t){this.locationElement=t}setLocation(t){if(!this.locationElement)return console.warn("Call to setWindowLocation but no locationElement set");this.locationElement.setWindowLocation(t)}async get(){return this.store.data}set(t){return this.store.set(t),this.get()}}},function(t,e,i){const{BaseStore:n}=i(16);t.exports=class extends n{constructor(){super(),this.data={location:{}},this.events={APP_STATE_UPDATE:"app-state-update"}}set(t){this.stateChanged(this.data,t)&&(this.data=Object.assign({},this.data,t),this.emit(this.events.APP_STATE_UPDATE,this.data))}get(){return this.data}}},function(t,e,i){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}},function(t,e,i){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,h=o(t),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))s.call(i,c)&&(h[c]=i[c]);if(n){a=n(i);for(var d=0;d<a.length;d++)r.call(i,a[d])&&(h[a[d]]=i[a[d]])}}return h}},function(t,e,i){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),s=new RegExp("(%[a-f0-9]{2})+","gi");function r(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var i=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],r(i),r(n))}function o(t){try{return decodeURIComponent(t)}catch(s){for(var e=t.match(n),i=1;i<e.length;i++)e=(t=r(e,i).join("")).match(n);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},i=s.exec(t);i;){try{e[i[0]]=decodeURIComponent(i[0])}catch(t){var n=o(i[0]);n!==i[0]&&(e[i[0]]=n)}i=s.exec(t)}e["%C2"]="�";for(var r=Object.keys(e),a=0;a<r.length;a++){var h=r[a];t=t.replace(new RegExp(h,"g"),e[h])}return t}(t)}}},function(t,e,i){const{AppStateStore:n}=i(51);t.exports=new class extends n{}},function(t,e,i){const{BaseModel:n}=i(16),s=i(79),r=i(52);t.exports=new class extends n{constructor(){super(),this.store=r,this.service=s,this.jsonldContext=APP_CONFIG.data.jsonldContext,this.mainFacets=[{id:"people",text:"People",es:this.jsonldContext+":person",baseFilter:{"@type":{type:"keyword",op:"and",value:[this.jsonldContext+":person"]}}},{id:"organizations",text:"Organizations",es:"ucdrp:organization",baseFilter:{"@type":{type:"keyword",op:"and",value:[this.jsonldContext+":organization"]}}},{id:"works",text:"Works",es:this.jsonldContext+":publication",baseFilter:{"@type":{type:"keyword",op:"and",value:[this.jsonldContext+":publication"]}}}],this.currentQuery={},this.subFacets={people:[{id:"faculty",es:"vivo:FacultyMember",text:"Faculty Member",baseFilter:{"@type":{type:"keyword",op:"and",value:["vivo:FacultyMember"]}}},{id:"non-academics",es:"vivo:NonAcademic",text:"Non Academic",baseFilter:{"@type":{type:"keyword",op:"and",value:["vivo:NonAcademic"]}}}],works:[{id:"articles",es:"bibo:AcademicArticle",text:"Academic Article",baseFilter:{"@type":{type:"keyword",op:"and",value:["bibo:AcademicArticle"]}}}],organizations:[{id:"universities",es:"vivo:University",text:"University",baseFilter:{"@type":{type:"keyword",op:"and",value:["vivo:University"]}}},{id:"departments",es:"vivo:AcademicDepartment",text:"Department",baseFilter:{"@type":{type:"keyword",op:"and",value:["vivo:AcademicDepartment"]}}}]},this.aggs={people:{"@type":{type:"facet"}},works:{"@type":{type:"facet"}},organizations:{"@type":{type:"facet"}}},this.pgPer=8,this.defaultIndices=["label.text"],this.searchFields={all:["doi^10","hasContactInfo.familyName.text^9","hasContactInfo.givenName.text^8","label.text^6","hasSubjectArea.label.text^5","abstract^5"],people:["hasContactInfo.familyName.text^9","hasContactInfo.givenName.text^8","hasContactInfo.title.text^7"],works:["doi^10","label.text^9","abstract^8"],organizations:["label.text^10"]},this.register("CollectionModel")}async overview(t,e={}){let i={state:r.STATE.INIT},n=this.getBaseQueryObject();if("facets"==t)n.facets["@type"]={type:"facet"},n.limit=0;else if("randomPeople"==t){if(n.filters["@type"]={type:"keyword",op:"and",value:[this.jsonldContext+":person"]},n.limit=4,e.limit&&(n.limit=e.limit),e.total){let t=Math.floor(Math.random()*(e.total-n.limit));n.offset=t}}else"peopleAggs"==t?(n.filters["@type"]={type:"keyword",op:"and",value:[this.jsonldContext+":person"]},n.limit=0,n.facets["@type"]={type:"facet"}):"worksAggs"==t?(n.filters["@type"]={type:"keyword",op:"and",value:[this.jsonldContext+":publication"]},n.limit=0,n.facets["@type"]={type:"facet"}):"organizationsAggs"==t&&(n.filters["@type"]={type:"keyword",op:"and",value:[this.jsonldContext+":organization"]},n.limit=0,n.facets["@type"]={type:"facet"});return"init"===i.state?await this.service.overview(t,n):"loading"===i.state&&await i.request,this.store.data.overview[t]}async query(t={}){let e={state:r.STATE.INIT},i=this._constructQueryObject(t),n=this._makeQueryId(i);return"init"===e.state?await this.service.query(n,i):"loading"===e.state&&await e.request,this.store.data.queryById[n]}async searchAggQuery(t,e){let i={state:r.STATE.INIT},n=this.getBaseQueryObject(),s=t;return n.limit=0,n.text=t,n.textFields=this.searchFields[e],n.facets={"@type":{type:"facet"}},"init"===i.state?await this.service.searchAgg(s,n):"loading"===i.state&&await i.request,this.store.data.searchAggs[s]}async azAggQuery(t,e){let i={state:r.STATE.INIT},n=`${t}__${e}`,s=[];for(let e of this.mainFacets)if(e.id==t){s.push(e.baseFilter);break}if(this.subFacets[t])for(let i of this.subFacets[t])if(i.id==e){s.push(i.baseFilter);break}let o=this.getBaseQueryObject();o.limit=0,o.filters=this._combineFiltersArray(s),o.facets={};let a=this.getAzBaseFilter(t);return a&&(o.facets[a.key]={type:"facet"}),"init"===i.state?await this.service.azAgg(n,o):"loading"===i.state&&await i.request,this.store.data.azAggs[n]}getAzBaseFilter(t){if(this.mainFacets.map(t=>t.id).includes(t))return"people"==t?{key:"hasContactInfo.familyName.firstLetter",value:{type:"keyword",op:"and",value:[]}}:"works"==t||"organizations"==t?{key:"label.firstLetter",value:{type:"keyword",op:"and",value:[]}}:void 0}getBaseQueryObject(){return{offset:0,limit:8,sort:[{}],filters:{},facets:{}}}_makeQueryId(t){let e={};for(let i in t)"facets"!=i&&"textFields"!=i&&(e[i]=t[i]);return JSON.stringify(e)}_getSubFacets(t,e,i){this.mainFacets.map(t=>t.id);let n=[];if(!e||!i)return n;if(0==Object.keys(i).length)return n;let s={...i},r={};try{if(r=e.aggregations.facets["@type"],"object"!=typeof r||Array.isArray(r))throw"Subfacet counts not found."}catch(t){return console.warn(t),n}let o=0;"number"==typeof e.total&&(o=e.total);for(let e of this.mainFacets)if(e.id==t){o=Object.keys(r).includes(e.es)?r[e.es]:0;break}if("none"==t)n.push({id:"none",text:`All (${o})`,href:this.constructUrl(s,["subFacet","page","az"])});else if("people"==t){n.push({id:"none",text:`All (${o})`,href:this.constructUrl(s,["subFacet","page","az"])});for(let t of this.subFacets.people){let e={...t};s.subFacet=e.id,e.href=this.constructUrl(s,["page","az"]),Object.keys(r).includes(e.es)?e.text+=` (${r[e.es]})`:(e.text+=" (0)",e.disabled=!0),n.push(e)}}else if("works"==t){n.push({id:"none",text:`All (${o})`,href:this.constructUrl(s,["subFacet","page","az"])});for(let t of this.subFacets.works){let e={...t};s.subFacet=e.id,e.href=this.constructUrl(s,["page","az"]),Object.keys(r).includes(e.es)?e.text+=` (${r[e.es]})`:(e.text+=" (0)",e.disabled=!0),n.push(e)}}else if("organizations"==t){n.push({id:"none",text:`All (${o})`,href:this.constructUrl(s,["subFacet","page","az"])});for(let t of this.subFacets.organizations){let e={...t};s.subFacet=e.id,e.href=this.constructUrl(s,["page","az"]),Object.keys(r).includes(e.es)?e.text+=` (${r[e.es]})`:(e.text+=" (0)",e.disabled=!0),n.push(e)}}return console.log("subfacets",n),n}_getMainFacets(t,e){let i=[];if(!t||!e)return i;if(0==Object.keys(e).length)return i;let n={...e},s=!1;"number"==typeof t.total&&t.total>0&&(s=!0);let r={id:"none",text:"All Results",href:"/search?s="+encodeURIComponent(n.textQuery)};i.push(r);let o={};try{if(o=t.aggregations.facets["@type"],"object"!=typeof o||Array.isArray(o))throw"Main facet counts not found."}catch(t){return console.warn(t),i}for(let t of this.mainFacets)t={...t},t.href=`/search/${t.id}?s=${encodeURIComponent(n.textQuery)}`,Object.keys(o).includes(t.es)||(t.disabled=!0),i.push(t);return console.log("mainfacets",i),i}_constructQueryObject(t){let e=JSON.parse(JSON.stringify(t)),i=this.getBaseQueryObject(),n=e.mainFacet?e.mainFacet:"all";if(0==Object.keys(e).length)return i;if(i.filters={...i.filters,...this._combineFiltersArray(e.filters)},e.azSelected&&"all"!=e.azSelected.toLowerCase()){let t=this.getAzBaseFilter(e.mainFacet);t&&(t.value.value=[e.azSelected],i.filters[t.key]=t.value)}if(e.textQuery?(i.text=e.textQuery,i.textFields=this.searchFields[n],Object.keys(this.aggs).includes(e.mainFacet)?i.facets=this.aggs[e.mainFacet]:i.facets={"@type":{type:"facet"}}):i.sort=[{label:"asc"}],e.offset)i.offset=e.offset;else if(e.pgCurrent){let t=this.pgPer;e.pgPer&&(t=e.pgPer),i.offset=e.pgCurrent*t-t}return i}_combineFiltersArray(t){t=JSON.parse(JSON.stringify(t));let e={};if(Array.isArray(t)){for(let i of t)if("object"==typeof i&&!Array.isArray(i))for(let t in i)e[t]?Array.isArray(i[t].value)&&e[t].value.push(...i[t].value):e[t]=i[t]}else if("object"==typeof t)for(let i in t)e[i]?Array.isArray(t[i].value)&&e[i].value.push(...t[i].value):e[i]=t[i];return e}constructUrl(t,e=[]){let i="";if(t.textQuery&&(i+="/search"),"none"==t.mainFacet);else{if(!t.mainFacet)return"#";i+="/"+t.mainFacet}t.subFacet&&"none"!=t.subFacet&&!e.includes("subFacet")&&(i+="/"+t.subFacet);let n=[];return t.pgCurrent&&t.pgCurrent>1&&!e.includes("page")&&n.push("page="+t.pgCurrent),!t.textQuery||e.includes("textQuery")||e.includes("s")||n.push("s="+t.textQuery),!t.azSelected||"all"==t.azSelected.toLowerCase()||e.includes("az")||e.includes("azSelected")||n.push("az="+t.azSelected),n.length>0&&(i+="?"),i+=n.join("&"),i}_formatPeople(t){let e=[];for(let i of t){let t=this._formatPerson(i);e.push(t)}return e}_formatPerson(t){let e={name:t.label?t.label:"",title:"","@id":t["@id"]};return t.hasContactInfo&&t.hasContactInfo.title&&(Array.isArray(t.hasContactInfo.title)?e.title=t.hasContactInfo.title.join(", "):e.title=t.hasContactInfo.title),e.id=t["@id"].replace(this.jsonldContext+":",""),e}_formatAgg(t,e,i=!0){if(e&&t.startsWith(e)&&(t=t.slice(e.length)),i){t=[...t];for(let e=0;e<t.length;e++)0!=e&&t[e]==t[e].toUpperCase()&&(t[e]=" "+t[e]);t=t.join("")}return t}}},function(t,e,i){const{BaseService:n}=i(16),s=i(52);t.exports=new class extends n{constructor(){super(),this.store=s,this.baseUrl=APP_CONFIG.data.apiUrl,this.searchUrl=APP_CONFIG.data.apiUrl+"/search"}async overview(t,e){return this.request({url:this.searchUrl,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},checkCached:()=>this.store.data.overview[t],onLoading:e=>this.store.setOverviewLoading(t,e),onLoad:e=>this.store.setOverviewLoaded(t,e.body),onError:e=>this.store.setOverviewError(t,e)})}async searchAgg(t,e){return this.request({url:this.searchUrl,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},checkCached:()=>this.store.data.searchAggs[t],onLoading:e=>this.store.setSearchAggsLoading(t,e),onLoad:e=>this.store.setSearchAggsLoaded(t,e.body),onError:e=>this.store.setSearchAggsError(t,e)})}async azAgg(t,e){return this.request({url:this.searchUrl,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},checkCached:()=>this.store.data.azAggs[t],onLoading:e=>this.store.setAzAggsLoading(t,e),onLoad:e=>this.store.setAzAggsLoaded(t,e.body),onError:e=>this.store.setAzAggsError(t,e)})}async query(t,e){return this.request({url:this.searchUrl,fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},checkCached:()=>this.store.data.queryById[t],onLoading:e=>this.store.setQueryLoading(t,e),onLoad:e=>this.store.setQueryLoaded(t,e.body),onError:e=>this.store.setQueryError(t,e)})}}},function(t,e,i){const{BaseModel:n}=i(16),s=i(81),r=i(53);t.exports=new class extends n{constructor(){super(),this.store=r,this.service=s,this.sections=[{text:"About",id:"about",disabled:!1},{text:"Publications",id:"publications",disabled:!1}],this.individualId="",this.register("PersonModel")}async getIndividual(t){let e={state:r.STATE.INIT};return"init"===e.state?await this.service.getIndividual(t):"loading"===e.state&&await e.request,this.store.data.byIndividual[t]}async getPublications(t,e=0){let i={},n=t;e>0&&(t+="-o"+e,i.offset=e),i.facets={"hasSubjectArea.label":{type:"facet"}};let s={state:r.STATE.INIT};return"init"===s.state?await this.service.getPublications(n,i,t):"loading"===s.state&&await s.request,e>0&&(this.store.data.pubsByIndividual[n].payload.results=[...this.store.data.pubsByIndividual[n].payload.results,...this.store.data.pubsByIndividual[t].payload.results]),this.store.data.pubsByIndividual[n]}getSections(){let t=[{id:"all",text:"All Info",href:"/individual/"+this.individualId,index:0}];for(let e of this.sections)e.href=`/individual/${this.individualId}/${e.id}`,t.push(e);return t}getActiveSection(t){let e=0,i=this.getSections();for(let n of i){if(n.index=e,t==n.id)return n;e++}return i[0]}}},function(t,e,i){const{BaseService:n}=i(16),s=i(53);t.exports=new class extends n{constructor(){super(),this.store=s,this.baseUrl=APP_CONFIG.data.apiUrl,this.jsonContext=APP_CONFIG.data.jsonldContext}async getIndividual(t){return this.request({url:`${this.baseUrl}/${this.jsonContext}%3A${t}`,fetchOptions:{method:"GET",headers:{"Content-Type":"application/json"}},checkCached:()=>this.store.data.byIndividual[t],onLoading:e=>this.store.setIndividualLoading(t,e),onLoad:e=>this.store.setIndividualLoaded(t,e.body),onError:e=>this.store.setIndividualError(t,e)})}async getPublications(t,e={},i=""){return e.filters||(e.filters={}),i||(i=t),e.filters["Authorship.identifiers.@id"]={type:"keyword",op:"and",value:[`${this.jsonContext}:${t}`]},e.offset||(e.offset=0),e.limit||(e.limit=10),this.request({url:this.baseUrl+"/search",fetchOptions:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},checkCached:()=>this.store.data.pubsByIndividual[i],onLoading:t=>this.store.setPubsLoading(i,t),onLoad:t=>this.store.setPubsLoaded(i,t.body),onError:t=>this.store.setPubsError(i,t)})}}},function(t,e,i){const{BaseModel:n}=i(16),s=i(83),r=i(54);t.exports=new class extends n{constructor(){super(),this.store=r,this.service=s,this.register("WorkModel")}}},function(t,e,i){const{BaseService:n}=i(16),s=i(54);t.exports=new class extends n{constructor(){super(),this.store=s}}},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return H}));var n=i(2),s=i(36),r=i(41),o=i.n(r);function a(){return n.b`

<style>
  :host {
    display: block;
  }

  #loading {
    width: 100%;
    min-height: 700px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  #loading img {
    animation: showLoading 400ms ease-in;
  }

  @keyframes showLoading {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  #loading img {
    animation: showLoading 400ms ease-in;
  }

  .loading-dots {
    text-align: center;
    z-index: 5;
    color: var(--tcolor-primary);
  }

  .dot {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    position: relative;
    font-size: 3.5em;
    opacity: 0;
    animation: showHideDot 2.5s ease-in-out infinite;
  }

  .dot.one { animation-delay: 0.2s; }
  .dot.two { animation-delay: 0.4s; }
  .dot.three { animation-delay: 0.6s; }

  @keyframes showHideDot {
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  }

  #masthead {
    width: 100%;
    height: var(--masthead-height);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #masthead .logo {
    height: var(--masthead-logo-height);
  }
  #app-header-content {
    box-shadow: 0 2px 1px rgba(0,40,85,0.15);
  }
  #nav-left a {
    padding: 15px 20px;
    text-transform: uppercase;
  }
  #nav-left a.selected {
    background-color: var(--tcolor-secondary);
  }
  #nav-left a:hover {
    color: var(--tcolor-link-hover-text) !important;
  }
  #app-footer {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    padding: 40px 0;
    font-size: var(--font-size-small);
  }
  #app-footer .logo-line {
    padding: 40px 0;
  }
  #app-footer .logo-line .logo {
    width: 250px;
  }
  #app-footer .logo-line hr {
    border-color: rgba(255,255,255,0.25);
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
  }
  #app-footer .logo-line  hr:first-of-type {
    margin-right: 15px;
  }
  #app-footer .logo-line  hr:last-of-type {
    margin-left: 15px;
  }
  #app-footer .footer-top {
    display: block;
  }
  #app-footer .footer-top .logo {
    max-width: 200px;
    height: auto;
  }
  #app-footer a {
    text-decoration: underline;
    color: var(--tcolor-light);
  }
  #app-footer .address {
    line-height: 1.75;
  }
  #app-footer .title {
    font-weight: var(--font-weight-bold);
    font-size : var(--font-size-h3);
    margin-bottom: 10px;
    margin-top: 20px;
  }
  #app-footer .col-item {
    padding: 5px 0;
  }
  #app-footer .footer-column {
  }

  @media (min-width: 768px) {
    #app-footer .footer-top {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: auto auto auto auto;
    }
    #app-footer .footer-column {
      max-width: 250px;
    }
    #app-footer .title {
      margin-top: 0;
    }

  }

  ${o.a}


</style>

<!--
  Required for AppStateModel
  @ucd-lib/app-state-model imports this element
-->
<app-route .appRoutes="${this.appRoutes}"></app-route>

<div id="app-header">
  ${this._renderMasthead()}
  <div id="app-header-content" class="bg-light text-primary">
    <div class="container flex align-items-center justify-content-between">
      <a href="/" class="no-decoration">
        <h1>
          ${this.theme.siteTitle?n.b`<span class="text-primary">${this.theme.siteTitle}</span>`:n.b``}
          ${this.theme.siteSubTitle?n.b`<span class="weight-regular italic text-primary50">${this.theme.siteSubTitle}</span>`:n.b``}
        </h1>
      </a>
      <div class="small bold hlist">
        <a class="no-decoration" href="#">Help</a>
        ${this.user?n.b`
          <rp-dropdown no-padding
                       sticky-title="${this.user.username.split("@")[0]}"
                       @new-selection="${t=>location.href=t.target.choices[t.target.chosen].href}"
                       choices=${JSON.stringify([{text:"Logout",href:"/auth/logout"}])}>
          </rp-dropdown>
          `:n.b`
          <a class="no-decoration" href="/auth/login">Login</a>
          `}

      </div>
    </div>
    <div class="container">
    <hr class="mb-0 mt-0 light dashed">
    </div>

    <div id="nav-container" class="container flex flex-wrap align-items-center justify-content-between">
      <div id="nav-left" class="flex align-items-center bold">
        ${this.navLinks.map(t=>n.b`<a href=${t.href} ?this-page="${t.page==this.page}" class="text-primary no-decoration">${t.text}</a>`)}
      </div>
      <div id="nav-right" class="flex align-items-center">
        <rp-quick-search @new-search="${this._onSearch}" input-value="${this.textQuery}" ?opened="${this.textQuery}"></rp-quick-search>
      </div>
    </div>
  </div>
</div>


<iron-pages
  selected="${this.page}"
  attr-for-selected="id"
  selected-attribute="visible">

  <div id="loading" class="my-3">
    <img src="${this.theme.loadingIcon}" style="max-width: 128px" />
    <div class="loading-dots">
      <h1 class="dot one">.</h1><h1 class="dot two">.</h1><h1 class="dot three">.</h1>
    </div>
  </div>
  <app-page-components id="components"></app-page-components>
  <rp-page-home id="home"></rp-page-home>
  <rp-page-people id="people"></rp-page-people>
  <rp-page-individual id="individual"></rp-page-individual>
  <rp-page-works id="works"></rp-page-works>
  <rp-page-work id="work"></rp-page-work>
  <rp-page-organizations id="organizations"></rp-page-organizations>
  <rp-page-search id="search"></rp-page-search>
</iron-pages>
<div id="app-footer">
  <div class="container">
    <div class="footer-top">
      <div>
        ${this.theme.libraryLogo?n.b`<a href="${this.theme.libraryUrl}"><img class="logo" alt="Logo" src="${this.theme.libraryLogo}"></a>`:n.b``}
        <div class="address mt-4">
        ${this.theme.libraryAddress?this.theme.libraryAddress.map(t=>n.b`<div>${Object(s.a)(t)}</div>`):n.b``}
        </div>
        ${this.theme.libraryEmail?n.b`<div class="mt-4"><a href="mailto:${this.theme.libraryEmail}">${this.theme.libraryEmail}</a></div>`:n.b``}
      </div>
      ${this._renderFooterColumns()}
    </div>
    <div class="flex align-items-center logo-line">
      <hr class="flex-grow-1">
      ${this.theme.universityLogo?n.b`<a href="${this.theme.universityUrl}"><img class="logo" alt="Logo" src="${this.theme.universityLogo}"></a>`:n.b``}
      <hr class="flex-grow-1">
    </div>
    ${this.theme.footerLines?this.theme.footerLines.map(t=>n.b`<div class="flex align-items-center justify-content-center mb-3">${Object(s.a)(t)}</div>`):n.b``}
  </div>
</div>
`}var h=i(34),l=(i(16),i(8)),c=i(9);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const d=c.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;d.setAttribute("style","display: none;"),document.head.appendChild(d.content);var p=document.createElement("style");p.textContent="[hidden] { display: none !important; }",document.head.appendChild(p);var u=i(12);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class f{constructor(t){f[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return f.types[t]&&f.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=f.types[e]=f.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=f.types[this.type];return t?Object.keys(t).map((function(t){return m[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}f[" "]=function(){},f.types={};var m=f.types;Object(u.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,i){var n=new f({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new f({type:this.type,key:t}).value}});var g=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(u.a)({_template:c.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:l.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(g.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(g.a)(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(u.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new f({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var i=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(i){var n=Object(g.a)(t.root||t);return n.insertBefore(i,n.childNodes[0]),t._svgIcon=i}return null},removeIcon:function(t){t._svgIcon&&(Object(g.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(g.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,i){if(t){var n=t.cloneNode(!0),s=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=n.getAttribute("viewBox")||"0 0 "+e+" "+e,o="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),s.setAttribute("viewBox",r),s.setAttribute("preserveAspectRatio","xMidYMid meet"),s.setAttribute("focusable","false"),s.style.cssText=o,s.appendChild(n).removeAttribute("id"),s}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const v=c.a`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(v.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const _=c.a`<iron-iconset-svg name="av" size="24">
<svg><defs>
<g id="add-to-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3h3z"></path></g>
<g id="airplay"><path d="M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="album"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></g>
<g id="art-track"><path d="M22 13h-8v-2h8v2zm0-6h-8v2h8V7zm-8 10h8v-2h-8v2zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zm-1.5 6l-2.25-3-1.75 2.26-1.25-1.51L3.5 15h7z"></path></g>
<g id="av-timer"><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"></path></g>
<g id="branding-watermark"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"></path></g>
<g id="call-to-action"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"></path></g>
<g id="closed-caption"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"></path></g>
<g id="equalizer"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path></g>
<g id="explicit"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path></g>
<g id="fast-forward"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path></g>
<g id="fast-rewind"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path></g>
<g id="featured-play-list"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z"></path></g>
<g id="featured-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"></path></g>
<g id="fiber-dvr"><path d="M17.5 10.5h2v1h-2zm-13 0h2v3h-2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h18c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zM8 13.5c0 .85-.65 1.5-1.5 1.5H3V9h3.5c.85 0 1.5.65 1.5 1.5v3zm4.62 1.5h-1.5L9.37 9h1.5l1 3.43 1-3.43h1.5l-1.75 6zM21 11.5c0 .6-.4 1.15-.9 1.4L21 15h-1.5l-.85-2H17.5v2H16V9h3.5c.85 0 1.5.65 1.5 1.5v1z"></path></g>
<g id="fiber-manual-record"><circle cx="12" cy="12" r="8"></circle></g>
<g id="fiber-new"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5v6zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4v1.26zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25v5z"></path></g>
<g id="fiber-pin"><path d="M5.5 10.5h2v1h-2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM9 11.5c0 .85-.65 1.5-1.5 1.5h-2v2H4V9h3.5c.85 0 1.5.65 1.5 1.5v1zm3.5 3.5H11V9h1.5v6zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20v6z"></path></g>
<g id="fiber-smart-record"><g><circle cx="9" cy="12" r="8"></circle><path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"></path></g></g>
<g id="forward-10"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="forward-30"><path d="M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z"></path></g>
<g id="forward-5"><path d="M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.7.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.5.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.6z"></path></g>
<g id="games"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="hd"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path></g>
<g id="hearing"><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"></path></g>
<g id="high-quality"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"></path></g>
<g id="library-add"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="library-books"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path></g>
<g id="library-music"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path></g>
<g id="loop"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></g>
<g id="mic"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-none"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="mic-off"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path></g>
<g id="movie"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></g>
<g id="music-video"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path></g>
<g id="new-releases"><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="not-interested"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g>
<g id="note"><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path></g>
<g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>
<g id="pause-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path></g>
<g id="pause-circle-outline"><path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"></path></g>
<g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>
<g id="play-circle-filled"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></g>
<g id="play-circle-outline"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="playlist-add"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path></g>
<g id="playlist-add-check"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"></path></g>
<g id="playlist-play"><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"></path></g>
<g id="queue"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path></g>
<g id="queue-music"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"></path></g>
<g id="queue-play-next"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z"></path></g>
<g id="radio"><path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"></path></g>
<g id="recent-actors"><path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path></g>
<g id="remove-from-queue"><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z"></path></g>
<g id="repeat"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path></g>
<g id="repeat-one"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"></path></g>
<g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>
<g id="replay-10"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16zm4.3-1.8c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1c.2.1.3.2.5.3s.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-30"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-2.4 8.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.8-.8v-.5c0-.1-.1-.2-.1-.3s-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5z"></path></g>
<g id="replay-5"><path d="M12 5V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-1.3 8.9l.2-2.2h2.4v.7h-1.7l-.1.9s.1 0 .1-.1.1 0 .1-.1.1 0 .2 0h.2c.2 0 .4 0 .5.1s.3.2.4.3.2.3.3.5.1.4.1.6c0 .2 0 .4-.1.5s-.1.3-.3.5-.3.2-.4.3-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.3-.1-.5h.8c0 .2.1.3.2.4s.2.1.4.1c.1 0 .2 0 .3-.1l.2-.2s.1-.2.1-.3v-.6l-.1-.2-.2-.2s-.2-.1-.3-.1h-.2s-.1 0-.2.1-.1 0-.1.1-.1.1-.1.1h-.7z"></path></g>
<g id="shuffle"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path></g>
<g id="skip-next"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></g>
<g id="skip-previous"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></g>
<g id="slow-motion-video"><path d="M13.05 9.79L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12z"></path></g>
<g id="snooze"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"></path></g>
<g id="sort-by-alpha"><path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path></g>
<g id="stop"><path d="M6 6h12v12H6z"></path></g>
<g id="subscriptions"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"></path></g>
<g id="subtitles"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"></path></g>
<g id="surround-sound"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="video-call"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g>
<g id="video-label"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"></path></g>
<g id="video-library"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g>
<g id="videocam"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></g>
<g id="videocam-off"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path></g>
<g id="volume-down"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"></path></g>
<g id="volume-mute"><path d="M7 9v6h4l5 5V4l-5 5H7z"></path></g>
<g id="volume-off"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></g>
<g id="volume-up"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g>
<g id="web"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></g>
<g id="web-asset"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(_.content);
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const y=c.a`<iron-iconset-svg name="hardware" size="24">
<svg><defs>
<g id="cast"><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"></path></g>
<g id="cast-connected"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="computer"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></g>
<g id="desktop-mac"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path></g>
<g id="desktop-windows"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path></g>
<g id="developer-board"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></path></g>
<g id="device-hub"><path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"></path></g>
<g id="devices-other"><path d="M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z"></path></g>
<g id="dock"><path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"></path></g>
<g id="gamepad"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"></path></g>
<g id="headset"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path></g>
<g id="headset-mic"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"></path></g>
<g id="keyboard"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"></path></g>
<g id="keyboard-arrow-down"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></g>
<g id="keyboard-arrow-left"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></g>
<g id="keyboard-arrow-right"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></g>
<g id="keyboard-arrow-up"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></g>
<g id="keyboard-backspace"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path></g>
<g id="keyboard-capslock"><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"></path></g>
<g id="keyboard-hide"><path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"></path></g>
<g id="keyboard-return"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></g>
<g id="keyboard-tab"><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"></path></g>
<g id="keyboard-voice"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path></g>
<g id="laptop"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path></g>
<g id="laptop-chromebook"><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"></path></g>
<g id="laptop-mac"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="laptop-windows"><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"></path></g>
<g id="memory"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path></g>
<g id="mouse"><path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"></path></g>
<g id="phone-android"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path></g>
<g id="phone-iphone"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></g>
<g id="phonelink"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></g>
<g id="phonelink-off"><path d="M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"></path></g>
<g id="power-input"><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"></path></g>
<g id="router"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"></path></g>
<g id="scanner"><path d="M19.8 10.7L4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm12 0H9v-2h10v2z"></path></g>
<g id="security"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></g>
<g id="sim-card"><path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"></path></g>
<g id="smartphone"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="speaker"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="speaker-group"><path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path><circle cx="14" cy="12.5" r="2.5"></circle><path d="M6 5H4v16c0 1.1.89 2 2 2h10v-2H6V5z"></path></g>
<g id="tablet"><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"></path></g>
<g id="tablet-android"><path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"></path></g>
<g id="tablet-mac"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"></path></g>
<g id="toys"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"></path></g>
<g id="tv"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></g>
<g id="videogame-asset"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="watch"><path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(y.content);var b=i(55),z=i.n(b);let w=document.createElement("div");w.style.display="none",w.innerHTML=z.a,document.head.appendChild(w);const C=document.createElement("template");C.innerHTML=o.a,document.head.appendChild(C.content);i(71),i(78),i(80),i(82),i(59),i(58);var S=i(46),x=i(22);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class M{constructor(t){this.selection=[],this.selectCallback=t}get(){return this.multi?this.selection.slice():this.selection[0]}clear(t){this.selection.slice().forEach((function(e){(!t||t.indexOf(e)<0)&&this.setItemSelected(e,!1)}),this)}isSelected(t){return this.selection.indexOf(t)>=0}setItemSelected(t,e){if(null!=t&&e!==this.isSelected(t)){if(e)this.selection.push(t);else{var i=this.selection.indexOf(t);i>=0&&this.selection.splice(i,1)}this.selectCallback&&this.selectCallback(t,e)}}select(t){this.multi?this.toggle(t):this.get()!==t&&(this.setItemSelected(this.get(),!1),this.setItemSelected(t,!0))}toggle(t){this.setItemSelected(t,!this.isSelected(t))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const O={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new M(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&Object(g.a)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(t){return this.items?this.items.indexOf(t):-1},select:function(t){this.selected=t},selectPrevious:function(){var t=this.items.length,e=t-1;void 0!==this.selected&&(e=(Number(this._valueToIndex(this.selected))-1+t)%t),this.selected=this._indexToValue(e)},selectNext:function(){var t=0;void 0!==this.selected&&(t=(Number(this._valueToIndex(this.selected))+1)%this.items.length),this.selected=this._indexToValue(t)},selectIndex:function(t){this.select(this._indexToValue(t))},forceSynchronousItemUpdate:function(){this._observer&&"function"==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(t){this.listen(this,t,"_activateHandler")},_removeListener:function(t){this.unlisten(this,t,"_activateHandler")},_activateEventChanged:function(t,e){this._removeListener(e),this._addListener(t)},_updateItems:function(){var t=Object(g.a)(this).queryDistributedElements(this.selectable||"*");t=Array.prototype.filter.call(t,this._bindFilterItem),this._setItems(t)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(t){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(t){return!this._excludedLocalNames[t.localName]},_valueToItem:function(t){return null==t?null:this.items[this._valueToIndex(t)]},_valueToIndex:function(t){if(!this.attrForSelected)return Number(t);for(var e,i=0;e=this.items[i];i++)if(this._valueForItem(e)==t)return i},_indexToValue:function(t){if(!this.attrForSelected)return t;var e=this.items[t];return e?this._valueForItem(e):void 0},_valueForItem:function(t){if(!t)return null;if(!this.attrForSelected){var e=this.indexOf(t);return-1===e?null:e}var i=t[Object(x.b)(this.attrForSelected)];return null!=i?i:t.getAttribute(this.attrForSelected)},_applySelection:function(t,e){this.selectedClass&&this.toggleClass(this.selectedClass,e,t),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,e,t),this._selectionChange(),this.fire("iron-"+(e?"select":"deselect"),{item:t})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(t){return Object(g.a)(t).observeNodes((function(t){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",t,{bubbles:!1,cancelable:!1})}))},_activateHandler:function(t){for(var e=t.target,i=this.items;e&&e!=this;){var n=i.indexOf(e);if(n>=0){var s=this._indexToValue(n);return void this._itemActivate(s,e)}e=e.parentNode}},_itemActivate:function(t,e){this.fire("iron-activate",{selected:t,item:e},{cancelable:!0}).defaultPrevented||this.select(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(u.a)({_template:c.a`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[S.a,O],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(t,e){this.async(this.notifyResize)}});class H extends(Mixin(n.a).with(LitCorkUtils)){static get properties(){return{appRoutes:{type:Array},page:{type:String},theme:{type:Object},navLinks:{type:Array},user:{type:Object},textQuery:{type:String},isSearch:{type:Boolean}}}constructor(){super(),this.render=a.bind(this),this.appRoutes=APP_CONFIG.appRoutes,this.theme=APP_CONFIG.theme,this.page="loading",this.loadedPages={},this.user=APP_CONFIG.user,this.textQuery="",this.isSearch=!1,this.navLinks=[{text:"People",page:"people",href:"/people"},{text:"Organizations",page:"organizations",href:"/organizations"},{text:"Works",page:"works",href:"/works"},{text:"Help",page:"help",href:"#"}],this._injectModel("AppStateModel")}async _onAppStateUpdate(t){console.log("Current app state:",t),t.location.query.s?(this.isSearch=!0,this.textQuery=t.location.query.s):(this.textQuery="",this.isSearch=!1);let e=t.page;this.loadedPages[e]||(this.page="loading",this.loadedPages[e]=this.loadPage(e)),await this.loadedPages[e],this.page=e}loadPage(t){return"home"===t?i.e(3).then(i.bind(null,102)):"components"===t?i.e(2).then(i.bind(null,101)):"people"===t?Promise.all([i.e(0),i.e(6)]).then(i.bind(null,103)):"individual"===t?i.e(4).then(i.bind(null,104)):"works"===t?Promise.all([i.e(0),i.e(9)]).then(i.bind(null,105)):"work"===t?i.e(8).then(i.bind(null,106)):"organizations"===t?Promise.all([i.e(0),i.e(5)]).then(i.bind(null,107)):"search"===t?Promise.all([i.e(0),i.e(7)]).then(i.bind(null,108)):void 0}_onSearch(t){let e="/search";if("RP-QUICK-SEARCH"==t.target.nodeName){if(this.isSearch&&this.shadowRoot.getElementById("search")){let t=this.shadowRoot.getElementById("search");"none"!=t.mainFacet&&(e+="/"+t.mainFacet)}e+="?s="+encodeURIComponent(t.target.inputValue)}this.AppStateModel.setLocation(e)}_renderMasthead(){if(!this.theme.masthead)return n.b``;let t={};return t["background-image"]=`url(${this.theme.masthead})`,n.b`<div id="masthead" class="text-light flex align-items-center" style="${Object(h.a)(t)}">
                  <div class="container">${this.theme.universityLogo?n.b`<a href="${this.theme.universityUrl}"><img class="logo" alt="Logo" src="${this.theme.universityLogo}"></a>`:n.b``}</div>
                </div>`}_renderFooterColumns(){let t=[];for(let e of["1","2","3"]){let i="footerColumn"+e;this.theme[i]&&t.push(n.b`<div class="footer-column">
            ${this.theme[i].title?n.b`<div class="title">${this.theme[i].title}</div>`:n.b``}
            ${this.theme[i].content?n.b`${this.theme[i].content.map(t=>n.b`<div class="col-item">${Object(s.a)(t)}</div>`)}`:n.b``}
          </div>`)}return t.length>0?n.b`${t}`:n.b``}}customElements.define("researcher-profiles",H)},function(t,e,i){"use strict";i.r(e);var n=i(27),s=(i(8),i(12)),r=i(4);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({is:"iron-location",_template:null,properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var t=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),e="";this.query&&(e="?"+this.query.replace(/\#/g,"%23"),e=this.encodeSpaceAsPlusInQuery?e.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+"):e.replace(/\+/g,"%2B").replace(/ /g,"%20"));var i="";return this.hash&&(i="#"+window.encodeURI(this.hash)),t+e+i},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var t=this._getUrl(),e=new URL(t,this.__location.protocol+"//"+this.__location.host).href,i=window.performance.now(),n=this._lastChangedAt+this.dwellTime>i;this._lastChangedAt=i,n?window.history.replaceState({},"",e):window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(t){if(!t.defaultPrevented){var e=this._getSameOriginLinkHref(t);e&&(t.preventDefault(),e!==this.__location.href&&(window.history.pushState({},"",e),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(t){if(0!==t.button)return null;if(t.metaKey||t.ctrlKey||t.shiftKey)return null;for(var e=Object(r.a)(t).path,i=null,n=0;n<e.length;n++){var s=e[n];if("A"===s.tagName&&s.href){i=s;break}}if(!i)return null;if("_blank"===i.target)return null;if(("_top"===i.target||"_parent"===i.target)&&window.top!==window)return null;if(i.download)return null;var o,a,h,l=i.href;if(o=null!=document.baseURI?new URL(l,document.baseURI):new URL(l),a=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host,o.origin)h=o.origin;else{var c=o.host,d=o.port,p=o.protocol;("https:"===p&&"443"===d||"http:"===p&&"80"===d)&&(c=o.hostname),h=p+"//"+c}if(h!==a)return null;var u=o.pathname+o.search+o.hash;return"/"!==u[0]&&(u="/"+u),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(u)?null:new URL(u,this.__location.href).href},_makeRegExp:function(t){return RegExp(t)}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({is:"iron-query-params",_template:null,properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(t){var e=[];for(var i in t){var n=t[i];""===n?e.push(encodeURIComponent(i)):n&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(n.toString()))}return e.join("&")},_decodeParams:function(t){for(var e={},i=(t=(t||"").replace(/\+/g,"%20")).split("&"),n=0;n<i.length;n++){var s=i[n].split("=");s[0]&&(e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]||""))}return e}});var o=i(9);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const a={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(t){this.route&&(this.queryParams=t)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(s.a)({_template:o.a`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean},dwellTime:{type:Number}},behaviors:[a],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}});var h=i(16),l=i(56),c=i.n(l),d=i(48),p=i.n(d);class u extends(Object(h.Mixin)(n.a).with(h.EventInterface,p.a)){static get template(){return n.b`<app-location url-space-regex="[[appRoutesRegex]]"></app-location>`}static get properties(){return{route:{type:Object},appRoutes:{type:Array,value:[]},appRoutesRegex:{type:RegExp,computed:"_makeRegex(appRoutes)"},debug:{type:Boolean,value:!1}}}constructor(){super(),this.AppStateModel.setLocationElement(this),this._setLocationObject();let t=window.location.href.replace(window.location.origin,"");window.history.replaceState({location:this.location},null,t),this._onLocationChange(),window.addEventListener("location-changed",t=>{this._replaceHistoryState(),this._onLocationChange()}),window.addEventListener("popstate",t=>{t.state&&(this.location=t.state.location,this._onLocationChange())})}ready(){super.ready(),this.debug&&this._initDebugging()}_replaceHistoryState(t){this._setLocationObject(t),window.history.replaceState({location:this.location},null,this.location.fullpath)}_initDebugging(){let t=history.pushState,e=history.replaceState;history.pushState=function(e){let i=new CustomEvent("history-push-state",{detail:e});return window.dispatchEvent(i),t.apply(history,arguments)},history.replaceState=function(t){let i=new CustomEvent("history-replace-state",{detail:t});return window.dispatchEvent(i),e.apply(history,arguments)},window.addEventListener("history-push-state",t=>console.log("history-push-state",t.detail)),window.addEventListener("history-replace-state",t=>console.log("history-replace-state",t.detail))}setWindowLocation(t){if("object"==typeof t){let e=t.path;if(t.qs){let i=[];for(let e in t.qs)i.push(encodeURIComponent(e)+"="+encodeURIComponent(t.qs[e]));e+="?"+i.join("&")}t.hash&&(e+="#"+t.hash),t=e}window.history.state&&window.history.state.location&&window.history.state.location.fullpath===t||(window.history.pushState({},null,t),this._replaceHistoryState(t),this._onLocationChange())}_makeRegex(){let t=this.appRoutes.map(t=>"/"+t+"(/.*)?");t.push("/(\\?|#)+.*");let e="^("+t.join("|")+")$";return e=new RegExp(e,"i"),e}_setLocationObject(t){return this.location={fullpath:t||window.location.href.replace(window.location.origin,""),pathname:window.location.pathname,path:window.location.pathname.replace(/(^\/|\/$)/g,"").split("/"),query:c.a.parse(window.location.search),hash:window.location.hash.replace(/^#/,"")},location}_onLocationChange(){this._setAppState({location:this.location})}}customElements.define("app-route",u)}]);