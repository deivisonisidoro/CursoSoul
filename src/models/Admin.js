const {Model, DataTypes} = require("sequelize")
const bcrypt= require("bcryptjs")

class Admin extends Model{
    static init(connection){
        super.init({
            
            emailAdmin: DataTypes.STRING,
            senhaAdmin: DataTypes.STRING,
            eAdmin: DataTypes.INTEGER,
            

        }, {
            sequelize: connection
        })
        Admin.beforeCreate((admin, options) => {

            return bcrypt.hash(admin.senhaAdmin, 10)
                .then(hash => {
                    admin.senhaAdmin = hash;
                })
                .catch(err => { 
                    throw new Error(); 
                });
        });
        
    }
    
    
    /*static associate(models){
        this.belongsTo(models.Aluno, {foreignKey: 'dificuldadesAtv', as: "nivel"})
    }*/

}

module.exports = Admin