import { Router } from 'express';
import { HealthCheckRouter } from './modules/healthCheck/routes.js';

const router = Router();

router.use('/api', HealthCheckRouter);

export { router as RootRouter };
