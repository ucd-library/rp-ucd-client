import express from 'express'
import staticController from './controllers/static.js'
import authStaticController from './controllers/static-auth.js'
import controller from './controllers/index.js'
import config from './lib/config.js'
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import cookieParser from 'cookie-parser';

const {logger} = rpNodeUtils;
const app = express();

app.use(cookieParser());
app.use(controller);

authStaticController(app);
staticController(app);

app.listen(config.server.port, () => {
  logger.info('server ready on port '+config.server.port);
});
