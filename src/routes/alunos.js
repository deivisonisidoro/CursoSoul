const expres = require("express")
const routes = expres.Router()
const LoginController = require("../controllers/LoginController")
const passport = require("passport")


//importando controllers
const AlunoController = require("../controllers/AlunoController")

routes.get("/", (req, res)=>{
    res.render("aluno/index")
})
routes.get("/login", (req, res)=>{
    res.render("aluno/login")
})
routes.post("/login", LoginController.entrarAluno)

routes.get("/logout", LoginController.sair)

routes.get('/add', (req, res) =>{
    res.render("aluno/addaluno")
 })
routes.post("/novo", AlunoController.somaAlunoController)

module.exports = routes