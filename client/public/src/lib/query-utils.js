const config = require('../config').default;

/**
 * @class QueryUtils
 * @description Utility class for interacting with the API
 */
class QueryUtils {
  constructor(){
    this.defaultTypeFacet = {"@type": {"type" : "facet"}};
  }

  /**
   * @method getBaseQueryObject
   * @description Returns an empty query object template
   * @returns {Object}
   */
  getBaseQueryObject() {
    return {
      offset: 0,
      limit: 8,
      sort: [],
      filters: {},
      facets: {}
    };
  }

  /**
   * @method getQueryId
   * @description Constructs a string id from a query object
   * @param {Object} q - a query object
   * 
   * @returns {String} - A stringified version of the query
   */
  getQueryId(q) {
    if (!q) q = this.getBaseQueryObject();
    let id = {};
    for (let key in q) {
      if (key == 'facets') continue;
      if (key == 'textFields') continue;
      id[key] = q[key];
    }
    return JSON.stringify(id);
  }

  /**
   * @method getEmptyFilter
   * @description Returns an empty filter object
   * @param {String} filterType - type
   * @param {String} filterOp - operation
   * 
   * @returns {Object}
   */
  getEmptyFilter(filterType='keyword', filterOp='and') {
    return {"type": filterType, "op": filterOp, "value": []};
  }

  /**
   * @method getKeywordFilter
   * @description Returns a keyword filter object
   * @param {String[]|String} value - the filter value
   * @param {String} op - filter operation
   * 
   * @returns {Object}
   */
  getKeywordFilter(value, op='and') {
    if ( !Array.isArray(value) ) value = [value];
    let f = this.getEmptyFilter('keyword', op);
    f.value = value;
    return f;
  }

  getBrowseSort() {
    
  }

  /**
   * @method appendIdPrefix
   * @description append the ucd id prefix to a provided identifier
   * 
   * @param {String} id
   * 
   * @returns {String} 
   */
  appendIdPrefix(id) {
    if( id.startsWith(config.data.prefix.ucdId) ) {
      return id;
    }
    return config.data.prefix.ucdId+':'+id;
  }
}

//export default new QueryUtils();
module.exports = new QueryUtils();