const clientes = require("../data/clientes.data");

const buscar = (req, res) => {
    const cpf = req.params.cpf;

    var client="";

    clientes.forEach((cliente, index) => {
        if (cliente.cpf === cpf) {
            client = cliente;
        }
    });

    if (client === "") client = "Nao Encontrado";

    res.send(client).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("Cadastro Com Sucesso").end();
};




module.exports = {
    buscar,
    cadastrar
};