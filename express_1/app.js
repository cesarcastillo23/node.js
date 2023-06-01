const debug= require('debug')('app:inicio');
const bddebug= require('debug')('app:bd');
const express= require('express');
//const logger=require('./logger')
const config=require('config')
const usuarios=require('./routes/usuarios')
const morgan = require('morgan')
//const Joi= require('joi');
const app = express();


//FUNCIONES MIDDLEWARE
app.use(express.json());
// EXPRESS URLENCODED
app.use(express.urlencoded({extended:true}));
// RECURSOS ESTATICOS-- public/prueba.txt
app.use(express.static('public'));
app.use('/api/usuarios',usuarios)

//app.use(logger); remplazado por morgan

// app.use(function(req,res,next){
//   console.log('Autenticando');
//   next()
// })
// CONFIGURACION DE ENTORNO DE TRABAJO
//export NODE_ENV=production //// la de ejecucion 
// node my-app.js
console.log('Aplicacion: '+config.get('nombre'));
console.log('BD server:'+ config.get('configDB.host'));
// USO DE MIDDLWARE
if(app.get('env')==='development'){
  app.use(morgan('tiny'))
  //console.log('Morgan habilitado...');
  debug('Morgan esta habilitado')
}

//trabajos con la base de datos
bddebug('Conectando con la base de datos')

// app.post();// insertar datos
// app.get();// solicitud de datos
// app.put();// actualizacion
// app.delete();// eliminacion
//CREACION DE CONEXION PUERTO 3000
// app.get('/',(req,res)=>{
//     res.send('hola mundo desde express.');
// });
// app.get('/api/usuario',(req,res)=>{
//     res.send(['cesar','felipe','maria']);
// });

// app.listen(3000,()=>{
//   console.log('Escuchando en el puerto 3000...');
// })

// VARIACIONES DE ENTORNO 
// app.get('/',(req,res)=>{
//     res.send('hola mundo desde express2.');
// });
// app.get('/api/usuario',(req,res)=>{
//     res.send(['cesar','felipe','maria']);
// });
// //PARAMETROS DE LAS RUTAS  
// app.get('/api/usuario/:id',(req,res)=>{
//     res.send(req.params.id);
// });
// app.get('/api/usuario/:year/:mes',(req,res)=>{
//     res.send(req.params);
// });
// app.get('/api/usuario/:year/:mes',(req,res)=>{
//     res.send(req.query);
// });

// const port= process.env.PORT || 3000
// app.listen(port,()=>{
//   console.log(`Escuchando en el puerto ${port}...`);
// })

// MANEJO DE SOLICITUDES HTTP GET 

// const usuarios=[
//   {id:1, nombre:'cesar'},
//   {id:2, nombre:'felipe'},
//   {id:3, nombre:'alexander'},
//   {id:4, nombre:'maria'}
// ]
// app.get('/',(req,res)=>{
//     res.send('hola mundo desde express2.');
// });
// app.get('/api/usuarios',(req,res)=>{
//     res.send(['cesar','felipe','maria']);
// });
// //PARAMETROS DE LAS RUTAS  
// app.get('/api/usuarios/:id',(req,res)=>{
//     let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
//     if(!usuario) res.status(404).send('El usuario no fue encontrado');
//     res.send(usuario);
// });
// const port= process.env.PORT || 3000
// app.listen(port,()=>{
//   console.log(`Escuchando en el puerto ${port}...`);
// })

// MANEJO DE SOLICITUDES HTTP PUT 

// app.use(express.json());
// const usuarios=[
//   {id:1, nombre:'cesar'},
//   {id:2, nombre:'felipe'},
//   {id:3, nombre:'alexander'},
//   {id:4, nombre:'maria'}
// ]
// app.get('/',(req,res)=>{
//     res.send('hola mundo desde express2.');
// });
// app.get('/api/usuarios',(req,res)=>{
//     res.send(['cesar','felipe','maria']);
// });
// //PARAMETROS DE LAS RUTAS  
// app.get('/api/usuarios/:id',(req,res)=>{
//     let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
//     if(!usuario) res.status(404).send('El usuario no fue encontrado');
//     res.send(usuario);
// });

// app.post('/api/usuarios',(req,res)=>{
//     const usuario={
//       id: usuarios.length+1,
//       nombre:req.body.nombre
//     }
//     usuarios.push(usuario);
//     res.send(usuario);
// })

// const port= process.env.PORT || 3000
// app.listen(port,()=>{
//   console.log(`Escuchando en el puerto ${port}...`);
// })
// VALIDACIONES DE DATOS DE ENTRADA

// const usuarios=[
//   {id:1, nombre:'cesar'},
//   {id:2, nombre:'felipe'},
//   {id:3, nombre:'alexander'},
//   {id:4, nombre:'maria'}
// ]
// app.get('/',(req,res)=>{
//     res.send('hola mundo desde express2.');
// });
// app.get('/api/usuarios',(req,res)=>{
//     res.send(usuarios);
// });
// //PARAMETROS DE LAS RUTAS  
// // METODO DE SOLICITUDES GET - CONSULTAR
// app.get('/api/usuarios/:id',(req,res)=>{
//     // let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
//     // if(!usuario) res.status(404).send('El usuario no fue encontrado');
//     // res.send(usuario);
//     let usuario= existeUsusario(req.params.id);
//     if(!usuario)
//       res.status(404).send('El usuario no fue encontrado');
//       res.send(usuario);
  
// });


// VALIDACIONES METODO JOI---- CREAR
//app.post('/api/usuarios',(req,res)=>{
  // const schema = Joi.object({
    //   nombre: Joi.string().min(3).max(30).required()
    //   });
    //   const {error,value}=schema.validate({ nombre: req.body.nombre });
    /////////////////////////////////////////////////////////
    //URLENCODED
    // let body=req.body;
    // console.log(body.nombre);
    // res.json({
      //   body
      // })
      //////////////////
  //   app.post('/api/usuarios',(req,res)=>{
  //     const {error,value}=validacionUsuario(req.body.nombre)
  //   if(!error){
  //     const usuario={
  //             id: usuarios.length+1,
  //             nombre:value.nombre
  //           }
  //           usuarios.push(usuario);
  //           res.send(usuario);
  //   }else{
  //     const mensaje=error.details[0].message;
  //     res.status(400).send(mensaje)
  //   }
  // })
//   if(!req.body.nombre || req.body.nombre.length <=2){
//     //400 bad request
//     res.status(400).send('Debe ingresar un nombre');
//     return;
//   }
//    
// })

//MANEJO DE SOLICITUDES PUT - ACTUALIZAR
// app.put('/api/usuarios/:id',(req,res)=>{
//     //Encontrar si el objeto id existe
//     //let usuario = usuarios.find(u=> u.id === parseInt(req.params.id));
//     let usuario= existeUsusario(req.params.id);
//     if(!usuario){
//       res.status(404).send('El usuario no fue encontrado');
//       return;
//     } 
//     // const schema = Joi.object({
//     //   nombre: Joi.string().min(3).max(30).required()
//     //   });
//       //const {error,value}=schema.validate({ nombre: req.body.nombre });
//       const {error,value}=validacionUsuario(req.body.nombre)
//       if(error){
//         const mensaje=error.details[0].message;
//         res.status(400).send(mensaje);
//         return
//       }
//       usuario.nombre= value.nombre;
//       res.send(usuarios);
//   })
  // METODO DE VALIDACION DELETE
  // app.delete('/api/usuarios/:id',(req,res)=>{
  //   let usuario= existeUsusario(req.params.id);
  //   if(!usuario){
  //     res.status(404).send('El usuario no fue encontrado');
  //     return;
  //   }

  //   const index = usuarios.indexOf(usuario);
  //       usuarios.splice(index, 1);
  //       res.send(usuarios);
  // })


  const port= process.env.PORT || 3000
  app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}...`);
  })
  
  // FUNCIONES DE VALIDACION
//  function existeUsusario(id){
//   return (usuarios.find(u=> u.id === parseInt(id)));
//  }

//  function validacionUsuario(nom){
//   const schema = Joi.object({
//     nombre: Joi.string().min(3).max(30).required()
//     });
//     return(schema.validate({ nombre:nom }))
//  }