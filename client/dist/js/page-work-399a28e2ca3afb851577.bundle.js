(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return n}));var i=e(2),a=e(41),o=e.n(a);function r(){return i.b`

<style>
  :host {
    display: block;
  }

  ${o.a}
</style>  
<div>Hello World</div>
`}e(92);class n extends(Mixin(i.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean}}}constructor(){super(),this.render=r.bind(this),this._injectModel("AppStateModel","WorkModel"),this.visible=!1,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;1!=t.location.path.length||this.AppStateModel.setLocation("/works")}}customElements.define("rp-page-work",n)},92:function(t,s,e){"use strict";var i=e(2),a=e(33),o=e(34);function r(){return i.b`
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
  <div class="container ${Object(a.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `}class n extends i.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=r.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",n)}}]);