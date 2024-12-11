const express = require("express");

const app=express();

app.use((req,res,next)=>{
    console.log("Middleware is called");
    next();
})

app.get("/",(req,res)=>{
    console.log("control reached get req");
    res.end();
})

app.listen(3000,()=>{
    console.log("Running on 3000")
})