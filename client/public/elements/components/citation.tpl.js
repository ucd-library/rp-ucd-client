import { html } from 'lit-element';

export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--font-size);
    }
    a {
      color: var(--tcolor-link-text)
    }
    .venue {
      text-transform: capitalize;
    }
    [hidden] {
      display: none !important;
    }
  </style>
  <div class="container" ?hidden="${!this.data}">
  ${this.citationStyle == 'rp' ? html`
    <a href="${this.href}">${this.title}</a>
    <span class="authors">
      ${this.authors.ranked.map((author, i) => html`
        <span class="author">${author._client.citationText}</span>${i+1 < this.authors.ranked.length ? html`<span>, </span>` : html`<span>.</span>`}
      `)}
    </span>
    ${this.venue ? html`
      <span class="venue">${this.venue}.</span>
    ` : html``}
    ${this.venueLocation ? html`
      <span class="venue-location">${this.venueLocation}.</span>
    ` : html``}
  ` : html``}
  </div>
  `;
}
