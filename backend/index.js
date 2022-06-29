const app = require('express')();
require('dotenv').config(); 
const PORT = process.env.PORT;
const db = require('./config/db');

app.db = db;


const consign = require('consign');

consign()
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)

app.listen(PORT, () => {
    console.log(`Back end rodando na porta ${PORT}`);
})
