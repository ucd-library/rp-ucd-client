const {BaseService} = require('@ucd-lib/cork-app-utils');
const SubjectStore = require('../stores/SubjectStore');

class SubjectService extends BaseService {
  constructor() {
    super();
    this.store = SubjectStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.searchUrl = APP_CONFIG.data.apiUrl + "/search";
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

  async getResearchers(subjectId) {
    let searchObject = {
      offset: 0,
      limit: 10,
      filters: {
        "@type": {"type": "keyword", "op": "and", "value": ["ucdrp:person"]},
        "hasResearchArea.@id": {"type": "keyword", "op": "and", "value": [subjectId]}
      }
    }
    return this.request({
      url : this.searchUrl,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.researchersBySubject[subjectId],
      onLoading : request => this.store.setResearcherLoading(subjectId, request),
      onLoad : result => this.store.setResearcherLoaded(subjectId, result.body),
      onError : e => this.store.setResearcherError(subjectId, e)
    });
  }

}

module.exports = new SubjectService();
