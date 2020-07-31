import { html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  .hero {
    background-color: var(--tcolor-bg-primary);
  }
  .hero .container {
    padding: 50px 0;
  }
  .hero img {
    min-width: 30%;
    height: auto;
  }
  .hero .text {
    flex-grow: 1;
    padding: 0 50px;
  }
  .hero .content: {
    font-size: var(--font-size);
    line-height: 23px;
  }
  .search .container {
    padding: 28px 0;
  }
  rp-search {
    width: 50%;
    min-width: 300px;
  }
  .data .container {
    padding: 50px 0;
  }
  .data .col-l {
    width: 30%;
  }
  .data .col-r {
    padding-left: 24px;
  }

  ${styles}
</style>
<div class="hero">
  <div class="container flex">
  <img src="${this.theme.homeHeroImage}">
  <div class="text flex flex-column">
    <div class="text-default mt-0 h1 bold mb-3">${this.theme.homeHeroTitle}</div>
    <div class="flex flex-column justify-content-between flex-grow-1 content">
      <div>${unsafeHTML(this.theme.homeHeroContentTop)}</div>
      <div>${unsafeHTML(this.theme.homeHeroContentBottom)}</div>
    </div>
  </div>
  </div>
</div>
<div class="search bg-primary">
  <div class="container flex justify-content-center"><rp-search></rp-search></div>
</div>
<div class="data bg-light">
  <div class="container flex">
    <div class="col-l">
      <h2><span class="bold mr-2">8431</span><span class="weight-regular">Academic Works</span></h2>
    </div>
    <div class="col-r flex-grow-1">
      <div class="people">
        <h2><span class="bold mr-2">100</span><span class="weight-regular">People</span></h2>
      </div>
      <div class="subjects">
        <h2><span class="bold mr-2">200</span><span class="weight-regular">Research Subjects</span></h2>
      </div>
    </div>
  </div>
</div>

`;}
