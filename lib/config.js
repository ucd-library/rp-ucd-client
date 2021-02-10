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
    appRoutes : ['components', 'people', 'individual', 'search', 'works', 'organizations', 'work', 'subject', 'subjects','organization', 'help', 'termsofuse'],
    versions : {
      bundle : process.env.APP_VERSION || clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    verbose: true,
    data : {
      apiUrl : "/api",
      sparqleUrl: "/fuskeki",
      context : {
        ucdtype : 'ucdrp',
        person : 'experts',
        publication : 'experts',
        organization : 'vcard',
      },
      types : {
        subjectArea : 'skos:Concept',
        publication : 'ucdrp:publication',
        person : 'ucdrp:person',
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
