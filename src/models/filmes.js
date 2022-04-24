module.exports = ((Sequelize, DataTypes) => {
    const filmes = Sequelize.define('filmes',{
        name: DataTypes.STRING,
        diretor: DataTypes.STRING,
        launch: DataTypes.STRING
    });
    return filmes;
});
