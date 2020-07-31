import { html } from 'lit-element';
import styles from "../../styles/site.html"

export default function render() {
return html`

<style>
  :host {
    display: block;
  }
  .container {
    padding: 40px 40px 0 40px;
  }
  ${styles}
</style>
<div class="container bg-light top">
  <div class="header flex align-items-center">
    <div class="col-facets">
      <h1>People</h1>
    </div>
    <div class="col-main">
      <rp-a-z></rp-a-z>
    </div>
  </div>
  <hr>
  <div class="body">
    <div class="col-facets"></div>
    <div class="col-main"></div>
  </div>

</div>
`;}
