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

/**
 * @method register
 * @description provided an express application, register routes based on regex
 * MATCHES to handle the resolving of ids
 * 
 * @param {Object} app 
 */
async function register(app) {
  // strip ucdrp
  app.get(/\/ucdrp:.*/, (req, res) => {
    res.redirect(req.path.replace(/\/ucdrp:/, '/'));
  });

  for( let key in MATCHES ) {
    app.get(MATCHES[key], middleware);
  }
}

/**
 * @method middleware
 * @description main middleware function handling the resolving of
 * external ids to aggie expert ids in url paths
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
async function middleware(req, res, next) {
  let id = req.path
    .replace(/^\/(person|work)\//, '')
    .replace(/^\//, '');

  let newPath = await resolveId(id);
  if( newPath && newPath !== req.path ) {
    logger.info(`resolved: ${req.path} to ${newPath}`);
    res.redirect(newPath);
    return;
  }

  next();
}

/**
 * @method resolveId
 * @description given a aggie experts unique id (email, orcid, doi, person id) resolve to actual id.
 * Returns path to resource
 * 
 * @param {String} id 
 * 
 * @returns {String|null}
 */
async function resolveId(id) {
  try {
    let resp = await fetch(`${config.gateway.serviceHosts.api}/api/resolve/${id}`);
    resp = await resp.json();

    if( resp.success ) {
      return '/'+resp['@id'].replace(new RegExp('^'+config.client.data.prefix.ucdId+':'), '');
    }

  } catch(e) {
    logger.error(e);
  }

  return null;
}

export {
  register,
  resolveId
};