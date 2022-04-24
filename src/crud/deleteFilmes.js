const { filmes } = require('../models');

class deleta{
    async deleteFilmes(req, res) {
        const filme = await filmes.destroy({
            where: {
                id: req.params.id
            }
        });
        if(filme){
            res.send(`Filme deletado com sucesso!`)
        }else{
            res.send(`Erro ao tentar deletar, tente novamente!`)
        };
    };
};


module.exports = new deleta();
