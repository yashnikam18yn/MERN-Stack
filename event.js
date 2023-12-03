var events = require('events');

var eventEmitter = new events.EventEmitter();

var handler =function rajkesar(){
    console.log("King CR7");
    eventEmitter.emit("Goal!");
}

eventEmitter.on('yash',handler);

eventEmitter.on("Goal!",()=>{
    console.log("Messi");
});

eventEmitter.emit('yash');
console.log("last Portugal Win");
