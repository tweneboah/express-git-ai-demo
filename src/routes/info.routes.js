import { Router } from 'express';
import { getAppInfo } from '../controllers/info.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authenticate, getAppInfo);

export default router;
