import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  ${styles}
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-bg-primary);
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
    justify-content: flex-end;
  }
  #subjects {
    padding-bottom: 15px;
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
      flex-flow: row;
      padding: 50px 0;
      align-items: flex-start;
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
  }

  @media (min-width: 480px) and (max-width: 799px){
    .container {
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

  
</style>
<div class="hero">
  <div class="container flex">
  <img src="${this.theme.homeHeroImage}">
  <div class="text flex flex-column">
    <div class="text-default mt-0 h1 bold mb-3">${this.theme.homeHeroTitle}</div>
    <div class="flex flex-column justify-content-between flex-grow-1 content">
      <div>${unsafeHTML(this.theme.homeHeroContentTop)}</div>
      <div>${unsafeHTML(this.theme.homeHeroContentBottom)}</div>
    </div>
  </div>
  </div>
</div>

<div class="search bg-primary">
  <div class="container flex justify-content-center">
    <rp-search .facets="${this.CollectionModel.mainFacets}" @new-search="${this._onSearch}" include-all-option></rp-search>
  </div>
</div>

<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <div ?hidden="${this._hideStatusSection('loading', 'facetsStatus')}" class="loading1">loading</div>
      <rp-alert  ?hidden="${this._hideStatusSection('error', 'facetsStatus')}">Error loading academic works</rp-alert>
      <div id="works" ?hidden="${this._hideStatusSection('loaded', 'facetsStatus')}">
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
      <div ?hidden="${this._hideStatusSection('loading', 'peopleStatus')}" class="loading1">loading</div>
      <rp-alert  ?hidden="${this._hideStatusSection('error', 'peopleStatus')}">Error loading people</rp-alert>
      <div class="people" id="people" ?hidden="${this._hideStatusSection('loaded', 'peopleStatus')}">
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
            <div></div>
            <div class="flex view-all-row">
              <a href="/people" class="view-all"><span>View All People</span><iron-icon icon="av:play-arrow" class="filled-arrow"></iron-icon></a>
            </div>
        </div>
      </div>
      <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
      <div id="subjects">
        <h2>
          <span class="bold mr-2">${this.subjectsTotal}</span>
          <span class="weight-regular">Research Subjects</span>
        </h2>
        ${this.subjects.map(subject => html`
          <rp-badge size="lg" class="my-1" href="${this.SubjectModel.getLandingPage(subject)}">${this.SubjectModel.getPreferredLabel(subject)}</rp-badge>
        `)}
        ${this.subjectsTotal > 10 ? html`
          <rp-badge size="lg" class="my-1" ellipsis href="/subjects"></rp-badge>
          ` : html``}
      </div>
      <div class="hidden-desktop w-100"><hr class="dotted m-0"></div>
    </div>
  </div>
</div>

`;}
