import config from '../../lib/config.js';

export default app => {
  app.get('/robots.txt', render);
};

function render(req, res) {
  if( config.server.env.match(/^prod/i) ) {
    return res.send(`User-agent: *
Allow: /

Sitemap: ${config.server.url}/sitemap.xml`);
  }

  res.send(`User-agent: *
Disallow: /`);
}