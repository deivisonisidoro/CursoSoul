
require('../database')
const bcrypt = require("bcryptjs")
const localStrategy= require("passport-local").Strategy
const Aluno = require('../models/Aluno')
//const  =require("../config/database/index")

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '351426987'
				});

connection.query('USE curso');	
module.exports = (passport)=>{

    passport.use(new localStrategy({usernameField: "email", passwordField: "senha"}, (email, senha, done)=>{
        Aluno.findOne({where:{email: email}}).then((aluno)=>{
            if (!aluno){
                return done(null, false, {message: "Esta conta nao existe"})
            }
            bcrypt.compare(senha, aluno.senha, (error, batem)=>{
                if(batem){
                    return done(null, aluno)
                }
                else{
                    return done(null, false,{message: "Senha incorreta!"})
                }
            })
        })
    }))
    

    passport.serializeUser(function(aluno, done) {
        done(null, aluno.id)
      })
      
      passport.deserializeUser(function(id, done) {
        connection.query("select * from alunos where id = "+id,function(err,rows){	
			done(err, rows[0])
		})
      })
    
}