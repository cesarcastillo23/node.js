const express = require('express')
const ruta = express.Router();
const Joi= require('joi');


const usuarios=[
  {id:1, nombre:'cesar'},
  {id:2, nombre:'felipe'},
  {id:3, nombre:'alexander'},
  {id:4, nombre:'maria'}
]
// ruta.get('/:saludo',(req,res)=>{
//     res.send('hola mundo desde express.');
// });
ruta.get('/',(req,res)=>{
    res.send(usuarios);
});
//PARAMETROS DE LAS RUTAS  
// METODO DE SOLICITUDES GET - CONSULTAR
ruta.get('/:id',(req,res)=>{
    let usuario= existeUsusario(req.params.id);
    if(!usuario)
      res.status(404).send('El usuario no fue encontrado');
      res.send(usuario);
     
});

ruta.post('/',(req,res)=>{
  const {error,value}=validacionUsuario(req.body.nombre)
if(!error){
  const usuario={
          id: usuarios.length+1,
          nombre:value.nombre
        }
        usuarios.push(usuario);
        res.send(usuario);
}else{
  const mensaje=error.details[0].message;
  res.status(400).send(mensaje)
}
})

ruta.put('/:id',(req,res)=>{
  //Encontrar si el objeto id existe
  //let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
  let usuario= existeUsusario(req.params.id);
  if(!usuario){
    res.status(404).send('El usuario no fue encontrado');
    return;
  } 
    const {error,value}=validacionUsuario(req.body.nombre)
    if(error){
      const mensaje=error.details[0].message;
      res.status(400).send(mensaje);
      return
    }
    usuario.nombre= value.nombre;
    res.send(usuarios);
});

ruta.delete('/:id',(req,res)=>{
  let usuario= existeUsusario(req.params.id);
  if(!usuario){
    res.status(404).send('El usuario no fue encontrado');
    return;
  }

  const index = usuarios.indexOf(usuario);
      usuarios.splice(index, 1);
      res.send(usuarios);
})

function existeUsusario(id){
  return (usuarios.find(u=> u.id === parseInt(id)));
 }

 function validacionUsuario(nom){
  const schema = Joi.object({
    nombre: Joi.string().min(3).max(30).required()
    });
    return(schema.validate({ nombre:nom }))
 }


module.exports= ruta;