import express from 'express';
import path from 'path';
import esmUtils from '../lib/esm-utils.js';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from '../lib/config.js';

const {__dirname} = esmUtils.moduleLocation(import.meta);

export default (app) => {
  // path to your spa assets dir
  let assetsDir = path.join(__dirname, '..', 'client', config.client.dir);

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app, // pass the express app
    htmlFile : path.join(assetsDir, 'login.html'), // pass the file you want to use
    getConfig : async (req, res, next) => {
      next({
        theme : config.client.theme
      });
    }
  });
}
