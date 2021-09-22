import { html } from 'lit-element';
import { renderHTML } from '../../../src/lib/santize-html.js';
import styles from "../../styles/site.html"
import layoutCss from "../../../node_modules/@ucd-lib/theme-sass/5_layout/_index.css.js";


export default function render() {
return html`

<style>
  ${styles}
  ${layoutCss}
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
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 24px;
    grid-row-gap: 10px;
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
  }

  .import-icon{
    margin:auto;
    width:135px; 
    height:135px;
  }

  @media (min-width: 800px){
    .people-container {
      grid-template-columns: auto auto;
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
  }

  @media (min-width: 480px) and (max-width: 799px){
    /* .title-container {
      max-width: 550px; 
    } */
  }
  @media (min-width: 480px) {
    .container{
      margin-right: auto;
      margin-left: auto;
    }
    rp-search {
      max-width: 500px;
    }
  }
  @media (max-width: 480px) {
    .hero .title-container {
      display: block;
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

  }
  @media (max-width: 250px) {
    .container{
      margin-right: auto;
      margin-left: auto;
    }
    rp-search {
      max-width: 185px;
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
  <div class="container" ?hidden="${this._hideStatusSection('loaded')}">
    <div class="l-3col layout-columns" style="margin-top:25px">
    
      <rp-factoid href="/people" statistic="${this.peopleTotal}" title="people">
        <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-sunflower);"  icon="ucdlib:users"></ucdlib-icon></span>
      </rp-factoid>

      <rp-factoid href="/works" statistic="${this.academicWorksTotal}" title="works">
        <span><ucdlib-icon class="import-icon" style="fill:var(-ae-color-farmers-market);"  icon="ucdlib:book-open"></ucdlib-icon></span>
      </rp-factoid>

      <rp-factoid href="/concepts" statistic="${this.subjectsTotal}" title="subjects">
        <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-putah-creek);"  icon="ucdlib:lightbulb"></ucdlib-icon></span>
      </rp-factoid>
    
      <rp-factoid href="/grants" statistic="${this.grantsTotal}" title="grants">
        <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-thiebaud-icing);"  icon="ucdlib:hand-holding-usd"></ucdlib-icon></span>
      </rp-factoid>

      <rp-factoid href="" statistic="${this.coursesTotal}" title="courses">
        <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-rose);"  icon="ucdlib:chalkboard-teacher"></ucdlib-icon></span>
      </rp-factoid>

      <rp-factoid href="" statistic="${this.patentsTotal}" title="patents">
        <span><ucdlib-icon class="import-icon" style="fill:var(--ae-color-double-decker);"  icon="ucdlib:award"></ucdlib-icon></span>
      </rp-factoid>

    </div>     
  </div>

  <div class="container flex" ?hidden="${this._hideStatusSection('loaded')}">

      
    <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
      
      <div id="subjects">
        <h1 style="text-align:center;color:var(--ae-tcolor-code-text);">
          <span  style="font-size: 36px;">Recently Updated Subjects</span>
        </h1>
        <div style="text-align:center; color:var(--ae-tcolor-code-text); font-weight:var(--ae-font-weight-bold)">
          ${this.subjects.map(subject => html`
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
          <br />
          ${this.subjectsTotal > 10 ? html`
            <rp-badge title="Browse All Subjects" size="extralg" class="my-1" max-width="280"  href="/concepts">Browse All Subjects</rp-badge>
          ` : html``}
        </div>
      </div>
    </div>
    <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>


  </div>
</div>
 
`;}
