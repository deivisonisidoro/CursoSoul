const Atividade = require("../models/Atividade")
const Aluno = require("../models/Aluno")

const listarAtividadeController =  async (req, res) =>{
    
    Atividade.findAll().then.then((atividades)=>{
        return res.render("admin/atividades", {atividades: atividades} )  
        }).catch((err) => {        
        req.flash("error_msg", "Houve um erro ao listar os alunos")
        return  res.redirect("/admin/atividades") 
        })
    }
 
const addAividadeController= async(req,res)=>{
    /*const aluno = await Aluno.findByPk(dificuldadesAtv)
    if (!aluno){
        return res.status(400).send({error: "Aluno nao encontrado"})
    } 
    else{*/
        
        Atividade.create({
        id: req.body.id,
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
        dificuldadesAtv: req.body.dificuldadesAtv
        }).then(()=>{
            req.flash("success_msg", "Cadastro Realizado com sucesso")
            res.redirect("/admin/atividades")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao salvar a categoria tente novamente")
            res.redirect("/admin/atividades/add")
        })
   // }

}
module.exports = {
    addAividadeController,
    listarAtividadeController
}
