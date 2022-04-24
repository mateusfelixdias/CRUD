const routes = require('express').Router();

//modúlos INSERT, UPDATE, ALL, DELETE
const insert = require('../src/crud/insertFilmes');

const update = require('../src/crud/updateFilmes');

const all = require('../src/crud/allFilmes');

const deleta = require('../src/crud/deleteFilmes');


//ROTAS...
routes.post('/filmes', insert.insert);

routes.put('/filmes/:id', update.update);

routes.get('/filmes', all.allFilmes);

routes.delete('/filmes/:id', deleta.deleteFilmes);


module.exports = routes;
