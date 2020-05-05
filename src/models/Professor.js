const {Model, DataTypes} = require("sequelize")
const bcrypt= require("bcryptjs")
class Professor extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            endereco: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING,
            eAdmin: DataTypes.INTEGER, 
            senha: DataTypes.STRING,
            localTrabalho: DataTypes.STRING
        }, {
            sequelize: connection
        }),
        Professor.beforeCreate((professor, options) => {

            return bcrypt.hash(professor.senha, 10)
                .then(hash => {
                    professor.senha = hash;
                })
                .catch(err => { 
                    throw new Error(); 
                });
        });
        
    }
    
   

}

module.exports = Professor