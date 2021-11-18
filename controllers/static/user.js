import rpNodeUtils from '@ucd-lib/rp-node-utils';
const {logger, auth, elasticSearch, redis} = rpNodeUtils;
import config from '../../lib/config.js';

/**
 * @class UserAuthController
 * @description handle user authentication and data lookup for static controller
 */
class UserAuthController {

  /**
   * @method handleRequest
   * @description handle http request for static spa route.  Lookup user based on
   * JWT token, look up nice name if one is not provided in token.  Impersonate
   * user if admin and impersonate flag set. Returns user object
   * 
   * @param {Request} req http request
   * 
   * @returns {Object}
   */
  async handleRequest(req) {
    // grab current user
    let user = null;
    let token = auth.getTokenFromRequest(req);
    if( token ) {
      try {
        user = await auth.verifyToken(token, auth.getRequestIp(req));

        // set has profile flag
        try {
          user.expertsId = await this.getExpertsId(user.uid || (user.username || '').split('@')[0] );
        } catch(e) {}

        // fetch additional user properties
        let authProps = await redis.client.get(config.redis.prefixes.authProperties+user.username);
        if( authProps ) {
          authProps = JSON.parse(authProps);
          config.server.userAuthProps.forEach(prop => user[prop] = authProps[prop]);
        }

      } catch(e) {
        logger.error('error parsing jwt token: ', e);
      }
    }

    // check for admin impersonation
    if( user && req.cookies.impersonate && (user.roles || []).includes('admin') ) {
      logger.info(`user ${user.username} is impersonating: ${req.cookies.impersonate}`);
      user = {
        impersonatedBy : user,
        roles : [],
        username : '',
        expertsId : req.cookies.impersonate
      };

      // fetch additional user properties
      let authProps = await redis.client.get(config.redis.prefixes.authProperties+user.username);
      if( authProps ) {
        authProps = JSON.parse(authProps);
        config.server.userAuthProps.forEach(prop => user[prop] = authProps[prop]);
      }
    }

    // try to get a nice name from experts record if we don't have one from some reason
    if( user && !user.displayname ) {
      let record = await this.getExpertRecord(user.expertsId);
      user.displayname = record.label || '';
    }

    return user;
  }


  /**
   * @method getExpertRecord
   * @description given a experts id, return model record from 
   * elastic search
   * 
   * @param {String} id 
   * 
   * @returns {Object}
   */
  async getExpertRecord(id) {
    try {
      let resp = await elasticSearch.client.get({
        index: config.elasticSearch.indexAlias,
        id : 'ucdrp:'+id
      });
      return resp._source;
    } catch(e) {
      logger.info(e);
    }
    return {};
  }
  
  /**
   * @method getExpertsId
   * @description given a cas id, aggie experts id
   * 
   * @param {String} casId 
   * 
   * @returns {String}
   */
  async getExpertsId(casId) {
    try {
      let resp = await elasticSearch.client.search({
        index: config.elasticSearch.indexAlias,
        body : {
          query : {
            bool : {
              filter : [
                {term : {casId}},
              ]
            }
          }
        }
      });
  
      if( resp.hits && resp.hits.hits && resp.hits.hits.length ) {
        return resp.hits.hits[0]._source['@id'].replace('ucdrp:', '');
      }
  
    } catch(e) {
      logger.info(e);
    }
    return false;
  }
  


}

const controller = new UserAuthController();
export {controller as userAuthController};