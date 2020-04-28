'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('professores', { 
        
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: false
      },
      nomeProf:{
        type: Sequelize.STRING, 
        allowNull: false
      }, 
      cpfProf: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      }, 
      enderecoProf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefoneProf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      emailProf:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      eAdmin:{
        type: Sequelize.INTEGER,
        defaultValue: '1'
      },
      senhaProf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      LocalTrabalho:{
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
   
      return queryInterface.dropTable('professor');
    }
};
