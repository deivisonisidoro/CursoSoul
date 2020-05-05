
const Admin = require("../models/Admin")


const addAdminController= async(req, res)=>{
        var erro=[]
        
        if (!req.body.email|| typeof req.body.email == undefined|| req.body.email == null ){
            erro.push({texto: "Email invalido"})
        }
        
        if (!req.body.senha || typeof req.body.senha == undefined|| req.body.senha == null ){
            erro.push({texto: "Senha invalida"})
        }
        
        if (!req.body.senha > 4){
            erro.push({texto: "Senha muito curta"})
        }
        if (!req.body.senha == req.body.senha2){
            erro.push({texto: "As senhas sâo diferentes tente novamente"})
        }
        if (erro.length> 0) {
            res.render("admin/addadmin", {erro: erro})
        }else{   
          Admin.findOne({where: {'email': req.body.email}}).then((admin)=>{
            if(admin){
                    req.flash("error_msg", "Já existe uma conta com esse email no nosso sistema")
                    res.redirect("/admin/add")
                }else{
                    Admin.create({
                        id: req.body.id,
                        email: req.body.email,
                        senha: req.body.senha,

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

     
           
            
      
      
       
    


