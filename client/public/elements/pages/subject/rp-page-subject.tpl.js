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
  .hero .title {

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
      <div class="title mb-0"> <h2 class="text-secondary h1 bold mb-0 text-center">${this.subject.label}</h2></div>
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
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Related Subjects</h3>
          <h4>Broader Scope</h4>
          <h4>Narrower Scope</h4>
      </div>
     </div>
    </div>
  </section>
  <section id="researchers" class="bg-light mt-3" ?hidden="${this._hidePageSection('researchers')}">
    <div class="box-title">
        <h1 class="weight-regular mt-0">Researchers</h1>
    </div>
  </section>
  <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
    <div class="box-title">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="box-title-icons">
        ${this.isOwnProfile ? html`
          
          ` : html``}
          <div class="pub-icons">
            <rp-icon icon="iron-editor:mode-edit" circle-bg is-link has-text size="lg" @click="${e => this.shadowRoot.getElementById('modal-pub-edit').toggle()}">
            <div slot="tooltip">Edit Publications</div>
            </rp-icon>
            <rp-download-list title="Download Publications List"></rp-download-list>
          </div>

          <div class="pub-count">${this.totalPublications}</div>
    </div>
  </section>
  </div>

</div>

`;}