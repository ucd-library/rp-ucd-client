import robotController from './robots.js';
import sitemapController from './sitemap.js';

export default app => {
  robotController(app);
  sitemapController(app);
}