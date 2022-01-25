import { html } from 'lit';
import { renderHTML } from '../../../src/lib/santize-html.js';
import styles from "../../styles/site.html"
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";
import base from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import baseCss from "@ucd-lib/theme-sass/2_base_class/_index.css.js";
import utility from "@ucd-lib/theme-sass/6_utility/_index.css.js";


export default function render() {
return html`
<style>
  ${styles}
  ${layoutCss}
  ${base}
  ${utility}
  ${baseCss}
  :host {
    display: block;
  }
  .hero {
    background: url(/images/homepage-hero.jpg) no-repeat center center;
    background-size: cover;
    color: var(--ae-tcolor-light);
  }
  .hero .title-container {
    display: flex;
    padding: 0 20px 30px 20px;
    justify-content: center;
  }
  .hero img {
    height: auto;
    width: 100%;
    max-width: 350px;
    padding: 20px;
  }
  .hero .text {
    flex-grow: 1;
  }
  .hero .content {
    font-size: var(--ae-font-size);
    line-height: 23px;
  }
  .hero h2 {
    color: var(--ae-tcolor-secondary)
  }
  .search .container {
    padding: 30px 0;
  }
  rp-search {
    width: 100%;
  }
  .data .container {
    padding: 30px 0;
    flex-flow: row wrap;
  }
  .data .col-l {
    width: 100%;
  }
  .data .col-r {
    order: -1;
  }
  #people {
    padding-bottom: 20px;
  }
  .people-container {
    display: inline-grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  #works {
    padding-top: 20px;
  }
  .list-count .row.item {
    line-height: 2.5;
  }
  .view-all-row {
    width: 100%;
    justify-content: center;
  }
  #subjects {
    padding-bottom: 15px;
  }
  rp-loading {
    --rp-loading-color: var(--ae-tcolor-primary);
  }
  .data.loading rp-loading {
    height: 100vh;
  }
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  h2.title-fix {
    margin: 0;
    padding-top: 20px;
    font-weight: 600;
  }
  .import-icon{
    margin:auto;
    width:135px; 
    height:135px;
  }
  .section.rebrand{
    justify-content: center;
    align-items: center;
    min-width:200px;
    max-width:1000px;
    margin: 0 auto;
  }
  .section.rebrand .layout {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  .section.rebrand:nth-child(even) {
    background-color: #D7E5F0;
  }
  .heading--weighted-underline{
    text-align:center;
    margin: auto;
    width:65px;
  }
  hr{
    background-color: #ccc;
    border: none;
  }
  .center{
    justify-content:center;
    align-items: center;
    text-align: center;
    min-width:200px;
    max-width:800px;
    margin: 0 auto;
  }
  @media (min-width: 800px){
    .people-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .data .container {
      flex-flow: row nowrap;
    }
    .data .col-l {
      width: 30%;
      min-width: 30%;
    }
    .data .col-r {
      padding-left: 24px;
      order: unset;
    }
    .hero .title-container {
      padding: 50px 0;
    }
    .hero img {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
    }
    #works {
      padding-top: 0;
    }
    #subjects {
      padding-bottom: 15px;
    }
    .data.loading rp-loading {
      height: 590px;
    }
    .error {
      height: 590px;
    }
    .center{
      min-width:200px;
      max-width:800px;
    }
  }
  @media (max-width: 900px) {
    .section.rebrand .layout {
      flex-direction: column;
    }
  }
  @media (min-width: 480px) {
    .container{
      margin-right: auto;
      margin-left: auto;
    }
    rp-search {
      max-width: 500px;
    }
    .center{
      min-width:200px;
    }
  }
  @media (max-width: 480px) {
    .hero .title-container {
      display: block;
    }
    .center{
      min-width:200px;
    }
  }
  @media (max-width: 325px) {
    .container{
      margin-right: auto;
      margin-left: auto;
    }
    rp-search {
      max-width: 245px;
    }  
    .center{
      min-width:200px;
    }
  }
  @media (max-width: 250px) {
    .container{
      margin-right: auto;
      margin-left: auto;
    }
    rp-search {
      max-width: 185px;
    }  
    .center{
      min-width:200px;
    }
  }
  
</style>
<div class="hero">
  <div class="title-container">
    <!-- <img src="${this.theme.homeHeroImage}" alt=""> -->
    <div style="text-align: center; max-width: 600px">
      <h2 class="title-fix">${this.theme.homeHeroTitle}</h2>
      <div class="content">
        <div>${renderHTML(this.theme.homeHeroContentTop)}</div>
        <div>${renderHTML(this.theme.homeHeroContentBottom)}</div>
        <div style="margin-top: 50px;">
          <rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}" include-all-option></rp-search>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <div class="search bg-primary">
  <div class="container flex justify-content-center">
    <rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}" include-all-option></rp-search>
  </div>
</div> -->
<div class="data bg-light ${this.pageStatus}">
  <rp-loading ?hidden="${this._hideStatusSection('loading')}">Loading ${this.theme.siteTitle}</rp-loading>
  <div ?hidden="${this._hideStatusSection('error')}" class="error">
    <rp-alert>Error loading ${this.theme.siteTitle}. Try again later.</rp-alert>
  </div>
      <div class="section rebrand" ?hidden="${this._hideStatusSection('loaded')}">

      ${this.isLoggedIn ? html`
        <div class="l-4col">
          <rp-factoid class="l-first panel o-box" href="/people" statistic="${this.peopleTotal}" title="people" type="people">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-sunflower);"  icon="ucdlib:users"></ucdlib-icon></span>
          </rp-factoid>

          <rp-factoid class="l-second panel o-box" href="/works" statistic="${this.academicWorksTotal}" title="works" type="work">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-farmers-market);"  icon="ucdlib:book-open"></ucdlib-icon></span>
          </rp-factoid>

          <rp-factoid class="l-third panel o-box" href="/concepts" statistic="${this.subjectsTotal}" title="subjects" type="subject">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-rec-pool);"  icon="ucdlib:lightbulb"></ucdlib-icon></span>
          </rp-factoid>
        
          <rp-factoid class="l-fourth panel o-box"href="/grants" statistic="${this.grantsTotal}" title="grants"  type="grant">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-thiebaud-icing);"  icon="ucdlib:hand-holding-usd"></ucdlib-icon></span>
          </rp-factoid>
        </div>
        `:html`
          <div class="l-3col">
          <rp-factoid class="l-first panel o-box" href="/people" statistic="${this.peopleTotal}" title="people" type="people">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-sunflower);"  icon="ucdlib:users"></ucdlib-icon></span>
          </rp-factoid>

          <rp-factoid class="l-second panel o-box" href="/works" statistic="${this.academicWorksTotal}" title="works" type="work">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-farmers-market);"  icon="ucdlib:book-open"></ucdlib-icon></span>
          </rp-factoid>

          <rp-factoid class="l-third panel o-box" href="/concepts" statistic="${this.subjectsTotal}" title="subjects" type="subject">
            <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-rec-pool);"  icon="ucdlib:lightbulb"></ucdlib-icon></span>
          </rp-factoid>
        </div>
        
        `}
        <hr style=" margin-bottom:-15px; "/>
      </div>  
  <div ?hidden="${this._hideStatusSection('error')}" class="error">
    <rp-alert>Error loading ${this.theme.siteTitle}. Try again later.</rp-alert>
  </div>
    <div class="center">
      <div class="people" id="people">
        <h3 class="mt-0" style="text-align:center; margin-bottom:25px;color:#000000;">
          <span class="weight-regular">Recently Updated Profiles</span>
        </h3>
        <div class="people-container">
          ${this.people.map(person => html`
            <rp-person-preview
              .data="${person}"
              avatar-size='sm'
              text-width=${this.peopleWidth}
              home-display>
            </rp-person-preview>
            `)}
        </div>
        <div class="flex view-all-row">
          <a href="/people" class="view-all"><span>Browse All People</span><iron-icon icon="av:play-arrow" class="filled-arrow"></iron-icon></a>
        </div>
      </div>
    </div>
    <hr style="margin-left:175px;margin-right:175px;"/>
      <div class="center">
        <h3 style="text-align:center; margin-bottom:25px; color:#000000;">
          <span class="weight-regular">Recently Updated Subjects</span>
          <br />
        </h4>
        ${this.subjects.map((subject, key) => html`
          ${key %4 == 0 && key != 0 ? html`<br />`:html``}
          <rp-badge 
            title="${this.SubjectModel.getPreferredLabel(subject)}" 
            size="lg" 
            max-width="180" 
            text-width=${this.peopleWidth}
            class="my-1" 
            href="${this.SubjectModel.getLandingPage(subject)}">
            ${this.SubjectModel.getPreferredLabel(subject)}
          </rp-badge>
        `)}
        ${this.subjectsTotal > 10 ? html`
          <div class="flex view-all-row">
            <a href="/concepts" class="view-all"><span>Browse All Subjects</span><iron-icon icon="av:play-arrow" class="filled-arrow"></iron-icon></a>
          </div>        
        ` : html``}
      </div>
      <br />
    <!-- <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
      <div id="grants">
        <h2>
          <span class="bold mr-2">${this.grantsTotal}</span>
          <span class="weight-regular">Grants</span>
        </h2>
        ${this.grants.map(grant => html`
          <rp-badge 
            title="${this.GrantModel.getLabel(grant)}" 
            size="lg" 
            max-width="280" 
            class="my-1" 
            href="${this.GrantModel.getLandingPage(grant)}">
            ${this.GrantModel.getLabel(grant)}
          </rp-badge>
        `)}
        ${this.grantsTotal > 10 ? html`
          <rp-badge size="lg" class="my-1" max-width="280" ellipsis href="/grants"></rp-badge>
          ` : html``}
      </div>
      <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
    </div> -->
    
  </div>
</div>
 
`;}