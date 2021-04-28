import { html } from 'lit-element';

export default function render() {
return html`
<style>
  :host {
    display: inline-block;
  }
  span.main {
    display: inline-block;
    border: 2px solid;
    border-radius: 1em;
    padding: .3em .7em;
    line-height: 1;
    border-color: var(--tcolor-accent0);
    transition: 0.3s;
  }
  span.main.ellipsis {
    border-color: var(--tcolor-bg-primary);
    background-color: var(--tcolor-bg-primary);
    color: var(--tcolor-primary);
    padding: 5px .7em;
  }
  span.size-lg {
    padding: .55em .9em;
    border-radius: 2em;
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
      background-color: var(--tcolor-hover-bg) !important;
      color:  var(--tcolor-hover-text) !important;
      border-color: var(--tcolor-hover-bg) !important;
  }
  span.color-0 {
    border-color: var(--tcolor-accent0);
  }
  span.color-1 {
    border-color: var(--tcolor-accent1);
  }
  span.color-2 {
    border-color: var(--tcolor-accent2);
  }
  span.color-3 {
    border-color: var(--tcolor-accent3);
  }
  span.color-4 {
    border-color: var(--tcolor-accent4);
  }
  span.color-5 {
    border-color: var(--tcolor-accent5);
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: var(--tcolor-text);
  }
  a:visited {
    color: var(--tcolor-text);
  }
  a:hover {
    color: var(--tcolor-text);
  }
  a:active {
    color: var(--tcolor-text);
  }
  /* .dot {
    width: 6px;
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    background-color: var(--tcolor-primary);
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
