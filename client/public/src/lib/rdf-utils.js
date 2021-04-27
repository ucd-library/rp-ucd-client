class RdfUtils {
  /**
   * @method asArray
   * @description given object property, ensure it's an
   * array.  Undefined will retun empty array. 
   * 
   * @param {*} property 
   * @returns {Array}
   */
  asArray(property) {
    if( property === undefined ) return [];
    if( !Array.isArray(property) ) {
      property = [property];
    }
    return property;
  }
  /**
   * @method getFirstValue
   * @description return the first value in an array
   * 
   * @param {*} obj input property 
   * @returns *
   */
  getFirstValue(obj) {
    if( Array.isArray(obj) ) {
      if( obj.length === 0 ) return null;
      return obj[0];
    }
    return obj || null;
  }
}
export default new RdfUtils();