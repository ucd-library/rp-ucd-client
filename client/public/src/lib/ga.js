import config from "../config";
import rdfUtils from "./rdf-utils";

class GoogleAnalytics {

  constructor() {
    this.lastGaLocation = null;
  }

  /**
   * @method enabled
   * @description is google analytics enabled?
   * 
   * @returns {Boolean}
   */
  enabled() {
    if( !config.gaCode ) return false;
    return true;
  }

  getCodes() {
    return config.gaCode.split(',').map(item => item.trim());
  }

  getSearchVersion() {
    return config.searchVersion || '0';
  }

  /**
   * @method sendPageView
   * @description send a google analytics event if pathname has changed
   */
  sendPageView() {
    if( !this.enabled() ) return;
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    this.getCodes().forEach(code => {
      gtag('config', code, {
        page_path: window.location.pathname
      });
    });
  }

  /**
   * @method sendSearchView
   * @description send a view_item_list event to ga
   * 
   * @param {Object} search search definition object
   * @param {String} search.text search text
   * @param {String} search.type search type
   * @param {String} search.subtype search type
   * @param {Number} search.page search type
   * @param {Number} search.itemsPerPage search type
   * @param {Object} results api results object
   */
  sendSearchView(search, results) {
    if( !this.enabled() ) return;

    gtag("event", "view_item_list", {
      item_list_id: this.getSearchVersionId(search),
      item_list_name: search.type+ " search",
      items: results.results
        .map((item, index) => this._createGaProductItem(search, results, item, index))
    });
  }

  sendSearchClick(search, results, item, index) {
    if( !this.enabled() ) return;

    gtag("event", "select_item", {
      item_list_id: this.getSearchVersionId(search),
      item_list_name: search.type+ " search",
      items: [this._createGaProductItem(search, results, item, index)]
    });

    gtag("event", "purchase", {
      currency : 'USD',
      transaction_id : Date.now()+'',
      value: item._score || 0,
      items: [this._createGaProductItem(search, results, item, index)]
    });
  }

  _createGaProductItem(search, results, item, index) {
    let id = this.getSearchVersionId(search);
    let type = item['@type'].find(type => type.match(/^experts:/)) || '';
    return {
      item_id : item['@id'],
      item_name : rdfUtils.getFirstValue(item.label) || '',
      item_list_id: id,
      item_list_name: search.type+ " search",
      index : results.offset + index,
      price : item._score || 0,
      item_category : type,
      item_category2 : search.type || '',
      item_category3 : search.subtype || '',
      location_id : 'page_'+search.page+'_'+search.itemsPerPage,
      quantity: 1
    };
  }

  getSearchVersionId(search) {
    return 'v'+this.getSearchVersion()+'/'+this.getSearchId(search);
  }

  getSearchId(search) {
    let values = [];
    if( search.type ) values.push(search.type);
    if( search.subtype ) values.push(search.subtype);
    if( search.text ) values.push(search.text);
    return values.join('/');
  }

  /**
   * @method
   * @description send a custom google analytics event
   * 
   * @param {String} action 
   * @param {Object} opts 
   * @param {String} opts.event_category
   * @param {String} opts.event_label
   * @param {Number} opts.value
   * @returns 
   */
  triggerGaEvent(action, opts) {
    if( !this._gaEnabled() ) return;

    if( opts.event_category === undefined ) opts.event_category = '';
    if( opts.event_label === undefined ) opts.event_label = '';
    if( opts.value === undefined ) opts.value = 1;

    console.log('sending', action, opts);
    gtag('event', action, opts);
  }

}

const galib = new GoogleAnalytics();
export default galib;