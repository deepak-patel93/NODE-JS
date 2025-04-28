import { log } from "console";
import readLine from "readline";
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todos = [];

const showMenu = () => {
  console.log("\n 1.Add task");
  console.log(" 2.show task");
  console.log(" 3.exit");
  rl.question("choose any option ", handle);
};
const handle = (option) => {
    if (option === "1"){
      rl.question("Enter ur task", (task) =>{
      todos.push(task);
      console.log("Task entered:", task);
      showMenu();
       })
    }
    if(option==="2") {
        console.log("your todos list are");
        todos.forEach((index,data) => {
            console.log(`${index+1}.${data}`);
        });
        showMenu();
    }
    if(option==="3"){
        console.log("GoodBye");
        rl.close();
    }
    else{
        console.log("please choose a valid Option");
        showMenu();
    }
        

    
}
showMenu();

