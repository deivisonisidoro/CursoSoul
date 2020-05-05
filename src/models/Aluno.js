const {Model, DataTypes} = require("sequelize")
const bcrypt= require("bcryptjs")
class Aluno extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,
            turma: DataTypes.STRING,
            email: DataTypes.STRING,
            eAdmin: DataTypes.INTEGER, 
            senha: DataTypes.STRING,
            horario: DataTypes.STRING,
            respon: DataTypes.STRING,

        }, {
            sequelize: connection
        }),
        Aluno.beforeCreate((aluno, options) => {

            return bcrypt.hash(aluno.senha, 10)
                .then(hash => {
                    aluno.senha = hash;
                })
                .catch(err => { 
                    throw new Error(); 
                });
        });
        
    }
    
    
    static associate(models){
        this.hasOne(models.Dificuldade, {foreignKey: 'alunoId', as: "nivel"})
    }

}

module.exports = Aluno