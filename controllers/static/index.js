import express from 'express';
import path from 'path';
import fs from 'fs';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../../lib/config.js';
import esmUtils from '../../lib/esm-utils.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import {userAuthController} from './user.js';
import {staticModelController} from './model.js';

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
    static : {dir : assetsDir},
    enable404 : true,
    template : async (req, res, next) => {

      let appConfig = {
        user: await userAuthController.handleRequest(req),
        appRoutes : config.client.appRoutes,
        modelRoutes : config.client.modelRoutes,
        theme : config.client.theme,
        data : config.client.data,
        verbose : config.client.verbose,
        includeGrants : config.client.includeGrants,
        defaultTypes : config.client.defaultTypes,
        env : {
          CLIENT_TAG : process.env.CLIENT_TAG || '',
          VESSEL_TAG : process.env.VESSEL_TAG || '',
          APP_VERSION : process.env.APP_VERSION || '',
          BUILD_TIME : process.env.BUILD_TIME || ''
        }
      };

      let jsonld = '';
      if( res.statusCode === 404 ) {
        appConfig.is404 = true;
      } else {
        let modelInfo = await staticModelController.handleRequest(req);
        if( modelInfo.isModel ) {
          if( modelInfo.is404Model ) {
            appConfig.is404 = true;
          } else {
            jsonld = staticModelController.transformModel(modelInfo.model);
          }
        }
      }

      next({
        bundle, jsonld, 
        config: `<script>var APP_CONFIG = ${JSON.stringify(appConfig)};</script>`
      });
    }
  });
};
