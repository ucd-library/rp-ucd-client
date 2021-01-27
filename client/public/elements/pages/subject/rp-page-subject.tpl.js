import { html } from 'lit-element';
import styles from "../../styles/site.html";

export default function render() {
return html`
 
<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-primary);
    padding: 30px 60px;
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
  .box-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
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
  .button {
    color: var(--tcolor-primary);
    padding: 10px;
    background-color: var(--tcolor-bg-primary);
    cursor: pointer;
    transition: .3s;
    margin: 5px;
  }
  .button:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-hover-text);
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
  .load-pubs.less {
    background-color: var(--tcolor-primary10);
    margin-right: 8px;
  }
  .load-pubs:hover {
    background-color: var(--tcolor-hover-bg);
    border: 2px solid var(--tcolor-hover-bg);
    color: var(--tcolor-light);
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

  ${styles}
</style>
 
<div class="work container top"> 
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading work.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
    <div class="hero">
      <div class="title mb-0"> 
        <h2 class="text-secondary h1 bold mb-0 text-center">
        ${this._labelTitle()}
        </h2>
      </div>
      <div class="type text-center">${this.subjectType}</div>
    </div>
    <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.getPageSections()}"
                current-link="${this.activeSection.index}">
    </rp-link-list>
  </div>
  <div class="sections">

    <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('about')}">
      <h1 class="weight-regular mt-0">About</h1>
      <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. </p>
      <div class="cols">
        <h2>Related Subjects</h2>

        <i style="font-size: 18px; padding-bottom: 5px;">Narrow Scope</i>
        <br />   

        ${this._isEmpty(this.narrowRelatedSubjects) ? html `<h4>None Listed</h4>` :
                this.narrowRelatedSubjects.map(narrow => html ` 
                                                          <rp-badge size="lg" class="my-1">
                                                          ${(narrow.prefLabel) ? narrow.prefLabel: narrow.label}
                                                          </rp-badge>`)
         }
        <br />   
        <i style="font-size: 18px; padding-bottom: px;">Broad Scope</i>   
        <br />   
        ${this._isEmpty(this.broadRelatedSubjects) ? html `<h4>None Listed</h4>` :
                this.broadRelatedSubjects.map(broad => html ` 
                                                                <rp-badge size="lg" class="my-1">
                                                                  ${(broad.prefLabel) ? broad.prefLabel: broad.label}
                                                                </rp-badge>`)
         }
      </div>
    </section>
    <section id="researchers" class="bg-light mt-3" ?hidden="${this._hidePageSection('researchers')}">
      <div class="box-title">
        <h1 class="weight-regular mt-0">Researchers</h1>
      </div>
        ${this._isEmpty(this.tempResearch) ? html `<h3>None Listed</h3>` : html `
          ${this.tempResearch.map(researcher => html`
            <rp-person-preview
              .data="${researcher}"
              text-width="${this.peopleWidth}"
              show-subjects
              class="my-3">
            </rp-person-preview>
          `)}   
        `}
    </section>
    <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
      <div class="box-title">
        <h1 class="weight-regular mt-0">Related Publications</h1>
      </div>
      ${this._isEmpty(this.publications) ? html `<h3>None Listed</h3>` : 
        html `
        <div class="data">
          ${Object.entries(this.publications).map(([k, v]) => html`
            <h3>${this._publicationTitle(k)} (${v.total})</h3>
            ${v.results.map(yr => html`
                                  <div class="box-pubsyear">
                                    <div class="year">${this._getYear(yr.publicationDate)}</div>
                                    <div class="pubs"><rp-citation .data="${yr}"></rp-citation></div>
                                  </div>          
                          `)
             }

            <div class="box-pub-buttons">
            <div class="padding"></div>
            <div class="buttons">
              <button type="button" @click=${this._pubRedirect(k)} class="load-pubs less">
                View All Related ${this._publicationTitle(k)}
              </button>
            </div>
            </div>
        `)} 
        </div>
      `}
    </section>
</div>

`;}