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

}

module.exports = new UserUtils();