const {BaseService} = require('@ucd-lib/cork-app-utils');
const PersonStore = require('../stores/PersonStore');

class PersonService extends BaseService {

  constructor() {
    super();
    this.store = PersonStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.jsonldContext;
  }

  async getIndividual(id) {
    return this.request({
      url : `${this.baseUrl}/${this.jsonContext}%3A${id}`,
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

  async getPublications(personid, searchObject={}, storeid="") {
    if (!searchObject.filters) {
      searchObject.filters = {};
    }
    if (!storeid) {
      storeid = personid
    }
    searchObject.filters['Authorship.identifiers.@id'] = {
      "type": "keyword",
      "op" : "and",
      "value": [`${this.jsonContext}:${personid}`]
    }
    if (!searchObject.offset) {
      searchObject.offset = 0;
    }
    if (!searchObject.limit) {
      searchObject.limit = 10;
    }

    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.pubsByIndividual[storeid],
      onLoading : request => this.store.setPubsLoading(storeid, request),
      onLoad : result => this.store.setPubsLoaded(storeid, result.body),
      onError : e => this.store.setPubsError(storeid, e)
    });
  }

}

module.exports = new PersonService();
