const {BaseModel} = require('@ucd-lib/cork-app-utils');
const { NoEmitOnErrorsPlugin } = require('webpack');
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

	getSubjectTypes(){
		return this.CollectionModel.subFacets.subjects;
	}

	getPreferredLabel(subject){
		if (!subject || !subject.label) return "";
		if (subject.prefLabel) return subject.prefLabel;
		return subject.label;
	}

	getRelatedSubjects(subject, type){
		if (type == "narrow"){
			if (subject.narrower) return subject.narrower;
			else return false;
		}
		else if (type == "broader"){
			if (subject.broader) return subject.broader;
			else return false;
		}
	}

	// getRelatedSubjectsNarrower(subject){
	// 	if (subject.narrower) return subject.narrower;
	// }

	// getRelatedSubjectsBroader(subject){
	// 	if (subject.broader) return subject.broader;
	// }

	getLandingPage(subject){
		if (!subject || !subject['@id']) return "";
		return `${this.UrlLanding}${encodeURIComponent(subject['@id'])}`
	}
}

module.exports = new SubjectModel();