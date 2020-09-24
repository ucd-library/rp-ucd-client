import { html } from 'lit-element';
import styles from "../../styles/site.html";

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
  ${styles}
</style> 
<div class="help container top">
  <div class="section">
    <h1>Help</h1>
    <hr class="light">

    <div>
      <h2>Accessing the Registry</h2>
      <rp-accordian title="How do I add a question to the FAQ?">
        <span>By using this <a href="https://docs.google.com/document/d/1k1QGlfleY08J-fZSiN5zZXx1juTxlhXOUlTvEqXaIDM/edit">Google Doc</a></span>
      </rp-accordian>
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`;}