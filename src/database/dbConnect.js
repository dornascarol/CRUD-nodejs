//TODO: Inserir configurações para integrar o MongoDB

const mongoose = require("mongoose")

const connect = async () => {
    try {
        mongoose.connect("mongodb+srv://carolinafdornas:G0CCTltK25nJxesy@cluster0.aqjkj2d.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco de dados conectado")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect } 