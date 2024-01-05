//TODO: express, config swagger, dotenv cors, json, mongoose.Connect e usar rotas

const express = require("express")
const cors = require("cors")
const techMarombaRoute = require("./routes/techmaromba-route")
const mongoose = require("./database/dbConnect")
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()
app.use("/techmaromba", techMarombaRoute)

module.exports = app
