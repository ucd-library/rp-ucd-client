import express from 'express';
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {middleware, fetch, config} = rpNodeUtils;
const router = express.Router();

router.get('/indexer/reindex/:type?', middleware.admin, async (req, res) => {
  try {
    let type = req.params.type;
    let path = '/admin/reindex/run';
    if( type ) path += '/'+type;

    let iresp = await fetch(config.gateway.serviceHosts.indexer+path);
    res.json(await iresp.json());
  } catch(e) {
    res.status(500)
      .json({
        error : true,
        message : e.message,
        stack : e.stack
      });
  }
});


export default router;