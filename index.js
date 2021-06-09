import express from 'express';
import http from 'http';
import {register as resolveController} from './controllers/resolver.js';
import staticController from './controllers/static/index.js';
import authStaticController from './controllers/static-auth.js';
import seoController from './controllers/seo/index.js';
import socketController from './controllers/socket-io.js';
import controller from './controllers/index.js';
import config from './lib/config.js';
import rpNodeUtils from '@ucd-lib/rp-node-utils';
import cookieParser from 'cookie-parser';
import cors from "cors";
import harvest from './lib/harvest.js';

const {logger} = rpNodeUtils;
const app = express();
const server = http.createServer(app);

app.use(cookieParser());
app.use(controller);

authStaticController(app);
seoController(app);
resolveController(app);
socketController(server);

app.use(cors());
staticController(app);

server.listen(config.server.port, () => {
  logger.info('server ready on port '+config.server.port);
  harvest.connect();
});
