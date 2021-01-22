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
    ${this.narrowRelatedSubjects ? 
            this.narrowRelatedSubjects.map(narrow => html ` 
                                                      <rp-badge size="lg" class="my-1">
                                                      ${(narrow.prefLabel) ? narrow.prefLabel: narrow.label}
                                                      </rp-badge>`)
                                                    :html `<h4>None Listed</h4>`}
    <br />   
    <i style="font-size: 18px; padding-bottom: px;">Broad Scope</i>   
    <br />   
    ${this.broadRelatedSubjects ? 
            this.broadRelatedSubjects.map(broad => html ` 
                                                            <rp-badge size="lg" class="my-1">
                                                              ${(broad.prefLabel) ? broad.prefLabel: broad.label}
                                                            </rp-badge>`)
                                                          :html `<h4>None Listed</h4>`}
    </div>
  </section>
  <section id="researchers" class="bg-light mt-3" ?hidden="${this._hidePageSection('researchers')}">
    <div class="box-title">
        <h1 class="weight-regular mt-0">Researchers</h1>
        ${this.tempResearch.map(researcher => html`
          ${console.log(researcher)}
          <rp-person-preview
            .data="${researcher}"
            text-width="${this.peopleWidth}"
            show-subjects
            class="my-3">
          </rp-person-preview>
          <hr class="dotted">
        `)}

    </div>
  </section>
  <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
    <div class="box-title">
      <h1 class="weight-regular mt-0">Publications</h1>
    </div>
  </section>
  </div>

</div>

`;}