require ('passport')

module.exports = {
    eadmin: (req,res,next)=>{
        if (req.isAuthenticated()&& req.user.eAdmin == 3 ){
            return next()
        }
        req.flash("error_msg", "Você precisa ser um admin")
        res.redirect("/")
        
    }
}