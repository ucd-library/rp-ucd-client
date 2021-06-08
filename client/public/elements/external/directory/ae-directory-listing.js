import { LitElement } from 'lit';
import {render, styles} from "./ae-directory-listing.tpl.js";
import fetch from "isomorphic-fetch";
import "../../components/avatar";
import PersonModel from "../../../src/models/PersonModel";
import titleCleanup from "../utils/title-cleanup";

export default class AeDirectoryListing extends LitElement {

  static get properties() {
    return {
      filter : {
        type: String,
      },
      organization : {type: String},
      results : {type: Array},
      page : {
        type: Number,
        reflect : true
      },
      resultsPerPage : {
        type: Number,
        reflect : true,
        attribute : 'results-per-page'
      },
      basePath : {
        type : String,
        attribute : 'base-path'
      }
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.results = {
      results : []
    };
    this.resultsPerPage = 9999;
    this.page = 1;
    this.render = render.bind(this);
  }

  updated(props) {
    if( props.has('filter') || props.has('organization') ||
        props.has('resultsPerPage') || props.has('page') ) {
      this._request();
    }
  }

  async _request() {
    let filters = {};
    this._appendFilter(filters, '@type', 'experts:person');

    for( let key in this.filter ) {
      this._appendFilter(filters, key, this.filter[key]);
    }

    if( this.organization ) {
      this._appendFilter(filters, 'hasContactInfo.organization', this.organization);
    }

    let body = {
      offset: (this.page-1)*this.resultsPerPage,
      limit: this.resultsPerPage,
      sort:[
        {'hasContactInfo.familyName' : 'asc'}
      ],
      filters,
      facets: {}
    };

    let resp = await fetch(
      (AGGIE_EXPERTS_LOADER.host || '') + '/api/search',
      {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(body)
      }
    );

    let results = await resp.json();

    results.results.forEach(item => {
      item.href = this._getHref(item);
      item.fullName = PersonModel.getFullName(item);

      let titles = [];
      let orgs = [];
      let email = '';
      PersonModel.getTitles(item).forEach(title => {
        if( !email ) email = title.email;
        titles.push(title.title.replace(/-.*/, ''));
        orgs.push(title.org);
      });
      item.titles = [
        ...titleCleanup(titles), 
        ...titleCleanup(orgs)
      ];
      item.email = email;
    });
    this.results = results;
  }

  _getHref(item) {
    if( !this.renderLink ) {
      return (AGGIE_EXPERTS_LOADER.host || '') + item['@id'].replace(/^ucdrp:/, '/');
    }
    return this.renderLink(item);
  }

  _appendFilter(filters, key, value) {
    filters[key] = {
      type : 'keyword',
      op: 'and',
      value : [value]
    };
  }

}

customElements.define('ae-directory-listing', AeDirectoryListing);