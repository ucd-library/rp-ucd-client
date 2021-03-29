const {BaseModel} = require('@ucd-lib/cork-app-utils');
const OrganizationService = require('../services/OrganizationService');
const OrganizationStore = require('../stores/OrganizationStore');

class OrganizationModel extends BaseModel {

  constructor() {
    super();
 
    this.store = OrganizationStore;
    this.service = OrganizationService;
      
    this.register('OrganizationModel');
  }

  async getOrganization(id) {
    let state = this.store.data.byOrganization[id];
    if( state && state.request ) {
      await state.request;
    } else if( state.state === 'loading' ) {
      await this.service.getOrganization(id);
    }
    return this.store.data.byOrganization[id];
  }

}

module.exports = new OrganizationModel();