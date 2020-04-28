const {Model, DataTypes} = require("sequelize")

class Atividade extends Model{
    static init(connection){
        super.init({
            titulo: DataTypes.STRING,
            conteudo: DataTypes.TEXT,
            dificuldadesAtv: DataTypes.INTEGER,
            

        },
        {
            sequelize: connection
        })
    }

    static associate(models){
        this.belongsTo(models.Aluno, {foreignKey: 'dificuldadesAtv', as: "nivel"})
    }
}

module.exports = Atividade