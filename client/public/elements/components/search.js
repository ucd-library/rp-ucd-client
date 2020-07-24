import { LitElement, html } from 'lit-element';
import render from './search.tpl.js';
import './dropdown';
import "./icon";

export class RpSearch extends LitElement {
  static get properties() {
  return {
    facets: {type: Array},
    inputValue: {type: String, attribute: "input-value", reflect: true},
    placeholder: {type: String},
    activeFacet: {type: parseInt, attribute: 'active-facet', reflect: true}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.facets = [{"text": "PEOPLE"}, {"text": "ORGANIZATIONS"}, {"text": "WORKS"}];
    this.placeholder = "Search the registry";
    this.activeFacet = 0;
    this.inputValue = "";

    this._newSearch = new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });
  }

  updated(changedProperties) {

    if (changedProperties.has('inputValue') || changedProperties.has('activeFacet')) {
      this.searchObject = {search: this.inputValue, facet: this.facets[this.activeFacet]};
    }
  }

  _constructClasses() {
    let classes = {};

    return classes;
  }

  doSearch() {
    if (!this.inputValue) {
      return;
    }
    this.dispatchEvent(this._newSearch);
  }

  _handleKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.doSearch();
    }
  }
}

customElements.define('rp-search', RpSearch);
