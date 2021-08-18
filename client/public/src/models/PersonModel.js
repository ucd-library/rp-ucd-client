const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');
const urlUtils = require('../lib/url-utils').default;
const AssetDefs = require('../lib/asset-defs').default;
const rdfUtils = require('../lib/rdf-utils').default;

/**
 * @class PersonModel
 * @description Model for working with person data
 */
class PersonModel extends BaseModel {

  constructor() {
    super();

    this.store = PersonStore;
    this.service = PersonService;
    this.individualId = "";
    this.register('PersonModel');
  }

  /**
   * @method get
   * @description get a person by id
   *
   * @param {String} id
   *
   * @returns {Object}
   */
  async get(id) {
    let state = this.store.data.byIndividual[id];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.get(id);
      }
    } catch (error) {
      // error is recorded in store
    }
    return this.store.data.byIndividual[id];
  }

  /**
   * @method getPubOverview
   * @description get publication overview for person
   *
   * @param {String} id
   *
   * @returns {Promise}
   */
  async getPubOverview(id) {
    let state = this.store.data.pubsOverview[id];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getPubsOverview(id);
      }
    } catch (error) {
      // error is recorded in store
    }

    return this.store.data.pubsOverview[id];
  }


  /**
   * @method getPublications
   * @description get publications for a person
   *
   * @param {String} id
   * @param {Object} pubTypeObject
   * @param {Number} offset
   *
   * @returns {Promise}
   */
  async getPublications(id, pubTypeObject, offset) {
    let requestId = this.service.getPublicationsRequestId(id, pubTypeObject, offset);
    let state = this.store.data.pubsByRequest[requestId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getPublications(id,  pubTypeObject, offset);
      }
    } catch (error) {
      console.error(error);
      // error is recorded in store
    }
    return this.store.data.pubsByRequest[requestId];
  }

  /**
   * @method getGrants
   * @description get publications for a person
   *
   * @param {String} id
   * @param {Number} offset
   *
   * @returns {Promise}
   */
  async getGrants(id, offset=0) {
    let requestId = this.service.getGrantsRequestId(id, offset);
    let state = this.store.data.grantsByRequest[requestId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getGrants(id, offset);
      }
    } catch (error) {
      console.error(error);
      // error is recorded in store
    }

    return this.store.data.grantsByRequest[requestId];
  }

  async harvest(id) {
    let resp = await this.service.harvest(id);
    console.log('harvest', resp);
    return resp;
  }


  /**
   * @method getPublicationTypes
   * @description Returns types of publications for subfaceting
   *
   * @returns {Object[]}
   */
  getPublicationTypes(){
    return AssetDefs.getSubFacetsByMainId('works');
  }


  /**
   * @method getTitles
   * @description - Returns ordered array of titles for individual.
   * @param {Object} individual
   * @param {String} type
   *
   * @returns {Object[]} {title:string,orgs:["string"]}
   */
  getTitles(individual={}, type='odr' || 'oap'){
    let titles = [];
    let urlFace;
    let urlFaceResult;

    let contacts = rdfUtils.asArray(individual.hasContactInfo);
    for( let contact of contacts ) {
      if( contact['@id'].match(new RegExp(`#.*-${type}-\\d+`)) ) {
        if((rdfUtils.getFirstValue(contact.hasURL))){
          urlFace = String(rdfUtils.getFirstValue(contact.hasURL).url).replace(/^(?:https?:\/\/)?(?:www\.)?/, "");
          urlFaceResult = urlFace.replace(/\/$/, "");
        }

        titles.push({
          title: rdfUtils.getFirstValue(contact.title),
          org : rdfUtils.getFirstValue(contact.organization),
          rank : contact["vivo:rank"],
          email : (rdfUtils.getFirstValue(contact.hasEmail) || {}).email,
          url : (rdfUtils.getFirstValue(contact.hasURL) || {}).url,
          urlFaceResult : urlFaceResult || {}
        });
      }
    }

    if( titles.length === 0 ) {
      for( let contact of contacts ) {
        if( contact.title ) {
          titles.push({
            title: rdfUtils.getFirstValue(contact.title),
            org : rdfUtils.getFirstValue(contact.organization),
            rank : contact["vivo:rank"]
          });
        }
      }
    }

    titles.sort((a, b) => a.rank < b.rank ? -1 : 1);

    return titles;
  }

  /**
   * @method getContacts
   * @description get contacts of a type.  Will fall back on first
   * available
   *
   * @param {Object} individual person object
   * @param {String} type defaults to odr
   * @returns Array of contact enteries
   */
  getContacts(individual={}, type='odr' || 'oap') {
    let res = [];

    let contacts = rdfUtils.asArray(individual.hasContactInfo);

    for( let contact of contacts ) {
      let id=contact.identifier || contact['experts:identifier'];
      if( id && id.match('^'+type) ) {
        res.push({
          contact,
          number : contact["vivo:rank"]
        });
      }
    }

    if( res.length === 0 ) {
      for( let contact of contacts ) {
        res.push({
          contact,
          number : contact["vivo:rank"]
        });
      }
    }

    res.sort((a,b) => a.number < b.number ? -1 : 1);

    return res;
  }

  /**
   * @method getHeadlineTitle
   * @description Returns a single (first) title for an individual
   * @param {Object} individual
   *
   * @returns (String) - title, org
   */
  getHeadlineTitle(individual) {
    let title = "";
    let best = this.getTitles(individual);
    if( best.length === 0 ) return '';
    best = best[0];

    if (best && best.title) {
      title = best.title;
    }

    if (best && best.org ) {
      title+=`, ${best.org}`;
    }
    return title;
  }

  /**
   * @method getPronouns
   * @description given individual record, get best (odr if possible)
   * full name.
   *
   * @param {Object} individual
   * @param {string} type
   *
   * @returns {Object}
   */
  getPronouns(individual={}) {
    let contacts = this.getContacts(individual);

    let contact = contacts[0].contact;

    return (rdfUtils.getFirstValue(contact.pronoun) || '');

  }

  /**
   * @method getFullName
   * @description given individual record, get best (odr if possible)
   * full name.
   *
   * @param {Object} individual
   * @param {string} type
   *
   * @returns {Object}
   */
  getFullName(individual={}, type='string') {
    let contacts = this.getContacts(individual);
    if( contacts.length === 0) {
      let name = rdfUtils.getFirstValue(individual.label) || '';
      if( type === 'string' ) {
        return name;
      } else if( type === 'array' ) {
        return [name];
      }
      return {givenName: name};
    }

    let contact = contacts[0].contact;

    if( type === 'string' || type === 'array' ) {
      let name = [];

      if( contact.givenName ) {
        name.push(rdfUtils.getFirstValue(contact.givenName));
      }
      if( contact.middleName ) {
        name.push(rdfUtils.getFirstValue(contact.middleName));
      }
      if( contact.familyName ) {
        name.push(rdfUtils.getFirstValue(contact.familyName));
      }

      if( type === 'array' ) return name;
      return name.join(' ');
    }

    if( contact.hasName ) {
      contact = contact.hasName;
    }

    return {
      givenName : rdfUtils.getFirstValue(contact.givenName) || '',
      middleName : rdfUtils.getFirstValue(contact.middleName) || '',
      familyName : rdfUtils.getFirstValue(contact.familyName) || ''
    };
  }

  /**
   * @method getFullNameLastFirst
   * @description get the full name string, last name first
   *
   * @param {*} individual
   * @returns {String}
   */
  getFullNameLastFirst(individual={}) {
    let name = this.getFullName(individual, 'object');
    let parts = [];

    if( name.familyName ) parts.push(name.familyName+', ');
    if( name.givenName ) parts.push(name.givenName);
    if( name.middleName ) parts.push(name.middleName);

    return parts.join(' ');
  }

  /**
   * @method getAvatarSrc
   * @description placeholder method for retrieving a person's thumbnail
   * @param {Object} individual
   *
   * @returns {String}
   */
  getAvatarSrc(individual){
    if (!individual) return "";
    return "";
  }

  /**
   * @method getSnippet
   * @description Returns highlighted search snippet for individual.
   * @param {Object} individual
   *
   * @returns {String}
   */
  getSnippet(individual){
    let out = "";
    if (!individual || !individual._snippet) return out;
    if (individual._snippet.value) out = individual._snippet.value;
    return out;
  }

  /**
   * @method getLandingPage
   * @description returns the landing page url for a person
   *
   * @param {Object} individual
   *
   * @returns {String}
   */
  getLandingPage(individual={}) {
    if ( !individual['@id'] ) return '';
    return urlUtils.idAsLocalUrlPath(individual['@id']);
  }

  /**
   * @method getEmailAddresses
   * @description Returns array of email addresses for individual.
   * @param {Object} individual
   *
   * @returns {String[]}
   */
  getEmailAddresses(individual){
    let out = [];
    if (!individual) {
      return out;
    }
    if (individual.hasContactInfo && individual.hasContactInfo.hasEmail) {
      if (Array.isArray(individual.hasContactInfo.hasEmail)) {
        return individual.hasContactInfo.hasEmail.map(e => e.email);
      }
      return [individual.hasContactInfo.hasEmail.email];
    }
    if (Array.isArray(individual.hasContactInfo)) {
      for (const contact of individual.hasContactInfo) {
        if (contact.hasEmail && contact.hasEmail.email && !out.includes(contact.hasEmail.email)) {
          out.push(contact.hasEmail.email);}
      }
    }
    return out;
  }

  /**
   * @method getResearchSubjects
   * @description Returns research subjects of individual
   * @param {Object} individual
   *
   * @returns {Object[]} {bestLabel: "use me", href: "subject landing page"}
   */
  getResearchSubjects(individual) {
    let out = [];
    if (!individual || !individual.hasResearchArea) return out;
    let subjects = individual.hasResearchArea;
    if (!Array.isArray(subjects)) subjects = [subjects];
    for (const subject of subjects) {
      subject.bestLabel = subject.prefLabel ? subject.prefLabel : subject.label;
      subject.href = urlUtils.idAsLocalUrlPath(subject['@id']);
      out.push(subject);
    }
    return out;
  }

  /**
   * @method getWebsites
   * @description Returns array of individual's websites
   * @param {Object} individual
   *
   * @returns {Object[]} {text: "friendly text", href: "url of website", type: "type of website"}
   */
  getWebsites(individual) {
    let out = [];
    if (!individual) {
      return out;
    }

    let orcid = this.getIdentifier(individual, 'orcid');
    if( orcid ){
      out.push({
        text: orcid,
        href: 'https://orcid.org/'+orcid,
        type: 'orcid'
      });
    }

    let scopusId = this.getIdentifier(individual, 'scopus-author-id');
    if( scopusId ){
      out.push({
        text: 'Scopus',
        href: `https://www.scopus.com/authid/detail.uri?authorId=${scopusId}`,
        type: 'scopus'
      });
    }
    let oap = (this.getContacts(individual,'oap'))[0].contact;
    let websites = [];
    if (oap && oap.hasURL ) websites=websites.concat(oap.hasURL);

    // There are multiple urlType available.  Should we push just the type, and
    // decode somewhere else or decode here? urlTypes are :
    // Personal,Company,Blog,RSS Feed,Portfolio,Twitter,LinkedIn,Google
    // Scholar,ResearchGate,figshare,Mendeley,Department,Laboratory,Other
    // Something like <aeq-icons icon="urlType-departement"> ?

    for (const website of websites) {
      out.push({
        text:website.label ,
        href:website.url,
        type: 'url'
      });
    }
    return out;
  }

  /**
   * @method getIdentifier
   * @description given a person object and a scheme return the
   * identifier for the scheme.  Example: 'orcid' or 'oapolicy'
   *
   * @param {Object} person
   * @param {String} scheme
   * @returns {String}
   */
  getIdentifier(person, scheme) {
    let id = rdfUtils
      .asArray(person.identifier)
      .find(id => id.scheme === scheme);
    if( !id ) return '';
    return id.value || '';
  }

}

module.exports = new PersonModel();
