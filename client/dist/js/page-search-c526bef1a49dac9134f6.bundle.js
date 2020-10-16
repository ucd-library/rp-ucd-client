(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(t,e,i){"use strict";var a=i(2);function r(){return a.b`
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
    ${this.azlist.map(t=>this._renderAz(t))}
  </div>
  `}class s extends a.a{static get properties(){return{hideAll:{type:Boolean,attribute:"hide-all"},disabledLetters:{type:Array},disabledLettersFmt:{type:Array},selectedLetter:{type:String,attribute:"selected-letter"}}}constructor(){super(),this.render=r.bind(this),this.azlist=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],this.disabledLetters=[],this.disabledLettersFmt=[],this.selectedLetter="All",this._changedLetter=new CustomEvent("changed-letter",{detail:{message:"A new letter has been selected."}})}updated(t){t.has("disabledLetters")&&(this.disabledLettersFmt=this.disabledLetters.map(t=>t.toUpperCase()))}_renderAz(t){let e="";return this.selectedLetter&&this.selectedLetter.toLowerCase()===t.toLowerCase()&&(e="selected"),a.b`<div @click="${this.handleClick}"
                     ?disabled="${this.disabledLettersFmt.includes(t)}"
                     class="letter ${e}"
                     letter="${t}">${t}</div>`}handleClick(t){let e=t.target.getAttribute("letter").toLowerCase();e==this.selectedLetter||t.target.hasAttribute("disabled")||(this.selectedLetter=e,this.dispatchEvent(this._changedLetter))}firstUpdated(t){this.hideAll||(this.azlist.unshift("All"),this.requestUpdate())}}customElements.define("rp-a-z",s)},102:function(t,e,i){"use strict";var a=i(2);function r(){return a.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .name {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
    }
    .author {
      color : var(--tcolor-link-text);
    }
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--tcolor-link-text);
    }
  </style>
  <div class=container>
    <div class="icon-container"><iron-icon icon="group-work"></iron-icon></div>
    <div class="text-container">
        ${this._renderNameLink()}
    </div>
  </div>

  `}class s extends a.a{static get properties(){return{data:{type:Object},href:{type:String},organizationPath:{type:String},jsonldContext:{type:String}}}constructor(){super(),this.organizationPath="/organization/",this.jsonldContext=APP_CONFIG.data.jsonldContext,this.render=r.bind(this)}_renderNameLink(){let t="";if(this.href)t=this.href;else try{let e=this.data["@id"].split(this.jsonldContext+":g-")[1];t=this.organizationPath+e}catch(t){console.warn("Unable to construct org href.")}return a.b`<a class="name" href="${t}" ?disabled="${!t}">${this.data.label}</a>`}}customElements.define("rp-organization-preview",s)},103:function(t,e,i){"use strict";var a=i(2);function r(){return a.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 70px;
      width: 70px;
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iron-icon {
      color: var(--tcolor-primary);
      height: 50%;
      width: 50%;
    }
    .text-container {
      margin-left: 12px;
      flex-grow: 1;
    }
    .title {
      font-size: var(--font-size);
      color : var(--tcolor-link-text);
      font-weight : var(--font-weight-bold);
    }
    .author {
      color : var(--tcolor-link-text);
    }
    a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
    a[disabled]:hover {
      color : var(--tcolor-link-text);
    }
  </style>
  <div class=container>
    <div class="icon-container"><iron-icon icon="av:library-books"></iron-icon></div>
    <div class="text-container">
      ${this._renderTitleLink()}
      ${this._renderAuthors()}
    </div>
  </div>

  `}class s extends a.a{static get properties(){return{data:{type:Object},href:{type:String},workPath:{type:String},grpsWithLinks:{type:String},authorPath:{type:String},jsonldContext:{type:String}}}constructor(){super(),this.workPath="/work/",this.authorPath="/individual/",this.grpsWithLinks=["vivo:FacultyMember"],this.jsonldContext=APP_CONFIG.data.jsonldContext,this.render=r.bind(this)}_renderTitleLink(){let t="";if(this.href)t=this.href;else try{let e=this.data["@id"].split(this.jsonldContext+":publication")[1];t=this.workPath+e}catch(t){console.warn("Unable to construct work href.")}return a.b`<a class="title" href="${t}" ?disabled="${!t}">${this.data.label}</a>`}_renderAuthors(){let t=[];if(this.data.Authorship&&"object"==typeof this.data.Authorship){let e=this.data.Authorship;Array.isArray(e)||(e=[e]);for(let i of e)if(i.hasName){i.nameFirst=i.hasName.givenName,i.nameLast=i.hasName.familyName,i["vivo:rank"]||(i["vivo:rank"]=1/0),i.href="";try{"object"!=typeof i.identifiers||Array.isArray(i.identifiers)||(i.identifiers=[i.identifiers]);for(let t of i.identifiers)this.grpsWithLinks.includes(t["@type"])&&(i.href=this.authorPath+t["@id"].replace(this.jsonldContext+":",""))}catch(t){console.warn("Unable to construct author href.")}t.push(i)}t.sort((function(t,e){return t["vivo:rank"]-e["vivo:rank"]}))}return a.b`<div class="authors">${t.map(t=>a.b`<a class="author" href="${t.href}" ?disabled="${!t.href}">${t.nameLast}, ${t.nameFirst}</a>; `)}</div>`}}customElements.define("rp-work-preview",s)},107:function(t,e,i){"use strict";i.r(e);var a=i(2),r=i(34),s=i.n(r);function n(){return a.b`

<style>
  :host {
    display: block;
  }
  ${s.a}
</style>
<div class="collections container bg-light top">
  ${this._renderBrowseHeader("People")}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading people.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
        ${this.data.map(t=>a.b`
          ${this._renderAssetPreview(t)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`}i(101),i(94),i(102),i(96),i(91),i(103);class o extends(Mixin(a.a).with(LitCorkUtils)){static get properties(){return{hasAz:{type:Boolean},hasPagination:{type:Boolean},azSelected:{type:String},azStatus:{type:String},azDisabled:{type:Array},azOptions:{type:Set},urlQuery:{type:Object},jsonldContext:{type:String},peopleWidth:{type:Number},visible:{type:Boolean},currentQuery:{type:Object},mainFacet:{type:String},mainFacets:{type:Array},pgPer:{type:Number},pgCurrent:{type:Number},textQuery:{type:String},dataFilters:{type:Array},data:{type:Array},dataStatus:{type:String},dataTotal:{type:Number},mainFacetIndex:{type:Number},subFacet:{type:String},subFacetIndex:{type:Number},subFacetStatus:{type:String}}}constructor(){super(),this._injectModel("CollectionModel","AppStateModel"),this.azOptions=new Set(["all",..."abcdefghijklmnopqrstuvwxyz"]),this.hasPagination=!1,this.visible=!1,this.urlQuery={},this.jsonldContext=APP_CONFIG.data.jsonldContext,this._resetQueryProperties(),this.setPeopleWidth(window.innerWidth),this._handleResize=this._handleResize.bind(this)}_resetQueryProperties(){this.data=[],this.dataStatus="loading",this.dataTotal=0,this.currentQuery={},this.dataFilters=[],this.pgPer=8,this.pgCurrent=1,this.mainFacet="none",this.mainFacets=[],this.mainFacetIndex=0,this.subFacet="none",this.subFacetIndex=0,this.subFacets=[],this.subFacetStatus="loading",this.textQuery="",this.hasAz=!1,this.azSelected="All",this.azDisabled=[],this.azStatus="loading"}updated(t){this.doUpdated(t)}doUpdated(t){t.has("visible")&&this.visible&&requestAnimationFrame(()=>this._handleResize())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),super.disconnectedCallback()}async _doMainQuery(){let t=this.currentQuery,e=await this.CollectionModel.query(t),i=!1;this.textQuery&&"none"==this.mainFacet&&"none"==this.subFacet&&(this.subFacetStatus=e.state,i=!0),this.dataStatus=e.state,"loaded"==e.state&&("object"==typeof e.payload.total?this.dataTotal=0:this.dataTotal=e.payload.total,i?(this.CollectionModel.store.setSearchAggsLoaded(this.textQuery,e.payload),this.mainFacets=this.CollectionModel._getMainFacets(e.payload,this.currentQuery),this.subFacets=this.CollectionModel._getSubFacets(this.mainFacet,e.payload,this.currentQuery)):this.hasAz=!0,this.data=e.payload.results,console.log("main query result:",e))}async _getSearchAggs(){if(!this.textQuery)return;if("none"==this.mainFacet&&"none"==this.subFacet)return;let t=await this.CollectionModel.searchAggQuery(this.textQuery,this.mainFacet);this.subFacetStatus=t.state,"loaded"==t.state&&(this.mainFacets=this.CollectionModel._getMainFacets(t.payload,this.currentQuery),this.subFacets=this.CollectionModel._getSubFacets(this.mainFacet,t.payload,this.currentQuery))}async _getAzAgg(){let t=await this.CollectionModel.azAggQuery(this.currentQuery.mainFacet,this.currentQuery.subFacet);if(this.azStatus=t.state,"loaded"!=t.state)return;let e=this.CollectionModel.getAzBaseFilter(this.currentQuery.mainFacet);e&&e.key?this.azDisabled=[...this._setDifference(this.azOptions,Object.keys(t.payload.aggregations.facets[e.key]))].filter(t=>"all"!=t):this.azStatus="error",console.log(`az for ${this.currentQuery.mainFacet}, ${this.currentQuery.subFacet}`,t)}_parseUrlQuery(t){t||(t=this.AppStateModel.store.data);let e=t.location.path,i=t.location.query;if(this._resetQueryProperties(),e.length<1)return;let a="";a="search"==e[0]&&e.length>1?e[1].toLowerCase():e[0].toLowerCase();for(let t of this.CollectionModel.mainFacets)if(a==t.id.toLowerCase()){this.mainFacet=a,this.dataFilters.push(t.baseFilter);break}let r="";if("search"==e[0]&&e.length>2?r=e[2].toLowerCase():"search"!=e[0]&&e.length>1&&(r=e[1].toLowerCase()),this.CollectionModel.subFacets[this.mainFacet]){let t=1;for(let e of this.CollectionModel.subFacets[this.mainFacet]){if(e.id==r){this.subFacet=r,this.subFacetIndex=t,this.dataFilters.push(e.baseFilter);break}t+=1}}for(let t in i)"s"==t?this.textQuery=i.s:"filters"==t||("page"!=t||isNaN(i[t])?"az"==t&&this.azOptions.has(i[t])&&(this.azSelected=i[t]):this.pgCurrent=i[t]);this.currentQuery=this._constructQuery(),console.log("element query:",this.currentQuery)}_constructQuery(){let t={};return this.textQuery&&(t.textQuery=this.textQuery),this.pgCurrent&&(t.pgCurrent=this.pgCurrent),this.pgPer&&(t.pgPer=this.pgPer),this.azSelected&&(t.azSelected=this.azSelected),this.dataFilters&&(t.filters=this.dataFilters),this.mainFacet&&"none"!=this.mainFacet&&(t.mainFacet=this.mainFacet),this.subFacet&&"none"!=this.subFacet&&(t.subFacet=this.subFacet),t}_handleResize(){if(!this.visible)return;let t=window.innerWidth;this.setPeopleWidth(t)}setPeopleWidth(t){let e=250;e=.7*(t-30)-82-40,this.peopleWidth=Math.floor(e)}_onUserAction(t,...e){if(!t)return;let i="",a={...this.currentQuery};"pagination"==t&&this.hasPagination?(a.pgCurrent=e[0],i=this.CollectionModel.constructUrl(a)):"az"==t&&(a.azSelected=e[0],i=this.CollectionModel.constructUrl(a,["page"])),i&&this.AppStateModel.setLocation(i)}_setDifference(t,e){let i=new Set(t);for(let t of e)i.delete(t);return i}_getAssetType(t){if(t["@type"]&&("string"==typeof t["@type"]&&(t["@type"]=[t["@type"]]),Array.isArray(t["@type"])))return t["@type"].includes(this.jsonldContext+":person")?"person":t["@type"].includes(this.jsonldContext+":publication")?"work":t["@type"].includes(this.jsonldContext+":organization")?"organization":void 0}_urlEncode(t){let e=[];for(let i in t)if(t.hasOwnProperty(i)){if("offset"==i&&0==t[i])continue;if("filters"==i&&0==Object.keys(t[i]).length)continue;if("limit"==i)continue;e.push(encodeURIComponent(i)+"="+encodeURIComponent(JSON.stringify(t[i])))}return e.length?"?"+e.join("&"):""}_renderBrowseHeader(t,e){return this.hasAz=!0,e&&(this.azSelected=e),a.b`
    <div class="header flex align-items-center">
      <div class="col-facets">
        <h1>${t}</h1>
      </div>
      <div class="col-main">
      ${this.hasAz?a.b`
        <rp-a-z selected-letter="${this.azSelected}"
                .disabledLetters="${this.azDisabled}"
                @changed-letter=${t=>this._onUserAction("az",t.target.selectedLetter)}>
        </rp-a-z>
      `:a.b``}

      </div>
    </div>
    `}_renderFacets(){return this.subFacets?a.b`
    <rp-link-list
      has-header-link
      .links='${this.subFacets}'
      current-link='${this.subFacetIndex}'
      >
    </rp-link-list>
    `:a.b``}_renderAssetPreview(t){let e=this._getAssetType(t);if("person"==e){let e=this.CollectionModel._formatPerson(t);return a.b`
      <rp-person-preview
        name="${e.name}"
        href="${"/individual/"+e.id}"
        title=${e.title}
        text-width="${this.peopleWidth}"
        class="my-3">
      </rp-person-preview>
      `}return"work"==e?a.b`
      <rp-work-preview .data="${t}" class="my-3"></rp-work-preview>
      `:"organization"==e?a.b`
      <rp-organization-preview .data="${t}" class="my-3"></rp-organization-preview>
      `:a.b``}_renderPagination(t){if(!t)return a.b``;this.hasPagination=!0;let e=Math.ceil(t/this.pgPer);return a.b`
    <rp-pagination max-page="${e}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${t=>this._onUserAction("pagination",t.target.currentPage)}"
                   class="mt-3"
    ></rp-pagination>
    `}}customElements.define("rp-utils-collection",o);i(90);function l(){return a.b`

<style>
  :host {
    display: block;
  }
  ${s.a}
</style>
<div class="collections works container bg-light top">
  ${this._renderBrowseHeader("Works")}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading works.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
        ${this.data.map(t=>a.b`
          ${this._renderAssetPreview(t)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`}customElements.define("rp-page-people",class extends o{static get properties(){return{}}constructor(){super(),this.render=n.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getFacets(),this._getAzAgg()]))}async _getFacets(){let t=await this.CollectionModel.overview("peopleAggs");this.subFacetStatus=t.state,"loaded"==t.state&&(console.log("peopleaggs",t),this.subFacets=this.CollectionModel._getSubFacets("people",t.payload,this.currentQuery))}});function c(){return a.b`

<style>
  :host {
    display: block;
  }
  ${s.a}
</style>
<div class="collections organizations container bg-light top">
  ${this._renderBrowseHeader("Organizations")}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading organizations.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
        ${this.data.map(t=>a.b`
          ${this._renderAssetPreview(t)}
          <hr class="dotted">
          `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`}customElements.define("rp-page-works",class extends o{static get properties(){return{}}constructor(){super(),this.render=l.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getFacets(),this._getAzAgg()]))}async _getFacets(){let t=await this.CollectionModel.overview("worksAggs");this.subFacetStatus=t.state,"loaded"==t.state&&(this.subFacets=this.CollectionModel._getSubFacets("works",t.payload,this.currentQuery))}});function d(){return a.b`

<style>
  :host {
    display: block;
  }
  ${s.a}
</style>
<div class="search-header container bg-light top">
  <div class="px-5 py-3 bg-primary text-light"><h1 class="weight-regular">Search results for <span class="text-secondary bold">${this.textQuery}</span></h1></div>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                current-link="${this.mainFacetIndex}"
                .links="${this.mainFacets}">
  </rp-link-list>
</div>
<div class="search container bg-light mt-3 pb-3">
<div class="body flex">
  <div class="col-facets mt-3">
    ${this._renderFacets()}
  </div>
  <div class="col-main">
    <div ?hidden="${"error"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
    </div>
    <div ?hidden="${"loading"==this.dataStatus||"loaded"==this.dataStatus}" class="flex align-items-center justify-content-center">
      <rp-alert>Error loading search results.</rp-alert>
    </div>
    <div class="data" ?hidden="${"loading"==this.dataStatus||"error"==this.dataStatus}">
      ${this.data.map(t=>a.b`
        ${this._renderAssetPreview(t)}
        <hr class="dotted">
        `)}
      ${0==this.data.length?a.b`
      <div class="flex align-items-center justify-content-center" style="height:100%;">No search results found!</div>
      `:a.b``}
      ${this._renderPagination(this.dataTotal)}
    </div>

  </div>
</div>
</div>

`}customElements.define("rp-page-organizations",class extends o{static get properties(){return{}}constructor(){super(),this.render=c.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getFacets(),this._getAzAgg()]))}async _getFacets(){let t=await this.CollectionModel.overview("organizationsAggs");this.subFacetStatus=t.state,"loaded"==t.state&&(this.subFacets=this.CollectionModel._getSubFacets("organizations",t.payload,this.currentQuery))}});customElements.define("rp-page-search",class extends o{static get properties(){return{}}constructor(){super(),this.render=d.bind(this),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}updated(t){if(this.doUpdated(t),t.has("mainFacet")&&"none"!=this.mainFacet){let t=!1,e=0;for(let i of this.CollectionModel.mainFacets)if(e++,i.id.toLowerCase()==this.mainFacet.toLowerCase()){t=!0,this.mainFacetIndex=e;break}t||(this.mainFacet="none",this.mainFacetIndex=0)}}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible&&(this._parseUrlQuery(t),await Promise.all([this._doMainQuery(),this._getSearchAggs()]))}})},90:function(t,e,i){"use strict";var a=i(2),r=i(33);i(35);function s(){return a.b`
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
  <div class="container ${Object(r.a)(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `}class n extends a.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=s.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",n)},91:function(t,e,i){"use strict";var a=i(2),r=i(35);i(93);function s(){return a.b`
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
    <rp-avatar size="${this._parsedData.avatarSize}" src="${this._parsedData.avatarSrc}"></rp-avatar>
    <div class="text-container" style="${Object(r.a)({"max-width":this.textWidth})}">
      <a class="name" href="${this._parsedData.href}" ?disabled="${!this._parsedData.href}">${this._parsedData.name}</a>
      <small>${this._parsedData.title}</small>
      <small class="badges">${this.badges.map(t=>this._renderBadge(t))}</small>
    </div>
  </div>

  `}i(92);class n extends a.a{static get properties(){return{data:{type:Object},name:{type:String},_parsedData:{type:Object},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=s.bind(this),this.badges=[],this.name="",this._name="",this.href="",this.title="",this.avatarSize="",this.avatarSrc="",this.data={},this._parsedData={name:"",href:"",title:"",avatarSize:"",avatarSrc:""},this.textWidth=window.innerWidth.toString()-70+"px"}updated(t){t.has("name")&&(this._parsedData.name=this.name,this.requestUpdate()),t.has("href")&&(this._parsedData.href=this.href,this.requestUpdate()),t.has("title")&&(this._parsedData.title=this.title,this.requestUpdate()),t.has("avatarSize")&&(this._parsedData.avatarSize=this.avatarSize,this.requestUpdate()),t.has("avatarSrc")&&(this._parsedData.avatarSrc=this.avatarSrc,this.requestUpdate()),t.has("data")&&Object.keys(this.data).includes("@id")&&this._parseData()}_parseData(){this._parsedData.name=this._parseName(),this._parsedData.title=this._parseTitle(),this._parsedData.href=this._parseHref()}_parseName(){if(this.name)return this.name;let t=this.data.label;return Array.isArray(t)?t.sort((t,e)=>t.length-e.length)[0]:t}_parseTitle(){if(this.title)return this.title;try{let t="";return t=Array.isArray(this.data.hasContactInfo)?[...this.data.hasContactInfo].sort((t,e)=>(t.rank?t.rank:100)-(e.rank?e.rank:100))[0].title:this.data.hasContactInfo.title,Array.isArray(t)?t.join(", "):t||""}catch(t){return""}}_parseHref(){if(this.href)return this.href;try{return"/individual/"+this.data["@id"].replace(APP_CONFIG.data.jsonldContext+":","")}catch(t){return""}}_renderBadge(t){if("string"==typeof t)return a.b`<rp-badge>${t}</rp-badge>`;if("object"==typeof t){let e=t.text;if(!e)return a.b``;let i=t.href;return i?a.b`<rp-badge href="${i}">${e}</rp-badge>`:a.b`<rp-badge>${e}</rp-badge>`}return a.b``}}customElements.define("rp-person-preview",n)},92:function(t,e,i){"use strict";var a=i(2),r=i(33);function s(){return a.b`
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
`}class n extends a.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=s.bind(this)}constructClasses(){let t={};if(this.size&&(t["size-"+this.size]=!0),this.colorSequence){t["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let e=[...this.parentNode.childNodes].filter(t=>t.tagName===this.tagName);if(e.length>0){t["color-"+(e.indexOf(this)%this.maxColor).toString()]=!0}else t["color-0"]=!0}return t}_renderBadge(){return this.href?a.b`<a href=${this.href}>${this._renderSpan()}</a>`:a.b`${this._renderSpan()}`}_renderSpan(){return a.b`<span class=${Object(r.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",n)},93:function(t,e,i){"use strict";var a=i(2),r=i(33),s=i(35);function n(){return a.b`
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
  <div class="circle ${Object(r.a)(this.constructClasses())}" style="${Object(s.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class o extends a.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=n.bind(this)}constructClasses(){let t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}constructStyles(){let t={};return this.src&&"undefined"!=this.src&&(t["background-image"]=`url(${this.src})`),t}renderFace(){if(!this.src||"undefined"==this.src)return a.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",o)},94:function(t,e,i){"use strict";var a=i(2),r=i(33);function s(){return a.b`
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
    a {
      text-decoration: none;
      color: var(--tcolor-link-text);
    }
    .link:hover, a.link:hover {
      color: var(--tcolor-link-hover-text);
    }
    .link.selected, a.link.selected {
      pointer-events: none;
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      cursor: auto;
      border-bottom: 2px solid var(--tcolor-secondary);
    }
    .link.disabled, a.link.disabled {
      color: var(--tcolor-link-disabled-text);
      pointer-events: none;
      cursor: auto;
    }
    link.disabeld:hover, a.link.disabled:hover {
      color: var(--tcolor-link-disabled-text);
    }
    .link.selected:hover, a.link.selected:hover {
      color: var(--tcolor-text);
    }
  </style>
  <div class=${Object(r.a)(this._containerClasses)}>
    ${this.links.map((t,e)=>this._renderLink(t,e))}
  </div>
  `}class n extends a.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=s.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(t,e,i){"direction"==t&&i&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[i.toLowerCase()[0]]=!0),super.attributeChangedCallback(t,e,i)}_renderLink(t,e){let i="",s="",n=!1,o={link:!0};return"string"==typeof t?i=t:"object"==typeof t&&(i=t.text,t.disabled&&(n=!0),t.href&&(s=t.href)),e==this.currentLink&&(o.selected=!0),this.hasHeaderLink&&0==e&&(o["link-header"]=!0),o.disabled=n,s?a.b`<a link="${e}" class="${Object(r.a)(o)}" href="${s}">${i}</a>`:i?a.b`<div @click="${this.handleClick}" link="${e}" class=${Object(r.a)(o)}>${i}</div>`:void 0}handleClick(t){let e=parseInt(t.target.getAttribute("link"));e==this.currentLink||t.target.classList.contains("disabled")||(this.currentLink=e,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",n)},96:function(t,e,i){"use strict";var a=i(2),r=i(33);function s(){return a.b`
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
  `}class n extends a.a{static get properties(){return{currentPage:{converter:parseInt,attribute:"current-page",reflect:!0},maxPage:{converter:parseInt,attribute:"max-page",reflect:!0},minPage:{converter:parseInt,attribute:"min-page",reflect:!0},pagesPerSide:{converter:parseInt,attribute:"pages-per-side"}}}constructor(){super(),this.render=s.bind(this),this.pagesPerSide=1,this.minPage=1,this.currentPage=this.minPage,this.maxPage=this.currentPage,this._changedPage=new CustomEvent("changed-page",{detail:{message:"A new page has been selected."}})}_hasValidLogic(){return!(this.maxPage<this.currentPage||this.maxPage<this.minPage)&&!(this.minPage>this.currentPage)}_renderEdge(t){if(!this._hasValidLogic())return a.b``;if("left"==t){if(this.currentPage-this.minPage>this.pagesPerSide+1)return a.b`<div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div><div class="ellipsis">...</div>`}else if("right"==t&&this.maxPage-this.currentPage>this.pagesPerSide+1)return a.b`<div class="ellipsis">...</div><div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`}_renderCenter(){if(!this._hasValidLogic())return a.b`<div class="${Object(r.a)({page:!0,selected:!0})}" page="${this.currentPage}">${this.currentPage}</div>`;let t=[{page:this.currentPage,selected:!0}],e=2*this.pagesPerSide,i=this;return s(this.pagesPerSide),s(e),t[0].page-this.minPage==1&&t.unshift({page:this.minPage,selected:!1}),this.maxPage-t.slice(-1)[0].page==1&&t.push({page:this.maxPage,selected:!1}),a.b`${t.map(t=>a.b`<div @click="${this.handleClick}"
                                              class="${Object(r.a)({page:!0,selected:t.selected})}"
                                              page="${t.page}">${t.page}</div>`)}`;function s(a){let r=["left","right"];for(let s of r){if("left"===s)for(let r=0;r<a;r++){let a=t[0].page;a>i.minPage&&(t.unshift({page:a-1,selected:!1}),e-=1)}if("right"===s)for(let r=0;r<a;r++){let a=t.slice(-1)[0].page;a<i.maxPage&&(t.push({page:a+1,selected:!1}),e-=1)}}}}handleClick(t){let e=parseInt(t.target.getAttribute("page"));e!=this.currentPage&&(this.currentPage=e,this.dispatchEvent(this._changedPage))}}customElements.define("rp-pagination",n)}}]);