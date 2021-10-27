import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`

<h1>Admin Dashboard</h1>

<div>
  <h2>Index Error Count <small>${this.errors.total}</small></h2>

  ${this.errors.results.map(item => html`
    <div><a href="/admin/${item['@id'].replace('ucdrp:', '')}">${item['@id']}</a></div>
  `)}
  <div></div>
</div>

`;}