import { LitElement } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import render from './citation.tpl.js';
import rdfUtils from '../../src/lib/rdf-utils';

/**
 * @class RpCitation
 * @description UI component for rendering a publication citation.
 */
export class RpCitation extends Mixin(LitElement)
  .with(LitCorkUtils) {

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
    this.authors = {ranked:[], unranked: []};

    this._injectModel('WorkModel');
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
    this.authors = this.WorkModel.getAuthors(d);
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
  _getVenue(venue={}){
    let labels = rdfUtils.asArray(venue.label);
    if( labels.length === 0 ) return '';

    labels.sort((a,b) => a.length < b.length);
    let shortest = labels[0].length;

    // many labels are in all caps or have very long titles
    // attempt to find shortest, no caps, label.
    let best = labels
      .filter(item => item.length <= shortest)
      .filter(item => !item.match(/^[A-Z :_-]*$/));
    if( best.length ) return best;

    // return first (shortest) label, capitalize in case all caps
    return unsafeHTML(`<span style="text-transform:capitalize">${labels[0].toLowerCase()}</span>`);

    // if( venue.issn  ) return venue.issn;
    // return venue['@id'].replace(APP_CONFIG.data.prefix.ucdId + ':venue/(issn:)?', '');
  }

  // /**
  //  * @method _constructAuthors
  //  * @description Formats Authorship work property into string
  //  * @param {Object|Object[]} authorship 
  //  * 
  //  * @returns {String}
  //  */
  // _constructAuthors(authorship) {
  //   let output = [];
  //   authorship = rdfUtils.asArray(authorship);

  //   for (let author of authorship) {
  //     let names = rdfUtils.asArray(author.hasName);

  //     for( let hasName of names ) {
  //       debugger;
  //       if (!hasName.familyName || !hasName.givenName) continue;
  //       if (!author['vivo:rank']) author['vivo:rank'] = Infinity;
  //       author.text = `${hasName.familyName} ${hasName.givenName
  //         .split("")
  //         .filter(letter => letter === letter.toUpperCase() && letter != " ").join("")}`;

  //       output.push(author);
  //       break;
  //     }
  //   }
  //   output.sort(function (a, b) {
  //     return a['vivo:rank'] - b['vivo:rank'];
  //   });
  //   return output;
  // }

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
