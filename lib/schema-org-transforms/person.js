import schemaOrgUtils from "./utils.js";

/**
 * @method personTransform
 * @description Given a vivo:person, converts to schema.org person
 * @param {Object} person 
 * 
 * @returns {Object}
 */
export function personTransform(person={}){
  let out = {
    "@context": "https://schema.org/",
    "@type": "Person"
  };

  let contact = schemaOrgUtils.asArray(person.hasContactInfo);

  // declare property sets
  let name = new Set();
  let familyName = new Set();
  let givenName = new Set();
  let email = new Set();
  
  contact.forEach(c => {

    // Get name
    if ( c.familyName ) familyName.add(c.familyName);
    if ( c.givenName ) givenName.add(c.givenName);
    if (c.familyName || c.givenName ) name.add(`${c.givenName || ""} ${c.familyName || ""}`.trim());
    if ( typeof c.name === 'object' ) {
      if ( c.name.familyName ) familyName.add(c.name.familyName);
      if ( c.name.givenName ) givenName.add(c.name.givenName);
      if ( c.name.givenName || c.name.familyName ) {
        name.add(`${c.name.givenName || ""} ${c.name.familyName || ""}`.trim());
      }
    }

    // Get email
    if ( c.hasEmail ) {
      schemaOrgUtils.asArray(c.hasEmail).forEach(e => {
        if (e.email) email.add(e.email);
      });
    }
  });

  // Set name
  name = schemaOrgUtils.unpackArray(Array.from(name));
  familyName = schemaOrgUtils.unpackArray(Array.from(familyName));
  givenName = schemaOrgUtils.unpackArray(Array.from(givenName));
  if ( familyName ) Object.assign(out, {familyName});
  if ( givenName ) Object.assign(out, {givenName});
  if ( name ) Object.assign(out, {name});

  // Set email
  email = schemaOrgUtils.unpackArray(Array.from(email));
  if ( email ) Object.assign(out, {email});

  return out;
}