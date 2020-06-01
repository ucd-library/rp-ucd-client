import clientPackage from '../client/public/package.json';

const env = process.env;
const clientEnv = env.CLIENT_ENV || 'dev';

const config = {
  server : {
    port : env.PORT || 3000
  },
  client : {
    env : clientEnv,
    dir : clientEnv === 'prod' ? 'dist' : 'public',
    appRoutes : [],
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  }
}

export default config