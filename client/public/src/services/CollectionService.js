const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');
const config = require('../config').default;

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    this.baseUrl = config.data.apiUrl;
    this.searchUrl = config.data.apiUrl + "/search";
  }
  
  async overview(id, searchObject) {
    return this.request({
      url : this.searchUrl,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.overview[id],
      onLoading : request => this.store.setOverviewLoading(id, request),
      onLoad : result => this.store.setOverviewLoaded(id, result.body),
      onError : e => this.store.setOverviewError(id, e)
    });
  }

  async searchAgg(id, searchObject) {
    return this.request({
      url : this.searchUrl,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.searchAggs[id],
      onLoading : request => this.store.setSearchAggsLoading(id, request),
      onLoad : result => this.store.setSearchAggsLoaded(id, result.body),
      onError : e => this.store.setSearchAggsError(id, e)
    });
  }

  async azAgg(id, searchObject) {
    return this.request({
      url : this.searchUrl,
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.azAggs[id],
      onLoading : request => this.store.setAzAggsLoading(id, request),
      onLoad : result => this.store.setAzAggsLoaded(id, result.body),
      onError : e => this.store.setAzAggsError(id, e)
    });
  }

  async query(id, searchObject) {
    return this.request({
      url : this.searchUrl+'?debug=true',
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(searchObject)
      },
      checkCached : () => this.store.data.queryById[id],
      onLoading : request => this.store.setQueryLoading(id, request),
      onLoad : result => this.store.setQueryLoaded(id, result.body),
      onError : e => this.store.setQueryError(id, e)
    });
  }

}

module.exports = new CollectionService();
