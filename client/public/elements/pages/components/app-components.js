import { LitElement } from 'lit-element';
import render from "./app-components.tpl.js"
//import { colorStyles } from '../../styles/site.js';

export class AppPageComponents extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}
customElements.define('app-page-components', AppPageComponents);
