import { html } from 'lit-element';
import { renderHTML } from '../../../src/lib/santize-html.js';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
  }
  .hero {
    background: url(/images/homepage-hero.jpg) no-repeat center center;
    background-size: cover;
    color: var(--tcolor-light);
  }
  .hero .container {
    padding-bottom: 30px;
    flex-flow: column;
    align-items: center;
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
    font-size: var(--font-size);
    line-height: 23px;
  }
  .hero h2 {
    color: var(--tcolor-secondary)
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
    --rp-loading-color: var(--tcolor-primary);
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
    .hero .container {
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
    .container{
      margin-right: auto;
      margin-left: auto;
      max-width: 550px; 
    }
  }
  @media (min-width: 480px) {
    rp-search {
      max-width: 500px;
    }
  }
  @media (max-width: 280px) {
    rp-search {
      max-width: 250px;
    }  

  }

  
</style>
<div class="hero">
  <div class="container flex">
    <!-- <img src="${this.theme.homeHeroImage}" alt=""> -->
    <div class="text flex flex-column" style="text-align: center; max-width: 600px">
      <h2>${this.theme.homeHeroTitle}</h2>
      <div class="flex flex-column justify-content-between flex-grow-1 content">
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
  <div class="container flex" ?hidden="${this._hideStatusSection('loaded')}">

    <div class="col-l">
      <div id="works">
        <div class="list-count">
          <div class="row">
            <div class="count"><h2 class="mt-0">${this.academicWorksTotal}</h2></div>
            <div class="text"><h2 class="weight-regular mt-0">Academic Works</h2></div>
          </div>
          ${this.academicWorks.map(work => html`
          <div class="row item">
            <div class=count>${work.count}</div>
            <div class="text"><a href="${work.href}">${work.text}</a></div>
          </div>
          `)}
        </div>

        <div class="flex view-all-row">
          <a href="/works" class="view-all"><span>View All Works</span><iron-icon icon="av:play-arrow" class="filled-arrow"></iron-icon></a>
        </div>
      </div>
    </div>



    <div class="col-r flex-grow-1">
      <div class="people" id="people">
        <h2 class="mt-0">
          <span class="bold mr-2">${this.peopleTotal}</span>
          <span class="weight-regular">People</span>
        </h2>
        <div class="people-container">
          ${this.people.map(person => html`
            <rp-person-preview
              .data="${person}"
              avatar-size='sm'
              text-width=${this.peopleWidth}>
            </rp-person-preview>
            `)}
        </div>
        <div></div>
        <div class="flex view-all-row">
          <a href="/people" class="view-all"><span>View All People</span><iron-icon icon="av:play-arrow" class="filled-arrow"></iron-icon></a>
        </div>
      </div>
      
    <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
      
      <div id="subjects">
        <h2>
          <span class="bold mr-2">${this.subjectsTotal}</span>
          <span class="weight-regular">Research Subjects</span>
        </h2>
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
        ${this.subjectsTotal > 10 ? html`
          <rp-badge size="lg" class="my-1" max-width="280" ellipsis href="/concepts"></rp-badge>
        ` : html``}
      </div>
    </div>
    <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>


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
