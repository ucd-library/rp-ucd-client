import { LitElement } from 'lit-element';
import render from './citation.tpl.js';

/**
 * @class RpCitation
 * @description UI component for rendering a publication citation.
 */
export class RpCitation extends LitElement {
  static get properties() {
    return {
      data: {type: Object},
      title: {type: String},
      href: {type: String},
      venue: {type: String},
      authors: {type: Array},
      citationStyle: {type: String, attribute: 'citation-style'},
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.citationStyle = "rp";
    this.data = {};
    this.title = "";
    this.href = "";
    this.venue = "";
    this.venueLocation = "";
    this.authors = [];
  }

  /**
   * @method updated
   * @description Lit method called when element updates
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    if (props.has('data')) {
      this.parseData();
    }
  }

  /**
   * @method parseData
   * @description Sets element properties based on data property.
   */
  parseData() {
    if ( Object.keys(this.data).length == 0 ) {
      return;
    }
    let d = this.data;

    this.title = d.label;
    this.href = this._constructHref(d['@id']);
    this.venue = this._getVenue(d.hasPublicationVenue);
    this.venueLocation = this._getVenueLocation(d);
    this.authors = this._constructAuthors(d.Authorship);
  }

  /**
   * @method _constructHref
   * @description Constructs work landing page url.
   * @param {String} id
   * 
   * @returns {String}
   */
  _constructHref(id){
    let href = id.replace(APP_CONFIG.data.prefix.ucdId+':', '/');
    return href;
  }

  /**
   * @method _getVenue
   * @description Formats venue from hasPublicationVenue work property
   * @param {Object} venue
   * 
   * @returns {String}
   */
  _getVenue(venue){
    if (!venue || !venue.issn ) return '';
    if( venue.issn  ) return venue.issn;
    return venue['@id'].replace(APP_CONFIG.data.prefix.ucdId + ':venue/(issn:)?', '');
  }

  /**
   * @method _constructAuthors
   * @description Formats Authorship work property into string
   * @param {Object|Object[]} authorship 
   * 
   * @returns {String}
   */
  _constructAuthors(authorship) {
    if (!authorship) return [];
    if (!Array.isArray(authorship)) authorship = [authorship];
    let output = [];
    for (let author of authorship) {
      if (!author.hasName || !author.hasName.familyName || !author.hasName.givenName) continue;
      if (!author['vivo:rank']) author['vivo:rank'] = Infinity;
      author.text = `${
        author.hasName.familyName} ${author.hasName.givenName
        .split("")
        .filter(letter => letter === letter.toUpperCase() && letter != " ").join("")}`;
      output.push(author);
    }
    output.sort(function (a, b) {
      return a['vivo:rank'] - b['vivo:rank'];
    });
    return output;
  }

  /**
   * @method _getVenueLocation
   * @description Formats location in venue as a string.
   * @param {Object} d - work data object.
   * 
   * @returns {String}
   */
  _getVenueLocation(d) {
    let output = "";
    if (d.volume) output += d.volume;
    if (d.pageStart) {
      if (output) output += ":";
      output += d.pageStart;
    }
    if (d.pageEnd) {
      if (d.pageStart) output += "-";
      output += d.pageEnd;
    }
    return output;
  }
}

customElements.define('rp-citation', RpCitation);
