(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{83:function(e,t,i){"use strict";var r=i(2),s=i(33);i(34);function o(){return r.b`
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
  <div class="container ${Object(s.a)(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `}class a extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=o.bind(this),this.themeColor="danger"}_constructClasses(){let e={};return e[this.themeColor]=!0,e}}customElements.define("rp-alert",a)},84:function(e,t,i){"use strict";var r=i(2),s=i(34);i(85);function o(){return r.b`
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
    <div class="text-container" style="${Object(s.a)({"max-width":this.textWidth})}">
      <a class="name" href="${this.href}" ?disabled="${!this.href}">${this.name}</a>
      <small>${this.title}</small>
      <small class="badges">${this.badges.map(e=>this._renderBadge(e))}</small>
    </div>
  </div>

  `}i(86);class a extends r.a{static get properties(){return{name:{type:String},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=o.bind(this),this.badges=[],this.textWidth=window.innerWidth.toString()-70+"px"}_renderBadge(e){if("string"==typeof e)return r.b`<rp-badge>${e}</rp-badge>`;if("object"==typeof e){let t=e.text;if(!t)return r.b``;let i=e.href;return i?r.b`<rp-badge href="${i}">${t}</rp-badge>`:r.b`<rp-badge>${t}</rp-badge>`}return r.b``}}customElements.define("rp-person-preview",a)},85:function(e,t,i){"use strict";var r=i(2),s=i(33),o=i(34);function a(){return r.b`
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
  <div class="circle ${Object(s.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class n extends r.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=a.bind(this)}constructClasses(){let e={};return this.size&&"undefined"!=this.size&&(e["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(e.photo=!0),e}constructStyles(){let e={};return this.src&&"undefined"!=this.src&&(e["background-image"]=`url(${this.src})`),e}renderFace(){if(!this.src||"undefined"==this.src)return r.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",n)},86:function(e,t,i){"use strict";var r=i(2),s=i(33);function o(){return r.b`
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
`}class a extends r.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=o.bind(this)}constructClasses(){let e={};if(this.size&&(e["size-"+this.size]=!0),this.colorSequence){e["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let t=[...this.parentNode.childNodes].filter(e=>e.tagName===this.tagName);if(t.length>0){e["color-"+(t.indexOf(this)%this.maxColor).toString()]=!0}else e["color-0"]=!0}return e}_renderBadge(){return this.href?r.b`<a href=${this.href}>${this._renderSpan()}</a>`:r.b`${this._renderSpan()}`}_renderSpan(){return r.b`<span class=${Object(s.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",a)},88:function(e,t,i){"use strict";var r=i(2),s=i(33);i(34);function o(){return r.b`
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
    .container:hover iron-icon, .container:hover a{
      color: var(--tcolor-link-hover-text) !important;
    }
    a {
      text-decoration: none;
      color: var(--tcolor-text);
      transition: .3s;
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
  <div class="container ${Object(s.a)(this.constructClasses())}">
    ${this.href?r.b`
      <a class="view-all" href="${this.href}">${this._renderInnerContent()}</a>
      `:r.b`
      <div class="view-all">${this._renderInnerContent()}</div>
      `}

  </div>
  `}class a extends r.a{static get properties(){return{text:{type:String},href:{type:String},justify:{type:String}}}constructor(){super(),this.render=o.bind(this),this.text="View All",this.href=""}constructClasses(){let e={};return this.justify&&(e[this.justify]=!0),e}_renderInnerContent(){return r.b`<span class="text">${this.text}</span><iron-icon icon="av:play-arrow"></iron-icon>`}}customElements.define("rp-view-all",a)},91:function(e,t,i){"use strict";var r=i(2);function s(){return r.b`
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
    ${this.links.map((e,t)=>this._renderLink(e,t))}
    ${this._renderViewAll()}
  </div>
  `}i(33),i(88);class o extends r.a{static get properties(){return{links:{type:Array},viewAllLink:{type:Object,attribute:"view-all-link"},header:{type:Object,attribute:"header"}}}constructor(){super(),this.render=s.bind(this),this.links=[],this._linkClick=new CustomEvent("link-click",{detail:{message:"A new link has been clicked."}})}_renderHeader(){return this.header&&this.header.text?r.b`<div class="row header">
                <div class="count">${this.header.count}</div>
                <div class="link-container"><span>${this.header.text}</span></div>
                </div>`:r.b``}_renderLink(e,t){return e.text?e.href?r.b`<div class="row">
      <div class="count">${e.count}</div>
      <div class="link-container">
        <a link-index="${t}" class="link" href="${e.href}">${e.text}</a>
      </div>
    </div>`:r.b`<div class="row">
      <div class="count">${e.count}</div>
      <div class="link-container">
        <span @click="${this.handleClick}" link-index="${t}" class="link">${e.text}</span>
      </div>
    </div>`:r.b``}_renderViewAll(){return this.viewAllLink?(this.viewAllLink.text||(this.viewAllLink.text="View All"),this.viewAllLink.href?r.b`<div class="row view-all"><div class="count"></div><rp-view-all href="${this.viewAllLink.href}" text="${this.viewAllLink.text}"></rp-view-all></div>`:r.b`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`):r.b``}handleClick(e){e.target.classList.contains("link")?this.Clickedlink=this.links[parseInt(e.target.getAttribute("link-index"))]:this.Clickedlink=this.viewAllLink,this.dispatchEvent(this._linkClick)}}customElements.define("rp-link-list-counts",o)},92:function(e,t,i){"use strict";var r=i(2),s=i(33);i(34);function o(){return r.b`
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
  <div class="container ${Object(s.a)(this._constructClasses())}">
    <rp-dropdown .choices="${this.facets}"
                 to-upper-case
                 chosen="${this.activeFacet}"
                 @new-selection="${e=>this.activeFacet=e.target.chosen}">
    </rp-dropdown>
    <div class="line"></div>
    <input type="text"
          .value="${this.inputValue}"
           placeholder="${this.placeholder}"
           @input="${e=>this.inputValue=e.target.value}"
           @keyup="${this._handleKeyup}"
           id="input">
    <div id="icon-container">
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    </div>

  </div>
  `}i(57),i(56);class a extends r.a{static get properties(){return{facets:{type:Array},inputValue:{type:String,attribute:"input-value",reflect:!0},placeholder:{type:String},activeFacet:{type:parseInt,attribute:"active-facet",reflect:!0}}}constructor(){super(),this.render=o.bind(this),this.facets=[{text:"PEOPLE"},{text:"ORGANIZATIONS"},{text:"WORKS"}],this.placeholder="Search the registry",this.activeFacet=0,this.inputValue="",this._newSearch=new CustomEvent("new-search",{detail:{message:"A new search has been triggered"}})}updated(e){(e.has("inputValue")||e.has("activeFacet"))&&(this.searchObject={search:this.inputValue,facet:this.facets[this.activeFacet]})}_constructClasses(){return{}}doSearch(){this.inputValue&&this.dispatchEvent(this._newSearch)}_handleKeyup(e){13===e.keyCode&&(e.preventDefault(),this.doSearch())}}customElements.define("rp-search",a)},99:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return h}));var r=i(2),s=i(36),o=i(10),a=i(11);
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
const n=new WeakMap;Object(a.d)((...e)=>t=>{let i=n.get(t);void 0===i&&(i={lastRenderedIndex:2147483647,values:[]},n.set(t,i));const r=i.values;let s=r.length;i.values=e;for(let a=0;a<e.length&&!(a>i.lastRenderedIndex);a++){const n=e[a];if(Object(o.h)(n)||"function"!=typeof n.then){t.setValue(n),i.lastRenderedIndex=a;break}a<s&&n===r[a]||(i.lastRenderedIndex=2147483647,s=0,Promise.resolve(n).then(e=>{const r=i.values.indexOf(n);r>-1&&r<i.lastRenderedIndex&&(i.lastRenderedIndex=r,t.setValue(e),t.commit())}))}});var l=i(41),c=i.n(l);function d(){return r.b`

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
    max-width: 30%;
    height: auto;
  }
  .hero .text {
    flex-grow: 1;
    padding: 0 50px;
  }
  .hero .content {
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
      <div>${Object(s.a)(this.theme.homeHeroContentTop)}</div>
      <div>${Object(s.a)(this.theme.homeHeroContentBottom)}</div>
    </div>
  </div>
  </div>
</div>
<div class="search bg-primary">
  <div class="container flex justify-content-center"><rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}"></rp-search></div>
</div>
<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <div ?hidden="${"error"==this.facetsStatus||"loaded"==this.facetsStatus}" class="loading1">loading</div>
      <rp-alert ?hidden="${"loading"==this.facetsStatus||"loaded"==this.facetsStatus}">Error loading academic works</rp-alert>
      <rp-link-list-counts ?hidden="${"loading"==this.facetsStatus||"error"==this.facetsStatus}"
                            .links="${this.academicWorks}"
                            .viewAllLink='${{text:"View All Works",href:"/works"}}'
                            .header="${{text:"Academic Works",count:this.academicWorksTotal}}">
      </rp-link-list-counts>
    </div>
    <div class="col-r flex-grow-1">
      <div class="people">
        <h2 class="mt-0">
          <span class="bold mr-2">${this.peopleTotal}</span>
          <span class="weight-regular">People</span>
        </h2>
        <div class="people-container">
          ${this.CollectionModel._formatPeople(this.people).map(e=>r.b`
            <rp-person-preview
              name="${e.name}"
              href="${"/individual/"+e.id}"
              title="${e.title}"
              avatar-size='sm'
              text-width=${this.peopleWidth}>
            </rp-person-preview>
            `)}
            <div></div>
            <rp-view-all text="View All People" href="/people" justify="start" style="margin-left:72px;"></rp-view-all>
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

`}i(18),i(83),i(91),i(84),i(92),i(88);class h extends(Mixin(r.a).with(LitCorkUtils)){static get properties(){return{theme:{type:Object},facetsStatus:{type:String},facets:{type:Object},academicWorks:{type:Array},academicWorksTotal:{type:parseInt},peopleStatus:{type:String},people:{type:Array},peopleTotal:{type:parseInt},peopleWidth:{type:parseInt},subjectsTotal:{type:parseInt},context:{type:String},visible:{type:Boolean}}}constructor(){super(),this.render=d.bind(this),this._injectModel("CollectionModel","AppStateModel"),this.reset_properties(),this.facets={},this.academicWorksTotal=0,this.peopleTotal=0,this.subjectsTotal=0,this.setPeopleWidth(window.innerWidth),this.context=APP_CONFIG.data.jsonldContext,this.theme=APP_CONFIG.theme,this.AppStateModel.get().then(e=>this._onAppStateUpdate(e)),this._handleResize=this._handleResize.bind(this)}reset_properties(){this.people=[],this.academicWorks=[],this.visible=!1,this.facetsStatus="loading",this.peopleStatus="loading"}updated(e){e.has("facetsStatus")&&"loaded"==this.facetsStatus&&this._getPeople(),e.has("visible")&&this.visible&&requestAnimationFrame(()=>this._handleResize())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),super.disconnectedCallback()}async doUpdate(e){await this.updateComplete,this.visible&&(this.reset_properties(),await Promise.all([this._getFacets()]))}async _onAppStateUpdate(e){requestAnimationFrame(()=>this.doUpdate(e))}_onSearch(e){let t="/search";"RP-SEARCH"==e.target.nodeName&&(t=`/search/${e.target.searchObject.facet.id}?s=${encodeURIComponent(e.target.inputValue)}`),this.AppStateModel.setLocation(t)}_handleResize(){if(!this.visible)return;let e=window.innerWidth;this.setPeopleWidth(e)}setPeopleWidth(e){let t=250;e<576?t=e-30-72:e<768&&(t=.7*(e-30)-72-30),this.peopleWidth=Math.floor(t)}async _getPeople(){let e=await this.CollectionModel.overview("randomPeople",{limit:4,total:this.peopleTotal});this.peopleStatus=e.state,"loaded"==e.state&&(this.people=e.payload.results,console.log(this.people))}async _getFacets(){let e=await this.CollectionModel.overview("facets");if(this.facetsStatus=e.state,"loaded"==e.state){this.facets=e.payload.aggregations.facets["@type"];for(let e in this.facets){for(let t of this.CollectionModel.subFacets.works)if(e==t.es){this.academicWorks.push({text:t.text,count:this.facets[e],href:"/works/"+t.id});break}e==this.context+":publication"&&(this.academicWorksTotal=this.facets[e]),e==this.context+":person"&&(this.peopleTotal=this.facets[e])}this.academicWorks.sort((function(e,t){let i=e.text.toUpperCase(),r=t.text.toUpperCase();return i<r?-1:i>r?1:0}))}}}customElements.define("rp-page-home",h)}}]);