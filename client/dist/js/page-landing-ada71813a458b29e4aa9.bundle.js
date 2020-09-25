(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(t,i,e){"use strict";var s=e(2),o=e(33);function r(){return s.b`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    a {
      color: var(--tcolor-link-text)
    }
  </style>
  <div class="container ${Object(o.a)(this.constructClasses())}" ?hidden="${!this.data}">
  <a href="#">${this.data.label}</a>
  ${this.authors.map(t=>s.b`<span>${t.nameLast}, ${t.nameFirst}</span>; `)}.
  </div>
  `}class a extends s.a{static get properties(){return{data:{type:Object},citationStyle:{type:String,attribute:"citation-style"},authors:{type:Array}}}constructor(){super(),this.render=r.bind(this),this.citationStyle="MLA",this.data={},this.authors=[]}constructClasses(){return{}}updated(t){t.has("data")&&this.parseData()}parseData(){if(0==Object.keys(this.data).length)return;let t=[];if(this.data.Authorship&&"object"==typeof this.data.Authorship){let i=this.data.Authorship;Array.isArray(i)||(i=[i]);for(let e of i)e.hasName&&(e.nameFirst=e.hasName.givenName,e.nameLast=e.hasName.familyName,e["vivo:rank"]||(e["vivo:rank"]=1/0),t.push(e));t.sort((function(t,i){return t["vivo:rank"]-i["vivo:rank"]})),this.authors=t}}}customElements.define("rp-citation",a)},105:function(t,i,e){"use strict";e.r(i);var s=e(2),o=e(34),r=e.n(o);function a(){return s.b`

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
  ${r.a}
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
      ${this.researchSubjects.length>0?s.b`
        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
        <p class="text-light mt-2 mb-0">
        ${this.researchSubjects.splice(0,this.researchSubjectsToShow).map(t=>s.b`<rp-badge>${t.label}</rp-badge>`)}
        </p>
        `:s.b``}
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
          ${this.getIndividualTitles().map(t=>s.b`<div>${t}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(t=>s.b`<div><a href="${"mailto:"+t}">${t}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(t=>s.b`
        <div class="site">
          <a href="${t.href}">${t.icon?s.b`<img class="logo" alt="site logo" src="${t.icon}">`:s.b``}${t.text}</a>
        </div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3" ?hidden="${this.hideSection("publications")}">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="flex align-items-center">${this.isOwnProfile?s.b`
        <a class="export mr-3" href="${"/api/miv/"+this.individualId}">Export</a>
      `:s.b``}
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
        ${this.retrievedPublications.map(t=>s.b`
          <rp-citation class="mb-3" .data="${t}"></rp-citation>
          `)}
      </div>
      ${this.retrievedPublications.length<this.totalPublications?s.b`
        <button type="button" @click="${this._loadMorePubs}" class="load-more">Load more articles</button>`:s.b``}
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

`}e(89),e(91),e(92),e(103),e(95),e(58),e(93);class n extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{individual:{type:Object},individualId:{type:String},individualStatus:{type:String},publicationStatus:{type:String},retrievedPublications:{type:Array},totalPublications:{type:Number},researchSubjects:{type:Array},researchSubjectsToShow:{type:Number},activeSection:{type:Object},visible:{type:Boolean},isOwnProfile:{type:Boolean}}}constructor(){super(),this.render=a.bind(this),this._injectModel("PersonModel","AppStateModel"),this.individual={},this.individualId="",this.individualStatus="loading",this.publicationStatus="loading",this.visible=!1,this.retrievedPublications=[],this.totalPublications=0,this.researchSubjects=[],this.researchSubjectsToShow=4,this.activeSection={index:0},this.isOwnProfile=!1,this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;i.length>=2&&(this.individualId=i[1],this.PersonModel.individualId=this.individualId),this.activeSection=this.PersonModel.getActiveSection(i[2]),this.individualId&&(this.totalPublications=0,await Promise.all([this._doMainQuery(this.individualId),this._doPubQuery(this.individualId)]),this.isOwnProfile=this._isOwnProfile())}updated(t){t.has("individualId")&&this.individualId&&this.shadowRoot.getElementById("hero").shuffle()}async _loadMorePubs(){await this._doPubQuery(this.individualId)}async _doMainQuery(t){let i=await this.PersonModel.getIndividual(t);this.individualStatus=i.state,"loaded"==i.state&&(this.individual=i.payload,APP_CONFIG.verbose&&console.log(i))}async _doPubQuery(t){let i=0;t||(t=this.individualId),this.retrievedPublications.length<this.totalPublications&&(i=this.retrievedPublications.length);let e=await this.PersonModel.getPublications(t,i);if(this.publicationStatus=e.state,"loaded"==e.state){if(APP_CONFIG.verbose&&console.log("pubs",e),this.retrievedPublications=e.payload.results,e.payload.results.length>0){this.totalPublications=e.payload.total;let t=e.payload.aggregations.facets["hasSubjectArea.label"];t&&Object.keys(t).length}APP_CONFIG.verbose&&console.log("research subjects",this.researchSubjects)}}_isOwnProfile(){try{if(APP_CONFIG.user.username.toLowerCase().split("@")[0]===this.individualId.toLowerCase())return!0}catch(t){}return!1}hideSection(t){return 0!=this.activeSection.index&&t!=this.activeSection.id}getIndividualTitles(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.title?Array.isArray(this.individual.hasContactInfo.title)?this.individual.hasContactInfo.title:[this.individual.hasContactInfo.title]:[]}getEmailAddresses(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.hasEmail?Array.isArray(this.individual.hasContactInfo.hasEmail)?this.individual.hasContactInfo.hasEmail.map(t=>t.email):[this.individual.hasContactInfo.hasEmail.email]:[]}getWebsites(){let t=[];return this.individual?(this.individual.orcidId&&t.push({text:this.individual.orcidId["@id"],href:this.individual.orcidId["@id"],icon:"/images/orcid_16x16.png"}),this.individual.scopusId&&t.push({text:"Scopus",href:"https://www.scopus.com/authid/detail.uri?authorId="+this.individual.scopusId}),t):t}formatSubjectsObject(t){let i=[];for(let e in t){let s={subject:e,count:t[e],label:e},o=e.split(" ");o[0].startsWith("0")&&!isNaN(o[0])&&(s.label=o.slice(1).join(" ")),i.push(s)}return i.sort((function(t,i){return i.count-t.count})),i}}function l(){return s.b`

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

  ${r.a}
</style>  
<div class="work container top">
  <div ?hidden="${this._hideStatusSection("loading")}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection("error")}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading work.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection("loaded")}">
    <rp-hero-image id="hero">
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

`}customElements.define("rp-page-individual",n);class c extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},workId:{type:String},work:{type:Object},workStatus:{type:String},grpsWithLinks:{type:String},authorPath:{type:String}}}constructor(){super(),this.render=l.bind(this),this._injectModel("AppStateModel","WorkModel"),this.visible=!1,this.workId="",this.work={},this.workStatus="loading",this.authorPath="/individual/",this.grpsWithLinks=["vivo:FacultyMember"],this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;1!=i.length?(this.workId=i[1],this.workId&&(this.shadowRoot.getElementById("hero").shuffle(),await Promise.all([this._doMainQuery(this.workId)]))):this.AppStateModel.setLocation("/works")}async _doMainQuery(t){let i=await this.WorkModel.getWork(t);this.workStatus=i.state,"loaded"==i.state&&(this.work=i.payload,APP_CONFIG.verbose&&console.log("work payload:",i))}_hideStatusSection(t,i="workStatus"){return t!=this[i]}_hideSection(t){return"abstract"!=t||!this.work.abstract}_renderAuthors(){let t=[];if(this.work.Authorship&&"object"==typeof this.work.Authorship){let i=this.work.Authorship;Array.isArray(i)||(i=[i]);for(let e of i)if(e.hasName){e.nameFirst=e.hasName.givenName,e.nameLast=e.hasName.familyName,e["vivo:rank"]||(e["vivo:rank"]=1/0),e.href="";try{"object"!=typeof e.identifiers||Array.isArray(e.identifiers)||(e.identifiers=[e.identifiers]);for(let t of e.identifiers)this.grpsWithLinks.includes(t["@type"])&&(e.href=this.authorPath+t["@id"].replace(this.WorkModel.service.jsonContext+":",""))}catch(t){console.warn("Unable to construct author href.")}t.push(e)}t.sort((function(t,i){return t["vivo:rank"]-i["vivo:rank"]}))}return s.b`<div class="authors">${t.map(t=>s.b`<a class="author" href="${t.href}" ?disabled="${!t.href}">${t.nameLast}, ${t.nameFirst}</a>; `)}</div>`}}function d(){return s.b`

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
  ${r.a}
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

`}customElements.define("rp-page-work",c);class h extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},organizationId:{type:String},organization:{type:Object},organizationStatus:{type:String}}}constructor(){super(),this.render=d.bind(this),this._injectModel("AppStateModel","OrganizationModel"),this.visible=!1,this.organizationId="",this.organization={},this.organizationStatus="loading",this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let i=t.location.path;1!=i.length?(this.organizationId=i[1],this.organizationId&&(this.shadowRoot.getElementById("hero").shuffle(),await Promise.all([this._doMainQuery(this.organizationId)]))):this.AppStateModel.setLocation("/organizations")}async _doMainQuery(t){let i=await this.OrganizationModel.getOrganization(t);this.organizationStatus=i.state,"loaded"==i.state&&(this.organization=i.payload,APP_CONFIG.verbose&&console.log("organization payload:",i))}_hideStatusSection(t,i="organizationStatus"){return t!=this[i]}}customElements.define("rp-page-organization",h)},89:function(t,i,e){"use strict";var s=e(2),o=e(33);e(35);function r(){return s.b`
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
  <div class="container ${Object(o.a)(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `}class a extends s.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=r.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",a)},91:function(t,i,e){"use strict";var s=e(2),o=e(33),r=e(35);function a(){return s.b`
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
  <div class="circle ${Object(o.a)(this.constructClasses())}" style="${Object(r.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class n extends s.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=a.bind(this)}constructClasses(){let t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}constructStyles(){let t={};return this.src&&"undefined"!=this.src&&(t["background-image"]=`url(${this.src})`),t}renderFace(){if(!this.src||"undefined"==this.src)return s.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",n)},92:function(t,i,e){"use strict";var s=e(2),o=e(33);function r(){return s.b`
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
`}class a extends s.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=r.bind(this)}constructClasses(){let t={};if(this.size&&(t["size-"+this.size]=!0),this.colorSequence){t["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let i=[...this.parentNode.childNodes].filter(t=>t.tagName===this.tagName);if(i.length>0){t["color-"+(i.indexOf(this)%this.maxColor).toString()]=!0}else t["color-0"]=!0}return t}_renderBadge(){return this.href?s.b`<a href=${this.href}>${this._renderSpan()}</a>`:s.b`${this._renderSpan()}`}_renderSpan(){return s.b`<span class=${Object(o.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",a)},93:function(t,i,e){"use strict";var s=e(2),o=e(33);function r(){return s.b`
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
  <div class=${Object(o.a)(this._containerClasses)}>
    ${this.links.map((t,i)=>this._renderLink(t,i))}
  </div>
  `}class a extends s.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=r.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(t,i,e){"direction"==t&&e&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[e.toLowerCase()[0]]=!0),super.attributeChangedCallback(t,i,e)}_renderLink(t,i){let e="",r="",a=!1,n={link:!0};return"string"==typeof t?e=t:"object"==typeof t&&(e=t.text,t.disabled&&(a=!0),t.href&&(r=t.href)),i==this.currentLink&&(n.selected=!0),this.hasHeaderLink&&0==i&&(n["link-header"]=!0),n.disabled=a,r?s.b`<a link="${i}" class="${Object(o.a)(n)}" href="${r}">${e}</a>`:e?s.b`<div @click="${this.handleClick}" link="${i}" class=${Object(o.a)(n)}>${e}</div>`:void 0}handleClick(t){let i=parseInt(t.target.getAttribute("link"));i==this.currentLink||t.target.classList.contains("disabled")||(this.currentLink=i,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",a)},95:function(t,i,e){"use strict";var s=e(2),o=e(33),r=e(35);function a(){return s.b`
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
  <div class="container ${Object(o.a)(this.constructClasses())}" style="${Object(r.a)(this.constructStyles())}">
      <div class="slot" id="top"><slot name="top"></slot></div>
      <div class="slot" id="main"><slot name="main"></slot></div>
      <div class="slot" id="bottom"><slot name="bottom"></slot></div>

  </div>
  `}class n extends s.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=a.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let t={};return this.src?t["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),t["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),t}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",n)}}]);