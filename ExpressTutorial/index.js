const express=require("express");
const server=express();
server.get('/',(req,res)=>{
    res.send("Hello World");
})

server.get('/home',(req,res)=>{
    res.send(" Your are on Home page");
})

server.get('/about',(req,res)=>{
    res.send("This is about page");
})

const PORT=3030;
server.listen(PORT,()=>{
    console.log(`Running on localhost:${PORT}`);
    
})