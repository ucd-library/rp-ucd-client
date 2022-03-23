// import config from "../config.js";

/**
 * @class schemaOrgUtils
 * @description Utility library for doing schema.org transformations
 */
class schemaOrgUtils {

  constructor() {
    // TODO: how do we inject this both client site and server? 
    this.context = {
      'experts' : 'https://experts.ucdavis.edu'
    };
  }

  /**
   * @method asArray
   * @description Returns an array no matter what value you pass.
   * @param {*} v 
   * 
   * @returns {Array}
   */
  asArray(v){
    if ( !v ) return [];
    if ( !Array.isArray(v) ) v = [v];
    return v;
  }

  /**
   * @method unpackArray
   * @description If an array only has 1 value, returns value. Otherwise returns original array.
   * @param {Array} arr 
   * 
   * @returns {*}
   */
  unpackArray(arr) {
    if ( !Array.isArray(arr) || arr.length === 0 ) return null;
    if ( arr.length === 1 ) return arr[0];
    return arr;
  }

  /**
   * @method expandId
   * @description given a compacted id (ex: ucdrp:/person/11234) return
   * expanded id ex (https://experts.ucdavis.edu/person/11234) 
   * 
   * @param {String} id 
   * @returns {String}
   */
  expandId(id='') {
    for( let key in this.context ) {
      id = id.replace(new RegExp('^'+key+':'), this.context[key]+'/');
    }
    return id;
  }
}

export default new schemaOrgUtils();