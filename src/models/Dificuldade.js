const {Model, DataTypes} = require("sequelize")

class Dificuldade extends Model{
    static init(connection){
        super.init({
            dificuldadesFala: DataTypes.INTEGER,
            dificuldadesEscrita: DataTypes.INTEGER,
            dificuldadesAuditiva: DataTypes.INTEGER,
            dificuldadesLeitura: DataTypes.INTEGER,
         
           

        },
        {
            sequelize: connection
        })
    }

    static associate(models){
        this.belongsTo(models.Aluno, {foreignKey: 'alunoId', as: "nivel"})
    }
}

module.exports = Dificuldade