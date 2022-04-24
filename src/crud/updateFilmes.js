const { filmes } = require('../models')

class updateFilmes{

    async update(req, res){
        //Valores para atualizar!
        const values = req.body;

        //O ID para passar o caminho!
        const id =  {where : {id: req.params.id}};

        //Para atualizar multiplas opções!
        const opções = {milti: true};

        //Atualizando...
        await filmes.update(values, id, opções, () => {{}})
            .then(() => res.send(`Atualização feita com sucesso!`))
            .catch((error) => res.send(`Error, Não foi possivel atualizar o filme!`))
    };
};


module.exports = new updateFilmes();
