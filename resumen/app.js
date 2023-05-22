// function saludo (nombre){
//   console.log("hola "+nombre);
// }

// saludo("felipe")
// FUNCIONES FLECHA-----------------
//const years=[2000,2005,2008,2012];

// var edad1 = years.map (function(el){
//   return 2023 - el ;
// })
// console.log (edad1);


// var edad2 = years.map (el => 2023 - el );
// console.log (edad2);

//-------------------------------
// FUNCIONES CALLBACK

// function Sumar (num1,num2 ,callback){
//   let resultado = num1+ num2;  
//   callback(resultado);
// }
// function resultado (res){
//   console.log(res);
// }

// Sumar(5,8,resultado)
// -----------------------------------------
// PROMESAS

// setTimeout(()=>console.log
// ("Este resultado se ejecutara en  2 segundos"),2000);


// const mensaje = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     if (true)
//     resolve("Este resultado se ejecutara en  2 segundos")
//     else 
//       reject("Hubo un error.")
//   },2000);
// })

// mensaje
//   .then ( msj => {
//     console.log(msj);
//   })
//   .catch (error =>{
//     console.log(error);
//   });

//---------------------
// ASYNC/AWAIT


  function mensaje(){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      if (false)
      resolve("Este resultado se ejecutara en  1 segundos")
      else 
        reject("Hubo un error.")
    },1000);

   })
  }


async function llamadaAsync(){
  console.log("llamada...");
  const resultado = await mensaje()
  return(resultado);
}

llamadaAsync().then(x => console.log(x)).catch(err => console.log(err));

//MODULES
//console.log("hola ");
//setTimeout()
//clearTimeout()
//setInterval()
//clearInterval()


// global.console.log();
// this.setTimeout()
//-------------------------------
//UBICADA EN ARCHIVO "DATOS"
// global.test="Hola mundo";
// //SOLICITUD
// require ("../datos")
// global.test="finalizado";
// console.log(global.test);
// console.log(module);


// INSTALAR DEPENDENCIAS DE NPM 
//  npm i @colors/colors
//  npm i colors@1.3.2
// npm list TOTAL DE DEPENDENCIAS 
// npm view mongoose ---- para ver toda la informacion
// npm outdate -- lista de dependencias a actualizar
// npm i -g npm-check-update  -- lista de dependencias a 
//actualizar con terminal modo administrador
//npm-check-update
// ncu -u
// ncu i para instalar

// npm install -save-dev paquete // para las dependencias en desarrollo