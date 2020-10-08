(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(t,e,i){"use strict";var s=i(2);i(33);function o(){return s.b`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    a {
      color: var(--tcolor-link-text)
    }
    .venue {
      text-transform: capitalize;
    }
    [hidden] {
      display: none !important;
    }
  </style>
  <div class="container" ?hidden="${!this.data}">
  ${"rp"==this.citationStyle?s.b`
    <a href="${this.href}">${this.title}</a>
    <span class="authors">
      ${this.authors.map((t,e)=>s.b`
      <span class="author">${t.text}</span>${e+1<this.authors.length?s.b`<span>, </span>`:s.b`<span>.</span>`}
      `)}
    </span>
    ${this.venue?s.b`
      <span class="venue">${this.venue}.</span>
    `:s.b``}
    ${this.venueLocation?s.b`
      <span class="venue-location">${this.venueLocation}.</span>
    `:s.b``}
  `:s.b``}
  </div>
  `}class r extends s.a{static get properties(){return{data:{type:Object},title:{type:String},href:{type:String},venue:{type:String},authors:{type:Array},citationStyle:{type:String,attribute:"citation-style"}}}constructor(){super(),this.render=o.bind(this),this.citationStyle="rp",this.data={},this.title="",this.href="",this.venue="",this.venueLocation="",this.authors=[]}updated(t){t.has("data")&&this.parseData()}parseData(){if(0==Object.keys(this.data).length)return;let t=this.data;this.title=t.label,this.href=this._constructHref(t["@id"]),this.venue=this._getVenue(t.hasPublicationVenue),this.venueLocation=this._getVenueLocation(t),this.authors=this._constructAuthors(t.Authorship)}_constructHref(t){let e="";try{e="/work/"+t.replace(APP_CONFIG.data.jsonldContext+":publication","")}catch(t){}return e}_getVenue(t){return t&&t["@id"]?t["@id"].replace(APP_CONFIG.data.jsonldContext+":journal","").replace(/-/g," "):""}_constructAuthors(t){if(!t)return[];Array.isArray(t)||(t=[t]);let e=[];for(let i of t)i.hasName&&i.hasName.familyName&&i.hasName.givenName&&(i["vivo:rank"]||(i["vivo:rank"]=1/0),i.text=`${i.hasName.familyName} ${i.hasName.givenName.split("").filter(t=>t===t.toUpperCase()&&" "!=t).join("")}`,e.push(i));return e.sort((function(t,e){return t["vivo:rank"]-e["vivo:rank"]})),e}_getVenueLocation(t){let e="";return t.volume&&(e+=t.volume),t.pageStart&&(e&&(e+=":"),e+=t.pageStart),t.pageEnd&&(t.pageStart&&(e+="-"),e+=t.pageEnd),e}}customElements.define("rp-citation",r)},105:function(t,e,i){"use strict";var s=i(2),o=(i(60),i(35)),r=i(33);function a(){return s.b`
  <style>
    :host {
      display: inline-block;
      color: var(--tcolor-primary)
    }
    .hidden {
      display: none !important;
    }
    .container {
      font-size: var(--font-size-small);
    }
    .icon-dl {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--tcolor-bg-primary);
      transition: 0.3s;
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
    }
    .button {
      cursor: pointer;
    }
    #main-toggle:hover, .choice:hover .icon-dl {
      background-color: var(--tcolor-hover-bg);
      color: var(--tcolor-light);
    }
    #main-toggle.opened, #main-toggle.opened:hover {
      background-color: var(--tcolor-primary);
      color: var(--tcolor-bg-primary);
    }
    #dropdown-content {
      background-color: var(--tcolor-light);
      box-shadow: 0 0 3px 5px rgba(0, 0, 0, .1);
      padding-bottom: 10px;
    }
    .title {
      padding: 15px 15px 5px 15px;
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-text);
    }
    iron-icon {
      width: 60%;
      height: 60%;
      min-width: 60%;
      min-height: 60%;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .text-box {
      margin-left: 10px;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
    .choice {
      padding: 5px 15px;
      transition: 0.3s;
    }
    a {
      color: var(--tcolor-primary);
      text-decoration: none;
      transition: 0.3s;
    }
    .choice:hover {
      background-color: var(--tcolor-bg-primary);
    }
    .choice-content {
      display: flex;
      align-items: center;
    }
    
  </style>
  <div class="container">
      <div role="button"
        class="${Object(r.a)({"icon-dl":!0,button:!0,opened:this.opened})}"
        id="main-toggle"
        aria-pressed="${this.opened}"
        @click="${this._onMainClick}"
        style="${Object(o.a)({width:this.size,height:this.size,minHeight:this.size,minWidth:this.size})}">
        <iron-icon icon="file-download"></iron-icon>
      </div>

      <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset="${this.pixels}" horizontal-align="${this.dropOnLeft?"left":"right"}">
        <div slot="dropdown-content" id="dropdown-content">
          <div class="title">${this.title}</div>
          <ul>${this.choices.map((t,e)=>this._renderChoices(t,e))}</ul>
        </div>
    </iron-dropdown>
      
  </div>
  `}class n extends s.a{static get properties(){return{pixels:{type:Number},opened:{type:Boolean},title:{type:String},choices:{type:Array},dropOnLeft:{Type:Boolean},selected:{type:Number}}}constructor(){super(),this.render=a.bind(this),this.pixels=35,this.size=String(this.pixels)+"px",this.opened=!1,this.choices=[],this.title="Downloads",this.dropOnLeft=!1,this.selected=0,this._newSelection=new CustomEvent("new-selection",{detail:{message:"A new selection."}})}updated(t){t.has("pixels")&&(this.size=String(this.pixels)+"px")}firstUpdated(t){this.shadowRoot.getElementById("dropdown").addEventListener("opened-changed",t=>{this.opened=t.target.opened})}_renderChoices(t,e){let i=s.b`
        <div class="choice-content">
            <div class="icon-dl"><iron-icon icon="file-download"></iron-icon></div>
            <div class="text-box">
                <span class="text">${t.text}</span>
                ${t.subtext?s.b`<span class="subtext">${t.subtext}</span>`:s.b``}
            </div>
        </div>`;return t.href?s.b`
            <li class="choice button">
                <a href="${t.href}">${i}</a>
            </li>
          `:s.b`
        <li class="choice button" @click="${t=>this._onItemClick(e)}">${i}</li>
      `}_onMainClick(){this.opened?this.opened=!1:(this.dropOnLeft=this.offsetLeft/window.innerWidth<.5,this.opened=!0,this.shadowRoot.getElementById("dropdown").open())}_onItemClick(t){this.selected=t,this.shadowRoot.getElementById("dropdown").close(),this.dispatchEvent(this._newSelection)}}customElements.define("rp-download-list",n)},106:function(t,e,i){"use strict";var s=i(2);i(35),i(33);function o(){return s.b`
  <style>
    :host {
      display: inline-block;
    }
    .container {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    [hidden] {
      display: none !important;
    }
    .film {
      background-color: var(--tcolor-modal-film);
      width: 100%;
      height: 100%;
      z-index: 99;
      position: fixed;
      left: 0;
      top: 0;
    }
    .box-content {
        background-color: var(--tcolor-light);
        width: 85%;
        min-height: 200px;
        z-index: 100;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px 0 30px;
    }
    iron-icon[icon=close] {
        color: var(--tcolor-primary);
        cursor: pointer;
    }
    iron-icon[icon=close]:hover {
        color: var(--tcolor-link-hover-text);
    }
    hr {
        border-color: var(--tcolor-primary20);
        border-style: dotted;
        border-width: 2px;
        border-bottom-width: 0;
        margin: 0 30px;
    }
    .body-content {
        margin: 15px 30px;
    }
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
    }
    .button {
        color: var(--tcolor-primary);
        padding: 10px;
        background-color: var(--tcolor-bg-primary);
        cursor: pointer;
        transition: .3s;
    }
    .button:hover {
        background-color: var(--tcolor-hover-bg);
        color: var(--tcolor-hover-text);
    }
  </style>
  <div class="container" ?hidden="${!this.visible}">
    <div class="film" @click="${t=>this.hide()}"></div>
    <div class="box-content">
        <div class="header">
            <h2>${this.contentTitle}</h2>
            <div class="header-right"><iron-icon icon="close" @click="${t=>this.hide()}"></iron-icon></div>
        </div>
        <hr>
        <div class="body-content"><slot></slot></div>
        <hr>
        <div class="footer">
            <div class="button" @click="${t=>this.hide()}">${this.dismissText}</div>
        </div>
    </div>
      
  </div>
  `}class r extends s.a{static get properties(){return{visible:{type:Boolean},contentTitle:{type:String,attribute:"content-title"},dismissText:{type:String,attribute:"dismiss-text"}}}constructor(){super(),this.render=o.bind(this),this.visible=!1,this.contentTitle="",this.dismissText="Okay"}updated(t){t.has("visible")}show(){this.visible=!0}hide(){this.visible=!1}toggle(){this.visible=!this.visible}}customElements.define("rp-modal",r)},108:function(t,e,i){"use strict";i.r(e);var s=i(2),o=i(34),r=i.n(o);function a(){return s.b`

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
  .load-pubs {
    height: 42px;
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: 2px solid var(--tcolor-primary10);
    padding: 0 15px;
    cursor: pointer;
    transition: .3s;
    color: var(--tcolor-primary);
  }
  .load-pubs.more {
    background-color: var(--tcolor-primary10);
  }
  .load-pubs.less {
    background-color: var(--tcolor-light);
    margin-right: 8px;
  }
  .load-pubs:hover {
    background-color: var(--tcolor-hover-bg);
    border: 2px solid var(--tcolor-hover-bg);
    color: var(--tcolor-light);
  }
  .site .logo {
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  .pub-icons {
    display: flex;
    align-items: center;
  }
  .pub-icons > * {
    margin-right: 10px;
  }
  .box-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .own-profile .box-title {
    flex-flow: column nowrap;
  }
  .box-title-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .own-profile .box-title-icons {
    order: -1;
  }
  #publications h3 {
    font-weight: var(--font-weight);
    font-style: italic;

  }
  .box-pubsyear {
    display: flex;
  }
  .box-pubsyear .year {
    font-weight: var(--font-weight-bold);
    width: 60px;
    min-width: 60px;
  }
  .box-pubsyear .pubs {
    flex-grow: 1;
  }
  .box-pubsyear .pubs rp-citation {
    margin-bottom: 8px;
  }
  .box-pub-buttons {
    display: flex;
  }
  .box-pub-buttons .padding {
    width: 60px;
    min-width: 60px;
  }
  .box-pub-buttons .buttons {
    display: flex;
    flex-grow: 1;
  }
  @media (min-width: 800px){
    .own-profile .box-title {
      flex-flow: row nowrap;
      justify-content: space-between;
  }
    .own-profile .box-title-icons { 
      justify-content: unset;
    }
    .own-profile .box-title-icons {
      order: 2;
    }

  }
  ${r.a}
</style>


<div class="individual container top ${this.isOwnProfile?"own-profile":""}">
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

      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.getPageSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection("about")}">
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

  <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection("publications")}">
    <div class="box-title">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="box-title-icons">
        ${this.isOwnProfile?s.b`
          <div class="pub-icons">
            <rp-icon icon="iron-editor:mode-edit" circle-bg is-link size="lg" @click="${t=>this.shadowRoot.getElementById("modal-pub-edit").toggle()}"></rp-icon>
            <rp-download-list title="Download Publications List" .choices="${this.getPubExports()}"></rp-download-list>
          </div>
          <rp-modal content-title='Edit "Publications"' id="modal-pub-edit">
    Publication information is managed via the <a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a>. Any changes made there will be reflected on your Aggie Experts profile.
          </rp-modal>
          `:s.b``}
          <div class="pub-count">${this.totalPublications}</div>
      </div>
    </div>
    <h2 class="mb-0">Selected Publications</h2>
      <div class="data">
        ${Object.values(this.publicationOverview).map(t=>s.b`
          <h3>${t.label} (${t.ct})</h3>
          ${this.getPubsByYear(t.id).map(t=>s.b`
            <div class="box-pubsyear">
              <div class="year">${t.year}</div>
              <div class="pubs">${t.pubs.map(t=>s.b`
                <rp-citation .data="${t}"></rp-citation>
              `)}</div>
            </div>
          `)}
          ${t.displayedOffset>10||t.displayedOffset+10<=10*Math.ceil(t.ct/10)?s.b`
            <div class="box-pub-buttons">
              <div class="padding"></div>
              <div class="buttons">
                ${t.displayedOffset>10?s.b`
                  <button type="button" @click="${e=>this._loadPubs(t.id,!1)}" class="load-pubs less">Show ${t.displayedOffset>t.ct?t.ct-(t.displayedOffset-10):10} less</button>
                  `:s.b``}
                ${t.displayedOffset+10<=10*Math.ceil(t.ct/10)?s.b`
                  <button type="button" @click="${e=>this._loadPubs(t.id,!0)}" class="load-pubs more">Show ${t.ct-t.displayedOffset<10?t.ct-t.displayedOffset:10} more</button>
                `:s.b``}
              </div>
            </div>
          `:s.b``}
        `)}
      </div>
      
  </section>
  </div>
</div>

`}function n(){return s.b`

<style>
  :host {
    display: block;
  }
</style>  

`}class l extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},assetType:{type:String},assetId:{type:String},disabledSections:{type:Array},activeSection:{type:Object}}}constructor(){super(),this.render=n.bind(this),this.visible=!1,this.assetType="",this.assetId="",this.disabledSections=[],this.activeSection={}}getPageSections(){let t=`/${this.assetType}/${this.assetId}`,e=[{id:"all",text:"All Info",href:t}];"work"==this.assetType&&e.push({id:"records",text:"Records"},{id:"overview",text:"Overview"},{id:"authors",text:"Authors"}),"individual"==this.assetType&&e.push({id:"about",text:"About"},{id:"publications",text:"Publications"});let i=0;for(let s of e)s.href||(s.href=`${t}/${s.id}`),s.disabled=this.disabledSections.includes(s.id),s.index=i,i++;return e}_hidePageSection(t){return 0!=this.activeSection.index&&t!=this.activeSection.id}_setActiveSection(t,e=2){let i=this.getPageSections();if(this.activeSection=i[0],t.length>=e+1)for(let s of i)if(s.id==t[e]){this.activeSection=s;break}}}customElements.define("rp-utils-landing",l);i(90),i(93),i(92),i(104),i(105),i(97),i(58),i(94),i(106);function d(){return s.b`

<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-primary);
    padding: 30px 60px;
  }
  .hero .title {

  }
  .hero .authors {
    color: var(--tcolor-primary20);
    margin: 0 15%;
}
.hero .type {
  color: var(--tcolor-primary10);
  text-transform: uppercase;
  font-size: var(--font-size-small);
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
  .pub-links {
    list-style: none;
    padding-left: 0;
  }
  .pub-links li {
    display: flex;
    align-items: center;
  }
  .pub-links iron-icon {
    transform: rotate(-90deg);
    width: 25px;
    height: 25px;
    min-width: 25px;
    min-height: 25px;
    color: var(--tcolor-secondary);
    font-weight: var(--font-weight-bold);
  }
  #overview .venue {
    text-transform: capitalize;
  }
  #authors .name {
    font-weight: var(--font-weight-bold);
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
    <div class="hero">
      <div class="title mb-0"> <h2 class="text-secondary h1 bold mb-0 text-center">${this.work.label}</h2></div>
      <div class="authors"><p class="mb-2 mt-1 text-center">${this.authors.map((t,e)=>s.b`
        <span>${t.nameFirst} ${t.nameLast}</span>${e+1<this.authors.length?s.b`<span>, </span>`:s.b``}
      `)}</p></div>
      <div class="type text-center">${this.workType}</div>
    </div>
    <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.getPageSections()}"
                current-link="${this.activeSection.index}">
    </rp-link-list>
    <div class="sections">

      <section id="records" class="bg-light mt-3" ?hidden="${this._hidePageSection("records")}">
        <h1 class="weight-regular mt-0">Publication Records</h1>
        <h2>Full Text</h2>
        ${this.fullTextLinks?s.b`
          <ul class="pub-links">
            ${this.fullTextLinks.map(t=>s.b`
            <li><iron-icon icon="hardware:keyboard-arrow-down"></iron-icon><a href="${t.url}">${t.label}</a></li>
            `)}
          </ul>
        `:s.b`<div>No known fulltext links exist.</div>`}
        ${this.isOwnWork?s.b`
          <h2>Citation Data & Metrics</h2>
          <ul class="pub-links">
            <li><iron-icon icon="hardware:keyboard-arrow-down"></iron-icon><a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a></li>
          </ul>
        `:s.b``}
     </section>

     <section id="overview" class="bg-light mt-3" ?hidden="${this._hidePageSection("overview")}">
        <h1 class="weight-regular mt-0">Overview</h1>
        ${this.work.abstract?s.b`
          <h2>Abstract</h2>
          <div>${this.work.abstract}</div>
        `:s.b``}
        ${this.publishedArray.length>0?s.b`
          <h2>Published</h2>
          <div class="flex align-items-center">${this.publishedArray.map((t,e)=>s.b`
            <span class="${t.class}">${t.text}</span>${e+1<this.publishedArray.length?s.b`<span class="list-dot mx-2"></span>`:s.b``}
          `)}</div>
        `:s.b``}

        ${this.subjects.length>0?s.b`
          <h2>Subjects</h2>
          <div>
          ${this.subjects.map(t=>s.b`
            <rp-badge size="lg">${t.label}</rp-badge>
          `)}
          </div>
        `:s.b``}

     </section>

     <section id="authors" class="bg-light mt-3" ?hidden="${this._hidePageSection("authors")}">
        <h1 class="weight-regular mt-0">${APP_CONFIG.theme.universityName} Authors</h1>
        <div ?hidden="${this._hideStatusSection("loading","universityAuthorsStatus")}" class="flex align-items-center justify-content-center">
          <div class="loading1">loading</div>
        </div>
        <div ?hidden="${this._hideStatusSection("error","universityAuthorsStatus")}" class="flex align-items-center justify-content-center">
          <rp-alert>Error loading authors.</rp-alert>
        </div>
        <div class="data" ?hidden="${this._hideStatusSection("loaded","universityAuthorsStatus")}">
          ${this.universityAuthors.map(t=>s.b`
            <rp-person-preview
              name="${t.label}"
              href="${t.href}"
              title="${t.title}"
              text-width="${this.peopleWidth}"
              class="my-3">
            </rp-person-preview>
          `)}
        </div>
        ${this.hasOtherAuthors?s.b`
          <h1 class="weight-regular">Other Authors</h1>
          ${this.authors.filter(t=>t.isOtherUniversity).map(t=>s.b`
            <div><span class="name">${t.nameLast}, ${t.nameFirst}</span></div>
        `)}
        `:s.b``}
     </section>

    </div>

  </div>


</div>

`}customElements.define("rp-page-individual",class extends l{static get properties(){return{individual:{type:Object},individualStatus:{type:String},publicationOverviewStatus:{type:String},publicationOverview:{type:Object},hasMultiplePubTypes:{type:Boolean},retrievedPublications:{type:Object},totalPublications:{type:Number},isOwnProfile:{type:Boolean}}}constructor(){super(),this.render=a.bind(this),this._injectModel("PersonModel","AppStateModel"),this.assetType="individual",this._resetEleProps(),this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){let e=!0;if(await this.updateComplete,!this.visible)return;let i=t.location.path;i.length>=2&&(this.assetId==i[1]&&(e=!1),this.assetId=i[1],this.PersonModel.individualId=this.assetId);this.getPageSections();this.assetId&&(this._setActiveSection(i),e&&(this._resetEleProps(),await Promise.all([this._doMainQuery(this.assetId),this._doPubOverviewQuery(this.assetId)]),this.isOwnProfile=this._isOwnProfile()))}updated(t){t.has("assetId")&&this.assetId&&this.shadowRoot.getElementById("hero").shuffle()}_resetEleProps(){this.individual={},this.individualStatus="loading",this.retrievedPublications={},this.totalPublications=0,this.isOwnProfile=!1,this.publicationOverview={},this.hasMultiplePubTypes=!1,this.publicationOverviewStatus="loading"}async _loadPubs(t,e=!0){let i=this.publicationOverview[t].displayedOffset;i<10?i=10:e||(i-=10),this.publicationOverview[t].displayedOffset=e?i+10:i,await this._doPubQuery(this.publicationOverview[t],i=i)}async _doMainQuery(t){let e=await this.PersonModel.getIndividual(t);this.individualStatus=e.state,"loaded"==e.state&&(this.individual=e.payload,APP_CONFIG.verbose&&console.log(e))}async _doPubOverviewQuery(t){let e=await this.PersonModel.getPubOverview(t);if("loaded"!=e.state)return;APP_CONFIG.verbose&&console.log("pub overview:",e);let i=0,s={};for(let t of this.PersonModel.getPublicationTypes()){let o=e.payload.aggregations.facets["@type"][t.es];o&&(i+=o,s[t.id]={...t,ct:o,displayedOffset:0,dataStatus:"loading"})}this.hasMultiplePubTypes=Object.keys(s).length>1;for(let t in s)s[t].displayedOffset=this.hasMultiplePubTypes?5:10;this.totalPublications=i,this.publicationOverview=s,Object.values(s).map(t=>this._doPubQuery(t))}async _doPubQuery(t,e=0){let i=await this.PersonModel.getPublications(this.assetId,t,e);this.publicationOverview[t.id].dataStatus=i.request.state,"loaded"==i.request.state&&(APP_CONFIG.verbose&&console.log(t.id+" pubs:",i),this.retrievedPublications[t.id]=i.masterStore,this.requestUpdate())}_isOwnProfile(){try{if(APP_CONFIG.user.username.toLowerCase().split("@")[0]===this.assetId.toLowerCase())return!0}catch(t){}return!1}getPubsByYear(t){let e=[];if(!this.publicationOverview[t]||!this.retrievedPublications[t])return e;let i=this.hasMultiplePubTypes?5:10,s=this.publicationOverview[t].displayedOffset;s<i&&(s=i);let o=this.retrievedPublications[t].slice(0,s),r={},a=[];for(let t of o){if(!t.publicationDate)continue;let e=new Date(t.publicationDate).getFullYear();a.includes(e)||(a.push(e),r[e]=[]),r[e].push(t)}a.sort((t,e)=>e-t);for(let t of a)e.push({year:t,pubs:r[t]});return e}getIndividualTitles(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.title?Array.isArray(this.individual.hasContactInfo.title)?this.individual.hasContactInfo.title:[this.individual.hasContactInfo.title]:[]}getEmailAddresses(){return this.individual&&this.individual.hasContactInfo&&this.individual.hasContactInfo.hasEmail?Array.isArray(this.individual.hasContactInfo.hasEmail)?this.individual.hasContactInfo.hasEmail.map(t=>t.email):[this.individual.hasContactInfo.hasEmail.email]:[]}getWebsites(){let t=[];return this.individual?(this.individual.orcidId&&t.push({text:this.individual.orcidId["@id"],href:this.individual.orcidId["@id"],icon:"/images/orcid_16x16.png"}),this.individual.scopusId&&t.push({text:"Scopus",href:"https://www.scopus.com/authid/detail.uri?authorId="+this.individual.scopusId}),t):t}getPubExports(){return[{text:"RIS",subtext:"(imports to MIV, Zotero, Mendeley)",href:"/api/miv/"+this.assetId}]}formatSubjectsObject(t){let e=[];for(let i in t){let s={subject:i,count:t[i],label:i},o=i.split(" ");o[0].startsWith("0")&&!isNaN(o[0])&&(s.label=o.slice(1).join(" ")),e.push(s)}return e.sort((function(t,e){return e.count-t.count})),e}});i(91);function c(){return s.b`

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

`}customElements.define("rp-page-work",class extends l{static get properties(){return{work:{type:Object},workStatus:{type:String},grpsWithLinks:{type:String},authorPath:{type:String},authors:{type:Array},universityAuthors:{type:Array},universityAuthorsStatus:{type:String},hasOtherAuthors:{tyoe:Boolean},workType:{type:String},publishedArray:{type:Array},subjects:{type:Array},fullTextLinks:{type:Array},isOwnWork:{type:Boolean},peopleWidth:{type:Number}}}constructor(){super(),this.render=d.bind(this),this._injectModel("AppStateModel","WorkModel"),this.assetType="work",this.work={},this.workStatus="loading",this.authorPath="/individual/",this.grpsWithLinks=["vivo:FacultyMember"],this.authors=[],this.hasOtherAuthors=!1,this.workType="",this.publishedArray=[],this.subjects=[],this.fullTextLinks=[],this.isOwnWork=!1,this.setPeopleWidth(window.innerWidth),this._handleResize=this._handleResize.bind(this),this.universityAuthors=[],this.universityAuthorsStatus="loading",this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}updated(t){t.has("visible")&&this.visible&&requestAnimationFrame(()=>this._handleResize())}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){window.removeEventListener("resize",this._handleResize),super.disconnectedCallback()}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let e=t.location.path;1!=e.length?(this.assetId=e[1],this.assetId&&(this._setActiveSection(e),await Promise.all([this._doMainQuery(this.assetId)]))):this.AppStateModel.setLocation("/works")}async _doMainQuery(t){let e=await this.WorkModel.getWork(t);this.workStatus=e.state,"loaded"==e.state&&(this.work=e.payload,APP_CONFIG.verbose&&console.log("work payload:",e),this.authors=this._parseAuthors(),this.workType=this._getWorkType(),this.publishedArray=this._getPublishedArray(),this.subjects=this._getSubjects(),this.fullTextLinks=this._getFullTextLinks(),this._doAuthorQuery(t,this.authors))}async _doAuthorQuery(t,e){this.universityAuthors=[];let i=e.filter(t=>0==t.isOtherUniversity).map(t=>t.apiEndpoint),s=await this.WorkModel.getAuthors(t,i);if(this.universityAuthorsStatus=s.state,"loaded"==s.state){APP_CONFIG.verbose&&console.log("university authors:",s),i=Array.isArray(s.payload)?s.payload:[s.payload];for(let t of i)t.hasContactInfo&&t.hasContactInfo.title&&(Array.isArray(t.hasContactInfo.title)?t.title=t.hasContactInfo.title.join(", "):t.title=t.hasContactInfo.title),t.href=this.authorPath+t["@id"].replace(this.WorkModel.service.jsonContext+":","");this.universityAuthors=i}}setPeopleWidth(t){let e=250;e=.8*(t-30)-82-40,this.peopleWidth=Math.floor(e)}_handleResize(){if(!this.visible)return;let t=window.innerWidth;this.setPeopleWidth(t)}_hideStatusSection(t,e="workStatus"){return t!=this[e]}_getFullTextLinks(){let t=[];if(!this.work)return t;try{let e=this.work.hasContactInfo.hasURL;Array.isArray(e)||(e=[e]);for(let i of e)i.label&&i.url&&t.push(i)}catch(t){}return t}_getWorkType(){try{for(let t of this.work["@type"])if("bibo:AcademicArticle"==t)return"Academic Article"}catch(t){}return""}_parseAuthors(){let t=[];if(this.isOwnWork=!1,this.hasOtherAuthors=!1,this.work.Authorship&&"object"==typeof this.work.Authorship){let e=this.work.Authorship;Array.isArray(e)||(e=[e]);for(let i of e)if(i.hasName){i.nameFirst=i.hasName.givenName,i.nameLast=i.hasName.familyName,i["vivo:rank"]||(i["vivo:rank"]=1/0),i.href="",i.isOtherUniversity=!0;try{"object"!=typeof i.identifiers||Array.isArray(i.identifiers)||(i.identifiers=[i.identifiers]);for(let t of i.identifiers)if(this.grpsWithLinks.includes(t["@type"])){let e=t["@id"].replace(this.WorkModel.service.jsonContext+":","");i.apiEndpoint=t["@id"];try{APP_CONFIG.user.username.toLowerCase().split("@")[0]===e.toLowerCase()&&(this.isOwnWork=!0)}catch(t){}i.href=this.authorPath+e,i.isOtherUniversity=!1}}catch(t){console.warn("Unable to construct author href.")}i.isOtherUniversity&&(this.hasOtherAuthors=!0),t.push(i)}t.sort((function(t,e){return t["vivo:rank"]-e["vivo:rank"]}))}return t}_getPublishedArray(){let t=[];if(!this.work)return t;try{let e=this.work.hasPublicationVenue["@id"];e&&"academic article"==this.workType.toLowerCase()&&(e=e.replace(APP_CONFIG.data.jsonldContext+":journal","").replace(/-/g," "),e+=" (journal)"),e&&t.push({text:e,class:"venue"})}catch(t){}try{let e="";t.length>0&&(this.work.volume&&(e+="Volume "+this.work.volume),this.work.issue&&(e&&(e+=", "),e+="Issue "+this.work.issue),e&&t.push({text:e,class:"release"}))}catch(t){}try{let e=new Date(this.work.publicationDate),i={year:"numeric",month:"long",day:"numeric"};e=new Intl.DateTimeFormat("en-US",i).format(e),e&&t.push({text:e,class:"pub-date"})}catch(t){}return t}_getSubjects(){let t=[];if(!this.work)return t;try{let e=this.work.hasSubjectArea;Array.isArray(e)||(e=[e]);for(let i of e)i.label&&t.push(i)}catch(t){}return t}});class h extends(Mixin(s.a).with(LitCorkUtils)){static get properties(){return{visible:{type:Boolean},organizationId:{type:String},organization:{type:Object},organizationStatus:{type:String}}}constructor(){super(),this.render=c.bind(this),this._injectModel("AppStateModel","OrganizationModel"),this.visible=!1,this.organizationId="",this.organization={},this.organizationStatus="loading",this.AppStateModel.get().then(t=>this._onAppStateUpdate(t))}async _onAppStateUpdate(t){requestAnimationFrame(()=>this.doUpdate(t))}async doUpdate(t){if(await this.updateComplete,!this.visible)return;let e=t.location.path;1!=e.length?(this.organizationId=e[1],this.organizationId&&(this.shadowRoot.getElementById("hero").shuffle(),await Promise.all([this._doMainQuery(this.organizationId)]))):this.AppStateModel.setLocation("/organizations")}async _doMainQuery(t){let e=await this.OrganizationModel.getOrganization(t);this.organizationStatus=e.state,"loaded"==e.state&&(this.organization=e.payload,APP_CONFIG.verbose&&console.log("organization payload:",e))}_hideStatusSection(t,e="organizationStatus"){return t!=this[e]}}customElements.define("rp-page-organization",h)},90:function(t,e,i){"use strict";var s=i(2),o=i(33);i(35);function r(){return s.b`
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
  `}class a extends s.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=r.bind(this),this.themeColor="danger"}_constructClasses(){let t={};return t[this.themeColor]=!0,t}}customElements.define("rp-alert",a)},91:function(t,e,i){"use strict";var s=i(2),o=i(35);i(93);function r(){return s.b`
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
    <div class="text-container" style="${Object(o.a)({"max-width":this.textWidth})}">
      <a class="name" href="${this.href}" ?disabled="${!this.href}">${this.name}</a>
      <small>${this.title}</small>
      <small class="badges">${this.badges.map(t=>this._renderBadge(t))}</small>
    </div>
  </div>

  `}i(92);class a extends s.a{static get properties(){return{name:{type:String},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=r.bind(this),this.badges=[],this.textWidth=window.innerWidth.toString()-70+"px"}_renderBadge(t){if("string"==typeof t)return s.b`<rp-badge>${t}</rp-badge>`;if("object"==typeof t){let e=t.text;if(!e)return s.b``;let i=t.href;return i?s.b`<rp-badge href="${i}">${e}</rp-badge>`:s.b`<rp-badge>${e}</rp-badge>`}return s.b``}}customElements.define("rp-person-preview",a)},92:function(t,e,i){"use strict";var s=i(2),o=i(33);function r(){return s.b`
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
`}class a extends s.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=r.bind(this)}constructClasses(){let t={};if(this.size&&(t["size-"+this.size]=!0),this.colorSequence){t["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let e=[...this.parentNode.childNodes].filter(t=>t.tagName===this.tagName);if(e.length>0){t["color-"+(e.indexOf(this)%this.maxColor).toString()]=!0}else t["color-0"]=!0}return t}_renderBadge(){return this.href?s.b`<a href=${this.href}>${this._renderSpan()}</a>`:s.b`${this._renderSpan()}`}_renderSpan(){return s.b`<span class=${Object(o.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",a)},93:function(t,e,i){"use strict";var s=i(2),o=i(33),r=i(35);function a(){return s.b`
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
  `}class n extends s.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=a.bind(this)}constructClasses(){let t={};return this.size&&"undefined"!=this.size&&(t["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(t.photo=!0),t}constructStyles(){let t={};return this.src&&"undefined"!=this.src&&(t["background-image"]=`url(${this.src})`),t}renderFace(){if(!this.src||"undefined"==this.src)return s.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",n)},94:function(t,e,i){"use strict";var s=i(2),o=i(33);function r(){return s.b`
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
    ${this.links.map((t,e)=>this._renderLink(t,e))}
  </div>
  `}class a extends s.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=r.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(t,e,i){"direction"==t&&i&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[i.toLowerCase()[0]]=!0),super.attributeChangedCallback(t,e,i)}_renderLink(t,e){let i="",r="",a=!1,n={link:!0};return"string"==typeof t?i=t:"object"==typeof t&&(i=t.text,t.disabled&&(a=!0),t.href&&(r=t.href)),e==this.currentLink&&(n.selected=!0),this.hasHeaderLink&&0==e&&(n["link-header"]=!0),n.disabled=a,r?s.b`<a link="${e}" class="${Object(o.a)(n)}" href="${r}">${i}</a>`:i?s.b`<div @click="${this.handleClick}" link="${e}" class=${Object(o.a)(n)}>${i}</div>`:void 0}handleClick(t){let e=parseInt(t.target.getAttribute("link"));e==this.currentLink||t.target.classList.contains("disabled")||(this.currentLink=e,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",a)},97:function(t,e,i){"use strict";var s=i(2),o=i(33),r=i(35);function a(){return s.b`
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