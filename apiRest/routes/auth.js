const express=require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario=require('../models/usuario_model')
const config=require('config')
const ruta=express.Router();
//const Joi=require('joi')

ruta.post('/',async(req,res)=>{
  try{
    const datos =await Usuario.findOne({email:req.body.email}).exec();

    if(datos){
      const passwordValido= bcrypt.compareSync(req.body.password,datos.password)
        if(!passwordValido)
        return res.status(400).json({
          error:'ok',
          msj:'Usuario o contraseña incorrecta.'})
            const jwtoken=jwt.sign({
                    usuario: {_id:datos._id,nombre:datos.nombre,email:datos.email}
                  },config.get('configToken.SEED'), { expiresIn: config.get('configToken.expiration') });//jwt.sign({_id:datos._id,nombre:datos.nombre,email:datos.email},'password')
        res.json({
          Usuario:{
            _id:datos._id,
            nombre:datos.nombre,
            email:datos.email
          },
          jwtoken
        });
    }else{
      res.status(400).json({
        error:'ok',
        msj:'Usuario o contraseña incorrecta.'

      })
    } 
  }catch(err){
    res.status(400).json({
      error:'ok',
      msj:'Error en el servidor'+ err
    })
  }
})




module.exports=ruta;