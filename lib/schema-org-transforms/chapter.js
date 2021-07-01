import schemaOrgUtils from "./utils.js";

/**
 * @method chapterTransform
 * @description Given a bibo:Chapter, converts to schema.org person
 * @param {Object} chapter 
 * 
 * @returns {Object} chapter
 */
export function chapterTransform(chapter={}){
  let out = {
    "@context": "https://schema.org/Chapter",
    "@type": "Chapter"
  };

  let chapterInfo = schemaOrgUtils.asArray(chapter);
  chapterInfo.forEach(c => {
    if (c["@id"]) out["id"] = c["@id"];
    if (c.abstract) out["abstract"] = c.abstract;
    if (c.doi) out["doi"] = c.doi;
    if (c.label) out["label"] = c.label;
    if (c.pageEnd) out["pageEnd"] = c.pageEnd;
    if (c.pageStart) out["pageStart"] = c.pageStart;
    if (c.publicationDate) out["publicationDate"] = schemaOrgUtils.asArray(c.publicationDate)[0];
    let author = schemaOrgUtils
      .asArray(c.Authorship)
      .filter(authorship => authorship['vivo:rank'] === undefined)
      .map(authorship => 
        authorship.relates.find(person => person['@type'].match('vcard'))
      )
      .filter(person => person !== undefined);

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

  return out;
}