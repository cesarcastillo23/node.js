// Serie fibonacci con creacion de archivo txt
// const fs= require('fs');
// const crearSerie=(cantidad)=>{
// return new Promise((resolve,reject)=>{
//     let fibo= 1;
//     let fibo2= 1;
//     let serie='';
//     serie +=`${fibo}\n`;
    
//     for (let i=2;i<=cantidad;i++){
//       serie+=`${fibo2}\n`
//       fibo2 = fibo + fibo2;
//       fibo = fibo2 - fibo;
      
//     }
    
//     fs.writeFile('fibonacci.txt', serie, (err) => {
//       if (err)
//         reject('Error al crear el archivo') ;
//       else
//         resolve('El archivo fue creado con exito');
//     });
//   })
// }
// module.exports={
//   crearSerie
// }

// Serie fibonacci con creacion de archivo txt
const fs= require('fs');
const crearSerie=(cantidad)=>{
return new Promise((resolve,reject)=>{
    let fibo= 1;
    let fibo2= 1;
    let serie='';
    serie +=`${fibo}\n`;
    
    for (let i=2;i<=cantidad;i++){
      serie+=`${fibo2}\n`
      fibo2 = fibo + fibo2;
      fibo = fibo2 - fibo;
      
    }
    
    fs.writeFile('fibonacci.txt', serie, (err) => {
      if (err)
        reject('Error al crear el archivo') ;
      else
        resolve('El archivo fue creado con exito');
    });
  })
}
module.exports={
  crearSerie
}