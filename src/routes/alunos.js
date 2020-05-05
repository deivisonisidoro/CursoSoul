const expres = require("express")
const routes = expres.Router()
const LoginController = require("../controllers/LoginController")



//importando controllers
const AlunoController = require("../controllers/AlunoController")

routes.get("/", (req,res)=>{
    res.render("aluno/index")
})

routes.post("/index/", AlunoController.listarDificuldades)

routes.get("/login", (req, res)=>{
    res.render("aluno/login")
})
routes.post("/login", LoginController.entrarAluno)

routes.get("/logout", LoginController.sair)

routes.get('/add', (req, res) =>{
    res.render("aluno/addaluno")
 })
 routes.get("/teste", (req, res)=>{
    res.render("aluno/teste")
 })
routes.post("/novo", AlunoController.somaAlunoController)

routes.get("/nivelDificuldades/:id", AlunoController.listarDificuldades)

module.exports = routes