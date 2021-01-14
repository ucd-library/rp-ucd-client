import { LitElement, html } from 'lit-element';
import render from "./rp-page-subjects.tpl.js"

import RpUtilsCollection from "../../utils/rp-utils-collection";

import "../../components/alert";

export default class RpPageSubjects extends RpUtilsCollection {

	static get properties(){
		return {
		}
	} 

	constructor(){
		super();
		this.render = render.bind(this);

		this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
	}

	async doUpdate(state){
		requestAnimationFrame( () => this.doUpdate(state));
	}

	async doUpdate(state){
		await this.updateComplete;
		if (!this.visible){
			return;
		}
		this._parseUrlQuery(state);
    await Promise.all([this._doMainQuery(), this._getFacets(), this._getAzAgg()]);
	}

	async _getFacets() {
		let activeFilters = {};
		let subjectsAggs = await this.CollectionModel.overview('subjectsAggs');
		this.subFacetStatus = subjectsAggs.state;
		if (subjectsAggs.state != 'loaded'){
			return;
		}
		console.log("subjectsAggs", subjectsAggs);
		this.subFacets = this.CollectionModel._getSubFacets('subjects', subjectsAggs.payload, this.currentQuery);
	}


}

customElements.define('rp-page-subjects', RpPageSubjects);
