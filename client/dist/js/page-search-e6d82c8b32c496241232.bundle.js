(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return l}));var r=i(2),s=i(41),a=i.n(s);function n(){return r.b`

<style>
  :host {
    display: block;
  }
  ${a.a}
</style>
<div class="search-header container bg-light top">
  <div class="px-5 py-3"><h1>Search results for "${this.textQuery}"</h1></div>
  <hr>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${[{id:"none",text:"All Results"},...this.CollectionModel.mainFacets]}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
  </div>
  <div class="col-main">
    <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading people.</rp-alert>
    </div>
    <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
      ${this.data.map(e=>r.b`
        ${this._renderAssetPreview(e)}
        <hr class="dotted">
        `)}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`}var o=i(91);i(85),i(87),i(88);class l extends(Mixin(o.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},mainFacet:{type:String},mainFacetIndex:{type:Number},textQuery:{type:String},data:{type:Array},dataStatus:{type:String},dataTotal:{type:Number},peopleWidth:{type:Number}}}constructor(){super(),this.render=n.bind(this),this._injectModel("CollectionModel","AppStateModel"),this.mainFacet="none",this.mainFacetIndex=0,this.textQuery="",this.data=[],this.dataStatus="loading",this.dataTotal=0,this.setPeopleWidth(window.innerWidth),this.AppStateModel.get().then(e=>this._onAppStateUpdate(e))}updated(e){if(e.has("mainFacet")&&"none"!=this.mainFacet){let e=!1,t=0;for(let i of this.CollectionModel.mainFacets)if(t++,i.id.toLowerCase()==this.mainFacet.toLowerCase()){if(i.disabled)continue;e=!0,this.mainFacetIndex=t;break}e||(this.mainFacet="none",this.mainFacetIndex=0)}e.has("visible")&&this.visible&&requestAnimationFrame(()=>this._handleResize())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),super.disconnectedCallback()}async _onAppStateUpdate(e){let t=e.location.path,i=e.location.query;t.length>=2&&(this.mainFacet=t[1].toLowerCase()),i.s&&(this.textQuery=i.s);let r={...this._parseUrlQuery()};console.log("q",r),await Promise.all([this._doMainQuery(r)])}async _doMainQuery(e){let t=await this.CollectionModel.query(e);this.dataStatus=t.state,"loaded"==t.state&&(this.dataTotal=t.payload.total,this.data=t.payload.results,console.log(t))}_handleResize(){if(!this.visible)return;let e=window.innerWidth;this.setPeopleWidth(e)}setPeopleWidth(e){let t=250;t=.7*(e-30)-82-40,this.peopleWidth=Math.floor(t)}}customElements.define("rp-page-search",l)},83:function(e,t,i){"use strict";var r=i(2),s=i(33),a=i(34);function n(){return r.b`
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
  <div class="circle ${Object(s.a)(this.constructClasses())}" style="${Object(a.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class o extends r.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=n.bind(this)}constructClasses(){let e={};return this.size&&"undefined"!=this.size&&(e["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(e.photo=!0),e}constructStyles(){let e={};return this.src&&"undefined"!=this.src&&(e["background-image"]=`url(${this.src})`),e}renderFace(){if(!this.src||"undefined"==this.src)return r.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",o)},84:function(e,t,i){"use strict";var r=i(2),s=i(33);function a(){return r.b`
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
`}class n extends r.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=a.bind(this)}constructClasses(){let e={};if(this.size&&(e["size-"+this.size]=!0),this.colorSequence){e["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let t=[...this.parentNode.childNodes].filter(e=>e.tagName===this.tagName);if(t.length>0){e["color-"+(t.indexOf(this)%this.maxColor).toString()]=!0}else e["color-0"]=!0}return e}_renderBadge(){return this.href?r.b`<a href=${this.href}>${this._renderSpan()}</a>`:r.b`${this._renderSpan()}`}_renderSpan(){return r.b`<span class=${Object(s.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",n)},85:function(e,t,i){"use strict";var r=i(2),s=i(33);i(34);function a(){return r.b`
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
  `}class n extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=a.bind(this),this.themeColor="danger"}_constructClasses(){let e={};return e[this.themeColor]=!0,e}}customElements.define("rp-alert",n)},86:function(e,t,i){"use strict";var r=i(2),s=i(34);i(83);function a(){return r.b`
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

  `}i(84);class n extends r.a{static get properties(){return{name:{type:String},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=a.bind(this),this.badges=[],this.textWidth=window.innerWidth.toString()-70+"px"}_renderBadge(e){if("string"==typeof e)return r.b`<rp-badge>${e}</rp-badge>`;if("object"==typeof e){let t=e.text;if(!t)return r.b``;let i=e.href;return i?r.b`<rp-badge href="${i}">${t}</rp-badge>`:r.b`<rp-badge>${t}</rp-badge>`}return r.b``}}customElements.define("rp-person-preview",n)},87:function(e,t,i){"use strict";var r=i(2),s=i(33);function a(){return r.b`
  <style>
    :host {
      display: block;
      color: var(--tcolor-link-text);
    }
    .container {
      display: flex;
    }
    .container.h {
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
    .container.h .link {
      margin-left: 1em;
      margin-right: 1em;
    }
    .container.v {
      flex-flow: column nowrap;
      align-items: flex-end;
    }
    .container.v .link {
      margin-bottom: 1.5em;
    }
    .link {
      cursor: pointer;
    }
    .link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.selected {
      pointer-events: none;
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      cursor: auto;
      border-bottom: 2px solid var(--tcolor-secondary);
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
  <div class=${Object(s.a)(this._containerClasses)}>
    ${this.links.map((e,t)=>this._renderLink(e,t))}
  </div>
  `}class n extends r.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=a.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(e,t,i){"direction"==e&&i&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[i.toLowerCase()[0]]=!0),super.attributeChangedCallback(e,t,i)}_renderLink(e,t){let i="",a=!1,n={link:!0};if("string"==typeof e?i=e:"object"==typeof e&&(i=e.text,e.disabled&&(a=!0)),t==this.currentLink&&(n.selected=!0),this.hasHeaderLink&&0==t&&(n["link-header"]=!0),n.disabled=a,i)return r.b`<div @click="${this.handleClick}" link="${t}" class=${Object(s.a)(n)}>${i}</div>`}handleClick(e){let t=parseInt(e.target.getAttribute("link"));t==this.currentLink||e.target.classList.contains("disabled")||(this.currentLink=t,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",n)},88:function(e,t,i){"use strict";var r=i(2),s=i(33);function a(){return r.b`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-primary);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .container-center {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;
      min-width: 40px;
      min-height: 40px;
    }
    .page:hover {
      color: var(--tcolor-link-hover-text);
    }
    .page.selected {
      background-color: var(--tcolor-secondary);
      pointer-event: none;
      cursor: auto;
    }
    .page.selected:hover {
      color: var(--tcolor-primary);
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;
      margin-left: 4px;
      margin-right: 4px;
    }
    iron-icon {
      cursor: pointer;
    }
    iron-icon:hover {
      color: var(--tcolor-link-hover-text);
    }
    iron-icon[disabled]:hover {
      color: var(--tcolor-primary-disabled);
    }
    iron-icon[disabled] {
      color: var(--tcolor-primary-disabled);
      pointer-events: none;
    }
  </style>
  <div class=container>
    <iron-icon ?disabled="${this.currentPage==this.minPage||!this._hasValidLogic()}"
               @click="${this.handleClick}"
               page="${this.currentPage-1}"
               icon="arrow-back">
    </iron-icon>
    <div class="container-center">
      ${this._renderEdge("left")}
      ${this._renderCenter()}
      ${this._renderEdge("right")}
    </div>
    <iron-icon ?disabled="${this.currentPage==this.maxPage||!this._hasValidLogic()}"
               @click="${this.handleClick}"
               page="${this.currentPage+1}"
               icon="arrow-forward">
    </iron-icon>
  </div>
  `}class n extends r.a{static get properties(){return{currentPage:{converter:parseInt,attribute:"current-page",reflect:!0},maxPage:{converter:parseInt,attribute:"max-page",reflect:!0},minPage:{converter:parseInt,attribute:"min-page",reflect:!0},pagesPerSide:{converter:parseInt,attribute:"pages-per-side"}}}constructor(){super(),this.render=a.bind(this),this.pagesPerSide=1,this.minPage=1,this.currentPage=this.minPage,this.maxPage=this.currentPage,this._changedPage=new CustomEvent("changed-page",{detail:{message:"A new page has been selected."}})}_hasValidLogic(){return!(this.maxPage<this.currentPage||this.maxPage<this.minPage)&&!(this.minPage>this.currentPage)}_renderEdge(e){if(!this._hasValidLogic())return r.b``;if("left"==e){if(this.currentPage-this.minPage>this.pagesPerSide+1)return r.b`<div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div><div class="ellipsis">...</div>`}else if("right"==e&&this.maxPage-this.currentPage>this.pagesPerSide+1)return r.b`<div class="ellipsis">...</div><div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`}_renderCenter(){if(!this._hasValidLogic())return r.b`<div class="${Object(s.a)({page:!0,selected:!0})}" page="${this.currentPage}">${this.currentPage}</div>`;let e=[{page:this.currentPage,selected:!0}],t=2*this.pagesPerSide,i=this;return a(this.pagesPerSide),a(t),e[0].page-this.minPage==1&&e.unshift({page:this.minPage,selected:!1}),this.maxPage-e.slice(-1)[0].page==1&&e.push({page:this.maxPage,selected:!1}),r.b`${e.map(e=>r.b`<div @click="${this.handleClick}"
                                              class="${Object(s.a)({page:!0,selected:e.selected})}"
                                              page="${e.page}">${e.page}</div>`)}`;function a(r){let s=["left","right"];for(let a of s){if("left"===a)for(let s=0;s<r;s++){let r=e[0].page;r>i.minPage&&(e.unshift({page:r-1,selected:!1}),t-=1)}if("right"===a)for(let s=0;s<r;s++){let r=e.slice(-1)[0].page;r<i.maxPage&&(e.push({page:r+1,selected:!1}),t-=1)}}}}handleClick(e){let t=parseInt(e.target.getAttribute("page"));t!=this.currentPage&&(this.currentPage=t,this.dispatchEvent(this._changedPage))}}customElements.define("rp-pagination",n)},90:function(e,t,i){"use strict";var r=i(2);function s(){return r.b`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    .letter {
      color: var(--tcolor-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 22px;
      min-height: 22px;
      transition: 0.3s;
      cursor: pointer;
    }
    .letter:hover {
      color: var(--tcolor-link-hover-text);
    }
    .letter[disabled] {
      pointer-events: none;
      cursor: auto;
      color: var(--tcolor-link-disabled-text);
    }
    .letter.selected {
      font-weight: var(--font-weight-bold);
      pointer-events: none;
      cursor: auto;
      z-index: 1;
    }
    .letter.selected::before {
      content: "";
      border-radius: 50%;
      background-color: var(--tcolor-secondary);
      min-width: 30px;
      min-height: 30px;
      position: absolute;
      z-index: -1;
    }
    .letter.selected:hover {
      color: var(--tcolor-primary);
    }
  </style>
  <div class=container>
    ${this.azlist.map(e=>this._renderAz(e))}
  </div>
  `}class a extends r.a{static get properties(){return{hideAll:{type:Boolean,attribute:"hide-all"},disabledLetters:{type:Array,attribute:"disabled-letters"},disabledLettersFmt:{type:Array},selectedLetter:{type:String,attribute:"selected-letter",reflect:!0}}}constructor(){super(),this.render=s.bind(this),this.azlist=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],this.disabledLetters=[],this.disabledLettersFmt=[],this._changedLetter=new CustomEvent("changed-letter",{detail:{message:"A new letter has been selected."}})}updated(e){e.has("disabledLetters")&&(this.disabledLettersFmt=this.disabledLetters.map(e=>e.toUpperCase()))}_renderAz(e){let t="";return this.selectedLetter&&this.selectedLetter.toLowerCase()===e.toLowerCase()&&(t="selected"),r.b`<div @click="${this.handleClick}"
                     ?disabled="${this.disabledLettersFmt.includes(e)}"
                     class="letter ${t}"
                     letter="${e}">${e}</div>`}handleClick(e){let t=e.target.getAttribute("letter").toLowerCase();t==this.selectedLetter||e.target.hasAttribute("disabled")||(this.selectedLetter=t,this.dispatchEvent(this._changedLetter))}firstUpdated(e){this.hideAll||(this.azlist.unshift("All"),this.requestUpdate())}}customElements.define("rp-a-z",a)},91:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(2);i(90),i(87),i(88),i(86);class s extends r.a{static get properties(){return{hasAz:{type:Boolean},hasPagination:{type:Boolean},azSelected:{type:String},azDisabled:{type:Array},pgPer:{type:parseInt},pgCurrent:{type:parseInt},urlQuery:{type:Object},jsonldContext:{type:String}}}constructor(){super(),this.hasAz=!1,this.hasPagination=!1,this.azSelected="All",this.azDisabled=[],this.pgPer=8,this.pgCurrent=1,this.urlQuery={},this.jsonldContext=APP_CONFIG.data.jsonldContext}_onUserAction(e,...t){if(!e)return;let i={...this.urlQuery};if(i.filters||(i.filters={}),i.s&&i.filters["@type"]&&(i.filters={}),console.log(i),console.log("User action:",e),"az"==e)return;if("pagination"==e&&this.hasPagination&&(this.pgCurrent=t[0],i.offset=this.pgCurrent*this.urlQuery.limit-this.urlQuery.limit),e.startsWith("facet_")){if(t[0].filters)i.filters={...i.filters,...t[0].filters};else{let t=e.slice("facet_".length);i.filters[t]&&delete i.filters[t]}i.offset=0}let r="";this.AppStateModel&&(r="/"+this.AppStateModel.store.data.location.path.join("/")),r+=this._urlEncode(i),this.AppStateModel.setLocation(r)}_renderBrowseHeader(e,t){return this.hasAz=!0,t&&(this.azSelected=t),r.b`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${e}</h1>
      </div>
      <div class="col-main">
        <rp-a-z selected-letter="${this.azSelected}"
                .disabled-letters="${this.azDisabled}"
                @changed-letter=${e=>this._onUserAction("az")}></rp-a-z>
      </div>
    </div>
    `}_renderFacets(e){return e?r.b`${e.map(e=>r.b`
      <rp-link-list has-header-link
                    .links='${e.values}'
                    current-link='${e.activeIndex}'
                    @changed-link="${t=>this._onUserAction("facet_"+e.id,t.target.links[t.target.currentLink])}">
      </rp-link-list>
      `)}
    `:r.b``}_renderAssetPreview(e){if("person"==this._getAssetType(e)){let t=this.CollectionModel._formatPerson(e);return r.b`
      <rp-person-preview
        name="${t.name}"
        href="${"/individual/"+t.id}"
        title="${t.title}"
        text-width="${this.peopleWidth}"
        class="my-3">
      </rp-person-preview>
      `}return r.b``}_getAssetType(e){if(e["@type"]&&("string"==typeof e["@type"]&&(e["@type"]=[e["@type"]]),Array.isArray(e["@type"])))return e["@type"].includes(this.jsonldContext+":person")?"person":void 0}_renderPagination(e){if(!e||!this.urlQuery)return r.b``;this.hasPagination=!0;let t=Math.ceil(e/this.urlQuery.limit);return this.pgCurrent=Math.ceil((this.urlQuery.offset+1)/this.urlQuery.limit),r.b`
    <rp-pagination max-page="${t}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e=>this._onUserAction("pagination",e.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `}_parseUrlQuery(){let e={};if(this.AppStateModel){let t=this.AppStateModel.store.data.location.query;for(let i in t)e[i]="s"!=i?JSON.parse(t[i]):t[i]}if(this.mainFacet){let t={};for(let e of this.CollectionModel.mainFacets)if(this.mainFacet.toLowerCase()==e.id.toLowerCase()){t=e.baseFilter;break}e.filters={...e.filters,...t}}return e.limit||(e.limit=this.pgPer),e.offset||(e.offset=0),this.urlQuery=e,e}_urlEncode(e){let t=[];for(let i in e)if(e.hasOwnProperty(i)){if("offset"==i&&0==e[i])continue;if("filters"==i&&0==Object.keys(e[i]).length)continue;if("limit"==i)continue;t.push(encodeURIComponent(i)+"="+encodeURIComponent(JSON.stringify(e[i])))}return t.length?"?"+t.join("&"):""}}customElements.define("rp-utils-collection",s)}}]);