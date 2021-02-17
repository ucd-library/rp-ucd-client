const {BaseService} = require('@ucd-lib/cork-app-utils');
const WorkStore = require('../stores/WorkStore');

class WorkService extends BaseService {

  constructor() {
    super();
    this.store = WorkStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    // this.jsonContext = APP_CONFIG.data.context.publication;
  }
 
  /**
   * @method getWork
   * @param {String} id
   * @description from WorkModel call
   * 
   * @returns {Object} Request
   */  
  async getWork(id) {
    return this.request({
      url : this.baseUrl+'/'+encodeURIComponent(this.jsonContext+':pub/'+id),
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

  /**
   * @method getAuthors
   * @description load authors associated with each work
   * 
   * @param {String} workId work
   * @param {Object} authorArray author array
   * 
   * @returns {Promise} request 
   */
  async getAuthors(workId, authorArray) {
    return this.request({
      url : `${this.baseUrl}/${authorArray.join(',')}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.workAuthors[workId],
      onLoading : request => this.store.setAuthorLoading(workId, request),
      onLoad : result => this.store.setAuthorLoaded(workId, result.body),
      onError : e => this.store.setAuthorError(workId, e)
    });
  }

}

module.exports = new WorkService();