const fs=require("fs");
const path=require("path");
const filename="file1.txt";
//WRITE SYNCHRONIOUS WAY

const filepath=path.join(__dirname,filename);
const dat=fs.writeFileSync(filepath,"Deepak kukmar patel updated","utf8");
// console.log(filepath);


//READ SYNCHRONIOUS WAY
// const readData=fs.readFileSync(filepath,"utf-8");
// console.log(readData);

// UPDATED FILE USING SYNCUPDATE
// const updated=fs.appendFileSync(filepath,"\nDeepak kumar upadated","utf-8");



//DELETE  A FILE
// const deleted=fs.unlinkSync(filepath);



 



