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
      'organizations', 'work', 'concept', 'concepts', 'grants', 'grant', 
      'organization', 'help', 'termsofuse', 'admin'],
    
    // these routes should have seo metadata added
    modelRoutes : ['person', 'concept', 'work', 'grant'],

    // enable websocket based update system
    enableUpdates : process.env.ENABLE_UPDATES === 'true' ? true : false,

    defaultTypes : ['experts:person', 'experts:concept', 'experts:work', 'experts:grant'],
    
    gaCode : process.env.GOOGLE_ANALYTICS_CODE || '',

    versions : {
      externalLoader : '0.0.1',
      bundle : process.env.APP_VERSION || clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    
    verbose: (clientEnv === 'dev'),
    
    data : {
      apiUrl : "/api",
      sparqleUrl: "/fuskeki",
      prefix : {
        ucdId : 'experts',
        expertsSchema : 'ucdrp',
        organization : 'vcard',
      },
      types : {
        concept : 'skos:Concept',
        work : 'ucdrp:work',
        person : 'ucdrp:person',
        facultyMember : 'vivo:FacultyMember',
        nonAcademic : 'vivo:NonAcademic',
        academicArticle : 'bibo:AcademicArticle',
        book : 'bibo:Book',
        chapter : 'bibo:Chapter',
        conferencePaper : 'vivo:ConferencePaper',
        university : 'vivo:University',
        academicDepartment : 'vivo:AcademicDepartment',
        grant : 'vivo:Grant',
      }
    },
    theme : themeConfig
  },

  kafka : {
    topics : {
      harvestQueue : process.env.KAFKA_QUEUED_HARVEST_TOPIC || 'harvest-user-queued',
      harvestRunning : process.env.KAFKA_RUNNING_HARVEST_TOPIC || 'harvest-user-running'
    },
    groups : {
      harvest :  process.env.KAFKA_HARVEST_GROUP || 'rp-ucd-harvest'
    }
  },
});

export default serverConfig;
