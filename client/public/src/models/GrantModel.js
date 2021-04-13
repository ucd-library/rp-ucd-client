const {BaseModel} = require('@ucd-lib/cork-app-utils');
const GrantService = require('../services/GrantService');
const GrantStore = require('../stores/GrantStore');

const CollectionModel = require('./CollectionModel');

class GrantModel extends BaseModel {

  constructor() {
    super();

    this.store = GrantStore;
    this.service = GrantService;
    this.CollectionModel = CollectionModel;

    this.UrlLanding = '/grant/';
    this.urlBrowse = '/grants';
    this.urlAuthor = "/person/";

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
   * @method getAuthorsFullObject
   * @description query the work object from the ID and
   * the authors associated with it, and the service 
   * depending on the state of the work object
   * 
   * @param {String} grantId
   * @param {Array} authors 
   * 
   * @returns {Object}
   */
  async getAuthorsFullObject(grantId, authors) {
    let state = this.store.data.grantAuthors[grantId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getAuthors(grantId, authors);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.workAuthors[grantId];
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
      let authors = this.getAuthors(grant);
      for (let author of authors) {
        // for (let id of author.identifiers) {
        let authorId = author['@id'].replace(this.service.jsonContext + ":", "");
        if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === authorId.toLowerCase()) {
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
   * @method hasNonInstitutionAuthors
   * @description query the grant object sent in params and 
   * send it into getAuthors function determine if the authors
   * are or are not part of another university. 
   * 
   * @param {Object} grant
   * 
   * @returns {Boolean}
   */
  hasNonInstitutionAuthors(grant){
    let authors = this.getAuthors(grant);
    for (let author of authors) {
      if (author.isOtherUniversity) return true;
    }
    return false;
    
  }

  /**
   * @method getAuthors
   * @description query the grant object and get the authors
   * from the grant object into a formatted structure Object
   * 
   * @param {Object} grant
   * 
   * @returns {Object}
   */  
  getAuthors(grant) {
    let authors = [];
    if (typeof grant !== 'object' || typeof grant.Authorship !== 'object' ) return authors;
    let auths = grant.Authorship;
    if (!Array.isArray(auths)) {
      auths = [auths];
    }
    for (let author of auths) {
      if (!author.hasName) {
        continue;
      }
      author.nameFirst = getFirstValue(author.hasName).givenName;
      author.nameLast = getFirstValue(author.hasName).familyName;
      if (!author['vivo:rank']) {
        author['vivo:rank'] = Infinity;
      }
      author.href = "";
      author.isOtherUniversity = true;
      try {
        if( author['@type'].includes('foaf:Person') ) {
          let authorId = author['@id'].replace(this.service.jsonContext + ":", "");
          author.apiEndpoint = author['@id'];
          author.href = '/' + authorId;
          author.isOtherUniversity = false;
        }

        // if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
        //   author.identifiers = [author.identifiers];
        // }
        // for (let id of author.identifiers) {
        //   if (
        //     this.grpsWithLinks.some(type => asArray(id['@type']).includes(type) ) && 
        //     id['@id'].match("^"+this.service.jsonContext+":") ) {
        //     let authorId = id['@id'].replace(this.service.jsonContext + ":", "");
        //     author.apiEndpoint = id['@id'];
        //     author.href = '/' + authorId;
        //     author.isOtherUniversity = false;
        //   }
        // }
      } catch (error) {
        console.warn("Unable to construct author href.");
      }
      authors.push(author);
    }
    authors.sort(function (a, b) {
      return a['vivo:rank'] - b['vivo:rank'];
    });
    return authors;
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
