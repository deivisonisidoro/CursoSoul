   const expres = require("express")
   const routes = expres.Router()
   require ('passport')  

//importando models
   

//importando controllers
   const AlunoController = require("../controllers/AlunoController")

  //const {eadmin} = require("../controllers/eadmin")
   const ProfessorController= require("../controllers/ProfessorController")
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
   
   routes.get("/professor/",  (req, res) => {
      res.render("professor/index")
   })
       
   routes.get('/professor/add', (req, res) =>{
      res.render("admin/addprofessor")
   })

   routes.post("/professor/add", ProfessorController.addProfessorController)

   routes.get('/aluno',  AlunoController.lisAlunoController)

   routes.get('/aluno/add',  (req, res) =>{
      res.render("aluno/addaluno")
   })
   routes.post('/aluno/novo', AlunoController.addAlunoController) 

   routes.get("/aluno/edit/:id",  AlunoController.editAlunoControllerId)

   routes.post("/aluno/edit",  AlunoController.editAlunoController)

   routes.post("/aluno/deletar", AlunoController.deleteAlunoController) 
   


module.exports = routes