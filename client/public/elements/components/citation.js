import { LitElement } from 'lit';
import {renderHTML} from '../../src/lib/santize-html.js';
import render from './citation.tpl.js';
import config from '../../src/config.js';
import "../../src/models/WorkModel";

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

    this.title = renderHTML(d.label);
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
    let href = (config.host || '')+id.replace(config.data.prefix.ucdId+':', '/');
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
    let label = this.WorkModel.getVenue(venue);

    // return first (shortest) label, capitalize in case all cap
    return renderHTML(`<span style="text-transform:capitalize">${label.toLowerCase()}</span>`);
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
