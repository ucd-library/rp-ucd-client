(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return n}));var r=i(2),s=i(41),o=i.n(s);function a(){return r.b`

<style>
  :host {
    display: block;
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  .icon-container {
      background-color: var(--tcolor-bg-primary);
      height: 150px;
      width: 150px;
      min-height: 150px;
      min-width: 150px;
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
  .authors a {
    color: var(--tcolor-light) !important;
  }
  .authors a[disabled] {
      pointer-events: none;
      text-decoration: none;
    }
  .authors a[disabled]:hover {
    color : var(--tcolor-link-text);
  }

  ${o.a}
</style>  
<div class="work container top">
  <div ?hidden="${this._hideStatusSection("loading")}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection("error")}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection("loaded")}">
    <rp-hero-image>
      <div slot="top" class="herotop">
        <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
        <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
      </div>
      <div slot="main" class="heromain">
        <div class="icon-container"><iron-icon icon="av:library-books"></iron-icon></div>
        <h2 class="name text-secondary h1 bold mb-0 text-center">${this.work.label}</h2>
        <p class="text-light h3 mb-2 mt-1 text-center">${this._renderAuthors()}</p>
        <div></div>
      </div>
    </rp-hero-image>
  </div>

  <section id="abstract" class="bg-light mt-3" ?hidden="${this._hideSection("abstract")}">
    <h1 class="weight-regular mt-0">Abstract</h1>
    <p>${this.work.abstract}</p>
  </section>
</div>

`}i(86),i(92);class n extends(Mixin(r.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},workId:{type:String},work:{type:Object},workStatus:{type:String},grpsWithLinks:{type:String},authorPath:{type:String}}}constructor(){super(),this.render=a.bind(this),this._injectModel("AppStateModel","WorkModel"),this.visible=!1,this.workId="",this.work={},this.workStatus="loading",this.authorPath="/individual/",this.grpsWithLinks=["vivo:FacultyMember"],this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let e=t.location.path;1!=e.length?(this.workId=e[1],this.workId&&await Promise.all([this._doMainQuery(this.workId)])):this.AppStateModel.setLocation("/works")}async _doMainQuery(t){let e=await this.WorkModel.getWork(t);this.workStatus=e.state,"loaded"==e.state&&(this.work=e.payload,APP_CONFIG.verbose&&console.log("work payload:",e))}_hideStatusSection(t,e="workStatus"){return t!=this[e]}_hideSection(t){return"abstract"!=t||!this.work.abstract}_renderAuthors(){let t=[];if(this.work.Authorship&&"object"==typeof this.work.Authorship){let e=this.work.Authorship;Array.isArray(e)||(e=[e]);for(let i of e)if(i.hasName){i.nameFirst=i.hasName.givenName,i.nameLast=i.hasName.familyName,i["vivo:rank"]||(i["vivo:rank"]=1/0),i.href="";try{"object"!=typeof i.identifiers||Array.isArray(i.identifiers)||(i.identifiers=[i.identifiers]);for(let t of i.identifiers)this.grpsWithLinks.includes(t["@type"])&&(i.href=this.authorPath+t["@id"].replace(this.WorkModel.service.jsonContext+":",""))}catch(t){console.warn("Unable to construct author href.")}t.push(i)}t.sort((function(t,e){return t["vivo:rank"]-e["vivo:rank"]}))}return r.b`<div class="authors">${t.map(t=>r.b`<a class="author" href="${t.href}" ?disabled="${!t.href}">${t.nameLast}, ${t.nameFirst}</a>; `)}</div>`}}customElements.define("rp-page-work",n)},86:function(t,e,i){"use strict";var r=i(2),s=i(33);i(34);function o(){return r.b`
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
  `}class a extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=o.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",a)},92:function(t,e,i){"use strict";var r=i(2),s=i(33),o=i(34);function a(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .slot {
      margin-left: 10px;
      margin-right: 10px;
    }
    #top {
      height: 30px;
      padding-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #bottom {
      height: 30px;
      padding-bottom: 10px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  </style>
  <div class="container ${Object(s.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `}class n extends r.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=a.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",n)}}]);