const {BaseStore} = require('@ucd-lib/cork-app-utils');

class OrganizationStore extends BaseStore {

  constructor() {
    super();

    this.data = {
      byOrganization: {}
    };
    this.events = {};
  }

  setOrganizationLoading(id, request) {
    this._setOrganizationState({
      state: this.STATE.LOADING,
      id, request
    });
  }

  setOrganizationLoaded(id, payload) {
    this._setOrganizationState({
      state: this.STATE.LOADED,
      id, payload
    });
  }

  setOrganizationError(id, error) {
    this._setOrganizationState({
      state: this.STATE.ERROR,
      id, error
    });
  }

  _setOrganizationState(state) {
    //if( !this.stateChanged(this.data.overview[id], state) ) return;
    this.data.byOrganization[state.id] = state;
  }

}

module.exports = new OrganizationStore();