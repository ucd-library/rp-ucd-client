import fetch from 'node-fetch';
import config from '../lib/config.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {logger} = rpNodeUtils;

const MATCHES = {
  DOI : /^\/(work\/)?\d{2}.\d{4,9}\/[-._;()/:A-Z0-9]+$/i,
  ORCID : /^\/\d{4}-\d{4}-\d{4}-\d{4}/,
  EMAIL : /^\/[\w-]+@([\w-]+\.)+[\w-]+/,
  PERSON : /^\/person\/.+/
};

export default app => {
  app.get(MATCHES.DOI, resolveId);
  app.get(MATCHES.ORCID, resolveId);
  app.get(MATCHES.EMAIL, resolveId);
  app.get(MATCHES.PERSON, resolveId);
};

async function resolveId(req, res, next) {
  let id = req.path
    .replace(/^\/(person|work)\//, '')
    .replace(/^\//, '');

  try {
    let resp = await fetch(`${config.gateway.serviceHosts.api}/api/resolve/${id}`);
    resp = await resp.json();

    if( resp.success ) {
      let newPath = '/'+resp['@id'].replace(new RegExp('^'+config.client.data.prefix.ucdId+':'), '');
      if( newPath !== req.path ) {
        logger.info(`resolved: ${req.path} to ${newPath}`);
        res.redirect(newPath);
        return;
      }
    }

  } catch(e) {
    logger.error(e);
  }

  next();
}