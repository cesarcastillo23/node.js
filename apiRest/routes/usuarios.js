const express=require('express')
// const jwt = require('jsonwebtoken');
// const config=require('config')
const verificarToken=require('../middlewares/auth')
const bcrypt = require('bcrypt');
const Joi=require('joi')
const Usuario=require('../models/usuario_model')
const ruta=express.Router();

const schema = Joi.object({
  nombre: Joi.string()
      .min(3)
      .max(30)
      .required(),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
  


ruta.get('/',verificarToken,(req,res)=>{
  let resultado=listarUsuarios();
  resultado.then(usuarios=>{
    res.json(usuarios)
  }).catch(err=>{
    res.status(400).json({
      err
    })
    console.log(err);
  })

});
ruta.post('/', async (req, res) => {
  try {
    const body = req.body;
    const user = await Usuario.findOne({ email: body.email }).exec();

    if (user) {
      // Usuario existe
      return res.status(400).json({
        mensaje: 'El usuario ya existe'
      });
    }

    const { error, value } = schema.validate({ nombre: body.nombre, email: body.email });

    if (!error) {
      const resultado = await crearUsuario(body);
      return res.json({
        nombre: resultado.nombre,
        email: resultado.email
      });
    } else {
      return res.status(400).json({
        error
      });
    }
  } catch (err) {
    return res.status(500).json({
      error: 'Error en el servidor'
    });
  }
});
ruta.put('/:email',verificarToken,(req,res)=>{
  let resultado=actualizarUsuario(req.params.email, req.body);
  const {error,value}=schema.validate({email:body.email})
  if(!error){
    resultado.then(valor=>{
      res.json({
        nombre:valor.nombre,
        email:valor.email
      })
    }).catch(err=>{
      res.status(400).json({
        err
      })
      console.log(err)
    });
  }else{
    res.status(400).json({
      error
    })

  }
})

ruta.delete('/:email',verificarToken,(req,res)=>{
  let resultado=desactivarUsuario(req.params.email);
  resultado.then(valor =>{
      res.json({
        nombre:valor.nombre,
        email:valor.email

      })
  }).catch(err=>{
    res.status(400).json({
      err
    })
  })
})

async function listarUsuarios(){
    let usuarios=await Usuario.find({'estado':true})
    .select({nombre:1,email:1})
    return usuarios
}


async function crearUsuario(body){
  let usuario=new Usuario({
    email: body.email,
    nombre:body.nombre,
    password:bcrypt.hashSync(body.password,10)
  });
  return await usuario.save()
}

async function actualizarUsuario(email,body){
    let usuario= await Usuario.findOneAndUpdate({"email": email},{
      $set:{
        nombre:body.nombre,
        password:body.password
      }
    },{new:true})
    return usuario;
}

async function desactivarUsuario(email){
  let usuario = await Usuario.findOneAndUpdate({"email": email}, {
      $set: {
          estado: false
      }
  }, {new: true});
  return usuario;
}







module.exports=ruta;
