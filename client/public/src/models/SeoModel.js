const {BaseModel} = require('@ucd-lib/cork-app-utils');
const { subjectTransform } = require('../../../../lib/schema-org-transforms');

class SeoModel extends BaseModel {


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