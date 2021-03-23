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
  let definedTerm = {};

  
  definedTerm.CoolProp = subject.foo.bar.baz;

  return definedTerm;
}