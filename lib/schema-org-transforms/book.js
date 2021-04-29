import schemaOrgUtils from "./utils.js";

/**
 * @method bookTransform
 * @description Given a bibo:Book, converts to schema.org book
 * @param {Object} book 
 * 
 * @returns {Object} out
 */
export function bookTransform(book={}){
  let b = schemaOrgUtils.asArray(book)[0];
  let out = {
    "@type": "https://schema.org/Book",
    '@id' : schemaOrgUtils.expandId(b["@id"])
  };

  if (b.volume) out["volume"] = b.volume;
  if (b.doi) out["doi"] = b.doi;
  if (b.label) out["label"] = b.label;
  if (b.publicationDate) out["publicationDate"] = b.publicationDate;
  out["author"] = schemaOrgUtils.asArray(b.Authorship)
    .map(author => {
      let name = schemaOrgUtils.asArray(author.hasName)[0];
      return {
        '@id' : schemaOrgUtils.expandId(author['@id']),
        '@type': 'http://schema.org/Person',
        givenName : name.givenName,
        familyName : name.familyName
      };
    });
  /* 
    @id
    @type
    doi: day of i*
    Authorship: (multiple)
        @id
        hasName
            @id
            familyName
            givenName
        identifies (multiple)
        name First
        name Last
        vivo:rank
    label of book
    publication date
    volume
  */
  return out;
}