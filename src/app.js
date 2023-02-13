require('dotenv').config({ path:'../.env' });
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server started on ${PORT} port...`);
});