import config from '../../lib/config.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
const {logger, elasticSearch} = rpNodeUtils;

const MAX_PAGE_SIZE = 2000;

export default app => {
  app.get('/sitemap.xml', renderMainMap);
  app.get(/^\/sitemap-.*/, renderSubMap);
};

async function renderMainMap(req, res) {
  res.set('content-type', 'application/xml; charset=utf-8');
  res.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for( let rpType of config.client.modelRoutes ) {
    let count = await getModelCount(rpType);
    for( let i = 0; i < count; i += MAX_PAGE_SIZE ) {
      res.write(`  <sitemap>
    <loc>${config.server.url}/sitemap-${rpType}-${i/MAX_PAGE_SIZE}.xml</loc>
  </sitemap>
`);
    }
  }
  res.write('</sitemapindex>');
  res.end();
}

async function renderSubMap(req, res) {
  let [root, type, page] = req.path.split('-');

  res.set('content-type', 'application/xml; charset=utf-8');
  res.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

  let modelIds  = await getModelPage(type, page);
  for( let id of modelIds ) {
    res.write(`<url>
  <loc>${config.server.url}/${id}</loc>
  <changefreq>weekly</changefreq>
  <priority>.5</priority>
</url>
`);
  }

  res.write('</urlset>');
  res.end();
}

async function getModelCount(type) {
  let resp = await elasticSearch.client.count({
    index: config.elasticSearch.indexAlias,
    body : {
      query : {
        bool : {
          filter : [
            {term : {
              '@type' : config.client.data.prefix.expertsSchema+':'+type
            }},
          ]
        }
      }
    }
  });

  return resp.count;
}

async function getModelPage(type, page) {
  page = parseInt(page);

  let resp = await elasticSearch.client.search({
    index: config.elasticSearch.indexAlias,
    body : {
      query : {
        bool : {
          filter : [
            {term : {
              '@type' : 'experts:'+type
            }},
          ]
        }
      },
      from : MAX_PAGE_SIZE * page,
      size : MAX_PAGE_SIZE,
      _source: ['@id'],
    }
  });

  return resp.hits.hits
    .map(item => item._source['@id'].replace(config.client.data.prefix.ucdId+':', ''));
}