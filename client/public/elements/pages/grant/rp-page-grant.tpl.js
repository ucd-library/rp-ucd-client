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

  .hero .upperType {
    color: var(--tcolor-primary10);
    text-transform: uppercase;
    font-size: var(--font-size-h3);
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
  .grid-container {
    display: grid;
    display: -ms-grid;
    grid-template-columns: auto auto;
    -ms-grid-template-columns: auto auto;
    }
  .grid-item {
    text-align: left;
  }  
  @media (min-width: 800px) {
      .hero {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
</style>
<div class="subject top">
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
          <h2 class="text-secondary h1 bold mb-0 text-center">
          ${this._labelTitle()}
          </h2>
        </div>
        <p class="upperType text-center">
            ${this.dateStart} &#183; ${this.dateEnd} 
        </p>
        <div class="type text-center">Grant</div> <!--${this.grantType}-->
      </div>
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
        <div class="grid-container">
            <div class="grid-item">
                <h2>Awarded By</h2>
                <div>${this.awardedByLabel}</div>
            </div> 
            <div class="grid-item">
                <h2>Amount</h2>
                <div>${this.grantAmount}</div>
            </div> 
            <div class="grid-item">
                <h2>Status</h2>
                <div>${this.grantAwardStatus}</div>
            </div> 
            <div class="grid-item">
                <h2>Grant Number</h2>
                <div>${this.grantNumber}</div>
            </div> 
        </div>
        ${this.purpose ? html `
          <h2>Purpose</h2>
            <div>${this.purpose}</div>
          `: html ``
        }
        ${this.grantUrl ? html `
          <h2>URL</h2>
            <div>${this.grantUrl}</div>
          `: html ``
        }

    </section>

    <section id="contributors" class="bg-light mt-3" ?hidden="${this._hidePageSection('contributors')}">
    <h1 class="weight-regular mt-0">Known Contributors</h1>      

        ${this.role == "pi_role" ? html `
          <h2>Principal Investigator</h2>
        `: html ``}  

        ${this.contributors.map(contributor => html`
          <rp-person-preview .data=${contributor}></rp-person-preview>`
        )}

    </section>
  </div>
</div>

`;}