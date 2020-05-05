
require('../database')
const bcrypt = require("bcryptjs")
const localStrategy= require("passport-local").Strategy
const Aluno = require('../models/Aluno')
const Admin = require("../models/Admin")
const Professor = require("../models/Professor")
//const  =require("../config/database/index")

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '351426987'
                });
connection.query('USE curso');	

function SessionConstructor(userId, userGroup, details) {
    this.userId = userId;
    this.userGroup = userGroup;
    this.details = details;
  }
module.exports = (passport)=>{
    
   
    passport.use("local-aluno", new localStrategy({usernameField: "email", passwordField: "senha"}, (email, senha, done)=>{
        Aluno.findOne({where:{email: email}}).then((aluno)=>{
            
            if (!aluno ){
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
    passport.use("local-admin" ,new localStrategy({usernameField: "email", passwordField: "senha"}, (email, senha, done)=>{
        Admin.findOne({where:{email: email}}).then((admin)=>{
            if (!admin){
                return done(null, false, {message: "Esta conta nao existe"})
            }
            bcrypt.compare(senha, admin.senha, (error, batem)=>{
                if(batem){
                    return done(null, admin)
                }
                else{
                    return done(null, false,{message: "Senha incorreta!"})
                }
            })
        })
        
    }))
    passport.use("local-professor", new localStrategy({usernameField: "email", passwordField: "senha"}, (email, senha, done)=>{
        Professor.findOne({where:{email: email}}).then((professor)=>{
            if (!professor){
                return done(null, false, {message: "Esta conta nao existe"})
            }
            bcrypt.compare(senha, professor.senha, (error, batem)=>{
                if(batem){
                    return done(null, professor)
                }
                else{
                    return done(null, false,{message: "Senha incorreta!"})
                }
            })
        })
    }))
    
    
        passport.serializeUser(function(userObject, done) {
            let userGroup = "Aluno";
            let userPrototype =  Object.getPrototypeOf(userObject);
            
            if (userPrototype === Aluno.prototype) {
              userGroup = "Aluno";
            } else if (userPrototype === Admin.prototype) {
              userGroup = "Admin";
            }else if (userPrototype === Professor.prototype) {
                userGroup = "Professor";
              }
        
            let sessionConstructor = new SessionConstructor(userObject.id, userGroup, '');
            done(null,sessionConstructor);
          });

        passport.deserializeUser(function(sessionConstructor, done) {
           if(sessionConstructor.userGroup == 'Aluno'){
            connection.query("select * from alunos where id = "+ sessionConstructor.userId,function(err,rows){	
                done(err, rows[0])
            }) 
           }else if(sessionConstructor.userGroup == 'Admin'){
            connection.query("select * from admins where id = "+sessionConstructor.userId,function(err,rows){	
                done(err, rows[0])
            })
            }else if(sessionConstructor.userGroup == 'Professor'){
                connection.query("select * from professors where id = "+sessionConstructor.userId,function(err,rows){	
                    done(err, rows[0])
                })
            }
        })
     
    
    
}
    
    

    