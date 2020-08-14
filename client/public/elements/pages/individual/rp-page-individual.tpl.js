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
  <rp-hero-image>
    <div slot="top" class="herotop">
      <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
      <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
    </div>
    <div slot="main" class="heromain">
      <rp-avatar size="lg"></rp-avatar>
      <h2 class="name text-secondary h1 bold mb-0 text-center">${this.individual.label}</h2>
      <p class="text-light h3 mb-2 mt-1 text-center">${this.getIndividualTitles().join(", ")}</p>
      <p class="bold text-light h3 mt-1 mb-0 text-center">My research areas include: </p>
      <p class="text-light mt-2 mb-0">
        <rp-badge>Foobar</rp-badge>
        <rp-badge>Stuff</rp-badge>
        <rp-badge>Things</rp-badge>
        <rp-badge>Widgets</rp-badge>
        </p>
      <div></div>
    </div>
  </rp-hero-image>
  <rp-link-list class="bg-light p-3"
                direction="horizontal"
                links='[{"text": "All Info"},
                        {"text": "About"},
                        {"text": "Publications"},
                        {"text": "Research"},
                        {"text": "Contact"}]'>
  </rp-link-list>

  <section id="about" class="bg-light mt-3">
    <h1 class="weight-regular">About</h1>
    <h2>Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
        ${this.getWebsites().map(site => html`<div><a href="${site.href}">${site.text}</a></div>`)}
      </div>
    </div>
  </section>

  <section id="publications" class="bg-light mt-3">
    <div class="flex justify-content-between">
      <h1 class="weight-regular mt-0">Publications</h1>
      <div class="pub-count">${this.totalPublications}</div>
    </div>
    <h2>Selected Publications</h2>
  </section>
  <section id="research" class="bg-light mt-3">
    <h1 class="weight-regular">Research</h1>
    <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.<p>
    <h2>Keywords</h2>
      <p>lorem, ipsum, dolor sit amit</p>
  </section>
  <section id="contact" class="bg-light mt-3">
    <h1 class="weight-regular">Contact</h1>
  </section>
  </div>
</div>

`;}
