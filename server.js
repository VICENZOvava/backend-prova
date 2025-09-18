const express = require("express"); 
const cors = require("cors"); 

const ClientesRoutes = require("./src/routes/clientes.routes");

const ItensRoutes = require ("./src/routes/itens.routes");

const PedidosRoutes = require ("./src/routes/pedidos.routes");



const app = express();  // Carrega config. inicial do express

app.use(cors());  // Aplica CORS ao express
app.use(express.json()); // Habilita a comunicação com JSON

app.use(ClientesRoutes); // Inclui as rotas no express
app.use(ItensRoutes);

app.use(PedidosRoutes);

//Inicia a API na porta 3000
app.listen(3000, () => {
   console.log("Servidor Online na porta 3000");
});