const { number, object } = require('joi');
const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const cursoSchema=new mongoose.Schema({

  titulo:{
    type:String,
    require:true
  },
  autor:{
    type:Schema.Types.ObjectId,ref:'Usuario'
  },
  descripcion:{
    type:String,
    require:false
  },
  estado:{
    type:Boolean,
    default:true
  },
  imagen:{
    type:String,
    require:false
  },
  alumnos:{
    type:Number,
    default:0
  },
  calificacion:{
    type:Number,
    default:0

  }
})

module.exports=mongoose.model('Curso',cursoSchema);