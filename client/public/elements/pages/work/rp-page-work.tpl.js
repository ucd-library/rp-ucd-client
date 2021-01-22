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
      <div class="title mb-0"> <h2 class="text-secondary h1 bold mb-0 text-center">${this.work.label}</h2></div>
      <div class="authors"><p class="mb-2 mt-1 text-center">${this.authors.map((author, i) => html`
        <span>${author.nameFirst} ${author.nameLast}</span>${i + 1 < this.authors.length ? html`<span>, </span>` : html``}
      `)}</p></div>
      <div class="type text-center">${this.workType}</div>
    </div>
    <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.getPageSections()}"
                current-link="${this.activeSection.index}">
    </rp-link-list>
    <div class="sections">

      <section id="records" class="bg-light mt-3" ?hidden="${this._hidePageSection('records')}">
        <h1 class="weight-regular mt-0">Publication Records</h1>
        ${ (this.WorkModel.getAdditionalLinks(this.work).length > 0 ||
           this.fullTextLinks) ? html`
        <h2>Full Text</h2>
          <ul class="pub-links">
            ${this.WorkModel.getAdditionalLinks(this.work).map(link => html`
            <li><iron-icon icon="hardware:keyboard-arrow-down"></iron-icon><a href="${link.url}">${link.label}</a></li>
            `)}
        ${this.fullTextLinks && false ? html`
            ${this.fullTextLinks.map(link => html`
            <li><iron-icon icon="hardware:keyboard-arrow-down"></iron-icon><a href="${link.url}">${link.label}</a></li>
            `)}
        ` : html``}
          </ul>`:html`<div>No known full text links exist.</div>`}
        ${this.isOwnWork ? html`
          <h2>Citation Data & Metrics</h2>
          <ul class="pub-links">
            <li><iron-icon icon="hardware:keyboard-arrow-down"></iron-icon><a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a></li>
          </ul>
        ` : html``}
     </section>

     <section id="overview" class="bg-light mt-3" ?hidden="${this._hidePageSection('overview')}">
        <h1 class="weight-regular mt-0">Overview</h1>
        ${this.work.abstract ? html`
          <h2>Abstract</h2>
          <div>${this.work.abstract}</div>
        ` : html``}
        ${this.publishedArray.length > 0 ? html`
          <h2>Published</h2>
          <div class="flex align-items-center">${this.publishedArray.map((d, i) => html`
            <span class="${d.class}">${d.text}</span>${i + 1 < this.publishedArray.length ? html`<span class="list-dot mx-2"></span>` : html``}
          `)}</div>
        ` : html``}

        ${this.subjects.length > 0 ? html`
          <h2>Subjects</h2>
          <div>
          ${this.subjects.map(subject => html`
            <rp-badge size="lg" class="my-1" href="${this.SubjectModel.getLandingPage(subject)}">${this.SubjectModel.getPreferredLabel(subject)}</rp-badge>
          `)}
          </div>
        ` : html``}

     </section>

     <section id="authors" class="bg-light mt-3" ?hidden="${this._hidePageSection('authors')}">
        <h1 class="weight-regular mt-0">${APP_CONFIG.theme.universityName} Authors</h1>
        <div ?hidden="${this._hideStatusSection('loading', 'universityAuthorsStatus')}" class="flex align-items-center justify-content-center">
          <div class="loading1">loading</div>
        </div>
        <div ?hidden="${this._hideStatusSection('error', 'universityAuthorsStatus')}" class="flex align-items-center justify-content-center">
          <rp-alert>Error loading authors.</rp-alert>
        </div>
        <div class="data" ?hidden="${this._hideStatusSection('loaded', 'universityAuthorsStatus')}">
          ${this.universityAuthors.map(author => html`
            <rp-person-preview
              .data="${author}"
              text-width="${this.peopleWidth}"
              class="my-3">
            </rp-person-preview>
          `)}
        </div>
        ${this.hasOtherAuthors ? html`
          <h1 class="weight-regular">Other Authors</h1>
          ${this.authors.filter(author => author.isOtherUniversity).map(author => html`
            <div><span class="name">${author.nameLast}, ${author.nameFirst}</span></div>
        `)}
        ` : html``}
     </section>

    </div>

  </div>


</div>

`;}
