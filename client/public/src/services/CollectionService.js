const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.searchUrl = APP_CONFIG.data.apiUrl + "/search";
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

}

module.exports = new CollectionService();
