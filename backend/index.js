const app = require('express')();
require('dotenv').config(); 
const PORT = process.env.PORT;

const consign = require('consign');

consign()
.then('./config/middlewares.js')
.into(app)

app.listen(PORT, () => {
    console.log(`Back end rodando na porta ${PORT}`);
})
