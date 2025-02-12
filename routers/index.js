import express from 'express';
import mainUtils from '../utils';
const router = express.Router();

router.post('/sendmail', mainUtils.sendTextMail);

export default router;