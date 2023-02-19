import express from 'express';
import { RootRouter } from '../router.js';
import { SequelizeScopeError } from 'sequelize';
import { sequelizeProvider } from '../common/db/config.js';

class AppModule {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public listen(port: number, host: string): void {
    const sequelize = sequelizeProvider();

    sequelize
      .authenticate()
      .then(() => {
        this.app.listen(port, host, () => {
          console.log(`Server started on ${port} port...`);
        });
      })
      .catch((err: SequelizeScopeError) => {
        console.error('Unable to connect to the database:', err);
      });
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    this.app.use(RootRouter);
  }
}

export default AppModule;
