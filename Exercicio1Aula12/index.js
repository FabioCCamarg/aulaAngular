const express = require("express");
const app = express();
app.use(express.json());

function contadorVogais(texto) {
  const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let contador = 0;

  //Percorrer cada caractere da string
  for (let char of texto) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}
// app.get("/contar-vogais/:palavra",(request,response)=>{

//     //obtem a palavra passado por parametro
//     let palavra =request.params.palavra;
//     let numVogais = contadorVogais(palavra);

//      response.json({palvra:palavra, numeroDeVogais: numVogais});

// })
// Vamos criar um Array para armazenar os dados criados atravéz do Método POST
const palavrasArmazenadas = [];
// Somente para fiz de exemplo utlizando o POST para criar uma palavra
app.post("/contar-vogais", (request, response) => {
  const texto = request.body.texto;
  const numVogais = contadorVogais(texto);
  response.json({ texto, numeroVogais: numVogais });
  //Armanzenar as palavras e o numero das vogais
  palavrasArmazenadas.push({ texto, numeroDeVogais: numVogais });
  response.json({ texto, numeroDeVogais: numVogais });
});

//Rota GET para recuperrar todas as palavras armazenadas
app.get("/contar-vogais", (request, response) => {
  response.json(palavrasArmazenadas);
});

// Carregando Servidor
app.listen(3000, () => console.log("Servidor rodando na porta: 3000"));
