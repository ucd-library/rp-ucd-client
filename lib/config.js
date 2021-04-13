import esmUtils from './esm-utils.js';
import path from 'path';
import deepmerge from 'deepmerge';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import themeConfig from './theme.js';

const {config} = rpNodeUtils;

const {__dirname} = esmUtils.moduleLocation(import.meta);
const clientPackage = esmUtils.importJson(path.join(__dirname, '../client/public/package.json'));
const env = process.env;
const clientEnv = env.CLIENT_ENV || 'dev';

let serverConfig = deepmerge(config, {
  server : {
    port : env.PORT || 3000,

    userAuthProps : ['departmentnumber', 'displayname', 'edupersonaffiliation',
      'edupersonprincipalname', 'givenname', 'mail', 'ou', 'sn', 'title', 'uid']
  },
  client : {
    env : clientEnv,
    dir : clientEnv === 'prod' ? 'dist' : 'public',
    appRoutes : ['components', 'people', 'person', 'search', 'works', 
      'organizations', 'work', 'concept', 'concepts', 'grants', 'grant', 'organization', 'help', 'termsofuse'],
    
    // these routes should have seo metadata added
    modelRoutes : ['person', 'concept', 'work', 'grant'],

    // remove one v1.3 is ready to go
    includeGrants : process.env.INCLUDE_GRANTS === 'true' ? true : false,
    defaultTypes : ['experts:person', 'experts:concept', 'experts:work', 'experts:grant'],
    
    versions : {
      bundle : process.env.APP_VERSION || clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    
    verbose: true,
    
    data : {
      apiUrl : "/api",
      sparqleUrl: "/fuskeki",
      prefix : {
        ucdId : 'ucdrp',
        expertsSchema : 'experts',
        organization : 'vcard',
      },
      types : {
        concept : 'skos:Concept',
        work : 'experts:work',
        person : 'experts:person',
        facultyMember : 'vivo:FacultyMember',
        nonAcademic : 'vivo:NonAcademic',
        academicArticle : 'bibo:AcademicArticle',
        book : 'bibo:Book',
        chapter : 'bibo:Chapter',
        conferencePaper : 'vivo:ConferencePaper',
        university : 'vivo:University',
        academicDepartment : 'vivo:AcademicDepartment',
        grant : ''
      }
    },
    theme : themeConfig
  }
});

if( serverConfig.client.includeGrants ) {
  serverConfig.client.defaultTypes.push('experts:grant');
}

export default serverConfig;
