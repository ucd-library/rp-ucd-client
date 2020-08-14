(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{83:function(t,i,e){"use strict";var s=e(2),r=e(33),o=e(34);function a(){return s.b`
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
  <div class="circle ${Object(r.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class n extends s.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=a.bind(this)}constructClasses(){let t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}constructStyles(){let t={};return this.src&&"undefined"!=this.src&&(t["background-image"]=`url(${this.src})`),t}renderFace(){if(!this.src||"undefined"==this.src)return s.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",n)},84:function(t,i,e){"use strict";var s=e(2),r=e(33);function o(){return s.b`
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
`}class a extends s.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=o.bind(this)}constructClasses(){let t={};if(this.size&&(t["size-"+this.size]=!0),this.colorSequence){t["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let i=[...this.parentNode.childNodes].filter(t=>t.tagName===this.tagName);if(i.length>0){t["color-"+(i.indexOf(this)%this.maxColor).toString()]=!0}else t["color-0"]=!0}return t}_renderBadge(){return this.href?s.b`<a href=${this.href}>${this._renderSpan()}</a>`:s.b`${this._renderSpan()}`}_renderSpan(){return s.b`<span class=${Object(r.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",a)},85:function(t,i,e){"use strict";var s=e(2),r=e(33);e(34);function o(){return s.b`
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
  `}class a extends s.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=o.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",a)},88:function(t,i,e){"use strict";var s=e(2),r=e(33);function o(){return s.b`
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
  <div class=${Object(r.a)(this._containerClasses)}>
    ${this.links.map((t,i)=>this._renderLink(t,i))}
  </div>
  `}class a extends s.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=o.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(t,i,e){"direction"==t&&e&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[e.toLowerCase()[0]]=!0),super.attributeChangedCallback(t,i,e)}_renderLink(t,i){let e="",o=!1,a={link:!0};if("string"==typeof t?e=t:"object"==typeof t&&(e=t.text,t.disabled&&(o=!0)),i==this.currentLink&&(a.selected=!0),this.hasHeaderLink&&0==i&&(a["link-header"]=!0),a.disabled=o,e)return s.b`<div @click="${this.handleClick}" link="${i}" class=${Object(r.a)(a)}>${e}</div>`}handleClick(t){let i=parseInt(t.target.getAttribute("link"));i==this.currentLink||t.target.classList.contains("disabled")||(this.currentLink=i,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",a)},91:function(t,i,e){"use strict";var s=e(2),r=e(33),o=e(34);function a(){return s.b`
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
  <div class="container ${Object(r.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `}class n extends s.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=a.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",n)},97:function(t,i,e){"use strict";e.r(i),e.d(i,"default",(function(){return n}));var s=e(2),r=e(41),o=e.n(r);function a(){return s.b`

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
  #about .cols {
    display: flex;
  }
  #about .cols > div {
    width: 50%;
  }
  .pub-count {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${o.a}
</style>


<div class="individual container top">
  <div ?hidden="${"error"==this.individualStatus||"loaded"==this.individualStatus}" class="flex align-items-center justify-content-center">
    <div class="loading1">loading</div>
  </div>
  <div ?hidden="${"loading"==this.individualStatus||"loaded"==this.individualStatus}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${"loading"==this.individualStatus||"error"==this.individualStatus}">
  <rp-hero-image>
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.individual.label}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
      <p class="text-light mt-2 mb-0">
        <rp-badge>Foobar</rp-badge>
        <rp-badge>Stuff</rp-badge>
        <rp-badge>Things</rp-badge>
        <rp-badge>Widgets</rp-badge>
        </p>
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                links='[{"text": "All Info"},
                        {"text": "About"},
                        {"text": "Publications"},
                        {"text": "Research"},
                        {"text": "Contact"}]'>
  </rp-link-list>

  <section id="about" class="bg-light mt-3">
    <h1 class="weight-regular">About</h1>
    <h2>Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(t=>s.b`<div>${t}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(t=>s.b`<div><a href="${"mailto:"+t}">${t}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(t=>s.b`<div><a href="${t.href}">${t.text}</a></div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="pub-count">${this.totalPublications}</div>
    </div>
    <h2>Selected Publications</h2>
  </section>
  <section id="research" class="bg-light mt-3">
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3">
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`}e(85),e(83),e(84),e(91),e(56),e(88);class n extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{individual:{type:Object},individualId:{type:String},individualStatus:{type:String},publicationState:{type:String},retrievedPublications:{type:Array},totalPublications:{type:parseInt}}}constructor(){super(),this.render=a.bind(this),this._injectModel("PersonModel","AppStateModel"),this.individual={},this.individualStatus="loading",this.publicationStatus="loading",this.retrievedPublications=[],this.totalPublications=0,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){let i=await this.AppStateModel.get();i=i.location.path,i.length>=2&&(this.individualId=i[1]),this.individualId&&await Promise.all([this._doMainQuery(this.individualId),this._doPubQuery(this.individualId)])}async _doMainQuery(t){let i=await this.PersonModel.getIndividual(t);this.individualStatus=i.state,"loaded"==i.state&&(this.individual=i.payload,console.log(i))}async _doPubQuery(t,i=!1){let e=await this.PersonModel.getPublications(t);this.publicationStatus=e.state,"loaded"==e.state&&(this.retrievedPublications=e.payload.results,this.totalPublications=e.payload.total,console.log(this.retrievedPublications))}getIndividualTitles(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.title?Array.isArray(this.individual.hasContactInfo.title)?this.individual.hasContactInfo.title:[this.individual.hasContactInfo.title]:[]}getEmailAddresses(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.hasEmail?Array.isArray(this.individual.hasContactInfo.hasEmail)?this.individual.hasContactInfo.hasEmail.map(t=>t.email):[this.individual.hasContactInfo.hasEmail.email]:[]}getWebsites(){let t=[];return this.individual?(this.individual.orcidId&&t.push({text:"Orcid",href:this.individual.orcidId["@id"]}),this.individual.scopusId&&t.push({text:"Scopus",href:"https://www.scopus.com/authid/detail.uri?authorId="+this.individual.scopusId}),t):t}}customElements.define("rp-page-individual",n)}}]);