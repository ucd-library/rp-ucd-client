import { html } from 'lit';
import styles from "../../styles/site.html"
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";

import '@ucd-lib/theme-elements/ucdlib/ucdlib-icons/ucdlib-icons.js';
import '@ucd-lib/theme-elements/ucdlib/ucdlib-icons/academic.js';


import "../../components/a-z"
import "../../components/accordian"
import "../../components/alert"
import "../../components/avatar"
import "../../components/badge"
import "../../components/citation"
import "../../components/download-list"
import "../../components/dropdown"
import "../../components/hero-image"
import "../../components/icon"
import "../../components/rp-factoid"
import "../../components/link-list"
import "../../components/modal"
import "../../components/organization-preview"
import "../../components/pagination"
import "../../components/person-preview"
import "../../components/quick-search"
import "../../components/search"
import "../../components/edit-profile"
import "../../components/work-preview"
import "../../components/subject-preview"
import "../../components/grant-preview"
import "../../components/rp-toast-message"

import ToastMessage from "../../components/rp-toast-message"



export default function render() {
return html`

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
    background-color: var(--ae-tcolor-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  
  ${styles}
  ${layoutCss}
</style>

<h1 class="text-primary">Site Components</h1>
<p>These don't connect to the main bus, and they don't inherit any shared styles (other than site variables).
You control them with attributes, and build more complicated (bus-connected) elements with them.
</p>
<section>
<h2>A-Z list</h2>
<p>Attach a listener to be notified when the selected letter changes i.e.<br /><code>@changed-letter=${(e) => console.log(e.target.selectedLetter)}</code></p>
<rp-a-z  selected-letter="all" @changed-letter=${(e) => console.log(e.target.selectedLetter)}></rp-a-z>
<p>Use <code>hide-all</code> to not render the All link</p>
<rp-a-z hide-all=true selected-letter="f" disabled-letters=${JSON.stringify(['g','q', 'S'])}></rp-a-z>
</section>

<section id="ToastMessage">
  <h2>Toaster Message</h2>
  <p>One toast message will pop up automatically with just adding <code>rp-toast-message</code></p>
  <rp-toast-message></rp-toast-message> 
  <p>You can add a button for toast message by <code>@click</code> with function <code>addToast</code></p>
  <button @click="${this.addToast}">Add Toast Message</button>
</section>



<section>
  <h2>Accordians for FAQ section</h2>
  <p>Use the <code>title</code> attribute to specify the link text. The expandable content is an unnamed slot.</p>
  <rp-accordian title="How often do you update the data in the registry?">${'Hello world! '.repeat(40)}</rp-accordian>
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
  .choices=${[{text: "RIS", subtext: "(imports to MIV, Zotero, Mendeley)", href:"/api/miv/ramram"}, {text: 'BiBTex', subtext: "(imports to LaTEX)"}, {text: 'Plain Text'}, {text: 'HTML'}]}
  @new-selection="${e => console.log(e.target.choices[e.target.selected])}"
  >
</rp-download-list>
</div>
</section>

<section>
<h2>Dropdown</h2>
<p>A stylized dropdown. Listen with <code>@new-selection="\${e => console.log(e.target.choices[e.target.chosen])}</code></p>
<rp-dropdown choices='["People",
                       {"text": "Subjects"},
                       {"text": "Organizations"},
                       {"text": "Works"}]'
             @new-selection="${e => console.log(e.target.choices[e.target.chosen])}">
</rp-dropdown>
</section>

<section>
  <H2> Factoids </H2>
  
  <p>Factoids are small components of a statistic,title,icon and link, that are
  typically used to display a brief datum, with a link to more information.  The
  factoids are an encompassing div tag with some bracket decoration.</p>
  
  <p>Factoids can be generated using only the CSS styling included in the ucdlib-theme, but they can be pretty complicated.</p>
  <rp-factoid href="http://library.ucdavis.edu" statistic="40" title="Cats">
    <span style="font-size:100px;">⑁</span>
  </rp-factoid>

  <div class="l-3col layout-columns" style="margin-top:25px">
  
      <rp-factoid href="http://library.ucdavis.edu" statistic="4,000,000" title="Books">
        <span><ucdlib-icon slot="ucdIcon" style="margin:auto;width:135px;height:135px;"  icon="ucdlib:book"  size=24></ucdlib-icon></span>
      </rp-factoid>
  
      <rp-factoid href="http://library.ucdavis.edu" statistic="800" title="Scorpus IDs">
        <span><ucdlib-icon style="margin:auto;width:135px;height:135px;"  icon="academic:scopus" ></ucdlib-icon></span>
      </rp-factoid>
  
      <rp-factoid href="http://library.ucdavis.edu" statistic="5000" title="Seats">
        <span><ucdlib-icon style="margin:auto;width:135px;height:135px;"  icon="academic:stackoverflow" ></ucdlib-icon></span>
      </rp-factoid>
  
    </div> 
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
<p>Can add text bubbles to <code>icon</code> by applying <code>has-text</code> that signals that this icon has text added:</p>
<rp-icon icon="iron-face" circle-bg is-link has-text><div slot="tooltip">Sample 1</div></rp-icon>
<rp-icon icon="iron-link" circle-bg is-link has-text theme-color='secondary' size="lg"> <div slot="tooltip">Sample 2</div> </rp-icon>
<p>Use the <code>icon</code> attribute to specify your icon. Use the prefix "iron-" to call an iron icon:</p>
<rp-icon icon="iron-link" circle-bg></rp-icon>
<rp-icon icon="iron-arrow-forward" circle-bg></rp-icon>
<p>The <code>theme-color</code> attribute will adjust the color, <code>is-link</code> will apply link styles, and <code>size</code> will change the size<p>
<rp-icon icon="iron-face" circle-bg is-link></rp-icon>
<rp-icon icon="iron-link" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<p>Preface the <code>icon</code> attribute with "rp-" to use one of the custom icons</p>
<rp-icon icon="rp-search" circle-bg is-link theme-color='secondary' size="lg"></rp-icon>
<rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
<p>Can also be used in different sizes for different types of information representation.</p>
<rp-icon icon="iron-description" theme-color='work' circle-bg sizeIcon="extralgIconWorks" size="extralg"></rp-icon>
<rp-icon icon="rp-subject" circle-bg theme-color='subject' sizeIconSVG="extralgSVGIcon" size="extralg"></rp-icon>
<rp-avatar></rp-avatar>
<p>Temporary addition of the call to ucdlib icon through rp background.</p>
<rp-icon ucdlib iconset="academic" icon="ucdlib-pubmed" theme-color='work' circle-bg sizeIcon="extralgIconWorks" size="extralg"></rp-icon>

</section>

<section>
<h2>Link List</h2>
<p>Displays a list of "links". Attach a listener to be notified when the active link changes i.e.<br /><code>@changed-link=\${(e) => console.log(e.target.links[e.target.currentLink])}</code></p>
<div class="linklist1">
  <rp-link-list links='["Hello World", "Hello Again!", "And One More Time"]'
                @changed-link=${(e) => console.log(e.target.links[e.target.currentLink])}>
  </rp-link-list>
</div>

<p>Switch to horizontal view by using <code>direction=h</code></p>
<div class="subnav">
  <rp-link-list direction="horizontal"
                @changed-link="${(e) => console.log(e.target.links[e.target.currentLink])}"
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
  <h2>Modal</h2>
  <p>Launches a full-window modal. Use <code>content-title</code> attribute and a slot to customize content.
  <code>show</code>, <code>hide</code>, and <code>toggle</code> methods control visibility.</p>
  <p @click="${e => this.shadowRoot.getElementById('modal').toggle()}">Click me to launch modal</p>
  <rp-modal content-title='Edit "Publications"' id="modal">
    Publication information is managed via the <a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a>. Any changes made there will be reflected on your Aggie Experts profile.
  </rp-modal>

</section> 

<section>
<h2>Pagination</h2>
<p>Attach a listener to be notified when the page changes i.e.<br /><code>@changed-page=\${(e) => console.log(e.target.currentPage)}</code></p>
<rp-pagination max-page=8 @changed-page=${(e) => console.log(e.target.currentPage)}></rp-pagination>
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
<rp-quick-search @new-search="${(e) => console.log(e.target.inputValue)}"></rp-quick-search>
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
    <rp-search style="width:75%" @new-search="${(e) => console.log(e.target.searchObject)}"></rp-search>
  </div>
</div>
</section>

<section>
  <h1>Edit "About"</h1>
  <rp-profile-about-editor></rp-profile-about-editor>
</section> 

<section>
<h1>Asset Preview (Work)</h1>
<p>Card for the Work asset type - used in browse and search pages.</p>
${this.exampleWorks.map((work) => html`
  <rp-work-preview .data="${work}"></rp-work-preview>
`)}

</section>

<section>
<h1>Asset Preview (Subjects)</h1>
<p>Card for the Subject asset type - used in browse and search pages.</p>
${this.exampleSubjects.map((subject) => html`
  <rp-subject-preview .data="${subject}"></rp-subject-preview>
`)}

</section>

<section>
<h1>Asset Preview (Grants)</h1>
<p>Card for the Grant asset type - used in browse and search pages.</p>
${this.exampleGrants.map((grant) => html`
  <rp-grant-preview .data="${grant}"></rp-grant-preview>
`)}

</section>

<section>
<h1>Asset Preview (Organization)</h1>
<p>Card for the Organization asset type - used in browse and search pages.</p>
${this.exampleOrgs.map((org) => html`
  <rp-organization-preview .data="${org}"></rp-organization-preview>
`)}

</section>
`;}
