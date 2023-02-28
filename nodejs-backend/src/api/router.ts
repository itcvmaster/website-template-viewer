import { Router } from 'express';
import image from '@controllers/image.controller';

const router = Router();
router.get('/images', image.list);
router.get('/images/count', image.count);

export default router;