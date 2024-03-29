const {BaseService} = require('@ucd-lib/cork-app-utils');
const PersonStore = require('../stores/PersonStore');
const queryUtils = require('../lib/query-utils');
const config = require('../config').default;

class PersonService extends BaseService {

  constructor() {
    super();
    this.store = PersonStore;

    this.baseUrl = (config.host || '') + config.data.apiUrl;
  }

  /**
   * @method get
   * @description get person by id
   * 
   * @param {String} id
   * 
   * @returns {Promise}
   */
  async get(id) {
    return this.request({
      url : this.baseUrl+'/record/'+queryUtils.appendIdPrefix(id),
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

  /**
   * @method getPubOverview
   * @description get publication overview for person
   * 
   * @param {String} id
   * 
   * @returns {Promise}
   */
  async getPubsOverview(id) {
    let searchObject = {
      offset: 0,
      limit: 0,
      sort: [],
      filters: {
        'Authorship.relates.@id': {
          type: "keyword", 
          op : "and", 
          value: [queryUtils.appendIdPrefix(id)]
        },
        publicationDate: {type: "exists"}
      },
      facets: {"@type": {type : "facet"}}
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
      checkCached : () => this.store.data.pubsOverview[id],
      onLoading : request => this.store.setPubsOverviewLoading(id, request),
      onLoad : result => this.store.setPubsOverviewLoaded(id, result.body),
      onError : e => this.store.setPubsOverviewError(id, e)
    });
  }

  getPublicationsRequestId(id, pubTypeObject, offset) {
    return `${id}-${pubTypeObject.id}-${offset}`;
  }

  getGrantsRequestId(id, offset) {
    return `grants-${id}-${offset}`;
  }

  async getGrants(id, offset) {
    let cacheId = this.getGrantsRequestId(id, offset);
    let query = {
      limit: 10,
      offset,
      sort: [{
        'dateTimeInterval.start.dateTime': {order: 'desc'}
      }],
      filters: {
        'relates.@id': {
          type: "keyword", 
          op : "and", 
          value: [queryUtils.appendIdPrefix(id)]
        },
        '@type' : {
          type : 'keyword',
          op : 'and',
          value : [config.data.types.grant]
        }
      },
      facets: {}
    };

    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(query)
      },
      checkCached : () => this.store.data.grantsByRequest[cacheId],
      onLoading : request => this.store.setGrantsLoading(cacheId, request),
      onLoad : result => this.store.setGrantsLoaded(cacheId, result.body),
      onError : e => this.store.setGrantsError(cacheId, e)
    });

    
  }

  async getPublications(id, pubTypeObject, offset) {
    let cacheId = this.getPublicationsRequestId(id, pubTypeObject, offset);

    
    let query = {
      offset,
      limit: 10,
      sort: [{
        publicationDate: {order : "desc"}
      }],
      filters: {
        'Authorship.relates.@id': {
          type: "keyword", 
          op : "and", 
          value: [queryUtils.appendIdPrefix(id)]
        },
        '@type': {
          type: "keyword", 
          op: "and", 
          value: [pubTypeObject.es],
        },
        publicationDate: {
          type: "exists"
        }
      },
      facets: {}
    };

    return this.request({
      url : `${this.baseUrl}/search`,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(query)
      },
      checkCached : () => this.store.data.pubsByRequest[cacheId],
      onLoading : request => this.store.setPubsLoading(cacheId, request),
      onLoad : result => this.store.setPubsLoaded(cacheId, result.body),
      onError : e => this.store.setPubsError(cacheId, e)
    });
  }

  /**
   * @method harvest
   * @description start the harvest process for a person
   * 
   * @param {String} id user id
   * 
   * @returns {Promise}
   */
  async harvest(id) {
    return this.request({
      url : '/harvest/'+id,
      fetchOptions : {
        method : 'POST'
      }
    });
  }

}

module.exports = new PersonService();
