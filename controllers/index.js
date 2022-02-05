import express from 'express';
import ui from './external-ui/index.js';
import harvest from './harvest.js';
import admin from './admin.js';
const router = express.Router();

router.use('/ui', ui);
router.use('/harvest', harvest);
router.use('/admin', admin);

export default router;
