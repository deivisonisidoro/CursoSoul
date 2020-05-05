'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('dificuldades', { 

        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull: false
        },
        alunoId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{model: 'alunos', key:'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          //defaultValue: '1'
        },
        dificuldadesFala:{
          type:Sequelize.INTEGER(25),
          allowNull: false
        },
        dificuldadesEscrita:{
          type:Sequelize.INTEGER(25),
          allowNull: false
        },
        dificuldadesAuditiva:{
          type:Sequelize.INTEGER(25),
          allowNull: false
        },
        dificuldadesLeitura:{
          type:Sequelize.INTEGER(25),
          allowNull: false
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
   
      return queryInterface.dropTable('dificuldades');
    
  }
};
