// const { error } = require("console");
const fs=require("fs");
const path=require("path");
const fileName1="file1.txt";
const filepath=path.join(__dirname,fileName1);
fs.writeFile(filepath,"This is intial data","utf-8",(err)=>{
   if(err)console.error(err)
    // else console.log("file has been saved");
    
});
fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err)console.log(err);
    // console.log(data);
    
    
})

// UPADATE THE FILE
// fs.appendFile(
//     filepath,
//     "\nThis is updated initial data",
//     "utf-8",
//     (err)=>{
//         console.log(err);
//         console.log("\nData updated");
        
        
//     }

// )

// DELETED A FILE 
fs.unlink(filepath,(err)=>{
    if(err)console.log(err);
    else console.log(
        "File successfully deleted"
    );
    
})
