import { html } from 'lit-element';
export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
      line-height: 1.8;
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    .letter {
      color: var(--tcolor-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 22px;
      min-height: 22px;
      transition: 0.3s;
      cursor: pointer;
    }
    .letter:hover {
      color: var(--tcolor-link-hover-text);
    }
    .letter[disabled] {
      pointer-events: none;
      cursor: auto;
      color: var(--tcolor-link-disabled-text);
    }
    .letter.selected {
      font-weight: var(--font-weight-bold);
      pointer-events: none;
      cursor: auto;
      z-index: 1;
    }
    .letter.selected::before {
      content: "";
      border-radius: 50%;
      background-color: var(--tcolor-secondary);
      min-width: 30px;
      min-height: 30px;
      position: absolute;
      z-index: -1;
    }
    .letter.selected:hover {
      color: var(--tcolor-primary);
    }
    a {
      text-decoration: none;
      color: var(--tcolor-primary);
    }
    a:visited {
      color: var(--tcolor-primary);
    }
    .letter[disabled] a {
      color: var(--tcolor-link-disabled-text);
    }
  </style>
  <div class=container>
    ${this.azlist.map(letter => this._renderAz(letter))}
  </div>
  `;
}
