const pedidos = require("../data/pedidos.data");

const alterar = (req, res) => {
    const status = req.params.status;
    const pediUpdate = req.body;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
      if(pedido.status === status){
        indice = index;
      }
    });

    if(indice === -1) {
        res.status(404).end();
    } else {
    Object.keys(pediUpdate).forEach((chave) => {
       pedidos[indice][chave] = pediUpdate[chave]; 
    });

    res.status(200).end();
}
};

const cadastrar = (req, res) => {
    const data = req.body;
    pedidos.push(data);
    res.status(201).send("Cadastro Com Sucesso").end();
};

const listar = (req, res) => {
    res.send(pedidos).end();
};


module.exports = {
    alterar,
    cadastrar,
    listar
};