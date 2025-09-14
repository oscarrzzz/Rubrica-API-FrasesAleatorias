function obtenerTodasLasFrases(frases) {
  return frases;
}

function obtenerFraseAleatoria(frases) {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

function agregarFrase(frases, nuevaFrase) {
  frases.push(nuevaFrase);
  return frases;
}

module.exports = { obtenerTodasLasFrases, obtenerFraseAleatoria, agregarFrase };
