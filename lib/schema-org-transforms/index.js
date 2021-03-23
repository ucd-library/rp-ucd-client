import { subjectTransform } from './subject.js';

const transformTypeMap = {
  'skos:Concept' : subjectTransform
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
  subjectTransform 
};