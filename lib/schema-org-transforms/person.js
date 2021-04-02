import schemaOrgUtils from "./utils.js";
import { subjectTransform } from './subject.js';

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

  // declare schema.org properties
  let name = new Set();
  let familyName = new Set();
  let givenName = new Set();
  let email = new Set();
  let jobTitle = new Set();
  let affiliation = new Set();
  let knowsAbout = [];
  
  contact.forEach(c => {

    // Get name
    if ( c.familyName ) familyName.add(c.familyName);
    if ( c.givenName ) givenName.add(c.givenName);
    if (c.familyName || c.givenName ) name.add(`${c.givenName || ""} ${c.familyName || ""}`.trim());
    if ( typeof c.hasName === 'object' ) {
      if ( c.hasName.familyName ) familyName.add(c.hasName.familyName);
      if ( c.hasName.givenName ) givenName.add(c.hasName.givenName);
      if ( c.hasName.givenName || c.hasName.familyName ) {
        name.add(`${c.hasName.givenName || ""} ${c.hasName.familyName || ""}`.trim());
      }
    }
    if (person.label) name.add(person.label);

    // Get email
    if ( c.hasEmail ) {
      schemaOrgUtils.asArray(c.hasEmail).forEach(e => {
        if (e.email) email.add(e.email);
      });
    }

    // Get job title
    if ( c.title ) {
      schemaOrgUtils.asArray(c.title).forEach(t => {
        if (t) jobTitle.add(t);
      });
    }
    if ( c.hasTitle ) {
      schemaOrgUtils.asArray(c.hasTitle).forEach(t => {
        if (t.title) jobTitle.add(t.title);
      });
    }

    // Get affiliation
    if ( c.organization ) {
      schemaOrgUtils.asArray(c.organization).forEach(org => {
        if (org) affiliation.add(org);
      });
    }

  });

  // Get name outside of contactInfo object
  if ( person.hasName ) {
    if ( person.hasName.familyName ) familyName.add(person.hasName.familyName);
    if ( person.hasName.givenName ) givenName.add(person.hasName.givenName);
    if ( person.hasName.givenName || person.hasName.familyName ) {
      name.add(`${person.hasName.givenName || ""} ${person.hasName.familyName || ""}`.trim());
    }
  }

  // Get research subjects
  if ( person.hasResearchArea ) {
    knowsAbout = schemaOrgUtils.asArray(person.hasResearchArea).map(subjectTransform);
  }

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

  // Set job title
  jobTitle = schemaOrgUtils.unpackArray(Array.from(jobTitle));
  if ( jobTitle ) Object.assign(out, {jobTitle});

  // Set affilation
  affiliation = Array.from(affiliation).map(org => {
    return {
      "@type": "Organization",
      name: org
    };
  });
  affiliation = schemaOrgUtils.unpackArray(affiliation);
  if ( affiliation ) Object.assign(out, {affiliation});

  // Set research subjects
  knowsAbout = schemaOrgUtils.unpackArray(knowsAbout);
  if ( knowsAbout ) Object.assign(out, {knowsAbout});

  return out;
}