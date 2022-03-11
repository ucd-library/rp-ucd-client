import { html } from 'lit';
import styles from "../../styles/site.html";

export default function render() {
return html`
 
<style>
  ${styles}
  :host {
    display: block;
  }
  .hero {
    background-color: var(--ae-tcolor-primary);
    padding: 30px 20px;
  }
  .hero .authors {
    color: var(--ae-tcolor-primary20);
    margin: 0 15%;
  }

  .hero .upperType {
    color: var(--ae-tcolor-primary10);
    text-transform: uppercase;
    font-size: var(--ae-font-size-h3);
  }

  .hero .type {
    color: var(--ae-tcolor-primary10);
    text-transform: uppercase;
    font-size: var(--ae-font-size-small);
  }

  .box-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .icon-container {
    background-color: var(--ae-tcolor-bg-primary);
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
    color: var(--ae-tcolor-primary);
    height: 50%;
    width: 50%;
  }
  .authors a {
    color: var(--ae-tcolor-light) !important;
  }
  .authors a[disabled] {
    pointer-events: none;
    text-decoration: none;
    }
  .authors a[disabled]:hover {
    color : var(--ae-tcolor-link-text);
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
    color: var(--ae-tcolor-secondary);
    font-weight: var(--ae-font-weight-bold);
  }
  #overview .venue {
    text-transform: capitalize;
  }
  #authors .name {
    font-weight: var(--ae-font-weight-bold);
  }
  .box-pubsyear {
    display: flex;
  }
  .box-pubsyear .year {
    font-weight: var(--ae-font-weight-bold);
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
    color: var(--ae-tcolor-primary);
    padding: 10px;
    background-color: var(--ae-tcolor-bg-primary);
    cursor: pointer;
    transition: .3s;
    margin: 5px;
  }
  .button:hover {
    background-color: var(--ae-tcolor-hover-bg);
    color: var(--ae-tcolor-hover-text);
  }
  .load-pubs {
    height: 42px;
    font-size: var(--ae-font-size);
    color: var(--ae-tcolor-text);
    font-weight: var(--ae-font-weight);
    border: 2px solid var(--ae-tcolor-primary10);
    padding: 0 15px;
    cursor: pointer;
    transition: .3s;
    color: var(--ae-tcolor-primary);
  }
  .load-pubs.less {
    background-color: var(--ae-tcolor-primary10);
    margin-right: 8px;
  }
  .load-pubs:hover {
    background-color: var(--ae-tcolor-hover-bg);
    border: 2px solid var(--ae-tcolor-hover-bg);
    color: var(--ae-tcolor-light);
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
  #wrapped-text {
    word-wrap: break-word;
  }
  .grid-container {
    display: grid;
    display: -ms-grid;
    grid-template-columns: auto auto;
    -ms-grid-template-columns: auto auto;
    }
  .grid-item {
    text-align: left;
  }  

  #date-interval{
    text-align: center;
    color: var(--ae-tcolor-primary10);
    text-transform: uppercase;
    font-size: var(--ae-font-size-h3);
    margin: 0;
    margin-top: .25rem;
    margin-bottom: .75rem;
  }
  .known_contributors{
    display:grid;
  }
  .item_ProgramDirector {
    order: 1;
  }
  .item_PrincipalInvestigator{
    order: 2;
  }
  .item_Co-PrincipalInvestigator{
    order: 3;
  }
  .item_ProjectLeader{
    order: 4;
  }
  .item_CoreLeader{
    order: 5;
  }
  .item_KeyPersonnel{
    order: 6;
  }
  .item_OtherRole{
    order: 7;
  }

  @media (min-width: 800px) {
      .hero {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
</style>
<div id="wrapped-text" class="subject top">
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading grant.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
    <div class="page-header container-wide">
      <div class="hero">
        <div class="title mb-0"> 
          <h2 class="text-secondary h1 bold mb-0 text-center" aria-label="Grant Title">
          ${this._labelTitle()}
          </h2>
        </div>
        <p id="date-interval" aria-label="Date-Interval Title">
            ${this._dateInterval("start")} &#8211; ${this._dateInterval("end")} 
        </p>
        <div class="type text-center">Grant</div> <!--${this.grantType}-->
      </div>
      <rp-link-list id="navbar" class="bg-light p-3"
        direction="horizontal"
        .links="${this.getPageSections()}"
        use-hash
        current-link="${this.activeSection.index}">
      </rp-link-list>
    </div>
   
  </div>
  <div class="sections container">

    <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('about')}">
        <h1 class="weight-regular mt-0">About</h1>
        <div class="grid-container">
            <div class="grid-item">
                <h2 aria-label="Awarded By Title">Awarded By</h2>
                ${this.awardedByLabel ? html`
                  ${this.awardedByLabel.map(label => html`<div>${label.label}</div>`)}
                `:html ``}
            </div> 
            ${this.grantAmount ? html `
              <div class="grid-item">
                    <h2 aria-label="Grant Amount">Amount</h2>
                    <div>${this.grantAmount}</div>
                </div> 
              `: html``}
            <div class="grid-item">
                <h2 aria-label="Grant Status">Status</h2>
                <div>${this.grantAwardStatus}</div>
            </div> 
              <div class="grid-item">
                  <h2 aria-label="Grant Number">Grant Number</h2>
                  <div>${this.grantNumber}</div>
              </div> 
              ${this.admin != this.emptyValue ? html `
              <div class="grid-item">
                  <h2 aria-label="Grant Admin">Grant Admin</h2>
                  <div>${this.admin}</div>
              </div> 
              `: html``}
        </div>
        ${this.purpose ? html `
          <h2 aria-label="Grant Purpose">Purpose</h2>
            <div>${this.purpose}</div>
          `: html ``
        }
        ${this.grantUrl ? html `
          <h2 aria-label="Grant URL">URL</h2>
            <div>${this.grantUrl}</div>
          `: html ``
        }

    </section>

    <section id="contributors" class="bg-light mt-3" ?hidden="${this._hidePageSection('contributors')}">
    <div class="known_contributors">
    <h1 aria-label="Known Contributors Section Title" class="weight-regular mt-0">Known Contributors</h1>   

    ${(this.members.key || []).length > 0 ? html`
      <h2 aria-label="Aggie Experts Contributor Title" class="weight-regular mt-0">Aggie Experts Contributor</h2>
        ${this.members.key.map((title, index) => html`
            <h3 style="margin-bottom: 5px;">${title}</h3>
            ${this.members.value[index].map(item =>
              html`
                  <rp-person-preview
                      .data=${item.inheresIn ? item.inheresIn : item}
                      text-width="${this.peopleWidth}"
                      style="margin:5px 0;"
                  ></rp-person-preview>
                `
              )}   
        `)}
    `: html``}
    <br />
    ${(this.others.key || []).length > 0 ? html`
      <h2 aria-label="Other Known Contributor Title" class="weight-regular mt-0" style="margin:5px 0;">Other Known Contributor</h2>
        ${this.others.key.map((title, index) => html`
          <h3 style="margin-bottom: 5px;">${title}</h3>
            ${this.others.value[index].map(item =>
              html`
                  ${item.label} <br />
                `
              )}  
        `)}
    `: html``}

    </div>
    </section>



  </div>
</div>

`;}