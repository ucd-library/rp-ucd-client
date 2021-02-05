/**
 * @class AssetDefs
 * @description Utility class for defining site asset types (works, people, subjects, etc)
 */
class AssetDefs {
  constructor() {
    this.jsonldContext = APP_CONFIG.data.jsonldContext;
  }

  /**
   * @method getMainFacets
   * @description Returns an array of primary site facets.
   * 
   * @returns {Object[]}
   */
  getMainFacets(){
    return [
      {
        id: 'people', 
        text: 'People', 
        es: this.addContext('person'),
        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.addContext('person')]}},
        azField: "hasContactInfo.familyName.firstLetter"
      }, 
      {
        id: 'subjects', 
        text: 'Subjects', 
        es: this.addContext('subjectArea'),
        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.addContext('subjectArea')]}},
        azField: "label.firstLetter"
      },
      /*
      {
        id: 'organizations', 
        text: 'Organizations', 
        es: this.addContext('organization'),
        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.addContext('organization')]}},
        azField: "label.firstLetter"
      },
      */
      {
        id: 'works', 
        text: 'Works', 
        es: this.addContext('publication'),
        baseFilter: {"@type": {"type": "keyword", "op": "and", "value": [this.addContext('publication')]}},
        azField: "label.firstLetter"
      }
    ];
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
          es: 'vivo:FacultyMember', 
          text: 'Faculty Member', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:FacultyMember"]}}
        },
        {
          id: 'non-academics', 
          es: 'vivo:NonAcademic', 
          text: 'Non Academic', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:NonAcademic"]}}
        }
      ],
      works: [
        {
          id: 'articles', 
          es: "bibo:AcademicArticle", 
          text: 'Academic Article', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["bibo:AcademicArticle"]}}
        },
        {
          id: 'books', 
          es: "bibo:Book", 
          text: 'Book', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["bibo:Book"]}}
        },
        {
          id: 'chapters', 
          es: "bibo:Chapter", 
          text: 'Chapter', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["bibo:Chapter"]}}
        },
        {
          id: 'conference-papers', 
          es: "vivo:ConferencePaper", 
          text: 'Conference Paper', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:ConferencePaper"]}}
        }
      ],
      subjects: [
        {
          id: 'concept', 
          es: "skos:Concept", 
          text: 'Research Subject', 
          baseFilter:{"@type": {"type": "keyword", "op": "and", "value": ["skos:Concept"]}}
        }
      ],
      organizations: [
        {
          id: 'universities', 
          es: 'vivo:University', 
          text: 'University', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:University"]}}
        },
        {
          id: 'departments', 
          es: 'vivo:AcademicDepartment', 
          text: 'Department', 
          baseFilter: {"@type": {"type": "keyword", "op": "and", "value": ["vivo:AcademicDepartment"]}}
        }
      ]
    };
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
   * @method addContext
   * @description Prepends the JSON-LD context to a string
   * @param {String} text
   * 
   * @returns {String}
   */
  addContext(text) {
    return `${this.jsonldContext}:${text}`;
  }
}

//export default new AssetDefs();
module.exports = new AssetDefs();
