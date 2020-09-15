(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return r}));var o=e(2),s=e(41),n=e.n(s);function a(){return o.b`

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
  ${n.a}
</style>
<div class="organization container top">
  <div ?hidden="${this._hideStatusSection("loading")}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection("error")}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading organization.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection("loaded")}">
  <rp-hero-image id="hero">
      <div slot="top" class="herotop">
        <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
        <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
      </div>
      <div slot="main" class="heromain">
        <div class="icon-container"><iron-icon icon="group-work"></iron-icon></div>
        <h2 class="name text-secondary h1 bold mb-0 text-center">${this.organization.label}</h2>
        <div></div>
      </div>
    </rp-hero-image>
  </div>

</div>

`}e(89),e(93);class r extends(Mixin(o.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},organizationId:{type:String},organization:{type:Object},organizationStatus:{type:String}}}constructor(){super(),this.render=a.bind(this),this._injectModel("AppStateModel","OrganizationModel"),this.visible=!1,this.organizationId="",this.organization={},this.organizationStatus="loading",this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;1!=i.length?(this.organizationId=i[1],this.organizationId&&(this.shadowRoot.getElementById("hero").shuffle(),await Promise.all([this._doMainQuery(this.organizationId)]))):this.AppStateModel.setLocation("/organizations")}async _doMainQuery(t){let i=await this.OrganizationModel.getOrganization(t);this.organizationStatus=i.state,"loaded"==i.state&&(this.organization=i.payload,APP_CONFIG.verbose&&console.log("organization payload:",i))}_hideStatusSection(t,i="organizationStatus"){return t!=this[i]}}customElements.define("rp-page-organization",r)},89:function(t,i,e){"use strict";var o=e(2),s=e(33);e(34);function n(){return o.b`
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
  `}class a extends o.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=n.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",a)},93:function(t,i,e){"use strict";var o=e(2),s=e(33),n=e(34);function a(){return o.b`
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
  <div class="container ${Object(s.a)(this.constructClasses())}" style="${Object(n.a)(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `}class r extends o.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=a.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",r)}}]);