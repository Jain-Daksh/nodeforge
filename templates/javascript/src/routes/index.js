import { Router } from 'express';
import healthRoute from './health';

const router = Router();

healthRoute(router);

export default router;
