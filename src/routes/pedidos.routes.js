const express = require("express");
const router = express.Router();

const PedidosController = require ("../controllers/pedidos.controller");

router.patch("/pedido/:status", PedidosController.alterar);
router.post("/pedido", PedidosController.cadastrar);
router.get("/pedidos", PedidosController.listar);


module.exports = router;