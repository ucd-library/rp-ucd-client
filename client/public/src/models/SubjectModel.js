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

	// async getAuthors(subjectId, authors){
	// 	let state = {state : SubjectStore.STATE.INIT};
	// 	if( state.state === 'init' ) {
  //     await this.service.getAuthors(subjectId, authors);
  //   } else if( state.state === 'loading' ) {
  //     await state.request;
  //   }
  //   return this.store.data.subjectAuthors[subjectId];
	// } 

	getSubjectTypes(){
		return this.CollectionModel.subFacets.subjects;
	}
}

module.exports = new SubjectModel();