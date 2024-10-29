const express = require("express");
const app = express();
app.use(express.json());

function contarCaracteres(str, caractere) {
  let contador = 0 ;

  for (let char of str) {
    if(char === caractere) {
      contador ++;
    }
  }
  return contador;
}

app.post("/contar-caractere", (req, resp) => {
  const {texto, caractere}= req.body;
  const resultado = contarCaracteres(texto, caractere);
  resp.json({ texto, caractere, total: resultado });
})

// Carregando Servidor
app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
