import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${PORT} port...`);
});
