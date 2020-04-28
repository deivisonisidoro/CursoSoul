const expres = require("express")
const routes = expres.Router()
const LoginController = require("../controllers/LoginController")

const ProfessorController = require("../controllers/ProfessorController")



//importando controllers
const AlunoController = require("../controllers/AlunoController")

routes.get("/", (req, res)=>{
    res.render("professor/index")
})
routes.get("/login", (req, res)=>{
    res.render("aluno/login")
})
routes.post("/login", LoginController.entrarAluno)

routes.get("/logout", LoginController.sair)

routes.get('/add', (req, res) =>{
    res.render("professor/addprofessor")
 })
routes.post("/novo", ProfessorController.addProfessorController)

module.exports = routes