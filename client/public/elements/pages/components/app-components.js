import { LitElement } from 'lit-element';
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
    console.log("WORKS:",data);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleWorks = data.payload.results;

  }

  async getSubjects(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:subjectArea"]}}};
    let data = await this.CollectionModel.query(q);
    console.log("SUBJECTS:",data);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleSubjects = data.payload.results;
    console.log(this.exampleSubjects);
  }

  async getGrants(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:grant"]}}};
    let data = await this.CollectionModel.query(q);
    console.log("GRANTS:",data);
    if (data.state != 'loaded') {
      return;
    }
    this.exampleGrants = data.payload.results;
    console.log(this.exampleGrants);
  }

  async getOrgs(){
    let q = {filters: {"@type": {"type": "keyword", "op": "and", "value": ["experts:organization"]}}};
    let data = await this.CollectionModel.query(q);
    console.log("ORGS:",data);

    if (data.state != 'loaded') {
      return;
    }
    this.exampleOrgs = data.payload.results;
    console.log(this.exampleOrgs);

  }
}
customElements.define('app-page-components', AppPageComponents);
