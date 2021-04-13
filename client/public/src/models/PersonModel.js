const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');
const urlUtils = require('../lib/url-utils');
const AssetDefs = require('../lib/asset-defs');
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
      // error is recorded in store
    }

    return this.store.data.pubsByRequest[requestId];
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
   * 
   * @returns {Object[]} {title:string,orgs:["string"]}
   */
  getTitles(individual){
    let titles = [];
    if (!individual) {
      return titles;
    }
    if (typeof individual.hasContactInfo === 'object') {
      let contactInfo = [];
      if (Array.isArray(individual.hasContactInfo)) {
        contactInfo = [...individual.hasContactInfo]
          .sort((a,b)=>(a["vivo:rank"]?a["vivo:rank"]:100)-(b["vivo:rank"]?b["vivo:rank"]:100));
      }
      else {
        contactInfo = [individual.hasContactInfo];
      }
      // If first contact is odr, than only use odr,
      let identifier_match=null;
      if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^odr/)) {
        identifier_match=/^odr/;
      } else if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^pps/)) {
        identifier_match=/^pps/;    // If first is pps only include pps
      } else {                 // Otherwise include them all
        identifier_match=null;
      }
      // Next join every organization with a common title, where titles are organized
      // by rank.
      for (let c of contactInfo) {
        if (!(c.title && ( !identifier_match || (c.identifier && c.identifier.match(identifier_match)))))
          continue;
        if ( !Array.isArray(c.title)) c.title=[c.title];
        for (const t of c.title) {
          let ind=titles.findIndex((have)=>have.title===t);
          if (ind > -1) {
            if (c.organization) {
              if ( !Array.isArray(c.organization) ) c.organization=[c.organization];
              for (const o of c.organization) {
                if (titles[ind].orgs.findIndex((have)=>have===o) === -1) titles[ind].orgs.push(o);
              }
            }
          } else {
            let new_title={title: t, orgs: []};
            if ( c.organization ) {
              if ( Array.isArray(c.organization) ) {
                new_title.orgs.push(...c.organization);
              } else {
                new_title.orgs.push(c.organization);
              }
            }
            titles.push(new_title);
          }
        }
      }
    }
    return titles;
  }

  /**
   * @method getHeadlineTitle
   * @description Returns a single (first) title for an individual
   * @param {Object} individual 
   * 
   * @returns (String) - title, org
   */
  getHeadlineTitle(individual) {
    let title="";
    let best=this.getTitles(individual)[0];
    if (best && best.title)
      title=best.title;
    if (best && best.orgs[0])
      title+=`, ${best.orgs[0]}`;
    return title;
  }

  /**
   * @method getBestLabel
   * @description Returns the name of an individual.
   * @param {Object} individual
   * 
   * @returns {String}
   */
  getBestLabel(individual) {
    if (individual && individual.label) {
      if (Array.isArray(individual.label)) {
        // Prefer the shortest one? This prefers fname lname over lname, fname
        return individual.label.sort((a,b)=> a.length - b.length)[0];
      }
      return individual.label;
    }
    return "";
  }

  /**
   * @method getNameObject
   * @description Returns name of individual as an object
   * @param {Object} individual 
   * 
   * @returns {Object} {'fname': '', 'lname': ''}
   */
  getNameObject(individual){
    let out = {'fname': '', 'lname': ''};
    if (!individual || !individual.hasContactInfo) {
      return out;
    }
    let contactArray = Array.isArray(individual.hasContactInfo) ? individual.hasContactInfo : [individual.hasContactInfo];
    for (const contactInfo of contactArray) {
      if (out.fname && out.lname) return out;
      if (contactInfo.familyName) out.lname = contactInfo.familyName;
      if (contactInfo.givenName) out.fname = contactInfo.givenName;
    }
    return out;
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
   * @returns {Object[]} {text: "friendly text", href: "url of website", icon: "optional path to icon"}
   */
  getWebsites(individual) {
    let out = [];
    if (!individual) {
      return out;
    }
    if (individual.orcidId) {
      out.push({
        text: individual.orcidId['@id'], 
        href: individual.orcidId['@id'], 
        icon: '/images/orcid_16x16.png'});
    }
    if (individual.scopusId) {
      out.push({
        text: 'Scopus', 
        href: `https://www.scopus.com/authid/detail.uri?authorId=${individual.scopusId}`});
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
