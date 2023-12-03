var fs = require("fs");

var readerStream = fs.createReadStream('new.txt');
var writerStream = fs.createWriteStream('data.txt');

readerStream.pipe(writerStream);
console.log("Program Ended.");
