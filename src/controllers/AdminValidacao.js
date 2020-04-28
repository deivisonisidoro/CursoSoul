
require('../database')
const bcrypt = require("bcryptjs")
const localStrategy= require("passport-local").Strategy
const Admin = require('../models/Admin')
//const  =require("../config/database/index")

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '351426987'
				});

connection.query('USE curso');	
module.exports = (passport)=>{

    passport.use(new localStrategy({usernameField: "emailAdmin", passwordField: "senhaAdmin"}, (emailAdmin, senhaAdmin, done)=>{
        Admin.findOne({where:{emailAdmin: emailAdmin}}).then((admin)=>{
            if (!admin){
                return done(null, false, {message: "Esta conta nao existe"})
            }
            bcrypt.compare(senha, admin.senhaAdmin, (error, batem)=>{
                if(batem){
                    return done(null, admin)
                }
                else{
                    return done(null, false,{message: "Senha incorreta!"})
                }
            })
        })
    }))
    

    passport.serializeUser(function(admin, done) {
        done(null, admin.id)
      })
      
      passport.deserializeUser(function(id, done) {
        connection.query("select * from alunos where id = "+id,function(err,rows){	
			done(err, rows[0])
		})
      })

    
}