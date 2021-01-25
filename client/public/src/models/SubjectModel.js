const {BaseModel} = require('@ucd-lib/cork-app-utils');
const SubjectService = require('../services/SubjectService');
const SubjectStore = require('../stores/SubjectStore');

const CollectionModel = require('./CollectionModel');

class SubjectModel extends BaseModel {
	constructor(){
		super();

		this.store = SubjectStore;
		this.service = SubjectService;
		this.CollectionModel = CollectionModel;
		this.UrlLanding = '/subject/';
		
		this.register('SubjectModel');
	}

	async getSubject(id) {
		let state = {state: SubjectStore.STATE.INIT};
		if( state.state === 'init' ) {
			await this.service.getSubject(id);
		} else if( state.state === 'loading' ){
			await this.state.request;
		}
		return this.store.data.bySubject[id];
	}

	async getResearchers(id) {
		let state = {state: SubjectStore.STATE.INIT};
		if( state.state === 'init' ) {
			await this.service.getResearchers(id);
		} else if( state.state === 'loading' ){
			await this.state.request;
		}
		return this.store.data.researchersBySubject[id];
	}

	async getPubOverview(id) {
		let state = {state: SubjectStore.STATE.INIT};
		if( state.state === 'init' ) {
			await this.service.getPubOverview(id);
		} else if( state.state === 'loading' ){
			await this.state.request;
		}
		return this.store.data.pubOverviewBySubject[id];
	}

	async getPubs(id, pubType) {
		let state = {state: SubjectStore.STATE.INIT};
		let cacheId = JSON.stringify({subject: id, pub: pubType.id});
		if( state.state === 'init' ) {
			await this.service.getPubs(id, cacheId, pubType);
		} else if( state.state === 'loading' ){
			await this.state.request;
		}
		return this.store.data.pubsById[cacheId];
	}

	getSubjectTypes(){
		return this.CollectionModel.subFacets.subjects;
	}

	getPreferredLabel(subject){
		if (!subject || !subject.label) return "";
		if (subject.prefLabel) return subject.prefLabel;
		return subject.label;
	}

	getLandingPage(subject){
		if (!subject || !subject['@id']) return "";
		return `${this.UrlLanding}${encodeURIComponent(subject['@id'])}`
	}

	getSnippet(subject){
		let out = "";
		if (!subject || !subject._snippet) return out;
		if (subject._snippet.value) out = subject._snippet.value;
		return out;
	  }
}

module.exports = new SubjectModel();