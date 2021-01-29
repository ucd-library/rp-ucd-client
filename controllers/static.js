import express from 'express';
import path from 'path';
import fs from 'fs';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../lib/config.js';
import esmUtils from '../lib/esm-utils.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {logger, auth, elasticSearch} = rpNodeUtils;
const {__dirname} = esmUtils.moduleLocation(import.meta);
const assetsDir = path.join(__dirname, '..', 'client', config.client.dir);
const loaderPath = path.join(assetsDir, 'loader', 'loader.js');
let loaderSrc = '';

if( fs.existsSync(loaderPath) ) {
  loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
} else {
  logger.warn(`JS loaded not found on disk! ${loaderPath}`);
}

(async function (){
  await elasticSearch.connect();
})();

const bundle = `
  <script>
    var CORK_LOADER_VERSIONS = {
      loader : '${config.client.versions.loader}',
      bundle : '${config.client.versions.bundle}'
    }
  </script>
  <script>${loaderSrc}</script>`;

export default (app) => {
  // path to your spa assets dir
  let assetsDir = path.join(__dirname, '..', 'client', config.client.dir);

  logger.info('Static PWA controller using: ', {
    env: config.client.env,
    assetsDir,
    appRoutes : config.client.appRoutes,
    versions : config.client.versions
  });

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app: app, // pass the express app
    htmlFile : path.join(assetsDir, 'index.html'), // pass the file you want to use
    isRoot : true, // are we serving from host root (/)?
    appRoutes : config.client.appRoutes, // array of root paths.  ie appRoutes = ['foo', 'bar'] to server /foo/* /bar/*
    getConfig : async (req, res, next) => {
      // grab current user
      let user = null;
      let token = auth.getTokenFromRequest(req);
      if( token ) {
        try {
          user = await auth.verifyToken(token);
          try {
            user.hasProfile = await userExists(user.username);
          } catch(e) {
            user.hasProfile = false;
          }
        } catch(e) {
          logger.log('error parsing jwt token: ', e);
        }
      }

      // check for admin impersonation
      if( user && req.cookies.impersonate && (user.roles || []).includes('admin') ) {
        logger.info(`user ${user.username} is impersonating: ${req.cookies.impersonate}`);
        user = {
          impersonatedBy : user,
          username : req.cookies.impersonate,
          roles : [],
          hasProfile : await userExists(req.cookies.impersonate)
        };
      }

      next({
        user,
        appRoutes : config.client.appRoutes,
        theme : config.client.theme,
        data : config.client.data,
        verbose : config.client.verbose,
        env : {
          CLIENT_TAG : process.env.CLIENT_TAG || '',
          VESSEL_TAG : process.env.VESSEL_TAG || '',
          APP_VERSION : process.env.APP_VERSION || '',
          BUILD_TIME : process.env.BUILD_TIME || ''
        }
      });
    },
    template : (req, res, next) => {
      let jsonld = '';
      next({bundle, jsonld});
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(assetsDir));
};

async function userExists(email) {
  try {
    return await elasticSearch.client.exists({
      index: config.elasticSearch.indexAlias,
      id: 'ucdrp:'+email.replace(/@.*/, '')
    });
  } catch(e) {
    logger.info(e);
  }
  return false;
}
