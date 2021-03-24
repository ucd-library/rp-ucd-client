import config from '../../lib/config.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import {getTransformByType} from '../../lib/schema-org-transforms/index.js'; 
const {logger, elasticSearch} = rpNodeUtils;

/**
 * @class StaticModelController
 * @description static route helpers and seo transforms for 
 * aggie experts models
 */
class StaticModelController {

  /**
   * @method handleRequest
   * @description handle incoming http request, see if it's a registered model
   * route, if so look up model to see if it exists
   * 
   * return {
   *  isModel : [Boolean],
   *  is404Model : [Boolean],
   *  model : [Object]
   * }
   * 
   * @param {Request} req express request
   *  
   * @returns {Object}
   */
  async handleRequest(req) {
    let model = req.originalUrl.replace(/^\//, '').split('/')[0];
    if( !config.client.modelRoutes.includes(model) ) {
      return {isModel: false};
    }

    // first check that item exists
    model = await this.getExpertRecord(req.originalUrl.replace(/^\//, ''));
    if( !model ) {
      return {is404Model: true, isModel: true};
    }

    return {model, isModel: true};
  }

  /**
   * @method transformModel
   * @description given a aggie experts model, lookup correct transform function
   * and transform into schema.org jsonld stringified object
   * 
   * @param {Object} model
   *  
   * @returns {String}
   */
  transformModel(model) {
    let jsonld = '';

    let transform = getTransformByType(model['@type']);
    if( !transform ) return jsonld;

    try {
      jsonld = JSON.stringify(transform(model), '  ', '  ');
    } catch(e) {
      logger.error(`failed to transform model: ${model['@id']}`, e);
    }

    return jsonld;
  }

  /**
   * @method getExpertRecord
   * @description given a experts id, return model record from 
   * elastic search
   * 
   * @param {String} id 
   * 
   * @returns {Object|null}
   */
  async getExpertRecord(id) {
    try {
      let resp = await elasticSearch.client.get({
        index: config.elasticSearch.indexAlias,
        id : 'ucdrp:'+id
      });
      return resp._source;
    } catch(e) {
      logger.info('unable to locate experts record for: '+'ucdrp:'+id);
    }
    return null;
  }

}

const controller = new StaticModelController();
export {controller as staticModelController};