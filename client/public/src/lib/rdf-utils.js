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
    return obj === undefined ? null : obj;
  }

  /**
   * @method getLatestDate
   * @description given an data string or an array of date strings, 
   * return the latest date as a date object
   * 
   * @param {String|Array} dates
   * 
   * @returns {Date}
   */
  getLatestDate(dates) {
    if( !Array.isArray(dates) ) return new Date(dates);
    dates = dates.map(date => new Date(date));
    dates.sort((a, b) => a.getTime() < b.getTime() ? 1 : -1);
    return dates[0];
  }

}

export default new RdfUtils();