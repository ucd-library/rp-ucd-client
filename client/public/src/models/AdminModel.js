import {BaseModel} from '@ucd-lib/cork-app-utils';
import AdminService from '../services/AdminService.js';
import AdminStore from '../stores/AdminStore.js';

class AdminModel extends BaseModel {

  constructor() {
    super();

    this.store = AdminStore;
    this.service = AdminService;
      
    this.register('AdminModel');
  }

  async sparqlDescribe(id) {
    await this.service.sparqlDescribe(id);
    return this.store.data.sparql[id];
  }

  async esModelService(type, id) {
    await this.service.esModelService(type, id);
    return this.store.data.model[id];
  }

  async record(id) {
    await this.service.record(id);
    return this.store.data.record[id];
  }

  async get(id) {
    let jsonldState = await this.sparqlDescribe(id);
      
    let type = jsonldState.payload['@type']
      .filter(item => item.startsWith('experts:'))[0]
      .replace(/^experts:/, '');

    let record = await this.record(id);

    let model = await this.esModelService('person', id);

    let data = {
      type, id,
      model,
      fuseki : jsonldState,
      record : record
    };

    return data;
  }

}

const model = new AdminModel();
// test
// (async function() {
//   let id = 'ucdrp:person/b78c058911b45047c56f3b5148381715';
//   console.log(await model.get(id));
// })();

export default model;