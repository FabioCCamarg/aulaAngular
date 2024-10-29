const express = require("express");
const app = express();
app.use(express.json());

function verificaAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

app.post("/verifica-bissexto", (req, resp) => {
  const { ano } = req.body;
  const isBissexto = verificaAnoBissexto(ano);

  if(isBissexto) {
    resp.json({ messagem: `${ano} é um ano Bissexto.`});
  }else {
    resp.json({ mensagem: `${ano} não é um ano Bissexto`});
  }
  
})
// Carregando Servidor
app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
