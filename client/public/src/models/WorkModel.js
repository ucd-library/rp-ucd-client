const {BaseModel} = require('@ucd-lib/cork-app-utils');
const WorkService = require('../services/WorkService');
const WorkStore = require('../stores/WorkStore');
const rdfUtils = require('../lib/rdf-utils').default;

const CollectionModel = require('./CollectionModel');

class WorkModel extends BaseModel {

  constructor() {
    super();

    this.store = WorkStore;
    this.service = WorkService;
    this.CollectionModel = CollectionModel;

    this.UrlLanding = '/work/';
    this.urlBrowse = '/works';
    this.urlAuthor = "/person/";

    // TODO: JM - this needs to be fixed, I don't think it indicates a 'UCD Author'
    // as shown in the UI.
    this.grpsWithLinks = ["vivo:FacultyMember", "vivo:NonAcademic"];

    this.register('WorkModel');
  }

  /**
   * @method getWork
   * @param {String} id
   * @description query the work from the ID from the
   * service depending on the state of the work object
   * 
   * @returns {Object}
   */
  async getWork(id) {
    let state = this.store.data.byWork[id];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getWork(id);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.byWork[id];
  }

  /**
   * @method getAuthorsFullObject
   * @description query the work object from the ID and
   * the authors associated with it, and the service 
   * depending on the state of the work object
   * 
   * @param {String} workId
   * @param {Array} authors 
   * 
   * @returns {Object}
   */
  async getAuthorsFullObject(workId, authors) {
    let state = this.store.data.workAuthors[workId];

    try {
      if( state && state.request ) {
        await state.request;
      } else {
        await this.service.getAuthors(workId, authors);
      }
    } catch(e) {
      // silence is golden
    }

    return this.store.data.workAuthors[workId];
  }

  /**
   * @method getAdditionalLinks
   * @description query the work object additional
   * links that are in the work object and push into
   * and array to return 
   * 
   * @param {Object} work 
   * 
   * @returns {Array}
   */
  getAdditionalLinks(work) {
    let output = [];
    if (typeof work !== 'object' ) return output;

    // ucd elinks
    try {
      let label = "UCD-eLinks";
      let url = 'https://ucelinks.cdlib.org/sfx_local?';
      if (work.doi) {
        output.push({label, url: `${url}id=doi:${work.doi}`});
      }
      else if (work.hasPublicationVenue) {
        output.push({label, url: `${url}issn=${work.hasPublicationVenue.issn}&spage=${work.pageStart}&volume=${work.volume}&issue=${work.issue}&date=${work.publicationDate}`});
      }
    } catch (error) {
      console.error('Error processing additional links', error);
    }

    // publisher page
    let label = "Publisher Page";
    let url = "http://doi.org/";
    if ( work.doi ) {
      output.push({label, url: `${url}${work.doi}`});
    }

    return output;
  }

  /**
   * @method isUsersWork
   * @description query the work object sent in params and 
   * send it into getAuthors function determine if the user's 
   * work is within the array returned. 
   * 
   * @param {Object} work
   * 
   * @returns {Boolean}
   */
  isUsersWork(work) {
    if( !APP_CONFIG.user ) return false;
    if( !APP_CONFIG.user.expertsId ) return false;

    try {
      let workAuthors = this.getAuthors(work);
      for( let type in workAuthors ) {
        let authors = workAuthors[type];

        for (let author of authors) {
          let authorId = author['@id'].replace(this.service.jsonContext + ":", "");
          if (APP_CONFIG.user.expertsId === authorId.toLowerCase()) {
            return true;
          }
        }
      }
    } catch (error) {
      console.error('Error checking isUsersWork', error);
    }

    return false;
  }

  /**
   * @method hasNonInstitutionAuthors
   * @description query the work object sent in params and 
   * send it into getAuthors function determine if the authors
   * are or are not part of another university. 
   * 
   * @param {Object} work
   * 
   * @returns {Boolean}
   */
  hasNonInstitutionAuthors(work){
    let workAuthors = this.getAuthors(work);
    for( let type in workAuthors ) {
      let authors = workAuthors[type];
      for (let author of authors) {
        if (author._client.aggieExpertsAuthor === false) return true;
      }
    }

    return false;
    
  }

  /**
   * @method getAuthors
   * @description given a work object and get the authors
   * from the work object, sorted with unranked authors removed.
   * 
   * Only ever use the authorships that have a rank, and only ever 
   * use the #vcard associated with those authorship.
   * 
   * The unranked authorship should only ever be used to add citations 
   * to the a expert or add an expert to a authorship. Unranked authorships 
   * should never affect the citation *formatting* in anyway.
   * 
   * @param {Object} work
   * 
   * @returns {Object} {ranked: [], unranked: []}
   */  
  getAuthors(work) {
    let resp = {ranked: [], unranked: []};

    if (typeof work !== 'object' || typeof work.Authorship !== 'object' ) {
      return authors;
    }

    let authors = rdfUtils.asArray(work.Authorship);
    for (let author of authors) {
      let name = this._getAuthorVcardName(author.hasName) || {};

      if( !author._client ) {
        author._client = {
          givenName : name.givenName || '',
          familyName : name.familyName || '',
          citationText : this._getAuthorCitationTextName(name)
        };

        // if the author has no name, ignore them... for now.
        if( !author._client.citationText ) {
          console.warn('Ignoring authorship without name: ', author);
          continue;
        }


        author._client.href = "";
        author._client.aggieExpertsAuthor = false;

        try {
          if( author['@type'].includes('foaf:Person') ) {
            let authorId = author['@id'].replace(this.service.jsonContext + ":", "");
            author._client.apiEndpoint = author['@id'];
            author._client.href = '/' + authorId;
            author._client.aggieExpertsAuthor = true;
          }
        } catch (error) {
          console.warn("Unable to construct author href.");
        }
      }

      if ( author['vivo:rank'] !== undefined ) {
        resp.ranked.push(author);
      } else {
        resp.unranked.push(author);
      }

    }

    resp.ranked.sort((a, b) => a['vivo:rank'] - b['vivo:rank']);
    return resp;
  }

  /**
   * @method _getAuthorVcardName
   * @description given a authors hasName object/array, return the
   * vcard entry or null
   * 
   * @param {Object|Array} names 
   * 
   * @returns {Object}
   */
  _getAuthorVcardName(names) {
    names = rdfUtils.asArray(names);
    let vcard = names.find(name => (typeof name === 'object' && name['@id'].match(/#vcard-name$/)));
    if( vcard ) return this._correctName(vcard);
    if( names.length > 0 && typeof names[0] === 'object' ) {
      return this._correctName(names[0]);
    }
    return null;
  }

  _correctName(name) {
    if( !name.givenName && !name.familyName) return '';

    if( !name.givenName || !name.familyName ) {
      let parts;
      if( name.familyName ) {
        parts = name.familyName.split(' ');
      } else {
        parts = name.givenName.split(' ');
      }
      name.givenName = parts[0];
      name.familyName = parts[parts.length-1];
    }
    return name;
  }


  /**
   * @method _getAuthorCitationTextName
   * @description given an author name object attempt
   * to construct citation text string
   * 
   * @param {String} name 
   * @returns {String}
   */
  _getAuthorCitationTextName(name) {
    name = this._correctName(name);

    if( name.givenName && name.familyName ) {
      return name.familyName +' '+name.givenName.split("")
        .filter(letter => letter === letter.toUpperCase() && letter != " ").join("");
    }

    if( name.familyName ) return name.familyName;
    return name.givenName || '';
  }

  /**
   * @method getWorkTypes
   * @description query collectionModel for the subFacet
   * works and return that subFacet Object
   * 
   * @returns {Object}
   */  
  getWorkTypes(){
    return this.CollectionModel.subFacets.works;
  }

  /**
   * @method getWorkType
   * @param {Object} work
   * @description calls getWorkTypes() and return the text
   * 
   * @returns {String}
   */  
  getWorkType(work) {
    try {
      for (let t of work['@type']) {
        for (const possibleType of this.getWorkTypes()) {
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
   * @param {Object} work
   * @description checks if the snippet exists and if it does
   * return the string
   * 
   * @returns {String}
   */  
  getSnippet(work){
    let out = "";
    if (!work || !work._snippet) return out;
    if (work._snippet.value) out = work._snippet.value;
    return out;
  }

  /**
   * @method getPublishedArray
   * @param {Object} work
   * @description formats the Published Array from the
   * object and return it 
   * 
   * @returns {Object}
   */  
  getPublishedArray(work) {
    let output = [];
    if (!work) return output;
    
    // venue name
    try {
      if( work.hasPublicationVenue ) {
        let venue = work.hasPublicationVenue['@id'];
        if( venue ) {
          if( venue.startsWith(APP_CONFIG.data.prefix.ucdId + ':journal') ) {
            venue = venue.replace(APP_CONFIG.data.prefix.ucdId + ':journal', '');
            venue += " (journal)";
          } else {
            venue = venue.replace(new RegExp('^'+APP_CONFIG.data.prefix.ucdId+':.*/'), '');
          }
          venue = venue.replace(/[-:]/g, ' ');

          output.push({text: venue, class: 'venue'});
        }
      }
        
    } catch (error) {
      console.error(error);
    }

    // venue release
    try {
      let r = "";
      if (output.length > 0) {
        if (work.volume) r += `Volume ${work.volume}`;
        if (work.issue) {
          if (r) r += ", ";
          r += `Issue ${work.issue}`;
        }
        if (r) output.push({text: r, class: 'release'});
      }
      
    } catch (error) {
      console.error(error);
    }

    // publication date
    try {
      let d = new Date(work.publicationDate);
      let options = {year: 'numeric', month: 'long', day: 'numeric' };
      d = new Intl.DateTimeFormat('en-US', options).format(d);
      if (d) output.push({text: d, class: 'pub-date'});
    } catch (error) {
      console.error(error);
    }

    return output;
  }

  /**
   * @method getSubjects
   * @param {Object} work
   * @description gets the subjects from the work object
   * and returns the object created 
   * 
   * @returns {Object}
   */  
  getSubjects(work) {
    let output = [];
    if (!work) return output;

    try {
      let s = rdfUtils.asArray(work.hasSubjectArea);
      for (let subject of s) {
        if (!subject.label) continue;
        output.push(subject);
      }
    } catch (error) {}

    return output;
  }

  /**
   * @method getLabel
   * @param {Object} work
   * @description gets the label from the work object
   * and returns it if it exists
   * 
   * @returns {String}
   */  
  getLabel(work){
    if (typeof work != 'object' || !work.label) return "";
    return work.label;
  }

  /**
   * @method getLandingPage
   * @param {Object} work
   * @description it gets the id from the work object and adds it to
   * the url landing which returns as a string
   * 
   * @returns {String}
   */  
  getLandingPage(work) {
    if (typeof work != 'object' || !work['@id']) return "";
    try {
      let id = work['@id'].split(`/`)[1];
      return `${this.UrlLanding}${id}`;
    } catch (error) {
      console.error('Error grabbing landing page for work', error);
      return "";
    }
  }

  /**
   * @method getFullTextLinks
   * @param {Object} work
   * @description taks the urls from the work object and adds it to 
   * and array which is returned
   * 
   * @returns {Array}
   */  
  getFullTextLinks(work){
    let output = [];
    if (!work) return output;

    try {
      let links = work.hasContactInfo.hasURL;
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


module.exports = new WorkModel();
