const fs=require('fs');
const path=require("path");
const fileName="file.txt";
const filepath=path.join(__dirname,fileName);
fs.promises.writeFile(filepath,"This is intial data","utf-8").then(()=>console.log("Written Successfully"))
.then((error)=>console.log(error))


fs.promises.readFile(filepath,"utf-8").then((data)=>console.log(data))
.then((err)=>console.error(err))


// fs.promises.appendFile(filepath,
//     "\n This is updated of intial data",
//     "utf-8")
//     .then(()=>console.log("Data updated"))
//     .then((errr)=>console.error(errr))


fs.promises.unlink(filepath).then(()=>console.log("File deleted successfully")
).then((err)=>console.error(err)
)


