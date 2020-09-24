(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,i){"use strict";var o=i(2),n=i(33);function s(){return o.b`
  <style>
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    iron-icon {
      color: var(--tcolor-secondary);
      width: 24px;
      height: 24px;
      transition: .3s;
    }
    iron-icon[rotated] {
      transform: rotate(-90deg);
    }
    #container-title {
      cursor: pointer;
      display: flex;
    }
    #title:hover {
      color: var(--tcolor-link-hover-text);
    }
    #title {
      color: var(--tcolor-link-text);
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size);
    }
    #content {
      padding-left: 24px;
      font-size: var(--font-size);
      margin-top: 14px;
    }
  </style>
  <div class="container ${Object(n.a)(this.constructClasses())}" ?hidden="${!this.title}">
    <div id="container-title" @click="${this.toggle}">
      <iron-icon icon="arrow-drop-down" ?rotated="${!this.expanded}"></iron-icon>
      <span id="title">${this.title}</span>
    </div>
    <div id="content" ?hidden="${!this.expanded}">
      <slot></slot>
    </div>
  </div>
  `}class r extends o.a{static get properties(){return{title:{type:String},expanded:{type:Boolean,reflect:!0}}}constructor(){super(),this.render=s.bind(this),this.expanded=!1}constructClasses(){return{}}toggle(){this.expanded=!this.expanded}}customElements.define("rp-accordian",r)},110:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return a}));var o=i(2),n=i(34),s=i.n(n);function r(){return o.b`

<style>
  :host {
    display: block;
  }
  ${s.a}
</style> 
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <h2>Accessing the Registry</h2>
      <rp-accordian title="How do I add a question to the FAQ?">
        <span>By using this <a href="https://docs.google.com/document/d/1k1QGlfleY08J-fZSiN5zZXx1juTxlhXOUlTvEqXaIDM/edit">Google Doc</a></span>
      </rp-accordian>
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`}i(100);class a extends(Mixin(o.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean}}}constructor(){super(),this.render=r.bind(this),this._injectModel("AppStateModel"),this.boolean=!1,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){await this.updateComplete,this.visible}}customElements.define("rp-page-help",a)}}]);