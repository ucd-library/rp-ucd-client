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
  ${this._renderBrowseHeader('People')}
  <hr>
  <div class="body">
    <div class="col-facets"></div>
    <div class="col-main"></div>
  </div>

</div>
`;}
