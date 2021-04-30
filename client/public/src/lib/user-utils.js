const rdfUtils = require('./rdf-utils').default;

/**
 * @class UserUtils
 * @description Utility class for interacting with the user object after app login.
 */
class UserUtils {

  /**
   * @method getUserDisplayName
   * @description return formated user name from user object
   * 
   * @param {Object} user
   * 
   * @returns {String}
   */
  getUserDisplayName(user) {
    if( !user ) return '';

    let displayName = rdfUtils.asArray(user.displayname);
    if( displayName.length > 0 ) {
      return displayName[0];
    }
    if( rdfUtils.asArray(user.givenname).length > 0 && user.sn ) {
      return rdfUtils.asArray(user.givenname)[0] + ' ' + user.sn;
    }
    return user.username.split('@')[0];
  }

  /**
   * @method getUserId
   * @description return user id from user object
   * @param {*} user 
   * 
   * @returns {String}
   */
  getUserId(user) {
    if( !user ) return '';
    // if (user.uid) return user.uid;
    if (user['@id']) return user['@id'];
    if (user.expertsId) return user.expertsId;
    return user.username;
  }

  /**
   * @method getUserFirstName
   * @description returns user's first name from user object
   * 
   * @param {Object} user 
   * @param {String|String[]} fallback - Optional field(s) to return if no first name
   * 
   * @returns {String}
   */
  getUserFirstName(user, fallback='splitUsername') {
    if( !user ) return '';

    let fname = user.givenname;
    if ( fname ) return fname;

    let displayName = this.getUserDisplayName(user);
    if( displayName ) return displayName;

    if ( !fallback ) fallback = [];
    if ( !Array.isArray(fallback) ) fallback = [fallback];
    for (const field of fallback) {
      if ( field && user[field] ) return user[field];
      if ( field == 'splitUsername') return user.username.split('@')[0];
    }
    return "";
  }

  /**
   * @method isAdmin
   * @description checks if user is a site admin
   * 
   * @param {Object} user 
   * 
   * @returns {Boolean}
   */
  isAdmin(user) {
    if ( !user ) return false;
    if ( Array.isArray(user.roles) && user.roles.includes('admin')) return true;
    return false;
  }

}

module.exports = new UserUtils();