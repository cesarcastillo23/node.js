// CREANDO MODULOS 

// const datos = require ('./datos');
// datos('hola mundo')
// console.log(module);

// MODULE PATH-------------------------
//Desglosa la direccion de un archivo en un objeto 
// const path = require('node:path');
// const objPath= path.parse(__filename)
// console.log(objPath);
// console.log(objPath.name);

//MODULO OS (OPERATING SYSTEM)
// Trae informacion del sistema
// const os = require('node:os');

// var memoriaLibre= os.freemem();
// var memoriaTotal= os.totalmem();

// console.log(`Memoria libre: ${memoriaLibre} `);
// console.log(`Memoria Total: ${memoriaTotal} `);
// MODULO FILE SYSTEM-------------------------------------------------------
// modulo para buscar entre carpetas
// const fs= require('fs')
// const archivos = fs.readdirSync('./')
// console.log(archivos);
// utilizado callback 
// fs.readdir('./',function(err,files){
//   if(err) console.log('Error',err);
//   else console.log('Resultado',files);
// })

// MODULO DE EVENTOS 

// const eventEmitter = require('events');

// const emitter= new eventEmitter()

// REGISTRAR EL LISTENER
// emitter.on('mensajeLoger',(arg) => {
//   console.log('Listener llamado...',arg);
// })
// REGISTRAR EL EVENTO
//emitter.emit('mensajeLoger',{id:1,url:'hhtp:/prueba.com'})

// MODULO HTTP 1---------------------------------------
// const http = require('http');

// const server = http.createServer();

// server.on('connection',(puerto) => {
//     console.log('Nueva conexion...',);
//   })
// server.listen(3000)
// console.log('Servidor escuchando en el puerto 3000...');


// MODULO HTTP 2---------------------------------------
const http = require('http');

const server = http.createServer((req,res) =>{
  if(req.url === '/'){
      res.write('Hola mundo')
      res.end();
  }
  if(req.url === '/api/producto'){
    res.write(JSON.stringify(['mouse','teclado','parlante']))
    res.end();
}
});

server.on('connection',(puerto) => {
    console.log('Nueva conexion...',);
  })
server.listen(3000)
console.log('Servidor escuchando en el puerto 3000...');


