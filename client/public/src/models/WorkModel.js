const {BaseModel} = require('@ucd-lib/cork-app-utils');
const WorkService = require('../services/WorkService');
const WorkStore = require('../stores/WorkStore');

const CollectionModel = require('./CollectionModel');

class WorkModel extends BaseModel {

  constructor() {
    super();

    this.store = WorkStore;
    this.service = WorkService;
    this.CollectionModel = CollectionModel;

    this.UrlLanding = '/work/';
    this.urlBrowse = '/works';
    this.urlAuthor = "/individual/";

    this.grpsWithLinks = ["vivo:FacultyMember"];

    this.register('WorkModel');
  }

  async getWork(id) {
    let state = {state : WorkStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getWork(id);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.byWork[id];
  }

  async getAuthorsFullObject(workId, authors) {
    let state = {state : WorkStore.STATE.INIT};
    if( state.state === 'init' ) {
      await this.service.getAuthors(workId, authors);
    } else if( state.state === 'loading' ) {
      await state.request;
    }
    return this.store.data.workAuthors[workId];
  }

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

    } catch (error) {}

    // publisher page
    try {
      let label = "Publisher Page";
      let url = "http://doi.org/";
      if (work.doi) output.push({label, url: `${url}${work.doi}`})
    } catch (error) {}

    return output
  }

  isUsersWork(work) {
    try {
      let authors = this.getAuthors(work);
      for (let author of authors) {
        for (let id of author.identifiers) {
          let authorId = id['@id'].replace(this.service.jsonContext + ":", "");
          if (APP_CONFIG.user.username.toLowerCase().split('@')[0] === authorId.toLowerCase()) {
            return true
          }
        }
      }
    } catch (error) {}
    return false;
  }

  hasNonInstitutionAuthors(work){
    try {
      let authors = this.getAuthors(work);
      for (let author of authors) {
        if (author.isOtherUniversity) return true;
      }
    } catch (error) {
      
    }
    return false;
    
  }

  getAuthors(work) {
    let authors = [];
    if (typeof work !== 'object' || typeof work.Authorship !== 'object' ) return authors;
    let auths = work.Authorship;
    if (!Array.isArray(auths)) {
      auths = [auths];
    }
    for (let author of auths) {
      if (!author.hasName) {
        continue;
      }
      author.nameFirst = author.hasName.givenName;
      author.nameLast = author.hasName.familyName;
      if (!author['vivo:rank']) {
        author['vivo:rank'] = Infinity;
      }
      author.href = "";
      author.isOtherUniversity = true;
      try {
          if (typeof author.identifiers == 'object' && !Array.isArray(author.identifiers)) {
              author.identifiers = [author.identifiers]
          }
          for (let id of author.identifiers) {
              if (this.grpsWithLinks.includes(id['@type'])) {
                let authorId = id['@id'].replace(this.service.jsonContext + ":", "");
                author.apiEndpoint = id['@id'];
                author.href = this.urlAuthor + authorId;
                author.isOtherUniversity = false;
              }
          }

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

  getWorkTypes(){
    return this.CollectionModel.subFacets.works;
  }

  getWorkType(work) {
    try {
      for (let t of work['@type']) {
        for (const possibleType of this.getWorkTypes()) {
          if (possibleType.es == t) return possibleType.text;
        }
      }
    } catch (error) {
      
    }
    return "";
  }

  getSnippet(work){
    let out = "";
    if (!work || !work._snippet) return out;
    if (work._snippet.value) out = work._snippet.value;
    return out;
  }

  getPublishedArray(work) {
    let output = [];
    if (!work) return output;
    
    // venue name
    try {
      let venue = work.hasPublicationVenue['@id'];
      if (venue && workType.toLowerCase() == 'academic article') {
        venue = venue.replace(APP_CONFIG.data.jsonldContext + ":journal", "").replace(/-/g, " ");
        venue += " (journal)"
      }
      if (venue) output.push({text: venue, class: 'venue'});
      
    } catch (error) {}

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
      
    } catch (error) {}

    // publication date
    try {
      let d = new Date(work.publicationDate);
      let options = {year: 'numeric', month: 'long', day: 'numeric' };
      d = new Intl.DateTimeFormat('en-US', options).format(d);
      if (d) output.push({text: d, class: 'pub-date'});
    } catch (error) {}

    return output;
  }


  getSubjects(work) {
    let output = [];
    if (!work) return output;

    try {
      let s = work.hasSubjectArea;
      if (!Array.isArray(s)) s = [s];
      for (let subject of s) {
        if (!subject.label) continue;
        output.push(subject);
      }
    } catch (error) {}

    return output;
  }

  getLabel(work){
    if (typeof work != 'object' || !work.label) return "";
    return work.label;
  }

  getLandingPage(work) {
    if (typeof work != 'object' || !work['@id']) return "";
    try {
      let id = work['@id'].split(`${this.service.jsonContext}:publication`)[1];
      return `${this.UrlLanding}${id}`;

    } catch (error) {
      return "";
  }
  }

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
