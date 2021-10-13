import {BaseService} from '@ucd-lib/cork-app-utils';
import AdminStore from '../stores/AdminStore.js';
const queryUtils = require('../lib/query-utils');
const config = require('../config').default;

class AdminService extends BaseService {

  constructor() {
    super();
    this.store = AdminStore;
    this.baseUrl = '';
  }

  sparqlDescribe(id) {
    let query = `PREFIX experts: <http://experts.ucdavis.edu/schema#>
    PREFIX ucdrp: <http://experts.ucdavis.edu/>

    DESCRIBE <${id.replace(config.data.prefix.ucdId+':', 'http://experts.ucdavis.edu/')}>`;

    return this.request({
      url : this.baseUrl+'/fuseki',
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          'accept' : 'application/ld+json'
        },
        body: new URLSearchParams({
          query
        })
      },
      onLoading : request => this.store.sparqlLoading(id, request),
      onLoad : result => this.store.sparqlLoaded(id, JSON.parse(result.body)),
      onError : e => this.store.sparqlError(id, e)
    });
  }

  esModelService(type, id) {
    return this.request({
      url : this.baseUrl+'/indexer/model/'+type+'/'+queryUtils.appendIdPrefix(id),
      onLoading : request => this.store.esModelServiceLoading(id, request),
      onLoad : result => this.store.esModelServiceLoaded(id, result.body),
      onError : e => this.store.esModelServiceError(id, e)
    });
  }

  record(id) {
    return this.request({
      url : this.baseUrl+'/api/record/'+queryUtils.appendIdPrefix(id),
      qs : {
        allFields: true
      },
      onLoading : request => this.store.recordLoading(id, request),
      onLoad : result => this.store.recordLoaded(id, result.body),
      onError : e => this.store.recordError(id, e)
    });
  }

}

const service = new AdminService();
export default service;