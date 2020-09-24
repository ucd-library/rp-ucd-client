(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(t,i,e){"use strict";var a=e(2),s=e(33);function o(){return a.b`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    a {
      color: var(--tcolor-link-text)
    }
  </style>
  <div class="container ${Object(s.a)(this.constructClasses())}" ?hidden="${!this.data}">
  <a href="#">${this.data.label}</a>
  ${this.authors.map(t=>a.b`<span>${t.nameLast}, ${t.nameFirst}</span>; `)}.
  </div>
  `}class n extends a.a{static get properties(){return{data:{type:Object},citationStyle:{type:String,attribute:"citation-style"},authors:{type:Array}}}constructor(){super(),this.render=o.bind(this),this.citationStyle="MLA",this.data={},this.authors=[]}constructClasses(){return{}}updated(t){t.has("data")&&this.parseData()}parseData(){if(0==Object.keys(this.data).length)return;let t=[];if(this.data.Authorship&&"object"==typeof this.data.Authorship){let i=this.data.Authorship;Array.isArray(i)||(i=[i]);for(let e of i)e.hasName&&(e.nameFirst=e.hasName.givenName,e.nameLast=e.hasName.familyName,e["vivo:rank"]||(e["vivo:rank"]=1/0),t.push(e));t.sort((function(t,i){return t["vivo:rank"]-i["vivo:rank"]})),this.authors=t}}}customElements.define("rp-citation",n)},107:function(t,i,e){"use strict";e.r(i);var a=e(2),s=e(34),o=e.n(s);function n(){return a.b`

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
  rp-badge {
    margin-left: 8px;
  }
  rp-badge:first-child {
    margin-left: 0;
  }
  .load-more {
    height: 44px;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: none;
    padding: 0 15px;
    cursor: pointer;
  }
  .load-more:hover {
    background-color: var(--tcolor-hover-bg);
  }
  a.export {
    text-decoration: none;
    display: block;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text) !important;
    font-weight: var(--font-weight);
    padding: 10px 15px;
  }
  a.export:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-text);
  }
  .site .logo {
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
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
  <rp-hero-image id="hero">
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.individual.label}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      ${this.researchSubjects.length>0?a.b`
        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
        <p class="text-light mt-2 mb-0">
        ${this.researchSubjects.splice(0,this.researchSubjectsToShow).map(t=>a.b`<rp-badge>${t.label}</rp-badge>`)}
        </p>
        `:a.b``}
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.PersonModel.getSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this.hideSection("about")}">
    <h1 class="weight-regular mt-0">About</h1>
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(t=>a.b`<div>${t}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(t=>a.b`<div><a href="${"mailto:"+t}">${t}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(t=>a.b`
        <div class="site">
          <a href="${t.href}">${t.icon?a.b`<img class="logo" alt="site logo" src="${t.icon}">`:a.b``}${t.text}</a>
        </div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3" ?hidden="${this.hideSection("publications")}">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="flex align-items-center">${this.isOwnProfile?a.b`
        <a class="export mr-3" href="${"/api/miv/"+this.individualId}">Export</a>
      `:a.b``}
        <div class="pub-count">${this.totalPublications}</div>
      </div>

    </div>
    <h2>Selected Publications</h2>
      <div ?hidden="${"error"==this.publicationStatus||"loaded"==this.publicationStatus}" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${"loading"==this.publicationStatus||"loaded"==this.publicationStatus}" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading publications.</rp-alert>
      </div>
      <div class="data" ?hidden="${"loading"==this.publicationStatus||"error"==this.publicationStatus}">
        ${this.retrievedPublications.map(t=>a.b`
          <rp-citation class="mb-3" .data="${t}"></rp-citation>
          `)}
      </div>
      ${this.retrievedPublications.length<this.totalPublications?a.b`
        <button type="button" @click="${this._loadMorePubs}" class="load-more">Load more articles</button>`:a.b``}
  </section>

  <section id="research" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`}e(89),e(91),e(92),e(104),e(97),e(58),e(94);class r extends(Mixin(a.a).with(LitCorkUtils)){static get properties(){return{individual:{type:Object},individualId:{type:String},individualStatus:{type:String},publicationStatus:{type:String},retrievedPublications:{type:Array},totalPublications:{type:Number},researchSubjects:{type:Array},researchSubjectsToShow:{type:Number},activeSection:{type:Object},visible:{type:Boolean},isOwnProfile:{type:Boolean}}}constructor(){super(),this.render=n.bind(this),this._injectModel("PersonModel","AppStateModel"),this.individual={},this.individualId="",this.individualStatus="loading",this.publicationStatus="loading",this.visible=!1,this.retrievedPublications=[],this.totalPublications=0,this.researchSubjects=[],this.researchSubjectsToShow=4,this.activeSection={index:0},this.isOwnProfile=!1,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;i.length>=2&&(this.individualId=i[1],this.PersonModel.individualId=this.individualId),this.activeSection=this.PersonModel.getActiveSection(i[2]),this.individualId&&(this.totalPublications=0,await Promise.all([this._doMainQuery(this.individualId),this._doPubQuery(this.individualId)]),this.isOwnProfile=this._isOwnProfile())}updated(t){t.has("individualId")&&this.individualId&&this.shadowRoot.getElementById("hero").shuffle()}async _loadMorePubs(){await this._doPubQuery(this.individualId)}async _doMainQuery(t){let i=await this.PersonModel.getIndividual(t);this.individualStatus=i.state,"loaded"==i.state&&(this.individual=i.payload,APP_CONFIG.verbose&&console.log(i))}async _doPubQuery(t){let i=0;t||(t=this.individualId),this.retrievedPublications.length<this.totalPublications&&(i=this.retrievedPublications.length);let e=await this.PersonModel.getPublications(t,i);if(this.publicationStatus=e.state,"loaded"==e.state){if(APP_CONFIG.verbose&&console.log("pubs",e),this.retrievedPublications=e.payload.results,e.payload.results.length>0){this.totalPublications=e.payload.total;let t=e.payload.aggregations.facets["hasSubjectArea.label"];t&&Object.keys(t).length}APP_CONFIG.verbose&&console.log("research subjects",this.researchSubjects)}}_isOwnProfile(){try{if(APP_CONFIG.user.username.toLowerCase().split("@")[0]===this.individualId.toLowerCase())return!0}catch(t){}return!1}hideSection(t){return 0!=this.activeSection.index&&t!=this.activeSection.id}getIndividualTitles(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.title?Array.isArray(this.individual.hasContactInfo.title)?this.individual.hasContactInfo.title:[this.individual.hasContactInfo.title]:[]}getEmailAddresses(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.hasEmail?Array.isArray(this.individual.hasContactInfo.hasEmail)?this.individual.hasContactInfo.hasEmail.map(t=>t.email):[this.individual.hasContactInfo.hasEmail.email]:[]}getWebsites(){let t=[];return this.individual?(this.individual.orcidId&&t.push({text:this.individual.orcidId["@id"],href:this.individual.orcidId["@id"],icon:"/images/orcid_16x16.png"}),this.individual.scopusId&&t.push({text:"Scopus",href:"https://www.scopus.com/authid/detail.uri?authorId="+this.individual.scopusId}),t):t}formatSubjectsObject(t){let i=[];for(let e in t){let a={subject:e,count:t[e],label:e},s=e.split(" ");s[0].startsWith("0")&&!isNaN(s[0])&&(a.label=s.slice(1).join(" ")),i.push(a)}return i.sort((function(t,i){return i.count-t.count})),i}}customElements.define("rp-page-individual",r);e(105);function l(){return a.b`

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
  ${o.a}
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

`}class d extends(Mixin(a.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},organizationId:{type:String},organization:{type:Object},organizationStatus:{type:String}}}constructor(){super(),this.render=l.bind(this),this._injectModel("AppStateModel","OrganizationModel"),this.visible=!1,this.organizationId="",this.organization={},this.organizationStatus="loading",this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;1!=i.length?(this.organizationId=i[1],this.organizationId&&(this.shadowRoot.getElementById("hero").shuffle(),await Promise.all([this._doMainQuery(this.organizationId)]))):this.AppStateModel.setLocation("/organizations")}async _doMainQuery(t){let i=await this.OrganizationModel.getOrganization(t);this.organizationStatus=i.state,"loaded"==i.state&&(this.organization=i.payload,APP_CONFIG.verbose&&console.log("organization payload:",i))}_hideStatusSection(t,i="organizationStatus"){return t!=this[i]}}customElements.define("rp-page-organization",d)},97:function(t,i,e){"use strict";var a=e(2),s=e(33),o=e(35);function n(){return a.b`
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
  `}class r extends a.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=n.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",r)}}]);