const express = require("express");
const router = express.Router();
const {
  obtenerFrases,
  obtenerFraseAleatoria,
  crearFrase,
} = require("../controllers/frasesControlador");

router.get("/frases", obtenerFrases);
router.get("/frases/aleatoria", obtenerFraseAleatoria);
router.post("/frases", crearFrase);

module.exports = router;
