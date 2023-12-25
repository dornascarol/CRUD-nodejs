//TODO: Importar o express, o controller e instanciar o Router para chamar os metodos HTTP passando o endereço e função do CRUD referente 
const express = require("express")

const router = express.Router()

router.get("/all", findAll)

router.post("/add", addNew)

router.patch("/update/:id", update)

router.delete("/clear/:id", clear)

module.exports = router