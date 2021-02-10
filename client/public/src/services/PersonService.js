const {BaseService} = require('@ucd-lib/cork-app-utils');
const PersonStore = require('../stores/PersonStore');

class PersonService extends BaseService {

  constructor() {
    super();
    this.store = PersonStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.context.person;
  }

  async getIndividual(id) {
    return this.request({
      url : this.baseUrl+'/'+encodeURIComponent(this.jsonContext+':'+id),
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.byIndividual[id],
      onLoading : request => this.store.setIndividualLoading(id, request),
      onLoad : result => this.store.setIndividualLoaded(id, result.body),
      onError : e => this.store.setIndividualError(id, e)
    });
  }

  async getPubsOverview(personid) {
    let searchObject = {
      offset: 0,
      limit: 0,
      sort: [],
      filters: {
        'Authorship.identifiers.@id': {
          type: "keyword", 
          op : "and", 
          value: [`${this.jsonContext}:${personid}`]},
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
      checkCached : () => this.store.data.pubsOverview[personid],
      onLoading : request => this.store.setPubsOverviewLoading(personid, request),
      onLoad : result => this.store.setPubsOverviewLoaded(personid, result.body),
      onError : e => this.store.setPubsOverviewError(personid, e)
    });
  }

  async getPublications(id, searchObject) {
    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.pubsByRequest[id],
      onLoading : request => this.store.setPubsLoading(id, request),
      onLoad : result => this.store.setPubsLoaded(id, result.body),
      onError : e => this.store.setPubsError(id, e)
    });
  }

}

module.exports = new PersonService();
