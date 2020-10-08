import { LitElement, html } from 'lit-element';
import render from './citation.tpl.js';

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

  updated(props) {
    if (props.has('data')) {
      this.parseData();
    }
  }

  parseData() {
    if (Object.keys(this.data).length == 0) {
      return;
    }
    let d = this.data;

    this.title = d.label
    this.href = this._constructHref(d['@id']);
    this.venue = this._getVenue(d.hasPublicationVenue);
    this.venueLocation = this._getVenueLocation(d);
    this.authors = this._constructAuthors(d.Authorship);

  }

  _constructHref(id){
    let href = "";
    try {
      href = `/work/${id.replace(APP_CONFIG.data.jsonldContext + ":publication", "")}`
    } catch (error) {}
    return href;
  }

  _getVenue(venue){
    if (!venue || !venue['@id']) return "";
    return venue['@id'].replace(APP_CONFIG.data.jsonldContext + ":journal", "").replace(/-/g, " ");
  }

  _constructAuthors(authorship) {
    if (!authorship) return [];
    if (!Array.isArray(authorship)) authorship = [authorship];
    let output = [];
    for (let author of authorship) {
      if (!author.hasName || !author.hasName.familyName || !author.hasName.givenName) continue;
      if (!author['vivo:rank']) author['vivo:rank'] = Infinity;
      author.text = `${author.hasName.familyName} ${author.hasName.givenName.split("").filter(letter => letter === letter.toUpperCase() && letter != " ").join("")}`
      output.push(author);
    }
    output.sort(function (a, b) {
      return a['vivo:rank'] - b['vivo:rank'];
    });
    return output;
  }

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
