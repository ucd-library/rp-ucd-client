import express from 'express';
import path from 'path';
import fs from 'fs';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../lib/config.js';
import esmUtils from '../lib/esm-utils.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {logger} = rpNodeUtils;
const {__dirname} = esmUtils.moduleLocation(import.meta);
const assetsDir = path.join(__dirname, '..', 'client', config.client.dir);
const loaderPath = path.join(assetsDir, 'loader', 'loader.js');
let loaderSrc = '';

if( fs.existsSync(loaderPath) ) {
  loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
} else {
  logger.warn(`JS loaded not found on disk! ${loaderPath}`);
}

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
  })

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app: app, // pass the express app
    htmlFile : path.join(assetsDir, 'index.html'), // pass the file you want to use
    isRoot : true, // are we serving from host root (/)?
    appRoutes : config.client.appRoutes, // array of root paths.  ie appRoutes = ['foo', 'bar'] to server /foo/* /bar/*
    getConfig : async (req, res, next) => {
      next({
        appRoutes : config.client.appRoutes
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
}