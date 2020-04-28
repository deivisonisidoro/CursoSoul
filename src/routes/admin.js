   const expres = require("express")
   const routes = expres.Router()
   require ('passport')  

//importando models
   const Aluno = require("../models/Aluno")
   const Atividade= require('../models/Atividade')

//importando controllers
   const AlunoController = require("../controllers/AlunoController")
   const AtividadeController = require('../controllers/AtividadeController')
   const {eadmin} = require("../controllers/eadmin")
   const AdminController= require("../controllers/AdminController")
   const LoginController= require("../controllers/LoginController")

//conexão com banco de dados
   require('../database')

//Rotas   
   routes.get("/login", (req,res)=>{
      res.render("admin/login")
   })
   routes.post("/login", LoginController.entrarAdmin)
   routes.get("/logout", LoginController.sair)

   routes.get("/add", (req,res)=>{
      res.render("admin/addadmin")
   })
   routes.post('/add', AdminController.addAdminController) 
   
   routes.get("/index",  (req, res) => {
      res.render("admin/index")
   })
   routes.get('/aluno',  AlunoController.lisAlunoController)

   routes.get('/aluno/add',  (req, res) =>{
      res.render("admin/addaluno")
   })
   routes.post('/aluno/novo', AlunoController.addAlunoController) 

   routes.get("/aluno/edit/:id",  AlunoController.editAlunoControllerId)

   routes.post("/aluno/edit",  AlunoController.editAlunoController)

   routes.post("/aluno/deletar", AlunoController.deleteAlunoController) 
   
   routes.get("/atividades",   AtividadeController.listarAtividadeController)

   routes.get("/atividades/add", (req, res) => {
      res.render("admin/addatividades")
      })
   
   routes.post("/atividades/nova", eadmin, AtividadeController.addAividadeController)

module.exports = routes