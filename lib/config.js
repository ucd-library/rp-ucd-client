import esmUtils from './esm-utils.js'
import path from 'path'
import config from '@ucd-lib/rp-node-utils';

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
    appRoutes : ['components'],
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    },
    theme : {
      masthead : '/images/rainbow-bar.png',
      logo : '/images/logo-ucd.svg'
    }
  }
});

export default serverConfig
