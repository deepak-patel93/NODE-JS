const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("I am deepak kumar patel lets go anywhere")
        res.end();
    }
   
    if(req.url=="/contact"){
        res.setHeader("Content-Type","text/html")
        res.write(" <h1> My contact n0 is 9304116430 modified </h1>")
        res.end();
    }
    
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Listening on PORT:${PORT}`);
    
})
