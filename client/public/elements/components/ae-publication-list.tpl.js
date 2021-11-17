import { html, css } from 'lit';
import siteStyles from "../styles/site-lit.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }

    #publications h3 {
      font-weight: var(--ae-font-weight);
      font-style: italic;
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
    section .load-error {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
    }
    .pub-count {
      background-color: var(--ae-tcolor-primary);
      color: var(--ae-tcolor-light);
      min-height: 60px;
      min-width: 60px;
      border-radius: 50%;
      font-weight: var(--ae-font-weight-bold);
      font-size: var(--ae-font-size-h2);
      display: flex;
      align-items: center;
      justify-content: center;
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
    .load-pubs.more {
      background-color: var(--ae-tcolor-primary10);
    }
    .load-pubs.less {
      background-color: var(--ae-tcolor-light);
      margin-right: 8px;
    }
    .load-pubs:hover {
      background-color: var(--ae-tcolor-hover-bg);
      border: 2px solid var(--ae-tcolor-hover-bg);
      color: var(--ae-tcolor-light);
    }
    .pub-icons {
      display: flex;
      align-items: center;
    }
    .pub-icons > * {
      margin-right: 10px;
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
  `;

  return [elementStyles, siteStyles];
}

export function render() {
return html`
<section id="publications" class="bg-light mt-3">

  <div class="box-title" ?hidden="${this.hideHeader}">
    <h1 class="weight-regular mt-0">Publications</h1>
    <div class="box-title-icons">
      <div class="pub-icons">
        ${this.isOwnProfile ? html`
            <rp-icon icon="iron-editor:mode-edit" circle-bg is-link has-text size="lg" @click="${e => this.shadowRoot.getElementById('modal-pub-edit').toggle()}">
              <div slot="tooltip">Edit Publications</div>
            </rp-icon>
            <rp-download-list title="Download Publications List" .choices="${this.getPubExports()}"></rp-download-list>

          ` : html``
        }
      </div>

      <div class="pub-count">${this.totalPublications}</div>

      <rp-modal content-title='Edit Publications' id="modal-pub-edit">
        Publication information is managed via the <b>UC Publication Management System</b>. Clicking the "Edit Publications" button below will
        redirect you to the UC Publication Management System. Any changes made there will be reflected on your Aggie Experts profile.
        <div slot="confirmButton">
          <a style = "text-decoration:none;" target="_blank" rel="noopener" href='https://oapolicy.universityofcalifornia.edu/listobjects.html?as=1&am=false&cid=1'>
          <div class="button">Edit Publications</div>
          </a>
        </div>
      </rp-modal>
    </div>
  </div>

  ${this.publicationOverviewStatus === 'loaded' ? html`
    <h2 class="mb-0" ?hidden="${this.hideHeader}">Selected Publications</h2>
    <div class="data">
      ${ Object.values(this.publicationOverview).map(pubType => html`
        <h3>${pubType.text} (${pubType.ct})</h3>
        ${this.getPubsByYear(pubType.id).map(yr => html`
          <div class="box-pubsyear">
            <div class="year">${yr.year}</div>
            <div class="pubs">${yr.pubs.map(pub => html`
              <rp-citation .data="${pub}"></rp-citation>
            `)}</div>
          </div>
        `)}

        <div class="box-pub-buttons" ?hidden="${!this.showMoreButton(pubType)}">
          <div class="padding"></div>
          <div class="buttons">
            <button type="button"
              ?hidden="${!this.showLessButton(pubType)}"
              @click="${e => this._loadPubs(pubType.id, false)}"
              class="load-pubs less">Show ${this.showLessCount(pubType)} less</button>

            <button type="button"
              ?hidden="${!this.showMoreButton(pubType)}"
              @click="${e => this._loadPubs(pubType.id, true)}"
              class="load-pubs more">Show ${this.showMoreCount(pubType)} more</button>
          </div>
        </div>
      `)}
    </div>
  ` : html``}
  ${this.publicationOverviewStatus === 'loading' ? html`
    <rp-loading>Loading publications</rp-loading>
  ` : html``}
  ${this.publicationOverviewStatus === 'error' ? html`
    <div class="load-error">
      <rp-alert>Error loading publications. Try again later.</rp-alert>
    </div>
  ` : html``}


</section>

`;}
