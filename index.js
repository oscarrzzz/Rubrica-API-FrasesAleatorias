const express = require("express");
const app = express();
const rutasFrases = require("./routes/frasesRutas");

app.use(express.json());
app.use("/motivacion", rutasFrases);

const port = 4000;
app.listen(port, () => {
  console.log("Frases motivacionales corriendo en http://localhost:" + port);
});
