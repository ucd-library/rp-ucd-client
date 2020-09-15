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
      <h2>Automated Profile Content</h2>
      <h2>Enhancing your Profile</h2>
      <h2>Don't see your question?</h2>
    </div>
  </div>
  

</div>

`;}