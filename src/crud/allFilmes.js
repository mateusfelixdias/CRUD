const { filmes } = require('../models');

class all{
    async allFilmes(req, res){
        const all = await filmes.findAll();

        res.send(all);
    };
};

module.exports = new all();
