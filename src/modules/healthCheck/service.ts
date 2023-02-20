import { sequelizeProvider } from '../../common/db/config.js';

export class HealthCheckService {
  async checkHealth(): Promise<{ db: boolean }> {
    try {
      const sequelize = sequelizeProvider();

      await sequelize.authenticate();
      return { db: true };
    } catch (e) {
      return { db: false };
    }
  }
}
