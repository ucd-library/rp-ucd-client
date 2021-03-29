/**
 * @function publicationTransform
 * @description Given a vivo publication model, converts to schema.org scholarlyArticle
 * @param {Object} pub
 * 
 * @returns {Object}
 */
export function publicationTransform(pub={}){
  let out = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle"
  };

  // declare schema.org properties
  let abstract = "";
  let name = "";


  // Get basic info
  if ( pub.label ) name = pub.label;
  if ( pub.abstract ) abstract = pub.abstract;
  

  // Set basic info
  if ( name ) Object.assign(out, {name});
  if ( abstract ) Object.assign(out, {abstract});
  
  return out;
}