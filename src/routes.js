const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/membros', async (request, response) => {
    try{
        membros = await connection('membros')
        .select('id','nome','telefone');
        
        return response.status(200).json(membros);
    }catch(err){
        return response.status(400).json({erro:'Erro ao carregar membros: ' + err})
    }
});

routes.get('/receita', async (request, response) => {
    try{
        receita = await connection('receita')
        .select('id','nome','valor');
        
        return response.status(200).json(receita);
    }catch(err){
        return response.status(400).json({erro:'Erro ao carregar receita: ' + err})
    }
});

routes.get('/despesas', async (request, response) => {
    try{
        despesas = await connection('despesas')
        .select('id','nome','valor');

        return response.status(200).json(despesas);
    }catch(err){
        return response.status(400).json({erro:'Erro ao carregar despesas: ' + err})
    }
});

routes.post('/membros/cadastro', async (request, response) => {
    try{
        const {nome, telefone} = request.body;

        await connection('membros')
            .insert({
                nome, 
                telefone,
            });
        return response.status(200).json();
    }catch(err){
        return response.status(400).json({erro:"Erro ao cadastrar o membro: "+err});
    }
});

routes.post('/receita/cadastro', async (request, response) => {
    try{
        const {nome, valor} = request.body;

        await connection('receita')
            .insert({
                nome, 
                valor,
            });
        return response.status(200).json();
    }catch(err){
        return response.status(400).json({erro:"Erro ao cadastrar o receita: "+err});
    }
});

routes.post('/despesas/cadastro', async (request, response) => {
    try{
        const {nome, valor} = request.body;

        await connection('despesas')
            .insert({
                nome, 
                valor,
            });
        return response.status(200).json();
    }catch(err){
        return response.status(400).json({erro:"Erro ao cadastrar o despesas: "+err});
    }
});

module.exports = routes;