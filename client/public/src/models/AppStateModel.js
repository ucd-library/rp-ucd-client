const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

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
    console.log(update);
    // TODO: add bundle loading for pages
    // if page needs to be loaded, set update.page='loading'
    // then set page

    this._sendGA();
    return super.set(update);
  }

  /**
   * @method _sendGA
   * @description send a google analytics event if pathname has changed
   */
  _sendGA() {
    if( !window.gtag || !APP_CONFIG.gaCode ) return console.warn('No global gtag variable set for analytics events');
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', APP_CONFIG.gaCode, {
      page_path: window.location.pathname
    });
  }

}

module.exports = new AppStateModelImpl();
