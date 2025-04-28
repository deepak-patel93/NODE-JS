const { error } = require("console");
const path=require('path')
const fs=require("fs/promises");
const fileName="file1.txt";
const filepath=path.join(__dirname,fileName);
const writeData=async()=>{
    try{
        let done=await fs.writeFile(filepath,"The data is written","utf-8")
        console.log("written successfully");
        
    }
    catch(error){
        console.log(error);
        
    }
}
writeData()
const readData=async()=>{
    try{
    let data= await fs.readFile(filepath,"utf-8")
    console.log(data);
    }
    catch(error){
        console.log(error);
        
    }    
}
readData()
const upadateData=async()=>{
    try{
        let update=await fs.appendFile(filepath,"\nThis is updated data","utf-8")
        console.log("updated successfully");
        
    }
    catch(error){
        console.log(error);
        
    }
}
upadateData()
const deleteData=async()=>{
    try {
    let deleted=await fs.unlink(filepath);
    console.log("Deleted File Successfully");      
    } 
    catch (error) {
        console.log(Error); 
    }
}
deleteData()


