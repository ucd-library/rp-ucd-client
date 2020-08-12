import express from 'express';
import home from './home.js';
const router = express.Router();

router.use('/home', home);

export default router;
