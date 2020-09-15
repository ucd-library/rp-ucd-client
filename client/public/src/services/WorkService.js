const {BaseService} = require('@ucd-lib/cork-app-utils');
const WorkStore = require('../stores/WorkStore');

class WorkService extends BaseService {

  constructor() {
    super();
    this.store = WorkStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.jsonldContext;
  }

  async getWork(id) {
    return this.request({
      url : `${this.baseUrl}/${this.jsonContext}%3Apublication${id}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.byWork[id],
      onLoading : request => this.store.setWorkLoading(id, request),
      onLoad : result => this.store.setWorkLoaded(id, result.body),
      onError : e => this.store.setWorkError(id, e)
    });
  }

}

module.exports = new WorkService();