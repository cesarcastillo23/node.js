const mongoose =require('mongoose')

// CREAR CONEXION CON LA BASE DE DATOS 
mongoose.connect('mongodb+srv://cesarcastillob23:castle235@cluster0.3fpdhgu.mongodb.net/prueba')
  .then(()=> console.log('Conectado a mongoDB...'))
  .catch(err=>console.log('No se logro establecer la conexion',err))

const cursoSchema= new mongoose.Schema({
  nombre:String,
  autor : String,
  etiquetas : [String],
  fecha : {type : Date,default:Date.now},
  publicado : Boolean
})

const Curso=mongoose.model('Curso',cursoSchema);

// GUARDAR UN DOCUMENTO 
async function crearCurso(){
  const curso= new Curso({
    nombre:'Node JS desde Cero',
    autor:'Alexander',
    etiquetas:['Desarrollo web','Back-end'],
    publicado:true
  });
  
  const resultado = await curso.save();
  console.log(resultado); 
}
//crearCurso()

//CONSULTA DE DOCUMENTOS 

// async function listarCursos(){
//   const curso = await Curso.find()
//   .limit(10)
//   .sort({autor:-1})
//   .select({nombre:1,etiquetas:1})
//   console.log(curso);
// }
// listarCursos()

// OPERADORES DE COMPARACION
// async function listarCursos(){
//eq(equal,igual)
//ne(not equal, no igual)
// gt (greater than , mayor que )
  //gte (greater than or equal to , mayor o igual que )
  // lt (less than , menos que)
  // lte (less than or equal to , menor o igual que )
  // in 
  // nin (not in)
//   const curso = await Curso
//   .find({precio:{$gte:10,$lte:30}})
//   .find({precio:{$in:[10,15,20]}})
  
//   .limit(10)
//   .sort({autor:-1})
//   .select({nombre:1,etiquetas:1})
//   console.log(curso);
// }
// listarCursos()


// OPERADORES LOGICOS
//eq(equal,igual)
//ne(not equal, no igual)
// gt (greater than , mayor que )
//gte (greater than or equal to , mayor o igual que )
// lt (less than , menos que)
// lte (less than or equal to , menor o igual que )
// in 
// nin (not in)
// OR 
// AND 

// async function listarCursos(){

// const curso = await Curso
  // .find({precio:{$gte:10,$lte:30}})
  // .find({precio:{$in:[10,15,20]}})
  //.and([{autor:'Grover'},{publicado:true}])
  // Empiece con la palabra que se le indique 
  //.find({autor:/^Gro/})
  // Cuando terminecon la palabra que se le indique 
  //.find({autor:/der$/})

  // Cuando un campo tiene un contenido especifico
// .find({autor:/.*ro.*/})

//   .limit(10)
//   .sort({autor:-1})
//   .select({autor:1 ,nombre:1,etiquetas:1})
//   console.log(curso);
// }
// listarCursos()


// async function listarCursos(){
  
//   const numeroPage=2
//   const sizePage=10;
//   // api/cursos?numeroPage=4&sizePage=10
// const curso = await Curso
//  .find({autor:/.*Ale.*/})
// .skip((numeroPage-1)*sizePage)
//   .limit(sizePage)
//   .sort({autor:-1})
//   .select({autor:1 ,nombre:1,etiquetas:1})
//   console.log(curso);
// }
//listarCursos();


//ACTUALIZACION DE DOCUMENTOS 
// async function actualizarCuros(id){
//     const curso= await Curso.findById(id)
//     if(!curso) {
//       console.log('Curso no existe');
//       return;
//     }
    // curso.publicado=false
    // curso.autor='Grover Vasquez';

    // curso.set({
    //   publicado:false,
    //   autor:'Grover Vasquez'
    // })
  //   const resultado=await curso.save();
  //   console.log(resultado);
  // }
  //actualizarCuros('6470257b07b4afe09234a465')

//ACTUALIZACION DE DOCUMENTOS METODO 2
// async function actualizarCuros(id){
//     const curso= await Curso.findById(id)
//     if(!curso) {
//       console.log('Curso no existe');
//       return;
//     }
//     // curso.publicado=false
//     // curso.autor='Grover Vasquez';

//     const resultado=await Curso.updateOne({_id:id},{$set:{
//       autor:'Carlos',
//       publicado:true
//     }});
//     console.log(resultado);
//   }
//   actualizarCuros('646ff09f58ea6206b834c58a')

//METODO findByIdAndUpdate
async function actualizarCuros(id){
    const cursos= await Curso.findById(id)
    if(!cursos) {
      console.log('Curso no existe');
      return;
    }
    const resultado=await Curso.findByIdAndUpdate(id,{$set:{
      autor:'Luis Castillo',
      publicado:true
    }
  },{new:true});
    console.log(resultado);
  }
  //actualizarCuros('646ff09f58ea6206b834c58a')

  async function eliminarCurso(id){
    //const result= await Curso.deleteOne({_id:id});
    const result= await Curso.findByIdAndRemove(id);
    console.log(result);

  }
  eliminarCurso('647145605aedf2925e2a4524')