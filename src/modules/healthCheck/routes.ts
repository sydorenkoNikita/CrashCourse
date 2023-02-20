import { Router } from 'express';
import { HealthCheckController } from './controller.js';
import { HealthCheckService } from './service.js';

const router = Router();

const checkHealthService = new HealthCheckService();
const checkHealthController = new HealthCheckController(checkHealthService);

router.get(
  '/check-health',
  checkHealthController.checkHealth.bind(checkHealthController)
);

export { router as HealthCheckRouter };
