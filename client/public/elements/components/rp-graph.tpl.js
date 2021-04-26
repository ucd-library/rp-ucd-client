import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }

  .node text {
    display: none;
    background: white;
    padding: 3px;
  }

  .node:hover text {
    display: inline;
  }
</style>  

`;}