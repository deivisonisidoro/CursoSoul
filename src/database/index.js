const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Aluno = require("../models/Aluno")
const Admin = require("../models/Admin")
const Professor = require("../models/Professor")
const Dificuldades  =require("../models/Dificuldade")

//conexão com o banco
const connection = new Sequelize(dbConfig)

Aluno.init(connection)
Admin.init(connection)
Professor.init(connection)
Dificuldades.init(connection)

Dificuldades.associate(connection.models)
Aluno.associate(connection.models)

module.exports = connection