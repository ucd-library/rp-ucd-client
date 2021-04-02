const PREFIXES = {
  for: 'http://experts.ucdavis.edu/subject/FoR#',
  free: 'http://experts.ucdavis.edu/subject/free#'
};

/**
 * @function subjectTransform
 * @description given a SKOS concept, transform object to a
 * schema.org defined term
 * 
 * @param {Object} subject 
 * 
 * @returns {Object}
 */
export function subjectTransform(subject={}) {
  let [type, termSet, termCode] = subject['@id'].split('/');

  let definedTerm = {
    '@id' : subject['@id'],
    '@type' : ['http://schema.org/DefinedTerm'],
    termCode
  };
  
  if( PREFIXES[termSet] ) {
    definedTerm.inDefinedTermSet = {
      '@id': PREFIXES[termSet]
    };
  }

  if( subject.label ) {
    definedTerm.identifier = subject.label;
  }
  if( subject.prefLabel ) {
    definedTerm.name = subject.prefLabel;
  }

  return definedTerm;
}