var express = require("express");
var router = express.Router();
const botController = require("../controllers/bot")();
/* GET home page. */
router.post("/enviar", botController.insertOne);
router.get("/mensajes", botController.getAll);

module.exports = router;
