const express = require('express');
const cors = require('cors');
const routes = require ('./routes');


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros enviados na rota depois do ?
 * Route Params: Parâmetros utilizados para identificar recursos, quando a informação vem da "/{id}"
 * Request Body: Corpo da requisição, para passar as informações
 */