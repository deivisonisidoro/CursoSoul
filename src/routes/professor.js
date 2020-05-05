const expres = require("express")
const routes = expres.Router()
const LoginController = require("../controllers/LoginController")
const passport = require("passport")
const multer = require("multer")
const  path = require("path")
const http = require("http").Server(routes)
const ModuloController = require("../controllers/ModuloController")



//importando controllers
const AlunoController = require("../controllers/AlunoController")
const ProfessorController =require("../controllers/ProfessorController")
const DownloadContrroler= require("../controllers/DownloadController")
routes.get("/login", (req, res)=>{
    res.render("professor/login")
})
routes.post("/login", LoginController.entrarProfessor)

routes.get("/logout", LoginController.sair)

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename: (req, file, cb)=>{
        cb(null,  file.originalname+path.extname(file.originalname))
    }
})
 
const uploads= multer({storage})

routes.get("/", (req, res)=>{
    res.render("professor/login")
})
routes.get("/index", (req, res)=>{
    res.render("professor/index")
})

routes.get("/teste", (req, res)=>{
    res.render("professor/teste")
})


routes.post("/upload", uploads.single("file"), (req, res)=>{
     res.send("Arquivo recebido!")
 })

routes.get('/aluno', ProfessorController.listarAlunos )

//routes.get('/aluno', ProfessorController.listarDificuldades )

routes.get("/aluno/relatorio/:id",  ProfessorController.relatorioAlunoControllerId)
 
routes.post("/novorelatorio",  ProfessorController.relatorioAlunoController)

routes.get("/aluno/nota/:id",  ProfessorController.notaAlunoControllerId)
 
routes.get("/aluno/dificuldades", (req,res)=>{
     res.render("aluno/nivelDificuldades")
 })
 
routes.get("/aluno/dificuldades/edit", ModuloController.editarDificuldadesId)
routes.get("/aluno/dificuldades/:id", ModuloController.listarAlunos)
 
routes.post("/aluno/dificuldades/:alunoId", ModuloController.addDificuldades)

 

  
 //routes.post("/aluno/nota",  ProfessorController.notaAlunoController)

module.exports = routes