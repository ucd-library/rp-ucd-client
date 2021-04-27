const {BaseService} = require('@ucd-lib/cork-app-utils');
const GrantStore = require('../stores/GrantStore');
const queryUtils = require('../lib/query-utils');

class GrantService extends BaseService {

  constructor() {
    super();
    this.store = GrantStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.prefix.ucdId;
  }
 
  /**
   * @method getGrant
   * @param {String} id
   * @description from GrantModel call
   * 
   * @returns {Object} Request
   */  
  async getGrant(id) {
    return this.request({
      url : this.baseUrl+'/record/'+queryUtils.appendIdPrefix(id),
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.byGrant[id],
      onLoading : request => this.store.setGrantLoading(id, request),
      onLoad : result => this.store.setGrantLoaded(id, result.body),
      onError : e => this.store.setGrantError(id, e)
    });
  }

  /**
   * @method getContributors
   * @description load authors associated with each grant
   * 
   * @param {String} grantId grant
   * @param {Object} contributorArray contributor array
   * 
   * @returns {Promise} request 
   */
  async getContributors(grantId, contributorArray) {
    return this.request({
      url : `${this.baseUrl}/record/${contributorArray.join(',')}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.grantContributors[grantId],
      onLoading : request => this.store.setContributorLoading(grantId, request),
      onLoad : result => this.store.setContributorLoaded(grantId, result.body),
      onError : e => this.store.setContributorError(grantId, e)
    });
  }

}

module.exports = new GrantService();