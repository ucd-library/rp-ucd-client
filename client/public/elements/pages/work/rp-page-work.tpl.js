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
<div>Hello World</div>
`;}