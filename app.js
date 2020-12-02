const express = require('express');
const bodyParse = require("body-parser");
const add_ins = require("./routes/add_ins");

const app = express ();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

// router

app.use("/add_ins",add_ins);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message =  error.message;
    const data = error.data;
    res.status(status).json({message,data});
}
);


module.exports = app;