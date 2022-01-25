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

  async analyze(payload) {
    try {
      await this.service.analyze(payload);
    } catch(e) {}
    return this.store.data.analyze;
  }

  async generateServiceToken(payload) {
    try {
      await this.service.generateServiceToken(payload);
    } catch(e) {}
    return this.store.data.serviceToken;
  }

  async requestIndex(opts) {
    try {
      await this.service.requestIndex(opts);
    } catch(e) {}
    return this.store.data.requestIndex;
  }

  async indexerStatus() {
    try {
      await this.service.indexerStatus();
    } catch(e) {}
    return this.store.data.indexerStatus;
  }

  async sparqlDescribe(id) {
    await this.service.sparqlDescribe(id);
    return this.store.data.sparql[id];
  }

  async esModelService(type, id, query) {
    try {
      await this.service.esModelService(type, id, query);
    } catch(e) {}
    return this.store.data.model[id];
  }

  async record(id) {
    await this.service.record(id);
    return this.store.data.record[id];
  }

  async get(id) {
    let jsonldState = await this.sparqlDescribe(id);
    let type;
    
    if( Array.isArray(jsonldState.payload['@type']) ) {
      type = jsonldState.payload['@type']
        .filter(item => item.startsWith('experts:'))[0];
    } else {
      type = jsonldState.payload['@type'];
    }
    if( type ) type = type.replace(/^experts:/, '').replace(/.*#/, '').toLowerCase();

    let record = await this.record(id);

    let model = await this.esModelService(type, id);

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


export default model;