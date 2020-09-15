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
    let state = {state : OrganizationStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getOrganization(id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.byOrganization[id];
  }

}

module.exports = new OrganizationModel();