const express = require("express");
const app = express();
app.use(express.json());

function calcularMontante(c, i, t) {
  const taxaJuros = i / 100;
  const montante = c * Math.pow(1 + taxaJuros, t);
  return montante.toFixed(2);
}

  app.post("/calcular-montante", (request, response ) => {
    const { capital, taxaJuros, tempo } = request.body;
    const montante = calcularMontante(capital, taxaJuros, tempo);
    response.json({capital, taxaJuros, tempo , montante})
})
// Carregando Servidor
app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
