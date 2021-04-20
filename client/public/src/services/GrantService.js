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
      checkCached : () => this.store.data.byGrant[id],
      onLoading : request => this.store.setGrantLoading(id, request),
      onLoad : result => this.store.setGrantLoaded(id, result.body),
      onError : e => this.store.setGrantError(id, e)
    });
  }

  /**
   * @method getAuthors
   * @description load authors associated with each grant
   * 
   * @param {String} grantId grant
   * @param {Object} authorArray author array
   * 
   * @returns {Promise} request 
   */
  async getAuthors(grantId, authorArray) {
    return this.request({
      url : `${this.baseUrl}/record/${authorArray.join(',')}`,
      checkCached : () => this.store.data.grantAuthors[grantId],
      onLoading : request => this.store.setAuthorLoading(grantId, request),
      onLoad : result => this.store.setAuthorLoaded(grantId, result.body),
      onError : e => this.store.setAuthorError(grantId, e)
    });
  }

}

module.exports = new GrantService();