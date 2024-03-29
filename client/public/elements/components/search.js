import { LitElement } from 'lit';
import render from './search.tpl.js';
import './dropdown';
import "./icon";

/**
 * @class RpSearch
 * @description Faceted search UI component
 */
export class RpSearch extends LitElement {
  static get properties() {
    return {
      facets: {type: Array},
      includeAllOption: {type: Boolean, attribute: 'include-all-option'},
      allOption: {type: Object},
      inputValue: {type: String, attribute: "input-value", reflect: true},
      placeholder: {type: String},
      activeFacet: {type: Number, attribute: 'active-facet', reflect: true},
      role: {type: String, reflect: true},
      ariaLabel: {type: String, attribute: "aria-label", reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.facets = [{"text": "PEOPLE"}, {"text": "ORGANIZATIONS"}, {"text": "WORKS"}, {"text": "SUBJECTS"}, {"text": "GRANTS"}];
    this.placeholder = "Search the registry";
    this.activeFacet = 0;
    this.inputValue = "";
    this.includeAllOption = false;
    this.allOption = {text: 'ALL', id: 'all'};
    this.role = "search";
    this.ariaLabel = "Faceted site-wide search";


    this._newSearch = new CustomEvent('new-search', {
      detail: {
        message: 'A new search has been triggered'
      }
    });
  }

  /**
   * @method updated
   * @description Lit method called when element updates
   * @param {Map} props - Changed properties
   */
  updated(props) {
    if (props.has('inputValue') || props.has('activeFacet')) {
      this.searchObject = {search: this.inputValue, facet: this.getDropdownOptions()[this.activeFacet]};
    }
    if ( props.has('activeFacet') ) {
      this.shadowRoot.getElementById('input').focus();
    }
  }

  /**
   * @method getDropdownOptions
   * @description Returns dropdown facets
   * 
   * @returns {Object[]}
   */
  getDropdownOptions(){
    if (this.includeAllOption) return [this.allOption, ...this.facets];
    return this.facets;
  }

  /**
   * @method _doSearch
   * @description Dispatches the 'new-search' event.
   */
  doSearch() {
    if (!this.inputValue) {
      return;
    }
    this.dispatchEvent(this._newSearch);
  }

  /**
   * @method _handleKeyup
   * @description Bound to Enter keypress event on the input
   * @param {Event} e 
   */
  _handleKeyup(e) {
    if (e.keyCode === 13 || e.code === 'Enter') {
      e.preventDefault();
      this.doSearch();
    }
  }
}

customElements.define('rp-search', RpSearch);
