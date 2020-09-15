(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return p}));var s=i(2),n=i(41),o=i.n(n);function a(){return s.b`

<style>
  :host {
    display: block;
  }
  ${o.a}
</style> 
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <h2>Accessing the Registry</h2>
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`}class p extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean}}}constructor(){super(),this.render=a.bind(this),this._injectModel("AppStateModel"),this.boolean=!1,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible}}customElements.define("rp-page-help",p)}}]);