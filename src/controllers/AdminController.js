
const Admin = require("../models/Admin")


const addAdminController= async(req, res)=>{
        var erro=[]
        
        if (!req.body.emailAdmin || typeof req.body.emailAdmin == undefined|| req.body.emailAdmin == null ){
            erro.push({texto: "Email invalido"})
        }
        
        if (!req.body.senhaAdmin || typeof req.body.senhaAdmin == undefined|| req.body.senhaAdmin == null ){
            erro.push({texto: "Senha invalida"})
        }
        
        if (!req.body.senhaAdmin > 4){
            erro.push({texto: "Senha muito curta"})
        }
        if (!req.body.senhaAdmin == req.body.senha2Admin){
            erro.push({texto: "As senhas sâo diferentes tente novamente"})
        }
        if (erro.length> 0) {
            res.render("admin/addadmin", {erro: erro})
        }else{   
          Admin.findOne({where: {'emailAdmin': req.body.emailAdmin}}).then((admin)=>{
            if(admin){
                    req.flash("error_msg", "Já existe uma conta com esse email no nosso sistema")
                    res.redirect("/admin/add")
                }else{
                    Admin.create({
                        id: req.body.id,
                        emailAdmin: req.body.emailAdmin,
                        senhaAdmin: req.body.senhaAdmin,

                    }).then(()=>{
                        req.flash("success_msg", "Admin cadastrado com sucesso!")
                        res.redirect("/admin/index/")
                    })
                }}).catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar o admn tente novamente"+ err)
                res.redirect("/admin/add")
            })
                
            
        }
    
    }

module.exports = {
    addAdminController
    }

     
           
            
      
      
       
    


