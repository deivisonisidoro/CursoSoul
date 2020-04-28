'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('admins', { 
        
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull: false
        },
        emailAdmin:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        senhaAdmin:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        eAdmin:{
          type: Sequelize.INTEGER,
          defaultValue: '3'
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
    
        return queryInterface.dropTable('admin');
  
  }
};

