const {BaseModel} = require('@ucd-lib/cork-app-utils');
const GrantService = require('../services/GrantService');
const GrantStore = require('../stores/GrantStore');
const rdfUtils = require('../lib/rdf-utils').default;

const CollectionModel = require('./CollectionModel');
const PersonModel = require('./PersonModel');

/**
 * @class GrantModel
 * @description powers the research grants
 */
class GrantModel extends BaseModel {

  constructor() {
    super();

    this.store = GrantStore;
    this.service = GrantService;
    this.CollectionModel = CollectionModel;
    this.PersonModel = PersonModel;

    this.UrlLanding = '/grant/';
    this.urlBrowse = '/grants';
    this.urlContributor = "/person/";

    // Only roles in this map will be shown in the UI
    // map should contain rdf @type property mapped to a UI label
    this.knownRoleMap = {
      'vivo:PrincipalInvestigatorRole' : 'Principal Investigator'
    };

    // TODO: JM - this needs to be fixed, I don't think it indicates a 'UCD Author'
    // as shown in the UI.

    //Add Group links when defined
    //this.grpsWithLinks = ["vivo:FacultyMember", "vivo:NonAcademic"];

    this.register('GrantModel');
  }

  /**
   * @method getGrant
   * @param {String} id
   * @description query the grant from the ID from the
   * service depending on the state of the grant object
   * 
   * @returns {Object}
   */
  async getGrant(id) {
    let state = this.store.data.byGrant[id];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getGrant(id);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.byGrant[id];
  }

  /**
   * @method getContributorsFullObject
   * @description query the work object from the ID and
   * the authors associated with it, and the service 
   * depending on the state of the work object
   * 
   * @param {String} grantId
   * @param {Array} contributors 
   * 
   * @returns {Object}
   */
  async getContributorsFullObject(grantId, contributors) {
    let state = this.store.data.grantContributors[grantId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getContributors(grantId, contributors);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.grantContributors[grantId];
  }


  /**
   * @method isUsersWork
   * @description query the grant object sent in params and 
   * send it into getAuthors function determine if the user's 
   * grant is within the array returned. 
   * 
   * @param {Object} grant
   * 
   * @returns {Boolean}
   */
  isUsersWork(grant) {
    if( !APP_CONFIG.user ) return false;
    if( !APP_CONFIG.user.username ) return false;

    try {
      let contributors = this.getContributors(grant);
      for (let grantContribute of contributors) {
        // for (let id of author.identifiers) {
        let contributorId = grantContribute['@id'].replace(this.service.jsonContext + ":", "");
        if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === contributorId.toLowerCase()) {
          return true;
        }
        // }
      }
    } catch (error) {
      console.error('Error checking isUsersWork', error);
    }

    return false;
  }


  /**
   * @method getContributors
   * @description query the grant object from the ID and
   * the authors associated with it, and the service 
   * depending on the state of the work object
   * 
   * @param {String} grantId
   * @param {Array} authors 
   * 
   * @returns {Object}
   */
  async getContributors(grantId, authors) {
    let state = this.store.data.grantContributors[grantId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getContributors(grantId, authors);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.grantContributors[grantId];
  }

  /**
   * @method getContributorsOld
   * @description query the grant object and get the contributors
   * from the grant object into a formatted structure Object
   * 
   * @param {Object} grant
   * 
   * @returns {Object}
   */  
  async getContributorsOld(grant) {
    let contributor = [];
    if (typeof grant !== 'object' || typeof grant.relates !== 'object' ) return contributor;
    let auths = grant.relates;
    if (!Array.isArray(auths)) {
      auths = [auths];
    }

    for (let author of auths) {
      let id = author.inheresIn["@id"].split(":")[1];
      let person = await this.PersonModel.get(id);
      console.log(person);
    }
    return contributor;
  }

  /**
   * @method getGrantTypes
   * @description query collectionModel for the subFacet
   * grants and return that subFacet Object
   * 
   * @returns {Object}
   */  
  getGrantTypes(){
    return this.CollectionModel.subFacets.grants;
  }

  /**
   * @method getGrantType
   * @param {Object} grant
   * @description calls getGrantType() and return the text
   * 
   * @returns {String}
   */  
  getGrantType(grant) {
    try {
      for (let t of grant['@type']) {
        for (const possibleType of this.getGrantTypes()) {
          if (possibleType.es == t) return possibleType.text;
        }
      }
    } catch (error) {
      console.error(error);
    }
    return "";
  }

  /**
   * @method getSnippet
   * @param {Object} grant
   * @description checks if the snippet exists and if it does
   * return the string
   * 
   * @returns {String}
   */  
  getSnippet(grant){
    let out = "";
    if (!grant || !grant._snippet) return out;
    if (grant._snippet.value) out = grant._snippet.value;
    return out;
  }


  /**
   * @method getLabel
   * @param {Object} grant
   * @description gets the label from the grant object
   * and returns it if it exists
   * 
   * @returns {String}
   */  
  getLabel(grant){
    if (typeof grant != 'object' || !grant.label) return "";
    return grant.label;
  }

  /**
   * @method getLandingPage
   * @param {Object} grant
   * @description it gets the id from the grant object and adds it to
   * the url landing which returns as a string
   * 
   * @returns {String}
   */  
  getLandingPage(grant) {
    if (typeof grant != 'object' || !grant['@id']) return "";
    try {
      let id = grant['@id'].split(`/`)[1];
      return `${this.UrlLanding}${id}`;
    } catch (error) {
      console.error('Error grabbing landing page for work', error);
      return "";
    }
  }

  /**
   * @method getFullTextLinks
   * @param {Object} grant
   * @description taks the urls from the work object and adds it to 
   * and array which is returned
   * 
   * @returns {Array}
   */  
  getFullTextLinks(grant){
    let output = [];
    if (!grant) return output;

    try {
      let links = grant.hasContactInfo.hasURL;
      if (!Array.isArray(links)) {
        links = [links];
      }
      for (let link of links) {
        if (!link.label || !link.url) continue;
        output.push(link);
      }
    } catch (error) {}

    return output;
  }

  /**
   * @method getContributorsByRole
   * @description given a grant object, return an object of role labels to contributes with that
   * role
   * 
   * @param {Object} grant
   * 
   * @returns {Object} 
   */
  async getContributorsByRole(grant) {
    let byRole = {};
    let all = [];

    grant.relates
      .filter(item => item.inheresIn)
      .filter(item => this.getKnownGrantRole(item['@type']))
      .forEach(item => {
        let label = this.getKnownGrantRole(item['@type']);
        if( !byRole[label] ) byRole[label] = [];
        let id = item.inheresIn['@id'];
        byRole[label].push(id);
        all.push(id);
      });

    let resp = await this.getContributors(grant['@id'], all);
    let people = rdfUtils.asArray(resp.payload);

    for( let label in byRole ) {
      for( let i = 0; i < byRole[label].length; i++  ) {
        byRole[label][i] = people.find(person => person['@id'] === byRole[label][i]);
      }
    }

    return byRole;
  }

  /**
   * @method getKnownGrantRole
   * @description get the known type from a list of types
   * 
   * @param {Array} types \@types array
   * 
   * @returns {String|null}
   */
  getKnownGrantRole(types=[]) {
    types = rdfUtils.asArray(types);
    for( let type of types ) {
      if( this.knownRoleMap[type] ) {
        return this.knownRoleMap[type];
      }
    }
    return null;
  }

}

// TODO: merge with steve VIVO utils library
function getFirstValue(obj) {
  if( Array.isArray(obj) ) return obj[0];
  return obj;
}

// function asArray(obj) {
//   if( Array.isArray(obj) ) return obj;
//   return [obj];
// }

module.exports = new GrantModel();
