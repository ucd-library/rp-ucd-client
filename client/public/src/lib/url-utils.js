import config from "../config.js";

const UrlUtils = {

  /**
   * @method idAsLocalUrlPath
   * @description given an experts id, return the full local path
   * 
   * @param {String} id
   * 
   * @returns {String} 
   */
  idAsLocalUrlPath(id='') {
    return '/'+id.replace(config.data.prefix.ucdId+':', '');
  }
};

export default UrlUtils;