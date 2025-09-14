let frasesMotivacionales = require("../db/frasesBD");
const {
  obtenerTodasLasFrases,
  obtenerFraseAleatoria,
  agregarFrase,
} = require("../modules/frases");

exports.obtenerFrases = (req, res) => {
  res.json(obtenerTodasLasFrases(frasesMotivacionales));
};

exports.obtenerFraseAleatoria = (req, res) => {
  res.json({ frase: obtenerFraseAleatoria(frasesMotivacionales) });
};

exports.crearFrase = (req, res) => {
  const { frase } = req.body;
  if (!frase || typeof frase !== "string") {
    return res.status(400).json({ error: "Debes enviar una frase válida" });
  }

  agregarFrase(frasesMotivacionales, frase);
  res.status(201).json({
    mensaje: "Frase agregada correctamente",
    frases: frasesMotivacionales,
  });
};
