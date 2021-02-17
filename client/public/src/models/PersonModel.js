const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');
const urlUtils = require('../lib/url-utils');

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

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.get(id);
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

    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.getPubsOverview(id);
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
    if( state && state.request ) {
      await state.request;
    } else {
      await this.service.getPublications(id,  pubTypeObject, offset);
    }

    return this.store.data.pubsByRequest[requestId];
  }

  getPublicationTypes(){
    return [
      {id: 'article', es: 'bibo:AcademicArticle', label: 'Academic Articles'},
      {id: 'book', es: 'bibo:Book', label: 'Books'},
      {id: 'chapter', es: 'bibo:Chapter', label: 'Chapters'},
      {id: 'conferencepaper', es: 'vivo:ConferencePaper', label: 'Conference Papers'}
    ]
  }

  // These UI Helper commands are moved here so they can be used for both
  // the individual and collection pages.  Unlike the rest of the commands in the
  // model, these take a complete record.  I did this becuase in the
  // rp-page-individual.js file, these are synchronous, and I wanted to keep that,
  // however, these should really be individual ids IMO.
    // All these machinations are particular to the UI, and won't be  changed in
  // database IMO.  Joining contacts is pretty much a PPS thing.
  getTitles(individual){
    let titles = [];
    if (!individual) {
      return titles;
    }
    if (typeof individual.hasContactInfo === 'object') {
      let contactInfo = [];
      if (Array.isArray(individual.hasContactInfo)) {
        contactInfo = [...individual.hasContactInfo].sort((a,b)=>(a["vivo:rank"]?a["vivo:rank"]:100)-(b["vivo:rank"]?b["vivo:rank"]:100));
      }
      else {
        contactInfo = [individual.hasContactInfo];
      }
      // If first contact is odr, than only use odr,
      let identifier_match=null
      if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^odr/)) {
        identifier_match=/^odr/
      } else if (contactInfo[0].identifier && contactInfo[0].identifier.match(/^pps/)) {
        identifier_match=/^pps/    // If first is pps only include pps
      } else {                 // Otherwise include them all
        identifier_match=null
      }
      // Next join every organization with a common title, where titles are organized
      // by rank.
      for (let c of contactInfo) {
        if (!(c.title && (! identifier_match || (c.identifier && c.identifier.match(identifier_match)))))
          continue;
        if (! Array.isArray(c.title)) { c.title=[c.title] }
        for (const t of c.title) {
          let ind=titles.findIndex((have)=>have.title===t)
          if (ind > -1) {
            if (c.organization) {
              if (! Array.isArray(c.organization))
                c.organization=[c.organization]
              for (const o of c.organization) {
                if (titles[ind].orgs.findIndex((have)=>have===o) === -1)
                  titles[ind].orgs.push(o)
              }
            }
          } else {
            let new_title={title:t,orgs:[]}
            if (c.organization) {
              if (Array.isArray(c.organization)) {
                new_title.orgs.push(...c.organization)
              } else {
                new_title.orgs.push(c.organization)
              }
            }
            titles.push(new_title);
          }
        }
      }
    }
    // titles are objects; {title:string,orgs:["string"]}
    return titles;
  }
  getHeadlineTitle(individual) {
    let title=""
    let best=this.getTitles(individual)[0];
    if (best && best.title)
      title=best.title;
    if (best && best.orgs[0])
      title+=`, ${best.orgs[0]}`
    return title;
  }

  getBestLabel(individual) {
    if (individual && individual.label) {
      if (Array.isArray(individual.label)) {
        // Prefer the shortest one? This prefers fname lname over lname, fname
        return individual.label.sort((a,b)=> a.length - b.length)[0]
      }
      return individual.label
    }
    return "";
    }

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

  getAvatarSrc(individual){
    return "";
  }

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

  getEmailAddresses(individual){
    let out = []
    if (!individual) {
      return out;
    }
    if (individual.hasContactInfo && individual.hasContactInfo.hasEmail) {
      if (Array.isArray(individual.hasContactInfo.hasEmail)) {
        return individual.hasContactInfo.hasEmail.map(e => e.email);
      }
      return [individual.hasContactInfo.hasEmail.email]
    }
    if (Array.isArray(individual.hasContactInfo)) {
      for (const contact of individual.hasContactInfo) {
        if (contact.hasEmail && contact.hasEmail.email && !out.includes(contact.hasEmail.email)) out.push(contact.hasEmail.email);
      }
      
    }

    return out;
  }

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

  getWebsites(individual) {
    let out = [];
    if (!individual) {
      return out;
    }
    if (individual.orcidId) {
      out.push({'text': individual.orcidId['@id'], 'href': individual.orcidId['@id'], 'icon': '/images/orcid_16x16.png'})
    }
    if (individual.scopusId) {
      out.push({'text': 'Scopus', 'href': `https://www.scopus.com/authid/detail.uri?authorId=${individual.scopusId}`})
    }

    return out;
  }

}

module.exports = new PersonModel();
