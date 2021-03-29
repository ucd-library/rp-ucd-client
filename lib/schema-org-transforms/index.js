import { subjectTransform } from './subject.js';
import { personTransform } from './person.js';
import { publicationTransform } from './publication.js';

const transformTypeMap = {
  'skos:Concept' : subjectTransform,
  'vivo:FacultyMember': personTransform,
  'vivo:NonAcademic': personTransform,
  'bibo:AcademicArticle': publicationTransform,
  //'bibo:Book': publicationTransform,
  //'bibo:Chapter': publicationTransform,
  'vivo:ConferencePaper': publicationTransform
};

/**
 * @method getTransformByType
 * @description given a string or array of VIVO/AggieExperts types,
 * return the proper transform function from the transformTypeMap
 * 
 * @param {Array|String} types types for model 
 * 
 * @returns {Function|null}
 */
function getTransformByType(types=[]) {
  if( !Array.isArray(types) ) {
    types = [types];
  }

  for( let type of types ) {
    if( transformTypeMap[type] ) {
      return transformTypeMap[type];
    }
  }

  return null;
}

export {
  getTransformByType,
  transformTypeMap,
  subjectTransform,
  personTransform,
  publicationTransform
};