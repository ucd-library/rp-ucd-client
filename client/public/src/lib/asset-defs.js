import config from '../config.js';
let TYPES = config.data.types;

/**
 * @class AssetDefs
 * @description Utility class for defining site asset types (works, people, subjects, etc)
 */
class AssetDefs {
  constructor() {
    this.defaultFacetId = 'none';
    this.defaultAzId = 'all';
    this.defaultSortField = 'label';

    this.textSearchFields = {
      default : [
        'doi.text^10',
        'hasContactInfo.familyName.text^9',
        'hasContactInfo.givenName^8',
        'hasContactInfo.middleName^8',
        "_.organizationLabel.text^6",
        "_.personLabel.text^6",
        "_.workLabel.text^6",
        "_.conceptLabel.text",
        "_.subjectAreaLabel.text^2",
        "_.grantLabel.text^6",
        "hasSubjectArea.label.text^5",
        "abstract",
        'hasContactInfo.title.text',
        'hasResearchArea.label.text',
        'hasPublicationVenue.issn',
        "hasPublicationVenue.label.text",
        'citation.label^10',
        '_.top20Citation.label^15',
        '_.lastCitation.label^15',
        'relates.hasContactInfo.familyName^10',
        'relates.hasContactInfo.givenName^10',
        'assignedBy.label^10',
      ],
      people : [
        'hasContactInfo.familyName.text^9',
        'hasContactInfo.givenName^8',
        'hasContactInfo.middleName^8',
        'hasContactInfo.title.text^7',
        'hasResearchArea.label.text^6',
        'citation.label'
      ],
      concepts : [
        "label.text^10",
        "prefLabel.text^10"
      ],
      works : [
        "doi.text^10",
        "label.text^9",
        "abstract^8",
        "hasPublicationVenue.label.text^7",
        "hasPublicationVenue.issn^5"
      ],
      grants: [
        "label.text^2",
        "assignedBy.label.text",
        "sponsorAwardId.text^2",
        "relates.hasContactInfo.familyName^2",
        "relates.hasContactInfo.givenName^2"
      ]
    };
  }

  /**
   * @method getMainFacets
   * @description Returns an array of primary site facets.
   *
   * @returns {Object[]}
   */
  getMainFacets(){
    let alteredTextSearchField = JSON.parse(window.localStorage.getItem('textSearchFields'));
    if( alteredTextSearchField) {
      this.textSearchFields = alteredTextSearchField;
    }

    let facet = [
      {
        id: 'people',
        idSingular: 'person',
        text: 'People',
        es: TYPES.person,
        defaultSortField: 'hasContactInfo.familyName',
        baseFilter: {
          '@type': {
            type: "keyword",
            op: "and",
            value: [TYPES.person]
          }
        },
        azField: "hasContactInfo.familyName.firstLetter",
        areaField: "hasResearchArea",
        facetedSearchFields: [
          "doi^10",
          'hasContactInfo.familyName.text^9',
          'hasContactInfo.givenName.text^8',
          "_.organizationLabel.text^6",
          "_.personLabel.// TODO: ext^6",
          "_.workLabel.text^6",
          "_.conceptLabel.text",
          "_.subjectAreaLabel.text^2",
          "_.grantLabel.text^6",
          "hasSubjectArea.label.text^5",
          "abstract",
          'hasContactInfo.title.text',
          'hasResearchArea.label.text',
          'hasPublicationVenue.issn',
          "hasPublicationVenue.label.text",
          'citation.label^10',
          '_.top20Citation.label^15',
          '_.lastCitation.label^15',
          'relates.hasContactInfo.familyName^10',
          'relates.hasContactInfo.givenName^10',
          'assignedBy.label^10'
        ]
      },
      {
        id: 'concepts',
        idSingular: 'concept',
        text: 'Subjects',
        es: TYPES.concept,
        defaultSortField: 'prefLabel',
        baseFilter: {
          '@type': {
            type: "keyword",
            op: "and",
            value: [TYPES.concept]
          }
        },
        azField: "prefLabel.firstLetter",
        facetedSearchFields: this.textSearchFields.concepts
      },
      /*
      {
        id: 'organizations',
        idSingular: 'organization',
        text: 'Organizations',
        es: this.addContext('organization'),
        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.addContext('organization')]}},
        azField: "label.firstLetter",
        facetedSearchFields: [
          "label.text^10"
        ]
      },
      */
      {
        id: 'works',
        idSingular: 'work',
        text: 'Works',
        es: TYPES.work,
        defaultSortField: this.defaultSortField,
        baseFilter: {
          "@type": {
            type: "keyword",
            op: "and",
            value: [TYPES.work]
          }
        },
        azField: "label.firstLetter",
        // areaField: "hasSubjectArea.@id",
        areaField: "_.allSubjectArea",
        facetedSearchFields: this.textSearchFields.works
      },
    ];

    let grant = {
      id: 'grants',
      idSingular: 'grant',
      text: 'Grants',
      es: TYPES.grant,
      defaultSortField: this.defaultSortField,
      baseFilter: {
        "@type": {
          type: "keyword",
          op: "and",
          value: [TYPES.grant]
        }
      },
      azField: "label.firstLetter",
      facetedSearchFields: this.textSearchFields.grants
    };
    facet.push(grant);

    return facet;

  }

  /**
   * @method getSubFacets
   * @description Returns all subfacets for each main facet.
   *
   * @returns {Object} - {mainFacet.id: [{subfacet1}, {subfacet2}]}
   */
  getSubFacets(){
    return {
      people: [
        {
          id: 'faculty',
          es: TYPES.facultyMember,
          text: 'Faculty Member',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.facultyMember]
            }
          }
        },
        {
          id: 'non-academics',
          es: TYPES.nonAcademic,
          text: 'Non Academic',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.nonAcademic]
            }
          }
        }
      ],
      works: [
        {
          id: 'articles',
          es: TYPES.academicArticle,
          text: 'Academic Article',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.academicArticle]
            }
          }
        },
        {
          id: 'books',
          es: TYPES.book,
          text: 'Book',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.book]
            }
          }
        },
        {
          id: 'chapters',
          es: TYPES.chapter,
          text: 'Chapter',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.chapter]
            }
          }
        },
        {
          id: 'conference-papers',
          es: TYPES.conferencePaper,
          text: 'Conference Paper',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.conferencePaper]
            }
          }
        }
      ],
      subjects: [
        {
          id: 'concept',
          es: TYPES.subjectArea,
          text: 'Research Subject',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.subjectArea]
            }
          }
        }
      ],
      organizations: [
        {
          id: 'universities',
          es: TYPES.university,
          text: 'University',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.university]
            }
          }
        },
        {
          id: 'departments',
          es: TYPES.academicDepartment,
          text: 'Department',
          baseFilter: {
            "@type": {
              type: "keyword",
              op: "and",
              value: [TYPES.academicDepartment]
            }
          }
        }
      ],
      grants: [
        // TODO: SB No SubFacets that I am aware of.
      ]
    };
  }

  /**
   * @method getSearchFields
   * @description Returns a list of fields to use in a text search.
   * @param {String} facet - An optional facet id.
   *
   * @returns {String[]}
   */
  getSearchFields(facet) {
    for (const f of this.getMainFacets()) {
      if (f.id == facet) return f.facetedSearchFields;
    }
    return this.textSearchFields.default;
  }

  /**
   * @method getAzAggField
   * @description Returns field for performing AZ aggregations
   * @param {String} facet - A Facet id.
   *
   * @returns {String} An elasticsearch field
   */
  getAzAggField(facet) {
    for (const f of this.getMainFacets()) {
      if (f.id == facet) return f.azField;
    }
    return "label.firstLetter";
  }

  /**
   * @method getAreaField
   * @description Returns fields for filtering by subject/research area
   * @param {*} facet - A Facet id.
   *
   * @returns {String} An elasticsearch field
   */
  getAreaField(facet){
    for (const f of this.getMainFacets()) {
      if (f.id == facet) return f.areaField;
    }
    return "";
  }

  /**
   * @method getMainFacetById
   * @description Retrieve a main facet object by its id.
   * @param {String} id
   *
   * @returns {Object}
   */
  getMainFacetById(id){
    for (const f of this.getMainFacets()) {
      if (id === f.id) return f;
    }
    return {};
  }

  /**
   * @method getSubFacetById
   * @description Retrieve a subfacet object by its id
   * @param {String} mainFacetId
   * @param {String} subFacetId
   *
   * @returns {Object}
   */
  getSubFacetById(mainFacetId, subFacetId){
    let facets = this.getSubFacets()[mainFacetId];
    if ( !facets ) return {};
    for (const f of facets) {
      if (subFacetId == f.id) return f;
    }
    return {};
  }

  /**
   * @method facetExists
   * @description Checks if a facet is defined
   * @param {*} id - facet id
   *
   * @returns {Boolean}
   */
  facetExists(id){
    let f = this.getMainFacetById(id);
    return Object.keys(f).length > 0;
  }

  /**
   * @method subFacetExists
   * @description Checks if a subfacet is defined
   * @param {String} mainFacetId
   * @param {String} subFacetId
   *
   * @returns {Boolean}
   */
  subFacetExists(mainFacetId, subFacetId){
    let f = this.getSubFacetById(mainFacetId, subFacetId);
    return Object.keys(f).length > 0;
  }

  /**
   * @method getSubFacetsByMainId
   * @description Retrieves ordered list of subfacets for a main facet
   * @param {String} id - Main Facet Id
   *
   * @returns {Object[]}
   */
  getSubFacetsByMainId(id) {
    let facets = this.getSubFacets()[id];
    if ( !facets ) return [];
    return facets;
  }

  /**
   * @method addContext
   * @description Prepends the JSON-LD context to a string
   * @param {String} text
   * @deprecated TODO: (JM) remove this?
   *
   * @returns {String}
   */
  addContext(text) {
    return `${this.jsonldContext}:${text}`;
  }

  /**
   * @method getBrowseSortField
   * @description Returns the field to sort by in a standard browse query.
   * @param {String} facet - id of primary facet.
   *
   * @returns {String} - es field.
   */
  getBrowseSortField(facet) {
    if ( !facet || !this.facetExists(facet) ) return this.defaultSortField;
    return this.getMainFacetById(facet).defaultSortField;
  }
}

let assetDefs = new AssetDefs();
export default assetDefs;
