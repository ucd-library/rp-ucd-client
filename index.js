import express from 'express'
import staticController from './controllers/static.js'
import config from './lib/config.js'

const app = express();

staticController(app);

app.listen(config.server.port, () => {
  console.log('server ready on port '+config.server.port);
});