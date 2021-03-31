import schemaOrgUtils from "./utils.js";
import { subjectTransform } from './subject.js';
import { personTransform } from './person.js';

/**
 * @function articleTransform
 * @description Given a vivo AcademicArticle, converts to schema.org scholarlyArticle
 * @param {Object} pub
 * 
 * @returns {Object}
 */
export function articleTransform(pub={}){
  let out = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle"
  };

  // declare schema.org properties we're potentially using
  let abstract = "";
  let name = "";
  let headline = "";
  let pageEnd = "";
  let pageStart = "";
  let datePublished = "";
  let sameAs = new Set();
  let about = [];
  let isPartOf = {"@type": "PublicationIssue"};
  let author = [];


  // Get basic info
  if ( pub.label ) {
    name = pub.label;
    headline = pub.label;
  }
  if ( pub.abstract ) abstract = pub.abstract;
  if ( pub.start ) pageStart = pub.start;
  if ( pub.pageStart ) pageStart = pub.pageStart;
  if ( pub.end ) pageEnd = pub.end;
  if ( pub.pageEnd ) pageEnd = pub.pageEnd;
  if ( pub.publicationDate ) datePublished = pub.publicationDate;
  if ( pub.dateTimeValue && pub.dateTimeValue.dateTime ) datePublished = pub.dateTimeValue.dateTime;
  if ( pub.doi ) sameAs.add(`https://doi.org/${pub.doi}`);

  // Get publication info
  if ( pub.issue ) isPartOf.issueNumber = pub.issue;
  if ( pub.volume || pub.hasPublicationVenue ) {
    let volume = {
      "@type": [
        "PublicationVolume",
        "Periodical"
      ]
    };
    if ( pub.volume ) volume.volumeNumber = pub.volume;
    if ( pub.hasPublicationVenue ) {
      if ( pub.hasPublicationVenue.issn ) volume.issn = pub.hasPublicationVenue.issn;
      if ( pub.hasPublicationVenue.label ) volume.name = pub.hasPublicationVenue.label;
    }

    if ( pub.issue ) {
      isPartOf.isPartOf = volume;
    } else {
      isPartOf = volume;
    }
    
  }

  // Get authors
  if ( pub.Authorship ) {
    author = schemaOrgUtils.asArray(pub.Authorship).map(personTransform);
  }

  // Get subject areas
  if ( pub.hasSubjectArea ) {
    about = schemaOrgUtils.asArray(pub.hasSubjectArea).map(subjectTransform);
  }
  
  // Set basic info
  if ( name ) Object.assign(out, {name});
  if ( headline ) Object.assign(out, {headline});
  if ( abstract ) Object.assign(out, {abstract});
  if ( pageStart ) Object.assign(out, {pageStart});
  if ( pageEnd ) Object.assign(out, {pageEnd});
  if ( datePublished ) Object.assign(out, {datePublished});
  sameAs = schemaOrgUtils.unpackArray(Array.from(sameAs));
  if ( sameAs ) Object.assign(out, {sameAs});

  // Set publication info
  if ( Object.keys(isPartOf).length > 1 ) Object.assign(out, {isPartOf});

  // Set authors
  author = schemaOrgUtils.unpackArray(author);
  if ( author ) Object.assign(out, {author});

  // Set subject areas
  about = schemaOrgUtils.unpackArray(about);
  if ( about ) Object.assign(out, {about});
  
  return out;
}