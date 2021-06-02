import express from 'express';
import fs from 'fs';
import path from 'path';
import esmUtils from '../../lib/esm-utils.js';
import config from '../../lib/config.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const router = express.Router();

const {logger} = rpNodeUtils;
const {__dirname} = esmUtils.moduleLocation(import.meta);
const assetsDir = path.join(__dirname, '..', '..', 'client', config.client.dir);
const loaderPath = path.join(assetsDir, 'external-loader.js');
let loaderSrc = '';

if( fs.existsSync(loaderPath) ) {
  loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
} else {
  logger.warn(`External JS not found on disk! ${loaderPath}`);
}

const AGGIE_EXPERTS_LOADER = {
  loaderVersion : config.client.versions.externalLoader,
  host : config.server.url,
  version : config.client.versions.bundle
};

router.get('/loader.js', (req, res) => {
  let loaderConfig = Object.assign({
    ignorePolyfills : ((req.query.ignorePolyfills || '').trim().toLowerCase() === 'true'),
    bundles : (req.query.bundles || '').split(',').map(item => item.trim()).filter(item => item),
    elements : (req.query.elements || '').split(',').map(item => item.trim()).filter(item => item)
  }, AGGIE_EXPERTS_LOADER);

  res.set('content-type', 'application/javascript');
  res.send(`window.AGGIE_EXPERTS_LOADER=${JSON.stringify(loaderConfig)};
${loaderSrc}`);
});

export default router;
