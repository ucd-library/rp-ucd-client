import { html } from 'lit-element';

export default function render() {
return html`
<style>
  :host {
    display: inline-block;
  }
  span {
    display: inline-block;
    border: 2px solid;
    border-radius: 1em;
    padding: .3em .7em;
    line-height: 1;
    border-color: var(--tcolor-accent0);
    transition: 0.4s;
  }
  span.size-lg {
    padding: .55em .9em;
  }
  span.color-0 {
    border-color: var(--tcolor-accent0)
  }
  a:hover span.color-0 {
      background-color: var(--tcolor-accent0)
  }
  span.color-1 {
    border-color: var(--tcolor-accent1)
  }
  a:hover span.color-1 {
      background-color: var(--tcolor-accent1)
  }
  span.color-2 {
    border-color: var(--tcolor-accent2)
  }
  a:hover span.color-2 {
      background-color: var(--tcolor-accent2)
  }
  span.color-3 {
    border-color: var(--tcolor-accent3)
  }
  a:hover span.color-3 {
      background-color: var(--tcolor-accent3)
  }
  span.color-4 {
    border-color: var(--tcolor-accent4)
  }
  a:hover span.color-4 {
      background-color: var(--tcolor-accent4)
  }
  span.color-5 {
    border-color: var(--tcolor-accent5)
  }
  a:hover span.color-5 {
      background-color: var(--tcolor-accent5)
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

</style>
  ${this._renderBadge()}
`;}
