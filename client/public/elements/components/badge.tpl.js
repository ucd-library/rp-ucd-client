import { html } from 'lit';

export default function render() {
return html`
<style>
  :host {
    display: inline-block;
    max-width: 100%;
    box-sizing: border-box;
  }
  span.main {
    display: inline-block;
    border: 2px solid;
    border-radius: 1em;
    padding: .3em .7em;
    line-height: 1;
    border-color: var(--ae-tcolor-accent0);
    transition: 0.3s;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  span.main.ellipsis {
    border-color: var(--ae-tcolor-bg-primary);
    background-color: var(--ae-tcolor-bg-primary);
    color: var(--ae-tcolor-primary);
    padding: 5px .7em;
  }
  span.size-lg {
    padding: .55em .9em;
    border-radius: 2em;
  }
  span.size-extralg {
    padding: .85em 1.55em;
    border-radius: 2em;
    background-color:var(--ae-tcolor-primary);
    color: white;
    border-color: var(--ae-tcolor-primary);
  }
  span.main.has-max-width {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
  a {
    cursor: pointer;
  }
  a:hover span.main, a:focus span.main {
      background-color: var(--ae-tcolor-hover-bg) !important;
      color:  var(--ae-tcolor-hover-text) !important;
      border-color: var(--ae-tcolor-hover-bg) !important;
  }
  span.color-0 {
    border-color: var(--ae-tcolor-accent0);
  }
  span.color-1 {
    border-color: var(--ae-tcolor-accent1);
  }
  span.color-2 {
    border-color: var(--ae-tcolor-accent2);
  }
  span.color-3 {
    border-color: var(--ae-tcolor-accent3);
  }
  span.color-4 {
    border-color: var(--ae-tcolor-accent4);
  }
  span.color-5 {
    border-color: var(--ae-tcolor-accent5);
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: var(--ae-tcolor-text);
  }
  a:visited {
    color: var(--ae-tcolor-text);
  }
  a:hover {
    color: var(--ae-tcolor-text);
  }
  a:active {
    color: var(--ae-tcolor-text);
  }
  /* .dot {
    width: 6px;
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    background-color: var(--ae-tcolor-primary);
  } */
  a:hover .dot {
    background-color: #fff;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

</style>
  ${this._renderBadge()}
`;}
