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
  .load-pubs.more {
    background-color: var(--tcolor-primary10);
  }
  .load-pubs.less {
    background-color: var(--tcolor-light);
    margin-right: 8px;
  }
  .load-pubs:hover {
    background-color: var(--tcolor-hover-bg);
    border: 2px solid var(--tcolor-hover-bg);
    color: var(--tcolor-light);
  }
  .site .logo {
    vertical-align: middle;
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
  .pub-icons {
    display: flex;
    align-items: center;
  }
  .pub-icons > * {
    margin-right: 10px;
  }
  .box-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .own-profile .box-title {
    flex-flow: column nowrap;
  }
  .box-title-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .own-profile .box-title-icons {
    order: -1;
  }
  #publications h3 {
    font-weight: var(--font-weight);
    font-style: italic;

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
  @media (min-width: 800px){
    .own-profile .box-title {
      flex-flow: row nowrap;
      justify-content: space-between;
  }
    .own-profile .box-title-icons {
      justify-content: unset;
    }
    .own-profile .box-title-icons {
      order: 2;
    }

  }
  ${styles}
</style>


<div class="individual container top ${this.isOwnProfile ? "own-profile" : ""}">
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
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getHeadlineTitle()}</p>

      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                .links="${this.getPageSections()}"
                current-link="${this.activeSection.index}">
  </rp-link-list>

  <section id="about" class="bg-light mt-3" ?hidden="${this._hidePageSection('about')}">
    <h1 class="weight-regular mt-0">About</h1>
    <h2 hidden>Overview</h2>
    <p hidden>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. </p>
    <div class="cols">
      <div>
        <div>
          <h3 class="mb-2">Positions</h3>
          ${this.getIndividualTitles().map(t => html`<div>${t.title}:<ul>${t.orgs.map(o=>html`<li>${o}`)}</ul></div>`)}
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

  <section id="publications" class="bg-light mt-3" ?hidden="${this._hidePageSection('publications')}">
    <div class="box-title">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="box-title-icons">
        ${this.isOwnProfile ? html`
          <div class="pub-icons">
            <rp-icon icon="iron-editor:mode-edit" circle-bg is-link size="lg" @click="${e => this.shadowRoot.getElementById('modal-pub-edit').toggle()}"></rp-icon>
            <rp-download-list title="Download Publications List" .choices="${this.getPubExports()}"></rp-download-list>
          </div>
          <rp-modal content-title='Edit "Publications"' id="modal-pub-edit">
    Publication information is managed via the <a href="https://oapolicy.universityofcalifornia.edu/">UC Publication Management System</a>. Any changes made there will be reflected on your Aggie Experts profile.
          </rp-modal>
          ` : html``}
          <div class="pub-count">${this.totalPublications}</div>
      </div>
    </div>
    <h2 class="mb-0">Selected Publications</h2>
      <div class="data">
        ${ Object.values(this.publicationOverview).map(pubType => html`
          <h3>${pubType.label} (${pubType.ct})</h3>
          ${this.getPubsByYear(pubType.id).map(yr => html`
            <div class="box-pubsyear">
              <div class="year">${yr.year}</div>
              <div class="pubs">${yr.pubs.map(pub => html`
                <rp-citation .data="${pub}"></rp-citation>
              `)}</div>
            </div>
          `)}
          ${pubType.displayedOffset > 10 || pubType.displayedOffset + 10 <= Math.ceil(pubType.ct / 10) * 10 ? html`
            <div class="box-pub-buttons">
              <div class="padding"></div>
              <div class="buttons">
                ${pubType.displayedOffset > 10 ? html`
                  <button type="button" @click="${e => this._loadPubs(pubType.id, false)}" class="load-pubs less">Show ${pubType.displayedOffset > pubType.ct ? pubType.ct - (pubType.displayedOffset - 10) : 10} less</button>
                  ` : html``}
                ${pubType.displayedOffset + 10 <= Math.ceil(pubType.ct / 10) * 10 ? html`
                  <button type="button" @click="${e => this._loadPubs(pubType.id, true)}" class="load-pubs more">Show ${pubType.ct - pubType.displayedOffset < 10 ? pubType.ct - pubType.displayedOffset : 10} more</button>
                ` : html``}
              </div>
            </div>
          ` : html``}
        `)}
      </div>

  </section>
  </div>
</div>

`;}
