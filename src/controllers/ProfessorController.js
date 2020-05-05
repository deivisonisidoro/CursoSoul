const Professor= require('../models/Professor')
const Aluno = require("../models/Aluno")
const Dificuldades = require("../models/Dificuldade") 

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
    
    if (!req.body.telefone || typeof req.body.telefone == undefined|| req.body.endereco == null ){
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
        res.render("admin/addprofessor", {erro: erro})
    }else{    
      Professor.findOne({where: {'email': req.body.email}}).then((professor)=>{
        if(professor){
                req.flash("error_msg", "Já existe uma conta com esse email no nosso sistema")
                res.redirect("/admin/professor/add")
            }else{
                Professor.create({
                    id: req.body.id,
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    endereco: req.body.endereco,
                    telefone: req.body.telefone,
                    turma: req.body.turma, 
                    email: req.body.email,
                    senha: req.body.senha,
                    localTrabalho: req.body.localTrabalho,
                    
                }).then(()=>{
                    req.flash("success_msg", "Aluno cadastrado com sucesso!")
                    res.redirect("/admin/professor")
                })
            
              
            }}).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar o aluno tente novamente"+ err)
            res.redirect("/admin/professor/add")
        })
            
        
    }

}

const listarAlunos = async (req, res) =>{
    Aluno.findAll( ).then((aluno)=>{
        return res.render("professor/alunos", {aluno: aluno} )  
    }).catch((err) => {        
        req.flash("error_msg", "Houve um erro ao listar os alunos")
        return  res.redirect("/professor") 
        })
    
    

}
const relatorioAlunoControllerId = async(req, res) =>{
    Aluno.findOne({where: {'id': req.params.id}}).then((aluno)=>{
        res.render("professor/relatorio",{aluno: aluno})
    }).catch(function(err){
        req.flash("error_msg", "Este alunonao existe")
        res.redirect("admin/aluno")
    })
}
    const notaAlunoControllerId = async(req, res) =>{
        Aluno.findOne({where: {'id': req.params.id}}).then((aluno)=>{
            res.render("professor/notas",{aluno: aluno})
        }).catch(function(err){
            req.flash("error_msg", "Este aluno nao existe")
            res.redirect("admin/aluno")
        })
    }
    const relatorioAlunoController= async (req,res)=>{
        Aluno.create({
            relatorio: req.body.relatorio
        }).then(()=>{
            req.flash("success_msg", "Relatorio gerado com sucesso!")
            res.redirect("/professor")
        }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao criar relatorio, tente novamente"+ err)
    res.redirect("professor/relatorio")
})
    }
module.exports= {
    addProfessorController,
    listarAlunos,
    relatorioAlunoControllerId,
    notaAlunoControllerId,
    relatorioAlunoController
}