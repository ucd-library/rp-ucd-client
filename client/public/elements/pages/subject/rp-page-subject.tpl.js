import { html } from 'lit-element';
import styles from "../../styles/site.html";

export default function render() {
return html`
 
<style>
  ${styles}
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-primary);
    padding: 30px 20px;
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
  @media (min-width: 800px) {
      .hero {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
</style>
<div class="work container top"> 
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading work.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
    <div class="page-header container-wide">
      <div class="hero">
        <div class="title mb-0"> 
          <h2 class="text-secondary h1 bold mb-0 text-center">
          ${this._labelTitle()}
          </h2>
        </div>
        <div class="type text-center">${this.subjectType}</div>
      </div>
      <!-- <rp-link-list class="bg-light p-3"
                  direction="horizontal"
                  .links="${this.getPageSections()}"
                  current-link="${this.activeSection.index}">
      </rp-link-list> -->
      <rp-link-list id="navbar" class="bg-light p-3"
        direction="horizontal"
        .links="${this.getPageSections()}"
        current-link="${this.activeSection.index}">
      </rp-link-list>
    </div>
   
  </div>
  <div class="sections container">

    <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('about')}">
      <h1 class="weight-regular mt-0">About</h1>
      <p>${this.about}</p>
    </section>
    <section id="relatedSubjects" class="bg-light mt-3" ?hidden="${this._hidePageSection('relatedSubjects')}">
      <h1 class="weight-regular mt-0">Related Subjects</h1>
      
      ${this._isEmpty(this.broadRelatedSubjects) ? html `` : 
            html `
              <b style="font-size: 18px;">Broader Scope</b>   
            <br /> 
            ${this.broadRelatedSubjects.map(broad => html ` 
                                                     <rp-badge size="lg" class="my-1" href="${this.SubjectModel.getLandingPage(broad)}">
                                                        ${(broad.prefLabel) ? broad.prefLabel: broad.label}
                                                      </rp-badge>`)}`
       }
       <br />   

       ${this._isEmpty(this.narrowRelatedSubjects) ? html `` : 
            html `
              <b style="font-size: 18px; ">Narrower Scope</b>   
            <br /> 

            ${this.narrowRelatedSubjects.map(narrow => html ` 
                                                      <rp-badge size="lg" class="my-1" href="${this.SubjectModel.getLandingPage(narrow)}">
                                                        ${(narrow.prefLabel) ? narrow.prefLabel: narrow.label}
                                                      </rp-badge>`)}`
       }        

    </section>
    
    <section id="researchers" class="bg-light mt-3" ?hidden="${this._hidePageSection('researchers')}">
      <div class="box-title">
        <h1 class="weight-regular mt-0">Researchers</h1>
      </div>    
          ${this.tempResearch.map(researcher => html`
            <rp-person-preview
              .data="${researcher}"
              text-width="${this.peopleWidth}"
              show-subjects
              class="my-3">
            </rp-person-preview>
          `)}   
    </section>
    <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
      <div class="box-title">
        <h1 class="weight-regular mt-0">Related Publications</h1>
      </div>
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
            ${ v.total > 5 ? 
              html`
              <div class="buttons">
                <button @click=${() => this._pubRedirect(k)} class="load-pubs less">
                  View All Related ${this._publicationTitle(k)}
                </button>
              </div>
              `: 
              html ``
             }
            </div>
        `)} 
        </div>
    </section>
  </div>
</div>

`;}