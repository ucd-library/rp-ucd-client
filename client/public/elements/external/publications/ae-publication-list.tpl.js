import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }

    #publications h3 {
      font-weight: var(--font-weight);
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
    section .load-error {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 150px;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`

<section id="publications" class="bg-light mt-3">
  <div class="box-title">
    <h1 class="weight-regular mt-0">Publications</h1>
    <div class="box-title-icons">
      <div class="pub-count">${this.totalPublications}</div>
    </div>
  </div>

  ${this.publicationOverviewStatus === 'loaded' ? html`
    <h2 class="mb-0">Selected Publications</h2>
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