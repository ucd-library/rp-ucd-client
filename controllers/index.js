import express from 'express';
import ui from './external-ui/index.js';
import harvest from './harvest.js';
const router = express.Router();

router.use('/ui', ui);
router.use('/harvest', harvest);

export default router;
