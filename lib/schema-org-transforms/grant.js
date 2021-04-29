import schemaOrgUtils from "./utils.js";

/**
 * @method grantTransform
 * @description Given a vivo:Grant, converts to schema.org grant
 * @param {Object} grant 
 * 
 * @returns {Object} out
 */
export function grantTransform(grant={}){
  let g = schemaOrgUtils.asArray(grant)[0];
  let out = {
    "@type": "https://schema.org/Grant",
    '@id' : schemaOrgUtils.expandId(g["@id"])
  };
  
  if (g.label) out["label"] = g.label;
  if (g.sponsorAwardId) out["sponsorAwardId"] = g.sponsorAwardId;
  if (g.totalAwardAmount) out["totalAwardAmount"] = g.totalAwardAmount;


  if (g.assignedBy){
    out["funding_org_URL"] = g.assignedBy["@id"];
    out["funding_org_label"] = g.assignedBy.label;
  }

  if (g.dateTimeInterval) {
    out["dateStart"] = Date(g.dateTimeInterval.start);
    out["dateEnd"] = Date(g.dateTimeInterval.end);
  }

  out["relatedContributors"] = schemaOrgUtils.asArray(g.relates[1].hasContactInfo)
    .map(c =>{
      return {
        '@id' : schemaOrgUtils.expandId(c.hasName['@id']),
        '@type': 'http://schema.org/Person',
        givenName : c.hasName.givenName,
        familyName : c.hasName.familyName
      };
    });
  console.log("OUT:", out);
  
  return out;
}