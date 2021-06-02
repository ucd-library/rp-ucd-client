import express from 'express';
import ui from './external-ui/index.js';
const router = express.Router();

router.use('/ui', ui);

export default router;
