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
    if( user.displayname ) {
      return user.displayname;
    }
    if( user.displayname ) {
      return user.displayname;
    }
    if( user.givenname && user.sn ) {
      return user.givenname + ' ' + user.sn;
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
    if (user.uid) return user.uid;
    return user.username.split('@')[0];
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

    if ( !fallback ) fallback = [];
    if ( !Array.isArray(fallback) ) fallback = [fallback];
    for (const field of fallback) {
      if ( field && user[field] ) return user[field];
      if ( field == 'splitUsername') return user.username.split('@')[0];
    }
    return "";
  }

}

module.exports = new UserUtils();