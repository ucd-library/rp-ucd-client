import {BaseModel} from '@ucd-lib/cork-app-utils';
import ResolverService from '../services/ResolverService.js';
import ResolverStore from '../stores/ResolverStore.js';

class ResolverModel extends BaseModel {

  constructor() {
    super();

    this.store = ResolverStore;
    this.service = ResolverService;
      
    this.register('ResolverModel');
  }

  /**
   * @method resolve
   * @description resolve id to aggie experts id
   * 
   * @param {String} id id to resolve
   * 
   * @returns {Promise} 
   */
  async resolve(id) {
    let state = this.store.data[id];

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.resolve(id);
    }

    return this.store.data[id];
  }

}

const model = new ResolverModel();
export default model;