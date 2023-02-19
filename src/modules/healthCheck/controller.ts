import { Request, Response } from 'express';
import { HealthCheckService } from './service.js';

export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  async checkHealth(req: Request, res: Response) {
    const response = await this.healthCheckService.checkHealth();

    res.send(response);
  }
}
