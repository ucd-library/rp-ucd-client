import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
      color: var(--ae-tcolor-link-text);
    }

    .scroller[enabled] {
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }

    .container {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
    }

    .container.direction-h {
      white-space:nowrap;
      text-align: center; 
    }
    ul.container.direction-h li {
      display: inline-block;
    }
    .container.direction-h .link {
      margin-left: .5em;
      margin-right: .5em;
    }
    .container.direction-v {
      flex-flow: column nowrap;
      align-items: flex-end;
    }
    .container.direction-v .link {
      margin-bottom: 1.5em;
    }
    .link {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: var(--ae-tcolor-link-text);
    }
    .link:hover, a.link:hover {
      color: var(--ae-tcolor-link-hover-text);
    }
    .link.selected, a.link.selected {
      pointer-events: none;
      color: var(--ae-tcolor-text);
      font-weight: var(--ae-font-weight-bold);
      cursor: auto;
      border-bottom: 2px solid var(--ae-tcolor-secondary);
    }
    .link.disabled, a.link.disabled {
      color: var(--ae-tcolor-link-disabled-text);
      pointer-events: none;
      cursor: auto;
    }
    link.disabeld:hover, a.link.disabled:hover {
      color: var(--ae-tcolor-link-disabled-text);
    }
    .link.selected:hover, a.link.selected:hover {
      color: var(--ae-tcolor-text);
    }
    @media (min-width: 480px) {
      .container.direction-h .link {
        margin-left: 1em;
        margin-right: 1em;
        white-space:nowrap;
        justify-content:start;  
      }
    }
    @media (max-width: 310px) {
      .container.direction-h {
        white-space:nowrap;
        justify-content:start;  
      }

    }
  </style>
  <div class="scroller" ?enabled="${this.direction.toLowerCase()[0] === 'h'}">
    <ul role="menubar" class="container ${classMap(this._constructClasses())} ">
      ${this.links.map((link, index) => this._renderLink(link, index))}
    </ul>
  </div>
  `;
}  
