const EventEmitter=require('events');
const { emit } = require('process');
const emitter=new EventEmitter();
//  with static parameter
// emitter.on("greet",(obj)=>console.log(`Hello ${obj.name} your password is ${obj.pass} and ur domain is ${obj.prof}`));
// emitter.emit("greet",{name:"deepak",pass:12345,prof:"web Development"});

// const obj{
//     name:"0",
//     Course:"0"
//     Id:0
// }
emitter.on("name",(name)=>console.log(`Hello ${name}`)
)
emitter.on("courser",(courser)=>console.log(`your are enrolled in ${courser}`))
emitter.on("id",(id)=>console.log(id));
emitter.emit("name","deepak");
emitter.emit("courser","IT")
emitter.emit("id",38)