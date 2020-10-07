import { html } from 'lit-element';
import styles from "../../styles/site.html";

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  .herotop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .heromain {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  #about .cols {
    display: flex;
  }
  #about .cols > div {
    width: 50%;
  }
  .pub-count {
    background-color: var(--tcolor-primary);
    color: var(--tcolor-light);
    min-height: 60px;
    min-width: 60px;
    border-radius: 50%;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-h2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  rp-badge {
    margin-left: 8px;
  }
  rp-badge:first-child {
    margin-left: 0;
  }
  .load-more {
    height: 44px;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text);
    font-weight: var(--font-weight);
    border: none;
    padding: 0 15px;
    cursor: pointer;
  }
  .load-more:hover {
    background-color: var(--tcolor-hover-bg);
  }
  a.export {
    text-decoration: none;
    display: block;
    background-color: var(--tcolor-primary20);
    font-size: var(--font-size);
    color: var(--tcolor-text) !important;
    font-weight: var(--font-weight);
    padding: 10px 15px;
  }
  a.export:hover {
    background-color: var(--tcolor-hover-bg);
    color: var(--tcolor-text);
  }
  .site .logo {
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  ${styles}
</style>


<div class="individual container top">
  <div ?hidden="${this.individualStatus == 'error' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'loaded' }" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${this.individualStatus == 'loading' || this.individualStatus == 'error' }">
  <rp-hero-image id="hero">
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.getBestLabel()}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      ${this.researchSubjects.length > 0 ? html `
        <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
        <p class="text-light mt-2 mb-0">
        ${this.researchSubjects.splice(0, this.researchSubjectsToShow).map(subject => html`<rp-badge>${subject.label}</rp-badge>`)}
        </p>
        ` : html``}
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.PersonModel.getSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this.hideSection('about')}">
    <h1 class="weight-regular mt-0">About</h1>
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(title => html`<div>${title}</div>`)}
        </div>
        <div><h3 class="mb-2">Contact</h3>${this.getEmailAddresses().map(addr => html`<div><a href="${'mailto:' + addr}">${addr}</a></div>`)}</div>
      </div>
      <div>
        <h3 class="mb-2">Websites</h3>
        ${this.getWebsites().map(site => html`
        <div class="site">
          <a href="${site.href}">${site.icon ? html`<img class="logo" alt="site logo" src="${site.icon}">` : html``}${site.text}</a>
        </div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3" ?hidden="${this.hideSection('publications')}">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="flex align-items-center">${this.isOwnProfile ? html`
        <a class="export mr-3" href="${`/api/miv/${this.individualId}`}">Export</a>
      ` : html``}
        <div class="pub-count">${this.totalPublications}</div>
      </div>

    </div>
    <h2>Selected Publications</h2>
      <div ?hidden="${this.publicationStatus == 'error' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading publications.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.publicationStatus == 'loading' || this.publicationStatus == 'error' }">
        ${ this.retrievedPublications.map(pub => html`
          <rp-citation class="mb-3" .data="${pub}"></rp-citation>
          `)}
      </div>
      ${this.retrievedPublications.length < this.totalPublications ? html`
        <button type="button" @click="${this._loadMorePubs}" class="load-more">Load more articles</button>` : html``}
  </section>

  <section id="research" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3" hidden>
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`;}
