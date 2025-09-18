const itens = require("../data/itens.data");

const buscar = (req, res) => {
    const id = req.params.id;

    var object="";

    itens.forEach((item, index) => {
        if (item.id === id) {
            object = item;
        }
    });

    if (object === "") object = "Nao Encontrado";

    res.send(object).end();
};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    itens.forEach((item, index) => {
        if (item.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        itens.splice(indice, 1);
        res.status(200).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const objectUpdate = req.body;

    var indice = -1;

    itens.forEach((item, index) => {
      if(item.id === id){
        indice = index;
      }
    });

    if(indice === -1) {
        res.status(404).end();
    } else {
    Object.keys(itenUpdate).forEach((chave) => {
       itens[indice][chave] = objectUpdate[chave]; 
    });

    res.status(200).end();
}
};




module.exports = {
    buscar,
    apagar,
    alterar
}