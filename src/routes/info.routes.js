import { Router } from 'express';
import { getAppInfo } from '../controllers/info.controller.js';

const router = Router();

router.get('/', getAppInfo);

export default router;
