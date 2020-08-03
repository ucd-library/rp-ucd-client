const {BaseModel} = require('@ucd-lib/cork-app-utils');
const CollectionService = require('../services/CollectionService');
const CollectionStore = require('../stores/CollectionStore');

class CollectionModel extends BaseModel {

  constructor() {
    super();

    this.store = CollectionStore;
    this.service = CollectionService;

    this.baseQueryObject = {offset: 0,
                            limit: 10,
                            sort: [{}],
                            filters: {},
                            facets: {}
                          }

    this.register('CollectionModel');
  }

  async overview(id) {
    let state = {state : CollectionStore.STATE.INIT};
    let queryObject = {...this.baseQueryObject};
    if (id == "facets") {
      queryObject.facets["@type"] = {"type" : "facet"};
      queryObject.limit = 0;
    }
    if( state.state === 'init' ) {
      await this.service.overview(id, queryObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.overview[id];
}

}

module.exports = new CollectionModel();
