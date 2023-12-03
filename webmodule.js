var http = require('http');

http.createServer((req, res)=>{

  res.write("Yash Nikam"); 
  res.end(); 
}).listen(8080);