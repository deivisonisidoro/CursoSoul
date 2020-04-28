const passport = require("passport")

const entrarAluno =async (req, res, next ) =>{
    passport.authenticate("local", {
        successRedirect: "/aluno/",
        failureRedirect: "/aluno/login",
        failureFlash: true
    
    })(req, res, next)
    
}
const entrarAdmin =async (req, res, next ) =>{
    passport.authenticate("local", {
        successRedirect: "/admin/index",
        failureRedirect: "/admin/login",
        failureFlash: true
    
    })(req, res, next)
    
}

const sair= async (req, res)=>{
    req.logout()
    req.flash("error_msg", "deslogado com sucesso")
    res.redirect("/")
}
module.exports ={
    entrarAluno,
    entrarAdmin,
    sair,
}