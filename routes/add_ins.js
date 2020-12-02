const express  = require("express");
const {body}  = require("express-validator");
const Route = express.Router();
const institucion_contro = require("../controllers/institucion_contro");


Route.post(
    "/inst",
    [
     body("id_ins")
     .exists()
     .withMessage("EL VALOR DE id ES REQUERIDO")
     .matches(/[0-9]+$/)   
     .withMessage("EL VALOR DE id DEBE SER NUMERICO")
     .trim()
     .escape(),
     body("nombre_ins")
     .exists()
     .withMessage("el nombre de la institucion se requiere")
     .matches(/[\w\d\s]+$/)
     .withMessage("no se reconocio un caracter")
    ],institucion_contro.inst);

    Route.post(
        "/est",
        [
         body("id_est")
         .exists()
         .withMessage("EL VALOR DE id ES REQUERIDO")
         .matches(/[0-9]+$/)   
         .withMessage("EL VALOR DE id DEBE SER NUMERICO")
         .trim()
         .escape(),
         body("nombre_est")
         .exists()
         .withMessage("el nombre del estudiantes es requerido")
         .matches(/[\w\s]+$/)
         .withMessage("no se reconocio un caracter")
         .trim()
         .escape(),
         body("apellido_est")
         .exists()
         .withMessage("el apellido del estudiante es requerido")
         .matches(/[\w\s]+$/)
         .withMessage("no se reconocio un caracter")
         .trim()
         .escape(),
         body("edad_est")
         .exists()
         .withMessage("EL VALOR DE id ES REQUERIDO")
         .matches(/[0-9]+$/)   
         .withMessage("EL VALOR DE la edad del estudiantes")
         .trim()
         .escape()
         .withMessage("no se reconocio un caracter")
         .trim()
         .escape(),
         body("semestre_est")
         .exists()
         .withMessage("el semestre del estudiantes")
         .matches(/[\w\d\s]+$/)
         .withMessage("no se reconocio un caracter")
         .trim()
         .escape(),
         body("INSTITUCION_id_ins")
         .exists()
         .withMessage("EL VALOR DE id ES REQUERIDO")
         .matches(/[0-9]+$/)   
         .withMessage("EL VALOR DE id DEBE SER NUMERICO")
         .trim()
         .escape(),
         body("correo_est")
         .exists()
         .withMessage("EL correo es requerido")
         .matches(/[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/)   
         .withMessage("no cumplio con los requisistos")
         .trim()
         .escape(),
        ],institucion_contro.est);


    module.exports = Route;