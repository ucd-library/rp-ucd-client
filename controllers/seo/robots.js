import config from '../../lib/config.js';

export default app => {
  app.get('/robots.txt', render);
};

/**
 * @method render
 * @description render the sitemap based on the SERVER_ENV
 * parm.  Only production will render Allow: /
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
function render(req, res) {
  if( config.server.env.match(/^prod/i) ) {
    return res.send(`User-agent: *
Allow: /

Sitemap: ${config.server.url}/sitemap.xml`);
  }

  res.send(`User-agent: *
Disallow: /`);
}