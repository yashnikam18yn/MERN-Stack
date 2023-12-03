var events = require('events');
const { connected } = require('process');
var eventEmitter = new events.EventEmitter();

var handler =function connected(){
    console.log("Ronald");
    eventEmitter.emit("Goal!");
}

eventEmitter.on('yash',handler);

eventEmitter.on("Goal!",()=>{
    console.log("Messi");
});

eventEmitter.emit('yash');

console.log("last Portugal Win");