//Carregando modulo
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
const aluno= require("./routes/alunos")
const professor= require("./routes/professor")
const path = require('path')
const passport= require("passport")


const session = require('express-session')
const flash = require('connect-flash')

//Carregando validação
require("./controllers/AlunoValidacao")(passport)
//require("./controllers/AdminValidacao")(passport)

//informando da conexao com o banco de dados
require("./database")


//Sessão
    app.use(session({
        secret:"cursosoul",
        resave:true,
        saveUninitialized:true
        
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())

//Middleware
    app.use((req, res, next)=>{
        res.locals.success_msg =req.flash("success_msg")
        res.locals.error_msg= req.flash("error_msg")
        res.locals.error = req.flash("error")
        res.locals.user = req.user
        next()
    })    
//Config
    // Template Engine
        app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    
   
    //Public
        app.use(express.static(path.join(__dirname,"public")))
        
    // Rotas
        app.get("/", (req, res)=>{
            res.render("home/index")
        })
        app.use('/admin', admin)
        app.use('/aluno', aluno)
        app.use('/professor', professor)

//Outros   
    const PORT = 8081
    app.listen(PORT, function(){
        console.log("Servidor rodando em localhost:8081")
})