(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{79:function(t,e,i){"use strict";var r=i(3),o=i(39);i(40);function s(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      color: var(--tcolor-text);
      transition: .3s;
    }
    .container.start {
      justify-content: flex-start;
    }
    .container.center {
      justify-content: center;
    }
    .container:hover {
      color: var(--tcolor-link-hover-text) !important;
    }
    .container:hover iron-icon{
      color: var(--tcolor-link-hover-text) !important;
    }
    iron-icon {
      color: var(--tcolor-secondary);
      transition: .3s;
      width: 28px;
      min-width: 28px;
      height: 28px;
    }
    .view-all {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
  </style>
  <div class="container ${Object(o.a)(this.constructClasses())}">
    <div class="view-all"><span class="text">${this.text}</span><iron-icon icon="av:play-arrow"></iron-icon></div>
  </div>
  `}class n extends r.a{static get properties(){return{text:{type:String},justify:{type:String}}}constructor(){super(),this.render=s.bind(this),this.text="View All"}constructClasses(){let t={};return this.justify&&(t[this.justify]=!0),t}}customElements.define("rp-view-all",n)},80:function(t,e,i){"use strict";var r=i(3),o=i(39),s=i(40);function n(){return r.b`
  <style>
    :host {
      display: inline-block;
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .circle {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle.size-lg {
      height: 150px;
      width: 150px;
    }
    .circle.size-sm {
      height: 60px;
      width: 60px;
    }
    .photo {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
  <div class="circle ${Object(o.a)(this.constructClasses())}" style="${Object(s.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class a extends r.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=n.bind(this)}constructClasses(){let t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}constructStyles(){let t={};return this.src&&"undefined"!=this.src&&(t["background-image"]=`url(${this.src})`),t}renderFace(){if(!this.src||"undefined"==this.src)return r.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",a)},81:function(t,e,i){"use strict";var r=i(3),o=i(39);function s(){return r.b`
<style>
  :host {
    display: inline-block;
  }
  span {
    display: inline-block;
    border: 2px solid;
    border-radius: 1em;
    padding: .3em .7em;
    line-height: 1;
    border-color: var(--tcolor-accent0);
    transition: 0.3s;
  }
  span.size-lg {
    padding: .55em .9em;
  }
  a:hover span {
      background-color: var(--tcolor-hover-bg);
      color:  var(--tcolor-hover-text);
      border-color: var(--tcolor-hover-bg);
  }
  span.color-0 {
    border-color: var(--tcolor-accent0);
  }
  span.color-1 {
    border-color: var(--tcolor-accent1);
  }
  span.color-2 {
    border-color: var(--tcolor-accent2);
  }
  span.color-3 {
    border-color: var(--tcolor-accent3);
  }
  span.color-4 {
    border-color: var(--tcolor-accent4);
  }
  span.color-5 {
    border-color: var(--tcolor-accent5);
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: var(--tcolor-text);
  }
  a:visited {
    color: var(--tcolor-text);
  }
  a:hover {
    color: var(--tcolor-text);
  }
  a:active {
    color: var(--tcolor-text);
  }

</style>
  ${this._renderBadge()}
`}class n extends r.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=s.bind(this)}constructClasses(){let t={};if(this.size&&(t["size-"+this.size]=!0),this.colorSequence){t["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let e=[...this.parentNode.childNodes].filter(t=>t.tagName===this.tagName);if(e.length>0){t["color-"+(e.indexOf(this)%this.maxColor).toString()]=!0}else t["color-0"]=!0}return t}_renderBadge(){return this.href?r.b`<a href=${this.href}>${this._renderSpan()}</a>`:r.b`${this._renderSpan()}`}_renderSpan(){return r.b`<span class=${Object(o.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",n)},82:function(t,e,i){"use strict";var r=i(3),o=(i(87),i(39));i(40);function s(){return r.b`
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
  </style>
  <div class="container ${Object(o.a)(this._constructClasses())}">
   <div id="button"
        @click="${this.openDropdown}">
        <span id="button-text">${this._parseChoices()[this.chosen].text}</span>
        <iron-icon icon="hardware:keyboard-arrow-down"></iron-icon>
   </div>
    <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top">
      <ul slot="dropdown-content">${this._parseChoices().map(t=>this._renderChoices(t))}</ul>
    </iron-dropdown>
  </div>
  `}class n extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"},choices:{type:Array},chosen:{type:parseInt,reflect:!0},opened:{type:Boolean}}}constructor(){super(),this.render=s.bind(this),this.chosen=0,this.choices=[],this.themeColor="outline-primary",this.opened=!1,this._newSelection=new CustomEvent("new-selection",{detail:{message:"A new selection."}})}firstUpdated(t){this.shadowRoot.getElementById("dropdown").addEventListener("opened-changed",t=>{this.opened=t.target.opened})}_constructClasses(){let t={};return t[this.themeColor]=!0,t.opened=this.opened,0===this._parseChoices().length&&(t.hidden=!0),t}_renderChoices(t){return r.b`<li index="${t.index}"
                    ?selected="${t.index==this.chosen}"
                    @click="${this._handleClick}">${t.text}</li>`}_handleClick(t){let e=t.target.getAttribute("index");e!=this.chosen&&(this.chosen=e,this.shadowRoot.getElementById("dropdown").close(),this.dispatchEvent(this._newSelection))}_parseChoices(){let t=[],e=0;for(let i of this.choices)"string"==typeof i?t.push({index:e,text:i}):"object"==typeof i&&i.text&&t.push({index:e,text:i.text}),e+=1;return t}openDropdown(){this.opened=!0,this.shadowRoot.getElementById("dropdown").open()}}customElements.define("rp-dropdown",n)},83:function(t,e,i){"use strict";var r=i(3),o=i(39);i(40);function s(){return r.b`
  <style>
    :host {
      display: inline-block;
    }
    .container {
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: var(--font-size-small);
    }
    .container.danger {
      background-color: var(--tcolor-light);
      border-width: 1px;
      border-style: solid;
      border-color: var(--tcolor-danger);
      color: var(--tcolor-danger);
    }
    .container iron-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-right: 8px;
    }
  </style>
  <div class="container ${Object(o.a)(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `}class n extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=s.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",n)},84:function(t,e,i){"use strict";var r=i(3);function o(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: block;
    }
    .row {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      margin-bottom: 18px;
    }
    .row.header {
      color: var(--tcolor-text);
      font-size: var(--font-size-h2);
      margin-bottom: 34px;
    }
    .row.view-all {
      padding-top: 10px;
    }
    .count {
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      text-align: right;
      width: calc(30% - 10px);
      padding-right: 10px;
    }
    .link-container {
      width: 70%;
    }
    .link {
      cursor: pointer;
      text-decoration: underline;
      color: var(--tcolor-link-text);
    }
    .link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.disabled {
      color: var(--tcolor-link-disabled-text);
      pointer-events: none;
      cursor: auto;
    }
    link.disabeld:hover {
      color: var(--tcolor-link-disabled-text);
    }
    .link.selected:hover {
      color: var(--tcolor-text);
    }
  </style>
  <div class="container">
    ${this._renderHeader()}
    ${this.links.map((t,e)=>this._renderLink(t,e))}
    ${this._renderViewAll()}
  </div>
  `}i(39),i(79);class s extends r.a{static get properties(){return{links:{type:Array},viewAllLink:{type:Object,attribute:"view-all-link"},header:{type:Object,attribute:"header"}}}constructor(){super(),this.render=o.bind(this),this.links=[],this._linkClick=new CustomEvent("link-click",{detail:{message:"A new link has been clicked."}})}_renderHeader(){return this.header&&this.header.text?r.b`<div class="row header">
                <div class="count">${this.header.count}</div>
                <div class="link-container"><span>${this.header.text}</span></div>
                </div>`:r.b``}_renderLink(t,e){return t.text?r.b`<div class="row">
                  <div class="count">${t.count}</div>
                  <div class="link-container">
                    <span @click="${this.handleClick}" link-index="${e}" class="link">${t.text}</span>
                  </div>
                </div>`:r.b``}_renderViewAll(){return this.viewAllLink?(this.viewAllLink.text||(this.viewAllLink.text="View All"),r.b`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`):r.b``}handleClick(t){t.target.classList.contains("link")?this.Clickedlink=this.links[parseInt(t.target.getAttribute("link-index"))]:this.Clickedlink=this.viewAllLink,this.dispatchEvent(this._linkClick)}}customElements.define("rp-link-list-counts",s)},85:function(t,e,i){"use strict";var r=i(3),o=i(40);i(80);function s(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .name {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
    .name:hover {
      color : var(--tcolor-link-hover-text);
    }
    .name[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    .name[disabled]:hover {
      color : var(--tcolor-link-text);
    }
    small {
      font-size : var(--font-size-small);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      line-height: 1.4;
    }
    small.badges {
      margin-top: 5px;
    }
  </style>
  <div class=container>
    <rp-avatar size="${this.avatarSize}" src="${this.avatarSrc}"></rp-avatar>
    <div class="text-container" style="${Object(o.a)({"max-width":this.textWidth})}">
      <a class="name" href="${this.href}" ?disabled="${!this.href}">${this.name}</a>
      <small>${this.title}</small>
      <small class="badges">${this.badges.map(t=>this._renderBadge(t))}</small>
    </div>
  </div>

  `}i(81);class n extends r.a{static get properties(){return{name:{type:String},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=s.bind(this),this.badges=[],this.textWidth=window.innerWidth.toString()-70+"px"}_renderBadge(t){if("string"==typeof t)return r.b`<rp-badge>${t}</rp-badge>`;if("object"==typeof t){let e=t.text;if(!e)return r.b``;let i=t.href;return i?r.b`<rp-badge href="${i}">${e}</rp-badge>`:r.b`<rp-badge>${e}</rp-badge>`}return r.b``}}customElements.define("rp-person-preview",n)},86:function(t,e,i){"use strict";var r=i(3),o=i(39);i(40);function s(){return r.b`
  <style>
    :host {
      display: inline-block;
      background-color: var(--tcolor-light);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #input {
      flex-grow: 1;
      height: 44px;
      border: none;
      background-color: var(--tcolor-light);
      font-size: var(--font-size);
      padding-left: 10px;
    }
    #icon-container {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 15px;
      padding-right: 15px;
      background-color: var(--tcolor-light);
    }
    input:focus {
      outline: none;
    }
    .line {
      background-color: var(--tcolor-primary10);
      width: 1px;
      height: 34px;
    }
  </style>
  <div class="container ${Object(o.a)(this._constructClasses())}">
    <rp-dropdown choices="${JSON.stringify(this.facets)}"
                 chosen="${this.activeFacet}"
                 @new-selection="${t=>this.activeFacet=t.target.chosen}">
    </rp-dropdown>
    <div class="line"></div>
    <input type="text"
          .value="${this.inputValue}"
           placeholder="${this.placeholder}"
           @input="${t=>this.inputValue=t.target.value}"
           @keyup="${this._handleKeyup}"
           id="input">
    <div id="icon-container">
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    </div>

  </div>
  `}i(82),i(55);class n extends r.a{static get properties(){return{facets:{type:Array},inputValue:{type:String,attribute:"input-value",reflect:!0},placeholder:{type:String},activeFacet:{type:parseInt,attribute:"active-facet",reflect:!0}}}constructor(){super(),this.render=s.bind(this),this.facets=[{text:"PEOPLE"},{text:"ORGANIZATIONS"},{text:"WORKS"}],this.placeholder="Search the registry",this.activeFacet=0,this.inputValue="",this._newSearch=new CustomEvent("new-search",{detail:{message:"A new search has been triggered"}})}updated(t){(t.has("inputValue")||t.has("activeFacet"))&&(this.searchObject={search:this.inputValue,facet:this.facets[this.activeFacet]})}_constructClasses(){return{}}doSearch(){this.inputValue&&this.dispatchEvent(this._newSearch)}_handleKeyup(t){13===t.keyCode&&(t.preventDefault(),this.doSearch())}}customElements.define("rp-search",n)},90:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return h}));var r=i(3),o=i(33),s=i(8),n=i(9);
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
const a=new WeakMap;Object(n.d)((...t)=>e=>{let i=a.get(e);void 0===i&&(i={lastRenderedIndex:2147483647,values:[]},a.set(e,i));const r=i.values;let o=r.length;i.values=t;for(let n=0;n<t.length&&!(n>i.lastRenderedIndex);n++){const a=t[n];if(Object(s.h)(a)||"function"!=typeof a.then){e.setValue(a),i.lastRenderedIndex=n;break}n<o&&a===r[n]||(i.lastRenderedIndex=2147483647,o=0,Promise.resolve(a).then(t=>{const r=i.values.indexOf(a);r>-1&&r<i.lastRenderedIndex&&(i.lastRenderedIndex=r,e.setValue(t),e.commit())}))}});var l=i(41),c=i.n(l);function d(){return r.b`

<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-bg-primary);
  }
  .hero .container {
    padding: 50px 0;
  }
  .hero img {
    min-width: 30%;
    height: auto;
  }
  .hero .text {
    flex-grow: 1;
    padding: 0 50px;
  }
  .hero .content: {
    font-size: var(--font-size);
    line-height: 23px;
  }
  .search .container {
    padding: 28px 0;
  }
  rp-search {
    width: 50%;
    min-width: 300px;
  }
  .data .container {
    padding: 50px 0;
    flex-flow: row wrap;
  }
  .data .col-l {
    width: 100%;
  }
  .data .col-r {
  }
  .people-container {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 24px;
    grid-row-gap: 10px;
  }

  @media (min-width: 768px){
    .people-container {
      grid-template-columns: auto auto;
    }
  }

  @media (min-width: 576px){
    .data .container {
      flex-flow: row nowrap;
    }
    .data .col-l {
      width: 30%;
    }
    .data .col-r {
      padding-left: 24px;
    }
  }

  ${c.a}
</style>
<div class="hero">
  <div class="container flex">
  <img src="${this.theme.homeHeroImage}">
  <div class="text flex flex-column">
    <div class="text-default mt-0 h1 bold mb-3">${this.theme.homeHeroTitle}</div>
    <div class="flex flex-column justify-content-between flex-grow-1 content">
      <div>${Object(o.a)(this.theme.homeHeroContentTop)}</div>
      <div>${Object(o.a)(this.theme.homeHeroContentBottom)}</div>
    </div>
  </div>
  </div>
</div>
<div class="search bg-primary">
  <div class="container flex justify-content-center"><rp-search></rp-search></div>
</div>
<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <div ?hidden="${"error"==this.facetsStatus||"loaded"==this.facetsStatus}" class="loading1">loading</div>
      <rp-alert ?hidden="${"loading"==this.facetsStatus||"loaded"==this.facetsStatus}">Error loading academic works</rp-alert>
      <rp-link-list-counts ?hidden="${"loading"==this.facetsStatus||"error"==this.facetsStatus}"
                            links="${JSON.stringify(this.academicWorks)}"
                            view-all-link='{"text": "View All Works"}'
                            header="${JSON.stringify({text:"Academic Works",count:this.academicWorksTotal})}">
      </rp-link-list-counts>
    </div>
    <div class="col-r flex-grow-1">
      <div class="people">
        <h2 class="mt-0">
          <span class="bold mr-2">${this.peopleTotal}</span>
          <span class="weight-regular">People</span>
        </h2>
        <div class="people-container">
          ${this._formatPeople(this.people).map(t=>r.b`
            <rp-person-preview
              name="${t.name}"
              title="${t.title}"
              avatar-size='sm'
              text-width=${this.peopleWidth}>
            </rp-person-preview>
            `)}
        </div>
      </div>
      <div class="subjects">
        <h2>
          <span class="bold mr-2">${this.subjectsTotal}</span>
          <span class="weight-regular">Research Subjects</span>
        </h2>
      </div>
    </div>
  </div>
</div>

`}i(22),i(83),i(84),i(85),i(86);class h extends(Mixin(r.a).with(LitCorkUtils)){static get properties(){return{theme:{type:Object},facetsStatus:{type:String},facets:{type:Object},academicWorks:{type:Array},academicWorksTotal:{type:parseInt},peopleStatus:{type:String},people:{type:Array},peopleTotal:{type:parseInt},peopleWidth:{type:parseInt},subjectsTotal:{type:parseInt},context:{type:String},visible:{type:Boolean}}}constructor(){super(),this.render=d.bind(this),this._injectModel("CollectionModel","AppStateModel"),this.facets={},this.academicWorks=[],this.facetsStatus="loading",this.academicWorksTotal=0,this.peopleStatus="loading",this.people=[],this.peopleTotal=0,this.subjectsTotal=0,this.setPeopleWidth(window.innerWidth),this.context=APP_CONFIG.data.jsonldContext,this.theme=APP_CONFIG.theme,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t)),this._handleResize=this._handleResize.bind(this)}updated(t){t.has("facetsStatus")&&"loaded"==this.facetsStatus&&this._getPeople(),t.has("visible")&&this.visible&&requestAnimationFrame(()=>this._handleResize())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),super.disconnectedCallback()}async _onAppStateUpdate(t){await this._getFacets()}_handleResize(){if(!this.visible)return;let t=window.innerWidth;this.setPeopleWidth(t)}setPeopleWidth(t){let e=250;t<576?e=t-30-72:t<768&&(e=.7*(t-30)-72-30),this.peopleWidth=Math.floor(e),console.log(e)}async _getPeople(){let t=await this.CollectionModel.overview("randomPeople",{limit:4,total:this.peopleTotal});this.peopleStatus=t.state,"loaded"==t.state&&(this.people=t.payload.results,console.log(this.people))}async _getFacets(){let t=await this.CollectionModel.overview("facets");if(this.facetsStatus=t.state,"loaded"==t.state){this.facets=t.payload.aggregations.facets["@type"];for(let t in this.facets)if(t.startsWith("bibo:")){let e=this._formatBibType(t);this.academicWorks.push({text:e,count:this.facets[t],facet:t})}else t==this.context+":publication"&&(this.academicWorksTotal=this.facets[t]),t==this.context+":person"&&(this.peopleTotal=this.facets[t]);this.academicWorks.sort((function(t,e){let i=t.text.toUpperCase(),r=e.text.toUpperCase();return i<r?-1:i>r?1:0}))}}_formatPeople(t){let e=[];for(let i of t){let t={name:i.label?i.label:"",title:""};i.contactInfoFor&&i.contactInfoFor.title&&(Array.isArray(i.contactInfoFor.title)?t.title=i.contactInfoFor.title.join(", "):t.title=i.contactInfoFor.title),e.push(t)}return e}_formatBibType(t,e=!0,i=!0){if(t=t.slice(5),e){t=[...t];for(let e=0;e<t.length;e++)0!=e&&t[e]==t[e].toUpperCase()&&(t[e]=" "+t[e]);t=t.join("")}return i&&(t+="s"),t}}customElements.define("rp-page-home",h)}}]);