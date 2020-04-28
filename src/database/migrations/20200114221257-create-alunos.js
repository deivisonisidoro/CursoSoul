'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('alunos', { 
        
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
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        telefone:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        turma:{
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
          default: 0,

        },
        senha:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        horario:{
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
    
        return queryInterface.dropTable('alunos');
  
  }
};

