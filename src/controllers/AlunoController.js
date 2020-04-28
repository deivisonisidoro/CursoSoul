const Aluno = require("../models/Aluno")
const Admin = require("../models/Admin")
const bcrypt = require('bcryptjs')
const passport = require("passport")


const lisAlunoController= async (req, res) =>{
    Aluno.findAll( ).then((aluno)=>{
        return res.render("admin/aluno", {aluno: aluno} )  
    }).catch((err) => {        
        req.flash("error_msg", "Houve um erro ao listar os alunos")
        return  res.redirect("/admin") 
        })
    }

const addAlunoController= async(req, res)=>{
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
        if (!req.body.turma || typeof req.body.turma == undefined|| req.body.turma == null ){
            erro.push({texto: "Turma invalida"})
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
          Aluno.findOne({where: {'email': req.body.email}}).then((aluno)=>{
            if(aluno){
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
                        
                    }).then(()=>{
                        req.flash("success_msg", "Aluno cadastrado com sucesso!")
                        res.redirect("/admin/aluno")
                    })
               
                  
                }}).catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar o aluno tente novamente"+ err)
                res.redirect("/admin/aluno/add")
            })
                
            
        }
    
    }

const somaAlunoController= async(req, res)=>{
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
        if (!req.body.turma || typeof req.body.turma == undefined|| req.body.turma == null ){
            erro.push({texto: "Turma invalida"})
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
            res.render("aluno/addaluno", {erro: erro})
        }else{    
          Aluno.findOne({where: {'email': req.body.email}}).then((aluno)=>{
            if(aluno){
                    req.flash("error_msg", "Já existe uma conta com esse email no nosso sistema")
                    res.redirect("/aluno/add")
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
                    }).then(()=>{
                        req.flash("success_msg", "Aluno cadastrado com sucesso!")
                        res.redirect("/aluno/")
                    })
                }}).catch((err) => {
                req.flash("error_msg", "Houve um erro ao salvar o aluno tente novamente"+ err)
                res.redirect("/aluno/add")
            })
                
            
        }
    
    }

const editAlunoControllerId = async(req, res) =>{
    Aluno.findOne({where: {'id': req.params.id}}).then((aluno)=>{
        res.render("admin/editaluno",{aluno: aluno})
    }).catch(function(err){
        req.flash("error_msg", "Este alunonao existe")
        res.redirect("admin/aluno")
    })
}
const editAlunoController =async (req, res)=>{
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
    if (!req.body.turma || typeof req.body.turma == undefined|| req.body.turma == null ){
        erro.push({texto: "Turma invalida"})
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
    }    
    else
    Aluno.findOne({where: {'id': req.body.id}}).then((aluno)=>{
        aluno.nome = req.body.nome
        aluno.cpf = req.body.cpf
        aluno.endereco = req.body.endereco
        aluno.telefone = req.body.telefone
        aluno.turma = req.body.turma
        aluno.email = req.body.email
        aluno.senha = req.body.senha
        aluno.horario = req.body.horario
        aluno.responsavel = req.body.responsavel
        aluno.save().then(()=>{
              req.flash('success_msg', 'Categoria editada com sucesso!')
              res.redirect("/admin/aluno")
          }).catch((err)=>{
              req.flash("error_msg", "Houve um erro interno ao salvar")
              res.redirect("/admin/aluno")
          })   
  
      }).catch(function(erro){
          req.flash("error_msg", "Este alunonao existe")
          res.redirect("admin/aluno")
      })            
}

const deleteAlunoController = (req,res) =>{
    Aluno.destroy({where: {'id': req.body.id}}).then(()=>{
        req.flash("success_msg", "Aluno removido com sucesso!" )
        res.redirect("/admin/aluno")
    }).catch(function(err){
        req.flash("error_msg", "Nâo foi possivelremover o aluno!")
        res.redirect("/admin/aluno")
    })
}

module.exports = {
    lisAlunoController,
    addAlunoController,
    editAlunoControllerId,
    editAlunoController,
    deleteAlunoController,
    somaAlunoController,
    }

     
           
            
      
      
       
    


