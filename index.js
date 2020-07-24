import express from 'express'
import staticController from './controllers/static.js'
import config from './lib/config.js'
import rpNodeUtils from '@ucd-lib/rp-node-utils';

const {logger} = rpNodeUtils;
const app = express();

staticController(app);

app.listen(config.server.port, () => {
  logger.info('server ready on port '+config.server.port);
});