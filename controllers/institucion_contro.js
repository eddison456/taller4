const {validationResult} = require("express-validator");
const pool= require('../config/db');

exports.inst = async (req,res,next) =>{
   const errors = validationResult(req);
   console.log("entre")
   if(!errors.isEmpty()){
    
       const error = new Error("validation fails......");
       error.statusCode = 422;
       error.data=errors.array();
       throw error;
           }
   
    try{
       const id_ins = +req.body.id_ins;
       const nombre_ins = req.body.nombre_ins;
       console.log("nueva institucion", nombre_ins ," con id de" , id_ins);
       
       const newInstitucion ={
          nombre_ins
       }
       await pool.query( 'insert into institucion set ?' ,[newInstitucion])


    }catch(e){
       console.log("segunda parte");
       const error = new Error("validation failsssss");
       error.statusCode =500;
       error.data=errors.array();
       throw error;
      }
   };

   exports.est = async (req,res,next) =>{
      const errors = validationResult(req);
      console.log("entre")
      if(!errors.isEmpty()){
       
          const error = new Error("validation fails...... est");
          error.statusCode = 422;
          error.data=errors.array();
          throw error;
              }
      
       try{

            const id_est = +req.body. id_est;
            const nombre_est = req.body.nombre_est;
            const apellido_est = req.body.apellido_est;
            const edad_est =+req.body.edad_est;
            const semestre_est = req.body.semestre_est;
            const INSTITUCION_id_ins =+req.body.INSTITUCION_id_ins;
            const correo_est =req.body.correo_est;


            console.log("estudiante registrado universitario"," nombre :" ,nombre_est ," apellido :" , apellido_est, " edad : " ,edad_est, " semestre :" , semestre_est , " correo :" , correo_est , " INSTITUCION : ", INSTITUCION_id_ins);
             
            const newEstudiantes ={
               nombre_est,
               apellido_est,
               edad_est,
               semestre_est,
               INSTITUCION_id_ins,
               correo_est
            }
 
            await pool.query( 'insert into estudiantes set ?' ,[newEstudiantes]);
   
       }catch(e){
          console.log("segunda parte");
          const error = new Error("validation failsssss");
          error.statusCode =500;
          error.data=errors.array();
          throw error;
         }
      };