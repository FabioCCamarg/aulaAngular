// Lógica para obter todos os usuários
exports.obterTodos = (req, res) => {
  res.json({"mensage": "Obter todos"});
};
// Lógica para criar um novo usuário
exports.inserir = (req, res) => {
  res.status(201).json({"mensagem": "Inserir novo usuário!"});
};
