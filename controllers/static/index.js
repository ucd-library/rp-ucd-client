import express from 'express';
import path from 'path';
import fs from 'fs';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../../lib/config.js';
import esmUtils from '../../lib/esm-utils.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import {userAuthController} from './user.js';
import {staticModelController} from './model.js';
import harvest from '../../lib/harvest.js';

const {logger, elasticSearch, redis} = rpNodeUtils;
const {__dirname} = esmUtils.moduleLocation(import.meta);
const assetsDir = path.join(__dirname, '..', '..', 'client', config.client.dir);
const loaderPath = path.join(assetsDir, 'loader', 'loader.js');
let loaderSrc = '';

if( fs.existsSync(loaderPath) ) {
  loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
} else {
  logger.warn(`JS loaded not found on disk! ${loaderPath}`);
}

(async function (){
  await elasticSearch.connect();
  redis.connect();
})();

const bundle = `
  <script>
    var CORK_LOADER_VERSIONS = {
      loader : '${config.client.versions.loader}',
      bundle : '${config.client.versions.bundle}'
    }
  </script>
  <script>${loaderSrc}</script>`;

let gaCode = '';
if( config.client.gaCode ) {
  gaCode = `<script async src="https://www.googletagmanager.com/gtag/js?id=${config.client.gaCode}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  </script>`;
}

export default (app) => {
  // path to your spa assets dir
  let assetsDir = path.join(__dirname, '..', '..', 'client', config.client.dir);

  logger.info('Static PWA controller using: ', {
    env: config.client.env,
    assetsDir,
    appRoutes : config.client.appRoutes,
    modelRoutes : config.client.modelRoutes,
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
    static : {dir : assetsDir, opts : {maxAge: 1000 * 60 * 60 * 24 * 30 }},
    enable404 : true,
    template : async (req, res, next) => {

      let user = await userAuthController.handleRequest(req);
      let roles = (user || {}).roles || [];
      roles.push('public');

      // calc which (if any) sections to head
      let hiddenTypes = [];
      if( config.data && config.data.private && config.data.private.roles && config.data.private.roles.length ) {
        if( !config.data.private.roles.some(role => roles.includes(role)) ) {
          hiddenTypes = config.data.private.types;
        }
      }

      let appConfig = {
        user,
        hiddenTypes,
        appRoutes : config.client.appRoutes,
        modelRoutes : config.client.modelRoutes,
        theme : config.client.theme,
        data : config.client.data,
        verbose : config.client.verbose,
        defaultTypes : config.client.defaultTypes,
        gaCode : config.client.gaCode,
        enableUpdates : config.client.enableUpdates,
        defaultFunctionScore : {
          functions: [
            {
              filter : [
                { term : { "ucdrp:contrib-type" : "ucdrp:FirstorLastAuthor" } }
              ],
              weight : 4
            }
          ],
          score_mode : "sum",
          boost_mode : "multiply"
        },
        env : {
          CLIENT_TAG : process.env.CLIENT_TAG || '',
          VESSEL_TAG : process.env.VESSEL_TAG || '',
          APP_VERSION : process.env.APP_VERSION || '',
          BUILD_TIME : process.env.BUILD_TIME || ''
        }
      };

      if( appConfig.user ) {
        appConfig.harvest = (await harvest.state(appConfig.user.uid)) || 'not-running';
      }

      let jsonld = '';
      if( res.statusCode === 404 ) {
        appConfig.is404 = true;
      } else {
        let modelInfo = await staticModelController.handleRequest(req, roles);
        if( modelInfo.isModel ) {
          if( modelInfo.is404Model ) {
            appConfig.is404 = true;
            res.status(404);
          } else {
            jsonld = staticModelController.transformModel(modelInfo.model);
          }
        }
      }

      next({
        bundle, jsonld, gaCode,
        config: `<script>var APP_CONFIG = ${JSON.stringify(appConfig)};</script>`
      });
    }
  });
};
