const express=require('express');
const app = express();



const PORT = 8000; 
  
app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome Yash Nikam"); 
});

app.get('/home',(req,res)=>{
  res.status(200);
  res.send("this is an home page");  
});

app.get('/about',(req,res)=>{
    res.status(200);
    res.send("About Page");
});


app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running on port "+ PORT) 
    else 
        console.log("server error", error); 
    } 
); 

