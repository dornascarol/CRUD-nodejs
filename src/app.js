//TODO: express, config swagger, dotenv cors, json, mongoose.Connect e usar rotas
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

module.exports = app