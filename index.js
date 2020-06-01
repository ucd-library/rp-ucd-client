import express from 'express'
import staticController from './controllers/static'
import config from './lib/config'

const app = express();

staticController(app);

app.listen(config.server.port, () => {
  console.log('server ready on port '+config.server.port);
});