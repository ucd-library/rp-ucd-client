const {BaseModel} = require('@ucd-lib/cork-app-utils');
const { getTransformByType } = require('../../../../lib/schema-org-transforms');
const PersonModel = require('./PersonModel');
const WorkModel = require('./WorkModel');
const SubjectModel = require('./SubjectModel');
const GrantModel = require('./GrantModel');


/**
 * @class SeoModel
 * @description listen to app-state-updates and model load events.  Set the SEO data for a 
 * model on load
 */
class SeoModel extends BaseModel {

  constructor() {
    super();

    this.currentPath = '';

    this.EventBus.on('app-state-update', e => {
      if( e.location.fullpath === this.currentPath ) {
        return;
      }

      this.currentPath = e.location.fullpath;
      this.reset();

      if( !APP_CONFIG.modelRoutes.includes(e.page) ) return;

      this.getModel(e.page, this.currentPath.replace(/^\//, ''));
    });
  }

  /**
   * @method reset
   * @description reset the jsonld metadata
   */
  reset() {
    document.querySelector('#jsonld').innerHTML = '';
  }

  /**
   * @method getModel
   * @description given a type and id, load the record from the
   * correct app model, then pass to transform loader
   * 
   * @param {String} type model type, ex: person, work 
   * @param {String} id id of record
   * 
   * @returns {Promise}
   */
  async getModel(type, id) {
    switch(type) {
    case 'concept':
      this.updateFromModel(await SubjectModel.getSubject(id));
      break;
    case 'person':
      this.updateFromModel(await PersonModel.get(id));
      break;
    case 'work':
      this.updateFromModel(await WorkModel.getWork(id));
      break;
    case 'grant':
      this.updateFromModel(await GrantModel.getGrant(id));
      break;
    default:
      console.warn('unknown model type', type, id);
    }
  }

  /**
   * @method updateFromModel
   * @description given an aggie experts model, run the schema.org transform
   * and update the jsonld script tag
   * 
   * @param {Object} model 
   */
  updateFromModel(model) {
    if( model.payload ) model = model.payload;

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