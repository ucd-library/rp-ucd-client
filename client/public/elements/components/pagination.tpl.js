import { html } from 'lit-element';
export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-primary);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .container-center {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;
      min-width: 40px;
      min-height: 40px;
    }
    .page:hover {
      color: var(--tcolor-link-hover-text);
    }
    .page.selected {
      background-color: var(--tcolor-secondary);
      pointer-events: none;
      cursor: auto;
    }
    .page.selected:hover {
      color: var(--tcolor-primary);
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;
      margin-left: 4px;
      margin-right: 4px;
    }
    iron-icon {
      cursor: pointer;
    }
    iron-icon:hover {
      color: var(--tcolor-link-hover-text);
    }
    iron-icon[disabled]:hover {
      color: var(--tcolor-primary-disabled);
    }
    iron-icon[disabled] {
      color: var(--tcolor-primary-disabled);
      pointer-events: none;
    }
  </style>
  <div class=container>
    <iron-icon 
      ?disabled="${this.currentPage == this.minPage || !this._hasValidLogic() }"
      @click="${e => this.handleClick(e.target)}"
      page="${this.currentPage - 1}"
      @keyup="${e => {if (e.code === 'Enter') this.handleClick(e.target);}}"
      tabindex="0"
      role="button"
      aria-label="Go to previous page"
      icon="arrow-back">
    </iron-icon>
    <div class="container-center">
      ${this._renderEdge('left')}
      ${this._renderCenter()}
      ${this._renderEdge('right')}
    </div>
    <iron-icon 
      ?disabled="${this.currentPage == this.maxPage || !this._hasValidLogic() }"
      @click="${e => this.handleClick(e.target)}"
      page="${this.currentPage + 1}"
      @keyup="${e => {if (e.code === 'Enter') this.handleClick(e.target);}}"
      tabindex="0"
      role="button"
      aria-label="Go to next page"
      icon="arrow-forward">
    </iron-icon>
  </div>
  `;
}
