import { LitElement, html } from 'lit-element';
import render from './citation.tpl.js';

export class RpCitation extends LitElement {
  static get properties() {
  return {
    title: {type: String},
    journal: {type: String},
    href: {type: String},
    pages: {type: String},
    citationStyle: {type: String, attribute: 'citation-style'}
  };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.citationStyle = "article";
  }

  constructClasses() {
    let classes = {};
    return classes;
  }

  handleClick(e){
    if (e.target.hasAttribute('disabled')) {
      return;
    }
    console.log("Citation was clicked: ", this.href);
  }

  _formatComponent(component, component_type) {
    if (!component) {
      return "";
    }
    if (component_type == 'title') {
      component += ".";
    }
    else if (component_type == 'journal') {
      component += ".";
    }
    return component;
  }
}

customElements.define('rp-citation', RpCitation);
