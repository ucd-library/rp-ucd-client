import express from 'express';
import path from 'path';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../lib/config';

const assetsDir = path.join(__dirname, '..', 'client', config.client.dir);
const loaderPath = path.join(assetsDir, 'loader', 'loader.js');
const loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
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
  let assetsDir = path.join(__dirname, '..', 'client', 'public');

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
      next({bundle})
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(assetsDir));
}