const {BaseService} = require('@ucd-lib/cork-app-utils');
const SubjectStore = require('../stores/SubjectStore');

class SubjectService extends BaseService {
  constructor() {
    super();
    this.store = SubjectStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.jsonldContext;
    console.log(this.jsonContext);
  }

  async getSubject(id){
    return this.request({
      url : `${this.baseUrl}/${encodeURIComponent(id)}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.bySubject[id],
      onLoading : request => this.store.setSubjectLoading(id, request),
      onLoad : result => this.store.setSubjectLoaded(id, result.body),
      onError : e => this.store.setSubjectError(id, e)
    });
  }

  async getAuthors(subjectId, authorArray){
    return this.request({
      url : `${this.baseUrl}/${authorArray.join(',')}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.subjectAuthors[subjectId],
      onLoading : request => this.store.setAuthorLoading(subjectId, request),
      onLoad : result => this.store.setAuthorLoaded(subjectId, result.body),
      onError : e => this.store.setAuthorError(subjectId, e)
    });
  }
}

module.exports = new SubjectService();
