const { filmes } = require('../models');


class insertFilmes{
    async insert(req, res){
        const {name, diretor, launch} = req.body

        const data = {name, diretor, launch};

        if(!data){
            res.send(`Erro, não foi possivel se cadastrar no banco de dados postgresql.`)
        }else{
            await filmes.create({
                name: data.name,
                diretor: data.diretor,
                launch: data.launch
            });
            res.send(`Filme cadastrado com sucesso :)!`)
        }
    };
};

module.exports = new insertFilmes();
