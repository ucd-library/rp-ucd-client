/**
 * @class schemaOrgUtils
 * @description Utility library for doing schema.org transformations
 */
class schemaOrgUtils {

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
}

export default new schemaOrgUtils();