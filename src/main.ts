import dotenv from 'dotenv';
dotenv.config();
import AppModule from './modules/app.module.js';

const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || 'localhost';
const app = new AppModule();

app.listen(PORT, HOST);
