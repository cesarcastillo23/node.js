// FUNCIONES MIDDLEWARE
function log (req,res,next){
  console.log('Logging...');
  next()
}
module.exports=log
// /////////////////////////////////////////////////////////
//   //URLENCODED
//   let body=req.body;
//   console.log(body.nombre);
//   res.json({
//     body
//   })




////////////////////////////////////////////////////////////