import esmUtils from './esm-utils.js';
import path from 'path';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import themeConfig from './theme.js';

const {config} = rpNodeUtils;

const {__dirname} = esmUtils.moduleLocation(import.meta);
const clientPackage = esmUtils.importJson(path.join(__dirname, '../client/public/package.json'));
const env = process.env;
const clientEnv = env.CLIENT_ENV || 'dev';

let serverConfig = Object.assign(config, {
  server : {
    port : env.PORT || 3000
  },
  client : {
    env : clientEnv,
    dir : clientEnv === 'prod' ? 'dist' : 'public',
    appRoutes : ['components', 'people', 'person', 'search', 'works', 'organizations', 'work', 'concept', 'concepts','organization', 'help', 'termsofuse'],
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
        subjectArea : 'skos:Concept',
        publication : 'experts:publication',
        person : 'experts:person',
        facultyMember : 'vivo:FacultyMember',
        nonAcademic : 'vivo:NonAcademic',
        academicArticle : 'bibo:AcademicArticle',
        book : 'bibo:Book',
        chapter : 'bibo:Chapter',
        conferencePaper : 'vivo:ConferencePaper',
        university : 'vivo:University',
        academicDepartment : 'vivo:AcademicDepartment'
      }
    },
    theme : themeConfig
  }
});

export default serverConfig;
