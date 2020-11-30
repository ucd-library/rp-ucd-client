const {BaseModel} = require('@ucd-lib/cork-app-utils');
const PersonService = require('../services/PersonService');
const PersonStore = require('../stores/PersonStore');

class PersonModel extends BaseModel {

  constructor() {
    super();

    this.store = PersonStore;
    this.service = PersonService;
    this.individualId = "";
    this.jsonContext = APP_CONFIG.data.jsonldContext;
    this.register('PersonModel');
  }

  async getIndividual(id) {
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getIndividual(id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.byIndividual[id];
  }

  async getPubOverview(personid) {
    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPubsOverview(personid);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.pubsOverview[personid];
  }

  async getPublications(personid, pubTypeObject, offset) {

    // make sure master cache is set
    if (!this.store.data.pubsByIndividual[personid]) this.store.data.pubsByIndividual[personid] = {};
    if (!this.store.data.pubsByIndividual[personid][pubTypeObject.id]) this.store.data.pubsByIndividual[personid][pubTypeObject.id] = [];

    // make request for specified args
    let cacheObject = {personid: personid, pubType: pubTypeObject.id, offset: offset};
    let cacheId = JSON.stringify(cacheObject)
    let searchObject = {
      offset: offset,
      limit: 10,
      sort: [{"publicationDate": {"order" : "desc"}}],
      filters: {
        'Authorship.identifiers.@id': {"type": "keyword", "op" : "and", "value": [`${this.jsonContext}:${personid}`]},
        "@type": {"type": "keyword", "op": "and", "value": [`${pubTypeObject.es}`],
        'publicationDate': {"type": "exists"}
      }
      },
      facets: {}
    };

    let state = {state : PersonStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getPublications(cacheId, searchObject);
    } else if( state.state === 'loading' ) {
      await state.request;
    }

    // link current request to master store and retrieve all pubs in master store
    if (!this.store.data.pubsByIndividual[personid][pubTypeObject.id].includes(cacheId)) {
      this.store.data.pubsByIndividual[personid][pubTypeObject.id].push(cacheId);
    }
    let masterStore = this.store.data.pubsByIndividual[personid][pubTypeObject.id];
    masterStore = masterStore.map(id => JSON.parse(id)).sort(function(a,b){return a.offset - b.offset});
    masterStore = masterStore.map(obj => this.store.data.pubsByRequest[JSON.stringify(obj)].payload.results).flat();
    return {masterStore: masterStore, request: this.store.data.pubsByRequest[cacheId]};
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
  getIndividualTitles(individual){
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
    let best=this.getIndividualTitles(individual)[0];
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
