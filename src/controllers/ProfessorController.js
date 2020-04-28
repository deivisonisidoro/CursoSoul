const Professor= require('../models/Professor')

const addProfessorController= async(req, res)=>{
    var erro=[]
    
    if (!req.body.nome || typeof req.body.nome == undefined|| req.body.nome == null ){
        erro.push({texto: "Nome inválido"})
    }
    if (!req.body.cpf || typeof req.body.cpf == undefined|| req.body.cpf == null ){
        erro.push({texto: "CPF inválido"})
    }
    if (!req.body.endereco || typeof req.body.endereco == undefined|| req.body.endereco == null ){
        erro.push({texto: "Endereco invalida"})
    }
    
    if (!req.body.telefone || typeof req.body.telefone == undefined|| req.body.telefone == null ){
        erro.push({texto: "Telefone invalido"})
    }
    if (!req.body.email || typeof req.body.email == undefined|| req.body.email == null ){
        erro.push({texto: "Endereco invalida"})
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
        res.render("admin/addaluno", {erro: erro})
    }else{    
      Professor.findOne({where: {'email': req.body.email}}).then((professor)=>{
        if(professor){
                req.flash("error_msg", "Já existe uma conta com esse email no nosso sistema")
                res.redirect("/admin/aluno/add")
            }else{
                Aluno.create({
                    id: req.body.id,
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    endereco: req.body.endereco,
                    telefone: req.body.telefone,
                    turma: req.body.turma, 
                    email: req.body.email,
                    senha: req.body.senha,
                    horario: req.body.horario,
                    respon: req.body.respon
                    
                })
            res.redirect("/admin/aluno")
              
            }}).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar o aluno tente novamente"+ err)
            res.redirect("/admin/aluno/add")
        })
            
        
    }

}

module.exports={
    addProfessorController

}