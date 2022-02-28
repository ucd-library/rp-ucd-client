import { html } from 'lit';
import styles from "../../styles/site.html"
import buttonCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css.js";

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--ae-tcolor-primary);
    padding: 30px 20px;
  }

  .hero .type {
    color: var(--ae-tcolor-primary10);
    text-transform: uppercase;
    font-size: var(--ae-font-size-small);
  }
  .subjectButton {
    font-size: 18px;
    border-radius: 30px;
    border-color: var(--ae-tcolor-primary);
    color: var(--ae-tcolor-primary);
    padding: 5px 15px;
    background-color: var(--ae-tcolor-secondary);
    display: grid;
    grid-template-columns: auto 15px;
    align-items:center;
    margin: 0 auto;

  }
  iron-icon {
    vertical-align:middle;
    text-align:center;
    color: var(--ae-tcolor-primary);
    cursor: pointer;

  }
  iron-icon:hover {
    color: var(--ae-tcolor-light);


  }
  ${styles} 
</style>
<div class="search container bg-light pb-3 ${this.dataStatus}" >
  ${this.currentQuery.subjectFilter ?
    html `
      <div class="hero">
        <div class="title mb-0"> 
          <h1 class="text-light h1 bold mb-0 text-center">
            <div>
              <div style="display:inline-block;">Subject: </div>
              ${this.currentQuery.subjectFilter ? 
                html`
                  <div style="display:inline-block;">
                    <button  style="margin-right:5px" class="subjectButton">
                      <div><b>${this.searchsubject}</b></div>
                      <div><iron-icon style="padding-left:5px;" @click=${this._pubRedirect} icon='clear'></iron-icon></div>
                    </button>
                  </div>
                `: html``}
            </div>
          </h1>
        </div>
      </div>
    `: html`
    <div class="collections container bg-light top ${this.dataStatus}" >

    `
  }
  ${this._renderBrowseHeader('Works')}
  <hr class="mb-0">
  <div class="body flex">
    <div class="col-facets mt-3">
      ${this._renderFacets()}
    </div>
    <div class="col-main">
      <div ?hidden="${this.dataStatus == 'error' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <div class="loading1">loading</div>
      </div>
      <div ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'loaded' }" class="flex align-items-center justify-content-center">
        <rp-alert>Error loading works.</rp-alert>
      </div>
      <div class="data" ?hidden="${this.dataStatus == 'loading' || this.dataStatus == 'error' }">
        ${this.data.map((work, i) => html`
          <rp-work-preview .data="${work}" text-width="${this.peopleWidth}" class="my-3"></rp-work-preview>
          ${this.data.length - i == 1 && this.dataTotal <= this.pgPer ? html`
            ` : html`
            <hr class="dotted">
            `}
        `)}
        ${this._renderPagination(this.dataTotal)}
      </div>

    </div>
  </div>

</div>
`;}
