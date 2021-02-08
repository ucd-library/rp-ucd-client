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

  /**
   * @method getSubject
   * @param {String} id
   * @description from SubjectModel call
   * 
   * @returns {Object} Request
   */  
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

  /**
   * @method getRandomSubjects
   * @description load random subjects.  Used in home page
   * 
   * @param {String} id cache id
   * @param {Number} count count to return
   * 
   * @returns {Promise} request 
   */
  async getRandomSubjects(id='random-subject', count=10){
    return this.request({
      url : `${this.baseUrl}/subject-terms/random/${count}`,
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
        "@type": {"type": "keyword", "op": "and", "value": [`${this.jsonContext}:person`]},
        "_.allResearchArea": {"type": "keyword", "op": "and", "value": [subjectId]}
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

  async getPubOverview(subjectId) {
    let searchObject = {
      offset: 0,
      limit: 0,
      sort: [],
      filters: {
        "@type": {"type": "keyword", "op": "and", "value": [`${this.jsonContext}:publication`]},
        '_.allSubjectArea': {"type": "keyword", "op": "and", "value": [subjectId]},
        'publicationDate': {"type": "exists"}
      },
      facets: {"@type": {"type" : "facet"}}
    };

    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.pubOverviewBySubject[subjectId],
      onLoading : request => this.store.setPubOverviewLoading(subjectId, request),
      onLoad : result => this.store.setPubOverviewLoaded(subjectId, result.body),
      onError : e => this.store.setPubOverviewError(subjectId, e)
    });
  } 

  async getPubs(subjectId, cacheId, pubType) {
    let searchObject = {
      offset: 0,
      limit: 5,
      sort: [{"publicationDate": {"order" : "desc"}}],
      filters: {
        '_.allSubjectArea': {"type": "keyword", "op": "and", "value": [subjectId]},
        'publicationDate': {"type": "exists"}
      },
      facets: {"@type": {"type" : "facet"}}
    };
    searchObject.filters = {...searchObject.filters, ...pubType.baseFilter}

    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.pubsById[cacheId],
      onLoading : request => this.store.setPubLoading(cacheId, request),
      onLoad : result => this.store.setPubLoaded(cacheId, result.body),
      onError : e => this.store.setPubError(cacheId, e)
    });
  }

}

module.exports = new SubjectService();
