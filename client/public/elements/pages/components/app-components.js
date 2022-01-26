import { LitElement } from 'lit';
import render from "./app-components.tpl.js";
//import { colorStyles } from '../../styles/site.js';


export class AppPageComponents extends Mixin(LitElement)
.with(LitCorkUtils) {

  static get properties() {
    return {
      exampleWorks: {type: Array},
      exampleOrgs: {type: Array},
      exampleSubjects : {type: Array},
      exampleGrants : {type: Array},
      visible: {type: Boolean}
    };
    } 
  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel');
    this.visible = false;
    this.exampleWorks = [];
    this.exampleSubjects = [];
    this.exampleOrgs = [];
    this.exampleGrants = [];
    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }

  async doUpdate(state){
    console.log(state);
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    await Promise.all([this.getWorks(), this.getSubjects() ,this.getOrgs(), this.getGrants()]);
  }

  async getWorks(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:publication"]}}};
    let data = await this.CollectionModel.query(q);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleWorks = data.payload.results;

  }

  async getSubjects(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:subjectArea"]}}};
    let data = await this.CollectionModel.query(q);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleSubjects = data.payload.results;
  }

  async getGrants(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:grant"]}}};
    let data = await this.CollectionModel.query(q);
    if (data.state != 'loaded') {
      return;
    }
    this.exampleGrants = data.payload.results;
  }

  async getOrgs(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:organization"]}}};
    let data = await this.CollectionModel.query(q);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleOrgs = data.payload.results;

  }

  addToast(){
    this.shadowRoot.querySelector("#ToastMessage").appendChild(document.createElement('rp-toast-message'));
  }
}
customElements.define('app-page-components', AppPageComponents);
