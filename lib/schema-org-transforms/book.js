import schemaOrgUtils from "./utils.js";

/**
 * @method bookTransform
 * @description Given a bibo:Book, converts to schema.org book
 * @param {Object} book 
 * 
 * @returns {Object} out
 */
export function bookTransform(book={}){
  let out = {
    "@context": "https://schema.org/Book",
    "@type": "Book"
  };

  let bookInfo = schemaOrgUtils.asArray(book);
  bookInfo.forEach(b => {
    if (b["@id"]) out["id"] = b["@id"];
    if (b.volume) out["volume"] = b.volume;
    if (b.doi) out["doi"] = b.doi;
    if (b.label) out["label"] = b.label;
    if (b.publicationDate) out["publicationDate"] = b.publicationDate;
    let author = schemaOrgUtils.asArray(b.Authorship);
    let authorSet = [];
    let familyNameArr = [];
    let givenNameArr = [];
    author.forEach(singleAuthor => {
      let a = schemaOrgUtils.asArray(singleAuthor);
      a.forEach(s => {
        if (s.hasName.givenName || s.hasName.familyName) {
          familyNameArr.push(s.hasName.familyName);
          givenNameArr.push(s.hasName.givenName);
          authorSet.push(`${s.hasName.givenName || ""} ${s.hasName.familyName || ""}`.trim());
        }
      });
      out["givenName"] = givenNameArr;
      out["familyName"] = familyNameArr;
      out["authors"] = authorSet;
    });
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
        isOtherUniversity: true
        name First
        name Last
        vivo:rank
    label of book
    publication date
    volume
  */
  return out;
}