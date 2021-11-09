const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');
const config = require('../config').default;

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

    if( !window.gtag || !config.gaCode ) {
      return console.warn('No global gtag variable set for analytics events');
    }

    this.firstLoad = true;
    this.defaultPage = 'home';
    this.store = AppStateStore;
  }

  /**
   * @method show404Page
   * @description set the app state to the virtual 404 page
   * Might use the state object later for better description...
   * 
   * @param {Object} state Optionally pass in state object with error.
   */
  show404Page(state) {
    this.set({page: '404'});
  }

  set(update) {
    if (update.location && !update.page) {
      if( this.firstLoad && this.store.data.page === '404' ) {
        update.page = '404';
      } else {
        update.page = update.location.path ? update.location.path[0] || this.defaultPage : this.defaultPage;
      }
      this.firstLoad = false;
    }
    // TODO: add bundle loading for pages
    // if page needs to be loaded, set update.page='loading'
    // then set page

    
    let res = super.set(update);
    this._sendGA();

    return res;
  }

  /**
   * @method _gaEnabled
   * @description is google analytics enabled?
   * 
   * @returns 
   */
  _gaEnabled() {
    if( !window.gtag || !config.gaCode ) return false;
    return true;
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( this._gaEnabled() ) return;
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', config.gaCode, {
      page_path: window.location.pathname
    });

    if( this.store.data.page === 'search' ) {
      this.sendGaSearchEvent();
    }
  }

  /**
   * @method sendGaSearchEvent
   * @description send custom event tracking for search event.  the label for page event
   * should be page number. The link should be used for click event
   */
  sendGaSearchEvent() {
    this.triggerGaEvent(
      this._createGAEventAction(),
      {
        event_category  : 'search-page',
        event_label : this.store.data.location.query.page || '1',
        value : 1
      }
    );
  }

  sendGaSearchClickEvent(link) {
    let value = (this.store.data.location.query.page || 1) * 2;
    value = 12 - value;
    if( value < 0 ) value = 1;

    this.triggerGaEvent(
      this._createGAEventAction(this.store.data.location.query.page || 1),
      {
        event_category  : 'search-click',
        event_label : link,
        value
      }
    );
  }

  _createGAEventAction(page) {
    let data = this.store.data;
    let path = data.location.path.slice(1, 3);
    if( path.length === 1 ) path.push('');
    let text = data.location.query.s;
    return path.join('/')+'/'+text+(page ? '/'+page : '');
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

module.exports = new AppStateModelImpl();
