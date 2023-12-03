var fs = require('fs');

fs.unlink('new.txt',(err)=>{
    console.log(err);
    return;
});
