import esmUtils from './esm-utils.js'
import path from 'path'
import config from '@ucd-lib/rp-node-utils';
import themeConfig from './theme.js'

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
    appRoutes : ['components', 'people', "/", 'individual', 'search', 'works', 'organizations', 'work'],
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    verbose: true,
    data : {
      apiUrl : "/api",
      sparqleUrl: "/fuskeki",
      jsonldContext: "ucdrp"
    },
    theme : themeConfig
  }
});

export default serverConfig
