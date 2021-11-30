/*const express = require("express");
const app = express();

app.use(express.JSON);

app.listen(3000, () => console.log('Rodando na porta 3000'));*/

const express = require('express')
const cors = require('cors')

const routes = require('./routes/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Servidor rodando na porta http://localhost:3333')
})
