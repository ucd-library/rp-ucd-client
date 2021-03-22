const {BaseModel} = require('@ucd-lib/cork-app-utils');
const { getTransformByType } = require('../../../../lib/schema-org-transforms');

/**
 * @class SeoModel
 * @description listen to app-state-updates and model load events.  Set the SEO data for a 
 * model on load
 */
class SeoModel extends BaseModel {

  constructor() {
    super();
    this.EventBus.on('app-state-update', e => this.reset());
  }

  /**
   * @method reset
   * @description reset the jsonld metadata
   */
  reset() {
    document.querySelector('#jsonld').innerHTML = '';
  }

  /**
   * @method updateFromModel
   * @description given an aggie experts model, run the schema.org transform
   * and update the jsonld script tag
   * 
   * @param {Object} model 
   */
  updateFromModel(model) {
    let transform = getTransformByType(model['@type']);
    if( !transform ) {
      this.reset();
      return;
    }

    try {
      this.updateTag(transform(model));
    } catch(e) {
      console.error(e);
      this.reset();
    }
  }

  /**
   * @method updateTag
   * @description update the main script type="application/ld+json" tag
   * with new schema.org linked data content
   * 
   * @param {Object} jsonld 
   */
  updateTag(jsonld) {
    document.querySelector('#jsonld').innerHTML = JSON.stringify(jsonld, '  ', '  ');
  }
}

module.exports = new SeoModel();