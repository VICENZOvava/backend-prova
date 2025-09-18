const express = require("express");
const router = express.Router();

const ItensController = require ("../controllers/itens.controller");

router.get("/itens", ItensController.buscar);

router.patch("/item/:id", ItensController.alterar);

router.delete("/itens/:id", ItensController.apagar);



module.exports = router;