const {AppStateModel} = require('@ucd-lib/cork-app-state');
const AppStateStore = require('../stores/AppStateStore');

class AppStateModelImpl extends AppStateModel {

  constructor() {
    super();

    this.defaultPage = 'home';
    this.store = AppStateStore;
  }

  set(update) {
    update.page = update.location.path ? update.location.path[0] || this.defaultPage : this.defaultPage;

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
    if( !window.gtag ) return console.warn('No global gtag variable set for analytics events');
    if( this.lastGaLocation === window.location.pathname ) return;
    this.lastGaLocation = window.location.pathname;

    gtag('config', config.gaCode, {
      page_path: window.location.pathname
    });
  }

}

module.exports = new AppStateModelImpl();