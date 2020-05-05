'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('professors', { 
        
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
      },
      nome:{
        type: Sequelize.STRING, 
        allowNull: false
      }, 
      cpf: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      }, 
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      eAdmin:{
        type: Sequelize.INTEGER,
        defaultValue: '1'
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      localTrabalho:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull: true
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: true
        }

    });
    
},

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('professors');
    }
};
