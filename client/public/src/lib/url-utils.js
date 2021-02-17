module.exports = {

  /**
   * @method idAsLocalUrlPath
   * @description given an experts id, return the full local path
   * 
   * @param {String} id
   * 
   * @returns {String} 
   */
  idAsLocalUrlPath(id='') {
    return '/'+id.replace(APP_CONFIG.data.prefix.ucdId+':', '');
  }
};