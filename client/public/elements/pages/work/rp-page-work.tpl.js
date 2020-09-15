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

  ${styles}
</style>  
<div class="work container top">
  <div ?hidden="${this._hideStatusSection('loading')}" class="flex align-items-center justify-content-center">
      <div class="loading1">loading</div>
  </div>
  <div ?hidden="${this._hideStatusSection('error')}" class="flex align-items-center justify-content-center">
    <rp-alert>Error loading individual.</rp-alert>
  </div>
  <div class="data" ?hidden="${this._hideStatusSection('loaded')}">
    <rp-hero-image>
      <div slot="top" class="herotop">
        <rp-icon icon="iron-link" circle-bg is-link style="margin-right:5px;"></rp-icon>
        <rp-icon icon="rp-qr" circle-bg is-link></rp-icon>
      </div>
      <div slot="main" class="heromain">
        <div class="icon-container"><iron-icon icon="av:library-books"></iron-icon></div>
        <h2 class="name text-secondary h1 bold mb-0 text-center">${this.work.label}</h2>
        <p class="text-light h3 mb-2 mt-1 text-center">${this._renderAuthors()}</p>
        <div></div>
      </div>
    </rp-hero-image>
  </div>

  <section id="abstract" class="bg-light mt-3" ?hidden="${this._hideSection('abstract')}">
    <h1 class="weight-regular mt-0">Abstract</h1>
    <p>${this.work.abstract}</p>
  </section>
</div>

`;}