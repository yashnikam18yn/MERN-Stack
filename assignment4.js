var http = require('http');

http.createServer((req, res)=>{
  res.write("OM KOLI"); 
  res.end(); 
}).listen(8080);