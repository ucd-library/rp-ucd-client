(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(e,t,i){"use strict";var r=i(2),a=i(33);function o(){return r.b`
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
  <div class="container ${Object(a.a)(this.constructClasses())}" ?hidden="${!this.titleText}">
    <div id="container-title" @click="${this.toggle}">
      <iron-icon icon="arrow-drop-down" ?rotated="${!this.expanded}"></iron-icon>
      <span id="title">${this.titleText}</span>
    </div>
    <div id="content" ?hidden="${!this.expanded}">
      <slot></slot>
    </div>
  </div>
  `}class n extends r.a{static get properties(){return{titleText:{type:String,attribute:"title-text"},expanded:{type:Boolean,reflect:!0}}}constructor(){super(),this.render=o.bind(this),this.expanded=!1}constructClasses(){return{}}toggle(){this.expanded=!this.expanded}}customElements.define("rp-accordian",n)},101:function(e,t,i){"use strict";var r=i(2);function a(){return r.b`
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
    ${this.azlist.map(e=>this._renderAz(e))}
  </div>
  `}class o extends r.a{static get properties(){return{hideAll:{type:Boolean,attribute:"hide-all"},disabledLetters:{type:Array},disabledLettersFmt:{type:Array},selectedLetter:{type:String,attribute:"selected-letter"}}}constructor(){super(),this.render=a.bind(this),this.azlist=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],this.disabledLetters=[],this.disabledLettersFmt=[],this.selectedLetter="All",this._changedLetter=new CustomEvent("changed-letter",{detail:{message:"A new letter has been selected."}})}updated(e){e.has("disabledLetters")&&(this.disabledLettersFmt=this.disabledLetters.map(e=>e.toUpperCase()))}_renderAz(e){let t="";return this.selectedLetter&&this.selectedLetter.toLowerCase()===e.toLowerCase()&&(t="selected"),r.b`<div @click="${this.handleClick}"
                     ?disabled="${this.disabledLettersFmt.includes(e)}"
                     class="letter ${t}"
                     letter="${e}">${e}</div>`}handleClick(e){let t=e.target.getAttribute("letter").toLowerCase();t==this.selectedLetter||e.target.hasAttribute("disabled")||(this.selectedLetter=t,this.dispatchEvent(this._changedLetter))}firstUpdated(e){this.hideAll||(this.azlist.unshift("All"),this.requestUpdate())}}customElements.define("rp-a-z",o)},102:function(e,t,i){"use strict";var r=i(2);function a(){return r.b`
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

  `}class o extends r.a{static get properties(){return{data:{type:Object},href:{type:String},organizationPath:{type:String},jsonldContext:{type:String}}}constructor(){super(),this.organizationPath="/organization/",this.jsonldContext=APP_CONFIG.data.jsonldContext,this.render=a.bind(this)}_renderNameLink(){let e="";if(this.href)e=this.href;else try{let t=this.data["@id"].split(this.jsonldContext+":g-")[1];e=this.organizationPath+t}catch(e){console.warn("Unable to construct org href.")}return r.b`<a class="name" href="${e}" ?disabled="${!e}">${this.data.label}</a>`}}customElements.define("rp-organization-preview",o)},103:function(e,t,i){"use strict";var r=i(2);function a(){return r.b`
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

  `}class o extends r.a{static get properties(){return{data:{type:Object},href:{type:String},workPath:{type:String},grpsWithLinks:{type:String},authorPath:{type:String},jsonldContext:{type:String}}}constructor(){super(),this.workPath="/work/",this.authorPath="/individual/",this.grpsWithLinks=["vivo:FacultyMember"],this.jsonldContext=APP_CONFIG.data.jsonldContext,this.render=a.bind(this)}_renderTitleLink(){let e="";if(this.href)e=this.href;else try{let t=this.data["@id"].split(this.jsonldContext+":publication")[1];e=this.workPath+t}catch(e){console.warn("Unable to construct work href.")}return r.b`<a class="title" href="${e}" ?disabled="${!e}">${this.data.label}</a>`}_renderAuthors(){let e=[];if(this.data.Authorship&&"object"==typeof this.data.Authorship){let t=this.data.Authorship;Array.isArray(t)||(t=[t]);for(let i of t)if(i.hasName){i.nameFirst=i.hasName.givenName,i.nameLast=i.hasName.familyName,i["vivo:rank"]||(i["vivo:rank"]=1/0),i.href="";try{"object"!=typeof i.identifiers||Array.isArray(i.identifiers)||(i.identifiers=[i.identifiers]);for(let e of i.identifiers)this.grpsWithLinks.includes(e["@type"])&&(i.href=this.authorPath+e["@id"].replace(this.jsonldContext+":",""))}catch(e){console.warn("Unable to construct author href.")}e.push(i)}e.sort((function(e,t){return e["vivo:rank"]-t["vivo:rank"]}))}return r.b`<div class="authors">${e.map(e=>r.b`<a class="author" href="${e.href}" ?disabled="${!e.href}">${e.nameLast}, ${e.nameFirst}</a>; `)}</div>`}}customElements.define("rp-work-preview",o)},104:function(e,t,i){"use strict";var r=i(2);i(33);function a(){return r.b`
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
  ${"rp"==this.citationStyle?r.b`
    <a href="${this.href}">${this.title}</a>
    <span class="authors">
      ${this.authors.map((e,t)=>r.b`
      <span class="author">${e.text}</span>${t+1<this.authors.length?r.b`<span>, </span>`:r.b`<span>.</span>`}
      `)}
    </span>
    ${this.venue?r.b`
      <span class="venue">${this.venue}.</span>
    `:r.b``}
    ${this.venueLocation?r.b`
      <span class="venue-location">${this.venueLocation}.</span>
    `:r.b``}
  `:r.b``}
  </div>
  `}class o extends r.a{static get properties(){return{data:{type:Object},title:{type:String},href:{type:String},venue:{type:String},authors:{type:Array},citationStyle:{type:String,attribute:"citation-style"}}}constructor(){super(),this.render=a.bind(this),this.citationStyle="rp",this.data={},this.title="",this.href="",this.venue="",this.venueLocation="",this.authors=[]}updated(e){e.has("data")&&this.parseData()}parseData(){if(0==Object.keys(this.data).length)return;let e=this.data;this.title=e.label,this.href=this._constructHref(e["@id"]),this.venue=this._getVenue(e.hasPublicationVenue),this.venueLocation=this._getVenueLocation(e),this.authors=this._constructAuthors(e.Authorship)}_constructHref(e){let t="";try{t="/work/"+e.replace(APP_CONFIG.data.jsonldContext+":publication","")}catch(e){}return t}_getVenue(e){return e&&e["@id"]?e["@id"].replace(APP_CONFIG.data.jsonldContext+":journal","").replace(/-/g," "):""}_constructAuthors(e){if(!e)return[];Array.isArray(e)||(e=[e]);let t=[];for(let i of e)i.hasName&&i.hasName.familyName&&i.hasName.givenName&&(i["vivo:rank"]||(i["vivo:rank"]=1/0),i.text=`${i.hasName.familyName} ${i.hasName.givenName.split("").filter(e=>e===e.toUpperCase()&&" "!=e).join("")}`,t.push(i));return t.sort((function(e,t){return e["vivo:rank"]-t["vivo:rank"]})),t}_getVenueLocation(e){let t="";return e.volume&&(t+=e.volume),e.pageStart&&(t&&(t+=":"),t+=e.pageStart),e.pageEnd&&(e.pageStart&&(t+="-"),t+=e.pageEnd),t}}customElements.define("rp-citation",o)},105:function(e,t,i){"use strict";var r=i(2),a=(i(62),i(35)),o=i(33);function n(){return r.b`
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
        class="${Object(o.a)({"icon-dl":!0,button:!0,opened:this.opened})}"
        id="main-toggle"
        aria-pressed="${this.opened}"
        @click="${this._onMainClick}"
        style="${Object(a.a)({width:this.size,height:this.size,minHeight:this.size,minWidth:this.size})}">
        <iron-icon icon="file-download"></iron-icon>
      </div>

      <iron-dropdown id="dropdown" scroll-action="cancel" vertical-align="top" vertical-offset="${this.pixels}" horizontal-align="${this.dropOnLeft?"left":"right"}">
        <div slot="dropdown-content" id="dropdown-content">
          <div class="title">${this.title}</div>
          <ul>${this.choices.map((e,t)=>this._renderChoices(e,t))}</ul>
        </div>
    </iron-dropdown>
      
  </div>
  `}class s extends r.a{static get properties(){return{pixels:{type:Number},opened:{type:Boolean},title:{type:String},choices:{type:Array},dropOnLeft:{Type:Boolean},selected:{type:Number}}}constructor(){super(),this.render=n.bind(this),this.pixels=35,this.size=String(this.pixels)+"px",this.opened=!1,this.choices=[],this.title="Downloads",this.dropOnLeft=!1,this.selected=0,this._newSelection=new CustomEvent("new-selection",{detail:{message:"A new selection."}})}updated(e){e.has("pixels")&&(this.size=String(this.pixels)+"px")}firstUpdated(e){this.shadowRoot.getElementById("dropdown").addEventListener("opened-changed",e=>{this.opened=e.target.opened})}_renderChoices(e,t){let i=r.b`
        <div class="choice-content">
            <div class="icon-dl"><iron-icon icon="file-download"></iron-icon></div>
            <div class="text-box">
                <span class="text">${e.text}</span>
                ${e.subtext?r.b`<span class="subtext">${e.subtext}</span>`:r.b``}
            </div>
        </div>`;return e.href?r.b`
            <li class="choice button">
                <a href="${e.href}">${i}</a>
            </li>
          `:r.b`
        <li class="choice button" @click="${e=>this._onItemClick(t)}">${i}</li>
      `}_onMainClick(){this.opened?this.opened=!1:(this.dropOnLeft=this.offsetLeft/window.innerWidth<.5,this.opened=!0,this.shadowRoot.getElementById("dropdown").open())}_onItemClick(e){this.selected=e,this.shadowRoot.getElementById("dropdown").close(),this.dispatchEvent(this._newSelection)}}customElements.define("rp-download-list",s)},106:function(e,t,i){"use strict";var r=i(2);i(35),i(33);function a(){return r.b`
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
    <div class="film" @click="${e=>this.hide()}"></div>
    <div class="box-content">
        <div class="header">
            <h2>${this.contentTitle}</h2>
            <div class="header-right"><iron-icon icon="close" @click="${e=>this.hide()}"></iron-icon></div>
        </div>
        <hr>
        <div class="body-content"><slot></slot></div>
        <hr>
        <div class="footer">
            <div class="button" @click="${e=>this.hide()}">${this.dismissText}</div>
        </div>
    </div>
      
  </div>
  `}class o extends r.a{static get properties(){return{visible:{type:Boolean},contentTitle:{type:String,attribute:"content-title"},dismissText:{type:String,attribute:"dismiss-text"}}}constructor(){super(),this.render=a.bind(this),this.visible=!1,this.contentTitle="",this.dismissText="Okay"}updated(e){e.has("visible")}show(){this.visible=!0}hide(){this.visible=!1}toggle(){this.visible=!this.visible}}customElements.define("rp-modal",o)},110:function(e,t,i){"use strict";i.r(t),i.d(t,"AppPageComponents",(function(){return s}));var r=i(2),a=i(34),o=i.n(a);i(101),i(100),i(90),i(93),i(92),i(104),i(105),i(61),i(97),i(60),i(94),i(98),i(106),i(102),i(96),i(91),i(63),i(99),i(95),i(103);function n(){return r.b`

<style>
  :host {
    display: block;
    margin: 15px;
  }
  section {
    padding: 15px;
    margin-bottom: 15px;
  }
  section.hero {
    margin-bottom: 0;
  }
  rp-hero-image {
    margin-bottom: 15px;
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
  .people-vertical {
    padding-left: 20px;
    padding-right: 20px;
  }
  .people-vertical rp-person-preview {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .people-columns {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 500px) {
    .people-columns {
      display: block;
    }
  }
  .subnav {
    font-size: 18px;
    padding: 20px;
  }
  .linklist1 {
    display: flex;
    align-items: flex-start;
    margin-left: 15px;
  }
  rp-accordian {
    margin-bottom: 22px;
  }
  rp-citation {
    margin-bottom: 10px;
  }
  .quick-search-container {
    display: flex;
    justify-content: flex-end;
  }
  .search-container {
    width: 75%;
    display: flex;
    justify-content: center;
  }
  .search-blue {
    background-color: var(--tcolor-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  ${o.a}
</style>

<h1 class="text-primary">Site Components</h1>
<p>These don't connect to the main bus, and they don't inherit any shared styles (other than site variables).
You control them with attributes, and build more complicated (bus-connected) elements with them.
</p>
<section>
<h2>A-Z list</h2>
<p>Attach a listener to be notified when the selected letter changes i.e.<br /><code>@changed-letter=${e=>console.log(e.target.selectedLetter)}</code></p>
<rp-a-z  selected-letter="all" @changed-letter=${e=>console.log(e.target.selectedLetter)}></rp-a-z>
<p>Use <code>hide-all</code> to not render the All link</p>
<rp-a-z hide-all=true selected-letter="f" disabled-letters=${JSON.stringify(["g","q","S"])}></rp-a-z>
</section>

<section>
<h2>Accordians for FAQ section</h2>
<p>Use the <code>title</code> attribute to specify the link text. The expandable content is an unnamed slot.</p>
<rp-accordian title="How often do you update the data in the registry?">${"Hello world! ".repeat(40)}</rp-accordian>
<rp-accordian></rp-accordian>
<rp-accordian expanded title="Use the expanded attribute or toggle method to control expansion">
This is open on page load because I'm using the expanded attribute.
</rp-accordian>
</section>

<section>
<h2>Basic Alert</h2>
<p>Not part of the initial design specs, but needed some way to handle errors. Uses slot.</p>
<rp-alert>Uh oh! Something went horribly wrong (not that that ever happens). Can't load content!</rp-alert>
</section>

<section>
<h2>Avatars</h2>
<p>Use the size attribute to adjust Kimmy-defined sizes.</p>
<rp-avatar size="lg"></rp-avatar>
<rp-avatar></rp-avatar>
<rp-avatar size="sm"></rp-avatar>
<p>Use the src attribute to use a photo.<p>
<rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"></rp-avatar>
<rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"></rp-avatar>
</section>

<section>
<h2>Badges</h2>
<small>
  <rp-badge>I'm a Badge!</rp-badge>
  <rp-badge>Me Too!</rp-badge>
  <rp-badge>Colors</rp-badge>
  <rp-badge>Are a Sequence</rp-badge>
  <rp-badge>If part of</rp-badge>
  <rp-badge>the same parent node</rp-badge>
  <rp-badge>Color starts over!</rp-badge>
  <rp-badge>Yellow again...</rp-badge>
</small>
<p>Badges inherit font size <rp-badge>16px fontsize</rp-badge>
but you can also increase padding with the size attribute <rp-badge size="lg">size lg</rp-badge>
</p>
<p>You can manually change the color with the color-sequence attribute
<rp-badge color-sequence="5">color-sequence = 5</rp-badge>
</p>
<p>If you pass in an href attribute, <rp-badge href="https://www.google.com">the badges</rp-badge> <rp-badge href="https://www.library.ucdavis.edu">become links</rp-badge>
and have hover styles.
</p>
</section>

<section>
<h2>Citations</h2>
<p>Simply renders bibliographic info in some standard format. What format that is, I need to find out.</p>
<rp-citation title="Some Witty Eye-catching Title: The Effect of X on Z"
             href="some link"
             journal="Nature"
             pages="12:123-456">
</rp-citation>
<rp-citation title="Examining the Effects of Dogs on Cats"
             journal="Behavioral Science" pages="4:9-13">
</rp-citation>
</section>

<section>
<h2>Download List</h2>
<p>Presents a list of download options as a dropdown opened from an icon. 
Pass an href property to an object within the <code>.choices</code> array property to make the option an <code>a</code> element. 
Otherwise, a <code>new-selection</code> event will fire when an option is clicked.</p>
<div>
<rp-download-list 
  title="Download Publications List"
  .choices=${[{text:"RIS",subtext:"(imports to MIV, Zotero, Mendeley)",href:"/api/miv/ramram"},{text:"BiBTex",subtext:"(imports to LaTEX)"},{text:"Plain Text"},{text:"HTML"}]}
  @new-selection="${e=>console.log(e.target.choices[e.target.selected])}"
  >
</rp-download-list>
</div>
</section>

<section>
<h2>Dropdown</h2>
<p>A stylized dropdown. Listen with <code>@new-selection="\${e => console.log(e.target.choices[e.target.chosen])}</code></p>
<rp-dropdown choices='["People",
                       {"text": "Organizations"},
                       {"text": "Works"}]'
             @new-selection="${e=>console.log(e.target.choices[e.target.chosen])}">
</rp-dropdown>
</section>

<section class="hero">
<h2>Hero Image</h2>
<p>Hero image will randomly pull a background-photo from the path declared in <code>asset-folder</code> attribute.
Running <code>ele.shuffle()</code> will load a new image.
However, specifying a <code>src</code> attribute will override the random asset pull functionality and just load the src bg photo.
There are three slots to populate the hero content - "top", "main", and "bottom".
<p>
</section>
<rp-hero-image>
  <div slot="top" class="herotop">
    <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
    <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
  </div>
  <div slot="main" class="heromain">
    <rp-avatar size="lg" src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"></rp-avatar>
    <h2 class="name text-secondary h1 bold mb-0 text-center">Brantley, Peter</h2>
    <p class="text-light h3 mb-2 mt-1 text-center">Director of Online Strategy</p>
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

<section>
<h2>Icons</h2>
<p>Use the <code>icon</code> attribute to specify your icon. Use the prefix "iron-" to call an iron icon:</p>
<rp-icon icon="iron-link" circle-bg></rp-icon>
<rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>
<p>The <code>theme-color</code> attribute will adjust the color, <code>is-link</code> will apply link styles, and <code>size</code> will change the size<p>
<rp-icon icon="iron-face" circle-bg is-link></rp-icon>
<rp-icon icon="iron-link" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<p>Preface the <code>icon</code> attribute with "rp-" to use one of the custom icons</p>
<rp-icon icon="rp-search" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
</section>

<section>
<h2>Link List</h2>
<p>Displays a list of "links". Attach a listener to be notified when the active link changes i.e.<br /><code>@changed-link=\${(e) => console.log(e.target.links[e.target.currentLink])}</code></p>
<div class="linklist1">
  <rp-link-list links='["Hello World", "Hello Again!", "And One More Time"]'
                @changed-link=${e=>console.log(e.target.links[e.target.currentLink])}>
  </rp-link-list>
</div>

<p>Switch to horizontal view by using <code>direction=h</code></p>
<div class="subnav">
  <rp-link-list direction="horizontal"
                @changed-link="${e=>console.log(e.target.links[e.target.currentLink])}"
                links='[{"text": "All Info"},
                        {"text": "About"},
                        {"text": "Publications"},
                        {"text": "Research"},
                        {"text": "Contact"},
                        {"text": "Disabled Link", "disabled": true} ]'>
  </rp-link-list>
</div>
</section>

<section>
<h2>Link List with Counts</h2>
<p>Link list that will prepend counts. Listen with <code>@link-click="\${(e) => console.log(e.target.Clickedlink)}"</code></p>
<p>Use the <code>view-all-links</code> and <code>header</code> attributes to enable these displays:</p>
<rp-link-list-counts links='[{"text": "Academic Articles", "count": 3080},
                             {"text": "Books", "count": 8},
                             {"text": "Chapters", "count": 52},
                             {"text": "Conference Papers", "count": 451},
                             {"text": "Datasets", "count": 70},
                             {"text": "Journals", "count": 960},
                             {"text": "Reports", "count": 4}]'
                      view-all-link='{"text": "View All Works"}'
                      header='{"text": "Academic Works", "count": 8413}'
                      @link-click="${e=>console.log(e.target.Clickedlink)}"
                      >
</rp-link-list-counts>
</section>

<section>
  <h2>Modal</h2>
  <p>Launches a full-window modal. Use <code>content-title</code> attribute and a slot to customize content.
  <code>show</code>, <code>hide</code>, and <code>toggle</code> methods control visibility.</p>
  <p @click="${e=>this.shadowRoot.getElementById("modal").toggle()}">Click me to launch modal</p>
  <rp-modal content-title='Edit "Publications"' id="modal">
    Publication information is managed via the <a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a>. Any changes made there will be reflected on your Aggie Experts profile.
  </rp-modal>

</section> 

<section>
<h2>Pagination</h2>
<p>Attach a listener to be notified when the page changes i.e.<br /><code>@changed-page=\${(e) => console.log(e.target.currentPage)}</code></p>
<rp-pagination max-page=8 @changed-page=${e=>console.log(e.target.currentPage)}></rp-pagination>
<p>Use the <code>max-page</code>, <code>min-page</code>, and <code>current-page</code> attributes to control the display.</p>
<rp-pagination max-page=15 current-page="7"></rp-pagination>
<p>Use the <code>pages-per-side</code> attribute to show more pages on either side of the current page<p>
<rp-pagination max-page=20 current-page=10 pages-per-side=3></rp-pagination>
</section>

<section>
<h2>Person Preview</h2>
<p>You can arrange them how you see fit.</p><p>Vertically, like in search/browse page:</p>
<div class="people-vertical">
  <rp-person-preview
    name="Quinn Hart"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/quinn-hart/"
    title="Digital Applications Manager"
    badges='["foo-bar"]'>
  </rp-person-preview>
  <hr class="dotted light"/>
  <rp-person-preview
    name="Peter Brantly"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/peter-brantley/"
    title="Director of Online Strategy"
    badges='[{"text" : "Im a link!", "href" : "https://google.com"}]'>
  </rp-person-preview>
  <hr class="dotted light"/>
  <rp-person-preview
    name="Man of Mystery"
    title="Has no avatar-src or href attributes">
  </rp-person-preview>
  <hr class="dotted light"/>
</div>
<p>or in columns like on the homepage:</p>
<div class="people-columns">
  <rp-person-preview
    name="Quinn Hart"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/quinn-280x350-c-center.jpg"
    href="https://www.library.ucdavis.edu/author/quinn-hart/"
    avatar-size='sm'
    title="Digital Applications Manager">
  </rp-person-preview>
  <rp-person-preview
    name="Peter Brantly"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/02/pb_asilomar_2475-Peter-Brantley-280x350-c-center.jpg"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/peter-brantley/"
    title="Director of Online Strategy">
  </rp-person-preview>
  <rp-person-preview
    name="Justin Merz"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/03/headshot_cropped-280x350-c-center.png"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/justin-merz/"
    title="Research Support Engineer">
  </rp-person-preview>
  <rp-person-preview
    name="Kimmy Hescock"
    avatar-src="https://www.library.ucdavis.edu/wp-content/uploads/2017/07/Kimmy2018-01-001-280x350-c-center.jpg"
    avatar-size='sm'
    href="https://www.library.ucdavis.edu/author/kimmy-hescock/"
    title="User Experience Designer">
  </rp-person-preview>
</div>
<p>Because of the general awfullness of the css overflow properties, you have to set the textWidth property in a resize event.</p>
</section>

<section>
<h2>Quick Search</h2>
<p> Use <code>@new-search="\${(e) => console.log(e.target.inputValue)}"</code> to listen for search.</p>
<div class="quick-search-container">
<rp-quick-search @new-search="${e=>console.log(e.target.inputValue)}"></rp-quick-search>
</div>

<p>Use <code>input-value</code> and <code>opened</code> attributes to change initial render state.</p>
<div class="quick-search-container">
<rp-quick-search input-value="A pre-loaded search" opened></rp-quick-search>
</div>
</section>

<section>
<h2>Main Search Widget</h2>
<p> Use <code>@new-search="\${(e) => console.log(e.target.searchObject)}"</code> to listen for search.</p>
<div class="search-blue">
  <div class="search-container">
    <rp-search style="width:75%" @new-search="${e=>console.log(e.target.searchObject)}"></rp-search>
  </div>
</div>

</section>

<section>
<h1>View All</h1>
<p>Dead simple element that displays a View All link. Use the <code>text</code> attribute to customize, and <code>justify</code> to control horizontal alignment.</p>
<rp-view-all justify="start"></rp-view-all>
<rp-view-all text="View All People"></rp-view-all>
<rp-view-all text="Add an href to make it a normal link" href="https://google.com"></rp-view-all>
</section>

<section>
<h1>Asset Preview (Work)</h1>
<p>Card for the Work asset type - used in browse and search pages.</p>
${this.exampleWorks.map(e=>r.b`
  <rp-work-preview .data="${e}"></rp-work-preview>
`)}

</section>

<section>
<h1>Asset Preview (Organization)</h1>
<p>Card for the Organization asset type - used in browse and search pages.</p>
${this.exampleOrgs.map(e=>r.b`
  <rp-organization-preview .data="${e}"></rp-organization-preview>
`)}

</section>
`}class s extends(Mixin(r.a).with(LitCorkUtils)){static get properties(){return{exampleWorks:{type:Array},exampleOrgs:{type:Array},visible:{type:Boolean}}}constructor(){super(),this._injectModel("CollectionModel","AppStateModel"),this.visible=!1,this.exampleWorks=[],this.exampleOrgs=[],this.render=n.bind(this),this.AppStateModel.get().then(e=>this._onAppStateUpdate(e))}async _onAppStateUpdate(e){requestAnimationFrame(()=>this.doUpdate(e))}async doUpdate(e){await this.updateComplete,this.visible&&await Promise.all([this.getWorks(),this.getOrgs()])}async getWorks(){let e=await this.CollectionModel.query({filters:{"@type":{type:"keyword",op:"and",value:["ucdrp:publication"]}}});"loaded"==e.state&&(this.exampleWorks=e.payload.results)}async getOrgs(){let e=await this.CollectionModel.query({filters:{"@type":{type:"keyword",op:"and",value:["ucdrp:organization"]}}});"loaded"==e.state&&(this.exampleOrgs=e.payload.results,console.log(this.exampleOrgs))}}customElements.define("app-page-components",s)},90:function(e,t,i){"use strict";var r=i(2),a=i(33);i(35);function o(){return r.b`
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
  <div class="container ${Object(a.a)(this._constructClasses())}">
    <iron-icon icon="warning"></iron-icon>
    <div id="content"><slot></slot></div>
  </div>
  `}class n extends r.a{static get properties(){return{themeColor:{type:String,attribute:"theme-color"}}}constructor(){super(),this.render=o.bind(this),this.themeColor="danger"}_constructClasses(){let e={};return e[this.themeColor]=!0,e}}customElements.define("rp-alert",n)},91:function(e,t,i){"use strict";var r=i(2),a=i(35);i(93);function o(){return r.b`
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
    <div class="text-container" style="${Object(a.a)({"max-width":this.textWidth})}">
      <a class="name" href="${this._parsedData.href}" ?disabled="${!this._parsedData.href}">${this._parsedData.name}</a>
      <small>${this._parsedData.title}</small>
      <small class="badges">${this.badges.map(e=>this._renderBadge(e))}</small>
    </div>
  </div>

  `}i(92);class n extends r.a{static get properties(){return{data:{type:Object},name:{type:String},_parsedData:{type:Object},href:{type:String},title:{type:String},badges:{type:Array},avatarSize:{type:String,attribute:"avatar-size"},avatarSrc:{type:String,attribute:"avatar-src"},textWidth:{type:String,attribute:"text-width"}}}constructor(){super(),this.render=o.bind(this),this.badges=[],this.name="",this._name="",this.href="",this.title="",this.avatarSize="",this.avatarSrc="",this.data={},this._parsedData={name:"",href:"",title:"",avatarSize:"",avatarSrc:""},this.textWidth=window.innerWidth.toString()-70+"px"}updated(e){e.has("name")&&(this._parsedData.name=this.name,this.requestUpdate()),e.has("href")&&(this._parsedData.href=this.href,this.requestUpdate()),e.has("title")&&(this._parsedData.title=this.title,this.requestUpdate()),e.has("avatarSize")&&(this._parsedData.avatarSize=this.avatarSize,this.requestUpdate()),e.has("avatarSrc")&&(this._parsedData.avatarSrc=this.avatarSrc,this.requestUpdate()),e.has("data")&&Object.keys(this.data).includes("@id")&&this._parseData()}_parseData(){this._parsedData.name=this._parseName(),this._parsedData.title=this._parseTitle(),this._parsedData.href=this._parseHref()}_parseName(){if(this.name)return this.name;let e=this.data.label;return Array.isArray(e)?e.sort((e,t)=>e.length-t.length)[0]:e}_parseTitle(){if(this.title)return this.title;try{let e="";return e=Array.isArray(this.data.hasContactInfo)?[...this.data.hasContactInfo].sort((e,t)=>(e.rank?e.rank:100)-(t.rank?t.rank:100))[0].title:this.data.hasContactInfo.title,Array.isArray(e)?e.join(", "):e||""}catch(e){return""}}_parseHref(){if(this.href)return this.href;try{return"/individual/"+this.data["@id"].replace(APP_CONFIG.data.jsonldContext+":","")}catch(e){return""}}_renderBadge(e){if("string"==typeof e)return r.b`<rp-badge>${e}</rp-badge>`;if("object"==typeof e){let t=e.text;if(!t)return r.b``;let i=e.href;return i?r.b`<rp-badge href="${i}">${t}</rp-badge>`:r.b`<rp-badge>${t}</rp-badge>`}return r.b``}}customElements.define("rp-person-preview",n)},92:function(e,t,i){"use strict";var r=i(2),a=i(33);function o(){return r.b`
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
`}class n extends r.a{static get properties(){return{size:{type:String},href:{type:String},colorSequence:{type:Number,attribute:"color-sequence"}}}constructor(){super(),this.maxColor=6,this.render=o.bind(this)}constructClasses(){let e={};if(this.size&&(e["size-"+this.size]=!0),this.colorSequence){e["color-"+Math.floor(this.colorSequence).toString()]=!0}else{let t=[...this.parentNode.childNodes].filter(e=>e.tagName===this.tagName);if(t.length>0){e["color-"+(t.indexOf(this)%this.maxColor).toString()]=!0}else e["color-0"]=!0}return e}_renderBadge(){return this.href?r.b`<a href=${this.href}>${this._renderSpan()}</a>`:r.b`${this._renderSpan()}`}_renderSpan(){return r.b`<span class=${Object(a.a)(this.constructClasses())}>
      <slot></slot>
    </span>`}}customElements.define("rp-badge",n)},93:function(e,t,i){"use strict";var r=i(2),a=i(33),o=i(35);function n(){return r.b`
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
  <div class="circle ${Object(a.a)(this.constructClasses())}" style="${Object(o.a)(this.constructStyles())}">
    ${this.renderFace()}
  </div>
  `}class s extends r.a{static get properties(){return{size:{type:String},src:{type:String}}}constructor(){super(),this.render=n.bind(this)}constructClasses(){let e={};return this.size&&"undefined"!=this.size&&(e["size-"+this.size]=!0),this.src&&"undefined"!=this.src&&(e.photo=!0),e}constructStyles(){let e={};return this.src&&"undefined"!=this.src&&(e["background-image"]=`url(${this.src})`),e}renderFace(){if(!this.src||"undefined"==this.src)return r.b`<iron-icon icon='face'></iron-icon>`}}customElements.define("rp-avatar",s)},94:function(e,t,i){"use strict";var r=i(2),a=i(33);function o(){return r.b`
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
  <div class=${Object(a.a)(this._containerClasses)}>
    ${this.links.map((e,t)=>this._renderLink(e,t))}
  </div>
  `}class n extends r.a{static get properties(){return{links:{type:Array},currentLink:{converter:parseInt,attribute:"current-link",reflect:!0},direction:{type:String,attribute:"direction"},hasHeaderLink:{type:Boolean,attribute:"has-header-link"}}}constructor(){super(),this.render=o.bind(this),this.direction="v",this.currentLink=0,this._containerClasses={container:!0},this._containerClasses[this.direction]=!0,this._changedLink=new CustomEvent("changed-link",{detail:{message:"A new link has been selected."}})}attributeChangedCallback(e,t,i){"direction"==e&&i&&(this._containerClasses.v&&delete this._containerClasses.v,this._containerClasses[i.toLowerCase()[0]]=!0),super.attributeChangedCallback(e,t,i)}_renderLink(e,t){let i="",o="",n=!1,s={link:!0};return"string"==typeof e?i=e:"object"==typeof e&&(i=e.text,e.disabled&&(n=!0),e.href&&(o=e.href)),t==this.currentLink&&(s.selected=!0),this.hasHeaderLink&&0==t&&(s["link-header"]=!0),s.disabled=n,o?r.b`<a link="${t}" class="${Object(a.a)(s)}" href="${o}">${i}</a>`:i?r.b`<div @click="${this.handleClick}" link="${t}" class=${Object(a.a)(s)}>${i}</div>`:void 0}handleClick(e){let t=parseInt(e.target.getAttribute("link"));t==this.currentLink||e.target.classList.contains("disabled")||(this.currentLink=t,this.dispatchEvent(this._changedLink))}}customElements.define("rp-link-list",n)},95:function(e,t,i){"use strict";var r=i(2),a=i(33);i(35);function o(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      color: var(--tcolor-text);
      transition: .3s;
    }
    .container.start {
      justify-content: flex-start;
    }
    .container.center {
      justify-content: center;
    }
    .container:hover {
      color: var(--tcolor-link-hover-text) !important;
    }
    .container:hover iron-icon, .container:hover a{
      color: var(--tcolor-link-hover-text) !important;
    }
    a {
      text-decoration: none;
      color: var(--tcolor-text);
      transition: .3s;
    }

    iron-icon {
      color: var(--tcolor-secondary);
      transition: .3s;
      width: 28px;
      min-width: 28px;
      height: 28px;
    }
    .view-all {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
    }
    .text {
      font-weight: var(--font-weight-bold);
    }
  </style>
  <div class="container ${Object(a.a)(this.constructClasses())}">
    ${this.href?r.b`
      <a class="view-all" href="${this.href}">${this._renderInnerContent()}</a>
      `:r.b`
      <div class="view-all">${this._renderInnerContent()}</div>
      `}

  </div>
  `}class n extends r.a{static get properties(){return{text:{type:String},href:{type:String},justify:{type:String}}}constructor(){super(),this.render=o.bind(this),this.text="View All",this.href=""}constructClasses(){let e={};return this.justify&&(e[this.justify]=!0),e}_renderInnerContent(){return r.b`<span class="text">${this.text}</span><iron-icon icon="av:play-arrow"></iron-icon>`}}customElements.define("rp-view-all",n)},96:function(e,t,i){"use strict";var r=i(2),a=i(33);function o(){return r.b`
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
  `}class n extends r.a{static get properties(){return{currentPage:{converter:parseInt,attribute:"current-page",reflect:!0},maxPage:{converter:parseInt,attribute:"max-page",reflect:!0},minPage:{converter:parseInt,attribute:"min-page",reflect:!0},pagesPerSide:{converter:parseInt,attribute:"pages-per-side"}}}constructor(){super(),this.render=o.bind(this),this.pagesPerSide=1,this.minPage=1,this.currentPage=this.minPage,this.maxPage=this.currentPage,this._changedPage=new CustomEvent("changed-page",{detail:{message:"A new page has been selected."}})}_hasValidLogic(){return!(this.maxPage<this.currentPage||this.maxPage<this.minPage)&&!(this.minPage>this.currentPage)}_renderEdge(e){if(!this._hasValidLogic())return r.b``;if("left"==e){if(this.currentPage-this.minPage>this.pagesPerSide+1)return r.b`<div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div><div class="ellipsis">...</div>`}else if("right"==e&&this.maxPage-this.currentPage>this.pagesPerSide+1)return r.b`<div class="ellipsis">...</div><div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`}_renderCenter(){if(!this._hasValidLogic())return r.b`<div class="${Object(a.a)({page:!0,selected:!0})}" page="${this.currentPage}">${this.currentPage}</div>`;let e=[{page:this.currentPage,selected:!0}],t=2*this.pagesPerSide,i=this;return o(this.pagesPerSide),o(t),e[0].page-this.minPage==1&&e.unshift({page:this.minPage,selected:!1}),this.maxPage-e.slice(-1)[0].page==1&&e.push({page:this.maxPage,selected:!1}),r.b`${e.map(e=>r.b`<div @click="${this.handleClick}"
                                              class="${Object(a.a)({page:!0,selected:e.selected})}"
                                              page="${e.page}">${e.page}</div>`)}`;function o(r){let a=["left","right"];for(let o of a){if("left"===o)for(let a=0;a<r;a++){let r=e[0].page;r>i.minPage&&(e.unshift({page:r-1,selected:!1}),t-=1)}if("right"===o)for(let a=0;a<r;a++){let r=e.slice(-1)[0].page;r<i.maxPage&&(e.push({page:r+1,selected:!1}),t-=1)}}}}handleClick(e){let t=parseInt(e.target.getAttribute("page"));t!=this.currentPage&&(this.currentPage=t,this.dispatchEvent(this._changedPage))}}customElements.define("rp-pagination",n)},97:function(e,t,i){"use strict";var r=i(2),a=i(33),o=i(35);function n(){return r.b`
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
  `}class s extends r.a{static get properties(){return{src:{type:String},assetFolder:{type:String,attribute:"asset-folder"},assetMax:{type:parseInt,attribute:"asset-max"},assetPick:{type:parseInt,attribute:"asset-pick",reflect:!0}}}constructor(){super(),this.render=n.bind(this),this.assetFolder="/images/profile-features/",this.assetMax=29,this.shuffle()}constructClasses(){return{}}constructStyles(){let e={};return this.src?e["background-image"]=`var(--tcolor-hero-film), url(${this.src})`:(this.assetPick<0&&(this.assetPick=1),this.assetPick>this.assetMax&&(this.assetPick=this.assetMax),e["background-image"]=`var(--tcolor-hero-film), url(${this.assetFolder+this.assetPick+".jpg"})`),e}shuffle(){this.src||(this.assetPick=Math.floor(Math.random()*this.assetMax+1))}}customElements.define("rp-hero-image",s)},98:function(e,t,i){"use strict";var r=i(2);function a(){return r.b`
  <style>
    :host {
      display: block;
    }
    .container {
      display: block;
    }
    .row {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
      margin-bottom: 18px;
    }
    .row.header {
      color: var(--tcolor-text);
      font-size: var(--font-size-h2);
      margin-bottom: 34px;
    }
    .row.view-all {
      padding-top: 10px;
    }
    .count {
      color: var(--tcolor-text);
      font-weight: var(--font-weight-bold);
      text-align: right;
      width: calc(30% - 10px);
      padding-right: 10px;
    }
    .link-container {
      width: 70%;
    }
    .link {
      cursor: pointer;
      text-decoration: underline;
      color: var(--tcolor-link-text);
    }
    .link:hover {
      color: var(--tcolor-link-hover-text);
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
  <div class="container">
    ${this._renderHeader()}
    ${this.links.map((e,t)=>this._renderLink(e,t))}
    ${this._renderViewAll()}
  </div>
  `}i(33),i(95);class o extends r.a{static get properties(){return{links:{type:Array},viewAllLink:{type:Object,attribute:"view-all-link"},header:{type:Object,attribute:"header"}}}constructor(){super(),this.render=a.bind(this),this.links=[],this._linkClick=new CustomEvent("link-click",{detail:{message:"A new link has been clicked."}})}_renderHeader(){return this.header&&this.header.text?r.b`<div class="row header">
                <div class="count">${this.header.count}</div>
                <div class="link-container"><span>${this.header.text}</span></div>
                </div>`:r.b``}_renderLink(e,t){return e.text?e.href?r.b`<div class="row">
      <div class="count">${e.count}</div>
      <div class="link-container">
        <a link-index="${t}" class="link" href="${e.href}">${e.text}</a>
      </div>
    </div>`:r.b`<div class="row">
      <div class="count">${e.count}</div>
      <div class="link-container">
        <span @click="${this.handleClick}" link-index="${t}" class="link">${e.text}</span>
      </div>
    </div>`:r.b``}_renderViewAll(){return this.viewAllLink?(this.viewAllLink.text||(this.viewAllLink.text="View All"),this.viewAllLink.href?r.b`<div class="row view-all"><div class="count"></div><rp-view-all href="${this.viewAllLink.href}" text="${this.viewAllLink.text}"></rp-view-all></div>`:r.b`<div class="row view-all"><div class="count"></div><rp-view-all @click="${this.handleClick}" text="${this.viewAllLink.text}"></rp-view-all></div>`):r.b``}handleClick(e){e.target.classList.contains("link")?this.Clickedlink=this.links[parseInt(e.target.getAttribute("link-index"))]:this.Clickedlink=this.viewAllLink,this.dispatchEvent(this._linkClick)}}customElements.define("rp-link-list-counts",o)},99:function(e,t,i){"use strict";var r=i(2),a=i(33);i(35);function o(){return r.b`
  <style>
    :host {
      display: inline-block;
      background-color: var(--tcolor-light);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
    #input {
      flex-grow: 1;
      height: 44px;
      border: none;
      background-color: var(--tcolor-light);
      font-size: var(--font-size);
      padding-left: 10px;
    }
    #icon-container {
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 15px;
      padding-right: 15px;
      background-color: var(--tcolor-light);
    }
    input:focus {
      outline: none;
    }
    .line {
      background-color: var(--tcolor-primary10);
      width: 1px;
      height: 34px;
    }
  </style>
  <div class="container ${Object(a.a)(this._constructClasses())}">
    <rp-dropdown .choices="${this.getDropdownOptions()}"
                 to-upper-case
                 chosen="${this.activeFacet}"
                 @new-selection="${e=>this.activeFacet=e.target.chosen}">
    </rp-dropdown>
    <div class="line"></div>
    <input type="text"
          .value="${this.inputValue}"
           placeholder="${this.placeholder}"
           @input="${e=>this.inputValue=e.target.value}"
           @keyup="${this._handleKeyup}"
           id="input">
    <div id="icon-container">
      <rp-icon @click="${this.doSearch}" icon="rp-search" ?is-link="${this.inputValue}"><rp-icon>
    </div>

  </div>
  `}i(61),i(60);class n extends r.a{static get properties(){return{facets:{type:Array},includeAllOption:{type:Boolean,attribute:"include-all-option"},allOption:{type:Object},inputValue:{type:String,attribute:"input-value",reflect:!0},placeholder:{type:String},activeFacet:{type:Number,attribute:"active-facet",reflect:!0}}}constructor(){super(),this.render=o.bind(this),this.facets=[{text:"PEOPLE"},{text:"ORGANIZATIONS"},{text:"WORKS"}],this.placeholder="Search the registry",this.activeFacet=0,this.inputValue="",this.includeAllOption=!1,this.allOption={text:"ALL",id:"all"},this._newSearch=new CustomEvent("new-search",{detail:{message:"A new search has been triggered"}})}updated(e){(e.has("inputValue")||e.has("activeFacet"))&&(this.searchObject={search:this.inputValue,facet:this.getDropdownOptions()[this.activeFacet]})}_constructClasses(){return{}}getDropdownOptions(){return this.includeAllOption?[this.allOption,...this.facets]:this.facets}doSearch(){this.inputValue&&this.dispatchEvent(this._newSearch)}_handleKeyup(e){13===e.keyCode&&(e.preventDefault(),this.doSearch())}}customElements.define("rp-search",n)}}]);