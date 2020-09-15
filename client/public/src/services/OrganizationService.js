const {BaseService} = require('@ucd-lib/cork-app-utils');
const OrganizationStore = require('../stores/OrganizationStore');

class OrganizationService extends BaseService {

  constructor() {
    super();
    this.store = OrganizationStore;

    this.baseUrl = APP_CONFIG.data.apiUrl;
    this.jsonContext = APP_CONFIG.data.jsonldContext;
  }

  async getOrganization(id) {
    return this.request({
      url : `${this.baseUrl}/${this.jsonContext}%3Ag-${id}`,
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