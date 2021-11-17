import {BaseService} from '@ucd-lib/cork-app-utils';
import ResolverStore from '../stores/ResolverStore.js';
import config from "../config.js";

class ResolverService extends BaseService {

  constructor() {
    super();
    this.store = ResolverStore;
    this.baseUrl = (config.host || '') + config.data.apiUrl;
  }

  /**
   * @method resolve
   * @description resolve a aggie experts id
   * 
   * @param {String} id id to resolve
   * 
   * @returns {Promise}
   */
  async resolve(id) {
    return this.request({
      url : this.baseUrl+'/resolve/'+id,
      checkCached : () => this.store.data[id],
      onLoading : request => this.store.setResolvedLoading(id, request),
      onLoad : result => this.store.setResolvedLoaded(id, result.body),
      onError : e => this.store.setResolvedError(id, e)
    });
  }
  

}

const service = new ResolverService();
export default service;