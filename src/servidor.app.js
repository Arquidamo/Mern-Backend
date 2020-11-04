const express=require('express');


//inicializacion
const app=express();

//settings
app.set('port',process.env.PORT||1100);

//exports
module.exports=app;