const Dificuldade = require("../models/Dificuldade")
const Aluno = require("../models/Aluno")


const listarAlunos = async (req, res) =>{
    Aluno.findOne({where:{"id": req.params.id}} ).then((aluno)=>{
            return res.render("aluno/nivelDificuldades", {aluno: aluno}) 
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao listar os alunos")
            return  res.redirect("/professor/alunos"+ err) 
        })  

        
    }


const addDificuldades = async (req, res)=>{
    
    const {alunoId} = req.params
    //const {id, dificuldadesFala, dificuldadesEscrita, dificuldadesAuditiva, dificuldadesLeitura} = req.body
    const aluno =  await  Aluno.findByPk(alunoId)


    if(!aluno){
        return res.status(400)
    }else{
        Dificuldade.create({
           
            id: req.body.id,
            dificuldadesFala: req.body.dificuldadesFala,
            dificuldadesEscrita: req.body. dificuldadesEscrita,
            dificuldadesAuditiva: req.body.dificuldadesAuditiva,
            dificuldadesLeitura: req.body.dificuldadesLeitura,
            alunoId
            
            
        }).then(()=>{
            req.flash("success_msg", "nivel cadastrado com sucesso!")
            res.redirect("/professor/aluno")
        }).catch((err) => {
    req.flash("error_msg", "Houve um erro ao salvar as dificuldades tente novamente"+ err)
    res.redirect("/professor/aluno/", err)
    })
    }
}    

const editarDificuldadesId = async (req, res)=>{
    Dificuldade.findOne({where: {'id': req.params.id}}).then((aluno)=>{
        
        return res.render("professor/editanota",{aluno: aluno} )
              
    }).catch(function(err){
        req.flash("error_msg", "Este aluno nao existe")
        res.redirect("/professor/alunos"+ err) 
    })
}

const editarDificuldades = async (req, res)=>{
   
    Dificuldade.findOne({where: {'id': req.params.id}}).then((aluno)=>{
        aluno.dificuldadesFala = req.body.dificuldadesFala,
        aluno.dificuldadesEscrita= req.body. dificuldadesEscrita,
        aluno.dificuldadesAuditiva= req.body.dificuldadesAuditiva,
        aluno.dificuldadesLeitura= req.body.dificuldadesLeitura,
        aluno.alunoId = req.params.alunoId
        aluno.save().then(()=>{
              req.flash('success_msg', 'Categoria editada com sucesso!')
              res.redirect("/professor/aluno")
          }).catch((err)=>{
              req.flash("error_msg", "Houve um erro interno ao salvar", err)
              res.redirect("/professor/aluno")
          })   
  
      }).catch(function(erro){
          req.flash("error_msg", "Este aluno nao existe", erro)
          res.redirect("/professor/aluno")
      })       
}
const SomadeDificuldades = async (req, res)=>{
    
}
module.exports={
    editarDificuldadesId,
    addDificuldades, 
    listarAlunos,
    editarDificuldades
}