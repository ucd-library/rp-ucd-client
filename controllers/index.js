import express from 'express';
import api from './api/index.js';
const router = express.Router();

router.use('/_/api', api);

export default router;
