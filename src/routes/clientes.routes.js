const express = require("express");
const router = express.Router();

const ClientesController = require ("../controllers/clientes.controller");


router.post("/cliente", ClientesController.cadastrar);
router.get("/clientes/:cpf", ClientesController.buscar);

module.exports = router;