const {BaseService} = require('@ucd-lib/cork-app-utils');
const OrganizationStore = require('../stores/OrganizationStore');
const config = require('../config').default;

class OrganizationService extends BaseService {

  constructor() {
    super();
    this.store = OrganizationStore;

    this.baseUrl = config.data.apiUrl;
  }

  async getOrganization(id) {
    return this.request({
      url : `${this.baseUrl}/${config.data.prefix.ucdId}%3Ag-${id}`,
      fetchOptions : {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      },
      checkCached : () => this.store.data.byOrganization[id],
      onLoading : request => this.store.setOrganizationLoading(id, request),
      onLoad : result => this.store.setOrganizationLoaded(id, result.body),
      onError : e => this.store.setOrganizationError(id, e)
    });
  }

}

module.exports = new OrganizationService();