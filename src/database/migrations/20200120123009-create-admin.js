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
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        senha:{
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

