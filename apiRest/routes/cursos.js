const express=require('express')
const Curso=require('../models/curso_model')
const verificarToken=require('../middlewares/auth')
const ruta=express.Router();

ruta.get('/',verificarToken,(req,res)=>{

  let resultado=listarCursos();
  resultado.then(cursos=>{
    res.json(cursos)
  }).catch(err=>{
    res.status(400).json({
      err
    })
  })

});

ruta.post('/',verificarToken,(req,res)=>{
  let resultado=crearCurso(req.body);
  resultado.then(curso=>{
    res.json({
      curso
    })
  }).catch(err=>{
      res.status(400).json({
        err
      })
  })
})

ruta.put('/:id',verificarToken,(req,res)=>{
  let resultado=actualizarCurso(req.params.id,req.body);
  console.log(req.body);
  resultado.then(curso=>{
    res.json({
      curso
    })
  }).catch(err=>{
    res.status(400).json({
      err
    })
  })
})
ruta.delete('/:id',verificarToken,(req,res)=>{
  let resultado=eliminarCurso(req.params.id)
    resultado.then(valor=>{
      res.json({
        estado:valor
      })
    }).catch(err=>{
      res.status(400).json({
        err
      })
      console.log(err)
    })
})

async function crearCurso(req){
  let curso=new Curso({
    titulo: req.body.titulo,
    autor:req.usuario._id,
    descripcion:req.body.descripcion
  });
  return await curso.save()
}

async function actualizarCurso(id,body){
  let curso= await Curso.findByIdAndUpdate(id,{
    $set:{
      titulo:body.titulo,
      descripcion:body.descripcion
    }
  },{new:true});
  console.log(curso);
  return curso
}

async function listarCursos(){
  let cursos=await Curso
  .find({'estado':true})
  .populate('autor','nombre -_id')
  return cursos
}

async function eliminarCurso(id){
  let curso=await Curso.findByIdAndUpdate(id,{
    $set:{
      estado:false
    }
  },{new:true})
  return curso
}

module.exports=ruta;